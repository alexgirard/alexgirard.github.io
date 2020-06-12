webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tab.js":
/*!***************************!*\
  !*** ./components/Tab.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Window */ \"./components/Window.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/components/Tab.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: \", \";\\n  border: 3px solid black;\\n  border-radius: 0 7px 0 0;\\n  width: 220px;\\n  margin-left: \", \";\\n  margin-bottom: -3px;\\n  cursor: ne-resize;\\n  z-index: \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar TabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject(), function (props) {\n  return props.fg || 'red';\n}, function (props) {\n  return props.first ? 0 : \"-5px\";\n}, function (props) {\n  return props.z;\n});\n_c = TabWrapper;\n\nvar Tab = function Tab(_ref) {\n  var fg = _ref.fg,\n      title = _ref.title,\n      z = _ref.z,\n      first = _ref.first,\n      expandTab = _ref.expandTab;\n  return __jsx(TabWrapper, {\n    fg: fg,\n    className: \"px-2 py-1\",\n    z: z,\n    first: first,\n    onClick: function onClick() {\n      return expandTab(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(_Window__WEBPACK_IMPORTED_MODULE_3__[\"Bars\"], {\n    className: \"justify-content-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(_Window__WEBPACK_IMPORTED_MODULE_3__[\"FgWrapper\"], {\n    fg: fg,\n    cursor: \"ne-resize\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, title)));\n};\n\n_c2 = Tab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tab);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TabWrapper\");\n$RefreshReg$(_c2, \"Tab\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYi5qcz83OTZhIl0sIm5hbWVzIjpbIlRhYldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImZnIiwiZmlyc3QiLCJ6IiwiVGFiIiwidGl0bGUiLCJleHBhbmRUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUNBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEVBQU4sSUFBYSxLQUFqQjtBQUFBLENBREwsRUFLQyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsQ0FBZCxHQUFrQixNQUF0QjtBQUFBLENBTE4sRUFRSCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxDQUFWO0FBQUEsQ0FSRixDQUFoQjtLQUFNTixVOztBQVdOLElBQU1PLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsTUFBR0gsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBT0ksS0FBUCxRQUFPQSxLQUFQO0FBQUEsTUFBY0YsQ0FBZCxRQUFjQSxDQUFkO0FBQUEsTUFBaUJELEtBQWpCLFFBQWlCQSxLQUFqQjtBQUFBLE1BQXdCSSxTQUF4QixRQUF3QkEsU0FBeEI7QUFBQSxTQUNWLE1BQUMsVUFBRDtBQUFZLE1BQUUsRUFBRUwsRUFBaEI7QUFBb0IsYUFBUyxFQUFDLFdBQTlCO0FBQTBDLEtBQUMsRUFBRUUsQ0FBN0M7QUFBZ0QsU0FBSyxFQUFFRCxLQUF2RDtBQUE4RCxXQUFPLEVBQUU7QUFBQSxhQUFNSSxTQUFTLENBQUNELEtBQUQsQ0FBZjtBQUFBLEtBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sYUFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFXLE1BQUUsRUFBRUosRUFBZjtBQUFtQixVQUFNLEVBQUMsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q0ksS0FBdkMsQ0FERixDQURGLENBRFU7QUFBQSxDQUFaOztNQUFNRCxHO0FBUVNBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYWIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhcnMsIEZnV3JhcHBlciB9IGZyb20gJy4vV2luZG93JztcblxuY29uc3QgVGFiV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuZmcgIHx8ICdyZWQnfTtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAgN3B4IDAgMDtcbiAgd2lkdGg6IDIyMHB4O1xuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5maXJzdCA/IDAgOiBcIi01cHhcIn07XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIGN1cnNvcjogbmUtcmVzaXplO1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnp9O1xuYDtcblxuY29uc3QgVGFiID0gKHsgZmcsIHRpdGxlLCB6LCBmaXJzdCwgZXhwYW5kVGFiIH0pID0+IChcbiAgPFRhYldyYXBwZXIgZmc9e2ZnfSBjbGFzc05hbWU9XCJweC0yIHB5LTFcIiB6PXt6fSBmaXJzdD17Zmlyc3R9IG9uQ2xpY2s9eygpID0+IGV4cGFuZFRhYih0aXRsZSl9PlxuICAgIDxCYXJzIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxGZ1dyYXBwZXIgZmc9e2ZnfSBjdXJzb3I9XCJuZS1yZXNpemVcIj57dGl0bGV9PC9GZ1dyYXBwZXI+XG4gICAgPC9CYXJzPlxuICA8L1RhYldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Tab.js\n");

/***/ })

})