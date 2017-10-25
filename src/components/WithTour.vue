<template>
  <div id="with-tour">
    <nav-bar-top></nav-bar-top>
    <banner></banner>
    <with-tour-list :listData="listData"></with-tour-list>
    <nav-bar-bottom :clicked="clickedVal"></nav-bar-bottom>
  </div>
</template>

<script>
  // 引入子组件
  import NavBarTop from './NavBarTop'
  import NavBarBottom from './NavBarBottom'
  import Banner from './Banner'
  import WithTourList from './WithTourList'

  export default {
    name: 'WithTour',
    data() {
      return {
        clickedVal: 'with-tour',
        listData: [
          {id: 1, name: 'Sissy夏夏', avatar: '/static/demo-img/avatar1', age: 19, gender: 0, city: '中国·北京', time: '2017.10.10', desc: '想和旅游经验丰富的人去北欧游，带我增长见识。', img: 'img1.jpg'},
          {id: 2, name: '马先生860', avatar: '../assets/demo-img/avatar2', age: 32, gender: 1, city: '中国·北京', time: '2017.10.09', desc: '征集女大学生一桶去日本跑温泉。', img: 'img2.jpg'},
          {id: 3, name: 'Sissy夏夏', avatar: '../assets/demo-img/avatar1', age: 19, gender: 0, city: '中国·北京', time: '2017.10.01', desc: '想和旅游经验丰富的人去北欧游，带我增长见识。', img: 'img1.jpg'},
        ]
      }
    },
    components: { // 引入子组件
      NavBarTop,
      NavBarBottom,
      Banner,
      WithTourList
    }
  }
</script>

<style></style>
