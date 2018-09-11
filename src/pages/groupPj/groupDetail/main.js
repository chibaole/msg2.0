import Vue from 'vue'
import groupDetail from './index'

const app = new Vue(groupDetail)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: false
  }
}
