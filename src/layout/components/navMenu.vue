<template>
  <el-aside width="200px" class="aside">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo" router>

      <!-- HaveChildren-->
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <!-- HaveNotChildren-->
      <el-submenu index="1-4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航4</span>
        </template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'navMenu',
  data() {
    return {}
  }
}
</script>
