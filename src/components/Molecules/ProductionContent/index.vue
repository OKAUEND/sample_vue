<template>
    <div class="ProductionItem">
        <div class="left">
            <!-- 製作物のアイコン -->
            <item-image
                v-bind:img_path=ItemData.ImagePath
                class="--medium"
                >
            </item-image>
        </div>
        <div class="cneter">
            <!-- レベルとアイテム名と素材 -->
            <div class="ParentItem">
                <!-- レベルとアイテム名 -->
                <head-string
                    Text="Name"
                    Level="2"
                >
                </head-string>
                <span-text
                    v-bind:Text="CreatingItemLevel()"
                    >
                >
                </span-text>
            </div>
            <div class="ChildrenList">
                <!-- 素材の種類と素材数 -->
                <div v-for="item of ItemData.ChildItem"
                :key="item.id" class="childitems">
                    <child-list
                        v-bind:ImagePath="item.childimage"
                        v-bind:ItemName="item.childname">
                    </child-list>
                </div>
            </div>
        </div>
        <div class="right">
            <!-- 追加ボタン -->
        </div>
    </div>
</template>

<script>
import HeadString from '@/components/Atom/AtomHeadText.vue'
import SpanText from '@/components/Atom/AtomSpan.vue'
import ItemImage from '@/components/Atom/AtomImage.vue'
import ChildList from '@/components/Molecules/ChildrenItem/index.vue'
export default {
    name:"mole-productioncontent",
    components:{
        HeadString,
        SpanText,
        ItemImage,
        ChildList
    },
    props:{
        // ItemData:{
        //     ID:{
        //         type:String,
        //         default:"0"
        //     },
        //     Name:{
        //         type:String,
        //         default:"TEST"
        //     },
        //     ItemLevel:{
        //         type:String,
        //         default:"Level0"  
        //     },
        //     ImagePath:{
        //         type:String,
        //         default:"defined"
        //     },
        //     ChildItem:[
        //         {
        //             id:{
        //                 type:String,
        //                 default:""
        //             },
        //             childimage:{
        //                 type:String,
        //                 default:"icon/none.png"
        //             },
        //             childname:{
        //                 type:String,
        //                 default:"Default"
        //             }
        //         }
        //     ]
        //     // あとは後で作る
        // }
    },
    data:function(){
        return{
            ItemData:{
                ID:1,
                Name:"TEST",
                ItemLevel:1,
                ImagePath:"icon/logo.png",
                ChildItem:[
                    {
                        id:1,
                        childimage:"icon/logo.png",
                        childname:"CHILD1"
                    },
                    {
                        id:2,
                        childimage:"icon/logo.png",
                        childname:"CHILD2"
                    },
                    {
                        id:3,
                        childimage:"icon/logo.png",
                        childname:"CHILD3"
                    },
                                    {
                        id:4,
                        childimage:"icon/logo.png",
                        childname:"CHILD4"
                    },
                                    {
                        id:5,
                        childimage:"icon/logo.png",
                        childname:"CHILD5"
                    },
                                    {
                        id:6,
                        childimage:"icon/logo.png",
                        childname:"CHILD6"
                    },
                ]
                // あとは後で作る
            }
        }
    },
    methods:{
        CreatingItemLevel:function(){
            return `ITEM LEVEL${this.ItemData.ItemLevel}`
        }
    }
}
</script>

<style scoped>

.ProductionItem
{
    display: flex;
    flex-direction: row;
}

.ParentItem{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.ChildrenList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.childitems{
    display: inline-block;
    /* height: 20px; */
}

.left{
    background-color: brown;
}

.center{
    background-color:cornflowerblue;
}

.right{
    background-color: olive;
}

</style>
