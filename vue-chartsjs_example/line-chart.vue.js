Vue.component("bar-chart", {
  props: ['chartData'],
  extends: VueChartJs.Bar,
  mounted() {
    this.renderChart(
      this.chartData.data,
      this.chartData.options
    );
  },
});