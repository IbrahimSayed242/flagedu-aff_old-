<template>
  <div>
    <div class="filters">
      <div class="date-chooser">
        <date-picker
          v-model="dateFrom"
          format="YYYY-MM-DD"
          valueType="format"
        ></date-picker>
        <i class="bi bi-arrow-down-up"></i>
        <date-picker
          v-model="dateTo"
          format="YYYY-MM-DD"
          valueType="format"
        ></date-picker>
      </div>
      <FilterBrand
        :data="brands"
        :brandParam="brand"
        @handleBrandClose="handleBrandClose"
      />
      <!-- <div class="clear-filter">
        <i class="bi bi-x"></i>
        <div class="">Clear filters</div>
      </div> -->
      <div class="show-creative">
        <a href="#" @click.prevent="handleRunReport">Run Report</a>
      </div>
    </div>
    <div class="main-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Created</th>
            <th scope="col">Amount</th>
            <th scope="col">User ID</th>
            <th scope="col">Brand</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in analytics" :key="'analytics_' + idx">
            <th scope="row">
              {{ $dayjs(item.creation_time).format("YYYY-MM-DD") }}
            </th>
            <td>${{ item.commission }}</td>
            <td>{{ item.account_id }}</td>
            <td>{{ item.brand ? item.brand.name : "" }}</td>
          </tr>

          <tr>
            <th scope="row">Total</th>
            <td>${{ mediaTotal.commission }}</td>
            <td></td>
            <td></td>
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
  </div>
</template>

<script>
import { Component, Vue, Action, Getter, Watch } from "nuxt-property-decorator";
import FilterBrand from "../components/filters/filter-brand";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { NS_ANALYTICS, NS_COMMON } from "../utils/store/namespace.names";
import {
  FETCH_EARNING_REPORTS,
  FETCH_EARNING_TOTAL,
} from "../utils/store/action.names";
import { GET_BRANDS } from "../utils/store/getter.names";
import { namespaced, deepCopy } from "../utils/utils";

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
  name: "Earnings",
  components: {
    FilterBrand,
    DatePicker,
  },
})
export default class Earnings extends Vue {
  @Action(namespaced(NS_ANALYTICS, FETCH_EARNING_REPORTS)) fetchEarningReports;
  @Action(namespaced(NS_ANALYTICS, FETCH_EARNING_TOTAL)) fetchEarningTotal;

  @Getter(namespaced(NS_COMMON, GET_BRANDS)) brands;

  @Watch("$route", { deep: true })
  handleRouteChange(val, oldVal) {
    this.handleFetchReports();
  }

  handleRunReport() {
    var query = deepCopy(this.$route.query);
    query["brand"] = this.brand;
    query["dateFrom"] = this.dateFrom;
    query["dateTo"] = this.dateTo;
    this.$router.push({ query: query });
  }

  async handleFetchReports() {
    this.limit = this.$route.query.limit ? this.$route.query.limit : 20;
    this.offset = this.$route.query.offset ? this.$route.query.offset : 0;

    var params = {
      start_date: this.dateFrom,
      end_date: this.dateTo,
      brand: this.brand,
      limit: this.limit,
      offset: this.offset,
    };
    this.analytics = [];

    await this.fetchEarningReports(params).then((data) => {
      this.analytics = data.results;
      this.count = data.count;
    });

    await this.fetchEarningTotal(params).then((data) => {
      this.mediaTotal = data;
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
    var dateFrom = route.query.dateFrom
      ? route.query.dateFrom
      : $dayjs().subtract(7, "day").format("YYYY-MM-DD");
    var dateTo = route.query.dateTo
      ? route.query.dateTo
      : $dayjs().add(1, "day").format("YYYY-MM-DD");
    var brand = route.query.brand ? route.query.brand : "";

    var analytics = [];
    var mediaTotal = {};

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
      start_date: dateFrom,
      end_date: dateTo,
      brand: brand,
      limit: limit,
      offset: offset,
    };

    const getAnalytics = await store
      .dispatch(namespaced(NS_ANALYTICS, FETCH_EARNING_REPORTS), params)
      .then((data) => {
        analytics = data.results;
        count = data.count;
      })
      .catch((e) => {
        console.log(e);
      });

    const getTotal = await store
      .dispatch(namespaced(NS_ANALYTICS, FETCH_EARNING_TOTAL), params)
      .then((data) => {
        mediaTotal = data;
      })
      .catch((e) => {
        console.log(e);
      });

    var [totalPageCount, paginationSteps] = calculatePage(
      count,
      limit,
      page,
      totalPageCount,
      paginationSteps
    );

    return {
      analytics,
      dateFrom,
      dateTo,
      brand,
      mediaTotal,
      count,
      page,
      limit,
      offset,
      paginationSteps,
      totalPageCount,
    };
  }

  handleBrandClose(data) {
    this.brand = data;
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
</style>
