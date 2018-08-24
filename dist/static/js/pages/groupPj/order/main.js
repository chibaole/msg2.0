global.webpackJsonp([4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_groupCard__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue2_countdown__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue2_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue2_countdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(10);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      time: {
        day: '',
        hours: '',
        minutes: ''
      },
      showshare: true,
      showModal: false,
      groupNum: 1,
      groupuer: [],
      team: [{
        nickname: '张三',
        pic: '../../../../static/img/unlogin.png',
        captain: true
      }, {
        nickname: '赵四',
        pic: '../../../../static/img/unlogin.png',
        captain: false
      }, {
        nickname: '王五',
        pic: '../../../../static/img/unlogin.png',
        captain: false
      }],
      order_info: {},
      showBox: false,
      painting: {},
      navbar_title: '团购',
      initGroupId: ''
    };
  },

  components: {
    Card: __WEBPACK_IMPORTED_MODULE_2__components_groupCard__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_4__components_navbar__["a" /* default */]

  },

  methods: {
    pay: function pay() {
      wx.requestPayment({
        'timeStamp': '',
        'nonceStr': '',
        'package': '',
        'signType': 'MD5',
        'paySign': '',
        'success': function success(res) {
          console.log(res);
        },
        'fail': function fail(res) {
          console.log(res);
          console.log('支付错误');
        }
      });
    },
    getlastTime: function getlastTime() {
      var that = this;
      var startTime = that.order_info.initial_time_timestamp;
      var currentTime = new Date().getTime();

      var allTime = 86400000; //倒计时24小时
      var leftTime = allTime - (currentTime - startTime);

      if (leftTime <= 0) {
        leftTime = 0;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_util__["b" /* showModal */])('拼团失败', '来晚一步');
        return;
      } else {
        leftTime = allTime - (currentTime - startTime);
      }
      //        let leftTime = 86400 //总时间

      var day = Math.floor(leftTime / 1000 / 60 / 60 / 24); //剩余天数

      var hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);

      var minutes = Math.floor(leftTime / 1000 / 60 % 60);

      that.time.day = day;
      that.time.hours = hours;
      that.time.minutes = minutes;
      setTimeout(that.getlastTime, 1000);
    },
    share: function share() {
      var that = this;
      that.showshare = !that.showshare;
      //
    },

    setModalStatus: function setModalStatus(e) {
      console.log(this.showModal);
      var that = this;
      console.log("设置显示状态，1显示0不显示", e.currentTarget.dataset.status);
      console.log(e.currentTarget.dataset);

      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      });

      that.animation = animation;

      animation.translateY(300).step();

      that.animationData = animation.export();

      console.log(' animation.translateY(300).step()');

      if (e.currentTarget.dataset.status === '1') {
        console.log('这个是status = 1');
        that.showModal = true;
        console.log('这个时候应该显示' + that.showModal);
      } else if (e.currentTarget.dataset.status === '0') {

        console.log('这个是status = 0');

        that.showModal = false;
      }
      setTimeout(function () {
        animation.translateY(0).step();

        that.animationData = animation;
      }.bind(that), 200);
    },

    sharfri: function sharfri() {
      //分享给朋友
    },
    getGroup_orders: function getGroup_orders() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, order_info, order;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                _context.next = 3;
                return get('/v1/group_activity_orders/' + that.order_uuid);

              case 3:
                order_info = _context.sent;
                //获取拼团订单
                order = order_info.group_activity_order;

                console.log(order);
                that.order_info = order;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    shareMenu: function shareMenu() {
      console.log(this.showBox);
      this.showBox = !this.showBox;
    },
    getImg: function getImg() {

      this.painting = {
        width: 375,
        height: 557,
        clear: true,
        views: [

        //            绘制白色背景
        {
          type: 'rect',
          background: '#fff',
          top: 0,
          left: 0,
          width: 375,
          height: 557
        },

        //            绘制的头图
        {
          type: 'image',
          url: 'http://oxl5leo53.bkt.clouddn.com/u=1204211051,3834529407&fm=11&gp=0.jpg', //变化图片
          top: 0,
          left: 0,
          width: 375,
          height: 173
        },
        //            绘制的背景图


        //http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg
        // 文本表达
        {
          type: 'text',
          content: this.order_info.title, //变量的名称
          fontSize: 27.6,
          lineHeight: 27.6,
          color: '#454553',
          textAlign: 'left',
          top: 217.35,
          left: 23,
          width: 328.9,
          MaxLineNumber: 2, //最大两行 超出...
          breakWord: true, //换行
          bolder: true //加粗
        }, {
          type: 'text',
          content: '￥5', //变量的价格
          fontSize: 20.7,
          color: '#f83713',
          textAlign: 'left',
          top: 296.7,
          left: 133.4,
          bolder: true
        }, {
          type: 'text',
          content: '拼团价',
          fontSize: 13.8,
          color: '#f83713',
          textAlign: 'left',
          top: 304.75,
          left: 150 * 1.15 //根据价格字符个数 变化

        }, {
          type: 'text',
          content: '95', //根据价格字符个数 变化
          fontSize: 13 * 1.15,
          color: '#999',
          textAlign: 'left',
          top: 265 * 1.15,
          left: 190 * 1.15, //根据价格字符个数 变化
          textDecoration: 'line-through'
        }, {
          type: 'text',
          content: '参团仅限新用户哦~',
          fontSize: 16 * 1.15,
          color: '#4a4a4a',
          textAlign: 'left',
          top: 314 * 1.15,
          left: 95 * 1.15,
          lineHeight: 16 * 1.15,
          MaxLineNumber: 2,
          breakWord: true,
          width: 136 * 1.15
        }, {
          type: 'image',
          url: 'http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg',
          top: 345 * 1.15,
          left: 121 * 1.15,
          width: 84 * 1.15,
          height: 84 * 1.15
        }, {
          type: 'text',
          content: '长按识别，参与拼团',
          fontSize: 14 * 1.15,
          color: '#4a4a4a',
          textAlign: 'left',
          top: 439 * 1.15,
          left: 100 * 1.15,
          lineHeight: 14 * 1.15,
          MaxLineNumber: 2,
          breakWord: true,
          width: 156 * 1.15
        }]
      };
      wx.setStorageSync('painting', this.painting);
      wx.navigateTo({
        url: '/pages/test/main'
      });
    }
  },
  onLoad: function onLoad() {
    var that = this;
    var current_order = wx.getStorageSync('current_orderinfo'); //取之前缓存的发起拼团数据
    //    that.order_info = current_order
    //    console.log(current_order)
  },
  mounted: function mounted() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var that, initGroupId, orderData, order_user, left_user, group_type, i;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              that = _this2;

              that.initGroupId = that.$root.$mp.query.initGroupId; //发起拼团活动返回订单uuid
              that.groupuer.length = that.groupNum;

              //    that.getGroup_orders()
              initGroupId = that.initGroupId;
              _context2.next = 6;
              return that.$store.dispatch('groupActivitiesInit', initGroupId);

            case 6:
              orderData = _context2.sent;

              that.order_info = orderData.group_activity_initial;
              console.log(orderData);

              order_user = that.order_info.users; //[]

              left_user = that.order_info.users_left; //number

              group_type = that.order_info.group_type; //3 / 5

              for (i = 0; i < left_user; i++) {
                order_user.push({});
              }
              console.log(order_user);

              that.getlastTime();

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: that.order_info.title,
      path: '/pages/groupPj/groupDetail/main' //参与拼团的页面
    };
  }
});

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_vue2_countdown_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_eeaf0e42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_vue2_countdown_vue__ = __webpack_require__(228);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_vue2_countdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_eeaf0e42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_vue2_countdown_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue2-countdown/lib/vue2-countdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue2-countdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eeaf0e42", Component.options)
  } else {
    hotAPI.reload("data-v-eeaf0e42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Navbar', {
    attrs: {
      "navbar_title": _vm.navbar_title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('Card', {
    attrs: {
      "order_info": _vm.order_info,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "detail-order"
  }, [_c('h2', [_vm._v("拼团中 分享给好友组团")]), _vm._v(" "), _c('div', {
    staticClass: "order-info"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("还差"), _c('span', [_vm._v(_vm._s(_vm.order_info.users_left))]), _vm._v("人参团,\n        "), _c('span', [_vm._v(_vm._s(_vm.time.day))]), _vm._v("天\n        "), _c('span', [_vm._v(_vm._s(_vm.time.hours))]), _vm._v("时\n        "), _c('span', [_vm._v(_vm._s(_vm.time.minutes))]), _vm._v("分后结束\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "user"
  }, _vm._l((_vm.order_info.users), function(item, index) {
    return _c('div', {
      staticClass: "pic"
    }, [_c('img', {
      attrs: {
        "src": item.avatar_url,
        "alt": ""
      }
    }), (item.is_initiator) ? _c('span', {
      staticClass: "mark"
    }, [_vm._v("团长")]) : _vm._e()])
  })), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "group"
  }, [_c('h2', {
    staticClass: "group-game"
  }, [_vm._v("拼团玩法")]), _vm._v(" "), _c('p', {
    staticClass: "step1"
  }, [_vm._v("1.免费领取 但要完成小作业，写食用反馈。")]), _vm._v(" "), _c('p', {
    staticClass: "step2"
  }, [_vm._v("2.领取成功后，请扫码加群等待发货哦。")])], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "pjDetail"
  }, [_vm._v("\n      商品详情\n    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "btn open_btn",
    attrs: {
      "data-status": "1",
      "eventid": '0'
    },
    on: {
      "click": _vm.shareMenu
    }
  }, [_c('span', [_vm._v("邀请好友一起享用")])]), _vm._v(" "), (_vm.showBox) ? _c('div', {
    staticClass: "mask"
  }, [(_vm.showBox) ? _c('div', {
    staticClass: "meunBox"
  }, [_c('img', {
    staticClass: "x",
    attrs: {
      "src": __webpack_require__(57),
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.shareMenu
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("分享加速抽奖")]), _vm._v(" "), _c('button', {
    staticClass: "friend",
    attrs: {
      "open-type": "share"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(58),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "createImg",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.getImg
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(59),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "wechatFriend",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("微信好友")]), _vm._v(" "), _c('div', {
    staticClass: "shengchengImg",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.getImg
    }
  }, [_vm._v("生成分享图片")])], 1) : _vm._e()]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b3a874ec", esExports)
  }
}

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.msTime.show) ? _c('p', [(_vm.msTime.day > 0) ? _c('span', [_c('span', [_vm._v(_vm._s(_vm.msTime.day))]), _c('i', [_vm._v(_vm._s(_vm.dayTxt))])], 1) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.msTime.hour))]), _c('i', [_vm._v(_vm._s(_vm.hourTxt))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.msTime.minutes))]), _c('i', [_vm._v(_vm._s(_vm.minutesTxt))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.msTime.seconds))]), _c('i', [_vm._v(_vm._s(_vm.secondsTxt))])], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eeaf0e42", esExports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b3a874ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b3a874ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b3a874ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/groupPj/order/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b3a874ec", Component.options)
  } else {
    hotAPI.reload("data-v-b3a874ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(69);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true
  }
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  replace: true,
  data: function data() {
    return {
      tipShow: true,
      msTime: { //倒计时数值
        show: false, //倒计时状态
        day: '', //天
        hour: '', //小时
        minutes: '', //分钟
        seconds: '' //秒
      },
      star: '', //活动开始时间
      end: '', //活动结束时间
      current: '' //当前时间
    };
  },

  watch: {
    currentTime: function currentTime(val, oldval) {
      this.gogogo();
    }
  },
  props: {
    //距离开始提示文字
    tipText: {
      type: String,
      default: '距离开始'
    },
    //距离结束提示文字
    tipTextEnd: {
      type: String,
      default: '距离结束'
    },
    //时间控件ID
    id: {
      type: String,
      default: '1'
    },
    //当前时间
    currentTime: {
      type: Number
    },
    // 活动开始时间
    startTime: {
      type: Number
    },
    // 活动结束时间
    endTime: {
      type: Number
    },
    // 倒计时结束显示文本
    endText: {
      type: String,
      default: '已结束'
    },
    //自定义显示文字:天
    dayTxt: {
      type: String,
      default: ':'
    },
    //自定义显示文字:时
    hourTxt: {
      type: String,
      default: ':'
    },
    //自定义显示文字:分
    minutesTxt: {
      type: String,
      default: ':'
    },
    secondsTxt: {
      type: String,
      default: ':'
    },
    //是否开启秒表倒计，未完成
    secondsFixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    console.log(this);
    this.gogogo();
  },

  methods: {
    gogogo: function gogogo() {
      var _this = this;

      //判断是秒还是毫秒
      this.startTime.toString().length == 10 ? this.star = this.startTime * 1000 : this.star = this.startTime;
      this.endTime.toString().length == 10 ? this.end = this.endTime * 1000 : this.end = this.endTime;
      if (this.currentTime) {
        this.currentTime.toString().length == 10 ? this.current = this.currentTime * 1000 : this.current = this.currentTime;
      } else {
        this.current = new Date().getTime();
      }

      if (this.end < this.current) {
        /**
         * 结束时间小于当前时间 活动已结束
         */
        this.msTime.show = false;
        this.end_message();
      } else if (this.current < this.star) {
        /**
         * 当前时间小于开始时间 活动尚未开始
         */
        this.$set(this, 'tipShow', true);
        setTimeout(function () {
          _this.runTime(_this.star, _this.current, _this.start_message);
        }, 1);
      } else if (this.end > this.current && this.star < this.current || this.star == this.current) {
        /**
         * 结束时间大于当前并且开始时间小于当前时间，执行活动开始倒计时
         */
        this.$set(this, 'tipShow', false);
        this.msTime.show = true;
        this.$emit('start_callback', this.msTime.show);
        setTimeout(function () {
          _this.runTime(_this.end, _this.star, _this.end_message, true);
        }, 1);
      }
    },
    runTime: function runTime(startTime, endTime, callFun, type) {
      var _this2 = this;

      var msTime = this.msTime;
      var timeDistance = startTime - endTime;
      if (timeDistance > 0) {
        this.msTime.show = true;
        msTime.day = Math.floor(timeDistance / 86400000);
        timeDistance -= msTime.day * 86400000;
        msTime.hour = Math.floor(timeDistance / 3600000);
        timeDistance -= msTime.hour * 3600000;
        msTime.minutes = Math.floor(timeDistance / 60000);
        timeDistance -= msTime.minutes * 60000;
        //是否开启秒表倒计,未完成
        //                    this.secondsFixed ? msTime.seconds = new Number(timeDistance / 1000).toFixed(2) : msTime.seconds = Math.floor( timeDistance / 1000 ).toFixed(0);
        msTime.seconds = Math.floor(timeDistance / 1000).toFixed(0);
        timeDistance -= msTime.seconds * 1000;

        if (msTime.hour < 10) {
          msTime.hour = "0" + msTime.hour;
        }
        if (msTime.minutes < 10) {
          msTime.minutes = "0" + msTime.minutes;
        }
        if (msTime.seconds < 10) {
          msTime.seconds = "0" + msTime.seconds;
        }
        var _s = Date.now();
        var _e = Date.now();
        var diffPerFunc = _e - _s;
        setTimeout(function () {
          if (type) {
            _this2.runTime(_this2.end, endTime += 1000, callFun, true);
          } else {
            _this2.runTime(_this2.star, endTime += 1000, callFun);
          }
        }, 1000 - diffPerFunc);
      } else {
        callFun();
      }
    },
    start_message: function start_message() {
      var _this3 = this;

      this.$set(this, 'tipShow', false);
      this.$emit('start_callback', this.msTime.show);
      setTimeout(function () {
        _this3.runTime(_this3.end, _this3.star, _this3.end_message, true);
      }, 1);
    },
    end_message: function end_message() {
      this.msTime.show = false;
      if (this.currentTime <= 0) {
        return;
      }
      this.$emit('end_callback', this.msTime.show);
    }
  }
});

/***/ })

},[84]);
//# sourceMappingURL=main.js.map