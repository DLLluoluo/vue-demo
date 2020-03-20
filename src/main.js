import Vue from "vue";
import App from "./App";
// 引入路由对象
import router from "./router";

// 引入全局样式
import "./assets/style/core.css";
import "./assets/style/icon.css";
import "./assets/style/home.css";

// 引入数据交互插件  axios
import axios from "axios";
// Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router: router,
  components: {
    App
  },
  template: "<App/>"
});
