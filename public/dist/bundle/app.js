/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/Episode.js":
/*!**********************************!*\
  !*** ./src/component/Episode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Episode = function Episode(_ref) {
    var title = _ref.title,
        image = _ref.image,
        trackUrl = _ref.trackUrl;

    return _react2.default.createElement(
        "div",
        { className: "d-block d-md-flex podcast-entry bg-white mb-5" },
        _react2.default.createElement("div", { className: "image", style: { backgroundImage: "url('images/img_1.jpg')" } }),
        _react2.default.createElement(
            "div",
            { className: "text" },
            _react2.default.createElement(
                "h3",
                { className: "font-weight-light" },
                _react2.default.createElement(
                    "a",
                    { href: "single-post.html" },
                    title
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "text-white mb-3" },
                _react2.default.createElement(
                    "span",
                    { className: "text-black-opacity-05" },
                    _react2.default.createElement(
                        "small",
                        null,
                        "By John Doe ",
                        _react2.default.createElement(
                            "span",
                            { className: "sep" },
                            "/"
                        ),
                        " 16 September 2017 ",
                        _react2.default.createElement(
                            "span",
                            { className: "sep" },
                            "/"
                        ),
                        " 1:30:20"
                    )
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "player" },
                _react2.default.createElement(
                    "audio",
                    { id: "player2", preload: "none", controls: true, controlsList: "nodownload", style: { width: '100%' } },
                    _react2.default.createElement("source", { src: trackUrl, type: "audio/mp3" })
                )
            )
        )
    );
};
exports.default = Episode;

/***/ }),

/***/ "./src/component/Header.js":
/*!*********************************!*\
  !*** ./src/component/Header.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { className: "site-navbar py-4", role: "banner" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "row align-items-center" },
        _react2.default.createElement(
          "div",
          { className: "col-3" },
          _react2.default.createElement(
            "h1",
            { className: "site-logo" },
            _react2.default.createElement(
              "a",
              { href: "index.html", className: "h2" },
              "Podcast",
              _react2.default.createElement(
                "span",
                { className: "text-primary" },
                "."
              ),
              " "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-9" },
          _react2.default.createElement(
            "nav",
            { className: "site-navigation position-relative text-right text-md-right", role: "navigation" },
            _react2.default.createElement(
              "div",
              { className: "d-block d-lg-none ml-md-0 mr-auto" },
              _react2.default.createElement(
                "a",
                { href: "#", className: "site-menu-toggle js-menu-toggle text-black" },
                _react2.default.createElement("span", { className: "icon-menu h3" })
              )
            ),
            _react2.default.createElement(
              "ul",
              { className: "site-menu js-clone-nav d-none d-lg-block" },
              _react2.default.createElement(
                "li",
                { className: "active" },
                _react2.default.createElement(
                  "a",
                  { href: "index.html" },
                  "Home"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "about.html" },
                  "About"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "contact.html" },
                  "Contact"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "login-register.html" },
                  "Login / Register"
                )
              )
            )
          )
        )
      )
    )
  );
};
exports.default = Header;

/***/ }),

/***/ "./src/component/PodcastRow.js":
/*!*************************************!*\
  !*** ./src/component/PodcastRow.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PodcastRow = function PodcastRow(_ref) {
    var name = _ref.name,
        image = _ref.image,
        categories = _ref.categories;

    return _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
            "a",
            { href: "#", className: "d-flex align-items-center  p-2" },
            _react2.default.createElement("img", { src: image, alt: "Image", className: "img-fluid mr-2" }),
            _react2.default.createElement(
                "div",
                { className: "podcaster" },
                _react2.default.createElement(
                    "span",
                    { className: "d-block" },
                    name
                ),
                _react2.default.createElement(
                    "span",
                    { className: "small" },
                    categories.join(', ')
                )
            )
        )
    );
};
exports.default = PodcastRow;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(/*! ./component/Header */ "./src/component/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _PodcastRow = __webpack_require__(/*! ./component/PodcastRow */ "./src/component/PodcastRow.js");

var _PodcastRow2 = _interopRequireDefault(_PodcastRow);

var _Episode = __webpack_require__(/*! ./component/Episode */ "./src/component/Episode.js");

var _Episode2 = _interopRequireDefault(_Episode);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//import { application } from 'express'

var App = function App() {
    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        searchTerm = _useState2[0],
        setSearchTerm = _useState2[1];

    var podcast = [{ id: 0, name: 'podcast 1', image: '/images/person_1.jpg', categories: ['Sound Engineering, Motion graphics'] }, { id: 1, name: 'podcast 2', image: '/images/person_2.jpg', categories: ['Graphics design, Motion graphics'] }, { id: 2, name: 'podcast 3', image: '/images/person_3.jpg', categories: ['Science, Motion graphics'] }];
    var episodes = [{ id: 0, title: 'track 1', images: '/images/person_1.jpg', trackUrl: 'https://cf-media.sndcdn.com' }, { id: 1, title: 'track 2', images: '/images/person_2.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88' }, { id: 2, title: 'track 3', images: '/images/person_3.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88' }, { id: 3, title: 'track 4', images: '/images/person_4.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88' }, { id: 4, title: 'track 5', images: '/images/person_5.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88' }];
    var onInputTyped = function onInputTyped(event) {
        //console.log('onInputTyped:' + event.target.value)
        setSearchTerm(event.target.value);
    };
    var onSearchBtnClicked = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            console.log('onSearchBtnClicked: ' + searchTerm);

                            _context.next = 3;
                            return (0, _axios2.default)({
                                url: '/search',
                                method: 'post',
                                body: {
                                    term: 'searchTerm'
                                },
                                options: {
                                    headers: { Accept: 'application/json' }
                                }
                            });

                        case 3:
                            response = _context.sent;

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function onSearchBtnClicked(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    // const App = () =>{
    return _react2.default.createElement(
        'div',
        { className: 'site-wrap' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
            'div',
            { className: 'site-section' },
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-lg-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'featured-user  mb-5 mb-lg-0' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'mb-2' },
                                'Search Podcasts'
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { display: "flex" } },
                                _react2.default.createElement('input', { type: 'text', style: { height: "32px" }, className: 'form-control mb-4', onChange: onInputTyped }),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: onSearchBtnClicked, className: 'btn btn-info p-1 ml-2', style: { height: "32px" } },
                                    'GO!'
                                )
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'list-unstyled' },
                                podcast.map(function (podcast) {
                                    return _react2.default.createElement(_PodcastRow2.default, _extends({ key: podcast.id }, podcast));
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-lg-9' },
                        episodes.map(function (episode) {
                            return _react2.default.createElement(_Episode2.default, _extends({ key: episode.id }, episode));
                        })
                    )
                )
            )
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=app.map