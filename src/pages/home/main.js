import Vue from 'vue'
import Home from './Home'

const app = new Vue(Home)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: true
  }
}
