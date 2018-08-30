global.webpackJsonp([11],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(6);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: __WEBPACK_IMPORTED_MODULE_4__components_navbar__["a" /* default */]
  },
  data: function data() {
    return {
      pjname: '为定义',
      uuid: '',
      group_activity: {},
      navbar_title: '拼团',
      initGroupId: '',
      group_uuid: '',
      time: { day: '', hours: '', minutes: '' },
      myDetail: '',
      host: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].host
    };
  },

  methods: {
    //跳转到拼团订单
    goGroupDetail: function goGroupDetail(e) {
      var prjName = e.currentTarget.dataset.prjname;
      var pjNum = e.currentTarget.dataset.groupNum;

      wx.navigateTo({
        url: '/pages/groupPj/groupDetail/main?prjname=' + prjName + '&pjNum=' + pjNum
      });
    },

    //获取拼团产品信息
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

    //发起拼团
    attendGroup: function attendGroup() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var that, uuid, currentuser_code;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //发起拼团
                that = _this2;
                uuid = that.uuid;
                currentuser_code = wx.getStorageSync('auth_code');

                console.log(currentuser_code);

                //                      let res = await post(`/v1/group_activities/${that.uuid}/attend?auth_code=${currentuser_code}`)
                //
                //                      let order_uuid =res.group_activity_order.uuid

                if (uuid) {
                  wx.navigateTo({
                    url: '/pages/groupPj/groupDetail/main?order_uuid=' + uuid
                  });
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    //发起拼团订单
    initGroup: function initGroup() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var that, uuid, currentuser_code, uuid_authCode, initGroupData, initGroupId;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this3;
                uuid = that.group_uuid;
                currentuser_code = wx.getStorageSync('auth_code');
                uuid_authCode = [uuid, currentuser_code];


                console.log(uuid_authCode);
                _context3.next = 7;
                return that.$store.dispatch('initGroup', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

              case 7:
                initGroupData = _context3.sent;

                console.log(initGroupData);

                if (initGroupData) {
                  console.log('点击了发起拼团');
                  initGroupId = initGroupData.group_activity_order.uuid; //发起拼团返回的订单id

                  that.initGroupId = initGroupId;

                  wx.navigateTo({
                    url: '/pages/groupPj/groupDetail/main?initGroupId=' + initGroupId
                  });
                } else {
                  console.log('拼团失败');
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_util__["b" /* showModal */])('无法拼团', '你已在这个拼团活动');
                }

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    //获取倒计时
    getlastTime: function getlastTime() {
      //                      console.log('倒计时')

      var that = this;
      var currentTime = new Date().getTime(); //当前的时间

      var endTime = that.group_activity.end_time; //1532674437000

      var leftTime = endTime - currentTime; //总时间
      if (leftTime <= 0) {
        //                        showModal('拼团结束','活动结束了')
      }

      var day = Math.floor(leftTime / 1000 / 60 / 60 / 24); //剩余天数

      var hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);

      var minutes = Math.floor(leftTime / 1000 / 60 % 60);

      that.time.day = day;
      that.time.hours = hours;
      that.time.minutes = minutes;

      //          console.log(day,hours,minutes)

      setTimeout(that.getlastTime, 1000);
    }
  },
  onLoad: function onLoad() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
      var that, uuid, currentuser_code, uuid_authCode, group_activity;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              that = _this4;

              that.getlastTime();

              that.group_uuid = that.$root.$mp.query.group_uuid; //获取活动列表的拼团活动uuid

              console.log(_this4.group_uuid);

              //      that.getGrouDetail()

              uuid = that.group_uuid;
              currentuser_code = wx.getStorageSync('auth_code');
              uuid_authCode = [uuid, currentuser_code];


              console.log(uuid_authCode);

              _context4.next = 10;
              return that.$store.dispatch('getGrouDetail', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, uuid_authCode));

            case 10:
              group_activity = _context4.sent;
              //获取当前拼团活动详情

              that.group_activity = group_activity.group_activity;

              //通过富文本展示商品详情
              that.myDetail = that.group_activity.detail;

            case 13:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
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
  }, [_c('img', {
    attrs: {
      "src": _vm.host + _vm.group_activity.title_image_url,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "timeLine"
  }, [_c('p', [_vm._v("距离结束仅剩")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.time.day))]), _vm._v("天\n          "), _c('span', [_vm._v(_vm._s(_vm.time.hours))]), _vm._v("时\n          "), _c('span', [_vm._v(_vm._s(_vm.time.minutes))]), _vm._v("分\n        ")], 1), _vm._v(" "), _c('div', {
    staticClass: "pj-info"
  }, [_c('h2', {
    staticClass: "pj-name"
  }, [_c('span', {
    staticClass: "mark"
  }, [_vm._v(_vm._s(_vm.group_activity.group_type))]), _vm._v(_vm._s(_vm.group_activity.title))]), _vm._v(" "), _c('p', {
    staticClass: "pj-text"
  }, [_vm._v(_vm._s(_vm.group_activity.description))]), _vm._v(" "), _c('p', {
    staticClass: "pj-price"
  }, [_vm._v("¥" + _vm._s(_vm.group_activity.current_price)), _c('span', [_vm._v("拼团价")]), _c('span', [_vm._v(_vm._s(_vm.group_activity.original_price))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "group"
  }, [_c('h2', {
    staticClass: "group-game"
  }, [_vm._v("拼团方法")]), _vm._v(" "), _c('p', {
    staticClass: "step1"
  }, [_vm._v("1.免费领取 但要完成小作业，写食用反馈。")]), _vm._v(" "), _c('p', {
    staticClass: "step2"
  }, [_vm._v("2.领取成功后，请扫码加群等待发货哦。")]), _vm._v(" "), _c('div', {
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
  }, [_c('div', {
    staticClass: "price"
  }, [_vm._v("¥" + _vm._s(_vm.group_activity.current_price)), _c('span', [_vm._v("还剩" + _vm._s(_vm.group_activity.stock) + "份")])]), _vm._v(" "), _c('div', {
    staticClass: "join-group",
    attrs: {
      "data-prjname": _vm.pjname,
      "eventid": '0'
    },
    on: {
      "click": _vm.initGroup
    }
  }, [_vm._v(_vm._s(_vm.group_activity.button.text))])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05960fcb", esExports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05960fcb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(204);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05960fcb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05960fcb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-05960fcb", Component.options)
  } else {
    hotAPI.reload("data-v-05960fcb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(68);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true
  }
});

/***/ })

},[83]);
//# sourceMappingURL=main.js.map