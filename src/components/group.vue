<template>

  <div class="container ">

    <p class="componten_name "><span></span>拼团</p>


    <div class="group-tiem " v-for="group_activitie in group_activities"  :key="group_activitie.uuid"  >
      <form  :report-submit="true" @submit="goGroup" :data-uuid="group_activitie.uuid"  :data-activitie = "group_activitie">
        <button formType="submit" >
      <div class="pic " ><img  :src="group_activitie.title_image_url" alt=""></div>
      <div class="info-box ">
        <div class="group-info ">
            <div class="group-text ">{{group_activitie.title}}</div>
            <div class="group-prj-price ">¥{{group_activitie.current_price}} <span class="price ">¥{{group_activitie.original_price}}</span></div>

        </div>
        <div class="join-group " @click="goGroup" :data-groupname="groupname" :data-uuid="group_activitie.uuid">{{group_activitie.button.text}}</div>

        <!--<form class="creatGroup" @submit = 'goGroup'  :report-submit=true :data-uuid="group_activitie.uuid"  :data-activitie = "group_activitie"  >-->
          <!--<button formType="submit" >{{group_activitie.button.text}}</button>-->
        <!--</form>-->
      </div>
        </button>
      </form>

    </div>





  </div>
</template>

<script>
  import {get, post, showModal} from '@/utils/util'
  import config from '@/config'

  export default {
    data () {
      return {
        group_activities: [

        ],
      }
    },
    methods: {
      goGroup (e) {
        console.log(e)
        let group_activities_uuid = e.currentTarget.dataset.uuid
        let Intial = e.currentTarget.dataset.activitie
        let formId = e.mp.detail.formId
        if(Intial.group_activity_initial === null){
          console.log('未参与')
          wx.navigateTo({
            url: '/pages/groupPj/main?group_activities_uuid=' + group_activities_uuid + '&form_id='+formId
          })
        }else if(Intial.group_activity_initial !== null){
          console.log('已参与')
          wx.navigateTo({
            url: `/pages/groupPj/order/main?group_activity_initial_uuid=${Intial.group_activity_initial.uuid}&from_id=${formId}` // 参与拼团的页面
          })
        }
      },

      async getGroup () {
        let that = this
        let urlData = {
          page: 0,
          size: 0
        }

        console.log('/v1/group_activities')
        let group = await get('/v1/group_activities', urlData)
        that.groups = group.group_activities
        console.log(group)
      }
    },

    async onLoad () {
      let group_activities = await this.$store.dispatch('getGroup')
      console.log(group_activities)
      this.group_activities = group_activities.group_activities
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    font-family: PingFangSC-Medium;
    /*border: 1px solid #000;*/
    margin-top: 80px;
    padding:  0 25px;
  }


  .componten_name{
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    color: #666;

    margin-bottom: 20px;
    font-family: PingFangSC-Medium;
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

  .group-tiem{
    width: 325px;
    height: 231px;
    margin:0 auto 60px;
    /*border: 1px solid #000;*/
    padding: 0;
    border-radius:0;


  }
  .group-tiem:last-child{
    margin-bottom: 30px;
  }

  .group-tiem .pic {
    width: 325px;
    height: 150px;
    overflow: hidden;
    /*border: 1px solid blue;*/
    border-radius:0;



  }
  .pic img{
    width: 100%;
    border-radius:0;

    /*height: 150px;*/


  }
.info-box{
  width: 100%;height: 80px;
  /*border: 1px solid blue;*/

}
  .group-info{
    width: 70%;
    text-align: left;
    display: inline-block;
    /*border: 1px solid yellow;*/
    float: left;
  }
  .join-group{
    /*width: 18%;*/
    text-align: center;
    /*background: linear-gradient(to top, #ff7f4f  , #e93b56);*/
    border-radius: 14px;
    font-size: 12px;
    width: 62px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    float: right;
    margin-top: 53px;
    background:rgb(255,127,79) ;
    box-shadow: 0 0 8px 0 rgba(255,127,79,0.4);

  }




  .group-text{
    height: 20px;
    line-height: 20px;
        font-size: 20px;
        color: #333;
    margin-top: 20px;
    /*border: 1px solid #000;*/
  }
  .group-prj-price{
    color: #f83713;
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    font-weight: 300;
    margin-top: 19px;
    /*border: 1px solid #000;*/
  }
  .price{
    height: 10px;
    line-height: 10px;
    font-size: 10px;
    color: #999;
    text-decoration: line-through;
    margin-top: 25px;
    /*border: 1px solid #000;*/

  }


  form{
    border:none;
    display: block;
    padding: 0;
    margin: 0;
    border-radius:0;

    button {
      display: block;
      background: none;
      /*margin: 0 auto;*/
      border:none;
      padding: 0;
      margin: 0;
    };
    button::after{
      border-radius:0;
      border:none;

    }
  }


  button::after{
    border-radius:0;

    border: none;
    padding: 0;
    margin: 0;
  }

</style>
