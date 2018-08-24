global.webpackJsonp([5],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_navbar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_groupCard__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: __WEBPACK_IMPORTED_MODULE_2__components_navbar__["a" /* default */],
    Card: __WEBPACK_IMPORTED_MODULE_3__components_groupCard__["a" /* default */]
  },

  data: function data() {
    return {
      navbar_title: '抽奖详情',
      order_info: {
        title: '酸奶补给大礼包x10'

      }

    };
  },


  methods: {}

});

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
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
  }), _vm._v(" "), _c('div', {
    staticClass: "pjCard"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "priceName"
  }, [_c('h2', {
    staticClass: "title"
  }, [_vm._v("{{}}酸奶补给大包x10")]), _vm._v(" "), _c('div', {
    staticClass: "sponsor"
  }, [_vm._v("赞助商 安佳{{}}")])], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "service"
  }, [_c('contact-button', {
    staticClass: "pos",
    attrs: {
      "size": "22"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "icon_kf",
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/msgservice.png"
    }
  })], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pic"
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/pj1.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "receive"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("收货人信息")]), _vm._v(" "), _c('div', {
    staticClass: "phone_address"
  }, [_c('div', {
    staticClass: "phone"
  }, [_c('span', [_vm._v("收货信息：")]), _c('span', [_vm._v("{{}}土土")]), _c('span', [_vm._v("13216614843{{}}")])]), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('span', [_vm._v("收货地址：")]), _c('span', {
    staticClass: "addressDetail"
  }, [_vm._v("{{}}上海市 静安区 光复路1号上海四行仓库抗战纪念馆223室上海市 静安区 光复路1号上海四行仓库抗战纪念馆223室")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "orderinfo"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("订单信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("拼团订单：")]), _c('span', [_vm._v("13216614843{{}}")])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("订单时间：")]), _c('span', [_vm._v("2018/12/17 23:21{{}}")])]), _vm._v(" "), _c('div', {
    staticClass: "orderState"
  }, [_c('span', [_vm._v("订单状态：")]), _c('span', [_vm._v("已发货{{}}")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "express"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("物流信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("物流配送：")]), _c('span', [_vm._v("顺丰{{}}")])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("运单编号：")]), _c('span', [_vm._v("534475800412{{}}")])]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(12),
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lottery"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("开奖信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("抽奖玩法：")]), _c('span', [_vm._v("满人开奖{{}}")])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("开奖时间：")]), _c('span', [_vm._v("2018/12/17 23:21{{}}")])]), _vm._v(" "), _c('div', {
    staticClass: "orderState"
  }, [_c('span', [_vm._v("抽奖状态：")]), _c('span', [_vm._v("未中奖{{}}")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d087ae9", esExports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d087ae9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(217);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d087ae9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d087ae9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/myboonList/myBoon/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d087ae9", Component.options)
  } else {
    hotAPI.reload("data-v-6d087ae9", Component.options)
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