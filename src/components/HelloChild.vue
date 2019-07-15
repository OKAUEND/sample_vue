<template>
    <div>
        <h2><slot name="title"></slot></h2>
        <!-- ここにpropsに設定された値を表示留守 -->
        <p><slot name="text"></slot></p>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            title:"Hello Child!"
        }
    },
    props:['message']
}
</script>
