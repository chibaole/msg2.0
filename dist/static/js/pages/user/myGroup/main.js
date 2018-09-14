global.webpackJsonp([8],{

/***/ 118:
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






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_5__components_navbar__["a" /* default */],
    Card: __WEBPACK_IMPORTED_MODULE_6__components_groupCard__["a" /* default */]
  },

  data: function data() {
    return {
      navbar_title: '我的拼团订单',
      myGroup_list: [],
      all_list: [],
      page: 1,
      size: 10,
      showGetMore: false,
      userinfo: {
        avatar_url: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nick_name: '没事干研究院',
        level_display: '',
        is_authorized: true
      } };
  },


  methods: {
    addList: function addList() {
      var that = this;
      console.log(that.all_list);
      that.size += 10;
      console.log(that.size);

      if (that.size >= that.all_list.length) {
        that.size = that.all_list.length;
        that.myGroup_list = that.all_list;
        console.log();
      } else {
        that.myGroup_list = that.all_list.slice(0, that.size);
      }
    },
    goDetail: function goDetail(e) {
      var this_uuid = e.currentTarget.dataset.uuid;
      wx.navigateTo({
        url: '/pages/user/myGroup/myGroupDetail/main?uuid=' + this_uuid
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var that, auth_code, data, groupList, init_size, maxSize, userinfo;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              that = _this;
              auth_code = wx.getStorageSync('auth_code');
              data = [that.page, that.size, auth_code];
              _context.next = 5;
              return that.$store.dispatch('myGroupList', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data));

            case 5:
              groupList = _context.sent;
              init_size = that.size;


              that.all_list = groupList.group_activity_orders;

              maxSize = that.all_list.length;


              that.myGroup_list = that.all_list.slice(0, init_size);

              that.myGroup_list = that.all_list;

              userinfo = wx.getStorageSync('userinfo');


              that.userinfo = userinfo;

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 218:
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
  }), _vm._v(" "), _vm._l((_vm.myGroup_list), function(item, index) {
    return _c('div', {
      key: item.uuid,
      staticClass: "groupList"
    }, [_c('div', {
      staticClass: "groupItem",
      attrs: {
        "data-uuid": item.uuid,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.goDetail
      }
    }, [_c('div', {
      staticClass: "orderNum"
    }, [_c('div', {
      staticClass: "left"
    }, [_vm._v("订单号："), _c('span', [_vm._v(_vm._s(item.uuid))])]), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('span', [_vm._v(_vm._s(item.united_status_display))]), _vm._v(" "), _c('img', {
      attrs: {
        "src": "http://pbmrxkahq.bkt.clouddn.com/more_right.png",
        "alt": ""
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "orderInfo"
    }, [_c('div', {
      staticClass: "pic"
    }, [_c('div', {
      staticClass: "bg",
      style: ({
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + item.group_activity.title_image_url + ')',
        backgroundSize: 'cover',
        backgroundPosition: '50%'
      })
    })]), _vm._v(" "), _c('div', {
      staticClass: "txt"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.group_activity.title))]), _vm._v(" "), _c('p', {
      staticClass: "group_type"
    }, [_vm._v(_vm._s(item.group_activity.group_type))]), _vm._v(" "), _c('p', {
      staticClass: "detail"
    }, [_vm._v(_vm._s(item.group_activity.description))])], 1), _vm._v(" "), _c('span', {
      staticClass: "price"
    }, [_vm._v("¥" + _vm._s(item.group_activity.current_price))])])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "service"
  }, [_c('button', {
    staticClass: "pos",
    attrs: {
      "type": "default",
      "size": "22",
      "session-from": "{ 'nickName':'刘攀','avatarUrl':'http://image.shengxinjing.cn/rate/unlogin.png' }",
      "open-type": "contact"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "icon_kf",
    attrs: {
      "src": "http://pbmrxkahq.bkt.clouddn.com/msgservice.png"
    }
  })], 1), _vm._v(" "), (_vm.showGetMore) ? _c('div', {
    staticClass: "getMore",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.addList
    }
  }, [_vm._v("加载更多")]) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4656d1c7", esExports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4656d1c7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(218);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4656d1c7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4656d1c7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/myGroup/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4656d1c7", Component.options)
  } else {
    hotAPI.reload("data-v-4656d1c7", Component.options)
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