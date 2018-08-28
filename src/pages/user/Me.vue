<template>
  <!--<div class="container" :style="{'padding-top':top + 'px'}">-->
  <div class="container" >

  <!--<Navbar></Navbar>-->
    <div class="navbartitle" :style="{'height':top+'px'}"><span>我的研究院</span></div>
    <div class="userinfo" >
      <img src="http://image.shengxinjing.cn/rate/unlogin.png" >
      <p class="username">
        <span class="foodname">{{userinfo.nickName}}</span>
        <span class="foodLabel">新晋吃货</span>
      </p>
      <span class="score">2.3K<span class="score_text">个小麻花</span></span>
      <div class="desc">
        <span class="small_score">小麻花积分</span>
        <span class="small_score_text">你还有3000{{}}个小麻花可以使用，快去使用</span>
        <img src="" alt="">
      </div>
    </div>

    <!--<button class="join_msg">研究员福利&rarr;	</button>-->
    <!--&lt;!&ndash;<button v-if='userinfo.openId' @click='scanBook' class='btn'>添加图书</button>&ndash;&gt;-->
    <!--<button v-if="nologin" open-type="getUserInfo" lang="zh_CN" class='btn' >点击登录</button>-->
    <!--<button open-type="openSetting">打开授权设置页</button>-->
    <!--<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">手机号 </button>-->
    <div class="mylist">
      <img src="" alt="">
      <span class="list_title">签到</span>
      <span class="list_btn">签到赢取8折券</span>
    </div>
    <div class="mylist">
      <img src="" alt="">
      <span class="list_title" @click="goMygroup">我的拼团订单</span>
      <!--<span class="list_btn">签到赢取8折券</span>-->
    </div>
    <div class="mylist">
      <img src="" alt="">
      <span class="list_title" @click="myBoon">我的抽奖</span>
      <!--<span class="list_btn">签到赢取8折券</span>-->
    </div>
    <div class="mylist">
      <img src="" alt="">
      <span class="list_title">我的零食库</span>
      <span class="list_btn">分享有礼</span>
    </div>
    <div class="mylist">
      <img src="" alt="">
      <span class="list_title">我的发布</span>
      <!--<span class="list_btn">签到赢取8折券</span>-->
    </div>


  </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import YearProgress from '@/components/YearProgress'

import {showSuccess, post, showModal} from '@/util'
import config from '@/config'

import Navbar from '@/components/navbar'

export default {
  components: {
    YearProgress,
    Navbar
  },
  data () {
    return {
      userinfo: {
        avatarUrl: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nickName: '空空的地方'
      },
      nologin:true,
      top:68
    }
  },
  methods: {
    goMygroup(){
      wx.navigateTo({
          url:'/pages/user/myGroup/main'
      })
    },
    myBoon(){
      wx.navigateTo({
        url:'/pages/user/myboonList/main'
      })
    }




  },
  onShow () {
    let that = this
    let userinfo = wx.getStorageSync('userinfo')

    if (userinfo) {
      this.userinfo = userinfo
    }else {
       console.log('暂无用户信息 点击登录' )
    }

  },
  onLoad () {

    const  vm = this
    wx.getSystemInfo({
      success: function(res) {
        let totalTopHeight = 68

        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
          console.log('iphonex')

        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
          console.log('iphone')

        }

        let statusBarHeight = res.statusBarHeight
        let titleBarHeight = totalTopHeight - res.statusBarHeight //44



        console.log(  statusBarHeight, titleBarHeight )

        vm.statusBarHeight = statusBarHeight

        vm.titleBarHeight = titleBarHeight
        vm.top = statusBarHeight + titleBarHeight

      },
      failure() {
        console.log('fail')
        vm.globalData.statusBarHeight = 0
        vm.globalData.titleBarHeight = 0
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.container{
  /*padding:0 30rpx;*/
  font-family: "PingFang SC";
  font-weight: Regular;

}
.navbartitle{
  background: #fff;
  /*border: 1px solid #000;*/
  width: 375px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 17px;
  letter-spacing: -0.4px;
  color: #000;
  span{
    display: inline-block;
    width: 83px;
    height: 24px;
    /*border: 1px solid #000;*/
    margin-top: 32px;
  }


}
.userinfo{
  margin:0px auto 10px;
  text-align:center;
  width:375px;
  height: 176px;
  background: linear-gradient(152deg, rgba(255,216,197,1%) , rgba(255,177,148,1%)  ,rgba(255,176,147,1%)   );
  position: relative;
  img , open-data{
    display: inline-block;
    width: 70px;
    height:70px;

    border-radius: 50%;
    position: absolute;
    top:40px;
    left: 25px;


    };
  .score{
    display: inline-block;
    /*border: 1px solid #000;*/
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #fff;
    position: absolute;
    top:86px;
    left: 110px;
    .score_text{
      font-family: PingFangSC-Regular;
      font-size: 12px;
    };
  };
  .username{
    color: #fff;
    min-width:100px ;
    height: 20px;
    font-family: PingFangSC-Medium;
    font-size: 20px;
    position: absolute;
    top:53px;
    left: 110px;


  };

  .foodLabel{
    display: inline-block;
    color: #000;
    width: 54px;
    height:18px;
    font-family: PingFangSC-Regular;
    border-radius: 13px;
    font-size: 10px;
    margin-left: 0;
    background: rgba(#fc9e79, 0.4);

  };
  .desc{

    height:16px;
    /*border:1px solid #000;*/
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 25px;
    .small_score{
      display: inline-block;
      font-size: 10px;
      line-height: 16px;
      margin-right: 10px;
      border:1px solid #fff;
      border-radius: 2px;

      box-sizing: border-box;

    };
    .small_score_text{
      font-size: 12px;
      line-height: 12px;
    }

  }





}

#open-data {
  overflow: hidden;
  display: block;
  border-radius: 50%;
  /*display: inline-block;*/
  border: 1px solid #000;
  width: 75px;
  height:75px;
  margin: 10px;
  position: absolute;
  top:20px;
  right: 20px;

}
.userinfo p{
  display: inline-block;
  text-align: center;
  position: absolute;

}
.mylist{

  /*border:1px solid #000;*/
  border-bottom: 2px solid #ededed;
  height: 70px;
  width: 325px;
  margin: 0px auto ;
  font-family:PingFangSC-Medium ;
  font-size: 18px;
  color: #fff;
  position: relative;
  img{
    width: 20px;height: 20px;
    /*border: 1px solid #000;*/
    display: inline-block;
    position: absolute;
    top:25px;

  };
  .list_title{

    display: inline-block;
    height: 20px;
    line-height: 20px;
    /*border: 1px solid #000;*/
    font-family: PingFangSC-Medium;
    color:#454553;
    position: absolute;
    top:25px;
    left: 35px;
  };
  .list_btn{
    display: inline-block;
    height:24px;
    border-radius: 23px;
    background: #ff7f47;
    box-shadow: 0px 1px 1px 0px #ffffff;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    text-align: center;
    line-height: 24px;
    padding: 0 12px;
    position:absolute;
    bottom:25px;
    right: 0;

  }


}


</style>







