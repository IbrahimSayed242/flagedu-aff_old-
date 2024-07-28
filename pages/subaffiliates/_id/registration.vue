<template>
  <div>
    <div class="filters">
      <div class="title">Registration Reports</div>
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
              name: 'subaffiliates-id-comission',
              params: { id: userDetail.id },
            }"
            >Comission Rules</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="filters">
      <div class="row1">
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
        <div class="show-creative">
          <a href="#" @click.prevent="handleRunReport">Run Report</a>
        </div>
      </div>
      <div class="row2">
        <div class="">
          <input type="text" v-model="afp" placeholder="AFP" />
        </div>
        <div class="">
          <input
            type="text"
            v-model="country"
            placeholder="ISO 2 Letter Country Code"
          />
        </div>
      </div>
    </div>
    <div class="main-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Reg. Date</th>
            <th scope="col">Brand</th>
            <th scope="col">AFP</th>
            <th scope="col">Country</th>
            <th scope="col">FTD</th>
            <th scope="col">FTD Date</th>
            <th scope="col">Account ID</th>
            <th scope="col">Commission</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in analytics" :key="'analytics_' + idx">
            <td>{{ $dayjs(item.registration_date).format("YYYY-MM-DD") }}</td>
            <td>{{ item.brand ? item.brand.name : "" }}</td>
            <td>{{ item.afp }}</td>
            <td>{{ item.country ? item.country.alpha_2 : "" }}</td>
            <td>${{ item.first_deposit }}</td>
            <td>{{ $dayjs(item.first_deposit_date).format("YYYY-MM-DD") }}</td>
            <td>
              {{ item.account_id }}
            </td>
            <td>${{ item.commission }}</td>
          </tr>

          <tr>
            <th scope="row">Total ( {{ mediaTotal.registration }} )</th>
            <td></td>
            <td></td>
            <td></td>
            <td>${{ mediaTotal.first_deposit }}</td>
            <td></td>
            <td></td>
            <td>${{ mediaTotal.commission }}</td>
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
import FilterBrand from "@/components/filters/filter-brand";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import {
  NS_ANALYTICS,
  NS_COMMON,
  NS_SUBAFFILIATE,
} from "@/utils/store/namespace.names";
import {
  FETCH_ADMIN_REGISTRATION_REPORTS,
  FETCH_ADMIN_REGISTRATION_TOTAL,
  FETCH_SUBAFFILIATE_USER_DETAIL,
} from "@/utils/store/action.names";
import { GET_BRANDS } from "@/utils/store/getter.names";
import { namespaced, deepCopy } from "@/utils/utils";

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
  name: "Registration",
  components: {
    FilterBrand,
    DatePicker,
  },
})
export default class Registration extends Vue {
  @Action(namespaced(NS_ANALYTICS, FETCH_ADMIN_REGISTRATION_REPORTS))
  fetchAdminRegistrationReports;
  @Action(namespaced(NS_ANALYTICS, FETCH_ADMIN_REGISTRATION_TOTAL))
  fetchAdminRegistrationTotal;

  @Getter(namespaced(NS_COMMON, GET_BRANDS)) brands;

  showRegisteredUserModal = false;
  selectedAnalyticsId = null;

  @Watch("$route", { deep: true })
  handleRouteChange(val, oldVal) {
    this.handleFetchReports();
  }

  handleRunReport() {
    var query = deepCopy(this.$route.query);
    query["brand"] = this.brand;
    query["dateFrom"] = this.dateFrom;
    query["dateTo"] = this.dateTo;
    query["afp"] = this.afp;
    query["country"] = this.country;
    this.$router.push({ query: query });
  }

  async handleFetchReports() {
    this.limit = this.$route.query.limit ? this.$route.query.limit : 20;
    this.offset = this.$route.query.offset ? this.$route.query.offset : 0;

    var params = {
      user_id: this.userDetail.id,
      start_date: this.dateFrom,
      end_date: this.dateTo,
      brand: this.brand,
      afp: this.afp,
      country: this.country,
      limit: this.limit,
      offset: this.offset,
    };
    this.analytics = [];

    await this.fetchAdminRegistrationReports(params).then((data) => {
      this.analytics = data.results;
      this.count = data.count;
    });

    await this.fetchAdminRegistrationTotal(params).then((data) => {
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
    var userId = route.params.id;

    var dateFrom = route.query.dateFrom
      ? route.query.dateFrom
      : $dayjs().subtract(7, "day").format("YYYY-MM-DD");
    var dateTo = route.query.dateTo
      ? route.query.dateTo
      : $dayjs().add(1, "day").format("YYYY-MM-DD");
    var brand = route.query.brand ? route.query.brand : "";
    var afp = route.query.afp ? route.query.afp : "";
    var country = route.query.country ? route.query.country : "";

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
      user_id: userId,
      start_date: dateFrom,
      end_date: dateTo,
      brand: brand,
      afp: afp,
      country: country,
      limit: limit,
      offset: offset,
    };

    const getAnalytics = await store
      .dispatch(
        namespaced(NS_ANALYTICS, FETCH_ADMIN_REGISTRATION_REPORTS),
        params
      )
      .then((data) => {
        analytics = data.results;
        count = data.count;
      })
      .catch((e) => {
        console.log(e);
      });

    const getTotal = await store
      .dispatch(
        namespaced(NS_ANALYTICS, FETCH_ADMIN_REGISTRATION_TOTAL),
        params
      )
      .then((data) => {
        mediaTotal = data;
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
      analytics,
      dateFrom,
      dateTo,
      brand,
      afp,
      country,
      mediaTotal,
      count,
      page,
      limit,
      offset,
      paginationSteps,
      totalPageCount,
      userDetail,
    };
  }

  handleBrandClose(data) {
    this.brand = data;
    var query = deepCopy(this.$route.query);
    query["brand"] = this.brand;
    this.$router.push({ query: query });
  }

  hideModal() {
    this.showRegisteredUserModal = false;
  }
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  min-height: 60px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .row1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  .row2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    input {
      height: 30px;
      border: #ccc;
      padding-left: 15px;
    }
  }
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
  height: auto;
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
</style>
