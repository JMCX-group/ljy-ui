<template>
  <div id="my">

    <nav-bar-top :clicked="clickedVal"></nav-bar-top>
  </div>
</template>

<script>
  import NavBarTop from './NavBarTop' // 引入子组件

  export default {
    name: 'my',
    data() {
      return {
        clickedVal: 'my'
      }
    },
    components: { // 引入子组件
      NavBarTop
    }
  }
</script>

<style>

</style>
