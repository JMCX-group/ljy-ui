<template>
  <div id="my">

    <nav-bar :clicked="clickedVal"></nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar' // 引入子组件

  export default {
    name: 'my',
    data() {
      return {
        clickedVal: 'my'
      }
    },
    components: { // 引入子组件
      NavBar
    }
  }
</script>

<style>

</style>
