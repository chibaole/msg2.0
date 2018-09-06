import Vue from 'vue'
import App from './App'

import Store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = Store  // 注册Store

import { request, alert } from './utils/wx'
Vue.prototype.$http = request
Vue.prototype.$alert = alert
const app = new Vue(App)
app.$mount()

export default{
  config: {

    usingComponents: {
      'skeleton': '../static/skeleton/skeleton'
    },
    pages: ['^pages/home/main', 'pages/project/main', 'pages/groupPj/main',
      'pages/groupPj/groupDetail/main', 'pages/groupPj/order/main',
      'pages/cards/main', 'pages/user/main', 'pages/user/myGroup/main',
      'pages/user/myGroup/myGroupDetail/main', 'pages/user/myboonList/main', 'pages/user/myboonList/myBoon/main', 'pages/test/main'
    ],

    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '没事干研究院很酷',
      'navigationBarTextStyle': 'light',
      'navigationStyle': 'custom'
    },
    'tabBar': {
      selectedColor: '#EA5149',
      list: [
        {
          pagePath: 'pages/home/main',
          iconPath: 'static/img/home_gray.png',
          selectedIconPath: 'static/img/home_orange.png'
        },

        {
          pagePath: 'pages/user/main',
          iconPath: 'static/img/me_gray.png',
          selectedIconPath: 'static/img/me_orange.png'
        }

      ]
    }
  }
}
// {
//   pagePath: 'pages/cards/main',
//     iconPath: 'static/img/explore_gray.png',
//   selectedIconPath: 'static/img/explore_orange.png'
// },
