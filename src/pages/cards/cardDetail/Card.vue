<template>
<div class="container">
  <topScroll></topScroll>
  <topBar></topBar>
  <div class="free-WaterfallFlow">
      <div class="flex-wrap" v-for="item in list " :key='item.id' v-if="item.id%2!=''">
        <img mode="widthFix" :src="item.url">
        <div class="card-text">
          <h2 class="title">{{item.title}}</h2>
          <p class="text-onlyTwo">{{item.text}}</p>
        </div>

        <div class="like-btn" @click="like" :data-like="clicked">
          <img :src="likeImg " alt="">
          <span>{{item.likenum}}</span>
        </div>



      </div>

      <div class="flex-wrap" v-for="item in list" :key='item.index' v-if="item.id%2==''">
        <img mode="widthFix" :src="item.url">

        <div class="card-text">
          <h2 class="title">{{item.title}}</h2>
          <p class="text-onlyTwo">{{item.text}}</p>
        </div>
        <div class="like-btn" @click="like" :data-like='clicked'>
          <img :src="likeImg " alt="">
          <span>{{item.likenum}}</span>
        </div>
      </div>

  </div>



</div>
</template>
<script>
import {get} from '@/util'
import CommentList from '@/components/CommentList'
import Card from '@/components/Card'
import topBar from '@/components/top_bar'
import topScroll from '@/components/topScroll'

let col1H = 0; let col2H = 0

export default {
  data () {
    return {
      comments: [],
      books: [],
      userinfo: {},
      list: [
        {
          id: 1,
          url: 'http://pbmrxkahq.bkt.clouddn.com/640%20%281%29.jpeg',
//          http://pbmrxkahq.bkt.clouddn.com/640%20%281%29.jpeg
          title: '《虫师》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 2,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640.jpeg',
          title: '《loading》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 3,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640%20%282%29.jpeg',
          title: '《冰与火之歌》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 4,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640%20%281%29.jpeg',
          title: '《鹿丸》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 5,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640.jpeg',
          title: '《星空》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 6,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640%20%281%29.jpeg',
          title: '《虫师》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 7,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640.jpeg',
          title: '《loading》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 8,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640%20%282%29.jpeg',
          title: '《冰与火之歌》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 9,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640%20%281%29.jpeg',
          title: '《鹿丸》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        },
        {
          id: 10,

          url: 'http://pbmrxkahq.bkt.clouddn.com/640.jpeg',
          title: '《星空》',
          text: '收到回复收到方便收到回复诶特特诶诶榧对萨达姆收到回复是多少粉丝和粉丝的方式点击 回复就是电话喝酒哦儿童画忒提哦是看美女新女性表示对方舒服收到粉红色收到你说的比较舒服收到',
          likenum: 100

        }
      ],
      leftHeight: 0,
      rightHeight: 0,
      length: 10,
      pageNo: 1,
      descHeight: 30, // 图片文字描述的高度
      pageStatus: true,
      clicked: false,
      likeImg: 'http://oxnbz75b8.bkt.clouddn.com/praise_gray@3x.png'
    }
  },
  components: {
    CommentList,
    Card,
    topBar,
    topScroll
  },
  methods: {
    init () {
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.hideNavigationBarLoading()
    },
    async getBooks () {
      const books = await get('/weapp/booklist', {
        openid: this.userinfo.openId
      })
      this.books = books.list
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {
        openid: this.userinfo.openId
      })
      this.comments = comments.list
    },
    loadImage (e) {
      var vm = this
      var windowWidth = wx.getSystemInfoSync().windowWidth
      var index = e.currentTarget.dataset.index
      vm.data.list[index].height = windowWidth / 2 / e.detail.width * e.detail.height
      var count = 0
      for (var i = (vm.data.pageNo - 1) * vm.data.length; i < vm.data.list.length; i++) {
        if (vm.data.list[i].height) {
          count++
        }
      }
      if (count == vm.data.length) {
        for (var i = (vm.data.pageNo - 1) * vm.data.length; i < vm.data.list.length; i++) {
          if (vm.data.leftHeight <= vm.data.rightHeight) {
            vm.data.list[i].top = vm.data.leftHeight
            vm.data.list[i].left = windowWidth * 0.005
            vm.setData({
              leftHeight: vm.data.leftHeight + vm.data.list[i].height + vm.data.descHeight
            })
          } else {
            vm.data.list[i].top = vm.data.rightHeight
            vm.data.list[i].left = windowWidth / 2 - windowWidth * 0.005
            vm.setData({
              rightHeight: vm.data.rightHeight + vm.data.list[i].height + vm.data.descHeight
            })
          }
        }
//
        vm.list = vm.data.list
      }
    },
    like (e) {
      let that = this
      console.log(e)
      let clicked = e.currentTarget.dataset.like
      console.log(clicked)
      if (clicked === false) {
        that.likeImg = 'http://oxnbz75b8.bkt.clouddn.com/Heart.png'
        that.clicked = true
      } else if (clicked === true) {
        that.likeImg = 'http://oxnbz75b8.bkt.clouddn.com/praise_gray@3x.png'
        that.clicked = false
      }
    }

  },
  onPullDownRefresh () {
    this.init()
    wx.stopPullDownRefresh()
  },
  onShow () {
    if (!this.userinfo.openId) {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
        this.init()
      }
    }
  },
  mounted () {
//    this.loadImage(e)
//    this.like(e)
  }

}
</script>
<style scoped>

  .img_item {  width: 48%;  margin: 1%;  display: inline-block;  vertical-align: top;
  }


  .free-WaterfallFlow{
    width:94%;
    column-count:2;/*column-count 属性规定元素应该被分隔的列数：*/
  }
  .free-WaterfallFlow .flex-wrap{
    display: inline-block;
    width:98%;
    margin-bottom:2%;
    border:1px solid #ccc;
    padding:2%;
    padding-top:5%;
    margin-right:2%;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    text-align: center;
  }
  .flex-wrap image{
    width:95%;
    margin:0 auto;
  }
  .flex-wrap view:nth-child(2){
    font-size:15px;
    padding:2% 0;
    color:#717171;
  }
  .flex-wrap view:nth-child(3){
    font-size:13px;
    padding:2% 0;
    color:#aaa;
    text-align: right;
  }


  .text-onlyTwo{
    overflow: hidden;
    /*text-overflow: ellipsis;*/
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .like-btn{
    /*width: 20px;*/
    height: 20px;
    /*border: 1px solid #000;*/


    }

  .like-btn img{
    /*width: 100%;*/
    height: 20px;
    width: 20px;
    vertical-align: middle;

  }

  .like-btn span{
    width: 40px;
    height: 20px;
    display: inline-block;
    /*border: 1px solid red;*/
    vertical-align: middle;
    text-align: center;

  }

</style>
