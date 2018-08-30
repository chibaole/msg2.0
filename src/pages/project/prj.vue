<template>
  <div class="container">
    <!--<p>项目详情页</p>-->
    <Navbar :navbar_title="navbar_title"></Navbar>


    <div class="pic-info">
    <div class="pic"><img :src=" host + boon.title_image_url" alt=""></div>

    <div class="prj-info">
      <p class="prj-name">{{boon.description}}</p>
      <p class="prj-little-info">{{boon.lottery_conditions}} <span class="hasJoined">已有<span style="color: #ff7f4f">{{boon.num_of_participants}}</span>人参与</span></p>
    </div>
    </div>
    <!-- 福利简要信息    -->


    <div class="sponsors">
      <p class="sponsors-info" >{{boon.sponsor.description}}</p>
      <navigator class="switchGoAnchor" target="miniProgram" open-type="navigate" :app-id="boon.sponsor.app_id" :path="boon.sponsor.app_path" extra-data="" version="release">
        <img class="logo" :src="host+boon.sponsor.avatar_url" alt="">{{boon.sponsor.name}}<img class="right_ico" src="../../../static/img/right.png" alt="">
      </navigator>

    </div>

    <!--赞助上小程序   -->



    <div class="process-prize" v-if=" boon.status === 'published'">
      <h2>抽奖流程</h2>
      <div class="steps">
      <p class="step1">1.点击抽奖，等待开奖</p>
      <p class="step2">2.领取成功后，请扫码加群等待发货哦</p>
      </div>
      <div class="line"></div>
      <h2>赞助商介绍</h2>
      <div class="steps">
      <p class="step1">1.点击抽奖，等待开奖</p>
      <p class="step2">2.领取成功后，请扫码加群等待发货哦</p>
      </div>
    </div>

    <!--抽奖流程-->


    <div class="btn1" v-if="boon.status== 'published'" >

      <button  v-if="boon.participate_status == false" class="waiting">待开奖</button>

      <button @click="attendBoon" v-if="boon.participate_status == true" :class="prizeStyle">{{prize}}</button>

    </div>


    <!--抽奖未开奖显示的 '抽奖/待开奖按钮'-->

    <div class="openPrize" v-if="boon.status== 'rewarded'">
    <!--<div class="openPrize" v-if="true">-->


    <div class="pic">
        <img src="http://pbmrxkahq.bkt.clouddn.com/winning.png" alt="" v-if="boon.boon_order.status != 'lose'">
        <img src="http://pbmrxkahq.bkt.clouddn.com/%E6%9C%AA%E4%B8%AD%E5%A5%96.png" alt="" v-if="boon.boon_order.status === 'lose'">

        <p class="boon_order_text" v-if="boon.boon_order.status != 'lose' ">恭喜，您中奖了</p>
        <p class="boon_order_text"v-if="boon.boon_order.status === 'lose'">好气哦，没有中奖～</p>

    </div>

      <div class="prizeWindow" v-if="boon.boon_order.status === 'win'" @click="chooseAddress">去领奖</div>
      <div class="prizeWindow" v-if="boon.boon_order.status === 'received'" @click="chooseAddress">已领奖</div>

      <!--<div class="prizeWindow">去领奖了</div>-->

      <div class="nameList">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="title">中奖者名单</div>
      </div>
      <div class="userBox" >
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

    <!--已开奖现实的获奖信息-->


    <div class="btn-box" v-if="boon.status== 'published'">

      <Diago v-if="open" @info="get"></Diago>
      <!--发起客服功能-->
      <div class="add-prize">
        <div class="btn2" @click="shareMenu">加速开奖</div>


        <div class="btn3" @click="openDiago"  >成为研究员概率翻倍</div>
      </div>
      <div class="mask" v-if="showBox">  <!-- 遮罩-->

          <div  class="meunBox"  v-if="showBox">
            <img class="x" src="../../../static/img/close2.png" alt="" @click="shareMenu">

            <div class="title">分享加速抽奖</div>

            <button class="friend" open-type="share">
              <img src="../../../static/img/wechatF.png" alt="">
            </button>

            <div class="createImg" @click="getImg">
              <img src="../../../static/img/wechatimg.png" alt="">
            </div>
            <div class="wechatFriend" open-type="share">微信好友</div>
            <div class="shengchengImg" @click="getImg">生成分享图片</div>

          </div>  <!--框 弹出的选择-->


      </div>

    </div>
    <div class="btn-box" v-if="boon.status== 'rewarded'">
      <div class="add-prize">
        <div class="btn4"  @click="againPrice">再去抽一个</div>


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
    data(){
      return{
        prize:'抽奖',
        open:false,
        uuid:'',
        prjInfo:{
          name:'',
          id:''
        },
        boon:{},
        title:'',
        sesson_url:'http://pbmrxkahq.bkt.clouddn.com/anodor.png',
        showBox:false,
        navbar_title:'',
        host:config.host,
        haveOpen:'未开奖',
        prizeStyle:'prize',
        init_rewarded_users:[],
        showGetMoreBtn:false
      }
    },
    components:{
      Diago,
      Navbar
    },

    methods:{
      //参加福利 即抽奖操作
     async attendBoon(){

        var that = this


       let currentuser_code = wx.getStorageSync('auth_code')

//        let attendBoon_data = await post(`/v1/boons/${that.uuid}/attend?auth_code=${currentuser_code}`)
//
//        console.log(attendBoon_data)

       let boonID = that.boon.uuid
       let auth_code = currentuser_code
       let uuid_authCode = [boonID,auth_code]

       let res = await  that.$store.dispatch('attendBoon',{...uuid_authCode})
       console.log(res)
         that.prize = '待开奖'
       that.prizeStyle = 'waiting'



      },
      openDiago(){
       var  that = this
        that.open= true
      },
//url: /api/v1/boons/:uuid/attend

      async getBoons(){
        var auth_code = wx.getStorageSync('auth_code')
        let prjInfo = await get(`/v1/boons/${this.uuid}?auth_code=${auth_code }`)
        console.log(prjInfo)

        this.boon = prjInfo //福利详情
      },
      shareMenu(){
        console.log(this.showBox)
          this.showBox = !this.showBox

      },
      getImg(){
        let that = this
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
                url: 'http://oxl5leo53.bkt.clouddn.com/u=1204211051,3834529407&fm=11&gp=0.jpg',                  //变化图片
                top: 0,
                left: 0,
                width: 375,
                height: 173
              },
              //            绘制的背景图


//http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg
              // 文本表达
              {
                type: 'text',
                content: that.boon.description,                                                             //变量的名称
                fontSize: 27.6,
                lineHeight: 27.6,
                color: '#454553',
                textAlign: 'left',
                top: 217.35,
                left:64.4,
                width: 244.95,
                MaxLineNumber: 2,                                                                         //最大两行 超出...
                breakWord: true,  //换行
                bolder: true  //加粗
              },


              {
                type: 'text',
                content: '500人自动开奖',                                                                                //变量的价格
                fontSize: 18.4,
                color: '#4a4a4a',
                textAlign: 'left',
                top: 256.45,
                left: 124.2

              },
              {
                type: 'text',
                content: '已有',
                fontSize: 18.4,
                color: '#4a4a4a',
                textAlign: 'left',
                top: 361.1,
                left:124.2,                                                                      //根据价格字符个数 变化

              },
              {
                type: 'text',
                content: '443',                                                                       //根据参与实际人数 变化
                fontSize: 18.4,
                color: '#ff7f4f',
                textAlign: 'left',
                top: 361.1,
                left: 161                                                                      //
              },

              {
                type: 'text',
                content: '人参与',
                fontSize: 18.4,
                color: '#4a4a4a',
                textAlign: 'left',
                top: 361.1,
                left: 195.5,
                lineHeight: 18.4,
                MaxLineNumber: 2,
                breakWord: true
              },
              {
                type: 'image',
                url: 'http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg',
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
        wx.setStorageSync('painting' , painting)
        wx.navigateTo({url:'/pages/test/main'})
      },
      againPrice(){
        wx.switchTab({
          url:'/pages/home/main'
        })

      },
     async chooseAddress(){
        console.log('领奖')
       let that = this
       let data = [ ]
       let uuid = that.boon.boon_order.uuid
       let boon_status = that.boon.boon_order.status
       console.log(boon_status)
       if(boon_status ==='received'){
         let res = await chooseAddress()

         let auth_code = wx.getStorageSync('auth_code')
         let address =   {
           name:res.name,            //名字
           postal_code:res.postalCode,// 邮编
           tel_phone:res.telNumber,// 电话
           province:res.provinceName,// 省
           city:res.cityName,// 市
           district:res.countyName,// 区
           detail:res.detailInfo// 详细

         }

         data = [uuid,auth_code,address]
         let address_res =  await  that.$store.dispatch('boonAddress',{...data})



         wx.navigateTo({
           url:`/pages/user/myboonList/myBoon/main?uuid=${uuid}`
         })
       }else {
         let res = await chooseAddress()

         let auth_code = wx.getStorageSync('auth_code')
         let address =   {
           name:res.name,            //名字
           postal_code:res.postalCode,// 邮编
           tel_phone:res.telNumber,// 电话
           province:res.provinceName,// 省
           city:res.cityName,// 市
           district:res.countyName,// 区
           detail:res.detailInfo// 详细

         }

         data = [uuid,auth_code,address]
         let address_res =  await  that.$store.dispatch('boonAddress',{...data})
         wx.navigateTo({
           url:`/pages/user/myboonList/myBoon/main?uuid=${uuid}`
         })
       }


     },

      getMoreUser(){
        let that = this
        console.log('加载更多中奖用户')
        that.init_rewarded_users =  that.boon.rewarded_users
        that.showGetmore = false
      }


    },
   async onLoad(){
      let that = this
      that.uuid =  that.$root.$mp.query.uuid //获取上一页传递的唯一标准uuid
      that.navbar_title =  that.$root.$mp.query.title //获取上一页传递的福利名称 做navbar的标题
     let currentuser_code = wx.getStorageSync('auth_code')
     let uuid_authCode = [that.uuid,currentuser_code]
      //根据获得uuid 查询数据出来

//      that.getBoons()
      let boonData = await that.$store.dispatch('getBoons',{...uuid_authCode})
     that.boon = boonData.boon


     let init_rewarded_users = boonData.boon.rewarded_users

     if(init_rewarded_users.length > 12){
        that.showGetMoreBtn = true
       init_rewarded_users = boonData.boon.rewarded_users.splice(0,12)
       that.init_rewarded_users = init_rewarded_users

     }else{
       let init_rewarded_users = boonData.boon.rewarded_users
       that.init_rewarded_users = init_rewarded_users
     }
//     that.init_rewarded_users = boonData.boon.rewarded_users

//     await this.$store.dispatch('createBill', { ...this.userInfo, ...this.billInfo })

   },
    mounted () {


    },

    onShareAppMessage(res){
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题',
        path: '/page/user?id=123'
      }
    }





  }
