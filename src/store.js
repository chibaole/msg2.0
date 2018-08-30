import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiDomain = 'http://localhost:5757/v1'
// const apiDomain = 'http://47.98.170.205/api/v1'
import {get, post, showModal} from '@/utils/util'


import {request, login,} from "./utils/wx";


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
      // if(res.auth_code === undefined){
      //   let res = await request({
      //     method: 'post',
      //     url: `${apiDomain}/wx/login`,
      //     data: data
      //   })
      // }
      let auth_code = '7o_WVWb5GZlcpBfASVUl9Q'

      wx.setStorageSync('auth_code', auth_code)
      return auth_code

    },


//  获取今日福利信息

    async getBoonsToday({commit}) {
      console.log(`获取今日福利-----${apiDomain}/boons/today`)
      // let boons = await get('/v1/boons/today', {page: this.page})

      let boons = await request({
        method: 'get',
        url: `${apiDomain}/boons/today`,
        data: {}
      })
      console.log(boons)
      return boons

    },

//获取福利详情

    async getBoons({commit}, {...uuid_authCode}) {
      console.log(uuid_authCode[1])
      console.log(uuid_authCode[0])

      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]


      let prjInfo = await request({
        method: 'get',
        url: `${apiDomain}/boons/${uuid}?auth_code=${auth_code}`,
        data: {}
      })
      console.log(`获取福利详情----${apiDomain}/boons/${uuid}?auth_code=${auth_code}`)


      console.log(prjInfo)


      return prjInfo //某一项的福利详情
    },
    //参加福利
    async attendBoon({commit}, {...uuid_authCode}) {
      let boonId = uuid_authCode[0] || '12'
      let auth_code = uuid_authCode[1]
      console.log(uuid_authCode)
      let res = await request({
        method: 'post',
        url: `${apiDomain}/boons/${boonId}/attend?auth_code=${auth_code}`
      })
      console.log(`参加福利------${apiDomain}/boons/${boonId}/attend?auth_code=${auth_code}`)
      console.log(res)

      return res

    },


    //获取当前拼团活动数据列表

    async getGroup({commit}) {
      const auth_code = wx.getStorageSync('auth_code')

      const group = await request({
        method: 'get',
        url: `${apiDomain}/group_activities?auth_code=${auth_code}`,
        data: {}
      })
      console.log(`store的 获取拼团列表-----${apiDomain}/group_activities?auth_code=${auth_code}`)

      console.log(group)
      return group
    },

//拼团活动详情
    async getGrouDetail({commit}, {...uuid_authCode}) {
      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]
      const groupDetail = await request({
        method: 'get',
        url: `${apiDomain}/group_activities/${uuid}?auth_code=${auth_code}`
      })
      console.log(`拼团活动详情----${apiDomain}/group_activities/${uuid}?auth_code=${auth_code}`)

      console.log(groupDetail)
      return groupDetail

    },


//发起拼团

    async initGroup({commit}, {...uuid_authCode}) {
      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]
      let initGroup = await request({
        method: 'post',
        url: `${apiDomain}/group_activities/${uuid}/initial?auth_code=${auth_code}`

      })
      console.log(`发起拼团的订单----${apiDomain}/group_activities/${uuid}/initial?auth_code=${auth_code}`)

      console.log(initGroup)
      return initGroup

    },

//拼团订单详情
    async groupActivities_order({commit},{...uuid_authCode}) {
      console.log('拼团订单详情')
      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]

      console.log(`拼团订单详情----${apiDomain}/group_activity_orders/${uuid}?auth_code=${auth_code}`)
      let orderData = await request({
        method: 'get',
        url: `${apiDomain}/group_activity_orders/${uuid}?auth_code=${auth_code}`
      })
      console.log(orderData)
      return orderData

    },

//拼团发起详情
    async groupActivitiesInit({commit}, {...uuid_authCode}) {
      console.log(uuid_authCode)
      let uuid = uuid_authCode[0] || '临时uuid'
      let auth_code = uuid_authCode[1]

      console.log(`拼团发起详情---${apiDomain}/group_activity_initials/${uuid}?auth_code=${auth_code}v`)
      let initOrder = await request({
        method: 'get',
        url: `${apiDomain}/group_activity_initials/${uuid}?auth_code=${auth_code}`
      })
      console.log(initOrder)
      return initOrder

    },
// 参与拼团

    async attendGroupActivities({commit}, {...uuid_authCode}) {
      console.log('一键参与拼团')

      const attendData = await request({
        method: 'post',
        url: `${apiDomain}/group_activities/${uuid_authCode[0]}/attend?auth_code=${uuid_authCode[1]}`
      })
      console.log(attendData)
      return attendData

    },



// 我的拼团订单详情页面
    async myGroupList({commit},{...data}){
      const page = data[0]
      const size = data[1]
      const auth_code = data[2]
      const myGroupActivity = await request({
        method:'get',
        url:`${apiDomain}/group_activity_orders/mine?page=${page}&size=${size}&auth_code=${auth_code}`
      })


      return myGroupActivity || []




    },
//我的抽奖

    async myBoonList({commit},{...data}){
      const page = data[0]
      const size = data[1]
      const auth_code = data[2]
      const myBoons = await request({
        method:'get',
        url:`${apiDomain}/boon_orders/mine?page=${page}&size=${size}&auth_code=${auth_code}`
      })


      return myBoons || []




    },
//我的抽奖订单详情
async myBoonDetail({commit},{...data}){
      console.log('我的订单详情')
      let uuid = data[0]
      let auth_code = data[1]
  let res = await request({
    method:'get',
    url:`${apiDomain}/boon_orders/${uuid}?auth_code=${auth_code}`
  })
  console.log(res)
  return res
},
// 抽奖地址选择
async boonAddress({commit},{...data}){

      let uuid = data[0]

      let auth_code = data[1]

      let attributes = data[2]

      let order_address  = {
        auth_code:auth_code,
        boon_order:{
          address_attributes:attributes
        }
      }
      console.log('这是抽奖地址数据')
      var jsonData = JSON.stringify(order_address)
      let res = await  request({
        method:'put',
        url:`${apiDomain}/boon_orders/${uuid}`,
        data:order_address,
        header:{
          'content-type': 'application/json'
        }
      })
      return res

},
//拼团地址选择
    async groupAddress({commit},{...data}){

      let uuid = data[0]

      let auth_code = data[1]

      let attributes = data[2]

      let order_address  = {
        auth_code:auth_code,
        boon_order:{
          address_attributes:attributes
        }
      }
      console.log(order_address)

      let res = await  request({
        method:'put',
        url:`${apiDomain}/group_activity_orders/${uuid}`,
        data:order_address
      })
      console.log(res)
      return res

    }

  }

})





