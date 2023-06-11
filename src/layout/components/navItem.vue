<template>
  <div class="home">
    <!-- HaveChildren-->
    <el-menu-item :index="item.menu_url" v-if="!item.children" @click="addTag(item)">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ item.menu_name }}</span>
    </el-menu-item>

    <!-- HaveNotChildren-->
    <el-submenu :index="item.menu_url" v-else>
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.menu_name }}</span>
      </template>

      <navItem v-for="subItem in item.children" :key="subItem.menu_url" :item="subItem"/>

    </el-submenu>

  </div>
</template>

<script>
import store from '@/store'
import {mapGetters} from 'vuex'

export default {
  name: 'navItem',
  props: ['item'],
  data() {
    return {}
  },
  methods: {
    addTag(item) {
      const repeat = this.getTagList.some(v => v.menu_url === item.menu_url)
      if (repeat) return
      store.dispatch('ADDTAGS', item)
    }
  },
  computed: {
    ...mapGetters(['getTagList'])
  }
}
</script>
