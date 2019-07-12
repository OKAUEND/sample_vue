// import Vue from 'vue'
// // import App from './App.vue'

// Vue.config.productionTip = false

// // new Vue({
// //   render: h => h(App),
// // }).$mount('#app')

// new Vue({
//   template: '<p>{{msg}}</p>',
//   data:{ 
//       msg:'Hello World!!!'
//   }
// }).$mount('#app')

// var app2 = new Vue({
//   el: '#app2',
//   data :{
//     message: 'あなたがページをロードした時間 ' + new Date().toLocaleString()
//   }
// })

// let app3 = new Vue({
//   el: '#app3',
//   data: {
//     seen:true
//   }
// })

// let app4 = new Vue({
//   el:"#app4" ,
//   data: {
//     todos:[
//       { text: 'Javascript学習中！'} ,
//       { text: 'Vue学習中！'} ,
//       { text: '素晴らしいものを作ろう！'}
//     ]
//   }
// })

// let app5 = new Vue({
//   el:'#app5',
//   data:{
//     message: 'Hello Vue.js !'
//   },
//   methods:{
//     reverseMessage:function()
//     {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

// let app6 = new Vue({
//   el:'#app6',
//   data:{
//     message:'Hello Vue!'
//   }
// })

// Vue.component('todo-item',{
//   props:['todo'],
//   template:'<li>{{todo.text}}</li>'
// })

// let app7 = new Vue({
//   el:"#app7",
//   data:{
//     groceryList:[
//       {id:0,text:'Vegetables'},
//       {id:1,text:'Cheese'},
//       {id:2,text:'Whatever eles humans are supposed to eat'}
//     ]
//   }
// })

// var obj =
// {
//   foo:'bozz'
// }

// new Vue({
//   el:'#app8',
//   data:obj
// })

// let app9 = new Vue({
//   el:'#app9',
//   data:{
//     number: 10,
//     ok:false,
//     message:'FFXIV',
//     id:50
//   }
// })

// var example = new Vue({
//   el:"#example",
//   data:{
//     message:'Hello'
//   },
//   computed:{
//     reversedMessage:function(){
//       return this.message.split('').reverse().join('')
//     }
//   }
// })


// example.message = 'GoodBye'
// example.message = 'Test'

// let fullname = new Vue({
//   el:'#demo',
//   data:{
//     firstName:'Foo',
//     lastName:'Bar',
//     fullName:'',
//   },
//   conputed:{
//     fullName:{
//       get:function() {
//         return this.firstName + ' ' + this.lastName
//       },
//       set:function(val)
//       {
//         let names = val.split('')
//         this.firstName = names[0]
//         this.lastName = names[names.length - 1]
//       }
//     }
//   }
// })

// // fullname.fullName = 'Hello World'
// // console.log(fullname.fullName)

// // let watchExampleVM = new Vue({
// //   el:'#watch-example',
// //   data:{
// //     question:'',
// //     answer:'あなたが質問をするまで私はあなたに答えを与えることはできません！'
// //   },
// //   watch:{
// //     question: function (newQuestion,oldQuestion)
// //     {
// //       this.answer = '入力を中止するのを待っています...'
// //       this.debouncedGetAnswer()
// //     }
// //   },
// //   created:function()
// //   {
// //     this.debouncedGetAnswer = _.debounce(this.getAnswer , 500)
// //   },
// //   methods:
// //   {
// //     getAnswer:function()
// //     {
// //       if(this.question.indexOf('?') === -1)
// //       {
// //         this.answer = '質問には疑問符が含まれています(´・ω・`)'
// //         return
// //       }
// //       this.answer = '待機中…'
// //       let vm = this
// //       axios.get('https://yesno.wtf/api')
// //         .then(function(response)
// //         {
// //           vm.answer = _.capitalize(response.data.answer)
// //         })
// //         .catch(function (error) {
// //           vm.answer = 'Error! Could not reach the API. ' + error
// //         })
// //     }
// //   }
// // })

// let app20 = new Vue({
//   el:'.static',
//   data:{
//     IsActive:true,
//     hasError:true
//   }
// })

// new Vue({
//   el:'.app21',
//   classObject:
//   {
//     data:
//     {
//       active:true,
//       'text-danger':false
//     }
//   }
// })

// new Vue({
//   el:'.app22',
//   data:
//   {
//     isActive:true,
//     error:'fatal'
//   },
//   computed:
//   {
//     classObject:function()
//     {
//       return{
//         active:this.isActive && !this.error,
//         'text-danger':this.error && this.error.type === 'fatal'
//       }
//     }
//   }
// })

// new Vue({
//   el:"#app23",
//   data:{
//     activeClass:'active',
//     errorClass:'text-danger'
//   }
// })

// new Vue({
//   el:"#app24",
//   data:{
//     isActive:false,
//     activeClass:'active',
//     errorClass:'text-danger'
//   }
// })

// new Vue({
//   el:"#app25",
//   styleObject:{
//     color:'red',
//     fontSize:'13px'
//   }
// })

// new Vue({
//   el:"#app30",
//   data:{
//     awesome:true
//   }
// })

// import App31 from './App31.vue'
// new Vue({
//   el:'#app31',
//   components:{ App31 },
//   data:{
//     ok:true
//   }
// })

// new Vue({
//   el:'#app32',
//   data:{
//     type:'D'
//   },
// })

