
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    let fuLiInfo = [
        {
            title: '福利一',
            little_title: '限前10名抽2人',
            pic: '../../static/img/share_pic.jpg',
            methods: '免费抽',
            id: 1

        },
        {
            title: '福利二',
            little_title: '限前100名',
            pic: '../../static/img/share_pic.jpg',
            methods: '申请',
            id: 2
        },
        {
            title: '福利三',
            little_title: '限前1000名',
            pic: '../../static/img/share_pic.jpg',
            methods: '申请',
            id: 3
        },
        {
            title: '福利四',
            little_title: '满100抽1',
            pic: '../../static/img/share_pic.jpg',
            methods: '免费抽',
            id: 4
        }
    ]
    ctx.state.data = {
        fuLiList: fuLiInfo
    }
}
