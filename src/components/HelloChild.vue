<template>
    <div>
        <h2><slot name="text"></slot></h2>
        <!-- ここにpropsに設定された値を表示留守 -->
        <p>ハロー世界!</p>
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
