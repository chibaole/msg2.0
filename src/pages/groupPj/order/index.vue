<template>
  <div class="container">
    <Navbar :navbar_title="navbar_title"></Navbar>
    <!--<Card ></Card>-->
    <Card :order_info="order_info"></Card>

    <!--订单详情-->
    <div class="detail-order">
      <h2>拼团中 分享给好友组团</h2>
      <div class="order-info">
        <div class="text">还差<span>{{order_info.users_left}}</span>人参团,
          <span>{{time.day}}</span>天
          <span>{{time.hours}}</span>时
          <span>{{time.minutes}}</span>分后结束
        </div>

      </div>

      <div class="user">
        <div class="pic" v-for="item in order_info.users"><img :src="item.avatar_url" alt=""><span class="mark" v-if="item.is_initiator">团长</span></div>



      </div>
      <div class="line"></div>

      <div class="group">
        <h2 class="group-game">拼团玩法</h2>
        <p class="step1">1.免费领取 但要完成小作业，写食用反馈。</p>
        <p class="step2">2.领取成功后，请扫码加群等待发货哦。</p>
      </div>
      <div class="line"></div>

      <div class="pjDetail">
        商品详情
        <rich-text :nodes="order_info.detail" ></rich-text>

      </div>
    </div>

    <!--------------------------------------------------------------------------->
    <div class="btn open_btn" @click="shareMenu" data-status="1" v-if="!scanCode"><span>邀请好友一起享用</span></div>
    <div class="mask" v-if="showBox">  <!-- 遮罩-->

      <div class="meunBox" v-if="showBox">
        <img class="x" src="../../../../static/img/close2.png" alt="" @click="shareMenu">

        <div class="title">分享加速抽奖</div>

        <button class="friend" open-type="share">
          <img src="../../../../static/img/wechatF.png" alt="">
        </button>

        <div class="createImg" @click="getImg">
          <img src="../../../../static/img/wechatimg.png" alt="">
        </div>
        <div class="wechatFriend" open-type="share">微信好友</div>
        <div class="shengchengImg" @click="getImg">生成分享图片</div>

      </div>  <!--框 弹出的选择-->


    </div>
    <!--参团底部button-->
    <div class="pay" v-if="scanCode" >
      <div class="price">¥{{order_info.current_price}}<span>还剩{{}}10份</span></div>
      <div class="join-group" @click="attendGroup" :data-uuid="order_info.uuid" >一键参与</div>
    </div>




    <!--<div :animation="animationData" class="drawer_attr_box"v-if="showModal"   >-->
    <!--<div class="close_icon" @click="setModalStatus" data-status="0">×</div>-->
    <!--<div class="drawer_attr_content">-->
    <!--<button  class="btn-fri" @click="sharfri" open-type="share">微信好友</button>-->
    <!--<button class="btn-img">生成分享图</button>-->

    <!--</div>-->
    <!--</div>-->
    <!--------------------------------------------------------------------------->


  </div>
</template>

