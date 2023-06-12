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
            label="操作">
          <template slot-scope="{row}">
            <el-button type="primary" @click="setData('edit',row)">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <Dialog
      :visible.sync="dialogVisible"
      btn-title="确认"
      dialog-title="新增"
      @confirm="getCarLists"
    >
      <p>是否新增车辆</p>
    </Dialog>
  </div>
</template>

<script>
import {getCarList} from "@/api/api";
import Dialog from '@/components/dialog/index.vue'

export default {
  components: {
    Dialog
  },
  data() {
    return {
      listQuery: {
        pageNo: 1,
        pageSize: 10
      },
      temp: {}, //缓存数据
      category: '',//类型
      tableData: [],
      dialogVisible: false
    }
  },
  mounted() {
    this.getCarLists()
  },
  methods: {
    async getCarLists() {
      const res = await getCarList(this.listQuery)
      const {data} = res.data
      this.tableData = data.list
    },
    setData(type, row) {
      this.category = type
      type === 'add' ? this.temp = {} : this.temp = {...row}
      this.dialogVisible = true
    }
  }
}
</script>
