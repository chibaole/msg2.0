<script>
  import {login} from '@/utils/wx'

  export default {
    async created () {
      let auth_code = wx.getStorageSync('auth_code')
      if (auth_code) {
      } else {
        await this.$store.dispatch('signup')
      }

      console.log('获取设备信息')
      const vm = this
      wx.getSystemInfo({
        success: function (res) {
          console.log(res)
          wx.setStorageSync('phoneModel',res.model)
          let totalTopHeight = 68

          if (res.model.indexOf('iPhone X') !== -1) {
            totalTopHeight = 88

          } else if (res.model.indexOf('iPhone') !== -1) {
            totalTopHeight = 64
          }
          console.log('totalTopHeight'+totalTopHeight)

          let statusBarHeight = res.statusBarHeight
          let titleBarHeight = totalTopHeight - res.statusBarHeight

          vm.statusBarHeight = statusBarHeight

          vm.titleBarHeight = titleBarHeight
          vm.top = statusBarHeight + titleBarHeight
        },
        failure () {
          vm.globalData.statusBarHeight = 0
          vm.globalData.titleBarHeight = 0
        }
      })
    },


  }
</script>

<style lang="less">


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


  form{
    border:none;
    display: block;
    padding: 0;
    margin: 0;
    border-radius:0;

    button {
      display: block;
      background: none;
      /*margin: 0 auto;*/
      border:none;
      padding: 0;
      margin: 0;
    };
    button::after{
      border-radius:0;
      border:none;

    }
  }


  button::after{
    border-radius:0;

    border: none;
    padding: 0;
    margin: 0;
  }
  .bg{
    border-radius:5px;

  }
</style>
