global.webpackJsonp([7],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar__ = __webpack_require__(6);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: __WEBPACK_IMPORTED_MODULE_5__components_navbar__["a" /* default */]
  },

  data: function data() {
    return {
      navbar_title: '订单详情',
      order_info: {}

    };
  },


  methods: {
    clip_no: function clip_no() {
      var this_text = this.order_info.delivery.delivery_no;
      wx.setClipboardData({
        data: this_text,
        success: function success() {
          wx.showToast({
            title: '已复制运单号',
            icon: 'success',
            duration: 2000
          });
        }
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var that, this_uuid, auth_code, uuid_authCode, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              that = _this;
              this_uuid = that.$root.$mp.query.uuid; // 订单uuid

              auth_code = wx.getStorageSync('auth_code');
              uuid_authCode = [this_uuid, auth_code];
              _context.next = 6;
              return that.$store.dispatch('groupActivities_order', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, uuid_authCode));

            case 6:
              res = _context.sent;

              that.order_info = res.group_activity_order;

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

<<<<<<< HEAD
/***/ 173:
=======
/***/ 180:
>>>>>>> 6db831f98fdc006e47b6d9d96fad767c47048487
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

<<<<<<< HEAD
/***/ 206:
=======
/***/ 213:
>>>>>>> 6db831f98fdc006e47b6d9d96fad767c47048487
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
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "pj-info"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('div', {
    staticClass: "bg",
    style: ({
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + _vm.order_info.group_activity.title_image_url + ')',
      backgroundSize: 'cover',
      backgroundPosition: '50%'
    })
  })]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('h2', [_c('div', {
    staticClass: "mark"
  }, [_vm._v(_vm._s(_vm.order_info.group_activity.group_type))]), _c('span', [_vm._v(_vm._s(_vm.order_info.group_activity.title))])]), _vm._v(" "), _c('p', [_c('span', [_vm._v("¥" + _vm._s(_vm.order_info.group_activity.current_price))]), _c('span', [_vm._v("¥" + _vm._s(_vm.order_info.group_activity.original_price))])])], 1)])]), _vm._v(" "), (_vm.order_info.address) ? _c('div', {
    staticClass: "receive"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("收货人信息")]), _vm._v(" "), _c('div', {
    staticClass: "phone_address"
  }, [_c('div', {
    staticClass: "phone"
  }, [_c('span', [_vm._v("收货信息：")]), _vm._v(_vm._s(_vm.order_info.address.people))]), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('span', [_vm._v("收货地址：")]), _c('span', {
    staticClass: "addressDetail"
  }, [_vm._v(_vm._s(_vm.order_info.address.detail))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "orderinfo"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("订单信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("拼团订单：")]), _c('span', [_vm._v(_vm._s(_vm.order_info.uuid))])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("订单时间：")]), _c('span', [_vm._v(_vm._s(_vm.order_info.created_at))])]), _vm._v(" "), _c('div', {
    staticClass: "orderState"
  }, [_c('span', [_vm._v("订单状态：")]), _c('span', [_vm._v(_vm._s(_vm.order_info.status_display))])])]), _vm._v(" "), (_vm.order_info.delivery) ? _c('div', {
    staticClass: "express"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("物流信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("物流配送：")]), _c('span', [_vm._v(_vm._s(_vm.order_info.delivery.company))])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("运单编号：")]), _c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.clip_no
    }
  }, [_vm._v(_vm._s(_vm.order_info.delivery.delivery_no))])]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(55),
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
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
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61784b02", esExports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(115);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4958b0dc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(206);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(173)
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61784b02_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
>>>>>>> 6db831f98fdc006e47b6d9d96fad767c47048487
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61784b02"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61784b02_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/myGroup/myGroupDetail/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61784b02", Component.options)
  } else {
    hotAPI.reload("data-v-61784b02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(72);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ })

},[88]);
//# sourceMappingURL=main.js.map