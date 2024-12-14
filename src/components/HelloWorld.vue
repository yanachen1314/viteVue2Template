<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hello: ""
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
    getHello() {
      axios.get("/t2").then(res => {
        console.log(res);
        this.hello = res.data
      })
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button plain @click="open1">
      可自动关闭
    </el-button>
    <el-button plain @click="getHello">
      请求
    </el-button>
    <div>
      欢迎：{{ hello }}
    </div>
  </div>
</template>

<style scoped></style>
