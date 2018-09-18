import Vue from 'vue'
import Me from './Me'

const app = new Vue(Me)
app.$mount()
export default {
  config: {
    usingComponents: {
      'canvasdrawer': '../../../static/canvasdrawer/canvasdrawer'
    }
  }
}
