import Vue from 'vue'
import App from './App.vue'
import Header from './components/header/header.vue'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  template:'<App/>',
  components:{App}
})

new Vue({
  el:"#header",
  template:'<Header/>',
  components:{Header}
})