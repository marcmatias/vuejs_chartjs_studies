const ChartGeneric = {
    props: ["chartData"],
    template: `
    <canvas :id="chartData.id"></canvas>
    `,
    data() {
        return {
        }
    },
    async mounted() {
        const datasets = [
            {
                type: 'line',
                borderColor: this.chartData.label.borderColor,
                backgroundColor: this.chartData.label.backgroundColor,
                label: this.chartData.label.line,
                data: this.arrayToInt(this.movingAverage(this.chartData.data, 7)),
            }
        ]
        const datasetsWithBar = [
            {
                type: 'bar',
                backgroundColor: this.chartData.label.backgroundColor,
                label: this.chartData.label.bar,
                data: this.chartData.data,
            }, datasets[0]
        ];
        await new Chart(this.chartData.id,
            {
                data: {
                    labels: this.chartData.date,
                    datasets: this.chartData.label.bar ? datasetsWithBar : datasets,
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: this.chartData.label.title
                        }
                    }
                }
            }
        );
    },
    methods: {
        arrayToInt: (arr) => {
            return arr.map(function (value) {
                return value !== null ? parseInt((value).toFixed(0)) : null;
            });
        },
        movingAverage: (values, n) => {
            const lastValues = [];
            const movingAvg = [];

            for (i = 0; i < values.length; i++) {
                const value = values[i];
                lastValues.push(value);
                if (i + 1 < n) {
                    movingAvg.push(null);
                }
                else {
                    movingAvg.push(lastValues.reduce((total, val) => total + val) / lastValues.length);
                    lastValues.shift();
                }
            }
            return movingAvg;
        },
    },
}