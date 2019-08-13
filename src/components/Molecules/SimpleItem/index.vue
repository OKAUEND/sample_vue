<template>
    <div class="SimpleShow">
        <item-icon
            v-bind:img_path="ImagePath">
        </item-icon>
        <item-text
            v-bind:Text="ItemName">
        </item-text>
    </div>
</template>

<script>
import ItemIcon from '@/components/Atom/AtomImage.vue'
import ItemText from '@/components/Atom/AtomHeadText.vue'
export default {
    name:"mole-simpleItem",
    components:{
        ItemIcon,
        ItemText
    },
    props:{
        ImagePath:{
            type:String,
            default:""
        },
        ItemName:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
.SimpleShow{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

