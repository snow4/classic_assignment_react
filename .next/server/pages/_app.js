/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./actions/asyncActions.js":
/*!*********************************!*\
  !*** ./actions/asyncActions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CheckLogin\": () => (/* binding */ CheckLogin),\n/* harmony export */   \"SignUp\": () => (/* binding */ SignUp),\n/* harmony export */   \"LogOut\": () => (/* binding */ LogOut),\n/* harmony export */   \"createNote\": () => (/* binding */ createNote),\n/* harmony export */   \"getAllLists\": () => (/* binding */ getAllLists),\n/* harmony export */   \"checkAuthentication\": () => (/* binding */ checkAuthentication)\n/* harmony export */ });\n/* harmony import */ var _constants_Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/Request */ \"./constants/Request.js\");\n/* harmony import */ var _syncActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncActions */ \"./actions/syncActions.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CheckLogin = async (req, res)=>{\n    console.log(\"query \", req);\n    await axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:4200/api/user/login\", req).then((response)=>{\n        console.log(response);\n        // Cookies.set('token', `${response.data.token}`, { expires: 1 })\n        if (false) {}\n    }).catch((err)=>{\n        console.log(err);\n    });\n};\nconst SignUp = async (req, res)=>{\n    console.log(\"query \", req);\n    await axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:4200/api/user/signup\", req).then((response)=>{\n        console.log(response);\n        alert(\"You are successfully Registered. Login to continue.\");\n        _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dispatch(_syncActions__WEBPACK_IMPORTED_MODULE_1__.getUpscSubjectQuery(response.data));\n    }).catch((err)=>{\n        alert(err);\n        console.log(err);\n    });\n};\nconst LogOut = ()=>{\n    if (false) {}\n};\nconst createNote = async (req, res)=>{\n    console.log(\"createNote \", req);\n    await axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:4200/api/list/add-new\", req).then((response)=>{\n        console.log(response);\n        _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dispatch(_syncActions__WEBPACK_IMPORTED_MODULE_1__.createNote(response.data));\n    }).catch((err)=>{\n        console.log(err);\n    });\n};\n// get all list of a profile\nconst getAllLists = async (req, res)=>{\n    console.log(\"getalllist \", req);\n    await axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:4200/api/list/getall-list\", req).then((response)=>{\n        console.log(\"GET ALL LIST \", response);\n        _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dispatch(_syncActions__WEBPACK_IMPORTED_MODULE_1__.getAllLists(response.data));\n    }).catch((err)=>{\n        console.log(err);\n    });\n};\nconst checkAuthentication = ()=>{\n    console.log(\"check Authentication\");\n    if (false) { var user; }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZnJvbnRlbmQvLi9hY3Rpb25zL2FzeW5jQWN0aW9ucy5qcz9iN2JjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFrZUFzeW5jUmVxdWVzdH0gZnJvbSBcIi4uL2NvbnN0YW50cy9SZXF1ZXN0XCJcclxuaW1wb3J0ICogYXMgc3luY0FjdGlvbnMgZnJvbSBcIi4vc3luY0FjdGlvbnNcIlxyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrTG9naW4gPSAgYXN5bmMocmVxLCByZXMpPT57XHJcbiAgY29uc29sZS5sb2coXCJxdWVyeSBcIixyZXEpXHJcbiAgYXdhaXQgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9hcGkvdXNlci9sb2dpblwiLCByZXEpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAvLyBDb29raWVzLnNldCgndG9rZW4nLCBgJHtyZXNwb25zZS5kYXRhLnRva2VufWAsIHsgZXhwaXJlczogMSB9KVxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gbG9jYWxcIilcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHN5bmNBY3Rpb25zLmNoZWNrTG9naW4ocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaWduVXAgPSAgYXN5bmMocmVxLCByZXMpPT57XHJcbiAgY29uc29sZS5sb2coXCJxdWVyeSBcIixyZXEpXHJcbiAgYXdhaXQgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9hcGkvdXNlci9zaWdudXBcIiwgcmVxKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICBhbGVydChcIllvdSBhcmUgc3VjY2Vzc2Z1bGx5IFJlZ2lzdGVyZWQuIExvZ2luIHRvIGNvbnRpbnVlLlwiKVxyXG4gICAgICBTdG9yZS5kaXNwYXRjaChzeW5jQWN0aW9ucy5nZXRVcHNjU3ViamVjdFF1ZXJ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBhbGVydChlcnIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2dPdXQgPSAoKSA9PntcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIFN0b3JlLmRpc3BhdGNoKHN5bmNBY3Rpb25zLkxvZ091dChmYWxzZSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGUgPSBhc3luYyhyZXEsIHJlcykgPT57XHJcbiAgY29uc29sZS5sb2coXCJjcmVhdGVOb3RlIFwiLHJlcSlcclxuICBhd2FpdCBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MjAwL2FwaS9saXN0L2FkZC1uZXdcIiwgcmVxKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICBTdG9yZS5kaXNwYXRjaChzeW5jQWN0aW9ucy5jcmVhdGVOb3RlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGdldCBhbGwgbGlzdCBvZiBhIHByb2ZpbGVcclxuZXhwb3J0IGNvbnN0IGdldEFsbExpc3RzID0gYXN5bmMocmVxLCByZXMpID0+e1xyXG4gIGNvbnNvbGUubG9nKFwiZ2V0YWxsbGlzdCBcIiwgcmVxKVxyXG4gIGF3YWl0IEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjQyMDAvYXBpL2xpc3QvZ2V0YWxsLWxpc3RcIiwgcmVxKVxyXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJHRVQgQUxMIExJU1QgXCIscmVzcG9uc2UpXHJcbiAgICBTdG9yZS5kaXNwYXRjaChzeW5jQWN0aW9ucy5nZXRBbGxMaXN0cyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0F1dGhlbnRpY2F0aW9uID0gKCkgPT57XHJcbiAgY29uc29sZS5sb2coXCJjaGVjayBBdXRoZW50aWNhdGlvblwiKTtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgXHJcbiAgICB2YXIgdXNlcj0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcbiAgICBjb25zb2xlLmxvZyhcImluIGxvY2FsXCIsdXNlcilcclxuICAgIGlmKHVzZXIpe1xyXG4gICAgICBTdG9yZS5kaXNwYXRjaChzeW5jQWN0aW9ucy5jaGVja0F1dGhlbnRpY2F0aW9uKHRydWUpKTtcclxuICAgICAgU3RvcmUuZGlzcGF0Y2goc3luY0FjdGlvbnMuY2hlY2tMb2dpbih1c2VyKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgU3RvcmUuZGlzcGF0Y2goc3luY0FjdGlvbnMuY2hlY2tBdXRoZW50aWNhdGlvbihmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJtYWtlQXN5bmNSZXF1ZXN0Iiwic3luY0FjdGlvbnMiLCJTdG9yZSIsIkF4aW9zIiwiQ2hlY2tMb2dpbiIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXNwYXRjaCIsImNoZWNrTG9naW4iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJTaWduVXAiLCJhbGVydCIsImdldFVwc2NTdWJqZWN0UXVlcnkiLCJMb2dPdXQiLCJyZW1vdmVJdGVtIiwiY3JlYXRlTm90ZSIsImdldEFsbExpc3RzIiwiY2hlY2tBdXRoZW50aWNhdGlvbiIsInVzZXIiLCJwYXJzZSIsImdldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/asyncActions.js\n");

