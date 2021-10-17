/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './APP.vue'

Vue.config.productionTip = false

// 创建Vue实例对象-->vm
new Vue({
  el: '#app',
  
  // 下面这行代码完成了这个功能：将APP组件放入容器中
  render: h => h(App),
  // beforeCreate() {
  //   Vue.prototype.$bus = this
  // }
})

// console.log("999")
