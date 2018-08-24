import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const apiDomain = 'http://localhost:5757/v1'
const apiDomain = 'http://47.98.170.205/api/v1'
import {get, post, showModal} from '@/utils/util'


import {request,  login, } from "./utils/wx";


export default new Vuex.Store({
  actions: {
    //仅注册用户 传递code  换取openid 建设账户体系

    async signup({commit}) {
      console.log(` 注册用户-----${apiDomain}/wx/login`)
      let userData = await login()
      let code = userData.code
      let data = {code: code}
      let res = await request({
        method: 'post',
        url: `${apiDomain}/wx/login`,
        data: data
      })
      // let auth_code = res.auth_code
      let auth_code = '7o_WVWb5GZlcpBfASVUl9Q'

      wx.setStorageSync('auth_code', auth_code)
      return auth_code

    },


//  获取今日福利信息

    async getBoonsToday({commit}) {
      console.log(`获取今日福利-----${apiDomain}/boons/today`)
      // let boons = await get('/v1/boons/today', {page: this.page})

      let boons = await request({
        method:'get',
        url:`${apiDomain}/boons/today`,
        data:{}
      })
      console.log(boons)
        return boons

    },

//获取福利详情

    async getBoons({commit},{...uuid_authCode}){
      console.log(uuid_authCode[1])
      console.log(uuid_authCode[0])

      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]



      let prjInfo = await request({
        method:'get',
        url:`${apiDomain}/boons/${uuid}?auth_code=${auth_code}`,
        data:{}
      })
      console.log(`获取福利详情----${apiDomain}/boons/${uuid}?auth_code=${auth_code}`)


      console.log(prjInfo)


      return prjInfo //某一项的福利详情
    },
    //参加福利
    async attendBoon({commit},{...uuid_authCode}){
      let boonId = uuid_authCode[0] || '12'
      let auth_code = uuid_authCode[1]
      console.log(uuid_authCode)
      let res = await request({
        method:'post',
        url:`${apiDomain}/boons/${boonId}/attend?auth_code=${auth_code}`
      })
      console.log(`参加福利------${apiDomain}/boons/${boonId}/attend?auth_code=${auth_code}`)
      console.log(res)

      return res

    },


    //获取当前拼团活动数据列表

    async getGroup({commit}){
      const group = await request({
        method:'get',
        url:`${apiDomain}/group_activities`,
        data:{}
      })
      console.log(`store的 获取拼团列表-----${apiDomain}/group_activities`)

      console.log(group)
      return  group
    },

//获取某一个拼团活动的详情
    async  getGrouDetail({commit},{...uuid_authCode}){
        let uuid = uuid_authCode[0]
        let auth_code = uuid_authCode[1]
      const groupDetail = await request({
        method:'get',
        url:`${apiDomain}/group_activities/${uuid}?auth_code=${auth_code}`
      })
      console.log(`某个拼团的详情----${apiDomain}/group_activities/${uuid}?auth_code=${auth_code}`)

      console.log(groupDetail)
      return groupDetail

    },


//发起拼团

    async initGroup({commit},{...uuid_authCode}){
      let uuid = uuid_authCode[0] || '123'
      let auth_code = uuid_authCode[1]
      let initGroup = await request({
        method:'post',
        url:`${apiDomain}/group_activities/${uuid}/initial?auth_code=${auth_code}`

      })
      console.log(`发起拼团的订单----${apiDomain}/group_activities/${uuid}/initial?auth_code=${auth_code}`)

      console.log(initGroup)
      return initGroup

    },

//拼团订单详情
    async groupActivities_order({commit},uuid){
          console.log(`拼团订单详情----${apiDomain}/group_activity_orders/${uuid}`)
          let orderData = await request({
            method:'get',
            url:`${apiDomain}/group_activity_orders/${uuid}`
          })

      return orderData

    },
//拼团发起详情
    async groupActivitiesInit({commit},uuid){
      console.log(`拼团发起详情---${apiDomain}/group_activity_initials/${uuid}`)
      let initOrder = await request({
        method:'get',
        url:`${apiDomain}/group_activity_initials/${uuid}`
      })
      console.log(initOrder)
      return initOrder

    },
// 我的拼团订单详情页面
  }

})





