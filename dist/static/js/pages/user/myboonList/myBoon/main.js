global.webpackJsonp([5],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_groupCard__ = __webpack_require__(21);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: __WEBPACK_IMPORTED_MODULE_5__components_navbar__["a" /* default */],
    Card: __WEBPACK_IMPORTED_MODULE_6__components_groupCard__["a" /* default */]
  },

  data: function data() {
    return {
      navbar_title: '抽奖详情',
      order_info: {
        title: '酸奶补给大礼包x10'

      },
      boon_order: {}
    };
  },


  methods: {},

  onLoad: function onLoad() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var that, auth_code, uuid, data, boondata;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('我的抽奖订单详情');
              that = _this;
              auth_code = wx.getStorageSync('auth_code');
              uuid = that.$root.$mp.query.uuid; // 获取活动列表的拼团活动uuid

              data = [uuid, auth_code];
              _context.next = 7;
              return that.$store.dispatch('myBoonDetail', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data));

            case 7:
              boondata = _context.sent;


              if (boondata.boon_order.address === null) {
                boondata.boon_order.address = {
                  people: '1',
                  detail: '2'

                };
                that.boon_order = boondata.boon_order;
              } else {
                that.boon_order = boondata.boon_order;
              }

              console.log(that.boon_order);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
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
  }, [_c('div', {
    staticClass: "pic"
  }, [_c('div', {
    staticClass: "bg",
    style: ({
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + _vm.boon_order.boon.title_image_url + ')',
      backgroundSize: 'cover',
      backgroundPosition: '50%'
    })
  })]), _vm._v(" "), _c('div', {
    staticClass: "priceName"
  }, [_c('h2', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.boon_order.boon.title))]), _vm._v(" "), (_vm.boon_order.boon.sponsor) ? _c('div', {
    staticClass: "sponsor"
  }, [_vm._v(_vm._s(_vm.boon_order.boon.sponsor.description))]) : _vm._e()], 1)]), _vm._v(" "), (_vm.boon_order.address) ? _c('div', {
    staticClass: "receive"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("收货人信息")]), _vm._v(" "), _c('div', {
    staticClass: "phone_address"
  }, [_c('div', {
    staticClass: "phone"
  }, [_c('span', [_vm._v("收货信息：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.address.people || "暂无收货人信息"))])]), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('span', [_vm._v("收货地址：")]), _c('span', {
    staticClass: "addressDetail"
  }, [_vm._v(_vm._s(_vm.boon_order.address.detail))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "orderinfo"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("订单信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("拼团订单：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.uuid))])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("订单时间：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.boon.lottery_info.lottery_time))])]), _vm._v(" "), _c('div', {
    staticClass: "orderState"
  }, [_c('span', [_vm._v("订单状态：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.order_status_display))])])]), _vm._v(" "), (_vm.boon_order.delivery) ? _c('div', {
    staticClass: "express"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("物流信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("物流配送：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.delivery.company))])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("运单编号：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.delivery.delivery_no))])]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(36),
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "lottery"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("开奖信息")]), _vm._v(" "), _c('div', {
    staticClass: "groupOrder"
  }, [_c('span', [_vm._v("抽奖玩法：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.boon.lottery_info.lottery_method))])]), _vm._v(" "), _c('div', {
    staticClass: "orderTime"
  }, [_c('span', [_vm._v("开奖时间：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.boon.lottery_info.lottery_time))])]), _vm._v(" "), _c('div', {
    staticClass: "orderState"
  }, [_c('span', [_vm._v("抽奖状态：")]), _c('span', [_vm._v(_vm._s(_vm.boon_order.status_display))])])]), _vm._v(" "), _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-6d087ae9", esExports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d087ae9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(221);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(184)
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(77);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ })

},[92]);
//# sourceMappingURL=main.js.map