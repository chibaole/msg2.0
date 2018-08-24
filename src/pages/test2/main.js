import Vue from 'vue'
import Test from './index'

const app = new Vue(Test)
app.$mount()
export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'canvasdrawer': '../../../static/canvasdrawer/canvasdrawer'
    }
  }
}
