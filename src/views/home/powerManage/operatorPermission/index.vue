<template>
  <div>
    <el-card class="box-card marginBottom">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          选择操作员<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, i) in vehicleInfo" :command="item" :key="i">{{ item.account }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-card>
    <el-card>
      <el-table
          :data="menuList"
          style="width: 100%;margin-bottom: 20px;"
          row-key="id"
          border
          default-expand-all
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
            prop="menu_name"
            label="菜单目录">
        </el-table-column>
        <el-table-column prop="permission" label="授权">
          <template slot-scope="{row}">
            <el-checkbox-group v-model="row.userPermission">
              <el-checkbox v-for="(v, i) in row.permission" :key="i" :label="v.label" :disabled="!userId"/>
            </el-checkbox-group>
          </template>
        </el-table-column>
      </el-table>
      {{ userId }}
    </el-card>

    <!-- 分页 -->
    <Pagination
        :pageNo.sync="listQuery.pageNo"
        :pageSize.sync="listQuery.pageSize"
        :total="total"
        @handelChange="getList"
    >

    </Pagination>
  </div>
</template>

<script>
import Pagination from "@/components/pagination";
import {findModules, findModulesByUid, getOpers} from "@/api/api";
import {createTree} from "@/utils/fn";

export default {
  components: {
    Pagination
  },
  name: 'operatorPermission',
  data() {
    return {
      tableData: [],
      listQuery: {
        pageNo: 1,
        pageSize: 10
      },
      total: 1,
      menuList: [],
      vehicleInfo: [],
      userName: '',
      userId: '',
      checkList: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.getFindModules()
      this.getUsersOpers()
    },
    async getFindModules() {
      const res = await findModules() // 菜单目录
      this.handleLevel(this.menuList, res.data.data.list) // 处理数据
    },
    handleLevel(menu, data) {
      // 取出根
      data.map(v => {
        if (v.father_id === 0) {
          menu.push({...v})
        }
      })
      createTree(menu, data)
      console.log(this.menuList);
    },
    // 操作员
    async getUsersOpers() {
      const {data: {data: dUser}} = await getOpers() // 所有操作员
      this.vehicleInfo = dUser
      console.log(dUser);
    },
    async handleCommand(item) {
      // console.log(item);
      this.userName = item.account
      this.userId = item.id
      const res = await findModulesByUid(this.userId)
      this.menuList = []
      this.handleLevel(this.menuList, res.data.data.list)
    }
  }
}
</script>

<style scoped>

</style>
