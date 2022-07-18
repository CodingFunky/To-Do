/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n}\n\np {\n    margin: 0px;\n}\n\n.btn {\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: 20px;\n}\n\n.nav.btn {\n    color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 3px;\n}\n\n.nav.btn:hover {\n    background-color: rgb(231, 228, 228);\n    /* opacity: 0.5; */\n}\n\n#page-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.nav-bar {\n    background-color: #db4c3f;\n    height: 45px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.left-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 25px;\n    gap: 25px;\n}\n\n.right-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    margin-right: 25px;\n}\n\n#hero {\n    height: 80vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    /* border: solid black 1px; */\n    align-self: center;\n}\n\n.left-sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #f7f7f7;\n    width: 275px;\n    height: 100vh;\n}\n\n.project-bar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.project-header {\n    font-size: 18px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 20px;\n    margin-top: 40px;\n    /* padding-right: 10px; */\n}\n\n#project-title {\n    font-weight: 600;\n}\n\n#project-addBtn {\n    font-size: 30px;\n    margin-top: 20px;\n    padding-bottom: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 25px;\n    width: 30px;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n#project-addBtn:hover {\n    background-color: rgb(231, 228, 228);\n}\n\n.addProject-form {\n    width: 55%;\n    align-self: center;\n    /* margin-left: 30px; */\n    margin-right: 20px;\n    display: none;\n    border: solid lightgray 1px;\n}\n\n.addProject-form:focus {\n    outline: none;\n    /* border: solid lightgray 2px; */\n}\n\n.addProject-form.active {\n    display: flex;\n}\n\n.project-list {\n    /* border: solid black 1px; */\n    padding: 20px;\n    padding-top: 0px;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 30px;\n    margin: 10px;\n    padding-left: 20px;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n.project:hover {\n    background-color: rgb(231, 228, 228);\n\n}\n\n.project.active {\n    background-color: rgb(231, 228, 228);\n}\n\n.taskNum {\n    color: rgb(186, 176, 176);\n    padding-right: 15px;\n}\n\n.fa-thin.fa-plus {\n    margin: 20px;\n}\n\n#todo-hero {\n    padding: 55px;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n#todo-container {\n    /* padding: 55px; */\n    width: 90%;\n}\n\n.itemCard {\n    width: 100%;\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: solid rgb(227, 222, 222) 1px;\n    margin-top: 40px;\n\n}\n\n.itemCard>* {\n    /* width: 80%; */\n    /* height: 30px; */\n    /* text-align: center; */\n    /* border-bottom: solid rgb(0, 0, 0) 1px; */\n}\n\n.completeBtn {\n    height: 17px;\n    width: 17px;\n    border: solid rgb(108, 103, 103) 2px;\n    border-radius: 50%;\n    cursor: pointer;\n    text-align: center;\n}\n\n.completeBtn:hover {\n    /* background-color: #db4c3f; */\n    transform: scale(1.1);\n}\n\n.checkMark {\n    color: white;\n}\n\n.checkMark:hover {\n    color: #db4c3f;\n}\n\n.task-header {\n    font-weight: 600;\n    font-size: 22px;\n}\n\n.itemDesc {\n    color: rgb(108, 103, 103);\n    display: block;\n    overflow: hidden;\n    width: 30%;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n\n.deleteBtn {\n    width: 10%;\n}\n\n.itemPriority {\n    width: 10%;\n}\n\n.dueDate-Container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.priority-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.altAdd-container {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    margin-top: 50px;\n    margin-left: 30%;\n    width: 25%;\n    justify-content: center;\n}\n\n.altAdd-container:hover {\n    cursor: pointer;\n    color: #db4c3f;\n    transform: scale(1.1);\n}\n\n.altAdd-container:hover>.alt-plusSign {\n    background-color: #db4c3f;\n    color: white;\n}\n\n.alt-plusSign {\n    height: 19px;\n    width: 19px;\n    text-align: center;\n    color: #db4c3f;\n    border-radius: 50%;\n}\n\n/* .alt-plusSign:hover{\n    background-color: #db4c3f;\n    color: white;\n} */\n.altAddBtn-text {\n    color: rgb(150, 145, 145);\n}\n\n.submitCard {\n    border-radius: 5%;\n    position: fixed;\n    top: 105%;\n    left: 35%;\n    font-size: larger;\n    z-index: 2;\n    padding: 20px 50px 50px 50px;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: white;\n    border: solid black 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    transition: transform 150ms ease-in-out;\n}\n\n.submitCard.active {\n    transform: translate(0%, -130%) scale(1);\n    display: flex;\n}\n\n#itemDescBox {\n    text-overflow: ellipsis\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n}\n\n.overlay.active {\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n}\n\np {\n    margin: 0px;\n}\n\n.btn {\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: 20px;\n}\n\n.nav.btn {\n    color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 3px;\n}\n\n.nav.btn:hover {\n    background-color: rgb(231, 228, 228);\n    /* opacity: 0.5; */\n}\n\n#page-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.nav-bar {\n    background-color: #db4c3f;\n    height: 45px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.left-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 25px;\n    gap: 25px;\n}\n\n.right-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    margin-right: 25px;\n}\n\n#hero {\n    height: 80vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    /* border: solid black 1px; */\n    align-self: center;\n}\n\n.left-sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #f7f7f7;\n    width: 275px;\n    height: 100vh;\n}\n\n.project-bar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.project-header {\n    font-size: 18px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 20px;\n    margin-top: 40px;\n    /* padding-right: 10px; */\n}\n\n#project-title {\n    font-weight: 600;\n}\n\n#project-addBtn {\n    font-size: 30px;\n    margin-top: 20px;\n    padding-bottom: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 25px;\n    width: 30px;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n#project-addBtn:hover {\n    background-color: rgb(231, 228, 228);\n}\n\n.addProject-form {\n    width: 55%;\n    align-self: center;\n    /* margin-left: 30px; */\n    margin-right: 20px;\n    display: none;\n    border: solid lightgray 1px;\n}\n\n.addProject-form:focus {\n    outline: none;\n    /* border: solid lightgray 2px; */\n}\n\n.addProject-form.active {\n    display: flex;\n}\n\n.project-list {\n    /* border: solid black 1px; */\n    padding: 20px;\n    padding-top: 0px;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 30px;\n    margin: 10px;\n    padding-left: 20px;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n.project:hover {\n    background-color: rgb(231, 228, 228);\n\n}\n\n.project.active {\n    background-color: rgb(231, 228, 228);\n}\n\n.taskNum {\n    color: rgb(186, 176, 176);\n    padding-right: 15px;\n}\n\n.fa-thin.fa-plus {\n    margin: 20px;\n}\n\n#todo-hero {\n    padding: 55px;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n#todo-container {\n    /* padding: 55px; */\n    width: 90%;\n}\n\n.itemCard {\n    width: 100%;\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: solid rgb(227, 222, 222) 1px;\n    margin-top: 40px;\n\n}\n\n.itemCard>* {\n    /* width: 80%; */\n    /* height: 30px; */\n    /* text-align: center; */\n    /* border-bottom: solid rgb(0, 0, 0) 1px; */\n}\n\n.completeBtn {\n    height: 17px;\n    width: 17px;\n    border: solid rgb(108, 103, 103) 2px;\n    border-radius: 50%;\n    cursor: pointer;\n    text-align: center;\n}\n\n.completeBtn:hover {\n    /* background-color: #db4c3f; */\n    transform: scale(1.1);\n}\n\n.checkMark {\n    color: white;\n}\n\n.checkMark:hover {\n    color: #db4c3f;\n}\n\n.task-header {\n    font-weight: 600;\n    font-size: 22px;\n}\n\n.itemDesc {\n    color: rgb(108, 103, 103);\n    display: block;\n    overflow: hidden;\n    width: 30%;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n\n.deleteBtn {\n    width: 10%;\n}\n\n.itemPriority {\n    width: 10%;\n}\n\n.dueDate-Container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.priority-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.altAdd-container {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    margin-top: 50px;\n    margin-left: 30%;\n    width: 25%;\n    justify-content: center;\n}\n\n.altAdd-container:hover {\n    cursor: pointer;\n    color: #db4c3f;\n    transform: scale(1.1);\n}\n\n.altAdd-container:hover>.alt-plusSign {\n    background-color: #db4c3f;\n    color: white;\n}\n\n.alt-plusSign {\n    height: 19px;\n    width: 19px;\n    text-align: center;\n    color: #db4c3f;\n    border-radius: 50%;\n}\n\n/* .alt-plusSign:hover{\n    background-color: #db4c3f;\n    color: white;\n} */\n.altAddBtn-text {\n    color: rgb(150, 145, 145);\n}\n\n.submitCard {\n    border-radius: 5%;\n    position: fixed;\n    top: 105%;\n    left: 35%;\n    font-size: larger;\n    z-index: 2;\n    padding: 20px 50px 50px 50px;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: white;\n    border: solid black 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    transition: transform 150ms ease-in-out;\n}\n\n.submitCard.active {\n    transform: translate(0%, -130%) scale(1);\n    display: flex;\n}\n\n#itemDescBox {\n    text-overflow: ellipsis\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n}\n\n.overlay.active {\n    display: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/remove_all_child_DOM.js":
/*!*************************************!*\
  !*** ./src/remove_all_child_DOM.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllChildrenDOM": () => (/* binding */ removeAllChildrenDOM)
