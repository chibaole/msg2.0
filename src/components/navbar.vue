<template>
    <div class="navbar" :style="{'padding-top':top + 'px'}">
      <view class="header">
        <view class="status-bar" :style="{height:statusBarHeight +'px'}"></view>
        <view class="title-bar" :style="{height:titleBarHeight + 'px'}">

          <view class="back-btn" @click="goBack()"><img src="http://p15hnzxrp.bkt.clouddn.com/left.png" alt=""></view>
          <view class="title">{{navbar_title}}</view>
        </view>
      </view>
    </div>
</template>
<!--:style="{'--bkgImage': 'url(' + project.background + ')', '--bkgImageMobile': 'url(' + project.backgroundRetina + ')'}"-->


<script>

  export  default {

      props:['navbar_title'],
      data(){
        return{
          globalData:{
            statusBarHeight:0,
            titleBarHeight:0

          },
          statusBarHeight:0,
          titleBarHeight:0,
          top:0



        }
      },
    methods:{
        goBack(){
          wx.navigateBack({
              url:''
          })

        }
    },

    mounted() {
      const vm = this
//      console.log(    vm.statusBarHeight ,vm.titleBarHeight)

    },
    onLoad(){
        const  vm = this
      wx.getSystemInfo({
        success: function(res) {
          let totalTopHeight = 68

          if (res.model.indexOf('iPhone X') !== -1) {
            totalTopHeight = 88

          } else if (res.model.indexOf('iPhone') !== -1) {
            totalTopHeight = 64

          }

          let statusBarHeight = res.statusBarHeight
          let titleBarHeight = totalTopHeight - res.statusBarHeight //44




          vm.statusBarHeight = statusBarHeight

          vm.titleBarHeight = titleBarHeight
          vm.top = statusBarHeight + titleBarHeight

        },
        failure() {
          vm.globalData.statusBarHeight = 0
          vm.globalData.titleBarHeight = 0
        }
      })


    },
//    export const login = () => new Promise((resolve, reject) => {
//      console.log('进入login函数')
//      wx.login({
//        success (res) {
//          console.log('login 函数ok')
//          resolve(res)
//        },
//        fail (e) {
//          console.log('login 函数fail')
//          reject(e)
//        }
//      })
//    })
  }

</script>
<style scoped>





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
    background: rgba(255, 255, 255, 0.1);
    z-index: 100;
    /*border: 1px solid #000;*/

  }

  .status-bar {
    background: rgba(255, 255, 255, 0.1);
  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*border: 1px solid #000;*/
  }
.back-btn{
  /*border: 1px solid #000;*/

}
  .back-btn img{
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 15px;
  }

  .title{
    text-align: center;

    width: 150px;
    display: inline-block;
    margin: 0 auto;
    /*border: 1px solid #000;*/

  }
  /*.title-bar .back-btn, .title-bar .tablet {*/
    /*width: 116px; !* 保持一致使标题居中 *!*/
  /*}*/




  .scroll-content .item {
    height: 60rpx;
    line-height: 60rpx;
    border-bottom: 1rpx solid #eee;
  }

</style>

