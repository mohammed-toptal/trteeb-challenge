/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./icons/index.js":
/*!************************!*\
  !*** ./icons/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar block_icons = {\n  trteeb_data: wp.element.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    x: \"0\",\n    y: \"0\",\n    enableBackground: \"new 0 0 32 32\",\n    version: \"1.1\",\n    viewBox: \"0 0 32 32\",\n    xmlSpace: \"preserve\"\n  }, wp.element.createElement(\"path\", {\n    d: \"M28 31.36H4a.36.36 0 01-.36-.36V1A.36.36 0 014 .64h18c.096 0 .188.038.255.105l6 6A.363.363 0 0128.36 7v24a.36.36 0 01-.36.36zm-23.64-.72h23.28V7.36H22a.36.36 0 01-.36-.36V1.36H4.36v29.28zm18-24h4.771L22.36 1.869V6.64zM25 27.36H7a.36.36 0 01-.36-.36V11a.36.36 0 01.36-.36h18a.36.36 0 01.36.36v16a.36.36 0 01-.36.36zm-5.64-.72h5.279v-3.28H19.36v3.28zm-6 0h5.28v-3.28h-5.28v3.28zm-6 0h5.28v-3.28H7.36v3.28zm12-4h5.279v-3.28H19.36v3.28zm-6 0h5.28v-3.28h-5.28v3.28zm-6 0h5.28v-3.28H7.36v3.28zm12-4h5.279v-3.28H19.36v3.28zm-6 0h5.28v-3.28h-5.28v3.28zm-6 0h5.28v-3.28H7.36v3.28zm12-4h5.279v-3.28H19.36v3.28zm-6 0h5.28v-3.28h-5.28v3.28zm-6 0h5.28v-3.28H7.36v3.28z\"\n  }), wp.element.createElement(\"path\", {\n    fill: \"none\",\n    d: \"M0 0H32V32H0z\"\n  }))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (block_icons);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pY29ucy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ljb25zL2luZGV4LmpzPzE5ZTciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGJsb2NrX2ljb25zID0ge1xuICB0cnRlZWJfZGF0YTogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHg6IFwiMFwiLFxuICAgIHk6IFwiMFwiLFxuICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCAzMiAzMlwiLFxuICAgIHZlcnNpb246IFwiMS4xXCIsXG4gICAgdmlld0JveDogXCIwIDAgMzIgMzJcIixcbiAgICB4bWxTcGFjZTogXCJwcmVzZXJ2ZVwiXG4gIH0sIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTI4IDMxLjM2SDRhLjM2LjM2IDAgMDEtLjM2LS4zNlYxQS4zNi4zNiAwIDAxNCAuNjRoMThjLjA5NiAwIC4xODguMDM4LjI1NS4xMDVsNiA2QS4zNjMuMzYzIDAgMDEyOC4zNiA3djI0YS4zNi4zNiAwIDAxLS4zNi4zNnptLTIzLjY0LS43MmgyMy4yOFY3LjM2SDIyYS4zNi4zNiAwIDAxLS4zNi0uMzZWMS4zNkg0LjM2djI5LjI4em0xOC0yNGg0Ljc3MUwyMi4zNiAxLjg2OVY2LjY0ek0yNSAyNy4zNkg3YS4zNi4zNiAwIDAxLS4zNi0uMzZWMTFhLjM2LjM2IDAgMDEuMzYtLjM2aDE4YS4zNi4zNiAwIDAxLjM2LjM2djE2YS4zNi4zNiAwIDAxLS4zNi4zNnptLTUuNjQtLjcyaDUuMjc5di0zLjI4SDE5LjM2djMuMjh6bS02IDBoNS4yOHYtMy4yOGgtNS4yOHYzLjI4em0tNiAwaDUuMjh2LTMuMjhINy4zNnYzLjI4em0xMi00aDUuMjc5di0zLjI4SDE5LjM2djMuMjh6bS02IDBoNS4yOHYtMy4yOGgtNS4yOHYzLjI4em0tNiAwaDUuMjh2LTMuMjhINy4zNnYzLjI4em0xMi00aDUuMjc5di0zLjI4SDE5LjM2djMuMjh6bS02IDBoNS4yOHYtMy4yOGgtNS4yOHYzLjI4em0tNiAwaDUuMjh2LTMuMjhINy4zNnYzLjI4em0xMi00aDUuMjc5di0zLjI4SDE5LjM2djMuMjh6bS02IDBoNS4yOHYtMy4yOGgtNS4yOHYzLjI4em0tNiAwaDUuMjh2LTMuMjhINy4zNnYzLjI4elwiXG4gIH0pLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBIMzJWMzJIMHpcIlxuICB9KSlcbn07XG5leHBvcnQgZGVmYXVsdCBibG9ja19pY29uczsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./icons/index.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trteeb_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trteeb-data */ \"./trteeb-data/index.js\");\n// Main file to include all blocks\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWFpbiBmaWxlIHRvIGluY2x1ZGUgYWxsIGJsb2Nrc1xuaW1wb3J0IFwiLi90cnRlZWItZGF0YVwiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2018 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString === Object.prototype.toString) {\n\t\t\t\t\tfor (var key in arg) {\n\t\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzRkMjYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EsVUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/classnames/index.js\n");

