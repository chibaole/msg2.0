<template>
  <div class="container">
    <div class="mark"  ></div>
    <div class="prize-info">
        <p class="text">账号为研究员账号的用户抽奖概率是普通用户的2倍。</p>
        <p class="text">账号为研究员账号的用户抽奖概率是普通用户的2倍。</p>
        <p class="text">账号为研究员账号的用户抽奖概率是普通用户的2倍。</p>

        <!--<button @click="cancleDiago" >去回复"1"，和吃货一起玩-->
      <button @click="cancleDiago" open-type="contact" >去回复"1"，和吃货一起玩</button>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      cancleDiago () {
        var open = false
        this.$emit('info', open)
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
    width: 330px;
    height: 277px;
    /*border: 1px solid #000;*/
    position: fixed;
    top:205px;
    left: 22.5px;

    z-index: 102;
    background: #fff;
    padding-top: 30px;
  }
  .text{
    width: 282px;
    margin: 10px auto;
    text-align: left;
    /*margin-top: 20px;*/
  }
  button{
    width: 210px;
    height: 34px;
    margin: 10px auto;
    font-size: 14px;
    font-family: "PingFang SC";
    font-weight: Regular;
  }
</style>
