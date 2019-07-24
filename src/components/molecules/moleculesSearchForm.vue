<template>
    <div class="SearchForm">
            <atom-label class="Label_Large">
                <template v-slot:LabelText>
                    {{ TestText }}
                </template>
            </atom-label>
            <atom-input
                class="SearchInput"
                v-model="sampleText"
                >
            </atom-Input>
            <atom-button 
                class="SearchButton SearchForm--Last"
                v-on:onClick="onEventClick"
                >
                <template
                    v-slot:ButtonText
                    >
                    <div v-if="isClicked">
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
            isClicked:false
        }
    },
    methods:
    {
        onEventClick:function()
        {
            this.isClicked = !this.isClicked
            alert(this.isClicked)
            this.$emit(this.sampleText)
        }
    },
}
</script>

<style>
.SearchForm
{
    display: flex;
    width:400px;
    height: 30px;
}

.SearchForm--Last
{
    flex-basis:50px;
}
</style>


