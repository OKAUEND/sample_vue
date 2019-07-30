<template>
      <nav id="nav">
        <div class="sideitem">
          <h2>{{title}}</h2>
        </div>
        <div class="headerlogo">

        </div>
        <div class="sideitem">
          <search-form>
          </search-form>
        </div>
      </nav>
</template>

<script>
import SearchForm from "@/components/Molecules/SearchForm/index.vue"
export default {
    name:"test-header",
    data:function(){
    return{
        title:'Hello Header!!',
        img_src:'@/asset/logo.png'
      }
    },
    components:{
      SearchForm,
    }
}
</script>

<style>
#nav
{
  display:flex;
  background-color: #2e2e2e;
  align-items: center;
  right: 0;
  left: 0;
  height: 70px;
}

h2
{
  margin:0;
  padding: 0;
}

#nav > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#test
{
  width: 400px;
  height: 50px;
  background-color: azure;
}

</style>
