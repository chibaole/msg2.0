<template>
  <div class="container">
    <p class="title">没事干研究院更多活动</p>
    <scroll-view  class="scroll-view_H" scroll-x="true" scroll-left>

      <div  class="scroll-view-item_H" v-for="thing in things" :key="thing.title">
        <div class="recomend-box">
          <div class="recomend-pic">
            <img :src="thing.pic" alt="">
            <div class="join"><img src="../../static/img/+.png" alt=""></div>

          </div>
          <div class="recomend-box-inner">
            <div class="recomend-intitle">{{thing.title}}</div>

          </div>

        </div>

      </div>
    </scroll-view>

  </div>
</template>
<script>
  import {get, post, showModal} from '@/utils/util'

  export default {
    data(){
      return{
        things:[

        ]
      }
    },
   async mounted(){
//      this.things  = await this.$store.dispatch('getMore')
     var urlData = {}
     this.things = await  get('/v1/getMore',urlData)


    }
  }
</script>


<style scoped>
  .container{
    font-family: PingFangSC-Medium;
    border:0.1px solid #f7f7f7;
    margin: 35px 0 0;

    padding: 0 0  0 25px;

    background: #F7F7F7;
  }

  .title{
    /*border: 1px solid #000;*/
    margin: 35px 0 30px 8px;

    font-size: 16px;
    height: 16px;
    color: #666;
    line-height: 16px;
    text-align: left;
  }
  .scroll-view_H{
    /* height: 332rpx; */
    box-sizing: border-box;
    white-space: nowrap;
  }

  .scroll-view-item_H{
    width: 265px;
    height: 234px;
    margin-right: 15px;
    display: inline-block;
    background: #fff;
    margin-bottom: 35px;

    /*border-bottom:1px solid #000;*/
  }


  .recomend-box{
    width: 100%;
     height: 150px;
    background: #ccc;

    margin-bottom: 10px;
  }
  .recomend-pic{
    /*height: 88px;*/
    height: 150px;

    position: relative;
  }
  .recomend-pic img{
    width: 265px;
    height: 150px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .join{
    width: 50px;height: 50px;
    background: #ff7f4f;
    border-radius: 50%;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
  }
  .join img{
    width: 26px;
    height: 27px;
    margin: 12px 12.5px;
  }
  .recomend-box-inner{
    width: 233px;
    height: 60px;
    margin: 12px auto;

    color: #444;
    font-size: 14px;
    text-align: left;
    background: #fff;
    /*border: 1px solid #000;*/
  }
  .recomend-intitle{
    width: 100%;
    height: 60px;
    line-height: 30px;
    letter-spacing: 1px;
    white-space:pre-wrap;
    overflow: hidden;
    font-size: 20px;
    color: #000;
    /*padding-left: 8px;*/

    /* text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp:2;
   -webkit-box-orient: vertical;       */
  }




</style>
