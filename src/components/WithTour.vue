<template>
  <div id="with-tour">

    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  import NavBarBottom from './NavBarBottom' // 引入子组件

  export default {
    name: 'WithTour',
    data() {
      return {
        clickedVal: 'with-tour'
      }
    },
    components: { // 引入子组件
      NavBarBottom
    }
  }
</script>

<style>

</style>
