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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n}\\n\\n.main {\\n    margin-top: 20px;\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n.row {\\n    display: flex;\\n}\\n\\n.left-nav {\\n    height: 100%;\\n    border-right: 2px solid #593196;\\n    width: 20%;\\n    margin-left: 20px;\\n    background-color:#FAFAFA;\\n    padding-top: 20px;\\n    min-width: 160px;\\n}\\n\\n.menu-icon {\\n    margin-right:10px;\\n}\\n\\n.container-fluid {\\n    height: 100%;\\n}\\n\\n\\nsvg {\\n    color: #593196;\\n    margin-left: 10px;\\n}\\n\\nli {\\n    cursor: pointer;\\n}\\n\\n.left-nav h3 {\\n    cursor: pointer;\\n}\\n\\n.trash-project {\\n    border: none;\\n    background: none;\\n}\\n\\n#trash:hover {\\n    color: red;\\n}\\n\\n#addProject {\\n    width: 80%;\\n    \\n}\\n\\n.fa-plus {\\n    margin-right: 10px;\\n}\\n\\n.projectName {\\n    margin-top: 20px;\\n}\\n\\n#addToDo {\\n    margin-top: 20px;\\n    margin-bottom: 15px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_chevronItemToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/chevronItemToggle */ \"./src/views/chevronItemToggle.js\");\n/* harmony import */ var _models_projectFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/projectFactory */ \"./src/models/projectFactory.js\");\n/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projectView */ \"./src/views/projectView.js\");\n/* harmony import */ var _views_emptyProjectForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/emptyProjectForm */ \"./src/views/emptyProjectForm.js\");\n/* harmony import */ var _models_deleteProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/deleteProject */ \"./src/models/deleteProject.js\");\n/* harmony import */ var _models_defaultProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/defaultProject */ \"./src/models/defaultProject.js\");\n/* harmony import */ var _views_clickedProjectView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/clickedProjectView */ \"./src/views/clickedProjectView.js\");\n/* harmony import */ var _models_toDoFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/toDoFactory */ \"./src/models/toDoFactory.js\");\n/* harmony import */ var _views_toDoView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/toDoView */ \"./src/views/toDoView.js\");\n/* harmony import */ var _models_deleteToDo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/deleteToDo */ \"./src/models/deleteToDo.js\");\n/* harmony import */ var _views_emptyToDoForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/emptyToDoForm */ \"./src/views/emptyToDoForm.js\");\n/* harmony import */ var _models_editToDo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/editToDo */ \"./src/models/editToDo.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n // DOM Elements\n\nvar tableListener = document.getElementById('tbody');\nvar projectListDiv = document.querySelector('.left-nav');\nvar newProjectListener = document.getElementById('projectFormListener');\nvar newToDoListener = document.getElementById('todoFormListener');\nvar toDoTitle = document.getElementById('nameToDo');\nvar description = document.getElementById('toDoDescription');\nvar dueDate = document.getElementById('toDoDate');\nvar priority = document.getElementById('toDoPriority');\nvar note = document.getElementById('toDoNote');\nvar editToDo = document.getElementById('edittodoFormListener');\nvar editButton = document.getElementsByClassName('edit-button'); // Variables\n\nvar toDoIndex;\nvar clickedProjectIndex = 0;\nObject(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"loadProjectsFromLocal\"])();\n\nif (_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"].length == 0) {\n  Object(_models_defaultProject__WEBPACK_IMPORTED_MODULE_6__[\"defaultProject\"])();\n}\n\n; //defaultProject();\n// Add new project!\n\nnewProjectListener.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var newProjectTitle = document.getElementById('newProjectName').value;\n\n  if (newProjectTitle == '') {} else {\n    Object(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"newProjectEvent\"])(event);\n    Object(_views_projectView__WEBPACK_IMPORTED_MODULE_3__[\"addProjectUI\"])(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"newProject\"]);\n    Object(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"saveToLocalStorage\"])(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"]);\n    Object(_views_emptyProjectForm__WEBPACK_IMPORTED_MODULE_4__[\"emptyForm\"])();\n  }\n}); // Delete project, adding event listeners to all future trash buttons for projects...\n\nwindow.addEventListener('click', function (event) {\n  var element = event.target.classList.contains('bi-trash') ? event.target.parentElement : event.target.classList.contains('trash-project') ? event.target : false;\n\n  if (element) {\n    var itemToRemove = element.parentElement.parentElement;\n    Object(_models_deleteProject__WEBPACK_IMPORTED_MODULE_5__[\"deleteProject\"])(itemToRemove);\n    Object(_views_projectView__WEBPACK_IMPORTED_MODULE_3__[\"deleteItemUI\"])(itemToRemove);\n    Object(_views_toDoView__WEBPACK_IMPORTED_MODULE_9__[\"cleanToDoView\"])();\n    localStorage.clear();\n    Object(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"saveToLocalStorage\"])(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"]);\n  }\n}); // clicked project\n\nprojectListDiv.addEventListener('click', function (event) {\n  if (event.target.tagName == 'P') {\n    Object(_views_clickedProjectView__WEBPACK_IMPORTED_MODULE_7__[\"resetClickedProject\"])();\n    Object(_views_clickedProjectView__WEBPACK_IMPORTED_MODULE_7__[\"clickedProject\"])(event);\n    clickedProjectIndex = Object(_views_clickedProjectView__WEBPACK_IMPORTED_MODULE_7__[\"idClickedProject\"])(event);\n    Object(_views_toDoView__WEBPACK_IMPORTED_MODULE_9__[\"cleanToDoView\"])();\n    render();\n  }\n}); // new to do...\n\nnewToDoListener.addEventListener('submit', function (event) {\n  event.preventDefault();\n\n  if (toDoTitle.value == '' || description.value == '' || dueDate.value == '' || priority.value == '' || note.value == '') {} else {\n    Object(_models_toDoFactory__WEBPACK_IMPORTED_MODULE_8__[\"newToDoEvent\"])(event, clickedProjectIndex);\n    var toDo = _models_toDoFactory__WEBPACK_IMPORTED_MODULE_8__[\"newToDo\"];\n    Object(_views_toDoView__WEBPACK_IMPORTED_MODULE_9__[\"appendToDo\"])(toDo);\n    Object(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"saveToLocalStorage\"])(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"]);\n    Object(_views_emptyToDoForm__WEBPACK_IMPORTED_MODULE_11__[\"emptyToDoForm\"])();\n  }\n});\ntableListener.addEventListener('click', function (event) {\n  var element = event.target.classList.contains('delete') ? event.target.parentElement.parentElement : event.target.classList.contains('fa-check') ? event.target.parentElement.parentElement.parentElement : false;\n\n  if (element) {\n    var deleteItem = element;\n    Object(_models_deleteToDo__WEBPACK_IMPORTED_MODULE_10__[\"deleteToDoFromObject\"])(deleteItem, clickedProjectIndex);\n    Object(_views_toDoView__WEBPACK_IMPORTED_MODULE_9__[\"deletToDoUI\"])(deleteItem);\n    localStorage.clear();\n    Object(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"saveToLocalStorage\"])(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"]);\n  }\n});\nwindow.addEventListener('click', function (event) {\n  var element = event.target.classList.contains('edit-button') ? event.target.parentElement.parentElement : event.target.classList.contains('fa-pencil-square-o') ? event.target.parentElement.parentElement.parentElement : false;\n\n  if (element) {\n    toDoIndex = Object(_models_editToDo__WEBPACK_IMPORTED_MODULE_12__[\"clickedToDoIndex\"])(event, element);\n    Object(_models_editToDo__WEBPACK_IMPORTED_MODULE_12__[\"editTodo\"])(clickedProjectIndex, toDoIndex);\n  }\n});\neditToDo.addEventListener('submit', function (event) {\n  event.preventDefault();\n  Object(_models_editToDo__WEBPACK_IMPORTED_MODULE_12__[\"editFinish\"])(clickedProjectIndex, toDoIndex);\n  Object(_views_toDoView__WEBPACK_IMPORTED_MODULE_9__[\"cleanToDoView\"])();\n  render();\n  localStorage.clear();\n  Object(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"saveToLocalStorage\"])(_models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"]);\n});\n\nvar render = function render() {\n  _models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"][clickedProjectIndex].toDos.forEach(function (todo) {\n    Object(_views_toDoView__WEBPACK_IMPORTED_MODULE_9__[\"appendToDo\"])(todo);\n  });\n};\n\nvar initialLoad = function initialLoad() {\n  _models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"].forEach(function (project) {\n    Object(_views_projectView__WEBPACK_IMPORTED_MODULE_3__[\"addProjectUI\"])(project);\n    console.log(project);\n    var projectHeader = document.querySelector('.projectName');\n    projectHeader.textContent = project.title;\n  });\n};\n\ninitialLoad();\n\nvar initalTodoLoad = function initalTodoLoad() {\n  _models_projectFactory__WEBPACK_IMPORTED_MODULE_2__[\"myProjects\"][0].toDos.forEach(function (todo) {\n    Object(_views_toDoView__WEBPACK_IMPORTED_MODULE_9__[\"appendToDo\"])(todo);\n  });\n};\n\ninitalTodoLoad();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/defaultProject.js":
/*!**************************************!*\
  !*** ./src/models/defaultProject.js ***!
  \**************************************/
/*! exports provided: defaultProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultProject\", function() { return defaultProject; });\n/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ \"./src/models/projectFactory.js\");\n/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/projectView */ \"./src/views/projectView.js\");\n/* harmony import */ var _views_clickedProjectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/clickedProjectView */ \"./src/views/clickedProjectView.js\");\n\n\n\nvar defaultProject = function defaultProject() {\n  var ID = 0;\n  var defaultTitle = 'Default Project';\n  var newProject = Object(_projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"newProjectFactory\"])(ID, defaultTitle);\n  _projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"].push(newProject);\n  console.log(_projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"]);\n  Object(_projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"saveToLocalStorage\"])(_projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"]);\n};\n\n//# sourceURL=webpack:///./src/models/defaultProject.js?");

