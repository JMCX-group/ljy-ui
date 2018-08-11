<template>
  <div id="my">
    <div class="container div-custom-bg-color">

      <div class="row div-top-bg">
        <div class="vertical-center div-personal-info">
          <img class="center-block" src="../assets/logo.png"/>
        </div>
      </div>

      <div class="row div-order-wallet"></div>

      <div class="row div-function-list-1">
        <div class="row div-function-item"></div>
        <div class="row div-function-line center-block"></div>
        <div class="row div-function-item"></div>

        <div class="row div-function-item"></div>

        <div class="row div-function-item"></div>

        <div class="row div-function-item"></div>
      </div>

      <div class="row div-function-list-2">
        <div class="row div-function-item"></div>
      </div>

      <div class="row div-function-list-3">
        <div class="row div-function-item"></div>

        <div class="row div-function-item"></div>
      </div>

    </div>

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
  .div-custom-bg-color {
    min-height: 1300px;
    background-color: #ebebeb;
    margin-bottom: 150px;
  }

  .div-top-bg {
    background: url("../assets/demo-img/banner1.jpg") fixed center no-repeat;
    background-size: cover;
    padding-bottom: 46%;
  }

  /* div 水平垂直居中 */
  .vertical-center{
    position: relative;
    /*top: 50%;*/
    left: 50%;
    transform: translate(-50%, 75%);
  }

  .div-personal-info img {
    height: 166px;
    width: 166px;
  }

  .div-order-wallet {
    height: 130px;
    background-color: white;
  }

  .div-function-list-1,
  .div-function-list-2,
  .div-function-list-3 {
    margin-top: 24px;
  }
  .div-function-item {
    height: 98px;
    background-color: white;
    margin: 0;
  }
  .div-function-line {
    height: 2px;
    background-color: #ebebeb;
    margin-left: 39px;
    margin-right: 39px;
  }
  .div-function-list-1 {

  }
</style>
