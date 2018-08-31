<template>
  <div class="container">
    <Navbar></Navbar>
    <img :src="shareImage" class="share-image" />
    <canvasdrawer :painting="painting" class="canvasdrawer" @getImage="eventGetImage"/>

    <button @click="eventSave" class="btn">保存图片</button>
  </div>
</template>

<script>
  // import card from '@/components/card'
  import Navbar from '@/components/navbar'

  export default {

    components:{
      Navbar

    },
    data () {
      return {
        shareImage: '',
        painting: {}
      }
    },

    mounted () {
    },

    methods: {
      eventGetImage (event) {
        console.log(event)
        wx.hideLoading()
        this.shareImage = event.target.tempFilePath

        wx.removeStorageSync('painting')//绘制图片完成 删除绘制图片需要的数据


      },
      eventDraw () {
        wx.showLoading({
          title: '绘制分享图片中',
          mask: true
        })
//
        this.painting = wx.getStorageSync('painting')
      },
      eventSave () {
        wx.saveImageToPhotosAlbum({
          filePath: this.shareImage,
          success (res) {
            wx.showToast({
              title: '保存图片成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    },
    mounted(){
      this.eventDraw()

    },


  }
</script>

<style scoped>
  .share-image {
    width: 325px;
    height: 483px;
    margin: 31px 25px 25px;
    border: 1px solid #CCCCCC;
    box-shadow: 0 0 16px #999999;
  }
  .btn {
    width: 100%;
  }
</style>
