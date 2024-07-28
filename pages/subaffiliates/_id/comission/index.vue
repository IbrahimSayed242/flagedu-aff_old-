<template>
  <div>
    <div class="filters">
      <div class="title">Comission Rules</div>
    </div>
    <div class="user-detail">
      <div class="items">
        <div class="item">
          <label>Affilitat ID: </label>
          <div>{{ userDetail.affiliate_id }}</div>
        </div>
        <div class="item">
          <label>Email: </label>
          <div>{{ userDetail.email }}</div>
        </div>
        <div class="item">
          <label>Country: </label>
          <div>{{ userDetail.country ? userDetail.country.name : "" }}</div>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <nuxt-link
            :to="{ name: 'subaffiliates-id', params: { id: userDetail.id } }"
            >Back</nuxt-link
          >
        </div>
        <div class="item">
          <nuxt-link
            :to="{
              name: 'subaffiliates-id-media',
              params: { id: userDetail.id },
            }"
            >Media Reports</nuxt-link
          >
        </div>
        <div class="item">
          <nuxt-link
            :to="{
              name: 'subaffiliates-id-registration',
              params: { id: userDetail.id },
            }"
            >Registration Reports</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="filters">
      <div class="show-creative">
        <a href="#" @click.prevent="openModal">Add New Rules</a>
      </div>
    </div>
    <div class="main-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">FTD Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in comissions" :key="'comissions_' + idx">
            <td>{{ item.brand_detail ? item.brand_detail.name : "" }}</td>
            <td>${{ item.ftd_amount }}</td>
            <td class="btns">
              <a href="#" @click.prevent="handleEdit(item)">Edit</a>
              <nuxt-link
                :to="{
                  name: 'subaffiliates-id-comission-comissionId',
                  params: { id: userDetail.id, comissionId: item.id },
                }"
                >Details</nuxt-link
              >
              <a style="color: red" href="#" @click.prevent="handleDelete(item)"
                >Delete</a
              >
            </td>
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
    <ComissionRuleAddModal
      v-if="showComissionRuleModal"
      :modalOpen="showComissionRuleModal"
      :user="userDetail.id"
      :data="editData"
      @hideModal="hideModal"
    />
    <YesNoModal
      v-if="showYesNoModal"
      :modalOpen="showYesNoModal"
      @hideModal="hideYesNoModal"
    />
  </div>
</template>

<script>
import { Component, Vue, Action, Getter, Watch } from "nuxt-property-decorator";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import {
  NS_ANALYTICS,
  NS_COMMON,
  NS_USER,
  NS_SUBAFFILIATE,
} from "@/utils/store/namespace.names";
import {
  FETCH_COMISSION_RULES,
  FETCH_SUBAFFILIATE_USER_DETAIL,
  DELETE_COMISSION_RULE,
} from "@/utils/store/action.names";
import { GET_BRANDS } from "@/utils/store/getter.names";
import { namespaced, deepCopy } from "@/utils/utils";
import ComissionRuleAddModal from "@/components/modals/ComissionRuleAddModal.vue";
import YesNoModal from "@/components/modals/YesNoModal.vue";

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
  name: "ComissionRule",
  components: {
    ComissionRuleAddModal,
    YesNoModal,
  },
})
export default class ComissionRule extends Vue {
  @Action(namespaced(NS_USER, FETCH_COMISSION_RULES)) fetchComissionRules;
  @Action(namespaced(NS_USER, DELETE_COMISSION_RULE)) deleteComissionRule;

  showComissionRuleModal = false;
  showYesNoModal = false;
  editData = null;

  hideModal(refresh = false) {
    this.showComissionRuleModal = false;
    if (refresh == true) {
      this.handleFetchReports();
    }
  }

  hideYesNoModal(status) {
    this.showYesNoModal = false;
    if (status == true) {
      this.hanldeDelete();
    } else {
      this.editData = null;
    }
  }

  openModal() {
    this.editData = null;
    this.showComissionRuleModal = true;
  }

  handleEdit(item) {
    this.editData = item;
    this.showComissionRuleModal = true;
  }

  handleDelete(item) {
    this.editData = item;
    this.showYesNoModal = true;
  }

  @Watch("$route", { deep: true })
  handleRouteChange(val, oldVal) {
    this.handleFetchReports();
  }

  hanldeDelete() {
    this.deleteComissionRule(this.editData.id).then((d) => {
      this.$toast.success("Deleted successfully!");
      this.handleFetchReports();
    });
  }

  async handleFetchReports() {
    this.limit = this.$route.query.limit ? this.$route.query.limit : 20;
    this.offset = this.$route.query.offset ? this.$route.query.offset : 0;
    var params = {
      user: this.userDetail.id,
      limit: this.limit,
      offset: this.offset,
    };
    this.comissions = [];
    await this.fetchComissionRules(params).then((data) => {
      this.comissions = data.results;
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
    var userId = route.params.id;

    var comissions = [];

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
      user: userId,
      limit: limit,
      offset: offset,
    };

    const getComissions = await store
      .dispatch(namespaced(NS_USER, FETCH_COMISSION_RULES), params)
      .then((data) => {
        comissions = data.results;
        count = data.count;
      })
      .catch((e) => {
        console.log(e);
      });

    var userDetail = null;
    const getUserDetail = await store
      .dispatch(
        namespaced(NS_SUBAFFILIATE, FETCH_SUBAFFILIATE_USER_DETAIL),
        userId
      )
      .then((d) => {
        userDetail = d;
      });

    var [totalPageCount, paginationSteps] = calculatePage(
      count,
      limit,
      page,
      totalPageCount,
      paginationSteps
    );

    return {
      comissions,
      count,
      page,
      limit,
      offset,
      paginationSteps,
      totalPageCount,
      userDetail,
    };
  }
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .date-chooser {
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
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
.user-detail {
  width: 100%;
  border: 1px solid red;
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 15px;
  .items {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .item {
      display: flex;
      gap: 20px;
      label {
        font-weight: 600;
        width: 120px;
      }
      a {
        color: red;
        font-size: 14px;
        text-decoration: underline;
      }
    }
  }
}
.btns {
  display: flex;
  gap: 25px;
  a {
    color: black;
  }
}
</style>
