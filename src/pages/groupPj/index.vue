<template>
  <div class="container">
    <!--<Navbar :navbar_title="navbar_title"></Navbar>-->
    <Navbar :navbar_title="navbar_title"></Navbar>

    <div class="top">
      <div class="pic">
        <!--<img :src="group_activity.title_image_url" alt="">-->
        <div class="bg"
             :style="{width:'100%', height:'100%', backgroundImage:'url('+group_activity.title_image_url+')',backgroundSize:'cover', backgroundPosition:'50%'}"></div>

      </div>

      <div class="timeLine">
        <p>距离结束仅剩</p>
        <span>{{time.hours}}&nbsp;</span>时
        <span>{{time.minutes}}&nbsp;</span>分
        <span>{{time.seconds}}&nbsp;</span>秒
      </div>
      <div class="pj-info">
        <h2 class="pj-name"><span class="mark">{{group_activity.group_type}}</span>{{group_activity.title}}</h2>
        <p class="pj-text">{{group_activity.description}}</p>
        <p class="pj-price">¥&nbsp;{{group_activity.current_price}}<span>拼团价</span><span v-if="group_activity.original_price">¥{{group_activity.original_price}}</span>
        </p>
      </div>
    </div>
    <!--<div class="line"></div>    &lt;!&ndash;分割线&ndash;&gt;-->
    <div class="group">
      <h2 class="group-game">拼团玩法</h2>
      <p class="step1">1.付款后邀请好友参团</p>
      <p class="step2">2.达到拼团人数，顺利开团</p>
      <p class="step2">3.若24小时内拼团不成功，全额退款</p>

      <div class="line"></div>

    </div>

    <div class="pjDetail">
      <h2 class="pjdetail">商品详情</h2>
      <rich-text :nodes="myDetail"></rich-text>


      <!--{{group_activity.product.detail}}-->
    </div>

    <div class="pay">

      <span class="price">¥&nbsp;{{group_activity.current_price}}<span v-if="group_activity.stock">还剩{{group_activity.stock}}份</span></span>

      <form @submit='initGroup' :report-submit=true>
        <button formType="submit">{{group_activity.button.text}}</button>
      </form>

    </div>
  </div>
