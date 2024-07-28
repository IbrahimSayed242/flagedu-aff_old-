<template>
  <div>
    <div class="filters">
      <div class="date-chooser">
        <div class="search-input">
          <input
            v-model="searchText"
            v-debounce:300="debounceSearch"
            type="text"
            placeholder="Search user"
          />
        </div>
      </div>
      <div class="show-creative">
        <a href="#" @click.prevent="handleUserSearch">Search</a>
      </div>
    </div>
    <div class="main-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Affiliate ID</th>
            <th scope="col">Full name</th>
            <th
              scope="col"
              v-if="getProfile.is_superuser == true || getProfile.is_staff"
            >
              Email
            </th>
            <th scope="col">Country</th>
            <th scope="col">Join date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="handleUserDetailPage(item)"
            v-for="(item, idx) in users"
            :key="'users_' + idx"
          >
            <th scope="row">{{ item.affiliate_id }}</th>
            <td>{{ item.full_name }}</td>
            <td v-if="getProfile.is_superuser == true || getProfile.is_staff">
              {{ item.email }}
            </td>
            <td>{{ item.country ? item.country.name : "" }}</td>
            <td>{{ $dayjs(item.creation_time).format("YYYY-MM-DD") }}</td>
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
import { NS_SUBAFFILIATE, NS_USER } from "../../utils/store/namespace.names";
import { FETCH_SUBAFFILIATES } from "../../utils/store/action.names";
import { GET_PROFILE } from "../../utils/store/getter.names";
import { namespaced, deepCopy } from "../../utils/utils";

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
  name: "Subaffiliates",
  components: {},
})
export default class Subaffiliates extends Vue {
  @Action(namespaced(NS_SUBAFFILIATE, FETCH_SUBAFFILIATES)) fetchSubaffiliates;

  @Getter(namespaced(NS_USER, GET_PROFILE)) getProfile;

  debounceSearch() {
    var query = deepCopy(this.$route.query);
    query["searchText"] = this.searchText;
    delete query["limit"];
    delete query["offset"];
    this.$router.push({ query: query });
  }

  @Watch("$route", { deep: true })
  handleRouteChange(val, oldVal) {
    this.handleFetcUsers();
  }

  handleUserDetailPage(item) {
    this.$router.push({ name: "subaffiliates-id", params: { id: item.id } });
  }

  async handleFetcUsers() {
    this.limit = this.$route.query.limit ? this.$route.query.limit : 20;
    this.offset = this.$route.query.offset ? this.$route.query.offset : 0;

    var params = {
      limit: this.limit,
      offset: this.offset,
    };

    if (this.searchText) {
      params["searchText"] = this.searchText;
    }

    this.users = [];

    await this.fetchSubaffiliates(params).then((data) => {
      this.users = data.results;
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
    var searchText = route.query.searchText ? route.query.searchText : "";
    var users = [];

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

    if (searchText) {
      params["searchText"] = searchText;
    }

    const getUsers = await store
      .dispatch(namespaced(NS_SUBAFFILIATE, FETCH_SUBAFFILIATES), params)
      .then((data) => {
        users = data.results;
        count = data.count;
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
      users,
      count,
      page,
      limit,
      offset,
      paginationSteps,
      totalPageCount,
      searchText,
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
  .date-chooser {
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    .search-input {
      input {
        height: 40px;
        width: 250px;
        border: 1px solid grey;
        padding-left: 10px;
        color: black;
        border-radius: 8px;
      }
    }
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

tr {
  cursor: pointer;
}
</style>
