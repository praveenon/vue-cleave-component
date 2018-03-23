(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cleave.js"));
	else if(typeof define === 'function' && define.amd)
		define("VueCleave", ["cleave.js"], factory);
	else if(typeof exports === 'object')
		exports["VueCleave"] = factory(require("cleave.js"));
	else
		root["VueCleave"] = factory(root["Cleave"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external {"commonjs":"cleave.js","commonjs2":"cleave.js","amd":"cleave.js","root":"Cleave"}
var external___commonjs___cleave_js___commonjs2___cleave_js___amd___cleave_js___root___Cleave__ = __webpack_require__(1);
var external___commonjs___cleave_js___commonjs2___cleave_js___amd___cleave_js___root___Cleave___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___cleave_js___commonjs2___cleave_js___amd___cleave_js___root___Cleave__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component.vue
//
//
//
//



/* harmony default export */ var component = ({
  name: 'cleave',
  props: {
    value: {
      default: null,
      required: true,
      validator: function validator(value) {
        return value === null || typeof value === 'string' || value instanceof String || typeof value === 'number';
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // Set this prop to false to emit masked value
    raw: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data: function data() {
    return {
      // cleave.js instance
      cleave: null,
      temp: null
    };
  },
  mounted: function mounted() {
    /* istanbul ignore if */
    if (this.cleave) return;

    this.cleave = new external___commonjs___cleave_js___commonjs2___cleave_js___amd___cleave_js___root___Cleave___default.a(this.$el, this.options);
    this.cleave.setRawValue(this.value);
  },

  methods: {
    /**
     * Watch for value changed by cleave and notify parent component
     * Note: we have to wait for DOM to get updated by cleave.js in order to get final value
     *
     * @param event
     */
    onInput: function onInput(event) {
      var _this = this;

      this.$nextTick(function () {
        _this.temp = event.target.value;
        _this.$emit('input', value);
      });
    }
  },
  watch: {
    /**
     * Watch for any changes in options and redraw
     *
     * @param newOptions Object
     */
    options: {
      deep: true,
      handler: function handler(newOptions) {
        this.cleave.destroy();
        this.cleave = new external___commonjs___cleave_js___commonjs2___cleave_js___amd___cleave_js___root___Cleave___default.a(this.$el, newOptions);
        this.cleave.setRawValue(this.temp);
      }
    },

    /**
     * Watch for changes from parent component and notify cleave instance
     *
     * @param newValue
     */
    value: function value(newValue) {
      this.cleave && this.cleave.setRawValue(temp);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Free up memory
    /* istanbul ignore else */
    if (this.cleave) {
      this.cleave.destroy();
      this.cleave = null;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-72e1e7f7","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":_vm.type},on:{"input":_vm.onInput}})}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/component.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  component,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_component = (Component.exports);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return src_plugin; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "component", function() { return src_component; });


var src_plugin = function plugin(Vue, params) {
  var name = 'cleave';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, src_component);
};

src_component.install = src_plugin;

/* harmony default export */ var src = __webpack_exports__["default"] = (src_component);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])["default"];
});