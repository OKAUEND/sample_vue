<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <head-text Text="Test" Level="2" />
    <div v-for="(item,index) in DataList"
        v-bind:key="item.ID">
      <show-content 
        v-model="DataList[index]">
      </show-content> 
    </div>
    <!-- {{ this.DataList[0] }} -->
    <check-box v-bind:test="TESTDATA" v-on:change="onChange">
    </check-box>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeadText from '@/components/Atom//HeadText/AtomHeadText.vue'
import ShowContent from '@/components//Molecules/ProductionContent/index.vue'
import CheckBox from '@/components/Atom//Input/AtomCheckBox.vue'
import atomlabel from '@/components/Atom//Text/AtomLabel.vue'
import 'normalize.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HeadText,
    ShowContent,
    CheckBox,
    atomlabel
  },
  data:function(){
    return{
        DataList:[
          {
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
          },
          {
                ID:2,
                Name:"Apple",
                ItemLevel:2,
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
    ],
    TESTDATA:{
      ID:1,
      Name:"TEST",
      ItemLevel:1,
      ImagePath:"icon/logo.png",
      ProductionCount:1,
    },
    CheckedItem:[],
  }
},
methods:{
  onChange:function(value){
    console.log(value)
    if(this.CheckedItem.length){
      this.CheckedItem.push(value)
    }

    const exists = this.CheckedItem.some(List => List.ID === value.ID)
    if(exists){
      
    }
    else{
      this.CheckedItem.push(value)
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
