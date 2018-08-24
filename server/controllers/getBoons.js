// const {isbn, openid} = ctx.request.body


module.exports = async(ctx) => {


  console.log('发起福利详情的 请求')

  try {
    // const {page} = ctx.request.query
    let uuid =  ctx.query.uuid

    console.log(uuid)

    let boon = {boon:{

        // 唯一标识
        uuid: '',
        // 标题
        title: '酸奶众测',
        // 头图地址
        title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/pj.png',
        // 描述
        description: '酸奶补给大礼包 x 10',
        // 开奖条件
        lottery_conditions: '500人自动开奖',
        // 参加人数
        num_of_participants: 433,
        // 赞助商，不存在时，为 null
        sponsor: {
          // 赞助商描述
          description: '安佳(Anchor), 来自新西兰的全球知名乳制品品牌。',
          // 小程序地址，不存在时，为 null
          app_url: '小程序连接',
          app_id:'wxbcfc3d4c0ab04031',
          app_path:'',
          name:'安佳礼品卡',

        },
        // 福利详情，符文本内容
        detial: '<h1>标题</h1><p>正文</p>',

      participate_status: false,
        button: {
      text: '抽奖'
    }
    }

  }




    ctx.state= {
      data: boon,
      result: true,
      message: '操作成功',
    }
  }catch (e){


    ctx.state= {
      result: false,
      err_code: '9001', // 错误代码，用于识别具体的错误代码
      err_msg: '错误消息' // 用于提示用户的错误消息，弹出显示该字段内容
    }
  }


}
