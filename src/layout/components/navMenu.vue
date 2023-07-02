<template>
  <el-aside width="200px" class="aside">
    <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo" router>

      <navItem v-for="item in getNav" :key="item.menu_url" :item="item"/>
    </el-menu>
  </el-aside>
</template>

<script>
import {userInfo} from "@/api/api";
import navItem from "./navItem";
import {mapGetters} from "vuex";

export default {
  name: 'navMenu',
  components: {
    navItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['getNav'])
  }
}
</script>