/***/ }),

/***/ "./src/models/deleteProject.js":
/*!*************************************!*\
  !*** ./src/models/deleteProject.js ***!
  \*************************************/
/*! exports provided: deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony import */ var _models_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/projectFactory */ \"./src/models/projectFactory.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar deleteProject = function deleteProject(itemToRemove) {\n  _models_projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"].splice(_toConsumableArray(itemToRemove.parentElement.children).indexOf(itemToRemove), 1);\n};\n\n//# sourceURL=webpack:///./src/models/deleteProject.js?");

/***/ }),

/***/ "./src/models/deleteToDo.js":
/*!**********************************!*\
  !*** ./src/models/deleteToDo.js ***!
  \**********************************/
/*! exports provided: deleteToDoFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteToDoFromObject\", function() { return deleteToDoFromObject; });\n/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ \"./src/models/projectFactory.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar deleteToDoFromObject = function deleteToDoFromObject(itemToRemove, clickedProjectIndex) {\n  var index = clickedProjectIndex;\n  _projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"][index].toDos.splice(_toConsumableArray(itemToRemove.parentElement.children).indexOf(itemToRemove), 1);\n  console.log(_projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"]);\n};\n\n//# sourceURL=webpack:///./src/models/deleteToDo.js?");

/***/ }),

