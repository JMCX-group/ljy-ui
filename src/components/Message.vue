<template>
  <div id="message">

    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  import NavBarBottom from './NavBarBottom' // 引入子组件

  export default {
    name: 'Message',
    data() {
      return {
        clickedVal: 'message'
      }
    },
    components: { // 引入子组件
      NavBarBottom
    }
  }
</script>

<style>

</style>
