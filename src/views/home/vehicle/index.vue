<template>
  <div>
    <el-card class="box-card marginBottom">
      <!--      @click="setData('add',null)"-->
      <el-button type="success" @click="setData('add',null)">新增车辆</el-button>
    </el-card>
    <el-card>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="number"
            label="车辆自编号">
        </el-table-column>
        <el-table-column
            prop="numberplate"
            label="车牌号">
        </el-table-column>
        <el-table-column
            prop="date"
            label="车辆出厂日期">
          <template slot-scope="{row}">
            {{ row.date | dateFilter }}
          </template>
        </el-table-column>
        <el-table-column
            prop="check"
            label="车辆状态">
          <template slot-scope="{row}">
            <el-tag
                :type="row.check ? 'success' : 'danger'"
            >
              {{ row.check | checkFilter }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
            width="200px"
            label="操作">
          <template slot-scope="{row}">
            <el-button type="primary" @click="setData('edit',row)">编辑</el-button>
            <el-button type="danger" @click="handelDel(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新增/编辑 -->
    <Dialog
        :visible.sync="dialogVisible"
        btn-title="确认"
        :dialog-title="category==='add'?'新增':'编辑'"
        @confirm="updateData"
    >
      <el-form :model="temp" label-width="100px">
        <el-form-item label="车辆自编号">
          <el-input v-model="temp.number"></el-input>
        </el-form-item>

        <el-alert
            title="车牌已重复"
            type="error"
            center
            show-icon
            v-show="isExist">
        </el-alert>

        <el-form-item label="车牌号">
          <el-input v-model="temp.numberplate" :disabled="category !== 'add'"
                    @change="single(temp.numberplate)"></el-input>
        </el-form-item>

        <el-form-item label="车辆出厂时间">
          <el-date-picker
              v-model="temp.date"
              type="date"
              placeholder="请选择日期"
              style="width: 100%">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="车辆状态">
          <el-switch v-model="temp.check"></el-switch>
        </el-form-item>
      </el-form>
    </Dialog>

    <!-- 新增/编辑 -->
    <Dialog
        :visible.sync="dialogDelVisible"
        btn-title="确认"
        dialog-title="删除"
        @confirm="deleteData"
    >
      <p>确认删除该车辆信息吗？</p>
    </Dialog>

    <!-- 分页 -->
    <Pagination
        :pageNo.sync="listQuery.pageNo"
        :pageSize.sync="listQuery.pageSize"
        :total="total"
        @handelChange="getCarLists"
    >

    </Pagination>
  </div>
</template>

<script>
import {carDel, carSubmit, getCarList, numberSingle} from "@/api/api";
import Dialog from '@/components/dialog/index.vue'
import Pagination from '@/components/pagination/index.vue'

export default {
  components: {
    Dialog,
    Pagination
  },
  data() {
    return {
      listQuery: {
        pageNo: 1,
        pageSize: 10
      },
      temp: {}, // 缓存数据
      category: '',// 类型
      tableData: [],
      dialogVisible: false,
      dialogDelVisible: false,
      isExist: false,
      total: 1, // 总数
    }
  },
  mounted() {
    this.getCarLists()
  },
  methods: {
    async getCarLists() {
      const res = await getCarList(this.listQuery)
      const {data: {list, rows}} = res.data
      this.tableData = list
      this.total = rows
    },
    // 编辑\新增打开框
    setData(type, row) {
      this.category = type
      type === 'add' ? this.temp = {} : this.temp = {...row}
      this.dialogVisible = true
      this.isExist = false
    },
    // 更新数据
    async updateData() {
      if (this.isExist) return
      const {data: {code}} = await carSubmit(this.temp)
      if (code === 20000) {
        this.$message({
          type: 'success',
          message: '更新成功'
        })
        this.dialogVisible = false

        this.getCarLists()
      }
    },
    // 打开删除框
    handelDel(row) {
      this.dialogDelVisible = true
      this.temp = {...row}
    },
    // 确认删除
    async deleteData() {
      const {data: {code}} = await carDel(this.temp.id)
      if (code === 20000) {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.dialogDelVisible = false

        this.getCarLists()
      }
    },
    // 车牌号的唯一性
    async single(numberplate) {
      const res = await numberSingle({numberplate})
      this.isExist = res.data.data.exist
    }
  }
}
</script>
