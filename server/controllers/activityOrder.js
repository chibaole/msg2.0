// const {isbn, openid} = ctx.request.body


module.exports = async(ctx) => {
  console.log('拼团订单详情的请求')

  let uuid =  ctx.params.uuid
  console.log(uuid)
  let res = {
    group_activity_order: {
      // 唯一标识
      uuid: '',
      // 标题
      title: '限量 5000 份 | 凤梨酥 6 枚装',
      // 题图
      title_image_url: '题图',
      // 拼团价
      current_price: 5,
      // 原价
      original_price: 95,
      // 团购类型
      group_type: '三人团',
      // 产品
      product: {
        // 名称
        name: '凤梨酥',
        // 原价
        original_price: 85,
        // 规格
        specification: '',
        // 数量
        num: 1,
        // 详情
        detail: ''
      }
    }
  }
  if(uuid){
    ctx.state= {
      data: res,
      result: true,
      message: '操作成功',
    }
  }




}
