<template>
  <div class="container">
    <!--<h2>这个是一串标签选项</h2>-->

    <scroll-view scroll-x="true" class="xscroll_bar">
      <view :class="activeClass" v-for="item in menus"  @click="selected" data-id="item.menuId">
        <span>{{item.menu}}</span>
        <span></span>
        <img src="http://oxnbz75b8.bkt.clouddn.com/plus.png" alt="">
        <!--http://oxnbz75b8.bkt.clouddn.com/%E9%80%89%E6%8B%A9.png-->
      </view>
    </scroll-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeIndex: 0,
        activeClass: 'item',
        menus: [
          {
            'menuId': 1,
            'menu': '吃饱了'
          },
          {
            'menuId': 2,
            'menu': '没事干'
          },
          {
            'menuId': 3,
            'menu': '淘宝上的美食推荐'
          },
          {
            'menuId': 4,
            'menu': '研究院成果'
          }
        ]
      }
    },
    methods: {

      tabChange: function (e) {
        let that = this
        var index = e.currentTarget.dataset.index

        that.activeIndex = index
      },
      selected (e) {
        let that = this
      }

    },
    onShow: function () {
      let that = this
      // 页面显示
      var span = wx.getSystemInfoSync().windowWidth / that.menus.length + 'px'

      that.itemWith = this.menus.length <= 5 ? span : '160rpx'
    }
  }
</script>

<style scoped>


  .xscroll_bar {
    overflow-y: hidden;
    /*height: 80rpx;*/
    /*line-height: 80rpx;*/
    white-space: nowrap;
    display: flex;
    background: #fff;
    margin: 10px auto;

    /*border: 1px solid red;*/
  }



  .item{
    display: inline-block;
    background: #F2F4F8;
    text-align: center;
    /*background: #DE4F2B;*/
    font-size: 14px;
    color: #565664;
    height: 35px;
    /*width: 100px;*/
    /*line-height: 35px;*/
    /*border: 1px solid #000;*/
    border-radius: 17.5px;
    margin-left: 10px;
    padding: 0 10px;
    position: relative;


  }
  .selected{
    display: inline-block;
    /*background: #F2F4F8;*/
    text-align: center;
    background: #DE4F2B;
    font-size: 14px;
    color: #565664;
    height: 35px;
    /*width: 100px;*/
    /*line-height: 35px;*/
    border: 1px solid #000;
    border-radius: 17.5px;
    margin-left: 10px;
    padding: 0 10px;
    position: relative;
  }
  .item span, .selected span{
    display: inline-block;
    height: 35px;
    line-height: 35px;
  }
.item  img , .selected img{
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-bottom: 3px;
  margin-left: 5px;
}

.item img{}

  .item span:nth-child(2), .selected span:nth-child(2){
    height: 14px;
    /*margin-top: 10.5px;*/
    border-left: 1px dashed #000;
    margin: 0 3px;
    position: absolute;
    top:10.5px;
  }



</style>
