<template>
  <div class="container">
          <scroll-view class="item-box" scroll-x="true" scroll-left>
            <div class="item" v-for="item in list">
              <img :src="item.pic" alt="">
              <div class="mask" v-if="mark"></div>
              <div class="text">
                <h2>{{item.title}}</h2>
                <p>{{item.text}}</p>
              </div>
            </div>
          </scroll-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mark: true,
        list: [{
          title: '哈哈哈',
          text: '大家疯狂的家',
          pic: '../../static/img/share_pic.jpg'
        },
        {
          title: '哈哈哈',
          text: '大家疯狂的家',
          pic: '../../static/img/share_pic.jpg'
        },
        {
          title: '哈哈哈',
          text: '大家疯狂的家你的烦恼',
          pic: '../../static/img/share_pic.jpg'
        }

        ]
      }
    }
  }
</script>

<style scoped>

  .item-box{
    box-sizing: border-box;
    white-space: nowrap;
  }
        .item{
          display: inline-block;
              width: 145px;
          height: 184px;
          text-align: center;
          color: #fff;

          border: 1px solid #000;
          background: #9B9B9B;
          position: relative;

          box-sizing: border-box;
          white-space: nowrap;

        }
      .item img{
          width: 100%;
          height: 100%;

      }

.mask{
  width: 145px;
  height: 184px;
  background: #000 ;
  opacity: 0.5;
  position: absolute;
  top:0;

}
  .item .text{
    /*border:1px solid #000;*/
    width: 126px;
    height: 50px;
    position: absolute;
    top:20px;
    left: 9.5px;

    z-index: 100;

    /*margin: 0 auto;*/
  }
  .item h2{
    font-size: 18px ;
  }
  .item p{
    font-size: 12px;
  }


</style>
