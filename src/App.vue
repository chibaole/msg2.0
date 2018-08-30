<script>
  import {login} from '@/utils/wx'


  export default {


    methods: {
      async signup() {
        //仅注册用户 传递code  换取openid 建设账户体系
        let codeinfo = await login()
        let code = codeinfo.code
        console.log('wx.login 获取的code为：' + code)
        let data = {code: code}
        let auth = await post('/v1/wx/login', data)
        console.log(auth)
        let auth_code = userid.auth_code
        wx.setStorageSync('auth_code', auth_code)
        let currentuser_code = wx.getStorageSync('auth_code') //当前用户的auth_code
        console.log(currentuser_code)
      }
    },
     async created() {
      console.log('小程序启动了')

       await this.$store.dispatch('signup')

       console.log('注册成功')



    }

  }
</script>

<style lang="less">
  /*@import "../static/style/weui.css";*/
  /*@import "../node_modules/mpui/theme/mpui";*/

  * {
    font-size: 14px;
    font-family: "PingFang SC";
    font-weight: Regular;
  }

  .text-footer {
    text-align: center;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .text-primary {
    color: #EA5149;
  }

  .page-title {
    padding-left: 20px;
    background: #eee;
    line-height: 40px;
    font-size: 14px;
  }

  .right {
    float: right;
  }

  .btn {
    color: white;
    background: #EA5A49;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-left: 15px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 100%;
  }

  .btn:active {
    background: #FA5A49;
  }
</style>
