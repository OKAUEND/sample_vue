<template>
        <input 
            v-on:input="onInput"
            v-bind:value="value"
            v-bind:type="type"
            v-bind:placeholder="placeholder"
            v-bind:class="ClassName"
            >
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
            default:'default'
        }
    },
    methods:{
        onInput(event){
            // 入力された値をmodelへ$emitする
            this.$emit("input",event.target.value)
        }
    }
}
</script>

<style scoped>
.default
{
    border:0px;
    background-color: #2c2c2c;
    font-size:20px;
    color:#d3d3d3;
    box-sizing:border-box;
    height: 100%;
    width: 100%;
    padding:5px;
}

</style>
