<template>
  <div>
    <el-card class="box-card marginBottom">
      操作员列表
    </el-card>
    <el-card>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="account"
            label="用户名">
        </el-table-column>
        <el-table-column
            prop="password"
            label="密码">
        </el-table-column>
        <el-table-column
            prop="date"
            label="创建时间">
          <template slot-scope="{row}">
            {{ row.reg_time | dateFilter }}
          </template>
        </el-table-column>
        <el-table-column
            label="操作">
          <template slot-scope="{row}">
            <el-button type="danger" @click="handleDel(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 分页 -->
    <Pagination
        :pageNo.sync="listQuery.pageNo"
        :pageSize.sync="listQuery.pageSize"
        :total="total"
        @handelChange="getCarLists"
    >
    </Pagination>


    <Dialog
        :visible.sync="visibleDel"
        dialogTitle="删除"
        btnTitle="删除"
        @confirm="deleteAction"
    >
      <p>确定删除该用户吗？</p>
    </Dialog>
  </div>
</template>

<script>
import {removeUser, userList} from "@/api/api";
import Pagination from "@/components/pagination/index.vue";
import Dialog from "@/components/dialog/index.vue";

export default {
  name: 'operatorList',
  components: {
    Pagination,
    Dialog
  },
  data() {
    return {
      tableData: [],
      listQuery: {
        pageNo: 1,
        pageSize: 10
      },
      total: 1,
      visibleDel: false,
      id: ''
    }
  },
  mounted() {
    this.getCarLists()
  },
  methods: {
    async getCarLists() {
      const {data: {data: {list, rows}}} = await userList(this.listQuery)
      this.tableData = list
      this.total = rows
    },
    // 显示弹框
    handleDel(id) {
      this.visibleDel = true
      this.id = id
    },
    // 确认删除
    async deleteAction() {
      this.visibleDel = false
      const res = await removeUser(this.id)
      if (res.data.code === 20000) {
        this.$message({type:'success',message:'操作成功！'})
        this.getCarLists()
      }
    }
  }
}
</script>

<style scoped>

</style>
