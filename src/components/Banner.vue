<template>
  <div id="banner">
    <div class="div-carousel">

      <swiper :options="swiperOption">
        <!--<swiper-slide><img :src="this.imgUrl[0]" class="img-responsive " alt=""></swiper-slide>-->
        <swiper-slide><img src="../assets/demo-img/banner1.jpg" class="img-responsive " alt=""></swiper-slide>
        <swiper-slide><img src="../assets/demo-img/banner2.jpg" class="img-responsive " alt=""></swiper-slide>
        <swiper-slide><img src="../assets/demo-img/banner3.jpg" class="img-responsive " alt=""></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>

    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'Banner',
    data() {
      return {
        imgUrl: [
          '../assets/demo-img/banner1.jpg',
          '../assets/demo-img/banner2.jpg',
          '../assets/demo-img/banner3.jpg'
        ],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000,
          autoHeight: true,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style>
  .div-carousel {
    margin-top: 88px;
  }
</style>
