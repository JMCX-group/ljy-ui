<template>
  <div id="with-tour">

    <nav-bar-top :clicked="clickedVal"></nav-bar-top>
  </div>
</template>

<script>
  import NavBarTop from './NavBarTop' // 引入子组件

  export default {
    name: 'WithTour',
    data() {
      return {
        clickedVal: 'with-tour'
      }
    },
    components: { // 引入子组件
      NavBarTop
    }
  }
</script>

<style>

</style>
