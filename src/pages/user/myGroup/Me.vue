<template>
  <div class="container" >
    <Navbar :navbar_title="navbar_title"></Navbar>
    <div class="groupList"  v-for="item in  myGroup_list" :key="item.uuid">
      <div class="groupItem" @click="goDetail" :data-uuid='item.uuid'>
          <div class="orderNum">
            <div class="left">订单号：<span>{{item.uuid}}</span></div>
            <div class="right"  >
              <span>{{item.united_status_display}}</span>
              <img src="http://pbmrxkahq.bkt.clouddn.com/more_right.png" alt="">
            </div>
          </div>
          <div class="orderInfo">
            <div class="pic">
              <!--<img :src="item.group_activity.title_image_url" alt="">-->
              <div class="bg" :style="{width:'100%', height:'100%', backgroundImage:'url('+ item.group_activity.title_image_url +')',backgroundSize:'cover', backgroundPosition:'50%'}"></div>

            </div>
            <div class="txt">
              <div class="name">{{item.group_activity.title}}</div>
              <p class="group_type">{{item.group_activity.group_type}}</p>
              <!--<p class="detail">{{item.group_activity.description}}</p>-->
            </div>
            <span class="price">¥{{item.group_activity.current_price}}</span>
          </div>
      </div>
    </div>
    <div class="service">
      <!--<contact-button size="22" class='pos' session-from="{'nickName':userinfo.nick_name,'avatarUrl':userinfo.avatar_url}"  open-type="contact" ></contact-button>-->
      <button type='default'  size="22" class='pos' session-from="{ 'nickName':'刘攀','avatarUrl':'http://image.shengxinjing.cn/rate/unlogin.png' }" open-type="contact" ></button>
      <!--:style="{'padding-top':top + 'px'}"-->
      <img class="icon_kf" src="http://pbmrxkahq.bkt.clouddn.com/msgservice.png">
    </div>
    <!--<button type='default' session-from='{"nickName":"{{userInfo.nickName}}","avatarUrl":"{{userInfo.avatarUrl}}"}' open-type="contact" >带头像客服（微信头像）</button>-->
      <div class="getMore" v-if="showGetMore" @click="addList">{{moreTips}}</div>
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
      navbar_title: '我的拼团订单',
      myGroup_list: [],
      all_list: [],
      page: 1,
      size: 4,
      showGetMore: true,
      userinfo: {
        avatar_url: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nick_name: '没事干研究院',
        level_display: '',
        is_authorized: true
      },
      moreTips:'加载更多'
    }
  },

  methods: {
   async addList () {
      let that = this
      that.page  = that.page + 1
     const init_size = that.size

     const auth_code = wx.getStorageSync('auth_code')
     const data = [that.page, init_size, auth_code]
      let  addData =   await that.$store.dispatch('myGroupList', {...data})
     let lastSize = addData.group_activity_orders.length

     if(lastSize < init_size){
        console.log(lastSize,init_size)
          that.moreTips = '已无更多订单'
     }

     that.myGroup_list = that.myGroup_list.concat(addData.group_activity_orders)
     console.log( that.myGroup_list )

    },
    goDetail (e) {
      const this_uuid = e.currentTarget.dataset.uuid
      wx.navigateTo({
        url: `/pages/user/myGroup/myGroupDetail/main?uuid=${this_uuid}`
      })
    }

  },
  async onLoad () {
    const that = this
    const init_size = that.size


    console.log('that.size that.page'+init_size,that.page)
    console.log(that.moreTips)
    console.log(that.myGroup_list)
    if(that.moreTips === '已无更多订单'){
      that.myGroup_list = that.myGroup_list
    }else {
      const auth_code = wx.getStorageSync('auth_code')
      const data = [that.page, init_size, auth_code]
      const groupList = await that.$store.dispatch('myGroupList', {...data})

      that.all_list = groupList.group_activity_orders //初始数据列表

      that.myGroup_list = that.all_list

      let lastSize = groupList.group_activity_orders.length

      if(lastSize < init_size){
        console.log(lastSize,init_size) // 0 4
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
  padding-bottom: 170px;
  /*min-height: 667px;*/
  .getMore{
    max-width: 108px;
    /*display: inline-block;*/
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
  height:130px ;
  background: #fff;
  margin-bottom: 10px;
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
    span{
      color: #ff7f4f;
      display:inline-block;
      vertical-align:middle;
      margin-right: 22px;
      /*border: 1px solid #000;*/
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
    /*border: 1px solid #000;*/
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

      .name{
        font-size: 14px;
        color:#333;

      };
      .group_type,.detail{
        font-size: 12px;
        color: #999;

      }
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







