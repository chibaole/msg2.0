global.webpackJsonp([15],{

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_util__ = __webpack_require__(11);
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
                console.log(res);
                wx.setStorageSync('auth_code', auth_code);
                wx.setStorageSync('allUserinfo', res.user);
                return _context.abrupt('return', auth_code);

              case 14:
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
        var userData, code, data, res, auth_code, boons;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["f" /* login */])();

              case 2:
                userData = _context3.sent;
                code = userData.code;
                data = { code: code };
                _context3.next = 7;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/wx/login',
                  data: data
                });

              case 7:
                res = _context3.sent;
                auth_code = res.auth_code;
                _context3.next = 11;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boons/today?auth_code=' + auth_code,
                  // url: `${apiDomain}/boons/today`,

                  data: {}
                });

              case 11:
                boons = _context3.sent;
                return _context3.abrupt('return', boons);

              case 13:
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
        var uuid, auth_code, form_id, prjInfo;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                form_id = uuid_authCode[2];
                _context4.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boons/' + uuid + '?auth_code=' + auth_code + '&form_id=' + form_id,
                  data: {}
                });

              case 5:
                prjInfo = _context4.sent;
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

                console.log(res);
                return _context5.abrupt('return', res);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },

    // 福利抽奖活动 邀请好友二维码
    wxCodeBoon: function wxCodeBoon(_ref10, _ref9) {
      var _this6 = this;

      var commit = _ref10.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref9, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var uuid, auth_code, page, res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                uuid = data[0]; // 订单uuid

                auth_code = wx.getStorageSync('auth_code');
                page = data[1];
                _context6.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boons/' + uuid + '/wxaqrcode?auth_code=' + auth_code + '&page=' + page
                });

              case 5:
                res = _context6.sent;
                return _context6.abrupt('return', res);

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },

    // 获取当前拼团活动数据列表
    getGroup: function getGroup(_ref11) {
      var _this7 = this;

      var commit = _ref11.commit;
      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var userData, code, data, res, auth_code, group;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["f" /* login */])();

              case 2:
                userData = _context7.sent;
                code = userData.code;
                data = { code: code };
                _context7.next = 7;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/wx/login',
                  data: data
                });

              case 7:
                res = _context7.sent;
                auth_code = res.auth_code;
                _context7.next = 11;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activities?auth_code=' + auth_code,
                  // url: `${apiDomain}/group_activities`,

                  data: {}
                });

              case 11:
                group = _context7.sent;
                return _context7.abrupt('return', group);

              case 13:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },

    // 拼团活动详情
    getGrouDetail: function getGrouDetail(_ref13, _ref12) {
      var _this8 = this;

      var commit = _ref13.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref12, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var uuid, auth_code, form_id, groupDetail;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                form_id = uuid_authCode[2];
                _context8.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activities/' + uuid + '?auth_code=' + auth_code + '&form_id=' + form_id
                });

              case 5:
                groupDetail = _context8.sent;
                return _context8.abrupt('return', groupDetail);

              case 7:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },

    // 发起拼团
    initGroup: function initGroup(_ref15, _ref14) {
      var _this9 = this;

      var commit = _ref15.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref14, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var uuid, auth_code, initGroup;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                _context9.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/group_activities/' + uuid + '/initial?auth_code=' + auth_code
                });

              case 4:
                initGroup = _context9.sent;
                return _context9.abrupt('return', initGroup);

              case 6:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      }))();
    },

    // 拼团订单详情
    groupActivities_order: function groupActivities_order(_ref17, _ref16) {
      var _this10 = this;

      var commit = _ref17.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref16, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee10() {
        var uuid, auth_code, orderData;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                _context10.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_orders/' + uuid + '?auth_code=' + auth_code
                });

              case 4:
                orderData = _context10.sent;
                return _context10.abrupt('return', orderData);

              case 6:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this10);
      }))();
    },

    // 拼团发起详情
    groupActivitiesInit: function groupActivitiesInit(_ref19, _ref18) {
      var _this11 = this;

      var commit = _ref19.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref18, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee11() {
        var uuid, auth_code, initOrder;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                uuid = uuid_authCode[0];

                uuid === '' ? uuid = '1223' : uuid = uuid_authCode[0];
                auth_code = uuid_authCode[1];
                _context11.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_initials/' + uuid + '?auth_code=' + auth_code
                });

              case 5:
                initOrder = _context11.sent;
                return _context11.abrupt('return', initOrder);

              case 7:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this11);
      }))();
    },

    // 参与拼团
    attendGroupActivities: function attendGroupActivities(_ref21, _ref20) {
      var _this12 = this;

      var commit = _ref21.commit;

      var uuid_authCode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref20, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee12() {
        var attendData;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'post',
                  url: apiDomain + '/group_activity_initials/' + uuid_authCode[0] + '/attend?auth_code=' + uuid_authCode[1]
                });

              case 2:
                attendData = _context12.sent;
                return _context12.abrupt('return', attendData);

              case 4:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this12);
      }))();
    },

    // 拼团活动 邀请好友二维码
    wxCode: function wxCode(_ref23, _ref22) {
      var _this13 = this;

      var commit = _ref23.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref22, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee13() {
        var uuid, auth_code, page, res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                uuid = data[0]; // 订单uuid

                auth_code = wx.getStorageSync('auth_code');
                page = data[1];
                _context13.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_initials/' + uuid + '/wxaqrcode?auth_code=' + auth_code + '&page=' + page
                });

              case 5:
                res = _context13.sent;
                return _context13.abrupt('return', res);

              case 7:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, _this13);
      }))();
    },

    // 我的拼团订单详情页面
    myGroupList: function myGroupList(_ref25, _ref24) {
      var _this14 = this;

      var commit = _ref25.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref24, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee14() {
        var page, size, auth_code, myGroupActivity;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                page = data[0];
                size = data[1];
                auth_code = data[2];
                _context14.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_orders/mine?page=' + page + '&size=' + size + '&auth_code=' + auth_code
                });

              case 5:
                myGroupActivity = _context14.sent;
                return _context14.abrupt('return', myGroupActivity || []);

              case 7:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, _this14);
      }))();
    },

    // 我的拼团订单详情
    myBoonDetail: function myBoonDetail(_ref27, _ref26) {
      var _this15 = this;

      var commit = _ref27.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref26, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee15() {
        var uuid, auth_code, res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                uuid = data[0];
                auth_code = data[1];
                _context15.next = 4;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/group_activity_orders/' + uuid + '?auth_code=' + auth_code
                });

              case 4:
                res = _context15.sent;
                return _context15.abrupt('return', res);

              case 6:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, _this15);
      }))();
    },

    // 我的抽奖
    myBoonList: function myBoonList(_ref29, _ref28) {
      var _this16 = this;

      var commit = _ref29.commit;

      var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref28, []);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee16() {
        var page, size, auth_code, myBoons;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                page = data[0];
                size = data[1];
                auth_code = data[2];
                _context16.next = 5;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                  method: 'get',
                  url: apiDomain + '/boon_orders/mine?page=' + page + '&size=' + size + '&auth_code=' + auth_code
                });

              case 5:
                myBoons = _context16.sent;
                return _context16.abrupt('return', myBoons || []);

              case 7:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, _this16);
      }))();
    }
  }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'myBoonDetail', function myBoonDetail(_ref31, _ref30) {
    var _this17 = this;

    var commit = _ref31.commit;

    var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref30, []);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee17() {
      var uuid, auth_code, res;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              uuid = data[0];
              auth_code = data[1];
              _context17.next = 4;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'get',
                url: apiDomain + '/boon_orders/' + uuid + '?auth_code=' + auth_code
              });

            case 4:
              res = _context17.sent;
              return _context17.abrupt('return', res);

            case 6:
            case 'end':
              return _context17.stop();
          }
        }
      }, _callee17, _this17);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'boonAddress', function boonAddress(_ref33, _ref32) {
    var _this18 = this;

    var commit = _ref33.commit;

    var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref32, []);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee18() {
      var uuid, auth_code, attributes, order_address, jsonData, res;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
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
              _context18.next = 7;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'put',
                url: apiDomain + '/boon_orders/' + uuid,
                data: order_address,
                header: {
                  'content-type': 'application/json'
                }
              });

            case 7:
              res = _context18.sent;
              return _context18.abrupt('return', res);

            case 9:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, _this18);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'groupAddress', function groupAddress(_ref35, _ref34) {
    var _this19 = this;

    var commit = _ref35.commit;

    var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_ref34, []);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee19() {
      var uuid, auth_code, attributes, order_address, res;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
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
              _context19.next = 6;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'put',
                url: apiDomain + '/group_activity_orders/' + uuid,
                data: order_address
              });

            case 6:
              res = _context19.sent;
              return _context19.abrupt('return', res);

            case 8:
            case 'end':
              return _context19.stop();
          }
        }
      }, _callee19, _this19);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'group_pay', function group_pay(_ref36, uuid) {
    var _this20 = this;

    var commit = _ref36.commit;
    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee20() {
      var _uuid, auth_code, payres;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _uuid = uuid;
              auth_code = wx.getStorageSync('auth_code');
              payres = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'get',
                url: apiDomain + '/group_activity_orders/' + _uuid + '/pay?auth_code=' + auth_code
              });
              return _context20.abrupt('return', payres);

            case 4:
            case 'end':
              return _context20.stop();
          }
        }
      }, _callee20, _this20);
    }))();
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_actions, 'user_info', function user_info(_ref37, uuid) {
    var _this21 = this;

    var commit = _ref37.commit;
    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee21() {
      var auth_code, user_profile;
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              auth_code = wx.getStorageSync('auth_code');
              _context21.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_wx__["d" /* request */])({
                method: 'get',
                url: apiDomain + '/users/profile?auth_code=' + auth_code
              });

            case 3:
              user_profile = _context21.sent;
              return _context21.abrupt('return', user_profile);

            case 5:
            case 'end':
              return _context21.stop();
          }
        }
      }, _callee21, _this21);
    }))();
  }), _actions)

}));

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
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
    hotAPI.createRecord("data-v-7ff198b0", Component.options)
  } else {
    hotAPI.reload("data-v-7ff198b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mta_wechat_analysis__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mta_wechat_analysis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mta_wechat_analysis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_wx__ = __webpack_require__(10);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]; // 注册Store

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_4__utils_wx__["d" /* request */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$alert = __WEBPACK_IMPORTED_MODULE_4__utils_wx__["e" /* alert */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    "enablePullDownRefresh": false,
    "disableScroll": true,
    usingComponents: {
      'skeleton': '../static/skeleton/skeleton'
    },
    pages: ['^pages/home/main', 'pages/project/main', 'pages/groupPj/main', 'pages/groupPj/groupDetail/main', 'pages/groupPj/order/main', 'pages/cards/main', 'pages/user/main', 'pages/user/myGroup/main', 'pages/user/myGroup/myGroupDetail/main', 'pages/user/myboonList/main', 'pages/user/myboonList/myBoon/main', 'pages/poster/main'],

    'window': {
      'backgroundTextStyle': 'dark',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '没事干研究院很酷',
      'navigationBarTextStyle': 'black',
      'navigationStyle': 'custom'
    },
    'tabBar': {
      selectedColor: '#EA5149',
      list: [{
        pagePath: 'pages/home/main',
        iconPath: 'static/img/tabbar-home.png',
        selectedIconPath: 'static/img/tabbar-home-selected.png'
      }, {
        pagePath: 'pages/user/main',
        iconPath: 'static/img/tabbar-user.png',
        selectedIconPath: 'static/img/tabbar-user-selected.png'
      }]
    }
    // {
    //   pagePath: 'pages/cards/main',
    //     iconPath: 'static/img/explore_gray.png',
    //   selectedIconPath: 'static/img/explore_orange.png'
    // },

  } });

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_wx__ = __webpack_require__(10);





/* harmony default export */ __webpack_exports__["a"] = ({
  onShow: function onShow() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var auth_code, vm;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              auth_code = wx.getStorageSync('auth_code');

              console.log(auth_code);

              if (!auth_code) {
                _context.next = 5;
                break;
              }

              _context.next = 7;
              break;

            case 5:
              _context.next = 7;
              return _this.$store.dispatch('signup');

            case 7:

              //      wx.login({
              //        success(res) {
              //          console.log('login 函数ok')
              //
              //          let code = res.code
              //          let data = {code: code}
              //          console.log(res)
              //
              //          wx.request({
              //            url: `https://msg.chibaole.cc/api/v1/wx/login`,
              //            data: data,
              //            method: 'POST',
              //            header: {
              //              'content-type': 'application/json' // 默认值
              //            },
              //            success(res) {
              //              console.log(res)
              //
              //              let auth_code = res.data.data.auth_code
              //              wx.setStorageSync('auth_code', auth_code)
              //
              //            },
              //            fail(e) {
              //              console.log(e)
              //            }
              //          })
              //
              //
              //        }
              //      })


              console.log('获取设备信息');
              vm = _this;

              wx.getSystemInfo({
                success: function success(res) {
                  console.log(res);
                  wx.setStorageSync('phoneModel', res.model);
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

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ })

},[76]);
//# sourceMappingURL=app.js.map