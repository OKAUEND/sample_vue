<template>
      <nav id="nav">
        <div class="left_Side header_item">
        </div>
        <div class="Header_logo">
          <header-icon
            v-bind:img_path=img_src
            class="--medium --radius">
          </header-icon>
        </div>
        <div class="header_item">
          <search-form>
          </search-form>
        </div>
      </nav>
</template>

<script>
import SearchForm from "@/components/Molecules/SearchForm/index.vue"
import HeaderIcon from "@/components/Atom/AtomImage.vue"
export default {
    name:"test-header",
    data:function(){
    return{
        title:'Hello Header!!',
        img_src:'icon/logo.png'
      }
    },
    components:{
      SearchForm,
      HeaderIcon
    }
}
</script>

<style>
#nav
{
  display:flex;
  background-color: #2e2e2e;
  justify-content: space-between;
  align-items: center;
  right: 0;
  left: 0;
  height: 70px;
}

/* リセットCSSを実装したら消す */
h2
{
  margin:0;
  padding: 0;
}
/* ------------- */


#nav > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding:5px;
  box-sizing: border-box;
}

@media screen and (min-width: 1px) and (max-width: 780px) {
  .left_Side
  {
    visibility: hidden;
    position: absolute;
  }
  .Header_logo
  {
    width:75px;
  }
  .header_item
  {
    flex: 1;
  }

}

@media screen and (min-width: 781px){
  
  .header_item
  {
    width:350px;
  }

  .Header_logo
  {
    flex: 1;
  }

}

</style>
