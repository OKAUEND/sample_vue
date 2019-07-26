<template>
        <input 
            v-bind:class="ClassName"
            v-on:input="onInput">
</template>

<script>
export default {
    name:"Atom-input",
    props:{
        value:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:"text"
        },
        placeholder:{
            type:String
        },
        ClassName:{
            type: String,
            default:'defaultButton'
        }
    },
    methods:{
        onInput(event){
            this.$emit("input",event.target.value)
        }
    }
}
</script>

<style scoped>
.SearchInput
{
    padding:10px;
    border:0px;
    border-radius: 4px 0px 0px 4px;
    color:#cfcfcf;
    background-color:#424242;
}
</style>
