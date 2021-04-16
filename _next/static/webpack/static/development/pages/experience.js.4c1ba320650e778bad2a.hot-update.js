webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./components/Window.js":
/*!******************************!*\
  !*** ./components/Window.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Container */ \"./components/Container.js\");\n/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NextLink */ \"./components/NextLink.js\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Head */ \"./components/Head.js\");\n/* harmony import */ var _Caret__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Caret */ \"./components/Caret.js\");\n/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/constants */ \"./util/constants.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/personal-website/components/Window.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  left: 1.5rem;\\n  bottom: 1.4rem;\\n\\n  @media (max-width: 576px) {\\n    position: relative;\\n    left: 0;\\n    bottom: 0;\\n    padding: 1rem 0 1rem;\\n    text-decoration: none;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 97%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  @media (max-width: 576px) {\\n    height: 100%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 100%;\\n  width: 100%;\\n  border: 20px solid \", \";\\n  padding: 0 10rem;\\n  position: relative;\\n\\n  @media (min-width: 769px) and (max-width: 992) { padding: 0 8rem; }\\n  @media (min-width: 577px) and (max-width: 768px) { padding: 0 6rem; }\\n  @media (max-width: 576px) {\\n    border: 10px solid \", \";\\n    padding: 0 1rem;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar Outline = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n_c = Outline;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = Content;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject3());\n_c3 = Title;\n\nvar Window = function Window(_ref) {\n  var title = _ref.title,\n      maxWidth = _ref.maxWidth,\n      n = _ref.n,\n      e = _ref.e,\n      s = _ref.s,\n      w = _ref.w,\n      next = _ref.next,\n      color = _ref.color,\n      children = _ref.children;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"d-flex d-sm-none w-100 h-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(Outline, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"h-100 w-100 d-flex flex-column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"overflow-auto h-100 pt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }), children)), __jsx(\"div\", {\n    style: {\n      height: 'min-content'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, title)), next && __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretMobile\"], {\n    text: next,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][next],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 22\n    }\n  }))))), __jsx(\"div\", {\n    className: \"d-none d-sm-block w-100 h-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(Outline, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretDown\"], {\n    text: s,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][s],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }), __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretLeft\"], {\n    text: w,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][w],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretTop\"], {\n    text: n,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][n],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretRight\"], {\n    text: e,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][e],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, title)), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    maxWidth: maxWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, children)))));\n};\n\n_c4 = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Outline\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpbmRvdy5qcz8wNDg0Il0sIm5hbWVzIjpbIk91dGxpbmUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImNvbG9yIiwiQ29udGVudCIsIlRpdGxlIiwiaDEiLCJXaW5kb3ciLCJ0aXRsZSIsIm1heFdpZHRoIiwibiIsImUiLCJzIiwidyIsIm5leHQiLCJjaGlsZHJlbiIsImhlaWdodCIsIndpbmRvd0xpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFHVSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FIZixFQVVZLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQVY7QUFBQSxDQVZqQixDQUFiO0tBQU1KLE87QUFlTixJQUFNSyxPQUFPLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUcsTztBQVdOLElBQU1DLEtBQUssR0FBR0wseURBQU0sQ0FBQ00sRUFBVixvQkFBWDtNQUFNRCxLOztBQWNOLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JDLENBQXBCLFFBQW9CQSxDQUFwQjtBQUFBLE1BQXVCQyxDQUF2QixRQUF1QkEsQ0FBdkI7QUFBQSxNQUEwQkMsQ0FBMUIsUUFBMEJBLENBQTFCO0FBQUEsTUFBNkJDLENBQTdCLFFBQTZCQSxDQUE3QjtBQUFBLE1BQWdDQyxJQUFoQyxRQUFnQ0EsSUFBaEM7QUFBQSxNQUFzQ1gsS0FBdEMsUUFBc0NBLEtBQXRDO0FBQUEsTUFBNkNZLFFBQTdDLFFBQTZDQSxRQUE3QztBQUFB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c0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5pbXBvcnQgTGluayBmcm9tICcuL05leHRMaW5rJztcbmltcG9ydCBIZWFkIGZyb20gJy4vSGVhZCc7XG5cbmltcG9ydCB7IENhcmV0RG93biwgQ2FyZXRMZWZ0LCBDYXJldFRvcCwgQ2FyZXRSaWdodCwgQ2FyZXRNb2JpbGUgfSBmcm9tICcuL0NhcmV0JztcbmltcG9ydCB7IHdpbmRvd0xpbmtzIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnXG5cbmNvbnN0IE91dGxpbmUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDIwcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gIHBhZGRpbmc6IDAgMTByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiA5OTIpIHsgcGFkZGluZzogMCA4cmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDAgNnJlbTsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib3JkZXI6IDEwcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA5NyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS41cmVtO1xuICBib3R0b206IDEuNHJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBXaW5kb3cgPSAoeyB0aXRsZSwgbWF4V2lkdGgsIG4sIGUsIHMsIHcsIG5leHQsIGNvbG9yLCBjaGlsZHJlbiB9KSA9PiAoIFxuICA8PlxuICAgIHsvKiBNb2JpbGUgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1zbS1ub25lIHctMTAwIGgtMTAwXCI+XG4gICAgICA8T3V0bGluZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwIHctMTAwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLTEwMCBwdC0yXCI+XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnbWluLWNvbnRlbnQnIH19PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge25leHQgJiYgPENhcmV0TW9iaWxlIHRleHQ9e25leHR9IGhyZWY9e3dpbmRvd0xpbmtzW25leHRdfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L091dGxpbmU+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgey8qIERlc2t0b3AgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9jayB3LTEwMCBoLTEwMFwiPlxuICAgICAgPE91dGxpbmUgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgPENhcmV0RG93biB0ZXh0PXtzfSBocmVmPXt3aW5kb3dMaW5rc1tzXX0gLz5cbiAgICAgICAgPENhcmV0TGVmdCB0ZXh0PXt3fSBocmVmPXt3aW5kb3dMaW5rc1t3XX0gLz5cbiAgICAgICAgPENhcmV0VG9wIHRleHQ9e259IGhyZWY9e3dpbmRvd0xpbmtzW25dfSAvPlxuICAgICAgICA8Q2FyZXRSaWdodCB0ZXh0PXtlfSBocmVmPXt3aW5kb3dMaW5rc1tlXX0gLz5cblxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICA8SGVhZCAvPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9e21heFdpZHRofT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9PdXRsaW5lPlxuICAgIDwvZGl2PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Window.js\n");

/***/ })

})