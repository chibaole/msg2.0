global.webpackJsonp([2],{

/***/ 100:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    isLeapYear: function isLeapYear() {
      var year = new Date().getFullYear();
      if (year % 400 === 0) {
        return true;
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
      } else {
        return false;
      }
    },
    getDayOfYear: function getDayOfYear() {
      return this.isLeapYear() ? 366 : 365;
    }
  },
  computed: {
    year: function year() {
      return new Date().getFullYear();
    },
    days: function days() {
      var start = new Date();
      start.setMonth(0);
      start.setDate(1);
      // start就是今年第一天
      // 今天的时间戳 减去今年第一天的时间戳
      var offset = new Date().getTime() - start.getTime();
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1;
    },
    percent: function percent() {
      return (this.days * 100 / this.getDayOfYear()).toFixed(1);
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_YearProgress__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_wx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar__ = __webpack_require__(6);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    YearProgress: __WEBPACK_IMPORTED_MODULE_4__components_YearProgress__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_8__components_navbar__["a" /* default */]
  },
  data: function data() {
    return {
      userinfo: {
        avatar_url: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nick_name: '没事干研究院',

        level_display: '',
        is_authorized: true
      },
      nologin: true,
      top: 68,
      login_show: true
    };
  },

  methods: {
    goMygroup: function goMygroup(e) {
      var that = this;
      console.log(e);
      var form_id = e.mp.detail.formId;
      console.log(form_id);
      wx.navigateTo({
        url: '/pages/user/myGroup/main'
      });
    },
    myBoon: function myBoon(e) {
      var that = this;
      console.log(e);
      var form_id = e.mp.detail.formId;
      console.log(form_id);
      wx.navigateTo({
        url: '/pages/user/myboonList/main'
      });
    },
    onGotUserInfo: function onGotUserInfo(e) {
      console.log(e);
    },
    getUserInfo1: function getUserInfo1() {
      var that = this;
      console.log('click事件首先触发');
      if (wx.canIUse('button.open-type.getUserInfo')) {
        // 用户版本可用
      } else {
        console.log('请升级微信版本');
      }
    },
    bindGetUserInfo: function bindGetUserInfo(e) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, sesssion_res, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                _context.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["a" /* checkSession */])();

              case 3:
                sesssion_res = _context.sent;

                console.log(sesssion_res.errMsg);

                if (!(sesssion_res.errMsg === 'checkSession:ok')) {
                  _context.next = 16;
                  break;
                }

                if (!e.mp.detail.rawData) {
                  _context.next = 13;
                  break;
                }

                // 用户按了允许授权按钮
                data = [e.mp.detail.encryptedData, e.mp.detail.iv, e.mp.detail.signature, e.mp.detail.rawData];
                _context.next = 10;
                return that.$store.dispatch('saveInfo', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data));

              case 10:
                that.login_show = false;
                _context.next = 14;
                break;

              case 13:
                // 用户按了拒绝按钮
                console.log('用户按了拒绝按钮');

              case 14:
                _context.next = 21;
                break;

              case 16:
                console.log('session 过期');
                _context.next = 19;
                return that.$store.dispatch('signup');

              case 19:
                that.login_show = false;
                console.log('重新登录成功');

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  onShow: function onShow() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var that, userinfo, user_profile;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              that = _this2;
              userinfo = wx.getStorageSync('userinfo');

              if (userinfo) {
                that.userinfo = userinfo;
                that.login_show = false;
                console.log(userinfo);
              } else {
                that.login_show = true;
              }
              _context2.next = 5;
              return that.$store.dispatch('user_info');

            case 5:
              user_profile = _context2.sent;

              that.userinfo.level_display = user_profile.user.level_display;

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  onLoad: function onLoad() {
    var vm = this;
    wx.getSystemInfo({
      success: function success(res) {
        var totalTopHeight = 68;
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88;
          console.log('iphonex');
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64;
          console.log('iphone');
        }
        var statusBarHeight = res.statusBarHeight;
        var titleBarHeight = totalTopHeight - res.statusBarHeight; // 44
        console.log(statusBarHeight, titleBarHeight);
        vm.statusBarHeight = statusBarHeight;
        vm.titleBarHeight = titleBarHeight;
        vm.top = statusBarHeight + titleBarHeight;
      },
      failure: function failure() {
        console.log('fail');
        vm.globalData.statusBarHeight = 0;
        vm.globalData.titleBarHeight = 0;
      }
    });
  }
});

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3052ecbd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__ = __webpack_require__(209);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(173)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3052ecbd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3052ecbd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/YearProgress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] YearProgress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3052ecbd", Component.options)
  } else {
    hotAPI.reload("data-v-3052ecbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progressbar"
  }, [_c('progress', {
    attrs: {
      "percent": _vm.percent,
      "activeColor": "#EA5A49"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "dot"
  }), _vm._v(" "), _c('span', {
    staticClass: "dot"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.year) + "已经过去了" + _vm._s(_vm.days) + "天，" + _vm._s(_vm.percent) + "%")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3052ecbd", esExports)
  }
}

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbartitle",
    style: ({
      'height': _vm.top + 'px'
    })
  }, [_c('span', [_vm._v("我的研究院")])]), _vm._v(" "), _c('div', {
    staticClass: "userinfo",
    style: ({
      'margin-top': _vm.top + 'px'
    })
  }, [_c('img', {
    attrs: {
      "src": _vm.userinfo.avatar_url
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "username"
  }, [_c('span', {
    staticClass: "foodname"
  }, [_vm._v(_vm._s(_vm.userinfo.nick_name))]), _vm._v(" "), _c('span', {
    staticClass: "foodLabel"
  }, [_vm._v(_vm._s(_vm.userinfo.level_display))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '0'
    },
    on: {
      "submit": _vm.sign_in
    }
  }, [_c('button', {
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E7%AD%BE%E5%88%B0icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("签到")]), _vm._v(" "), _c('span', {
    staticClass: "list_btn"
  }, [_vm._v("签到赢取8折券")])])])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '1'
    },
    on: {
      "submit": _vm.goMygroup
    }
  }, [_c('button', {
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E6%8B%BC%E5%9B%A2%E8%AE%A2%E5%8D%95icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("我的拼团订单")])])])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '2'
    },
    on: {
      "submit": _vm.myBoon
    }
  }, [_c('button', {
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E6%8A%BD%E5%A5%96icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("我的抽奖")])])])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '3'
    },
    on: {
      "submit": _vm.myStore
    }
  }, [_c('button', {
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E9%9B%B6%E9%A3%9F%E5%BA%93icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("我的零食库")]), _vm._v(" "), _c('span', {
    staticClass: "list_btn"
  }, [_vm._v("分享有礼")])])])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '4'
    },
    on: {
      "submit": _vm.myPublic
    }
  }, [_c('button', {
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E5%8F%91%E5%B8%83icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("我的发布")])])])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '5'
    },
    on: {
      "submit": _vm.my_trove
    }
  }, [_c('button', [_c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%94%B6%E8%97%8Ficon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("我的收藏")])])])], 1), _vm._v(" "), (_vm.login_show) ? _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '6'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo,
      "click": _vm.getUserInfo1
    }
  }, [_vm._v("获取权限")]) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "score"
  }, [_vm._v("2.3K"), _c('span', {
    staticClass: "score_text"
  }, [_vm._v("个小麻花")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "desc"
  }, [_c('span', {
    staticClass: "small_score"
  }, [_vm._v("小麻花积分")]), _vm._v(" "), _c('span', {
    staticClass: "small_score_text"
  }, [_vm._v("你还有3000{{}}个小麻花可以使用，快去使用")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3105212a", esExports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3105212a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(210);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3105212a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3105212a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3105212a", Component.options)
  } else {
    hotAPI.reload("data-v-3105212a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(74);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ })

},[89]);
//# sourceMappingURL=main.js.map