/* harmony export */ });
const removeAllChildrenDOM = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
    }

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _remove_all_child_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove_all_child_DOM */ "./src/remove_all_child_DOM.js");



// # is id . is class
const newTitle = document.querySelector('#itemTitle');
const newDes = document.querySelector('#itemDescBox');
const newDueDate = document.querySelector('#dueDate');
const newPriority = document.querySelector('#priority');
const submitBtn = document.querySelector('#submit');
const overlay = document.querySelector('.overlay');
const addBtn = document.querySelector('#addBtn');
const submitCard = document.querySelector('.submitCard');
const projectListDOM = document.querySelector('.project-list');
const projectAddBtn = document.querySelector('#project-addBtn');
const projectAddForm = document.querySelector('.addProject-form');
const todoContainer = document.querySelector('#todo-container');
const projectSelector = document.querySelector('#project-selector');
const todoHero = document.querySelector('#todo-hero');
const taskHeader = document.querySelector('.task-header');
const altAddContainer = document.querySelector('.altAdd-container');

let activeProject = [];
const projectList = [];
// let projectListStored = JSON.parse(window.localStorage.getItem('projectList'));
const taskList = [];
const completedTasks = [];

// Object constructor
function ListItem(title, description, dueDate, priority, projectID) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.projectID = projectID;

  function createTaskListDOM() {
    const itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    const completeBtn = document.createElement('div');
    completeBtn.classList.add('completeBtn');
    completeBtn.addEventListener('click', () => {
      const index = activeProject.taskList.indexOf(completeBtn.parentElement);
      if (index !== -1) {
        activeProject.taskList.splice(index, 1);
      }
      itemCard.remove();
      completedTasks.push(itemCard);
      activeProject.updateCounter();
    });
    const checkMark = document.createElement('span');
    checkMark.classList.add('checkMark');
    checkMark.innerHTML = '&#10003;';
    completeBtn.appendChild(checkMark);

    const titleDOM = document.createElement('h4');
    titleDOM.classList.add('itemTitle');
    titleDOM.textContent = title;

    const descriptionDOM = document.createElement('p');
    descriptionDOM.classList.add('itemDesc');
    descriptionDOM.textContent = description;

    const dueDateDOM = document.createElement('p');
    dueDateDOM.classList.add('itemDueDate');
    dueDateDOM.textContent = dueDate;

    const priorityDOM = document.createElement('p');
    priorityDOM.classList.add('itemPriority');
    priorityDOM.textContent = priority;

    itemCard.append(
      completeBtn,
      titleDOM,
      descriptionDOM,
      dueDateDOM,
      priorityDOM,
    );

    // Determines which project to add new task to
    const projectSelected = projectSelector.value;
    if (projectSelected === activeProject.name) {
      todoContainer.appendChild(itemCard);
      activeProject.updateCounter();
    }

    // adds task and updates counter for the right project
    projectList.forEach((project) => {
      if (projectSelected === project.name) {
        project.taskList.push(itemCard);
        project.updateCounter();
      }
    });
  }
  return { createTaskListDOM };
}
function Project(name) {
  this.name = name;
  const taskNumDOM = document.createElement('div');
  taskNumDOM.classList.add('taskNum');

  const createProjectListDOM = function (project) {
    const projectDOM = document.createElement('div');
    projectDOM.textContent = name;
    projectDOM.classList.add('project');

    taskNumDOM.textContent = taskList.length;
    projectDOM.appendChild(taskNumDOM);

    projectListDOM.prepend(projectDOM);
    // eslint-disable-next-line no-use-before-define
    makeActive(projectDOM, project);
    projectDOM.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      makeActive(projectDOM, project);
    });
  };

  let makeActive = function (projectDOM, project) {
    const projects = projectListDOM.children;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList.remove('active');
    }
    activeProject = project;
    projectDOM.classList.add('active');
    // eslint-disable-next-line no-use-before-define
    printTask();
  };

  let printTask = function () {
    taskHeader.textContent = name;

    // removes taskList from in-active projects
    while (todoContainer.firstChild) {
      todoContainer.removeChild(todoContainer.firstChild);
    }

    todoHero.prepend(taskHeader);
    // printing task list from active project
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < taskList.length; i++) {
      todoContainer.appendChild(taskList[i]);
    }

    altAddContainer.addEventListener('click', () => {
      submitCard.classList.add('active');
      overlay.classList.add('active');
      (0,_remove_all_child_DOM__WEBPACK_IMPORTED_MODULE_1__.removeAllChildrenDOM)(projectSelector);
      // eslint-disable-next-line no-use-before-define
      printOptions();
    });
  };

  const updateCounter = function () {
    taskNumDOM.textContent = taskList.length;
  };

  return {
    createProjectListDOM,
    makeActive,
    printTask,
    updateCounter,
    taskList,
    name,
  };
}