// new Vue({
//   el:'#app33',
//   data:{
//     loginType:'username'
//   },
//   methods:{
//     change:function(){
//       if(this.loginType === 'username')
//       {
//         this.loginType = ''
//       }
//       else
//       {
//         this.loginType = 'username'
//       }
//     }
//   }
// })

// var example1 = new Vue({
//   el:"#example-1",
//   data:{
//     items:[
//       { message : 'Foo' },
//       { message : 'bar' },
//       { message : 'BOO' },
//       { message : 'REEE' },
//     ]
//   },
//   methods:{
//     addList:function()
//     {
//       this.items.push({ message : "BAZ"});
//     }
//   }
// })

// example1.items = example1.items.filter(function(item)
// {
//   return item.message.match(/Foo/)
// })

// let example2 = new Vue({
//   el:"#example-2",
//   data:{
//     parentMessage:'Parent',
//     items:[
//       {message:'Foo'},
//       {message:'bar'}
//     ]
//   }
// })

// new Vue({
//   el:'#v-for-object',
//   data:{
//     object:{
//       title:'How to do lists in Vue',
//       author:'Jane Doe',
//       publishedAr:'2016-04-10'
//     }
//   }
// })

// var vm45 = new Vue({
//   el:"#app45",
//   data:{
//     userProfile:{
//       name:'Akane'
//     }
//   }
// })

// // Vue.set(vm45.userProfile,'age',45)
// vm45.userProfile = Object.assign({},vm45.userProfile,{
//   age:27,
//   favoriteColor:'Vue Green'
// })

// new Vue({
//   el:'#app46',
//   data:{
//     numbers:[1,2,3,4,5,6,7,8,9,10]
//   },
//   computed:{
//     evenNumbers:function()
//     {
//       return this.numbers.filter(function (number) {
//         return number % 2 === 0 ;
//       });
//     }
//   }
// })

// let app51 = new Vue({
//   el:'#app51',
//   data:{
//     name:'Vue.js'
//   },
//   methods:{
//     greet:function(event){
//       alert('Hello' + this.name + '!')
//       if(event)
//       {
//         alert(event.target.tagName)
//       }
//     }
//   }
// })

// // app51.greet()

// new Vue({
//   el:'#app52',
//   methods:{
//     say:function(message){
//       alert(message);
//     },
//     warn:function(message,$event)
//     {
//       if($event)
//       {
//         $event.preventDefault();
//       }
//       alert(message)
//     },
//     submit:function()
//     {
//       alert('Enter')
//     },
//     onPageDown:function()
//     {
//       alert('PageDown')
//     },
//     onClick:function()
//     {
//       alert('Ctrl Alt Shift !!')
//     },
//     onCtrlClick:function()
//     {
//       alert('Ctrl Only!!')
//     }
//   }
// })

// new Vue({
//   el:"#app61",
//   data:{
//     message:"",
//     multimessage:"",
//     checked:false,
//   }
// })

// new Vue({
//   el:"#app62",
//   data:{
//     CheckedNames:[],
//   }
// })
// new Vue({
//   el:"#app63",
//   data:{
//     picked:""
//   }
// })

// new Vue({
//   el:"#app64",
//   data:
//   {
//     selected:[]
//   }
// })

// new Vue({
//   el:"#app65",
//   data: {
//     selected: 'A',
//     options: [
//       { text: 'One', value: 'A' },
//       { text: 'Two', value: 'B' },
//       { text: 'Three', value: 'C' }
//     ]
//   }
// })

// new Vue({
//   el:"#app66",
//   data:
//   {
//     toggle:false
//   }
// });

// Vue.component('button-counter',{
//   data:function(){
//     return{
//       count:0
//     }
//   },
//   template:'<button v-on:click="count++">クリック{{ count }} 回数</button>'
// })

// Vue.component('alert-box', {
//   template: `
//     <div class="demo-alert-box">
//       <strong>Error!</strong>
//       <slot></slot>
//     </div>
//   `
// })

// new Vue({
//   el:'#components-demo'
// })

// Vue.component('blog-post',{
//   props:
//   {
//     title: String,
//     likes: Number,
//     isPublished: Boolean,
//     commentIds: Array,
//     author: Object,
//     callback: Function,
//     contactsPromise: Promise // or any other constructor
//   },
//   template:'<h3>{{ postTitle }}</h3>'
// })

// new Vue({
//   el:'#components-post',
//   data:{
//     post: {
//       id: 1,
//       title: 'My Journey with Vue'
//     }
//   },
// })

// Vue.component('base-checkbox',{
//   model:{
//     prop:'checked',
//     event:'change'
//   },
//   props:{
//     checked:Boolean
//   },
//   template: `
//     <input
//       type="checkbox"
//       v-bind:checked="checked"
//       v-on:change="$emit('change', $event.target.checked)"
//     >
//   `
// })

// new Vue({
//   el:"#base-check"
// })

// Vue.component('base-input',{
//   inheritAttrs:false,
//   props:['label','value'],
//   computed: {
//     inputListeners: function () {
//       var vm = this
//       return Object.assign({},
//         this.$listeners,
//         {
//           input:function(event){
//             vm.$emit('input',event.target.value)
//           }
//         }
//       )
//     }
//   },
//   template:
//   `<label>
//     {{label}}
//     <input
//       v-bind=$attrs
//       v-bind:value="value"
//       v-on="inputListeners
//     >
//     </input>`
// })