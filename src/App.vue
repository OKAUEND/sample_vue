<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <head-text Text="Test" Level="2">
    </head-text>
    <show-content 
      v-model="ItemData">
    </show-content>
    {{ ItemData.ProductionCount }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeadText from '@/components/Atom/AtomHeadText.vue'
import ShowContent from '@/components//Molecules/ProductionContent/index.vue'
import 'normalize.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HeadText,
    ShowContent
  },
  data:function(){
    return{
        ItemData:{
          ID:1,
          Name:"TEST",
          ItemLevel:1,
          ImagePath:"icon/logo.png",
          ProductionCount:1,
          ChildItem:[
            {
                id:1,
                childimage:"icon/logo.png",
                childname:"1"
            },
            {
                id:2,
                childimage:"icon/logo.png",
                childname:"2"
            },
            {
                id:3,
                childimage:"icon/logo.png",
                childname:"3"
            },
                            {
                id:4,
                childimage:"icon/logo.png",
                childname:"4"
            },
                            {
                id:5,
                childimage:"icon/logo.png",
                childname:"5"
            },
                            {
                id:6,
                childimage:"icon/logo.png",
                childname:"6"
            },
          ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
