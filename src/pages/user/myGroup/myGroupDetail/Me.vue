<template>
  <div class="container" >
    <Navbar :navbar_title="navbar_title"></Navbar>
    <div class="wrap">
      <div class="pj-info">
        <div class="left">
          <!--<img :src="order_info.group_activity.title_image_url" alt="">-->
          <div class="bg" :style="{width:'100%', height:'100%', backgroundImage:'url('+order_info.group_activity.title_image_url+')',backgroundSize:'cover', backgroundPosition:'50%'}"></div>

        </div>
        <div class="right">
          <h2><div class="mark">{{order_info.group_activity.group_type}}</div><span>{{order_info.group_activity.title}}</span></h2>
          <p><span>¥{{order_info.group_activity.current_price}}</span><span>¥{{order_info.group_activity.original_price}}</span></p>
        </div>
      </div>
    </div>

    <div class="receive" v-if="order_info.address">
      <div class="title">收货人信息</div>
      <div class="phone_address">
        <div class="phone"><span>收货信息：</span>{{order_info.address.people}}</div>
        <div class="address"><span>收货地址：</span><span class="addressDetail">{{order_info.address.detail}}</span></div>
      </div>

    </div>
    <div class="orderinfo">
      <div class="title">订单信息</div>
      <div class="groupOrder"><span>拼团订单：</span><span>{{order_info.uuid}}</span></div>
      <div class="orderTime"><span>订单时间：</span><span>{{order_info.created_at}}</span></div>
      <div class="orderState"><span>订单状态：</span><span>{{order_info.status_display}}</span></div>
    </div>

    <div class="express" v-if="order_info.delivery">
      <div class="title">物流信息</div>
      <div class="groupOrder"><span>物流配送：</span><span>{{order_info.delivery.company}}</span></div>
      <div class="orderTime"><span>运单编号：</span><span @click="clip_no">{{order_info.delivery.delivery_no}}</span></div>
      <img src="../../../../../static/img/right.png" alt="">
    </div>

    <div class="service">
      <contact-button size="22" class='pos'></contact-button>
      <img class="icon_kf" src="http://pbmrxkahq.bkt.clouddn.com/msgservice.png">
    </div>

  </div>
</template>
<script>
  import {showSuccess, post, showModal} from '@/util'
  import config from '@/config'
  import Navbar from '@/components/navbar'
  import conifig from '@/config'
  export default {
    components: {
      Navbar
    },

    data () {
      return {
        navbar_title: '订单详情',
        order_info: {},

      }
    },

    methods: {
      clip_no () {
        let this_text = this.order_info.delivery.delivery_no
        wx.setClipboardData({
          data: this_text,
          success () {
            wx.showToast({
              title: '已复制运单号',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    },
    async onLoad () {
      let that = this
      let this_uuid = that.$root.$mp.query.uuid // 订单uuid
      let auth_code = wx.getStorageSync('auth_code')
      let uuid_authCode = [this_uuid, auth_code]
      let res = await that.$store.dispatch('groupActivities_order', {...uuid_authCode})
      that.order_info = res.group_activity_order
    }

  }
</script>

<style lang="scss"  scoped>
  .container{

    font-family: PingFangSC-Regular;
    font-weight: Regular;
    color:#333;
    background:#f7f7f7 ;
    min-height: 667px;


  }

  .receive{
    margin-top: 10px;
    /*border: 1px solid #000;*/
    background: #fff;
    width: 375px;
    min-height: 115px;
    .title{
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #333;
      width:325px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      margin: 0 auto;
    };
    .phone_address{

      font-fmily: PingFangSC-Regular;
      font-size: 12px;
      color:#4a4a4a;
      width: 325px;
      margin: 10px auto 0;
      /*border: 1px solid red;*/
      .phone{
        span{

        }
      };
      .address{
        /*border: 1px solid blue;*/

        span:nth-child(1){
          display: inline-block;
          vertical-align: top;

        };
        .addressDetail{
          display: inline-block;
          /*border: 1px solid #000;*/
          width:255px ;
          margin-bottom: 15px;


        }
      }
    }



  }

  .orderinfo{
    margin-top: 10px;
    /*border: 1px solid #000;*/
    background: #fff;
    width: 375px;
    min-height: 115px;
    .title{
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #333;
      width:325px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      margin: 0 auto;
    };
    .groupOrder,.orderTime,.orderState{
      width: 325px;
      font-fmily: PingFangSC-Regular;
      font-size: 12px;
      color:#4a4a4a;
      line-height: 17px;
      /*margin: 10px auto 0;*/
      margin: 0 auto;

    };
    .groupOrder{
      margin-top: 10px;
    }



  }

  .express{
    margin-top: 10px;
    /*border: 1px solid #000;*/
    background: #fff;
    width: 375px;
    min-height: 115px;
    position: relative;
    .title{
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #333;
      width:325px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      margin: 0 auto;
    };
    .groupOrder,.orderTime,.orderState{
      width: 325px;
      font-fmily: PingFangSC-Regular;
      font-size: 12px;
      color:#4a4a4a;
      line-height: 17px;
      /*margin: 10px auto 0;*/
      margin: 0 auto;

    };
    .groupOrder{
      margin-top: 10px;
    }
    img{
      width: 10px;
      height: 10px;
      position: absolute;
      top:60px;right: 25px;
    }



  }


  /*客服按钮*/
  .pos{
    position: absolute;
    top: 10px;
    left: 23px;
    opacity: 0;
  }
  .icon_kf{
    width: 40px;
    height: 40px;
    display: inline-block;
  }


  .service{
    line-height: 15px;
    text-align: center;
    width: 40px;
    height: 40px;
    /*border: 1px solid #000;*/
    position: fixed;
    bottom: 50px;
    right: 25px;

  }


  /*-----------*/
  .wrap{
    height: 125px;
    background: #fff;
    border: 0.5px solid #fff;
    .pj-info{

      /*border: 1px solid #000;*/


      width: 325px;
      height: 84px;
      margin: 21px auto  20px;
    }
    .pj-info .left{
      display: inline-block;
      width: 80px;height: 80px;
      margin-top: 4px;
      border-radius: 5px;

    }

    .left img{
      width:80px;
      height: 80px;
      margin-right: 0;
      border-radius: 5px;

    }

    .pj-info .right{
      position: relative;
      display: inline-block;
      height: 84px;
      width: 225px;
      /*border:1px solid #000;*/
      h2{
        display: inline-block;
        font-size: 20px;
        font-family:  PingFangSC-Medium;
        color:#333;
        /*border:1px solid #000;*/
        height: 48px;
        line-height: 24px;

        padding: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        /*margin-left: 60px;*/
        .mark{
          width: 50px;height: 20px;
          line-height: 24px;
          text-align: center;
          font-family:PingFangSC-Regular ;
          font-size: 11px;
          color:#ff7f4f;
          border:1px solid #ff7f4f;
          display: inline-block;
          position: absolute;
          top:0;
          left: 0;
          /*margin-right: 10px;*/


        };
        span{
          margin-left: 61px;

        }
      };
      p{
        /*border: 1px solid #000;*/
        margin-top: 13px;
        span{
          display: inline-block;
          margin-left: 5px;
        };
        span:nth-child(1){
          font-size: 20px; color: #D0021B;
          font-weight: Medium;

        };
        span:nth-child(2){
          font-size: 12px; color: #D0021b;
          font-weight: Regular;
          text-decoration: line-through;
        }
      }

    }



  }




</style>