<script>
  import Card from '@/components/groupCard'
  import CountDown from 'vue2-countdown'
  import Navbar from '@/components/navbar'
  import {showModal} from '@/utils/util'

  export default {


    data() {
      return {
        time: {
          day: '',
          hours: '',
          minutes: ''
        },
        showshare: true,
        showModal: false,
        groupNum: 1,
        groupuer: [],
        team: [
          {
            nickname: '张三',
            pic: '../../../../static/img/unlogin.png',
            captain: true
          },
          {
            nickname: '赵四',
            pic: '../../../../static/img/unlogin.png',
            captain: false
          },
          {
            nickname: '王五',
            pic: '../../../../static/img/unlogin.png',
            captain: false
          }
        ],
        order_info: {},
        showBox: false,
        painting: {},
        navbar_title: '团购',
        orderIdId:'',
        myDetail:'',
        scanCode:false
      }
    },
    components: {
      Card,
      Navbar

    }
    ,

    methods: {
      pay() {
        wx.requestPayment({
          'timeStamp': '',
          'nonceStr': '',
          'package': '',
          'signType': 'MD5',
          'paySign': '',
          'success': function (res) {
            console.log(res)
          },
          'fail': function (res) {
            console.log(res)
            console.log('支付错误')
          }
        })
      },
     async attendGroup(){

        const that = this
//        const uuid = that.orderUuid
//       参与拼团的订单uuid
       const uuid = '123434'
       const auth_code = wx.getStorageSync('auth_code')
       const  uuid_authCode = [uuid,auth_code]
       console.log(uuid_authCode)
       const attendRes = await that.$store.dispatch('attendGroupActivities',{...uuid_authCode})
       console.log(attendRes)
       const orderUuid = attendRes.group_activity_order.uuid


      },
      getlastTime() {
        let that = this
        let startTime = that.order_info.initial_time_timestamp
        let currentTime = (new Date()).getTime()

        let allTime = 86400000 //倒计时24小时
        let leftTime = allTime - ( currentTime - startTime)


        if(leftTime<=0){
          leftTime = 0
          showModal('拼团失败','来晚一步')
          return
        }else {
          leftTime = allTime - ( currentTime - startTime)
        }
//        let leftTime = 86400 //总时间

        let day = Math.floor(leftTime/1000 / 60 / 60 / 24) //剩余天数

        let hours = Math.floor(leftTime/1000/60/60%24)

        let minutes = Math.floor(leftTime/1000/60%60)

        that.time.day = day
        that.time.hours = hours
        that.time.minutes = minutes
        setTimeout(that.getlastTime, 1000);


      },
  share()
  {
    let that = this
    that.showshare = !that.showshare
//
  }
  ,
  setModalStatus: function (e) {
    console.log(this.showModal)
    let that = this
    console.log("设置显示状态，1显示0不显示", e.currentTarget.dataset.status);
    console.log(e.currentTarget.dataset)

    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })

    that.animation = animation

    animation.translateY(300).step()

    that.animationData = animation.export()

    console.log(' animation.translateY(300).step()')

    if (e.currentTarget.dataset.status === '1') {
      console.log('这个是status = 1')
      that.showModal = true
      console.log('这个时候应该显示' + that.showModal)
    } else if (e.currentTarget.dataset.status === '0') {

      console.log('这个是status = 0')

      that.showModal = false


    }
    setTimeout(function () {
      animation.translateY(0).step()

      that.animationData = animation


    }.bind(that), 200)
  }
  ,
  sharfri()
  {
    //分享给朋友
  }
  ,
  async
  getGroup_orders()
  {
    let that = this
    let order_info = await
    get(`/v1/group_activity_orders/${that.order_uuid}`) //获取拼团订单
    let order = order_info.group_activity_order
    console.log(order)
    that.order_info = order

  }
  ,
  shareMenu()
  {
    console.log(this.showBox)
    this.showBox = !this.showBox

  }
  ,

  getImg()
  {

    this.painting = {
      width: 375,
      height: 557,
      clear: true,
      views: [

//            绘制白色背景
        {
          type: 'rect',
          background: '#fff',
          top: 0,
          left: 0,
          width: 375,
          height: 557
        },

        //            绘制的头图
        {
          type: 'image',
          url: 'http://oxl5leo53.bkt.clouddn.com/u=1204211051,3834529407&fm=11&gp=0.jpg',                  //变化图片
          top: 0,
          left: 0,
          width: 375,
          height: 173
        },
        //            绘制的背景图


//http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg
        // 文本表达
        {
          type: 'text',
          content: this.order_info.title,                                                             //变量的名称
          fontSize: 27.6,
          lineHeight: 27.6,
          color: '#454553',
          textAlign: 'left',
          top: 217.35,
          left: 23,
          width: 328.9,
          MaxLineNumber: 2,                                                                         //最大两行 超出...
          breakWord: true,  //换行
          bolder: true  //加粗
        },


        {
          type: 'text',
          content: '￥5',                                                                                //变量的价格
          fontSize: 20.7,
          color: '#f83713',
          textAlign: 'left',
          top: 296.7,
          left: 133.4,
          bolder: true
        },
        {
          type: 'text',
          content: '拼团价',
          fontSize: 13.8,
          color: '#f83713',
          textAlign: 'left',
          top: 304.75,
          left: 150 * 1.15,                                                                      //根据价格字符个数 变化

        },
        {
          type: 'text',
          content: '95',                                                                       //根据价格字符个数 变化
          fontSize: 13 * 1.15,
          color: '#999',
          textAlign: 'left',
          top: 265 * 1.15,
          left: 190 * 1.15,                                                                      //根据价格字符个数 变化
          textDecoration: 'line-through'
        },

        {
          type: 'text',
          content: '参团仅限新用户哦~',
          fontSize: 16 * 1.15,
          color: '#4a4a4a',
          textAlign: 'left',
          top: 314 * 1.15,
          left: 95 * 1.15,
          lineHeight: 16 * 1.15,
          MaxLineNumber: 2,
          breakWord: true,
          width: 136 * 1.15
        },
        {
          type: 'image',
          url: 'http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg',
          top: 345 * 1.15,
          left: 121 * 1.15,
          width: 84 * 1.15,
          height: 84 * 1.15
        },
        {
          type: 'text',
          content: '长按识别，参与拼团',
          fontSize: 14 * 1.15,
          color: '#4a4a4a',
          textAlign: 'left',
          top: 439 * 1.15,
          left: 100 * 1.15,
          lineHeight: 14 * 1.15,
          MaxLineNumber: 2,
          breakWord: true,
          width: 156 * 1.15
        }

      ]
    }
    wx.setStorageSync('painting', this.painting)
    wx.navigateTo({
      url: '/pages/test/main'
    })
  }


  },
   async onLoad()
  {
    var that = this
    var current_order = wx.getStorageSync('current_orderinfo') //取之前缓存的发起拼团数据
//    that.order_info = current_order
//    console.log(current_order)

    that.orderId = that.$root.$mp.query.orderId //发起拼团活动返回订单uuid
    that.groupuer.length = that.groupNum

//    that.getGroup_orders()
    let orderId = that.orderId
    let currentuser_code = wx.getStorageSync('auth_code')
    let uuid_authCode = [orderId,currentuser_code]

    let orderData = await  that.$store.dispatch('groupActivitiesInit',{...uuid_authCode})

    that.order_info = orderData.group_activity_initial
    console.log('团购')
    console.log(orderData)

    let order_user = that.order_info.users //[]
    let left_user = that.order_info.users_left //number
    let group_type = that.order_info.group_type//3 / 5
    for(var i = 0; i < left_user; i++){
      order_user.push({})
    }
    console.log(order_user)




    that.getlastTime()
  },
   async mounted()
  {
//    let that = this
//    that.orderId = that.$root.$mp.query.orderId //发起拼团活动返回订单uuid
//    that.groupuer.length = that.groupNum
//
////    that.getGroup_orders()
//    let orderId = that.orderId
//     let currentuser_code = wx.getStorageSync('auth_code')
//     let uuid_authCode = [orderId,currentuser_code]
//
//    let orderData = await  that.$store.dispatch('groupActivitiesInit',{...uuid_authCode})
//     that.order_info = orderData.group_activity_initial
//
//     console.log(that.order_info)
//
//     let order_user = that.order_info.users //[]
//     let left_user = that.order_info.users_left //number
//     let group_type = that.order_info.group_type//3 / 5
//      for(var i = 0; i < left_user; i++){
//        order_user.push({})
//      }
//      console.log(order_user)
//
//
//
//
//    that.getlastTime()


  }
  ,
  onShareAppMessage(res)
  {
    var that = this
    var initGroupId = '拼团活动uuid'
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: that.order_info.title,
      path: `/pages/groupPj/groupDetail/main?orderId=` //参与拼团的页面
    }
  }

  }


