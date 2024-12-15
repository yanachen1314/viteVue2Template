<script>
import axios from "axios";
export default {
  name: 'HelloWorld',

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
    <a href="https://vite.dev" target="_blank">
      <img src="@/assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <h3>Vite5.4.11 + Vue2.7.16</h3>

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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
