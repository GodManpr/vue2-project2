<template>
  <el-aside width="200px" class="aside">
    <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo" router>

      <navItem v-for="item in dataList" :key="item.menu_url" :item="item"/>
    </el-menu>
  </el-aside>
</template>

<script>
import {userInfo} from "@/api/api";
import navItem from "./navItem";

export default {
  name: 'navMenu',
  components: {
    navItem
  },
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      const res = await userInfo()
      const {data, code} = res
      const dList = data.data.module

      // 取出根
      dList.map(v => {
        if (v.father_id === 0) {
          this.dataList.push({...v})
        }
      })

      this.createTree(this.dataList, dList)
    },
    createTree(pData, data) {
      for (let i = 0; i < pData.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (pData[i].id === data[j].father_id) {
            if (!pData[i].children) {
              pData[i].children = []
            }
            pData[i].children.push({...data[j]})
          }
        }
        if (pData[i].children) {
          this.createTree(pData[i].children, data)
        }
      }
      return pData
    }
  }
}
</script>