</script>
<style lang="scss" scoped>
  .container {
    font-family: "PingFang SC";
    font-weight: Regular;
    text-align: left;
    background: #f7f7f7;
  }

  .order-info {

  }

  .detail-order {
    border: 1px solid #fff;
    background: #fff;
    margin-top: 9px;

  }

  .detail-order h2 {
    width: 176px;
    height: 16px;
    line-height: 16px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #454553;
    margin: 21px 174px auto 25px;
  }

  .detail-order .order-info .text {
    /*width: 215px;*/
    height: 14px;
    line-height: 14px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #454553;
    margin: 15px 100px auto 25px;
    /*border: 1px solid #000;*/
  }

  .detail-order .order-info .text span {
    color: #e8724b;
  }

  .user {
    width: 100%;
    height: 50px;
    margin-top: 25px;
    margin-left: 25px;

  }

  .user .pic {
    width: 34px;
    height: 34px;
    display: inline-block;
    position: relative;
    /*border: 1px solid #000;*/
    background-image: url("http://p15hnzxrp.bkt.clouddn.com/oval.png");
    background-size: cover;
    border-radius: 50%;
    /*background-attachment:fixed;*/
  }

  .user .pic:nth-child(2) {
    margin-left: 15px;
    margin-right: 15px;
  }
  .user .pic:nth-child(4) {
    margin-left: 15px;
    margin-right: 15px;
  }

  .pic img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .pic span {
    width: 32px;
    height: 16px;

    background: #ff7f4f;
    border-radius: 23px;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 26px;
    left: 1px;
    font-size: 10px;
    letter-spacing: 0.1px;

  }


  .left_user{
    width: 34px;
    height: 34px;
    display: inline-block;
    /*border: 1px solid #000;*/
    background-image: url("http://p15hnzxrp.bkt.clouddn.com/oval.png");
    background-size: cover;
    border-radius: 50%;

  }


  .nor_user {
    border: 1px dashed #ccc;
    border-radius: 50%;
    /*background: ;*/
  }

  .line {
    width: 325px;
    height: 2px;
    /*border: 1px solid #000;*/
    background: #f5f5f5;
    margin: 20px auto;
  }

  .group {
    width: 100%;
    margin-top: -10px;

  }

  .group h2 {
    width: 64px;
    height: 22px;
    line-height: 22px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333;

  }

  .group p {
    width: 315px;
    font-family: PingFangSC-Regular;

    font-size: 12px;
    color: #4a4a4a;
    margin: 0 auto;
    /*border: 1px solid #000;*/
  }

  .pjDetail {
    /*width: 348px;*/

    margin: 0 auto;
    padding-left: 25px;
    font-family: PingFangSC-Medium;
    color: #333;
    font-size: 16px;

  }

  .pjDetail {
    text-align: left;
  }

  .share {
    width: 180px;
    height: 42px;
    line-height: 42px;
    margin: 4px auto;
    text-align: center;
    font-size: 18px;
    background: #8E7373;
  }

  .share-box {
    width: 350px;
    height: 200px;
    margin: 0 auto;
    border: 1px solid #C8C8CD;
  }

  /*--------------------------------*/
  .drawer_screen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.2;
    overflow: hidden;
    z-index: 1000;
    color: #fff;
  }

  .drawer_attr_box {
    width: 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2000;
    background: #fff;
  }

  .close_icon {
    width: 12.5px;
    height: 12.5px;
    line-height: 10px;
    font-size: 15px;
    position: absolute;
    right: 2.5px;
    top: 2.5px;
    z-index: 101;
    padding: 5px;
    color: #ccc;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    background: #fff;
  }

  .drawer_attr_content {
    padding: 10px;
    height: 300px;
    overflow-y: scroll;
  }

  .drawer_image {
    width: 200px;
    height: 200px;
  }

  .drawer_desc {
    font-size: 13px;
    margin: 10px;
  }

  .btn {

    text-align: center;
    width: 375px;
    height: 60px;
    background: #fff;
    box-shadow: 0 -2px 8px #ededed;
    position: fixed;
    bottom: 0;
    z-index: 100;
    padding: 0;
    margin: 0;
    /*border: 1px solid #000;*/

  }

  .btn span {

    width: 325px;
    height: 44px;
    line-height: 44px;
    background: #ff7f4f;
    border-radius: 22px;
    display: block;
    box-shadow: 0 0 8px #ff7f47;
    margin-left: 25px;
    margin-top: 8px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #fff;
  }

  /*引入css*/

  .mask {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }

  .meunBox {
    width: 375px;
    height: 280px;
    background: #fff;
    position: relative;
    z-index: 1000;
    /*border: 1px solid #ff7f4f;*/

  }

  .meunBox .title {
    width: 102px;
    height: 24px;
    font-size: 17px;
    line-height: 24px;
    color: #333;
    position: absolute;
    top: 56px;
    left: 137px;

  }

  .meunBox .friend, .createImg {
    display: inline-block;

    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #ededed;
    box-sizing: border-box;

  }

  .meunBox p {
    height: 20px;
    font-size: 14px;
    color: #666;

  }

  button::after {
    border: none;
  }

  .createImg img {

    width: 24px;
    height: 24px;
    margin: 17px;
    /*border: 1px solid #000;*/

  }

  .friend {
    position: relative;
  }

  .friend img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 17px;
    left: 17px;

  }

  .meunBox .friend {
    display: inline-block;
    position: absolute;
    top: 128px;
    left: 80px;
    /*border: 1px solid #000;*/
  }

  .meunBox .createImg {
    position: absolute;
    top: 128px;
    right: 80px;
  }

  .wechatFriend {
    /*background: none;*/
    /*border: 1px solid #000;*/
    display: inline-block;
    position: absolute;
    top: 206px;
    left: 82px;
    font-size: 14px;
    color: #666;
  }

  .shengchengImg {
    position: absolute;
    top: 206px;
    right: 68px;
    font-size: 14px;
    color: #666;
  }

  .x {
    /*border: 1px solid #000;*/
    width: 15px;
    height: 15px;
    position: absolute;
    top: 15px;
    right: 15px;

  }

  /*参团底部button*/

  .pay{
    width: 100%;
    height: 60px;
    background: #fff;
    /*border-top: 1px solid #000;*/
    box-shadow: 0 -2px 8px  #ededed;
    position: fixed;
    bottom: 0;
    z-index: 100;

  }



  .price{
    display: inline-block;

    width: 90px;
    height: 25px;
    line-height: 25px;
    color:#f7412d;
    background: #fff;
    font-size: 18px;
    text-align: left;

    margin-left: 25px;
    margin-top: 18px;

    /*border:1px solid #000;*/

  }
  .price span{
    font-size: 12px;
    color: #999;
  }

  .join-group{
    display: inline-block;
    width: 140px;
    height: 44px;
    line-height: 44px;
    border-radius: 22px 22px 22px 22px;
    background: #ff7f4f;
    box-shadow: 0 0 8px #ff7f4f;
    text-align: center;
    font-weight: Medium;
    margin-top:8px;
    margin-left: 95px;

    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #fff;
  }


</style>