</template>
<script>
  import {get, post, showModal} from '@/utils/util'
  import Navbar from '@/components/navbar'
  import OldUser from '../../components/oldUser'

  import config from '@/config'

  export default {

    components: {
      Navbar,
      OldUser
    },
    data() {
      return {
        pjname: '为定义',
        uuid: '',
        group_activity: {},
        navbar_title: '拼团详情',
        group_activity_order_uuid: '',
        group_activities_uuid: '',
        time: {day: '', hours: '', minutes: '', seconds: ''},
        myDetail: '',
        oldUser:false
      }
    },
    methods: {
// 跳转到拼团订单
      goGroupDetail(e) {
        let prjName = e.currentTarget.dataset.prjname
        let pjNum = e.currentTarget.dataset.groupNum

        wx.navigateTo({
          url: '/pages/groupPj/groupDetail/main?prjname=' + prjName + '&pjNum=' + pjNum
        })
      },
// 获取拼团产品信息
      async getGrouDetail() {
        console.log('拼团详情')
        let that = this
        let uuid = this.uuid
        let prjDetail = await get('/v1/group_activities/' + uuid, {uuid: uuid})
        console.log(prjDetail)
        that.group_activity = prjDetail.group_activity
      },

// 发起拼团订单
      async initGroup(e) {
        let that = this
        let group_activitys_uuid = that.group_activities_uuid
        let currentuser_code = wx.getStorageSync('auth_code')
        let uuid_authCode = [group_activitys_uuid, currentuser_code]

        let initGroupData = await that.$store.dispatch('initGroup', {...uuid_authCode})
        let form_id = e.mp.detail.formId
        console.log(initGroupData)
        if (initGroupData) {
          let group_activity_order_uuid = initGroupData.group_activity_order.uuid  // 发起拼团返回的订单id
          that.group_activity_order_uuid = group_activity_order_uuid
          wx.navigateTo({
            url: '/pages/groupPj/groupDetail/main?group_activity_orders_uuid=' + group_activity_order_uuid + '& group_activities_uuid='+that.group_activities_uuid
          })
        } else {

          //显示弹窗

//          that.oldUser = true
          showModal('发起失败','库存不足，暂无法拼团')
        }
      },


      // 获取倒计时
      getlastTime() {
        let that = this
        let currentTime = (new Date()).getTime()   // 当前的时间

        let endTime = that.group_activity.end_time  // 1532674437000

        let leftTime = endTime - currentTime // 总时间
        leftTime < 0 ? leftTime = 0 : leftTime = endTime - currentTime

        let day = Math.floor(leftTime / 1000 / 60 / 60 / 24) // 剩余天数

        let hours = Math.floor(leftTime / 1000 / 60 / 60 % 24)

        let minutes = Math.floor(leftTime / 1000 / 60 % 60)
        let second = Math.floor(leftTime / 1000 % 60)


//        that.time.day = day
        that.time.hours = hours
        that.time.minutes = minutes
        that.time.seconds = second

//        console.log(hours, minutes, second)

        var param = setTimeout(that.getlastTime, 1000)


        if (leftTime <= 0) {
          showModal('拼团结束', '活动结束了')
          leftTime = 0
          clearTimeout(param)
        }
      },


      //


    },
    async onLoad(options) {

      let that = this
      that.getlastTime()

      that.group_activities_uuid = that.$root.$mp.query.group_activities_uuid // 获取活动列表的group_activities_uuid
      let form_id = options.form_id
      console.log('这是form' + form_id)
      let uuid = that.group_activities_uuid
      let currentuser_code = wx.getStorageSync('auth_code')
      let uuid_authCode = [uuid, currentuser_code, form_id]
      let group_activity = await that.$store.dispatch('getGrouDetail', {...uuid_authCode})  // 获取当前拼团活动详情
      that.group_activity = group_activity.group_activity


      // 通过富文本展示商品详情
      that.myDetail = that.group_activity.product.detail

    },
    onShow(){
//      this.oldUser = false

    },

    async mounted() {
      let that = this
      that.getlastTime()

      that.group_activities_uuid = that.$root.$mp.query.group_activities_uuid // 获取活动列表的group_activities_uuid
      let form_id = options.form_id
      console.log('这是form' + form_id)
      let uuid = that.group_activities_uuid
      let currentuser_code = wx.getStorageSync('auth_code')
      let uuid_authCode = [uuid, currentuser_code, form_id]
      let group_activity = await that.$store.dispatch('getGrouDetail', {...uuid_authCode})  // 获取当前拼团活动详情
      that.group_activity = group_activity.group_activity
      // 通过富文本展示商品详情
      that.myDetail = that.group_activity.product.detail
      that.myDetail = that.myDetail.replace(/\<img/g, '<img class="img" mode="aspectFill"')

    }
  }
