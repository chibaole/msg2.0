<template>
  <div class="container">
    <!--pages/test/canvas.wxml-->

    <!-- 画布大小按需定制 这里我按照背景图的尺寸定的  -->
    <canvas canvas-id="shareImg" style="width:545px;height:771px"></canvas>

    <!-- 预览区域  -->
    <div :hidden='hidden' class='preview'>
      <image :src='prurl' mode='widthFix'></image>
      <button  @click='save'>保存分享图</button>
    </div>

    <button class='share' type='primary' @click='share'>生成分享图</button>

  </div>
</template>

<script>

  export default {


    data(){
      return{
        hidden: true

      }
    },
    onLoad(){
      let promise1 = new Promise(function (resolve, reject) {
        wx.getImageInfo({
          src: '../../../static/img/qrcode.jpg',
          success: function (res) {
            console.log(res)
            resolve(res);
          }
        })
      });
      let promise2 = new Promise(function (resolve, reject) {
        wx.getImageInfo({
          src: '../../../static/img/qrbg.png',
          success: function (res) {
            console.log(res)
            resolve(res);
          }
        })
      });
      Promise.all([
        promise1, promise2
      ]).then(res => {
        console.log(res)
        const ctx = wx.createCanvasContext('shareImg')

        //主要就是计算好各个图文的位置
        ctx.drawImage('../../' + res[0].path, 158, 190, 210, 210)
        ctx.drawImage('../../' + res[1].path, 0, 0, 545, 771)

        ctx.setTextAlign('center')
        ctx.setFillStyle('#ffffff')
        ctx.setFontSize(22)
        ctx.fillText('分享文字描述1', 545 / 2, 130)
        ctx.fillText('分享文字描述2', 545 / 2, 160)

        ctx.stroke()
        ctx.draw()
      })
    },
    methods:{
      /**
       * 生成分享图
       */
      share () {
        var that = this

        console.log('生成开始')
        wx.showLoading({
          title: '努力生成中...'
        })
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 545,
          height: 771,
          destWidth: 545,
          destHeight: 771,
          canvasId: 'shareImg',
          success: function (res) {
            console.log(res.tempFilePath);


//            that.setData({
//              prurl: res.tempFilePath,
//              hidden: false
//            })

            that.prurl = res.tempFilePath
            that.hiddebn = false



            wx.hideLoading()
          },
          fail: function (res) {
            console.log(res)
          }
        })
      },

      /**
       * 保存到相册
       */
      save () {
        var that = this
        //生产环境时 记得这里要加入获取相册授权的代码
        wx.saveImageToPhotosAlbum({
          filePath: that.data.prurl,
          success(res) {
            wx.showModal({
              content: '图片已保存到相册，赶紧晒一下吧~',
              showCancel: false,
              confirmText: '好哒',
              confirmColor: '#72B9C3',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定');


//                  that.setData({
//                    hidden: true
//                  })

                  that.hidden = true
                }
              }
            })
          }
        })

      }
    }


  }


</script>








<style scoped>



</style>
