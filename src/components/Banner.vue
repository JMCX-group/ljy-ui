<template>
  <div id="banner">
    <div class="div-carousel">

      <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner img-style">
          <div class="item active">
            <img src="../assets/demo-img/banner1.jpg" class="img-responsive center-block" alt="First slide">
          </div>
          <div class="item">
            <img src="../assets/demo-img/banner2.jpg" class="img-responsive center-block" alt="Second slide">
          </div>
          <div class="item">
            <img src="../assets/demo-img/banner3.jpg" class="img-responsive center-block" alt="Third slide">
          </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
        <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
  }
</script>

<style>
  .div-carousel {
    margin-top: 88px;
  }
  .item {
    text-align: center;
  }
</style>
