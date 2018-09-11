global.webpackJsonp([15],{

/***/ 182:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_wx__ = __webpack_require__(10);






var _actions;





__WEBPACK_IMPORTED_MODULE_5_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_vuex__["a" /* default */]);
// const apiDomain = 'http://localhost:5757/v1'
// const apiDomain = 'http://47.98.170.205/api/v1'
var apiDomain = 'https://msg.chibaole.cc/api/v1';
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_6_vuex__["a" /* default */].Store({

  actions: (_actions = {

    // 仅注册用户 传递code  换取openid 建设账户体系
    signup: function signup(_ref) {
      var _this = this;

      var commit = _ref.commit;
      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee() {
        var userData, code, data, res, auth_code;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["f" /* login */])();

              case 2:
                userData = _context.sent;
                code = userData.code;
                data = { code: code };
                _context.next = 7;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/wx/login',
                  data: data
                });

              case 7:
                res = _context.sent;
                auth_code = '';

                auth_code = res.auth_code;
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

    // 用户点击 存储用户信息
    saveInfo: function saveInfo(_ref3, _ref2) {
      var _this2 = this;

      var commit = _ref3.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var auth_code, urlData, res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                auth_code = wx.getStorageSync('auth_code');
                urlData = {
                  auth_code: auth_code,
                  encrypted_data: data[0],
                  iv: data[1],
                  signature: data[2],
                  raw_data: data[3]
                };
                _context2.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/wx/save_user_info?auth_code=' + auth_code,
                  data: urlData
                });

              case 4:
                res = _context2.sent;

                wx.setStorageSync('userinfo', res.user); // 本地存储userinfo
                return _context2.abrupt('return', res.user);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    //  获取今日福利信息
    getBoonsToday: function getBoonsToday(_ref4) {
      var _this3 = this;

      var commit = _ref4.commit;
      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var boons;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('\u83B7\u53D6\u4ECA\u65E5\u798F\u5229-----' + apiDomain + '/boons/today');
                _context3.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boons/today',
                  data: {}
                });

              case 3:
                boons = _context3.sent;
                return _context3.abrupt('return', boons);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    // 获取福利详情
    getBoons: function getBoons(_ref6, _ref5) {
      var _this4 = this;

      var commit = _ref6.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref5, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var uuid, auth_code, prjInfo;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                _context4.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boons/' + uuid + '?auth_code=' + auth_code,
                  data: {}
                });

              case 4:
                prjInfo = _context4.sent;

                console.log('\u83B7\u53D6\u798F\u5229\u8BE6\u60C5----' + apiDomain + '/boons/' + uuid + '?auth_code=' + auth_code);
                return _context4.abrupt('return', prjInfo);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },

    // 参加福利
    attendBoon: function attendBoon(_ref8, _ref7) {
      var _this5 = this;

      var commit = _ref8.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref7, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var boonId, auth_code, res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                boonId = uuid_authCode[0] || '12';
                auth_code = uuid_authCode[1];
                _context5.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/boons/' + boonId + '/attend?auth_code=' + auth_code
                });

              case 4:
                res = _context5.sent;

                console.log('\u53C2\u52A0\u798F\u5229------' + apiDomain + '/boons/' + boonId + '/attend?auth_code=' + auth_code);
                return _context5.abrupt('return', res);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },

    // 获取当前拼团活动数据列表
    getGroup: function getGroup(_ref9) {
      var _this6 = this;

      var commit = _ref9.commit;
      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var auth_code, group;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                auth_code = wx.getStorageSync('auth_code');
                _context6.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activities?auth_code=' + auth_code,
                  data: {}
                });

              case 3:
                group = _context6.sent;

                console.log('\u62FC\u56E2\u6D3B\u52A8\u5217\u8868' + apiDomain + '/group_activities?auth_code=' + auth_code);
                return _context6.abrupt('return', group);

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },

    // 拼团活动详情
    getGrouDetail: function getGrouDetail(_ref11, _ref10) {
      var _this7 = this;

      var commit = _ref11.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref10, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var uuid, auth_code, groupDetail;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];

                console.log('\u62FC\u56E2\u6D3B\u52A8\u8BE6\u60C5----' + apiDomain + '/group_activities/' + uuid + '?auth_code=' + auth_code);
                _context7.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activities/' + uuid + '?auth_code=' + auth_code
                });

              case 5:
                groupDetail = _context7.sent;
                return _context7.abrupt('return', groupDetail);

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },

    // 发起拼团
    initGroup: function initGroup(_ref13, _ref12) {
      var _this8 = this;

      var commit = _ref13.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref12, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var uuid, auth_code, initGroup;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];

                console.log('\u53D1\u8D77\u62FC\u56E2\u7684\u8BA2\u5355----' + apiDomain + '/group_activities/' + uuid + '/initial?auth_code=' + auth_code);
                _context8.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/group_activities/' + uuid + '/initial?auth_code=' + auth_code
                });

              case 5:
                initGroup = _context8.sent;
                return _context8.abrupt('return', initGroup);

              case 7:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },

    // 拼团订单详情
    groupActivities_order: function groupActivities_order(_ref15, _ref14) {
      var _this9 = this;

      var commit = _ref15.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref14, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var uuid, auth_code, orderData;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];

                console.log('\u62FC\u56E2\u8BA2\u5355\u8BE6\u60C5-------' + apiDomain + '/group_activity_orders/' + uuid + '?auth_code=' + auth_code);
                _context9.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_orders/' + uuid + '?auth_code=' + auth_code
                });

              case 5:
                orderData = _context9.sent;
                return _context9.abrupt('return', orderData);

              case 7:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      }))();
    },

    // 拼团发起详情
    groupActivitiesInit: function groupActivitiesInit(_ref17, _ref16) {
      var _this10 = this;

      var commit = _ref17.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref16, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee10() {
        var uuid, auth_code, initOrder;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                uuid = uuid_authCode[0];

                uuid === '' ? uuid = '1223' : uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];

                console.log('\u62FC\u56E2\u5355\u8BE6\u60C5---' + apiDomain + '/group_activity_initials/' + uuid + '?auth_code=' + auth_code);
                _context10.next = 6;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_initials/' + uuid + '?auth_code=' + auth_code
                });

              case 6:
                initOrder = _context10.sent;
                return _context10.abrupt('return', initOrder);

              case 8:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this10);
      }))();
    },

    // 参与拼团
    attendGroupActivities: function attendGroupActivities(_ref19, _ref18) {
      var _this11 = this;

      var commit = _ref19.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref18, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee11() {
        var attendData;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                console.log('\u53C2\u4E0E\u62FC\u56E2------------' + apiDomain + '/group_activity_initials/' + uuid_authCode[0] + '/attend?auth_code=' + uuid_authCode[1]);
                _context11.next = 3;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/group_activity_initials/' + uuid_authCode[0] + '/attend?auth_code=' + uuid_authCode[1]
                });

              case 3:
                attendData = _context11.sent;

                console.log(attendData);
                if (attendData == undefined) {
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_util__["b" /* showModal */])('参与失败', '你已经在当前的拼团');
                }
                return _context11.abrupt('return', attendData);

              case 7:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this11);
      }))();
    },

    // 邀请好友二维码
    wxCode: function wxCode(_ref21, _ref20) {
      var _this12 = this;

      var commit = _ref21.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref20, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee12() {
        var uuid, auth_code, page, res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                uuid = data[0]; // 订单uuid

                auth_code = wx.getStorageSync('auth_code');
                page = data[1];
                _context12.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_initials/' + uuid + '/wxaqrcode?auth_code=' + auth_code + '&page=' + page
                });

              case 5:
                res = _context12.sent;
                return _context12.abrupt('return', res);

              case 7:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this12);
      }))();
    },

    // 我的拼团订单详情页面
    myGroupList: function myGroupList(_ref23, _ref22) {
      var _this13 = this;

      var commit = _ref23.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref22, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee13() {
        var page, size, auth_code, myGroupActivity;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                page = data[0];
                size = data[1];
                auth_code = data[2];
                _context13.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_orders/mine?page=' + page + '&size=' + size + '&auth_code=' + auth_code
                });

              case 5:
                myGroupActivity = _context13.sent;
                return _context13.abrupt('return', myGroupActivity || []);

              case 7:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, _this13);
      }))();
    },

    // 我的拼团订单详情
    myBoonDetail: function myBoonDetail(_ref25, _ref24) {
      var _this14 = this;

      var commit = _ref25.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref24, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee14() {
        var uuid, auth_code, res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                uuid = data[0];
                auth_code = data[1];
                _context14.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_orders/' + uuid + '?auth_code=' + auth_code
                });

              case 4:
                res = _context14.sent;
                return _context14.abrupt('return', res);

              case 6:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, _this14);
      }))();
    },

    // 我的抽奖
    myBoonList: function myBoonList(_ref27, _ref26) {
      var _this15 = this;

      var commit = _ref27.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref26, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee15() {
        var page, size, auth_code, myBoons;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                page = data[0];
                size = data[1];
                auth_code = data[2];
                _context15.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boon_orders/mine?page=' + page + '&size=' + size + '&auth_code=' + auth_code
                });

              case 5:
                myBoons = _context15.sent;
                return _context15.abrupt('return', myBoons || []);

              case 7:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, _this15);
      }))();
    }
  }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'myBoonDetail', function myBoonDetail(_ref29, _ref28) {
    var _this16 = this;

    var commit = _ref29.commit;

    var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref28, []);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee16() {
      var uuid, auth_code, res;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              console.log('我的抽奖订单详情');
              uuid = data[0];
              auth_code = data[1];
              _context16.next = 5;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'get',
                url: apiDomain + '/boon_orders/' + uuid + '?auth_code=' + auth_code
              });

            case 5:
              res = _context16.sent;
              return _context16.abrupt('return', res);

            case 7:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, _this16);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'boonAddress', function boonAddress(_ref31, _ref30) {
    var _this17 = this;

    var commit = _ref31.commit;

    var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref30, []);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee17() {
      var uuid, auth_code, attributes, order_address, jsonData, res;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              uuid = data[0];
              auth_code = data[1];
              attributes = data[2];
              order_address = {
                auth_code: auth_code,
                boon_order: {
                  address_attributes: attributes
                }
              };
              jsonData = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(order_address);
              _context17.next = 7;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'put',
                url: apiDomain + '/boon_orders/' + uuid,
                data: order_address,
                header: {
                  'content-type': 'application/json'
                }
              });

            case 7:
              res = _context17.sent;
              return _context17.abrupt('return', res);

            case 9:
            case 'end':
              return _context17.stop();
          }
        }
      }, _callee17, _this17);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'groupAddress', function groupAddress(_ref33, _ref32) {
    var _this18 = this;

    var commit = _ref33.commit;

    var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref32, []);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee18() {
      var uuid, auth_code, attributes, order_address, res;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              uuid = data[0];
              auth_code = data[1];
              attributes = data[2];
              order_address = {
                auth_code: auth_code,
                group_activity_order: {
                  address_attributes: attributes
                }
              };
              _context18.next = 6;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'put',
                url: apiDomain + '/group_activity_orders/' + uuid,
                data: order_address
              });

            case 6:
              res = _context18.sent;
              return _context18.abrupt('return', res);

            case 8:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, _this18);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'group_pay', function group_pay(_ref34, uuid) {
    var _this19 = this;

    var commit = _ref34.commit;
    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee19() {
      var _uuid, auth_code, payres;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _uuid = uuid;
              auth_code = wx.getStorageSync('auth_code');

              console.log(apiDomain + '/group_activity_orders/' + _uuid + '/pay?auth_code=' + auth_code);
              payres = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'get',
                url: apiDomain + '/group_activity_orders/' + _uuid + '/pay?auth_code=' + auth_code
              });
              return _context19.abrupt('return', payres);

            case 5:
            case 'end':
              return _context19.stop();
          }
        }
      }, _callee19, _this19);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'user_info', function user_info(_ref35, uuid) {
    var _this20 = this;

    var commit = _ref35.commit;
    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee20() {
      var auth_code, user_profile;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              auth_code = wx.getStorageSync('auth_code');
              _context20.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'get',
                url: apiDomain + '/users/profile?auth_code=' + auth_code
              });

            case 3:
              user_profile = _context20.sent;
              return _context20.abrupt('return', user_profile);

            case 5:
            case 'end':
              return _context20.stop();
          }
        }
      }, _callee20, _this20);
    }))();
  }), _actions)

}));

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(94);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wx__ = __webpack_require__(10);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]; // 注册Store


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_3__utils_wx__["d" /* request */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$alert = __WEBPACK_IMPORTED_MODULE_3__utils_wx__["e" /* alert */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {

    usingComponents: {
      'skeleton': '../static/skeleton/skeleton'
    },
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
        iconPath: 'static/img/home.png',
        selectedIconPath: 'static/img/homed.png'
      }, {
        pagePath: 'pages/user/main',
        iconPath: 'static/img/me.png',
        selectedIconPath: 'static/img/me_.png'
      }]
    }
    // {
    //   pagePath: 'pages/cards/main',
    //     iconPath: 'static/img/explore_gray.png',
    //   selectedIconPath: 'static/img/explore_orange.png'
    // },

  } });

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_wx__ = __webpack_require__(10);





/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var auth_code, vm;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              auth_code = wx.getStorageSync('auth_code');

              if (!auth_code) {
                _context.next = 4;
                break;
              }

              _context.next = 6;
              break;

            case 4:
              _context.next = 6;
              return _this.$store.dispatch('signup');

            case 6:

              console.log('获取设备信息');
              vm = _this;

              wx.getSystemInfo({
                success: function success(res) {
                  console.log(res);
                  var totalTopHeight = 68;

                  if (res.model.indexOf('iPhone X') !== -1) {
                    totalTopHeight = 88;
                  } else if (res.model.indexOf('iPhone') !== -1) {
                    totalTopHeight = 64;
                  }
                  console.log('totalTopHeight' + totalTopHeight);

                  var statusBarHeight = res.statusBarHeight;
                  var titleBarHeight = totalTopHeight - res.statusBarHeight;

                  vm.statusBarHeight = statusBarHeight;

                  vm.titleBarHeight = titleBarHeight;
                  vm.top = statusBarHeight + titleBarHeight;
                },
                failure: function failure() {
                  vm.globalData.statusBarHeight = 0;
                  vm.globalData.titleBarHeight = 0;
                }
              });

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ })

},[78]);
//# sourceMappingURL=app.js.map