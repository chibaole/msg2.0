global.webpackJsonp([6],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_groupCard__ = __webpack_require__(17);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      navbar_title: '我的抽奖',
      boonList: []

    };
  },


  methods: {
    goBoonDetail: function goBoonDetail(e) {
      console.log(e);
      var uuid = e.currentTarget.dataset.uuid;
      var status = e.currentTarget.dataset.status;
      if (status === 'init') {
        wx.showToast({
          title: '莫急～还未开奖',
          icon: 'success',
          duration: 2000
        });
      } else {
        wx.navigateTo({
          url: '/pages/user/myboonList/myBoon/main?uuid=' + uuid
        });
      }
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var that, auth_code, data, boonList;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              that = _this;
              auth_code = wx.getStorageSync('auth_code');
              data = [that.page, that.size, auth_code];
              _context.next = 5;
              return that.$store.dispatch('myBoonList', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data));

            case 5:
              boonList = _context.sent;

              console.log(boonList);
              that.boonList = boonList.boon_orders;
              console.log(that.boonList);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._l((_vm.boonList), function(item, index) {
    return _c('div', {
      staticClass: "groupList"
    }, [_c('div', {
      staticClass: "groupItem",
      attrs: {
        "data-uuid": item.uuid,
        "data-status": item.status,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.goBoonDetail
      }
    }, [_c('div', {
      staticClass: "orderNum"
    }, [_c('div', {
      staticClass: "left"
    }, [_vm._v("订单号："), _c('span', [_vm._v(_vm._s(item.uuid))])]), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('span', [_vm._v(_vm._s(item.united_state_display))]), _vm._v(" "), _c('img', {
      attrs: {
        "src": "http://pbmrxkahq.bkt.clouddn.com/%E6%9B%B4%E5%A4%9A.png",
        "alt": ""
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "orderInfo"
    }, [_c('div', {
      staticClass: "pic"
    }, [_c('img', {
      attrs: {
        "src": item.boon.title_image_url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "txt"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.boon.title))]), _vm._v(" "), _c('p', {
      staticClass: "group_type"
    }, [_vm._v("{{}}")]), _vm._v(" "), _c('p', {
      staticClass: "detail"
    }, [_vm._v(_vm._s(item.boon.description))])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "explain"
    }, [_c('span', [_vm._v(_vm._s(item.boon.lottery_detail))])])])])
  }), _vm._v(" "), (true) ? _c('div', {
    staticClass: "getMore"
  }, [_vm._v("加载更多")]) : _vm._e(), _vm._v(" "), _c('div', {
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
  })], 1)], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ec0cb2e", esExports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ec0cb2e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(223);
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
var __vue_scopeId__ = "data-v-7ec0cb2e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ec0cb2e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/myboonList/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ec0cb2e", Component.options)
  } else {
    hotAPI.reload("data-v-7ec0cb2e", Component.options)
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