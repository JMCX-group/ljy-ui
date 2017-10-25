<template>
  <div id="nav-bar-top">
    <div class="navbar navbar-inverse navbar-inner navbar-fixed-top div-nav-bar-top">
      <div class="row">

        <div class="col-sm-3 col-xs-3 col-btn-group">
          <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle btn-city" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">北京</button>
            <button type="button" class="btn btn-default dropdown-toggle btn-city" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="span-img-nav-bar-caret-down">
                <img class="img-nav-bar-caret-down" src="../assets/nav-bar/caret-down.png" alt="">
              </span>
            </button>
            <ul class="dropdown-menu ul-drop-li">
              <li><a href="#">北京</a></li>
              <li><a href="#">上海</a></li>
              <li><a href="#">广州</a></li>
            </ul>

            <!--<input type="text" v-model="keyword" class="form-control input-keyword" placeholder="目的地/关键词">-->
            <!--<img class="img-nav-bar-filter" v-on:click="filter" src="../assets/nav-bar/filter.png" alt="">-->
          </div>
        </div>

        <div class="col-sm-7 col-xs-7">
          <input type="text" v-model="keyword" class="form-control input-keyword" placeholder="目的地/关键词">
        </div>

        <div class="col-sm-2 col-xs-2 col-filter-style">
          <img class="pull-right img-nav-bar-filter" v-on:click="filter" src="../assets/nav-bar/filter.png" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBarTop',
    props: ['clicked'], // 引入到组件中的数据/变量
    data (){
      return {
        keyword: ''
      }
    },
    methods: {
      filter() {
//        alert('过滤')
      }
    }
  }
</script>

<style>
  .div-nav-bar-top {
    background-color: #000000;
    height: 88px;
    font-size: 28px;
  }

  .col-btn-group {
    text-align: center;
  }
  .btn-group {
    height: 64px;
    margin-top: 12px;
  }
  .btn-city {
    height: 64px;
    background-color: transparent;
    border: 0;
    color: #ffffff;
    font-size: 28px;
  }

  .input-keyword {
    height: 64px;
    margin-top: 12px;
    background-color: #3b3a48;
    border: 0;
    border-radius: 8px;
    font-size: 28px;
    text-align: center;
    color: #ffffff;
  }

  .img-nav-bar-caret-down {
    width: 20px;
  }
  .img-nav-bar-filter {
    height: 40px;
    margin-top: 24px;
  }

  .ul-drop-li {
    text-align: right;
    font-size: 28px;
  }

  .col-filter-style {
    margin-left: -24px;
  }
</style>
