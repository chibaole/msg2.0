global.webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(6);


//
//
//
//
//
//
//
//
//
//
//
//
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
      groups: [],
      host: 'http://47.98.170.205',
      showSkeleton: true
    };
  },

  methods: {
    goGroup: function goGroup(e) {
      var uuid = e.currentTarget.dataset.uuid;
      console.log(uuid);
      wx.navigateTo({
        url: '/pages/groupPj/main?group_uuid=' + uuid
      });
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
    var that = this;
    //      that.getGroup()
    setTimeout(function () {
      that.showSkeleton = false;
    }, 5000);
  },
  mounted: function mounted() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var groupList;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch('getGroup');

            case 2:
              groupList = _context2.sent;


              _this2.groups = groupList.group_activities;

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(10);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(6);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      host: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].host,
      showSkeleton: true
    };
  },

  methods: {
    scrolltolower: function scrolltolower() {
      console.log(7);
    },
    scroll: function scroll(e) {
      console.log(e);
    },


    //      async getBoonsToday() {
    //
    //        console.log('获取今日福利')
    //
    //        let boons = await get('/v1/boons/today', {page: this.page})
    ////       console.log(boons)
    //        this.boons = boons
    //       console.log(boons)
    //
    //
    //      },
    attendBoon: function attendBoon(e) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, uuid, title;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //跳转到福利详情页
                that = _this;
                uuid = e.currentTarget.dataset.uuid;
                title = e.currentTarget.dataset.title;


                console.log('/pages/project/main?uuid=' + uuid + "&title=" + title);
                //        wx.navigateTo({
                //          url: '/pages/project/main?uuid=' + uuid + "&title=" + title
                //        })
                __WEBPACK_IMPORTED_MODULE_3__utils_wx__["c" /* default */].navigateTo('/pages/project/main?uuid=' + uuid + "&title=" + title);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  onLoad: function onLoad() {

    var that = this;
    setTimeout(function () {
      that.showSkeleton = false;
    }, 10000);
  },
  mounted: function mounted() {
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
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TopSwiper__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_scroll__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_group__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_more__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar__ = __webpack_require__(5);


//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showSkeleton: true //骨架屏显示隐藏

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
    },
    signup: function signup() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var codeinfo, code, data, auth, auth_code, currentuser_code;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_wx__["b" /* login */])();

              case 2:
                codeinfo = _context2.sent;
                code = codeinfo.code;

                console.log('wx.login 获取的code为：' + code);
                data = { code: code };
                _context2.next = 8;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* post */])('/v1/wx/login', data);

              case 8:
                auth = _context2.sent;

                console.log(auth);
                auth_code = '7o_WVWb5GZlcpBfASVUl9Q';


                wx.setStorageSync('auth_code', auth_code);

                currentuser_code = wx.getStorageSync('auth_code');

                console.log(currentuser_code);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  onLoad: function onLoad() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var that;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //      this.signup()
              //      var auth_code = await this.$store.dispatch('signup')


              //      console.log(`这是store获取的${auth_code}`)

              that = _this3;

              setTimeout(function () {
                that.showSkeleton = false;
              }, 3000);

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  mounted: function mounted() {

    var that = this;
    var currentuser_code = wx.getStorageSync('auth_code');
    console.log(currentuser_code);
    if (currentuser_code) {
      return;
    } else {
      that.signup();
    }

    //      this.signup()
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_461a868a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__ = __webpack_require__(213);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_group_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_318ee708_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_group_vue__ = __webpack_require__(209);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(173)
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_more_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ebe8fe8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_more_vue__ = __webpack_require__(206);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(170)
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scroll_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8c08e6c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_scroll_vue__ = __webpack_require__(222);
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

/***/ 206:
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
        "src": __webpack_require__(233),
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container "
  }, [_c('p', {
    staticClass: "componten_name "
  }, [_c('span'), _vm._v("拼团")]), _vm._v(" "), _vm._l((_vm.groups), function(group, index) {
    return _c('div', {
      key: group.uuid,
      staticClass: "group-tiem "
    }, [_c('div', {
      staticClass: "pic "
    }, [_c('img', {
      attrs: {
        "src": _vm.host + group.title_image_url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info-box "
    }, [_c('div', {
      staticClass: "group-info "
    }, [_c('div', {
      staticClass: "group-text "
    }, [_vm._v(_vm._s(group.title))]), _vm._v(" "), _c('div', {
      staticClass: "group-prj-price "
    }, [_vm._v("$" + _vm._s(group.current_price) + " "), _c('span', {
      staticClass: "price "
    }, [_vm._v("¥" + _vm._s(group.original_price))])])]), _vm._v(" "), _c('div', {
      staticClass: "join-group ",
      attrs: {
        "data-groupname": _vm.groupname,
        "data-uuid": group.uuid,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.goGroup
      }
    }, [_vm._v(_vm._s(group.button.text))])])])
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

/***/ 213:
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

/***/ 220:
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
  }, [_vm._v("没事干研究院很酷"), _c('div', {
    staticClass: "explain",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.openBox
    }
  }, [_vm._v("?")])]), _vm._v(" "), _c('Scroll', {
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

/***/ 222:
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
      staticClass: "scroll-view-item_H  ",
      attrs: {
        "data-uuid": boon.uuid
      }
    }, [_c('div', {
      staticClass: "recomend-box "
    }, [_c('div', {
      staticClass: "recomend-pic  "
    }, [_c('img', {
      attrs: {
        "src": _vm.host + boon.title_image_url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "recomend-box-inner "
    }, [_c('div', {
      staticClass: "recomend-intitle "
    }, [_vm._v(_vm._s(boon.title))]), _vm._v(" "), _c('div', {
      staticClass: "recomend-intitle little_title "
    }, [_vm._v(_vm._s(boon.description))])])]), _vm._v(" "), _c('div', {
      staticClass: "recomend-method ",
      attrs: {
        "data-title": boon.title,
        "data-uuid": boon.uuid,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.attendBoon
      }
    }, [_vm._v(_vm._s(boon.button.text))])])
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

/***/ 233:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAZxJREFUeAHt3EFqwkAYhmFTKghduusluhe66Wl6gS5dufQA7S269Aaew1VvUCgITf8sfnEzviOxiS1vQEbzTTLp44cohE4mbicFmpPpL4Zt287i9M+VS7w1TfNVOfd/TAugeTxqt/lYf/XNWAv/lXUFgndKIIFAAGIbJBAIQGyDBAIBiG2QQCAAsQ0SCAQgtkECgQDENkggEIDYBgkEAhDbIIFAAGIbJBAIQGyDBAIBiG2QQCAAsQ0SCAQgvs087iJYxfNFvh5gnJ6xxntc3/6M+X2nbuNukmV3kgNQPH+Ix1O38wq3x4Gv6TPX8zMoJQqjQAWY3C1QShRGgQowuVuglCiMAhVgcrdAKVEYBSrA5O7jL4qvsXOTwQDjXayxrlznJeYdvrxVHtNn2q7PwRc5Nn46eJ/0RSRHPomfQfAGCCQQCEBsgwQCAYhtkEAgALENEggEILZBAoEAxDZIIBCA2AYJBAIQ2yCBQABiGyQQCEBsgwQCAYhtkEAgALENEggEILZBAoEAxGP+F7yuvfdwfRl/xH3L3/liyPEHT051/Ns4/RgAAAAASUVORK5CYII="

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75e665de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(220);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(70);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true
  }
});

/***/ }),

/***/ 99:
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

},[85]);
//# sourceMappingURL=main.js.map