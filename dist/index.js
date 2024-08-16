(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-speech-input"] = factory(require("react"));
	else
		root["react-speech-input"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__442__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Kf: () => (/* binding */ inputContainer),
/* harmony export */   LK: () => (/* binding */ recordButtonContainer),
/* harmony export */   pi: () => (/* binding */ speechInput),
/* harmony export */   uU: () => (/* binding */ recordButton)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.gBy2KNeCwIq9zyhXseev {
  position: relative;
  display: inline-block;
}

.HuOYSvGBU_Qt4eR68WZs {
  width: 100%;
  height: 100%;
}

.HuOYSvGBU_Qt4eR68WZs input {
  min-height: 24px;
  height: 100%;
}

.tJSlneJDvqHU0lSwpKV2 {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
}

.Rzv7GnOQeloVohYB16CN {
  cursor: pointer;
  padding: 4px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/Input.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[".speechInput {\n  position: relative;\n  display: inline-block;\n}\n\n.inputContainer {\n  width: 100%;\n  height: 100%;\n}\n\n.inputContainer input {\n  min-height: 24px;\n  height: 100%;\n}\n\n.recordButtonContainer {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n\n.recordButton {\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
var speechInput = `gBy2KNeCwIq9zyhXseev`;
var inputContainer = `HuOYSvGBU_Qt4eR68WZs`;
var recordButtonContainer = `tJSlneJDvqHU0lSwpKV2`;
var recordButton = `Rzv7GnOQeloVohYB16CN`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ 354:
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
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

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ 540:
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

/***/ 56:
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

/***/ 825:
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ 113:
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

/***/ 442:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src),
  useSpeechRecognition: () => (/* reexport */ src_useSpeechRecognition)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./src/utils.ts
var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

;// CONCATENATED MODULE: ./src/useSpeechRecognition.ts


var useSpeechRecognition = function (_a) {
    var _b = _a.initialValue, initialValue = _b === void 0 ? "" : _b, continuous = _a.continuous, language = _a.language;
    var _c = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(""), transcript = _c[0], setTranscript = _c[1];
    var _d = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false), listening = _d[0], setListening = _d[1];
    var _e = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false), supportsSpeechRecognition = _e[0], setSupportsSpeechRecognition = _e[1];
    var recognition = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        if (initialValue !== transcript) {
            setTranscript(initialValue);
        }
    }, [initialValue]);
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        var SpeechRecognition = window.SpeechRecognition ||
            window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setSupportsSpeechRecognition(false);
            console.log("Web Speech API is not supported in this browser. Try Other Browser.");
        }
        else {
            setSupportsSpeechRecognition(true);
            recognition.current = new SpeechRecognition();
            // Set recognition options
            recognition.current.lang = language || "en-US";
            recognition.current.continuous = continuous || true;
            recognition.current.interimResults = true;
            recognition.current.onstart = function () { return setListening(true); };
            recognition.current.onend = function () { return setListening(false); };
            recognition.current.onerror = function (event) {
                console.error("Speech Recognition error:", event.error);
            };
            var finalTranscript_1 = "";
            recognition.current.onresult = function (event) {
                var interimTranscript = "";
                // eslint-disable-next-line no-plusplus
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        finalTranscript_1 += event.results[i][0].transcript;
                    }
                    else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                setTranscript(function (prevValue) {
                    var existingValue = prevValue ? "".concat(prevValue.trim(), " ") : "";
                    finalTranscript_1 = finalTranscript_1 || existingValue;
                    var text = capitalize(finalTranscript_1 + interimTranscript);
                    return text;
                });
                // moveCursorToEnd(this.focusedInput);
            };
        }
        return function () {
            if (listening) {
                recognition.current.stop();
            }
        };
    }, []);
    var startListening = function () {
        if (!recognition.current)
            return;
        recognition.current.stop();
        recognition.current.start();
    };
    var stopListening = function () {
        if (!recognition.current)
            return;
        recognition.current.stop();
    };
    var resetTranscript = function () {
        if (!recognition.current)
            return;
        setTranscript("");
        recognition.current.stop();
    };
    return {
        transcript: transcript,
        listening: listening,
        startListening: startListening,
        stopListening: stopListening,
        resetTranscript: resetTranscript,
        supportsSpeechRecognition: supportsSpeechRecognition,
    };
};
/* harmony default export */ const src_useSpeechRecognition = (useSpeechRecognition);

;// CONCATENATED MODULE: ./src/Icons.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var MicOnIcon = function (props) { return (external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", __assign({ fill: "#1B357C", height: "24px", width: "24px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", xmlnsXlink: "http://www.w3.org/1999/xlink", enableBackground: "new 0 0 512 512" }, props),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", { id: "SVGRepo_iconCarrier" },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", null,
            external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", null,
                external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", { d: "m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z" }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", { d: "m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z" })))))); };
