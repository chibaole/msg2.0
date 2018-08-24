global.webpackJsonp([7],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_YearProgress__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar__ = __webpack_require__(5);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    YearProgress: __WEBPACK_IMPORTED_MODULE_3__components_YearProgress__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_6__components_navbar__["a" /* default */]
  },
  data: function data() {
    return {
      userinfo: {
        avatarUrl: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nickName: '空空的地方'
      },
      nologin: true,
      top: 68
    };
  },

  methods: {
    addBook: function addBook(isbn) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* post */])('/weapp/addbook', {
                  isbn: isbn,
                  openid: _this.userinfo.openId
                });

              case 2:
                res = _context.sent;

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* showModal */])('添加成功', res.title);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    scanBook: function scanBook() {
      var _this2 = this;

      wx.scanCode({
        success: function success(res) {
          if (res.result) {
            _this2.addBook(res.result);
          }
        }
      });
    },
    login: function login(e) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var self, auth_code, urlData, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this3;

                console.log(e);
                auth_code = wx.getStorageSync('auth_code');


                console.log(e.mp.detail.userInfo);

                console.log(e.mp.detail.encryptedData);

                console.log(auth_code);
                console.log(e.mp.detail.iv);

                urlData = {
                  auth_code: auth_code,
                  encryptedData: e.mp.detail.encryptedData,
                  iv: e.mp.detail.iv,
                  userinfo: e.mp.detail.userInfo

                };
                _context2.next = 10;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* post */])('/v1/wx/save_user_info', urlData);

              case 10:
                res = _context2.sent;

                console.log(res);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    }
  },
  onShow: function onShow() {
    var that = this;
    var userinfo = wx.getStorageSync('userinfo');

    if (userinfo) {
      this.userinfo = userinfo;
    } else {
      console.log('暂无用户信息 点击登录');
    }
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
        var titleBarHeight = totalTopHeight - res.statusBarHeight; //44


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

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    style: ({
      'padding-top': _vm.top + 'px'
    })
  }, [_c('div', {
    staticClass: "userinfo"
  }, [_c('p', {
    staticClass: "username"
  }, [_c('span', {
    staticClass: "foodname"
  }, [_vm._v(_vm._s(_vm.userinfo.nickName) + " ")]), _vm._v(" "), _c('span', {
    staticClass: "foodLabel"
  }, [_vm._v("新晋吃货")])]), _vm._v(" "), (_vm.userinfo.avatarUrl !== 'http://image.shengxinjing.cn/rate/unlogin.png') ? _c('img', {
    attrs: {
      "src": _vm.userinfo.avatarUrl,
      "alt": ""
    }
  }) : _c('view', {
    staticClass: "oepn-data"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1)], 1), _vm._v(" "), _c('YearProgress', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "fuli"
  }, [_c('p', [_vm._v("吃货福利 "), _c('span', {
    staticClass: "btn"
  }, [_vm._v("签到领福利")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "fuli"
  }, [_c('p', [_vm._v("心愿单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fuli"
  }, [_c('p', [_vm._v("我参与的任务")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fuli"
  }, [_c('p', [_vm._v("我的盆友圈影响力"), _c('span', {
    staticClass: "btn"
  }, [_vm._v("分享有礼")])])], 1), _vm._v(" "), _c('button', {
    staticClass: "join_msg"
  }, [_vm._v("研究员福利→\t")]), _vm._v(" "), (_vm.nologin) ? _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN"
    }
  }, [_vm._v("点击登录")]) : _vm._e(), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "openSetting"
    }
  }, [_vm._v("打开授权设置页")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getPhoneNumber",
      "bindgetphonenumber": "getPhoneNumber"
    }
  }, [_vm._v("手机号 ")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b99efe8", esExports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0b99efe8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(212);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(175)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b99efe8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0b99efe8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/myBoon/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b99efe8", Component.options)
  } else {
    hotAPI.reload("data-v-0b99efe8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(78);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ })

},[93]);
//# sourceMappingURL=main.js.map