<template>
  <div id="nav-bar-top">
    <div class="navbar navbar-inverse navbar-inner navbar-fixed-bottom div-nav-bar">
      <div class="row">
        <div class="col-md-3 col-xs-3 div-img">
          <img v-if="clicked === 'with-tour'" class="img-nav-bar" v-on:click="toWithTour" src="../assets/nav-bar/with-tour-clicked.png" alt="">
          <img v-else class="img-nav-bar" v-on:click="toWithTour" src="../assets/nav-bar/with-tour.png" alt="">
        </div>
        <div class="col-md-3 col-xs-3 div-img">
          <img v-if="clicked === 'find'" class="img-nav-bar" v-on:click="toFind" src="../assets/nav-bar/find-clicked.png" alt="">
          <img v-else class="img-nav-bar" v-on:click="toFind" src="../assets/nav-bar/find.png" alt="">
        </div>
        <div class="col-md-3 col-xs-3 div-img">
          <img v-if="clicked === 'message'" class="img-nav-bar" v-on:click="toMessage" src="../assets/nav-bar/message-clicked.png" alt="">
          <img v-else class="img-nav-bar" v-on:click="toMessage" src="../assets/nav-bar/message.png" alt="">
        </div>
        <div class="col-md-3 col-xs-3 div-img">
          <img v-if="clicked === 'my'" class="img-nav-bar" v-on:click="toMy" src="../assets/nav-bar/my-clicked.png" alt="">
          <img v-else class="img-nav-bar" v-on:click="toMy" src="../assets/nav-bar/my.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBarTop',
    props: ['clicked'], // 引入到组件中的数据/变量
    methods: {
      toWithTour() {
        this.$router.push({path: '/with-tour'})
      },
      toFind() {
        this.$router.push({path: '/find'})
      },
      toMessage() {
        this.$router.push({path: '/message'})
      },
      toMy() {
        this.$router.push({path: '/my'})
      }
    }
  }
</script>

<style>
  /* 白色字体 + 背景透明 + 只保留底部白色边框 */
  .div-nav-bar {
    background-color: #ffffff;
    border: 0 solid #999999;
    border-top-width: 1px;
    height: 98px;
  }

  .div-img {
    text-align: center;
  }
  .img-nav-bar {
    height: 74px;
    margin-top: 16px;
  }
</style>
