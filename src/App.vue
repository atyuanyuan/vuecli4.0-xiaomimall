<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'App',
  components: {},
  data(){
      return{

      }
  },
  mounted(){
    //   storage.setItem('user',{a:1})
    //   storage.setItem('abc',{a:1},'user')
    //   storage.clear('a', 'user')
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset'
</style>
