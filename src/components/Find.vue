<template>
  <div id="find">

    <nav-bar-top :clicked="clickedVal"></nav-bar-top>
  </div>
</template>

<script>
  import NavBarTop from './NavBarTop' // 引入子组件

  export default {
    name: 'Find',
    data() {
      return {
        clickedVal: 'find'
      }
    },
    components: { // 引入子组件
      NavBarTop
    }
  }
</script>

<style>

</style>