/***/ "./src/models/editToDo.js":
/*!********************************!*\
  !*** ./src/models/editToDo.js ***!
  \********************************/
/*! exports provided: editTodo, clickedToDoIndex, editFinish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTodo\", function() { return editTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickedToDoIndex\", function() { return clickedToDoIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editFinish\", function() { return editFinish; });\n/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ \"./src/models/projectFactory.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar editTodo = function editTodo(clickedProjectIndex, clickedToDoIndex) {\n  var editTitle = document.getElementById('editnameToDo');\n  var editDescription = document.getElementById('edittoDoDescription');\n  var editDoDate = document.getElementById('edittoDoDate');\n  var editPriority = document.getElementById('edittoDoPriority');\n  var editNote = document.getElementById('edittoDoNote');\n  var toDoToEdit = _projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"][clickedProjectIndex].toDos[clickedToDoIndex];\n  console.log(toDoToEdit);\n  editTitle.value = toDoToEdit.title;\n  editDescription.value = toDoToEdit.description;\n  editDoDate.value = toDoToEdit.dueDate;\n  editPriority.value = toDoToEdit.priority;\n  editNote.value = toDoToEdit.notes;\n};\n\nvar clickedToDoIndex = function clickedToDoIndex(event, element) {\n  var table = document.getElementById('tbody');\n\n  var index = _toConsumableArray(table.children).indexOf(element);\n\n  return index;\n};\n\nvar editFinish = function editFinish(indexProject, indexToDo) {\n  var editTitle = document.getElementById('editnameToDo').value;\n  var editDescription = document.getElementById('edittoDoDescription').value;\n  var editDoDate = document.getElementById('edittoDoDate').value;\n  var editPriority = document.getElementById('edittoDoPriority').value;\n  var editNote = document.getElementById('edittoDoNote').value;\n  var toDoToEdit = _projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"][indexProject].toDos[indexToDo];\n  toDoToEdit.title = editTitle;\n  toDoToEdit.description = editDescription;\n  toDoToEdit.dueDate = editDoDate;\n  toDoToEdit.priority = editPriority;\n  toDoToEdit.notes = editNote;\n  console.log(_projectFactory__WEBPACK_IMPORTED_MODULE_0__[\"myProjects\"]);\n};\n\n//# sourceURL=webpack:///./src/models/editToDo.js?");

/***/ }),

