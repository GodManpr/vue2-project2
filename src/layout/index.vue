<template>
  <div id="module">
    <el-container>
      <NavMenu/>
      <el-container>
        <el-header>
          <Breadcrumb/>
          <el-button class="exit" type="primary" @click="quit">退出</el-button>
          <Tag/>
        </el-header>

        <el-main>
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import {Breadcrumb, NavMenu, Tag} from "@/layout/components";
import {useToken} from "@/utils/useToken";
import {logout} from "@/api/api";
import store from "@/store"

export default {
  components: {
    Breadcrumb,
    NavMenu,
    Tag
  },
  data() {
    return {}
  },
  methods: {
    async quit() { // 退出
      await logout()
      // 清空token
      const {removeToken} = useToken()
      removeToken()
      // 清空nav
      await store.dispatch('INITNAV')
      // 跳转登录页
      this.$router.push('/login')
    }
  }
}

</script>