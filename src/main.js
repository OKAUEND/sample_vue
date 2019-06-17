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

var app2 = new Vue({
  el: '#app2',
  data :{
    message: 'あなたがページをロードした時間 ' + new Date().toLocaleString()
  }
})

let app3 = new Vue({
  el: '#app3',
  data: {
    seen:true
  }
})