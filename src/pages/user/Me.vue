<template>
  <div class="container">
    <!--<Navbar></Navbar>-->
    <!--<div class="navbartitle" :style="{'height':top+'px'}"><span>我的研究院</span></div>-->
    <div class="navbar" :style="{'padding-top':top + 'px'}">
      <div class="header">
        <div class="status-bar" :style="{height:statusBarHeight +'px'}"></div>
        <div class="title-bar" :style="{height:titleBarHeight + 'px'}">
          <div class="title">我的</div>
        </div>
      </div>
    </div>
    <div class="userinfo">
      <!--<div class="userinfo"  >-->
      <img class="avatar" :src='userinfo.avatar_url'>
      <p class="username">
        <span class="foodname">{{userinfo.nick_name}}</span>
        <span class="foodLabel">{{userinfo.level_display}}</span>
      </p>
      <span class="score">{{userinfo.point.total_acquired}}<span class="score_text">个小麻花</span></span>

      <!--<div class="desc">-->
      <!--<span class="small_score">小麻花积分</span>-->
      <!--<span class="small_score_text">你还有3000{{}}个小麻花可以使用，快去使用</span>-->
      <!--<img src="" alt="">-->
      <!--</div>-->

      <!--<img src="http://pbmrxkahq.bkt.clouddn.com/setIcon.png" alt="" class="setIcon">-->

      <div class="setAddress" @click="setAddress"><span>收货地址&nbsp;&gt;</span></div>
    </div>

    <!--<form :report-submit="true" @submit="getPhone" id="phoneForm">-->
    <!--<button formType="submit">-->
    <!--<div class="getPhone">-->
    <!--<span class="list_title">登录手机号，同步全渠道优惠</span>-->
    <!--<span class="getPhoneBtn">填写</span>-->
    <!--</div>-->
    <!--</button>-->
    <!--</form>-->

    <div class="formBox">
      <!--<form  :report-submit="true"  @submit="getPhone">-->
      <!--<button  formType="submit" >-->
      <!--<div class="getPhone" >-->
      <!--<span class="list_title" >登录手机号，同步全渠道优惠</span>-->
      <!--<span class="getPhoneBtn">填写</span>-->
      <!--</div>-->
      <!--</button>-->
      <!--</form>-->
      <!--<form  :report-submit="true" @submit="sign_in">-->
      <!--<button formType="submit">-->
      <!--<div class="mylist">-->
      <!--<img src="http://pbmrxkahq.bkt.clouddn.com/%E7%AD%BE%E5%88%B0icon.png" alt="">-->
      <!--<span class="list_title">签到</span>-->
      <!--<span class="list_btn">签到赢取8折券</span>-->
      <!--</div>-->
      <!--</button>-->
      <!--</form>-->
      <form :report-submit="true" @submit="goMygroup">
        <button formType="submit">
          <div class="mylist">
            <img src="http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E6%8B%BC%E5%9B%A2%E8%AE%A2%E5%8D%95icon.png"
                 alt="">
            <span class="list_title">我的拼团订单</span>
          </div>
        </button>
      </form>

      <form :report-submit="true" @submit="myBoon">
        <button formType="submit">
          <div class="mylist">
            <img src="http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E6%8A%BD%E5%A5%96icon.png" alt="">
            <span class="list_title">我的抽奖</span>
          </div>
        </button>
      </form>

      <!--<form  :report-submit="true"  @submit="myStore">-->
      <!--<button formType="submit" >-->
      <!--<div class="mylist">-->
      <!--<img src="http://pbmrxkahq.bkt.clouddn.com/%E9%9B%B6%E9%A3%9F%E5%BA%93icon.png" alt="">-->
      <!--<span class="list_title">我的零食库</span>-->
      <!--<span class="list_btn">分享有礼</span>-->
      <!--</div>-->
      <!--</button>-->
      <!--</form>-->

      <!--<form  :report-submit="true" @submit="myPublic">-->
      <!--<button  formType="submit">-->
      <!--<div class="mylist">-->
      <!--<img src="http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E5%8F%91%E5%B8%83icon.png" alt="">-->
      <!--<span class="list_title">我的发布</span>-->
      <!--</div>-->
      <!--</button>-->
      <!--</form>-->
      <!--<form  :report-submit="true" @submit="my_trove">-->
      <!--<button >-->
      <!--<div class="mylist">-->
      <!--<img src="http://pbmrxkahq.bkt.clouddn.com/%E6%94%B6%E8%97%8Ficon.png" alt="">-->
      <!--<span class="list_title">我的收藏</span>-->
      <!--</div>-->
      <!--</button>-->
      <!--</form>-->
    </div>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1" v-if="login_show">获取权限</button>


  </div>
