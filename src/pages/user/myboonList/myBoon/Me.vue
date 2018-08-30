<template>
  <div class="container" >
    <Navbar :navbar_title="navbar_title"></Navbar>


    <!--<Card :order_info="order_info"></Card>-->
    <div class="pjCard">
      <div class="pic"><img :src="boon_order.boon.title_image_url" alt=""></div>
      <div class="priceName">
        <h2 class="title">{{boon_order.boon.title }}</h2>
        <div class="sponsor">{{boon_order.boon.sponsor.description}}</div>
      </div>

    </div>


    <div class="receive">
      <div class="title">收货人信息</div>
      <div class="phone_address">
        <div class="phone"><span>收货信息：</span><span>{{ boon_order.address.people || "暂无收货人信息"  }}</span></div>
        <div class="address"><span>收货地址：</span><span class="addressDetail">{{boon_order.address.detail}}</span></div>
      </div>

    </div>
    <div class="orderinfo">
      <div class="title">订单信息</div>
      <div class="groupOrder"><span>拼团订单：</span><span>{{boon_order.uuid}}</span></div>
      <div class="orderTime"><span>订单时间：</span><span>{{boon_order.boon.lottery_info.lottery_time}}</span></div>
      <div class="orderState"><span>订单状态：</span><span>{{boon_order.order_status_display}}</span></div>
    </div>

    <div class="express">
      <div class="title">物流信息</div>
      <div class="groupOrder"><span>物流配送：</span><span>{{boon_order.delivery.company}}</span></div>
      <div class="orderTime"><span>运单编号：</span><span>{{boon_order.delivery.delivery_no}}</span></div>
      <img src="../../../../../static/img/right.png" alt="">
    </div>

    <div class="lottery">
      <div class="title">开奖信息</div>
      <div class="groupOrder"><span>抽奖玩法：</span><span>{{boon_order.boon.lottery_info.lottery_method}}</span></div>
      <div class="orderTime"><span>开奖时间：</span><span>{{boon_order.boon.lottery_info.lottery_time}}</span></div>
      <div class="orderState"><span>抽奖状态：</span><span>{{boon_order.status_display}}</span></div>
    </div>


    <!--<button open-type='contact' class="service">客服</button>-->
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
  import Card from '@/components/groupCard'
  export default {
    components: {
      Navbar,
      Card
    },

    data () {
      return {
        navbar_title:'抽奖详情',
        order_info:{
          title:'酸奶补给大礼包x10',

        },
        boon_order:{}

      }

    },

    methods:{

    },
   async onLoad(){
      console.log('我的抽奖订单详情')
      var that = this
      let auth_code = wx.getStorageSync('auth_code')
     console.log(auth_code)

     let uuid = that.$root.$mp.query.uuid //获取活动列表的拼团活动uuid
     console.log('我的抽奖订单详情')

     let data = [uuid,auth_code]
     let boondata = await that.$store.dispatch('myBoonDetail',{...data})
     console.log(boondata.boon_order)
     if(boondata.boon_order.address == null){
       boondata.boon_order.address= {
         people:'',
         detail:''

       }
       that.boon_order = boondata.boon_order

     }

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
.pjCard {
  height: 125px;
  width: 375px;
  background: #fff;
  /*border: 1px solid #000;*/
  position: relative;
  .pic {
    display: inline-block;
    width: 80px;height: 80px;
    margin: 25px auto 20px 25px;
    img{
      width: 80px;height: 80px;

      border-radius: 5px;
    }
  };
  .priceName{
    /*border: 1px solid red;*/
    display: inline-block;
    height: 80px;
    position: absolute;
    top:25px;
    margin-left:20px ;
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #333;
    line-height: 24px;
    .sponsor{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #4a4a4a;
      letter-spacing: -0.4px;
    }

  }
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
      border-bottom: 2px solid #ededed;
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
      border-bottom: 2px solid #ededed;
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
      border-bottom: 2px solid #ededed;
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
.lottery {
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
    border-bottom: 2px solid #ededed;
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



</style>