function printOptions() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projectList.length; i++) {
    const option = document.createElement('option');
    option.value = projectList[i].name;
    option.innerHTML = projectList[i].name;
    projectSelector.appendChild(option);
    newTitle.focus();
    projectSelector.value = activeProject.name;
  }
}
function clearForm() {
  newTitle.value = '';
  newDes.value = '';
}
submitBtn.addEventListener('click', () => {
  const newItem = new ListItem(
    newTitle.value,
    newDes.value,
    newDueDate.value,
    newPriority.value,
  );
  newItem.createTaskListDOM(newItem);
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  //   window.localStorage.setItem('projectList', JSON.stringify(projectList));
  // window.localStorage.setItem("taskList", activeProject.taskList.outerHTML);
  clearForm();
});
addBtn.addEventListener('click', () => {
  submitCard.classList.add('active');
  overlay.classList.add('active');
  (0,_remove_all_child_DOM__WEBPACK_IMPORTED_MODULE_1__.removeAllChildrenDOM)(projectSelector);
  printOptions();
});
projectAddBtn.addEventListener('click', () => {
  projectAddForm.classList.add('active');
  projectAddForm.focus();
});
projectAddForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const name = projectAddForm.value;
    const newProject = new Project(name);
    projectList.push(newProject);
    window.localStorage.setItem('projectList', JSON.stringify(projectList));
    newProject.createProjectListDOM(newProject);
    activeProject = newProject;
    projectAddForm.classList.remove('active');
    projectAddForm.value = '';
    newProject.printTask();
  }
});
overlay.onclick = function closeOverlay() {
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
};

if (!window.localStorage.getItem('projectList')) {
  const defaultProject = new Project('Default');
  projectList.push(defaultProject);
  activeProject = defaultProject;
  //   window.localStorage.setItem('projectList', JSON.stringify(projectList));
  //   projectListStored = JSON.parse(window.localStorage.getItem('projectList'));
  defaultProject.createProjectListDOM(defaultProject);
} else {
//   projectListStored.forEach((projectStored) => {
//     const project = new Project(projectStored.name);
//     projectList.push(project);

  // console.log(project.taskList)
  //   });
  //   projectListStored.forEach((projectStored) => {
  //     const index = projectListStored.indexOf(projectStored);
  //     const currentProject = projectList[index];
  //     currentProject.createProjectListDOM(currentProject);
  // let tasks = JSON.parse(window.localStorage.getItem('taskList'));
  // currentProject.taskList.push(tasks[index])

  // currentProject.createTaskListDOM()
//   });
}

// window.localStorage.clear();

// console.log(activeProject.taskList)
// console.log(JSON.parse(window.localStorage.getItem('projectList')))

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map