</template>
<script>
  import qcloud from 'wafer2-client-sdk'
  import YearProgress from '@/components/YearProgress'
  import {showSuccess, post, showModal} from '@/utils/util'
  import {checkSession} from '@/utils/wx'
  import config from '@/config'
  import Navbar from '@/components/navbar'
  import {chooseAddress} from '@/utils/wx'


  export default {
    components: {
      YearProgress,
      Navbar
    },
    data() {
      return {
        userinfo: {
          avatar_url: 'http://image.shengxinjing.cn/rate/unlogin.png',
          nick_name: '',
          level_display: '游客',
          is_authorized: true,
          point: {
            total_acquired: 0,
            available_count: 0
          }
          },
        nologin: true,
        login_show: true,
        globalData: {
          statusBarHeight: 0,
          titleBarHeight: 0

        },
        statusBarHeight: 0,
        titleBarHeight: 0,
        top: 0

      }
    },
    methods: {
      goMygroup(e) {
        let that = this
        let form_id = e.mp.detail.formId
        wx.navigateTo({
          url: '/pages/user/myGroup/main'
        })
      },
      myBoon(e) {
        let that = this
        console.log(e)
        let form_id = e.mp.detail.formId
        console.log(form_id)
        wx.navigateTo({
          url: '/pages/user/myboonList/main'
        })
      },
      onGotUserInfo(e) {
        console.log(e)
      },
      getUserInfo1() {
        let that = this
        console.log('click事件首先触发')
        if (wx.canIUse('button.open-type.getUserInfo')) {
          // 用户版本可用
        } else {
          console.log('请升级微信版本')
        }
      },
      async bindGetUserInfo(e) {
        let that = this
        let sesssion_res = await checkSession()
        if (sesssion_res.errMsg === 'checkSession:ok') {
          // session_key 未过期，并且在本生命周期一直有效
          if (e.mp.detail.rawData) {
            // 用户按了允许授权按钮
            let data = [e.mp.detail.encryptedData, e.mp.detail.iv, e.mp.detail.signature, e.mp.detail.rawData]
            await that.$store.dispatch('saveInfo', {...data})
            that.login_show = false

            let userinfo = wx.getStorageSync('userinfo') //{nick_name,avatar_url}


            that.userinfo.nick_name = userinfo.nick_name
            that.userinfo.avatar_url = userinfo.avatar_url

          } else {
            // 用户按了拒绝按钮
            console.log('用户按了拒绝按钮')
          }
        } else {
          console.log('session 过期')
          await that.$store.dispatch('signup')
          that.login_show = false
          console.log('重新登录成功')
        }
      },
      async setAddress(e){
        let res = await chooseAddress()
        let address = {
          name: res.name,            // 名字
          postal_code: res.postalCode, // 邮编
          tel_phone: res.telNumber, // 电话
          province: res.provinceName, // 省
          city: res.cityName, // 市
          district: res.countyName, // 区
          detail: res.detailInfo// 详细

        }

        data = [uuid, auth_code, address]
        let address_res = await that.$store.dispatch('groupAddress', {...data})

      },
      async getPorfile(){
        let that = this
        let user_profile = await that.$store.dispatch('user_info')
        let user = user_profile.user
        let userinfoInit = {
          avatar_url:  user.avatar_url,
          nick_name:  user.nick_name,
          level_display:  user.level_display,
          is_authorized: user.is_authorized,
          point:user.point
        }
        wx.setStorageSync('allUserinfo',userinfoInit)
        if(userinfoInit.is_authorized === true){
          that.login_show = false
          that.userinfo = userinfoInit
        }else{
          that.login_show = true
        }
      }
    },
    async onShow() {
     this.getPorfile()

    },
    onLoad() {
      const vm = this
      vm.getPorfile()

      wx.getSystemInfo({
        success: function (res) {
          let totalTopHeight = 68

          if (res.model.indexOf('iPhone X') !== -1) {
            totalTopHeight = 88
          } else if (res.model.indexOf('iPhone') !== -1) {
            totalTopHeight = 64
          }

          let statusBarHeight = res.statusBarHeight
          let titleBarHeight = totalTopHeight - res.statusBarHeight // 44

          vm.statusBarHeight = statusBarHeight

          vm.titleBarHeight = titleBarHeight
          vm.top = statusBarHeight + titleBarHeight
        },
        failure() {
          vm.globalData.statusBarHeight = 0
          vm.globalData.titleBarHeight = 0
        }
      })
    }
  }
</script>