</script>
<style scoped lang="scss">
  .container {
    font-family: "PingFang SC";
    font-weight: Regular;
    text-align: left;
    background: #f7f7f7;

/*border: 1px solid #000;*/
    /*padding-bottom: 68px;*/

  }

  .top {
    background: #fff;

    border-top: 1px solid #fff;
    margin-top: 1px;
    position: relative;
  }

  .pic {
    width: 325px;
    height: 150px;
    margin: 20px auto 15px;
    overflow: hidden;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0 4px 10px rgba(#cccccc, 0.5);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
  }

  .timeLine {
    /*border: 1px solid #000;*/
    width: 122px;
    height: 42px;
    line-height: 15px;
    font-family: PingFangSC-Regular;
    font-size: 12px;

    color: #fff;
    text-align: center;
    background: rgba(0,0,0,0.3);
    border-radius: 21px 0px 0px 21px;
    position: absolute;
    top: 88px;
    right: 25px;
    p {
      margin-top: 6px;
    };
    span{
      font-family:PingFangSC-Medium ;
    }
  }

  .pj-info {
    width: 325px;
    /*height: 155px;*/
    margin: 0 auto;
    /*border:1px solid #000;*/
    padding-bottom: 15px;

    .pj-name {
      font-size: 20px;
      font-family: PingFangSC-Medium;

      /*border:1px solid #000;*/

      color: #333;
      height: 22px;
      line-height: 20px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      span {
        font-size: 11px;
        display: inline-block;
        width: 50px;
        height: 20px;
        line-height: 20px;

        margin-right: 10px;
        margin-bottom: 5px;
        color: #ff7f4f;
        text-align: center;
        vertical-align: top;
        border: 1px solid #FF7F4F;

      }

    }
  ;
    .pj-text {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      /*border: 1px solid #F00000;*/
      width: 246px;
      height: 12px;
      line-height: 12px;
      color: #4a4a4a;
      margin-top: 10px;

    }

    .pj-price {
      min-width: 93px;
      height: 20px;
      color: #f83713;
      font-size: 18px;
      line-height: 20px;
      font-family: PingFangSC-Medium;
      border: 1px solid #fff;
      /*letter-spacing: 4px;*/
      margin-top: 15px;

      span:nth-child(1) {
        /*color: red;*/
        font-size: 12px;
        font-family: PingFangSC-Regular;
        line-height: 20px;
        color: #f83713;
        letter-spacing: 0px;
        margin-left: -1px;
      }
    ;
      span:nth-child(2) {
        font-size: 10px;
        text-decoration: line-through;
        font-family: PingFangSC-Regular;
        line-height: 26px;
        color: #999;
        letter-spacing: 0px;
        margin-left: 5px;

      }

    }
  }

  .group {
    background: #fff;
    height: 104px;
    border-top: 1px solid #fff;
    margin-top: 10px;
    /*border: 1px solid #000;*/
  }

  .pjDetail {
    background: #fff;
    min-height: 100px;
    /*width: 375px;*/
    border-top: 1px solid #fff;
    /*border: 1px solid #000;*/
    font-family: PingFangSC-Regular;
    font-size: 12px;
    text-align: left;
    padding: 0 25px;
    /*margin-bottom: 60px;*/
    margin: 0 auto 68px;



  }

  .pjdetail {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    text-align: left;
    height: 16px;
    line-height: 16px;
    margin-top: 10px;
    margin-bottom: 8px;
    color: #333;

  }

  .line {
    width: 325px;
    height: 2px;
    background: #f5f5f5;
    margin: 20px auto 0;
  }

  .group h2 {

    width: 64px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    color: #333;
    vertical-align: middle;
    margin: 15px 286px 15px 25px;

  }

  .step1, .step2 {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    color: #4a4a4a;
    margin-left: 25px;
  }

  .pay {
    width: 100%;
    height: 60px;
    background: #fff;
    /*border: 1px solid #000;*/
    box-shadow: 0 -2px 8px #ededed;
    position: fixed;
    bottom: 0;
    z-index: 100;

    .price {
      display: inline-block;
      float: left;
      min-width: 90px;
      height: 44px;
      line-height: 44px;
      color: #f7412d;
      background: #fff;
      font-size: 18px;
      text-align: left;
      margin-left: 25px;
      margin-top: 8px;
      span {
        font-size: 12px;
        color: #999;
      }

      /*border:1px solid red;*/

    };
    form {
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
      /*border:1px solid blue;*/

      button {
        display: inline-block;
        background: #ff7f4f;
        color: #fff;
        font-family: PingFangSC-Medium;
        height: 44px;
        width: 100%;
        line-height: 44px;

        font-size: 16px;
        border-radius: 22px 22px 22px 22px;

        /*border:1px solid blue*/
      }
      button::after {
        border: none;
      }

    }




  }



</style>

