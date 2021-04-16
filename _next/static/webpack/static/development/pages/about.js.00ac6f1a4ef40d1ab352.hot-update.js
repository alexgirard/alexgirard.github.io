webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Caret.js":
/*!*****************************!*\
  !*** ./components/Caret.js ***!
  \*****************************/
/*! exports provided: default, CaretDown, CaretLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CaretDown\", function() { return CaretDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CaretLeft\", function() { return CaretLeft; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NextLink */ \"./components/NextLink.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/personal-website/components/Caret.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n\\n  \", \"\\n\\n  color: rgba(0, 0, 0, 0.3);\\n  svg { fill: rgba(0, 0, 0, 0.3); }\\n  h6 { line-height: 20px; }\\n\\n  :hover {\\n    cursor: pointer;\\n    color: rgba(0, 0, 0, 0.5);\\n    svg { fill: rgba(0, 0, 0, 0.5); }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar directionStyles = {\n  down: {\n    position: 'fixed',\n    left: '50%',\n    bottom: '10px',\n    transform: 'translate(-50%, -50%)',\n    margin: '0 auto'\n  },\n  left: {\n    flexDirection: 'column-reverse'\n  }\n};\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.styles;\n});\n_c = Container;\n\nvar CaretSVG = function CaretSVG() {\n  return __jsx(\"svg\", {\n    height: \"28\",\n    \"enable-background\": \"new 0 0 256 256\",\n    viewBox: \"0 0 256 256\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"m225.813 48.907-97.813 97.813-97.813-97.813-30.187 30.186 128 128 128-128z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = CaretSVG;\n\nvar Caret = function Caret(_ref) {\n  var text = _ref.text,\n      href = _ref.href,\n      directionStyles = _ref.directionStyles;\n  return __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    href: href,\n    noUnderline: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 3\n    }\n  }, __jsx(Container, {\n    styles: directionStyles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, text), __jsx(CaretSVG, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  })));\n};\n\n_c3 = Caret;\n\nvar CaretDown = function CaretDown(props) {\n  return __jsx(Caret, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    directionStyles: directionStyles.down\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 28\n    }\n  }));\n};\n\n_c4 = CaretDown;\n\nvar CaretLeft = function CaretLeft(props) {\n  return __jsx(Caret, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    directionStyles: directionStyles.left\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 28\n    }\n  }));\n};\n\n_c5 = CaretLeft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Caret);\n\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"CaretSVG\");\n$RefreshReg$(_c3, \"Caret\");\n$RefreshReg$(_c4, \"CaretDown\");\n$RefreshReg$(_c5, \"CaretLeft\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmV0LmpzPzYyYWIiXSwibmFtZXMiOlsiZGlyZWN0aW9uU3R5bGVzIiwiZG93biIsInBvc2l0aW9uIiwibGVmdCIsImJvdHRvbSIsInRyYW5zZm9ybSIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInN0eWxlcyIsIkNhcmV0U1ZHIiwiQ2FyZXQiLCJ0ZXh0IiwiaHJlZiIsIkNhcmV0RG93biIsIkNhcmV0TGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLE9BRE47QUFFSkMsUUFBSSxFQUFFLEtBRkY7QUFHSkMsVUFBTSxFQUFFLE1BSEo7QUFJSkMsYUFBUyxFQUFFLHVCQUpQO0FBS0pDLFVBQU0sRUFBRTtBQUxKLEdBRGdCO0FBUXRCSCxNQUFJLEVBQUU7QUFDSkksaUJBQWEsRUFBRTtBQURYO0FBUmdCLENBQXhCO0FBYUEsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUtYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxDQUxNLENBQWY7S0FBTUosUzs7QUFrQk4sSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUNmO0FBQUssVUFBTSxFQUFDLElBQVo7QUFBaUIseUJBQWtCLGlCQUFuQztBQUFxRCxXQUFPLEVBQUMsYUFBN0Q7QUFBMkUsU0FBSyxFQUFDLDRCQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxLQUFDLEVBQUMsNEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRGU7QUFBQSxDQUFqQjs7TUFBTUEsUTs7QUFNTixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLE1BQWVoQixlQUFmLFFBQWVBLGVBQWY7QUFBQSxTQUNaLE1BQUMsaURBQUQ7QUFBTSxRQUFJLEVBQUVnQixJQUFaO0FBQWtCLGVBQVcsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFXLFVBQU0sRUFBRWhCLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtlLElBQUwsQ0FERixFQUVFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURZO0FBQUEsQ0FBZDs7TUFBTUQsSzs7QUFTTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBTixLQUFLO0FBQUEsU0FBSSxNQUFDLEtBQUQ7QUFBTyxtQkFBZSxFQUFFWCxlQUFlLENBQUNDO0FBQXhDLEtBQWtEVSxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUo7QUFBQSxDQUF2Qjs7TUFBTU0sUzs7QUFDTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBUCxLQUFLO0FBQUEsU0FBSSxNQUFDLEtBQUQ7QUFBTyxtQkFBZSxFQUFFWCxlQUFlLENBQUNHO0FBQXhDLEtBQWtEUSxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUo7QUFBQSxDQUF2Qjs7TUFBTU8sUztBQUVTSixvRUFBZjtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJldC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTmV4dExpbmsnO1xuXG5jb25zdCBkaXJlY3Rpb25TdHlsZXMgPSB7XG4gIGRvd246IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICBib3R0b206ICcxMHB4JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxuICB9LFxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAke3Byb3BzID0+IHByb3BzLnN0eWxlc31cblxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBzdmcgeyBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cbiAgaDYgeyBsaW5lLWhlaWdodDogMjBweDsgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgc3ZnIHsgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjUpOyB9XG4gIH1cbmA7XG5cbmNvbnN0IENhcmV0U1ZHID0gKCkgPT4gKFxuICA8c3ZnIGhlaWdodD1cIjI4XCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDI1NiAyNTZcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIm0yMjUuODEzIDQ4LjkwNy05Ny44MTMgOTcuODEzLTk3LjgxMy05Ny44MTMtMzAuMTg3IDMwLjE4NiAxMjggMTI4IDEyOC0xMjh6XCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IENhcmV0ID0gKHsgdGV4dCwgaHJlZiwgZGlyZWN0aW9uU3R5bGVzIH0pID0+IChcbiAgPExpbmsgaHJlZj17aHJlZn0gbm9VbmRlcmxpbmU+XG4gICAgPENvbnRhaW5lciBzdHlsZXM9e2RpcmVjdGlvblN0eWxlc30+XG4gICAgICA8aDY+e3RleHR9PC9oNj5cbiAgICAgIDxDYXJldFNWRyAvPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0xpbms+XG4pO1xuXG5jb25zdCBDYXJldERvd24gPSBwcm9wcyA9PiA8Q2FyZXQgZGlyZWN0aW9uU3R5bGVzPXtkaXJlY3Rpb25TdHlsZXMuZG93bn0gey4uLnByb3BzfSAvPjtcbmNvbnN0IENhcmV0TGVmdCA9IHByb3BzID0+IDxDYXJldCBkaXJlY3Rpb25TdHlsZXM9e2RpcmVjdGlvblN0eWxlcy5sZWZ0fSB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJldDtcbmV4cG9ydCB7XG4gIENhcmV0RG93bixcbiAgQ2FyZXRMZWZ0LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Caret.js\n");

