<template>
  <div class="container">
    <p class="componten_name">拼团</p>
    <div class="group-tiem" v-for="group in groups" :key="group.uuid">
      <div class="pic"><img  :src="host + group.title_image_url" alt=""></div>
      <div class="info-box">
      <div class="group-info">
          <div class="group-text">{{group.title}}</div>
          <div class="group-prj-price">${{group.current_price}} <span class="price">${{group.original_price}}</span></div>

      </div>
      <div class="join-group" @click="goGroup" :data-groupname="groupname" :data-uuid="group.uuid">{{group.button.text}}</div>
      </div>

    </div>

  </div>
</template>

<script>
  import {get, post, showModal} from '@/utils/util'
  import config from '@/config'

  export default {
    data(){
      return{
        groups:[

        ],
        host:'http://47.98.170.205'
      }
    },
    methods:{
      goGroup(e){
        let  uuid = e.currentTarget.dataset.uuid
          console.log(uuid)
          wx.navigateTo({
             url: '/pages/groupPj/main?group_uuid=' + uuid
          })
      },


      async getGroup(){
        let that = this
        let urlData = {
          page:0,
          size:0
        }

        console.log('/v1/group_activities')
        let group = await get('/v1/group_activities',urlData )
        that.groups = group.group_activities
        console.log(group)
      }
    },


      onLoad(){
        let that = this
//      that.getGroup()


    },
   async mounted(){
////      that.getGroup()
     let groupList =  await this.$store.dispatch('getGroup')

     this.groups = groupList.group_activities

    }
  }
</script>

<style scoped>
  .container{
    font-family: PingFangSC-Medium;
    /*rrder: 1px solid #000;*/
    margin-top: 80px;
    padding:  0 25px;
  }


  .componten_name{
    font-size: 16px;
    color: #666;
    margin-left: 8px;
    margin-bottom: 20px;

  }

  .group-tiem{
    width: 325px;
    height: 231px;
    margin:0 auto;
    /*margin-bottom: 7px;*/
  }

  .group-tiem .pic {
    width: 100%;
    height: 150px;
    overflow: hidden;

  }
  .pic img{
    width: 100%;
    /*height: 150px;*/


  }
.info-box{
  width: 100%;height: 80px;
  /*border: 1px solid blue;*/

}
  .group-info{
    width: 70%;

    display: inline-block;
    /*border: 1px solid yellow;*/
    float: left;
  }
  .join-group{
    /*width: 18%;*/
    text-align: center;
    background:#ff7f4f ;
    /*background: linear-gradient(to top, #ff7f4f  , #e93b56);*/



    border-radius: 14px;
    font-size: 12px;
    width: 62px;
    height: 28px;
    line-height: 28px;

    color: #fff;

    float: right;
    margin-top: 53px;

    /*box-shadow: 0 0 8px #e93b56  ;*/
    /*h-shadow v-shadow blur spread color inset;*/



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
  }

</style>
