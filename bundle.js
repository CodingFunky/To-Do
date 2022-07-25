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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-color: white;\n    --accent-color: #A7C2E5;\n    --third-color: #f7fafe;\n    --fourth-color: #c7c9ce;\n    --dark-color: #000A14;\n}\nul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n  }\nbody {\n    font-family: 'Open Sans', sans-serif;\n    color: var(--dark-color);\n    margin: 0;\n    font-size: 15px;\n}\ni {\n    font-style: normal;\n}\np {\n    margin: 0px;\n}\n.btn {\n    cursor: pointer;\n}\nimg {\n    height: 20px;\n    width: 20px;\n}\n.nav.btn {\n    /* font-family: sans-serif; */\n    color: white;\n    height: 3em;\n    width: 1.9em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 3px;\n}\n.nav.btn:hover {\n    background-color: var(--fourth-color);\n    /* opacity: 0.5; */\n}\n#page-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n.nav-bar {\n    background-color: var(--accent-color);\n    height: 45px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.left-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 2.7em;\n    gap: 1.6em;\n}\n.right-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1.6em;\n    margin-right: 2.7em;\n}\n#addBtn {\n    font-family: sans-serif;\n}\n#hero {\n    height: 80vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    /* border: solid black 1px; */\n    align-self: center;\n}\n.left-sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--third-color);\n    width: 28%;\n    height: 100vh;\n}\n.project-bar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.project-header {\n    width: 80%;\n    font-size: 18px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    margin-top: 24px;\n}\n.project-header-left {\n    display: flex;\n    flex-direction: row;\n    /* justify-content: center; */\n    align-items: center;\n    /* margin-left: 25px; */\n    gap: 10px;\n    cursor: pointer;\n    width: 100%;\n}\n.fa-angle-down {\n    transform: rotate(0deg);\n    transition: transform 150ms ease-in-out;\n}\n.fa-angle-down.active {\n    transform: rotate(-90deg);\n}\n#project-title {\n    font-weight: 600;\n}\n#project-addBtn {\n    font-family: sans-serif;\n    font-size: 1.8em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 5px;\n    padding-bottom: 5px;\n    height: 25px;\n    width: 30px;\n    cursor: pointer;\n    border-radius: 10px;\n    margin-right: 9px;\n}\n#project-addBtn:hover {\n    background-color: var(--fourth-color);\n}\n.addProject-form {\n    width: 55%;\n    align-self: center;\n    /* margin-left: 30px; */\n    margin-right: 20px;\n    display: none;\n    border: solid lightgray 1px;\n}\n.addProject-form:focus {\n    outline: none;\n    /* border: solid lightgray 2px; */\n}\n.addProject-form.active {\n    display: flex;\n}\n.project-list {\n    /* border: solid black 1px; */\n    display: block;\n    font-weight: 500;\n    padding: 20px;\n    padding-top: 0px;\n}\n.project {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 30px;\n    margin: 10px;\n    padding-left: 20px;\n    cursor: pointer;\n    border-radius: 10px;\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n}\n.project.hide {\n    opacity: 0;\n    transform: translateY(-20px);\n    pointer-events: none;\n}\n.project:hover {\n    background-color: var(--fourth-color);\n}\n.project.active {\n    background-color: var(--fourth-color);\n}\n.project:hover > .dropMenuBtn {\n    display: flex;\n    padding-right: 15px;\n}\n.project:hover > .taskNum {\n    display: none;\n}\n.taskNum {\n    color: var(--dark-color);\n    padding-right: 15px;\n}\n.dropMenuBtn {\n    display: none;\n    height: 28px;\n    border-radius: 50%;\n    /* background-color: var(--accent-color); */\n}\n.dropMenuBtn:hover { \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-weight: bold;\n}\n.dropMenu {\n    font-size: 0.9em;\n    cursor: default;\n    display: none;\n    z-index: 2;\n    /* -webkit-box-shadow: 0px 10px 13px -7px #000000, -19px 5px 33px -8px rgba(0,0,0,0.23); \n    box-shadow: 0px 10px 13px -7px #000000, -19px 5px 33px -8px rgba(0,0,0,0.23); */\n    position: absolute;\n    left: 50%;\n    top: 100%;\n    background-color: white;\n    width: 150px;\n    height: 200px;\n    border: solid lightgray 1px;\n}\n.dropMenu.active {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.dropMenu >:hover {\n    transform: scale(1.1);\n    /* background-color: lightgray; */\n}\n.dropMenu * {\n    height: 30%;\n    align-items: center;\n}\n.project-edit-btn {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    width: 80%;\n    border-bottom: solid lightgray 1px;\n    /* padding-bottom: 25px; */\n}\n.archive-container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    width: 80%;\n    border-bottom: solid lightgray 1px;\n    /* padding-bottom: 25px; */\n\n}\n.dropMenuDelContainer {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    width: 80%;\n}\n.fa-thin.fa-plus {\n    margin: 20px;\n    font-family: sans-serif;\n}\n#todo-hero {\n    padding: 45px;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n\n}\n#todo-container {\n    /* padding: 55px; */\n    width: 90%;\n}\n.itemCard {\n    width: 100%;\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: solid rgb(227, 222, 222) 1px;\n    margin-top: 40px;\n\n}\n.completeBtn {\n    height: 17px;\n    width: 17px;\n    border: solid rgb(108, 103, 103) 2px;\n    border-radius: 50%;\n    cursor: pointer;\n    text-align: center;\n}\n.completeBtn:hover {\n    /* background-color: var(--accent-color); */\n    transform: scale(1.1);\n}\n.checkMark {\n    color: white;\n}\n.checkMark:hover {\n    color: var(--accent-color);\n}\n.task-header {\n    font-weight: 600;\n    font-size: 17px;\n}\n.itemDesc {\n    color: rgb(108, 103, 103);\n    display: block;\n    overflow: hidden;\n    width: 30%;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n.itemPriority {\n    width: 10%;\n}\n.itemDueDate {\n    color: var(--accent-color);\n    font-weight: bold;\n}\n.dueDate-Container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.priority-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.altAdd-container {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    margin-top: 50px;\n    margin-left: 30%;\n    width: 25%;\n    justify-content: center;\n}\n.altAdd-container:hover {\n    cursor: pointer;\n    color: var(--accent-color);\n    transform: scale(1.1);\n}\n.altAdd-container:hover > .alt-plusSign{\n    background-color: var(--accent-color);\n    color: white;\n}\n.alt-plusSign {\n    font-family: sans-serif;\n    height: 19px;\n    width: 19px;\n    text-align: center;\n    color: var(--accent-color);\n    border-radius: 50%;\n}\n/* .alt-plusSign:hover{\n    background-color: var(--accent-color);\n    color: white;\n} */\n.altAddBtn-text {\n    color: rgb(150, 145, 145);\n}\n.submitCard {\n    border-radius: 5%;\n    position: fixed;\n    top: 110%;\n    left: 35%;\n    font-size: larger;\n    z-index: 2;\n    padding: 20px 50px 50px 50px;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: white;\n    border: solid black 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    align-self: center;\n    display: none;\n}\n.submitCard.active {\n    transform: translate(0%, -130%) scale(1);\n    display:flex;\n}\n#itemDescBox {\n    text-overflow: ellipsis\n}\n.transparent-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    /* background-color: rgba(255, 255, 255, 0.7); */\n    opacity: 1;\n}\n.transparent-overlay.active {\n    display: block;\n}\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n  }\n  .overlay.active {\n      display: block;\n  }\n\n  @media screen and (max-width: 600px) {\n    .nav-bar {\n        justify-content: flex-end;\n    }\n    .left-nav {\n        flex-direction: row-reverse;\n    }\n    .right-nav {\n        display: none;\n    }\n    #hero {flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .left-sidebar {\n        /* width: auto; */\n        justify-content: flex-start;\n        height: 100%;\n        border-radius: 5%;\n        background-color: white;\n    }\n    .project-header {\n        margin-top: 0;\n    }\n    #todo-hero {\n        padding: 0px;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,qBAAqB;IACrB,UAAU;IACV,SAAS;EACX;AACF;IACI,oCAAoC;IACpC,wBAAwB;IACxB,SAAS;IACT,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;AACA;IACI,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,UAAU;IACV,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,UAAU;IACV,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,WAAW;AACf;AACA;IACI,uBAAuB;IACvB,uCAAuC;AAC3C;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,qCAAqC;AACzC;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,iCAAiC;AACrC;AACA;IACI,aAAa;AACjB;AACA;IACI,6BAA6B;IAC7B,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,kEAAkE;AACtE;AACA;IACI,UAAU;IACV,4BAA4B;IAC5B,oBAAoB;AACxB;AACA;IACI,qCAAqC;AACzC;AACA;IACI,qCAAqC;AACzC;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;AACA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,UAAU;IACV;mFAC+E;IAC/E,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,qBAAqB;IACrB,iCAAiC;AACrC;AACA;IACI,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,0BAA0B;;AAE9B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,UAAU;IACV,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,2CAA2C;IAC3C,gBAAgB;;AAEpB;AACA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,2CAA2C;IAC3C,qBAAqB;AACzB;AACA;IACI,YAAY;AAChB;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,UAAU;IACV,mBAAmB;IACnB;AACJ;AACA;IACI,UAAU;AACd;AACA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,0BAA0B;IAC1B,qBAAqB;AACzB;AACA;IACI,qCAAqC;IACrC,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;AACtB;AACA;;;GAGG;AACH;IACI,yBAAyB;AAC7B;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,SAAS;IACT,SAAS;IACT,iBAAiB;IACjB,UAAU;IACV,4BAA4B;IAC5B,yCAAyC;IACzC,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,wCAAwC;IACxC,YAAY;AAChB;AACA;IACI;AACJ;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,WAAW;IACX,YAAY;IACZ,gDAAgD;IAChD,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;EACZ;EACA;MACI,cAAc;EAClB;;EAEA;IACE;QACI,yBAAyB;IAC7B;IACA;QACI,2BAA2B;IAC/B;IACA;QACI,aAAa;IACjB;IACA,OAAO,sBAAsB;QACzB,uBAAuB;QACvB,mBAAmB;IACvB;IACA;QACI,iBAAiB;QACjB,2BAA2B;QAC3B,YAAY;QACZ,iBAAiB;QACjB,uBAAuB;IAC3B;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;EACF","sourcesContent":[":root {\n    --main-color: white;\n    --accent-color: #A7C2E5;\n    --third-color: #f7fafe;\n    --fourth-color: #c7c9ce;\n    --dark-color: #000A14;\n}\nul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n  }\nbody {\n    font-family: 'Open Sans', sans-serif;\n    color: var(--dark-color);\n    margin: 0;\n    font-size: 15px;\n}\ni {\n    font-style: normal;\n}\np {\n    margin: 0px;\n}\n.btn {\n    cursor: pointer;\n}\nimg {\n    height: 20px;\n    width: 20px;\n}\n.nav.btn {\n    /* font-family: sans-serif; */\n    color: white;\n    height: 3em;\n    width: 1.9em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 3px;\n}\n.nav.btn:hover {\n    background-color: var(--fourth-color);\n    /* opacity: 0.5; */\n}\n#page-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n.nav-bar {\n    background-color: var(--accent-color);\n    height: 45px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.left-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 2.7em;\n    gap: 1.6em;\n}\n.right-nav {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1.6em;\n    margin-right: 2.7em;\n}\n#addBtn {\n    font-family: sans-serif;\n}\n#hero {\n    height: 80vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    /* border: solid black 1px; */\n    align-self: center;\n}\n.left-sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--third-color);\n    width: 28%;\n    height: 100vh;\n}\n.project-bar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.project-header {\n    width: 80%;\n    font-size: 18px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    margin-top: 24px;\n}\n.project-header-left {\n    display: flex;\n    flex-direction: row;\n    /* justify-content: center; */\n    align-items: center;\n    /* margin-left: 25px; */\n    gap: 10px;\n    cursor: pointer;\n    width: 100%;\n}\n.fa-angle-down {\n    transform: rotate(0deg);\n    transition: transform 150ms ease-in-out;\n}\n.fa-angle-down.active {\n    transform: rotate(-90deg);\n}\n#project-title {\n    font-weight: 600;\n}\n#project-addBtn {\n    font-family: sans-serif;\n    font-size: 1.8em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 5px;\n    padding-bottom: 5px;\n    height: 25px;\n    width: 30px;\n    cursor: pointer;\n    border-radius: 10px;\n    margin-right: 9px;\n}\n#project-addBtn:hover {\n    background-color: var(--fourth-color);\n}\n.addProject-form {\n    width: 55%;\n    align-self: center;\n    /* margin-left: 30px; */\n    margin-right: 20px;\n    display: none;\n    border: solid lightgray 1px;\n}\n.addProject-form:focus {\n    outline: none;\n    /* border: solid lightgray 2px; */\n}\n.addProject-form.active {\n    display: flex;\n}\n.project-list {\n    /* border: solid black 1px; */\n    display: block;\n    font-weight: 500;\n    padding: 20px;\n    padding-top: 0px;\n}\n.project {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 30px;\n    margin: 10px;\n    padding-left: 20px;\n    cursor: pointer;\n    border-radius: 10px;\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n}\n.project.hide {\n    opacity: 0;\n    transform: translateY(-20px);\n    pointer-events: none;\n}\n.project:hover {\n    background-color: var(--fourth-color);\n}\n.project.active {\n    background-color: var(--fourth-color);\n}\n.project:hover > .dropMenuBtn {\n    display: flex;\n    padding-right: 15px;\n}\n.project:hover > .taskNum {\n    display: none;\n}\n.taskNum {\n    color: var(--dark-color);\n    padding-right: 15px;\n}\n.dropMenuBtn {\n    display: none;\n    height: 28px;\n    border-radius: 50%;\n    /* background-color: var(--accent-color); */\n}\n.dropMenuBtn:hover { \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-weight: bold;\n}\n.dropMenu {\n    font-size: 0.9em;\n    cursor: default;\n    display: none;\n    z-index: 2;\n    /* -webkit-box-shadow: 0px 10px 13px -7px #000000, -19px 5px 33px -8px rgba(0,0,0,0.23); \n    box-shadow: 0px 10px 13px -7px #000000, -19px 5px 33px -8px rgba(0,0,0,0.23); */\n    position: absolute;\n    left: 50%;\n    top: 100%;\n    background-color: white;\n    width: 150px;\n    height: 200px;\n    border: solid lightgray 1px;\n}\n.dropMenu.active {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.dropMenu >:hover {\n    transform: scale(1.1);\n    /* background-color: lightgray; */\n}\n.dropMenu * {\n    height: 30%;\n    align-items: center;\n}\n.project-edit-btn {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    width: 80%;\n    border-bottom: solid lightgray 1px;\n    /* padding-bottom: 25px; */\n}\n.archive-container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    width: 80%;\n    border-bottom: solid lightgray 1px;\n    /* padding-bottom: 25px; */\n\n}\n.dropMenuDelContainer {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    width: 80%;\n}\n.fa-thin.fa-plus {\n    margin: 20px;\n    font-family: sans-serif;\n}\n#todo-hero {\n    padding: 45px;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n\n}\n#todo-container {\n    /* padding: 55px; */\n    width: 90%;\n}\n.itemCard {\n    width: 100%;\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: solid rgb(227, 222, 222) 1px;\n    margin-top: 40px;\n\n}\n.completeBtn {\n    height: 17px;\n    width: 17px;\n    border: solid rgb(108, 103, 103) 2px;\n    border-radius: 50%;\n    cursor: pointer;\n    text-align: center;\n}\n.completeBtn:hover {\n    /* background-color: var(--accent-color); */\n    transform: scale(1.1);\n}\n.checkMark {\n    color: white;\n}\n.checkMark:hover {\n    color: var(--accent-color);\n}\n.task-header {\n    font-weight: 600;\n    font-size: 17px;\n}\n.itemDesc {\n    color: rgb(108, 103, 103);\n    display: block;\n    overflow: hidden;\n    width: 30%;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n.itemPriority {\n    width: 10%;\n}\n.itemDueDate {\n    color: var(--accent-color);\n    font-weight: bold;\n}\n.dueDate-Container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.priority-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.altAdd-container {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    margin-top: 50px;\n    margin-left: 30%;\n    width: 25%;\n    justify-content: center;\n}\n.altAdd-container:hover {\n    cursor: pointer;\n    color: var(--accent-color);\n    transform: scale(1.1);\n}\n.altAdd-container:hover > .alt-plusSign{\n    background-color: var(--accent-color);\n    color: white;\n}\n.alt-plusSign {\n    font-family: sans-serif;\n    height: 19px;\n    width: 19px;\n    text-align: center;\n    color: var(--accent-color);\n    border-radius: 50%;\n}\n/* .alt-plusSign:hover{\n    background-color: var(--accent-color);\n    color: white;\n} */\n.altAddBtn-text {\n    color: rgb(150, 145, 145);\n}\n.submitCard {\n    border-radius: 5%;\n    position: fixed;\n    top: 110%;\n    left: 35%;\n    font-size: larger;\n    z-index: 2;\n    padding: 20px 50px 50px 50px;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: white;\n    border: solid black 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    align-self: center;\n    display: none;\n}\n.submitCard.active {\n    transform: translate(0%, -130%) scale(1);\n    display:flex;\n}\n#itemDescBox {\n    text-overflow: ellipsis\n}\n.transparent-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    /* background-color: rgba(255, 255, 255, 0.7); */\n    opacity: 1;\n}\n.transparent-overlay.active {\n    display: block;\n}\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n  }\n  .overlay.active {\n      display: block;\n  }\n\n  @media screen and (max-width: 600px) {\n    .nav-bar {\n        justify-content: flex-end;\n    }\n    .left-nav {\n        flex-direction: row-reverse;\n    }\n    .right-nav {\n        display: none;\n    }\n    #hero {flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .left-sidebar {\n        /* width: auto; */\n        justify-content: flex-start;\n        height: 100%;\n        border-radius: 5%;\n        background-color: white;\n    }\n    .project-header {\n        margin-top: 0;\n    }\n    #todo-hero {\n        padding: 0px;\n    }\n  }"],"sourceRoot":""}]);
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
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */



// # is id . is class
const newTitle = document.querySelector('#itemTitle');
const newDes = document.querySelector('#itemDescBox');
const newDueDate = document.querySelector('#dueDate');
const newPriority = document.querySelector('#priority');
const submitBtn = document.querySelector('#submit');
const overlay = document.querySelector('.overlay');
const transparentOverlay = document.querySelector('#transparent-overlay');
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
const projectArrow = document.querySelector('#project-arrow');

let activeProject = [];
const projectList = [];
const completedTasks = [];

function printOptions() {
  for (let i = 0; i < projectList.length; i++) {
    const option = document.createElement('option');
    option.value = projectList[i].name;
    option.innerHTML = projectList[i].name;
    projectSelector.appendChild(option);
    newTitle.focus();
    projectSelector.value = activeProject.name;
  }
}

function ListItem(title, description, dueDate, priority, projectID) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.projectID = projectID;

  function createDOM() {
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

    // todoContainer.appendChild(itemCard);
    // activeProject.taskList.push(itemCard)

    const projectSelected = projectSelector.value;
    if (projectSelected === activeProject.name) {
      todoContainer.appendChild(itemCard);
      activeProject.updateCounter();
    }
    projectList.forEach((project) => {
      if (projectSelected === project.name) {
        project.taskList.push(itemCard);
        project.updateCounter();
      }
    });
  }
  return { createDOM };
}
function Project(name) {
  this.name = name;
  const taskList = [];
  const taskNumDOM = document.createElement('div');
  taskNumDOM.classList.add('taskNum');

  const removeTasksDOM = function () {
    while (todoContainer.firstChild) {
      todoContainer.removeChild(todoContainer.firstChild);
    }
  };
  const printTask = function () {
    removeTasksDOM();

    taskHeader.textContent = name;
    todoHero.prepend(taskHeader);

    // printing task list from active project
    for (let i = 0; i < taskList.length; i++) {
      todoContainer.appendChild(taskList[i]);
    }
  };

  const makeActive = function (projectDOM, project) {
    const projects = projectListDOM.children;
    // remove active status from other projects
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList.remove('active');
    }
    activeProject = project;
    projectDOM.classList.add('active');
    printTask();
  };

  const createDOM = function (project) {
    const projectDOM = document.createElement('li');
    projectDOM.textContent = name;
    projectDOM.classList.add('project');

    taskNumDOM.textContent = taskList.length;
    projectDOM.appendChild(taskNumDOM);

    const dropMenuBtn = document.createElement('div');
    dropMenuBtn.classList.add('dropMenuBtn');
    dropMenuBtn.textContent = '...';

    const dropMenu = document.createElement('div');
    dropMenu.classList.add('dropMenu');

    // Edit Button
    const editBtn = document.createElement('div');
    editBtn.classList.add('project-edit-btn');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen');

    const editText = document.createElement('div');
    editText.classList.add('project-edit-text');
    editText.textContent = 'Edit Project';

    editBtn.append(editIcon, editText);

    // Archive Button
    const archiveContainer = document.createElement('div');
    archiveContainer.classList.add('archive-container');

    const archiveIcon = document.createElement('i');
    archiveIcon.classList.add('fa-solid', 'fa-box-archive');

    const dropMenuArch = document.createElement('div');
    dropMenuArch.classList.add('dropMenuArch');
    dropMenuArch.textContent = 'Archive';

    archiveContainer.append(archiveIcon, dropMenuArch);

    // Delete button
    const dropMenuDelContainer = document.createElement('div');
    dropMenuDelContainer.classList.add('dropMenuDelContainer');

    const dropMenuDelIcon = document.createElement('i');
    dropMenuDelIcon.classList.add('fa-solid', 'fa-trash-can');

    const dropMenuDel = document.createElement('div');
    dropMenuDel.classList.add('dropMenuDel');
    dropMenuDel.textContent = 'Delete project';
    dropMenuDel.addEventListener('click', () => {
      // projectDOM.remove();
      transparentOverlay.classList.remove('active');
      projectList.forEach((proj) => {
        if (proj.name === projectDOM.firstChild.textContent) {
          const index = projectList.indexOf(proj);
          projectList.splice(index, 1);
        }
      });
      localStorage.setItem('projectList', JSON.stringify(projectList));
      projectDOM.remove();
    });
    dropMenuDelContainer.append(dropMenuDelIcon, dropMenuDel);

    dropMenu.append(editBtn, archiveContainer, dropMenuDelContainer);
    projectDOM.append(dropMenuBtn, dropMenu);
    dropMenuBtn.addEventListener('click', () => {
      dropMenu.classList.toggle('active');
      transparentOverlay.classList.toggle('active');
    });

    projectListDOM.prepend(projectDOM);
    makeActive(projectDOM, project);
    projectDOM.addEventListener('click', () => {
      makeActive(projectDOM, this);
      localStorage.setItem('activeProject', JSON.stringify(activeProject));
    });
  };

  const updateCounter = function () {
    // taskNumDOM.textContent = activeProject.length;
    taskNumDOM.textContent = taskList.length;
  };

  return {
    makeActive,
    printTask,
    createDOM,
    updateCounter,
    taskList,
    name,
  };
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
  newItem.createDOM(newItem);
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
});
projectArrow.addEventListener('click', () => {
  // projectListDOM.classList.toggle('unactive');
  const projectLi = projectListDOM.children;
  Array.from(projectLi).forEach((project) => {
    project.classList.toggle('hide');
  });
  projectArrow.classList.toggle('active');
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
    const newProject = new Project(name, true);
    projectList.push(newProject);
    newProject.createDOM(newProject);
    activeProject = newProject;
    localStorage.setItem('projectList', JSON.stringify(projectList));
    localStorage.setItem('activeProject', JSON.stringify(activeProject));
    projectAddForm.classList.remove('active');
    projectAddForm.value = '';
    newProject.printTask();
  }
});

