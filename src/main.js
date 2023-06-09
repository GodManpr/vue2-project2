import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style.css'
import {setConfig, setElement} from "@/plugins";
// 全局的过滤器
import '@/filter'

setConfig(Vue) // set Vue-Config

setElement(Vue) // set element-ui

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
