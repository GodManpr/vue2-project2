<template>
  <div>
    <div class="module-box">
      <div class="box" style="flex: 0 1 20%; margin: 5px;" v-for="(v, i) in lists" :key="i">
        <div class="list-box">
          <i :class="v.icon"></i>
          <p>{{ v.title }}</p>
        </div>
      </div>
    </div>
    <!-- 第二行-->
    <div class="module-box">
      <div style="flex: 0 1 60%; margin: 5px">
        <el-card class="box-card">
          <MyMap height="645px"/>
        </el-card>
      </div>
      <div style="flex: 0 1 40%; margin: 5px">
        <div style="flex: 0 1 100%; margin-bottom: 5px">
          <el-card class="box-card">
            <Chart height="300px"/>
          </el-card>
        </div>
        <div style="flex: 0 1 60%; margin-top: 5px">
          <el-card class="box-card">
            <Chart height="300px"/>
          </el-card>
        </div>
      </div>
    </div>
    <!-- 第三行-->
    <div class="module-box">
      <div style="flex: 0 1 30%; margin: 5px">
        <el-card class="box-card">
          <Chart height="200px"/>
        </el-card>
      </div>
      <div style="flex: 0 1 70%; margin: 5px">
        <el-card class="box-card">
          <Chart height="200px"/>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './chart.vue'
import MyMap from './myMap.vue'

export default {
  components: {
    MyMap,
    Chart
  },
  data() {
    return {
      lists: [
        {title: '电量监控', icon: 'el-icon-share'},
        {title: '电量监控', icon: 'el-icon-share'},
        {title: '电量监控', icon: 'el-icon-share'},
        {title: '电量监控', icon: 'el-icon-share'},
        {title: '电量监控', icon: 'el-icon-share'}
      ]
    }
  },
}
</script>
