<template>
  <div id="message">

    <nav-bar :clicked="clickedVal"></nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar' // 引入子组件

  export default {
    name: 'Message',
    data() {
      return {
        clickedVal: 'message'
      }
    },
    components: { // 引入子组件
      NavBar
    }
  }
</script>

<style>

</style>
