<template>
  <div class="container">
    <Navbar :navbar_title="navbar_title" :delta="delta"></Navbar>
    <OldUser v-if="oldUser" v-on:oldUserValue="oldUserValue" :group_activities_uuid="group_activities_uuid"></OldUser>

    <!--<Card ></Card>-->
    <!--<Card :order_info="order_info"></Card>-->
    <div class="wrap">
      <div class="pj-info">
        <div class="left">
          <!--<img :src="order_info.group_activity.title_image_url" alt="">-->
          <div class="bg"
               :style="{width:'100%', height:'100%', backgroundImage:'url('+order_info.group_activity.title_image_url+')',backgroundSize:'cover', backgroundPosition:'50%'}"></div>
        </div>
        <div class="right">
          <h2>
            <div class="group_mark">{{order_info.group_activity.group_type}}</div>
            {{order_info.group_activity.title}}
          </h2>
          <p><span>¥&nbsp;{{order_info.group_activity.current_price}}</span><span
            v-if="order_info.group_activity.original_price">¥{{order_info.group_activity.original_price}}</span>
          </p>
        </div>
      </div>
    </div>
    <!--订单详情-->
    <div class="detail-order">

      <div class="grouping" v-if="order_info.status == 'grouping'"> <!--拼团中-->
        <h2><span>{{order_info.status_display}}</span></h2>
        <div class="order-info">
          <div class="text">还差<span>{{order_info.users_left}}</span>人参团,
            <span>{{time.hours}}</span>时
            <span>{{time.minutes}}</span>分
            <span>{{time.seconds}}</span>秒后结束
          </div>
        </div>

        <div class="user">
          <div class="pic" v-for="item in order_info.users" :key="item.uuid"><img :src="item.avatar_url" alt=""><span
            class="mark" v-if="item.is_initiator">团长</span></div>
        </div>
      </div>


      <div class="groupFailed" v-if="order_info.status == 'failed'"> <!--拼团失败-->
        <!--<div class="groupFailed"  > &lt;!&ndash;拼团失败&ndash;&gt;-->

        <h2><span>{{'来晚一步了，拼团已结束'}}</span></h2>

        <div class="user">
          <div class="pic" v-for="item in order_info.users" :key="item.uuid"><img :src="item.avatar_url" alt=""><span
            class="mark" v-if="item.is_initiator">团长</span></div>
        </div>
      </div>


      <div class="groupSuccess" v-if="order_info.status == 'success'"> <!--拼团成功-->
        <h2><span>{{order_info.status_display}}</span></h2>
        <div class="user">
          <div class="pic" v-for="item in order_info.users" :key="item.uuid">
            <img :src="item.avatar_url" alt="">
            <span class="mark" v-if="item.is_initiator">团长</span>
          </div>
        </div>
      </div>

      <!--<div class="group_res" v-if="order_info.status == 'success'" @click="fillAddress">去填地址</div>-->
      <form :report-submit="true" @submit="fillAddress">
        <button class="form_button" formType="submit">
          <div class="group_res" v-if="order_info.status == 'success'" @click="fillAddress">去提货</div>
          <!--<div class="group_res"  @click="fillAddress">去提货</div>-->
        </button>
      </form>

      <div class="line"></div>
      <div class="group">
        <h2 class="group-game">拼团玩法</h2>
        <p class="step1">1.付款后邀请好友参团</p>
        <p class="step2">2.达到拼团人数，顺利开团</p>
        <p class="step2">3.若24小时内拼团不成功，全额退款</p>
      </div>
      <div class="line"></div>

      <div class="pjDetail">
        <p class="detailTitle">商品详情</p>
        <rich-text :nodes="order_info.group_activity.product.detail" class="pjdetail"></rich-text>
      </div>


    </div>

    <!--------------------------------------------------------------------------->

    <form :report-submit="true" @submit="shareMenu" v-if="order_info.status_display === '正在拼团'">
      <button class="form_button" formType="submit">
        <div class="btn open_btn" data-status="1"><span>邀请好友一起享用</span></div>
      </button>
    </form>

    <!---->

    <form :report-submit="true" @submit="createGroup" v-if="order_info.status_display === '拼团成功'">
      <button class="form_button" formType="submit">
        <div class="btn open_btn" @click="createGroup" data-status="1">
          <span>重新开团</span></div>
      </button>
    </form>

    <div class="pay" v-if="onekeyAttend">
      <div class="price">
        ¥{{order_info.group_activity.current_price}}<span
        v-if="order_info.group_activity.product.num">还剩{{order_info.group_activity.product.num}}份</span></div>
      <div class="join-group" @click="attendGroup" :data-uuid="order_info.uuid">一键参与</div>
    </div>


    <div class="mask" v-if="showBox" @click="shareMenu">  <!-- 遮罩-->

      <div class="meunBox" v-if="showBox">
        <img class="x" src="http://pbmrxkahq.bkt.clouddn.com/close.png" alt="" @click="shareMenu">

        <!--<div class="title">分享加速抽奖</div>-->

        <button class="friend" open-type="share">
          <img src="http://pbmrxkahq.bkt.clouddn.com/wechatF.png" alt="">
        </button>

        <div class="createImg" @click="getImg">
          <img src="http://pbmrxkahq.bkt.clouddn.com/wechatimg.png" alt="">
        </div>
        <div class="wechatFriend" open-type="share">微信好友</div>
        <div class="shengchengImg" @click="getImg">生成分享图片</div>

      </div>  <!--框 弹出的选择-->


    </div>
    <!--参团底部button-->

  </div>