/***/ }),

/***/ "./actions/syncActions.js":
/*!********************************!*\
  !*** ./actions/syncActions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLogin\": () => (/* binding */ checkLogin),\n/* harmony export */   \"checkAuthentication\": () => (/* binding */ checkAuthentication),\n/* harmony export */   \"createNote\": () => (/* binding */ createNote),\n/* harmony export */   \"getAllLists\": () => (/* binding */ getAllLists),\n/* harmony export */   \"LogOut\": () => (/* binding */ LogOut)\n/* harmony export */ });\n/* harmony import */ var _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/actionTypes */ \"./redux/actionTypes.js\");\n\nconst checkLogin = (data)=>({\n        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AUTH_DATA,\n        payload: data\n    })\n;\nconst checkAuthentication = (data)=>({\n        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CHECK_AUTHENTICATION,\n        payload: data\n    })\n;\nconst createNote = (data)=>({\n        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CREATE_NOTE,\n        payload: data\n    })\n;\nconst getAllLists = (data)=>({\n        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_ALL_LIST_OF_EMAIL,\n        payload: data\n    })\n;\nconst LogOut = (data)=>({\n        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGOUT,\n        payload: data\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL3N5bmNBY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUV4QyxLQUFLLENBQUNDLFVBQVUsSUFBR0MsSUFBSSxJQUFLLENBQUM7UUFDaENDLElBQUksRUFBRUgsb0VBQXFCO1FBQzNCSyxPQUFPLEVBQUVILElBQUk7SUFDZixDQUFDOztBQUVNLEtBQUssQ0FBQ0ksbUJBQW1CLElBQUlKLElBQUksSUFBSyxDQUFDO1FBQzVDQyxJQUFJLEVBQUVILCtFQUFnQztRQUN0Q0ssT0FBTyxFQUFFSCxJQUFJO0lBQ2YsQ0FBQzs7QUFFTSxLQUFLLENBQUNNLFVBQVUsSUFBR04sSUFBSSxJQUFLLENBQUM7UUFDbENDLElBQUksRUFBRUgsc0VBQXVCO1FBQzdCSyxPQUFPLEVBQUVILElBQUk7SUFDZixDQUFDOztBQUVNLEtBQUssQ0FBQ1EsV0FBVyxJQUFHUixJQUFJLElBQUssQ0FBQztRQUNuQ0MsSUFBSSxFQUFFSCxnRkFBaUM7UUFDdkNLLE9BQU8sRUFBRUgsSUFBSTtJQUNmLENBQUM7O0FBRU0sS0FBSyxDQUFDVSxNQUFNLElBQUdWLElBQUksSUFBSyxDQUFDO1FBQzlCQyxJQUFJLEVBQUVILGlFQUFrQjtRQUN4QkssT0FBTyxFQUFFSCxJQUFJO0lBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fZnJvbnRlbmQvLi9hY3Rpb25zL3N5bmNBY3Rpb25zLmpzPzAyMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFjdGlvblR5cGVzICBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0xvZ2luID0gZGF0YSA9PiAoe1xyXG4gICAgdHlwZTogYWN0aW9uVHlwZXMuQVVUSF9EQVRBLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBjaGVja0F1dGhlbnRpY2F0aW9uID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGU6IGFjdGlvblR5cGVzLkNIRUNLX0FVVEhFTlRJQ0FUSU9OLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH0pXHJcblxyXG4gIGV4cG9ydCBjb25zdCBjcmVhdGVOb3RlID0gZGF0YSA9PiAoe1xyXG4gICAgdHlwZTogYWN0aW9uVHlwZXMuQ1JFQVRFX05PVEUsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfSlcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGdldEFsbExpc3RzID0gZGF0YSA9PiAoe1xyXG4gICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FMTF9MSVNUX09GX0VNQUlMLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH0pXHJcblxyXG4gIGV4cG9ydCBjb25zdCBMb2dPdXQgPSBkYXRhID0+ICh7XHJcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dPVVQsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfSk7Il0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiY2hlY2tMb2dpbiIsImRhdGEiLCJ0eXBlIiwiQVVUSF9EQVRBIiwicGF5bG9hZCIsImNoZWNrQXV0aGVudGljYXRpb24iLCJDSEVDS19BVVRIRU5USUNBVElPTiIsImNyZWF0ZU5vdGUiLCJDUkVBVEVfTk9URSIsImdldEFsbExpc3RzIiwiR0VUX0FMTF9MSVNUX09GX0VNQUlMIiwiTG9nT3V0IiwiTE9HT1VUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/syncActions.js\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Layout({ children  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\components\\\\layout.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\components\\\\layout.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            },\n            __self: this,\n            children: children\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFFVixRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sc0VBQ0RDLENBQUc7Ozs7Ozs7dUZBRUNDLENBQUk7Ozs7Ozs7c0JBQUVGLFFBQVE7OztBQUczQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19mcm9udGVuZC8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxoMT5UbyBkbyBMaXN0PC9oMT4gKi99XHJcbiAgICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./constants/Request.js":
