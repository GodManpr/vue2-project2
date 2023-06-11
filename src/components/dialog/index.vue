<template>
  <div>
    <el-dialog
        :title="dialogTitle"
        :visible.sync="visible"
        width="30%"
        :before-close="cancel">
      <slot>这是一段信息</slot>
      <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm">{{ btnTitle }}</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    btnTitle: {
      type: String,
      default: '确定'
    },
    dialogTitle: {
      type: String,
      default: '弹框'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
      this.cancel()
    },
    cancel() {
      this.$emit('update:visible', false)
    }
  }
}
</script>
