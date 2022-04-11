<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/distlogo.png">
    <child></child>
  </div>
</template>

<script>
import child from './components/child.vue'

export default {
  name: 'App',
  components: {
    child
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
