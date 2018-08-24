<template>
  <div class="container" :style="{'padding-top':top + 'px'}">
    <!--<Navbar></Navbar>-->
    <div class="userinfo" >
      <p class="username"><span class="foodname">{{userinfo.nickName}} </span> <span class="foodLabel">新晋吃货</span> </p>

      <img :src="userinfo.avatarUrl" alt="" v-if="userinfo.avatarUrl !== 'http://image.shengxinjing.cn/rate/unlogin.png'">


      <view class="oepn-data" v-else>
            <open-data  type="userAvatarUrl"  ></open-data>
      </view>

    </div>

    <YearProgress></YearProgress>
    <!--当前的进度-->
    <!--<Test></Test>-->


    <div class="fuli">
      <p>吃货福利 <span class="btn">签到领福利</span></p>
    </div>

    <div class="fuli">
      <p>心愿单</p>
    </div>
    <div class="fuli">
      <p>我参与的任务</p>
    </div>
    <div class="fuli">
      <p>我的盆友圈影响力<span class="btn">分享有礼</span></p>
    </div>


    <button class="join_msg">研究员福利&rarr;	</button>

    <!--<button v-if='userinfo.openId' @click='scanBook' class='btn'>添加图书</button>-->
    <button v-if="nologin" open-type="getUserInfo" lang="zh_CN" class='btn' >点击登录</button>

    <button open-type="openSetting">打开授权设置页</button>
    <button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">手机号 </button>



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
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userinfo.openId
      })
      showModal('添加成功', res.title)
    },
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },

   async login (e) {
     const self = this
      console.log(e)
     const auth_code = wx.getStorageSync('auth_code')

     console.log( e.mp.detail.userInfo)

     console.log(e.mp.detail.encryptedData)

      console.log(auth_code)
     console.log(e.mp.detail.iv)





      const urlData = {
        auth_code:auth_code,
        encryptedData: e.mp.detail.encryptedData,
        iv:e.mp.detail.iv,
        userinfo:e.mp.detail.userInfo

      }

      const res = await post('/v1/wx/save_user_info',urlData)
     console.log(res)








    },



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
  padding:0 30rpx;
  font-family: "PingFang SC";
  font-weight: Regular;

}
.userinfo{
  margin:10px auto;
  text-align:center;
  width:350px;
  height: 140px;
  background: #E0502C;
  opacity: 50%;
  position: relative;
  img , open-data{
    display: inline-block;
    /*border: 1px solid #000;*/
    width: 75px;
    height:75px;
    margin: 10px;
    border-radius: 50%;
    position: absolute;
    top:20px;
    right: 20px;
  }



}

#open-data {
  overflow: hidden;
  display: block;
  border-radius: 50%;
  /*display: inline-block;*/
  /*border: 1px solid #000;*/
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
  .username{
    color: #fff;
    min-width:100px ;
    height: 30px;
    top:20px;
    left: 15px;

  }
  .foodname{
    /*border: 1px solid #000;*/
    font-size: 20px;
    font-weight: 400;



  }
  .foodLabel{
    background: #fff7cc;
    display: inline-block;
    color: #000;
    width: 60px;
    height:25px;

    line-height: 25px;
    /*border: 1px solid #fff;*/
    border-radius: 17.5px;
    font-size: 10px;
    margin-left: 0;
    /*top:20px;*/
    /*left: 20px;*/
    /*margin-left: 5px;*/
  }


  .fuli{
    width: 350px;
    height: 60px;
    margin: 10px auto;
    border-bottom: 1px solid #979797;
    p{
      /*border: 1px solid #000;*/
      line-height: 60px;
      position: relative;
      font-size: 18px;
    }
    p span{
      display: inline-block;
      font-size: 10px;
      width: 88px;
      height: 23px;
      line-height: 23px;
      border-radius: 17.5px;
text-align: center;
      position: absolute;
      right: 10px;
      top:18.5px

    }
  }



  .join_msg{
    display: inline-block;
    width: 60px;
    height: 60px;
    background: red;
    border-radius: 50%;
      font-size: 11px;
    line-height: 20px;
    color: #fff;
    float: right;
    margin: 10px;
  }


</style>







