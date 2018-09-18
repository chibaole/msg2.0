global.webpackJsonp([4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_groupCard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_oldUser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue2_countdown__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue2_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue2_countdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_wx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(4);



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
        minutes: '',
        seconds: ''
      },
      showshare: true,
      showModal: false,
      groupNum: 1,
      groupuer: [],
      order_info: {},
      showBox: false,
      painting: {},
      navbar_title: '拼团详情',
      orderIdId: '',
      myDetail: '',
      scanCode: true,
      group_activity_initial_uuid: '',
      group_activity_initial_finish: false,
      onekeyAttend: false,
      host: __WEBPACK_IMPORTED_MODULE_9__config__["a" /* default */].host,
      group_activity_order_uuid: '',
      delta: 3,
      oldUser: false,
      group_activities_uuid: '',
      invite: true

    };
  },

  components: {
    Card: __WEBPACK_IMPORTED_MODULE_3__components_groupCard__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_6__components_navbar__["a" /* default */],
    OldUser: __WEBPACK_IMPORTED_MODULE_4__components_oldUser__["a" /* default */]

  },

  methods: {
    pay: function pay() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //        let uuid =
                //        const paydata = this.$store.dispatch('group_pay',uuid)
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

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    attendGroup: function attendGroup() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var that, uuid, auth_code, uuid_authCode, group_activity_orders, group_activity_order_uuid, join_res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //    一键参与 扫码或者点击分享进入
                that = _this2;
                uuid = that.group_activity_initial_uuid;
                auth_code = wx.getStorageSync('auth_code');
                uuid_authCode = [uuid, auth_code];
                //         参与拼团

                _context2.next = 6;
                return that.$store.dispatch('attendGroupActivities', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

              case 6:
                group_activity_orders = _context2.sent;

                console.log(group_activity_orders);

                if (!group_activity_orders) {
                  _context2.next = 17;
                  break;
                }

                group_activity_order_uuid = group_activity_orders.group_activity_order.uuid;

                that.group_activity_order_uuid = group_activity_order_uuid;
                // 支付参与拼团的订单
                _context2.next = 13;
                return that.$store.dispatch('group_pay', group_activity_order_uuid);

              case 13:
                join_res = _context2.sent;


                wx.requestPayment({
                  'timeStamp': String(join_res.time_stamp),
                  'nonceStr': String(join_res.nonce_str),
                  'package': String(join_res.package),
                  'signType': String(join_res.sign_type),
                  'paySign': String(join_res.pay_sign),
                  'success': function success(res) {
                    console.log(res);
                    var user = wx.getStorageSync('userinfo');

                    var currentUser = that.order_info.users;
                    var this_user = {
                      uuid: '',
                      nick_name: user.nick_name,
                      avatar_url: user.avatar_url,
                      is_initiator: false
                    };
                    that.order_info.users.concat(this_user);

                    that.onekeyAttend = false;
                  },
                  'fail': function fail(res) {
                    console.log(res);
                    console.log('支付错误');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_util__["b" /* showModal */])('支付失败', '请尝试重新支付');
                  }
                });
                _context2.next = 18;
                break;

              case 17:
                that.oldUser = true;

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    oldUserValue: function oldUserValue(_oldUserValue) {
      this.oldUser = _oldUserValue;
    },
    getlastTime: function getlastTime() {
      var that = this;
      //        console.log('倒计时')
      var startTime = that.order_info.initial_time_timestamp;

      var currentTime = new Date().getTime();
      var endTime = that.order_info.end_time_timestamp;

      var allTime = 86400000; // 倒计时24小时

      var leftTime = endTime - currentTime; //<864000

      var day = Math.floor(leftTime / 1000 / 60 / 60 / 24); // 剩余天数

      var hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);

      var minutes = Math.floor(leftTime / 1000 / 60 % 60);

      var seconds = Math.floor(leftTime / 1000 % 60);

      that.time.day = day;
      that.time.hours = hours;
      that.time.minutes = minutes;
      that.time.seconds = seconds;

      var param = setTimeout(that.getlastTime, 1000);
      if (leftTime <= 0) {
        //          showModal('拼团结束', '活动结束了')
        leftTime = 0;
        clearTimeout(param);
      }
    },
    share: function share() {
      var that = this;
      that.showshare = !that.showshare;
      //
    },

    setModalStatus: function setModalStatus(e) {
      console.log(this.showModal);
      var that = this;
      console.log('设置显示状态，1显示0不显示', e.currentTarget.dataset.status);
      console.log(e.currentTarget.dataset);

      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'linear',
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
      }, 200);
    },

    shareMenu: function shareMenu(e) {

      this.showBox = !this.showBox;
    },
    getImg: function getImg() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var that, uuid, page, data, res, wxCodeImg, titleContent, title_left;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this3;
                uuid = that.group_activity_initial_uuid;
                page = 'pages/groupPj/order/main';
                data = [uuid, page];
                _context3.next = 6;
                return _this3.$store.dispatch('wxCode', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, data));

              case 6:
                res = _context3.sent;
                wxCodeImg = res.wxa_qrcode_url;
                //        if(wxCodeImg)

                titleContent = that.order_info.group_activity.title;
                title_left = 25;

                if (titleContent.length > 12) {
                  titleContent = titleContent.substring(0, 11);
                } else {
                  titleContent = titleContent;
                }
                _this3.painting = {
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
                    url: that.order_info.group_activity.title_image_url, // 变化图片
                    top: 0,
                    left: 0,
                    width: 375,
                    height: 173
                  },
                  //            绘制的背景图

                  // http://p15hnzxrp.bkt.clouddn.com/wechatapp2.5.jpg
                  // 文本表达
                  {
                    type: 'text',
                    content: titleContent, // 变量的名称
                    fontSize: 27.6,
                    lineHeight: 27.6,
                    color: '#454553',
                    textAlign: 'left',
                    top: 217.35,
                    left: title_left,
                    width: 328.9,
                    MaxLineNumber: 2, // 最大两行 超出...
                    breakWord: true, // 换行
                    bolder: true // 加粗
                  },
                  //            {
                  //              type:'image',
                  //              url:'http://pbmrxkahq.bkt.clouddn.com/addPrice.png',
                  //
                  //              top:255,
                  //              left:22.5,
                  //              width:60
                  //            },
                  {
                    type: 'text',
                    content: that.order_info.group_activity.group_type, // 变量的价格
                    fontSize: 18.4,
                    color: '#f83713',
                    textAlign: 'left',
                    top: 255,
                    left: 25,
                    bolder: false
                  }, {
                    type: 'text',
                    content: '¥',
                    fontSize: 18.4,
                    color: '#f83713',
                    textAlign: 'left',
                    top: 257,
                    left: 90 // 根据价格字符个数 变化

                  }, {
                    type: 'text',
                    content: that.order_info.group_activity.current_price, // 根据价格字符个数 变化
                    fontSize: 18.4,
                    color: '#f83713',
                    textAlign: 'left',
                    top: 257,
                    left: 105 // 根据价格字符个数 变化
                    //              textDecoration: 'line-through'
                  }, {
                    type: 'text',
                    content: '拼团价', // 根据价格字符个数 变化
                    fontSize: 14,
                    color: '#f83713',
                    textAlign: 'left',
                    top: 261,
                    left: 150 // 根据价格字符个数 变化
                    //              textDecoration: 'line-through'
                  }, {
                    type: 'text',
                    content: '¥' + that.order_info.group_activity.original_price, // 根据价格字符个数 变化
                    fontSize: 11.5,
                    color: '#999999',
                    textAlign: 'left',
                    top: 265,
                    left: 195, // 根据价格字符个数 变化
                    textDecoration: 'line-through'
                  }, {
                    type: 'text',
                    content: '参团仅限新用户哦~',
                    fontSize: 18.4,
                    color: '#4a4a4a',
                    textAlign: 'left',
                    top: 300,
                    left: 25,
                    lineHeight: 18.4,
                    MaxLineNumber: 2,
                    breakWord: true,
                    width: 157
                  }, {
                    type: 'image',
                    url: wxCodeImg,
                    top: 345 * 1.15,
                    left: 121 * 1.15,
                    width: 84 * 1.15,
                    height: 84 * 1.15
                  }, {
                    type: 'text',
                    content: '长按识别，参与拼团',
                    fontSize: 16.1,
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
                wx.setStorageSync('painting', _this3.painting);
                wx.navigateTo({
                  url: '/pages/poster/main'
                });

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    fillAddress: function fillAddress(e) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var that, data, uuid, order_status, form_id, res, auth_code, address, address_res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('领奖');
                that = _this4;
                data = [];
                uuid = that.order_info.group_activity_order.uuid; //拼团订单

                order_status = that.order_info.status; // success grouping init failed

                form_id = e.mp.detail.formId;

                if (!(order_status === 'success')) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 9;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["b" /* chooseAddress */])();

              case 9:
                res = _context4.sent;
                auth_code = wx.getStorageSync('auth_code');
                address = {
                  name: res.name, // 名字
                  postal_code: res.postalCode, // 邮编
                  tel_phone: res.telNumber, // 电话
                  province: res.provinceName, // 省
                  city: res.cityName, // 市
                  district: res.countyName, // 区
                  detail: res.detailInfo // 详细

                };


                data = [uuid, auth_code, address];
                _context4.next = 15;
                return that.$store.dispatch('groupAddress', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, data));

              case 15:
                address_res = _context4.sent;

                wx.navigateTo({
                  url: '/pages/user/myGroup/myGroupDetail/main?uuid=' + uuid
                });
                _context4.next = 20;
                break;

              case 19:
                console.log('order_status 不是success');

              case 20:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    createGroup: function createGroup() {
      // 重新开团
      wx.switchTab({
        url: '/pages/home/main'
      });
    },
    getOrderData: function getOrderData() {
      //获取页面数据函数

      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    var _this6 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
      var that, attend, group_activity_initial_uuid, group_activities_uuid, currentuser_code, uuid_authCode, orderData, order_user, left_user, group_user_require, left_num, i;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              wx.showLoading();
              that = _this6;
              attend = options.attend;
              group_activity_initial_uuid = options.group_activity_initial_uuid; // 发起拼团活动返回订单uuid

              group_activities_uuid = options.group_activities_uuid;


              that.group_activities_uuid = group_activities_uuid;
              console.log(that.group_activities_uuid);

              that.group_activity_initial_uuid = group_activity_initial_uuid;

              currentuser_code = wx.getStorageSync('auth_code');
              uuid_authCode = [group_activity_initial_uuid, currentuser_code];
              _context6.next = 12;
              return that.$store.dispatch('groupActivitiesInit', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

            case 12:
              orderData = _context6.sent;

              wx.hideLoading();

              order_user = orderData.group_activity_initial.users; // []

              left_user = orderData.group_activity_initial.users_left; // number

              group_user_require = orderData.group_activity_initial.group_user_require;
              left_num = group_user_require - order_user.length; //还需的「

              console.log(group_user_require);
              console.log(left_num);
              for (i = 0; i < left_num; i++) {
                order_user.push({});
              }

              orderData.group_activity_initial.users = order_user;

              if (orderData.group_activity_initial.is_initiator === false && orderData.group_activity_initial.status_display === '正在拼团') {
                that.onekeyAttend = true;
              } else if (orderData.group_activity_initial.is_initiator === true && orderData.group_activity_initial.status_display === '正在拼团') {
                that.onekeyAttend = false;
              }

              that.order_info = orderData.group_activity_initial;

              that.getlastTime();

            case 25:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6);
    }))();
  },
  mounted: function mounted() {
    var _this7 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7);
    }))();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    var uuid = that.group_activity_initial_uuid;

    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: '耽误你10秒，帮我看看这个东西好不好',
      path: '/pages/groupPj/order/main?group_activity_initial_uuid=' + uuid
      //        imageUrl: that.order_info.group_activity.title_image_url
      // 参与拼团的页面
    };
  }
});

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_vue2_countdown_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_eeaf0e42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_vue2_countdown_vue__ = __webpack_require__(227);
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

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Navbar', {
    attrs: {
      "navbar_title": _vm.navbar_title,
      "delta": _vm.delta,
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.oldUser) ? _c('OldUser', {
    attrs: {
      "group_activities_uuid": _vm.group_activities_uuid,
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "oldUserValue": _vm.oldUserValue
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "pj-info"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('img', {
    attrs: {
      "src": _vm.order_info.group_activity.title_image_url,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('h2', [_c('div', {
    staticClass: "group_mark"
  }, [_vm._v(_vm._s(_vm.order_info.group_activity.group_type))]), _vm._v("\n          " + _vm._s(_vm.order_info.group_activity.title) + "\n        ")]), _vm._v(" "), _c('p', [_c('span', [_vm._v("¥ " + _vm._s(_vm.order_info.group_activity.current_price))]), (_vm.order_info.group_activity.original_price) ? _c('span', [_vm._v("¥" + _vm._s(_vm.order_info.group_activity.original_price))]) : _vm._e()])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "detail-order"
  }, [(_vm.order_info.status == 'grouping') ? _c('div', {
    staticClass: "grouping"
  }, [_c('h2', [_c('span', [_vm._v(_vm._s(_vm.order_info.status_display))])]), _vm._v(" "), _c('div', {
    staticClass: "order-info"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("还差"), _c('span', [_vm._v(_vm._s(_vm.order_info.users_left))]), _vm._v("人参团,\n          "), _c('span', [_vm._v(_vm._s(_vm.time.hours))]), _vm._v("时\n          "), _c('span', [_vm._v(_vm._s(_vm.time.minutes))]), _vm._v("分\n          "), _c('span', [_vm._v(_vm._s(_vm.time.seconds))]), _vm._v("秒后结束\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "user"
  }, _vm._l((_vm.order_info.users), function(item, index) {
    return _c('div', {
      key: item.uuid,
      staticClass: "pic"
    }, [_c('img', {
      attrs: {
        "src": item.avatar_url,
        "alt": ""
      }
    }), (item.is_initiator) ? _c('span', {
      staticClass: "mark"
    }, [_vm._v("团长")]) : _vm._e()])
  }))], 1) : _vm._e(), _vm._v(" "), (_vm.order_info.status == 'failed') ? _c('div', {
    staticClass: "groupFailed"
  }, [_c('h2', [_c('span', [_vm._v(_vm._s('来晚一步了，拼团已结束'))])]), _vm._v(" "), _c('div', {
    staticClass: "user"
  }, _vm._l((_vm.order_info.users), function(item, index) {
    return _c('div', {
      key: item.uuid,
      staticClass: "pic"
    }, [_c('img', {
      attrs: {
        "src": item.avatar_url,
        "alt": ""
      }
    }), (item.is_initiator) ? _c('span', {
      staticClass: "mark"
    }, [_vm._v("团长")]) : _vm._e()])
  }))], 1) : _vm._e(), _vm._v(" "), (_vm.order_info.status == 'success') ? _c('div', {
    staticClass: "groupSuccess"
  }, [_c('h2', [_c('span', [_vm._v(_vm._s(_vm.order_info.status_display))])]), _vm._v(" "), _c('div', {
    staticClass: "user"
  }, _vm._l((_vm.order_info.users), function(item, index) {
    return _c('div', {
      key: item.uuid,
      staticClass: "pic"
    }, [_c('img', {
      attrs: {
        "src": item.avatar_url,
        "alt": ""
      }
    }), (item.is_initiator) ? _c('span', {
      staticClass: "mark"
    }, [_vm._v("团长")]) : _vm._e()])
  }))], 1) : _vm._e(), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '2'
    },
    on: {
      "submit": _vm.fillAddress
    }
  }, [_c('button', {
    staticClass: "form_button",
    attrs: {
      "formType": "submit"
    }
  }, [(_vm.order_info.status == 'success') ? _c('div', {
    staticClass: "group_res",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.fillAddress
    }
  }, [_vm._v("去提货")]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "group"
  }, [_c('h2', {
    staticClass: "group-game"
  }, [_vm._v("拼团玩法")]), _vm._v(" "), _c('p', {
    staticClass: "step1"
  }, [_vm._v("付款后邀请好友参团")]), _vm._v(" "), _c('p', {
    staticClass: "step2"
  }, [_vm._v("达到拼团人数，顺利开团")]), _vm._v(" "), _c('p', {
    staticClass: "step2"
  }, [_vm._v("若24小时内拼团不成功，全额退款")])], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "pjDetail"
  }, [_c('p', {
    staticClass: "detailTitle"
  }, [_vm._v("商品详情")]), _vm._v(" "), _c('rich-text', {
    staticClass: "pjdetail",
    attrs: {
      "nodes": _vm.order_info.group_activity.product.detail,
      "mpcomid": '2'
    }
  })], 1)], 1), _vm._v(" "), (_vm.order_info.status_display === '正在拼团') ? _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '3'
    },
    on: {
      "submit": _vm.shareMenu
    }
  }, [_c('button', {
    staticClass: "form_button",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "btn open_btn",
    attrs: {
      "data-status": "1"
    }
  }, [_c('span', [_vm._v("邀请好友一起享用")])])])], 1) : _vm._e(), _vm._v(" "), (_vm.order_info.status_display === '拼团成功') ? _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '5'
    },
    on: {
      "submit": _vm.createGroup
    }
  }, [_c('button', {
    staticClass: "form_button",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "btn open_btn",
    attrs: {
      "data-status": "1",
      "eventid": '4'
    },
    on: {
      "click": _vm.createGroup
    }
  }, [_c('span', [_vm._v("重新开团")])])])], 1) : _vm._e(), _vm._v(" "), (_vm.onekeyAttend) ? _c('div', {
    staticClass: "pay"
  }, [_c('div', {
    staticClass: "price"
  }, [_vm._v("\n      ¥" + _vm._s(_vm.order_info.group_activity.current_price)), (_vm.order_info.group_activity.product.num) ? _c('span', [_vm._v("还剩" + _vm._s(_vm.order_info.group_activity.product.num) + "份")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "join-group",
    attrs: {
      "data-uuid": _vm.order_info.uuid,
      "eventid": '6'
    },
    on: {
      "click": _vm.attendGroup
    }
  }, [_vm._v("一键参与")])]) : _vm._e(), _vm._v(" "), (_vm.showBox) ? _c('div', {
    staticClass: "mask",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.shareMenu
    }
  }, [(_vm.showBox) ? _c('div', {
    staticClass: "meunBox"
  }, [_c('img', {
    staticClass: "x",
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/close.png",
      "alt": "",
      "eventid": '7'
    },
    on: {
      "click": _vm.shareMenu
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "friend",
    attrs: {
      "open-type": "share"
    }
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/wechatF.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "createImg",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.getImg
    }
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/wechatimg.png",
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
      "eventid": '9'
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

/***/ 227:
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b3a874ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(223);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(188)
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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(66);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false
  }
});

/***/ }),

/***/ 91:
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

},[81]);
//# sourceMappingURL=main.js.map