</template>

<script>
  import Card from '@/components/groupCard'
  import OldUser from '../../../components/oldUser'
  import CountDown from 'vue2-countdown'
  import Navbar from '@/components/navbar'
  import {showModal} from '@/utils/util'
  import {chooseAddress} from '@/utils/wx'
  import config from '@/config'

  export default {

    data() {
      return {
        time: {
          day: '',
          hours: '',
          minutes: '',
          seconds: ''
        },
        showshare: true,
        showModal: false,
        groupNum: 1,
        groupuer: [],
        order_info: {},
        showBox: false,
        painting: {},
        navbar_title: '拼团详情',
        orderIdId: '',
        myDetail: '',
        scanCode: true,
        group_activity_initial_uuid: '',
        group_activity_initial_finish: false,
        onekeyAttend: false,
        host: config.host,
        group_activity_order_uuid: '',
        delta: 3,
        oldUser: false,
        group_activities_uuid: '',
        invite: true

      }
    },
    components: {
      Card,
      Navbar,
      OldUser

    },

    methods: {
      async pay() {
//        let uuid =
//        const paydata = this.$store.dispatch('group_pay',uuid)
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

      async attendGroup() {
//    一键参与 扫码或者点击分享进入
        const that = this
        let uuid = that.group_activity_initial_uuid
        let auth_code = wx.getStorageSync('auth_code')
        let uuid_authCode = [uuid, auth_code]
//         参与拼团
        let group_activity_orders = await that.$store.dispatch('attendGroupActivities', {...uuid_authCode})
        console.log(group_activity_orders)
        if (group_activity_orders) {

          let group_activity_order_uuid = group_activity_orders.group_activity_order.uuid
          that.group_activity_order_uuid = group_activity_order_uuid
          // 支付参与拼团的订单
          let join_res = await that.$store.dispatch('group_pay', group_activity_order_uuid)

          wx.requestPayment({
            'timeStamp': String(join_res.time_stamp),
            'nonceStr': String(join_res.nonce_str),
            'package': String(join_res.package),
            'signType': String(join_res.sign_type),
            'paySign': String(join_res.pay_sign),
            'success': function (res) {
              console.log(res)
              let user = wx.getStorageSync('userinfo')

              let currentUser = that.order_info.users
              let this_user = {
                uuid: '',
                nick_name: user.nick_name,
                avatar_url: user.avatar_url,
                is_initiator: false
              }
              that.order_info.users.concat(this_user)


              that.onekeyAttend = false


            },
            'fail': function (res) {
              console.log(res)
              console.log('支付错误')
              showModal('支付失败', '请尝试重新支付')


            }
          })
        } else {
          that.oldUser = true

        }
//      console.log(group_activity_orders)// group_activity_orders = underfind ? '参与失败'：参与成功


      },
      oldUserValue(oldUserValue) {
        this.oldUser = oldUserValue
      },
      getlastTime() {
        let that = this
//        console.log('倒计时')
        let startTime = that.order_info.initial_time_timestamp

        let currentTime = (new Date()).getTime()
        let endTime = that.order_info.end_time_timestamp

        let allTime = 86400000 // 倒计时24小时

        let leftTime = endTime - currentTime //<864000

        let day = Math.floor(leftTime / 1000 / 60 / 60 / 24) // 剩余天数

        let hours = Math.floor(leftTime / 1000 / 60 / 60 % 24)

        let minutes = Math.floor(leftTime / 1000 / 60 % 60)

        let seconds = Math.floor(leftTime / 1000 % 60)

        that.time.day = day
        that.time.hours = hours
        that.time.minutes = minutes
        that.time.seconds = seconds

        var param = setTimeout(that.getlastTime, 1000)
        if (leftTime <= 0) {
//          showModal('拼团结束', '活动结束了')
          leftTime = 0
          clearTimeout(param)
        }


      },
      share() {
        let that = this
        that.showshare = !that.showshare
//
      },
      setModalStatus: function (e) {
        console.log(this.showModal)
        let that = this
        console.log('设置显示状态，1显示0不显示', e.currentTarget.dataset.status)
        console.log(e.currentTarget.dataset)

        var animation = wx.createAnimation({
          duration: 200,
          timingFunction: 'linear',
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
        }, 200)
      },

      shareMenu(e) {

        this.showBox = !this.showBox
      },

      async getImg() {
        let that = this
        let uuid = that.group_activity_initial_uuid
        let page = 'pages/isme/index'
        let data = [uuid, page]
        let res = await this.$store.dispatch('wxCode', {...data})

        let wxCodeImg = res.wxa_qrcode_url
//        if(wxCodeImg)

        let titleContent = that.order_info.group_activity.title
        let title_left = 25
        if (titleContent.length > 13) {
          titleContent = titleContent.substring(0, 12)
        } else {
          titleContent = titleContent
        }
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
              url: that.order_info.group_activity.title_image_url,                  // 变化图片
              top: 0,
              left: 0,
              width: 375,
              height: 173
            },
            //            绘制的背景图

// http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg
            // 文本表达
            {
              type: 'text',
              content: titleContent,                                                             // 变量的名称
              fontSize: 27.6,
              lineHeight: 27.6,
              color: '#454553',
              textAlign: 'left',
              top: 217.35,
              left: title_left,
              width: 328.9,
              MaxLineNumber: 2,                                                                         // 最大两行 超出...
              breakWord: true,  // 换行
              bolder: true  // 加粗
            },

            {
              type: 'text',
              content: that.order_info.group_activity.group_type,                                                                                // 变量的价格
              fontSize: 18.4,
              color: '#f83713',
              textAlign: 'left',
              top: 255,
              left: 25,
              bolder: false
            },
            {
              type: 'text',
              content: '¥',
              fontSize: 18.4,
              color: '#f83713',
              textAlign: 'left',
              top: 257,
              left: 90                                                                      // 根据价格字符个数 变化
            },
            {
              type: 'text',
              content: that.order_info.group_activity.current_price,                                                                       // 根据价格字符个数 变化
              fontSize: 18.4,
              color: '#f83713',
              textAlign: 'left',
              top: 257,
              left: 105                                                                     // 根据价格字符个数 变化
//              textDecoration: 'line-through'
            },

            {
              type: 'text',
              content: '拼团价',                                                                       // 根据价格字符个数 变化
              fontSize: 14,
              color: '#f83713',
              textAlign: 'left',
              top: 261,
              left: 150                                                                     // 根据价格字符个数 变化
//              textDecoration: 'line-through'
            },

            {
              type: 'text',
              content: '¥' + that.order_info.group_activity.original_price,                                                                       // 根据价格字符个数 变化
              fontSize: 11.5,
              color: '#999999',
              textAlign: 'left',
              top: 265,
              left: 195,                                                                    // 根据价格字符个数 变化
              textDecoration: 'line-through'
            },

            {
              type: 'text',
              content: '参团仅限新用户哦~',
              fontSize: 18.4,
              color: '#4a4a4a',
              textAlign: 'left',
              top: 300,
              left: 25,
              lineHeight: 18.4,
              MaxLineNumber: 2,
              breakWord: true,
              width: 157
            },
            {
              type: 'image',
              url: wxCodeImg,
              top: 345 * 1.15,
              left: 121 * 1.15,
              width: 84 * 1.15,
              height: 84 * 1.15
            },
            {
              type: 'text',
              content: '长按识别，参与拼团',
              fontSize: 16.1,
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
          url: '/pages/poster/main'
        })
      },
      async fillAddress(e) {
        console.log('领奖')
        let that = this
        let data = []
        let uuid = that.order_info.group_activity_order.uuid //拼团订单
        let order_status = that.order_info.status // success grouping init failed
        let form_id = e.mp.detail.formId
        if (order_status === 'success') {
          let res = await chooseAddress()
          let auth_code = wx.getStorageSync('auth_code')
          let address = {
            name: res.name,            // 名字
            postal_code: res.postalCode, // 邮编
            tel_phone: res.telNumber, // 电话
            province: res.provinceName, // 省
            city: res.cityName, // 市
            district: res.countyName, // 区
            detail: res.detailInfo// 详细

          }

          data = [uuid, auth_code, address]
          let address_res = await that.$store.dispatch('groupAddress', {...data})
          wx.navigateTo({
            url: `/pages/user/myGroup/myGroupDetail/main?uuid=${uuid}`
          })
        } else {
          console.log('order_status 不是success')
        }
      },
      createGroup() {
        // 重新开团
        wx.switchTab({
          url: `/pages/home/main`
        })
      },
      async getOrderData() {
        //获取页面数据函数
      }

    },
    async onLoad(options) {
      var that = this
      let attend = options.attend
      let group_activity_initial_uuid = options.group_activity_initial_uuid // 发起拼团活动返回订单uuid
      let group_activities_uuid = options.group_activities_uuid

      that.group_activities_uuid = group_activities_uuid
      console.log(that.group_activities_uuid)

      that.group_activity_initial_uuid = group_activity_initial_uuid

      let currentuser_code = wx.getStorageSync('auth_code')
      let uuid_authCode = [group_activity_initial_uuid, currentuser_code]

      let orderData = await that.$store.dispatch('groupActivitiesInit', {...uuid_authCode})

      let order_user = orderData.group_activity_initial.users // []

      let left_user = orderData.group_activity_initial.users_left // number

      let group_user_require = orderData.group_activity_initial.group_user_require
      let left_num = group_user_require - order_user.length //还需的「
      console.log(group_user_require,)
      console.log(left_num)
      for (var i = 0; i < left_num; i++) {
        order_user.push({})
      }

      orderData.group_activity_initial.users = order_user

      if (orderData.group_activity_initial.is_initiator === false && orderData.group_activity_initial.status_display === '正在拼团') {
        that.onekeyAttend = true
      } else if (orderData.group_activity_initial.is_initiator === true && orderData.group_activity_initial.status_display === '正在拼团') {
        that.onekeyAttend = false

      }

      that.order_info = orderData.group_activity_initial


      that.getlastTime()
    },
    async mounted() {

    },
    onShareAppMessage(res) {
      var that = this
      let uuid = that.group_activity_initial_uuid

      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '耽误你10秒，帮我看看这个东西好不好',
        path: `/pages/groupPj/order/main?group_activity_initial_uuid=${uuid}`,
//        imageUrl: that.order_info.group_activity.title_image_url
        // 参与拼团的页面
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

    h2 {
      min-width: 176px;
      height: 16px;
      line-height: 16px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #454553;
      margin: 21px 174px auto 25px;
      .refund {
        display: none;
      }
    }
  ;
    .order-info .text {
      /*width: 215px;*/
      height: 14px;
      line-height: 14px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #454553;
      margin: 15px 100px auto 25px;
      span {
        color: #e8724b;
      }
    }
  ;
    .user {
      /*border:1px solid #000;*/
      /*height: 50px;*/
      /*margin-top: 25px;*/
      /*margin-left: 25px;*/
      width:325px;
      margin: 25px auto 0;



      .pic {
        width: 34px;
        height: 34px;
        display: inline-block;
        position: relative;
        background-image: url("http://p15hnzxrp.bkt.clouddn.com/oval.png");
        background-size: cover;
        border-radius: 50%;
        margin-right: 15px;
        img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          /*margin: ;*/
        }
      ;
        span {
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
      }
    ;


    }

    .groupFailed {
      h2 {
        /*border:1px solid #000;*/
        margin: 21px auto 25px;
        text-align: center;
        color: #333;
      }
    ;
      .user {
        /*border:1px solid #000;*/
        /*height: 50px;*/

        margin-left: 0;
        margin-bottom: 20px;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: center;

        .pic:first-child {
          margin-left: 17px;

        }

      }

    }
  ;

  }

  /*.user .pic*/

  .group_res {
    width: 180px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgb(252, 87, 75);
    box-shadow: 0 0 8px 0 rgba(255, 127, 79, 0.4);
    margin: 0 auto;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #fff
  }

  .line {
    width: 325px;
    height: 1px;
    /*border: 1px solid #000;*/
    background: #f7f7f7;
    margin: 20px auto;
  }

  .group {
    width: 100%;
    margin-top: -10px;
    h2 {
      width: 64px;
      height: 22px;
      line-height: 22px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #333;
    }
  ;
    p {
      width: 325px;
      font-family: PingFangSC-Regular;

      font-size: 12px;
      color: #4a4a4a;
      margin: 0 auto;
      /*border: 1px solid #000;*/
    }

  }

  .pjDetail {
    width: 325px;
    font-family: PingFangSC-Regular;

    font-size: 12px;
    color: #4a4a4a;
    text-align: left;
    margin: 0 auto 68px;
    /*border:1px solid #000;*/
    .detailTitle {
      width: 64px;
      height: 22px;
      line-height: 22px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #333;
      /*border:1px solid #000;*/
      margin-top: -5px;
      /*float: left;*/

    }
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
    left: 0;
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
    height: 230px;
    background: #fff;
    position: relative;
    z-index: 1000;
    .title {
      width: 102px;
      height: 24px;
      font-size: 17px;
      line-height: 24px;
      color: #333;
      position: absolute;
      top: 56px;
      left: 137px;

    }
  ;
    .friend, .createImg {
      display: inline-block;

      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid #eee;
      box-sizing: border-box;

    }
  ;
    p {
      height: 20px;
      font-size: 14px;
      color: #666;

    }
  ;
    .friend {
      display: inline-block;
      position: absolute;
      top: 78px;
      left: 80px;
      /*border: 1px solid #000;*/
    }
  ;
    .createImg {
      position: absolute;
      top: 78px;
      right: 80px;
    }

    /*border: 1px solid #ff7f4f;*/

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
    background: #fff;
  }

  .friend img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 17px;
    left: 17px;
    /*display: none;*/

  }

  .wechatFriend {
    /*background: none;*/
    /*border: 1px solid #000;*/
    display: inline-block;
    position: absolute;
    top: 156px;
    left: 82px;
    font-size: 14px;
    color: #666;
  }

  .shengchengImg {
    position: absolute;
    top: 156px;
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

  .pay {
    width: 100%;
    height: 60px;
    background: #fff;
    /*border-top: 1px solid #000;*/
    box-shadow: 0 -2px 8px #ededed;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    /*border: 1px solid red;*/
    .price {
      display: inline-block;

      min-width: 90px;
      height: 25px;
      line-height: 25px;
      color: #f7412d;
      background: #fff;
      font-size: 18px;
      text-align: left;

      margin-left: 25px;
      margin-top: 18px;

      /*border:1px solid #000;*/

      span {
        font-size: 12px;
        color: #999;
      }

    }
  ;
    .join-group {
      display: inline-block;
      width: 140px;
      height: 44px;
      line-height: 44px;
      border-radius: 22px 22px 22px 22px;
      background: #ff7f4f;
      box-shadow: 0 0 8px #ff7f4f;
      text-align: center;
      font-weight: Medium;
      margin-top: 8px;
      margin-left: 95px;

      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #fff;
      /*border:1px solid blue;*/
    }

  }

  /*-----------*/
  .wrap {
    height: 125px;
    background: #fff;
    border: 0.5px solid #fff;

  }

  .pj-info {

    /*border: 1px solid #000;*/

    width: 325px;
    height: 84px;
    margin: 21px auto 20px;
  }

  .pj-info .left {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-top: 4px;
    border-radius: 5px;

  }

  .left img {
    width: 80px;
    height: 80px;
    margin-right: 0;
    border-radius: 5px;

  }

  .pj-info .right {
    position: relative;
    display: inline-block;
    height: 84px;
    width: 225px;

    /*border:1px solid #000;*/

  }

  .right h2 .group_mark {
    width: 50px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 11px;
    color: #ff7f4f;
    border: 1px solid #ff7f4f;
    display: inline-block;
    margin-right: 10px;
    /*transform:rotate(-42deg);*/

    /*position: absolute;*/
    /*top:0px;*/
    /*left: 0px;*/
  }

  .right h2 {
    display: inline-block;
    font-size: 20px;
    font-family: PingFangSC-Medium;
    color: #333;

    /*border:1px solid #000;*/
    /*margin-left: 60px;*/

  }

  .right p {
    /*border: 1px solid #000;*/
    margin-top: 13px;
  }

  .right p span {
    display: inline-block;
    margin-left: 5px;
  }

  .right p span:nth-child(1) {
    font-size: 20px;
    color: #f83713;
    /*font-weight: Medium;*/
    font-family: PingFangSC-Medium;

  }

  /*.right p span:nth-child(2){*/
  /*font-size: 12px; color: #D0021B;*/
  /*font-weight: Regular;*/

  /*}*/
  .right p span:nth-child(2) {
    font-size: 10px;
    color: #999;
    font-family: PingFangSC-Regular;
    text-decoration: line-through;
  }

  form {
    border: none;
    display: block;
    button {
      display: block;
      background: none;
      margin: 0 auto;
      border: none;

    }
  ;
    button::after {
      border-radius: 0;
      border: none;

    }
  }

</style>
