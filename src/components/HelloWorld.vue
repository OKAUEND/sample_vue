<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <hello-child>
        <template v-slot:title>
          Hello Child!!!!
        </template>
        <template v-slot:text>
          ハロー世界
        </template>
      </hello-child>
  </div>
</template>

<script>
import HelloChild from './HelloChild'
export default {
  name: 'HelloWorld',
  data:function(){
  return{
      title:'Hello World!!'
    }
  }
,
  components:
  {
    HelloChild
  }
}
</script>