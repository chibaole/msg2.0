<template>
  <div class="container">
    <!--<p>项目详情页</p>-->
    <Navbar :navbar_title="'抽奖详情'"></Navbar>

    <div class="pic-info">
      <div class="pic">
        <!--<img :src="boon.title_image_url" alt="">-->
        <div class="bg"
             :style="{width:'100%', height:'100%', backgroundImage:'url('+boon.title_image_url+')',backgroundSize:'cover', backgroundPosition:'50%'}"></div>

      </div>

      <div class="prj-info">
        <p class="prj-name">{{boon.title}}</p>
        <p class="prj-little-info">{{boon.lottery_conditions}} <span class="hasJoined">已有<span
          style="color: #ff7f4f">&nbsp;{{boon.num_of_participants}}&nbsp;</span>人参与</span></p>
      </div>
    </div>
    <!-- 福利简要信息    -->
    <div class="sponsorsBox" v-if="boon.sponsor">
      <div class="sponsors">
        <p class="sponsors-info">{{boon.sponsor.description}}</p>
        <navigator class="switchGoAnchor" target="miniProgram" open-type="navigate" :app-id="boon.sponsor.app_id"
                   :path="boon.sponsor.app_path" extra-data="" version="release">
          <img class="logo" :src="boon.sponsor.avatar_url" alt="">{{boon.sponsor.name}}<img class="right_ico"
                                                                                            src="../../../static/img/right.png"
                                                                                            alt="">
        </navigator>

      </div>
    </div>
    <!--赞助上小程序   -->
    <div class="process-prize" v-if=" boon.status === 'published'">
      <h2>抽奖流程</h2>
      <div class="steps">
        <p class="step1">1.点击抽奖，等待开奖</p>
        <p class="step2">2.领取成功后，请扫码加群等待发货哦</p>
      </div>
      <div class="line"></div>
      <h2>商品详情</h2>
      <div class="boonDetail">
        <rich-text :nodes="boon.detial"></rich-text>
      </div>
    </div>

    <!--抽奖流程-->
    <div class="btn1" v-if="boon.status== 'published'">

      <button v-if="boon.participate_status == true" class="waiting">待开奖</button>

      <button @click="attendBoon" v-if="boon.participate_status == false" :class="prizeStyle">{{prize}}</button>

    </div>
    <!--抽奖未开奖显示的 '抽奖/待开奖按钮'-->

    <div class="openPrize" v-if="boon.status== 'rewarded'  "> <!--开奖了-->
      <div class="pic">
        <img :src='boon_resImg' alt="">
        <p class="boon_order_text">{{boon_resText}}</p>
      </div>
      <div v-if="boon.participate_status===true">
        <div class="prizeWindow" v-if="boon.boon_order.status === 'win'" @click="chooseAddress">去领奖</div>
        <div class="prizeWindowe" v-if="boon.boon_order.status === 'received'" @click="chooseAddress">已领奖</div>
      </div>
      <div class="nameList">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="title">中奖者名单</div>
      </div>
      <div class="userBox">
        <div class="user" v-for="uesr in boon.rewarded_users">
          <img :src="uesr.avatar_url" alt="">
          <div class="nickname">{{uesr.nick_name}}</div>
        </div>

        <div class="getall" @click="getMoreUser" v-if="showGetMoreBtn">
          <span>加载全部</span>
          <img src="http://pbmrxkahq.bkt.clouddn.com/%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9Aicon.png" alt="">
        </div>
      </div>
    </div>
    <div class="btn-box" v-if="boon.status== 'published'">

      <Diago v-if="open" v-on:childByValue="childByValue"></Diago>
      <!--发起客服功能-->
      <div class="add-prize">
        <div class="btn2" @click="shareMenu">加速开奖</div>


        <div class="btn3" @click="openDiago">成为研究员概率翻倍</div>
      </div>
      <div class="mask" v-if="showBox" @click="shareMenu">  <!-- 遮罩-->

        <div class="meunBox" v-if="showBox">
          <img class="x" src="http://pbmrxkahq.bkt.clouddn.com/close.png" alt="" @click="shareMenu">

          <div class="title">分享加速抽奖</div>

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

    </div>
    <div class="btn-box" v-if="boon.status== 'rewarded'">
      <div class="add-prize">
        <div class="btn4" @click="againPrice">再去抽一个</div>


      </div>


    </div>


  </div>