/***/ "./src/models/projectFactory.js":
/*!**************************************!*\
  !*** ./src/models/projectFactory.js ***!
  \**************************************/
/*! exports provided: newProjectFactory, saveToLocalStorage, newProjectEvent, myProjects, newProject, loadProjectsFromLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newProjectFactory\", function() { return newProjectFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveToLocalStorage\", function() { return saveToLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newProjectEvent\", function() { return newProjectEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myProjects\", function() { return myProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newProject\", function() { return newProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadProjectsFromLocal\", function() { return loadProjectsFromLocal; });\n/* harmony import */ var _toDoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoFactory */ \"./src/models/toDoFactory.js\");\n\n\nvar myProjects = [];\nvar newProject;\nvar arrayOfLoadedProjects = arrayOfLoadedProjects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];\n\nvar saveToLocalStorage = function saveToLocalStorage() {\n  localStorage.setItem('projects', JSON.stringify(myProjects));\n}; // Project factory, which takes in title and makes toDo array, to which the toDos will be added...\n\n\nvar newProjectFactory = function newProjectFactory(id, title) {\n  var toDos = [];\n\n  var add_toDo = function add_toDo(toDo) {\n    toDos.push(toDo);\n  };\n\n  return {\n    id: id,\n    title: title,\n    toDos: toDos,\n    add_toDo: add_toDo\n  };\n};\n\nvar newProjectEvent = function newProjectEvent(event) {\n  // DOM elements of form ...\n  event.preventDefault();\n  var newProjectTitle = document.getElementById('newProjectName').value;\n  var ID;\n\n  if (myProjects.length > 0) {\n    ID = myProjects[myProjects.length - 1].id + 1;\n  } else {\n    ID = 0;\n  }\n\n  newProject = newProjectFactory(ID, newProjectTitle);\n  myProjects.push(newProject);\n}; // Function that loads stored objects in localStorage... With functionality to still add todos, as you can't save functions\n// local storage...\n\n\nvar loadProjectsFromLocal = function loadProjectsFromLocal() {\n  for (var i = 0; i < arrayOfLoadedProjects.length; i++) {\n    var element = arrayOfLoadedProjects[i];\n    var ID = element.id;\n    var title = element.title;\n    newProject = newProjectFactory(ID, title);\n    myProjects.push(newProject); // loop over every todo in project and add them to the projects...\n\n    for (var index = 0; index < element.toDos.length; index++) {\n      var toDoItem = element.toDos[index];\n      var toDoTitle = toDoItem.title;\n      var toDoDesc = toDoItem.description;\n      var dueDate = toDoItem.dueDate;\n      var priority = toDoItem.priority;\n      var status = toDoItem.status;\n      var notes = toDoItem.notes;\n      var toDo = Object(_toDoFactory__WEBPACK_IMPORTED_MODULE_0__[\"toDoFactory\"])(toDoTitle, toDoDesc, dueDate, priority, status, notes);\n      myProjects[i].add_toDo(toDo);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/models/projectFactory.js?");

/***/ }),

/***/ "./src/models/toDoFactory.js":
/*!***********************************!*\
  !*** ./src/models/toDoFactory.js ***!
  \***********************************/
