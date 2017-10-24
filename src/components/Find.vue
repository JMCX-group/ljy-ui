<template>
  <div id="find">
    <nav-bar-top></nav-bar-top>

    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  import NavBarTop from './NavBarTop' // 引入子组件
  import NavBarBottom from './NavBarBottom' // 引入子组件

  export default {
    name: 'Find',
    data() {
      return {
        clickedVal: 'find'
      }
    },
    components: { // 引入子组件
      NavBarTop,
      NavBarBottom
    }
  }
</script>

<style>

</style>
