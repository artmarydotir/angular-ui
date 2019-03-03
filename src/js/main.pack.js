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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.angularApp = window.angular.module('app', ['ngMaterial', 'ngRoute', 'ngMessages', 'ngSanitize']);

// language
__webpack_require__(1);

// constrollers
__webpack_require__(2);

// config
__webpack_require__(3);

// run
__webpack_require__(4);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.i18n = {
  title: 'عنوان'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.angularApp.controller('HomeController', ['$scope', '$rootScope', function HomeController($scope, $rootScope) {
  $rootScope.title = window.i18n.home;
}]);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.angularApp.config(['$routeProvider', function configRouteProvider($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'lib/templates/HomeController.html'
  }).otherwise({
    redirectTo: '/'
  });
}]);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.angularApp.run(['$rootScope', function rootScopeConfig($rootScope) {
  $rootScope.i18n = window.i18n;
  $rootScope.breadcrumb = [];
  $rootScope.progress = 0;
  $rootScope.routePath = '/';

  $rootScope.$on('$routeChangeSuccess', function (e, current) {
    $rootScope.routePath = current.$$route.originalPath;
  });

  // close loading
  window.$('#loading').fadeOut('slow', function () {
    window.$('#loading').remove();
    window.$('body').css('overflow', 'visible');
  });
}]);

/***/ })
/******/ ]);