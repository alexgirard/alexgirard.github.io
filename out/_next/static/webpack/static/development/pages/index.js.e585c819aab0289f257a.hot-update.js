webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Work.js":
/*!*************************!*\
  !*** ./windows/Work.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Window */ \"./components/Window.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Work.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  display: grid;\\n  grid-column-gap: 1rem;\\n  grid-row-gap: 2rem;\\n  grid-template-columns: repeat(2, minmax(0, 1fr));\\n  height: fit-content;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  max-height: 77px;\\n  width: auto;\\n\\n  :hover {\\n    transform: translateX(0) scale(1.1);\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  cursor: pointer;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Cursor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = Cursor;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img(_templateObject2());\n_c2 = Image;\nvar MobileGrid = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\n_c3 = MobileGrid;\n\nvar WorkApps = function WorkApps(_ref) {\n  var workData = _ref.workData,\n      openTab = _ref.openTab,\n      dataKey = _ref.dataKey;\n  return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(workData, function (_ref2) {\n    var title = _ref2.title,\n        name = _ref2.name,\n        src = _ref2.src,\n        alt = _ref2.alt;\n    return __jsx(Cursor, {\n      className: \"px-3 d-flex flex-column justify-content-center align-items-center\",\n      onClick: function onClick(e) {\n        e.stopPropagation();\n        openTab(title);\n      },\n      key: \"\".concat(dataKey, \"-work-\").concat(title),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 3\n      }\n    }, __jsx(Image, {\n      src: src,\n      alt: alt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }\n    }), __jsx(\"p\", {\n      className: \"text-white pt-2 mb-0 text-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }\n    }, name));\n  });\n};\n\n_c4 = WorkApps;\n\nvar Work = function Work(_ref3) {\n  var workData = _ref3.workData,\n      openTab = _ref3.openTab,\n      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"workData\", \"openTab\"]);\n\n  return __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, restProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 3\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n    className: \"justify-content-center d-none d-sm-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(WorkApps, {\n    workData: workData,\n    openTab: openTab,\n    dataKey: \"desktop\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  })), __jsx(MobileGrid, {\n    className: \"d-sm-none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(WorkApps, {\n    workData: workData,\n    openTab: openTab,\n    dataKey: \"mobile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  })));\n};\n\n_c5 = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Cursor\");\n$RefreshReg$(_c2, \"Image\");\n$RefreshReg$(_c3, \"MobileGrid\");\n$RefreshReg$(_c4, \"WorkApps\");\n$RefreshReg$(_c5, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1dvcmsuanM/MjVjYyJdLCJuYW1lcyI6WyJDdXJzb3IiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZSIsImltZyIsIk1vYmlsZUdyaWQiLCJXb3JrQXBwcyIsIndvcmtEYXRhIiwib3BlblRhYiIsImRhdGFLZXkiLCJfIiwibWFwIiwidGl0bGUiLCJuYW1lIiwic3JjIiwiYWx0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIldvcmsiLCJyZXN0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWjtLQUFNRixNO0FBSU4sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxHQUFWLG9CQUFYO01BQU1ELEs7QUFTTixJQUFNRSxVQUFVLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1HLFU7O0FBUU4sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxPQUFiLFFBQWFBLE9BQWI7QUFBQSxNQUFzQkMsT0FBdEIsUUFBc0JBLE9BQXRCO0FBQUEsU0FBb0NDLDZDQUFDLENBQUNDLEdBQUYsQ0FBTUosUUFBTixFQUFnQjtBQUFBLFFBQUdLLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFFBQVVDLElBQVYsU0FBVUEsSUFBVjtBQUFBLFFBQWdCQyxHQUFoQixTQUFnQkEsR0FBaEI7QUFBQSxRQUFxQkMsR0FBckIsU0FBcUJBLEdBQXJCO0FBQUEsV0FDbkUsTUFBQyxNQUFEO0FBQ0UsZUFBUyxFQUFDLG1FQURaO0FBRUUsYUFBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFBRUEsU0FBQyxDQUFDQyxlQUFGO0FBQXFCVCxlQUFPLENBQUNJLEtBQUQsQ0FBUDtBQUFpQixPQUZ4RDtBQUdFLFNBQUcsWUFBS0gsT0FBTCxtQkFBcUJHLEtBQXJCLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFLE1BQUMsS0FBRDtBQUFPLFNBQUcsRUFBRUUsR0FBWjtBQUFpQixTQUFHLEVBQUVDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQU1FO0FBQUcsZUFBUyxFQUFDLGtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaURGLElBQWpELENBTkYsQ0FEbUU7QUFBQSxHQUFoQixDQUFwQztBQUFBLENBQWpCOztNQUFNUCxROztBQVdOLElBQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR1gsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUMsT0FBYixTQUFhQSxPQUFiO0FBQUEsTUFBeUJXLFNBQXpCOztBQUFBLFNBQ1gsTUFBQywwREFBRCx5RkFBWUEsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUUsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQVUsWUFBUSxFQUFFWixRQUFwQjtBQUE4QixXQUFPLEVBQUVDLE9BQXZDO0FBQWdELFdBQU8sRUFBQyxTQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQU9FLE1BQUMsVUFBRDtBQUFZLGFBQVMsRUFBQyxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQVUsWUFBUSxFQUFFRCxRQUFwQjtBQUE4QixXQUFPLEVBQUVDLE9BQXZDO0FBQWdELFdBQU8sRUFBQyxRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQURXO0FBQUEsQ0FBYjs7TUFBTVUsSTtBQWNTQSxtRUFBZiIsImZpbGUiOiIuL3dpbmRvd3MvV29yay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL2NvbXBvbmVudHMvV2luZG93JztcblxuY29uc3QgQ3Vyc29yID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtaGVpZ2h0OiA3N3B4O1xuICB3aWR0aDogYXV0bztcblxuICA6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxLjEpO1xuICB9XG5gO1xuXG5jb25zdCBNb2JpbGVHcmlkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xuICBncmlkLXJvdy1nYXA6IDJyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbmA7XG5cbmNvbnN0IFdvcmtBcHBzID0gKHsgd29ya0RhdGEsIG9wZW5UYWIsIGRhdGFLZXkgfSkgPT4gXy5tYXAod29ya0RhdGEsICh7IHRpdGxlLCBuYW1lLCBzcmMsIGFsdCB9KSA9PiAoXG4gIDxDdXJzb3JcbiAgICBjbGFzc05hbWU9XCJweC0zIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgb25DbGljaz17ZSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IG9wZW5UYWIodGl0bGUpOyB9fVxuICAgIGtleT17YCR7ZGF0YUtleX0td29yay0ke3RpdGxlfWB9XG4gID5cbiAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHQtMiBtYi0wIHRleHQtY2VudGVyXCI+e25hbWV9PC9wPlxuICA8L0N1cnNvcj5cbikpO1xuXG5jb25zdCBXb3JrID0gKHsgd29ya0RhdGEsIG9wZW5UYWIsIC4uLnJlc3RQcm9wcyB9KSA9PiAoXG4gIDxXaW5kb3cgey4uLnJlc3RQcm9wc30+XG4gICAgey8qIERlc2t0b3AgKi99XG4gICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtbm9uZSBkLXNtLWZsZXhcIj5cbiAgICAgIDxXb3JrQXBwcyB3b3JrRGF0YT17d29ya0RhdGF9IG9wZW5UYWI9e29wZW5UYWJ9IGRhdGFLZXk9XCJkZXNrdG9wXCIgLz5cbiAgICA8L1Jvdz5cblxuICAgIHsvKiBNb2JpbGUgKi99XG4gICAgPE1vYmlsZUdyaWQgY2xhc3NOYW1lPVwiZC1zbS1ub25lXCI+XG4gICAgICA8V29ya0FwcHMgd29ya0RhdGE9e3dvcmtEYXRhfSBvcGVuVGFiPXtvcGVuVGFifSBkYXRhS2V5PVwibW9iaWxlXCIgLz5cbiAgICA8L01vYmlsZUdyaWQ+XG4gIDwvV2luZG93PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV29yaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./windows/Work.js\n");

/***/ })

})