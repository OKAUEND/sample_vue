<template>
    <div class="SearchForm --medium">
            <!-- <atom-label class="Label_Large">
                <template v-slot:LabelText>
                    {{ TestText }}
                </template>
            </atom-label> -->
            <atom-input
                v-model="sampleText"
                class="SearchInput"
                type="text"
                placeholder="コメント"
                >
            </atom-Input>
            <atom-button 
                v-bind:class="[ButtonClass]"
                v-on:onClick="onEventClick"
                >
                <template
                    v-slot:ButtonText
                    >
                    <!-- <div v-if="ClassObject.isClicked">
                        Clicked!
                    </div>
                    <div v-else>

                    </div> -->
                    Search!
                </template>
            </atom-Button>
    </div>
</template>

<script>
import AtomButton from '../../Atom/AtomButton.vue'
import AtomInput from '../../Atom/AtomInput.vue'
import AtomLabel from '../../Atom/AtomLabel.vue'
export default {
    name:'mole-SearchForm',
    components:{
        AtomButton,
        AtomInput,
    },
    data:function(){
        return{
            sampleText:"",
            TestText:"TEST",
            ButtonClass:{
                'Button--green':false,
                'Button--red':false,
                'Button--small':true
            },
            InputClass:{
                
            }
        }
    },
    methods:
    {
        onEventClick:function()
        {
            this.$emit(this.sampleText)
        }
    },
}
</script>

<style scoped>
.SearchForm
{
    display: flex;
    border:0px solid #00000000;
    border-radius: 5px;
    box-shadow: 0 1px 3px #000;
}

/* .SearchForm:focus-within
{
    border:2px solid red;
} */

/* Size */
.--small
{
    width:300px;
    height: 30px;
}

.--medium
{
    width:400px;
    height:50px;
}

.--large
{
    width:250px;
    height: 30px;
}

</style>


