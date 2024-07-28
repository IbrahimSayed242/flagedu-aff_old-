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
        <a href="#" @click.prevent="handleRunReport">Apply</a>
      </div>
      <div class="stat-items">
        <div class="stat-item">
          <div class="result">{{ summaryData.unique_visitor }}</div>
          <div class="name">Unique Clicks</div>
        </div>
        <div class="stat-item">
          <div class="result">
            {{ summaryData.visit_count ? summaryData.visit_count : 0 }}
          </div>
          <div class="name">Clicks</div>
        </div>
        <div class="stat-item">
          <div class="result">{{ summaryData.registration }}</div>
          <div class="name">Registrations</div>
        </div>
        <div class="stat-item">
          <div class="result">{{ summaryData.ftd }}</div>
          <div class="name">FTD</div>
        </div>
        <div class="stat-item">
          <div class="result">{{ summaryData.qftd }}</div>
          <div class="name">QFTD</div>
        </div>
        <div class="stat-item">
          <div class="result">
            ${{ summaryData.commission ? summaryData.commission : 0 }}
          </div>
          <div class="name">Commissions</div>
        </div>
      </div>
      <div class="graph">
        <DashboardChart :graphData="summaryData.graph" />
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import DashboardChart from "../components/charts/DashboardChart.vue";
import { NS_ANALYTICS } from "../utils/store/namespace.names";
import { FETCH_DASHBOARD_ANALYTICS_SUMMARY } from "../utils/store/action.names";
import { namespaced, deepCopy } from "../utils/utils";

@Component({
  name: "Index",
  components: { DatePicker, DashboardChart },
})
export default class Index extends Vue {
  @Action(namespaced(NS_ANALYTICS, FETCH_DASHBOARD_ANALYTICS_SUMMARY))
  fetchDashboardAnalyticsSummary;

  graphData = [
    { day: "2020-10-01T00:00:00+06:00", total: 1510 },
    { day: "2020-11-01T00:00:00+06:00", total: 9725 },
    { day: "2020-12-01T00:00:00+06:00", total: 6714 },
    { day: "2021-01-01T00:00:00+06:00", total: 5930 },
    { day: "2021-02-01T00:00:00+06:00", total: 1110 },
    { day: "2021-03-01T00:00:00+06:00", total: 3975 },
    { day: "2021-04-01T00:00:00+06:00", total: 7655 },
    { day: "2021-05-01T00:00:00+06:00", total: 5965 },
    { day: "2021-06-01T00:00:00+06:00", total: 8470 },
    { day: "2021-07-01T00:00:00+06:00", total: 1167 },
    { day: "2021-08-01T00:00:00+06:00", total: 12745 },
    { day: "2021-09-01T00:00:00+06:00", total: 11001 },
    { day: "2021-10-01T00:00:00+06:00", total: 15688 },
    { day: "2021-11-01T00:00:00+06:00", total: 6865 },
    { day: "2021-12-01T00:00:00+06:00", total: 3846 },
    { day: "2022-01-01T00:00:00+06:00", total: 1476 },
  ];

  handleRunReport() {
    this.handleFetchReports();
  }

  async handleFetchReports() {
    var params = {
      start_date: this.dateFrom,
      end_date: this.dateTo,
    };

    await this.fetchDashboardAnalyticsSummary(params).then((data) => {
      this.summaryData = data;
    });
  }

  async asyncData({ route, $axios, store, error, $dayjs }) {
    var dateFrom = route.query.dateFrom
      ? route.query.dateFrom
      : $dayjs().subtract(7, "day").format("YYYY-MM-DD");
    var dateTo = route.query.dateTo
      ? route.query.dateTo
      : $dayjs().add(1, "day").format("YYYY-MM-DD");

    var params = {
      start_date: dateFrom,
      end_date: dateTo,
    };

    var summaryData = {};

    const getAnalytics = await store
      .dispatch(
        namespaced(NS_ANALYTICS, FETCH_DASHBOARD_ANALYTICS_SUMMARY),
        params
      )
      .then((data) => {
        summaryData = data;
      })
      .catch((e) => {
        console.log(e);
      });

    return {
      dateFrom,
      dateTo,
      summaryData,
    };
  }

  mounted() {}
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  i {
    font-size: 20px;
  }
  a {
    align-items: center;
    background-color: #01aeab;
    border-radius: 8px;
    color: #fff;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    gap: 10px;
    height: 30px;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
  }
}

.date-chooser {
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.stat-items {
  display: flex;
  gap: 30px;
  margin-top: 30px;
  flex-flow: row wrap;
  .stat-item {
    height: 100px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .result {
      font-size: 28px;
      font-weight: 800;
      color: grey;
    }
    .name {
      font-weight: 600;
      font-size: 16px;
      color: grey;
    }
  }
}
.graph {
  width: 90%;
  margin-top: 30px;
}
</style>
