<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
=======
import Vue from 'vue/dist/vue.esm.js';
// import App from './App.vue'

new Vue({
  el:'#app',
  data:{
    message:'Hello World!',
    name:'I am Vue!'
  }
})
>>>>>>> 739cf027f2865ec00d24021bfe7edac0a92c98db
