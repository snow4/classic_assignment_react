"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ \"./components/Home.jsx\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_asyncActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/asyncActions */ \"./actions/asyncActions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Wrapper;\nvar App = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(App, Component);\n    var _super = _createSuper(App);\n    function App() {\n        _classCallCheck(this, App);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function() {\n            // console.log(\"in comp mounting\")\n            (0,_actions_asyncActions__WEBPACK_IMPORTED_MODULE_6__.checkAuthentication)();\n        });\n        return _this;\n    }\n    _createClass(App, [\n        {\n            key: \"render\",\n            value: function render() {\n                var AUTH_DATA = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('token');\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: this.props.login ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\index.js\",\n                            lineNumber: 23,\n                            columnNumber: 37\n                        },\n                        __self: this\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\index.js\",\n                            lineNumber: 23,\n                            columnNumber: 47\n                        },\n                        __self: this\n                    })\n                }));\n            }\n        }\n    ]);\n    return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\nvar mapStateToProps = function(store) {\n    console.log(\"store\", store);\n    return {\n        auth_data: store.authData,\n        login: store.isLoggedIn\n    };\n};\nvar mapDispatchToProps = function(dispatch) {\n    return {\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, mapDispatchToProps)(App));\nvar _c;\n$RefreshReg$(_c, \"Wrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0g7QUFDRTtBQUNSO0FBQ087QUFDRDtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRWxDOzs7Ozs7O0FBQTNCLEdBQUssQ0FBQ1EsT0FBTyxHQUFHSCw2REFBVTtLQUFwQkcsT0FBTztJQUVQRSxHQUFHLGlCQUFULFFBQVE7O2NBQUZBLEdBQUc7OEJBQUhBLEdBQUc7YUFBSEEsR0FBRzs4QkFBSEEsR0FBRzs7O3VEQUVMQyxDQUFpQixvQkFBRyxRQUN4QixHQUQ2QixDQUFDO1lBQ3RCLEVBQWtDO1lBQ2xDSiwwRUFBbUI7UUFDdkIsQ0FBQzs7O2lCQUxDRyxHQUFHOztZQU9MRSxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBRU4sR0FBSyxDQUFDQyxTQUFTLEdBQUdULHFEQUFXLENBQUMsQ0FBTztnQkFDckMsTUFBTSxzRUFDREksT0FBTzs7Ozs7Ozs4QkFDSCxJQUFJLENBQUNPLEtBQUssQ0FBQ0MsS0FBSyx3RUFBSWQsd0RBQUk7Ozs7Ozs7OEZBQU1DLHlEQUFLOzs7Ozs7Ozs7WUFHaEQsQ0FBQzs7O1dBZkNPLEdBQUc7RUFBU1QsNENBQVM7QUFpQjNCLEdBQUssQ0FBQ2dCLGVBQWUsR0FBR0MsUUFBUSxDQUFSQSxLQUFLLEVBQUcsQ0FBQztJQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTyxRQUFFRixLQUFLO0lBQzFCLE1BQU0sQ0FBQyxDQUFDO1FBQ0pHLFNBQVMsRUFBRUgsS0FBSyxDQUFDSSxRQUFRO1FBQ3pCTixLQUFLLEVBQUVFLEtBQUssQ0FBQ0ssVUFBVTtJQUV6QixDQUFDO0FBQ1AsQ0FBQztBQUNELEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdDLFFBQVEsQ0FBUkEsUUFBUSxFQUFJLENBQUM7SUFDcEMsTUFBTSxDQUFDLENBQUM7SUFFTixDQUFDO0FBQ1AsQ0FBQztBQUVELCtEQUFlbkIsb0RBQU8sQ0FBQ1csZUFBZSxFQUFFTyxrQkFBa0IsRUFBRWQsR0FBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCJcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCJcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL2FzeW5jQWN0aW9uc1wiXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW4gY29tcCBtb3VudGluZ1wiKVxyXG4gICAgICAgIGNoZWNrQXV0aGVudGljYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IEFVVEhfREFUQSA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2dpbiA/IDxIb21lLz4gOiA8TG9naW4vPn1cclxuICAgICAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PntcclxuICAgIGNvbnNvbGUubG9nKFwic3RvcmVcIiwgc3RvcmUpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGhfZGF0YTogc3RvcmUuYXV0aERhdGEsXHJcbiAgICAgICAgbG9naW46IHN0b3JlLmlzTG9nZ2VkSW5cclxuICAgICAgICAvLyB0b2tlbjogc3RvcmUuYXV0aERhdGEudG9rZW5cclxuICAgICAgfTtcclxufVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIGxvZ2luUXVlcnk6IChkYXRhKSA9PiBkaXNwYXRjaChDaGVja0xvZ2luKGRhdGEpKVxyXG4gICAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSG9tZSIsIkxvZ2luIiwiQ29va2llcyIsInN0eWxlZCIsImNvbm5lY3QiLCJjaGVja0F1dGhlbnRpY2F0aW9uIiwiV3JhcHBlciIsImRpdiIsIkFwcCIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwiQVVUSF9EQVRBIiwiZ2V0IiwicHJvcHMiLCJsb2dpbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsImF1dGhfZGF0YSIsImF1dGhEYXRhIiwiaXNMb2dnZWRJbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});