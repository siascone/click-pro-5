/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/button */ \"./src/scripts/button.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var button = document.getElementById(\"click\");\n  var message = document.getElementById(\"message\");\n  var count = document.getElementById(\"count\");\n  (0,_scripts_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, message, count);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0VBQ2hELElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLE9BQXhCLENBQWY7RUFDQSxJQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFoQjtFQUNBLElBQU1FLEtBQUssR0FBR0wsUUFBUSxDQUFDRyxjQUFULENBQXdCLE9BQXhCLENBQWQ7RUFDQUosMkRBQU0sQ0FBQ0csTUFBRCxFQUFTRSxPQUFULEVBQWtCQyxLQUFsQixDQUFOO0FBQ0gsQ0FMRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWNrLXByby01Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3NjcmlwdHMvYnV0dG9uJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xpY2tcIik7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKTtcbiAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRcIik7XG4gICAgQnV0dG9uKGJ1dHRvbiwgbWVzc2FnZSwgY291bnQpO1xufSkiXSwibmFtZXMiOlsiQnV0dG9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlIiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/button.js":
/*!*******************************!*\
  !*** ./src/scripts/button.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar Button = function Button(btn, message, count) {\n  var num_count = 0;\n  var messages = {\n    1: \"Keep clicking...\",\n    2: \"... getting there...\",\n    3: \"... just a couple more ...\",\n    4: \"... almost...\",\n    5: \"5 clicks! You're a Pro!!!\"\n  };\n  btn.addEventListener(\"click\", function () {\n    num_count += 1;\n\n    if (num_count == 5) {\n      message.innerText = \"5 Clicks! You did it! Care to try again? Click on...\";\n      count.innerText = num_count;\n    } else if (num_count > 5) {\n      num_count = 0;\n      btn.click();\n    } else {\n      count.innerText = num_count;\n      message.innerText = messages[num_count];\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idXR0b24uanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFlQyxLQUFmLEVBQXlCO0VBQ3BDLElBQUlDLFNBQVMsR0FBRyxDQUFoQjtFQUNBLElBQU1DLFFBQVEsR0FBRztJQUNiLEdBQUcsa0JBRFU7SUFFYixHQUFHLHNCQUZVO0lBR2IsR0FBRyw0QkFIVTtJQUliLEdBQUcsZUFKVTtJQUtiLEdBQUc7RUFMVSxDQUFqQjtFQVFBSixHQUFHLENBQUNLLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07SUFDaENGLFNBQVMsSUFBSSxDQUFiOztJQUVBLElBQUlBLFNBQVMsSUFBSSxDQUFqQixFQUFvQjtNQUNoQkYsT0FBTyxDQUFDSyxTQUFSLEdBQW9CLHNEQUFwQjtNQUNBSixLQUFLLENBQUNJLFNBQU4sR0FBa0JILFNBQWxCO0lBQ0gsQ0FIRCxNQUdPLElBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtNQUN0QkEsU0FBUyxHQUFHLENBQVo7TUFDQUgsR0FBRyxDQUFDTyxLQUFKO0lBQ0gsQ0FITSxNQUdBO01BQ0hMLEtBQUssQ0FBQ0ksU0FBTixHQUFrQkgsU0FBbEI7TUFDQUYsT0FBTyxDQUFDSyxTQUFSLEdBQW9CRixRQUFRLENBQUNELFNBQUQsQ0FBNUI7SUFDSDtFQUNKLENBYkQ7QUFjSCxDQXhCRDs7QUEwQkEsK0RBQWVKLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGljay1wcm8tNS8uL3NyYy9zY3JpcHRzL2J1dHRvbi5qcz9iYzhlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1dHRvbiA9IChidG4sIG1lc3NhZ2UsIGNvdW50KSA9PiB7XG4gICAgbGV0IG51bV9jb3VudCA9IDA7XG4gICAgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgICAgIDE6IFwiS2VlcCBjbGlja2luZy4uLlwiLFxuICAgICAgICAyOiBcIi4uLiBnZXR0aW5nIHRoZXJlLi4uXCIsXG4gICAgICAgIDM6IFwiLi4uIGp1c3QgYSBjb3VwbGUgbW9yZSAuLi5cIixcbiAgICAgICAgNDogXCIuLi4gYWxtb3N0Li4uXCIsXG4gICAgICAgIDU6IFwiNSBjbGlja3MhIFlvdSdyZSBhIFBybyEhIVwiLFxuICAgIH1cblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBudW1fY291bnQgKz0gMVxuXG4gICAgICAgIGlmIChudW1fY291bnQgPT0gNSkge1xuICAgICAgICAgICAgbWVzc2FnZS5pbm5lclRleHQgPSBcIjUgQ2xpY2tzISBZb3UgZGlkIGl0ISBDYXJlIHRvIHRyeSBhZ2Fpbj8gQ2xpY2sgb24uLi5cIjtcbiAgICAgICAgICAgIGNvdW50LmlubmVyVGV4dCA9IG51bV9jb3VudDtcbiAgICAgICAgfSBlbHNlIGlmIChudW1fY291bnQgPiA1KSB7XG4gICAgICAgICAgICBudW1fY291bnQgPSAwO1xuICAgICAgICAgICAgYnRuLmNsaWNrKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50LmlubmVyVGV4dCA9IG51bV9jb3VudDtcbiAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZXNbbnVtX2NvdW50XTtcbiAgICAgICAgfSBcbiAgICB9KVxufSBcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJidG4iLCJtZXNzYWdlIiwiY291bnQiLCJudW1fY291bnQiLCJtZXNzYWdlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lclRleHQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/button.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGljay1wcm8tNS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;