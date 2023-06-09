<template>
  <div id="module">
    <el-container>
      <NavMenu/>
      <el-container>
        <el-header>
          <Breadcrumb/>
          <el-button class="exit" type="primary">quit</el-button>
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

export default {
  name: 'index',
  components: {
    Breadcrumb,
    NavMenu,
    Tag
  }
}

</script>