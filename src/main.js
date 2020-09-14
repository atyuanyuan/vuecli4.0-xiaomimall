import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// 根据前端跨域方式做调整,接口代理模式(当前接口域名和前端域名一样的)用/api, JSONP和CORS要用'http://'(当前接口域名和前端域名不一样的)
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptors.response.use(function(response){
    let res = response.data;
    if (res.status == 0) {
        return res.dadta;
    }else if(res.status == 10) {
        window.location.href = '/#/login';
    }else{
        alert(res.msg);
    }
})
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
