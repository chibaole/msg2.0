import Vue from 'vue'
import Prj from './prj'

const app = new Vue(Prj)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: true,
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '酸奶众测福利领取',
      'navigationBarTextStyle': 'light',
      'navigationStyle': 'default'
    }
  }
}
