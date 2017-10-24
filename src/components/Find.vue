<template>
  <div id="find">

    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  import NavBarBottom from './NavBarBottom' // 引入子组件

  export default {
    name: 'Find',
    data() {
      return {
        clickedVal: 'find'
      }
    },
    components: { // 引入子组件
      NavBarBottom
    }
  }
</script>

<style>

</style>
