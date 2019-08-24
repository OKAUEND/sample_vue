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
                    class="--bottom"
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
            <div class="inputform">
                <!-- 個数ボタン 
                    対応1~999までとする-->
                <atom-button
                    v-on:onClick="decrementValue">
                    <template
                        v-slot:ButtonText
                        >
                        -
                    </template>
                </atom-button>
                <atom-input
                    v-model="inputData"
                    ClassName="Countform"
                    v-bind:type="type"
                    v-bind:Pattern="Pattern"
                    v-bind:maxlength="maxlength">
                </atom-input>
                <atom-button
                    v-on:onClick="incrementValue">
                    <template
                        v-slot:ButtonText
                        >
                        +
                    </template>
                </atom-button>
            </div>
        </div>
    </div>
</template>

<script>
// Atom
import HeadString from '@/components/Atom/AtomHeadText.vue'
import SpanText from '@/components/Atom/AtomSpan.vue'
import ItemImage from '@/components/Atom/AtomImage.vue'
import AtomButton from '@/components/Atom/AtomButton.vue'
import AtomInput from '@/components/Atom/AtomInput.vue'

// Molecules
import ChildList from '@/components/Molecules/ChildrenItem/index.vue'
export default {
    name:"mole-productioncontent",
    components:{
        HeadString,
        SpanText,
        ItemImage,
        AtomButton,
        AtomInput,
        ChildList
    },
    model:{
        prop:"ItemData"
    },
    props:{
        ItemData:{
            ID:{
                type:Number,
                default:0
            },
            Name:{
                type:String,
                default:"TEST"
            },
            ItemLevel:{
                type:Number,
                default:0 
            },
            ImagePath:{
                type:String,
                default:"defined"
            },
            ProductionCount:{
                type:Number,
                default:1
            },
            ChildItem:[
                {
                    id:{
                        type:Number,
                        default:0
                    },
                    childimage:{
                        type:String,
                        default:"icon/none.png"
                    },
                    childname:{
                        type:String,
                        default:"Default"
                    }
                }
            ]
            // あとは後で作る
        }
    },
    data:function(){
        return{
            Pattern:"^[1-9][0-9]*",
            maxlength:3,
            type:"tel"
        }
    },
    computed:{
        inputData:{
            get(){
                return this.ItemData.ProductionCount
            },
            set(ProductionCount){
                this.updateEmitValue(Number(ProductionCount))
            }
        }
    },
    methods:{
        CreatingItemLevel:function(){
            return `ITEM LEVEL ${this.ItemData.ItemLevel}`
        },
        updateEmitValue(ProductionCount) {
            this.$emit('input', { ...this.ItemData, ProductionCount })
        },
        incrementValue(){
            this.inputData += 1
        },
        decrementValue(){
            if(this.inputData > 1)
            {
                this.inputData -= 1
            }
        }
    },

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
    align-items: flex-end;
    height: 50%;
}

.ChildrenList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 50%;
}

.childitems{
    display: inline-block;
    /* height: 20px; */
}

.inputform{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 75%;
}

.left{
    background-color: brown;
}

.center{
    background-color:cornflowerblue;
}

.right{
    background-color: olive;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
