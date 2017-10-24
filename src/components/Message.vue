<template>
  <div id="message">

    <nav-bar-top :clicked="clickedVal"></nav-bar-top>
  </div>
</template>

<script>
  import NavBarTop from './NavBarTop' // 引入子组件

  export default {
    name: 'Message',
    data() {
      return {
        clickedVal: 'message'
      }
    },
    components: { // 引入子组件
      NavBarTop
    }
  }
</script>

<style>

</style>
