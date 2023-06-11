<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in routeMatched" :key="item.path">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      routeMatched: []
    }
  },
  mounted() {
    this.routeMatchedChange(this.$route.matched)
  },
  methods: {
    routeMatchedChange(matched) {
      let matchedList = matched
      if (matched[1]?.path === '/index') {
        matchedList = [{path: '/home', name: 'home', meta:{title: '首页'}}]
      }
      this.routeMatched = matchedList
    }
  },
  watch: {
    $route(newV, oldV) {
      this.routeMatchedChange(newV.matched)
    }
  }
}
</script>
