<template>
  <div class="container">


    <Navbar :navbar_title="navbar_title"></Navbar>

    <Card :order_info="order_info"></Card>
    <!--订单详情-->
    <div class="detail-order">
      <h2>订单详情</h2>
      <p>{{order_info.group_activity.title}}</p>
      <span>¥&nbsp;{{order_info.group_activity.current_price}}</span>
    </div>
    <div class="address">
      <p>地址：目前需填写收货地址<span>(拼团成功后 提货时填写)</span></p>
    </div>


    <form :report-submit="true" @submit="pay">
      <button class="form_button" formType="submit">
        <div class="pay">
          <button @click="pay">
            <img src="http://pbmrxkahq.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1icon.png" alt=""><span
            class="paytxt">微信支付¥{{order_info.group_activity.current_price}}</span>
          </button>
        </div>
      </button>
    </form>


    <!--<form  :report-submit="true"  @submit="goMygroup">-->
    <!--<button  formType="submit" >-->
    <!--<div class="mylist" >-->
    <!--<img src="http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E6%8B%BC%E5%9B%A2%E8%AE%A2%E5%8D%95icon.png" alt="">-->
    <!--<span class="list_title" >我的拼团订单</span>-->
    <!--</div>-->
    <!--</button>-->
    <!--</form>-->
  </div>
</template>

<script>
  import Card from '@/components/groupCard'
  import {get, post, showModal} from '@/utils/util'
  import Navbar from '@/components/navbar'

  export default {

    data() {
      return {

        order_uuid: '',
        order_info: {},
        navbar_title: '拼团详情',
        initGroupId: '',
        group_activity_order_uuid: '',
        group_activities_uuid:''

      }
    },
    components: {
      Card,
      Navbar
    },

    methods: {
      async pay(e) {
        console.log(e)
        let that = this
        let order_uuid = that.group_activity_order_uuid // 订单uuid
        let pay_res = await that.$store.dispatch('group_pay', order_uuid)

        let form_id = e.mp.detail.formId
        console.log(form_id)
        console.log(pay_res)
        wx.requestPayment({
          'timeStamp': String(pay_res.time_stamp),
          'nonceStr': String(pay_res.nonce_str),
          'package': String(pay_res.package),
          'signType': String(pay_res.sign_type),
          'paySign': String(pay_res.pay_sign),
          'success': function (res) {
            console.log(res)
            let group_activity_initial_uuid = that.order_info.group_activity_initial.uuid

            wx.setStorageSync('group_activity_initial_uuid', group_activity_initial_uuid)
            wx.navigateTo({
              url: '/pages/groupPj/order/main?group_activity_initial_uuid=' + group_activity_initial_uuid + '&group_activities_uuid='+that.group_activities_uuid
            })
            console.log('/pages/groupPj/order/main?group_activity_initial_uuid=' + group_activity_initial_uuid)
          },
          'fail': function (res) {

            showModal('支付失败', '请尝试重新支付')

          }
        })
      }

    },
    async onLoad(options) {
      let that = this
      let group_activity_orders_uuid = this.$root.$mp.query.group_activity_orders_uuid // 获取发起拼团活动返回的订单ID
      that.group_activity_order_uuid = group_activity_orders_uuid

      that.group_activities_uuid = options.group_activities_uuid

      console.log(that.group_activities_uuid)
      let currentuser_code = wx.getStorageSync('auth_code')
      let uuid_authCode = [group_activity_orders_uuid, currentuser_code]
      const orderData = await that.$store.dispatch('groupActivities_order', {...uuid_authCode})

      console.log(orderData)

      that.order_info = orderData.group_activity_order
      console.log(that.order_info)
    },

    async mounted() {

    }

  }
</script>
<style lang="scss" scoped>
  .container {
    font-family: "PingFang SC";
    font-weight: Regular;
    text-align: left;
    background: #f7f7f7;
    /*min-height: 812px;*/
    border: 1px solid #fff;

    /*border: 1px solid #000;*/

  }

  .detail-order {
    height: 82px;
    width: 372.5px;
    background: #fff;
    /*border-top: 1px solid #fff;*/
    /*border-bottom: 1px solid #fff;*/
    position: relative;
    margin-top: 10px;
    border: 1px solid #fff;
    h2 {
      width: 64px;
      height: 20px;
      margin: 20px auto auto 25px;
      font-family: PingFangSC-Medium;
      color: #333;
      font-size: 16px;
      /*border: 1px solid #000;*/

    }
  ;
    p {
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #4a4a4a;
      height: 12px;
      /*width: 70%;*/
      width:75% ;
      line-height: 12px;
      margin: 10px auto 20px 25px;

      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      /*border:1px solid #000;*/
    };
    span {
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      height: 12px;
      /*width: 20%;*/
      color: #4a4a4a;
      /*margin-left: 228px;*/
      /*border: 1px solid #000;*/
      float: right;
      position: absolute;
      top:50px;
      right:30px;
      /*margin-top: 50px;*/

    }

    /*display: none;*/

  }

  .address {
    /*display: none;*/
    /*border: 1px solid #000;*/
    width: 373px;
    height: 57px;
    line-height: 57px;
    background: #fff;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #4a4a4a;
    margin: 10px auto;
    p {
      /*margin-left: 25px;*/
      width: 325px;
      margin: 0 auto;
    };
    span {
      color: #999;

    }


  }



  form {
    /*border:1px solid #000;*/
    display: inline-block;
    /*display: none;*/
    height: 60px;
    width: 375px;
    position: fixed;
    bottom: 0;

    .form_button {
      display: inline-block;
      background: none;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      /*border:1px solid #000;*/

    }
  ;
    button::after {
      border-radius: 0;
      border: none;

    };
    .pay {
      position: fixed;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 60px;
      /*border: 1px solid #000;*/
      background: #fff;
      box-shadow: 0px -2px 8px #ededed;
      button {
        width: 325px;
        height: 44px;
        margin: 8px auto;
        background: #1aac18;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #fff;
        border-radius: 5px;
        display: block;
        line-height: 44px;
        position: relative;
        img {
          width: 18px;
          height: 18px;
          margin-top: 13px;

          display: inline-block;

          /*border: 1px solid #000;*/
          position: absolute;
          left: 106px;

        }
      ;
        .paytxt {
          display: inline-block;
          /*border: 1px solid #000;*/
          position: absolute;
          top: 0;
          left: 132px;
        }

      }

    }

  }

</style>


