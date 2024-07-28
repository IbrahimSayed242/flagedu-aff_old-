<template>
  <div class="price-chart" id="chart">
    <div class="chart-wrapper">
      <apexchart
        v-if="renderComponent"
        type="area"
        height="400"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  name: "DashboardChart",
})
export default class DashboardChart extends Vue {
  @Prop() graphData;

  renderComponent = true;
  series = [];
  chartOptions = {};

  forceRerender() {
    this.renderComponent = false;

    this.$nextTick(() => {
      this.renderComponent = true;
    });
  }

  @Watch("graphData", { immediate: true, deep: true })
  handleGraphdataChange(val, oldVal) {
    this.forceRerender();
    this.series = [
      {
        name: "User",
        data: this.getLabelsAndSeries(val, "series"),
      },
    ];
    this.chartOptions = {
      chart: {
        width: "100%",
        height: 400,
        type: "area",
        zoom: {
          autoScaleYaxis: true,
        },
        id: "areachart-1",
        toolbar: { show: false },
      },
      colors: ["#8A56E1"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
        dashArray: 0,
      },
      labels: this.getLabelsAndSeries(val, "labels"),
      xaxis: {
        type: "datetime",
        tickAmount: 11,
        labels: {
          rotate: 0,
          style: {
            colors: "#000000",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
          datetimeUTC: true,
        },
        axisBorder: {
          show: true,
          color: "#f1f1f1",
          height: 0.25,
          width: "100%",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#000000",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      grid: {
        borderColor: "#cce2ff",
        padding: {
          right: 20,
          left: 20,
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        x: {
          show: true,
          format: "dd MMM hh:mm TT",
          formatter: undefined,
        },
      },
    };
  }

  getLabelsAndSeries(graph, returnType) {
    var series = [];
    var labels = [];
    graph.map((obj) => {
      series.push(obj.total);
      labels.push(obj.day);
    });

    if (returnType === "series") {
      return series;
    } else {
      return labels;
    }
  }

  // active filter. by default 1 week will be selected
  selection = "Last Month"; //24h, 7d, 30d, 60d, 1y

  mounted() {
    this.getLabelsAndSeries(this.graphData, "labels");
  }
}
</script>

<style lang="scss" scoped>
.price-chart {
  margin-top: 50px;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 30px;

    @media (max-width: 575px) {
      font-size: 18px;
      line-height: 18px;
    }

    @media (max-width: 400px) {
      font-size: 14px;
      line-height: 14px;
    }
  }

  .chart-wrapper {
    margin-top: 30px;
    height: auto;
    border: 1px solid #cce2ff;
    border-radius: 4px;
  }
}
</style>
