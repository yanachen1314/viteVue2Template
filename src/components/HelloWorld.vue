<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  methods: {
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal' }, '这是提示文案这是提示文案')
      });
    },
  }
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button plain @click="open1">
      可自动关闭
    </el-button>
  </div>
</template>

<style scoped></style>