altAddContainer.addEventListener('click', () => {
  submitCard.classList.add('active');
  overlay.classList.add('active');
  (0,_remove_all_child_DOM__WEBPACK_IMPORTED_MODULE_1__.removeAllChildrenDOM)(projectSelector);
  printOptions();
});

transparentOverlay.addEventListener('click', () => {
  const dropMenu = document.querySelector('.dropMenu.active');
  dropMenu.classList.remove('active');
  transparentOverlay.classList.remove('active');
});

overlay.onclick = function closeOverlay() {
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
};

// localStorage.clear();

if (!localStorage.getItem('projectList')) {
  const defaultProject = new Project('Default');
  projectList.push(defaultProject);
  activeProject = defaultProject;
  defaultProject.createDOM(defaultProject);
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('activeProject', JSON.stringify(activeProject));
} else {
  const projectListStored = JSON.parse(localStorage.getItem('projectList'));
  projectListStored.forEach((project) => {
    const restoredProject = new Project(project.name);
    projectList.push(restoredProject);
    restoredProject.createDOM();
  });
  projectList.forEach((project) => {
    const storedActive = JSON.parse(localStorage.getItem('activeProject'));
    if (project.name === storedActive.name) {
      activeProject = project;
      const projects = projectListDOM.children;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].firstChild.textContent === activeProject.name) {
          const projectDOM = projects[i];
          activeProject.makeActive(projectDOM, activeProject);
        }
      }
    }
  });
  // activeProject = projectList[0];
}

// const defaultProject = new Project('Default');
// projectList.push(defaultProject);
// activeProject = defaultProject;
// defaultProject.createDOM(defaultProject);

// Features to add
//     Menus that roll out when clicking projects. using animations
//     Make Site Responsive
//     Drop-Down Menus

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map