"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productos",{

/***/ "./pages/productos.js":
/*!****************************!*\
  !*** ./pages/productos.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ productos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction productos() {\n    _s();\n    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/productos\").then((response)=>{\n            setProductos(response.data);\n            console.log(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/productos/NuevoProducto\",\n                className: \"bg-blue-900 rounded-md text-white py-1 px-2\",\n                children: \"Agregra un nuevo Producto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Nombre\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: productos.map((producto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: producto.nombre\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/productos\" + producto._id,\n                                            children: \"Editar\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, producto._id, true, {\n                                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(productos, \"1DSHZPgX73L4Uszt4d22RALz2sY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0b3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZjtBQUNHO0FBQ2U7QUFFNUIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0EsV0FBV0MsYUFBYSxHQUFHRiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDRCxnREFBU0EsQ0FBQztRQUNSRixpREFBUyxDQUFDLGtCQUFrQk8sSUFBSSxDQUFDQyxDQUFBQTtZQUMvQkgsYUFBYUcsU0FBU0MsSUFBSTtZQUMxQkMsUUFBUUMsR0FBRyxDQUFDSCxTQUFTQyxJQUFJO1FBQzNCO0lBRUYsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNWLDBEQUFNQTs7MEJBQ0wsOERBQUNFLGtEQUFJQTtnQkFBQ1csTUFBTTtnQkFBNEJDLFdBQVU7MEJBQThDOzs7Ozs7MEJBSWhHLDhEQUFDQztnQkFBTUQsV0FBVTs7a0NBQ2YsOERBQUNFO2tDQUNDLDRFQUFDQztzQ0FDQyw0RUFBQ0M7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFZCxVQUFVZSxHQUFHLENBQUNDLENBQUFBLHlCQUNiLDhEQUFDSjs7a0RBQ0MsOERBQUNDO2tEQUFJRyxTQUFTQyxNQUFNOzs7Ozs7a0RBQ3BCLDhEQUFDSjtrREFDQyw0RUFBQ2hCLGtEQUFJQTs0Q0FBQ1csTUFBTSxlQUFlUSxTQUFTRSxHQUFHO3NEQUFFOzs7Ozs7Ozs7Ozs7K0JBSHBDRixTQUFTRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWpDO0dBcEN3QmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3Rvcy5qcz9mZWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdG9zKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnL2FwaS9wcm9kdWN0b3MnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgc2V0UHJvZHVjdG9zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgfSk7XHJcblxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0b3MvTnVldm9Qcm9kdWN0byd9IGNsYXNzTmFtZT1cImJnLWJsdWUtOTAwIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBweS0xIHB4LTJcIj5cclxuICAgICAgICBBZ3JlZ3JhIHVuIG51ZXZvIFByb2R1Y3RvXHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJiYXNpYyBtdC0yXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+Tm9tYnJlPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7cHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e3Byb2R1Y3RvLl9pZH0+XHJcbiAgICAgICAgICAgICAgPHRkPntwcm9kdWN0by5ub21icmV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2R1Y3RvcycgKyBwcm9kdWN0by5faWR9PlxyXG4gICAgICAgICAgICAgICAgICBFZGl0YXJcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiYXhpb3MiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhyZWYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0ZCIsInRib2R5IiwibWFwIiwicHJvZHVjdG8iLCJub21icmUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/productos.js\n"));

/***/ })

});