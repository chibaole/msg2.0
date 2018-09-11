import Vue from 'vue'
import groupPj from './index'

const app = new Vue(groupPj)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: false
  }
}
