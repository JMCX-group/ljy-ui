<template>
  <div id="my">

    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  import NavBarBottom from './NavBarBottom' // 引入子组件

  export default {
    name: 'my',
    data() {
      return {
        clickedVal: 'my'
      }
    },
    components: { // 引入子组件
      NavBarBottom
    }
  }
</script>

<style>

</style>
