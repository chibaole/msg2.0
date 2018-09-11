<template>
  <div class="container">
    <div class="mark" @click="closeChild" ></div>
    <div class="prize-info">
        <p class="text">账号为研究员账号的用户抽奖概率是普通用户的2倍。</p>
        <p class="text">成为一名合格的没事干研究员，需要你爱吃爱研究并乐于分享，因此我们会有一个小小的测验来筛选优质成员。</p>
        <p class="text">加吃货群了解情况吧。</p>

        <!--<button @click="cancleDiago" >去回复"1"，和吃货一起玩-->
      <button @click="cancleDiago" open-type="contact" >去回复"1"，和吃货一起玩</button>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          showChild:'true'
      }
    },
    methods: {
      cancleDiago () {
        var open = false
        this.$emit('info', open)
      },
      closeChild(){
        this.$emit('childByValue', false)

      }
    }

  }
</script>

<style scoped>
  .container{
    font-size: 14px;
    font-family: "PingFang SC";
    font-weight: Regular;
    text-align: center;
  }
    .mark{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index:100;

    }

  .prize-info{
    width: 325px;
    height: 400px;
    border-radius: 5px;
    /*border: 1px solid #000;*/
    position: fixed;
    top:154px;
    left: 25px;

    z-index: 102;
    background: #fff;
  }
  .text:nth-child(1){
    margin-top: 70px;
  }
  .text{
    width: 245px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    text-align: left;
    color:#4a4a4a;
    /*border:1px solid #000;*/
    /*margin-top: 20px;*/
    margin:0 auto 20px;
  }
  button{
    width: 240px;
    height: 44px;
    line-height: 44px;
    margin: 50px auto 36px;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    color:#fff;
    background:rgb(255,127,79);
    box-shadow: 0 0 8px 0 rgba(255,127,79,0.4) ;
    border-radius: 5px;


  }
</style>
