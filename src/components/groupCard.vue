<template>
  <div class="container">
    <div class="wrap">
       <div class="pj-info">
      <div class="left">
        <img :src="order_info.group_activity.title_image_url" alt="">
      </div>
      <div class="right">


        <h2><div class="mark">{{order_info.group_activity.group_type}}</div>{{order_info.group_activity.title}}</h2>
        <p><span>¥&nbsp;{{order_info.group_activity.current_price}}</span><span>¥{{order_info.group_activity.original_price}}</span></p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['order_info'],
    data () {
      return {

      }
    },
    methods: {

    },
    mounted () {
      console.log(this.order_info)
    }

  }
</script>
<style scoped>
  .container{
    font-family: PingFangSC-Medium;

  }
.wrap{
  height: 125px;
  background: #fff;
  border: 0.5px solid #fff;

}
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

  }
  .right h2 .mark{
    width: 50px;height: 20px;
    line-height: 20px;
    text-align: center;
    font-family:PingFangSC-Regular ;
    font-size: 11px;
    color:#ff7f4f;
    border:1px solid #ff7f4f;
    display: inline-block;
    margin-right: 10px;
    /*transform:rotate(-42deg);*/

    /*position: absolute;*/
    /*top:0px;*/
    /*left: 0px;*/
  }

  .right h2{
    display: inline-block;
    font-size: 20px;
   font-family:  PingFangSC-Medium;
    color:#333;
    /*margin-left: 60px;*/

  }
  .right p{
    /*border: 1px solid #000;*/
    margin-top: 13px;
  }

  .right  p span{
    display: inline-block;
    margin-left: 5px;
  }

  .right  p span:nth-child(1){
    font-size: 18px; color: #f83713;
    font-family: PingFangSC-Medium;
  }
  /*.right p span:nth-child(2){*/
    /*font-size: 12px; color: #D0021B;*/
    /*font-weight: Regular;*/

  /*}*/
  .right p span:nth-child(2){
    font-family: PingFangSC-Regular;
    font-size: 10px; color: #999;
    text-decoration: line-through;
  }




</style>
