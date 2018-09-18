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
  export default {

    props: ['navbar_title','delta'],
    data () {
      return {
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
      goBack () {
        let that =this
        let deltaNum= that.delta
        let title =that.navbar_title

//        if(title === '团购'){
//          deltaNum
//        }else {
//          deltaNum = 1
//        }
        var this_page = getCurrentPages()
        var last_page = this_page[this_page.length-1]
        console.log(this_page)
        console.log(last_page)
        if(last_page.route === "pages/groupPj/order/main"){
          console.log('返回首页')
                wx.switchTab({
                  url:'/pages/home/main'
                })
        }else {
          wx.navigateBack({
            delta:1
          })


        }



      }
    },

    mounted () {
      const vm = this
//      console.log(    vm.statusBarHeight ,vm.titleBarHeight)
    },
    onLoad () {
      const vm = this
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
        failure () {
          vm.globalData.statusBarHeight = 0
          vm.globalData.titleBarHeight = 0
        }
      })
    }
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

  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255,1);
    z-index: 100;
    /*border: 1px solid #000;*/
    border-bottom: 1px solid #f7f7f7;


  }

  .status-bar {
    background: rgba(255, 255, 255, 1);
    /*border: 1px solid #000;*/

  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 1);

    /*border: 1px solid red;*/
  }
.back-btn{
  /*border: 1px solid blue;*/
  width: 100px;

}
  .back-btn img{
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 15px;
  }

  .title{
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 17px;
    letter-spacing: -0.4px;
    width: 150px;
    display: inline-block;
    /*margin: 0 auto;*/
    margin-right: 112.5px;
    /*border: 1px solid #000;*/

  }





  .scroll-content .item {
    height: 60rpx;
    line-height: 60rpx;
    border-bottom: 1rpx solid #eee;
  }

</style>

