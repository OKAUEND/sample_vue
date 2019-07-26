<template>
        <button 
            class="BaseButton"
            v-bind:class="ClassName" 
            v-on:click="onClick"
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
    methods:{
        onClick:function()
        {
            return this.$emit('onClick');
        }
    }

}
</script>

<style scoped>
.BaseButton
{
    margin:0;
    padding:0;
    width:100%;
    height: 100%;
    background-color:#2c2c2c;
}

.defaultButton
{
    margin:0;
}

.SearchButton
{
    border: 0px;
    border-radius: 0px 4px 4px 0px;
    color:#cfcfcf;
}
</style>
