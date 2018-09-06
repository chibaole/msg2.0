global.webpackJsonp([12],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_groupCard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(12);
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





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {

      order_uuid: '',
      order_info: {},
      navbar_title: '订单详情',
      initGroupId: '',
      group_activity_order_uuid: ''
    };
  },

  components: {
    Card: __WEBPACK_IMPORTED_MODULE_3__components_groupCard__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_5__components_navbar__["a" /* default */]
  },

  methods: {
    pay: function pay(e) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, order_uuid, pay_res, form_id;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(e);
                that = _this;
                order_uuid = that.group_activity_order_uuid; // 订单uuid

                _context.next = 5;
                return that.$store.dispatch('group_pay', order_uuid);

              case 5:
                pay_res = _context.sent;
                form_id = e.mp.detail.formId;

                console.log(form_id);
                console.log(pay_res);
                wx.requestPayment({
                  'timeStamp': String(pay_res.time_stamp),
                  'nonceStr': String(pay_res.nonce_str),
                  'package': String(pay_res.package),
                  'signType': String(pay_res.sign_type),
                  'paySign': String(pay_res.pay_sign),
                  'success': function success(res) {
                    console.log(res);
                    var group_activity_initial_uuid = that.order_info.group_activity_initial.uuid;

                    wx.setStorageSync('group_activity_initial_uuid', group_activity_initial_uuid);
                    wx.navigateTo({
                      url: '/pages/groupPj/order/main?group_activity_initial_uuid=' + group_activity_initial_uuid
                    });
                    console.log('/pages/groupPj/order/main?group_activity_initial_uuid=' + group_activity_initial_uuid);
                  },
                  'fail': function fail(res) {
                    console.log(res);
                    console.log('支付错误');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_util__["b" /* showModal */])('支付失败', '请尝试重新支付');

                    var group_activity_initial_uuid = that.order_info.group_activity_initial.uuid;

                    wx.setStorageSync('group_activity_initial_uuid', group_activity_initial_uuid);
                    wx.navigateTo({
                      url: '/pages/groupPj/order/main?group_activity_initial_uuid=' + group_activity_initial_uuid
                    });
                    console.log('/pages/groupPj/order/main?group_activity_initial_uuid=' + group_activity_initial_uuid);
                  }
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  onLoad: function onLoad() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var that, group_activity_orders_uuid, currentuser_code, uuid_authCode, orderData;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              that = _this2;
              group_activity_orders_uuid = _this2.$root.$mp.query.group_activity_orders_uuid; // 获取发起拼团活动返回的订单ID

              that.group_activity_order_uuid = group_activity_orders_uuid;
              currentuser_code = wx.getStorageSync('auth_code');
              uuid_authCode = [group_activity_orders_uuid, currentuser_code];

              //      that.getGroup_orders()
              // 新api的形式

              _context2.next = 7;
              return that.$store.dispatch('groupActivities_order', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

            case 7:
              orderData = _context2.sent;


              console.log(orderData);

              that.order_info = orderData.group_activity_order;
              console.log(that.order_info);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  mounted: function mounted() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 225:
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
  }, [_c('h2', [_vm._v("订单详情")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.order_info.group_activity.title)), _c('span', [_vm._v("¥" + _vm._s(_vm.order_info.group_activity.current_price))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('p', [_vm._v("地址：目前需填写收货地址"), _c('span', [_vm._v("(拼团成功后 提货时填写)")])])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '1'
    },
    on: {
      "submit": _vm.pay
    }
  }, [_c('button', {
    staticClass: "form_button",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "pay"
  }, [_c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.pay
    }
  }, [_c('img', {
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1icon.png",
      "alt": ""
    }
  }), _c('span', {
    staticClass: "paytxt"
  }, [_vm._v("微信支付¥" + _vm._s(_vm.order_info.group_activity.current_price))])])], 1)])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-97fa62a8", esExports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_97fa62a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(225);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-97fa62a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_97fa62a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/groupPj/groupDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-97fa62a8", Component.options)
  } else {
    hotAPI.reload("data-v-97fa62a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(67);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true
  }
});

/***/ })

},[82]);
//# sourceMappingURL=main.js.map