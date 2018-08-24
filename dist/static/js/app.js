global.webpackJsonp([15],{

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_wx__ = __webpack_require__(17);






__WEBPACK_IMPORTED_MODULE_3_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */]);

// const apiDomain = 'http://localhost:5757/v1'
var apiDomain = 'http://47.98.170.205/api/v1';




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */].Store({
  actions: {
    //仅注册用户 传递code  换取openid 建设账户体系

    signup: function signup(_ref) {
      var _this = this;

      var commit = _ref.commit;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var userData, code, data, res, auth_code;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(' \u6CE8\u518C\u7528\u6237-----' + apiDomain + '/wx/login');
                _context.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["a" /* login */])();

              case 3:
                userData = _context.sent;
                code = userData.code;
                data = { code: code };
                _context.next = 8;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'post',
                  url: apiDomain + '/wx/login',
                  data: data
                });

              case 8:
                res = _context.sent;

                // let auth_code = res.auth_code
                auth_code = '7o_WVWb5GZlcpBfASVUl9Q';

                wx.setStorageSync('auth_code', auth_code);
                return _context.abrupt('return', auth_code);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //  获取今日福利信息

    getBoonsToday: function getBoonsToday(_ref2) {
      var _this2 = this;

      var commit = _ref2.commit;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var boons;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('\u83B7\u53D6\u4ECA\u65E5\u798F\u5229-----' + apiDomain + '/boons/today');
                // let boons = await get('/v1/boons/today', {page: this.page})

                _context2.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boons/today',
                  data: {}
                });

              case 3:
                boons = _context2.sent;

                console.log(boons);
                return _context2.abrupt('return', boons);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    //获取福利详情

    getBoons: function getBoons(_ref4, _ref3) {
      var _this3 = this;

      var commit = _ref4.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, []);

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var uuid, auth_code, prjInfo;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(uuid_authCode[1]);
                console.log(uuid_authCode[0]);

                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                _context3.next = 6;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boons/' + uuid + '?auth_code=' + auth_code,
                  data: {}
                });

              case 6:
                prjInfo = _context3.sent;

                console.log('\u83B7\u53D6\u798F\u5229\u8BE6\u60C5----' + apiDomain + '/boons/' + uuid + '?auth_code=' + auth_code);

                console.log(prjInfo);

                return _context3.abrupt('return', prjInfo);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    //参加福利
    attendBoon: function attendBoon(_ref6, _ref5) {
      var _this4 = this;

      var commit = _ref6.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref5, []);

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var boonId, auth_code, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                boonId = uuid_authCode[0] || '12';
                auth_code = uuid_authCode[1];

                console.log(uuid_authCode);
                _context4.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'post',
                  url: apiDomain + '/boons/' + boonId + '/attend?auth_code=' + auth_code
                });

              case 5:
                res = _context4.sent;

                console.log('\u53C2\u52A0\u798F\u5229------' + apiDomain + '/boons/' + boonId + '/attend?auth_code=' + auth_code);
                console.log(res);

                return _context4.abrupt('return', res);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },

    //获取当前拼团活动数据列表

    getGroup: function getGroup(_ref7) {
      var _this5 = this;

      var commit = _ref7.commit;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var group;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activities',
                  data: {}
                });

              case 2:
                group = _context5.sent;

                console.log('store\u7684 \u83B7\u53D6\u62FC\u56E2\u5217\u8868-----' + apiDomain + '/group_activities');

                console.log(group);
                return _context5.abrupt('return', group);

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },

    //获取某一个拼团活动的详情
    getGrouDetail: function getGrouDetail(_ref9, _ref8) {
      var _this6 = this;

      var commit = _ref9.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref8, []);

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var uuid, auth_code, groupDetail;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                _context6.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activities/' + uuid + '?auth_code=' + auth_code
                });

              case 4:
                groupDetail = _context6.sent;

                console.log('\u67D0\u4E2A\u62FC\u56E2\u7684\u8BE6\u60C5----' + apiDomain + '/group_activities/' + uuid + '?auth_code=' + auth_code);

                console.log(groupDetail);
                return _context6.abrupt('return', groupDetail);

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },

    //发起拼团

    initGroup: function initGroup(_ref11, _ref10) {
      var _this7 = this;

      var commit = _ref11.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref10, []);

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var uuid, auth_code, initGroup;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                uuid = uuid_authCode[0] || '123';
                auth_code = uuid_authCode[1];
                _context7.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'post',
                  url: apiDomain + '/group_activities/' + uuid + '/initial?auth_code=' + auth_code

                });

              case 4:
                initGroup = _context7.sent;

                console.log('\u53D1\u8D77\u62FC\u56E2\u7684\u8BA2\u5355----' + apiDomain + '/group_activities/' + uuid + '/initial?auth_code=' + auth_code);

                console.log(initGroup);
                return _context7.abrupt('return', initGroup);

              case 8:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },

    //拼团订单详情
    groupActivities_order: function groupActivities_order(_ref12, uuid) {
      var _this8 = this;

      var commit = _ref12.commit;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var orderData;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log('\u62FC\u56E2\u8BA2\u5355\u8BE6\u60C5----' + apiDomain + '/group_activity_orders/' + uuid);
                _context8.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_orders/' + uuid
                });

              case 3:
                orderData = _context8.sent;
                return _context8.abrupt('return', orderData);

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },

    //拼团发起详情
    groupActivitiesInit: function groupActivitiesInit(_ref13, uuid) {
      var _this9 = this;

      var commit = _ref13.commit;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var initOrder;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.log('\u62FC\u56E2\u53D1\u8D77\u8BE6\u60C5---' + apiDomain + '/group_activity_initials/' + uuid);
                _context9.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_wx__["c" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_initials/' + uuid
                });

              case 3:
                initOrder = _context9.sent;

                console.log(initOrder);
                return _context9.abrupt('return', initOrder);

              case 6:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      }))();
    }
  }

}));

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(95);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56b80cbb", Component.options)
  } else {
    hotAPI.reload("data-v-56b80cbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wx__ = __webpack_require__(17);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]; //注册Store


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_3__utils_wx__["c" /* request */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$alert = __WEBPACK_IMPORTED_MODULE_3__utils_wx__["d" /* alert */];
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {

    pages: ['^pages/home/main', 'pages/project/main', 'pages/groupPj/main', 'pages/groupPj/groupDetail/main', 'pages/groupPj/order/main', 'pages/cards/main', 'pages/user/main', 'pages/user/myGroup/main', 'pages/user/myGroup/myGroupDetail/main', 'pages/user/myboonList/main', 'pages/user/myboonList/myBoon/main', 'pages/test/main'],

    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '没事干研究院很酷',
      'navigationBarTextStyle': 'light',
      'navigationStyle': 'custom'
    },
    'tabBar': {
      selectedColor: '#EA5149',
      list: [{
        pagePath: 'pages/home/main',
        iconPath: 'static/img/home_gray.png',
        selectedIconPath: 'static/img/home_orange.png'
      }, {
        pagePath: 'pages/cards/main',
        iconPath: 'static/img/explore_gray.png',
        selectedIconPath: 'static/img/explore_orange.png'
      }, {
        pagePath: 'pages/user/main',
        iconPath: 'static/img/me_gray.png',
        selectedIconPath: 'static/img/me_orange.png'
      }]
    }
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_wx__ = __webpack_require__(17);





/* harmony default export */ __webpack_exports__["a"] = ({

  methods: {
    signup: function signup() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var codeinfo, code, data, auth, auth_code, currentuser_code;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_wx__["a" /* login */])();

              case 2:
                codeinfo = _context.sent;
                code = codeinfo.code;

                console.log('wx.login 获取的code为：' + code);
                data = { code: code };
                _context.next = 8;
                return post('/v1/wx/login', data);

              case 8:
                auth = _context.sent;

                console.log(auth);
                auth_code = userid.auth_code;

                wx.setStorageSync('auth_code', auth_code);
                currentuser_code = wx.getStorageSync('auth_code'); //当前用户的auth_code

                console.log(currentuser_code);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('小程序启动了');
              _context2.next = 3;
              return _this2.$store.dispatch('signup');

            case 3:
              console.log('注册成功');

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ })

},[79]);
//# sourceMappingURL=app.js.map