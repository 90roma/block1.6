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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/button.js":
/*!**************************!*\
  !*** ./src/js/button.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btnServ = document.getElementById('section-service__btn');
var aboutUsWrapper = document.querySelector('.section-services__text-wrapper');
var bntServIcon = document.querySelector('.section-services__btn-icon');
var btnServText = document.querySelector('.section-services__btn-text');
var btnBrand = document.getElementById('section-brand__btn');
var brandWrapper = document.querySelector('.section-brand__wrapper');
var btnBrandIcon = document.querySelector('.section-brand__btn-icon');
var btnBrandText = document.querySelector('.section-brand__btn-text');
var btnTech = document.getElementById('section-technics__btn');
var techWrapper = document.querySelector('.section-technics__wrapper');
var btnTechIcon = document.querySelector('.section-technics__btn-icon');
var btnTechText = document.querySelector('.section-technics__btn-text');
var bgSlide = document.querySelector('.menu-bg');
var btnBurger = document.querySelector('.header__btn-circle--burger');
var mainMenu = document.querySelector('.main-menu');
var btnClose = document.querySelector('.main-menu__btn-circle--close');
var menuChat = document.querySelector('.menu-chat');
var btnChat = document.getElementById('btnChat');
var btnChatMobile = document.getElementById('btnChatMobile');
var btnCloseChat = document.querySelector('.menu-chat__btn-circle--close');
var menuCall = document.querySelector('.menu-call');
var btnCalls = document.getElementById('btnCalls');
var btnCallMob = document.getElementById('btnCallMob');
var btnCloseCall = document.querySelector('.menu-call__btn-circle--close');
btnCalls.addEventListener('click', function () {
  if (menuCall.className === 'menu-call menu-call--close') {
    menuCall.className = 'menu-call menu-call--open';
    bgSlide.className = 'menu-bg menu-bg--open';
    mainMenu.className = 'main-menu main-menu--close';
    menuChat.className = 'menu-chat menu-chat--close';
  } else {
    menuCall.className = 'menu-call menu-call--close';
    bgSlide.className = 'menu-bg menu-bg--close';
  }
});
btnCallMob.addEventListener('click', function () {
  if (menuCall.className === 'menu-call menu-call--close') {
    menuCall.className = 'menu-call menu-call--open';
    bgSlide.className = 'menu-bg menu-bg--open';
    mainMenu.className = 'main-menu main-menu--close';
    menuChat.className = 'menu-chat menu-chat--close';
  } else {
    menuCall.className = 'menu-call menu-call--close';
    bgSlide.className = 'menu-bg menu-bg--close';
  }
});
btnChat.addEventListener('click', function () {
  if (menuChat.className === 'menu-chat menu-chat--close') {
    menuChat.className = 'menu-chat menu-chat--open';
    bgSlide.className = 'menu-bg menu-bg--open';
    mainMenu.className = 'main-menu main-menu--close';
    menuCall.className = 'menu-call menu-call--close';
  } else {
    menuChat.className = 'menu-chat menu-chat--close';
    bgSlide.className = 'menu-bg menu-bg--close';
  }
});
btnChatMobile.addEventListener('click', function () {
  if (menuChat.className === 'menu-chat menu-chat--close') {
    menuChat.className = 'menu-chat menu-chat--open';
    bgSlide.className = 'menu-bg menu-bg--open';
    mainMenu.className = 'main-menu main-menu--close';
    menuCall.className = 'menu-call menu-call--close';
  } else {
    menuChat.className = 'menu-chat menu-chat--close';
    bgSlide.className = 'menu-bg menu-bg--close';
  }
});

btnCloseChat.onclick = function () {
  bgSlide.className = 'menu-bg menu-bg--close';
  menuChat.className = 'menu-chat menu-chat--close';
};

btnCloseCall.onclick = function () {
  bgSlide.className = 'menu-bg menu-bg--close';
  menuCall.className = 'menu-call menu-call--close';
};

btnServ.addEventListener('click', function () {
  aboutUsWrapper.classList.toggle('section-services__text-wrapper--show');
  bntServIcon.classList.toggle('section-services__btn-icon');

  if (btnServText.innerText === 'Читать далее') {
    btnServText.innerText = 'Скрыть';
  } else {
    btnServText.innerText = 'Читать далее';
  }
});
btnBrand.addEventListener('click', function () {
  brandWrapper.classList.toggle('section-brand__wrapper--show');
  btnBrandIcon.classList.toggle('section-brand__btn-icon');

  if (btnBrandText.innerText === 'Показать всё') {
    btnBrandText.innerText = 'Скрыть';
  } else {
    btnBrandText.innerText = 'Показать всё';
  }
});
btnTech.addEventListener('click', function () {
  techWrapper.classList.toggle('section-technics__wrapper--show');
  btnTechIcon.classList.toggle('section-technics__btn-icon');

  if (btnTechText.innerText === 'Показать всё') {
    btnTechText.innerText = 'Скрыть';
  } else {
    btnTechText.innerText = 'Показать всё';
  }
});
btnBurger.addEventListener('click', function () {
  if (mainMenu.className === 'main-menu main-menu--close') {
    mainMenu.className = 'main-menu main-menu--open';
    bgSlide.className = 'menu-bg menu-bg--open';
  } else {
    mainMenu.className = 'main-menu main-menu--close';
    bgSlide.className = 'menu-bg menu-bg--close';
  }

  mainMenu.classList.toggle('main-menu--shadow');
});
btnClose.addEventListener('click', function () {
  mainMenu.classList.toggle('main-menu--shadow');

  if (mainMenu.className === 'main-menu main-menu--open') {
    mainMenu.className = 'main-menu main-menu--close';
    bgSlide.className = 'menu-bg menu-bg--close';
  } else {
    mainMenu.className = 'main-menu main-menu--open';
    bgSlide.className = 'menu-bg menu-bg--open';
  }
});

bgSlide.onclick = function () {
  bgSlide.className = 'menu-bg menu-bg--close';
  mainMenu.className = 'main-menu main-menu--close';
  menuChat.className = 'menu-chat menu-chat--close';
  menuCall.className = 'menu-call menu-call--close';
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_basic_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/basic.scss */ "./src/scss/basic.scss");
/* harmony import */ var _scss_basic_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_basic_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/fonts.scss */ "./src/scss/fonts.scss");
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_fonts_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_mobile_swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/mobile-swiper.scss */ "./src/scss/mobile-swiper.scss");
/* harmony import */ var _scss_mobile_swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_mobile_swiper_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_swiper_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/button.js */ "./src/js/button.js");
/* harmony import */ var _js_button_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_button_js__WEBPACK_IMPORTED_MODULE_5__);





 // console.log('Works!');

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sliders = document.querySelectorAll('.swiper-container');
sliders.forEach(function (el) {
  var swiper = new Swiper(el, {
    slidesPerView: 1.3,
    spaceBetween: 16,
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1.5,
        spaceBetween: 24
      },
      420: {
        slidesPerView: 1.9,
        spaceBetween: 24
      }
    }
  });
});

/***/ }),

/***/ "./src/scss/basic.scss":
/*!*****************************!*\
  !*** ./src/scss/basic.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/fonts.scss":
/*!*****************************!*\
  !*** ./src/scss/fonts.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/mobile-swiper.scss":
/*!*************************************!*\
  !*** ./src/scss/mobile-swiper.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map