</template>
<script>
  import Diago from '../../components/diago'
  import Navbar from '@/components/navbar'

  import {get, post, showModal} from '@/utils/util'
  import config from '@/config'
  import {chooseAddress} from '@/utils/wx'

  export default {
    data() {
      return {
        prize: '抽奖',
        open: false,
        uuid: '',
        prjInfo: {
          name: '',
          id: ''
        },
        boon: {},
        title: '',
        sesson_url: 'http://pbmrxkahq.bkt.clouddn.com/anodor.png',
        showBox: false,
        navbar_title: '',
        haveOpen: '未开奖',
        prizeStyle: 'prize',
        init_rewarded_users: [],
        showGetMoreBtn: false,
        boon_resText: '',
        boon_resImg: ''

      }
    },
    components: {
      Diago,
      Navbar
    },

    methods: {
      // 参加福利 即抽奖操作
      async attendBoon() {
        var that = this
        console.log('抽奖')

        let currentuser_code = wx.getStorageSync('auth_code')

//        let attendBoon_data = await post(`/v1/boons/${that.uuid}/attend?auth_code=${currentuser_code}`)
//
//        console.log(attendBoon_data)

        let boonID = that.boon.uuid
        let auth_code = currentuser_code
        let uuid_authCode = [boonID, auth_code]

        let res = await that.$store.dispatch('attendBoon', {...uuid_authCode})
        console.log(res)
        that.prize = '待开奖'
        that.prizeStyle = 'waiting'
      },
      openDiago() {
        var that = this
        that.open = true
      },
      childByValue(childValue) {
        this.open = childValue
        console.log(this.open)
      },
// url: /api/v1/boons/:uuid/attend

      async getBoons() {
        var auth_code = wx.getStorageSync('auth_code')
        let prjInfo = await get(`/v1/boons/${this.uuid}?auth_code=${auth_code}`)
        console.log(prjInfo)

        this.boon = prjInfo // 福利详情
      },
      shareMenu() {
        console.log(this.showBox)
        this.showBox = !this.showBox
      },
      async getImg() {
        console.log('绘制图片')
        let that = this
        let uuid = that.uuid
        let page = 'pages/isme/index'
        let data = [uuid, page]
        let res = await this.$store.dispatch('wxCodeBoon', {...data})
        let wxCodeImg = res.wxa_qrcode_url

        let titleContent = that.boon.title

        let num_of_participants =String(that.boon.num_of_participants)
        let num_left = 63
        if (num_of_participants.length >= 3) {
          num_left = 63
        } else if (num_of_participants.length === 2) {
          num_left = 72.2

        } else if (num_of_participants.length === 1) {
          num_left = 71.4

        }

        var painting = {
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
              url: that.boon.title_image_url,                  // 变化图片
              top: 0,
              left: 0,
              width: 375,
              height: 173
            },
            // 文本表达
            {
              type: 'text',
              content: titleContent,                                                             // 变量的名称
              fontSize: 27.6,
              lineHeight: 27.6,
              color: '#454553',
              textAlign: 'left',
              top: 217.35,
              left: 25,
              width: 244.95,
              MaxLineNumber: 2,                                                                         // 最大两行 超出...
              breakWord: true,  // 换行
              bolder: true  // 加粗
            },

            {
              type: 'text',
              content: that.boon.lottery_conditions,                                                                                // 变量的价格
              fontSize: 18.4,
              color: '#4a4a4a',
              textAlign: 'left',
              top: 266.45,
              left: 25

            },
            {
              type: 'text',
              content: '已有',
              fontSize: 18.4,
              color: '#4a4a4a',
              textAlign: 'left',
              top: 303.2,
              left: 25                                                                      // 根据价格字符个数 变化

            },
            {
              type: 'text',
              content: that.boon.num_of_participants,                                                                       // 根据参与实际人数 变化
              fontSize: 18.4,
              color: '#ff7f4f',
              textAlign: 'left',
              top: 303.2,
              left: num_left                                                                      //
            },

            {
              type: 'text',
              content: '人参与',
              fontSize: 18.4,
              color: '#4a4a4a',
              textAlign: 'left',
              top: 303.2,
              left: 90,
              lineHeight: 18.4,
              MaxLineNumber: 2,
              breakWord: true
            },
            {
              type: 'image',
              url: wxCodeImg,
              top: 396.75,
              left: 139.15,
              width: 96.6,
              height: 96.6
            },
            {
              type: 'text',
              content: '长按识别小程序码参与抽奖',
              fontSize: 16.1,
              color: '#4a4a4a',
              textAlign: 'left',
              top: 504.85,
              left: 92,
              lineHeight: 16.1,
              MaxLineNumber: 2,
              breakWord: true,
              width: 193.2
            }

          ]
        }
        wx.setStorageSync('painting', painting)
        wx.navigateTo({url: '/pages/test/main'})
      },
      againPrice() {
        wx.switchTab({
          url: '/pages/home/main'
        })
      },
      async chooseAddress() {
        console.log('领奖')
        let that = this
        let data = []
        let uuid = that.boon.boon_order.uuid // 抽奖订单号
        let boon_status = that.boon.boon_order.status
        console.log(boon_status)
        if (boon_status === 'received') {
          wx.navigateTo({
            url: `/pages/user/myboonList/myBoon/main?uuid=${uuid}`
          })
        } else {
          console.log('还没有领过奖 添加地址')
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
          let address_res = await that.$store.dispatch('boonAddress', {...data})
          wx.navigateTo({
            url: `/pages/user/myboonList/myBoon/main?uuid=${uuid}`
          })
        }
      },

      getMoreUser() {
        let that = this
        console.log('加载更多中奖用户')
        that.init_rewarded_users = that.boon.rewarded_users
        that.showGetmore = false
      }

    },
    async onLoad(options) {
      let that = this
      that.uuid = options.boons_uuid // 获取上一页传递的唯一标准uuid
      that.navbar_title = that.$root.$mp.query.title // 获取上一页传递的福利名称 做navbar的标题
      let form_id = options.form_id
      let currentuser_code = wx.getStorageSync('auth_code')
      let uuid_authCode = [that.uuid, currentuser_code, form_id]
      // 根据获得uuid 查询数据出来
//      that.getBoons()
      let boonData = await that.$store.dispatch('getBoons', {...uuid_authCode})
      that.boon = boonData.boon

      let init_rewarded_users = boonData.boon.rewarded_users

      if (init_rewarded_users.length > 12) {
        that.showGetMoreBtn = true
        init_rewarded_users = boonData.boon.rewarded_users.splice(0, 12)
        that.init_rewarded_users = init_rewarded_users
      } else {
        let init_rewarded_users = boonData.boon.rewarded_users
        that.init_rewarded_users = init_rewarded_users
      }

      if (that.boon.participate_status === false && that.boon.status === 'rewarded') {
        //未参加 已开奖
        that.boon_resText = '你来晚了'
        that.boon_resImg = 'http://pbmrxkahq.bkt.clouddn.com/%E6%9C%AA%E4%B8%AD%E5%A5%96.png' //未参加 未中奖

      } else if (that.boon.participate_status === true && that.boon.boon_order.status === 'lose' && that.boon.status === 'rewarded') {
        that.boon_resText = '很遗憾，你本次没有中奖～'
        that.boon_resImg = 'http://pbmrxkahq.bkt.clouddn.com/%E6%9C%AA%E4%B8%AD%E5%A5%96.png' //未参加 未中奖


      } else if (that.boon.participate_status === true && that.boon.boon_order.status !== 'lose' && that.boon.status === 'rewarded') {
        that.boon_resText = '恭喜，您中奖了'
        that.boon_resImg = 'http://pbmrxkahq.bkt.clouddn.com/winning.png' //开奖 中奖

      }

      let isIphoneX = that.$store.state.globalData.isIphoneX
      that.isIphoneX = isIphoneX
    },
    mounted() {
      let phoneModel = wx.getStorageSync('phoneModel')
      console.log(phoneModel)
      if(phoneModel === 'iPhone X'){
        console.log('iPhone X 底部拉高')
      }

    },

    onShareAppMessage(res) {
      let that = this
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '邀你抽奖',
        path: '/pages/project/main?boons_uuid=' + that.uuid,
//        imageUrl: 'http://pbmrxkahq.bkt.clouddn.com/cover.png'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    /*border: 1px solid #000;*/
    font-family: PingFangSC-Medium;
    background: #f7f7f7;
    /*border: 1px solid #000;*/
  }

  .pic-info {
    background: #fff;
    padding: 20px 0 15px 0;
    /*border: .1px solid #fff;*/
    /*border:1px solid #000;*/

  }

  .pic {
    width: 325px;
    height: 150px;
    margin: 0 auto 15px;
    overflow: hidden;
  }

  .pic img {
    width: 100%;
  }

  .prj-info {
    text-align: left;
    width: 325px;
    margin: 0 auto;
    /*border:1px solid #000;*/
    .prj-name {
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
      height: 20px;
      line-height: 20px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      /*border:1px solid #000;*/

    }
  ;
    .prj-little-info {
      height: 17px;
      line-height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      letter-spacing: -0.3px;
      color: #4a4a4a;
      /*margin-bottom: 15px;*/

      .hasJoined {
        display: inline-block;
        float: right;
        height: 17px;
        line-height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        letter-spacing: -0.3px;
        color: #4a4a4a;
      }

    }

  }

  .line {
    width: 325px;
    height: 1px;
    background: #eee;
    /*box-shadow: 0px 2px 4px #000 ;*/

    margin: 0 25px 13px;
    /*margin-bottom: 13px;*/

  }

  .sponsorsBox {
    background: #fff;
    /*border:1px solid #ccc;*/

  }

  .sponsors {
    width: 375px;
    height: 94px;
    color: #4a4a4a;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    /*border:1px solid #ccc;*/
    margin-top: 10px;

  }

  .sponsors-info {
    height: 42px;
    line-height: 42px;
    background: #fff;
    /*padding-left: 25px;*/
    width: 325px;
    margin: 0 auto 2px;
    /*margin-bottom: 2px;*/
    /*border:1px solid #000;*/
  }

  .sponsors .switchGoAnchor {
    width: 325px;
    height: 50px;
    line-height: 50px;
    background: #fff;
    margin: 0 auto;
    /*border: 1px solid #ccc;*/
    /*margin: 10px auto 0;*/
    position: relative;
  }

  .sponsors .switchGoAnchor img:nth-child(1) {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
    /*border:1px solid #000;*/

  }

  .sponsors .switchGoAnchor .right_ico {
    /*border: 1px solid #000;*/
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0;
    top: 17.5px;
    /*margin-right: 28px;*/
    vertical-align: middle;
  }

  .process-prize {
    width: 375px;
    margin: 16px auto 0;
    background: #fff;
    /*padding: 15px 25px;*/
    /*border:1px solid #000;*/
    padding-top: 15px;
    padding-bottom: 15px;
    h2 {
      display: inline-block;
      font-size: 16px;
      width: 325px;
      height: 22px;
      line-height: 22px;
      color: #454553;
      /*border: 1px solid #000;*/
      margin-bottom: 10px;
      /*margin: 15px auto 10px;*/
      margin-left: 25px;
    }
  ;

  }

  .steps {
    height: 34px;
    width: 325px;
    line-height: 15px;
    /*margin-bottom: 20px;*/
    margin: 0 auto 20px;
    /*border: 1px solid #000;*/

  }

  .process-prize .step1, .step2 {
    font-size: 12px;
    font-family: PingFangSC-Regular;
  }

  .step2 {
    /*margin-bottom:30px ;*/
  }

  .boonDetail {
    width: 325px;
    margin: 0 auto;
    font-size: 12px;
    font-family: PingFangSC-Regular;
  }

  .btn1 {
    padding-top: 90px;
    padding-bottom: 61px;
    margin-bottom: 68px;
    background: #fff;
    /*border: 1px solid #000;*/
    .waiting {
      width: 100px;
      height: 100px;
      line-height: 100px;

      /*background: #ff7f4f;*/
      /*opacity: 0.7;*/
      background: rgba(#ff7f4f, 0.4);

      margin: 0 auto;
      font-size: 16px;
      color: #fff;

      border-radius: 50%;
    };
    .prize {
      width: 100px;
      height: 100px;
      line-height: 100px;

      background: rgba(#ff7f4f, 0.7);
      margin: 0 auto;
      font-size: 16px;
      color: #fff;

      border-radius: 50%;
    }

  }
  .btn-box {
    /*border: 1px solid red;*/
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 375px;
    height: 60px;

  }

  .add-prize {
    width: 375px;
    height: 60px;
    font-size: 16px;
    box-shadow: 0 -2px 8px 0 rgba(#ededed, 0.5);
    display: -moz-box;
    display: -webkit-box;
    text-align: center;

    .btn4 {
      font-family: PingFangSC-Medium;

      background: #ff7f4f;
      width: 325px;
      height: 44px;
      line-height: 44px;
      color: #fff;
      margin: 8px auto;
      border-radius: 22px;

    }
    /*padding: 8px 10px;*/
  }

  .add-prize .btn2, .btn3 {
    display: inline-block;
    height: 44px;
    line-height: 44px;

    /*box-sizing: content-box; 外边框*/
    /*内边框*/
    box-sizing: border-box;
    margin-top: 8px;

  }

  .btn2 {
    /*margin-right: 2px;*/
    width: 141px;

    border: 1px solid #ff7f4f;
    color: #ff7f4f;
    margin-left: 8px;

  }

  .btn3 {
    border: 1px solid #ff7f4f;

    background: #ff7f4f;
    width: 214px;
    color: #fff;
    margin-right: 8px;
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
    height: 280px;
    background: #fff;
    position: relative;
    z-index: 1000;
    /*border: 1px solid #ff7f4f;*/
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

  /*开奖区域*/
  .openPrize {
    min-height: 457px;
    width: 375px;
    background: #fff;
    /*border:1px solid red;*/

    .pic {
      /*width: 80px ;*/
      /*height: 80px;*/
      margin: 0 auto 20px;
      /*border: 1px solid #000;*/
      height: 118px;

      img {
        width: 80px;
        height: 80px;
        margin-left: 123px;
      }
    ;
      p {

        height: 16px;
        line-height: 16px;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #666;
        text-align: center;
        margin-top: 14px;
        /*border: 1px solid #000;*/
      }

    }
  ;
    .prizeWindow , .prizeWindowe {

      width: 180px;
      height: 40px;
      background: #fc574b;
      box-shadow: 0 0 8px 0 rgba(#ff7f4f, 0.4);
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      margin: 0px auto 45px;
    }

  ;
    .nameList {
      position: relative;
      /*border: 1px solid red;*/
      .title {
        width: 70px;
        height: 14px;
        margin: 0px auto 0;
        line-height: 14px;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666;

      }
    ;
      .line1, .line2 {
        width: 60px;
        height: 1px;
        position: absolute;
        top: 6px;
        background: #ededed;

      }
    ;
      .line1 {
        position: absolute;

        left: 83px;
      }
    ;

      .line2 {
        position: absolute;

        right: 83px;
      }
    }
  ;
    .userBox {
      width: 280px;
      margin: 10px auto 20px;
      position: relative;
      /*border:1px solid #000;*/
      display: flex;
      /*justify-content: space-between;*/
      justify-content: center;
      flex-wrap: wrap;
      align-content: flex-start;

      .user {
        display: inline-block;
        /*border:1px solid red;*/
        width: 16.6666%;
        height: 50px;
        margin-bottom: 15px;

        img {
          width: 34px;
          height: 34px;
          margin-left: 6.25px;
          border-radius: 50%;

        }
      ;
        .nickname {
          width: 30px;
          height: 10px;
          margin: 0 auto;
          font-family: PingFangSC-Regular;
          font-size: 10px;
          color: #999;
          line-height: 10px;
          text-align: center;
          overflow: hidden;
        }

      }
    ;
      .getall {
        width: 65px;
        height: 14px;
        line-height: 14px;
        margin: 20px auto 0px;
        position: absolute;
        bottom: 0;
        left: 113px;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: #999;

        vertical-align: middle;
        span {

          vertical-align: middle;
          /*border: 1px solid #000;*/

        }
        img {
          vertical-align: middle;
          margin-left: 2px;
          margin-bottom: 1.5px;
          width: 11px;
          height: 11px;
          display: inline-block;
          /*border: 1px solid #000;*/

        }
      }

    }
  }

  /*.mainDiv {*/
  /*float: left;*/
  /*margin-left: 10%;*/
  /*width: 80%;*/
  /*margin-top: 2%;*/
  /*height: 200px;*/
  /*background-color: #FFEBCD;*/

  /*}*/

  /*.viceDiv_1,.viceDiv_2,.viceDiv_3 {*/
  /*float: left;*/
  /*background-color: #7FFFD4;*/
  /*margin-top: 2% ;*/
  /*margin-left: 2.5%;*/
  /*width: 30%;*/
  /*height: 150px;*/
  /*}*/
</style>
