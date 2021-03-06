global.webpackJsonp([3],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_diago__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_wx__ = __webpack_require__(10);



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
      prize: '抽奖',
      open: false,
      uuid: '',
      prjInfo: {
        name: '',
        id: ''
      },
      boon: {},
      title: '',
      sesson_url: 'http://pbmrxkahq.bkt.clouddn.com/anodor.png',
      showBox: false,
      navbar_title: '',
      haveOpen: '未开奖',
      prizeStyle: 'prize',
      init_rewarded_users: [],
      showGetMoreBtn: false,
      boon_resText: '',
      boon_resImg: '',
      boon_rewarded_users: []

    };
  },

  components: {
    Diago: __WEBPACK_IMPORTED_MODULE_3__components_diago__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_4__components_navbar__["a" /* default */]
  },

  methods: {
    // 参加福利 即抽奖操作
    attendBoon: function attendBoon() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, currentuser_code, boonID, auth_code, uuid_authCode, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                currentuser_code = wx.getStorageSync('auth_code');

                //        let attendBoon_data = await post(`/v1/boons/${that.uuid}/attend?auth_code=${currentuser_code}`)
                //
                //        console.log(attendBoon_data)

                boonID = that.boon.uuid;
                auth_code = currentuser_code;
                uuid_authCode = [boonID, auth_code];
                _context.next = 7;
                return that.$store.dispatch('attendBoon', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, uuid_authCode));

              case 7:
                res = _context.sent;

                console.log(res);
                that.prize = '待开奖';
                that.prizeStyle = 'waiting';
                //        if(res.indexOf('抱歉')  !== -1){
                //          console.log('抽奖失败' + res)
                //          that.oldUser = true
                //
                //        }else {
                //          that.prize = '待开奖'
                //          that.prizeStyle = 'waiting'
                //
                //        }

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    openDiago: function openDiago() {
      var that = this;
      that.open = true;
    },
    childByValue: function childByValue(childValue) {
      this.open = childValue;
      console.log(this.open);
    },


    // url: /api/v1/boons/:uuid/attend

    getBoons: function getBoons() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var auth_code, prjInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                auth_code = wx.getStorageSync('auth_code');
                _context2.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* get */])('/v1/boons/' + _this2.uuid + '?auth_code=' + auth_code);

              case 3:
                prjInfo = _context2.sent;

                console.log(prjInfo);

                _this2.boon = prjInfo; // 福利详情

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    shareMenu: function shareMenu() {
      console.log(this.showBox);
      this.showBox = !this.showBox;
    },
    getImg: function getImg() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var that, uuid, page, data, res, wxCodeImg, titleContent, num_of_participants, num_left, painting;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('绘制图片');
                that = _this3;
                uuid = that.uuid;
                page = 'pages/project/main';
                data = [uuid, page];
                _context3.next = 7;
                return _this3.$store.dispatch('wxCodeBoon', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data));

              case 7:
                res = _context3.sent;
                wxCodeImg = res.wxa_qrcode_url;
                titleContent = that.boon.title;


                if (titleContent.length > 13) {
                  titleContent = titleContent.substring(0, 12);
                } else {
                  titleContent = titleContent;
                }

                num_of_participants = String(that.boon.num_of_participants);
                num_left = 63;

                if (num_of_participants.length >= 3) {
                  num_left = 63;
                } else if (num_of_participants.length === 2) {
                  num_left = 72.2;
                } else if (num_of_participants.length === 1) {
                  num_left = 71.4;
                }

                painting = {
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
                    url: that.boon.title_image_url, // 变化图片
                    top: 0,
                    left: 0,
                    width: 375,
                    height: 173
                  },
                  // 文本表达
                  {
                    type: 'text',
                    content: titleContent, // 变量的名称
                    fontSize: 27.6,
                    lineHeight: 27.6,
                    color: '#454553',
                    textAlign: 'left',
                    top: 217.35,
                    left: 25,
                    width: 244.95,
                    MaxLineNumber: 2, // 最大两行 超出...
                    breakWord: true, // 换行
                    bolder: true // 加粗
                  }, {
                    type: 'text',
                    content: that.boon.lottery_conditions, // 变量的价格
                    fontSize: 18.4,
                    color: '#4a4a4a',
                    textAlign: 'left',
                    top: 266.45,
                    left: 25

                  }, {
                    type: 'text',
                    content: '已有',
                    fontSize: 18.4,
                    color: '#4a4a4a',
                    textAlign: 'left',
                    top: 303.2,
                    left: 25 // 根据价格字符个数 变化

                  }, {
                    type: 'text',
                    content: that.boon.num_of_participants, // 根据参与实际人数 变化
                    fontSize: 18.4,
                    color: '#ff7f4f',
                    textAlign: 'left',
                    top: 303.2,
                    left: num_left //
                  }, {
                    type: 'text',
                    content: '人参与',
                    fontSize: 18.4,
                    color: '#4a4a4a',
                    textAlign: 'left',
                    top: 303.2,
                    left: 90,
                    lineHeight: 18.4,
                    MaxLineNumber: 2,
                    breakWord: true
                  }, {
                    type: 'image',
                    url: wxCodeImg,
                    top: 396.75,
                    left: 139.15,
                    width: 96.6,
                    height: 96.6
                  }, {
                    type: 'text',
                    content: '长按识别小程序码参与抽奖',
                    fontSize: 16.1,
                    color: '#4a4a4a',
                    textAlign: 'left',
                    top: 504.85,
                    left: 92,
                    lineHeight: 16.1,
                    MaxLineNumber: 2,
                    breakWord: true,
                    width: 193.2
                  }]
                };

                wx.setStorageSync('painting', painting);
                wx.navigateTo({ url: '/pages/poster/main' });

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    againPrice: function againPrice() {
      wx.switchTab({
        url: '/pages/home/main'
      });
    },
    chooseAddress: function chooseAddress() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var that, data, uuid, boon_status, res, auth_code, address, address_res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('领奖');
                that = _this4;
                data = [];
                uuid = that.boon.boon_order.uuid; // 抽奖订单号

                boon_status = that.boon.boon_order.status;

                console.log(boon_status);

                if (!(boon_status === 'received')) {
                  _context4.next = 10;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/user/myboonList/myBoon/main?uuid=' + uuid
                });
                _context4.next = 21;
                break;

              case 10:
                console.log('还没有领过奖 添加地址');
                _context4.next = 13;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_wx__["b" /* chooseAddress */])();

              case 13:
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
                _context4.next = 19;
                return that.$store.dispatch('boonAddress', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data));

              case 19:
                address_res = _context4.sent;

                wx.navigateTo({
                  url: '/pages/user/myboonList/myBoon/main?uuid=' + uuid
                });

              case 21:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    getMoreUser: function getMoreUser() {
      var that = this;
      console.log('加载更多中奖用户');
      console.log(that.boon_rewarded_users);
      that.init_rewarded_users = that.init_rewarded_users.concat(that.boon_rewarded_users);
      that.showGetMoreBtn = false;
    }
  },

  onShow: function onShow() {
    this.open = false;
  },
  onLoad: function onLoad(options) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
      var that, form_id, currentuser_code, this_user, uuid_authCode, boonData, init_rewarded_users, _init_rewarded_users, isIphoneX;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              that = _this5;

              that.uuid = options.boons_uuid; // 获取上一页传递的唯一标准uuid
              that.navbar_title = that.$root.$mp.query.title; // 获取上一页传递的福利名称 做navbar的标题
              form_id = options.form_id;
              currentuser_code = wx.getStorageSync('auth_code');
              this_user = wx.getStorageSync('userinfo');

              console.log(this_user);
              uuid_authCode = [that.uuid, currentuser_code, form_id];
              // 根据获得uuid 查询数据出来
              //      that.getBoons()

              _context5.next = 10;
              return that.$store.dispatch('getBoons', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, uuid_authCode));

            case 10:
              boonData = _context5.sent;

              that.boon = boonData.boon;
              //      wx.hideLoading()

              init_rewarded_users = [];

              console.log(boonData.boon.rewarded_users);
              that.boon_rewarded_users = boonData.boon.rewarded_users;
              if (boonData.boon.rewarded_users.length > 12) {
                that.showGetMoreBtn = true;
                init_rewarded_users = boonData.boon.rewarded_users.splice(0, 12);
                that.init_rewarded_users = init_rewarded_users;
              } else {
                _init_rewarded_users = boonData.boon.rewarded_users;


                that.init_rewarded_users = _init_rewarded_users;
              }
              console.log(that.init_rewarded_users);

              if (that.boon.participate_status === false && that.boon.status === 'rewarded') {
                //未参加 已开奖
                that.boon_resText = '你来晚了';
                that.boon_resImg = 'http://pbmrxkahq.bkt.clouddn.com/%E6%9C%AA%E4%B8%AD%E5%A5%96.png'; //未参加 未中奖
              } else if (that.boon.participate_status === true && that.boon.boon_order.status === 'lose' && that.boon.status === 'rewarded') {
                that.boon_resText = '很遗憾，你本次没有中奖～';
                that.boon_resImg = 'http://pbmrxkahq.bkt.clouddn.com/%E6%9C%AA%E4%B8%AD%E5%A5%96.png'; //未参加 未中奖

              } else if (that.boon.participate_status === true && that.boon.boon_order.status !== 'lose' && that.boon.status === 'rewarded') {
                that.boon_resText = '恭喜，您中奖了';
                that.boon_resImg = 'http://pbmrxkahq.bkt.clouddn.com/winning.png'; //开奖 中奖
              }

              isIphoneX = that.$store.state.globalData.isIphoneX;

              that.isIphoneX = isIphoneX;

            case 20:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  },
  mounted: function mounted() {
    var phoneModel = wx.getStorageSync('phoneModel');
    console.log(phoneModel);
    if (phoneModel === 'iPhone X') {
      console.log('iPhone X 底部拉高');
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    var user = wx.getStorageSync('allUserinfo');
    console.log(user);
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: user.nick_name + "邀请你参与抽奖",
      path: '/pages/project/main?boons_uuid=' + that.uuid
      //        imageUrl: 'http://pbmrxkahq.bkt.clouddn.com/cover.png'
    };
  }
});

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_diago_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_076c7fd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_diago_vue__ = __webpack_require__(198);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-076c7fd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_diago_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_076c7fd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_diago_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/diago.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] diago.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-076c7fd8", Component.options)
  } else {
    hotAPI.reload("data-v-076c7fd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "mark",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.closeChild
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "prize-info"
  }, [_c('p', {
    staticClass: "text"
  }, [_vm._v("账号为研究员账号的用户抽奖概率是普通用户的2倍。")]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("成为一名合格的没事干研究员，需要你爱吃爱研究并乐于分享，因此我们会有一个小小的测验来筛选优质成员。")]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("加吃货群了解情况吧。")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "contact",
      "eventid": '1'
    },
    on: {
      "click": _vm.cancleDiago
    }
  }, [_vm._v("去回复\"1\"，和吃货一起玩")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-076c7fd8", esExports)
  }
}

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Navbar', {
    attrs: {
      "navbar_title": '抽奖详情',
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pic-info"
  }, [_c('div', {
    staticClass: "pic"
  }, [_c('div', {
    staticClass: "bg",
    style: ({
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + _vm.boon.title_image_url + ')',
      backgroundSize: 'cover',
      backgroundPosition: '50%'
    })
  })]), _vm._v(" "), _c('div', {
    staticClass: "prj-info"
  }, [_c('p', {
    staticClass: "prj-name"
  }, [_vm._v(_vm._s(_vm.boon.title))]), _vm._v(" "), _c('p', {
    staticClass: "prj-little-info"
  }, [_vm._v(_vm._s(_vm.boon.lottery_conditions) + " "), _c('span', {
    staticClass: "hasJoined"
  }, [_vm._v("已有"), _c('span', {
    staticStyle: {
      "color": "#ff7f4f"
    }
  }, [_vm._v(" " + _vm._s(_vm.boon.num_of_participants) + " ")]), _vm._v("人参与")])])], 1)]), _vm._v(" "), (_vm.boon.sponsor) ? _c('div', {
    staticClass: "sponsorsBox"
  }, [_c('div', {
    staticClass: "sponsors"
  }, [_c('p', {
    staticClass: "sponsors-info"
  }, [_vm._v("赞助商")]), _vm._v(" "), _c('navigator', {
    staticClass: "switchGoAnchor",
    attrs: {
      "target": "miniProgram",
      "open-type": "navigate",
      "app-id": _vm.boon.sponsor.app_id,
      "path": _vm.boon.sponsor.app_path,
      "extra-data": "",
      "version": "release"
    }
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.boon.sponsor.avatar_url,
      "alt": ""
    }
  }), _vm._v("\n        " + _vm._s(_vm.boon.sponsor.description) + "\n        "), (_vm.boon.sponsor.app_id) ? _c('img', {
    staticClass: "link_ico",
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/link.png",
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.boon.sponsor.app_id) ? _c('img', {
    staticClass: "right_ico",
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/right.png",
      "alt": ""
    }
  }) : _vm._e()])], 1)]) : _vm._e(), _vm._v(" "), (_vm.boon.status === 'published') ? _c('div', {
    staticClass: "process-prize"
  }, [_c('h2', [_vm._v("抽奖玩法")]), _vm._v(" "), _c('div', {
    staticClass: "steps"
  }, [_c('p', {
    staticClass: "step1"
  }, [_vm._v("1.点击抽奖，等待开奖")]), _vm._v(" "), _c('p', {
    staticClass: "step2"
  }, [_vm._v("2.研究员抽奖概率是普通用户的两倍，欢迎加入")])], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('h2', [_vm._v("商品详情")]), _vm._v(" "), _c('div', {
    staticClass: "boonDetail"
  }, [_c('rich-text', {
    attrs: {
      "nodes": _vm.boon.detial,
      "mpcomid": '1'
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.boon.status == 'published') ? _c('div', {
    staticClass: "btn1"
  }, [(_vm.boon.participate_status == true) ? _c('button', {
    staticClass: "waiting"
  }, [_vm._v("待开奖")]) : _vm._e(), _vm._v(" "), (_vm.boon.participate_status == false) ? _c('button', {
    class: _vm.prizeStyle,
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.attendBoon
    }
  }, [_vm._v(_vm._s(_vm.prize))]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.boon.status == 'rewarded') ? _c('div', {
    staticClass: "openPrize"
  }, [_c('div', {
    staticClass: "pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.boon_resImg,
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "boon_order_text"
  }, [_vm._v(_vm._s(_vm.boon_resText))])], 1), _vm._v(" "), (_vm.boon.participate_status === true) ? _c('div', [(_vm.boon.boon_order.status === 'win') ? _c('div', {
    staticClass: "prizeWindow",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.chooseAddress
    }
  }, [_vm._v("去领奖")]) : _vm._e(), _vm._v(" "), (_vm.boon.boon_order.status === 'received') ? _c('div', {
    staticClass: "prizeWindowe",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.chooseAddress
    }
  }, [_vm._v("已领奖")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "userBox"
  }, [_vm._l((_vm.init_rewarded_users), function(userImg, index) {
    return _c('div', {
      staticClass: "user"
    }, [_c('img', {
      attrs: {
        "src": userImg.avatar_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "nickname"
    }, [_vm._v(_vm._s(userImg.nick_name))])])
  }), _vm._v(" "), (_vm.showGetMoreBtn) ? _c('div', {
    staticClass: "getall",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.getMoreUser
    }
  }, [_c('span', [_vm._v("加载全部")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9Aicon.png",
      "alt": ""
    }
  })]) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), (_vm.boon.status == 'published') ? _c('div', {
    staticClass: "btn-box"
  }, [(_vm.open) ? _c('Diago', {
    attrs: {
      "eventid": '4',
      "mpcomid": '2'
    },
    on: {
      "childByValue": _vm.childByValue
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "add-prize"
  }, [_c('div', {
    staticClass: "btn2",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.shareMenu
    }
  }, [_vm._v("加速开奖")]), _vm._v(" "), _c('div', {
    staticClass: "btn3",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.openDiago
    }
  }, [_vm._v("成为研究员概率翻倍")])]), _vm._v(" "), (_vm.showBox) ? _c('div', {
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
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("分享加速抽奖")]), _vm._v(" "), _c('button', {
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
  }, [_vm._v("生成分享图片")])], 1) : _vm._e()]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.boon.status == 'rewarded') ? _c('div', {
    staticClass: "btn-box"
  }, [_c('div', {
    staticClass: "add-prize"
  }, [_c('div', {
    staticClass: "btn4",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.againPrice
    }
  }, [_vm._v("再去抽一个")])])]) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nameList"
  }, [_c('div', {
    staticClass: "line1"
  }), _vm._v(" "), _c('div', {
    staticClass: "line2"
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("中奖者名单")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-36875564", esExports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_prj_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_36875564_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_prj_vue__ = __webpack_require__(205);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(172)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-36875564"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_prj_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_36875564_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_prj_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/project/prj.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] prj.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36875564", Component.options)
  } else {
    hotAPI.reload("data-v-36875564", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prj__ = __webpack_require__(68);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__prj__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '酸奶众测福利领取',
      'navigationBarTextStyle': 'light',
      'navigationStyle': 'default'
    }

  }
});

/***/ }),

/***/ 95:
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      showChild: 'true'
    };
  },

  methods: {
    cancleDiago: function cancleDiago() {
      var open = false;
      this.$emit('info', open);
    },
    closeChild: function closeChild() {
      this.$emit('childByValue', false);
    }
  }

});

/***/ })

},[84]);
//# sourceMappingURL=main.js.map