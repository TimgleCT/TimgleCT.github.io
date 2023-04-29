//利用vue 3 composition api與 echarts.js 建立一個繪製圓餅圖的vue元件，元件支援輸入繪製圓餅圖所需要的分母與分子，也可以決定要不要顯示tooltip與legend，也支援輸入各區塊顏色
<template>
  <div ref="chartRef" style="width: 100%; height: 100%;"></div>
</template>

<script>
const { ref, onMounted, watch } = Vue;

export default {
    name: 'PieChart',
    props: {
        numerator: {
            type: Number,
            required: true,
        },
        denominator: {
            type: Number,
            required: true,
        },
        showTooltip: {
            type: Boolean,
            default: true,
        },
        showLegend: {
            type: Boolean,
            default: true,
        },
        colors: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const chartRef = ref(null);
        const innerRadius = 55;
        const value = Math.round((props.numerator / props.denominator) * 100);

        function setLabelFontSize(label = '') {
            const chartMinSize = Math.min(chartRef.value.clientWidth, chartRef.value.clientHeight) * 0.95;
            return Math.round((chartMinSize * innerRadius * 0.01) / label.length);
        }

        function updateChart() {
            const chartInstance = echarts.getInstanceByDom(chartRef.value) || echarts.init(chartRef.value);
            const {
                numerator, denominator, showTooltip, showLegend, colors,
            } = props;

            const option = {
                tooltip: {
                    show: showTooltip,
                    trigger: 'item',
                },
                legend: {
                    show: showLegend,
                    data: ['分子', '分母'],
                },
                series: [
                    {
                        name: 'innerPieChart',
                        type: 'pie',
                        radius: [0, `${innerRadius}%`],
                        silent: true,
                        label: {
                            position: 'center',
                            formatter: `{value|${value}} {unit|%}`,
                            rich: {
                                value: {
                                    fontSize: setLabelFontSize(`${value} %`),
                                    textBorderWidth: 0,
                                    color: colors[3] || 'white',
                                },
                                unit: {
                                    fontSize: setLabelFontSize(`${value} %`),
                                    textBorderWidth: 0,
                                    color: colors[3] || 'white',
                                },
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            {
                                value: 100,
                                name: '%',
                                itemStyle: {
                                    color: colors[2] || 'rgb(197, 182, 182)',
                                },
                            },
                        ],
                        emphasis: {
                            disabled: true,
                        },
                    },
                    {
                        name: 'outerPieChart',
                        type: 'pie',
                        radius: [`${innerRadius}%`, '80%'],
                        silent: true,
                        center: ['50%', '50%'],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            {
                                value: numerator,
                                name: '分子',
                                itemStyle: {
                                    color: colors[0] || 'rgb(231, 134, 44)',
                                },
                            },
                            {
                                value: denominator - numerator,
                                name: '分母',
                                itemStyle: {
                                    color: colors[1] || 'rgb(240, 221, 221)',
                                },
                            },
                        ],
                        emphasis: {
                            disabled: true,
                        },
                    },
                ],
            };

            chartInstance.setOption(option);
        }

        watch(() => [props.numerator, props.denominator], updateChart);

        onMounted(() => {
            updateChart();
            window.addEventListener('resize', () => {
                echarts.getInstanceByDom(chartRef.value).resize();
            });
        });

        return {
            chartRef,
        };
    },
};
</script>

<style scoped>
</style>