/*! exports provided: toDoFactory, newToDo, newToDoEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoFactory\", function() { return toDoFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newToDo\", function() { return newToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newToDoEvent\", function() { return newToDoEvent; });\n/* harmony import */ var _views_clickedProjectView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/clickedProjectView */ \"./src/views/clickedProjectView.js\");\n/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFactory */ \"./src/models/projectFactory.js\");\n\n\n\nvar newToDo;\n\nvar toDoFactory = function toDoFactory(title, description, dueDate, priority, notes) {\n  var status = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n  return {\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority,\n    notes: notes,\n    status: status\n  };\n};\n\nvar newToDoEvent = function newToDoEvent(event, clickedProjectIndex) {\n  event.preventDefault(); // form values for toDO item...\n\n  var toDoTitle = document.getElementById(\"nameToDo\").value;\n  var description = document.getElementById(\"toDoDescription\").value;\n  var dueDate = document.getElementById(\"toDoDate\").value;\n  var priority = document.getElementById(\"toDoPriority\").value;\n  var note = document.getElementById(\"toDoNote\").value;\n  var index = clickedProjectIndex;\n  newToDo = toDoFactory(toDoTitle, description, dueDate, priority, note);\n  _projectFactory__WEBPACK_IMPORTED_MODULE_1__[\"myProjects\"][index].add_toDo(newToDo);\n};\n\n//# sourceURL=webpack:///./src/models/toDoFactory.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ }),

/***/ "./src/views/chevronItemToggle.js":
/*!****************************************!*\
  !*** ./src/views/chevronItemToggle.js ***!
  \****************************************/
/*! exports provided: toggleChevron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleChevron\", function() { return toggleChevron; });\n\n\nvar toggleChevron = function toggleChevron() {\n  var chevronItem = document.getElementById(\"chevron\");\n  var chevronStyleItem = document.getElementById(\"chevronstyle\");\n  chevronStyleItem.classList.toggle(\"fa-chevron-right\");\n  chevronStyleItem.classList.toggle(\"fa-chevron-down\");\n};\n\nvar chevronItem = document.getElementById(\"chevron\");\nchevronItem.addEventListener(\"click\", toggleChevron);\n\n//# sourceURL=webpack:///./src/views/chevronItemToggle.js?");

/***/ }),

/***/ "./src/views/clickedProjectView.js":
/*!*****************************************!*\
  !*** ./src/views/clickedProjectView.js ***!
  \*****************************************/
/*! exports provided: clickedProject, resetClickedProject, idClickedProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickedProject\", function() { return clickedProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetClickedProject\", function() { return resetClickedProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"idClickedProject\", function() { return idClickedProject; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar clickedProject = function clickedProject(event) {\n  event.target.style.fontWeight = \"700\";\n  var text = event.target.textContent;\n  var projectHeader = document.querySelector(\".projectName\");\n  projectHeader.textContent = text;\n};\n\nvar resetClickedProject = function resetClickedProject(event) {\n  var projectNameElement = document.querySelectorAll(\".project_title\");\n\n  for (var i = 0; i < projectNameElement.length; i++) {\n    projectNameElement[i].style.fontWeight = \"400\";\n  }\n};\n\nvar idClickedProject = function idClickedProject(event) {\n  var cProject = event.target.parentNode;\n  var projectNameElement = document.querySelector(\".project_title\");\n  var listOfProjects = projectNameElement.parentNode.parentNode;\n\n  var clickedProjectIndex = _toConsumableArray(listOfProjects.children).indexOf(cProject);\n\n  return clickedProjectIndex;\n};\n\n//# sourceURL=webpack:///./src/views/clickedProjectView.js?");

/***/ }),

/***/ "./src/views/emptyProjectForm.js":
/*!***************************************!*\
  !*** ./src/views/emptyProjectForm.js ***!
  \***************************************/
/*! exports provided: emptyForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emptyForm\", function() { return emptyForm; });\nvar emptyForm = function emptyForm() {\n  var formTextField = document.getElementById('newProjectName');\n  formTextField.value = \"\";\n};\n\n//# sourceURL=webpack:///./src/views/emptyProjectForm.js?");

/***/ }),

/***/ "./src/views/emptyToDoForm.js":
/*!************************************!*\
  !*** ./src/views/emptyToDoForm.js ***!
  \************************************/
