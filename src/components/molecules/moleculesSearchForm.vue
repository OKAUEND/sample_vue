<template>
    <div class="SearchForm"
            v-bind:class="ClassObject">
            <!-- <atom-label class="Label_Large">
                <template v-slot:LabelText>
                    {{ TestText }}
                </template>
            </atom-label> -->
            <atom-input
                class="SearchInput"
                v-model="sampleText"
                >
            </atom-Input>
            <atom-button 
                class="SearchButton"
                v-on:onClick="onEventClick"
                >
                <template
                    v-slot:ButtonText
                    >
                    <div v-if="ClassObject.isClicked">
                        Clicked!
                    </div>
                    <div v-else>
                        Search!
                    </div>
                </template>
            </atom-Button>
    </div>
</template>

<script>
import AtomButton from '../Atom/AtomButton.vue'
import AtomInput from '../Atom/AtomInput.vue'
import AtomLabel from '../Atom/AtomLabel.vue'
export default {
    name:'Mole-SearchForm',
    components:{
        AtomButton,
        AtomInput,
        AtomLabel,
    },
    data:function(){
        return{
            sampleText:"",
            TestText:"TEST",
            ClassObject:{
                isClicked:false,
            }
        }
    },
    methods:
    {
        onEventClick:function()
        {
            this.ClassObject.isClicked = !this.ClassObject.isClicked
            alert(this.ClassObject.isClicked)
            this.$emit(this.sampleText)
        }
    },
}
</script>

<style scoped>
.SearchForm
{
    display: flex;
    width:250px;
    height: 30px;
    border:1px solid #00000000;
    border-radius: 5px;
}

.SearchForm:focus-within
{
    border:1px solid red;
}

</style>


