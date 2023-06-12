<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '400px',
    },
    option: {
      type: Object,
      default: () => ({
        title: {
          text: 'Echart'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: [1, 2, 3, 4, 5]
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    },
  },
  data() {
    return {
      myChart: '',
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.chart)
      this.myChart.setOption(this.option)

      window.addEventListener('resize', () => {
        this.myChart.resize()
      })
    }
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>
