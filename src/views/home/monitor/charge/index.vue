<template>
  <div>
    <el-card class="box-card marginBottom">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          选择车辆<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="">选择所有</el-dropdown-item>
          <el-dropdown-item v-for="item in vehicleInfo" :command="item.id" :key="item.id">{{ item.numberplate }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="danger" v-show="listQuery.carId" @click="charge">开始充电</el-button>
    </el-card>
    <el-card>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="numberplate"
            label="车牌号">
        </el-table-column>
        <el-table-column
            prop="date"
            label="充电日期">
          <template slot-scope="{row}">
            {{ row.date | dateFilter }}
          </template>
        </el-table-column>
        <el-table-column
            prop="starttime"
            label="充电开始时间">
        </el-table-column>
        <el-table-column
            prop="startPower"
            label="充电开始电量">
        </el-table-column>
        <el-table-column
            prop="completePower"
            label="充电完成电量">
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
  </div>
</template>

<script>
import {carCharge, getCarNumber, getChargeList,} from "@/api/api";
import Pagination from '@/components/pagination/index.vue'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        carId: ''
      },
      temp: {}, // 缓存数据
      tableData: [],
      vehicleInfo: [],// 所有车辆的车辆号
      total: 1, // 总数
    }
  },
  mounted() {
    this.getCarLists()
    this.getCarNumber()
  },
  methods: {
    async getCarLists() {
      const res = await getChargeList(this.listQuery)
      const {data: {list, rows}} = res.data
      this.tableData = list
      this.total = rows
    },
    async getCarNumber() { // 查询正常车牌号
      const {data: {data: {list}}} = await getCarNumber(this.listQuery)
      this.vehicleInfo = list
    },
    async charge() { // 开始充电
      await carCharge({carId: this.listQuery.carId})
      this.getCarLists()
    },
    handleCommand(id) {
      this.listQuery.carId = id
      this.getCarLists(this.listQuery)
    }
  }
}
</script>
