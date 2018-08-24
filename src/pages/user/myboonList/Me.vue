<template>
  <div class="container" >
    <Navbar :navbar_title="navbar_title"></Navbar>
    <div class="groupList">
      <div class="groupItem">
        <div class="orderNum">
          <div class="left">订单号：<span>{{}}534475800412</span></div>
          <div class="right">
            <span>未中奖{{}}</span>
            <img src="../../../../static/img/right.png" alt="">
          </div>
        </div>
        <div class="orderInfo">
          <div class="pic"><img src="" alt=""></div>
          <div class="txt">
            <div class="name">{{}}限量5000份 | 凤梨酥6枚装</div>
            <p class="group_type">{{}}三人团</p>
            <p class="detail">{{}}商品描述详情</p>
          </div>
          <!--<span class="price">{{}}¥5</span>-->


        </div>
        <div class="explain"><span>{{}}2018</span>年 <span>{{}}10</span>月 <sapn>{{}}99</sapn>日 <span>22：30{{}}</span>满10人开奖</div>
      </div>
      <div class="groupItem">
        <div class="orderNum">
          <div class="left">订单号：<span>{{}}534475800412</span></div>
          <div class="right">
            <span>已发货{{}}</span>
            <img src="../../../../static/img/right.png" alt="">
          </div>
        </div>
        <div class="orderInfo">
          <div class="pic"><img src="" alt=""></div>
          <div class="txt">
            <div class="name">{{}}限量5000份 | 凤梨酥6枚装</div>
            <p class="group_type">{{}}三人团</p>
            <p class="detail">{{}}商品描述详情</p>
          </div>
          <!--<span class="price">{{}}¥5</span>-->

        </div>
        <div class="explain"><span>{{}}2018</span>年 <span>{{}}10</span>月 <sapn>{{}}99</sapn>日 <span>22：30{{}}</span>满20人开奖</div>

      </div>

    </div>

    <div class="getMore" v-if="true">加载更多</div>

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
        navbar_title:'我的抽奖'

      }

    },

    methods:{

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
    .getMore{
      width: 80px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      margin: 50px auto 0;
      font-size: 14px;
      color: #ff7f47;
      border:1px solid #ff7f47;
      box-shadow: 0 0 8px 0 rgba(#ededed,0.4) ;
    }

  }
  .groupList{
    margin-top: 10px;

  }
  .groupList .groupItem{
    /*border:1px solid #000;*/
    width: 375px;
    height:163px ;
    background: #fff;
    margin-bottom: 10px;
    .explain{
      font-family: PingFangSC-Regular;
      font-size:12px ;
      color: #999;
      text-align: right;
      width: 325px;
      line-height: 30px;
      margin: 0 auto;

    }
  }

  .groupList .groupItem .orderNum div{
    display: inline-block;

  }
  .orderNum{
    /*border: 1px solid #000;*/
    width: 325px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    margin: 0 auto;
    position: relative;
    border-bottom: 2px solid #ededed ;

  }
  .orderNum .left{
    width: 225px;
    height: 14px;
  }
  .orderNum .right{
    width: 60px;
    span{
      color: #ff7f4f;
      display:inline-block;
      vertical-align:middle;
    };
    img{
      width: 8px;
      height: 13px;
      display: inline-block;
      position: absolute;
      top:15px;
      right: 0px;
    }

  }
  .orderInfo{
    border-bottom: 2px solid #ededed;
    padding-bottom: 10px;
    position: relative;
    width: 325px;
    margin: 15px auto 0;
    .price{
      position: absolute;
      top:0;
      right: 0;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333;

    };

    .pic{
      display: inline-block;
      /*border: 1px solid #000;*/


      img{
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 5px;
        box-shadow: 0 4px 10px 0 rgba(#cccccc,0.5);
      }


    };
    .txt{
      display: inline-block;
      /*border: 1px solid #000;*/
      margin-left: 15px;
      vertical-align: top;
      font-family: PingFangSC-Regular;

      /*height: 60px;*/

      .name{
        font-size: 14px;
        color:#333;

      };
      .group_type,.detail{
        font-size: 12px;
        color: #999;

      }
    };

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







