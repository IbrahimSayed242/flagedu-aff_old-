<template>
  <div>
    <div class="filters">
      <div class="date-chooser">Withdraws</div>

      <div class="show-creative">
        <a href="#" @click.prevent="handleModalOpen">Request Withdraw</a>
      </div>
    </div>
    <div class="main-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Last Update</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in withdraws" :key="'withdraws_' + idx">
            <th scope="row">
              {{ $dayjs(item.update_time).format("YYYY-MM-DD") }}
            </th>
            <td>${{ item.amount }}</td>
            <td>{{ transformStatus(item.status) }}</td>
          </tr>
        </tbody>
      </table>

      <div class="pagination" dir="ltr" v-if="paginationSteps.length > 1">
        <a v-if="page != 1" class="item" @click.prevent="handleDecrement">
          <i class="bi bi-caret-left-fill"></i>
        </a>
        <a
          :class="{ active: page == pag, item: true }"
          v-for="(pag, idx) in paginationSteps"
          :key="'pag_' + idx"
          @click.prevent="updatePage(pag)"
        >
          {{ pag }}
        </a>
        <a
          v-if="totalPageCount != page"
          class="item"
          @click.prevent="handleIncreament"
        >
          <i class="bi bi-caret-right-fill"></i>
        </a>
      </div>
    </div>
    <WithdrawRequestModal
      v-if="showWithdrawRequestModal"
      :modalOpen="showWithdrawRequestModal"
      @hideModal="hideModal"
    />
  </div>
</template>

<script>
import { Component, Vue, Action, Getter, Watch } from "nuxt-property-decorator";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { NS_USER } from "../../utils/store/namespace.names";
import {
  FETCH_WITHDRAWS,
  FETCH_PAYMENT_DETAIL,
} from "../../utils/store/action.names";
import { namespaced, deepCopy } from "../../utils/utils";
import WithdrawRequestModal from "../../components/modals/WithdrawRequest.vue";
import { ref } from "vue";

function calculatePage(count, limit, page, totalPageCount, paginationSteps) {
  const totalPage = Math.ceil(count / limit);
  totalPageCount = totalPage;
  if (totalPage > 1) {
    paginationSteps = calculateNext(totalPage, page, paginationSteps);
    paginationSteps = calculatePrev(page, paginationSteps);
  }
  return [totalPageCount, paginationSteps];
}

function calculateNext(totalPage, page, paginationSteps) {
  if (totalPage > 1) {
    var next = page;
    for (var i = 0; i < totalPage; i++) {
      if (i > 3) {
        break;
      }
      if (page < totalPage) {
        next = next + 1;
        if (next > totalPage) {
          break;
        }
        paginationSteps.push(next);
      }
    }
  }
  return paginationSteps;
}

function calculatePrev(page, paginationSteps) {
  if (page > 1) {
    var counter = 0;
    for (var i = page - 1; i > 0; i--) {
      if (counter > 2) {
        break;
      }
      paginationSteps.unshift(i);
      counter += 1;
    }
  }
  return paginationSteps;
}

@Component({
  name: "Withdraws",
  components: {
    DatePicker,
    WithdrawRequestModal,
  },
})
export default class Withdraws extends Vue {
  @Action(namespaced(NS_USER, FETCH_WITHDRAWS)) fetchWithdraws;

  showWithdrawRequestModal = false;

  hideModal(refresh = false) {
    this.showWithdrawRequestModal = false;
    if (refresh == true) {
      this.offset = 0;
      this.handleFetchReports();
    }
  }

  handleModalOpen() {
    if (this.paymentDetail == null) {
      this.$toast.error("Please add payment details first!");
    } else {
      this.showWithdrawRequestModal = true;
    }
  }

  @Watch("$route", { deep: true })
  handleRouteChange(val, oldVal) {
    this.handleFetchReports();
  }

