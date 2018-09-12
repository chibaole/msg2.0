import Vue from 'vue'
import Vuex from 'vuex'
import {get, post, showModal} from '@/utils/util'
import {request, login} from './utils/wx'
Vue.use(Vuex)
// const apiDomain = 'http://localhost:5757/v1'
// const apiDomain = 'http://47.98.170.205/api/v1'
const apiDomain = 'https://msg.chibaole.cc/api/v1'
export default new Vuex.Store({


  actions: {

    // 仅注册用户 传递code  换取openid 建设账户体系
    async signup ({commit}) {
      let userData = await login()
      let code = userData.code
      let data = {code: code}
      let res = await request({
        method: 'post',
        url: `${apiDomain}/wx/login`,
        data: data
      })
      let auth_code = ''
      auth_code = res.auth_code
      wx.setStorageSync('auth_code', auth_code)
      return auth_code
    },

    // 用户点击 存储用户信息
    async saveInfo ({commit}, {...data}) {
      let auth_code = wx.getStorageSync('auth_code')
      let urlData = {
        auth_code: auth_code,
        encrypted_data: data[0],
        iv: data[1],
        signature: data[2],
        raw_data: data[3]
      }
      let res = await request({
        method: 'post',
        url: `${apiDomain}/wx/save_user_info?auth_code=${auth_code}`,
        data: urlData
      })
      wx.setStorageSync('userinfo', res.user)// 本地存储userinfo
      return res.user
    },

//  获取今日福利信息
    async getBoonsToday ({commit}) {
      console.log(`获取今日福利-----${apiDomain}/boons/today`)
      let auth_code = wx.getStorageSync('auth_code')
      let boons = await request({
        method: 'get',
        url: `${apiDomain}/boons/today?auth_code=${auth_code}`,
        data: {}
      })
      return boons
    },

    // 获取福利详情
    async getBoons ({commit}, {...uuid_authCode}) {
      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]
      let form_id = uuid_authCode[2]
      let prjInfo = await request({
        method: 'get',
        url: `${apiDomain}/boons/${uuid}?auth_code=${auth_code}&form_id=${form_id}`,
        data: {}
      })
      console.log(`获取福利详情----${apiDomain}/boons/${uuid}?auth_code=${auth_code}`)
      return prjInfo // 某一项的福利详情
    },

    // 参加福利
    async attendBoon ({commit}, {...uuid_authCode}) {
      let boonId = uuid_authCode[0] || '12'
      let auth_code = uuid_authCode[1]
      let res = await request({
        method: 'post',
        url: `${apiDomain}/boons/${boonId}/attend?auth_code=${auth_code}`
      })
      console.log(`参加福利------${apiDomain}/boons/${boonId}/attend?auth_code=${auth_code}`)
      return res
    },

    // 获取当前拼团活动数据列表
    async getGroup ({commit}) {
      const auth_code = wx.getStorageSync('auth_code')
      const group = await request({
        method: 'get',
        url: `${apiDomain}/group_activities?auth_code=${auth_code}`,
        data: {}
      })
      console.log(`拼团活动列表${apiDomain}/group_activities?auth_code=${auth_code}`)
      return group
    },

    // 拼团活动详情
    async getGrouDetail ({commit}, {...uuid_authCode}) {
      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]
      let form_id = uuid_authCode[2]
      console.log(`拼团活动详情----${apiDomain}/group_activities/${uuid}?auth_code=${auth_code}&form_id=${form_id}`)
      const groupDetail = await request({
        method: 'get',
        url: `${apiDomain}/group_activities/${uuid}?auth_code=${auth_code}&form_id=${form_id}`
      })
      return groupDetail
    },

    // 发起拼团
    async initGroup ({commit}, {...uuid_authCode}) {
      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]
      console.log(`发起拼团的订单----${apiDomain}/group_activities/${uuid}/initial?auth_code=${auth_code}`)
      let initGroup = await request({
        method: 'post',
        url: `${apiDomain}/group_activities/${uuid}/initial?auth_code=${auth_code}`
      })
      return initGroup
    },

    // 拼团订单详情
    async groupActivities_order ({commit}, {...uuid_authCode}) {
      let uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]
      console.log(`拼团订单详情-------${apiDomain}/group_activity_orders/${uuid}?auth_code=${auth_code}`)
      let orderData = await request({
        method: 'get',
        url: `${apiDomain}/group_activity_orders/${uuid}?auth_code=${auth_code}`
      })
      return orderData
    },

    // 拼团发起详情
    async groupActivitiesInit ({commit}, {...uuid_authCode}) {
      let uuid = uuid_authCode[0]
      uuid === '' ? uuid = '1223' : uuid = uuid_authCode[0]
      let auth_code = uuid_authCode[1]
      console.log(`拼团单详情---${apiDomain}/group_activity_initials/${uuid}?auth_code=${auth_code}`)
      let initOrder = await request({
        method: 'get',
        url: `${apiDomain}/group_activity_initials/${uuid}?auth_code=${auth_code}`
      })
      return initOrder
    },

    // 参与拼团
    async attendGroupActivities ({commit}, {...uuid_authCode}) {
      console.log(`参与拼团------------${apiDomain}/group_activity_initials/${uuid_authCode[0]}/attend?auth_code=${uuid_authCode[1]}`)
      const attendData = await request({
        method: 'post',
        url: `${apiDomain}/group_activity_initials/${uuid_authCode[0]}/attend?auth_code=${uuid_authCode[1]}`
      })
      console.log(attendData)
      if(attendData == undefined){
        showModal('参与失败', '你已经在当前的拼团')

      }
      return attendData
    },

    // 邀请好友二维码
    async wxCode ({commit}, {...data}) {
      let uuid = data[0] // 订单uuid
      let auth_code = wx.getStorageSync('auth_code')
      let page = data[1]
      let res = await request({
        method: 'get',
        url: `${apiDomain}/group_activity_initials/${uuid}/wxaqrcode?auth_code=${auth_code}&page=${page}`
      })
      return res
    },

    // 我的拼团订单详情页面
    async myGroupList ({commit}, {...data}) {
      const page = data[0]
      const size = data[1]
      const auth_code = data[2]
      const myGroupActivity = await request({
        method: 'get',
        url: `${apiDomain}/group_activity_orders/mine?page=${page}&size=${size}&auth_code=${auth_code}`
      })
      return myGroupActivity || []
    },

    // 我的拼团订单详情
    async myBoonDetail ({commit}, {...data}) {
      let uuid = data[0]
      let auth_code = data[1]
      let res = await request({
        method: 'get',
        url: `${apiDomain}/group_activity_orders/${uuid}?auth_code=${auth_code}`
      })
      return res
    },

    // 我的抽奖
    async myBoonList ({commit}, {...data}) {
      const page = data[0]
      const size = data[1]
      const auth_code = data[2]
      const myBoons = await request({
        method: 'get',
        url: `${apiDomain}/boon_orders/mine?page=${page}&size=${size}&auth_code=${auth_code}`
      })
      return myBoons || []
    },

    // 我的抽奖订单详情
    async myBoonDetail ({commit}, {...data}) {
      console.log('我的抽奖订单详情')
      let uuid = data[0]
      let auth_code = data[1]
      let res = await request({
        method: 'get',
        url: `${apiDomain}/boon_orders/${uuid}?auth_code=${auth_code}`
      })
      return res
    },

    // 抽奖地址选择
    async boonAddress ({commit}, {...data}) {
      let uuid = data[0]
      let auth_code = data[1]
      let attributes = data[2]
      let order_address = {
        auth_code: auth_code,
        boon_order: {
          address_attributes: attributes
        }
      }
      var jsonData = JSON.stringify(order_address)
      let res = await request({
        method: 'put',
        url: `${apiDomain}/boon_orders/${uuid}`,
        data: order_address,
        header: {
          'content-type': 'application/json'
        }
      })
      return res
    },

    // 拼团地址选择
    async groupAddress ({commit}, {...data}) {
      console.log(data)
      let uuid = data[0]
      let auth_code = data[1]
      let attributes = data[2]
      let order_address = {
        auth_code: auth_code,
        group_activity_order: {
          address_attributes: attributes
        }
      }
      let res = await request({
        method: 'put',
        url: `${apiDomain}/group_activity_orders/${uuid}`,
        data: order_address
      })
      console.log(res)
      return res
    },

    // 拼团支付
    async group_pay ({commit}, uuid) {
      let _uuid = uuid
      let auth_code = wx.getStorageSync('auth_code')
      console.log(`${apiDomain}/group_activity_orders/${_uuid}/pay?auth_code=${auth_code}`)
      let payres = request({
        method: 'get',
        url: `${apiDomain}/group_activity_orders/${_uuid}/pay?auth_code=${auth_code}`
      })
      return payres
    },

    // 用户信息详情获取
    async user_info ({commit}, uuid) {
      let auth_code = wx.getStorageSync('auth_code')
      let user_profile = await request({
        method: 'get',
        url: `${apiDomain}/users/profile?auth_code=${auth_code}`
      })
      return user_profile
    }
  }

})

