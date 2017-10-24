<template>
  <div id="find">

    <nav-bar :clicked="clickedVal"></nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar' // 引入子组件

  export default {
    name: 'Find',
    data() {
      return {
        clickedVal: 'find'
      }
    },
    components: { // 引入子组件
      NavBar
    }
  }
</script>

<style>

</style>
