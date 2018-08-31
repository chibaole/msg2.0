<template>
  <div class="container">


    <Navbar :navbar_title="navbar_title"></Navbar>

    <Card :order_info= "order_info"></Card>
    <!--订单详情-->
    <div class="detail-order">
        <h2>订单详情</h2>
        <p>{{order_info.group_activity.title}}<span>¥{{order_info.group_activity.current_price}}</span></p>
    </div>
    <div class="address">
      <p>地址：目前需填写收货地址<span>(拼团成功后 提货时填写 )</span></p>
    </div>

    <div class="pay">
      <button @click="pay" >
        <img src="http://pbmrxkahq.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1icon.png" alt=""><span class="paytxt">微信支付¥{{order_info.group_activity.current_price}}</span>
      </button>
    </div>
  </div>
</template>

<script>
  import Card from  '@/components/groupCard'
  import {get, post, showModal} from '@/utils/util'
  import Navbar from '@/components/navbar'


  export default {


    data(){
      return{


        order_uuid:'',
        order_info:{},
        navbar_title:'订单详情',
        initGroupId:''
      }
    },
    components:{
      Card,
      Navbar
    }
    ,

    methods:{
        pay(e){
          console.log(e)
          let that = this
          let orderId= that.order_info.group_activity_initial.uuid  //需要支付的订单uuid
          wx.setStorageSync('orderId',orderId) //存储拼团支付订单号
          wx.navigateTo({
            url: '/pages/groupPj/order/main?group_activity_initial_uuid=' + orderId,
          })
          console.log('/pages/groupPj/order/main?group_activity_initial_uuid=' + orderId)
          wx.requestPayment({
            'timeStamp': '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success':function(res){
              console.log(res)
            },
            'fail':function(res){
              console.log(res)
              console.log('支付错误')
              showModal('支付失败','请尝试重新支付')
            }
          })
        },
//      async getGroup_orders(){
//          wx.removeStorageSync('current_orderinfo')//每次先删除上一个缓存的订
//          let that = this
//          let  order_info = await  get(`/v1/group_activity_orders/${that.order_uuid}`)
//        let order = order_info.group_activity_order
//        that.order_info = order
//
//        wx.setStorageSync('current_orderinfo',order)//缓存获取的拼团订单信息
//
//      }
    },
   async onLoad(){
      let that = this
      let initGroupId =  this.$root.$mp.query.initGroupId //获取发起拼团活动返回的订单ID
     let currentuser_code = wx.getStorageSync('auth_code')
     let uuid_authCode = [initGroupId,currentuser_code]


//      that.getGroup_orders()
      //新api的形式
      const orderData = await  that.$store.dispatch('groupActivities_order',{...uuid_authCode})

     console.log(orderData)

      that.order_info = orderData.group_activity_order
     console.log(that.order_info)
    },

   async mounted(){

   }

  }
</script>
<style lang="scss" scoped>
.container{
  font-family: "PingFang SC";
  font-weight: Regular;
  text-align: left;
  background: #f7f7f7;

}
.wrap{
  position: relative;

}
    .pj-info{
      width: 350px;height: 118px;
      border: 1px solid #000;
      box-shadow: 0 2px 4px #3e3232;
      margin: 0 auto;
    }
  .pj-info .left{
    display: inline-block;
    width: 80px;height: 80px;
    background: #ccc;
    margin-top: 21.5px;
    margin-left: 20px;

  }

  .left img{
    width:75px;
    height: 75px;
    margin: 2.5px;

  }
  .left .mark{
    width: 105px;height: 25px;
    text-align: center;
    background: #ccc;
    transform:rotate(-42deg);

    position: absolute;
    top:10px;
    left: -20px;
  }



    .pj-info .right{
      display: inline-block;
      width: 230px;height: 80px;
      background: #ccc;
      margin-top: 21.5px;
      margin-right: 10px;

    }

  .right h2{
    font-size: 20px;
    font-weight: Medium;
  }

.right  p span{
  display: inline-block;
  margin-left: 5px;
}

.right  p span:nth-child(1){
  font-size: 20px; color: #D0021B;
  font-weight: Medium;

}
.right p span:nth-child(2){
  font-size: 12px; color: #D0021B;
  font-weight: Regular;

}
.right p span:nth-child(3){
  font-size: 12px; color: #D0021b;
  font-weight: Regular;
  text-decoration: line-through;
}





.line{
  width: 331px;
  height: 1px;
  background: #979797;
  /*box-shadow: 0px 2px 4px #000 ;*/

  margin: 0 auto;

}

.detail-order{
  height: 82px;
  width: 100%;
  background: #fff;
  border: 1px solid #fff;
  margin-top: 10px;
}

.detail-order h2{
  width: 64px;
  height: 20px;
  margin: 20px auto auto 25px;
  font-family: PingFangSC-Medium;
  color:#333;
  font-size: 16px;
}

.detail-order p{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #4a4a4a;
  margin: 10px auto 20px 25px;
}
.detail-order p span{
  display: inline-block;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #4a4a4a;
  margin-left: 228px;
}
   .address{
     /*border: 1px solid #000;*/
     width: 100%;
     height: 57px;
     line-height: 57px;
     background: #fff;
    font-family: PingFangSC-Regular;
     font-size: 12px;
     color: #4a4a4a;
    margin: 10px auto;
  }
   .address p{
     margin-left: 25px;
   }
   .address span{
     color: #999;

   }
  .pay{
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 60px;
    /*border: 1px solid #000;*/
    background: #fff;
    box-shadow: 0px -2px 8px #ededed;


  }
  .pay button{
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
    img{
      width: 18px;
      height: 18px;
      margin-top: 13px;

      display: inline-block;

      /*border: 1px solid #000;*/
      position: absolute;
      left: 106px;

    };
    .paytxt{
      display: inline-block;
      /*border: 1px solid #000;*/
      position: absolute;
      top:0;
      left:132px;
    }

  }
</style>
