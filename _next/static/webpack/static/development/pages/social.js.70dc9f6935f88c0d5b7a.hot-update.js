webpackHotUpdate("static/development/pages/social.js",{

/***/ "./pages/social.js":
/*!*************************!*\
  !*** ./pages/social.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Window */ \"./components/Window.js\");\n/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Heading */ \"./components/Heading.js\");\n/* harmony import */ var _components_NextLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NextLink */ \"./components/NextLink.js\");\n/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/constants */ \"./util/constants.js\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../main.scss */ \"./main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/personal-website/pages/social.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  text-decoration: none !important;\\n  :hover {\\n    text-decoration: underline !important;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_components_NextLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_templateObject());\n_c = StyledLink;\n\nvar Social = function Social() {\n  var social = _util_constants__WEBPACK_IMPORTED_MODULE_9__[\"windows\"].social;\n\n  var email = _util_constants__WEBPACK_IMPORTED_MODULE_9__[\"links\"].email,\n      restLinks = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_util_constants__WEBPACK_IMPORTED_MODULE_9__[\"links\"], [\"email\"]);\n\n  var socialLinks = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.reduce(restLinks, function (result, value, key) {\n    var link = {\n      title: key,\n      href: value\n    };\n    if (result.length === 0 || result[result.length - 1].length === 2) result.push([link]);else result[result.length - 1].push(link);\n    return result;\n  }, []);\n\n  return __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, social, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    className: \"d-block d-lg-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    tag: \"h2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Say Hello \\uD83D\\uDC40\"), __jsx(\"div\", {\n    className: \"ml-md-5 pl-md-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    tag: \"h4\",\n    color: social.color,\n    mt: \"0.5rem\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(StyledLink, {\n    href: \"mailto:\".concat(email),\n    external: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"m\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 59\n    }\n  }, email))), __jsx(\"div\", {\n    className: \"d-block d-md-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(socialLinks, function (linkSet, index) {\n    return __jsx(\"div\", {\n      className: \"d-flex\",\n      key: \"lintset-\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(linkSet, function (_ref) {\n      var title = _ref.title,\n          href = _ref.href;\n      return __jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        tag: \"h4\",\n        color: social.color,\n        mr: \"1.5rem\",\n        mt: \"0.5rem\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 19\n        }\n      }, __jsx(StyledLink, {\n        href: href,\n        external: true,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }\n      }, title));\n    }));\n  })))));\n};\n\n_c2 = Social;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledLink\");\n$RefreshReg$(_c2, \"Social\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb2NpYWwuanM/OTIxNyJdLCJuYW1lcyI6WyJTdHlsZWRMaW5rIiwic3R5bGVkIiwiTGluayIsIlNvY2lhbCIsInNvY2lhbCIsIndpbmRvd3MiLCJlbWFpbCIsImxpbmtzIiwicmVzdExpbmtzIiwic29jaWFsTGlua3MiLCJfIiwicmVkdWNlIiwicmVzdWx0IiwidmFsdWUiLCJrZXkiLCJsaW5rIiwidGl0bGUiLCJocmVmIiwibGVuZ3RoIiwicHVzaCIsImNvbG9yIiwibWFwIiwibGlua1NldCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsaUVBQU0sQ0FBQ0MsNERBQUQsQ0FBVCxtQkFBaEI7S0FBTUYsVTs7QUFPTixJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUEsTUFDWEMsTUFEVyxHQUNBQyx1REFEQSxDQUNYRCxNQURXOztBQUFBLE1BRVhFLEtBRlcsR0FFYUMscURBRmIsQ0FFWEQsS0FGVztBQUFBLE1BRURFLFNBRkMsc0dBRWFELHFEQUZiOztBQUluQixNQUFNRSxXQUFXLEdBQUdDLDZDQUFDLENBQUNDLE1BQUYsQ0FBU0gsU0FBVCxFQUFvQixVQUFDSSxNQUFELEVBQVNDLEtBQVQsRUFBZ0JDLEdBQWhCLEVBQXdCO0FBQzlELFFBQU1DLElBQUksR0FBRztBQUFFQyxXQUFLLEVBQUVGLEdBQVQ7QUFBY0csVUFBSSxFQUFFSjtBQUFwQixLQUFiO0FBQ0EsUUFBSUQsTUFBTSxDQUFDTSxNQUFQLEtBQWtCLENBQWxCLElBQXVCTixNQUFNLENBQUNBLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUFqQixDQUFOLENBQTBCQSxNQUExQixLQUFxQyxDQUFoRSxFQUFtRU4sTUFBTSxDQUFDTyxJQUFQLENBQVksQ0FBQ0osSUFBRCxDQUFaLEVBQW5FLEtBQ0tILE1BQU0sQ0FBQ0EsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLENBQWpCLENBQU4sQ0FBMEJDLElBQTFCLENBQStCSixJQUEvQjtBQUNMLFdBQU9ILE1BQVA7QUFDRCxHQUxtQixFQUtqQixFQUxpQixDQUFwQjs7QUFPQSxTQUNFLE1BQUMsMERBQUQseUZBQVlSLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVMsT0FBRyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUlFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVMsT0FBRyxFQUFDLElBQWI7QUFBa0IsU0FBSyxFQUFFQSxNQUFNLENBQUNnQixLQUFoQztBQUF1QyxNQUFFLEVBQUMsUUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFZLFFBQUksbUJBQVlkLEtBQVosQ0FBaEI7QUFBcUMsWUFBUSxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUEsS0FBSixDQUE5QyxDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dJLDZDQUFDLENBQUNXLEdBQUYsQ0FBTVosV0FBTixFQUFtQixVQUFDYSxPQUFELEVBQVVDLEtBQVY7QUFBQSxXQUNsQjtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQXdCLFNBQUcsb0JBQWFBLEtBQWIsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHYiw2Q0FBQyxDQUFDVyxHQUFGLENBQU1DLE9BQU4sRUFBZTtBQUFBLFVBQUdOLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFVBQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLGFBQ2QsTUFBQywyREFBRDtBQUFTLFdBQUcsRUFBQyxJQUFiO0FBQWtCLGFBQUssRUFBRWIsTUFBTSxDQUFDZ0IsS0FBaEM7QUFBdUMsVUFBRSxFQUFDLFFBQTFDO0FBQW1ELFVBQUUsRUFBQyxRQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxVQUFEO0FBQVksWUFBSSxFQUFFSCxJQUFsQjtBQUF3QixnQkFBUSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWtDRCxLQUFsQyxDQURGLENBRGM7QUFBQSxLQUFmLENBREgsQ0FEa0I7QUFBQSxHQUFuQixDQURILENBSkYsQ0FKRixDQURGLENBREY7QUF5QkQsQ0FwQ0Q7O01BQU1iLE07QUFzQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc29jaWFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL1dpbmRvdyc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRpbmcnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL05leHRMaW5rJztcbmltcG9ydCB7IHdpbmRvd3MsIGxpbmtzIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0ICcuLi9tYWluLnNjc3MnO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBTb2NpYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc29jaWFsIH0gPSB3aW5kb3dzO1xuICBjb25zdCB7IGVtYWlsLCAuLi5yZXN0TGlua3MgfSA9IGxpbmtzO1xuXG4gIGNvbnN0IHNvY2lhbExpbmtzID0gXy5yZWR1Y2UocmVzdExpbmtzLCAocmVzdWx0LCB2YWx1ZSwga2V5KSA9PiB7XG4gICAgY29uc3QgbGluayA9IHsgdGl0bGU6IGtleSwgaHJlZjogdmFsdWUgfTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCB8fCByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLmxlbmd0aCA9PT0gMikgcmVzdWx0LnB1c2goW2xpbmtdKTtcbiAgICBlbHNlIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0ucHVzaChsaW5rKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBbXSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxXaW5kb3cgey4uLnNvY2lhbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1mbGV4XCI+XG4gICAgICAgIDxIZWFkaW5nIHRhZz1cImgyXCI+XG4gICAgICAgICAgU2F5IEhlbGxvIPCfkYBcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLW1kLTUgcGwtbWQtNVwiPlxuICAgICAgICAgIDxIZWFkaW5nIHRhZz1cImg0XCIgY29sb3I9e3NvY2lhbC5jb2xvcn0gbXQ9XCIwLjVyZW1cIj5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfSBleHRlcm5hbD48bT57ZW1haWx9PC9tPjwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbWQtZmxleFwiPlxuICAgICAgICAgICAge18ubWFwKHNvY2lhbExpbmtzLCAobGlua1NldCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIiBrZXk9e2BsaW50c2V0LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAge18ubWFwKGxpbmtTZXQsICh7IHRpdGxlLCBocmVmfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgdGFnPVwiaDRcIiBjb2xvcj17c29jaWFsLmNvbG9yfSBtcj1cIjEuNXJlbVwiIG10PVwiMC41cmVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRMaW5rIGhyZWY9e2hyZWZ9IGV4dGVybmFsPnt0aXRsZX08L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9XaW5kb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/social.js\n");

/***/ })

})