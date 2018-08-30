global.webpackJsonp([9],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
//
//
//
//
//
//
//
//
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
      hidden: true

    };
  },
  onLoad: function onLoad() {
    var promise1 = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      wx.getImageInfo({
        src: '../../../static/img/qrcode.jpg',
        success: function success(res) {
          console.log(res);
          resolve(res);
        }
      });
    });
    var promise2 = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      wx.getImageInfo({
        src: '../../../static/img/qrbg.png',
        success: function success(res) {
          console.log(res);
          resolve(res);
        }
      });
    });
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([promise1, promise2]).then(function (res) {
      console.log(res);
      var ctx = wx.createCanvasContext('shareImg');

      //主要就是计算好各个图文的位置
      ctx.drawImage('../../' + res[0].path, 158, 190, 210, 210);
      ctx.drawImage('../../' + res[1].path, 0, 0, 545, 771);

      ctx.setTextAlign('center');
      ctx.setFillStyle('#ffffff');
      ctx.setFontSize(22);
      ctx.fillText('分享文字描述1', 545 / 2, 130);
      ctx.fillText('分享文字描述2', 545 / 2, 160);

      ctx.stroke();
      ctx.draw();
    });
  },

  methods: {
    /**
     * 生成分享图
     */
    share: function share() {
      var that = this;

      console.log('生成开始');
      wx.showLoading({
        title: '努力生成中...'
      });
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 545,
        height: 771,
        destWidth: 545,
        destHeight: 771,
        canvasId: 'shareImg',
        success: function success(res) {
          console.log(res.tempFilePath);

          //            that.setData({
          //              prurl: res.tempFilePath,
          //              hidden: false
          //            })

          that.prurl = res.tempFilePath;
          that.hiddebn = false;

          wx.hideLoading();
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },


    /**
     * 保存到相册
     */
    save: function save() {
      var that = this;
      //生产环境时 记得这里要加入获取相册授权的代码
      wx.saveImageToPhotosAlbum({
        filePath: that.data.prurl,
        success: function success(res) {
          wx.showModal({
            content: '图片已保存到相册，赶紧晒一下吧~',
            showCancel: false,
            confirmText: '好哒',
            confirmColor: '#72B9C3',
            success: function success(res) {
              if (res.confirm) {
                console.log('用户点击确定');

                //                  that.setData({
                //                    hidden: true
                //                  })

                that.hidden = true;
              }
            }
          });
        }
      });
    }
  }

});

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('canvas', {
    staticStyle: {
      "width": "545px",
      "height": "771px"
    },
    attrs: {
      "canvas-id": "shareImg"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "preview",
    attrs: {
      "hidden": _vm.hidden
    }
  }, [_c('image', {
    attrs: {
      "src": _vm.prurl,
      "mode": "widthFix"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存分享图")])], 1), _vm._v(" "), _c('button', {
    staticClass: "share",
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.share
    }
  }, [_vm._v("生成分享图")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0291045c", esExports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0291045c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(205);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(169)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0291045c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0291045c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/test2/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0291045c", Component.options)
  } else {
    hotAPI.reload("data-v-0291045c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(73);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'canvasdrawer': '../../../static/canvasdrawer/canvasdrawer'
    }
  }
});

/***/ })

},[88]);
//# sourceMappingURL=main.js.map