<style lang='scss' scoped>
  .container {
    /*padding:0 30rpx;*/
    font-family: "PingFang SC";
    font-weight: Regular;
    background: #f9f9f9;
  }

  .navbartitle {
    background: #fff;
    /*border: 1px solid #000;*/
    width: 375px;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 17px;
    letter-spacing: -0.4px;
    color: #000;
    position: fixed;
    top: 0;
    z-index: 101;
    span {
      display: inline-block;
      width: 83px;
      height: 24px;
      /*border: 1px solid #000;*/
      margin-top: 32px;
    }
  }

  .userinfo {
    margin: 0px auto 10px;
    text-align: center;
    width: 375px;
    height: 176px;
    background: linear-gradient(152deg, rgba(255, 216, 197, 1%), rgba(255, 177, 148, 1%), rgba(255, 176, 147, 1%));
    position: relative;
    /*border:1px solid green;*/
    .avatar, open-data {
      display: inline-block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      position: absolute;
      top: 40px;
      left: 25px;
    }
  ;
    .setIcon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 20px;
      right: 25px;
    }
    .score {
      display: inline-block;
      /*border: 1px solid #000;*/
      height: 12px;
      line-height: 12px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #fff;
      position: absolute;
      top: 87px;
      left: 110px;
      .score_text {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        line-height: 12px;
      }
    ;
    }
  ;
    .username {
      color: #fff;
      min-width: 100px;
      height: 20px;
      line-height: 20px;
      font-family: PingFangSC-Medium;
      font-size: 20px;
      position: absolute;
      top: 53px;
      left: 110px;
      /*border:1px solid #000;*/
      text-align: left;


      .foodname{
        /*border: 1px solid red;*/
        float: left;
        max-width: 195px;
        overflow: hidden;
        /*text-overflow:ellipsis;*/
        text-overflow: clip;
        white-space: nowrap;

      }
      .foodLabel {
               display: inline-block;
               color: #fff;

               font-family: PingFangSC-Regular;
               border-radius: 13px;
               font-size: 10px;
               margin-left: 5px;
               background: rgba(#fc9e79, 0.4);
               padding: 2px 5px;
             }

    }
  ;

  ;
    .desc {
      height: 16px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #fff;
      position: absolute;
      bottom: 20px;
      left: 25px;
      .small_score {
        display: inline-block;
        font-size: 10px;
        line-height: 16px;
        margin-right: 10px;
        border: 1px solid #fff;
        border-radius: 2px;
        box-sizing: border-box;
      }
    ;
      .small_score_text {
        font-size: 12px;
        line-height: 12px;
      }

    };
    .setAddress{
      /*border:1px solid blue;*/

      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color:#fff;
      position: absolute;
      top:87px;
      right: 25px;



    }
  }

  #open-data {
    overflow: hidden;
    display: block;
    border-radius: 50%;
    /*display: inline-block;*/
    border: 1px solid #000;
    width: 75px;
    height: 75px;
    margin: 10px;
    position: absolute;
    top: 20px;
    right: 20px;

  }

  .userinfo p {
    display: inline-block;
    text-align: center;
    position: absolute;

  }

  form::after {
    border: none;
  }

  #phoneForm {
    background: #fff !important;
    display: block;
    padding: 0;
    width: 375px;
    height: 44px;
    margin-bottom: 10px;
    font-family: PingFangSC-Regular;
    /*border: 1px solid #000;*/
    button {
      display: block;
      background: #fff;
      border: 1px solid #fff;
      border-radius: 0;
      /*border: 1px solid blue ;*/
      .getPhone {
        width: 325px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        /*border:1px solid red;*/
        margin: 0 auto;
        position: relative;
        border-radius: 0;

        .list_title {
          display: inline-block;
          /*border: 1px solid blue;*/
          line-height: 44px;
          color: #333;
          text-align: left;
          position: absolute;
          left: 0;

        }
      ;
        .getPhoneBtn {
          display: inline-block;
          /*margin-left: 130px;*/
          /*text-align: center;*/
          height: 30px;
          line-height: 30px;
          color: #ff7f47;
          width: 60px;
          border: 1px solid #ff7f47;
          margin-top: 7px;
          margin-left: 265px;

        }
      ;

      }
    ;

      button::after {
        border: none;
        border-radius: 0;
      }

    }

  }

  .formBox {
    /*border:1px solid red;*/
    background: #fff;
    .mylist {
      border-bottom: 1px solid #eee;
      height: 70px;
      width: 325px;
      margin: 0px auto;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #fff;
      position: relative;
      img {
        width: 20px;
        height: 20px;
        /*border: 1px solid #000;*/
        display: inline-block;
        position: absolute;
        top: 25px;
        left: 0
      }
    ;
      .list_title {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        font-family: PingFangSC-Medium;
        color: #454553;
        position: absolute;
        top: 25px;
        left: 35px;
      }
    ;
      .list_btn {
        display: inline-block;
        height: 24px;
        border-radius: 23px;
        background: #ff7f47;
        box-shadow: 0px 1px 1px 0px #ffffff;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        text-align: center;
        line-height: 24px;
        padding: 0 12px;
        position: absolute;
        bottom: 25px;
        right: 0;
      }
    }
    form {
      border: none;
      display: block;
      button {
        display: block;
        background: none;
        margin: 0 auto;
        border: none;
      }
    ;
      button::after {
        border-radius: 0;
        border: none;

      }
    }
  }

  button::after {
    border: none;
  }

  //顶部标题

  .navbar {
    box-sizing: border-box;
    height: auto;
    background: #fff;
    border-bottom: 1px solid #f7f7f7;

  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    z-index: 100;

  }

  .status-bar {
    background: rgba(255, 255, 255, 1);
  }

  .title-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .title {
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 17px;
    letter-spacing: -0.4px;
    width: 150px;
    display: inline-block;

  }


</style>







