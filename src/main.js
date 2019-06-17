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

let app4 = new Vue({
  el:"#app4" ,
  data: {
    todos:[
      { text: 'Javascript学習中！'} ,
      { text: 'Vue学習中！'} ,
      { text: '素晴らしいものを作ろう！'}
    ]
  }
})

let app5 = new Vue({
  el:'#app5',
  data:{
    message: 'Hello Vue.js !'
  },
  methods:{
    reverseMessage:function()
    {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

let app6 = new Vue({
  el:'#app6',
  data:{
    message:'Hello Vue!'
  }
})

Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.text}}</li>'
})

let app7 = new Vue({
  el:"#app7",
  data:{
    groceryList:[
      {id:0,text:'Vegetables'},
      {id:1,text:'Cheese'},
      {id:2,text:'Whatever eles humans are supposed to eat'}
    ]
  }
})