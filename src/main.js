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

var obj =
{
  foo:'bozz'
}

new Vue({
  el:'#app8',
  data:obj
})

let app9 = new Vue({
  el:'#app9',
  data:{
    number: 10,
    ok:false,
    message:'FFXIV',
    id:50
  }
})

var example = new Vue({
  el:"#example",
  data:{
    message:'Hello'
  },
  computed:{
    reversedMessage:function(){
      return this.message.split('').reverse().join('')
    }
  }
})


example.message = 'GoodBye'
example.message = 'Test'

let fullname = new Vue({
  el:'#demo',
  data:{
    firstName:'Foo',
    lastName:'Bar',
    fullName:'',
  },
  conputed:{
    fullName:{
      get:function() {
        return this.firstName + ' ' + this.lastName
      },
      set:function(val)
      {
        let names = val.split('')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

// fullname.fullName = 'Hello World'
// console.log(fullname.fullName)

// let watchExampleVM = new Vue({
//   el:'#watch-example',
//   data:{
//     question:'',
//     answer:'あなたが質問をするまで私はあなたに答えを与えることはできません！'
//   },
//   watch:{
//     question: function (newQuestion,oldQuestion)
//     {
//       this.answer = '入力を中止するのを待っています...'
//       this.debouncedGetAnswer()
//     }
//   },
//   created:function()
//   {
//     this.debouncedGetAnswer = _.debounce(this.getAnswer , 500)
//   },
//   methods:
//   {
//     getAnswer:function()
//     {
//       if(this.question.indexOf('?') === -1)
//       {
//         this.answer = '質問には疑問符が含まれています(´・ω・`)'
//         return
//       }
//       this.answer = '待機中…'
//       let vm = this
//       axios.get('https://yesno.wtf/api')
//         .then(function(response)
//         {
//           vm.answer = _.capitalize(response.data.answer)
//         })
//         .catch(function (error) {
//           vm.answer = 'Error! Could not reach the API. ' + error
//         })
//     }
//   }
// })

let app20 = new Vue({
  el:'.static',
  data:{
    IsActive:true,
    hasError:true
  }
})

new Vue({
  el:'.app21',
  classObject:
  {
    data:
    {
      active:true,
      'text-danger':false
    }
  }
})

new Vue({
  el:'.app22',
  data:
  {
    isActive:true,
    error:'fatal'
  },
  computed:
  {
    classObject:function()
    {
      return{
        active:this.isActive && !this.error,
        'text-danger':this.error && this.error.type === 'fatal'
      }
    }
  }
})

new Vue({
  el:"#app23",
  data:{
    activeClass:'active',
    errorClass:'text-danger'
  }
})

new Vue({
  el:"#app24",
  data:{
    isActive:false,
    activeClass:'active',
    errorClass:'text-danger'
  }
})

new Vue({
  el:"#app25",
  styleObject:{
    color:'red',
    fontSize:'13px'
  }
})

new Vue({
  el:"#app30",
  data:{
    awesome:true
  }
})

import App31 from './App31.vue'
new Vue({
  el:'#app31',
  components:{ App31 },
  data:{
    ok:true
  }
})

new Vue({
  el:'#app32',
  data:{
    type:'D'
  },
})

new Vue({
  el:'#app33',
  data:{
    loginType:'username'
  },
  methods:{
    change:function(){
      if(this.loginType === 'username')
      {
        this.loginType = ''
      }
      else
      {
        this.loginType = 'username'
      }
    }
  }
})