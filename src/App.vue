<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <keep-alive :include="list">
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/> -->


    <keep-alive :include="list">
      <router-view v-if="list.indexOf($route.name)>-1"/>
    </keep-alive>
    <router-view v-if="list.indexOf($route.name) == -1"/>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      list:this.$root.list,
      isIn_:function (argument) {
        // body...
        let str = this.$route.name;
        if(this.list.indexOf(str) > -1){
          return true
        }
       return false
         
      }
    }
    
  },
  methods:{
    isIn:function (argument) {
        // body...
        let str = this.$route.name;
        if(this.list.indexOf(str) > -1){
          return true
        }
       return false
         
      }
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
