<template>
  <div id="with-tour">
    <nav-bar-top></nav-bar-top>

    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  import NavBarTop from './NavBarTop' // 引入子组件
  import NavBarBottom from './NavBarBottom' // 引入子组件

  export default {
    name: 'WithTour',
    data() {
      return {
        clickedVal: 'with-tour'
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
