import Vue from 'vue'
import Me from './Me'

const app = new Vue(Me)
app.$mount()
export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'canvasdrawer': '../../../static/canvasdrawer/canvasdrawer'
    }
  }
}
