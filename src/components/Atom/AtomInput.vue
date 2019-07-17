<template>
        <input>
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
        }
    },
    methods:{
        onInput(event){
            this.$emit("input",event.target.value)
        }
    }
}
</script>
