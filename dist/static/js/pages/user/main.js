global.webpackJsonp([2],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_YearProgress__ = __webpack_require__(196);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        nick_name: '',
        level_display: '游客',
        is_authorized: true,
        point: {
          total_acquired: 0,
          available_count: 0
        }
      },
      nologin: true,
      login_show: true,
      globalData: {
        statusBarHeight: 0,
        titleBarHeight: 0

      },
      statusBarHeight: 0,
      titleBarHeight: 0,
      top: 0

    };
  },

  methods: {
    goMygroup: function goMygroup(e) {
      var that = this;
      var form_id = e.mp.detail.formId;
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
        var that, sesssion_res, _data, userinfo;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                _context.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["a" /* checkSession */])();

              case 3:
                sesssion_res = _context.sent;

                if (!(sesssion_res.errMsg === 'checkSession:ok')) {
                  _context.next = 18;
                  break;
                }

                if (!e.mp.detail.rawData) {
                  _context.next = 15;
                  break;
                }

                // 用户按了允许授权按钮
                _data = [e.mp.detail.encryptedData, e.mp.detail.iv, e.mp.detail.signature, e.mp.detail.rawData];
                _context.next = 9;
                return that.$store.dispatch('saveInfo', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _data));

              case 9:
                that.login_show = false;

                userinfo = wx.getStorageSync('userinfo'); //{nick_name,avatar_url}


                that.userinfo.nick_name = userinfo.nick_name;
                that.userinfo.avatar_url = userinfo.avatar_url;

                _context.next = 16;
                break;

              case 15:
                // 用户按了拒绝按钮
                console.log('用户按了拒绝按钮');

              case 16:
                _context.next = 23;
                break;

              case 18:
                console.log('session 过期');
                _context.next = 21;
                return that.$store.dispatch('signup');

              case 21:
                that.login_show = false;
                console.log('重新登录成功');

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    setAddress: function setAddress(e) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, address, address_res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["b" /* chooseAddress */])();

              case 2:
                res = _context2.sent;
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
                _context2.next = 7;
                return that.$store.dispatch('groupAddress', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data));

              case 7:
                address_res = _context2.sent;

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getPorfile: function getPorfile() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var that, user_profile, user, userinfoInit;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this3;
                _context3.next = 3;
                return that.$store.dispatch('user_info');

              case 3:
                user_profile = _context3.sent;
                user = user_profile.user;
                userinfoInit = {
                  avatar_url: user.avatar_url,
                  nick_name: user.nick_name,
                  level_display: user.level_display,
                  is_authorized: user.is_authorized,
                  point: user.point
                };

                wx.setStorageSync('allUserinfo', userinfoInit);
                if (userinfoInit.is_authorized === true) {
                  that.login_show = false;
                  that.userinfo = userinfoInit;
                } else {
                  that.login_show = true;
                }

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  },
  onShow: function onShow() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this4.getPorfile();

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  onLoad: function onLoad() {
    var vm = this;
    vm.getPorfile();

    wx.getSystemInfo({
      success: function success(res) {
        var totalTopHeight = 68;

        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88;
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64;
        }

        var statusBarHeight = res.statusBarHeight;
        var titleBarHeight = totalTopHeight - res.statusBarHeight; // 44

        vm.statusBarHeight = statusBarHeight;

        vm.titleBarHeight = titleBarHeight;
        vm.top = statusBarHeight + titleBarHeight;
      },
      failure: function failure() {
        vm.globalData.statusBarHeight = 0;
        vm.globalData.titleBarHeight = 0;
      }
    });
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3052ecbd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__ = __webpack_require__(206);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(170)
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

/***/ 206:
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbar",
    style: ({
      'padding-top': _vm.top + 'px'
    })
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "status-bar",
    style: ({
      height: _vm.statusBarHeight + 'px'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "title-bar",
    style: ({
      height: _vm.titleBarHeight + 'px'
    })
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("我的")])])])]), _vm._v(" "), _c('div', {
    staticClass: "userinfo"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userinfo.avatar_url
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "username"
  }, [_c('span', {
    staticClass: "foodname"
  }, [_vm._v(_vm._s(_vm.userinfo.nick_name))]), _vm._v(" "), _c('span', {
    staticClass: "foodLabel"
  }, [_vm._v(_vm._s(_vm.userinfo.level_display))])]), _vm._v(" "), _c('span', {
    staticClass: "score"
  }, [_vm._v(_vm._s(_vm.userinfo.point.total_acquired)), _c('span', {
    staticClass: "score_text"
  }, [_vm._v("个小麻花")])]), _vm._v(" "), _c('div', {
    staticClass: "setAddress",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.setAddress
    }
  }, [_c('span', [_vm._v("收货地址 >")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "formBox"
  }, [_c('form', {
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
  }, [_vm._v("我的抽奖")])])])], 1)], 1), _vm._v(" "), (_vm.login_show) ? _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '3'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo,
      "click": _vm.getUserInfo1
    }
  }, [_vm._v("获取权限")]) : _vm._e()], 1)
}
var staticRenderFns = []
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3105212a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(207);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(171)
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(71);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 96:
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

/***/ })

},[86]);
//# sourceMappingURL=main.js.map