/*!******************************!*\
  !*** ./constants/Request.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeAsyncRequest\": () => (/* binding */ makeAsyncRequest)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AsyncRequest = axios__WEBPACK_IMPORTED_MODULE_0___default().create(); // with loaders on client side\nconst LoaderId = \"__CUSTOM_CUBE_LOADER__\";\nconst toggleLoader = (show)=>{\n    if (typeof document !== \"undefined\") {\n        if (document.getElementById(LoaderId)) {\n            document.getElementById(LoaderId).style.display = show ? \"block\" : \"none\";\n        }\n    }\n};\nAsyncRequest.interceptors.request.use(function(config) {\n    // Do something before request is sent\n    toggleLoader(true);\n    return config;\n}, function(error) {\n    // Do something with request error\n    return Promise.reject(error);\n});\n// Add a response interceptor\nAsyncRequest.interceptors.response.use(function(response) {\n    // Any status code that lie within the range of 2xx cause this function to trigger\n    // Do something with response data\n    toggleLoader(false);\n    return response;\n}, function(error) {\n    // Any status codes that falls outside the range of 2xx cause this function to trigger\n    // Do something with response error\n    toggleLoader(false);\n    return Promise.reject(error);\n});\nconst makeAsyncRequest = (method, url, data)=>{\n    const options = {\n        method,\n        url,\n        data\n    };\n    return AsyncRequest(options);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvUmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFDekIsS0FBSyxDQUFDQyxZQUFZLEdBQUdELG1EQUFZLEdBQUksQ0FBOEI7QUFHbkUsS0FBSyxDQUFDRyxRQUFRLEdBQUcsQ0FBd0I7QUFDekMsS0FBSyxDQUFDQyxZQUFZLElBQUdDLElBQUksR0FBSSxDQUFDO0lBQzVCLEVBQUUsRUFBRSxNQUFNLENBQUNDLFFBQVEsS0FBSyxDQUFXLFlBQUUsQ0FBQztRQUNwQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDSixRQUFRLEdBQUcsQ0FBQztZQUN0Q0csUUFBUSxDQUFDQyxjQUFjLENBQUNKLFFBQVEsRUFBRUssS0FBSyxDQUFDQyxPQUFPLEdBQUdKLElBQUksR0FBRyxDQUFPLFNBQUcsQ0FBTTtRQUMzRSxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFHREosWUFBWSxDQUFDUyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBRUMsTUFBTSxFQUFFLENBQUM7SUFDckQsRUFBc0M7SUFDdENULFlBQVksQ0FBQyxJQUFJO0lBQ2pCLE1BQU0sQ0FBQ1MsTUFBTTtBQUNmLENBQUMsRUFBRSxRQUFRLENBQUVDLEtBQUssRUFBRSxDQUFDO0lBQ25CLEVBQWtDO0lBQ2xDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUNGLEtBQUs7QUFDN0IsQ0FBQztBQUVILEVBQTZCO0FBQzdCYixZQUFZLENBQUNTLFlBQVksQ0FBQ08sUUFBUSxDQUFDTCxHQUFHLENBQUMsUUFBUSxDQUFFSyxRQUFRLEVBQUUsQ0FBQztJQUN4RCxFQUFrRjtJQUNsRixFQUFrQztJQUNsQ2IsWUFBWSxDQUFDLEtBQUs7SUFDbEIsTUFBTSxDQUFDYSxRQUFRO0FBQ2pCLENBQUMsRUFBRSxRQUFRLENBQUVILEtBQUssRUFBRSxDQUFDO0lBQ25CLEVBQXNGO0lBQ3RGLEVBQW1DO0lBQ25DVixZQUFZLENBQUMsS0FBSztJQUNsQixNQUFNLENBQUNXLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRixLQUFLO0FBQzdCLENBQUM7QUFFSSxLQUFLLENBQUNJLGdCQUFnQixJQUFJQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7SUFDcEQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztRQUNmSCxNQUFNO1FBQ05DLEdBQUc7UUFDSEMsSUFBSTtJQUNOLENBQUM7SUFDRCxNQUFNLENBQUNwQixZQUFZLENBQUNxQixPQUFPO0FBQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2Zyb250ZW5kLy4vY29uc3RhbnRzL1JlcXVlc3QuanM/YTVhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEFzeW5jUmVxdWVzdCA9IGF4aW9zLmNyZWF0ZSgpOyAvLyB3aXRoIGxvYWRlcnMgb24gY2xpZW50IHNpZGVcclxuXHJcblxyXG5jb25zdCBMb2FkZXJJZCA9IFwiX19DVVNUT01fQ1VCRV9MT0FERVJfX1wiO1xyXG5jb25zdCB0b2dnbGVMb2FkZXIgPSBzaG93ID0+IHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoTG9hZGVySWQpKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKExvYWRlcklkKS5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblxyXG5Bc3luY1JlcXVlc3QuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIC8vIERvIHNvbWV0aGluZyBiZWZvcmUgcmVxdWVzdCBpcyBzZW50XHJcbiAgICB0b2dnbGVMb2FkZXIodHJ1ZSk7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVxdWVzdCBlcnJvclxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9KTtcclxuXHJcbi8vIEFkZCBhIHJlc3BvbnNlIGludGVyY2VwdG9yXHJcbkFzeW5jUmVxdWVzdC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy8gQW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxyXG4gICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVzcG9uc2UgZGF0YVxyXG4gICAgdG9nZ2xlTG9hZGVyKGZhbHNlKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vIEFueSBzdGF0dXMgY29kZXMgdGhhdCBmYWxscyBvdXRzaWRlIHRoZSByYW5nZSBvZiAyeHggY2F1c2UgdGhpcyBmdW5jdGlvbiB0byB0cmlnZ2VyXHJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBlcnJvclxyXG4gICAgdG9nZ2xlTG9hZGVyKGZhbHNlKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9IChtZXRob2QsIHVybCwgZGF0YSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGFcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXN5bmNSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH07XHJcbiAgIl0sIm5hbWVzIjpbImF4aW9zIiwiQXN5bmNSZXF1ZXN0IiwiY3JlYXRlIiwiTG9hZGVySWQiLCJ0b2dnbGVMb2FkZXIiLCJzaG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsIm1ha2VBc3luY1JlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/Request.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions_asyncActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/asyncActions */ \"./actions/asyncActions.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_vars_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/vars.css */ \"./styles/vars.css\");\n/* harmony import */ var _styles_vars_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_vars_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle`\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n`;\nconst theme = {\n    colors: {\n        primary: '#0070f3'\n    }\n};\nfunction MyApp({ Component , pageProps  }) {\n    (0,_actions_asyncActions__WEBPACK_IMPORTED_MODULE_5__.checkAuthentication)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        __source: {\n            fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\_app.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 8\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlobalStyle, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                    theme: theme,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                        ...pageProps,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Snow white\\\\Downloads\\\\NEWSOFT\\\\todo_frontend\\\\pages\\\\_app.js\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                })\n            ]\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDSjtBQUNrQztBQUNQO0FBR2xDO0FBQ0E7QUFDRTtBQUU3QixLQUFLLENBQUNNLFdBQVcsR0FBR0gsZ0VBQWlCLENBQUM7QUFRdEMsS0FBSyxDQUFDSTtJQUNKQyxNQUFNLEVBQUUsQ0FBQztRQUNQQyxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUM7QUFHRDtJQUVFSjtJQUNBLE1BQU07UUFDTUgsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7bUNBRW5CSSxXQUFXOzs7Ozs7OzttQ0FDWEYsYUFBYTtvQkFBQ0csS0FBSyxFQUFFQSxLQUFLOzs7Ozs7OzsyQkFFVkssU0FBUzs7Ozs7Ozs7Ozs7O0FBTWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgY2hlY2tBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL2FzeW5jQWN0aW9uc1wiXHJcblxyXG5cclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL3ZhcnMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiAnIzAwNzBmMycsXHJcbiAgfSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuICBjaGVja0F1dGhlbnRpY2F0aW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgPExheW91dD4gXHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICBcclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIFxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwiUHJvdmlkZXIiLCJzdG9yZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiVGhlbWVQcm92aWRlciIsImNoZWNrQXV0aGVudGljYXRpb24iLCJHbG9iYWxTdHlsZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/actionTypes.js":
