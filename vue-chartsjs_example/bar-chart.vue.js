Vue.component("line-chart", {
  props: ['chartData'],
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart(
      this.chartData.data,
      this.chartData.options
    );
  },
});