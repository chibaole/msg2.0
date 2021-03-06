global.webpackJsonp([11],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_oldUser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(4);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: __WEBPACK_IMPORTED_MODULE_4__components_navbar__["a" /* default */],
    OldUser: __WEBPACK_IMPORTED_MODULE_5__components_oldUser__["a" /* default */]
  },
  data: function data() {
    return {
      pjname: '为定义',
      uuid: '',
      group_activity: {},
      navbar_title: '拼团详情',
      group_activity_order_uuid: '',
      group_activities_uuid: '',
      time: { day: '', hours: '', minutes: '', seconds: '' },
      myDetail: '',
      oldUser: false
    };
  },

  methods: {
    // 跳转到拼团订单
    goGroupDetail: function goGroupDetail(e) {
      var prjName = e.currentTarget.dataset.prjname;
      var pjNum = e.currentTarget.dataset.groupNum;

      wx.navigateTo({
        url: '/pages/groupPj/groupDetail/main?prjname=' + prjName + '&pjNum=' + pjNum
      });
    },

    // 获取拼团产品信息
    getGrouDetail: function getGrouDetail() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, uuid, prjDetail;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('拼团详情');
                that = _this;
                uuid = _this.uuid;
                _context.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* get */])('/v1/group_activities/' + uuid, { uuid: uuid });

              case 5:
                prjDetail = _context.sent;

                console.log(prjDetail);
                that.group_activity = prjDetail.group_activity;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },


    // 发起拼团订单
    initGroup: function initGroup(e) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var that, group_activitys_uuid, currentuser_code, uuid_authCode, initGroupData, form_id, group_activity_order_uuid;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = _this2;
                group_activitys_uuid = that.group_activities_uuid;
                currentuser_code = wx.getStorageSync('auth_code');
                uuid_authCode = [group_activitys_uuid, currentuser_code];
                _context2.next = 6;
                return that.$store.dispatch('initGroup', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

              case 6:
                initGroupData = _context2.sent;
                form_id = e.mp.detail.formId;

                console.log(initGroupData);
                if (initGroupData) {
                  group_activity_order_uuid = initGroupData.group_activity_order.uuid; // 发起拼团返回的订单id

                  that.group_activity_order_uuid = group_activity_order_uuid;
                  wx.navigateTo({
                    url: '/pages/groupPj/groupDetail/main?group_activity_orders_uuid=' + group_activity_order_uuid + '& group_activities_uuid=' + that.group_activities_uuid
                  });
                } else {

                  //显示弹窗

                  //          that.oldUser = true
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_util__["b" /* showModal */])('发起失败', '库存不足，暂无法拼团');
                }

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },


    // 获取倒计时
    getlastTime: function getlastTime() {
      var that = this;
      var currentTime = new Date().getTime(); // 当前的时间

      var endTime = that.group_activity.end_time; // 1532674437000

      var leftTime = endTime - currentTime; // 总时间
      leftTime < 0 ? leftTime = 0 : leftTime = endTime - currentTime;

      var day = Math.floor(leftTime / 1000 / 60 / 60 / 24); // 剩余天数

      var hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);

      var minutes = Math.floor(leftTime / 1000 / 60 % 60);
      var second = Math.floor(leftTime / 1000 % 60);

      //        that.time.day = day
      that.time.hours = hours;
      that.time.minutes = minutes;
      that.time.seconds = second;

      //        console.log(hours, minutes, second)

      var param = setTimeout(that.getlastTime, 1000);

      if (leftTime <= 0) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_util__["b" /* showModal */])('拼团结束', '活动结束了');
        leftTime = 0;
        clearTimeout(param);
      }
    }
  },
  onLoad: function onLoad(options) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var that, form_id, uuid, currentuser_code, uuid_authCode, group_activity;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              that = _this3;

              that.getlastTime();

              that.group_activities_uuid = that.$root.$mp.query.group_activities_uuid; // 获取活动列表的group_activities_uuid
              form_id = options.form_id;

              console.log('这是form' + form_id);
              uuid = that.group_activities_uuid;
              currentuser_code = wx.getStorageSync('auth_code');
              uuid_authCode = [uuid, currentuser_code, form_id];
              _context3.next = 10;
              return that.$store.dispatch('getGrouDetail', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

            case 10:
              group_activity = _context3.sent;
              // 获取当前拼团活动详情
              that.group_activity = group_activity.group_activity;

              // 通过富文本展示商品详情
              that.myDetail = that.group_activity.product.detail;

            case 13:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  onShow: function onShow() {
    //      this.oldUser = false

  },
  mounted: function mounted() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
      var that, form_id, uuid, currentuser_code, uuid_authCode, group_activity;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              that = _this4;

              that.getlastTime();

              that.group_activities_uuid = that.$root.$mp.query.group_activities_uuid; // 获取活动列表的group_activities_uuid
              form_id = options.form_id;

              console.log('这是form' + form_id);
              uuid = that.group_activities_uuid;
              currentuser_code = wx.getStorageSync('auth_code');
              uuid_authCode = [uuid, currentuser_code, form_id];
              _context4.next = 10;
              return that.$store.dispatch('getGrouDetail', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

            case 10:
              group_activity = _context4.sent;
              // 获取当前拼团活动详情
              that.group_activity = group_activity.group_activity;
              // 通过富文本展示商品详情
              that.myDetail = that.group_activity.product.detail;
              that.myDetail = that.myDetail.replace(/\<img/g, '<img class="img" mode="aspectFill"');

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  }
});

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 210:
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
    staticClass: "top"
  }, [_c('div', {
    staticClass: "pic"
  }, [_c('div', {
    staticClass: "bg",
    style: ({
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + _vm.group_activity.title_image_url + ')',
      backgroundSize: 'cover',
      backgroundPosition: '50%'
    })
  })]), _vm._v(" "), _c('div', {
    staticClass: "timeLine"
  }, [_c('p', [_vm._v("距离结束仅剩")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.time.hours) + " ")]), _vm._v("时\n      "), _c('span', [_vm._v(_vm._s(_vm.time.minutes) + " ")]), _vm._v("分\n      "), _c('span', [_vm._v(_vm._s(_vm.time.seconds) + " ")]), _vm._v("秒\n    ")], 1), _vm._v(" "), _c('div', {
    staticClass: "pj-info"
  }, [_c('h2', {
    staticClass: "pj-name"
  }, [_c('span', {
    staticClass: "mark"
  }, [_vm._v(_vm._s(_vm.group_activity.group_type))]), _vm._v(_vm._s(_vm.group_activity.title))]), _vm._v(" "), _c('p', {
    staticClass: "pj-text"
  }, [_vm._v(_vm._s(_vm.group_activity.description))]), _vm._v(" "), _c('p', {
    staticClass: "pj-price"
  }, [_vm._v("¥ " + _vm._s(_vm.group_activity.current_price)), _c('span', [_vm._v("拼团价")]), (_vm.group_activity.original_price) ? _c('span', [_vm._v("¥" + _vm._s(_vm.group_activity.original_price))]) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "group"
  }, [_c('h2', {
    staticClass: "group-game"
  }, [_vm._v("拼团玩法")]), _vm._v(" "), _c('p', {
    staticClass: "step1"
  }, [_vm._v("1.付款后邀请好友参团")]), _vm._v(" "), _c('p', {
    staticClass: "step2"
  }, [_vm._v("2.达到拼团人数，顺利开团")]), _vm._v(" "), _c('p', {
    staticClass: "step2"
  }, [_vm._v("3.若24小时内拼团不成功，全额退款")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "pjDetail"
  }, [_c('h2', {
    staticClass: "pjdetail"
  }, [_vm._v("商品详情")]), _vm._v(" "), _c('rich-text', {
    attrs: {
      "nodes": _vm.myDetail,
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "pay"
  }, [_c('span', {
    staticClass: "price"
  }, [_vm._v("¥ " + _vm._s(_vm.group_activity.current_price)), (_vm.group_activity.stock) ? _c('span', [_vm._v("还剩" + _vm._s(_vm.group_activity.stock) + "份")]) : _vm._e()]), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": true,
      "eventid": '0'
    },
    on: {
      "submit": _vm.initGroup
    }
  }, [_c('button', {
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v(_vm._s(_vm.group_activity.button.text))])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55c88690", esExports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_55c88690_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(210);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-55c88690"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_55c88690_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/groupPj/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55c88690", Component.options)
  } else {
    hotAPI.reload("data-v-55c88690", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(64);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false
  }
});

/***/ })

},[80]);
//# sourceMappingURL=main.js.map