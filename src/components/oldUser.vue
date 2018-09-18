<template>
  <div class="container">
    <div class="mark" @click="closeChild" ></div>
    <div class="oldUser">
        <div class="title">新手福利团</div>
        <div class="p">你是老用户了，把机会留给新朋友吧～</div>
      <button @click="creatGroup"   >走，自己开个团</button>

    </div>
  </div>
</template>

<script>
  export default {
    props:['group_activities_uuid'],
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
        this.$emit('oldUserValue', false)
      },
      creatGroup(){


        let that = this
      console.log(that.group_activities_uuid)
        wx.navigateTo({
          url: '/pages/groupPj/main?group_activities_uuid=' + that.group_activities_uuid
        })

      }
    }

  }
</script>

<style scoped lang="scss">
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
  .oldUser{
    height: 264px;
    width: 325px;
    border-radius: 5px;
    background: #fff;
    position: fixed;
    top:154px;
    left: 25px;
    z-index: 200;

    text-align: center;
    animation:olduser 0.8s;

    .title{
      font-family: PingFangSC-Medium;
      font-size: 18px;
      margin-top:55px;
    }
    .p{
      margin-top: 25px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
    }
  ;
    button{
      width: 240px;
      height: 44px;
      line-height: 44px;
      margin: 60px auto 36px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      color:#fff;
      background:rgb(255,127,79);
      box-shadow: 0 0 8px 0 rgba(255,127,79,0.4) ;
      border-radius: 5px;


    }
  }


  @keyframes olduser
  {
    0%   {background:#FFFFFF; left:25px; top:0px;}
    /*25%  {background:#FFFFFF; left:25px; top:30px;}*/
    /*50%  {background:#FFFFFF; left:25px; top:60px;}*/
    /*75%  {background:#FFFFFF; left:25px; top:90px;}*/
    100% {background:#FFFFFF; left:25px; top:154px;}
  }

</style>
