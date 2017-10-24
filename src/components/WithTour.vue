<template>
  <div id="with-tour">

    <nav-bar :clicked="clickedVal"></nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar' // 引入子组件

  export default {
    name: 'WithTour',
    data() {
      return {
        clickedVal: 'with-tour'
      }
    },
    components: { // 引入子组件
      NavBar
    }
  }
</script>

<style>

</style>
