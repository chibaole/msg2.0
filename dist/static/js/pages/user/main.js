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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wafer2_client_sdk__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_YearProgress__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    YearProgress: __WEBPACK_IMPORTED_MODULE_1__components_YearProgress__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_4__components_navbar__["a" /* default */]
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
    goMygroup: function goMygroup() {
      wx.navigateTo({
        url: '/pages/user/myGroup/main'
      });
    },
    myBoon: function myBoon() {
      wx.navigateTo({
        url: '/pages/user/myboonList/main'
      });
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

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3052ecbd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__ = __webpack_require__(207);
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

/***/ 207:
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

/***/ 208:
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
      "src": "http://image.shengxinjing.cn/rate/unlogin.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "username"
  }, [_c('span', {
    staticClass: "foodname"
  }, [_vm._v(_vm._s(_vm.userinfo.nickName))]), _vm._v(" "), _c('span', {
    staticClass: "foodLabel"
  }, [_vm._v("新晋吃货")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E6%8B%BC%E5%9B%A2%E8%AE%A2%E5%8D%95icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goMygroup
    }
  }, [_vm._v("我的拼团订单")])]), _vm._v(" "), _c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E6%8A%BD%E5%A5%96icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.myBoon
    }
  }, [_vm._v("我的抽奖")])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])
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
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_vm._v("签到赢取8折券")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_vm._v("分享有礼")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%88%91%E7%9A%84%E5%8F%91%E5%B8%83icon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("我的发布")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mylist"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%94%B6%E8%97%8Ficon.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "list_title"
  }, [_vm._v("我的收藏")])])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3105212a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(208);
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