/***/ }),

/***/ "./trteeb-data/editor.scss":
/*!*********************************!*\
  !*** ./trteeb-data/editor.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90cnRlZWItZGF0YS9lZGl0b3Iuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RydGVlYi1kYXRhL2VkaXRvci5zY3NzPzQzNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./trteeb-data/editor.scss\n");

/***/ }),

/***/ "./trteeb-data/index.js":
/*!******************************!*\
  !*** ./trteeb-data/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/index */ \"./icons/index.js\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ \"./trteeb-data/editor.scss\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    BlockControls = _wp$editor.BlockControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl,\n    ToggleControl = _wp$components.ToggleControl;\nregisterBlockType('trteeb/trteeb-data', {\n  title: __('Trteeb Data', 'trteeb'),\n  description: __('Display Trteeb data using Gutenberg block', 'trteeb'),\n  // common, formatting, layout, widgets, embed\n  category: 'common',\n  icon: _icons_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].trteeb_data,\n  keywords: [__('Trteeb', 'trteeb'), __('Data', 'trteeb'), __('MiUsage', 'trteeb')],\n  attributes: {\n    trteeb_id: {\n      type: 'text',\n      default: ''\n    },\n    id_column: {\n      type: 'boolean',\n      default: true\n    },\n    fname_column: {\n      type: 'boolean',\n      default: true\n    },\n    lname_column: {\n      type: 'boolean',\n      default: true\n    },\n    email_column: {\n      type: 'boolean',\n      default: true\n    },\n    date_column: {\n      type: 'boolean',\n      default: true\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        attributes = props.attributes;\n    var trteeb_id = attributes.trteeb_id,\n        id_column = attributes.id_column,\n        fname_column = attributes.fname_column,\n        lname_column = attributes.lname_column,\n        email_column = attributes.email_column,\n        date_column = attributes.date_column;\n\n    if (trteeb_id.length <= 0) {\n      var new_trteeb_id = Math.floor(Math.random() * 100000 + 1);\n      props.setAttributes({\n        trteeb_id: \"trteeb-table-\".concat(new_trteeb_id)\n      });\n    }\n\n    var columns_control = [];\n\n    if (id_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (fname_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (lname_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (email_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (date_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Columns', 'trteeb')\n    }, wp.element.createElement(ToggleControl, {\n      label: __(\"ID\", \"zestylemon\"),\n      checked: id_column,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          id_column: !id_column\n        });\n      }\n    }), wp.element.createElement(ToggleControl, {\n      label: __(\"First name\", \"zestylemon\"),\n      checked: fname_column,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          fname_column: !fname_column\n        });\n      }\n    }), wp.element.createElement(ToggleControl, {\n      label: __(\"Last name\", \"zestylemon\"),\n      checked: lname_column,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          lname_column: !lname_column\n        });\n      }\n    }), wp.element.createElement(ToggleControl, {\n      label: __(\"Email\", \"zestylemon\"),\n      checked: email_column,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          email_column: !email_column\n        });\n      }\n    }), wp.element.createElement(ToggleControl, {\n      label: __(\"Date\", \"zestylemon\"),\n      checked: date_column,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          date_column: !date_column\n        });\n      }\n    }))), wp.element.createElement(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, \"trteeb-block-container\", \"trteeb-block-editor\"),\n      id: trteeb_id,\n      \"data-columns-control\": columns_control\n    }, \"Trteeb data table will be loaded on frontend.\")];\n  },\n  save: function save(_ref) {\n    var attributes = _ref.attributes;\n    var trteeb_id = attributes.trteeb_id,\n        id_column = attributes.id_column,\n        fname_column = attributes.fname_column,\n        lname_column = attributes.lname_column,\n        email_column = attributes.email_column,\n        date_column = attributes.date_column;\n    var columns_control = [];\n\n    if (id_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (fname_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (lname_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (email_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    if (date_column) {\n      columns_control.push(1);\n    } else {\n      columns_control.push(0);\n    }\n\n    columns_control = JSON.stringify(columns_control);\n    return wp.element.createElement(\"div\", {\n      className: \"trteeb-block-container\",\n      id: trteeb_id,\n      \"data-columns-control\": columns_control\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90cnRlZWItZGF0YS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RydGVlYi1kYXRhL2luZGV4LmpzP2Y1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgYmxvY2tfaWNvbnMgZnJvbSAnLi4vaWNvbnMvaW5kZXgnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQWxpZ25tZW50VG9vbGJhciA9IF93cCRlZGl0b3IuQmxvY2tBbGlnbm1lbnRUb29sYmFyO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdyxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sO1xucmVnaXN0ZXJCbG9ja1R5cGUoJ3RydGVlYi90cnRlZWItZGF0YScsIHtcbiAgdGl0bGU6IF9fKCdUcnRlZWIgRGF0YScsICd0cnRlZWInKSxcbiAgZGVzY3JpcHRpb246IF9fKCdEaXNwbGF5IFRydGVlYiBkYXRhIHVzaW5nIEd1dGVuYmVyZyBibG9jaycsICd0cnRlZWInKSxcbiAgLy8gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQsIHdpZGdldHMsIGVtYmVkXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgaWNvbjogYmxvY2tfaWNvbnMudHJ0ZWViX2RhdGEsXG4gIGtleXdvcmRzOiBbX18oJ1RydGVlYicsICd0cnRlZWInKSwgX18oJ0RhdGEnLCAndHJ0ZWViJyksIF9fKCdNaVVzYWdlJywgJ3RydGVlYicpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIHRydGVlYl9pZDoge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGlkX2NvbHVtbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgZm5hbWVfY29sdW1uOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBsbmFtZV9jb2x1bW46IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGVtYWlsX2NvbHVtbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgZGF0ZV9jb2x1bW46IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcbiAgICB2YXIgdHJ0ZWViX2lkID0gYXR0cmlidXRlcy50cnRlZWJfaWQsXG4gICAgICAgIGlkX2NvbHVtbiA9IGF0dHJpYnV0ZXMuaWRfY29sdW1uLFxuICAgICAgICBmbmFtZV9jb2x1bW4gPSBhdHRyaWJ1dGVzLmZuYW1lX2NvbHVtbixcbiAgICAgICAgbG5hbWVfY29sdW1uID0gYXR0cmlidXRlcy5sbmFtZV9jb2x1bW4sXG4gICAgICAgIGVtYWlsX2NvbHVtbiA9IGF0dHJpYnV0ZXMuZW1haWxfY29sdW1uLFxuICAgICAgICBkYXRlX2NvbHVtbiA9IGF0dHJpYnV0ZXMuZGF0ZV9jb2x1bW47XG5cbiAgICBpZiAodHJ0ZWViX2lkLmxlbmd0aCA8PSAwKSB7XG4gICAgICB2YXIgbmV3X3RydGVlYl9pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCArIDEpO1xuICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHRydGVlYl9pZDogXCJ0cnRlZWItdGFibGUtXCIuY29uY2F0KG5ld190cnRlZWJfaWQpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uc19jb250cm9sID0gW107XG5cbiAgICBpZiAoaWRfY29sdW1uKSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uc19jb250cm9sLnB1c2goMCk7XG4gICAgfVxuXG4gICAgaWYgKGZuYW1lX2NvbHVtbikge1xuICAgICAgY29sdW1uc19jb250cm9sLnB1c2goMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbnNfY29udHJvbC5wdXNoKDApO1xuICAgIH1cblxuICAgIGlmIChsbmFtZV9jb2x1bW4pIHtcbiAgICAgIGNvbHVtbnNfY29udHJvbC5wdXNoKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgwKTtcbiAgICB9XG5cbiAgICBpZiAoZW1haWxfY29sdW1uKSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uc19jb250cm9sLnB1c2goMCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVfY29sdW1uKSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uc19jb250cm9sLnB1c2goMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5zcGVjdG9yQ29udHJvbHMsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIHtcbiAgICAgIHRpdGxlOiBfXygnQ29sdW1ucycsICd0cnRlZWInKVxuICAgIH0sIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG4gICAgICBsYWJlbDogX18oXCJJRFwiLCBcInplc3R5bGVtb25cIiksXG4gICAgICBjaGVja2VkOiBpZF9jb2x1bW4sXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3X3ZhbCkge1xuICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBpZF9jb2x1bW46ICFpZF9jb2x1bW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG4gICAgICBsYWJlbDogX18oXCJGaXJzdCBuYW1lXCIsIFwiemVzdHlsZW1vblwiKSxcbiAgICAgIGNoZWNrZWQ6IGZuYW1lX2NvbHVtbixcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIGZuYW1lX2NvbHVtbjogIWZuYW1lX2NvbHVtblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvZ2dsZUNvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBfXyhcIkxhc3QgbmFtZVwiLCBcInplc3R5bGVtb25cIiksXG4gICAgICBjaGVja2VkOiBsbmFtZV9jb2x1bW4sXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3X3ZhbCkge1xuICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBsbmFtZV9jb2x1bW46ICFsbmFtZV9jb2x1bW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG4gICAgICBsYWJlbDogX18oXCJFbWFpbFwiLCBcInplc3R5bGVtb25cIiksXG4gICAgICBjaGVja2VkOiBlbWFpbF9jb2x1bW4sXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3X3ZhbCkge1xuICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBlbWFpbF9jb2x1bW46ICFlbWFpbF9jb2x1bW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG4gICAgICBsYWJlbDogX18oXCJEYXRlXCIsIFwiemVzdHlsZW1vblwiKSxcbiAgICAgIGNoZWNrZWQ6IGRhdGVfY29sdW1uLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld192YWwpIHtcbiAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgZGF0ZV9jb2x1bW46ICFkYXRlX2NvbHVtblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSkpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKGNsYXNzTmFtZSwgXCJ0cnRlZWItYmxvY2stY29udGFpbmVyXCIsIFwidHJ0ZWViLWJsb2NrLWVkaXRvclwiKSxcbiAgICAgIGlkOiB0cnRlZWJfaWQsXG4gICAgICBcImRhdGEtY29sdW1ucy1jb250cm9sXCI6IGNvbHVtbnNfY29udHJvbFxuICAgIH0sIFwiVHJ0ZWViIGRhdGEgdGFibGUgd2lsbCBiZSBsb2FkZWQgb24gZnJvbnRlbmQuXCIpXTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXM7XG4gICAgdmFyIHRydGVlYl9pZCA9IGF0dHJpYnV0ZXMudHJ0ZWViX2lkLFxuICAgICAgICBpZF9jb2x1bW4gPSBhdHRyaWJ1dGVzLmlkX2NvbHVtbixcbiAgICAgICAgZm5hbWVfY29sdW1uID0gYXR0cmlidXRlcy5mbmFtZV9jb2x1bW4sXG4gICAgICAgIGxuYW1lX2NvbHVtbiA9IGF0dHJpYnV0ZXMubG5hbWVfY29sdW1uLFxuICAgICAgICBlbWFpbF9jb2x1bW4gPSBhdHRyaWJ1dGVzLmVtYWlsX2NvbHVtbixcbiAgICAgICAgZGF0ZV9jb2x1bW4gPSBhdHRyaWJ1dGVzLmRhdGVfY29sdW1uO1xuICAgIHZhciBjb2x1bW5zX2NvbnRyb2wgPSBbXTtcblxuICAgIGlmIChpZF9jb2x1bW4pIHtcbiAgICAgIGNvbHVtbnNfY29udHJvbC5wdXNoKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgwKTtcbiAgICB9XG5cbiAgICBpZiAoZm5hbWVfY29sdW1uKSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uc19jb250cm9sLnB1c2goMCk7XG4gICAgfVxuXG4gICAgaWYgKGxuYW1lX2NvbHVtbikge1xuICAgICAgY29sdW1uc19jb250cm9sLnB1c2goMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbnNfY29udHJvbC5wdXNoKDApO1xuICAgIH1cblxuICAgIGlmIChlbWFpbF9jb2x1bW4pIHtcbiAgICAgIGNvbHVtbnNfY29udHJvbC5wdXNoKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgwKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZV9jb2x1bW4pIHtcbiAgICAgIGNvbHVtbnNfY29udHJvbC5wdXNoKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zX2NvbnRyb2wucHVzaCgwKTtcbiAgICB9XG5cbiAgICBjb2x1bW5zX2NvbnRyb2wgPSBKU09OLnN0cmluZ2lmeShjb2x1bW5zX2NvbnRyb2wpO1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInRydGVlYi1ibG9jay1jb250YWluZXJcIixcbiAgICAgIGlkOiB0cnRlZWJfaWQsXG4gICAgICBcImRhdGEtY29sdW1ucy1jb250cm9sXCI6IGNvbHVtbnNfY29udHJvbFxuICAgIH0pO1xuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./trteeb-data/index.js\n");

/***/ })

/******/ });