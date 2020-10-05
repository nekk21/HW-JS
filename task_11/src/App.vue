<template>
  <div id="app">
    <Navibar />
    <Tab/>
  </div>
</template>

<script>

import Navibar from './components/Navibar.vue'
import Tab from './components/Tab.vue'

export default {
  data(){
    return{

    }
  },

  name: 'App',
   components: {
   Navibar,
   Tab,
  },
 
  
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
