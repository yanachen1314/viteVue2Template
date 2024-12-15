import Vue from 'vue';
// import './style.css';
import App from './App.vue';
// 已配置自动导入 import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import { createPinia, PiniaVuePlugin } from 'pinia';
import axios from 'axios';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

axios.defaults.baseURL = 'http://127.0.0.1:8080';
Vue.config.productionTip = false;

new Vue({
    router,
    pinia,
    render: h => h(App),
}).$mount('#app');
