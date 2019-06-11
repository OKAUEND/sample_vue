import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  template: '<p>{{msg}}</p>',
  data:{ 
      msg:'Hello World!!!'
  }
}).$mount('#app')