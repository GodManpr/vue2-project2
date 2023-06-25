<template>
  <div>
    <el-pagination
        :current-page.sync="curPage"
        :page-size.sync="curSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="pageSizes"
        :layout=layout
        :total="total">
    </el-pagination>
  </div>
</template>

<script>

export default {
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    pageNo: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    total: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  },
  computed: {
    curPage: {
      get() {
        return this.pageNo
      },
      set(v) {
        this.$emit('update:pageNo', v)
      }
    },
    curSize: {
      get() {
        return this.pageSize
      },
      set(v) {
        this.$emit('update:pageSize', v)
      }
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    cancel() {
      this.$emit('update:visible', false)
    },
    handleSizeChange(val) {
      this.$emit('handelChange')
    },
    handleCurrentChange(val) {
      this.$emit('handelChange')
    }
  },

}
</script>