</script>

<style lang="scss" scoped>
  .container{
    /*border: 1px solid #000;*/
    font-family: PingFangSC-Medium;
    background: #f7f7f7;
  }

  .pic-info{
    background: #fff;
    padding: 0 0 15px 0;
    border: .1px solid #fff;

  }
      .pic{
        width: 325px;
        height: 150px;
        margin: 20px auto 15px;
        overflow: hidden;
      }
  .pic img{
    width: 100%;
  }


  .prj-info{
    text-align: left;
    width: 325px;
    /*border: 1px solid #ccc;*/
    margin: 0 auto;
  }
  .prj-info .prj-name{
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
    height: 20px;
    line-height: 20px;

  }
  .prj-little-info{
    height: 17px;
    line-height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    letter-spacing: -0.3px;
    color: #4a4a4a;
    /*margin-bottom: 15px;*/
  }
  .hasJoined{
    display: inline-block;
    float: right;
    height: 17px;
    line-height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    letter-spacing: -0.3px;
    color: #4a4a4a;
  }
.line{
  width: 325px;
  height: 2px;
  background: #ededed;
  /*box-shadow: 0px 2px 4px #000 ;*/

  /*margin: 0 25px;*/
  margin-bottom: 13px;

}

  .sponsors{
    width: 375px;
    height: 94px;
    color: #4a4a4a;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    /*border:1px solid #ccc;*/
    margin-top: 10px;
    /*padding: 0 25px;*/

    /*background: #fff;*/
  }

  .sponsors-info{
    height: 42px;
    line-height: 42px;
    background: #fff;
    padding-left: 25px;
    margin-bottom: 2px;
  }
  .sponsors .switchGoAnchor{
    width: 375px;height: 50px;
    line-height: 50px;
    background: #fff;
    padding-left: 25px;
    /*border: 1px solid #ccc;*/
    /*margin: 10px auto 0;*/
    position: relative;
  }
  .sponsors .switchGoAnchor img:nth-child(1){
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
    /*border:1px solid #000;*/

  }

  .sponsors .switchGoAnchor .right_ico{
    /*border: 1px solid #000;*/
    width: 15px;
    height: 15px;
    position: absolute;
    right:28px ;
    top:17.5px;
    margin-right: 28px;
    vertical-align: middle;
  }

  .process-prize {
    width: 375px;
    margin: 16px auto 0;
    background: #fff;
    padding: 15px 25px;
    /*border:1px solid #000;*/
  }
  .process-prize h2{
    font-size: 16px;
    /*width: 64px;*/
    height: 22px;
    line-height: 22px;
    color: #454553;
    /*border: 1px solid #000;*/
    margin-bottom: 10px;
  }

  .steps{
    height: 34px;
    line-height: 15px;
    margin-bottom: 20px;
  }
  .process-prize .step1,.step2{
        font-size: 12px;
        font-family: PingFangSC-Regular;
      }
  .step2{
        /*margin-bottom:30px ;*/
      }

      .btn-box {
        /*border-top:1px solid #000;*/


        /*padding-top: 92px;*/
        /*margin-top: 92px;*/


        background: #fff;
      }
  .btn1{
    padding-top: 90px;
    padding-bottom: 41px;
    margin-bottom: 61px;
    background: #fff;
  }

  .btn1 .waiting{
    width: 100px;height: 100px;
    line-height: 100px;

    /*background: #ff7f4f;*/
    /*opacity: 0.7;*/
    background: rgba(#ff7f4f,0.4);

    margin: 0 auto;
    font-size: 16px;
    color: #fff;

    border-radius: 50%;
  }
   .btn1 .prize{
    width: 100px;height: 100px;
    line-height: 100px;

    background: rgba(#ff7f4f,0.7);
    margin: 0 auto;
    font-size: 16px;
    color: #fff;

    border-radius: 50%;
  }

   .btn-box{
     /*border: 1px solid red;*/
     position: fixed;
     bottom: 0;
     background: #fff;
     width: 375px;
     height: 60px;

   }
  .add-prize{
    width: 375px;
    height: 60px;
    font-size: 16px;
    box-shadow: 0 -2px 8px  0 rgba(#ededed,0.5);
    display: -moz-box;
    display: -webkit-box;
    text-align: center;

    .btn4{
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

  .add-prize .btn2 ,.btn3{
    display: inline-block;
    height: 44px;
    line-height: 44px;

    /*box-sizing: content-box; 外边框*/
    /*内边框*/
    box-sizing: border-box;
    margin-top: 8px;



  }
  .btn2{
    /*margin-right: 2px;*/
    width: 141px;

    border: 1px solid #ff7f4f;
    color: #ff7f4f;
    margin-left: 8px;


  }
      .btn3{
        border: 1px solid #ff7f4f;

        background: #ff7f4f;
        width: 214px;
        color: #fff;
        margin-right: 8px;
      }

  .mask{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-end;
    align-items:  flex-end;
    flex-direction: column;
  }
  .meunBox{
    width: 375px;
    height: 280px;
    background: #fff;
    position: relative;
    z-index: 1000;
    /*border: 1px solid #ff7f4f;*/

  }

  .meunBox .title{
    width: 102px;
    height: 24px;
    font-size: 17px;
    line-height: 24px;
    color: #333;
    position: absolute;
    top:56px;
    left: 137px;

  }

  .meunBox .friend ,.createImg{
    display: inline-block;



    width:60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #ededed;
    box-sizing: border-box;



  }

  .meunBox p{
    height: 20px;
    font-size: 14px;
    color: #666;

  }

  button::after{
    border:none;
  }
  .createImg img{

    width: 24px;
    height: 24px;
    margin: 17px;
    /*border: 1px solid #000;*/

  }

  .friend{
    position: relative;
  }

  .friend  img {
    width: 24px;
    height: 24px;
   position: absolute;
    top:17px;
    left: 17px;

  }
  .meunBox .friend{
    display: inline-block;
    position: absolute;
    top:128px;
    left: 80px;
    /*border: 1px solid #000;*/
  }
  .meunBox .createImg{
    position: absolute;
    top:128px;
    right: 80px;
  }
.wechatFriend{
  /*background: none;*/
  /*border: 1px solid #000;*/
  display: inline-block;
  position: absolute;
  top:206px;
  left: 82px;
  font-size: 14px;
  color: #666;
}

  .shengchengImg{
    position: absolute;
    top:206px;
    right: 68px;
    font-size: 14px;
    color: #666;
  }

  .x{
    /*border: 1px solid #000;*/
    width: 15px;
    height: 15px;
    position: absolute;
    top:15px;
    right: 15px;

  }
/*开奖区域*/
  .openPrize{
    min-height: 457px;
    width: 375px;
    background: #fff;
    /*border:1px solid red;*/

    .pic {
      /*width: 80px ;*/
      /*height: 80px;*/
      margin: 0 auto;
      /*border: 1px solid #000;*/
      height: 118px;

      img{
        width: 80px;
        height: 80px;
        margin-left: 123px;
      };
      p{

        height: 16px;
        line-height: 16px;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color:#666;
        text-align: center;
        margin-top: 14px;
        /*border: 1px solid #000;*/
      }

    };
  .prizeWindow{
    width: 180px;
    height: 40px;
    background: #fc574b;
    box-shadow: 0 0 8px 0 rgba(#ff7f4f,0.4);
    line-height: 40px;
    text-align:center;
    color: #fff;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    margin: 20px auto 0;
  };
    .nameList{
      position: relative;
      /*border: 1px solid red;*/
      .title{
        width: 70px;height: 14px;
        margin: 45px  auto 0;
        line-height: 14px;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color:#666;

      };
      .line1 , .line2{
        width: 60px;
        height: 2px;
        position: absolute;
        top:6px;
        background: #ededed;

      };
      .line1{
        position: absolute;

        left: 83px;
      };

      .line2{
        position: absolute;

        right: 83px;
      }
    };
    .userBox{
        width: 280px;
      margin: 10px auto 20px;
      position: relative;
        /*border:1px solid #000;*/
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: flex-start;

      .user{
        display: inline-block;
        /*border:1px solid red;*/
        width:16.6666%;height:50px;
        margin-bottom:15px ;

        img{
          width: 34px;height: 34px;
          margin-left: 6.25px;
          border-radius: 50%;

        };
        .nickname{
          width: 30px;
          height: 10px;
          margin: 0 auto;
          font-family:PingFangSC-Regular ;
          font-size: 10px;
          color: #999;
          line-height: 10px;
          text-align: center;
          overflow: hidden;
        }


      };
      .getall{
        width: 65px;
        height: 14px;
        line-height: 14px;
        margin: 20px auto 0px;
        position: absolute;
        bottom: 0;
        left:113px ;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: #999;

        vertical-align: middle;
        span{

          vertical-align: middle;
          /*border: 1px solid #000;*/


        }
        img{
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
