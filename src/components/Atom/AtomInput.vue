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
    border-top: 1.5px solid #cfcfcf;
    border-right:0px; 
    border-bottom: 1.5px solid  #cfcfcf;
    border-left: 1.5px solid  #cfcfcf;
    border-radius: 5px 0px 0px 5px;
    color:#cfcfcf;
}
</style>