/*!******************************!*\
  !*** ./redux/actionTypes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keymirror */ \"keymirror\");\n/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(keymirror__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keymirror__WEBPACK_IMPORTED_MODULE_0___default()({\n    UPSC_PAGE_LOADING: null,\n    AUTH_DATA: null,\n    LOGOUT: null,\n    CHECK_AUTHENTICATION: null,\n    CREATE_NOTE: null,\n    GET_ALL_LIST_OF_EMAIL: null\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25UeXBlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFFakMsaUVBQWVBLGdEQUFTLENBQUMsQ0FBQztJQUN4QkMsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QkMsU0FBUyxFQUFDLElBQUk7SUFDZEMsTUFBTSxFQUFDLElBQUk7SUFDWEMsb0JBQW9CLEVBQUMsSUFBSTtJQUN6QkMsV0FBVyxFQUFDLElBQUk7SUFDaEJDLHFCQUFxQixFQUFDLElBQUk7QUFHNUIsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2Zyb250ZW5kLy4vcmVkdXgvYWN0aW9uVHlwZXMuanM/YzNmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga2V5TWlycm9yIGZyb20gXCJrZXltaXJyb3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtleU1pcnJvcih7XHJcbiAgVVBTQ19QQUdFX0xPQURJTkc6IG51bGwsXHJcbiAgQVVUSF9EQVRBOm51bGwsXHJcbiAgTE9HT1VUOm51bGwsXHJcbiAgQ0hFQ0tfQVVUSEVOVElDQVRJT046bnVsbCxcclxuICBDUkVBVEVfTk9URTpudWxsLFxyXG4gIEdFVF9BTExfTElTVF9PRl9FTUFJTDpudWxsLFxyXG4gIFxyXG5cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJrZXlNaXJyb3IiLCJVUFNDX1BBR0VfTE9BRElORyIsIkFVVEhfREFUQSIsIkxPR09VVCIsIkNIRUNLX0FVVEhFTlRJQ0FUSU9OIiwiQ1JFQVRFX05PVEUiLCJHRVRfQUxMX0xJU1RfT0ZfRU1BSUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actionTypes.js\n");

