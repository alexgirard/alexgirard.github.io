webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./components/Window.js":
/*!******************************!*\
  !*** ./components/Window.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Container */ \"./components/Container.js\");\n/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NextLink */ \"./components/NextLink.js\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Head */ \"./components/Head.js\");\n/* harmony import */ var _Caret__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Caret */ \"./components/Caret.js\");\n/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/constants */ \"./util/constants.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/personal-website/components/Window.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  left: 1.5rem;\\n  bottom: 1.4rem;\\n\\n  @media (max-width: 576px) {\\n    position: relative;\\n    left: 0;\\n    bottom: 0;\\n    padding: 1rem 0 1rem;\\n    text-decoration: none;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 97%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  @media (max-width: 576px) {\\n    height: 100%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 100%;\\n  width: 100%;\\n  border: 20px solid \", \";\\n  padding: 0 10rem;\\n  position: relative;\\n\\n  @media (min-width: 769px) and (max-width: 992) { padding: 0 8rem; }\\n  @media (min-width: 577px) and (max-width: 768px) { padding: 0 6rem; }\\n  @media (max-width: 576px) {\\n    border: 10px solid \", \";\\n    padding: 0 1rem;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar Outline = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n_c = Outline;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = Content;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject3());\n_c3 = Title;\n\nvar Window = function Window(_ref) {\n  var title = _ref.title,\n      maxWidth = _ref.maxWidth,\n      n = _ref.n,\n      e = _ref.e,\n      s = _ref.s,\n      w = _ref.w,\n      next = _ref.next,\n      color = _ref.color,\n      children = _ref.children;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"d-flex d-sm-none w-100 h-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(Outline, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"h-100 w-100 d-flex flex-column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"overflow-auto h-100 w-100 pt-2 d-block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: \"d-flex align-content-center w-100 h-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"d-block w-100 m-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, children)))), __jsx(\"div\", {\n    style: {\n      height: 'min-content'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    noUnderline: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, title)), next && __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretMobile\"], {\n    text: next,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][next],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 22\n    }\n  }))))), __jsx(\"div\", {\n    className: \"d-none d-sm-block w-100 h-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(Outline, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretDown\"], {\n    text: s,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][s],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretLeft\"], {\n    text: w,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][w],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretTop\"], {\n    text: n,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][n],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }), __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretRight\"], {\n    text: e,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][e],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }), __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    noUnderline: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, title)), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    maxWidth: maxWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, children)))));\n};\n\n_c4 = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Outline\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpbmRvdy5qcz8wNDg0Il0sIm5hbWVzIjpbIk91dGxpbmUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImNvbG9yIiwiQ29udGVudCIsIlRpdGxlIiwiaDEiLCJXaW5kb3ciLCJ0aXRsZSIsIm1heFdpZHRoIiwibiIsImUiLCJzIiwidyIsIm5leHQiLCJjaGlsZHJlbiIsImhlaWdodCIsIndpbmRvd0xpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFHVSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FIZixFQVVZLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQVY7QUFBQSxDQVZqQixDQUFiO0tBQU1KLE87QUFlTixJQUFNSyxPQUFPLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUcsTztBQVdOLElBQU1DLEtBQUssR0FBR0wseURBQU0sQ0FBQ00sRUFBVixvQkFBWDtNQUFNRCxLOztBQWNOLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JDLENBQXBCLFFBQW9CQSxDQUFwQjtBQUFBLE1BQXVCQyxDQUF2QixRQUF1QkEsQ0FBdkI7QUFBQSxNQUEwQkMsQ0FBMUIsUUFBMEJBLENBQTFCO0FBQUEsTUFBNkJDLENBQTdCLFFBQTZCQSxDQUE3QjtBQUFBLE1BQWdDQyxJQUFoQyxRQUFnQ0EsSUFBaEM7QUFBQSxNQUFzQ1gsS0FBdEMsUUFBc0NBLEtBQXRDO0FBQUEsTUFBNkNZLFFBQTdDLFFBQTZDQSxRQUE3QztBQUFB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VyxZQUFRLEVBQUVDLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR00sUUFESCxDQUZGLENBVEYsQ0FERixDQXhCRixDQURhO0FBQUEsQ0FBZjs7TUFBTVIsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9OZXh0TGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnO1xuXG5pbXBvcnQgeyBDYXJldERvd24sIENhcmV0TGVmdCwgQ2FyZXRUb3AsIENhcmV0UmlnaHQsIENhcmV0TW9iaWxlIH0gZnJvbSAnLi9DYXJldCc7XG5pbXBvcnQgeyB3aW5kb3dMaW5rcyB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJ1xuXG5jb25zdCBPdXRsaW5lID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICBwYWRkaW5nOiAwIDEwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogOTkyKSB7IHBhZGRpbmc6IDAgOHJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAwIDZyZW07IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogOTclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEuNXJlbTtcbiAgYm90dG9tOiAxLjRyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgV2luZG93ID0gKHsgdGl0bGUsIG1heFdpZHRoLCBuLCBlLCBzLCB3LCBuZXh0LCBjb2xvciwgY2hpbGRyZW4gfSkgPT4gKCBcbiAgPD5cbiAgICB7LyogTW9iaWxlICovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtc20tbm9uZSB3LTEwMCBoLTEwMFwiPlxuICAgICAgPE91dGxpbmUgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMCB3LTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC0xMDAgdy0xMDAgcHQtMiBkLWJsb2NrXCI+XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24tY29udGVudC1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgbS1hdXRvXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ21pbi1jb250ZW50JyB9fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgbm9VbmRlcmxpbmU+XG4gICAgICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtuZXh0ICYmIDxDYXJldE1vYmlsZSB0ZXh0PXtuZXh0fSBocmVmPXt3aW5kb3dMaW5rc1tuZXh0XX0gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9PdXRsaW5lPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIHsvKiBEZXNrdG9wICovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgdy0xMDAgaC0xMDBcIj5cbiAgICAgIDxPdXRsaW5lIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIDxDYXJldERvd24gdGV4dD17c30gaHJlZj17d2luZG93TGlua3Nbc119IC8+XG4gICAgICAgIDxDYXJldExlZnQgdGV4dD17d30gaHJlZj17d2luZG93TGlua3Nbd119IC8+XG4gICAgICAgIDxDYXJldFRvcCB0ZXh0PXtufSBocmVmPXt3aW5kb3dMaW5rc1tuXX0gLz5cbiAgICAgICAgPENhcmV0UmlnaHQgdGV4dD17ZX0gaHJlZj17d2luZG93TGlua3NbZV19IC8+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBub1VuZGVybGluZT5cbiAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPXttYXhXaWR0aH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvT3V0bGluZT5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Window.js\n");

/***/ })

})