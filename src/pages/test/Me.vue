<template>
  <div class="container">
    <Navbar></Navbar>
    <img :src="shareImage" class="share-image" />
    <canvasdrawer :painting="painting" class="canvasdrawer" @getImage="eventGetImage"/>
    <button @click="eventSave" class="btn">保存图片</button>
  </div>
</template>

<script>
  import Navbar from '@/components/navbar'
  export default {
    components: {
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

        wx.removeStorageSync('painting')// 绘制图片完成 删除绘制图片需要的数据
      },
      eventDraw () {
        wx.showLoading({
          title: '生成中，再等等',
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
    mounted () {
      this.eventDraw()
    }

  }
</script>

<style scoped>
  .share-image {
    width: 325px;
    height: 483px;
    margin: 31px 25px 0;
    border-radius: 5px;
    box-shadow: 0 0 16px rgba(153,153,153,0.4);
  }
  .btn {
    width: 200px;
    height: 44px;
    line-height: 44px;

    background: #ff7f4f;
    box-shadow: 0 0 8px 0 rgba(255,127,79,0.4);
    border-radius: 22px;

    font-family: PingFangSC-Medium;
    color:#fff;
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 20px;


  }
</style>
