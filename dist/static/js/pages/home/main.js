global.webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(4);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      group_activities: []
    };
  },

  methods: {
    goGroup: function goGroup(e) {
      console.log(e);
      var group_activities_uuid = e.currentTarget.dataset.uuid;
      var Intial = e.currentTarget.dataset.activitie;
      var formId = e.mp.detail.formId;
      if (Intial.group_activity_initial === null) {
        console.log('未参与');
        wx.navigateTo({
          url: '/pages/groupPj/main?group_activities_uuid=' + group_activities_uuid + '&form_id=' + formId
        });
      } else if (Intial.group_activity_initial !== null) {
        console.log('已参与');
        wx.navigateTo({
          url: '/pages/groupPj/order/main?group_activity_initial_uuid=' + Intial.group_activity_initial.uuid + '&from_id=' + formId // 参与拼团的页面
        });
      }
    },
    getGroup: function getGroup() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, urlData, group;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                urlData = {
                  page: 0,
                  size: 0
                };


                console.log('/v1/group_activities');
                _context.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* get */])('/v1/group_activities', urlData);

              case 5:
                group = _context.sent;

                that.groups = group.group_activities;
                console.log(group);

              case 8:
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

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var group_activities;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch('getGroup');

            case 2:
              group_activities = _context2.sent;

              console.log(group_activities);
              _this2.group_activities = group_activities.group_activities;

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  onShow: function onShow() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var group_activities;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.$store.dispatch('getGroup');

            case 2:
              group_activities = _context3.sent;

              console.log(group_activities);
              _this3.group_activities = group_activities.group_activities;

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(12);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      things: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var urlData;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //      this.things  = await this.$store.dispatch('getMore')
              urlData = {};
              _context.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* get */])('/v1/getMore', urlData);

            case 3:
              _this.things = _context.sent;

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(4);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      boons: [],
      page: 1,
      showSkeleton: true,
      formId: ''
    };
  },

  methods: {
    scrolltolower: function scrolltolower() {
      console.log(7);
    },
    scroll: function scroll(e) {
      console.log(e);
    },
    formSubmit: function formSubmit(e) {
      console.log(e);
      var that = this;

      console.log(that.formId);
      var uuid = e.currentTarget.dataset.uuid;
      var title = e.currentTarget.dataset.title;
      var form_id = e.mp.detail.formId;
      console.log(uuid, title, form_id);
      __WEBPACK_IMPORTED_MODULE_3__utils_wx__["c" /* default */].navigateTo('/pages/project/main?boons_uuid=' + uuid + '&title=' + title + '&form_id=' + form_id);
      //        wx.redirectTo('/pages/project/main?boons_uuid=' + uuid + '&title=' + title)
    },
    attendBoon: function attendBoon(e) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, uuid, title;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 跳转到福利详情页
                that = _this;
                uuid = e.currentTarget.dataset.uuid;
                title = e.currentTarget.dataset.title;


                __WEBPACK_IMPORTED_MODULE_3__utils_wx__["c" /* default */].navigateTo('/pages/project/main?boons_uuid=' + uuid + '&title=' + title);

              case 4:
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

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var boonsData;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('scroll加载今日福利数据');
              _context2.next = 3;
              return _this2.$store.dispatch('getBoonsToday');

            case 3:
              boonsData = _context2.sent;

              _this2.boons = boonsData.boons;
              console.log(_this2.boons);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  onShow: function onShow() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var boonsData;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('scroll加载今日福利数据');
              _context3.next = 3;
              return _this3.$store.dispatch('getBoonsToday');

            case 3:
              boonsData = _context3.sent;

              _this3.boons = boonsData.boons;
              console.log(_this3.boons);

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TopSwiper__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_scroll__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_group__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_more__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar__ = __webpack_require__(6);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








//  import wx from '../../utils/wx'





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    //      Card,
    TopSwiper: __WEBPACK_IMPORTED_MODULE_4__components_TopSwiper__["a" /* default */],
    Scroll: __WEBPACK_IMPORTED_MODULE_5__components_scroll__["a" /* default */],
    Group: __WEBPACK_IMPORTED_MODULE_6__components_group__["a" /* default */],
    More: __WEBPACK_IMPORTED_MODULE_7__components_more__["a" /* default */]
  },
  data: function data() {
    return {
      books: [],
      page: 0,
      more: true,
      tops: [],
      open: false,
      userInfo: {
        openid: ''
      },
      showSkeleton: true // 骨架屏显示隐藏

    };
  },

  methods: {
    getTop: function getTop() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //        const tops = await get('/weapp/top')
                _this.tops = tops.list;

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    openBox: function openBox() {
      var that = this;
      var open = this.open;
      console.log(open);
      if (open) {
        that.open = false;
      } else {
        that.open = true;
      }
    }
  },
  onLoad: function onLoad() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var that;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              that = _this2;

              setTimeout(function () {
                that.showSkeleton = false;
              }, 3000);

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_461a868a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__ = __webpack_require__(217);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_461a868a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/TopSwiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TopSwiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-461a868a", Component.options)
  } else {
    hotAPI.reload("data-v-461a868a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_group_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_318ee708_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_group_vue__ = __webpack_require__(213);
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
var __vue_scopeId__ = "data-v-318ee708"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_318ee708_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_group_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/group.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] group.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-318ee708", Component.options)
  } else {
    hotAPI.reload("data-v-318ee708", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_more_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ebe8fe8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_more_vue__ = __webpack_require__(210);
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
var __vue_scopeId__ = "data-v-2ebe8fe8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_more_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ebe8fe8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_more_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/more.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] more.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ebe8fe8", Component.options)
  } else {
    hotAPI.reload("data-v-2ebe8fe8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scroll_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8c08e6c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_scroll_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8c08e6c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scroll_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8c08e6c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_scroll_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/scroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8c08e6c0", Component.options)
  } else {
    hotAPI.reload("data-v-8c08e6c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('p', {
    staticClass: "title"
  }, [_c('span'), _vm._v("没事干研究院更多活动")]), _vm._v(" "), _c('scroll-view', {
    staticClass: "scroll-view_H",
    attrs: {
      "scroll-x": "true",
      "scroll-left": ""
    }
  }, _vm._l((_vm.things), function(thing, index) {
    return _c('div', {
      key: thing.title,
      staticClass: "scroll-view-item_H"
    }, [_c('div', {
      staticClass: "recomend-box"
    }, [_c('div', {
      staticClass: "recomend-pic"
    }, [_c('img', {
      attrs: {
        "src": thing.pic,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "join"
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(236),
        "alt": ""
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "recomend-box-inner"
    }, [_c('div', {
      staticClass: "recomend-intitle"
    }, [_vm._v(_vm._s(thing.title))])])])])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ebe8fe8", esExports)
  }
}

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container "
  }, [_c('p', {
    staticClass: "componten_name "
  }, [_c('span'), _vm._v("拼团")]), _vm._v(" "), _vm._l((_vm.group_activities), function(group_activitie, index) {
    return _c('div', {
      key: group_activitie.uuid,
      staticClass: "group-tiem "
    }, [_c('form', {
      attrs: {
        "report-submit": true,
        "data-uuid": group_activitie.uuid,
        "data-activitie": group_activitie,
        "eventid": '1-' + index
      },
      on: {
        "submit": _vm.goGroup
      }
    }, [_c('button', {
      attrs: {
        "formType": "submit"
      }
    }, [_c('div', {
      staticClass: "pic "
    }, [_c('div', {
      staticClass: "bg",
      style: ({
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + group_activitie.title_image_url + ')',
        backgroundSize: 'cover',
        backgroundPosition: '50%'
      })
    })]), _vm._v(" "), _c('div', {
      staticClass: "info-box "
    }, [_c('div', {
      staticClass: "group-info "
    }, [_c('div', {
      staticClass: "group-text "
    }, [_vm._v(_vm._s(group_activitie.title))]), _vm._v(" "), _c('div', {
      staticClass: "group-prj-price "
    }, [_vm._v("¥" + _vm._s(group_activitie.current_price) + " "), _c('span', {
      staticClass: "price "
    }, [_vm._v("¥" + _vm._s(group_activitie.original_price))])]), _vm._v(" "), _c('div', {
      staticClass: "join-group ",
      attrs: {
        "data-groupname": _vm.groupname,
        "data-uuid": group_activitie.uuid,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.goGroup
      }
    }, [_vm._v("\n              " + _vm._s(group_activitie.button.text) + "\n            ")])])])])], 1)], 1)
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-318ee708", esExports)
  }
}

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": true,
      "indicator-color": "#EA5A49",
      "autoplay": true,
      "interval": 6000,
      "duration": 1000,
      "circular": true
    }
  }, _vm._l((_vm.imgUrls), function(top, imgindex) {
    return _c('div', {
      key: imgindex
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + imgindex
      }
    }, _vm._l((top), function(img, index) {
      return _c('img', {
        key: img.id,
        staticClass: "slide-image",
        attrs: {
          "mode": "aspectFit",
          "src": img.image,
          "eventid": '0-' + imgindex + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.bookDetail(img)
          }
        }
      })
    }))], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-461a868a", esExports)
  }
}

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "skeleton"
  }, [(_vm.open) ? _c('div', {
    staticClass: "explain-box"
  }, [_c('p', [_vm._v("没事干研究院很凉快")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clear"
  }), _vm._v(" "), _c('div', {
    staticClass: "appname "
  }, [_vm._v("没事干研究院很酷"), (false) ? _c('div', {
    staticClass: "explain",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.openBox
    }
  }, [_vm._v("?")]) : _vm._e()]), _vm._v(" "), _c('Scroll', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('Group', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75e665de", esExports)
  }
}

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container skeleton "
  }, [_vm._m(0), _vm._v(" "), _c('scroll-view', {
    staticClass: "scroll-view_H",
    attrs: {
      "scroll-x": "true",
      "scroll-left": ""
    }
  }, _vm._l((_vm.boons), function(boon, index) {
    return _c('div', {
      key: boon.uuid,
      staticClass: "scroll-view-item_H ",
      attrs: {
        "data-title": boon.title,
        "data-uuid": boon.uuid
      }
    }, [_c('form', {
      attrs: {
        "report-submit": true,
        "data-title": boon.title,
        "data-uuid": boon.uuid,
        "eventid": '0-' + index
      },
      on: {
        "submit": _vm.formSubmit
      }
    }, [_c('button', {
      attrs: {
        "formType": "submit"
      }
    }, [_c('div', {
      staticClass: "recomend-box "
    }, [_c('div', {
      staticClass: "recomend-pic",
      style: ({
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + boon.title_image_url + ')',
        backgroundSize: 'cover',
        background_position: '50%'
      })
    }), _vm._v(" "), _c('div', {
      staticClass: "recomend-box-inner "
    }, [_c('div', {
      staticClass: "recomend-intitle  short_title "
    }, [_vm._v(_vm._s(boon.short_title || '暂未添加'))]), _vm._v(" "), _c('div', {
      staticClass: "recomend-intitle little_title "
    }, [_vm._v(_vm._s(boon.description))])])]), _vm._v(" "), _c('div', {
      staticClass: "recomend-method "
    }, [_vm._v(_vm._s(boon.button.text))])])], 1)], 1)
  }))], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "praise-title"
  }, [_c('span'), _vm._v("今日福利")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8c08e6c0", esExports)
  }
}

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAZxJREFUeAHt3EFqwkAYhmFTKghduusluhe66Wl6gS5dufQA7S269Aaew1VvUCgITf8sfnEzviOxiS1vQEbzTTLp44cohE4mbicFmpPpL4Zt287i9M+VS7w1TfNVOfd/TAugeTxqt/lYf/XNWAv/lXUFgndKIIFAAGIbJBAIQGyDBAIBiG2QQCAAsQ0SCAQgtkECgQDENkggEIDYBgkEAhDbIIFAAGIbJBAIQGyDBAIBiG2QQCAAsQ0SCAQgvs087iJYxfNFvh5gnJ6xxntc3/6M+X2nbuNukmV3kgNQPH+Ix1O38wq3x4Gv6TPX8zMoJQqjQAWY3C1QShRGgQowuVuglCiMAhVgcrdAKVEYBSrA5O7jL4qvsXOTwQDjXayxrlznJeYdvrxVHtNn2q7PwRc5Nn46eJ/0RSRHPomfQfAGCCQQCEBsgwQCAYhtkEAgALENEggEILZBAoEAxDZIIBCA2AYJBAIQ2yCBQABiGyQQCEBsgwQCAYhtkEAgALENEggEILZBAoEAxGP+F7yuvfdwfRl/xH3L3/liyPEHT051/Ns4/RgAAAAASUVORK5CYII="

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75e665de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(224);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75e665de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75e665de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75e665de", Component.options)
  } else {
    hotAPI.reload("data-v-75e665de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(69);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false

  }
});

/***/ }),

/***/ 98:
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
//
//
//
//
//
//
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
  props: ['tops'],
  computed: {
    imgUrls: function imgUrls() {
      // 如果通用 请用chunk函数  比如lodash的chunk方法
      var res = this.tops;
      console.log([res.slice(0, 3), res.slice(3, 6), res.slice(6)]);
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)];
    }
  },
  methods: {
    bookDetail: function bookDetail(item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      });
    }
  }

});

/***/ })

},[84]);
//# sourceMappingURL=main.js.map