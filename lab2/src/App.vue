<template>
    <navbar/>
    <router-view></router-view>
    
    
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'
import allemployess from './components/employees.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    navbar,
    allemployess
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
 
}
</style>
