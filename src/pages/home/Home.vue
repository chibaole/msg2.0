<template>
  <div>
    <!--<Navbar></Navbar>-->
    <div class="explain-box" v-if="open">
      <p>没事干研究院很凉快</p>
    </div>
    <div class="clear"></div>

    <div class="appname">没事干研究院很酷<div class="explain" @click="openBox">?</div>
    </div>

    <Scroll></Scroll>
    <Group></Group>
    <More></More>
    <!--<button open-type="getUserInfo">登录</button>-->
    <!--<button open-type="getUserInfo" @getuserinfo="test">登录的按钮</button>-->

    <!--wx.getUserInfo(OBJECT)-->
    <!--注意：此接口有调整，使用该接口将不再出现授权弹窗，请使用  引导用户主动进行授权操作-->
  </div>

</template>
<script>



  import {get, post, showModal} from '@/util'
  import {login} from '@/utils/wx'
  import TopSwiper from '@/components/TopSwiper'
  import Scroll from '@/components/scroll'
  import Group from '@/components/group'
  import More from  '@/components/more'

//  import wx from '../../utils/wx'

  import  config from '@/config'

  import Navbar from '@/components/navbar'

  export default {
    components: {
//      Card,
      TopSwiper,
      Scroll,
      Group,
      More
    },
    data () {
      return {
        books: [],
        page: 0,
        more: true,
        tops: [],
        open:false,
        userInfo:{
          openid:''
        }
      }
    },
    methods: {
      async getTop () {
//        const tops = await get('/weapp/top')
        this.tops = tops.list
      },
      openBox(){
          let that = this
          let open = this.open
        console.log(open)
        if(open){
            that.open = false
        }else {
          that.open = true

        }
      },
      async  signup(){
        //仅注册用户 传递code  换取openid 建设账户体系
        let codeinfo = await login()
        let code = codeinfo.code
        console.log('wx.login 获取的code为：'+code)
        let data = {code:code}
        let auth = await post('/v1/wx/login',data)
        console.log(auth)
        let auth_code = '7o_WVWb5GZlcpBfASVUl9Q'



        wx.setStorageSync('auth_code',auth_code)

        let currentuser_code = wx.getStorageSync('auth_code')
        console.log(currentuser_code)



      },


    },
    async onLoad(){
//      this.signup()
//      var auth_code = await this.$store.dispatch('signup')


//      console.log(`这是store获取的${auth_code}`)
    },
    mounted () {

      let that = this
      let currentuser_code = wx.getStorageSync('auth_code')
      console.log(currentuser_code)
      if(currentuser_code){
        return
      }else {
        that.signup()
      }

//      this.signup()

    }

  }
</script>
<style  scoped>

  .appname{
    width: 218px;
    height: 24px;
    font-size: 24px;
    line-height: 24px;
    color: #333;
    font-family: PingFangSC-Medium;
    /*border: 1px solid #000;*/
    margin-bottom: 60px;
    margin-top: 78px;
    margin-left: 25px;
    position: relative;

  }
  .explain{
    width:15px ;
    height: 15px;
    line-height: 15px;
    color:#fff;
    font-size: 10px;
    border-radius: 50%;
    /*float: right;*/
    background: #FF7F4F ;
    text-align: center;
    display: inline-block;
    position: absolute;
    left:194px ;
    top:0px;


  }
  .clear {
    clear: both;
  }

  .explain-box{
    border:1px solid #ccc;
    width: 350px;
    height: 238px;
    font-size: 20px ;
    font-family: "PingFang SC";
    background: #fff;
    position: fixed;
    top:100px;
    left: 12.5px;
    z-index: 99;
  }

</style>




<!--userInfo:{-->
    <!--avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/S7ZeF3rUh8ROBznN4gnVam1nXZOf39t6cktoSnlTaCJibvWkC1BpxbzgfqibtAsd5eYzLpT491C6bDC5zRnmYHvg/132"-->
    <!--city:"Xuhui",-->
    <!--country:"China",-->
    <!--gender:1,-->
    <!--language:"zh_CN",-->
    <!--nickName:"Herman",-->
    <!--province:"Shanghai",-->
<!--}-->
