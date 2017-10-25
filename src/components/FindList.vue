<template>
  <div id="find-list">
    <div class="div-list-data" v-for="data in listData">

      <div class="row row-style row-img-find-show">
        <!--<img :src="data.img"/>-->
        <img src="../assets/demo-img/banner2.jpg"/>
        <div class="div-find-img-fill">
          <span class="span-find-price-txt">首付</span>
          <span class="span-find-price-val">￥{{data.price}}元起</span>
        </div>
      </div>

      <div class="row row-style">
        <span class="find-name-font-size">{{data.name}}</span>
      </div>

      <div class="row row-style">
        <div class="col-sm-5 col-xs-5 col—find-desc">
          <span class="find-from-font-size">出发地：{{data.from}}</span>
        </div>
        <div class="col-sm-7 col-xs-7 col—find-desc">
          <span class="find-from-font-size">推荐指数：</span>
          <span v-show="Math.floor(data.star)>0" class="span-find-star"><img class="img-star" src="../assets/find/star.png" alt=""></span>
          <span v-show="Math.floor(data.star)>1" class="span-find-star"><img class="img-star" src="../assets/find/star.png" alt=""></span>
          <span v-show="Math.floor(data.star)>2" class="span-find-star"><img class="img-star" src="../assets/find/star.png" alt=""></span>
          <span v-show="Math.floor(data.star)>3" class="span-find-star"><img class="img-star" src="../assets/find/star.png" alt=""></span>
          <span v-show="Math.floor(data.star)>4" class="span-find-star"><img class="img-star" src="../assets/find/star.png" alt=""></span>
          <span v-show="String(data.star).length > 1" class="span-find-star"><img class="img-star" src="../assets/find/star-half.png" alt=""></span>
        </div>
      </div>

      <div class="div-color-separated"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FindList',
    props: ['listData'], // 引入到组件中的数据/变量
  }
</script>

<style>
  #find-list {
    margin-top: 88px;
    margin-bottom: 98px;
  }
  .row-style {
    margin: 0; /* Fuck 15px for iPhone */
  }

  .row-img-find-show {
    padding: 24px;
    display: inline-block;
    position: relative;
  }
  .row-img-find-show img {
    border-radius: 8px;
    width: 100%;
    vertical-align: middle;
  }

  .div-find-img-fill {
    width: 210px;
    height: 64px;
    line-height: 64px;
    background-color: rgba(10, 9, 27, 0.5);
    position: absolute;
    bottom: 48px;
    right: 24px;
  }
  .span-find-price-txt {
    margin-left: 20px;
    color: #ffffff;
    font-size: 24px;
  }
  .span-find-price-val {
    color: red;
    font-size: 28px;
  }

  .find-name-font-size {
    font-size: 30px;
    color: #000000;
    margin-left: 24px;
  }
  .find-from-font-size {
    font-size: 28px;
    color: #808080;
    margin-left: 9px;
  }
  .col—find-desc {
    margin-top: 20px;
    margin-bottom: 24px;
  }

  .span-find-star img {
    height: 20px;
    margin-top: -15px;
  }

  .div-color-separated {
    height: 24px;
    background-color: #ebebeb;
  }
</style>
