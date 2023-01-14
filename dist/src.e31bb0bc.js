// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;

},{"./bundle-url":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/button/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('button', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/button/style.scss"}],"components/line_button/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/line_button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('line_button', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/line_button/style.scss"}],"components/button_search/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/button_search/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('button_search', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/button_search/style.scss"}],"components/button_to-profile/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/button_to-profile/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('button_to-profile', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/button_to-profile/style.scss"}],"components/button_add-content/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/button_add-content/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('button_add-content', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/button_add-content/style.scss"}],"components/inputform/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/inputform/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('inputform', _tpl.default);
var _default = () => {
  return _handlebars.default.compile(_tpl.default)({});
};
exports.default = _default;
},{"./style.scss":"components/inputform/style.scss"}],"components/inputform_profile/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/inputform_profile/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('inputform_profile', _tpl.default);
var _default = () => {
  return _handlebars.default.compile(_tpl.default)({});
};
exports.default = _default;
},{"./style.scss":"components/inputform_profile/style.scss"}],"components/chat_profile/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/chat_profile/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('chat_profile', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/chat_profile/style.scss"}],"components/chat_footer-content/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/chat_footer-content/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('chat_footer-content', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/chat_footer-content/style.scss"}],"components/chat_element/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/chat_element/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('chat_element', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/chat_element/style.scss"}],"components/chat_text/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/chat_text/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('chat_text', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/chat_text/style.scss"}],"components/chat_img/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/chat_img/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('chat_img', _tpl.default);
var _default = (id, value) => {
  return _handlebars.default.compile(_tpl.default)({
    id,
    value
  });
};
exports.default = _default;
},{"./style.scss":"components/chat_img/style.scss"}],"components/title/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/title/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('title', _tpl.default);
var _default = () => {
  return _handlebars.default.compile(_tpl.default)({});
};
exports.default = _default;
},{"./style.scss":"components/title/style.scss"}],"components/text _transition/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/text _transition/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('text__transition', _tpl.default);
var _default = () => {
  return _handlebars.default.compile(_tpl.default)({});
};
exports.default = _default;
},{"./style.scss":"components/text _transition/style.scss"}],"components/avatar/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/avatar/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('avatar', _tpl.default);
var _default = () => {
  return _handlebars.default.compile(_tpl.default)({});
};
exports.default = _default;
},{"./style.scss":"components/avatar/style.scss"}],"pages/page1/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page1/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page1', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
}; // const authButton = document.querySelector("#authButton");
exports.default = _default;
window.addEventListener("click", e => {
  if (e.target.id !== "authButton") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  if (loginInput.value.length === 0) {
    return;
  }
  window.location.href = "./#page10";
});
},{"./style.scss":"pages/page1/style.scss"}],"pages/page2/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page2/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page2', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
window.addEventListener("click", e => {
  if (e.target.id !== "authButton1") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page10";
});
},{"./style.scss":"pages/page2/style.scss"}],"pages/page3/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page3/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page3', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
window.addEventListener("click", e => {
  if (e.target.id !== "change_datas") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page4";
});
window.addEventListener("click", e => {
  if (e.target.id !== "change_password") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page5";
});
window.addEventListener("click", e => {
  if (e.target.id !== "exit_profile") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page1";
});
window.addEventListener("click", e => {
  if (e.target.id !== "to_chats") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page9";
});
},{"./style.scss":"pages/page3/style.scss"}],"pages/page4/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page4/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page4', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
window.addEventListener("click", e => {
  if (e.target.id !== "exit2") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page3";
});
},{"./style.scss":"pages/page4/style.scss"}],"pages/page5/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page5/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page5', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
window.addEventListener("click", e => {
  if (e.target.id !== "exit1") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page3";
});
},{"./style.scss":"pages/page5/style.scss"}],"pages/page6/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page6/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page6', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
},{"./style.scss":"pages/page6/style.scss"}],"pages/page7/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page7/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page7', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
}; // const authButton = document.querySelector("#authButton");
exports.default = _default;
},{"./style.scss":"pages/page7/style.scss"}],"pages/page9/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page9/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page9', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
window.addEventListener("click", e => {
  if (e.target.id !== "go_profile") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);
  window.location.href = "./#page3";
});
},{"./style.scss":"pages/page9/style.scss"}],"pages/page10/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page10/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page10', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
},{"./style.scss":"pages/page10/style.scss"}],"pages/page404/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page404/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page404', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
},{"./style.scss":"pages/page404/style.scss"}],"pages/page500/style.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/page500/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _tpl = _interopRequireDefault(require("bundle-text:./tpl.hbs"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_handlebars.default.registerPartial('page500', _tpl.default);
var _default = (props = {}) => {
  return _handlebars.default.compile(_tpl.default)(props);
};
exports.default = _default;
},{"./style.scss":"pages/page500/style.scss"}],"index.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars"));
var _index = _interopRequireDefault(require("bundle-text:./index.hbs"));
require("./style.css");
require("./components/button");
require("./components/line_button");
require("./components/button_search");
require("./components/button_to-profile");
require("./components/button_add-content");
require("./components/inputform");
require("./components/inputform_profile");
require("./components/chat_profile");
require("./components/chat_footer-content");
require("./components/chat_element");
require("./components/chat_text");
require("./components/chat_img");
require("./components/title");
require("./components/text _transition");
require("./components/avatar");
require("./pages/page1");
require("./pages/page2");
require("./pages/page3");
require("./pages/page4");
require("./pages/page5");
require("./pages/page6");
require("./pages/page7");
require("./pages/page9");
require("./pages/page10");
require("./pages/page404");
require("./pages/page500");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
console.log(_index.default);
const comp = _handlebars.default.compile(_index.default);
const res = comp({
  fname: 'students'
});
document.getElementById('root').innerHTML = res;
window.location.href = "./#page1";
document.querySelector(".profile__circle").addEventListener("click", () => {
  document.getElementById("profilemodal").classList.add("profilemodal_open");
});
document.querySelector(".profilemodal__wrapperr").addEventListener("click", () => {
  document.getElementById("profilemodal").classList.remove("profilemodal_open");
});
document.querySelector(".chat__meny").addEventListener("click", () => {
  document.getElementById("meny_content").classList.toggle("meny_show");
});
document.querySelector(".chat__bottom_icon").addEventListener("click", () => {
  document.getElementById("clip").classList.toggle("show_clip");
});
document.querySelector("#add_user_profile").addEventListener("click", () => {
  document.getElementById("add_user_form").classList.add("show_clip");
});
document.querySelector("#remove_user_form").addEventListener("click", () => {
  document.getElementById("add_user_form").classList.remove("show_clip");
});
document.querySelector("#del_user_profile").addEventListener("click", () => {
  document.getElementById("dell_user_form").classList.add("show_clip");
});
document.querySelector("#remove_user_form_update").addEventListener("click", () => {
  document.getElementById("dell_user_form").classList.remove("show_clip");
});
},{"./style.css":"style.css","./components/button":"components/button/index.js","./components/line_button":"components/line_button/index.js","./components/button_search":"components/button_search/index.js","./components/button_to-profile":"components/button_to-profile/index.js","./components/button_add-content":"components/button_add-content/index.js","./components/inputform":"components/inputform/index.js","./components/inputform_profile":"components/inputform_profile/index.js","./components/chat_profile":"components/chat_profile/index.js","./components/chat_footer-content":"components/chat_footer-content/index.js","./components/chat_element":"components/chat_element/index.js","./components/chat_text":"components/chat_text/index.js","./components/chat_img":"components/chat_img/index.js","./components/title":"components/title/index.js","./components/text _transition":"components/text _transition/index.js","./components/avatar":"components/avatar/index.js","./pages/page1":"pages/page1/index.js","./pages/page2":"pages/page2/index.js","./pages/page3":"pages/page3/index.js","./pages/page4":"pages/page4/index.js","./pages/page5":"pages/page5/index.js","./pages/page6":"pages/page6/index.js","./pages/page7":"pages/page7/index.js","./pages/page9":"pages/page9/index.js","./pages/page10":"pages/page10/index.js","./pages/page404":"pages/page404/index.js","./pages/page500":"pages/page500/index.js"}],"../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = process.env.HMR_HOSTNAME || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + process.env.HMR_PORT + '/');
  ws.onmessage = function(event) {
    checkedAssets = {};
    assetsToAccept = [];

    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function(asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function(asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();

        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });

        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) { // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = (
    '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
      '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
      '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
      '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' +
      '<pre>' + stackTrace.innerHTML + '</pre>' +
    '</div>'
  );

  return overlay;

}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;

  var cached = bundle.cache[id];

  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id)
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}

},{}]},{},["../../../Users/a.grekov/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)