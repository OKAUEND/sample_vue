<template>
    <div>
        <form action="" class="SearchForm">
            <atom-input
                
                ></atom-Input>
            <atom-button 
                ClassName="[ClassName]">
                <template 
                    v-slot:ButtonText>
                        Search
                </template>
            </atom-Button>
        </form>
    </div>
</template>

<script>
import AtomButton from '../Atom/AtomButton.vue'
import AtomInput from '../Atom/AtomInput.vue'
export default {
    name:'SearchForm',
    components:{
        AtomButton,
        AtomInput
    },
    methods:
    {
    },
    data:function(){
        return{
            ClassName:[

            ]
        }
    }
}
</script>

<style>
.SearchForm
{
    display: flex;
    
    width:400px;
}
</style>


