<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <head-text Text="Test" Level="2">
    </head-text>
    <div 
      v-for="TestItem of TestData"
      :key="TestItem.id">
      <item-show
        v-bind:ImagePath="TestItem.path"
        v-bind:ItemName="TestItem.name">
      </item-show>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeadText from '@/components/Atom/AtomHeadText.vue'
import ItemShow from '@/components/Molecules/SimpleItem/index.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HeadText,
    ItemShow
  },
  data:function(){
    return{
      TestData:[
        {id:1,path:"icon/logo.png",name:"Test1"},
        {id:2,path:"icon/logo.png",name:"Test2"},
        {id:3,path:"icon/logo.png",name:"Test3"},
        {id:4,path:"icon/logo.png",name:"Test4"},
      ]
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
