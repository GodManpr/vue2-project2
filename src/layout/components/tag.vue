<template>
  <div class="tags">
        <div class="el-scrollbar__wrap scroll-container">
<!--    <el-scrollbar style="width: 100%">-->
      <el-tag
          v-for="(tag, i) in getTagList"
          :key="tag.menu_url"
          :closable="tag.menu_url !== '/index'"
          :type="tag.menu_url === defaultUrl ? '' : 'info'"
          @click="toTagUrl(tag)"
          @close="delTag(tag, i)">
        {{ tag.menu_name }}
      </el-tag>
<!--    </el-scrollbar>-->
        </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import store from "@/store"
import routes from "@/router/route";

export default {
  name: 'tag',
  data() {
    return {
      defaultUrl: '/index'
    }
  },
  mounted() {
    this.setDefaultUrl(this.$route.path)
  },
  methods: {
    toTagUrl(tag) {// 点击跳转
      if (this.$route.path === tag.menu_url) return
      console.log(routes);
      this.$router.push(tag.menu_url)
    },
    setDefaultUrl(url) {// 设置defaultUrl
      this.defaultUrl = url
    },
    delTag(tag, i) { // 删除tag
      store.dispatch('DELTAG', i)
      // 删除的不是当前的，则不做操作
      if (tag.menu_url !== this.defaultUrl) {
        return
      } else {
        // 删除的是当前的是最后一个
        if (i === this.getTagList.length) {
          this.$router.push(this.getTagList[i - 1].menu_url)
        } else {
          // 删除的不是最后一个，则跳转到后一个
          this.$router.push(this.getTagList[i].menu_url)
        }
      }

    }
  },
  computed: {
    ...mapGetters(['getTagList'])
  },
  watch: {
    $route(newV, oldV) {
      this.setDefaultUrl(newV.path)
    }
  }
}
</script>
<style scoped>
.el-scrollbar__wrap {
  width: 100%;
  overflow: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  overflow-x: auto;
  height: calc(100% + 20px);
}

.el-scrollbar .el-scrollbar__wrap .el-scrollbar__view{
  white-space: nowrap;
  display: inline-block;
}
</style>