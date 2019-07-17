<template>
        <button 
            class="BaseButton"
            v-bind:class="ClassName" 
            v-on="onClick"
        >
        <slot name="ButtonText"></slot>
        </button>
</template>

<script>
export default {
    name:"Atom-Button",
    props:{
        ClassName:{
            type: String,
            default:'defaultButton'
        }
    },
    onClick:function()
    {
        return this.$emit('click');
    }
}
</script>

<style>
.BaseButton
{
    margin:0;
    padding:0;
    width:100%;
    background-color:#2c2c2c;
}

.defaultButton
{

}

.SearchButton
{
    background-color:#2c2c2c;
    border: 1.5px solid #cfcfcf;
    color:#cfcfcf;
}
</style>
