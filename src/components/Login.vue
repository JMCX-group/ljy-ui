<template>
  <div id="login">
    <div class="container">
      <div class="div-centered">

        <div class="row">
          <div class="col-md-1 col-xs-1"></div>
          <div class="col-md-1 col-xs-1 col-phone">
            <img class="img-phone" src="../assets/login/phone.png" alt="">
          </div>
          <div class="col-md-10 col-xs-10">
            <div class="input-group">
              <input type="text" v-model="phoneNum" class="form-control input-phone" placeholder="手机号">
              <span class="input-group-addon span-info">
                <label>|</label>
                <label class="lbl-info">+86</label>
              </span>
            </div>
          </div>
        </div>

        <div class="row row-verify">
          <div class="col-md-1 col-xs-1"></div>
          <div class="col-md-1 col-xs-1 col-verify">
            <img class="img-verify" src="../assets/login/verify_code.png" alt="">
          </div>
          <div class="col-md-10 col-xs-10">
            <div class="input-group">
              <input type="text" v-model="verifyCode" class="form-control input-verify" placeholder="验证码">
              <span class="input-group-btn">
                <button class="btn btn-default btn-get-verify" v-on:click="getVerify" type="button">获取验证码</button>
              </span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-1 col-xs-1"></div>
          <div class="col-md-11 col-xs-11 col-login">
            <button class="btn btn-default btn-login" v-on:click="userLogin" type="button">登录</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        phoneNum: '',
        verifyCode: ''
      }
    },
    methods: {
      getVerify() {
        this.axios.post('http://localhost/api/get-verify', {
          phone: this.phoneNum
        }).then(response => {
          console.log(response.data)
        })
      },
      userLogin() {
        console.log(this.phoneNum + ':' + this.verifyCode)
        this.$router.push({ path: '/find' }) // 待接口调通，则放入then.后面执行
        this.axios.post('http://localhost/api/login', {
          phone: this.phoneNum,
          verify_code: this.verifyCode
        }).then(response => {
          console.log(response.data)
        })
      }
    }
  }
</script>

<style>
  #login {
    background-image: url("../assets/login/login_bg.png");
    background-size: cover;
    padding-bottom: 177.867%;
  }

  .col-phone,
  .col-verify{
    text-align: center;
    padding-left: 0;
  }
  .img-phone,
  .img-verify {
    height: 40px;
    margin-top: 23px;
  }
  .input-phone,
  .input-verify {
    height: 86px;
    width: 400px;
  }
  .row-verify {
    margin-top: 24px;
  }
  .lbl-info {
    width: 50px;
  }
  .btn-get-verify {
    height: 86px;
  }

  .col-login {
    text-align: center;
  }
  .btn-login {
    margin-top: 170px;
    width: 460px;
    height: 86px;
    background-color: transparent;
    color: #fff;
    font-size: 28px;
  }

  /* 白色字体 + 背景透明 + 只保留底部白色边框 + 字体28px */
  .input-phone,
  .input-verify,
  .span-info,
  .btn-get-verify  {
    color: #fff;
    background-color: transparent;
    border: 0 solid #fff;
    border-bottom-width: 1px;
    font-size: 28px;
  }

  /* input焦点样式 */
  input:focus {
    outline: none;
    border-color: #f5f5f5;
    box-shadow: 0 0 2px #fff;
  }

  /* DIV居中 */
  .div-centered {
    width: 520px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -260px;
    font-size: 30px;
  }
</style>