/*! exports provided: emptyToDoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emptyToDoForm\", function() { return emptyToDoForm; });\nvar emptyToDoForm = function emptyToDoForm() {\n  var toDoTitle = document.getElementById(\"nameToDo\");\n  var description = document.getElementById(\"toDoDescription\");\n  var dueDate = document.getElementById(\"toDoDate\");\n  var priority = document.getElementById(\"toDoPriority\");\n  var note = document.getElementById(\"toDoNote\");\n  var today = new Date();\n  var dd = String(today.getDate()).padStart(2, \"0\");\n  var mm = String(today.getMonth() + 1).padStart(2, \"0\"); //January is 0!\n\n  var yyyy = today.getFullYear();\n  toDoTitle.value = \"\";\n  description.value = \"\";\n  dueDate.value = \"\".concat(yyyy, \"-\").concat(mm, \"-\").concat(dd);\n  priority.value = 2;\n  note.value = \"\";\n};\n\n//# sourceURL=webpack:///./src/views/emptyToDoForm.js?");

/***/ }),

/***/ "./src/views/projectView.js":
/*!**********************************!*\
  !*** ./src/views/projectView.js ***!
  \**********************************/
/*! exports provided: addProjectUI, deleteItemUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectUI\", function() { return addProjectUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItemUI\", function() { return deleteItemUI; });\n\n\nvar addProjectUI = function addProjectUI(projectName) {\n  var projectListItem = document.getElementById(\"projectListItem\");\n  var project = projectName;\n  var markup = \"\\n  <li>\\n      <p class=\\\"project_title\\\">\".concat(project.title, \"<button class=\\\"trash-project\\\"><svg id=\\\"trash\\\" width=\\\"1em\\\" height=\\\"1em\\\" viewBox=\\\"0 0 16 16\\\" class=\\\"trash bi bi-trash\\\"\\n          fill=\\\"currentColor\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n          <path\\n            d=\\\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\\\" />\\n          <path fill-rule=\\\"evenodd\\\"\\n            d=\\\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\\\" />\\n        </svg></button></p>\\n\\n    </li>\\n    \");\n  projectListItem.insertAdjacentHTML(\"beforeend\", markup);\n}; //delete item from UI!\n\n\nvar deleteItemUI = function deleteItemUI(itemToRemove) {\n  itemToRemove.remove();\n};\n\n//# sourceURL=webpack:///./src/views/projectView.js?");

/***/ }),

/***/ "./src/views/toDoView.js":
/*!*******************************!*\
  !*** ./src/views/toDoView.js ***!
  \*******************************/
/*! exports provided: appendToDo, cleanToDoView, deletToDoUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendToDo\", function() { return appendToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanToDoView\", function() { return cleanToDoView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletToDoUI\", function() { return deletToDoUI; });\n\n\nvar appendToDo = function appendToDo(toDo) {\n  var tableBody = document.getElementById(\"tbody\");\n  var priority;\n\n  if (toDo.priority == 1) {\n    priority = \"low\";\n  } else if (toDo.priority == 2) {\n    priority = \"medium\";\n  } else {\n    priority = \"high\";\n  }\n\n  var markup = \"\\n    <tr class=\\\"table-primary\\\">\\n    <th>\".concat(toDo.title, \"</th>\\n    <td>\").concat(toDo.description, \"</td>\\n    <td>\").concat(toDo.dueDate, \"</td>\\n    <td>\").concat(priority, \"</td>\\n    <td>\").concat(toDo.notes, \"</td>\\n    <td><button type=\\\"button\\\" class=\\\"btn delete btn-primary\\\"><i class=\\\"fa fa-check\\\" aria-hidden=\\\"true\\\"></i>\\n      </button></td>\\n      <td><button type=\\\"button\\\" id=\\\"edit\\\" class=\\\"btn edit-button btn-primary\\\" data-toggle=\\\"modal\\\" data-target=\\\"#editTodoModal\\\"><i class=\\\"fa fa-pencil-square-o\\\" aria-hidden=\\\"true\\\"></i>\\n\\n      </button></td>\\n  </tr>\\n    \");\n  console.log(toDo);\n  tableBody.insertAdjacentHTML(\"beforeend\", markup);\n};\n\nvar cleanToDoView = function cleanToDoView() {\n  var tableBody = document.getElementById(\"tbody\");\n  tableBody.innerHTML = \"\";\n};\n\nvar deletToDoUI = function deletToDoUI(toDoToremove) {\n  toDoToremove.remove();\n};\n\n//# sourceURL=webpack:///./src/views/toDoView.js?");

/***/ })

/******/ });