/***/ }),

/***/ "./components/Window.js":
/*!******************************!*\
  !*** ./components/Window.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Container */ \"./components/Container.js\");\n/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NextLink */ \"./components/NextLink.js\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Head */ \"./components/Head.js\");\n/* harmony import */ var _Caret__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Caret */ \"./components/Caret.js\");\n/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/constants */ \"./util/constants.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/personal-website/components/Window.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  left: 1.5rem;\\n  bottom: 1.4rem;\\n\\n  @media (max-width: 576px) {\\n    position: relative;\\n    left: 0;\\n    bottom: 0;\\n    padding: 2rem 0 1rem;\\n    text-decoration: none;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 97%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  @media (max-width: 576px) {\\n    height: 100%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 100%;\\n  width: 100%;\\n  border: 20px solid \", \";\\n  padding: 0 10rem;\\n  position: relative;\\n\\n  @media (min-width: 769px) and (max-width: 992) { padding: 0 8rem; }\\n  @media (min-width: 577px) and (max-width: 768px) { padding: 0 6rem; }\\n  @media (max-width: 576px) {\\n    border: 10px solid \", \";\\n    padding: 0 1rem;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar Outline = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n_c = Outline;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = Content;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject3());\n_c3 = Title;\n\nvar Window = function Window(_ref) {\n  var title = _ref.title,\n      maxWidth = _ref.maxWidth,\n      n = _ref.n,\n      e = _ref.e,\n      s = _ref.s,\n      w = _ref.w,\n      color = _ref.color,\n      children = _ref.children;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"d-flex d-sm-none w-100 h-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(Outline, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"h-100 w-100 d-flex flex-column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"overflow-auto h-100 pt-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }), children)), __jsx(\"div\", {\n    style: {\n      height: 'min-content'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, title)))))), __jsx(\"div\", {\n    className: \"d-none d-sm-block w-100 h-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, __jsx(Outline, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretDown\"], {\n    text: s,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][s],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }), __jsx(_Caret__WEBPACK_IMPORTED_MODULE_7__[\"CaretLeft\"], {\n    text: w,\n    href: _util_constants__WEBPACK_IMPORTED_MODULE_8__[\"windowLinks\"][w],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }), __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, title)), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    maxWidth: maxWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, children)))));\n};\n\n_c4 = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Outline\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpbmRvdy5qcz8wNDg0Il0sIm5hbWVzIjpbIk91dGxpbmUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImNvbG9yIiwiQ29udGVudCIsIlRpdGxlIiwiaDEiLCJXaW5kb3ciLCJ0aXRsZSIsIm1heFdpZHRoIiwibiIsImUiLCJzIiwidyIsImNoaWxkcmVuIiwiaGVpZ2h0Iiwid2luZG93TGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUdVLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQVY7QUFBQSxDQUhmLEVBVVksVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBVjtBQUFBLENBVmpCLENBQWI7S0FBTUosTztBQWVOLElBQU1LLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtNQUFNRyxPO0FBV04sSUFBTUMsS0FBSyxHQUFHTCx5REFBTSxDQUFDTSxFQUFWLG9CQUFYO01BQU1ELEs7O0FBY04sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsQ0FBcEIsUUFBb0JBLENBQXBCO0FBQUEsTUFBdUJDLENBQXZCLFFBQXVCQSxDQUF2QjtBQUFBLE1BQTBCQyxDQUExQixRQUEwQkEsQ0FBMUI7QUFBQSxNQUE2QkMsQ0FBN0IsUUFBNkJBLENBQTdCO0FBQUEsTUFBZ0NWLEtBQWhDLFFBQWdDQSxLQUFoQztBQUFBLE1BQXVDVyxRQUF2QyxRQUF1Q0EsUUFBdkM7QUFBQSxTQUNiLG1FQUVFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxTQUFLLEVBQUVYLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR1csUUFGSCxDQURGLENBREYsRUFPRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFQLEtBQVIsQ0FERixDQURGLENBUEYsQ0FERixDQURGLENBRkYsRUFxQkU7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLFNBQUssRUFBRUwsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBVyxRQUFJLEVBQUVTLENBQWpCO0FBQW9CLFFBQUksRUFBRUksMkRBQVcsQ0FBQ0osQ0FBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdEQUFEO0FBQVcsUUFBSSxFQUFFQyxDQUFqQjtBQUFvQixRQUFJLEVBQUVHLDJEQUFXLENBQUNILENBQUQsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUUsTUFBQyxpREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTCxLQUFSLENBREYsQ0FKRixFQU9FLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGtEQUFEO0FBQVcsWUFBUSxFQUFFQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLFFBREgsQ0FGRixDQVBGLENBREYsQ0FyQkYsQ0FEYTtBQUFBLENBQWY7O01BQU1QLE07QUF5Q1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaW5kb3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTmV4dExpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi9IZWFkJztcblxuaW1wb3J0IHsgQ2FyZXREb3duLCBDYXJldExlZnQgfSBmcm9tICcuL0NhcmV0JztcbmltcG9ydCB7IHdpbmRvd0xpbmtzIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnXG5cbmNvbnN0IE91dGxpbmUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDIwcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gIHBhZGRpbmc6IDAgMTByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiA5OTIpIHsgcGFkZGluZzogMCA4cmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDAgNnJlbTsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib3JkZXI6IDEwcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA5NyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS41cmVtO1xuICBib3R0b206IDEuNHJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMnJlbSAwIDFyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBXaW5kb3cgPSAoeyB0aXRsZSwgbWF4V2lkdGgsIG4sIGUsIHMsIHcsIGNvbG9yLCBjaGlsZHJlbiB9KSA9PiAoIFxuICA8PlxuICAgIHsvKiBNb2JpbGUgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1zbS1ub25lIHctMTAwIGgtMTAwXCI+XG4gICAgICA8T3V0bGluZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwIHctMTAwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLTEwMCBwdC00XCI+XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnbWluLWNvbnRlbnQnIH19PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvT3V0bGluZT5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICB7LyogRGVza3RvcCAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIHctMTAwIGgtMTAwXCI+XG4gICAgICA8T3V0bGluZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICA8Q2FyZXREb3duIHRleHQ9e3N9IGhyZWY9e3dpbmRvd0xpbmtzW3NdfSAvPlxuICAgICAgICA8Q2FyZXRMZWZ0IHRleHQ9e3d9IGhyZWY9e3dpbmRvd0xpbmtzW3ddfSAvPlxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxIZWFkIC8+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17bWF4V2lkdGh9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L091dGxpbmU+XG4gICAgPC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Window.js\n");

/***/ })

})