var MicOffIcon = function (props) { return (external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", __assign({ width: "24px", height: "24px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", fill: "#1B357C", stroke: "#1B357C" }, props),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", { id: "SVGRepo_iconCarrier" },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("title", null, "ionicons-v5-g"),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("line", { x1: 432, y1: 400, x2: 96, y2: 64, style: {
                fill: "none",
                stroke: "#000000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32,
            } }),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", { d: "M400,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,208v32a111.68,111.68,0,0,1-2.68,24.38,2,2,0,0,0,.53,1.84l22.59,22.59a2,2,0,0,0,3.29-.72A143.27,143.27,0,0,0,400,240Z" }),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", { d: "M256,352A112.36,112.36,0,0,1,144,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,208v32c0,74,56.1,135.12,128,143.11V432H192.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,192,464H319.55c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,320,432H272V383.11a143.08,143.08,0,0,0,52-16.22,4,4,0,0,0,.91-6.35l-18.4-18.39a3,3,0,0,0-3.41-.58A111,111,0,0,1,256,352Z" }),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", { d: "M257.14,48a79.66,79.66,0,0,0-68.47,36.57,4,4,0,0,0,.54,5L332.59,233a2,2,0,0,0,3.41-1.42V128.91C336,85,301,48.6,257.14,48Z" }),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", { d: "M179.41,215a2,2,0,0,0-3.41,1.42V239a80.89,80.89,0,0,0,23.45,56.9,78.55,78.55,0,0,0,77.8,21.19,2,2,0,0,0,.86-3.35Z" })))); };


// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/Input.module.css
var Input_module = __webpack_require__(695);
;// CONCATENATED MODULE: ./src/Input.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Input_module/* default */.Ay, options);




       /* harmony default export */ const src_Input_module = (Input_module/* default */.Ay && Input_module/* default */.Ay.locals ? Input_module/* default */.Ay.locals : undefined);

;// CONCATENATED MODULE: ./src/Input.tsx
var Input_assign = (undefined && undefined.__assign) || function () {
    Input_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Input_assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var Input = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, ref) {
    var value = props.value, onChange = props.onChange, renderInput = props.renderInput, containerStyle = props.containerStyle, style = props.style, _a = props.micOnIcon, micOnIcon = _a === void 0 ? external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MicOnIcon, null) : _a, _b = props.micOffIcon, micOffIcon = _b === void 0 ? external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MicOffIcon, null) : _b, continuous = props.continuous, language = props.language, recordButtonStyle = props.recordButtonStyle, alwaysShowRecordButton = props.alwaysShowRecordButton, rest = __rest(props, ["value", "onChange", "renderInput", "containerStyle", "style", "micOnIcon", "micOffIcon", "continuous", "language", "recordButtonStyle", "alwaysShowRecordButton"]);
    var speechInputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)((ref === null || ref === void 0 ? void 0 : ref.current) || null);
    var inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
    var _c = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value), inputValue = _c[0], setInputValue = _c[1];
    var onInputChange = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
        setInputValue(e.target.value);
    }, [setInputValue]);
    var _d = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false), listening = _d[0], setListening = _d[1];
    var _e = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false), focused = _e[0], setFocused = _e[1];
    // handle focus and blur
    var handleFocus = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
        setFocused(true);
    }, []);
    var handleBlur = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
        if (listening) {
            setFocused(false);
        }
    }, [listening]);
    // listen for click outside
    var handleClickOutside = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (event) {
        if (speechInputRef.current &&
            !speechInputRef.current.contains(event.target)) {
            setFocused(false);
        }
    }, []);
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        document.addEventListener("click", handleClickOutside);
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    // sync input values
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        if (value !== inputValue) {
            setInputValue(value);
        }
    }, [value]);
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        if (inputValue !== value) {
            onChange(inputValue);
        }
    }, [inputValue]);
    // input props
    var inputProps = {
        ref: inputRef,
        value: inputValue,
        onChange: onInputChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        style: style,
        // ...rest,
    };
    return (external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", { style: containerStyle, ref: speechInputRef, className: Input_module/* speechInput */.pi },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", { className: Input_module/* inputContainer */.Kf }, renderInput ? renderInput(inputProps) : external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", Input_assign({}, inputProps))),
        (alwaysShowRecordButton || focused) && (external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Transcriber, { ref: inputRef, value: inputValue, onValueChange: setInputValue, continuous: continuous, language: language, micOnIcon: micOnIcon, micOffIcon: micOffIcon, setListening: setListening, recordButtonStyle: recordButtonStyle }))));
});
/* harmony default export */ const src_Input = (Input);
var Transcriber = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_a, ref) {
    var value = _a.value, onValueChange = _a.onValueChange, micOnIcon = _a.micOnIcon, micOffIcon = _a.micOffIcon, continuous = _a.continuous, language = _a.language, setListening = _a.setListening, recordButtonStyle = _a.recordButtonStyle;
    var _b = src_useSpeechRecognition({
        initialValue: value,
        continuous: continuous,
        language: language,
    }), transcript = _b.transcript, listening = _b.listening, startListening = _b.startListening, stopListening = _b.stopListening, resetTranscript = _b.resetTranscript, supportsSpeechRecognition = _b.supportsSpeechRecognition;
    // reset transcript when component unmount
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        return function () {
            resetTranscript();
        };
    }, []);
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        setListening(listening);
    }, [listening]);
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
        if (transcript) {
            onValueChange(transcript);
        }
    }, [transcript]);
    if (!supportsSpeechRecognition) {
        console.log("Web Speech API is not supported in this browser. Try Chrome or Firefox.");
        return null;
    }
    var handleMicClick = function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        listening ? stopListening() : startListening();
    };
    return (external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", { style: recordButtonStyle, className: Input_module/* recordButtonContainer */.LK },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", { href: "#", className: Input_module/* recordButton */.uU, onClick: handleMicClick }, listening ? micOnIcon : micOffIcon)));
});

;// CONCATENATED MODULE: ./src/index.tsx


/* harmony default export */ const src = (src_Input);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map