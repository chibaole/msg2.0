<template>
  <div class="container" >
    <Navbar :navbar_title="navbar_title"></Navbar>
    <div class="groupList"  v-for="item in boonList" :key="item.uuid">
      <div class="groupItem"    :data-uuid="item.uuid" :data-status="item.status" @click="goBoonDetail">
        <div class="orderNum">
          <div class="left">订单号：<span>{{item.uuid}}</span></div>
          <div class="right">
            <span>{{item.united_state_display}}</span>
            <img src="http://pbmrxkahq.bkt.clouddn.com/more_right.png" alt="">
          </div>
        </div>
        <div class="orderInfo">
          <div class="pic">
            <!--<img :src="item.boon.title_image_url" alt="">-->
            <div class="bg" :style="{width:'100%', height:'100%', backgroundImage:'url('+item.boon.title_image_url+')',backgroundSize:'cover', backgroundPosition:'50%'}"></div>

          </div>
          <div class="txt">
            <div class="name">{{item.boon.title}}</div>
            <p class="group_type">{{}}</p>
            <p class="detail">{{item.boon.description}}</p>
          </div>
        </div>
        <div class="explain"><span>{{item.boon.lottery_detail}}</span></div>
      </div>
    </div>
    <div class="getMore"  @click="addList">{{moreTips}}</div>
    <div class="service">
      <contact-button size="22" class='pos' ></contact-button>
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
        navbar_title: '我的抽奖',
        boonList: [],
        userinfo:{},
        moreTips:'加载更多',
        page:1,
        size:4

      }
    },

    methods: {
      goBoonDetail (e) {
        console.log(e)
        const uuid = e.currentTarget.dataset.uuid
        const status = e.currentTarget.dataset.status
        if (status === 'init') {
          wx.showToast({
            title: '莫急～还未开奖',
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.navigateTo({
            url: '/pages/user/myboonList/myBoon/main?uuid=' + uuid
          })
        }
      },
      async addList () {
        let that = this
        that.page  = that.page + 1
        const init_size = that.size

        const auth_code = wx.getStorageSync('auth_code')
        const data = [that.page, init_size, auth_code]
        let  addData =    await that.$store.dispatch('myBoonList', {...data})
        console.log(addData.boon_orders.length)
        let lastSize = addData.boon_orders.length
        if(lastSize < init_size){
          console.log(lastSize,init_size)
          that.moreTips = '已无更多订单'
        }

        that.boonList = that.boonList.concat(addData.boon_orders)

      },


    },
    async onLoad () {
      const that = this

      if(that.moreTips === '已无更多订单'){
        that.boonList = that.boonList
      }else {
        const auth_code = wx.getStorageSync('auth_code')
        let init_size = that.size
        let data = [that.page, init_size, auth_code]
        const boonList = await that.$store.dispatch('myBoonList', {...data})
        that.boonList = boonList.boon_orders

        let lastSize = boonList.boon_orders.length
        if(lastSize < init_size){
          console.log(lastSize,init_size)
          that.moreTips = '已无更多订单'
        }
      }



      let userinfo = wx.getStorageSync('userinfo')
      that.userinfo = userinfo

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
    padding-bottom: 170px;
    .getMore{
      width: 108px;
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
    border-bottom: 1px solid #eee ;

  }
  .orderNum .left{
    width: 225px;
    height: 14px;
  }
  .orderNum .right{
    min-width: 60px;
    /*border:1px solid #000;*/
    span{
      font-size: 14px;

      color: #ff7f4f;
      display:inline-block;
      /*vertical-align:middle;*/
      margin-right: 10px;
    };
    img{
      width: 8px;
      height: 13px;
      display: inline-block;
      position: absolute;
      top:13.5px;
      right: 0px;
    }

  }
  .orderInfo{
    border-bottom: 1px solid #eee;
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
      width: 60px;
      height: 60px;
      border-radius: 5px;
      box-shadow: 0 4px 10px 0 rgba(#cccccc,0.5);

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







