<template>
    <div>
        <p>{{title}}</p>
        <!-- ここにpropsに設定された値を表示留守 -->
        <p>{{message}}</p>
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
