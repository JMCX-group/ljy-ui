<template>
  <div id="with-tour-list">

    <div class="div-list-data" v-for="data in listData">

      <div class="row row-style">
        <div class="col-sm-2 col-xs-2 col-avatar">
          <!--<img class="img-avatar img-circle" :src="data.avatar"/>-->
          <img class="img-avatar img-circle" src="../assets/demo-img/avatar1.jpg"/>
        </div>

        <div class="col-sm-6 col-xs-6 col-all-info-center">
          <div class="row">
            <p class="name-font-size">{{data.name}}</p>
          </div>
          <div class="row">
            <span class="info-font-size">{{data.age}}岁</span>
            <span class="info-font-size">
              <img v-if="data.gender === 0" class="img-gender" src="../assets/with-tour/female.png">
              <img v-else class="img-gender" src="../assets/with-tour/male.png"></span>
            <span class="info-font-size">{{data.city}}</span>
          </div>
        </div>

        <div class="col-sm-4 col-xs-4 col-other-info">
          <div class="row info-font-size row-other-info"><p class="pull-right">发布于</p></div>
          <div class="row info-font-size row-other-info"><p class="pull-right">{{data.time}}</p></div>
        </div>
      </div>

      <div class="row row-style">
        <div class="col-sm-1 col-xs-1">
          <div class="span-line"
               v-bind:class="[data.gender === 0 ? 'span-color-red' : 'span-color-blue']"></div>
        </div>
        <div class="col-sm-11 col-xs-11 col-desc">旅游愿望：{{data.desc}}</div>
      </div>

      <div class="row row-style row-img-show">
        <!--<img :src="data.avatar"/>-->
        <img src="../assets/demo-img/banner1.jpg"/>
      </div>

      <div class="div-color-separated"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'WithTourList',
    props: ['listData'], // 引入到组件中的数据/变量
  }
</script>

<style>
  .row-style {
    margin: 0; /* Fuck 15px for iPhone */
  }
  #with-tour-list {
    margin-bottom: 98px;
  }

  .col-avatar{
    padding-left: 0;
  }
  .img-avatar {
    width: 100px;
    height: 100px;
    margin: 24px;
  }
  .img-gender {
    height: 28px;
    margin: 0 9px;
  }
  .name-font-size {
    font-size: 30px;
  }
  .info-font-size {
    font-size: 24px;
    color: #808080;
    height:50px;
  }

  .col-all-info-center {
    margin-top: 24px;
    width: 50%;
    height: 100px;
  }
  .col-all-info-center .row {
    padding-left: 24px;
  }
  .col-other-info {
    margin-top: 24px; /* 24（期望样式）- 15（BootStarp样式）= 9px */
    height: 100px;
  }
  .row-other-info {
    margin-right: 9px; /* 24（期望样式）- 15（BootStarp样式）= 9px */
  }

  .span-line {
    width: 8px;
    height: 35px;
    margin-top: 5px;
    margin-left: 15px;
  }
  .span-color-red {
    background-color: #ed3833;
  }
  .span-color-blue {
    background-color: #33a5ed;
  }
  .col-desc {
    font-size: 32px;
    margin-left: -30px;
  }

  .row-img-show{
    padding: 24px;
    display: inline-block;
  }
  .row-img-show img {
    border-radius: 8px;
    width: 100%;
    vertical-align: middle;
  }

  .div-color-separated {
    height: 24px;
    background-color: #ebebeb;
  }
</style>
