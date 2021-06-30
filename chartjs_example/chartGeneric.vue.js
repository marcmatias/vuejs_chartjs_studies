const ChartGeneric = {
    props: ["chartData"],
    template: `
    <canvas :id="chartData.id"></canvas>
    `,
    data() {
        return {
        }
    },
    mounted() {
        new Chart(this.chartData.id,
            {
                title: this.chartData.title, 
                data: this.chartData.data,
                options: this.chartData.options
            }
        );
    },
}