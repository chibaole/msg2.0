<template>
  <div class="container skeleton ">

    <div class='praise-title'><span></span>今日福利</div>

    <scroll-view  class="scroll-view_H" scroll-x="true" scroll-left>

      <div  class="scroll-view-item_H  " v-for="boon in boons" :key="boon.uuid"  :data-uuid = "boon.uuid">
        <div class="recomend-box ">
          <div class="recomend-pic  ">
            <img :src="host + boon.title_image_url" alt="">
          </div>
          <div class="recomend-box-inner ">
            <div class="recomend-intitle ">{{boon.title}}</div>
            <div class="recomend-intitle little_title ">{{boon.description}}</div>

          </div>
        </div>
        <div class="recomend-method "  @click="attendBoon" :data-title="boon.title" :data-uuid = "boon.uuid" >{{boon.button.text}}</div>

      </div>
    </scroll-view>
  </div>
</template>
<script>

  import {get, post, showModal} from '@/utils/util'
  import wx from '@/utils/wx'

  import config from'@/config'
  export default {
    data(){
      return{
        boons:[

        ],
        page:1,
        host:config.host,
        showSkeleton:true
      }
    },
    methods: {
      scrolltolower() {
        console.log(7)
      },
      scroll(e) {
        console.log(e)
      },

//      async getBoonsToday() {
//
//        console.log('获取今日福利')
//
//        let boons = await get('/v1/boons/today', {page: this.page})
////       console.log(boons)
//        this.boons = boons
//       console.log(boons)
//
//
//      },
      async attendBoon(e) {
        //跳转到福利详情页
        var that = this
        let uuid = e.currentTarget.dataset.uuid
        let title = e.currentTarget.dataset.title




        wx.navigateTo('/pages/project/main?boons_uuid=' + uuid + "&title=" + title)



      },
    },
    onLoad(){

      const that = this
      setTimeout(()=>{
        that.showSkeleton = false
      },10000)

    },


   async mounted(){
      console.log('scroll加载今日福利数据')
     let boonsData  = await  this.$store.dispatch('getBoonsToday')
     this.boons = boonsData.boons
     console.log(this.boons)

    }

  }
</script>
<style lang="scss" scoped>
  .container{
    /*border: 1px solid #000;*/
  }
.praise-title{
  font-family: PingFangSC-Medium;

  font-size: 16px;
  color: #666;
  width: 75px;
  height: 16px;
  line-height: 16px;
  background: #fff;
  margin: 0px 0px 20px 25px ;
  border: 0.1px solid #fff;
  span{
    width: 3px;
    height: 14px;
    display: inline-block;
    margin-top: 1px;
    margin-right: 8px;
    background: #ff7f4f;
  }

}
  .scroll-view_H{
     /*height: 190rpx; */
    height: auto;
    box-sizing: border-box;
    white-space: nowrap;
    padding: 0 0px 0 25px;
    background: #fff;
    /*padding-bottom: 3px;*/
  }

  .scroll-view-item_H{
    width: 150px;
     /*height: 182px;*/
    margin-right: 15px;
    display: inline-block;
    /*border: 1px solid #000;*/
    height: auto;


  }

  .scroll-view-item_H image{
    height: 180px;
  }

  .recomend-box{
    width: 150px;
     height: 180px;
    background: #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
  }


  .recomend-pic{
    height: 180px;
  }
  .recomend-pic image{
    width: 100%;
    height: 100%;
    border-radius: 5px;


  }

  .recomend-box-inner{
    width: 150px;
    height: 45px;
    color: #fff;
    text-align: left;
    font-family: PingFangSC-Medium;

    position: absolute;
    bottom: 0px;
    /*left: 15px;*/
    z-index: 10;


    background: linear-gradient(to bottom, rgba(0, 0, 0, 0)  ,rgba(0, 0, 0, 0.6));

    border-radius: 0 0 5px 5px ;









  }
  .recomend-intitle{
    width: 120px;
    height: 20px;
    margin-left: 15px;
    margin-bottom: 5px;
    line-height: 20px;
    letter-spacing: 1px;
    white-space:pre-wrap;
    overflow: hidden;
    font-size: 20px;
    padding: 0;

    color: #fff;
    /*border: 1px solid #000;*/




  }
  .little_title{
    font-size: 10px;
    margin-left: 15px;

    height: 10px;
    line-height: 10px;
    /*border: 1px solid #000;*/

    padding: 0;

  }
.recomend-method{
  /*background: #E0502C;*/
  display: inline-block;
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  color: #ff7f4f;
  font-size: 12px;
  border:1px solid #ff7f4f;
  /*position: relative;*/
  /*z-index: 15;*/
  /*border-bottom: 1px solid #ff7f4f ;*/
  /*margin-bottom: 10px ;*/
  /*padding-left: 10px;*/
  /*padding-right: 10px;*/
}
</style>
