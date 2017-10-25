<template>
  <div id="find">
    <nav-bar-top></nav-bar-top>
    <find-list :listData="listData"></find-list>
    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  import NavBarTop from './NavBarTop' // 引入子组件
  import NavBarBottom from './NavBarBottom'
  import FindList from "./FindList.vue"; // 引入子组件

  export default {
    name: 'Find',
    data() {
      return {
        clickedVal: 'find',
        listData: [
          {id: 1, name: '东欧3天之旅-国航直飞浪', from: '北京-跟团游', img: '', star: 4.5, price: 420},
          {id: 2, name: '南欧4天之旅-海航直飞漫', from: '上海-跟团游', img: '', star: 5, price: 520},
          {id: 3, name: '西欧5天之旅-南航直飞温', from: '广州-跟团游', img: '', star: 3.5, price: 620},
          {id: 4, name: '北欧6天之旅-东航直飞情', from: '深圳-跟团游', img: '', star: 1, price: 720}
        ]
      }
    },
    components: { // 引入子组件
      FindList,
      NavBarTop,
      NavBarBottom
    }
  }
</script>

<style>

</style>
