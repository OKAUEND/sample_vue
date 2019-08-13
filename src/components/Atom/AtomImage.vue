<template>
    <img 
        class="Test_radius"
        v-bind:src="pathRequier()">
</template>

<script>
export default {
    name:"atom-image",
    props:{
        img_path:{
            type:String,
            default:""
        },
        ClassName:{
            type:String,
            default:"img_default"
        }
    },
    methods:{
        pathRequier:function(){
            return require(`@/static/${this.img_path}`)
        }
    }
}
</script>

<style scoped>
/* .img_default
{

} */
.Test_radius
{
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

/* Size */
/* .img--small
{

}

.img--medium
{

}

.img--large
{

} */
</style>