  async handleFetchReports() {
    this.limit = this.$route.query.limit ? this.$route.query.limit : 20;
    this.offset = this.$route.query.offset ? this.$route.query.offset : 0;

    var params = {
      limit: this.limit,
      offset: this.offset,
    };
    this.withdraws = [];

    await this.fetchWithdraws(params).then((data) => {
      this.withdraws = data.results;
      this.count = data.count;
    });

    this.totalPageCount = "";
    this.paginationSteps = [this.page];
    [this.totalPageCount, this.paginationSteps] = calculatePage(
      this.count,
      this.limit,
      this.page,
      this.totalPageCount,
      this.paginationSteps
    );
  }

  handleDecrement() {
    if (this.page > 1) {
      this.page = this.page - 1;
      var query = deepCopy(this.$route.query);
      if (!query.limit) {
        query["limit"] = this.limit;
      }
      query["offset"] = (this.page - 1) * this.limit;

      this.$router.push({ query: query });
    } else {
      this.page = 1;
      var query = deepCopy(this.$route.query);
      if (!query.limit) {
        query["limit"] = this.limit;
      }
      query["offset"] = (this.page - 1) * this.limit;
      this.$router.push({ query: query });
    }
  }

  updatePage(pageNo) {
    this.page = pageNo;
    var query = deepCopy(this.$route.query);
    if (!query.limit) {
      query["limit"] = this.limit;
    }
    query["offset"] = (this.page - 1) * this.limit;
    this.$router.push({ query: query });
  }

  handleIncreament() {
    if (this.page < this.totalPageCount) {
      this.page = this.page + 1;
      var query = deepCopy(this.$route.query);
      if (!query.limit) {
        query["limit"] = this.limit;
      }
      query["offset"] = (this.page - 1) * this.limit;
      this.$router.push({ query: query });
    } else {
      this.page = this.totalPageCount;
      var query = deepCopy(this.$route.query);
      if (!query.limit) {
        query["limit"] = this.limit;
      }
      query["offset"] = (this.page - 1) * this.limit;
      this.$router.push({ query: query });
    }
  }

  async asyncData({ route, $axios, store, error, $dayjs }) {
    var withdraws = [];

    var count = 0;
    var page = 1;
    var limit = route.query.limit ? route.query.limit : 20;
    var offset = route.query.offset ? route.query.offset : 0;
    var totalPageCount = "";

    if (offset != 0) {
      page = Math.ceil(offset / limit) + 1;
    }
    var paginationSteps = [page];

    var params = {
      limit: limit,
      offset: offset,
    };

    const getWithdraws = await store
      .dispatch(namespaced(NS_USER, FETCH_WITHDRAWS), params)
      .then((data) => {
        withdraws = data.results;
        count = data.count;
      })
      .catch((e) => {
        console.log(e);
      });

    var paymentDetail = null;
    const getPaymentDetail = await store
      .dispatch(namespaced(NS_USER, FETCH_PAYMENT_DETAIL))
      .then((data) => {
        paymentDetail = data;
      })
      .catch((e) => {
        paymentDetail = null;
      });

    var [totalPageCount, paginationSteps] = calculatePage(
      count,
      limit,
      page,
      totalPageCount,
      paginationSteps
    );

    return {
      withdraws,
      count,
      page,
      limit,
      offset,
      paginationSteps,
      totalPageCount,
      paymentDetail,
    };
  }

  transformStatus(status) {
    if (status == 0) {
      return "Pending";
    } else if (status == 1) {
      return "Completed";
    } else {
      return "Rejected";
    }
  }
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  .date-chooser {
    font-size: 20px;
    font-weight: 600;
  }
  i {
    font-size: 20px;
  }
  .clear-filter {
    cursor: pointer;
    color: red;
    height: 100%;
    display: flex;
    gap: 1px;
    justify-content: center;
    align-items: center;
  }
  .show-creative {
    a {
      align-items: center;
      background-color: #01aeab;
      border-radius: 8px;
      color: #fff;
      display: flex;
      font-size: 12px;
      font-weight: 700;
      gap: 10px;
      height: 40px;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
.main-content {
  height: 100vh;
  width: 100%;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pagination {
  height: 50px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 100px;
  margin-top: 50px;
  a {
    color: black;
    font-size: 18px;
    font-weight: 500;
    height: 40px;
    width: 40px;
    border: 1px solid #f1f1f1;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  }
}
.active {
  color: black !important;
  background-color: #f1f1f1;
}
</style>
