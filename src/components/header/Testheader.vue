<template>
    <div class="nav">
        <h2>{{title}}</h2>
        <p class="hage">ハゲ</p>
    </div>
</template>

<script>
export default {
    name:"test-header",
  data:function(){
  return{
      title:'Hello Header!!'
    }
  }
}
</script>

<style>
.hage
{
  color:brown
}

.nav
{
  display:flex;
  background-color: #2e2e2e;
}
</style>
