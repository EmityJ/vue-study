<template>
  <div class="countNumber">
    数量：{{count}}
    <button @click="$store.commit('add')">增加</button>
    <button @click="$store.dispatch('getCountNumAfter1S')">2S后增加</button>
    <br>
    偶数：{{evenCount}}
    {{name}}
  </div>
</template>
<script>
export default {
  name:'child',
  data() {
      return {
      }
  },
  computed:{
    count(){
      return this.$store.getters.getCount
    },
    evenCount(){
      return this.$store.getters.getEvenCount
    },
    name(){
      return this.$store.state.user.name
    }
  }
}
</script>

<style>
.countNumber{
  margin-top: 20px;
  font-size: 50px;
}
button{
  font-size: 50px;
}
</style>





















