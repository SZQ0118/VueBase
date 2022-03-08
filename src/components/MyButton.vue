<!--
 * @Description: 
 * @Author: Shenziqi
 * @Date: 2022-03-08 17:15:39
-->
<template>
  <div>
      <h2>哈哈哈</h2>
      <button @click="count++">{{count}}</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count:0
        }
    },
}
</script>

<style>
    h2:{
        color: #bfa;
    }
</style>