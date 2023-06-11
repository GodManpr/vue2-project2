<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import * as echarts from 'echarts'
import chinaMap from '@/assets/json/china.json'

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
        geo: {
          type: 'map',
          map: 'china',
          show: true,
          label: {
            show: true,
            color: '#fff'
          },
          itemStyle: {
            areaColor: '#219edb',
            borderColor: '#fff'
          },
          zoom: 1.2
        },
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            label: {
              formatter: '{b}',
              position: 'right',
              show: true,
              color: '#fff'
            },
            itemStyle: {
              color: '#f4e928',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            symbol: 'circle',
            data:[
              {
                name: '北京',
                value: [116.46, 39.92]
              },
              {
                name: '乌龙木齐',
                value: [87.68, 43.77]
              },
              {
                name: '济南',
                value: [117, 36.65]
              },
            ]
          }
        ]
        // series: [
        //   {
        //     type: 'map',
        //     map: 'china',
        //     label: {
        //       show: true,
        //       color: '#fff'
        //     },
        //     itemStyle: {
        //       areaColor: '#219edb',
        //       borderColor: '#fff'
        //     },
        //     zoom: 1.2
        //   }
        // ]
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
      echarts.registerMap('china', chinaMap)
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