/***/ }),

/***/ "./redux/initialState.js":
/*!*******************************!*\
  !*** ./redux/initialState.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.modal = {\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9pbml0aWFsU3RhdGUuanMuanMiLCJtYXBwaW5ncyI6IkFBQUFBLGFBQWEsR0FBRyxDQUFDO0FBTWYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fZnJvbnRlbmQvLi9yZWR1eC9pbml0aWFsU3RhdGUuanM/YWIyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLm1vZGFsID0ge1xyXG5cclxuICAgIC8vIGxvYWRlcjogZmFsc2UsXHJcbiAgICAvLyBhdXRoRGF0YTp7fSxcclxuICAgIC8vIGxpc3RzOnt9XHJcbiAgICBcclxuICB9O1xyXG4gICJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/initialState.js\n");

/***/ }),

/***/ "./redux/reducer.js":
/*!**************************!*\
  !*** ./redux/reducer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState */ \"./redux/initialState.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = _initialState__WEBPACK_IMPORTED_MODULE_1__.modal, action)=>{\n    console.log(\"action in reducer\", action, \"initial state\", state);\n    switch(action.type){\n        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AUTH_DATA:\n            return {\n                ...state,\n                authData: action.payload,\n                isLoggedIn: true\n            };\n        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGOUT:\n            return {\n                ...state,\n                isLoggedIn: action.payload\n            };\n        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CHECK_AUTHENTICATION:\n            return {\n                ...state,\n                isLoggedIn: action.payload\n            };\n        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CREATE_NOTE:\n            return {\n                ...state,\n                lists: action.payload\n            };\n        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_ALL_LIST_OF_EMAIL:\n            return {\n                ...state,\n                lists: action.payload.result\n            };\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUNFO0FBRXpDLGlFQUFnQixDQUFBRSxLQUFLLEdBQUdELGdEQUFrQixFQUFFRyxNQUFNLEdBQUssQ0FBQztJQUN0REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBbUIsb0JBQUVGLE1BQU0sRUFBQyxDQUFlLGdCQUFDRixLQUFLO0lBQzdELE1BQU0sQ0FBRUUsTUFBTSxDQUFDRyxJQUFJO1FBQ2pCLElBQUksQ0FBQ1AsOERBQXFCO1lBQ3hCLE1BQU0sQ0FBQyxDQUFDO21CQUNIRSxLQUFLO2dCQUNSTyxRQUFRLEVBQUVMLE1BQU0sQ0FBQ00sT0FBTztnQkFDeEJDLFVBQVUsRUFBQyxJQUFJO1lBQ2pCLENBQUM7UUFDSCxJQUFJLENBQUNYLDJEQUFrQjtZQUNyQixNQUFNLENBQUMsQ0FBQzttQkFDRkUsS0FBSztnQkFDUlMsVUFBVSxFQUFFUCxNQUFNLENBQUNNLE9BQU87WUFDN0IsQ0FBQztRQUNILElBQUksQ0FBQ1YseUVBQWdDO1lBQ25DLE1BQU0sQ0FBQyxDQUFDO21CQUNERSxLQUFLO2dCQUNSUyxVQUFVLEVBQUVQLE1BQU0sQ0FBQ00sT0FBTztZQUM5QixDQUFDO1FBQ0gsSUFBSSxDQUFDVixnRUFBdUI7WUFDMUIsTUFBTSxDQUFDLENBQUM7bUJBQ0RFLEtBQUs7Z0JBQ1ZhLEtBQUssRUFBRVgsTUFBTSxDQUFDTSxPQUFPO1lBQ3ZCLENBQUM7UUFDSCxJQUFJLENBQUNWLDBFQUFpQztZQUNwQyxNQUFNLENBQUMsQ0FBQzttQkFDREUsS0FBSztnQkFDVmEsS0FBSyxFQUFFWCxNQUFNLENBQUNNLE9BQU8sQ0FBQ08sTUFBTTtZQUM5QixDQUFDOztZQUVELE1BQU0sQ0FBQ2YsS0FBSzs7QUFFbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fZnJvbnRlbmQvLi9yZWR1eC9yZWR1Y2VyLmpzPzJiMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSBcIi4vaW5pdGlhbFN0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUubW9kYWwsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiYWN0aW9uIGluIHJlZHVjZXJcIiwgYWN0aW9uLFwiaW5pdGlhbCBzdGF0ZVwiLHN0YXRlKTtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLkFVVEhfREFUQTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhdXRoRGF0YTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgaXNMb2dnZWRJbjp0cnVlXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLkxPR09VVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgIGlzTG9nZ2VkSW46IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlcy5DSEVDS19BVVRIRU5USUNBVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLkNSRUFURV9OT1RFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlcy5HRVRfQUxMX0xJU1RfT0ZfRU1BSUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0czogYWN0aW9uLnBheWxvYWQucmVzdWx0LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIkFjdGlvblR5cGVzIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJtb2RhbCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiQVVUSF9EQVRBIiwiYXV0aERhdGEiLCJwYXlsb2FkIiwiaXNMb2dnZWRJbiIsIkxPR09VVCIsIkNIRUNLX0FVVEhFTlRJQ0FUSU9OIiwiQ1JFQVRFX05PVEUiLCJsaXN0cyIsIkdFVF9BTExfTElTVF9PRl9FTUFJTCIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducer.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialState */ \"./redux/initialState.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ \"./redux/reducer.js\");\n\n\n\n\n\n\nfunction configureStore(initialState = _initialState__WEBPACK_IMPORTED_MODULE_4__) {\n    const middleware = [\n        (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())\n    ];\n    if (false) {}\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n}\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _initialState__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUM5QjtBQUMrQjtBQUNuQjtBQUNMO0FBQ0g7U0FFMUJRLGNBQWMsQ0FBQ0MsWUFBWSxHQUFHSCwwQ0FBUyxFQUFFLENBQUM7SUFDakQsS0FBSyxDQUFDSSxVQUFVLEdBQUcsQ0FBQ1A7UUFBQUEsb0RBQUs7SUFBQSxDQUFDO0lBQzFCLEVBQUUsRUFBRSxLQUE2QixFQUFFLEVBRWxDO0lBQ0QsTUFBTSxDQUFDSCxrREFBVyxDQUNoQk8sZ0RBQVcsRUFDWEUsWUFBWSxFQUNaTCw2RUFBbUIsQ0FBQ0gsc0RBQWUsSUFBSVMsVUFBVTtBQUVyRCxDQUFDO0FBRUQsS0FBSyxDQUFDRyxLQUFLLEdBQUdiLGtEQUFXLENBQUNPLGdEQUFXLEVBQUVELDBDQUFTO0FBQ2hELGlFQUFlTyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2Zyb250ZW5kLy4vcmVkdXgvc3RvcmUuanM/MzU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG5pbXBvcnQgaW5pdFN0YXRlIGZyb20gXCIuL2luaXRpYWxTdGF0ZVwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiO1xyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlID0gaW5pdFN0YXRlKSB7XHJcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG1pZGRsZXdhcmUucHVzaChjcmVhdGVMb2dnZXIoeyBjb2xsYXBzZWQ6IHRydWUgfSkpO1xyXG4gIH1cclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICByb290UmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRTdGF0ZSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlIiwidGh1bmsiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY3JlYXRlTG9nZ2VyIiwiaW5pdFN0YXRlIiwicm9vdFJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm1pZGRsZXdhcmUiLCJwdXNoIiwiY29sbGFwc2VkIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vars.css":
/*!*************************!*\
  !*** ./styles/vars.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "keymirror":
/*!****************************!*\
  !*** external "keymirror" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("keymirror");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();