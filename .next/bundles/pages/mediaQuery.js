module.exports =
webpackJsonp([12],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	module.exports = __webpack_require__(26);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* todo: I want this to actually be an array of Function | string but that causes errors */
	Object.defineProperty(module.exports, "babelPluginFlowReactPropTypes_proptype_GlamorRule", {
	  value: __webpack_require__(1).PropTypes.shape({
	    cssText: __webpack_require__(1).PropTypes.string.isRequired
	  })
	});
	
	/* eslint-disable no-undef */

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = warnOnce;
	var printed = {};
	
	function warnOnce(message) {
	    if (printed[message]) return;
	    printed[message] = true;
	
	    if (typeof console !== 'undefined' && console.warn) console.warn(message);
	}
	module.exports = exports['default'];

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CHANNEL = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _isFunction = __webpack_require__(98);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isPlainObject = __webpack_require__(31);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _createBroadcast = __webpack_require__(34);
	
	var _createBroadcast2 = _interopRequireDefault(_createBroadcast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* globals React$Element */
	
	
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var babelPluginFlowReactPropTypes_proptype_Broadcast = __webpack_require__(34).babelPluginFlowReactPropTypes_proptype_Broadcast || __webpack_require__(1).PropTypes.any;
	
	var CHANNEL = exports.CHANNEL = '__styled-components__';
	
	Object.defineProperty(module.exports, 'babelPluginFlowReactPropTypes_proptype_Theme', {
	  value: __webpack_require__(1).PropTypes.shape({})
	});
	
	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */
	var ThemeProvider = function (_Component) {
	  _inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);
	
	    var _this = _possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call(this));
	
	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }
	
	  _createClass(ThemeProvider, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	      // with the outer theme
	      if (this.context[CHANNEL]) {
	        var subscribe = this.context[CHANNEL];
	        this.unsubscribeToOuter = subscribe(function (theme) {
	          _this2.outerTheme = theme;
	        });
	      }
	      this.broadcast = (0, _createBroadcast2.default)(this.getTheme());
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return _extends({}, this.context, _defineProperty({}, CHANNEL, this.broadcast.subscribe));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.context[CHANNEL]) {
	        this.unsubscribeToOuter();
	      }
	    }
	
	    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
	
	  }, {
	    key: 'getTheme',
	    value: function getTheme(passedTheme) {
	      var theme = passedTheme || this.props.theme;
	      if ((0, _isFunction2.default)(theme)) {
	        var mergedTheme = theme(this.outerTheme);
	        if (!(0, _isPlainObject2.default)(mergedTheme)) {
	          throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
	        }
	        return mergedTheme;
	      }
	      if (!(0, _isPlainObject2.default)(theme)) {
	        throw new Error('[ThemeProvider] Please make your theme prop a plain object');
	      }
	      return _extends({}, this.outerTheme, theme);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.children) {
	        return null;
	      }
	      return _react2.default.Children.only(this.props.children);
	    }
	  }]);
	
	  return ThemeProvider;
	}(_react.Component);
	
	ThemeProvider.propTypes = {
	  children: __webpack_require__(1).PropTypes.any,
	  theme: __webpack_require__(1).PropTypes.oneOfType([__webpack_require__(1).PropTypes.shape({}), __webpack_require__(1).PropTypes.func]).isRequired
	};
	
	
	ThemeProvider.childContextTypes = _defineProperty({}, CHANNEL, _react.PropTypes.func.isRequired);
	ThemeProvider.contextTypes = _defineProperty({}, CHANNEL, _react.PropTypes.func);
	
	exports.default = ThemeProvider;

/***/ },
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperties = __webpack_require__(76);
	
	var _defineProperties2 = _interopRequireDefault(_defineProperties);
	
	var _freeze = __webpack_require__(77);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (strings, raw) {
	  return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {
	    raw: {
	      value: (0, _freeze2.default)(raw)
	    }
	  }));
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// returns a style object with a single concated prefixed value string
	
	exports.default = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	    return replacer(prefix, value);
	  }));
	};
	
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _interleave = __webpack_require__(112);
	
	var _interleave2 = _interopRequireDefault(_interleave);
	
	var _flatten = __webpack_require__(14);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).PropTypes.any;
	
	exports.default = function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  return (0, _flatten2.default)((0, _interleave2.default)(strings, interpolations));
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;
	
	var _generateAlphabeticName = __webpack_require__(111);
	
	var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);
	
	var _css = __webpack_require__(10);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _injectGlobal = __webpack_require__(102);
	
	var _injectGlobal2 = _interopRequireDefault(_injectGlobal);
	
	var _StyledComponent = __webpack_require__(108);
	
	var _StyledComponent2 = _interopRequireDefault(_StyledComponent);
	
	var _styled2 = __webpack_require__(104);
	
	var _styled3 = _interopRequireDefault(_styled2);
	
	var _keyframes2 = __webpack_require__(103);
	
	var _keyframes3 = _interopRequireDefault(_keyframes2);
	
	var _ComponentStyle2 = __webpack_require__(107);
	
	var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);
	
	var _ThemeProvider = __webpack_require__(5);
	
	var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);
	
	var _withTheme = __webpack_require__(105);
	
	var _withTheme2 = _interopRequireDefault(_withTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Instantiate singletons */
	
	
	/* Import components */
	
	
	/* Import singleton constructors */
	var keyframes = (0, _keyframes3.default)(_generateAlphabeticName2.default);
	
	/* Import Higher Order Components */
	
	
	/* Import singletons */
	
	var styled = (0, _styled3.default)((0, _StyledComponent2.default)((0, _ComponentStyle3.default)(_generateAlphabeticName2.default)));
	
	/* Export everything */
	exports.default = styled;
	exports.css = _css2.default;
	exports.keyframes = keyframes;
	exports.injectGlobal = _injectGlobal2.default;
	exports.ThemeProvider = _ThemeProvider2.default;
	exports.withTheme = _withTheme2.default;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _parse = __webpack_require__(40);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	var _root = __webpack_require__(19);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _rule = __webpack_require__(20);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _atRule = __webpack_require__(15);
	
	var _atRule2 = _interopRequireDefault(_atRule);
	
	var _declaration = __webpack_require__(38);
	
	var _declaration2 = _interopRequireDefault(_declaration);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _comment = __webpack_require__(16);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _node = __webpack_require__(18);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function cleanSource(nodes) {
	    return nodes.map(function (i) {
	        if (i.nodes) i.nodes = cleanSource(i.nodes);
	        delete i.source;
	        return i;
	    });
	}
	
	/**
	 * @callback childCondition
	 * @param {Node} node    - container child
	 * @param {number} index - child index
	 * @param {Node[]} nodes - all container children
	 * @return {boolean}
	 */
	
	/**
	 * @callback childIterator
	 * @param {Node} node    - container child
	 * @param {number} index - child index
	 * @return {false|undefined} returning `false` will break iteration
	 */
	
	/**
	 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
	 * inherit some common methods to help work with their children.
	 *
	 * Note that all containers can store any content. If you write a rule inside
	 * a rule, PostCSS will parse it.
	 *
	 * @extends Node
	 * @abstract
	 */
	
	var Container = function (_Node) {
	    _inherits(Container, _Node);
	
	    function Container() {
	        _classCallCheck(this, Container);
	
	        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	    }
	
	    _createClass(Container, [{
	        key: 'push',
	        value: function push(child) {
	            child.parent = this;
	            this.nodes.push(child);
	            return this;
	        }
	
	        /**
	         * Iterates through the container’s immediate children,
	         * calling `callback` for each child.
	         *
	         * Returning `false` in the callback will break iteration.
	         *
	         * This method only iterates through the container’s immediate children.
	         * If you need to recursively iterate through all the container’s descendant
	         * nodes, use {@link Container#walk}.
	         *
	         * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
	         * if you are mutating the array of child nodes during iteration.
	         * PostCSS will adjust the current index to match the mutations.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * const root = postcss.parse('a { color: black; z-index: 1 }');
	         * const rule = root.first;
	         *
	         * for ( let decl of rule.nodes ) {
	         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
	         *     // Cycle will be infinite, because cloneBefore moves the current node
	         *     // to the next index
	         * }
	         *
	         * rule.each(decl => {
	         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
	         *     // Will be executed only for color and z-index
	         * });
	         */
	
	    }, {
	        key: 'each',
	        value: function each(callback) {
	            if (!this.lastEach) this.lastEach = 0;
	            if (!this.indexes) this.indexes = {};
	
	            this.lastEach += 1;
	            var id = this.lastEach;
	            this.indexes[id] = 0;
	
	            if (!this.nodes) return undefined;
	
	            var index = void 0,
	                result = void 0;
	            while (this.indexes[id] < this.nodes.length) {
	                index = this.indexes[id];
	                result = callback(this.nodes[index], index);
	                if (result === false) break;
	
	                this.indexes[id] += 1;
	            }
	
	            delete this.indexes[id];
	
	            return result;
	        }
	
	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each node.
	         *
	         * Like container.each(), this method is safe to use
	         * if you are mutating arrays during iteration.
	         *
	         * If you only need to iterate through the container’s immediate children,
	         * use {@link Container#each}.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walk(node => {
	         *   // Traverses all descendant nodes.
	         * });
	         */
	
	    }, {
	        key: 'walk',
	        value: function walk(callback) {
	            return this.each(function (child, i) {
	                var result = callback(child, i);
	                if (result !== false && child.walk) {
	                    result = child.walk(callback);
	                }
	                return result;
	            });
	        }
	
	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each declaration node.
	         *
	         * If you pass a filter, iteration will only happen over declarations
	         * with matching properties.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [prop]   - string or regular expression
	         *                                   to filter declarations by property name
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkDecls(decl => {
	         *   checkPropertySupport(decl.prop);
	         * });
	         *
	         * root.walkDecls('border-radius', decl => {
	         *   decl.remove();
	         * });
	         *
	         * root.walkDecls(/^background/, decl => {
	         *   decl.value = takeFirstColorFromGradient(decl.value);
	         * });
	         */
	
	    }, {
	        key: 'walkDecls',
	        value: function walkDecls(prop, callback) {
	            if (!callback) {
	                callback = prop;
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (prop instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl' && prop.test(child.prop)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl' && child.prop === prop) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }
	
	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each rule node.
	         *
	         * If you pass a filter, iteration will only happen over rules
	         * with matching selectors.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [selector] - string or regular expression
	         *                                     to filter rules by selector
	         * @param {childIterator} callback   - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * const selectors = [];
	         * root.walkRules(rule => {
	         *   selectors.push(rule.selector);
	         * });
	         * console.log(`Your CSS uses ${selectors.length} selectors`);
	         */
	
	    }, {
	        key: 'walkRules',
	        value: function walkRules(selector, callback) {
	            if (!callback) {
	                callback = selector;
	
	                return this.walk(function (child, i) {
	                    if (child.type === 'rule') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (selector instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'rule' && selector.test(child.selector)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'rule' && child.selector === selector) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }
	
	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each at-rule node.
	         *
	         * If you pass a filter, iteration will only happen over at-rules
	         * that have matching names.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [name]   - string or regular expression
	         *                                   to filter at-rules by name
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkAtRules(rule => {
	         *   if ( isOld(rule.name) ) rule.remove();
	         * });
	         *
	         * let first = false;
	         * root.walkAtRules('charset', rule => {
	         *   if ( !first ) {
	         *     first = true;
	         *   } else {
	         *     rule.remove();
	         *   }
	         * });
	         */
	
	    }, {
	        key: 'walkAtRules',
	        value: function walkAtRules(name, callback) {
	            if (!callback) {
	                callback = name;
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (name instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule' && name.test(child.name)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule' && child.name === name) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }
	
	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each comment node.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkComments(comment => {
	         *   comment.remove();
	         * });
	         */
	
	    }, {
	        key: 'walkComments',
	        value: function walkComments(callback) {
	            return this.walk(function (child, i) {
	                if (child.type === 'comment') {
	                    return callback(child, i);
	                }
	            });
	        }
	
	        /**
	         * Inserts new nodes to the start of the container.
	         *
	         * @param {...(Node|object|string|Node[])} children - new nodes
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
	         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
	         * rule.append(decl1, decl2);
	         *
	         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
	         * root.append({ selector: 'a' });                       // rule
	         * rule.append({ prop: 'color', value: 'black' });       // declaration
	         * rule.append({ text: 'Comment' })                      // comment
	         *
	         * root.append('a {}');
	         * root.first.append('color: black; z-index: 1');
	         */
	
	    }, {
	        key: 'append',
	        value: function append() {
	            var _this2 = this;
	
	            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
	                children[_key] = arguments[_key];
	            }
	
	            children.forEach(function (child) {
	                var nodes = _this2.normalize(child, _this2.last);
	                nodes.forEach(function (node) {
	                    return _this2.nodes.push(node);
	                });
	            });
	            return this;
	        }
	
	        /**
	         * Inserts new nodes to the end of the container.
	         *
	         * @param {...(Node|object|string|Node[])} children - new nodes
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
	         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
	         * rule.prepend(decl1, decl2);
	         *
	         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
	         * root.append({ selector: 'a' });                       // rule
	         * rule.append({ prop: 'color', value: 'black' });       // declaration
	         * rule.append({ text: 'Comment' })                      // comment
	         *
	         * root.append('a {}');
	         * root.first.append('color: black; z-index: 1');
	         */
	
	    }, {
	        key: 'prepend',
	        value: function prepend() {
	            var _this3 = this;
	
	            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                children[_key2] = arguments[_key2];
	            }
	
	            children = children.reverse();
	            children.forEach(function (child) {
	                var nodes = _this3.normalize(child, _this3.first, 'prepend').reverse();
	                nodes.forEach(function (node) {
	                    return _this3.nodes.unshift(node);
	                });
	                for (var id in _this3.indexes) {
	                    _this3.indexes[id] = _this3.indexes[id] + nodes.length;
	                }
	            });
	            return this;
	        }
	    }, {
	        key: 'cleanRaws',
	        value: function cleanRaws(keepBetween) {
	            _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'cleanRaws', this).call(this, keepBetween);
	            if (this.nodes) {
	                this.nodes.forEach(function (node) {
	                    return node.cleanRaws(keepBetween);
	                });
	            }
	        }
	
	        /**
	         * Insert new node before old node within the container.
	         *
	         * @param {Node|number} exist             - child or child’s index.
	         * @param {Node|object|string|Node[]} add - new node
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
	         */
	
	    }, {
	        key: 'insertBefore',
	        value: function insertBefore(exist, add) {
	            var _this4 = this;
	
	            exist = this.index(exist);
	
	            var type = exist === 0 ? 'prepend' : false;
	            var nodes = this.normalize(add, this.nodes[exist], type).reverse();
	            nodes.forEach(function (node) {
	                return _this4.nodes.splice(exist, 0, node);
	            });
	
	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (exist <= index) {
	                    this.indexes[id] = index + nodes.length;
	                }
	            }
	
	            return this;
	        }
	
	        /**
	         * Insert new node after old node within the container.
	         *
	         * @param {Node|number} exist             - child or child’s index
	         * @param {Node|object|string|Node[]} add - new node
	         *
	         * @return {Node} this node for methods chain
	         */
	
	    }, {
	        key: 'insertAfter',
	        value: function insertAfter(exist, add) {
	            var _this5 = this;
	
	            exist = this.index(exist);
	
	            var nodes = this.normalize(add, this.nodes[exist]).reverse();
	            nodes.forEach(function (node) {
	                return _this5.nodes.splice(exist + 1, 0, node);
	            });
	
	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (exist < index) {
	                    this.indexes[id] = index + nodes.length;
	                }
	            }
	
	            return this;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(child) {
	            if (typeof child !== 'undefined') {
	                (0, _warnOnce2.default)('Container#remove is deprecated. ' + 'Use Container#removeChild');
	                this.removeChild(child);
	            } else {
	                _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'remove', this).call(this);
	            }
	            return this;
	        }
	
	        /**
	         * Removes node from the container and cleans the parent properties
	         * from the node and its children.
	         *
	         * @param {Node|number} child - child or child’s index
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.nodes.length  //=> 5
	         * rule.removeChild(decl);
	         * rule.nodes.length  //=> 4
	         * decl.parent        //=> undefined
	         */
	
	    }, {
	        key: 'removeChild',
	        value: function removeChild(child) {
	            child = this.index(child);
	            this.nodes[child].parent = undefined;
	            this.nodes.splice(child, 1);
	
	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (index >= child) {
	                    this.indexes[id] = index - 1;
	                }
	            }
	
	            return this;
	        }
	
	        /**
	         * Removes all children from the container
	         * and cleans their parent properties.
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.removeAll();
	         * rule.nodes.length //=> 0
	         */
	
	    }, {
	        key: 'removeAll',
	        value: function removeAll() {
	            this.nodes.forEach(function (node) {
	                return node.parent = undefined;
	            });
	            this.nodes = [];
	            return this;
	        }
	
	        /**
	         * Passes all declaration values within the container that match pattern
	         * through callback, replacing those values with the returned result
	         * of callback.
	         *
	         * This method is useful if you are using a custom unit or function
	         * and need to iterate through all values.
	         *
	         * @param {string|RegExp} pattern      - replace pattern
	         * @param {object} opts                - options to speed up the search
	         * @param {string|string[]} opts.props - an array of property names
	         * @param {string} opts.fast           - string that’s used
	         *                                       to narrow down values and speed up
	                                                 the regexp search
	         * @param {function|string} callback   - string to replace pattern
	         *                                       or callback that returns a new
	         *                                       value.
	         *                                       The callback will receive
	         *                                       the same arguments as those
	         *                                       passed to a function parameter
	         *                                       of `String#replace`.
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
	         *   return 15 * parseInt(string) + 'px';
	         * });
	         */
	
	    }, {
	        key: 'replaceValues',
	        value: function replaceValues(pattern, opts, callback) {
	            if (!callback) {
	                callback = opts;
	                opts = {};
	            }
	
	            this.walkDecls(function (decl) {
	                if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
	                if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;
	
	                decl.value = decl.value.replace(pattern, callback);
	            });
	
	            return this;
	        }
	
	        /**
	         * Returns `true` if callback returns `true`
	         * for all of the container’s children.
	         *
	         * @param {childCondition} condition - iterator returns true or false.
	         *
	         * @return {boolean} is every child pass condition
	         *
	         * @example
	         * const noPrefixes = rule.every(i => i.prop[0] !== '-');
	         */
	
	    }, {
	        key: 'every',
	        value: function every(condition) {
	            return this.nodes.every(condition);
	        }
	
	        /**
	         * Returns `true` if callback returns `true` for (at least) one
	         * of the container’s children.
	         *
	         * @param {childCondition} condition - iterator returns true or false.
	         *
	         * @return {boolean} is some child pass condition
	         *
	         * @example
	         * const hasPrefix = rule.some(i => i.prop[0] === '-');
	         */
	
	    }, {
	        key: 'some',
	        value: function some(condition) {
	            return this.nodes.some(condition);
	        }
	
	        /**
	         * Returns a `child`’s index within the {@link Container#nodes} array.
	         *
	         * @param {Node} child - child of the current container.
	         *
	         * @return {number} child index
	         *
	         * @example
	         * rule.index( rule.nodes[2] ) //=> 2
	         */
	
	    }, {
	        key: 'index',
	        value: function index(child) {
	            if (typeof child === 'number') {
	                return child;
	            } else {
	                return this.nodes.indexOf(child);
	            }
	        }
	
	        /**
	         * The container’s first child.
	         *
	         * @type {Node}
	         *
	         * @example
	         * rule.first == rules.nodes[0];
	         */
	
	    }, {
	        key: 'normalize',
	        value: function normalize(nodes, sample) {
	            var _this6 = this;
	
	            if (typeof nodes === 'string') {
	                nodes = cleanSource((0, _parse2.default)(nodes).nodes);
	            } else if (!Array.isArray(nodes)) {
	                if (nodes.type === 'root') {
	                    nodes = nodes.nodes;
	                } else if (nodes.type) {
	                    nodes = [nodes];
	                } else if (nodes.prop) {
	                    if (typeof nodes.value === 'undefined') {
	                        throw new Error('Value field is missed in node creation');
	                    } else if (typeof nodes.value !== 'string') {
	                        nodes.value = String(nodes.value);
	                    }
	                    nodes = [new _declaration2.default(nodes)];
	                } else if (nodes.selector) {
	                    nodes = [new _rule2.default(nodes)];
	                } else if (nodes.name) {
	                    nodes = [new _atRule2.default(nodes)];
	                } else if (nodes.text) {
	                    nodes = [new _comment2.default(nodes)];
	                } else {
	                    throw new Error('Unknown node type in node creation');
	                }
	            }
	
	            var processed = nodes.map(function (i) {
	                if (typeof i.raws === 'undefined') i = _this6.rebuild(i);
	
	                if (i.parent) i = i.clone();
	                if (typeof i.raws.before === 'undefined') {
	                    if (sample && typeof sample.raws.before !== 'undefined') {
	                        i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
	                    }
	                }
	                i.parent = _this6;
	                return i;
	            });
	
	            return processed;
	        }
	    }, {
	        key: 'rebuild',
	        value: function rebuild(node, parent) {
	            var _this7 = this;
	
	            var fix = void 0;
	            if (node.type === 'root') {
	                fix = new _root2.default();
	            } else if (node.type === 'atrule') {
	                fix = new _atRule2.default();
	            } else if (node.type === 'rule') {
	                fix = new _rule2.default();
	            } else if (node.type === 'decl') {
	                fix = new _declaration2.default();
	            } else if (node.type === 'comment') {
	                fix = new _comment2.default();
	            }
	
	            for (var i in node) {
	                if (i === 'nodes') {
	                    fix.nodes = node.nodes.map(function (j) {
	                        return _this7.rebuild(j, fix);
	                    });
	                } else if (i === 'parent' && parent) {
	                    fix.parent = parent;
	                } else if (node.hasOwnProperty(i)) {
	                    fix[i] = node[i];
	                }
	            }
	
	            return fix;
	        }
	    }, {
	        key: 'eachInside',
	        value: function eachInside(callback) {
	            (0, _warnOnce2.default)('Container#eachInside is deprecated. ' + 'Use Container#walk instead.');
	            return this.walk(callback);
	        }
	    }, {
	        key: 'eachDecl',
	        value: function eachDecl(prop, callback) {
	            (0, _warnOnce2.default)('Container#eachDecl is deprecated. ' + 'Use Container#walkDecls instead.');
	            return this.walkDecls(prop, callback);
	        }
	    }, {
	        key: 'eachRule',
	        value: function eachRule(selector, callback) {
	            (0, _warnOnce2.default)('Container#eachRule is deprecated. ' + 'Use Container#walkRules instead.');
	            return this.walkRules(selector, callback);
	        }
	    }, {
	        key: 'eachAtRule',
	        value: function eachAtRule(name, callback) {
	            (0, _warnOnce2.default)('Container#eachAtRule is deprecated. ' + 'Use Container#walkAtRules instead.');
	            return this.walkAtRules(name, callback);
	        }
	    }, {
	        key: 'eachComment',
	        value: function eachComment(callback) {
	            (0, _warnOnce2.default)('Container#eachComment is deprecated. ' + 'Use Container#walkComments instead.');
	            return this.walkComments(callback);
	        }
	    }, {
	        key: 'first',
	        get: function get() {
	            if (!this.nodes) return undefined;
	            return this.nodes[0];
	        }
	
	        /**
	         * The container’s last child.
	         *
	         * @type {Node}
	         *
	         * @example
	         * rule.last == rule.nodes[rule.nodes.length - 1];
	         */
	
	    }, {
	        key: 'last',
	        get: function get() {
	            if (!this.nodes) return undefined;
	            return this.nodes[this.nodes.length - 1];
	        }
	    }, {
	        key: 'semicolon',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
	            return this.raws.semicolon;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
	            this.raws.semicolon = val;
	        }
	    }, {
	        key: 'after',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
	            return this.raws.after;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
	            this.raws.after = val;
	        }
	
	        /**
	         * @memberof Container#
	         * @member {Node[]} nodes - an array containing the container’s children
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * root.nodes.length           //=> 1
	         * root.nodes[0].selector      //=> 'a'
	         * root.nodes[0].nodes[0].prop //=> 'color'
	         */
	
	    }]);
	
	    return Container;
	}(_node2.default);
	
	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  if (Array.isArray(value)) value = value.join(',');
	
	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};
	
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.objToCss = undefined;
	
	var _hyphenateStyleName = __webpack_require__(27);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _isPlainObject = __webpack_require__(31);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).PropTypes.any;
	
	var objToCss = exports.objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).map(function (key) {
	    if ((0, _isPlainObject2.default)(obj[key])) return objToCss(obj[key], key);
	    return (0, _hyphenateStyleName2.default)(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};
	
	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) return [].concat(_toConsumableArray(ruleSet), _toConsumableArray(flatten(chunk, executionContext)));
	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, _toConsumableArray(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
	    }
	
	    /* Handle objects */
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    return ruleSet.concat((0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};
	
	exports.default = flatten;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Represents an at-rule.
	 *
	 * If it’s followed in the CSS by a {} block, this node will have
	 * a nodes property representing its children.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
	 *
	 * const charset = root.first;
	 * charset.type  //=> 'atrule'
	 * charset.nodes //=> undefined
	 *
	 * const media = root.last;
	 * media.nodes   //=> []
	 */
	var AtRule = function (_Container) {
	    _inherits(AtRule, _Container);
	
	    function AtRule(defaults) {
	        _classCallCheck(this, AtRule);
	
	        var _this = _possibleConstructorReturn(this, (AtRule.__proto__ || Object.getPrototypeOf(AtRule)).call(this, defaults));
	
	        _this.type = 'atrule';
	        return _this;
	    }
	
	    _createClass(AtRule, [{
	        key: 'append',
	        value: function append() {
	            var _get2;
	
	            if (!this.nodes) this.nodes = [];
	
	            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
	                children[_key] = arguments[_key];
	            }
	
	            return (_get2 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'append', this)).call.apply(_get2, [this].concat(children));
	        }
	    }, {
	        key: 'prepend',
	        value: function prepend() {
	            var _get3;
	
	            if (!this.nodes) this.nodes = [];
	
	            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                children[_key2] = arguments[_key2];
	            }
	
	            return (_get3 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'prepend', this)).call.apply(_get3, [this].concat(children));
	        }
	    }, {
	        key: 'afterName',
	        get: function get() {
	            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
	            return this.raws.afterName;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
	            this.raws.afterName = val;
	        }
	    }, {
	        key: '_params',
	        get: function get() {
	            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
	            return this.raws.params;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
	            this.raws.params = val;
	        }
	
	        /**
	         * @memberof AtRule#
	         * @member {string} name - the at-rule’s name immediately follows the `@`
	         *
	         * @example
	         * const root  = postcss.parse('@media print {}');
	         * media.name //=> 'media'
	         * const media = root.first;
	         */
	
	        /**
	         * @memberof AtRule#
	         * @member {string} params - the at-rule’s parameters, the values
	         *                           that follow the at-rule’s name but precede
	         *                           any {} block
	         *
	         * @example
	         * const root  = postcss.parse('@media print, screen {}');
	         * const media = root.first;
	         * media.params //=> 'print, screen'
	         */
	
	        /**
	         * @memberof AtRule#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         * * `afterName`: the space between the at-rule name and its parameters.
	         *
	         * PostCSS cleans at-rule parameters from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('  @media\nprint {\n}')
	         * root.first.first.raws //=> { before: '  ',
	         *                       //     between: ' ',
	         *                       //     afterName: '\n',
	         *                       //     after: '\n' }
	         */
	
	    }]);
	
	    return AtRule;
	}(_container2.default);
	
	exports.default = AtRule;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _node = __webpack_require__(18);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Represents a comment between declarations or statements (rule and at-rules).
	 *
	 * Comments inside selectors, at-rule parameters, or declaration values
	 * will be stored in the `raws` properties explained above.
	 *
	 * @extends Node
	 */
	var Comment = function (_Node) {
	    _inherits(Comment, _Node);
	
	    function Comment(defaults) {
	        _classCallCheck(this, Comment);
	
	        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, defaults));
	
	        _this.type = 'comment';
	        return _this;
	    }
	
	    _createClass(Comment, [{
	        key: 'left',
	        get: function get() {
	            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
	            return this.raws.left;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
	            this.raws.left = val;
	        }
	    }, {
	        key: 'right',
	        get: function get() {
	            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
	            return this.raws.right;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
	            this.raws.right = val;
	        }
	
	        /**
	         * @memberof Comment#
	         * @member {string} text - the comment’s text
	         */
	
	        /**
	         * @memberof Comment#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node.
	         * * `left`: the space symbols between `/*` and the comment’s text.
	         * * `right`: the space symbols between the comment’s text.
	         */
	
	    }]);
	
	    return Comment;
	}(_node2.default);
	
	exports.default = Comment;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // break cyclical dependency deadlock – #87
	
	__webpack_require__(19);
	
	var _cssSyntaxError = __webpack_require__(37);
	
	var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import PreviousMap    from './previous-map';
	
	var sequence = 0;
	
	/**
	 * @typedef  {object} filePosition
	 * @property {string} file   - path to file
	 * @property {number} line   - source line in file
	 * @property {number} column - source column in file
	 */
	
	/**
	 * Represents the source CSS.
	 *
	 * @example
	 * const root  = postcss.parse(css, { from: file });
	 * const input = root.source.input;
	 */
	
	var Input = function () {
	
	    /**
	     * @param {string} css    - input CSS source
	     * @param {object} [opts] - {@link Processor#process} options
	     */
	    function Input(css) {
	        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        _classCallCheck(this, Input);
	
	        /**
	         * @member {string} - input CSS source
	         *
	         * @example
	         * const input = postcss.parse('a{}', { from: file }).input;
	         * input.css //=> "a{}";
	         */
	        this.css = css.toString();
	
	        if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
	            this.css = this.css.slice(1);
	        }
	
	        if (opts.from) {
	            if (/^\w+:\/\//.test(opts.from)) {
	                /**
	                 * @member {string} - The absolute path to the CSS source file
	                 *                    defined with the `from` option.
	                 *
	                 * @example
	                 * const root = postcss.parse(css, { from: 'a.css' });
	                 * root.source.input.file //=> '/home/ai/a.css'
	                 */
	                this.file = opts.from;
	            } else {
	                this.file = path.resolve(opts.from);
	            }
	        }
	
	        /*
	                let map = new PreviousMap(this.css, opts);
	                if ( map.text ) {
	                    /!**
	                     * @member {PreviousMap} - The input source map passed from
	                     *                         a compilation step before PostCSS
	                     *                         (for example, from Sass compiler).
	                     *
	                     * @example
	                     * root.source.input.map.consumer().sources //=> ['a.sass']
	                     *!/
	                    this.map = map;
	                    let file = map.consumer().file;
	                    if ( !this.file && file ) this.file = this.mapResolve(file);
	                }
	        */
	
	        if (!this.file) {
	            sequence += 1;
	            /**
	             * @member {string} - The unique ID of the CSS source. It will be
	             *                    created if `from` option is not provided
	             *                    (because PostCSS does not know the file path).
	             *
	             * @example
	             * const root = postcss.parse(css);
	             * root.source.input.file //=> undefined
	             * root.source.input.id   //=> "<input css 1>"
	             */
	            this.id = '<input css ' + sequence + '>';
	        }
	        if (this.map) this.map.file = this.from;
	    }
	
	    _createClass(Input, [{
	        key: 'error',
	        value: function error(message, line, column) {
	            var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	            var result = void 0;
	            var origin = this.origin(line, column);
	            if (origin) {
	                result = new _cssSyntaxError2.default(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
	            } else {
	                result = new _cssSyntaxError2.default(message, line, column, this.css, this.file, opts.plugin);
	            }
	
	            result.input = { line: line, column: column, source: this.css };
	            if (this.file) result.input.file = this.file;
	
	            return result;
	        }
	
	        /**
	         * Reads the input source map and returns a symbol position
	         * in the input source (e.g., in a Sass file that was compiled
	         * to CSS before being passed to PostCSS).
	         *
	         * @param {number} line   - line in input CSS
	         * @param {number} column - column in input CSS
	         *
	         * @return {filePosition} position in input source
	         *
	         * @example
	         * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
	         */
	
	    }, {
	        key: 'origin',
	        value: function origin(line, column) {
	            if (!this.map) return false;
	            var consumer = this.map.consumer();
	
	            var from = consumer.originalPositionFor({ line: line, column: column });
	            if (!from.source) return false;
	
	            var result = {
	                file: this.mapResolve(from.source),
	                line: from.line,
	                column: from.column
	            };
	
	            var source = consumer.sourceContentFor(from.source);
	            if (source) result.source = source;
	
	            return result;
	        }
	    }, {
	        key: 'mapResolve',
	        value: function mapResolve(file) {
	            if (/^\w+:\/\//.test(file)) {
	                return file;
	            } else {
	                return path.resolve(this.map.consumer().sourceRoot || '.', file);
	            }
	        }
	
	        /**
	         * The CSS source identifier. Contains {@link Input#file} if the user
	         * set the `from` option, or {@link Input#id} if they did not.
	         * @type {string}
	         *
	         * @example
	         * const root = postcss.parse(css, { from: 'a.css' });
	         * root.source.input.from //=> "/home/ai/a.css"
	         *
	         * const root = postcss.parse(css);
	         * root.source.input.from //=> "<input css 1>"
	         */
	
	    }, {
	        key: 'from',
	        get: function get() {
	            return this.file || this.id;
	        }
	    }]);
	
	    return Input;
	}();
	
	exports.default = Input;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _cssSyntaxError = __webpack_require__(37);
	
	var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);
	
	var _stringifier = __webpack_require__(42);
	
	var _stringifier2 = _interopRequireDefault(_stringifier);
	
	var _stringify = __webpack_require__(43);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @typedef {object} position
	 * @property {number} line   - source line in file
	 * @property {number} column - source column in file
	 */
	
	/**
	 * @typedef {object} source
	 * @property {Input} input    - {@link Input} with input file
	 * @property {position} start - The starting position of the node’s source
	 * @property {position} end   - The ending position of the node’s source
	 */
	
	var cloneNode = function cloneNode(obj, parent) {
	    var cloned = new obj.constructor();
	
	    for (var i in obj) {
	        if (!obj.hasOwnProperty(i)) continue;
	        var value = obj[i];
	        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	
	        if (i === 'parent' && type === 'object') {
	            if (parent) cloned[i] = parent;
	        } else if (i === 'source') {
	            cloned[i] = value;
	        } else if (value instanceof Array) {
	            cloned[i] = value.map(function (j) {
	                return cloneNode(j, cloned);
	            });
	        } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
	            if (type === 'object' && value !== null) value = cloneNode(value);
	            cloned[i] = value;
	        }
	    }
	
	    return cloned;
	};
	
	/**
	 * All node classes inherit the following common methods.
	 *
	 * @abstract
	 */
	
	var Node = function () {
	
	    /**
	     * @param {object} [defaults] - value for node properties
	     */
	    function Node() {
	        var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        _classCallCheck(this, Node);
	
	        this.raws = {};
	        for (var name in defaults) {
	            this[name] = defaults[name];
	        }
	    }
	
	    /**
	     * Returns a CssSyntaxError instance containing the original position
	     * of the node in the source, showing line and column numbers and also
	     * a small excerpt to facilitate debugging.
	     *
	     * If present, an input source map will be used to get the original position
	     * of the source, even from a previous compilation step
	     * (e.g., from Sass compilation).
	     *
	     * This method produces very useful error messages.
	     *
	     * @param {string} message     - error description
	     * @param {object} [opts]      - options
	     * @param {string} opts.plugin - plugin name that created this error.
	     *                               PostCSS will set it automatically.
	     * @param {string} opts.word   - a word inside a node’s string that should
	     *                               be highlighted as the source of the error
	     * @param {number} opts.index  - an index inside a node’s string that should
	     *                               be highlighted as the source of the error
	     *
	     * @return {CssSyntaxError} error object to throw it
	     *
	     * @example
	     * if ( !variables[name] ) {
	     *   throw decl.error('Unknown variable ' + name, { word: name });
	     *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
	     *   //   color: $black
	     *   // a
	     *   //          ^
	     *   //   background: white
	     * }
	     */
	
	
	    _createClass(Node, [{
	        key: 'error',
	        value: function error(message) {
	            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            if (this.source) {
	                var pos = this.positionBy(opts);
	                return this.source.input.error(message, pos.line, pos.column, opts);
	            } else {
	                return new _cssSyntaxError2.default(message);
	            }
	        }
	
	        /**
	         * This method is provided as a convenience wrapper for {@link Result#warn}.
	         *
	         * @param {Result} result      - the {@link Result} instance
	         *                               that will receive the warning
	         * @param {string} text        - warning message
	         * @param {object} [opts]      - options
	         * @param {string} opts.plugin - plugin name that created this warning.
	         *                               PostCSS will set it automatically.
	         * @param {string} opts.word   - a word inside a node’s string that should
	         *                               be highlighted as the source of the warning
	         * @param {number} opts.index  - an index inside a node’s string that should
	         *                               be highlighted as the source of the warning
	         *
	         * @return {Warning} created warning object
	         *
	         * @example
	         * const plugin = postcss.plugin('postcss-deprecated', () => {
	         *   return (root, result) => {
	         *     root.walkDecls('bad', decl => {
	         *       decl.warn(result, 'Deprecated property bad');
	         *     });
	         *   };
	         * });
	         */
	
	    }, {
	        key: 'warn',
	        value: function warn(result, text, opts) {
	            var data = { node: this };
	            for (var i in opts) {
	                data[i] = opts[i];
	            }return result.warn(text, data);
	        }
	
	        /**
	         * Removes the node from its parent and cleans the parent properties
	         * from the node and its children.
	         *
	         * @example
	         * if ( decl.prop.match(/^-webkit-/) ) {
	         *   decl.remove();
	         * }
	         *
	         * @return {Node} node to make calls chain
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove() {
	            if (this.parent) {
	                this.parent.removeChild(this);
	            }
	            this.parent = undefined;
	            return this;
	        }
	
	        /**
	         * Returns a CSS string representing the node.
	         *
	         * @param {stringifier|syntax} [stringifier] - a syntax to use
	         *                                             in string generation
	         *
	         * @return {string} CSS string of this node
	         *
	         * @example
	         * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
	         */
	
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var stringifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stringify2.default;
	
	            if (stringifier.stringify) stringifier = stringifier.stringify;
	            var result = '';
	            stringifier(this, function (i) {
	                result += i;
	            });
	            return result;
	        }
	
	        /**
	         * Returns a clone of the node.
	         *
	         * The resulting cloned node and its (cloned) children will have
	         * a clean parent and code style properties.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @example
	         * const cloned = decl.clone({ prop: '-moz-' + decl.prop });
	         * cloned.raws.before  //=> undefined
	         * cloned.parent       //=> undefined
	         * cloned.toString()   //=> -moz-transform: scale(0)
	         *
	         * @return {Node} clone of the node
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var cloned = cloneNode(this);
	            for (var name in overrides) {
	                cloned[name] = overrides[name];
	            }
	            return cloned;
	        }
	
	        /**
	         * Shortcut to clone the node and insert the resulting cloned node
	         * before the current node.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @example
	         * decl.cloneBefore({ prop: '-moz-' + decl.prop });
	         *
	         * @return {Node} - new node
	         */
	
	    }, {
	        key: 'cloneBefore',
	        value: function cloneBefore() {
	            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var cloned = this.clone(overrides);
	            this.parent.insertBefore(this, cloned);
	            return cloned;
	        }
	
	        /**
	         * Shortcut to clone the node and insert the resulting cloned node
	         * after the current node.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @return {Node} - new node
	         */
	
	    }, {
	        key: 'cloneAfter',
	        value: function cloneAfter() {
	            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var cloned = this.clone(overrides);
	            this.parent.insertAfter(this, cloned);
	            return cloned;
	        }
	
	        /**
	         * Inserts node(s) before the current node and removes the current node.
	         *
	         * @param {...Node} nodes - node(s) to replace current one
	         *
	         * @example
	         * if ( atrule.name == 'mixin' ) {
	         *   atrule.replaceWith(mixinRules[atrule.params]);
	         * }
	         *
	         * @return {Node} current node to methods chain
	         */
	
	    }, {
	        key: 'replaceWith',
	        value: function replaceWith() {
	            var _this = this;
	
	            if (this.parent) {
	                for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
	                    nodes[_key] = arguments[_key];
	                }
	
	                nodes.forEach(function (node) {
	                    _this.parent.insertBefore(_this, node);
	                });
	
	                this.remove();
	            }
	
	            return this;
	        }
	
	        /**
	         * Removes the node from its current parent and inserts it
	         * at the end of `newParent`.
	         *
	         * This will clean the `before` and `after` code {@link Node#raws} data
	         * from the node and replace them with the indentation style of `newParent`.
	         * It will also clean the `between` property
	         * if `newParent` is in another {@link Root}.
	         *
	         * @param {Container} newParent - container node where the current node
	         *                                will be moved
	         *
	         * @example
	         * atrule.moveTo(atrule.root());
	         *
	         * @return {Node} current node to methods chain
	         */
	
	    }, {
	        key: 'moveTo',
	        value: function moveTo(newParent) {
	            this.cleanRaws(this.root() === newParent.root());
	            this.remove();
	            newParent.append(this);
	            return this;
	        }
	
	        /**
	         * Removes the node from its current parent and inserts it into
	         * a new parent before `otherNode`.
	         *
	         * This will also clean the node’s code style properties just as it would
	         * in {@link Node#moveTo}.
	         *
	         * @param {Node} otherNode - node that will be before current node
	         *
	         * @return {Node} current node to methods chain
	         */
	
	    }, {
	        key: 'moveBefore',
	        value: function moveBefore(otherNode) {
	            this.cleanRaws(this.root() === otherNode.root());
	            this.remove();
	            otherNode.parent.insertBefore(otherNode, this);
	            return this;
	        }
	
	        /**
	         * Removes the node from its current parent and inserts it into
	         * a new parent after `otherNode`.
	         *
	         * This will also clean the node’s code style properties just as it would
	         * in {@link Node#moveTo}.
	         *
	         * @param {Node} otherNode - node that will be after current node
	         *
	         * @return {Node} current node to methods chain
	         */
	
	    }, {
	        key: 'moveAfter',
	        value: function moveAfter(otherNode) {
	            this.cleanRaws(this.root() === otherNode.root());
	            this.remove();
	            otherNode.parent.insertAfter(otherNode, this);
	            return this;
	        }
	
	        /**
	         * Returns the next child of the node’s parent.
	         * Returns `undefined` if the current node is the last child.
	         *
	         * @return {Node|undefined} next node
	         *
	         * @example
	         * if ( comment.text === 'delete next' ) {
	         *   const next = comment.next();
	         *   if ( next ) {
	         *     next.remove();
	         *   }
	         * }
	         */
	
	    }, {
	        key: 'next',
	        value: function next() {
	            var index = this.parent.index(this);
	            return this.parent.nodes[index + 1];
	        }
	
	        /**
	         * Returns the previous child of the node’s parent.
	         * Returns `undefined` if the current node is the first child.
	         *
	         * @return {Node|undefined} previous node
	         *
	         * @example
	         * const annotation = decl.prev();
	         * if ( annotation.type == 'comment' ) {
	         *  readAnnotation(annotation.text);
	         * }
	         */
	
	    }, {
	        key: 'prev',
	        value: function prev() {
	            var index = this.parent.index(this);
	            return this.parent.nodes[index - 1];
	        }
	    }, {
	        key: 'toJSON',
	        value: function toJSON() {
	            var fixed = {};
	
	            for (var name in this) {
	                if (!this.hasOwnProperty(name)) continue;
	                if (name === 'parent') continue;
	                var value = this[name];
	
	                if (value instanceof Array) {
	                    fixed[name] = value.map(function (i) {
	                        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && i.toJSON) {
	                            return i.toJSON();
	                        } else {
	                            return i;
	                        }
	                    });
	                } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.toJSON) {
	                    fixed[name] = value.toJSON();
	                } else {
	                    fixed[name] = value;
	                }
	            }
	
	            return fixed;
	        }
	
	        /**
	         * Returns a {@link Node#raws} value. If the node is missing
	         * the code style property (because the node was manually built or cloned),
	         * PostCSS will try to autodetect the code style property by looking
	         * at other nodes in the tree.
	         *
	         * @param {string} prop          - name of code style property
	         * @param {string} [defaultType] - name of default value, it can be missed
	         *                                 if the value is the same as prop
	         *
	         * @example
	         * const root = postcss.parse('a { background: white }');
	         * root.nodes[0].append({ prop: 'color', value: 'black' });
	         * root.nodes[0].nodes[1].raws.before   //=> undefined
	         * root.nodes[0].nodes[1].raw('before') //=> ' '
	         *
	         * @return {string} code style value
	         */
	
	    }, {
	        key: 'raw',
	        value: function raw(prop, defaultType) {
	            var str = new _stringifier2.default();
	            return str.raw(this, prop, defaultType);
	        }
	
	        /**
	         * Finds the Root instance of the node’s tree.
	         *
	         * @example
	         * root.nodes[0].nodes[0].root() === root
	         *
	         * @return {Root} root parent
	         */
	
	    }, {
	        key: 'root',
	        value: function root() {
	            var result = this;
	            while (result.parent) {
	                result = result.parent;
	            }return result;
	        }
	    }, {
	        key: 'cleanRaws',
	        value: function cleanRaws(keepBetween) {
	            delete this.raws.before;
	            delete this.raws.after;
	            if (!keepBetween) delete this.raws.between;
	        }
	    }, {
	        key: 'positionInside',
	        value: function positionInside(index) {
	            var string = this.toString();
	            var column = this.source.start.column;
	            var line = this.source.start.line;
	
	            for (var i = 0; i < index; i++) {
	                if (string[i] === '\n') {
	                    column = 1;
	                    line += 1;
	                } else {
	                    column += 1;
	                }
	            }
	
	            return { line: line, column: column };
	        }
	    }, {
	        key: 'positionBy',
	        value: function positionBy(opts) {
	            var pos = this.source.start;
	            if (opts.index) {
	                pos = this.positionInside(opts.index);
	            } else if (opts.word) {
	                var index = this.toString().indexOf(opts.word);
	                if (index !== -1) pos = this.positionInside(index);
	            }
	            return pos;
	        }
	    }, {
	        key: 'removeSelf',
	        value: function removeSelf() {
	            (0, _warnOnce2.default)('Node#removeSelf is deprecated. Use Node#remove.');
	            return this.remove();
	        }
	    }, {
	        key: 'replace',
	        value: function replace(nodes) {
	            (0, _warnOnce2.default)('Node#replace is deprecated. Use Node#replaceWith');
	            return this.replaceWith(nodes);
	        }
	    }, {
	        key: 'style',
	        value: function style(own, detect) {
	            (0, _warnOnce2.default)('Node#style() is deprecated. Use Node#raw()');
	            return this.raw(own, detect);
	        }
	    }, {
	        key: 'cleanStyles',
	        value: function cleanStyles(keepBetween) {
	            (0, _warnOnce2.default)('Node#cleanStyles() is deprecated. Use Node#cleanRaws()');
	            return this.cleanRaws(keepBetween);
	        }
	    }, {
	        key: 'before',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
	            return this.raws.before;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
	            this.raws.before = val;
	        }
	    }, {
	        key: 'between',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
	            return this.raws.between;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
	            this.raws.between = val;
	        }
	
	        /**
	         * @memberof Node#
	         * @member {string} type - String representing the node’s type.
	         *                         Possible values are `root`, `atrule`, `rule`,
	         *                         `decl`, or `comment`.
	         *
	         * @example
	         * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
	         */
	
	        /**
	         * @memberof Node#
	         * @member {Container} parent - the node’s parent node.
	         *
	         * @example
	         * root.nodes[0].parent == root;
	         */
	
	        /**
	         * @memberof Node#
	         * @member {source} source - the input source of the node
	         *
	         * The property is used in source map generation.
	         *
	         * If you create a node manually (e.g., with `postcss.decl()`),
	         * that node will not have a `source` property and will be absent
	         * from the source map. For this reason, the plugin developer should
	         * consider cloning nodes to create new ones (in which case the new node’s
	         * source will reference the original, cloned node) or setting
	         * the `source` property manually.
	         *
	         * ```js
	         * // Bad
	         * const prefixed = postcss.decl({
	         *   prop: '-moz-' + decl.prop,
	         *   value: decl.value
	         * });
	         *
	         * // Good
	         * const prefixed = decl.clone({ prop: '-moz-' + decl.prop });
	         * ```
	         *
	         * ```js
	         * if ( atrule.name == 'add-link' ) {
	         *   const rule = postcss.rule({ selector: 'a', source: atrule.source });
	         *   atrule.parent.insertBefore(atrule, rule);
	         * }
	         * ```
	         *
	         * @example
	         * decl.source.input.from //=> '/home/ai/a.sass'
	         * decl.source.start      //=> { line: 10, column: 2 }
	         * decl.source.end        //=> { line: 10, column: 12 }
	         */
	
	        /**
	         * @memberof Node#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         * * `afterName`: the space between the at-rule name and its parameters.
	         * * `left`: the space symbols between `/*` and the comment’s text.
	         * * `right`: the space symbols between the comment’s text
	         *   and <code>*&#47;</code>.
	         * * `important`: the content of the important statement,
	         *   if it is not just `!important`.
	         *
	         * PostCSS cleans selectors, declaration values and at-rule parameters
	         * from comments and extra spaces, but it stores origin content in raws
	         * properties. As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '\n  ', between: ':' }
	         */
	
	    }]);
	
	    return Node;
	}();
	
	exports.default = Node;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	__webpack_require__(20);
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _lazyResult = __webpack_require__(39);
	
	var _lazyResult2 = _interopRequireDefault(_lazyResult);
	
	var _processor = __webpack_require__(118);
	
	var _processor2 = _interopRequireDefault(_processor);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // break cyclical dependency deadlock – #87
	
	/**
	 * Represents a CSS file and contains all its parsed nodes.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('a{color:black} b{z-index:2}');
	 * root.type         //=> 'root'
	 * root.nodes.length //=> 2
	 */
	var Root = function (_Container) {
	    _inherits(Root, _Container);
	
	    function Root(defaults) {
	        _classCallCheck(this, Root);
	
	        var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, defaults));
	
	        _this.type = 'root';
	        if (!_this.nodes) _this.nodes = [];
	        return _this;
	    }
	
	    _createClass(Root, [{
	        key: 'removeChild',
	        value: function removeChild(child) {
	            child = this.index(child);
	
	            if (child === 0 && this.nodes.length > 1) {
	                this.nodes[1].raws.before = this.nodes[child].raws.before;
	            }
	
	            return _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'removeChild', this).call(this, child);
	        }
	    }, {
	        key: 'normalize',
	        value: function normalize(child, sample, type) {
	            var nodes = _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'normalize', this).call(this, child);
	
	            if (sample) {
	                if (type === 'prepend') {
	                    if (this.nodes.length > 1) {
	                        sample.raws.before = this.nodes[1].raws.before;
	                    } else {
	                        delete sample.raws.before;
	                    }
	                } else if (this.first !== sample) {
	                    nodes.forEach(function (node) {
	                        node.raws.before = sample.raws.before;
	                    });
	                }
	            }
	
	            return nodes;
	        }
	
	        /**
	         * Returns a {@link Result} instance representing the root’s CSS.
	         *
	         * @param {processOptions} [opts] - options with only `to` and `map` keys
	         *
	         * @return {Result} result with current root’s CSS
	         *
	         * @example
	         * const root1 = postcss.parse(css1, { from: 'a.css' });
	         * const root2 = postcss.parse(css2, { from: 'b.css' });
	         * root1.append(root2);
	         * const result = root1.toResult({ to: 'all.css', map: true });
	         */
	
	    }, {
	        key: 'toResult',
	        value: function toResult() {
	            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var lazy = new _lazyResult2.default(new _processor2.default(), this, opts);
	            return lazy.stringify();
	        }
	    }, {
	        key: 'remove',
	        value: function remove(child) {
	            (0, _warnOnce2.default)('Root#remove is deprecated. Use Root#removeChild');
	            this.removeChild(child);
	        }
	    }, {
	        key: 'prevMap',
	        value: function prevMap() {
	            (0, _warnOnce2.default)('Root#prevMap is deprecated. Use Root#source.input.map');
	            return this.source.input.map;
	        }
	
	        /**
	         * @memberof Root#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `after`: the space symbols after the last child to the end of file.
	         * * `semicolon`: is the last child has an (optional) semicolon.
	         *
	         * @example
	         * postcss.parse('a {}\n').raws //=> { after: '\n' }
	         * postcss.parse('a {}').raws   //=> { after: '' }
	         */
	
	    }]);
	
	    return Root;
	}(_container2.default);
	
	exports.default = Root;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(15);
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _list = __webpack_require__(117);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // break cyclical dependency deadlock – #87
	
	/**
	 * Represents a CSS rule: a selector followed by a declaration block.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('a{}');
	 * const rule = root.first;
	 * rule.type       //=> 'rule'
	 * rule.toString() //=> 'a{}'
	 */
	var Rule = function (_Container) {
	    _inherits(Rule, _Container);
	
	    function Rule(defaults) {
	        _classCallCheck(this, Rule);
	
	        var _this = _possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).call(this, defaults));
	
	        _this.type = 'rule';
	        if (!_this.nodes) _this.nodes = [];
	        return _this;
	    }
	
	    /**
	     * An array containing the rule’s individual selectors.
	     * Groups of selectors are split at commas.
	     *
	     * @type {string[]}
	     *
	     * @example
	     * const root = postcss.parse('a, b { }');
	     * const rule = root.first;
	     *
	     * rule.selector  //=> 'a, b'
	     * rule.selectors //=> ['a', 'b']
	     *
	     * rule.selectors = ['a', 'strong'];
	     * rule.selector //=> 'a, strong'
	     */
	
	
	    _createClass(Rule, [{
	        key: 'selectors',
	        get: function get() {
	            return _list2.default.comma(this.selector);
	        },
	        set: function set(values) {
	            var match = this.selector ? this.selector.match(/,\s*/) : null;
	            var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
	            this.selector = values.join(sep);
	        }
	    }, {
	        key: '_selector',
	        get: function get() {
	            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
	            return this.raws.selector;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
	            this.raws.selector = val;
	        }
	
	        /**
	         * @memberof Rule#
	         * @member {string} selector - the rule’s full selector represented
	         *                             as a string
	         *
	         * @example
	         * const root = postcss.parse('a, b { }');
	         * const rule = root.first;
	         * rule.selector //=> 'a, b'
	         */
	
	        /**
	         * @memberof Rule#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         *
	         * PostCSS cleans selectors from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
	         */
	
	    }]);
	
	    return Rule;
	}(_container2.default);
	
	exports.default = Rule;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = tokenize;
	var SINGLE_QUOTE = '\''.charCodeAt(0);
	var DOUBLE_QUOTE = '"'.charCodeAt(0);
	var BACKSLASH = '\\'.charCodeAt(0);
	var SLASH = '/'.charCodeAt(0);
	var NEWLINE = '\n'.charCodeAt(0);
	var SPACE = ' '.charCodeAt(0);
	var FEED = '\f'.charCodeAt(0);
	var TAB = '\t'.charCodeAt(0);
	var CR = '\r'.charCodeAt(0);
	var OPEN_SQUARE = '['.charCodeAt(0);
	var CLOSE_SQUARE = ']'.charCodeAt(0);
	var OPEN_PARENTHESES = '('.charCodeAt(0);
	var CLOSE_PARENTHESES = ')'.charCodeAt(0);
	var OPEN_CURLY = '{'.charCodeAt(0);
	var CLOSE_CURLY = '}'.charCodeAt(0);
	var SEMICOLON = ';'.charCodeAt(0);
	var ASTERISK = '*'.charCodeAt(0);
	var COLON = ':'.charCodeAt(0);
	var AT = '@'.charCodeAt(0);
	
	var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
	var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
	var RE_BAD_BRACKET = /.[\\\/\("'\n]/;
	
	function tokenize(input) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var tokens = [];
	    var css = input.css.valueOf();
	
	    var ignore = options.ignoreErrors;
	
	    var code = void 0,
	        next = void 0,
	        quote = void 0,
	        lines = void 0,
	        last = void 0,
	        content = void 0,
	        escape = void 0,
	        nextLine = void 0,
	        nextOffset = void 0,
	        escaped = void 0,
	        escapePos = void 0,
	        prev = void 0,
	        n = void 0;
	
	    var length = css.length;
	    var offset = -1;
	    var line = 1;
	    var pos = 0;
	
	    function unclosed(what) {
	        throw input.error('Unclosed ' + what, line, pos - offset);
	    }
	
	    while (pos < length) {
	        code = css.charCodeAt(pos);
	
	        if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
	            offset = pos;
	            line += 1;
	        }
	
	        switch (code) {
	            case NEWLINE:
	            case SPACE:
	            case TAB:
	            case CR:
	            case FEED:
	                next = pos;
	                do {
	                    next += 1;
	                    code = css.charCodeAt(next);
	                    if (code === NEWLINE) {
	                        offset = next;
	                        line += 1;
	                    }
	                } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
	
	                tokens.push(['space', css.slice(pos, next)]);
	                pos = next - 1;
	                break;
	
	            case OPEN_SQUARE:
	                tokens.push(['[', '[', line, pos - offset]);
	                break;
	
	            case CLOSE_SQUARE:
	                tokens.push([']', ']', line, pos - offset]);
	                break;
	
	            case OPEN_CURLY:
	                tokens.push(['{', '{', line, pos - offset]);
	                break;
	
	            case CLOSE_CURLY:
	                tokens.push(['}', '}', line, pos - offset]);
	                break;
	
	            case COLON:
	                tokens.push([':', ':', line, pos - offset]);
	                break;
	
	            case SEMICOLON:
	                tokens.push([';', ';', line, pos - offset]);
	                break;
	
	            case OPEN_PARENTHESES:
	                prev = tokens.length ? tokens[tokens.length - 1][1] : '';
	                n = css.charCodeAt(pos + 1);
	                if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
	                    next = pos;
	                    do {
	                        escaped = false;
	                        next = css.indexOf(')', next + 1);
	                        if (next === -1) {
	                            if (ignore) {
	                                next = pos;
	                                break;
	                            } else {
	                                unclosed('bracket');
	                            }
	                        }
	                        escapePos = next;
	                        while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	                            escapePos -= 1;
	                            escaped = !escaped;
	                        }
	                    } while (escaped);
	
	                    tokens.push(['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                    pos = next;
	                } else {
	                    next = css.indexOf(')', pos + 1);
	                    content = css.slice(pos, next + 1);
	
	                    if (next === -1 || RE_BAD_BRACKET.test(content)) {
	                        tokens.push(['(', '(', line, pos - offset]);
	                    } else {
	                        tokens.push(['brackets', content, line, pos - offset, line, next - offset]);
	                        pos = next;
	                    }
	                }
	
	                break;
	
	            case CLOSE_PARENTHESES:
	                tokens.push([')', ')', line, pos - offset]);
	                break;
	
	            case SINGLE_QUOTE:
	            case DOUBLE_QUOTE:
	                quote = code === SINGLE_QUOTE ? '\'' : '"';
	                next = pos;
	                do {
	                    escaped = false;
	                    next = css.indexOf(quote, next + 1);
	                    if (next === -1) {
	                        if (ignore) {
	                            next = pos + 1;
	                            break;
	                        } else {
	                            unclosed('quote');
	                        }
	                    }
	                    escapePos = next;
	                    while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	                        escapePos -= 1;
	                        escaped = !escaped;
	                    }
	                } while (escaped);
	
	                content = css.slice(pos, next + 1);
	                lines = content.split('\n');
	                last = lines.length - 1;
	
	                if (last > 0) {
	                    nextLine = line + last;
	                    nextOffset = next - lines[last].length;
	                } else {
	                    nextLine = line;
	                    nextOffset = offset;
	                }
	
	                tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);
	
	                offset = nextOffset;
	                line = nextLine;
	                pos = next;
	                break;
	
	            case AT:
	                RE_AT_END.lastIndex = pos + 1;
	                RE_AT_END.test(css);
	                if (RE_AT_END.lastIndex === 0) {
	                    next = css.length - 1;
	                } else {
	                    next = RE_AT_END.lastIndex - 2;
	                }
	                tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                pos = next;
	                break;
	
	            case BACKSLASH:
	                next = pos;
	                escape = true;
	                while (css.charCodeAt(next + 1) === BACKSLASH) {
	                    next += 1;
	                    escape = !escape;
	                }
	                code = css.charCodeAt(next + 1);
	                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
	                    next += 1;
	                }
	                tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                pos = next;
	                break;
	
	            default:
	                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
	                    next = css.indexOf('*/', pos + 2) + 1;
	                    if (next === 0) {
	                        if (ignore) {
	                            next = css.length;
	                        } else {
	                            unclosed('comment');
	                        }
	                    }
	
	                    content = css.slice(pos, next + 1);
	                    lines = content.split('\n');
	                    last = lines.length - 1;
	
	                    if (last > 0) {
	                        nextLine = line + last;
	                        nextOffset = next - lines[last].length;
	                    } else {
	                        nextLine = line;
	                        nextOffset = offset;
	                    }
	
	                    tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset]);
	
	                    offset = nextOffset;
	                    line = nextLine;
	                    pos = next;
	                } else {
	                    RE_WORD_END.lastIndex = pos + 1;
	                    RE_WORD_END.test(css);
	                    if (RE_WORD_END.lastIndex === 0) {
	                        next = css.length - 1;
	                    } else {
	                        next = RE_WORD_END.lastIndex - 2;
	                    }
	
	                    tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                    pos = next;
	                }
	
	                break;
	        }
	
	        pos++;
	    }
	
	    return tokens;
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(56)
	  , ITERATOR  = __webpack_require__(6)('iterator')
	  , Iterators = __webpack_require__(48);
	module.exports = __webpack_require__(4).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['CloseCurlyDoubleQuote', [8221]], ['CloseCurlyQuote', [8217]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
	
	var alphaIndex = {};
	var charIndex = {};
	
	createIndexes(alphaIndex, charIndex);
	
	/**
	 * @constructor
	 */
	function Html5Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var chr;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1) === 'x' ?
	                parseInt(entity.substr(2).toLowerCase(), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                chr = String.fromCharCode(code);
	            }
	        } else {
	            chr = alphaIndex[entity];
	        }
	        return chr || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.decode = function(str) {
	    return new Html5Entities().decode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var charInfo = charIndex[str.charCodeAt(i)];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        result += str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encode = function(str) {
	    return new Html5Entities().encode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var charInfo = charIndex[c];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encodeNonUTF = function(str) {
	    return new Html5Entities().encodeNonUTF(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encodeNonASCII = function(str) {
	    return new Html5Entities().encodeNonASCII(str);
	 };
	
	/**
	 * @param {Object} alphaIndex Passed by reference.
	 * @param {Object} charIndex Passed by reference.
	 */
	function createIndexes(alphaIndex, charIndex) {
	    var i = ENTITIES.length;
	    var _results = [];
	    while (i--) {
	        var e = ENTITIES[i];
	        var alpha = e[0];
	        var chars = e[1];
	        var chr = chars[0];
	        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
	        var charInfo;
	        if (addChar) {
	            charInfo = charIndex[chr] = charIndex[chr] || {};
	        }
	        if (chars[1]) {
	            var chr2 = chars[1];
	            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
	            _results.push(addChar && (charInfo[chr2] = alpha));
	        } else {
	            alphaIndex[alpha] = String.fromCharCode(chr);
	            _results.push(addChar && (charInfo[''] = alpha));
	        }
	    }
	}
	
	module.exports = Html5Entities;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _taggedTemplateLiteral2 = __webpack_require__(8);
	
	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);
	
	var _keys = __webpack_require__(22);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  ']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sizes = {
	  giant: 1170,
	  desktop: 992,
	  tablet: 768,
	  btwnTabletAndMobile: 685,
	  mobile: 450
	};
	
	var mediaQuery = (0, _keys2.default)(sizes).reduce(function (accumulator, label) {
	  // use em in breakpoints to work properly cross-browser and support users
	  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
	  var emSize = sizes[label] / 16;
	  accumulator[label] = function () {
	    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
	  };
	  return accumulator;
	}, {});
	
	exports.default = mediaQuery;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL21lZGlhUXVlcnkuanMiXSwibmFtZXMiOlsic2l6ZXMiLCJnaWFudCIsImRlc2t0b3AiLCJ0YWJsZXQiLCJidHduVGFibGV0QW5kTW9iaWxlIiwibW9iaWxlIiwibWVkaWFRdWVyeSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwibGFiZWwiLCJlbVNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUTtBQUNaQyxTQUFPLElBREs7QUFFWkMsV0FBUyxHQUZHO0FBR1pDLFVBQVEsR0FISTtBQUlaQyx1QkFBcUIsR0FKVDtBQUtaQyxVQUFRO0FBTEksQ0FBZDs7QUFRQSxJQUFNQyxhQUFhLG9CQUFZTixLQUFaLEVBQW1CTyxNQUFuQixDQUEwQixVQUFDQyxXQUFELEVBQWNDLEtBQWQsRUFBd0I7QUFDbkU7QUFDQTtBQUNBLE1BQU1DLFNBQVNWLE1BQU1TLEtBQU4sSUFBZSxFQUE5QjtBQUNBRCxjQUFZQyxLQUFaLElBQXFCO0FBQUEsdURBQ0VDLE1BREYsRUFFZixpREFGZTtBQUFBLEdBQXJCO0FBS0EsU0FBT0YsV0FBUDtBQUNELENBVmtCLEVBVWhCLEVBVmdCLENBQW5COztrQkFZZUYsVSIsImZpbGUiOiJtZWRpYVF1ZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3Qgc2l6ZXMgPSB7XG4gIGdpYW50OiAxMTcwLFxuICBkZXNrdG9wOiA5OTIsXG4gIHRhYmxldDogNzY4LFxuICBidHduVGFibGV0QW5kTW9iaWxlOiA2ODUsXG4gIG1vYmlsZTogNDUwXG59XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBPYmplY3Qua2V5cyhzaXplcykucmVkdWNlKChhY2N1bXVsYXRvciwgbGFiZWwpID0+IHtcbiAgLy8gdXNlIGVtIGluIGJyZWFrcG9pbnRzIHRvIHdvcmsgcHJvcGVybHkgY3Jvc3MtYnJvd3NlciBhbmQgc3VwcG9ydCB1c2Vyc1xuICAvLyBjaGFuZ2luZyB0aGVpciBicm93c2VycyBmb250LXNpemU6IGh0dHBzOi8vemVsbHdrLmNvbS9ibG9nL21lZGlhLXF1ZXJ5LXVuaXRzL1xuICBjb25zdCBlbVNpemUgPSBzaXplc1tsYWJlbF0gLyAxNlxuICBhY2N1bXVsYXRvcltsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzYFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgfVxuICBgXG4gIHJldHVybiBhY2N1bXVsYXRvclxufSwge30pXG5cbmV4cG9ydCBkZWZhdWx0IG1lZGlhUXVlcnkiXX0=
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/mediaQuery"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/mediaQuery") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(83);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423
	
	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;
	
	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);
	
	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);
	
	    h = Umul32(h, m);
	    h ^= k;
	
	    currentIndex += 4;
	    length -= 4;
	  }
	
	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;
	
	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;
	
	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }
	
	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}
	
	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}
	
	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper to capitalize strings
	
	exports.default = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(100);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	  
	  if (isObjectObject(o) === false) return false;
	  
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	  
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	  
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	  
	  // Most likely a plain Object
	  return true;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parse = __webpack_require__(36);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	var _postcssNested = __webpack_require__(35);
	
	var _postcssNested2 = _interopRequireDefault(_postcssNested);
	
	var _flatten = __webpack_require__(14);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _StyleSheet = __webpack_require__(33);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(1).PropTypes.any;
	
	var ComponentStyle = function () {
	  function ComponentStyle(rules, selector) {
	    _classCallCheck(this, ComponentStyle);
	
	    this.rules = rules;
	    this.selector = selector;
	  }
	
	  _createClass(ComponentStyle, [{
	    key: 'generateAndInject',
	    value: function generateAndInject() {
	      if (!_StyleSheet2.default.injected) _StyleSheet2.default.inject();
	      var flatCSS = (0, _flatten2.default)(this.rules).join('');
	      if (this.selector) {
	        flatCSS = this.selector + ' {' + flatCSS + '\n}';
	      }
	      var root = (0, _parse2.default)(flatCSS);
	      (0, _postcssNested2.default)(root);
	      _StyleSheet2.default.insert(root.toResult().css, { global: true });
	    }
	  }]);
	
	  return ComponentStyle;
	}();
	
	exports.default = ComponentStyle;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	/* Wraps glamor's stylesheet and exports a singleton for styled components
	to use. */
	
	
	var _sheet = __webpack_require__(115);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_GlamorRule = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_GlamorRule || __webpack_require__(1).PropTypes.any;
	
	var StyleSheet = function () {
	  function StyleSheet() {
	    _classCallCheck(this, StyleSheet);
	
	    /* Don't specify a maxLength for the global sheet, since these rules
	     * are defined at initialization and should remain static after that */
	    this.globalStyleSheet = new _sheet.StyleSheet({ speedy: false });
	    this.componentStyleSheet = new _sheet.StyleSheet({ speedy: false, maxLength: 40 });
	  }
	
	  _createClass(StyleSheet, [{
	    key: 'inject',
	    value: function inject() {
	      this.globalStyleSheet.inject();
	      this.componentStyleSheet.inject();
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
	      if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
	    }
	  }, {
	    key: 'insert',
	    value: function insert(rule) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { global: false };
	
	      var sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet;
	      return sheet.insert(rule);
	    }
	  }, {
	    key: 'rules',
	    value: function rules() {
	      return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules());
	    }
	  }, {
	    key: 'injected',
	    get: function get() {
	      return this.globalStyleSheet.injected && this.componentStyleSheet.injected;
	    }
	  }]);
	
	  return StyleSheet;
	}();
	
	/* Export stylesheet as a singleton class */
	
	
	exports.default = new StyleSheet();
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(module.exports, "babelPluginFlowReactPropTypes_proptype_Broadcast", {
	  value: __webpack_require__(1).PropTypes.shape({
	    publish: __webpack_require__(1).PropTypes.func.isRequired,
	    subscribe: __webpack_require__(1).PropTypes.func.isRequired
	  })
	});
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */
	
	var createBroadcast = function createBroadcast(initialValue) {
	  var listeners = [];
	  var currentValue = initialValue;
	
	  return {
	    publish: function publish(value) {
	      currentValue = value;
	      listeners.forEach(function (listener) {
	        return listener(currentValue);
	      });
	    },
	    subscribe: function subscribe(listener) {
	      listeners.push(listener);
	
	      // Publish to this subscriber once immediately.
	      listener(currentValue);
	
	      return function () {
	        listeners = listeners.filter(function (item) {
	          return item !== listener;
	        });
	      };
	    }
	  };
	};
	
	exports.default = createBroadcast;
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function selectors(parent, node) {
	  var result = [];
	  parent.selectors.forEach(function (i) {
	    node.selectors.forEach(function (j) {
	      if (j.indexOf('&') === -1) {
	        result.push(i + ' ' + j);
	      } else {
	        result.push(j.replace(/&/g, i));
	      }
	    });
	  });
	  return result;
	}
	
	function pickComment(comment, after) {
	  if (comment && comment.type === 'comment') {
	    return comment.moveAfter(after);
	  } else {
	    return after;
	  }
	}
	
	function atruleChilds(rule, atrule) {
	  var children = [];
	  atrule.each(function (child) {
	    if (child.type === 'comment') {
	      children.push(child);
	    }
	    if (child.type === 'decl') {
	      children.push(child);
	    } else if (child.type === 'rule') {
	      child.selectors = selectors(rule, child);
	    } else if (child.type === 'atrule') {
	      atruleChilds(rule, child);
	    }
	  });
	  if (children.length) {
	    var clone = rule.clone({ nodes: [] });
	    for (var i = 0; i < children.length; i++) {
	      children[i].moveTo(clone);
	    }atrule.prepend(clone);
	  }
	}
	
	function processRule(rule, bubble) {
	  var unwrapped = false;
	  var after = rule;
	  rule.each(function (child) {
	    if (child.type === 'rule') {
	      unwrapped = true;
	      child.selectors = selectors(rule, child);
	      after = pickComment(child.prev(), after);
	      after = child.moveAfter(after);
	    } else if (child.type === 'atrule') {
	      if (bubble.indexOf(child.name) !== -1) {
	        unwrapped = true;
	        atruleChilds(rule, child);
	        after = pickComment(child.prev(), after);
	        after = child.moveAfter(after);
	      }
	    }
	  });
	  if (unwrapped) {
	    rule.raws.semicolon = true;
	    if (rule.nodes.length === 0) rule.remove();
	  }
	}
	
	var bubble = ['media', 'supports', 'document'];
	
	var process = function process(node) {
	  node.each(function (child) {
	    if (child.type === 'rule') {
	      processRule(child, bubble);
	    } else if (child.type === 'atrule') {
	      process(child);
	    }
	  });
	};
	
	exports.default = process;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = safeParse;
	
	var _input = __webpack_require__(17);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _safeParser = __webpack_require__(116);
	
	var _safeParser2 = _interopRequireDefault(_safeParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function safeParse(css, opts) {
	    var input = new _input2.default(css, opts);
	
	    var parser = new _safeParser2.default(input);
	    parser.tokenize();
	    parser.loop();
	
	    return parser.root;
	}
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _supportsColor = __webpack_require__(122);
	
	var _supportsColor2 = _interopRequireDefault(_supportsColor);
	
	var _terminalHighlight = __webpack_require__(120);
	
	var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The CSS parser throws this error for broken CSS.
	 *
	 * Custom parsers can throw this error for broken custom syntax using
	 * the {@link Node#error} method.
	 *
	 * PostCSS will use the input source map to detect the original error location.
	 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
	 * PostCSS will show the original position in the Sass file.
	 *
	 * If you need the position in the PostCSS input
	 * (e.g., to debug the previous compiler), use `error.input.file`.
	 *
	 * @example
	 * // Catching and checking syntax error
	 * try {
	 *   postcss.parse('a{')
	 * } catch (error) {
	 *   if ( error.name === 'CssSyntaxError' ) {
	 *     error //=> CssSyntaxError
	 *   }
	 * }
	 *
	 * @example
	 * // Raising error from plugin
	 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
	 */
	var CssSyntaxError = function () {
	
	    /**
	     * @param {string} message  - error message
	     * @param {number} [line]   - source line of the error
	     * @param {number} [column] - source column of the error
	     * @param {string} [source] - source code of the broken file
	     * @param {string} [file]   - absolute path to the broken file
	     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
	     */
	    function CssSyntaxError(message, line, column, source, file, plugin) {
	        _classCallCheck(this, CssSyntaxError);
	
	        /**
	         * @member {string} - Always equal to `'CssSyntaxError'`. You should
	         *                    always check error type
	         *                    by `error.name === 'CssSyntaxError'` instead of
	         *                    `error instanceof CssSyntaxError`, because
	         *                    npm could have several PostCSS versions.
	         *
	         * @example
	         * if ( error.name === 'CssSyntaxError' ) {
	         *   error //=> CssSyntaxError
	         * }
	         */
	        this.name = 'CssSyntaxError';
	        /**
	         * @member {string} - Error message.
	         *
	         * @example
	         * error.message //=> 'Unclosed block'
	         */
	        this.reason = message;
	
	        if (file) {
	            /**
	             * @member {string} - Absolute path to the broken file.
	             *
	             * @example
	             * error.file       //=> 'a.sass'
	             * error.input.file //=> 'a.css'
	             */
	            this.file = file;
	        }
	        if (source) {
	            /**
	             * @member {string} - Source code of the broken file.
	             *
	             * @example
	             * error.source       //=> 'a { b {} }'
	             * error.input.column //=> 'a b { }'
	             */
	            this.source = source;
	        }
	        if (plugin) {
	            /**
	             * @member {string} - Plugin name, if error came from plugin.
	             *
	             * @example
	             * error.plugin //=> 'postcss-vars'
	             */
	            this.plugin = plugin;
	        }
	        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
	            /**
	             * @member {number} - Source line of the error.
	             *
	             * @example
	             * error.line       //=> 2
	             * error.input.line //=> 4
	             */
	            this.line = line;
	            /**
	             * @member {number} - Source column of the error.
	             *
	             * @example
	             * error.column       //=> 1
	             * error.input.column //=> 4
	             */
	            this.column = column;
	        }
	
	        this.setMessage();
	
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, CssSyntaxError);
	        }
	    }
	
	    _createClass(CssSyntaxError, [{
	        key: 'setMessage',
	        value: function setMessage() {
	            /**
	             * @member {string} - Full error text in the GNU error format
	             *                    with plugin, file, line and column.
	             *
	             * @example
	             * error.message //=> 'a.css:1:1: Unclosed block'
	             */
	            this.message = this.plugin ? this.plugin + ': ' : '';
	            this.message += this.file ? this.file : '<css input>';
	            if (typeof this.line !== 'undefined') {
	                this.message += ':' + this.line + ':' + this.column;
	            }
	            this.message += ': ' + this.reason;
	        }
	
	        /**
	         * Returns a few lines of CSS source that caused the error.
	         *
	         * If the CSS has an input source map without `sourceContent`,
	         * this method will return an empty string.
	         *
	         * @param {boolean} [color] whether arrow will be colored red by terminal
	         *                          color codes. By default, PostCSS will detect
	         *                          color support by `process.stdout.isTTY`
	         *                          and `process.env.NODE_DISABLE_COLORS`.
	         *
	         * @example
	         * error.showSourceCode() //=> "  4 | }
	         *                        //      5 | a {
	         *                        //    > 6 |   bad
	         *                        //        |   ^
	         *                        //      7 | }
	         *                        //      8 | b {"
	         *
	         * @return {string} few lines of CSS source that caused the error
	         */
	
	    }, {
	        key: 'showSourceCode',
	        value: function showSourceCode(color) {
	            var _this = this;
	
	            if (!this.source) return '';
	
	            var css = this.source;
	            if (typeof color === 'undefined') color = _supportsColor2.default;
	            if (color) css = (0, _terminalHighlight2.default)(css);
	
	            var lines = css.split(/\r?\n/);
	            var start = Math.max(this.line - 3, 0);
	            var end = Math.min(this.line + 2, lines.length);
	
	            var maxWidth = String(end).length;
	
	            return lines.slice(start, end).map(function (line, index) {
	                var number = start + 1 + index;
	                var padded = (' ' + number).slice(-maxWidth);
	                var gutter = ' ' + padded + ' | ';
	                if (number === _this.line) {
	                    var spacing = gutter.replace(/\d/g, ' ') + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
	                    return '>' + gutter + line + '\n ' + spacing + '^';
	                } else {
	                    return ' ' + gutter + line;
	                }
	            }).join('\n');
	        }
	
	        /**
	         * Returns error position, message and source code of the broken part.
	         *
	         * @example
	         * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
	         *                  //    > 1 | a {
	         *                  //        | ^"
	         *
	         * @return {string} error position, message and source code
	         */
	
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var code = this.showSourceCode();
	            if (code) {
	                code = '\n\n' + code + '\n';
	            }
	            return this.name + ': ' + this.message + code;
	        }
	    }, {
	        key: 'generated',
	        get: function get() {
	            (0, _warnOnce2.default)('CssSyntaxError#generated is depreacted. Use input instead.');
	            return this.input;
	        }
	
	        /**
	         * @memberof CssSyntaxError#
	         * @member {Input} input - Input object with PostCSS internal information
	         *                         about input file. If input has source map
	         *                         from previous tool, PostCSS will use origin
	         *                         (for example, Sass) source. You can use this
	         *                         object to get PostCSS input source.
	         *
	         * @example
	         * error.input.file //=> 'a.css'
	         * error.file       //=> 'a.sass'
	         */
	
	    }]);
	
	    return CssSyntaxError;
	}();
	
	exports.default = CssSyntaxError;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _node = __webpack_require__(18);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Represents a CSS declaration.
	 *
	 * @extends Node
	 *
	 * @example
	 * const root = postcss.parse('a { color: black }');
	 * const decl = root.first.first;
	 * decl.type       //=> 'decl'
	 * decl.toString() //=> ' color: black'
	 */
	var Declaration = function (_Node) {
	    _inherits(Declaration, _Node);
	
	    function Declaration(defaults) {
	        _classCallCheck(this, Declaration);
	
	        var _this = _possibleConstructorReturn(this, (Declaration.__proto__ || Object.getPrototypeOf(Declaration)).call(this, defaults));
	
	        _this.type = 'decl';
	        return _this;
	    }
	
	    _createClass(Declaration, [{
	        key: '_value',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
	            return this.raws.value;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
	            this.raws.value = val;
	        }
	    }, {
	        key: '_important',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
	            return this.raws.important;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
	            this.raws.important = val;
	        }
	
	        /**
	         * @memberof Declaration#
	         * @member {string} prop - the declaration’s property name
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * const decl = root.first.first;
	         * decl.prop //=> 'color'
	         */
	
	        /**
	         * @memberof Declaration#
	         * @member {string} value - the declaration’s value
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * const decl = root.first.first;
	         * decl.value //=> 'black'
	         */
	
	        /**
	         * @memberof Declaration#
	         * @member {boolean} important - `true` if the declaration
	         *                               has an !important annotation.
	         *
	         * @example
	         * const root = postcss.parse('a { color: black !important; color: red }');
	         * root.first.first.important //=> true
	         * root.first.last.important  //=> undefined
	         */
	
	        /**
	         * @memberof Declaration#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `important`: the content of the important statement,
	         *   if it is not just `!important`.
	         *
	         * PostCSS cleans declaration from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '\n  ', between: ':' }
	         */
	
	    }]);
	
	    return Declaration;
	}(_node2.default);
	
	exports.default = Declaration;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _stringify2 = __webpack_require__(43);
	
	var _stringify3 = _interopRequireDefault(_stringify2);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _result = __webpack_require__(119);
	
	var _result2 = _interopRequireDefault(_result);
	
	var _parse = __webpack_require__(40);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function isPromise(obj) {
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.then === 'function';
	}
	
	/**
	 * @callback onFulfilled
	 * @param {Result} result
	 */
	
	/**
	 * @callback onRejected
	 * @param {Error} error
	 */
	
	/**
	 * A Promise proxy for the result of PostCSS transformations.
	 *
	 * A `LazyResult` instance is returned by {@link Processor#process}.
	 *
	 * @example
	 * const lazy = postcss([cssnext]).process(css);
	 */
	
	var LazyResult = function () {
	    function LazyResult(processor, css, opts) {
	        _classCallCheck(this, LazyResult);
	
	        this.stringified = false;
	        this.processed = false;
	
	        var root = void 0;
	        if ((typeof css === 'undefined' ? 'undefined' : _typeof(css)) === 'object' && css.type === 'root') {
	            root = css;
	        } else if (css instanceof LazyResult || css instanceof _result2.default) {
	            root = css.root;
	            if (css.map) {
	                if (typeof opts.map === 'undefined') opts.map = {};
	                if (!opts.map.inline) opts.map.inline = false;
	                opts.map.prev = css.map;
	            }
	        } else {
	            var parser = _parse2.default;
	            if (opts.syntax) parser = opts.syntax.parse;
	            if (opts.parser) parser = opts.parser;
	            if (parser.parse) parser = parser.parse;
	
	            try {
	                root = parser(css, opts);
	            } catch (error) {
	                this.error = error;
	            }
	        }
	
	        this.result = new _result2.default(processor, root, opts);
	    }
	
	    /**
	     * Returns a {@link Processor} instance, which will be used
	     * for CSS transformations.
	     * @type {Processor}
	     */
	
	
	    _createClass(LazyResult, [{
	        key: 'warnings',
	
	
	        /**
	         * Processes input CSS through synchronous plugins
	         * and calls {@link Result#warnings()}.
	         *
	         * @return {Warning[]} warnings from plugins
	         */
	        value: function warnings() {
	            return this.sync().warnings();
	        }
	
	        /**
	         * Alias for the {@link LazyResult#css} property.
	         *
	         * @example
	         * lazy + '' === lazy.css;
	         *
	         * @return {string} output CSS
	         */
	
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.css;
	        }
	
	        /**
	         * Processes input CSS through synchronous and asynchronous plugins
	         * and calls `onFulfilled` with a Result instance. If a plugin throws
	         * an error, the `onRejected` callback will be executed.
	         *
	         * It implements standard Promise API.
	         *
	         * @param {onFulfilled} onFulfilled - callback will be executed
	         *                                    when all plugins will finish work
	         * @param {onRejected}  onRejected  - callback will be execited on any error
	         *
	         * @return {Promise} Promise API to make queue
	         *
	         * @example
	         * postcss([cssnext]).process(css).then(result => {
	         *   console.log(result.css);
	         * });
	         */
	
	    }, {
	        key: 'then',
	        value: function then(onFulfilled, onRejected) {
	            return this.async().then(onFulfilled, onRejected);
	        }
	
	        /**
	         * Processes input CSS through synchronous and asynchronous plugins
	         * and calls onRejected for each error thrown in any plugin.
	         *
	         * It implements standard Promise API.
	         *
	         * @param {onRejected} onRejected - callback will be execited on any error
	         *
	         * @return {Promise} Promise API to make queue
	         *
	         * @example
	         * postcss([cssnext]).process(css).then(result => {
	         *   console.log(result.css);
	         * }).catch(error => {
	         *   console.error(error);
	         * });
	         */
	
	    }, {
	        key: 'catch',
	        value: function _catch(onRejected) {
	            return this.async().catch(onRejected);
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(error, plugin) {
	            try {
	                this.error = error;
	                if (error.name === 'CssSyntaxError' && !error.plugin) {
	                    error.plugin = plugin.postcssPlugin;
	                    error.setMessage();
	                } else if (plugin.postcssVersion) {
	                    var pluginName = plugin.postcssPlugin;
	                    var pluginVer = plugin.postcssVersion;
	                    var runtimeVer = this.result.processor.version;
	                    var a = pluginVer.split('.');
	                    var b = runtimeVer.split('.');
	
	                    if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
	                        (0, _warnOnce2.default)('Your current PostCSS version ' + 'is ' + runtimeVer + ', but ' + pluginName + ' ' + 'uses ' + pluginVer + '. Perhaps this is ' + 'the source of the error below.');
	                    }
	                }
	            } catch (err) {
	                if (console && console.error) console.error(err);
	            }
	        }
	    }, {
	        key: 'asyncTick',
	        value: function asyncTick(resolve, reject) {
	            var _this = this;
	
	            if (this.plugin >= this.processor.plugins.length) {
	                this.processed = true;
	                return resolve();
	            }
	
	            try {
	                var plugin = this.processor.plugins[this.plugin];
	                var promise = this.run(plugin);
	                this.plugin += 1;
	
	                if (isPromise(promise)) {
	                    promise.then(function () {
	                        _this.asyncTick(resolve, reject);
	                    }).catch(function (error) {
	                        _this.handleError(error, plugin);
	                        _this.processed = true;
	                        reject(error);
	                    });
	                } else {
	                    this.asyncTick(resolve, reject);
	                }
	            } catch (error) {
	                this.processed = true;
	                reject(error);
	            }
	        }
	    }, {
	        key: 'async',
	        value: function async() {
	            var _this2 = this;
	
	            if (this.processed) {
	                return new Promise(function (resolve, reject) {
	                    if (_this2.error) {
	                        reject(_this2.error);
	                    } else {
	                        resolve(_this2.stringify());
	                    }
	                });
	            }
	            if (this.processing) {
	                return this.processing;
	            }
	
	            this.processing = new Promise(function (resolve, reject) {
	                if (_this2.error) return reject(_this2.error);
	                _this2.plugin = 0;
	                _this2.asyncTick(resolve, reject);
	            }).then(function () {
	                _this2.processed = true;
	                return _this2.stringify();
	            });
	
	            return this.processing;
	        }
	    }, {
	        key: 'sync',
	        value: function sync() {
	            var _this3 = this;
	
	            if (this.processed) return this.result;
	            this.processed = true;
	
	            if (this.processing) {
	                throw new Error('Use process(css).then(cb) to work with async plugins');
	            }
	
	            if (this.error) throw this.error;
	
	            this.result.processor.plugins.forEach(function (plugin) {
	                var promise = _this3.run(plugin);
	                if (isPromise(promise)) {
	                    throw new Error('Use process(css).then(cb) to work with async plugins');
	                }
	            });
	
	            return this.result;
	        }
	    }, {
	        key: 'run',
	        value: function run(plugin) {
	            this.result.lastPlugin = plugin;
	
	            try {
	                return plugin(this.result.root, this.result);
	            } catch (error) {
	                this.handleError(error, plugin);
	                throw error;
	            }
	        }
	    }, {
	        key: 'stringify',
	        value: function stringify() {
	            if (this.stringified) return this.result;
	            this.stringified = true;
	
	            this.sync();
	
	            var opts = this.result.opts;
	            var str = _stringify3.default;
	            if (opts.syntax) str = opts.syntax.stringify;
	            if (opts.stringifier) str = opts.stringifier;
	            if (str.stringify) str = str.stringify;
	
	            var result = '';
	            str(this.root, function (i) {
	                result += i;
	            });
	            this.result.css = result;
	
	            return this.result;
	        }
	    }, {
	        key: 'processor',
	        get: function get() {
	            return this.result.processor;
	        }
	
	        /**
	         * Options from the {@link Processor#process} call.
	         * @type {processOptions}
	         */
	
	    }, {
	        key: 'opts',
	        get: function get() {
	            return this.result.opts;
	        }
	
	        /**
	         * Processes input CSS through synchronous plugins, converts `Root`
	         * to a CSS string and returns {@link Result#css}.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {string}
	         * @see Result#css
	         */
	
	    }, {
	        key: 'css',
	        get: function get() {
	            return this.stringify().css;
	        }
	
	        /**
	         * An alias for the `css` property. Use it with syntaxes
	         * that generate non-CSS output.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {string}
	         * @see Result#content
	         */
	
	    }, {
	        key: 'content',
	        get: function get() {
	            return this.stringify().content;
	        }
	
	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#map}.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {SourceMapGenerator}
	         * @see Result#map
	         */
	
	    }, {
	        key: 'map',
	        get: function get() {
	            return this.stringify().map;
	        }
	
	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#root}.
	         *
	         * This property will only work with synchronous plugins. If the processor
	         * contains any asynchronous plugins it will throw an error.
	         *
	         * This is why this method is only for debug purpose,
	         * you should always use {@link LazyResult#then}.
	         *
	         * @type {Root}
	         * @see Result#root
	         */
	
	    }, {
	        key: 'root',
	        get: function get() {
	            return this.sync().root;
	        }
	
	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#messages}.
	         *
	         * This property will only work with synchronous plugins. If the processor
	         * contains any asynchronous plugins it will throw an error.
	         *
	         * This is why this method is only for debug purpose,
	         * you should always use {@link LazyResult#then}.
	         *
	         * @type {Message[]}
	         * @see Result#messages
	         */
	
	    }, {
	        key: 'messages',
	        get: function get() {
	            return this.sync().messages;
	        }
	    }]);
	
	    return LazyResult;
	}();
	
	exports.default = LazyResult;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parse;
	
	var _parser = __webpack_require__(41);
	
	var _parser2 = _interopRequireDefault(_parser);
	
	var _input = __webpack_require__(17);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function parse(css, opts) {
	    if (opts && opts.safe) {
	        throw new Error('Option safe was removed. ' + 'Use parser: require("postcss-safe-parser")');
	    }
	
	    var input = new _input2.default(css, opts);
	
	    var parser = new _parser2.default(input);
	    try {
	        parser.tokenize();
	        parser.loop();
	    } catch (e) {
	        if (e.name === 'CssSyntaxError' && opts && opts.from) {
	            if (/\.scss$/i.test(opts.from)) {
	                e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
	            } else if (/\.less$/i.test(opts.from)) {
	                e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
	            }
	        }
	        throw e;
	    }
	
	    return parser.root;
	}
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _declaration = __webpack_require__(38);
	
	var _declaration2 = _interopRequireDefault(_declaration);
	
	var _tokenize = __webpack_require__(21);
	
	var _tokenize2 = _interopRequireDefault(_tokenize);
	
	var _comment = __webpack_require__(16);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _atRule = __webpack_require__(15);
	
	var _atRule2 = _interopRequireDefault(_atRule);
	
	var _root = __webpack_require__(19);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _rule = __webpack_require__(20);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Parser = function () {
	    function Parser(input) {
	        _classCallCheck(this, Parser);
	
	        this.input = input;
	
	        this.pos = 0;
	        this.root = new _root2.default();
	        this.current = this.root;
	        this.spaces = '';
	        this.semicolon = false;
	
	        this.root.source = { input: input, start: { line: 1, column: 1 } };
	    }
	
	    _createClass(Parser, [{
	        key: 'tokenize',
	        value: function tokenize() {
	            this.tokens = (0, _tokenize2.default)(this.input);
	        }
	    }, {
	        key: 'loop',
	        value: function loop() {
	            var token = void 0;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];
	
	                switch (token[0]) {
	
	                    case 'space':
	                    case ';':
	                        this.spaces += token[1];
	                        break;
	
	                    case '}':
	                        this.end(token);
	                        break;
	
	                    case 'comment':
	                        this.comment(token);
	                        break;
	
	                    case 'at-word':
	                        this.atrule(token);
	                        break;
	
	                    case '{':
	                        this.emptyRule(token);
	                        break;
	
	                    default:
	                        this.other();
	                        break;
	                }
	
	                this.pos += 1;
	            }
	            this.endFile();
	        }
	    }, {
	        key: 'comment',
	        value: function comment(token) {
	            var node = new _comment2.default();
	            this.init(node, token[2], token[3]);
	            node.source.end = { line: token[4], column: token[5] };
	
	            var text = token[1].slice(2, -2);
	            if (/^\s*$/.test(text)) {
	                node.text = '';
	                node.raws.left = text;
	                node.raws.right = '';
	            } else {
	                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
	                node.text = match[2];
	                node.raws.left = match[1];
	                node.raws.right = match[3];
	            }
	        }
	    }, {
	        key: 'emptyRule',
	        value: function emptyRule(token) {
	            var node = new _rule2.default();
	            this.init(node, token[2], token[3]);
	            node.selector = '';
	            node.raws.between = '';
	            this.current = node;
	        }
	    }, {
	        key: 'other',
	        value: function other() {
	            var token = void 0;
	            var end = false;
	            var type = null;
	            var colon = false;
	            var bracket = null;
	            var brackets = [];
	
	            var start = this.pos;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];
	                type = token[0];
	
	                if (type === '(' || type === '[') {
	                    if (!bracket) bracket = token;
	                    brackets.push(type === '(' ? ')' : ']');
	                } else if (brackets.length === 0) {
	                    if (type === ';') {
	                        if (colon) {
	                            this.decl(this.tokens.slice(start, this.pos + 1));
	                            return;
	                        } else {
	                            break;
	                        }
	                    } else if (type === '{') {
	                        this.rule(this.tokens.slice(start, this.pos + 1));
	                        return;
	                    } else if (type === '}') {
	                        this.pos -= 1;
	                        end = true;
	                        break;
	                    } else if (type === ':') {
	                        colon = true;
	                    }
	                } else if (type === brackets[brackets.length - 1]) {
	                    brackets.pop();
	                    if (brackets.length === 0) bracket = null;
	                }
	
	                this.pos += 1;
	            }
	            if (this.pos === this.tokens.length) {
	                this.pos -= 1;
	                end = true;
	            }
	
	            if (brackets.length > 0) this.unclosedBracket(bracket);
	
	            if (end && colon) {
	                while (this.pos > start) {
	                    token = this.tokens[this.pos][0];
	                    if (token !== 'space' && token !== 'comment') break;
	                    this.pos -= 1;
	                }
	                this.decl(this.tokens.slice(start, this.pos + 1));
	                return;
	            }
	
	            this.unknownWord(start);
	        }
	    }, {
	        key: 'rule',
	        value: function rule(tokens) {
	            tokens.pop();
	
	            var node = new _rule2.default();
	            this.init(node, tokens[0][2], tokens[0][3]);
	
	            node.raws.between = this.spacesFromEnd(tokens);
	            this.raw(node, 'selector', tokens);
	            this.current = node;
	        }
	    }, {
	        key: 'decl',
	        value: function decl(tokens) {
	            var node = new _declaration2.default();
	            this.init(node);
	
	            var last = tokens[tokens.length - 1];
	            if (last[0] === ';') {
	                this.semicolon = true;
	                tokens.pop();
	            }
	            if (last[4]) {
	                node.source.end = { line: last[4], column: last[5] };
	            } else {
	                node.source.end = { line: last[2], column: last[3] };
	            }
	
	            while (tokens[0][0] !== 'word') {
	                node.raws.before += tokens.shift()[1];
	            }
	            node.source.start = { line: tokens[0][2], column: tokens[0][3] };
	
	            node.prop = '';
	            while (tokens.length) {
	                var type = tokens[0][0];
	                if (type === ':' || type === 'space' || type === 'comment') {
	                    break;
	                }
	                node.prop += tokens.shift()[1];
	            }
	
	            node.raws.between = '';
	
	            var token = void 0;
	            while (tokens.length) {
	                token = tokens.shift();
	
	                if (token[0] === ':') {
	                    node.raws.between += token[1];
	                    break;
	                } else {
	                    node.raws.between += token[1];
	                }
	            }
	
	            if (node.prop[0] === '_' || node.prop[0] === '*') {
	                node.raws.before += node.prop[0];
	                node.prop = node.prop.slice(1);
	            }
	            node.raws.between += this.spacesFromStart(tokens);
	            this.precheckMissedSemicolon(tokens);
	
	            for (var i = tokens.length - 1; i > 0; i--) {
	                token = tokens[i];
	                if (token[1] === '!important') {
	                    node.important = true;
	                    var string = this.stringFrom(tokens, i);
	                    string = this.spacesFromEnd(tokens) + string;
	                    if (string !== ' !important') node.raws.important = string;
	                    break;
	                } else if (token[1] === 'important') {
	                    var cache = tokens.slice(0);
	                    var str = '';
	                    for (var j = i; j > 0; j--) {
	                        var _type = cache[j][0];
	                        if (str.trim().indexOf('!') === 0 && _type !== 'space') {
	                            break;
	                        }
	                        str = cache.pop()[1] + str;
	                    }
	                    if (str.trim().indexOf('!') === 0) {
	                        node.important = true;
	                        node.raws.important = str;
	                        tokens = cache;
	                    }
	                }
	
	                if (token[0] !== 'space' && token[0] !== 'comment') {
	                    break;
	                }
	            }
	
	            this.raw(node, 'value', tokens);
	
	            if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
	        }
	    }, {
	        key: 'atrule',
	        value: function atrule(token) {
	            var node = new _atRule2.default();
	            node.name = token[1].slice(1);
	            if (node.name === '') {
	                this.unnamedAtrule(node, token);
	            }
	            this.init(node, token[2], token[3]);
	
	            var last = false;
	            var open = false;
	            var params = [];
	
	            this.pos += 1;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];
	
	                if (token[0] === ';') {
	                    node.source.end = { line: token[2], column: token[3] };
	                    this.semicolon = true;
	                    break;
	                } else if (token[0] === '{') {
	                    open = true;
	                    break;
	                } else if (token[0] === '}') {
	                    this.end(token);
	                    break;
	                } else {
	                    params.push(token);
	                }
	
	                this.pos += 1;
	            }
	            if (this.pos === this.tokens.length) {
	                last = true;
	            }
	
	            node.raws.between = this.spacesFromEnd(params);
	            if (params.length) {
	                node.raws.afterName = this.spacesFromStart(params);
	                this.raw(node, 'params', params);
	                if (last) {
	                    token = params[params.length - 1];
	                    node.source.end = { line: token[4], column: token[5] };
	                    this.spaces = node.raws.between;
	                    node.raws.between = '';
	                }
	            } else {
	                node.raws.afterName = '';
	                node.params = '';
	            }
	
	            if (open) {
	                node.nodes = [];
	                this.current = node;
	            }
	        }
	    }, {
	        key: 'end',
	        value: function end(token) {
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.semicolon = false;
	
	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	            this.spaces = '';
	
	            if (this.current.parent) {
	                this.current.source.end = { line: token[2], column: token[3] };
	                this.current = this.current.parent;
	            } else {
	                this.unexpectedClose(token);
	            }
	        }
	    }, {
	        key: 'endFile',
	        value: function endFile() {
	            if (this.current.parent) this.unclosedBlock();
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	        }
	
	        // Helpers
	
	    }, {
	        key: 'init',
	        value: function init(node, line, column) {
	            this.current.push(node);
	
	            node.source = { start: { line: line, column: column }, input: this.input };
	            node.raws.before = this.spaces;
	            this.spaces = '';
	            if (node.type !== 'comment') this.semicolon = false;
	        }
	    }, {
	        key: 'raw',
	        value: function raw(node, prop, tokens) {
	            var token = void 0,
	                type = void 0;
	            var length = tokens.length;
	            var value = '';
	            var clean = true;
	            for (var i = 0; i < length; i += 1) {
	                token = tokens[i];
	                type = token[0];
	                if (type === 'comment' || type === 'space' && i === length - 1) {
	                    clean = false;
	                } else {
	                    value += token[1];
	                }
	            }
	            if (!clean) {
	                var raw = tokens.reduce(function (all, i) {
	                    return all + i[1];
	                }, '');
	                node.raws[prop] = { value: value, raw: raw };
	            }
	            node[prop] = value;
	        }
	    }, {
	        key: 'spacesFromEnd',
	        value: function spacesFromEnd(tokens) {
	            var lastTokenType = void 0;
	            var spaces = '';
	            while (tokens.length) {
	                lastTokenType = tokens[tokens.length - 1][0];
	                if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
	                spaces = tokens.pop()[1] + spaces;
	            }
	            return spaces;
	        }
	    }, {
	        key: 'spacesFromStart',
	        value: function spacesFromStart(tokens) {
	            var next = void 0;
	            var spaces = '';
	            while (tokens.length) {
	                next = tokens[0][0];
	                if (next !== 'space' && next !== 'comment') break;
	                spaces += tokens.shift()[1];
	            }
	            return spaces;
	        }
	    }, {
	        key: 'stringFrom',
	        value: function stringFrom(tokens, from) {
	            var result = '';
	            for (var i = from; i < tokens.length; i++) {
	                result += tokens[i][1];
	            }
	            tokens.splice(from, tokens.length - from);
	            return result;
	        }
	    }, {
	        key: 'colon',
	        value: function colon(tokens) {
	            var brackets = 0;
	            var token = void 0,
	                type = void 0,
	                prev = void 0;
	            for (var i = 0; i < tokens.length; i++) {
	                token = tokens[i];
	                type = token[0];
	
	                if (type === '(') {
	                    brackets += 1;
	                } else if (type === ')') {
	                    brackets -= 1;
	                } else if (brackets === 0 && type === ':') {
	                    if (!prev) {
	                        this.doubleColon(token);
	                    } else if (prev[0] === 'word' && prev[1] === 'progid') {
	                        continue;
	                    } else {
	                        return i;
	                    }
	                }
	
	                prev = token;
	            }
	            return false;
	        }
	
	        // Errors
	
	    }, {
	        key: 'unclosedBracket',
	        value: function unclosedBracket(bracket) {
	            throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
	        }
	    }, {
	        key: 'unknownWord',
	        value: function unknownWord(start) {
	            var token = this.tokens[start];
	            throw this.input.error('Unknown word', token[2], token[3]);
	        }
	    }, {
	        key: 'unexpectedClose',
	        value: function unexpectedClose(token) {
	            throw this.input.error('Unexpected }', token[2], token[3]);
	        }
	    }, {
	        key: 'unclosedBlock',
	        value: function unclosedBlock() {
	            var pos = this.current.source.start;
	            throw this.input.error('Unclosed block', pos.line, pos.column);
	        }
	    }, {
	        key: 'doubleColon',
	        value: function doubleColon(token) {
	            throw this.input.error('Double colon', token[2], token[3]);
	        }
	    }, {
	        key: 'unnamedAtrule',
	        value: function unnamedAtrule(node, token) {
	            throw this.input.error('At-rule without name', token[2], token[3]);
	        }
	    }, {
	        key: 'precheckMissedSemicolon',
	        value: function precheckMissedSemicolon(tokens) {
	            // Hook for Safe Parser
	            tokens;
	        }
	    }, {
	        key: 'checkMissedSemicolon',
	        value: function checkMissedSemicolon(tokens) {
	            var colon = this.colon(tokens);
	            if (colon === false) return;
	
	            var founded = 0;
	            var token = void 0;
	            for (var j = colon - 1; j >= 0; j--) {
	                token = tokens[j];
	                if (token[0] !== 'space') {
	                    founded += 1;
	                    if (founded === 2) break;
	                }
	            }
	            throw this.input.error('Missed semicolon', token[2], token[3]);
	        }
	    }]);
	
	    return Parser;
	}();
	
	exports.default = Parser;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* eslint-disable valid-jsdoc */
	
	var defaultRaw = {
	    colon: ': ',
	    indent: '    ',
	    beforeDecl: '\n',
	    beforeRule: '\n',
	    beforeOpen: ' ',
	    beforeClose: '\n',
	    beforeComment: '\n',
	    after: '\n',
	    emptyBody: '',
	    commentLeft: ' ',
	    commentRight: ' '
	};
	
	function capitalize(str) {
	    return str[0].toUpperCase() + str.slice(1);
	}
	
	var Stringifier = function () {
	    function Stringifier(builder) {
	        _classCallCheck(this, Stringifier);
	
	        this.builder = builder;
	    }
	
	    _createClass(Stringifier, [{
	        key: 'stringify',
	        value: function stringify(node, semicolon) {
	            this[node.type](node, semicolon);
	        }
	    }, {
	        key: 'root',
	        value: function root(node) {
	            this.body(node);
	            if (node.raws.after) this.builder(node.raws.after);
	        }
	    }, {
	        key: 'comment',
	        value: function comment(node) {
	            var left = this.raw(node, 'left', 'commentLeft');
	            var right = this.raw(node, 'right', 'commentRight');
	            this.builder('/*' + left + node.text + right + '*/', node);
	        }
	    }, {
	        key: 'decl',
	        value: function decl(node, semicolon) {
	            var between = this.raw(node, 'between', 'colon');
	            var string = node.prop + between + this.rawValue(node, 'value');
	
	            if (node.important) {
	                string += node.raws.important || ' !important';
	            }
	
	            if (semicolon) string += ';';
	            this.builder(string, node);
	        }
	    }, {
	        key: 'rule',
	        value: function rule(node) {
	            this.block(node, this.rawValue(node, 'selector'));
	        }
	    }, {
	        key: 'atrule',
	        value: function atrule(node, semicolon) {
	            var name = '@' + node.name;
	            var params = node.params ? this.rawValue(node, 'params') : '';
	
	            if (typeof node.raws.afterName !== 'undefined') {
	                name += node.raws.afterName;
	            } else if (params) {
	                name += ' ';
	            }
	
	            if (node.nodes) {
	                this.block(node, name + params);
	            } else {
	                var end = (node.raws.between || '') + (semicolon ? ';' : '');
	                this.builder(name + params + end, node);
	            }
	        }
	    }, {
	        key: 'body',
	        value: function body(node) {
	            var last = node.nodes.length - 1;
	            while (last > 0) {
	                if (node.nodes[last].type !== 'comment') break;
	                last -= 1;
	            }
	
	            var semicolon = this.raw(node, 'semicolon');
	            for (var i = 0; i < node.nodes.length; i++) {
	                var child = node.nodes[i];
	                var before = this.raw(child, 'before');
	                if (before) this.builder(before);
	                this.stringify(child, last !== i || semicolon);
	            }
	        }
	    }, {
	        key: 'block',
	        value: function block(node, start) {
	            var between = this.raw(node, 'between', 'beforeOpen');
	            this.builder(start + between + '{', node, 'start');
	
	            var after = void 0;
	            if (node.nodes && node.nodes.length) {
	                this.body(node);
	                after = this.raw(node, 'after');
	            } else {
	                after = this.raw(node, 'after', 'emptyBody');
	            }
	
	            if (after) this.builder(after);
	            this.builder('}', node, 'end');
	        }
	    }, {
	        key: 'raw',
	        value: function raw(node, own, detect) {
	            var value = void 0;
	            if (!detect) detect = own;
	
	            // Already had
	            if (own) {
	                value = node.raws[own];
	                if (typeof value !== 'undefined') return value;
	            }
	
	            var parent = node.parent;
	
	            // Hack for first rule in CSS
	            if (detect === 'before') {
	                if (!parent || parent.type === 'root' && parent.first === node) {
	                    return '';
	                }
	            }
	
	            // Floating child without parent
	            if (!parent) return defaultRaw[detect];
	
	            // Detect style by other nodes
	            var root = node.root();
	            if (!root.rawCache) root.rawCache = {};
	            if (typeof root.rawCache[detect] !== 'undefined') {
	                return root.rawCache[detect];
	            }
	
	            if (detect === 'before' || detect === 'after') {
	                return this.beforeAfter(node, detect);
	            } else {
	                var method = 'raw' + capitalize(detect);
	                if (this[method]) {
	                    value = this[method](root, node);
	                } else {
	                    root.walk(function (i) {
	                        value = i.raws[own];
	                        if (typeof value !== 'undefined') return false;
	                    });
	                }
	            }
	
	            if (typeof value === 'undefined') value = defaultRaw[detect];
	
	            root.rawCache[detect] = value;
	            return value;
	        }
	    }, {
	        key: 'rawSemicolon',
	        value: function rawSemicolon(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length && i.last.type === 'decl') {
	                    value = i.raws.semicolon;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawEmptyBody',
	        value: function rawEmptyBody(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length === 0) {
	                    value = i.raws.after;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawIndent',
	        value: function rawIndent(root) {
	            if (root.raws.indent) return root.raws.indent;
	            var value = void 0;
	            root.walk(function (i) {
	                var p = i.parent;
	                if (p && p !== root && p.parent && p.parent === root) {
	                    if (typeof i.raws.before !== 'undefined') {
	                        var parts = i.raws.before.split('\n');
	                        value = parts[parts.length - 1];
	                        value = value.replace(/[^\s]/g, '');
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeComment',
	        value: function rawBeforeComment(root, node) {
	            var value = void 0;
	            root.walkComments(function (i) {
	                if (typeof i.raws.before !== 'undefined') {
	                    value = i.raws.before;
	                    if (value.indexOf('\n') !== -1) {
	                        value = value.replace(/[^\n]+$/, '');
	                    }
	                    return false;
	                }
	            });
	            if (typeof value === 'undefined') {
	                value = this.raw(node, null, 'beforeDecl');
	            }
	            return value;
	        }
	    }, {
	        key: 'rawBeforeDecl',
	        value: function rawBeforeDecl(root, node) {
	            var value = void 0;
	            root.walkDecls(function (i) {
	                if (typeof i.raws.before !== 'undefined') {
	                    value = i.raws.before;
	                    if (value.indexOf('\n') !== -1) {
	                        value = value.replace(/[^\n]+$/, '');
	                    }
	                    return false;
	                }
	            });
	            if (typeof value === 'undefined') {
	                value = this.raw(node, null, 'beforeRule');
	            }
	            return value;
	        }
	    }, {
	        key: 'rawBeforeRule',
	        value: function rawBeforeRule(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && (i.parent !== root || root.first !== i)) {
	                    if (typeof i.raws.before !== 'undefined') {
	                        value = i.raws.before;
	                        if (value.indexOf('\n') !== -1) {
	                            value = value.replace(/[^\n]+$/, '');
	                        }
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeClose',
	        value: function rawBeforeClose(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length > 0) {
	                    if (typeof i.raws.after !== 'undefined') {
	                        value = i.raws.after;
	                        if (value.indexOf('\n') !== -1) {
	                            value = value.replace(/[^\n]+$/, '');
	                        }
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeOpen',
	        value: function rawBeforeOpen(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.type !== 'decl') {
	                    value = i.raws.between;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawColon',
	        value: function rawColon(root) {
	            var value = void 0;
	            root.walkDecls(function (i) {
	                if (typeof i.raws.between !== 'undefined') {
	                    value = i.raws.between.replace(/[^\s:]/g, '');
	                    return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'beforeAfter',
	        value: function beforeAfter(node, detect) {
	            var value = void 0;
	            if (node.type === 'decl') {
	                value = this.raw(node, null, 'beforeDecl');
	            } else if (node.type === 'comment') {
	                value = this.raw(node, null, 'beforeComment');
	            } else if (detect === 'before') {
	                value = this.raw(node, null, 'beforeRule');
	            } else {
	                value = this.raw(node, null, 'beforeClose');
	            }
	
	            var buf = node.parent;
	            var depth = 0;
	            while (buf && buf.type !== 'root') {
	                depth += 1;
	                buf = buf.parent;
	            }
	
	            if (value.indexOf('\n') !== -1) {
	                var indent = this.raw(node, null, 'indent');
	                if (indent.length) {
	                    for (var step = 0; step < depth; step++) {
	                        value += indent;
	                    }
	                }
	            }
	
	            return value;
	        }
	    }, {
	        key: 'rawValue',
	        value: function rawValue(node, prop) {
	            var value = node[prop];
	            var raw = node.raws[prop];
	            if (raw && raw.value === value) {
	                return raw.raw;
	            } else {
	                return value;
	            }
	        }
	    }]);
	
	    return Stringifier;
	}();
	
	exports.default = Stringifier;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = stringify;
	
	var _stringifier = __webpack_require__(42);
	
	var _stringifier2 = _interopRequireDefault(_stringifier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function stringify(node, builder) {
	    var str = new _stringifier2.default(builder);
	    str.stringify(node);
	}
	module.exports = exports['default'];

/***/ },
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(50);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	__webpack_require__(62);
	module.exports = __webpack_require__(4).Array.from;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(129);
	__webpack_require__(45);
	module.exports = __webpack_require__(61);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	module.exports = __webpack_require__(4).Object.keys;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(124)
	  , TAG = __webpack_require__(6)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(48)
	  , ITERATOR   = __webpack_require__(6)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(23);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(6)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(136)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(23)
	  , get      = __webpack_require__(24);
	module.exports = __webpack_require__(4).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(125)
	  , $export     = __webpack_require__(47)
	  , toObject    = __webpack_require__(44)
	  , call        = __webpack_require__(58)
	  , isArrayIter = __webpack_require__(57)
	  , toLength    = __webpack_require__(60)
	  , getIterFn   = __webpack_require__(24);
	$export($export.S + $export.F * !__webpack_require__(59)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(44);
	
	__webpack_require__(46)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  XmlEntities: __webpack_require__(66),
	  Html4Entities: __webpack_require__(65),
	  Html5Entities: __webpack_require__(25),
	  AllHtmlEntities: __webpack_require__(25)
	};


/***/ },
/* 65 */
/***/ function(module, exports) {

	var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'Oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'oelig', 'oelig', 'scaron', 'scaron', 'yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
	var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
	
	var alphaIndex = {};
	var numIndex = {};
	
	var i = 0;
	var length = HTML_ALPHA.length;
	while (i < length) {
	    var a = HTML_ALPHA[i];
	    var c = HTML_CODES[i];
	    alphaIndex[a] = String.fromCharCode(c);
	    numIndex[c] = a;
	    i++;
	}
	
	/**
	 * @constructor
	 */
	function Html4Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var chr;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1).toLowerCase() === 'x' ?
	                parseInt(entity.substr(2), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                chr = String.fromCharCode(code);
	            }
	        } else {
	            chr = alphaIndex[entity];
	        }
	        return chr || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.decode = function(str) {
	    return new Html4Entities().decode(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var alpha = numIndex[str.charCodeAt(i)];
	        result += alpha ? "&" + alpha + ";" : str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encode = function(str) {
	    return new Html4Entities().encode(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var cc = str.charCodeAt(i);
	        var alpha = numIndex[cc];
	        if (alpha) {
	            result += "&" + alpha + ";";
	        } else if (cc < 32 || cc > 126) {
	            result += "&#" + cc + ";";
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encodeNonUTF = function(str) {
	    return new Html4Entities().encodeNonUTF(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encodeNonASCII = function(str) {
	    return new Html4Entities().encodeNonASCII(str);
	};
	
	module.exports = Html4Entities;


/***/ },
/* 66 */
/***/ function(module, exports) {

	var ALPHA_INDEX = {
	    '&lt': '<',
	    '&gt': '>',
	    '&quot': '"',
	    '&apos': '\'',
	    '&amp': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&apos;': '\'',
	    '&amp;': '&'
	};
	
	var CHAR_INDEX = {
	    60: 'lt',
	    62: 'gt',
	    34: 'quot',
	    39: 'apos',
	    38: 'amp'
	};
	
	var CHAR_S_INDEX = {
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    '\'': '&apos;',
	    '&': '&amp;'
	};
	
	/**
	 * @constructor
	 */
	function XmlEntities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/<|>|"|'|&/g, function(s) {
	        return CHAR_S_INDEX[s];
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encode = function(str) {
	    return new XmlEntities().encode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
	        if (s.charAt(1) === '#') {
	            var code = s.charAt(2).toLowerCase() === 'x' ?
	                parseInt(s.substr(3), 16) :
	                parseInt(s.substr(2));
	
	            if (isNaN(code) || code < -32768 || code > 65535) {
	                return '';
	            }
	            return String.fromCharCode(code);
	        }
	        return ALPHA_INDEX[s] || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.decode = function(str) {
	    return new XmlEntities().decode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var alpha = CHAR_INDEX[c];
	        if (alpha) {
	            result += "&" + alpha + ";";
	            i++;
	            continue;
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encodeNonUTF = function(str) {
	    return new XmlEntities().encodeNonUTF(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonASCII = function(str) {
	    var strLenght = str.length;
	    if (strLenght === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLenght) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encodeNonASCII = function(str) {
	    return new XmlEntities().encodeNonASCII(str);
	 };
	
	module.exports = XmlEntities;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(52);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _keys = __webpack_require__(22);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(51);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _clientOverlayFalseReloadTrue = __webpack_require__(73);
	
	var _clientOverlayFalseReloadTrue2 = _interopRequireDefault(_clientOverlayFalseReloadTrue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var handlers = {
	  reload: function reload(route) {
	    if (route === '/_error') {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(next.router.components)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var r = _step.value;
	          var Component = next.router.components[r].Component;
	
	          if (Component.__route === '/_error-debug') {
	            // reload all '/_error-debug'
	            // which are expected to be errors of '/_error' routes
	            next.router.reload(r);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return;
	    }
	
	    next.router.reload(route);
	  },
	  change: function change(route) {
	    var _ref = next.router.components[route] || {},
	        Component = _ref.Component;
	
	    if (Component && Component.__route === '/_error-debug') {
	      // reload to recover from runtime errors
	      next.router.reload(route);
	    }
	  }
	}; /* global next */
	
	
	_clientOverlayFalseReloadTrue2.default.subscribe(function (obj) {
	  var fn = handlers[obj.action];
	  if (fn) {
	    var data = obj.data || [];
	    fn.apply(undefined, (0, _toConsumableArray3.default)(data));
	  } else {
	    throw new Error('Unexpected action ' + obj.action);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 69 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(68);
	exports.encode = exports.stringify = __webpack_require__(69);


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(49)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-env browser*/
	
	var clientOverlay = document.createElement('div');
	var styles = {
	  background: 'rgba(0,0,0,0.85)',
	  color: '#E8E8E8',
	  lineHeight: '1.2',
	  whiteSpace: 'pre',
	  fontFamily: 'Menlo, Consolas, monospace',
	  fontSize: '13px',
	  position: 'fixed',
	  zIndex: 9999,
	  padding: '10px',
	  left: 0,
	  right: 0,
	  top: 0,
	  bottom: 0,
	  overflow: 'auto',
	  dir: 'ltr'
	};
	for (var key in styles) {
	  clientOverlay.style[key] = styles[key];
	}
	
	var ansiHTML = __webpack_require__(135);
	var colors = {
	  reset: ['transparent', 'transparent'],
	  black: '181818',
	  red: 'E36049',
	  green: 'B3CB74',
	  yellow: 'FFD080',
	  blue: '7CAFC2',
	  magenta: '7FACCA',
	  cyan: 'C3C2EF',
	  lightgrey: 'EBE7E3',
	  darkgrey: '6D7891'
	};
	ansiHTML.setColors(colors);
	
	var Entities = __webpack_require__(64).AllHtmlEntities;
	var entities = new Entities();
	
	exports.showProblems =
	function showProblems(type, lines) {
	  clientOverlay.innerHTML = '';
	  lines.forEach(function(msg) {
	    msg = ansiHTML(entities.encode(msg));
	    var div = document.createElement('div');
	    div.style.marginBottom = '26px';
	    div.innerHTML = problemType(type) + ' in ' + msg;
	    clientOverlay.appendChild(div);
	  });
	  if (document.body) {
	    document.body.appendChild(clientOverlay);
	  }
	};
	
	exports.clear =
	function clear() {
	  if (document.body && clientOverlay.parentNode) {
	    document.body.removeChild(clientOverlay);
	  }
	};
	
	var problemColors = {
	  errors: colors.red,
	  warnings: colors.yellow
	};
	
	function problemType (type) {
	  var color = problemColors[type] || colors.red;
	  return (
	    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
	      type.slice(0, -1).toUpperCase() +
	    '</span>'
	  );
	}


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
	/*global __resourceQuery __webpack_public_path__*/
	
	var options = {
	  path: "/__webpack_hmr",
	  timeout: 20 * 1000,
	  overlay: true,
	  reload: false,
	  log: true,
	  warn: true
	};
	if (true) {
	  var querystring = __webpack_require__(70);
	  var overrides = querystring.parse(__resourceQuery.slice(1));
	  if (overrides.path) options.path = overrides.path;
	  if (overrides.timeout) options.timeout = overrides.timeout;
	  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
	  if (overrides.reload) options.reload = overrides.reload !== 'false';
	  if (overrides.noInfo && overrides.noInfo !== 'false') {
	    options.log = false;
	  }
	  if (overrides.quiet && overrides.quiet !== 'false') {
	    options.log = false;
	    options.warn = false;
	  }
	  if (overrides.dynamicPublicPath) {
	    options.path = __webpack_require__.p + options.path;
	  }
	}
	
	if (typeof window === 'undefined') {
	  // do nothing
	} else if (typeof window.EventSource === 'undefined') {
	  console.warn(
	    "webpack-hot-middleware's client requires EventSource to work. " +
	    "You should include a polyfill if you want to support this browser: " +
	    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
	  );
	} else {
	  connect(window.EventSource);
	}
	
	function connect(EventSource) {
	  var source = new EventSource(options.path);
	  var lastActivity = new Date();
	
	  source.onopen = handleOnline;
	  source.onmessage = handleMessage;
	  source.onerror = handleDisconnect;
	
	  var timer = setInterval(function() {
	    if ((new Date() - lastActivity) > options.timeout) {
	      handleDisconnect();
	    }
	  }, options.timeout / 2);
	
	  function handleOnline() {
	    if (options.log) console.log("[HMR] connected");
	    lastActivity = new Date();
	  }
	
	  function handleMessage(event) {
	    lastActivity = new Date();
	    if (event.data == "\uD83D\uDC93") {
	      return;
	    }
	    try {
	      processMessage(JSON.parse(event.data));
	    } catch (ex) {
	      if (options.warn) {
	        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
	      }
	    }
	  }
	
	  function handleDisconnect() {
	    clearInterval(timer);
	    source.close();
	    setTimeout(function() { connect(EventSource); }, options.timeout);
	  }
	
	}
	
	var reporter;
	// the reporter needs to be a singleton on the page
	// in case the client is being used by mutliple bundles
	// we only want to report once.
	// all the errors will go to all clients
	var singletonKey = '__webpack_hot_middleware_reporter__';
	if (typeof window !== 'undefined' && !window[singletonKey]) {
	  reporter = window[singletonKey] = createReporter();
	}
	
	function createReporter() {
	  var strip = __webpack_require__(71);
	
	  var overlay;
	  if (typeof document !== 'undefined' && options.overlay) {
	    overlay = __webpack_require__(72);
	  }
	
	  return {
	    problems: function(type, obj) {
	      if (options.warn) {
	        console.warn("[HMR] bundle has " + type + ":");
	        obj[type].forEach(function(msg) {
	          console.warn("[HMR] " + strip(msg));
	        });
	      }
	      if (overlay && type !== 'warnings') overlay.showProblems(type, obj[type]);
	    },
	    success: function() {
	      if (overlay) overlay.clear();
	    },
	    useCustomOverlay: function(customOverlay) {
	      overlay = customOverlay;
	    }
	  };
	}
	
	var processUpdate = __webpack_require__(74);
	
	var customHandler;
	var subscribeAllHandler;
	function processMessage(obj) {
	  switch(obj.action) {
	    case "building":
	      if (options.log) console.log("[HMR] bundle rebuilding");
	      break;
	    case "built":
	      if (options.log) {
	        console.log(
	          "[HMR] bundle " + (obj.name ? obj.name + " " : "") +
	          "rebuilt in " + obj.time + "ms"
	        );
	      }
	      // fall through
	    case "sync":
	      if (obj.errors.length > 0) {
	        if (reporter) reporter.problems('errors', obj);
	      } else {
	        if (reporter) {
	          if (obj.warnings.length > 0) reporter.problems('warnings', obj);
	          reporter.success();
	        }
	        processUpdate(obj.hash, obj.modules, options);
	      }
	      break;
	    default:
	      if (customHandler) {
	        customHandler(obj);
	      }
	  }
	
	  if (subscribeAllHandler) {
	    subscribeAllHandler(obj);
	  }
	}
	
	if (module) {
	  module.exports = {
	    subscribeAll: function subscribeAll(handler) {
	      subscribeAllHandler = handler;
	    },
	    subscribe: function subscribe(handler) {
	      customHandler = handler;
	    },
	    useCustomOverlay: function useCustomOverlay(customOverlay) {
	      if (reporter) reporter.useCustomOverlay(customOverlay);
	    }
	  };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?overlay=false&reload=true", __webpack_require__(75)(module)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based heavily on https://github.com/webpack/webpack/blob/
	 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
	 * Original copyright Tobias Koppers @sokra (MIT license)
	 */
	
	/* global window __webpack_hash__ */
	
	if (false) {
	  throw new Error("[HMR] Hot Module Replacement is disabled.");
	}
	
	var hmrDocsUrl = "http://webpack.github.io/docs/hot-module-replacement-with-webpack.html"; // eslint-disable-line max-len
	
	var lastHash;
	var failureStatuses = { abort: 1, fail: 1 };
	var applyOptions = { ignoreUnaccepted: true };
	
	function upToDate(hash) {
	  if (hash) lastHash = hash;
	  return lastHash == __webpack_require__.h();
	}
	
	module.exports = function(hash, moduleMap, options) {
	  var reload = options.reload;
	  if (!upToDate(hash) && module.hot.status() == "idle") {
	    if (options.log) console.log("[HMR] Checking for updates on the server...");
	    check();
	  }
	
	  function check() {
	    var cb = function(err, updatedModules) {
	      if (err) return handleError(err);
	
	      if(!updatedModules) {
	        if (options.warn) {
	          console.warn("[HMR] Cannot find update (Full reload needed)");
	          console.warn("[HMR] (Probably because of restarting the server)");
	        }
	        performReload();
	        return null;
	      }
	
	      var applyCallback = function(applyErr, renewedModules) {
	        if (applyErr) return handleError(applyErr);
	
	        if (!upToDate()) check();
	
	        logUpdates(updatedModules, renewedModules);
	      };
	
	      var applyResult = module.hot.apply(applyOptions, applyCallback);
	      // webpack 2 promise
	      if (applyResult && applyResult.then) {
	        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
	        applyResult.then(function(outdatedModules) {
	          applyCallback(null, outdatedModules);
	        });
	        applyResult.catch(applyCallback);
	      }
	
	    };
	
	    var result = module.hot.check(false, cb);
	    // webpack 2 promise
	    if (result && result.then) {
	        result.then(function(updatedModules) {
	            cb(null, updatedModules);
	        });
	        result.catch(cb);
	    }
	  }
	
	  function logUpdates(updatedModules, renewedModules) {
	    var unacceptedModules = updatedModules.filter(function(moduleId) {
	      return renewedModules && renewedModules.indexOf(moduleId) < 0;
	    });
	
	    if(unacceptedModules.length > 0) {
	      if (options.warn) {
	        console.warn(
	          "[HMR] The following modules couldn't be hot updated: " +
	          "(Full reload needed)\n" +
	          "This is usually because the modules which have changed " +
	          "(and their parents) do not know how to hot reload themselves. " +
	          "See " + hmrDocsUrl + " for more details."
	        );
	        unacceptedModules.forEach(function(moduleId) {
	          console.warn("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	      performReload();
	      return;
	    }
	
	    if (options.log) {
	      if(!renewedModules || renewedModules.length === 0) {
	        console.log("[HMR] Nothing hot updated.");
	      } else {
	        console.log("[HMR] Updated modules:");
	        renewedModules.forEach(function(moduleId) {
	          console.log("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	
	      if (upToDate()) {
	        console.log("[HMR] App is up to date.");
	      }
	    }
	  }
	
	  function handleError(err) {
	    if (module.hot.status() in failureStatuses) {
	      if (options.warn) {
	        console.warn("[HMR] Cannot check for update (Full reload needed)");
	        console.warn("[HMR] " + err.stack || err.message);
	      }
	      performReload();
	      return;
	    }
	    if (options.warn) {
	      console.warn("[HMR] Update check failed: " + err.stack || err.message);
	    }
	  }
	
	  function performReload() {
	    if (reload) {
	      if (options.warn) console.warn("[HMR] Reloading page");
	      window.location.reload();
	    }
	  }
	};


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function defineProperties(T, D){
	  return $.setDescs(T, D);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	module.exports = __webpack_require__(4).Object.freeze;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(128);
	
	__webpack_require__(46)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var camelize = __webpack_require__(81);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};
	
	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _joinPrefixedValue = __webpack_require__(9);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(13);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;
	
	var _joinPrefixedValue = __webpack_require__(9);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};
	
	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = { flex: true, 'inline-flex': true };
	
	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	function flexboxOld(property, value) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _joinPrefixedValue = __webpack_require__(9);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(13);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;
	function position(property, value) {
	  if (property === 'position' && value === 'sticky') {
	    return { position: ['-webkit-sticky', 'sticky'] };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	
	var _joinPrefixedValue = __webpack_require__(9);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;
	
	var _hyphenateStyleName = __webpack_require__(84);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _capitalizeString = __webpack_require__(30);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _isPrefixedValue = __webpack_require__(13);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	var _prefixProps = __webpack_require__(29);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};
	
	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;
	
	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');
	
	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }
	
	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}
	
	function prefixValue(value) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }
	
	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';
	
	      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);
	
	        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });
	
	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;
	
	var _prefixProps = __webpack_require__(29);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	var _capitalizeString = __webpack_require__(30);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _sortPrefixedStyle = __webpack_require__(96);
	
	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);
	
	var _position = __webpack_require__(91);
	
	var _position2 = _interopRequireDefault(_position);
	
	var _calc = __webpack_require__(85);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _cursor = __webpack_require__(86);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _flex = __webpack_require__(87);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _sizing = __webpack_require__(92);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _gradient = __webpack_require__(90);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _transition = __webpack_require__(93);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _flexboxIE = __webpack_require__(88);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(89);
	
	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// special flexbox specifications
	
	
	var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];
	
	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */
	function prefixAll(styles) {
	  Object.keys(styles).forEach(function (property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      styles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2.default).forEach(function (prefix) {
	        var properties = _prefixProps2.default[prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
	        }
	      });
	    }
	  });
	
	  Object.keys(styles).forEach(function (property) {
	    [].concat(styles[property]).forEach(function (value, index) {
	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return assignStyles(styles, plugin(property, value));
	      });
	    });
	  });
	
	  return (0, _sortPrefixedStyle2.default)(styles);
	}
	
	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (value) {
	        var valueIndex = baseValue.indexOf(value);
	        if (valueIndex > -1) {
	          base[property].splice(valueIndex, 1);
	        }
	        base[property].push(value);
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (property) {
	  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
	};
	
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sortPrefixedStyle;
	
	var _isPrefixedProperty = __webpack_require__(95);
	
	var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function sortPrefixedStyle(style) {
	  return Object.keys(style).sort(function (left, right) {
	    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
	      return -1;
	    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
	      return 1;
	    }
	    return 0;
	  }).reduce(function (sortedStyle, prop) {
	    sortedStyle[prop] = style[prop];
	    return sortedStyle;
	  }, {});
	}
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(94)


/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = isFunction
	
	var toString = Object.prototype.toString
	
	function isFunction (fn) {
	  var string = toString.call(fn)
	  return string === '[object Function]' ||
	    (typeof fn === 'function' && string !== '[object RegExp]') ||
	    (typeof window !== 'undefined' &&
	     // IE8 and below
	     (fn === window.setTimeout ||
	      fn === window.alert ||
	      fn === window.confirm ||
	      fn === window.prompt))
	};


/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isArray = __webpack_require__(99);
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && isArray(val) === false;
	};


/***/ },
/* 101 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _css = __webpack_require__(10);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _GlobalStyle = __webpack_require__(32);
	
	var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).PropTypes.any;
	
	var injectGlobal = function injectGlobal(strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  var globalStyle = new _GlobalStyle2.default(_css2.default.apply(undefined, [strings].concat(interpolations)));
	  globalStyle.generateAndInject();
	};
	
	exports.default = injectGlobal;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hash = __webpack_require__(28);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _css = __webpack_require__(10);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _GlobalStyle = __webpack_require__(32);
	
	var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).PropTypes.any;
	
	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};
	
	exports.default = function (nameGenerator) {
	  return function (strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }
	
	    var rules = _css2.default.apply(undefined, [strings].concat(interpolations));
	    var hash = (0, _hash2.default)(replaceWhitespace(JSON.stringify(rules)));
	    var name = nameGenerator(hash);
	    var keyframes = new _GlobalStyle2.default(rules, '@keyframes ' + name);
	    keyframes.generateAndInject();
	    return name;
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _css = __webpack_require__(10);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _domElements = __webpack_require__(110);
	
	var _domElements2 = _interopRequireDefault(_domElements);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).PropTypes.any;
	
	exports.default = function (styledComponent) {
	  var styled = function styled(tag) {
	    return function (strings) {
	      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        interpolations[_key - 1] = arguments[_key];
	      }
	
	      return styledComponent(tag, _css2.default.apply(undefined, [strings].concat(interpolations)));
	    };
	  };
	
	  // Shorthands for all valid HTML Elements
	  _domElements2.default.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });
	
	  return styled;
	};
	
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ThemeProvider = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* globals ReactClass */
	
	exports.default = function (Component) {
	  var _class, _temp2;
	
	  return _temp2 = _class = function (_React$Component) {
	    _inherits(_class, _React$Component);
	
	    function _class() {
	      var _ref;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, _class);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(_class, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        var _this2 = this;
	
	        if (!this.context[_ThemeProvider.CHANNEL]) {
	          throw new Error('[withTheme] Please use ThemeProvider to be able to use withTheme');
	        }
	
	        var subscribe = this.context[_ThemeProvider.CHANNEL];
	        this.unsubscribe = subscribe(function (theme) {
	          _this2.setState({ theme: theme });
	        });
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (typeof this.unsubscribe === 'function') this.unsubscribe();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var theme = this.state.theme;
	
	
	        return _react2.default.createElement(Component, _extends({ theme: theme }, this.props));
	      }
	    }]);
	
	    return _class;
	  }(_react2.default.Component), _class.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _react2.default.PropTypes.func), _temp2;
	};
	
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _ThemeProvider = __webpack_require__(5);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AbstractStyledComponent = function (_Component) {
	  _inherits(AbstractStyledComponent, _Component);
	
	  function AbstractStyledComponent() {
	    _classCallCheck(this, AbstractStyledComponent);
	
	    return _possibleConstructorReturn(this, (AbstractStyledComponent.__proto__ || Object.getPrototypeOf(AbstractStyledComponent)).apply(this, arguments));
	  }
	
	  return AbstractStyledComponent;
	}(_react.Component);
	
	exports.default = AbstractStyledComponent;
	
	
	AbstractStyledComponent.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _react.PropTypes.func);
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hash = __webpack_require__(28);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _flatten = __webpack_require__(14);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _parse = __webpack_require__(36);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	var _postcssNested = __webpack_require__(35);
	
	var _postcssNested2 = _interopRequireDefault(_postcssNested);
	
	var _autoprefix = __webpack_require__(109);
	
	var _autoprefix2 = _interopRequireDefault(_autoprefix);
	
	var _StyleSheet = __webpack_require__(33);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(1).PropTypes.any;
	
	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	exports.default = function (nameGenerator) {
	  var inserted = {};
	
	  var ComponentStyle = function () {
	    function ComponentStyle(rules) {
	      _classCallCheck(this, ComponentStyle);
	
	      this.rules = rules;
	      if (!_StyleSheet2.default.injected) _StyleSheet2.default.inject();
	      this.insertedRule = _StyleSheet2.default.insert('');
	    }
	
	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a ._hashName {}
	     * Parses that with PostCSS then runs PostCSS-Nested on it
	     * Returns the hash to be injected on render()
	     * */
	
	
	    _createClass(ComponentStyle, [{
	      key: 'generateAndInjectStyles',
	      value: function generateAndInjectStyles(executionContext) {
	        var flatCSS = (0, _flatten2.default)(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
	        var hash = (0, _hash2.default)(flatCSS);
	        if (!inserted[hash]) {
	          var selector = nameGenerator(hash);
	          inserted[hash] = selector;
	          var root = (0, _parse2.default)('.' + selector + ' { ' + flatCSS + ' }');
	          (0, _postcssNested2.default)(root);
	          (0, _autoprefix2.default)(root);
	          this.insertedRule.appendRule(root.toResult().css);
	        }
	        return inserted[hash];
	      }
	    }]);
	
	    return ComponentStyle;
	  }();
	
	  return ComponentStyle;
	};
	
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _validAttr = __webpack_require__(114);
	
	var _validAttr2 = _interopRequireDefault(_validAttr);
	
	var _isTag = __webpack_require__(113);
	
	var _isTag2 = _interopRequireDefault(_isTag);
	
	var _AbstractStyledComponent = __webpack_require__(106);
	
	var _AbstractStyledComponent2 = _interopRequireDefault(_AbstractStyledComponent);
	
	var _ThemeProvider = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var babelPluginFlowReactPropTypes_proptype_Theme = __webpack_require__(5).babelPluginFlowReactPropTypes_proptype_Theme || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).PropTypes.any;
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(1).PropTypes.any;
	
	exports.default = function (ComponentStyle) {
	  // eslint-disable-next-line no-undef
	  var createStyledComponent = function createStyledComponent(target, rules, parent) {
	    /* Handle styled(OtherStyledComponent) differently */
	    var isStyledComponent = _AbstractStyledComponent2.default.isPrototypeOf(target);
	    if (!(0, _isTag2.default)(target) && isStyledComponent) {
	      return createStyledComponent(target.target, target.rules.concat(rules), target);
	    }
	
	    var componentStyle = new ComponentStyle(rules);
	    var ParentComponent = parent || _AbstractStyledComponent2.default;
	
	    var StyledComponent = function (_ParentComponent) {
	      _inherits(StyledComponent, _ParentComponent);
	
	      function StyledComponent() {
	        _classCallCheck(this, StyledComponent);
	
	        var _this = _possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).call(this));
	
	        _this.state = {
	          theme: null,
	          generatedClassName: ''
	        };
	        return _this;
	      }
	
	      _createClass(StyledComponent, [{
	        key: 'generateAndInjectStyles',
	        value: function generateAndInjectStyles(theme, props) {
	          var executionContext = _extends({}, props, { theme: theme });
	          return componentStyle.generateAndInjectStyles(executionContext);
	        }
	      }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          var _this2 = this;
	
	          // If there is a theme in the context, subscribe to the event emitter. This
	          // is necessary due to pure components blocking context updates, this circumvents
	          // that by updating when an event is emitted
	          if (this.context[_ThemeProvider.CHANNEL]) {
	            var subscribe = this.context[_ThemeProvider.CHANNEL];
	            this.unsubscribe = subscribe(function (nextTheme) {
	              // This will be called once immediately
	
	              // Props should take precedence over ThemeProvider, which should take precedence over
	              // defaultProps, but React automatically puts defaultProps on props.
	              var defaultProps = _this2.constructor.defaultProps;
	
	              var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
	              var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
	              var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
	              _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	            });
	          } else {
	            var _theme = this.props.theme || {};
	            var generatedClassName = this.generateAndInjectStyles(_theme, this.props);
	            this.setState({ theme: _theme, generatedClassName: generatedClassName });
	          }
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          var _this3 = this;
	
	          this.setState(function (oldState) {
	            // Props should take precedence over ThemeProvider, which should take precedence over
	            // defaultProps, but React automatically puts defaultProps on props.
	            var defaultProps = _this3.constructor.defaultProps;
	
	            var isDefaultTheme = defaultProps && nextProps.theme === defaultProps.theme;
	            var theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme;
	            var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);
	
	            return { theme: theme, generatedClassName: generatedClassName };
	          });
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _this4 = this;
	
	          var _props = this.props,
	              className = _props.className,
	              children = _props.children,
	              innerRef = _props.innerRef;
	          var generatedClassName = this.state.generatedClassName;
	
	
	          var propsForElement = {};
	          /* Don't pass through non HTML tags through to HTML elements */
	          Object.keys(this.props).filter(function (propName) {
	            return !(0, _isTag2.default)(target) || (0, _validAttr2.default)(propName);
	          }).forEach(function (propName) {
	            propsForElement[propName] = _this4.props[propName];
	          });
	          propsForElement.className = [className, generatedClassName].filter(function (x) {
	            return x;
	          }).join(' ');
	          if (innerRef) {
	            propsForElement.ref = innerRef;
	            if ((0, _isTag2.default)(target)) delete propsForElement.innerRef;
	          }
	
	          return (0, _react.createElement)(target, propsForElement, children);
	        }
	      }]);
	
	      return StyledComponent;
	    }(ParentComponent);
	
	    StyledComponent.contextTypes = ParentComponent.contextTypes;
	
	
	    StyledComponent.target = target;
	    StyledComponent.rules = rules;
	
	    StyledComponent.displayName = (0, _isTag2.default)(target) ? 'styled.' + target : 'Styled(' + (target.displayName || target.name || 'Component') + ')';
	
	    return StyledComponent;
	  };
	
	  return createStyledComponent;
	};
	
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _camelizeStyleName = __webpack_require__(82);
	
	var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);
	
	var _hyphenateStyleName = __webpack_require__(27);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _static = __webpack_require__(97);
	
	var _static2 = _interopRequireDefault(_static);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// eslint-disable-next-line
	
	
	var babelPluginFlowReactPropTypes_proptype_Container = __webpack_require__(12).babelPluginFlowReactPropTypes_proptype_Container || __webpack_require__(1).PropTypes.any;
	
	exports.default = function (root) {
	  root.walkDecls(function (decl) {
	    /* No point even checking custom props */
	    if (/^--/.test(decl.prop)) return;
	
	    var objStyle = _defineProperty({}, (0, _camelizeStyleName2.default)(decl.prop), decl.value);
	    var prefixed = (0, _static2.default)(objStyle);
	    Object.keys(prefixed).reverse().forEach(function (newProp) {
	      var newVals = prefixed[newProp];
	      var newValArray = Array.isArray(newVals) ? newVals : [newVals];
	      newValArray.forEach(function (newVal) {
	        decl.cloneBefore({
	          prop: (0, _hyphenateStyleName2.default)(newProp),
	          value: newVal
	        });
	      });
	    });
	    decl.remove();
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	// Thanks to ReactDOMFactories for this handy list!
	
	exports.default = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
	
	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	
	/* Some high number, usually 9-digit base-10. Map it to base-😎 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var lastDigit = chars[code % chars.length];
	  return code > chars.length ? '' + generateAlphabeticName(Math.floor(code / chars.length)) + lastDigit : lastDigit;
	};
	
	exports.default = generateAlphabeticName;
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).PropTypes.any;
	
	exports.default = function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	};
	
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTag;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(2).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).PropTypes.any;
	
	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* Trying to avoid the unknown-prop errors on styled components
	 by filtering by React's attribute whitelist.
	 */
	
	/* Logic copied from ReactDOMUnknownPropertyHook */
	var reactProps = {
	  children: true,
	  dangerouslySetInnerHTML: true,
	  key: true,
	  ref: true,
	  autoFocus: true,
	  defaultValue: true,
	  valueLink: true,
	  defaultChecked: true,
	  checkedLink: true,
	  innerHTML: true,
	  suppressContentEditableWarning: true,
	  onFocusIn: true,
	  onFocusOut: true,
	  className: true,
	
	  /* List copied from https://facebook.github.io/react/docs/events.html */
	  onCopy: true,
	  onCut: true,
	  onPaste: true,
	  onCompositionEnd: true,
	  onCompositionStart: true,
	  onCompositionUpdate: true,
	  onKeyDown: true,
	  onKeyPress: true,
	  onKeyUp: true,
	  onFocus: true,
	  onBlur: true,
	  onChange: true,
	  onInput: true,
	  onSubmit: true,
	  onClick: true,
	  onContextMenu: true,
	  onDoubleClick: true,
	  onDrag: true,
	  onDragEnd: true,
	  onDragEnter: true,
	  onDragExit: true,
	  onDragLeave: true,
	  onDragOver: true,
	  onDragStart: true,
	  onDrop: true,
	  onMouseDown: true,
	  onMouseEnter: true,
	  onMouseLeave: true,
	  onMouseMove: true,
	  onMouseOut: true,
	  onMouseOver: true,
	  onMouseUp: true,
	  onSelect: true,
	  onTouchCancel: true,
	  onTouchEnd: true,
	  onTouchMove: true,
	  onTouchStart: true,
	  onScroll: true,
	  onWheel: true,
	  onAbort: true,
	  onCanPlay: true,
	  onCanPlayThrough: true,
	  onDurationChange: true,
	  onEmptied: true,
	  onEncrypted: true,
	  onEnded: true,
	  onError: true,
	  onLoadedData: true,
	  onLoadedMetadata: true,
	  onLoadStart: true,
	  onPause: true,
	  onPlay: true,
	  onPlaying: true,
	  onProgress: true,
	  onRateChange: true,
	  onSeeked: true,
	  onSeeking: true,
	  onStalled: true,
	  onSuspend: true,
	  onTimeUpdate: true,
	  onVolumeChange: true,
	  onWaiting: true,
	  onLoad: true,
	  onAnimationStart: true,
	  onAnimationEnd: true,
	  onAnimationIteration: true,
	  onTransitionEnd: true,
	
	  onCopyCapture: true,
	  onCutCapture: true,
	  onPasteCapture: true,
	  onCompositionEndCapture: true,
	  onCompositionStartCapture: true,
	  onCompositionUpdateCapture: true,
	  onKeyDownCapture: true,
	  onKeyPressCapture: true,
	  onKeyUpCapture: true,
	  onFocusCapture: true,
	  onBlurCapture: true,
	  onChangeCapture: true,
	  onInputCapture: true,
	  onSubmitCapture: true,
	  onClickCapture: true,
	  onContextMenuCapture: true,
	  onDoubleClickCapture: true,
	  onDragCapture: true,
	  onDragEndCapture: true,
	  onDragEnterCapture: true,
	  onDragExitCapture: true,
	  onDragLeaveCapture: true,
	  onDragOverCapture: true,
	  onDragStartCapture: true,
	  onDropCapture: true,
	  onMouseDownCapture: true,
	  onMouseEnterCapture: true,
	  onMouseLeaveCapture: true,
	  onMouseMoveCapture: true,
	  onMouseOutCapture: true,
	  onMouseOverCapture: true,
	  onMouseUpCapture: true,
	  onSelectCapture: true,
	  onTouchCancelCapture: true,
	  onTouchEndCapture: true,
	  onTouchMoveCapture: true,
	  onTouchStartCapture: true,
	  onScrollCapture: true,
	  onWheelCapture: true,
	  onAbortCapture: true,
	  onCanPlayCapture: true,
	  onCanPlayThroughCapture: true,
	  onDurationChangeCapture: true,
	  onEmptiedCapture: true,
	  onEncryptedCapture: true,
	  onEndedCapture: true,
	  onErrorCapture: true,
	  onLoadedDataCapture: true,
	  onLoadedMetadataCapture: true,
	  onLoadStartCapture: true,
	  onPauseCapture: true,
	  onPlayCapture: true,
	  onPlayingCapture: true,
	  onProgressCapture: true,
	  onRateChangeCapture: true,
	  onSeekedCapture: true,
	  onSeekingCapture: true,
	  onStalledCapture: true,
	  onSuspendCapture: true,
	  onTimeUpdateCapture: true,
	  onVolumeChangeCapture: true,
	  onWaitingCapture: true,
	  onLoadCapture: true,
	  onAnimationStartCapture: true,
	  onAnimationEndCapture: true,
	  onAnimationIterationCapture: true,
	  onTransitionEndCapture: true
	};
	
	/* From HTMLDOMPropertyConfig */
	var htmlProps = {
	  /**
	   * Standard Properties
	   */
	  accept: true,
	  acceptCharset: true,
	  accessKey: true,
	  action: true,
	  allowFullScreen: true,
	  allowTransparency: true,
	  alt: true,
	  // specifies target context for links with `preload` type
	  as: true,
	  async: true,
	  autoComplete: true,
	  // autoFocus is polyfilled/normalized by AutoFocusUtils
	  // autoFocus: true,
	  autoPlay: true,
	  capture: true,
	  cellPadding: true,
	  cellSpacing: true,
	  charSet: true,
	  challenge: true,
	  checked: true,
	  cite: true,
	  classID: true,
	  className: true,
	  cols: true,
	  colSpan: true,
	  content: true,
	  contentEditable: true,
	  contextMenu: true,
	  controls: true,
	  coords: true,
	  crossOrigin: true,
	  data: true, // For `<object />` acts as `src`.
	  dateTime: true,
	  default: true,
	  defer: true,
	  dir: true,
	  disabled: true,
	  download: true,
	  draggable: true,
	  encType: true,
	  form: true,
	  formAction: true,
	  formEncType: true,
	  formMethod: true,
	  formNoValidate: true,
	  formTarget: true,
	  frameBorder: true,
	  headers: true,
	  height: true,
	  hidden: true,
	  high: true,
	  href: true,
	  hrefLang: true,
	  htmlFor: true,
	  httpEquiv: true,
	  icon: true,
	  id: true,
	  inputMode: true,
	  integrity: true,
	  is: true,
	  keyParams: true,
	  keyType: true,
	  kind: true,
	  label: true,
	  lang: true,
	  list: true,
	  loop: true,
	  low: true,
	  manifest: true,
	  marginHeight: true,
	  marginWidth: true,
	  max: true,
	  maxLength: true,
	  media: true,
	  mediaGroup: true,
	  method: true,
	  min: true,
	  minLength: true,
	  // Caution; `option.selected` is not updated if `select.multiple` is
	  // disabled with `removeAttribute`.
	  multiple: true,
	  muted: true,
	  name: true,
	  nonce: true,
	  noValidate: true,
	  open: true,
	  optimum: true,
	  pattern: true,
	  placeholder: true,
	  playsInline: true,
	  poster: true,
	  preload: true,
	  profile: true,
	  radioGroup: true,
	  readOnly: true,
	  referrerPolicy: true,
	  rel: true,
	  required: true,
	  reversed: true,
	  role: true,
	  rows: true,
	  rowSpan: true,
	  sandbox: true,
	  scope: true,
	  scoped: true,
	  scrolling: true,
	  seamless: true,
	  selected: true,
	  shape: true,
	  size: true,
	  sizes: true,
	  span: true,
	  spellCheck: true,
	  src: true,
	  srcDoc: true,
	  srcLang: true,
	  srcSet: true,
	  start: true,
	  step: true,
	  style: true,
	  summary: true,
	  tabIndex: true,
	  target: true,
	  title: true,
	  // Setting .type throws on non-<input> tags
	  type: true,
	  useMap: true,
	  value: true,
	  width: true,
	  wmode: true,
	  wrap: true,
	
	  /**
	   * RDFa Properties
	   */
	  about: true,
	  datatype: true,
	  inlist: true,
	  prefix: true,
	  // property is also supported for OpenGraph in meta tags.
	  property: true,
	  resource: true,
	  typeof: true,
	  vocab: true,
	
	  /**
	   * Non-standard Properties
	   */
	  // autoCapitalize and autoCorrect are supported in Mobile Safari for
	  // keyboard hints.
	  autoCapitalize: true,
	  autoCorrect: true,
	  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	  autoSave: true,
	  // color is for Safari mask-icon link
	  color: true,
	  // itemProp, itemScope, itemType are for
	  // Microdata support. See http://schema.org/docs/gs.html
	  itemProp: true,
	  itemScope: true,
	  itemType: true,
	  // itemID and itemRef are for Microdata support as well but
	  // only specified in the WHATWG spec document. See
	  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	  itemID: true,
	  itemRef: true,
	  // results show looking glass icon and recent searches on input
	  // search fields in WebKit/Blink
	  results: true,
	  // IE-only attribute that specifies security restrictions on an iframe
	  // as an alternative to the sandbox attribute on IE<10
	  security: true,
	  // IE-only attribute that controls focus behavior
	  unselectable: 0
	};
	
	var svgProps = {
	  accentHeight: true,
	  accumulate: true,
	  additive: true,
	  alignmentBaseline: true,
	  allowReorder: true,
	  alphabetic: true,
	  amplitude: true,
	  arabicForm: true,
	  ascent: true,
	  attributeName: true,
	  attributeType: true,
	  autoReverse: true,
	  azimuth: true,
	  baseFrequency: true,
	  baseProfile: true,
	  baselineShift: true,
	  bbox: true,
	  begin: true,
	  bias: true,
	  by: true,
	  calcMode: true,
	  capHeight: true,
	  clip: true,
	  clipPath: true,
	  clipRule: true,
	  clipPathUnits: true,
	  colorInterpolation: true,
	  colorInterpolationFilters: true,
	  colorProfile: true,
	  colorRendering: true,
	  contentScriptType: true,
	  contentStyleType: true,
	  cursor: true,
	  cx: true,
	  cy: true,
	  d: true,
	  decelerate: true,
	  descent: true,
	  diffuseConstant: true,
	  direction: true,
	  display: true,
	  divisor: true,
	  dominantBaseline: true,
	  dur: true,
	  dx: true,
	  dy: true,
	  edgeMode: true,
	  elevation: true,
	  enableBackground: true,
	  end: true,
	  exponent: true,
	  externalResourcesRequired: true,
	  fill: true,
	  fillOpacity: true,
	  fillRule: true,
	  filter: true,
	  filterRes: true,
	  filterUnits: true,
	  floodColor: true,
	  floodOpacity: true,
	  focusable: true,
	  fontFamily: true,
	  fontSize: true,
	  fontSizeAdjust: true,
	  fontStretch: true,
	  fontStyle: true,
	  fontVariant: true,
	  fontWeight: true,
	  format: true,
	  from: true,
	  fx: true,
	  fy: true,
	  g1: true,
	  g2: true,
	  glyphName: true,
	  glyphOrientationHorizontal: true,
	  glyphOrientationVertical: true,
	  glyphRef: true,
	  gradientTransform: true,
	  gradientUnits: true,
	  hanging: true,
	  horizAdvX: true,
	  horizOriginX: true,
	  ideographic: true,
	  imageRendering: true,
	  in: true,
	  in2: true,
	  intercept: true,
	  k: true,
	  k1: true,
	  k2: true,
	  k3: true,
	  k4: true,
	  kernelMatrix: true,
	  kernelUnitLength: true,
	  kerning: true,
	  keyPoints: true,
	  keySplines: true,
	  keyTimes: true,
	  lengthAdjust: true,
	  letterSpacing: true,
	  lightingColor: true,
	  limitingConeAngle: true,
	  local: true,
	  markerEnd: true,
	  markerMid: true,
	  markerStart: true,
	  markerHeight: true,
	  markerUnits: true,
	  markerWidth: true,
	  mask: true,
	  maskContentUnits: true,
	  maskUnits: true,
	  mathematical: true,
	  mode: true,
	  numOctaves: true,
	  offset: true,
	  opacity: true,
	  operator: true,
	  order: true,
	  orient: true,
	  orientation: true,
	  origin: true,
	  overflow: true,
	  overlinePosition: true,
	  overlineThickness: true,
	  paintOrder: true,
	  panose1: true,
	  pathLength: true,
	  patternContentUnits: true,
	  patternTransform: true,
	  patternUnits: true,
	  pointerEvents: true,
	  points: true,
	  pointsAtX: true,
	  pointsAtY: true,
	  pointsAtZ: true,
	  preserveAlpha: true,
	  preserveAspectRatio: true,
	  primitiveUnits: true,
	  r: true,
	  radius: true,
	  refX: true,
	  refY: true,
	  renderingIntent: true,
	  repeatCount: true,
	  repeatDur: true,
	  requiredExtensions: true,
	  requiredFeatures: true,
	  restart: true,
	  result: true,
	  rotate: true,
	  rx: true,
	  ry: true,
	  scale: true,
	  seed: true,
	  shapeRendering: true,
	  slope: true,
	  spacing: true,
	  specularConstant: true,
	  specularExponent: true,
	  speed: true,
	  spreadMethod: true,
	  startOffset: true,
	  stdDeviation: true,
	  stemh: true,
	  stemv: true,
	  stitchTiles: true,
	  stopColor: true,
	  stopOpacity: true,
	  strikethroughPosition: true,
	  strikethroughThickness: true,
	  string: true,
	  stroke: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeLinecap: true,
	  strokeLinejoin: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true,
	  surfaceScale: true,
	  systemLanguage: true,
	  tableValues: true,
	  targetX: true,
	  targetY: true,
	  textAnchor: true,
	  textDecoration: true,
	  textRendering: true,
	  textLength: true,
	  to: true,
	  transform: true,
	  u1: true,
	  u2: true,
	  underlinePosition: true,
	  underlineThickness: true,
	  unicode: true,
	  unicodeBidi: true,
	  unicodeRange: true,
	  unitsPerEm: true,
	  vAlphabetic: true,
	  vHanging: true,
	  vIdeographic: true,
	  vMathematical: true,
	  values: true,
	  vectorEffect: true,
	  version: true,
	  vertAdvY: true,
	  vertOriginX: true,
	  vertOriginY: true,
	  viewBox: true,
	  viewTarget: true,
	  visibility: true,
	  widths: true,
	  wordSpacing: true,
	  writingMode: true,
	  x: true,
	  xHeight: true,
	  x1: true,
	  x2: true,
	  xChannelSelector: true,
	  xlinkActuate: true,
	  xlinkArcrole: true,
	  xlinkHref: true,
	  xlinkRole: true,
	  xlinkShow: true,
	  xlinkTitle: true,
	  xlinkType: true,
	  xmlBase: true,
	  xmlns: true,
	  xmlnsXlink: true,
	  xmlLang: true,
	  xmlSpace: true,
	  y: true,
	  y1: true,
	  y2: true,
	  yChannelSelector: true,
	  z: true,
	  zoomAndPan: true
	};
	
	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	
	var hasOwnProperty = {}.hasOwnProperty;
	
	exports.default = function (name) {
	  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
	};
	
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	
	high performance StyleSheet for css-in-js systems
	
	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side
	
	
	// usage
	
	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()
	
	styleSheet.inject()
	- 'injects' the stylesheet into the page (or into memory if on server)
	
	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet
	
	styleSheet.flush()
	- empties the stylesheet of all its contents
	
	
	*/
	
	function last(arr) {
	  return arr[arr.length - 1];
	}
	
	function sheetForTag(tag) {
	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      return document.styleSheets[i];
	    }
	  }
	}
	
	var isBrowser = typeof document !== 'undefined';
	var isDev = function (x) {
	  return x === 'development' || !x;
	}(process.env.NODE_ENV);
	var isTest = process.env.NODE_ENV === 'test';
	
	var oldIE = function () {
	  if (isBrowser) {
	    var div = document.createElement('div');
	    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
	    return div.getElementsByTagName('i').length === 1;
	  }
	}();
	
	function makeStyleTag() {
	  var tag = document.createElement('style');
	  tag.type = 'text/css';
	  tag.appendChild(document.createTextNode(''));
	  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
	  return tag;
	}
	
	var StyleSheet = exports.StyleSheet = function () {
	  function StyleSheet() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$speedy = _ref.speedy,
	        speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
	        _ref$maxLength = _ref.maxLength,
	        maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;
	
	    _classCallCheck(this, StyleSheet);
	
	    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
	    this.sheet = undefined;
	    this.tags = [];
	    this.maxLength = maxLength;
	    this.ctr = 0;
	  }
	
	  _createClass(StyleSheet, [{
	    key: 'inject',
	    value: function inject() {
	      var _this = this;
	
	      if (this.injected) {
	        throw new Error('already injected stylesheet!');
	      }
	      if (isBrowser) {
	        // this section is just weird alchemy I found online off many sources
	        this.tags[0] = makeStyleTag();
	        // this weirdness brought to you by firefox
	        this.sheet = sheetForTag(this.tags[0]);
	      } else {
	        // server side 'polyfill'. just enough behavior to be useful.
	        this.sheet = {
	          cssRules: [],
	          insertRule: function insertRule(rule) {
	            // enough 'spec compliance' to be able to extract the rules later
	            // in other words, just the cssText field
	            var serverRule = { cssText: rule };
	            _this.sheet.cssRules.push(serverRule);
	            return { serverRule: serverRule, appendRule: function appendRule(newCss) {
	                return serverRule.cssText += newCss;
	              } };
	          }
	        };
	      }
	      this.injected = true;
	    }
	  }, {
	    key: 'speedy',
	    value: function speedy(bool) {
	      if (this.ctr !== 0) {
	        throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
	      }
	      this.isSpeedy = !!bool;
	    }
	  }, {
	    key: '_insert',
	    value: function _insert(rule) {
	      // this weirdness for perf, and chrome's weird bug
	      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	      try {
	        this.sheet.insertRule(rule, this.sheet.cssRules.length); // todo - correct index here
	      } catch (e) {
	        if (isDev) {
	          // might need beter dx for this
	          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
	        }
	      }
	    }
	  }, {
	    key: 'insert',
	    value: function insert(rule) {
	      var insertedRule = void 0;
	
	      if (isBrowser) {
	        // this is the ultrafast version, works across browsers
	        if (this.isSpeedy && this.sheet.insertRule) {
	          this._insert(rule);
	        } else {
	          var textNode = document.createTextNode(rule);
	          last(this.tags).appendChild(textNode);
	          insertedRule = { textNode: textNode, appendRule: function appendRule(newCss) {
	              return textNode.appendData(newCss);
	            } };
	
	          if (!this.isSpeedy) {
	            // sighhh
	            this.sheet = sheetForTag(last(this.tags));
	          }
	        }
	      } else {
	        // server side is pretty simple
	        insertedRule = this.sheet.insertRule(rule);
	      }
	
	      this.ctr++;
	      if (isBrowser && this.ctr % this.maxLength === 0) {
	        this.tags.push(makeStyleTag());
	        this.sheet = sheetForTag(last(this.tags));
	      }
	      return insertedRule;
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      if (isBrowser) {
	        this.tags.forEach(function (tag) {
	          return tag.parentNode.removeChild(tag);
	        });
	        this.tags = [];
	        this.sheet = null;
	        this.ctr = 0;
	        // todo - look for remnants in document.styleSheets
	      } else {
	        // simpler on server
	        this.sheet.cssRules = [];
	      }
	      this.injected = false;
	    }
	  }, {
	    key: 'rules',
	    value: function rules() {
	      if (!isBrowser) {
	        return this.sheet.cssRules;
	      }
	      var arr = [];
	      this.tags.forEach(function (tag) {
	        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
	      });
	      return arr;
	    }
	  }]);
	
	  return StyleSheet;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101)))

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tokenize2 = __webpack_require__(21);
	
	var _tokenize3 = _interopRequireDefault(_tokenize2);
	
	var _comment = __webpack_require__(16);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _parser = __webpack_require__(41);
	
	var _parser2 = _interopRequireDefault(_parser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SafeParser = function (_Parser) {
	    _inherits(SafeParser, _Parser);
	
	    function SafeParser() {
	        _classCallCheck(this, SafeParser);
	
	        return _possibleConstructorReturn(this, (SafeParser.__proto__ || Object.getPrototypeOf(SafeParser)).apply(this, arguments));
	    }
	
	    _createClass(SafeParser, [{
	        key: 'tokenize',
	        value: function tokenize() {
	            this.tokens = (0, _tokenize3.default)(this.input, { ignoreErrors: true });
	        }
	    }, {
	        key: 'comment',
	        value: function comment(token) {
	            var node = new _comment2.default();
	            this.init(node, token[2], token[3]);
	            node.source.end = { line: token[4], column: token[5] };
	
	            var text = token[1].slice(2);
	            if (text.slice(-2) === '*/') text = text.slice(0, -2);
	
	            if (/^\s*$/.test(text)) {
	                node.text = '';
	                node.raws.left = text;
	                node.raws.right = '';
	            } else {
	                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
	                node.text = match[2];
	                node.raws.left = match[1];
	                node.raws.right = match[3];
	            }
	        }
	    }, {
	        key: 'unclosedBracket',
	        value: function unclosedBracket() {}
	    }, {
	        key: 'unknownWord',
	        value: function unknownWord(start) {
	            var buffer = this.tokens.slice(start, this.pos + 1);
	            this.spaces += buffer.map(function (i) {
	                return i[1];
	            }).join('');
	        }
	    }, {
	        key: 'unexpectedClose',
	        value: function unexpectedClose() {
	            this.current.raws.after += '}';
	        }
	    }, {
	        key: 'doubleColon',
	        value: function doubleColon() {}
	    }, {
	        key: 'unnamedAtrule',
	        value: function unnamedAtrule(node) {
	            node.name = '';
	        }
	    }, {
	        key: 'precheckMissedSemicolon',
	        value: function precheckMissedSemicolon(tokens) {
	            var colon = this.colon(tokens);
	            if (colon === false) return;
	
	            var split = void 0;
	            for (split = colon - 1; split >= 0; split--) {
	                if (tokens[split][0] === 'word') break;
	            }
	            for (split -= 1; split >= 0; split--) {
	                if (tokens[split][0] !== 'space') {
	                    split += 1;
	                    break;
	                }
	            }
	            var other = tokens.splice(split, tokens.length - split);
	            this.decl(other);
	        }
	    }, {
	        key: 'checkMissedSemicolon',
	        value: function checkMissedSemicolon() {}
	    }, {
	        key: 'endFile',
	        value: function endFile() {
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	
	            while (this.current.parent) {
	                this.current = this.current.parent;
	                this.current.raws.after = '';
	            }
	        }
	    }]);
	
	    return SafeParser;
	}(_parser2.default);
	
	exports.default = SafeParser;
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Contains helpers for safely splitting lists of CSS values,
	 * preserving parentheses and quotes.
	 *
	 * @example
	 * const list = postcss.list;
	 *
	 * @namespace list
	 */
	var list = {
	    split: function split(string, separators, last) {
	        var array = [];
	        var current = '';
	        var split = false;
	
	        var func = 0;
	        var quote = false;
	        var escape = false;
	
	        for (var i = 0; i < string.length; i++) {
	            var letter = string[i];
	
	            if (quote) {
	                if (escape) {
	                    escape = false;
	                } else if (letter === '\\') {
	                    escape = true;
	                } else if (letter === quote) {
	                    quote = false;
	                }
	            } else if (letter === '"' || letter === '\'') {
	                quote = letter;
	            } else if (letter === '(') {
	                func += 1;
	            } else if (letter === ')') {
	                if (func > 0) func -= 1;
	            } else if (func === 0) {
	                if (separators.indexOf(letter) !== -1) split = true;
	            }
	
	            if (split) {
	                if (current !== '') array.push(current.trim());
	                current = '';
	                split = false;
	            } else {
	                current += letter;
	            }
	        }
	
	        if (last || current !== '') array.push(current.trim());
	        return array;
	    },
	
	
	    /**
	     * Safely splits space-separated values (such as those for `background`,
	     * `border-radius`, and other shorthand properties).
	     *
	     * @param {string} string - space-separated values
	     *
	     * @return {string[]} splitted values
	     *
	     * @example
	     * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
	     */
	    space: function space(string) {
	        var spaces = [' ', '\n', '\t'];
	        return list.split(string, spaces);
	    },
	
	
	    /**
	     * Safely splits comma-separated values (such as those for `transition-*`
	     * and `background` properties).
	     *
	     * @param {string} string - comma-separated values
	     *
	     * @return {string[]} splitted values
	     *
	     * @example
	     * postcss.list.comma('black, linear-gradient(white, black)')
	     * //=> ['black', 'linear-gradient(white, black)']
	     */
	    comma: function comma(string) {
	        var comma = ',';
	        return list.split(string, [comma], true);
	    }
	};
	
	exports.default = list;
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lazyResult = __webpack_require__(39);
	
	var _lazyResult2 = _interopRequireDefault(_lazyResult);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @callback builder
	 * @param {string} part          - part of generated CSS connected to this node
	 * @param {Node}   node          - AST node
	 * @param {"start"|"end"} [type] - node’s part type
	 */
	
	/**
	 * @callback parser
	 *
	 * @param {string|toString} css   - string with input CSS or any object
	 *                                  with toString() method, like a Buffer
	 * @param {processOptions} [opts] - options with only `from` and `map` keys
	 *
	 * @return {Root} PostCSS AST
	 */
	
	/**
	 * @callback stringifier
	 *
	 * @param {Node} node       - start node for stringifing. Usually {@link Root}.
	 * @param {builder} builder - function to concatenate CSS from node’s parts
	 *                            or generate string and source map
	 *
	 * @return {void}
	 */
	
	/**
	 * @typedef {object} syntax
	 * @property {parser} parse          - function to generate AST by string
	 * @property {stringifier} stringify - function to generate string by AST
	 */
	
	/**
	 * @typedef {object} toString
	 * @property {function} toString
	 */
	
	/**
	 * @callback pluginFunction
	 * @param {Root} root     - parsed input CSS
	 * @param {Result} result - result to set warnings or check other plugins
	 */
	
	/**
	 * @typedef {object} Plugin
	 * @property {function} postcss - PostCSS plugin function
	 */
	
	/**
	 * @typedef {object} processOptions
	 * @property {string} from             - the path of the CSS source file.
	 *                                       You should always set `from`,
	 *                                       because it is used in source map
	 *                                       generation and syntax error messages.
	 * @property {string} to               - the path where you’ll put the output
	 *                                       CSS file. You should always set `to`
	 *                                       to generate correct source maps.
	 * @property {parser} parser           - function to generate AST by string
	 * @property {stringifier} stringifier - class to generate string by AST
	 * @property {syntax} syntax           - object with `parse` and `stringify`
	 * @property {object} map              - source map options
	 * @property {boolean} map.inline                    - does source map should
	 *                                                     be embedded in the output
	 *                                                     CSS as a base64-encoded
	 *                                                     comment
	 * @property {string|object|false|function} map.prev - source map content
	 *                                                     from a previous
	 *                                                     processing step
	 *                                                     (for example, Sass).
	 *                                                     PostCSS will try to find
	 *                                                     previous map
	 *                                                     automatically, so you
	 *                                                     could disable it by
	 *                                                     `false` value.
	 * @property {boolean} map.sourcesContent            - does PostCSS should set
	 *                                                     the origin content to map
	 * @property {string|false} map.annotation           - does PostCSS should set
	 *                                                     annotation comment to map
	 * @property {string} map.from                       - override `from` in map’s
	 *                                                     `sources`
	 */
	
	/**
	 * Contains plugins to process CSS. Create one `Processor` instance,
	 * initialize its plugins, and then use that instance on numerous CSS files.
	 *
	 * @example
	 * const processor = postcss([autoprefixer, precss]);
	 * processor.process(css1).then(result => console.log(result.css));
	 * processor.process(css2).then(result => console.log(result.css));
	 */
	var Processor = function () {
	
	  /**
	   * @param {Array.<Plugin|pluginFunction>|Processor} plugins - PostCSS
	   *        plugins. See {@link Processor#use} for plugin format.
	   */
	  function Processor() {
	    var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    _classCallCheck(this, Processor);
	
	    /**
	     * @member {string} - Current PostCSS version.
	     *
	     * @example
	     * if ( result.processor.version.split('.')[0] !== '5' ) {
	     *   throw new Error('This plugin works only with PostCSS 5');
	     * }
	     */
	    this.version = '5.2.0';
	    /**
	     * @member {pluginFunction[]} - Plugins added to this processor.
	     *
	     * @example
	     * const processor = postcss([autoprefixer, precss]);
	     * processor.plugins.length //=> 2
	     */
	    this.plugins = this.normalize(plugins);
	  }
	
	  /**
	   * Adds a plugin to be used as a CSS processor.
	   *
	   * PostCSS plugin can be in 4 formats:
	   * * A plugin created by {@link postcss.plugin} method.
	   * * A function. PostCSS will pass the function a @{link Root}
	   *   as the first argument and current {@link Result} instance
	   *   as the second.
	   * * An object with a `postcss` method. PostCSS will use that method
	   *   as described in #2.
	   * * Another {@link Processor} instance. PostCSS will copy plugins
	   *   from that instance into this one.
	   *
	   * Plugins can also be added by passing them as arguments when creating
	   * a `postcss` instance (see [`postcss(plugins)`]).
	   *
	   * Asynchronous plugins should return a `Promise` instance.
	   *
	   * @param {Plugin|pluginFunction|Processor} plugin - PostCSS plugin
	   *                                                   or {@link Processor}
	   *                                                   with plugins
	   *
	   * @example
	   * const processor = postcss()
	   *   .use(autoprefixer)
	   *   .use(precss);
	   *
	   * @return {Processes} current processor to make methods chain
	   */
	
	
	  _createClass(Processor, [{
	    key: 'use',
	    value: function use(plugin) {
	      this.plugins = this.plugins.concat(this.normalize([plugin]));
	      return this;
	    }
	
	    /**
	     * Parses source CSS and returns a {@link LazyResult} Promise proxy.
	     * Because some plugins can be asynchronous it doesn’t make
	     * any transformations. Transformations will be applied
	     * in the {@link LazyResult} methods.
	     *
	     * @param {string|toString|Result} css - String with input CSS or
	     *                                       any object with a `toString()`
	     *                                       method, like a Buffer.
	     *                                       Optionally, send a {@link Result}
	     *                                       instance and the processor will
	     *                                       take the {@link Root} from it.
	     * @param {processOptions} [opts]      - options
	     *
	     * @return {LazyResult} Promise proxy
	     *
	     * @example
	     * processor.process(css, { from: 'a.css', to: 'a.out.css' })
	     *   .then(result => {
	     *      console.log(result.css);
	     *   });
	     */
	
	  }, {
	    key: 'process',
	    value: function process(css) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      return new _lazyResult2.default(this, css, opts);
	    }
	  }, {
	    key: 'normalize',
	    value: function normalize(plugins) {
	      var normalized = [];
	      plugins.forEach(function (i) {
	        if (i.postcss) i = i.postcss;
	
	        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && Array.isArray(i.plugins)) {
	          normalized = normalized.concat(i.plugins);
	        } else if (typeof i === 'function') {
	          normalized.push(i);
	        } else {
	          throw new Error(i + ' is not a PostCSS plugin');
	        }
	      });
	      return normalized;
	    }
	  }]);
	
	  return Processor;
	}();
	
	exports.default = Processor;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _warning = __webpack_require__(121);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @typedef  {object} Message
	 * @property {string} type   - message type
	 * @property {string} plugin - source PostCSS plugin name
	 */
	
	/**
	 * Provides the result of the PostCSS transformations.
	 *
	 * A Result instance is returned by {@link LazyResult#then}
	 * or {@link Root#toResult} methods.
	 *
	 * @example
	 * postcss([cssnext]).process(css).then(function (result) {
	 *    console.log(result.css);
	 * });
	 *
	 * @example
	 * var result2 = postcss.parse(css).toResult();
	 */
	var Result = function () {
	
	  /**
	   * @param {Processor} processor - processor used for this transformation.
	   * @param {Root}      root      - Root node after all transformations.
	   * @param {processOptions} opts - options from the {@link Processor#process}
	   *                                or {@link Root#toResult}
	   */
	  function Result(processor, root, opts) {
	    _classCallCheck(this, Result);
	
	    /**
	     * @member {Processor} - The Processor instance used
	     *                       for this transformation.
	     *
	     * @example
	     * for ( let plugin of result.processor.plugins) {
	     *   if ( plugin.postcssPlugin === 'postcss-bad' ) {
	     *     throw 'postcss-good is incompatible with postcss-bad';
	     *   }
	     * });
	     */
	    this.processor = processor;
	    /**
	     * @member {Message[]} - Contains messages from plugins
	     *                       (e.g., warnings or custom messages).
	     *                       Each message should have type
	     *                       and plugin properties.
	     *
	     * @example
	     * postcss.plugin('postcss-min-browser', () => {
	     *   return (root, result) => {
	     *     var browsers = detectMinBrowsersByCanIUse(root);
	     *     result.messages.push({
	     *       type:    'min-browser',
	     *       plugin:  'postcss-min-browser',
	     *       browsers: browsers
	     *     });
	     *   };
	     * });
	     */
	    this.messages = [];
	    /**
	     * @member {Root} - Root node after all transformations.
	     *
	     * @example
	     * root.toResult().root == root;
	     */
	    this.root = root;
	    /**
	     * @member {processOptions} - Options from the {@link Processor#process}
	     *                            or {@link Root#toResult} call
	     *                            that produced this Result instance.
	     *
	     * @example
	     * root.toResult(opts).opts == opts;
	     */
	    this.opts = opts;
	    /**
	     * @member {string} - A CSS string representing of {@link Result#root}.
	     *
	     * @example
	     * postcss.parse('a{}').toResult().css //=> "a{}"
	     */
	    this.css = undefined;
	    /**
	     * @member {SourceMapGenerator} - An instance of `SourceMapGenerator`
	     *                                class from the `source-map` library,
	     *                                representing changes
	     *                                to the {@link Result#root} instance.
	     *
	     * @example
	     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
	     *
	     * @example
	     * if ( result.map ) {
	     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString());
	     * }
	     */
	    this.map = undefined;
	  }
	
	  /**
	   * Returns for @{link Result#css} content.
	   *
	   * @example
	   * result + '' === result.css
	   *
	   * @return {string} string representing of {@link Result#root}
	   */
	
	
	  _createClass(Result, [{
	    key: 'toString',
	    value: function toString() {
	      return this.css;
	    }
	
	    /**
	     * Creates an instance of {@link Warning} and adds it
	     * to {@link Result#messages}.
	     *
	     * @param {string} text        - warning message
	     * @param {Object} [opts]      - warning options
	     * @param {Node}   opts.node   - CSS node that caused the warning
	     * @param {string} opts.word   - word in CSS source that caused the warning
	     * @param {number} opts.index  - index in CSS node string that caused
	     *                               the warning
	     * @param {string} opts.plugin - name of the plugin that created
	     *                               this warning. {@link Result#warn} fills
	     *                               this property automatically.
	     *
	     * @return {Warning} created warning
	     */
	
	  }, {
	    key: 'warn',
	    value: function warn(text) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      if (!opts.plugin) {
	        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
	          opts.plugin = this.lastPlugin.postcssPlugin;
	        }
	      }
	
	      var warning = new _warning2.default(text, opts);
	      this.messages.push(warning);
	
	      return warning;
	    }
	
	    /**
	     * Returns warnings from plugins. Filters {@link Warning} instances
	     * from {@link Result#messages}.
	     *
	     * @example
	     * result.warnings().forEach(warn => {
	     *   console.warn(warn.toString());
	     * });
	     *
	     * @return {Warning[]} warnings from plugins
	     */
	
	  }, {
	    key: 'warnings',
	    value: function warnings() {
	      return this.messages.filter(function (i) {
	        return i.type === 'warning';
	      });
	    }
	
	    /**
	     * An alias for the {@link Result#css} property.
	     * Use it with syntaxes that generate non-CSS output.
	     * @type {string}
	     *
	     * @example
	     * result.css === result.content;
	     */
	
	  }, {
	    key: 'content',
	    get: function get() {
	      return this.css;
	    }
	  }]);
	
	  return Result;
	}();
	
	exports.default = Result;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tokenize = __webpack_require__(21);
	
	var _tokenize2 = _interopRequireDefault(_tokenize);
	
	var _input = __webpack_require__(17);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HIGHLIGHT_THEME = {
	    'brackets': [36, 39], // cyan
	    'string': [31, 39], // red
	    'at-word': [31, 39], // red
	    'comment': [90, 39], // gray
	    '{': [32, 39], // green
	    '}': [32, 39], // green
	    ':': [1, 22], // bold
	    ';': [1, 22], // bold
	    '(': [1, 22], // bold
	    ')': [1, 22] // bold
	};
	
	function code(color) {
	    return '\x1B[' + color + 'm';
	}
	
	function terminalHighlight(css) {
	    var tokens = (0, _tokenize2.default)(new _input2.default(css), { ignoreErrors: true });
	    var result = [];
	    tokens.forEach(function (token) {
	        var color = HIGHLIGHT_THEME[token[0]];
	        if (color) {
	            result.push(token[1].split(/\r?\n/).map(function (i) {
	                return code(color[0]) + i + code(color[1]);
	            }).join('\n'));
	        } else {
	            result.push(token[1]);
	        }
	    });
	    return result.join('');
	}
	
	exports.default = terminalHighlight;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
	 *
	 * @example
	 * if ( decl.important ) {
	 *     decl.warn(result, 'Avoid !important', { word: '!important' });
	 * }
	 */
	var Warning = function () {
	
	  /**
	   * @param {string} text        - warning message
	   * @param {Object} [opts]      - warning options
	   * @param {Node}   opts.node   - CSS node that caused the warning
	   * @param {string} opts.word   - word in CSS source that caused the warning
	   * @param {number} opts.index  - index in CSS node string that caused
	   *                               the warning
	   * @param {string} opts.plugin - name of the plugin that created
	   *                               this warning. {@link Result#warn} fills
	   *                               this property automatically.
	   */
	  function Warning(text) {
	    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, Warning);
	
	    /**
	     * @member {string} - Type to filter warnings from
	     *                    {@link Result#messages}. Always equal
	     *                    to `"warning"`.
	     *
	     * @example
	     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
	     */
	    this.type = 'warning';
	    /**
	     * @member {string} - The warning message.
	     *
	     * @example
	     * warning.text //=> 'Try to avoid !important'
	     */
	    this.text = text;
	
	    if (opts.node && opts.node.source) {
	      var pos = opts.node.positionBy(opts);
	      /**
	       * @member {number} - Line in the input file
	       *                    with this warning’s source
	       *
	       * @example
	       * warning.line //=> 5
	       */
	      this.line = pos.line;
	      /**
	       * @member {number} - Column in the input file
	       *                    with this warning’s source.
	       *
	       * @example
	       * warning.column //=> 6
	       */
	      this.column = pos.column;
	    }
	
	    for (var opt in opts) {
	      this[opt] = opts[opt];
	    }
	  }
	
	  /**
	   * Returns a warning position and message.
	   *
	   * @example
	   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
	   *
	   * @return {string} warning position and message
	   */
	
	
	  _createClass(Warning, [{
	    key: 'toString',
	    value: function toString() {
	      if (this.node) {
	        return this.node.error(this.text, {
	          plugin: this.plugin,
	          index: this.index,
	          word: this.word
	        }).message;
	      } else if (this.plugin) {
	        return this.plugin + ': ' + this.text;
	      } else {
	        return this.text;
	      }
	    }
	
	    /**
	     * @memberof Warning#
	     * @member {string} plugin - The name of the plugin that created
	     *                           it will fill this property automatically.
	     *                           this warning. When you call {@link Node#warn}
	     *
	     * @example
	     * warning.plugin //=> 'postcss-important'
	     */
	
	    /**
	     * @memberof Warning#
	     * @member {Node} node - Contains the CSS node that caused the warning.
	     *
	     * @example
	     * warning.node.toString() //=> 'color: white !important'
	     */
	
	  }]);
	
	  return Warning;
	}();
	
	exports.default = Warning;
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';
	module.exports = false;


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi90eXBlcy5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3dhcm4tb25jZS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9UaGVtZVByb3ZpZGVyLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL2Nzcy5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL2luZGV4LmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvY29udGFpbmVyLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2ZsYXR0ZW4uanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9hdC1ydWxlLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvY29tbWVudC5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2lucHV0LmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3Mvbm9kZS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3Jvb3QuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9ydWxlLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvdG9rZW5pemUuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNS1lbnRpdGllcy5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL3BhZ2VzL21lZGlhUXVlcnkuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9oYXNoLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhQcm9wcy5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9jYXBpdGFsaXplU3RyaW5nLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1wbGFpbi1vYmplY3QvaW5kZXguanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvR2xvYmFsU3R5bGUuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvU3R5bGVTaGVldC5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2NyZWF0ZS1icm9hZGNhc3QuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy1uZXN0ZWQvaW5kZXguanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy1zYWZlLXBhcnNlci9wYXJzZS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2Nzcy1zeW50YXgtZXJyb3IuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9kZWNsYXJhdGlvbi5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2xhenktcmVzdWx0LmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcGFyc2UuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9wYXJzZXIuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9zdHJpbmdpZmllci5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3N0cmluZ2lmeS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vYW5zaS1yZWdleC9pbmRleC5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvaW5kZXguanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzPzg4OTlmODIiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9pbmRleC5qcz84ODk5ZjgyIiwid2VicGFjazovLy8uL34vc3RyaXAtYW5zaS9pbmRleC5qcz84ODk5ZjgyIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanM/ODg5OWY4MiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC5qcz84ODk5ZjgyIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvcHJvY2Vzcy11cGRhdGUuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2ZyZWV6ZS5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9mcmVlemUuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9jYW1lbGl6ZS5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2h5cGhlbmF0ZS5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvY2FsYy5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9jdXJzb3IuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvZmxleC5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94SUUuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvZmxleGJveE9sZC5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9ncmFkaWVudC5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9wb3NpdGlvbi5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9zaXppbmcuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvdHJhbnNpdGlvbi5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcHJlZml4QWxsLmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2lzUHJlZml4ZWRQcm9wZXJ0eS5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9zb3J0UHJlZml4ZWRTdHlsZS5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vaXMtZnVuY3Rpb24vaW5kZXguanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2lzYXJyYXkvaW5kZXguanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L2lzb2JqZWN0L2luZGV4LmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL2NvbnN0cnVjdG9ycy9pbmplY3RHbG9iYWwuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMva2V5ZnJhbWVzLmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL3N0eWxlZC5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL2hvYy93aXRoVGhlbWUuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvQWJzdHJhY3RTdHlsZWRDb21wb25lbnQuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvQ29tcG9uZW50U3R5bGUuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvU3R5bGVkQ29tcG9uZW50LmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvYXV0b3ByZWZpeC5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2RvbUVsZW1lbnRzLmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZ2VuZXJhdGVBbHBoYWJldGljTmFtZS5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2ludGVybGVhdmUuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9pc1RhZy5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL3ZhbGlkQXR0ci5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9nbGFtb3Ivc2hlZXQuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy1zYWZlLXBhcnNlci9zYWZlLXBhcnNlci5qcz8wZDU4YTYzIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2xpc3QuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9wcm9jZXNzb3IuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9yZXN1bHQuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy90ZXJtaW5hbC1oaWdobGlnaHQuanM/MGQ1OGE2MyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy93YXJuaW5nLmpzPzBkNThhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBwb3J0cy1jb2xvci9icm93c2VyLmpzPzBkNThhNjMiXSwibmFtZXMiOlsic2l6ZXMiLCJnaWFudCIsImRlc2t0b3AiLCJ0YWJsZXQiLCJidHduVGFibGV0QW5kTW9iaWxlIiwibW9iaWxlIiwibWVkaWFRdWVyeSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwibGFiZWwiLCJlbVNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRCw4Qjs7Ozs7O0FDVEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsNENB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsOENBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFD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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsWUFBWSxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQixFQUFFO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTBGOztBQUUxRjtBQUNBLHdCQUF1QjtBQUN2QixxQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7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LElBQUcsSUFBSTtBQUNQO0FBQ0EscUM7Ozs7OztBQzFCQTs7Ozs7OztBQ0FBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUN2bEJBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixtQ0FBa0MsMEJBQTBCLDBDQUEwQyxnQkFBZ0IsT0FBTyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsT0FBTyx3QkFBd0IsRUFBRTs7QUFFak0sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQXlCLHVCQUF1QixFQUFFO0FBQ2xEOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0U7QUFDaEUsUUFBTztBQUNQO0FBQ0E7QUFDQSwrREFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsMkJBQTBCO0FBQzFCO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUMsRzs7Ozs7OztBQzlNRDs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQStELHFCQUFxQjtBQUNwRjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBeUM7QUFDekM7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQSw2QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUNoSUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsbUJBQW1CO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQSxpQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBLGlCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQy9GQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVEsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsS0FBSztBQUNoQixZQUFXLGNBQWM7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxnQkFBZ0I7QUFDM0I7QUFDQSxZQUFXLGVBQWU7QUFDMUI7QUFDQSxhQUFZLEtBQUs7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxLQUFLLG1EQUFtRCxXQUFXO0FBQzlFLFlBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EsYUFBWTtBQUNaOztBQUVBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGVBQWMsT0FBTztBQUNyQixlQUFjLFlBQVk7QUFDMUI7O0FBRUE7QUFDQSxjQUFhLE9BQU87QUFDcEIsZUFBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxZQUFXLEtBQUs7QUFDaEIsWUFBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGVBQWMsU0FBUztBQUN2Qjs7QUFFQTtBQUNBLGNBQWEsT0FBTztBQUNwQixlQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0EsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQSxlQUFjLE9BQU87QUFDckIsZUFBYyxZQUFZO0FBQzFCLGVBQWMsT0FBTztBQUNyQixlQUFjLE9BQU87QUFDckIsZUFBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGVBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLFFBQVE7QUFDdEI7QUFDQSxlQUFjLGFBQWE7QUFDM0I7QUFDQSxlQUFjLE9BQU87QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWEsd0NBQXdDO0FBQ3JELDJCQUEwQixvQkFBb0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIscUJBQXFCO0FBQ2pELHVEQUFzRDtBQUN0RCwyQ0FBMEMsYUFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxnQ0FBZ0M7QUFDN0MsNERBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxVQUFVO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQSxnQkFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBLHdEQUF1RCxXQUFXO0FBQ2xFLGdCQUFlLGVBQWU7QUFDOUI7QUFDQSxpQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0EsZ0NBQStCLGlDQUFpQztBQUNoRTtBQUNBO0FBQ0EsV0FBVTtBQUNWOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDdk9BOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQSxlQUFjLE9BQU87QUFDckIsZUFBYyxPQUFPO0FBQ3JCLGVBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckMsUUFBTyxvQkFBb0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWEsVUFBVTtBQUN2QixjQUFhLEtBQUs7QUFDbEIsY0FBYSxlQUFlLDBCQUEwQjtBQUN0RCx5Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixlQUFlLHFCQUFxQjtBQUNwRCx1Q0FBc0Msb0JBQW9CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLE9BQU8saUNBQWlDLGtCQUFrQjtBQUMxRTtBQUNBO0FBQ0EsMEJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQSwrQ0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLE9BQU8seUJBQXlCO0FBQzlDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQStCLGNBQWM7QUFDN0MsWUFBVyxzQkFBc0I7QUFDakM7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCLGdCQUFlLE9BQU87QUFDdEIsZ0JBQWUsS0FBSztBQUNwQixnQkFBZSxPQUFPO0FBQ3RCLGdCQUFlLE9BQU87QUFDdEI7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCLHFEQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBLGlCQUFnQixRQUFRO0FBQ3hCOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBK0MsY0FBYztBQUM3RCxjQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBLGlCQUFnQixVQUFVO0FBQzFCOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBLDBCQUF5QixpQkFBaUI7QUFDMUM7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDaE5BOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOLE9BQU07QUFDTjtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQW9FLHFCQUFxQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLHFDOzs7Ozs7QUNsREE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0EsNERBQTJELGdCQUFnQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEMscUJBQXFCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEIsY0FBYSxLQUFLO0FBQ2xCLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEI7QUFDQSxjQUFhLE9BQU87QUFDcEIsbURBQWtELGtCQUFrQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFnQixPQUFPO0FBQ3ZCLDRCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxPQUFPO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsK0RBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUNoSUE7QUFDQSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL21lZGlhUXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogdG9kbzogSSB3YW50IHRoaXMgdG8gYWN0dWFsbHkgYmUgYW4gYXJyYXkgb2YgRnVuY3Rpb24gfCBzdHJpbmcgYnV0IHRoYXQgY2F1c2VzIGVycm9ycyAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCBcImJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0dsYW1vclJ1bGVcIiwge1xuICB2YWx1ZTogcmVxdWlyZShcInJlYWN0XCIpLlByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3NzVGV4dDogcmVxdWlyZShcInJlYWN0XCIpLlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KVxufSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi90eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3YXJuT25jZTtcbnZhciBwcmludGVkID0ge307XG5cbmZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgICBpZiAocHJpbnRlZFttZXNzYWdlXSkgcmV0dXJuO1xuICAgIHByaW50ZWRbbWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3Mvd2Fybi1vbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNIQU5ORUwgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKTtcblxudmFyIF9pc0Z1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRnVuY3Rpb24pO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX2NyZWF0ZUJyb2FkY2FzdCA9IHJlcXVpcmUoJy4uL3V0aWxzL2NyZWF0ZS1icm9hZGNhc3QnKTtcblxudmFyIF9jcmVhdGVCcm9hZGNhc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQnJvYWRjYXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuLyogZ2xvYmFscyBSZWFjdCRFbGVtZW50ICovXG5cblxuLy8gTk9URTogRE8gTk9UIENIQU5HRSwgY2hhbmdpbmcgdGhpcyBpcyBhIHNlbXZlciBtYWpvciBjaGFuZ2UhXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfQnJvYWRjYXN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvY3JlYXRlLWJyb2FkY2FzdCcpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0Jyb2FkY2FzdCB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbnZhciBDSEFOTkVMID0gZXhwb3J0cy5DSEFOTkVMID0gJ19fc3R5bGVkLWNvbXBvbmVudHNfXyc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2JhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RoZW1lJywge1xuICB2YWx1ZTogcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuc2hhcGUoe30pXG59KTtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGhlbWUgdG8gYW4gZW50aXJlIHJlYWN0IGNvbXBvbmVudCB0cmVlIHZpYSBjb250ZXh0IGFuZCBldmVudCBsaXN0ZW5lcnMgKGhhdmUgdG8gZG9cbiAqIGJvdGggY29udGV4dCBhbmQgZXZlbnQgZW1pdHRlciBhcyBwdXJlIGNvbXBvbmVudHMgYmxvY2sgY29udGV4dCB1cGRhdGVzKVxuICovXG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUaGVtZVByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZVByb3ZpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUaGVtZVByb3ZpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGhlbWVQcm92aWRlcikpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuZ2V0VGhlbWUgPSBfdGhpcy5nZXRUaGVtZS5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGhlbWVQcm92aWRlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBUaGVtZVByb3ZpZGVyIHdyYXBwZXIgYW55d2hlcmUgYXJvdW5kIHRoaXMgdGhlbWUgcHJvdmlkZXIsIG1lcmdlIHRoaXMgdGhlbWVcbiAgICAgIC8vIHdpdGggdGhlIG91dGVyIHRoZW1lXG4gICAgICBpZiAodGhpcy5jb250ZXh0W0NIQU5ORUxdKSB7XG4gICAgICAgIHZhciBzdWJzY3JpYmUgPSB0aGlzLmNvbnRleHRbQ0hBTk5FTF07XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb091dGVyID0gc3Vic2NyaWJlKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAgIF90aGlzMi5vdXRlclRoZW1lID0gdGhlbWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5icm9hZGNhc3QgPSAoMCwgX2NyZWF0ZUJyb2FkY2FzdDIuZGVmYXVsdCkodGhpcy5nZXRUaGVtZSgpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMuY29udGV4dCwgX2RlZmluZVByb3BlcnR5KHt9LCBDSEFOTkVMLCB0aGlzLmJyb2FkY2FzdC5zdWJzY3JpYmUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRoZW1lICE9PSBuZXh0UHJvcHMudGhlbWUpIHRoaXMuYnJvYWRjYXN0LnB1Ymxpc2godGhpcy5nZXRUaGVtZShuZXh0UHJvcHMudGhlbWUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtDSEFOTkVMXSkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlVG9PdXRlcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgdGhlbWUgZnJvbSB0aGUgcHJvcHMsIHN1cHBvcnRpbmcgYm90aCAob3V0ZXJUaGVtZSkgPT4ge30gYXMgd2VsbCBhcyBvYmplY3Qgbm90YXRpb25cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VGhlbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaGVtZShwYXNzZWRUaGVtZSkge1xuICAgICAgdmFyIHRoZW1lID0gcGFzc2VkVGhlbWUgfHwgdGhpcy5wcm9wcy50aGVtZTtcbiAgICAgIGlmICgoMCwgX2lzRnVuY3Rpb24yLmRlZmF1bHQpKHRoZW1lKSkge1xuICAgICAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZSh0aGlzLm91dGVyVGhlbWUpO1xuICAgICAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkobWVyZ2VkVGhlbWUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIHRoZW1lIGZ1bmN0aW9uLCBpLmUuIHRoZW1lPXsoKSA9PiAoe30pfSEnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gICAgICB9XG4gICAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkodGhlbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSBtYWtlIHlvdXIgdGhlbWUgcHJvcCBhIHBsYWluIG9iamVjdCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLm91dGVyVGhlbWUsIHRoZW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRoZW1lUHJvdmlkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UaGVtZVByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueSxcbiAgdGhlbWU6IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLm9uZU9mVHlwZShbcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuc2hhcGUoe30pLCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZFxufTtcblxuXG5UaGVtZVByb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzID0gX2RlZmluZVByb3BlcnR5KHt9LCBDSEFOTkVMLCBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCk7XG5UaGVtZVByb3ZpZGVyLmNvbnRleHRUeXBlcyA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgQ0hBTk5FTCwgX3JlYWN0LlByb3BUeXBlcy5mdW5jKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGhlbWVQcm92aWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9UaGVtZVByb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydGllcyk7XG5cbnZhciBfZnJlZXplID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2ZyZWV6ZVwiKTtcblxudmFyIF9mcmVlemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJlZXplKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0cmluZ3MsIHJhdykge1xuICByZXR1cm4gKDAsIF9mcmVlemUyLmRlZmF1bHQpKCgwLCBfZGVmaW5lUHJvcGVydGllczIuZGVmYXVsdCkoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6ICgwLCBfZnJlZXplMi5kZWZhdWx0KShyYXcpXG4gICAgfVxuICB9KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vIHJldHVybnMgYSBzdHlsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBjb25jYXRlZCBwcmVmaXhlZCB2YWx1ZSBzdHJpbmdcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xuICB2YXIgcmVwbGFjZXIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAocHJlZml4LCB2YWx1ZSkge1xuICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgfSA6IGFyZ3VtZW50c1syXTtcbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICByZXR1cm4gcmVwbGFjZXIocHJlZml4LCB2YWx1ZSk7XG4gIH0pKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW50ZXJsZWF2ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ludGVybGVhdmUnKTtcblxudmFyIF9pbnRlcmxlYXZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVybGVhdmUpO1xuXG52YXIgX2ZsYXR0ZW4gPSByZXF1aXJlKCcuLi91dGlscy9mbGF0dGVuJyk7XG5cbnZhciBfZmxhdHRlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGF0dGVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1J1bGVTZXQgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1J1bGVTZXQgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdHJpbmdzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9mbGF0dGVuMi5kZWZhdWx0KSgoMCwgX2ludGVybGVhdmUyLmRlZmF1bHQpKHN0cmluZ3MsIGludGVycG9sYXRpb25zKSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL2NvbnN0cnVjdG9ycy9jc3MuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhUaGVtZSA9IGV4cG9ydHMuVGhlbWVQcm92aWRlciA9IGV4cG9ydHMuaW5qZWN0R2xvYmFsID0gZXhwb3J0cy5rZXlmcmFtZXMgPSBleHBvcnRzLmNzcyA9IHVuZGVmaW5lZDtcblxudmFyIF9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lID0gcmVxdWlyZSgnLi91dGlscy9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lJyk7XG5cbnZhciBfZ2VuZXJhdGVBbHBoYWJldGljTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lKTtcblxudmFyIF9jc3MgPSByZXF1aXJlKCcuL2NvbnN0cnVjdG9ycy9jc3MnKTtcblxudmFyIF9jc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzKTtcblxudmFyIF9pbmplY3RHbG9iYWwgPSByZXF1aXJlKCcuL2NvbnN0cnVjdG9ycy9pbmplY3RHbG9iYWwnKTtcblxudmFyIF9pbmplY3RHbG9iYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5qZWN0R2xvYmFsKTtcblxudmFyIF9TdHlsZWRDb21wb25lbnQgPSByZXF1aXJlKCcuL21vZGVscy9TdHlsZWRDb21wb25lbnQnKTtcblxudmFyIF9TdHlsZWRDb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVkQ29tcG9uZW50KTtcblxudmFyIF9zdHlsZWQyID0gcmVxdWlyZSgnLi9jb25zdHJ1Y3RvcnMvc3R5bGVkJyk7XG5cbnZhciBfc3R5bGVkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlZDIpO1xuXG52YXIgX2tleWZyYW1lczIgPSByZXF1aXJlKCcuL2NvbnN0cnVjdG9ycy9rZXlmcmFtZXMnKTtcblxudmFyIF9rZXlmcmFtZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5ZnJhbWVzMik7XG5cbnZhciBfQ29tcG9uZW50U3R5bGUyID0gcmVxdWlyZSgnLi9tb2RlbHMvQ29tcG9uZW50U3R5bGUnKTtcblxudmFyIF9Db21wb25lbnRTdHlsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnRTdHlsZTIpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKCcuL21vZGVscy9UaGVtZVByb3ZpZGVyJyk7XG5cbnZhciBfVGhlbWVQcm92aWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaGVtZVByb3ZpZGVyKTtcblxudmFyIF93aXRoVGhlbWUgPSByZXF1aXJlKCcuL2hvYy93aXRoVGhlbWUnKTtcblxudmFyIF93aXRoVGhlbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFRoZW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogSW5zdGFudGlhdGUgc2luZ2xldG9ucyAqL1xuXG5cbi8qIEltcG9ydCBjb21wb25lbnRzICovXG5cblxuLyogSW1wb3J0IHNpbmdsZXRvbiBjb25zdHJ1Y3RvcnMgKi9cbnZhciBrZXlmcmFtZXMgPSAoMCwgX2tleWZyYW1lczMuZGVmYXVsdCkoX2dlbmVyYXRlQWxwaGFiZXRpY05hbWUyLmRlZmF1bHQpO1xuXG4vKiBJbXBvcnQgSGlnaGVyIE9yZGVyIENvbXBvbmVudHMgKi9cblxuXG4vKiBJbXBvcnQgc2luZ2xldG9ucyAqL1xuXG52YXIgc3R5bGVkID0gKDAsIF9zdHlsZWQzLmRlZmF1bHQpKCgwLCBfU3R5bGVkQ29tcG9uZW50Mi5kZWZhdWx0KSgoMCwgX0NvbXBvbmVudFN0eWxlMy5kZWZhdWx0KShfZ2VuZXJhdGVBbHBoYWJldGljTmFtZTIuZGVmYXVsdCkpKTtcblxuLyogRXhwb3J0IGV2ZXJ5dGhpbmcgKi9cbmV4cG9ydHMuZGVmYXVsdCA9IHN0eWxlZDtcbmV4cG9ydHMuY3NzID0gX2NzczIuZGVmYXVsdDtcbmV4cG9ydHMua2V5ZnJhbWVzID0ga2V5ZnJhbWVzO1xuZXhwb3J0cy5pbmplY3RHbG9iYWwgPSBfaW5qZWN0R2xvYmFsMi5kZWZhdWx0O1xuZXhwb3J0cy5UaGVtZVByb3ZpZGVyID0gX1RoZW1lUHJvdmlkZXIyLmRlZmF1bHQ7XG5leHBvcnRzLndpdGhUaGVtZSA9IF93aXRoVGhlbWUyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5cbnZhciBfcGFyc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2UpO1xuXG52YXIgX3Jvb3QgPSByZXF1aXJlKCcuL3Jvb3QnKTtcblxudmFyIF9yb290MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jvb3QpO1xuXG52YXIgX3J1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxudmFyIF9ydWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1bGUpO1xuXG52YXIgX2F0UnVsZSA9IHJlcXVpcmUoJy4vYXQtcnVsZScpO1xuXG52YXIgX2F0UnVsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdFJ1bGUpO1xuXG52YXIgX2RlY2xhcmF0aW9uID0gcmVxdWlyZSgnLi9kZWNsYXJhdGlvbicpO1xuXG52YXIgX2RlY2xhcmF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY2xhcmF0aW9uKTtcblxudmFyIF93YXJuT25jZSA9IHJlcXVpcmUoJy4vd2Fybi1vbmNlJyk7XG5cbnZhciBfd2Fybk9uY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Fybk9uY2UpO1xuXG52YXIgX2NvbW1lbnQgPSByZXF1aXJlKCcuL2NvbW1lbnQnKTtcblxudmFyIF9jb21tZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1lbnQpO1xuXG52YXIgX25vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcblxudmFyIF9ub2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vZGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIGNsZWFuU291cmNlKG5vZGVzKSB7XG4gICAgcmV0dXJuIG5vZGVzLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICBpZiAoaS5ub2RlcykgaS5ub2RlcyA9IGNsZWFuU291cmNlKGkubm9kZXMpO1xuICAgICAgICBkZWxldGUgaS5zb3VyY2U7XG4gICAgICAgIHJldHVybiBpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEBjYWxsYmFjayBjaGlsZENvbmRpdGlvblxuICogQHBhcmFtIHtOb2RlfSBub2RlICAgIC0gY29udGFpbmVyIGNoaWxkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBjaGlsZCBpbmRleFxuICogQHBhcmFtIHtOb2RlW119IG5vZGVzIC0gYWxsIGNvbnRhaW5lciBjaGlsZHJlblxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBjaGlsZEl0ZXJhdG9yXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgICAgLSBjb250YWluZXIgY2hpbGRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIGNoaWxkIGluZGV4XG4gKiBAcmV0dXJuIHtmYWxzZXx1bmRlZmluZWR9IHJldHVybmluZyBgZmFsc2VgIHdpbGwgYnJlYWsgaXRlcmF0aW9uXG4gKi9cblxuLyoqXG4gKiBUaGUge0BsaW5rIFJvb3R9LCB7QGxpbmsgQXRSdWxlfSwgYW5kIHtAbGluayBSdWxlfSBjb250YWluZXIgbm9kZXNcbiAqIGluaGVyaXQgc29tZSBjb21tb24gbWV0aG9kcyB0byBoZWxwIHdvcmsgd2l0aCB0aGVpciBjaGlsZHJlbi5cbiAqXG4gKiBOb3RlIHRoYXQgYWxsIGNvbnRhaW5lcnMgY2FuIHN0b3JlIGFueSBjb250ZW50LiBJZiB5b3Ugd3JpdGUgYSBydWxlIGluc2lkZVxuICogYSBydWxlLCBQb3N0Q1NTIHdpbGwgcGFyc2UgaXQuXG4gKlxuICogQGV4dGVuZHMgTm9kZVxuICogQGFic3RyYWN0XG4gKi9cblxudmFyIENvbnRhaW5lciA9IGZ1bmN0aW9uIChfTm9kZSkge1xuICAgIF9pbmhlcml0cyhDb250YWluZXIsIF9Ob2RlKTtcblxuICAgIGZ1bmN0aW9uIENvbnRhaW5lcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb250YWluZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250YWluZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29udGFpbmVyLCBbe1xuICAgICAgICBrZXk6ICdwdXNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2goY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSXRlcmF0ZXMgdGhyb3VnaCB0aGUgY29udGFpbmVy4oCZcyBpbW1lZGlhdGUgY2hpbGRyZW4sXG4gICAgICAgICAqIGNhbGxpbmcgYGNhbGxiYWNrYCBmb3IgZWFjaCBjaGlsZC5cbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJuaW5nIGBmYWxzZWAgaW4gdGhlIGNhbGxiYWNrIHdpbGwgYnJlYWsgaXRlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBvbmx5IGl0ZXJhdGVzIHRocm91Z2ggdGhlIGNvbnRhaW5lcuKAmXMgaW1tZWRpYXRlIGNoaWxkcmVuLlxuICAgICAgICAgKiBJZiB5b3UgbmVlZCB0byByZWN1cnNpdmVseSBpdGVyYXRlIHRocm91Z2ggYWxsIHRoZSBjb250YWluZXLigJlzIGRlc2NlbmRhbnRcbiAgICAgICAgICogbm9kZXMsIHVzZSB7QGxpbmsgQ29udGFpbmVyI3dhbGt9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBVbmxpa2UgdGhlIGZvciBge31gLWN5Y2xlIG9yIGBBcnJheSNmb3JFYWNoYCB0aGlzIGl0ZXJhdG9yIGlzIHNhZmVcbiAgICAgICAgICogaWYgeW91IGFyZSBtdXRhdGluZyB0aGUgYXJyYXkgb2YgY2hpbGQgbm9kZXMgZHVyaW5nIGl0ZXJhdGlvbi5cbiAgICAgICAgICogUG9zdENTUyB3aWxsIGFkanVzdCB0aGUgY3VycmVudCBpbmRleCB0byBtYXRjaCB0aGUgbXV0YXRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge2NoaWxkSXRlcmF0b3J9IGNhbGxiYWNrIC0gaXRlcmF0b3IgcmVjZWl2ZXMgZWFjaCBub2RlIGFuZCBpbmRleFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtmYWxzZXx1bmRlZmluZWR9IHJldHVybnMgYGZhbHNlYCBpZiBpdGVyYXRpb24gd2FzIGJyb2tlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhIHsgY29sb3I6IGJsYWNrOyB6LWluZGV4OiAxIH0nKTtcbiAgICAgICAgICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3Q7XG4gICAgICAgICAqXG4gICAgICAgICAqIGZvciAoIGxldCBkZWNsIG9mIHJ1bGUubm9kZXMgKSB7XG4gICAgICAgICAqICAgICBkZWNsLmNsb25lQmVmb3JlKHsgcHJvcDogJy13ZWJraXQtJyArIGRlY2wucHJvcCB9KTtcbiAgICAgICAgICogICAgIC8vIEN5Y2xlIHdpbGwgYmUgaW5maW5pdGUsIGJlY2F1c2UgY2xvbmVCZWZvcmUgbW92ZXMgdGhlIGN1cnJlbnQgbm9kZVxuICAgICAgICAgKiAgICAgLy8gdG8gdGhlIG5leHQgaW5kZXhcbiAgICAgICAgICogfVxuICAgICAgICAgKlxuICAgICAgICAgKiBydWxlLmVhY2goZGVjbCA9PiB7XG4gICAgICAgICAqICAgICBkZWNsLmNsb25lQmVmb3JlKHsgcHJvcDogJy13ZWJraXQtJyArIGRlY2wucHJvcCB9KTtcbiAgICAgICAgICogICAgIC8vIFdpbGwgYmUgZXhlY3V0ZWQgb25seSBmb3IgY29sb3IgYW5kIHotaW5kZXhcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlYWNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5sYXN0RWFjaCkgdGhpcy5sYXN0RWFjaCA9IDA7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5kZXhlcykgdGhpcy5pbmRleGVzID0ge307XG5cbiAgICAgICAgICAgIHRoaXMubGFzdEVhY2ggKz0gMTtcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMubGFzdEVhY2g7XG4gICAgICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gMDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGVzKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXhlc1tpZF0gPCB0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleGVzW2lkXTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlzLm5vZGVzW2luZGV4XSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSBicmVhaztcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaW5kZXhlc1tpZF07XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhdmVyc2VzIHRoZSBjb250YWluZXLigJlzIGRlc2NlbmRhbnQgbm9kZXMsIGNhbGxpbmcgY2FsbGJhY2tcbiAgICAgICAgICogZm9yIGVhY2ggbm9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogTGlrZSBjb250YWluZXIuZWFjaCgpLCB0aGlzIG1ldGhvZCBpcyBzYWZlIHRvIHVzZVxuICAgICAgICAgKiBpZiB5b3UgYXJlIG11dGF0aW5nIGFycmF5cyBkdXJpbmcgaXRlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3Ugb25seSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgY29udGFpbmVy4oCZcyBpbW1lZGlhdGUgY2hpbGRyZW4sXG4gICAgICAgICAqIHVzZSB7QGxpbmsgQ29udGFpbmVyI2VhY2h9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge2NoaWxkSXRlcmF0b3J9IGNhbGxiYWNrIC0gaXRlcmF0b3IgcmVjZWl2ZXMgZWFjaCBub2RlIGFuZCBpbmRleFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtmYWxzZXx1bmRlZmluZWR9IHJldHVybnMgYGZhbHNlYCBpZiBpdGVyYXRpb24gd2FzIGJyb2tlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJvb3Qud2Fsayhub2RlID0+IHtcbiAgICAgICAgICogICAvLyBUcmF2ZXJzZXMgYWxsIGRlc2NlbmRhbnQgbm9kZXMuXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnd2FsaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3YWxrKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UgJiYgY2hpbGQud2Fsaykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjaGlsZC53YWxrKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYXZlcnNlcyB0aGUgY29udGFpbmVy4oCZcyBkZXNjZW5kYW50IG5vZGVzLCBjYWxsaW5nIGNhbGxiYWNrXG4gICAgICAgICAqIGZvciBlYWNoIGRlY2xhcmF0aW9uIG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSBwYXNzIGEgZmlsdGVyLCBpdGVyYXRpb24gd2lsbCBvbmx5IGhhcHBlbiBvdmVyIGRlY2xhcmF0aW9uc1xuICAgICAgICAgKiB3aXRoIG1hdGNoaW5nIHByb3BlcnRpZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIExpa2Uge0BsaW5rIENvbnRhaW5lciNlYWNofSwgdGhpcyBtZXRob2QgaXMgc2FmZVxuICAgICAgICAgKiB0byB1c2UgaWYgeW91IGFyZSBtdXRhdGluZyBhcnJheXMgZHVyaW5nIGl0ZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBbcHJvcF0gICAtIHN0cmluZyBvciByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGZpbHRlciBkZWNsYXJhdGlvbnMgYnkgcHJvcGVydHkgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge2NoaWxkSXRlcmF0b3J9IGNhbGxiYWNrIC0gaXRlcmF0b3IgcmVjZWl2ZXMgZWFjaCBub2RlIGFuZCBpbmRleFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtmYWxzZXx1bmRlZmluZWR9IHJldHVybnMgYGZhbHNlYCBpZiBpdGVyYXRpb24gd2FzIGJyb2tlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJvb3Qud2Fsa0RlY2xzKGRlY2wgPT4ge1xuICAgICAgICAgKiAgIGNoZWNrUHJvcGVydHlTdXBwb3J0KGRlY2wucHJvcCk7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiByb290LndhbGtEZWNscygnYm9yZGVyLXJhZGl1cycsIGRlY2wgPT4ge1xuICAgICAgICAgKiAgIGRlY2wucmVtb3ZlKCk7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiByb290LndhbGtEZWNscygvXmJhY2tncm91bmQvLCBkZWNsID0+IHtcbiAgICAgICAgICogICBkZWNsLnZhbHVlID0gdGFrZUZpcnN0Q29sb3JGcm9tR3JhZGllbnQoZGVjbC52YWx1ZSk7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnd2Fsa0RlY2xzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdhbGtEZWNscyhwcm9wLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gcHJvcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2RlY2wnICYmIHByb3AudGVzdChjaGlsZC5wcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2RlY2wnICYmIGNoaWxkLnByb3AgPT09IHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmF2ZXJzZXMgdGhlIGNvbnRhaW5lcuKAmXMgZGVzY2VuZGFudCBub2RlcywgY2FsbGluZyBjYWxsYmFja1xuICAgICAgICAgKiBmb3IgZWFjaCBydWxlIG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSBwYXNzIGEgZmlsdGVyLCBpdGVyYXRpb24gd2lsbCBvbmx5IGhhcHBlbiBvdmVyIHJ1bGVzXG4gICAgICAgICAqIHdpdGggbWF0Y2hpbmcgc2VsZWN0b3JzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBMaWtlIHtAbGluayBDb250YWluZXIjZWFjaH0sIHRoaXMgbWV0aG9kIGlzIHNhZmVcbiAgICAgICAgICogdG8gdXNlIGlmIHlvdSBhcmUgbXV0YXRpbmcgYXJyYXlzIGR1cmluZyBpdGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gW3NlbGVjdG9yXSAtIHN0cmluZyBvciByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZmlsdGVyIHJ1bGVzIGJ5IHNlbGVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Y2hpbGRJdGVyYXRvcn0gY2FsbGJhY2sgICAtIGl0ZXJhdG9yIHJlY2VpdmVzIGVhY2ggbm9kZSBhbmQgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmFsc2V8dW5kZWZpbmVkfSByZXR1cm5zIGBmYWxzZWAgaWYgaXRlcmF0aW9uIHdhcyBicm9rZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBzZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgICogcm9vdC53YWxrUnVsZXMocnVsZSA9PiB7XG4gICAgICAgICAqICAgc2VsZWN0b3JzLnB1c2gocnVsZS5zZWxlY3Rvcik7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBjb25zb2xlLmxvZyhgWW91ciBDU1MgdXNlcyAke3NlbGVjdG9ycy5sZW5ndGh9IHNlbGVjdG9yc2ApO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnd2Fsa1J1bGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdhbGtSdWxlcyhzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHNlbGVjdG9yO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdydWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGsoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAncnVsZScgJiYgc2VsZWN0b3IudGVzdChjaGlsZC5zZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdydWxlJyAmJiBjaGlsZC5zZWxlY3RvciA9PT0gc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmF2ZXJzZXMgdGhlIGNvbnRhaW5lcuKAmXMgZGVzY2VuZGFudCBub2RlcywgY2FsbGluZyBjYWxsYmFja1xuICAgICAgICAgKiBmb3IgZWFjaCBhdC1ydWxlIG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSBwYXNzIGEgZmlsdGVyLCBpdGVyYXRpb24gd2lsbCBvbmx5IGhhcHBlbiBvdmVyIGF0LXJ1bGVzXG4gICAgICAgICAqIHRoYXQgaGF2ZSBtYXRjaGluZyBuYW1lcy5cbiAgICAgICAgICpcbiAgICAgICAgICogTGlrZSB7QGxpbmsgQ29udGFpbmVyI2VhY2h9LCB0aGlzIG1ldGhvZCBpcyBzYWZlXG4gICAgICAgICAqIHRvIHVzZSBpZiB5b3UgYXJlIG11dGF0aW5nIGFycmF5cyBkdXJpbmcgaXRlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IFtuYW1lXSAgIC0gc3RyaW5nIG9yIHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZmlsdGVyIGF0LXJ1bGVzIGJ5IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtjaGlsZEl0ZXJhdG9yfSBjYWxsYmFjayAtIGl0ZXJhdG9yIHJlY2VpdmVzIGVhY2ggbm9kZSBhbmQgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmFsc2V8dW5kZWZpbmVkfSByZXR1cm5zIGBmYWxzZWAgaWYgaXRlcmF0aW9uIHdhcyBicm9rZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiByb290LndhbGtBdFJ1bGVzKHJ1bGUgPT4ge1xuICAgICAgICAgKiAgIGlmICggaXNPbGQocnVsZS5uYW1lKSApIHJ1bGUucmVtb3ZlKCk7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICogcm9vdC53YWxrQXRSdWxlcygnY2hhcnNldCcsIHJ1bGUgPT4ge1xuICAgICAgICAgKiAgIGlmICggIWZpcnN0ICkge1xuICAgICAgICAgKiAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgKiAgIH0gZWxzZSB7XG4gICAgICAgICAqICAgICBydWxlLnJlbW92ZSgpO1xuICAgICAgICAgKiAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd3YWxrQXRSdWxlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3YWxrQXRSdWxlcyhuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gbmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2F0cnVsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGsoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAnYXRydWxlJyAmJiBuYW1lLnRlc3QoY2hpbGQubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdhdHJ1bGUnICYmIGNoaWxkLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmF2ZXJzZXMgdGhlIGNvbnRhaW5lcuKAmXMgZGVzY2VuZGFudCBub2RlcywgY2FsbGluZyBjYWxsYmFja1xuICAgICAgICAgKiBmb3IgZWFjaCBjb21tZW50IG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIExpa2Uge0BsaW5rIENvbnRhaW5lciNlYWNofSwgdGhpcyBtZXRob2QgaXMgc2FmZVxuICAgICAgICAgKiB0byB1c2UgaWYgeW91IGFyZSBtdXRhdGluZyBhcnJheXMgZHVyaW5nIGl0ZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtjaGlsZEl0ZXJhdG9yfSBjYWxsYmFjayAtIGl0ZXJhdG9yIHJlY2VpdmVzIGVhY2ggbm9kZSBhbmQgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmFsc2V8dW5kZWZpbmVkfSByZXR1cm5zIGBmYWxzZWAgaWYgaXRlcmF0aW9uIHdhcyBicm9rZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiByb290LndhbGtDb21tZW50cyhjb21tZW50ID0+IHtcbiAgICAgICAgICogICBjb21tZW50LnJlbW92ZSgpO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3dhbGtDb21tZW50cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3YWxrQ29tbWVudHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGsoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdjb21tZW50Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgbmV3IG5vZGVzIHRvIHRoZSBzdGFydCBvZiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gey4uLihOb2RlfG9iamVjdHxzdHJpbmd8Tm9kZVtdKX0gY2hpbGRyZW4gLSBuZXcgbm9kZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gdGhpcyBub2RlIGZvciBtZXRob2RzIGNoYWluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IGRlY2wxID0gcG9zdGNzcy5kZWNsKHsgcHJvcDogJ2NvbG9yJywgdmFsdWU6ICdibGFjaycgfSk7XG4gICAgICAgICAqIGNvbnN0IGRlY2wyID0gcG9zdGNzcy5kZWNsKHsgcHJvcDogJ2JhY2tncm91bmQtY29sb3InLCB2YWx1ZTogJ3doaXRlJyB9KTtcbiAgICAgICAgICogcnVsZS5hcHBlbmQoZGVjbDEsIGRlY2wyKTtcbiAgICAgICAgICpcbiAgICAgICAgICogcm9vdC5hcHBlbmQoeyBuYW1lOiAnY2hhcnNldCcsIHBhcmFtczogJ1wiVVRGLThcIicgfSk7ICAvLyBhdC1ydWxlXG4gICAgICAgICAqIHJvb3QuYXBwZW5kKHsgc2VsZWN0b3I6ICdhJyB9KTsgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1bGVcbiAgICAgICAgICogcnVsZS5hcHBlbmQoeyBwcm9wOiAnY29sb3InLCB2YWx1ZTogJ2JsYWNrJyB9KTsgICAgICAgLy8gZGVjbGFyYXRpb25cbiAgICAgICAgICogcnVsZS5hcHBlbmQoeyB0ZXh0OiAnQ29tbWVudCcgfSkgICAgICAgICAgICAgICAgICAgICAgLy8gY29tbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiByb290LmFwcGVuZCgnYSB7fScpO1xuICAgICAgICAgKiByb290LmZpcnN0LmFwcGVuZCgnY29sb3I6IGJsYWNrOyB6LWluZGV4OiAxJyk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhcHBlbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjaGlsZHJlbiA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IF90aGlzMi5ub3JtYWxpemUoY2hpbGQsIF90aGlzMi5sYXN0KTtcbiAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyBuZXcgbm9kZXMgdG8gdGhlIGVuZCBvZiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gey4uLihOb2RlfG9iamVjdHxzdHJpbmd8Tm9kZVtdKX0gY2hpbGRyZW4gLSBuZXcgbm9kZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gdGhpcyBub2RlIGZvciBtZXRob2RzIGNoYWluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IGRlY2wxID0gcG9zdGNzcy5kZWNsKHsgcHJvcDogJ2NvbG9yJywgdmFsdWU6ICdibGFjaycgfSk7XG4gICAgICAgICAqIGNvbnN0IGRlY2wyID0gcG9zdGNzcy5kZWNsKHsgcHJvcDogJ2JhY2tncm91bmQtY29sb3InLCB2YWx1ZTogJ3doaXRlJyB9KTtcbiAgICAgICAgICogcnVsZS5wcmVwZW5kKGRlY2wxLCBkZWNsMik7XG4gICAgICAgICAqXG4gICAgICAgICAqIHJvb3QuYXBwZW5kKHsgbmFtZTogJ2NoYXJzZXQnLCBwYXJhbXM6ICdcIlVURi04XCInIH0pOyAgLy8gYXQtcnVsZVxuICAgICAgICAgKiByb290LmFwcGVuZCh7IHNlbGVjdG9yOiAnYScgfSk7ICAgICAgICAgICAgICAgICAgICAgICAvLyBydWxlXG4gICAgICAgICAqIHJ1bGUuYXBwZW5kKHsgcHJvcDogJ2NvbG9yJywgdmFsdWU6ICdibGFjaycgfSk7ICAgICAgIC8vIGRlY2xhcmF0aW9uXG4gICAgICAgICAqIHJ1bGUuYXBwZW5kKHsgdGV4dDogJ0NvbW1lbnQnIH0pICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogcm9vdC5hcHBlbmQoJ2Ege30nKTtcbiAgICAgICAgICogcm9vdC5maXJzdC5hcHBlbmQoJ2NvbG9yOiBibGFjazsgei1pbmRleDogMScpO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlcGVuZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwZW5kKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgY2hpbGRyZW4gPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ucmV2ZXJzZSgpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSBfdGhpczMubm9ybWFsaXplKGNoaWxkLCBfdGhpczMuZmlyc3QsICdwcmVwZW5kJykucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5ub2Rlcy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGlkIGluIF90aGlzMy5pbmRleGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5pbmRleGVzW2lkXSA9IF90aGlzMy5pbmRleGVzW2lkXSArIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGVhblJhd3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYW5SYXdzKGtlZXBCZXR3ZWVuKSB7XG4gICAgICAgICAgICBfZ2V0KENvbnRhaW5lci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250YWluZXIucHJvdG90eXBlKSwgJ2NsZWFuUmF3cycsIHRoaXMpLmNhbGwodGhpcywga2VlcEJldHdlZW4pO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2xlYW5SYXdzKGtlZXBCZXR3ZWVuKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnQgbmV3IG5vZGUgYmVmb3JlIG9sZCBub2RlIHdpdGhpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge05vZGV8bnVtYmVyfSBleGlzdCAgICAgICAgICAgICAtIGNoaWxkIG9yIGNoaWxk4oCZcyBpbmRleC5cbiAgICAgICAgICogQHBhcmFtIHtOb2RlfG9iamVjdHxzdHJpbmd8Tm9kZVtdfSBhZGQgLSBuZXcgbm9kZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSB0aGlzIG5vZGUgZm9yIG1ldGhvZHMgY2hhaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcnVsZS5pbnNlcnRCZWZvcmUoZGVjbCwgZGVjbC5jbG9uZSh7IHByb3A6ICctd2Via2l0LScgKyBkZWNsLnByb3AgfSkpO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5zZXJ0QmVmb3JlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEJlZm9yZShleGlzdCwgYWRkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgZXhpc3QgPSB0aGlzLmluZGV4KGV4aXN0KTtcblxuICAgICAgICAgICAgdmFyIHR5cGUgPSBleGlzdCA9PT0gMCA/ICdwcmVwZW5kJyA6IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5ub3JtYWxpemUoYWRkLCB0aGlzLm5vZGVzW2V4aXN0XSwgdHlwZSkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQubm9kZXMuc3BsaWNlKGV4aXN0LCAwLCBub2RlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0IDw9IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleCArIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydCBuZXcgbm9kZSBhZnRlciBvbGQgbm9kZSB3aXRoaW4gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOb2RlfG51bWJlcn0gZXhpc3QgICAgICAgICAgICAgLSBjaGlsZCBvciBjaGlsZOKAmXMgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtOb2RlfG9iamVjdHxzdHJpbmd8Tm9kZVtdfSBhZGQgLSBuZXcgbm9kZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSB0aGlzIG5vZGUgZm9yIG1ldGhvZHMgY2hhaW5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luc2VydEFmdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEFmdGVyKGV4aXN0LCBhZGQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICBleGlzdCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuXG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm5vcm1hbGl6ZShhZGQsIHRoaXMubm9kZXNbZXhpc3RdKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5ub2Rlcy5zcGxpY2UoZXhpc3QgKyAxLCAwLCBub2RlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0IDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IGluZGV4ICsgbm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbnRhaW5lciNyZW1vdmUgaXMgZGVwcmVjYXRlZC4gJyArICdVc2UgQ29udGFpbmVyI3JlbW92ZUNoaWxkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9nZXQoQ29udGFpbmVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbnRhaW5lci5wcm90b3R5cGUpLCAncmVtb3ZlJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgbm9kZSBmcm9tIHRoZSBjb250YWluZXIgYW5kIGNsZWFucyB0aGUgcGFyZW50IHByb3BlcnRpZXNcbiAgICAgICAgICogZnJvbSB0aGUgbm9kZSBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge05vZGV8bnVtYmVyfSBjaGlsZCAtIGNoaWxkIG9yIGNoaWxk4oCZcyBpbmRleFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSB0aGlzIG5vZGUgZm9yIG1ldGhvZHMgY2hhaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcnVsZS5ub2Rlcy5sZW5ndGggIC8vPT4gNVxuICAgICAgICAgKiBydWxlLnJlbW92ZUNoaWxkKGRlY2wpO1xuICAgICAgICAgKiBydWxlLm5vZGVzLmxlbmd0aCAgLy89PiA0XG4gICAgICAgICAqIGRlY2wucGFyZW50ICAgICAgICAvLz0+IHVuZGVmaW5lZFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlQ2hpbGQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGhpcy5pbmRleChjaGlsZCk7XG4gICAgICAgICAgICB0aGlzLm5vZGVzW2NoaWxkXS5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnNwbGljZShjaGlsZCwgMSk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleGVzW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IGluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gdGhlIGNvbnRhaW5lclxuICAgICAgICAgKiBhbmQgY2xlYW5zIHRoZWlyIHBhcmVudCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSB0aGlzIG5vZGUgZm9yIG1ldGhvZHMgY2hhaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcnVsZS5yZW1vdmVBbGwoKTtcbiAgICAgICAgICogcnVsZS5ub2Rlcy5sZW5ndGggLy89PiAwXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVBbGwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXNzZXMgYWxsIGRlY2xhcmF0aW9uIHZhbHVlcyB3aXRoaW4gdGhlIGNvbnRhaW5lciB0aGF0IG1hdGNoIHBhdHRlcm5cbiAgICAgICAgICogdGhyb3VnaCBjYWxsYmFjaywgcmVwbGFjaW5nIHRob3NlIHZhbHVlcyB3aXRoIHRoZSByZXR1cm5lZCByZXN1bHRcbiAgICAgICAgICogb2YgY2FsbGJhY2suXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWZ1bCBpZiB5b3UgYXJlIHVzaW5nIGEgY3VzdG9tIHVuaXQgb3IgZnVuY3Rpb25cbiAgICAgICAgICogYW5kIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIGFsbCB2YWx1ZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gcGF0dGVybiAgICAgIC0gcmVwbGFjZSBwYXR0ZXJuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRzICAgICAgICAgICAgICAgIC0gb3B0aW9ucyB0byBzcGVlZCB1cCB0aGUgc2VhcmNoXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBvcHRzLnByb3BzIC0gYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXNcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMuZmFzdCAgICAgICAgICAgLSBzdHJpbmcgdGhhdOKAmXMgdXNlZFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIG5hcnJvdyBkb3duIHZhbHVlcyBhbmQgc3BlZWQgdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcmVnZXhwIHNlYXJjaFxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufHN0cmluZ30gY2FsbGJhY2sgICAtIHN0cmluZyB0byByZXBsYWNlIHBhdHRlcm5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBjYWxsYmFjayB0aGF0IHJldHVybnMgYSBuZXdcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2FsbGJhY2sgd2lsbCByZWNlaXZlXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNhbWUgYXJndW1lbnRzIGFzIHRob3NlXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkIHRvIGEgZnVuY3Rpb24gcGFyYW1ldGVyXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgYFN0cmluZyNyZXBsYWNlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gdGhpcyBub2RlIGZvciBtZXRob2RzIGNoYWluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJvb3QucmVwbGFjZVZhbHVlcygvXFxkK3JlbS8sIHsgZmFzdDogJ3JlbScgfSwgc3RyaW5nID0+IHtcbiAgICAgICAgICogICByZXR1cm4gMTUgKiBwYXJzZUludChzdHJpbmcpICsgJ3B4JztcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXBsYWNlVmFsdWVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VWYWx1ZXMocGF0dGVybiwgb3B0cywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICAgICAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLndhbGtEZWNscyhmdW5jdGlvbiAoZGVjbCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLnByb3BzICYmIG9wdHMucHJvcHMuaW5kZXhPZihkZWNsLnByb3ApID09PSAtMSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmZhc3QgJiYgZGVjbC52YWx1ZS5pbmRleE9mKG9wdHMuZmFzdCkgPT09IC0xKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBkZWNsLnZhbHVlID0gZGVjbC52YWx1ZS5yZXBsYWNlKHBhdHRlcm4sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYFxuICAgICAgICAgKiBmb3IgYWxsIG9mIHRoZSBjb250YWluZXLigJlzIGNoaWxkcmVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge2NoaWxkQ29uZGl0aW9ufSBjb25kaXRpb24gLSBpdGVyYXRvciByZXR1cm5zIHRydWUgb3IgZmFsc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGlzIGV2ZXJ5IGNoaWxkIHBhc3MgY29uZGl0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IG5vUHJlZml4ZXMgPSBydWxlLmV2ZXJ5KGkgPT4gaS5wcm9wWzBdICE9PSAnLScpO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZXZlcnknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXZlcnkoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5ldmVyeShjb25kaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYHRydWVgIGlmIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciAoYXQgbGVhc3QpIG9uZVxuICAgICAgICAgKiBvZiB0aGUgY29udGFpbmVy4oCZcyBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtjaGlsZENvbmRpdGlvbn0gY29uZGl0aW9uIC0gaXRlcmF0b3IgcmV0dXJucyB0cnVlIG9yIGZhbHNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBpcyBzb21lIGNoaWxkIHBhc3MgY29uZGl0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IGhhc1ByZWZpeCA9IHJ1bGUuc29tZShpID0+IGkucHJvcFswXSA9PT0gJy0nKTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc29tZShjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzLnNvbWUoY29uZGl0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgYGNoaWxkYOKAmXMgaW5kZXggd2l0aGluIHRoZSB7QGxpbmsgQ29udGFpbmVyI25vZGVzfSBhcnJheS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOb2RlfSBjaGlsZCAtIGNoaWxkIG9mIHRoZSBjdXJyZW50IGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSBjaGlsZCBpbmRleFxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBydWxlLmluZGV4KCBydWxlLm5vZGVzWzJdICkgLy89PiAyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbmRleCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmRleChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb250YWluZXLigJlzIGZpcnN0IGNoaWxkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Tm9kZX1cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcnVsZS5maXJzdCA9PSBydWxlcy5ub2Rlc1swXTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ25vcm1hbGl6ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3JtYWxpemUobm9kZXMsIHNhbXBsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjbGVhblNvdXJjZSgoMCwgX3BhcnNlMi5kZWZhdWx0KShub2Rlcykubm9kZXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShub2RlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZXMudHlwZSA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMubm9kZXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2Rlcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gW25vZGVzXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGVzLnByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBub2Rlcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgZmllbGQgaXMgbWlzc2VkIGluIG5vZGUgY3JlYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZXMudmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlcy52YWx1ZSA9IFN0cmluZyhub2Rlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBbbmV3IF9kZWNsYXJhdGlvbjIuZGVmYXVsdChub2RlcyldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZXMuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBbbmV3IF9ydWxlMi5kZWZhdWx0KG5vZGVzKV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2Rlcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gW25ldyBfYXRSdWxlMi5kZWZhdWx0KG5vZGVzKV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2Rlcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gW25ldyBfY29tbWVudDIuZGVmYXVsdChub2RlcyldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBub2RlIHR5cGUgaW4gbm9kZSBjcmVhdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByb2Nlc3NlZCA9IG5vZGVzLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaS5yYXdzID09PSAndW5kZWZpbmVkJykgaSA9IF90aGlzNi5yZWJ1aWxkKGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkucGFyZW50KSBpID0gaS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhbXBsZSAmJiB0eXBlb2Ygc2FtcGxlLnJhd3MuYmVmb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5yYXdzLmJlZm9yZSA9IHNhbXBsZS5yYXdzLmJlZm9yZS5yZXBsYWNlKC9bXlxcc10vZywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkucGFyZW50ID0gX3RoaXM2O1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlYnVpbGQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVidWlsZChub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZml4ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgICAgICAgICAgZml4ID0gbmV3IF9yb290Mi5kZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ2F0cnVsZScpIHtcbiAgICAgICAgICAgICAgICBmaXggPSBuZXcgX2F0UnVsZTIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdydWxlJykge1xuICAgICAgICAgICAgICAgIGZpeCA9IG5ldyBfcnVsZTIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdkZWNsJykge1xuICAgICAgICAgICAgICAgIGZpeCA9IG5ldyBfZGVjbGFyYXRpb24yLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgICAgICAgICAgICBmaXggPSBuZXcgX2NvbW1lbnQyLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09ICdub2RlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgZml4Lm5vZGVzID0gbm9kZS5ub2Rlcy5tYXAoZnVuY3Rpb24gKGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczcucmVidWlsZChqLCBmaXgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09ICdwYXJlbnQnICYmIHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXgucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBmaXhbaV0gPSBub2RlW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpeDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZWFjaEluc2lkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoSW5zaWRlKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQ29udGFpbmVyI2VhY2hJbnNpZGUgaXMgZGVwcmVjYXRlZC4gJyArICdVc2UgQ29udGFpbmVyI3dhbGsgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGsoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlYWNoRGVjbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoRGVjbChwcm9wLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbnRhaW5lciNlYWNoRGVjbCBpcyBkZXByZWNhdGVkLiAnICsgJ1VzZSBDb250YWluZXIjd2Fsa0RlY2xzIGluc3RlYWQuJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrRGVjbHMocHJvcCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlYWNoUnVsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoUnVsZShzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdDb250YWluZXIjZWFjaFJ1bGUgaXMgZGVwcmVjYXRlZC4gJyArICdVc2UgQ29udGFpbmVyI3dhbGtSdWxlcyBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2Fsa1J1bGVzKHNlbGVjdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VhY2hBdFJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaEF0UnVsZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbnRhaW5lciNlYWNoQXRSdWxlIGlzIGRlcHJlY2F0ZWQuICcgKyAnVXNlIENvbnRhaW5lciN3YWxrQXRSdWxlcyBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2Fsa0F0UnVsZXMobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlYWNoQ29tbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoQ29tbWVudChjYWxsYmFjaykge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbnRhaW5lciNlYWNoQ29tbWVudCBpcyBkZXByZWNhdGVkLiAnICsgJ1VzZSBDb250YWluZXIjd2Fsa0NvbW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrQ29tbWVudHMoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmaXJzdCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGVzKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbnRhaW5lcuKAmXMgbGFzdCBjaGlsZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge05vZGV9XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJ1bGUubGFzdCA9PSBydWxlLm5vZGVzW3J1bGUubm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsYXN0JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZXMpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZW1pY29sb24nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI3NlbWljb2xvbiBpcyBkZXByZWNhdGVkLiBVc2UgTm9kZSNyYXdzLnNlbWljb2xvbicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5zZW1pY29sb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ05vZGUjc2VtaWNvbG9uIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3Muc2VtaWNvbG9uJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3Muc2VtaWNvbG9uID0gdmFsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZnRlcicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ05vZGUjYWZ0ZXIgaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3cy5hZnRlcicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5hZnRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNhZnRlciBpcyBkZXByZWNhdGVkLiBVc2UgTm9kZSNyYXdzLmFmdGVyJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MuYWZ0ZXIgPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIENvbnRhaW5lciNcbiAgICAgICAgICogQG1lbWJlciB7Tm9kZVtdfSBub2RlcyAtIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGNvbnRhaW5lcuKAmXMgY2hpbGRyZW5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EgeyBjb2xvcjogYmxhY2sgfScpO1xuICAgICAgICAgKiByb290Lm5vZGVzLmxlbmd0aCAgICAgICAgICAgLy89PiAxXG4gICAgICAgICAqIHJvb3Qubm9kZXNbMF0uc2VsZWN0b3IgICAgICAvLz0+ICdhJ1xuICAgICAgICAgKiByb290Lm5vZGVzWzBdLm5vZGVzWzBdLnByb3AgLy89PiAnY29sb3InXG4gICAgICAgICAqL1xuXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbnRhaW5lcjtcbn0oX25vZGUyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb250YWluZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2NvbnRhaW5lci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS5qb2luKCcsJyk7XG5cbiAgcmV0dXJuIHZhbHVlLm1hdGNoKC8td2Via2l0LXwtbW96LXwtbXMtLykgIT09IG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9pc1ByZWZpeGVkVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9ialRvQ3NzID0gdW5kZWZpbmVkO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgb2JqVG9Dc3MgPSBleHBvcnRzLm9ialRvQ3NzID0gZnVuY3Rpb24gb2JqVG9Dc3Mob2JqLCBwcmV2S2V5KSB7XG4gIHZhciBjc3MgPSBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkob2JqW2tleV0pKSByZXR1cm4gb2JqVG9Dc3Mob2JqW2tleV0sIGtleSk7XG4gICAgcmV0dXJuICgwLCBfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KShrZXkpICsgJzogJyArIG9ialtrZXldICsgJzsnO1xuICB9KS5qb2luKCcgJyk7XG4gIHJldHVybiBwcmV2S2V5ID8gcHJldktleSArICcge1xcbiAgJyArIGNzcyArICdcXG59JyA6IGNzcztcbn07XG5cbnZhciBmbGF0dGVuID0gZnVuY3Rpb24gZmxhdHRlbihjaHVua3MsIGV4ZWN1dGlvbkNvbnRleHQpIHtcbiAgcmV0dXJuIGNodW5rcy5yZWR1Y2UoZnVuY3Rpb24gKHJ1bGVTZXQsIGNodW5rKSB7XG4gICAgLyogUmVtb3ZlIGZhbHNleSB2YWx1ZXMgKi9cbiAgICBpZiAoY2h1bmsgPT09IHVuZGVmaW5lZCB8fCBjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gZmFsc2UgfHwgY2h1bmsgPT09ICcnKSByZXR1cm4gcnVsZVNldDtcbiAgICAvKiBGbGF0dGVuIHJ1bGVTZXQgKi9cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaHVuaykpIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHJ1bGVTZXQpLCBfdG9Db25zdW1hYmxlQXJyYXkoZmxhdHRlbihjaHVuaywgZXhlY3V0aW9uQ29udGV4dCkpKTtcbiAgICAvKiBFaXRoZXIgZXhlY3V0ZSBvciBkZWZlciB0aGUgZnVuY3Rpb24gKi9cbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZXhlY3V0aW9uQ29udGV4dCA/IHJ1bGVTZXQuY29uY2F0LmFwcGx5KHJ1bGVTZXQsIF90b0NvbnN1bWFibGVBcnJheShmbGF0dGVuKFtjaHVuayhleGVjdXRpb25Db250ZXh0KV0sIGV4ZWN1dGlvbkNvbnRleHQpKSkgOiBydWxlU2V0LmNvbmNhdChjaHVuayk7XG4gICAgfVxuXG4gICAgLyogSGFuZGxlIG9iamVjdHMgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIGhhdmUgdG8gYWRkICVjaGVja3Mgc29tZWhvdyB0byBpc1BsYWluT2JqZWN0XG4gICAgcmV0dXJuIHJ1bGVTZXQuY29uY2F0KCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoY2h1bmspID8gb2JqVG9Dc3MoY2h1bmspIDogY2h1bmsudG9TdHJpbmcoKSk7XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZsYXR0ZW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9mbGF0dGVuLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKTtcblxudmFyIF93YXJuT25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuT25jZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGF0LXJ1bGUuXG4gKlxuICogSWYgaXTigJlzIGZvbGxvd2VkIGluIHRoZSBDU1MgYnkgYSB7fSBibG9jaywgdGhpcyBub2RlIHdpbGwgaGF2ZVxuICogYSBub2RlcyBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBleHRlbmRzIENvbnRhaW5lclxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnQGNoYXJzZXQgXCJVVEYtOFwiOyBAbWVkaWEgcHJpbnQge30nKTtcbiAqXG4gKiBjb25zdCBjaGFyc2V0ID0gcm9vdC5maXJzdDtcbiAqIGNoYXJzZXQudHlwZSAgLy89PiAnYXRydWxlJ1xuICogY2hhcnNldC5ub2RlcyAvLz0+IHVuZGVmaW5lZFxuICpcbiAqIGNvbnN0IG1lZGlhID0gcm9vdC5sYXN0O1xuICogbWVkaWEubm9kZXMgICAvLz0+IFtdXG4gKi9cbnZhciBBdFJ1bGUgPSBmdW5jdGlvbiAoX0NvbnRhaW5lcikge1xuICAgIF9pbmhlcml0cyhBdFJ1bGUsIF9Db250YWluZXIpO1xuXG4gICAgZnVuY3Rpb24gQXRSdWxlKGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdFJ1bGUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBdFJ1bGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBdFJ1bGUpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdhdHJ1bGUnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEF0UnVsZSwgW3tcbiAgICAgICAga2V5OiAnYXBwZW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgICAgICAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjaGlsZHJlbiA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKF9nZXQyID0gX2dldChBdFJ1bGUucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXRSdWxlLnByb3RvdHlwZSksICdhcHBlbmQnLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChjaGlsZHJlbikpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVwZW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBlbmQoKSB7XG4gICAgICAgICAgICB2YXIgX2dldDM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNoaWxkcmVuID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKF9nZXQzID0gX2dldChBdFJ1bGUucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXRSdWxlLnByb3RvdHlwZSksICdwcmVwZW5kJywgdGhpcykpLmNhbGwuYXBwbHkoX2dldDMsIFt0aGlzXS5jb25jYXQoY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWZ0ZXJOYW1lJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQXRSdWxlI2FmdGVyTmFtZSB3YXMgZGVwcmVjYXRlZC4gVXNlIEF0UnVsZSNyYXdzLmFmdGVyTmFtZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5hZnRlck5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0F0UnVsZSNhZnRlck5hbWUgd2FzIGRlcHJlY2F0ZWQuIFVzZSBBdFJ1bGUjcmF3cy5hZnRlck5hbWUnKTtcbiAgICAgICAgICAgIHRoaXMucmF3cy5hZnRlck5hbWUgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19wYXJhbXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdBdFJ1bGUjX3BhcmFtcyB3YXMgZGVwcmVjYXRlZC4gVXNlIEF0UnVsZSNyYXdzLnBhcmFtcycpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5wYXJhbXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0F0UnVsZSNfcGFyYW1zIHdhcyBkZXByZWNhdGVkLiBVc2UgQXRSdWxlI3Jhd3MucGFyYW1zJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MucGFyYW1zID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBBdFJ1bGUjXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZSAtIHRoZSBhdC1ydWxl4oCZcyBuYW1lIGltbWVkaWF0ZWx5IGZvbGxvd3MgdGhlIGBAYFxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ICA9IHBvc3Rjc3MucGFyc2UoJ0BtZWRpYSBwcmludCB7fScpO1xuICAgICAgICAgKiBtZWRpYS5uYW1lIC8vPT4gJ21lZGlhJ1xuICAgICAgICAgKiBjb25zdCBtZWRpYSA9IHJvb3QuZmlyc3Q7XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgQXRSdWxlI1xuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHBhcmFtcyAtIHRoZSBhdC1ydWxl4oCZcyBwYXJhbWV0ZXJzLCB0aGUgdmFsdWVzXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBmb2xsb3cgdGhlIGF0LXJ1bGXigJlzIG5hbWUgYnV0IHByZWNlZGVcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkge30gYmxvY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCAgPSBwb3N0Y3NzLnBhcnNlKCdAbWVkaWEgcHJpbnQsIHNjcmVlbiB7fScpO1xuICAgICAgICAgKiBjb25zdCBtZWRpYSA9IHJvb3QuZmlyc3Q7XG4gICAgICAgICAqIG1lZGlhLnBhcmFtcyAvLz0+ICdwcmludCwgc2NyZWVuJ1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIEF0UnVsZSNcbiAgICAgICAgICogQG1lbWJlciB7b2JqZWN0fSByYXdzIC0gSW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgYnl0ZS10by1ieXRlIGVxdWFsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgc3RyaW5nIGFzIGl0IHdhcyBpbiB0aGUgb3JpZ2luIGlucHV0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBFdmVyeSBwYXJzZXIgc2F2ZXMgaXRzIG93biBwcm9wZXJ0aWVzLFxuICAgICAgICAgKiBidXQgdGhlIGRlZmF1bHQgQ1NTIHBhcnNlciB1c2VzOlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIGBiZWZvcmVgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZWZvcmUgdGhlIG5vZGUuIEl0IGFsc28gc3RvcmVzIGAqYFxuICAgICAgICAgKiAgIGFuZCBgX2Agc3ltYm9scyBiZWZvcmUgdGhlIGRlY2xhcmF0aW9uIChJRSBoYWNrKS5cbiAgICAgICAgICogKiBgYWZ0ZXJgOiB0aGUgc3BhY2Ugc3ltYm9scyBhZnRlciB0aGUgbGFzdCBjaGlsZCBvZiB0aGUgbm9kZVxuICAgICAgICAgKiAgIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGUuXG4gICAgICAgICAqICogYGJldHdlZW5gOiB0aGUgc3ltYm9scyBiZXR3ZWVuIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICAgICAgICogICBmb3IgZGVjbGFyYXRpb25zLCBzZWxlY3RvciBhbmQgYHtgIGZvciBydWxlcywgb3IgbGFzdCBwYXJhbWV0ZXJcbiAgICAgICAgICogICBhbmQgYHtgIGZvciBhdC1ydWxlcy5cbiAgICAgICAgICogKiBgc2VtaWNvbG9uYDogY29udGFpbnMgdHJ1ZSBpZiB0aGUgbGFzdCBjaGlsZCBoYXNcbiAgICAgICAgICogICBhbiAob3B0aW9uYWwpIHNlbWljb2xvbi5cbiAgICAgICAgICogKiBgYWZ0ZXJOYW1lYDogdGhlIHNwYWNlIGJldHdlZW4gdGhlIGF0LXJ1bGUgbmFtZSBhbmQgaXRzIHBhcmFtZXRlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFBvc3RDU1MgY2xlYW5zIGF0LXJ1bGUgcGFyYW1ldGVycyBmcm9tIGNvbW1lbnRzIGFuZCBleHRyYSBzcGFjZXMsXG4gICAgICAgICAqIGJ1dCBpdCBzdG9yZXMgb3JpZ2luIGNvbnRlbnQgaW4gcmF3cyBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBBcyBzdWNoLCBpZiB5b3UgZG9u4oCZdCBjaGFuZ2UgYSBkZWNsYXJhdGlvbuKAmXMgdmFsdWUsXG4gICAgICAgICAqIFBvc3RDU1Mgd2lsbCB1c2UgdGhlIHJhdyB2YWx1ZSB3aXRoIGNvbW1lbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnICBAbWVkaWFcXG5wcmludCB7XFxufScpXG4gICAgICAgICAqIHJvb3QuZmlyc3QuZmlyc3QucmF3cyAvLz0+IHsgYmVmb3JlOiAnICAnLFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJldHdlZW46ICcgJyxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhZnRlck5hbWU6ICdcXG4nLFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFmdGVyOiAnXFxuJyB9XG4gICAgICAgICAqL1xuXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEF0UnVsZTtcbn0oX2NvbnRhaW5lcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF0UnVsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvYXQtcnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKTtcblxudmFyIF93YXJuT25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuT25jZSk7XG5cbnZhciBfbm9kZSA9IHJlcXVpcmUoJy4vbm9kZScpO1xuXG52YXIgX25vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29tbWVudCBiZXR3ZWVuIGRlY2xhcmF0aW9ucyBvciBzdGF0ZW1lbnRzIChydWxlIGFuZCBhdC1ydWxlcykuXG4gKlxuICogQ29tbWVudHMgaW5zaWRlIHNlbGVjdG9ycywgYXQtcnVsZSBwYXJhbWV0ZXJzLCBvciBkZWNsYXJhdGlvbiB2YWx1ZXNcbiAqIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBgcmF3c2AgcHJvcGVydGllcyBleHBsYWluZWQgYWJvdmUuXG4gKlxuICogQGV4dGVuZHMgTm9kZVxuICovXG52YXIgQ29tbWVudCA9IGZ1bmN0aW9uIChfTm9kZSkge1xuICAgIF9pbmhlcml0cyhDb21tZW50LCBfTm9kZSk7XG5cbiAgICBmdW5jdGlvbiBDb21tZW50KGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21tZW50KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29tbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbW1lbnQpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdjb21tZW50JztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb21tZW50LCBbe1xuICAgICAgICBrZXk6ICdsZWZ0JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQ29tbWVudCNsZWZ0IHdhcyBkZXByZWNhdGVkLiBVc2UgQ29tbWVudCNyYXdzLmxlZnQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3MubGVmdDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQ29tbWVudCNsZWZ0IHdhcyBkZXByZWNhdGVkLiBVc2UgQ29tbWVudCNyYXdzLmxlZnQnKTtcbiAgICAgICAgICAgIHRoaXMucmF3cy5sZWZ0ID0gdmFsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyaWdodCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbW1lbnQjcmlnaHQgd2FzIGRlcHJlY2F0ZWQuIFVzZSBDb21tZW50I3Jhd3MucmlnaHQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3MucmlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbW1lbnQjcmlnaHQgd2FzIGRlcHJlY2F0ZWQuIFVzZSBDb21tZW50I3Jhd3MucmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMucmF3cy5yaWdodCA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tbWVudCNcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB0ZXh0IC0gdGhlIGNvbW1lbnTigJlzIHRleHRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21tZW50I1xuICAgICAgICAgKiBAbWVtYmVyIHtvYmplY3R9IHJhd3MgLSBJbmZvcm1hdGlvbiB0byBnZW5lcmF0ZSBieXRlLXRvLWJ5dGUgZXF1YWxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBzdHJpbmcgYXMgaXQgd2FzIGluIHRoZSBvcmlnaW4gaW5wdXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEV2ZXJ5IHBhcnNlciBzYXZlcyBpdHMgb3duIHByb3BlcnRpZXMsXG4gICAgICAgICAqIGJ1dCB0aGUgZGVmYXVsdCBDU1MgcGFyc2VyIHVzZXM6XG4gICAgICAgICAqXG4gICAgICAgICAqICogYGJlZm9yZWA6IHRoZSBzcGFjZSBzeW1ib2xzIGJlZm9yZSB0aGUgbm9kZS5cbiAgICAgICAgICogKiBgbGVmdGA6IHRoZSBzcGFjZSBzeW1ib2xzIGJldHdlZW4gYC8qYCBhbmQgdGhlIGNvbW1lbnTigJlzIHRleHQuXG4gICAgICAgICAqICogYHJpZ2h0YDogdGhlIHNwYWNlIHN5bWJvbHMgYmV0d2VlbiB0aGUgY29tbWVudOKAmXMgdGV4dC5cbiAgICAgICAgICovXG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29tbWVudDtcbn0oX25vZGUyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb21tZW50O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9jb21tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8vIGJyZWFrIGN5Y2xpY2FsIGRlcGVuZGVuY3kgZGVhZGxvY2sg4oCTICM4N1xuXG5yZXF1aXJlKCcuL3Jvb3QnKTtcblxudmFyIF9jc3NTeW50YXhFcnJvciA9IHJlcXVpcmUoJy4vY3NzLXN5bnRheC1lcnJvcicpO1xuXG52YXIgX2Nzc1N5bnRheEVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1N5bnRheEVycm9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gaW1wb3J0IFByZXZpb3VzTWFwICAgIGZyb20gJy4vcHJldmlvdXMtbWFwJztcblxudmFyIHNlcXVlbmNlID0gMDtcblxuLyoqXG4gKiBAdHlwZWRlZiAge29iamVjdH0gZmlsZVBvc2l0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZmlsZSAgIC0gcGF0aCB0byBmaWxlXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZSAgIC0gc291cmNlIGxpbmUgaW4gZmlsZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiAtIHNvdXJjZSBjb2x1bW4gaW4gZmlsZVxuICovXG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgc291cmNlIENTUy5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgcm9vdCAgPSBwb3N0Y3NzLnBhcnNlKGNzcywgeyBmcm9tOiBmaWxlIH0pO1xuICogY29uc3QgaW5wdXQgPSByb290LnNvdXJjZS5pbnB1dDtcbiAqL1xuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3NzICAgIC0gaW5wdXQgQ1NTIHNvdXJjZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0c10gLSB7QGxpbmsgUHJvY2Vzc29yI3Byb2Nlc3N9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBJbnB1dChjc3MpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBpbnB1dCBDU1Mgc291cmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IGlucHV0ID0gcG9zdGNzcy5wYXJzZSgnYXt9JywgeyBmcm9tOiBmaWxlIH0pLmlucHV0O1xuICAgICAgICAgKiBpbnB1dC5jc3MgLy89PiBcImF7fVwiO1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jc3MgPSBjc3MudG9TdHJpbmcoKTtcblxuICAgICAgICBpZiAodGhpcy5jc3NbMF0gPT09ICdcXHVGRUZGJyB8fCB0aGlzLmNzc1swXSA9PT0gJ1xcdUZGRkUnKSB7XG4gICAgICAgICAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdHMuZnJvbSkge1xuICAgICAgICAgICAgaWYgKC9eXFx3KzpcXC9cXC8vLnRlc3Qob3B0cy5mcm9tKSkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgQ1NTIHNvdXJjZSBmaWxlXG4gICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgIGRlZmluZWQgd2l0aCB0aGUgYGZyb21gIG9wdGlvbi5cbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoY3NzLCB7IGZyb206ICdhLmNzcycgfSk7XG4gICAgICAgICAgICAgICAgICogcm9vdC5zb3VyY2UuaW5wdXQuZmlsZSAvLz0+ICcvaG9tZS9haS9hLmNzcydcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBvcHRzLmZyb207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IHBhdGgucmVzb2x2ZShvcHRzLmZyb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gbmV3IFByZXZpb3VzTWFwKHRoaXMuY3NzLCBvcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAoIG1hcC50ZXh0ICkge1xuICAgICAgICAgICAgICAgICAgICAvISoqXG4gICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge1ByZXZpb3VzTWFwfSAtIFRoZSBpbnB1dCBzb3VyY2UgbWFwIHBhc3NlZCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIGEgY29tcGlsYXRpb24gc3RlcCBiZWZvcmUgUG9zdENTU1xuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAoZm9yIGV4YW1wbGUsIGZyb20gU2FzcyBjb21waWxlcikuXG4gICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgICAgICAgICAqIHJvb3Quc291cmNlLmlucHV0Lm1hcC5jb25zdW1lcigpLnNvdXJjZXMgLy89PiBbJ2Euc2FzcyddXG4gICAgICAgICAgICAgICAgICAgICAqIS9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gbWFwLmNvbnN1bWVyKCkuZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5maWxlICYmIGZpbGUgKSB0aGlzLmZpbGUgPSB0aGlzLm1hcFJlc29sdmUoZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICAgICAgICBzZXF1ZW5jZSArPSAxO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgQ1NTIHNvdXJjZS4gSXQgd2lsbCBiZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQgaWYgYGZyb21gIG9wdGlvbiBpcyBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAoYmVjYXVzZSBQb3N0Q1NTIGRvZXMgbm90IGtub3cgdGhlIGZpbGUgcGF0aCkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKGNzcyk7XG4gICAgICAgICAgICAgKiByb290LnNvdXJjZS5pbnB1dC5maWxlIC8vPT4gdW5kZWZpbmVkXG4gICAgICAgICAgICAgKiByb290LnNvdXJjZS5pbnB1dC5pZCAgIC8vPT4gXCI8aW5wdXQgY3NzIDE+XCJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pZCA9ICc8aW5wdXQgY3NzICcgKyBzZXF1ZW5jZSArICc+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLmZpbGUgPSB0aGlzLmZyb207XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlLCBsaW5lLCBjb2x1bW4pIHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLm9yaWdpbihsaW5lLCBjb2x1bW4pO1xuICAgICAgICAgICAgaWYgKG9yaWdpbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBfY3NzU3ludGF4RXJyb3IyLmRlZmF1bHQobWVzc2FnZSwgb3JpZ2luLmxpbmUsIG9yaWdpbi5jb2x1bW4sIG9yaWdpbi5zb3VyY2UsIG9yaWdpbi5maWxlLCBvcHRzLnBsdWdpbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBfY3NzU3ludGF4RXJyb3IyLmRlZmF1bHQobWVzc2FnZSwgbGluZSwgY29sdW1uLCB0aGlzLmNzcywgdGhpcy5maWxlLCBvcHRzLnBsdWdpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5pbnB1dCA9IHsgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIHNvdXJjZTogdGhpcy5jc3MgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUpIHJlc3VsdC5pbnB1dC5maWxlID0gdGhpcy5maWxlO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWRzIHRoZSBpbnB1dCBzb3VyY2UgbWFwIGFuZCByZXR1cm5zIGEgc3ltYm9sIHBvc2l0aW9uXG4gICAgICAgICAqIGluIHRoZSBpbnB1dCBzb3VyY2UgKGUuZy4sIGluIGEgU2FzcyBmaWxlIHRoYXQgd2FzIGNvbXBpbGVkXG4gICAgICAgICAqIHRvIENTUyBiZWZvcmUgYmVpbmcgcGFzc2VkIHRvIFBvc3RDU1MpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbGluZSAgIC0gbGluZSBpbiBpbnB1dCBDU1NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIGNvbHVtbiBpbiBpbnB1dCBDU1NcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmlsZVBvc2l0aW9ufSBwb3NpdGlvbiBpbiBpbnB1dCBzb3VyY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcm9vdC5zb3VyY2UuaW5wdXQub3JpZ2luKDEsIDEpIC8vPT4geyBmaWxlOiAnYS5jc3MnLCBsaW5lOiAzLCBjb2x1bW46IDEgfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9yaWdpbihsaW5lLCBjb2x1bW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBjb25zdW1lciA9IHRoaXMubWFwLmNvbnN1bWVyKCk7XG5cbiAgICAgICAgICAgIHZhciBmcm9tID0gY29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7IGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uIH0pO1xuICAgICAgICAgICAgaWYgKCFmcm9tLnNvdXJjZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGZpbGU6IHRoaXMubWFwUmVzb2x2ZShmcm9tLnNvdXJjZSksXG4gICAgICAgICAgICAgICAgbGluZTogZnJvbS5saW5lLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogZnJvbS5jb2x1bW5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBjb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKGZyb20uc291cmNlKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2UpIHJlc3VsdC5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21hcFJlc29sdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbWFwUmVzb2x2ZShmaWxlKSB7XG4gICAgICAgICAgICBpZiAoL15cXHcrOlxcL1xcLy8udGVzdChmaWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdCB8fCAnLicsIGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBDU1Mgc291cmNlIGlkZW50aWZpZXIuIENvbnRhaW5zIHtAbGluayBJbnB1dCNmaWxlfSBpZiB0aGUgdXNlclxuICAgICAgICAgKiBzZXQgdGhlIGBmcm9tYCBvcHRpb24sIG9yIHtAbGluayBJbnB1dCNpZH0gaWYgdGhleSBkaWQgbm90LlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZShjc3MsIHsgZnJvbTogJ2EuY3NzJyB9KTtcbiAgICAgICAgICogcm9vdC5zb3VyY2UuaW5wdXQuZnJvbSAvLz0+IFwiL2hvbWUvYWkvYS5jc3NcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZShjc3MpO1xuICAgICAgICAgKiByb290LnNvdXJjZS5pbnB1dC5mcm9tIC8vPT4gXCI8aW5wdXQgY3NzIDE+XCJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Zyb20nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUgfHwgdGhpcy5pZDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jc3NTeW50YXhFcnJvciA9IHJlcXVpcmUoJy4vY3NzLXN5bnRheC1lcnJvcicpO1xuXG52YXIgX2Nzc1N5bnRheEVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1N5bnRheEVycm9yKTtcblxudmFyIF9zdHJpbmdpZmllciA9IHJlcXVpcmUoJy4vc3RyaW5naWZpZXInKTtcblxudmFyIF9zdHJpbmdpZmllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZmllcik7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcblxudmFyIF9zdHJpbmdpZnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTtcblxudmFyIF93YXJuT25jZSA9IHJlcXVpcmUoJy4vd2Fybi1vbmNlJyk7XG5cbnZhciBfd2Fybk9uY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Fybk9uY2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IHBvc2l0aW9uXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZSAgIC0gc291cmNlIGxpbmUgaW4gZmlsZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiAtIHNvdXJjZSBjb2x1bW4gaW4gZmlsZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gc291cmNlXG4gKiBAcHJvcGVydHkge0lucHV0fSBpbnB1dCAgICAtIHtAbGluayBJbnB1dH0gd2l0aCBpbnB1dCBmaWxlXG4gKiBAcHJvcGVydHkge3Bvc2l0aW9ufSBzdGFydCAtIFRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgbm9kZeKAmXMgc291cmNlXG4gKiBAcHJvcGVydHkge3Bvc2l0aW9ufSBlbmQgICAtIFRoZSBlbmRpbmcgcG9zaXRpb24gb2YgdGhlIG5vZGXigJlzIHNvdXJjZVxuICovXG5cbnZhciBjbG9uZU5vZGUgPSBmdW5jdGlvbiBjbG9uZU5vZGUob2JqLCBwYXJlbnQpIHtcbiAgICB2YXIgY2xvbmVkID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgPT09ICdwYXJlbnQnICYmIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50KSBjbG9uZWRbaV0gPSBwYXJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gJ3NvdXJjZScpIHtcbiAgICAgICAgICAgIGNsb25lZFtpXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNsb25lZFtpXSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZU5vZGUoaiwgY2xvbmVkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGkgIT09ICdiZWZvcmUnICYmIGkgIT09ICdhZnRlcicgJiYgaSAhPT0gJ2JldHdlZW4nICYmIGkgIT09ICdzZW1pY29sb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHZhbHVlID0gY2xvbmVOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIGNsb25lZFtpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZDtcbn07XG5cbi8qKlxuICogQWxsIG5vZGUgY2xhc3NlcyBpbmhlcml0IHRoZSBmb2xsb3dpbmcgY29tbW9uIG1ldGhvZHMuXG4gKlxuICogQGFic3RyYWN0XG4gKi9cblxudmFyIE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSAtIHZhbHVlIGZvciBub2RlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOb2RlKCkge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuICAgICAgICB0aGlzLnJhd3MgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IGRlZmF1bHRzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIENzc1N5bnRheEVycm9yIGluc3RhbmNlIGNvbnRhaW5pbmcgdGhlIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICogb2YgdGhlIG5vZGUgaW4gdGhlIHNvdXJjZSwgc2hvd2luZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBhbmQgYWxzb1xuICAgICAqIGEgc21hbGwgZXhjZXJwdCB0byBmYWNpbGl0YXRlIGRlYnVnZ2luZy5cbiAgICAgKlxuICAgICAqIElmIHByZXNlbnQsIGFuIGlucHV0IHNvdXJjZSBtYXAgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgKiBvZiB0aGUgc291cmNlLCBldmVuIGZyb20gYSBwcmV2aW91cyBjb21waWxhdGlvbiBzdGVwXG4gICAgICogKGUuZy4sIGZyb20gU2FzcyBjb21waWxhdGlvbikuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBwcm9kdWNlcyB2ZXJ5IHVzZWZ1bCBlcnJvciBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICAgICAtIGVycm9yIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRzXSAgICAgIC0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnBsdWdpbiAtIHBsdWdpbiBuYW1lIHRoYXQgY3JlYXRlZCB0aGlzIGVycm9yLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RDU1Mgd2lsbCBzZXQgaXQgYXV0b21hdGljYWxseS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy53b3JkICAgLSBhIHdvcmQgaW5zaWRlIGEgbm9kZeKAmXMgc3RyaW5nIHRoYXQgc2hvdWxkXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgaGlnaGxpZ2h0ZWQgYXMgdGhlIHNvdXJjZSBvZiB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb3B0cy5pbmRleCAgLSBhbiBpbmRleCBpbnNpZGUgYSBub2Rl4oCZcyBzdHJpbmcgdGhhdCBzaG91bGRcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSBoaWdobGlnaHRlZCBhcyB0aGUgc291cmNlIG9mIHRoZSBlcnJvclxuICAgICAqXG4gICAgICogQHJldHVybiB7Q3NzU3ludGF4RXJyb3J9IGVycm9yIG9iamVjdCB0byB0aHJvdyBpdFxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpZiAoICF2YXJpYWJsZXNbbmFtZV0gKSB7XG4gICAgICogICB0aHJvdyBkZWNsLmVycm9yKCdVbmtub3duIHZhcmlhYmxlICcgKyBuYW1lLCB7IHdvcmQ6IG5hbWUgfSk7XG4gICAgICogICAvLyBDc3NTeW50YXhFcnJvcjogcG9zdGNzcy12YXJzOmEuc2Fzczo0OjM6IFVua25vd24gdmFyaWFibGUgJGJsYWNrXG4gICAgICogICAvLyAgIGNvbG9yOiAkYmxhY2tcbiAgICAgKiAgIC8vIGFcbiAgICAgKiAgIC8vICAgICAgICAgIF5cbiAgICAgKiAgIC8vICAgYmFja2dyb3VuZDogd2hpdGVcbiAgICAgKiB9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhOb2RlLCBbe1xuICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnBvc2l0aW9uQnkob3B0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmlucHV0LmVycm9yKG1lc3NhZ2UsIHBvcy5saW5lLCBwb3MuY29sdW1uLCBvcHRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfY3NzU3ludGF4RXJyb3IyLmRlZmF1bHQobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgYXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGZvciB7QGxpbmsgUmVzdWx0I3dhcm59LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1Jlc3VsdH0gcmVzdWx0ICAgICAgLSB0aGUge0BsaW5rIFJlc3VsdH0gaW5zdGFuY2VcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIHdhcm5pbmdcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgICAgICAgIC0gd2FybmluZyBtZXNzYWdlXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0c10gICAgICAtIG9wdGlvbnNcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMucGx1Z2luIC0gcGx1Z2luIG5hbWUgdGhhdCBjcmVhdGVkIHRoaXMgd2FybmluZy5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zdENTUyB3aWxsIHNldCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy53b3JkICAgLSBhIHdvcmQgaW5zaWRlIGEgbm9kZeKAmXMgc3RyaW5nIHRoYXQgc2hvdWxkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGhpZ2hsaWdodGVkIGFzIHRoZSBzb3VyY2Ugb2YgdGhlIHdhcm5pbmdcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9wdHMuaW5kZXggIC0gYW4gaW5kZXggaW5zaWRlIGEgbm9kZeKAmXMgc3RyaW5nIHRoYXQgc2hvdWxkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGhpZ2hsaWdodGVkIGFzIHRoZSBzb3VyY2Ugb2YgdGhlIHdhcm5pbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7V2FybmluZ30gY3JlYXRlZCB3YXJuaW5nIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBwbHVnaW4gPSBwb3N0Y3NzLnBsdWdpbigncG9zdGNzcy1kZXByZWNhdGVkJywgKCkgPT4ge1xuICAgICAgICAgKiAgIHJldHVybiAocm9vdCwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAqICAgICByb290LndhbGtEZWNscygnYmFkJywgZGVjbCA9PiB7XG4gICAgICAgICAqICAgICAgIGRlY2wud2FybihyZXN1bHQsICdEZXByZWNhdGVkIHByb3BlcnR5IGJhZCcpO1xuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqICAgfTtcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd3YXJuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm4ocmVzdWx0LCB0ZXh0LCBvcHRzKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHsgbm9kZTogdGhpcyB9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IG9wdHNbaV07XG4gICAgICAgICAgICB9cmV0dXJuIHJlc3VsdC53YXJuKHRleHQsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIG5vZGUgZnJvbSBpdHMgcGFyZW50IGFuZCBjbGVhbnMgdGhlIHBhcmVudCBwcm9wZXJ0aWVzXG4gICAgICAgICAqIGZyb20gdGhlIG5vZGUgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogaWYgKCBkZWNsLnByb3AubWF0Y2goL14td2Via2l0LS8pICkge1xuICAgICAgICAgKiAgIGRlY2wucmVtb3ZlKCk7XG4gICAgICAgICAqIH1cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gbm9kZSB0byBtYWtlIGNhbGxzIGNoYWluXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBDU1Mgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbm9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmdpZmllcnxzeW50YXh9IFtzdHJpbmdpZmllcl0gLSBhIHN5bnRheCB0byB1c2VcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiBzdHJpbmcgZ2VuZXJhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IENTUyBzdHJpbmcgb2YgdGhpcyBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHBvc3Rjc3MucnVsZSh7IHNlbGVjdG9yOiAnYScgfSkudG9TdHJpbmcoKSAvLz0+IFwiYSB7fVwiXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmdpZmllciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX3N0cmluZ2lmeTIuZGVmYXVsdDtcblxuICAgICAgICAgICAgaWYgKHN0cmluZ2lmaWVyLnN0cmluZ2lmeSkgc3RyaW5naWZpZXIgPSBzdHJpbmdpZmllci5zdHJpbmdpZnk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBzdHJpbmdpZmllcih0aGlzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbm9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHJlc3VsdGluZyBjbG9uZWQgbm9kZSBhbmQgaXRzIChjbG9uZWQpIGNoaWxkcmVuIHdpbGwgaGF2ZVxuICAgICAgICAgKiBhIGNsZWFuIHBhcmVudCBhbmQgY29kZSBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gW292ZXJyaWRlc10gLSBuZXcgcHJvcGVydGllcyB0byBvdmVycmlkZSBpbiB0aGUgY2xvbmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IGNsb25lZCA9IGRlY2wuY2xvbmUoeyBwcm9wOiAnLW1vei0nICsgZGVjbC5wcm9wIH0pO1xuICAgICAgICAgKiBjbG9uZWQucmF3cy5iZWZvcmUgIC8vPT4gdW5kZWZpbmVkXG4gICAgICAgICAqIGNsb25lZC5wYXJlbnQgICAgICAgLy89PiB1bmRlZmluZWRcbiAgICAgICAgICogY2xvbmVkLnRvU3RyaW5nKCkgICAvLz0+IC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSBjbG9uZSBvZiB0aGUgbm9kZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xvbmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgICAgICB2YXIgb3ZlcnJpZGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgdmFyIGNsb25lZCA9IGNsb25lTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gb3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkW25hbWVdID0gb3ZlcnJpZGVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCB0byBjbG9uZSB0aGUgbm9kZSBhbmQgaW5zZXJ0IHRoZSByZXN1bHRpbmcgY2xvbmVkIG5vZGVcbiAgICAgICAgICogYmVmb3JlIHRoZSBjdXJyZW50IG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3ZlcnJpZGVzXSAtIG5ldyBwcm9wZXJ0aWVzIHRvIG92ZXJyaWRlIGluIHRoZSBjbG9uZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZGVjbC5jbG9uZUJlZm9yZSh7IHByb3A6ICctbW96LScgKyBkZWNsLnByb3AgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IC0gbmV3IG5vZGVcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nsb25lQmVmb3JlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lQmVmb3JlKCkge1xuICAgICAgICAgICAgdmFyIG92ZXJyaWRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIHZhciBjbG9uZWQgPSB0aGlzLmNsb25lKG92ZXJyaWRlcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgY2xvbmVkKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgdG8gY2xvbmUgdGhlIG5vZGUgYW5kIGluc2VydCB0aGUgcmVzdWx0aW5nIGNsb25lZCBub2RlXG4gICAgICAgICAqIGFmdGVyIHRoZSBjdXJyZW50IG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3ZlcnJpZGVzXSAtIG5ldyBwcm9wZXJ0aWVzIHRvIG92ZXJyaWRlIGluIHRoZSBjbG9uZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gLSBuZXcgbm9kZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xvbmVBZnRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZUFmdGVyKCkge1xuICAgICAgICAgICAgdmFyIG92ZXJyaWRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIHZhciBjbG9uZWQgPSB0aGlzLmNsb25lKG92ZXJyaWRlcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLCBjbG9uZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIG5vZGUocykgYmVmb3JlIHRoZSBjdXJyZW50IG5vZGUgYW5kIHJlbW92ZXMgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsuLi5Ob2RlfSBub2RlcyAtIG5vZGUocykgdG8gcmVwbGFjZSBjdXJyZW50IG9uZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBpZiAoIGF0cnVsZS5uYW1lID09ICdtaXhpbicgKSB7XG4gICAgICAgICAqICAgYXRydWxlLnJlcGxhY2VXaXRoKG1peGluUnVsZXNbYXRydWxlLnBhcmFtc10pO1xuICAgICAgICAgKiB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IGN1cnJlbnQgbm9kZSB0byBtZXRob2RzIGNoYWluXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXBsYWNlV2l0aCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlV2l0aCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBub2RlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUoX3RoaXMsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCBhbmQgaW5zZXJ0cyBpdFxuICAgICAgICAgKiBhdCB0aGUgZW5kIG9mIGBuZXdQYXJlbnRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHdpbGwgY2xlYW4gdGhlIGBiZWZvcmVgIGFuZCBgYWZ0ZXJgIGNvZGUge0BsaW5rIE5vZGUjcmF3c30gZGF0YVxuICAgICAgICAgKiBmcm9tIHRoZSBub2RlIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB0aGUgaW5kZW50YXRpb24gc3R5bGUgb2YgYG5ld1BhcmVudGAuXG4gICAgICAgICAqIEl0IHdpbGwgYWxzbyBjbGVhbiB0aGUgYGJldHdlZW5gIHByb3BlcnR5XG4gICAgICAgICAqIGlmIGBuZXdQYXJlbnRgIGlzIGluIGFub3RoZXIge0BsaW5rIFJvb3R9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0NvbnRhaW5lcn0gbmV3UGFyZW50IC0gY29udGFpbmVyIG5vZGUgd2hlcmUgdGhlIGN1cnJlbnQgbm9kZVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCBiZSBtb3ZlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBhdHJ1bGUubW92ZVRvKGF0cnVsZS5yb290KCkpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSBjdXJyZW50IG5vZGUgdG8gbWV0aG9kcyBjaGFpblxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbW92ZVRvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVUbyhuZXdQYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5SYXdzKHRoaXMucm9vdCgpID09PSBuZXdQYXJlbnQucm9vdCgpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICBuZXdQYXJlbnQuYXBwZW5kKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCBhbmQgaW5zZXJ0cyBpdCBpbnRvXG4gICAgICAgICAqIGEgbmV3IHBhcmVudCBiZWZvcmUgYG90aGVyTm9kZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgd2lsbCBhbHNvIGNsZWFuIHRoZSBub2Rl4oCZcyBjb2RlIHN0eWxlIHByb3BlcnRpZXMganVzdCBhcyBpdCB3b3VsZFxuICAgICAgICAgKiBpbiB7QGxpbmsgTm9kZSNtb3ZlVG99LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge05vZGV9IG90aGVyTm9kZSAtIG5vZGUgdGhhdCB3aWxsIGJlIGJlZm9yZSBjdXJyZW50IG5vZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gY3VycmVudCBub2RlIHRvIG1ldGhvZHMgY2hhaW5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21vdmVCZWZvcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZUJlZm9yZShvdGhlck5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5SYXdzKHRoaXMucm9vdCgpID09PSBvdGhlck5vZGUucm9vdCgpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICBvdGhlck5vZGUucGFyZW50Lmluc2VydEJlZm9yZShvdGhlck5vZGUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCBhbmQgaW5zZXJ0cyBpdCBpbnRvXG4gICAgICAgICAqIGEgbmV3IHBhcmVudCBhZnRlciBgb3RoZXJOb2RlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIGFsc28gY2xlYW4gdGhlIG5vZGXigJlzIGNvZGUgc3R5bGUgcHJvcGVydGllcyBqdXN0IGFzIGl0IHdvdWxkXG4gICAgICAgICAqIGluIHtAbGluayBOb2RlI21vdmVUb30uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Tm9kZX0gb3RoZXJOb2RlIC0gbm9kZSB0aGF0IHdpbGwgYmUgYWZ0ZXIgY3VycmVudCBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IGN1cnJlbnQgbm9kZSB0byBtZXRob2RzIGNoYWluXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtb3ZlQWZ0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZUFmdGVyKG90aGVyTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhblJhd3ModGhpcy5yb290KCkgPT09IG90aGVyTm9kZS5yb290KCkpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIG90aGVyTm9kZS5wYXJlbnQuaW5zZXJ0QWZ0ZXIob3RoZXJOb2RlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG5leHQgY2hpbGQgb2YgdGhlIG5vZGXigJlzIHBhcmVudC5cbiAgICAgICAgICogUmV0dXJucyBgdW5kZWZpbmVkYCBpZiB0aGUgY3VycmVudCBub2RlIGlzIHRoZSBsYXN0IGNoaWxkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfHVuZGVmaW5lZH0gbmV4dCBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGlmICggY29tbWVudC50ZXh0ID09PSAnZGVsZXRlIG5leHQnICkge1xuICAgICAgICAgKiAgIGNvbnN0IG5leHQgPSBjb21tZW50Lm5leHQoKTtcbiAgICAgICAgICogICBpZiAoIG5leHQgKSB7XG4gICAgICAgICAqICAgICBuZXh0LnJlbW92ZSgpO1xuICAgICAgICAgKiAgIH1cbiAgICAgICAgICogfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbmV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wYXJlbnQuaW5kZXgodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBwcmV2aW91cyBjaGlsZCBvZiB0aGUgbm9kZeKAmXMgcGFyZW50LlxuICAgICAgICAgKiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIHRoZSBjdXJyZW50IG5vZGUgaXMgdGhlIGZpcnN0IGNoaWxkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfHVuZGVmaW5lZH0gcHJldmlvdXMgbm9kZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBhbm5vdGF0aW9uID0gZGVjbC5wcmV2KCk7XG4gICAgICAgICAqIGlmICggYW5ub3RhdGlvbi50eXBlID09ICdjb21tZW50JyApIHtcbiAgICAgICAgICogIHJlYWRBbm5vdGF0aW9uKGFubm90YXRpb24udGV4dCk7XG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXYnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJldigpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMucGFyZW50LmluZGV4KHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Lm5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvSlNPTicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICAgICAgICB2YXIgZml4ZWQgPSB7fTtcblxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3BhcmVudCcpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgaSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaSkpID09PSAnb2JqZWN0JyAmJiBpLnRvSlNPTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS50b0pTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZS50b0pTT04oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpeGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB7QGxpbmsgTm9kZSNyYXdzfSB2YWx1ZS4gSWYgdGhlIG5vZGUgaXMgbWlzc2luZ1xuICAgICAgICAgKiB0aGUgY29kZSBzdHlsZSBwcm9wZXJ0eSAoYmVjYXVzZSB0aGUgbm9kZSB3YXMgbWFudWFsbHkgYnVpbHQgb3IgY2xvbmVkKSxcbiAgICAgICAgICogUG9zdENTUyB3aWxsIHRyeSB0byBhdXRvZGV0ZWN0IHRoZSBjb2RlIHN0eWxlIHByb3BlcnR5IGJ5IGxvb2tpbmdcbiAgICAgICAgICogYXQgb3RoZXIgbm9kZXMgaW4gdGhlIHRyZWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wICAgICAgICAgIC0gbmFtZSBvZiBjb2RlIHN0eWxlIHByb3BlcnR5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFR5cGVdIC0gbmFtZSBvZiBkZWZhdWx0IHZhbHVlLCBpdCBjYW4gYmUgbWlzc2VkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgdGhlIHZhbHVlIGlzIHRoZSBzYW1lIGFzIHByb3BcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EgeyBiYWNrZ3JvdW5kOiB3aGl0ZSB9Jyk7XG4gICAgICAgICAqIHJvb3Qubm9kZXNbMF0uYXBwZW5kKHsgcHJvcDogJ2NvbG9yJywgdmFsdWU6ICdibGFjaycgfSk7XG4gICAgICAgICAqIHJvb3Qubm9kZXNbMF0ubm9kZXNbMV0ucmF3cy5iZWZvcmUgICAvLz0+IHVuZGVmaW5lZFxuICAgICAgICAgKiByb290Lm5vZGVzWzBdLm5vZGVzWzFdLnJhdygnYmVmb3JlJykgLy89PiAnICdcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBjb2RlIHN0eWxlIHZhbHVlXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3KHByb3AsIGRlZmF1bHRUeXBlKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gbmV3IF9zdHJpbmdpZmllcjIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yYXcodGhpcywgcHJvcCwgZGVmYXVsdFR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBSb290IGluc3RhbmNlIG9mIHRoZSBub2Rl4oCZcyB0cmVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiByb290Lm5vZGVzWzBdLm5vZGVzWzBdLnJvb3QoKSA9PT0gcm9vdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtSb290fSByb290IHBhcmVudFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncm9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByb290KCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XG4gICAgICAgICAgICB3aGlsZSAocmVzdWx0LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQ7XG4gICAgICAgICAgICB9cmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xlYW5SYXdzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFuUmF3cyhrZWVwQmV0d2Vlbikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmF3cy5iZWZvcmU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yYXdzLmFmdGVyO1xuICAgICAgICAgICAgaWYgKCFrZWVwQmV0d2VlbikgZGVsZXRlIHRoaXMucmF3cy5iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwb3NpdGlvbkluc2lkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwb3NpdGlvbkluc2lkZShpbmRleCkge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLnNvdXJjZS5zdGFydC5jb2x1bW47XG4gICAgICAgICAgICB2YXIgbGluZSA9IHRoaXMuc291cmNlLnN0YXJ0LmxpbmU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdbaV0gPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Bvc2l0aW9uQnknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcG9zaXRpb25CeShvcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5zb3VyY2Uuc3RhcnQ7XG4gICAgICAgICAgICBpZiAob3B0cy5pbmRleCkge1xuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5pbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMud29yZCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudG9TdHJpbmcoKS5pbmRleE9mKG9wdHMud29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgcG9zID0gdGhpcy5wb3NpdGlvbkluc2lkZShpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVTZWxmJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVNlbGYoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNyZW1vdmVTZWxmIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3JlbW92ZS4nKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXBsYWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2Uobm9kZXMpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI3JlcGxhY2UgaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmVwbGFjZVdpdGgnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VXaXRoKG5vZGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3R5bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3R5bGUob3duLCBkZXRlY3QpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI3N0eWxlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3KCknKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhdyhvd24sIGRldGVjdCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFuU3R5bGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFuU3R5bGVzKGtlZXBCZXR3ZWVuKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNjbGVhblN0eWxlcygpIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI2NsZWFuUmF3cygpJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGVhblJhd3Moa2VlcEJldHdlZW4pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiZWZvcmUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI2JlZm9yZSBpcyBkZXByZWNhdGVkLiBVc2UgTm9kZSNyYXdzLmJlZm9yZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5iZWZvcmU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ05vZGUjYmVmb3JlIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MuYmVmb3JlJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MuYmVmb3JlID0gdmFsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiZXR3ZWVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNiZXR3ZWVuIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MuYmV0d2VlbicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5iZXR3ZWVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI2JldHdlZW4gaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3cy5iZXR3ZWVuJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MuYmV0d2VlbiA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgTm9kZSNcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB0eXBlIC0gU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbm9kZeKAmXMgdHlwZS5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgUG9zc2libGUgdmFsdWVzIGFyZSBgcm9vdGAsIGBhdHJ1bGVgLCBgcnVsZWAsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIGBkZWNsYCwgb3IgYGNvbW1lbnRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBwb3N0Y3NzLmRlY2woeyBwcm9wOiAnY29sb3InLCB2YWx1ZTogJ2JsYWNrJyB9KS50eXBlIC8vPT4gJ2RlY2wnXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgTm9kZSNcbiAgICAgICAgICogQG1lbWJlciB7Q29udGFpbmVyfSBwYXJlbnQgLSB0aGUgbm9kZeKAmXMgcGFyZW50IG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJvb3Qubm9kZXNbMF0ucGFyZW50ID09IHJvb3Q7XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgTm9kZSNcbiAgICAgICAgICogQG1lbWJlciB7c291cmNlfSBzb3VyY2UgLSB0aGUgaW5wdXQgc291cmNlIG9mIHRoZSBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGluIHNvdXJjZSBtYXAgZ2VuZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IGNyZWF0ZSBhIG5vZGUgbWFudWFsbHkgKGUuZy4sIHdpdGggYHBvc3Rjc3MuZGVjbCgpYCksXG4gICAgICAgICAqIHRoYXQgbm9kZSB3aWxsIG5vdCBoYXZlIGEgYHNvdXJjZWAgcHJvcGVydHkgYW5kIHdpbGwgYmUgYWJzZW50XG4gICAgICAgICAqIGZyb20gdGhlIHNvdXJjZSBtYXAuIEZvciB0aGlzIHJlYXNvbiwgdGhlIHBsdWdpbiBkZXZlbG9wZXIgc2hvdWxkXG4gICAgICAgICAqIGNvbnNpZGVyIGNsb25pbmcgbm9kZXMgdG8gY3JlYXRlIG5ldyBvbmVzIChpbiB3aGljaCBjYXNlIHRoZSBuZXcgbm9kZeKAmXNcbiAgICAgICAgICogc291cmNlIHdpbGwgcmVmZXJlbmNlIHRoZSBvcmlnaW5hbCwgY2xvbmVkIG5vZGUpIG9yIHNldHRpbmdcbiAgICAgICAgICogdGhlIGBzb3VyY2VgIHByb3BlcnR5IG1hbnVhbGx5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBqc1xuICAgICAgICAgKiAvLyBCYWRcbiAgICAgICAgICogY29uc3QgcHJlZml4ZWQgPSBwb3N0Y3NzLmRlY2woe1xuICAgICAgICAgKiAgIHByb3A6ICctbW96LScgKyBkZWNsLnByb3AsXG4gICAgICAgICAqICAgdmFsdWU6IGRlY2wudmFsdWVcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEdvb2RcbiAgICAgICAgICogY29uc3QgcHJlZml4ZWQgPSBkZWNsLmNsb25lKHsgcHJvcDogJy1tb3otJyArIGRlY2wucHJvcCB9KTtcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYGpzXG4gICAgICAgICAqIGlmICggYXRydWxlLm5hbWUgPT0gJ2FkZC1saW5rJyApIHtcbiAgICAgICAgICogICBjb25zdCBydWxlID0gcG9zdGNzcy5ydWxlKHsgc2VsZWN0b3I6ICdhJywgc291cmNlOiBhdHJ1bGUuc291cmNlIH0pO1xuICAgICAgICAgKiAgIGF0cnVsZS5wYXJlbnQuaW5zZXJ0QmVmb3JlKGF0cnVsZSwgcnVsZSk7XG4gICAgICAgICAqIH1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGRlY2wuc291cmNlLmlucHV0LmZyb20gLy89PiAnL2hvbWUvYWkvYS5zYXNzJ1xuICAgICAgICAgKiBkZWNsLnNvdXJjZS5zdGFydCAgICAgIC8vPT4geyBsaW5lOiAxMCwgY29sdW1uOiAyIH1cbiAgICAgICAgICogZGVjbC5zb3VyY2UuZW5kICAgICAgICAvLz0+IHsgbGluZTogMTAsIGNvbHVtbjogMTIgfVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIE5vZGUjXG4gICAgICAgICAqIEBtZW1iZXIge29iamVjdH0gcmF3cyAtIEluZm9ybWF0aW9uIHRvIGdlbmVyYXRlIGJ5dGUtdG8tYnl0ZSBlcXVhbFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHN0cmluZyBhcyBpdCB3YXMgaW4gdGhlIG9yaWdpbiBpbnB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogRXZlcnkgcGFyc2VyIHNhdmVzIGl0cyBvd24gcHJvcGVydGllcyxcbiAgICAgICAgICogYnV0IHRoZSBkZWZhdWx0IENTUyBwYXJzZXIgdXNlczpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBgYmVmb3JlYDogdGhlIHNwYWNlIHN5bWJvbHMgYmVmb3JlIHRoZSBub2RlLiBJdCBhbHNvIHN0b3JlcyBgKmBcbiAgICAgICAgICogICBhbmQgYF9gIHN5bWJvbHMgYmVmb3JlIHRoZSBkZWNsYXJhdGlvbiAoSUUgaGFjaykuXG4gICAgICAgICAqICogYGFmdGVyYDogdGhlIHNwYWNlIHN5bWJvbHMgYWZ0ZXIgdGhlIGxhc3QgY2hpbGQgb2YgdGhlIG5vZGVcbiAgICAgICAgICogICB0byB0aGUgZW5kIG9mIHRoZSBub2RlLlxuICAgICAgICAgKiAqIGBiZXR3ZWVuYDogdGhlIHN5bWJvbHMgYmV0d2VlbiB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICAgICAqICAgZm9yIGRlY2xhcmF0aW9ucywgc2VsZWN0b3IgYW5kIGB7YCBmb3IgcnVsZXMsIG9yIGxhc3QgcGFyYW1ldGVyXG4gICAgICAgICAqICAgYW5kIGB7YCBmb3IgYXQtcnVsZXMuXG4gICAgICAgICAqICogYHNlbWljb2xvbmA6IGNvbnRhaW5zIHRydWUgaWYgdGhlIGxhc3QgY2hpbGQgaGFzXG4gICAgICAgICAqICAgYW4gKG9wdGlvbmFsKSBzZW1pY29sb24uXG4gICAgICAgICAqICogYGFmdGVyTmFtZWA6IHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBhdC1ydWxlIG5hbWUgYW5kIGl0cyBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiAqIGBsZWZ0YDogdGhlIHNwYWNlIHN5bWJvbHMgYmV0d2VlbiBgLypgIGFuZCB0aGUgY29tbWVudOKAmXMgdGV4dC5cbiAgICAgICAgICogKiBgcmlnaHRgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZXR3ZWVuIHRoZSBjb21tZW504oCZcyB0ZXh0XG4gICAgICAgICAqICAgYW5kIDxjb2RlPiomIzQ3OzwvY29kZT4uXG4gICAgICAgICAqICogYGltcG9ydGFudGA6IHRoZSBjb250ZW50IG9mIHRoZSBpbXBvcnRhbnQgc3RhdGVtZW50LFxuICAgICAgICAgKiAgIGlmIGl0IGlzIG5vdCBqdXN0IGAhaW1wb3J0YW50YC5cbiAgICAgICAgICpcbiAgICAgICAgICogUG9zdENTUyBjbGVhbnMgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbiB2YWx1ZXMgYW5kIGF0LXJ1bGUgcGFyYW1ldGVyc1xuICAgICAgICAgKiBmcm9tIGNvbW1lbnRzIGFuZCBleHRyYSBzcGFjZXMsIGJ1dCBpdCBzdG9yZXMgb3JpZ2luIGNvbnRlbnQgaW4gcmF3c1xuICAgICAgICAgKiBwcm9wZXJ0aWVzLiBBcyBzdWNoLCBpZiB5b3UgZG9u4oCZdCBjaGFuZ2UgYSBkZWNsYXJhdGlvbuKAmXMgdmFsdWUsXG4gICAgICAgICAqIFBvc3RDU1Mgd2lsbCB1c2UgdGhlIHJhdyB2YWx1ZSB3aXRoIGNvbW1lbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7XFxuICBjb2xvcjpibGFja1xcbn0nKVxuICAgICAgICAgKiByb290LmZpcnN0LmZpcnN0LnJhd3MgLy89PiB7IGJlZm9yZTogJ1xcbiAgJywgYmV0d2VlbjogJzonIH1cbiAgICAgICAgICovXG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTm9kZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm9kZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3Mvbm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnJlcXVpcmUoJy4vcnVsZScpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfbGF6eVJlc3VsdCA9IHJlcXVpcmUoJy4vbGF6eS1yZXN1bHQnKTtcblxudmFyIF9sYXp5UmVzdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xhenlSZXN1bHQpO1xuXG52YXIgX3Byb2Nlc3NvciA9IHJlcXVpcmUoJy4vcHJvY2Vzc29yJyk7XG5cbnZhciBfcHJvY2Vzc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb2Nlc3Nvcik7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBicmVhayBjeWNsaWNhbCBkZXBlbmRlbmN5IGRlYWRsb2NrIOKAkyAjODdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQ1NTIGZpbGUgYW5kIGNvbnRhaW5zIGFsbCBpdHMgcGFyc2VkIG5vZGVzLlxuICpcbiAqIEBleHRlbmRzIENvbnRhaW5lclxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYXtjb2xvcjpibGFja30gYnt6LWluZGV4OjJ9Jyk7XG4gKiByb290LnR5cGUgICAgICAgICAvLz0+ICdyb290J1xuICogcm9vdC5ub2Rlcy5sZW5ndGggLy89PiAyXG4gKi9cbnZhciBSb290ID0gZnVuY3Rpb24gKF9Db250YWluZXIpIHtcbiAgICBfaW5oZXJpdHMoUm9vdCwgX0NvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBSb290KGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb290KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUm9vdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJvb3QpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdyb290JztcbiAgICAgICAgaWYgKCFfdGhpcy5ub2RlcykgX3RoaXMubm9kZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSb290LCBbe1xuICAgICAgICBrZXk6ICdyZW1vdmVDaGlsZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQgPSB0aGlzLmluZGV4KGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkID09PSAwICYmIHRoaXMubm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXNbMV0ucmF3cy5iZWZvcmUgPSB0aGlzLm5vZGVzW2NoaWxkXS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9nZXQoUm9vdC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSb290LnByb3RvdHlwZSksICdyZW1vdmVDaGlsZCcsIHRoaXMpLmNhbGwodGhpcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdub3JtYWxpemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbm9ybWFsaXplKGNoaWxkLCBzYW1wbGUsIHR5cGUpIHtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IF9nZXQoUm9vdC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSb290LnByb3RvdHlwZSksICdub3JtYWxpemUnLCB0aGlzKS5jYWxsKHRoaXMsIGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKHNhbXBsZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAncHJlcGVuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlLnJhd3MuYmVmb3JlID0gdGhpcy5ub2Rlc1sxXS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzYW1wbGUucmF3cy5iZWZvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlyc3QgIT09IHNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJhd3MuYmVmb3JlID0gc2FtcGxlLnJhd3MuYmVmb3JlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEge0BsaW5rIFJlc3VsdH0gaW5zdGFuY2UgcmVwcmVzZW50aW5nIHRoZSByb2904oCZcyBDU1MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7cHJvY2Vzc09wdGlvbnN9IFtvcHRzXSAtIG9wdGlvbnMgd2l0aCBvbmx5IGB0b2AgYW5kIGBtYXBgIGtleXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7UmVzdWx0fSByZXN1bHQgd2l0aCBjdXJyZW50IHJvb3TigJlzIENTU1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290MSA9IHBvc3Rjc3MucGFyc2UoY3NzMSwgeyBmcm9tOiAnYS5jc3MnIH0pO1xuICAgICAgICAgKiBjb25zdCByb290MiA9IHBvc3Rjc3MucGFyc2UoY3NzMiwgeyBmcm9tOiAnYi5jc3MnIH0pO1xuICAgICAgICAgKiByb290MS5hcHBlbmQocm9vdDIpO1xuICAgICAgICAgKiBjb25zdCByZXN1bHQgPSByb290MS50b1Jlc3VsdCh7IHRvOiAnYWxsLmNzcycsIG1hcDogdHJ1ZSB9KTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvUmVzdWx0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvUmVzdWx0KCkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICB2YXIgbGF6eSA9IG5ldyBfbGF6eVJlc3VsdDIuZGVmYXVsdChuZXcgX3Byb2Nlc3NvcjIuZGVmYXVsdCgpLCB0aGlzLCBvcHRzKTtcbiAgICAgICAgICAgIHJldHVybiBsYXp5LnN0cmluZ2lmeSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGNoaWxkKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnUm9vdCNyZW1vdmUgaXMgZGVwcmVjYXRlZC4gVXNlIFJvb3QjcmVtb3ZlQ2hpbGQnKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmV2TWFwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXZNYXAoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnUm9vdCNwcmV2TWFwIGlzIGRlcHJlY2F0ZWQuIFVzZSBSb290I3NvdXJjZS5pbnB1dC5tYXAnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5pbnB1dC5tYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIFJvb3QjXG4gICAgICAgICAqIEBtZW1iZXIge29iamVjdH0gcmF3cyAtIEluZm9ybWF0aW9uIHRvIGdlbmVyYXRlIGJ5dGUtdG8tYnl0ZSBlcXVhbFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHN0cmluZyBhcyBpdCB3YXMgaW4gdGhlIG9yaWdpbiBpbnB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogRXZlcnkgcGFyc2VyIHNhdmVzIGl0cyBvd24gcHJvcGVydGllcyxcbiAgICAgICAgICogYnV0IHRoZSBkZWZhdWx0IENTUyBwYXJzZXIgdXNlczpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBgYWZ0ZXJgOiB0aGUgc3BhY2Ugc3ltYm9scyBhZnRlciB0aGUgbGFzdCBjaGlsZCB0byB0aGUgZW5kIG9mIGZpbGUuXG4gICAgICAgICAqICogYHNlbWljb2xvbmA6IGlzIHRoZSBsYXN0IGNoaWxkIGhhcyBhbiAob3B0aW9uYWwpIHNlbWljb2xvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcG9zdGNzcy5wYXJzZSgnYSB7fVxcbicpLnJhd3MgLy89PiB7IGFmdGVyOiAnXFxuJyB9XG4gICAgICAgICAqIHBvc3Rjc3MucGFyc2UoJ2Ege30nKS5yYXdzICAgLy89PiB7IGFmdGVyOiAnJyB9XG4gICAgICAgICAqL1xuXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJvb3Q7XG59KF9jb250YWluZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb290O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnJlcXVpcmUoJy4vYXQtcnVsZScpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBicmVhayBjeWNsaWNhbCBkZXBlbmRlbmN5IGRlYWRsb2NrIOKAkyAjODdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQ1NTIHJ1bGU6IGEgc2VsZWN0b3IgZm9sbG93ZWQgYnkgYSBkZWNsYXJhdGlvbiBibG9jay5cbiAqXG4gKiBAZXh0ZW5kcyBDb250YWluZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2F7fScpO1xuICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3Q7XG4gKiBydWxlLnR5cGUgICAgICAgLy89PiAncnVsZSdcbiAqIHJ1bGUudG9TdHJpbmcoKSAvLz0+ICdhe30nXG4gKi9cbnZhciBSdWxlID0gZnVuY3Rpb24gKF9Db250YWluZXIpIHtcbiAgICBfaW5oZXJpdHMoUnVsZSwgX0NvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBSdWxlKGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSdWxlKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUnVsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJ1bGUpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdydWxlJztcbiAgICAgICAgaWYgKCFfdGhpcy5ub2RlcykgX3RoaXMubm9kZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJ1bGXigJlzIGluZGl2aWR1YWwgc2VsZWN0b3JzLlxuICAgICAqIEdyb3VwcyBvZiBzZWxlY3RvcnMgYXJlIHNwbGl0IGF0IGNvbW1hcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EsIGIgeyB9Jyk7XG4gICAgICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3Q7XG4gICAgICpcbiAgICAgKiBydWxlLnNlbGVjdG9yICAvLz0+ICdhLCBiJ1xuICAgICAqIHJ1bGUuc2VsZWN0b3JzIC8vPT4gWydhJywgJ2InXVxuICAgICAqXG4gICAgICogcnVsZS5zZWxlY3RvcnMgPSBbJ2EnLCAnc3Ryb25nJ107XG4gICAgICogcnVsZS5zZWxlY3RvciAvLz0+ICdhLCBzdHJvbmcnXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSdWxlLCBbe1xuICAgICAgICBrZXk6ICdzZWxlY3RvcnMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfbGlzdDIuZGVmYXVsdC5jb21tYSh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSB0aGlzLnNlbGVjdG9yID8gdGhpcy5zZWxlY3Rvci5tYXRjaCgvLFxccyovKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgc2VwID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcsJyArIHRoaXMucmF3KCdiZXR3ZWVuJywgJ2JlZm9yZU9wZW4nKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IgPSB2YWx1ZXMuam9pbihzZXApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfc2VsZWN0b3InLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdSdWxlI19zZWxlY3RvciBpcyBkZXByZWNhdGVkLiBVc2UgUnVsZSNyYXdzLnNlbGVjdG9yJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXdzLnNlbGVjdG9yO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdSdWxlI19zZWxlY3RvciBpcyBkZXByZWNhdGVkLiBVc2UgUnVsZSNyYXdzLnNlbGVjdG9yJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3Muc2VsZWN0b3IgPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIFJ1bGUjXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gc2VsZWN0b3IgLSB0aGUgcnVsZeKAmXMgZnVsbCBzZWxlY3RvciByZXByZXNlbnRlZFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgYSBzdHJpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EsIGIgeyB9Jyk7XG4gICAgICAgICAqIGNvbnN0IHJ1bGUgPSByb290LmZpcnN0O1xuICAgICAgICAgKiBydWxlLnNlbGVjdG9yIC8vPT4gJ2EsIGInXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgUnVsZSNcbiAgICAgICAgICogQG1lbWJlciB7b2JqZWN0fSByYXdzIC0gSW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgYnl0ZS10by1ieXRlIGVxdWFsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgc3RyaW5nIGFzIGl0IHdhcyBpbiB0aGUgb3JpZ2luIGlucHV0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBFdmVyeSBwYXJzZXIgc2F2ZXMgaXRzIG93biBwcm9wZXJ0aWVzLFxuICAgICAgICAgKiBidXQgdGhlIGRlZmF1bHQgQ1NTIHBhcnNlciB1c2VzOlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIGBiZWZvcmVgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZWZvcmUgdGhlIG5vZGUuIEl0IGFsc28gc3RvcmVzIGAqYFxuICAgICAgICAgKiAgIGFuZCBgX2Agc3ltYm9scyBiZWZvcmUgdGhlIGRlY2xhcmF0aW9uIChJRSBoYWNrKS5cbiAgICAgICAgICogKiBgYWZ0ZXJgOiB0aGUgc3BhY2Ugc3ltYm9scyBhZnRlciB0aGUgbGFzdCBjaGlsZCBvZiB0aGUgbm9kZVxuICAgICAgICAgKiAgIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGUuXG4gICAgICAgICAqICogYGJldHdlZW5gOiB0aGUgc3ltYm9scyBiZXR3ZWVuIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICAgICAgICogICBmb3IgZGVjbGFyYXRpb25zLCBzZWxlY3RvciBhbmQgYHtgIGZvciBydWxlcywgb3IgbGFzdCBwYXJhbWV0ZXJcbiAgICAgICAgICogICBhbmQgYHtgIGZvciBhdC1ydWxlcy5cbiAgICAgICAgICogKiBgc2VtaWNvbG9uYDogY29udGFpbnMgdHJ1ZSBpZiB0aGUgbGFzdCBjaGlsZCBoYXNcbiAgICAgICAgICogICBhbiAob3B0aW9uYWwpIHNlbWljb2xvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogUG9zdENTUyBjbGVhbnMgc2VsZWN0b3JzIGZyb20gY29tbWVudHMgYW5kIGV4dHJhIHNwYWNlcyxcbiAgICAgICAgICogYnV0IGl0IHN0b3JlcyBvcmlnaW4gY29udGVudCBpbiByYXdzIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEFzIHN1Y2gsIGlmIHlvdSBkb27igJl0IGNoYW5nZSBhIGRlY2xhcmF0aW9u4oCZcyB2YWx1ZSxcbiAgICAgICAgICogUG9zdENTUyB3aWxsIHVzZSB0aGUgcmF3IHZhbHVlIHdpdGggY29tbWVudHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhIHtcXG4gIGNvbG9yOmJsYWNrXFxufScpXG4gICAgICAgICAqIHJvb3QuZmlyc3QuZmlyc3QucmF3cyAvLz0+IHsgYmVmb3JlOiAnJywgYmV0d2VlbjogJyAnLCBhZnRlcjogJ1xcbicgfVxuICAgICAgICAgKi9cblxuICAgIH1dKTtcblxuICAgIHJldHVybiBSdWxlO1xufShfY29udGFpbmVyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUnVsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9rZW5pemU7XG52YXIgU0lOR0xFX1FVT1RFID0gJ1xcJycuY2hhckNvZGVBdCgwKTtcbnZhciBET1VCTEVfUVVPVEUgPSAnXCInLmNoYXJDb2RlQXQoMCk7XG52YXIgQkFDS1NMQVNIID0gJ1xcXFwnLmNoYXJDb2RlQXQoMCk7XG52YXIgU0xBU0ggPSAnLycuY2hhckNvZGVBdCgwKTtcbnZhciBORVdMSU5FID0gJ1xcbicuY2hhckNvZGVBdCgwKTtcbnZhciBTUEFDRSA9ICcgJy5jaGFyQ29kZUF0KDApO1xudmFyIEZFRUQgPSAnXFxmJy5jaGFyQ29kZUF0KDApO1xudmFyIFRBQiA9ICdcXHQnLmNoYXJDb2RlQXQoMCk7XG52YXIgQ1IgPSAnXFxyJy5jaGFyQ29kZUF0KDApO1xudmFyIE9QRU5fU1FVQVJFID0gJ1snLmNoYXJDb2RlQXQoMCk7XG52YXIgQ0xPU0VfU1FVQVJFID0gJ10nLmNoYXJDb2RlQXQoMCk7XG52YXIgT1BFTl9QQVJFTlRIRVNFUyA9ICcoJy5jaGFyQ29kZUF0KDApO1xudmFyIENMT1NFX1BBUkVOVEhFU0VTID0gJyknLmNoYXJDb2RlQXQoMCk7XG52YXIgT1BFTl9DVVJMWSA9ICd7Jy5jaGFyQ29kZUF0KDApO1xudmFyIENMT1NFX0NVUkxZID0gJ30nLmNoYXJDb2RlQXQoMCk7XG52YXIgU0VNSUNPTE9OID0gJzsnLmNoYXJDb2RlQXQoMCk7XG52YXIgQVNURVJJU0sgPSAnKicuY2hhckNvZGVBdCgwKTtcbnZhciBDT0xPTiA9ICc6Jy5jaGFyQ29kZUF0KDApO1xudmFyIEFUID0gJ0AnLmNoYXJDb2RlQXQoMCk7XG5cbnZhciBSRV9BVF9FTkQgPSAvWyBcXG5cXHRcXHJcXGZcXHtcXChcXCknXCJcXFxcOy9cXFtcXF0jXS9nO1xudmFyIFJFX1dPUkRfRU5EID0gL1sgXFxuXFx0XFxyXFxmXFwoXFwpXFx7XFx9OjtAISdcIlxcXFxcXF1cXFsjXXxcXC8oPz1cXCopL2c7XG52YXIgUkVfQkFEX0JSQUNLRVQgPSAvLltcXFxcXFwvXFwoXCInXFxuXS87XG5cbmZ1bmN0aW9uIHRva2VuaXplKGlucHV0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBjc3MgPSBpbnB1dC5jc3MudmFsdWVPZigpO1xuXG4gICAgdmFyIGlnbm9yZSA9IG9wdGlvbnMuaWdub3JlRXJyb3JzO1xuXG4gICAgdmFyIGNvZGUgPSB2b2lkIDAsXG4gICAgICAgIG5leHQgPSB2b2lkIDAsXG4gICAgICAgIHF1b3RlID0gdm9pZCAwLFxuICAgICAgICBsaW5lcyA9IHZvaWQgMCxcbiAgICAgICAgbGFzdCA9IHZvaWQgMCxcbiAgICAgICAgY29udGVudCA9IHZvaWQgMCxcbiAgICAgICAgZXNjYXBlID0gdm9pZCAwLFxuICAgICAgICBuZXh0TGluZSA9IHZvaWQgMCxcbiAgICAgICAgbmV4dE9mZnNldCA9IHZvaWQgMCxcbiAgICAgICAgZXNjYXBlZCA9IHZvaWQgMCxcbiAgICAgICAgZXNjYXBlUG9zID0gdm9pZCAwLFxuICAgICAgICBwcmV2ID0gdm9pZCAwLFxuICAgICAgICBuID0gdm9pZCAwO1xuXG4gICAgdmFyIGxlbmd0aCA9IGNzcy5sZW5ndGg7XG4gICAgdmFyIG9mZnNldCA9IC0xO1xuICAgIHZhciBsaW5lID0gMTtcbiAgICB2YXIgcG9zID0gMDtcblxuICAgIGZ1bmN0aW9uIHVuY2xvc2VkKHdoYXQpIHtcbiAgICAgICAgdGhyb3cgaW5wdXQuZXJyb3IoJ1VuY2xvc2VkICcgKyB3aGF0LCBsaW5lLCBwb3MgLSBvZmZzZXQpO1xuICAgIH1cblxuICAgIHdoaWxlIChwb3MgPCBsZW5ndGgpIHtcbiAgICAgICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IE5FV0xJTkUgfHwgY29kZSA9PT0gRkVFRCB8fCBjb2RlID09PSBDUiAmJiBjc3MuY2hhckNvZGVBdChwb3MgKyAxKSAhPT0gTkVXTElORSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcG9zO1xuICAgICAgICAgICAgbGluZSArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIE5FV0xJTkU6XG4gICAgICAgICAgICBjYXNlIFNQQUNFOlxuICAgICAgICAgICAgY2FzZSBUQUI6XG4gICAgICAgICAgICBjYXNlIENSOlxuICAgICAgICAgICAgY2FzZSBGRUVEOlxuICAgICAgICAgICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPSBjc3MuY2hhckNvZGVBdChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IE5FV0xJTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChjb2RlID09PSBTUEFDRSB8fCBjb2RlID09PSBORVdMSU5FIHx8IGNvZGUgPT09IFRBQiB8fCBjb2RlID09PSBDUiB8fCBjb2RlID09PSBGRUVEKTtcblxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnc3BhY2UnLCBjc3Muc2xpY2UocG9zLCBuZXh0KV0pO1xuICAgICAgICAgICAgICAgIHBvcyA9IG5leHQgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE9QRU5fU1FVQVJFOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnWycsICdbJywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgQ0xPU0VfU1FVQVJFOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnXScsICddJywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgT1BFTl9DVVJMWTpcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChbJ3snLCAneycsIGxpbmUsIHBvcyAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIENMT1NFX0NVUkxZOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnfScsICd9JywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgQ09MT046XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWyc6JywgJzonLCBsaW5lLCBwb3MgLSBvZmZzZXRdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTRU1JQ09MT046XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWyc7JywgJzsnLCBsaW5lLCBwb3MgLSBvZmZzZXRdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBPUEVOX1BBUkVOVEhFU0VTOlxuICAgICAgICAgICAgICAgIHByZXYgPSB0b2tlbnMubGVuZ3RoID8gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVsxXSA6ICcnO1xuICAgICAgICAgICAgICAgIG4gPSBjc3MuY2hhckNvZGVBdChwb3MgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldiA9PT0gJ3VybCcgJiYgbiAhPT0gU0lOR0xFX1FVT1RFICYmIG4gIT09IERPVUJMRV9RVU9URSAmJiBuICE9PSBTUEFDRSAmJiBuICE9PSBORVdMSU5FICYmIG4gIT09IFRBQiAmJiBuICE9PSBGRUVEICYmIG4gIT09IENSKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZignKScsIG5leHQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jbG9zZWQoJ2JyYWNrZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVQb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KGVzY2FwZVBvcyAtIDEpID09PSBCQUNLU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVQb3MgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKGVzY2FwZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnYnJhY2tldHMnLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIGxpbmUsIHBvcyAtIG9mZnNldCwgbGluZSwgbmV4dCAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZignKScsIHBvcyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSB8fCBSRV9CQURfQlJBQ0tFVC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChbJygnLCAnKCcsIGxpbmUsIHBvcyAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydicmFja2V0cycsIGNvbnRlbnQsIGxpbmUsIHBvcyAtIG9mZnNldCwgbGluZSwgbmV4dCAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIENMT1NFX1BBUkVOVEhFU0VTOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnKScsICcpJywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU0lOR0xFX1FVT1RFOlxuICAgICAgICAgICAgY2FzZSBET1VCTEVfUVVPVEU6XG4gICAgICAgICAgICAgICAgcXVvdGUgPSBjb2RlID09PSBTSU5HTEVfUVVPVEUgPyAnXFwnJyA6ICdcIic7XG4gICAgICAgICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNzcy5pbmRleE9mKHF1b3RlLCBuZXh0ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNsb3NlZCgncXVvdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVQb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3NzLmNoYXJDb2RlQXQoZXNjYXBlUG9zIC0gMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlUG9zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChlc2NhcGVkKTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSk7XG4gICAgICAgICAgICAgICAgbGluZXMgPSBjb250ZW50LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gbGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChsYXN0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmUgKyBsYXN0O1xuICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0ID0gbmV4dCAtIGxpbmVzW2xhc3RdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIG5leHRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydzdHJpbmcnLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIGxpbmUsIHBvcyAtIG9mZnNldCwgbmV4dExpbmUsIG5leHQgLSBuZXh0T2Zmc2V0XSk7XG5cbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBuZXh0T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGxpbmUgPSBuZXh0TGluZTtcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEFUOlxuICAgICAgICAgICAgICAgIFJFX0FUX0VORC5sYXN0SW5kZXggPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgIFJFX0FUX0VORC50ZXN0KGNzcyk7XG4gICAgICAgICAgICAgICAgaWYgKFJFX0FUX0VORC5sYXN0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNzcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBSRV9BVF9FTkQubGFzdEluZGV4IC0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydhdC13b3JkJywgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBsaW5lLCBwb3MgLSBvZmZzZXQsIGxpbmUsIG5leHQgLSBvZmZzZXRdKTtcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEJBQ0tTTEFTSDpcbiAgICAgICAgICAgICAgICBuZXh0ID0gcG9zO1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKSA9PT0gQkFDS1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlID0gIWVzY2FwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZXNjYXBlICYmIGNvZGUgIT09IFNMQVNIICYmIGNvZGUgIT09IFNQQUNFICYmIGNvZGUgIT09IE5FV0xJTkUgJiYgY29kZSAhPT0gVEFCICYmIGNvZGUgIT09IENSICYmIGNvZGUgIT09IEZFRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChbJ3dvcmQnLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIGxpbmUsIHBvcyAtIG9mZnNldCwgbGluZSwgbmV4dCAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IFNMQVNIICYmIGNzcy5jaGFyQ29kZUF0KHBvcyArIDEpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YoJyovJywgcG9zICsgMikgKyAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBjc3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNsb3NlZCgnY29tbWVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGNzcy5zbGljZShwb3MsIG5leHQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMgPSBjb250ZW50LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGxpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3QgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmUgKyBsYXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldCA9IG5leHQgLSBsaW5lc1tsYXN0XS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydjb21tZW50JywgY29udGVudCwgbGluZSwgcG9zIC0gb2Zmc2V0LCBuZXh0TGluZSwgbmV4dCAtIG5leHRPZmZzZXRdKTtcblxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBuZXh0T2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbmV4dExpbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUkVfV09SRF9FTkQubGFzdEluZGV4ID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgUkVfV09SRF9FTkQudGVzdChjc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoUkVfV09SRF9FTkQubGFzdEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gUkVfV09SRF9FTkQubGFzdEluZGV4IC0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnd29yZCcsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgbGluZSwgcG9zIC0gb2Zmc2V0LCBsaW5lLCBuZXh0IC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwb3MrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy90b2tlbml6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsInZhciBFTlRJVElFUyA9IFtbJ0FhY3V0ZScsIFsxOTNdXSwgWydhYWN1dGUnLCBbMjI1XV0sIFsnQWJyZXZlJywgWzI1OF1dLCBbJ2FicmV2ZScsIFsyNTldXSwgWydhYycsIFs4NzY2XV0sIFsnYWNkJywgWzg3NjddXSwgWydhY0UnLCBbODc2NiwgODE5XV0sIFsnQWNpcmMnLCBbMTk0XV0sIFsnYWNpcmMnLCBbMjI2XV0sIFsnYWN1dGUnLCBbMTgwXV0sIFsnQWN5JywgWzEwNDBdXSwgWydhY3knLCBbMTA3Ml1dLCBbJ0FFbGlnJywgWzE5OF1dLCBbJ2FlbGlnJywgWzIzMF1dLCBbJ2FmJywgWzgyODldXSwgWydBZnInLCBbMTIwMDY4XV0sIFsnYWZyJywgWzEyMDA5NF1dLCBbJ0FncmF2ZScsIFsxOTJdXSwgWydhZ3JhdmUnLCBbMjI0XV0sIFsnYWxlZnN5bScsIFs4NTAxXV0sIFsnYWxlcGgnLCBbODUwMV1dLCBbJ0FscGhhJywgWzkxM11dLCBbJ2FscGhhJywgWzk0NV1dLCBbJ0FtYWNyJywgWzI1Nl1dLCBbJ2FtYWNyJywgWzI1N11dLCBbJ2FtYWxnJywgWzEwODE1XV0sIFsnYW1wJywgWzM4XV0sIFsnQU1QJywgWzM4XV0sIFsnYW5kYW5kJywgWzEwODM3XV0sIFsnQW5kJywgWzEwODM1XV0sIFsnYW5kJywgWzg3NDNdXSwgWydhbmRkJywgWzEwODQ0XV0sIFsnYW5kc2xvcGUnLCBbMTA4NDBdXSwgWydhbmR2JywgWzEwODQyXV0sIFsnYW5nJywgWzg3MzZdXSwgWydhbmdlJywgWzEwNjYwXV0sIFsnYW5nbGUnLCBbODczNl1dLCBbJ2FuZ21zZGFhJywgWzEwNjY0XV0sIFsnYW5nbXNkYWInLCBbMTA2NjVdXSwgWydhbmdtc2RhYycsIFsxMDY2Nl1dLCBbJ2FuZ21zZGFkJywgWzEwNjY3XV0sIFsnYW5nbXNkYWUnLCBbMTA2NjhdXSwgWydhbmdtc2RhZicsIFsxMDY2OV1dLCBbJ2FuZ21zZGFnJywgWzEwNjcwXV0sIFsnYW5nbXNkYWgnLCBbMTA2NzFdXSwgWydhbmdtc2QnLCBbODczN11dLCBbJ2FuZ3J0JywgWzg3MzVdXSwgWydhbmdydHZiJywgWzg4OTRdXSwgWydhbmdydHZiZCcsIFsxMDY1M11dLCBbJ2FuZ3NwaCcsIFs4NzM4XV0sIFsnYW5nc3QnLCBbMTk3XV0sIFsnYW5nemFycicsIFs5MDg0XV0sIFsnQW9nb24nLCBbMjYwXV0sIFsnYW9nb24nLCBbMjYxXV0sIFsnQW9wZicsIFsxMjAxMjBdXSwgWydhb3BmJywgWzEyMDE0Nl1dLCBbJ2FwYWNpcicsIFsxMDg2M11dLCBbJ2FwJywgWzg3NzZdXSwgWydhcEUnLCBbMTA4NjRdXSwgWydhcGUnLCBbODc3OF1dLCBbJ2FwaWQnLCBbODc3OV1dLCBbJ2Fwb3MnLCBbMzldXSwgWydBcHBseUZ1bmN0aW9uJywgWzgyODldXSwgWydhcHByb3gnLCBbODc3Nl1dLCBbJ2FwcHJveGVxJywgWzg3NzhdXSwgWydBcmluZycsIFsxOTddXSwgWydhcmluZycsIFsyMjldXSwgWydBc2NyJywgWzExOTk2NF1dLCBbJ2FzY3InLCBbMTE5OTkwXV0sIFsnQXNzaWduJywgWzg3ODhdXSwgWydhc3QnLCBbNDJdXSwgWydhc3ltcCcsIFs4Nzc2XV0sIFsnYXN5bXBlcScsIFs4NzgxXV0sIFsnQXRpbGRlJywgWzE5NV1dLCBbJ2F0aWxkZScsIFsyMjddXSwgWydBdW1sJywgWzE5Nl1dLCBbJ2F1bWwnLCBbMjI4XV0sIFsnYXdjb25pbnQnLCBbODc1NV1dLCBbJ2F3aW50JywgWzEwNzY5XV0sIFsnYmFja2NvbmcnLCBbODc4MF1dLCBbJ2JhY2tlcHNpbG9uJywgWzEwMTRdXSwgWydiYWNrcHJpbWUnLCBbODI0NV1dLCBbJ2JhY2tzaW0nLCBbODc2NV1dLCBbJ2JhY2tzaW1lcScsIFs4OTA5XV0sIFsnQmFja3NsYXNoJywgWzg3MjZdXSwgWydCYXJ2JywgWzEwOTgzXV0sIFsnYmFydmVlJywgWzg4OTNdXSwgWydiYXJ3ZWQnLCBbODk2NV1dLCBbJ0JhcndlZCcsIFs4OTY2XV0sIFsnYmFyd2VkZ2UnLCBbODk2NV1dLCBbJ2JicmsnLCBbOTE0MV1dLCBbJ2Jicmt0YnJrJywgWzkxNDJdXSwgWydiY29uZycsIFs4NzgwXV0sIFsnQmN5JywgWzEwNDFdXSwgWydiY3knLCBbMTA3M11dLCBbJ2JkcXVvJywgWzgyMjJdXSwgWydiZWNhdXMnLCBbODc1N11dLCBbJ2JlY2F1c2UnLCBbODc1N11dLCBbJ0JlY2F1c2UnLCBbODc1N11dLCBbJ2JlbXB0eXYnLCBbMTA2NzJdXSwgWydiZXBzaScsIFsxMDE0XV0sIFsnYmVybm91JywgWzg0OTJdXSwgWydCZXJub3VsbGlzJywgWzg0OTJdXSwgWydCZXRhJywgWzkxNF1dLCBbJ2JldGEnLCBbOTQ2XV0sIFsnYmV0aCcsIFs4NTAyXV0sIFsnYmV0d2VlbicsIFs4ODEyXV0sIFsnQmZyJywgWzEyMDA2OV1dLCBbJ2JmcicsIFsxMjAwOTVdXSwgWydiaWdjYXAnLCBbODg5OF1dLCBbJ2JpZ2NpcmMnLCBbOTcxMV1dLCBbJ2JpZ2N1cCcsIFs4ODk5XV0sIFsnYmlnb2RvdCcsIFsxMDc1Ml1dLCBbJ2JpZ29wbHVzJywgWzEwNzUzXV0sIFsnYmlnb3RpbWVzJywgWzEwNzU0XV0sIFsnYmlnc3FjdXAnLCBbMTA3NThdXSwgWydiaWdzdGFyJywgWzk3MzNdXSwgWydiaWd0cmlhbmdsZWRvd24nLCBbOTY2MV1dLCBbJ2JpZ3RyaWFuZ2xldXAnLCBbOTY1MV1dLCBbJ2JpZ3VwbHVzJywgWzEwNzU2XV0sIFsnYmlndmVlJywgWzg4OTddXSwgWydiaWd3ZWRnZScsIFs4ODk2XV0sIFsnYmthcm93JywgWzEwNTA5XV0sIFsnYmxhY2tsb3plbmdlJywgWzEwNzMxXV0sIFsnYmxhY2tzcXVhcmUnLCBbOTY0Ml1dLCBbJ2JsYWNrdHJpYW5nbGUnLCBbOTY1Ml1dLCBbJ2JsYWNrdHJpYW5nbGVkb3duJywgWzk2NjJdXSwgWydibGFja3RyaWFuZ2xlbGVmdCcsIFs5NjY2XV0sIFsnYmxhY2t0cmlhbmdsZXJpZ2h0JywgWzk2NTZdXSwgWydibGFuaycsIFs5MjUxXV0sIFsnYmxrMTInLCBbOTYxOF1dLCBbJ2JsazE0JywgWzk2MTddXSwgWydibGszNCcsIFs5NjE5XV0sIFsnYmxvY2snLCBbOTYwOF1dLCBbJ2JuZScsIFs2MSwgODQyMV1dLCBbJ2JuZXF1aXYnLCBbODgwMSwgODQyMV1dLCBbJ2JOb3QnLCBbMTA5ODldXSwgWydibm90JywgWzg5NzZdXSwgWydCb3BmJywgWzEyMDEyMV1dLCBbJ2JvcGYnLCBbMTIwMTQ3XV0sIFsnYm90JywgWzg4NjldXSwgWydib3R0b20nLCBbODg2OV1dLCBbJ2Jvd3RpZScsIFs4OTA0XV0sIFsnYm94Ym94JywgWzEwNjk3XV0sIFsnYm94ZGwnLCBbOTQ4OF1dLCBbJ2JveGRMJywgWzk1NTddXSwgWydib3hEbCcsIFs5NTU4XV0sIFsnYm94REwnLCBbOTU1OV1dLCBbJ2JveGRyJywgWzk0ODRdXSwgWydib3hkUicsIFs5NTU0XV0sIFsnYm94RHInLCBbOTU1NV1dLCBbJ2JveERSJywgWzk1NTZdXSwgWydib3hoJywgWzk0NzJdXSwgWydib3hIJywgWzk1NTJdXSwgWydib3hoZCcsIFs5NTE2XV0sIFsnYm94SGQnLCBbOTU3Ml1dLCBbJ2JveGhEJywgWzk1NzNdXSwgWydib3hIRCcsIFs5NTc0XV0sIFsnYm94aHUnLCBbOTUyNF1dLCBbJ2JveEh1JywgWzk1NzVdXSwgWydib3hoVScsIFs5NTc2XV0sIFsnYm94SFUnLCBbOTU3N11dLCBbJ2JveG1pbnVzJywgWzg4NjNdXSwgWydib3hwbHVzJywgWzg4NjJdXSwgWydib3h0aW1lcycsIFs4ODY0XV0sIFsnYm94dWwnLCBbOTQ5Nl1dLCBbJ2JveHVMJywgWzk1NjNdXSwgWydib3hVbCcsIFs5NTY0XV0sIFsnYm94VUwnLCBbOTU2NV1dLCBbJ2JveHVyJywgWzk0OTJdXSwgWydib3h1UicsIFs5NTYwXV0sIFsnYm94VXInLCBbOTU2MV1dLCBbJ2JveFVSJywgWzk1NjJdXSwgWydib3h2JywgWzk0NzRdXSwgWydib3hWJywgWzk1NTNdXSwgWydib3h2aCcsIFs5NTMyXV0sIFsnYm94dkgnLCBbOTU3OF1dLCBbJ2JveFZoJywgWzk1NzldXSwgWydib3hWSCcsIFs5NTgwXV0sIFsnYm94dmwnLCBbOTUwOF1dLCBbJ2JveHZMJywgWzk1NjldXSwgWydib3hWbCcsIFs5NTcwXV0sIFsnYm94VkwnLCBbOTU3MV1dLCBbJ2JveHZyJywgWzk1MDBdXSwgWydib3h2UicsIFs5NTY2XV0sIFsnYm94VnInLCBbOTU2N11dLCBbJ2JveFZSJywgWzk1NjhdXSwgWydicHJpbWUnLCBbODI0NV1dLCBbJ2JyZXZlJywgWzcyOF1dLCBbJ0JyZXZlJywgWzcyOF1dLCBbJ2JydmJhcicsIFsxNjZdXSwgWydic2NyJywgWzExOTk5MV1dLCBbJ0JzY3InLCBbODQ5Ml1dLCBbJ2JzZW1pJywgWzgyNzFdXSwgWydic2ltJywgWzg3NjVdXSwgWydic2ltZScsIFs4OTA5XV0sIFsnYnNvbGInLCBbMTA2OTNdXSwgWydic29sJywgWzkyXV0sIFsnYnNvbGhzdWInLCBbMTAxODRdXSwgWydidWxsJywgWzgyMjZdXSwgWydidWxsZXQnLCBbODIyNl1dLCBbJ2J1bXAnLCBbODc4Ml1dLCBbJ2J1bXBFJywgWzEwOTI2XV0sIFsnYnVtcGUnLCBbODc4M11dLCBbJ0J1bXBlcScsIFs4NzgyXV0sIFsnYnVtcGVxJywgWzg3ODNdXSwgWydDYWN1dGUnLCBbMjYyXV0sIFsnY2FjdXRlJywgWzI2M11dLCBbJ2NhcGFuZCcsIFsxMDgyMF1dLCBbJ2NhcGJyY3VwJywgWzEwODI1XV0sIFsnY2FwY2FwJywgWzEwODI3XV0sIFsnY2FwJywgWzg3NDVdXSwgWydDYXAnLCBbODkxNF1dLCBbJ2NhcGN1cCcsIFsxMDgyM11dLCBbJ2NhcGRvdCcsIFsxMDgxNl1dLCBbJ0NhcGl0YWxEaWZmZXJlbnRpYWxEJywgWzg1MTddXSwgWydjYXBzJywgWzg3NDUsIDY1MDI0XV0sIFsnY2FyZXQnLCBbODI1N11dLCBbJ2Nhcm9uJywgWzcxMV1dLCBbJ0NheWxleXMnLCBbODQ5M11dLCBbJ2NjYXBzJywgWzEwODI5XV0sIFsnQ2Nhcm9uJywgWzI2OF1dLCBbJ2NjYXJvbicsIFsyNjldXSwgWydDY2VkaWwnLCBbMTk5XV0sIFsnY2NlZGlsJywgWzIzMV1dLCBbJ0NjaXJjJywgWzI2NF1dLCBbJ2NjaXJjJywgWzI2NV1dLCBbJ0Njb25pbnQnLCBbODc1Ml1dLCBbJ2NjdXBzJywgWzEwODI4XV0sIFsnY2N1cHNzbScsIFsxMDgzMl1dLCBbJ0Nkb3QnLCBbMjY2XV0sIFsnY2RvdCcsIFsyNjddXSwgWydjZWRpbCcsIFsxODRdXSwgWydDZWRpbGxhJywgWzE4NF1dLCBbJ2NlbXB0eXYnLCBbMTA2NzRdXSwgWydjZW50JywgWzE2Ml1dLCBbJ2NlbnRlcmRvdCcsIFsxODNdXSwgWydDZW50ZXJEb3QnLCBbMTgzXV0sIFsnY2ZyJywgWzEyMDA5Nl1dLCBbJ0NmcicsIFs4NDkzXV0sIFsnQ0hjeScsIFsxMDYzXV0sIFsnY2hjeScsIFsxMDk1XV0sIFsnY2hlY2snLCBbMTAwMDNdXSwgWydjaGVja21hcmsnLCBbMTAwMDNdXSwgWydDaGknLCBbOTM1XV0sIFsnY2hpJywgWzk2N11dLCBbJ2NpcmMnLCBbNzEwXV0sIFsnY2lyY2VxJywgWzg3OTFdXSwgWydjaXJjbGVhcnJvd2xlZnQnLCBbODYzNF1dLCBbJ2NpcmNsZWFycm93cmlnaHQnLCBbODYzNV1dLCBbJ2NpcmNsZWRhc3QnLCBbODg1OV1dLCBbJ2NpcmNsZWRjaXJjJywgWzg4NThdXSwgWydjaXJjbGVkZGFzaCcsIFs4ODYxXV0sIFsnQ2lyY2xlRG90JywgWzg4NTddXSwgWydjaXJjbGVkUicsIFsxNzRdXSwgWydjaXJjbGVkUycsIFs5NDE2XV0sIFsnQ2lyY2xlTWludXMnLCBbODg1NF1dLCBbJ0NpcmNsZVBsdXMnLCBbODg1M11dLCBbJ0NpcmNsZVRpbWVzJywgWzg4NTVdXSwgWydjaXInLCBbOTY3NV1dLCBbJ2NpckUnLCBbMTA2OTFdXSwgWydjaXJlJywgWzg3OTFdXSwgWydjaXJmbmludCcsIFsxMDc2OF1dLCBbJ2Npcm1pZCcsIFsxMDk5MV1dLCBbJ2NpcnNjaXInLCBbMTA2OTBdXSwgWydDbG9ja3dpc2VDb250b3VySW50ZWdyYWwnLCBbODc1NF1dLCBbJ0Nsb3NlQ3VybHlEb3VibGVRdW90ZScsIFs4MjIxXV0sIFsnQ2xvc2VDdXJseVF1b3RlJywgWzgyMTddXSwgWydjbHVicycsIFs5ODI3XV0sIFsnY2x1YnN1aXQnLCBbOTgyN11dLCBbJ2NvbG9uJywgWzU4XV0sIFsnQ29sb24nLCBbODc1OV1dLCBbJ0NvbG9uZScsIFsxMDg2OF1dLCBbJ2NvbG9uZScsIFs4Nzg4XV0sIFsnY29sb25lcScsIFs4Nzg4XV0sIFsnY29tbWEnLCBbNDRdXSwgWydjb21tYXQnLCBbNjRdXSwgWydjb21wJywgWzg3MDVdXSwgWydjb21wZm4nLCBbODcyOF1dLCBbJ2NvbXBsZW1lbnQnLCBbODcwNV1dLCBbJ2NvbXBsZXhlcycsIFs4NDUwXV0sIFsnY29uZycsIFs4NzczXV0sIFsnY29uZ2RvdCcsIFsxMDg2MV1dLCBbJ0NvbmdydWVudCcsIFs4ODAxXV0sIFsnY29uaW50JywgWzg3NTBdXSwgWydDb25pbnQnLCBbODc1MV1dLCBbJ0NvbnRvdXJJbnRlZ3JhbCcsIFs4NzUwXV0sIFsnY29wZicsIFsxMjAxNDhdXSwgWydDb3BmJywgWzg0NTBdXSwgWydjb3Byb2QnLCBbODcyMF1dLCBbJ0NvcHJvZHVjdCcsIFs4NzIwXV0sIFsnY29weScsIFsxNjldXSwgWydDT1BZJywgWzE2OV1dLCBbJ2NvcHlzcicsIFs4NDcxXV0sIFsnQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU1XV0sIFsnY3JhcnInLCBbODYyOV1dLCBbJ2Nyb3NzJywgWzEwMDA3XV0sIFsnQ3Jvc3MnLCBbMTA3OTldXSwgWydDc2NyJywgWzExOTk2Nl1dLCBbJ2NzY3InLCBbMTE5OTkyXV0sIFsnY3N1YicsIFsxMDk1OV1dLCBbJ2NzdWJlJywgWzEwOTYxXV0sIFsnY3N1cCcsIFsxMDk2MF1dLCBbJ2NzdXBlJywgWzEwOTYyXV0sIFsnY3Rkb3QnLCBbODk0M11dLCBbJ2N1ZGFycmwnLCBbMTA1NTJdXSwgWydjdWRhcnJyJywgWzEwNTQ5XV0sIFsnY3VlcHInLCBbODkyNl1dLCBbJ2N1ZXNjJywgWzg5MjddXSwgWydjdWxhcnInLCBbODYzMF1dLCBbJ2N1bGFycnAnLCBbMTA1NTddXSwgWydjdXBicmNhcCcsIFsxMDgyNF1dLCBbJ2N1cGNhcCcsIFsxMDgyMl1dLCBbJ0N1cENhcCcsIFs4NzgxXV0sIFsnY3VwJywgWzg3NDZdXSwgWydDdXAnLCBbODkxNV1dLCBbJ2N1cGN1cCcsIFsxMDgyNl1dLCBbJ2N1cGRvdCcsIFs4ODQ1XV0sIFsnY3Vwb3InLCBbMTA4MjFdXSwgWydjdXBzJywgWzg3NDYsIDY1MDI0XV0sIFsnY3VyYXJyJywgWzg2MzFdXSwgWydjdXJhcnJtJywgWzEwNTU2XV0sIFsnY3VybHllcXByZWMnLCBbODkyNl1dLCBbJ2N1cmx5ZXFzdWNjJywgWzg5MjddXSwgWydjdXJseXZlZScsIFs4OTEwXV0sIFsnY3VybHl3ZWRnZScsIFs4OTExXV0sIFsnY3VycmVuJywgWzE2NF1dLCBbJ2N1cnZlYXJyb3dsZWZ0JywgWzg2MzBdXSwgWydjdXJ2ZWFycm93cmlnaHQnLCBbODYzMV1dLCBbJ2N1dmVlJywgWzg5MTBdXSwgWydjdXdlZCcsIFs4OTExXV0sIFsnY3djb25pbnQnLCBbODc1NF1dLCBbJ2N3aW50JywgWzg3NTNdXSwgWydjeWxjdHknLCBbOTAwNV1dLCBbJ2RhZ2dlcicsIFs4MjI0XV0sIFsnRGFnZ2VyJywgWzgyMjVdXSwgWydkYWxldGgnLCBbODUwNF1dLCBbJ2RhcnInLCBbODU5NV1dLCBbJ0RhcnInLCBbODYwOV1dLCBbJ2RBcnInLCBbODY1OV1dLCBbJ2Rhc2gnLCBbODIwOF1dLCBbJ0Rhc2h2JywgWzEwOTgwXV0sIFsnZGFzaHYnLCBbODg2N11dLCBbJ2Ria2Fyb3cnLCBbMTA1MTFdXSwgWydkYmxhYycsIFs3MzNdXSwgWydEY2Fyb24nLCBbMjcwXV0sIFsnZGNhcm9uJywgWzI3MV1dLCBbJ0RjeScsIFsxMDQ0XV0sIFsnZGN5JywgWzEwNzZdXSwgWydkZGFnZ2VyJywgWzgyMjVdXSwgWydkZGFycicsIFs4NjUwXV0sIFsnREQnLCBbODUxN11dLCBbJ2RkJywgWzg1MThdXSwgWydERG90cmFoZCcsIFsxMDUxM11dLCBbJ2Rkb3RzZXEnLCBbMTA4NzFdXSwgWydkZWcnLCBbMTc2XV0sIFsnRGVsJywgWzg3MTFdXSwgWydEZWx0YScsIFs5MTZdXSwgWydkZWx0YScsIFs5NDhdXSwgWydkZW1wdHl2JywgWzEwNjczXV0sIFsnZGZpc2h0JywgWzEwNjIzXV0sIFsnRGZyJywgWzEyMDA3MV1dLCBbJ2RmcicsIFsxMjAwOTddXSwgWydkSGFyJywgWzEwNTk3XV0sIFsnZGhhcmwnLCBbODY0M11dLCBbJ2RoYXJyJywgWzg2NDJdXSwgWydEaWFjcml0aWNhbEFjdXRlJywgWzE4MF1dLCBbJ0RpYWNyaXRpY2FsRG90JywgWzcyOV1dLCBbJ0RpYWNyaXRpY2FsRG91YmxlQWN1dGUnLCBbNzMzXV0sIFsnRGlhY3JpdGljYWxHcmF2ZScsIFs5Nl1dLCBbJ0RpYWNyaXRpY2FsVGlsZGUnLCBbNzMyXV0sIFsnZGlhbScsIFs4OTAwXV0sIFsnZGlhbW9uZCcsIFs4OTAwXV0sIFsnRGlhbW9uZCcsIFs4OTAwXV0sIFsnZGlhbW9uZHN1aXQnLCBbOTgzMF1dLCBbJ2RpYW1zJywgWzk4MzBdXSwgWydkaWUnLCBbMTY4XV0sIFsnRGlmZmVyZW50aWFsRCcsIFs4NTE4XV0sIFsnZGlnYW1tYScsIFs5ODldXSwgWydkaXNpbicsIFs4OTQ2XV0sIFsnZGl2JywgWzI0N11dLCBbJ2RpdmlkZScsIFsyNDddXSwgWydkaXZpZGVvbnRpbWVzJywgWzg5MDNdXSwgWydkaXZvbngnLCBbODkwM11dLCBbJ0RKY3knLCBbMTAyNl1dLCBbJ2RqY3knLCBbMTEwNl1dLCBbJ2RsY29ybicsIFs4OTkwXV0sIFsnZGxjcm9wJywgWzg5NzNdXSwgWydkb2xsYXInLCBbMzZdXSwgWydEb3BmJywgWzEyMDEyM11dLCBbJ2RvcGYnLCBbMTIwMTQ5XV0sIFsnRG90JywgWzE2OF1dLCBbJ2RvdCcsIFs3MjldXSwgWydEb3REb3QnLCBbODQxMl1dLCBbJ2RvdGVxJywgWzg3ODRdXSwgWydkb3RlcWRvdCcsIFs4Nzg1XV0sIFsnRG90RXF1YWwnLCBbODc4NF1dLCBbJ2RvdG1pbnVzJywgWzg3NjBdXSwgWydkb3RwbHVzJywgWzg3MjRdXSwgWydkb3RzcXVhcmUnLCBbODg2NV1dLCBbJ2RvdWJsZWJhcndlZGdlJywgWzg5NjZdXSwgWydEb3VibGVDb250b3VySW50ZWdyYWwnLCBbODc1MV1dLCBbJ0RvdWJsZURvdCcsIFsxNjhdXSwgWydEb3VibGVEb3duQXJyb3cnLCBbODY1OV1dLCBbJ0RvdWJsZUxlZnRBcnJvdycsIFs4NjU2XV0sIFsnRG91YmxlTGVmdFJpZ2h0QXJyb3cnLCBbODY2MF1dLCBbJ0RvdWJsZUxlZnRUZWUnLCBbMTA5ODBdXSwgWydEb3VibGVMb25nTGVmdEFycm93JywgWzEwMjMyXV0sIFsnRG91YmxlTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjM0XV0sIFsnRG91YmxlTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzNdXSwgWydEb3VibGVSaWdodEFycm93JywgWzg2NThdXSwgWydEb3VibGVSaWdodFRlZScsIFs4ODcyXV0sIFsnRG91YmxlVXBBcnJvdycsIFs4NjU3XV0sIFsnRG91YmxlVXBEb3duQXJyb3cnLCBbODY2MV1dLCBbJ0RvdWJsZVZlcnRpY2FsQmFyJywgWzg3NDFdXSwgWydEb3duQXJyb3dCYXInLCBbMTA1MTVdXSwgWydkb3duYXJyb3cnLCBbODU5NV1dLCBbJ0Rvd25BcnJvdycsIFs4NTk1XV0sIFsnRG93bmFycm93JywgWzg2NTldXSwgWydEb3duQXJyb3dVcEFycm93JywgWzg2OTNdXSwgWydEb3duQnJldmUnLCBbNzg1XV0sIFsnZG93bmRvd25hcnJvd3MnLCBbODY1MF1dLCBbJ2Rvd25oYXJwb29ubGVmdCcsIFs4NjQzXV0sIFsnZG93bmhhcnBvb25yaWdodCcsIFs4NjQyXV0sIFsnRG93bkxlZnRSaWdodFZlY3RvcicsIFsxMDU3Nl1dLCBbJ0Rvd25MZWZ0VGVlVmVjdG9yJywgWzEwNTkwXV0sIFsnRG93bkxlZnRWZWN0b3JCYXInLCBbMTA1ODJdXSwgWydEb3duTGVmdFZlY3RvcicsIFs4NjM3XV0sIFsnRG93blJpZ2h0VGVlVmVjdG9yJywgWzEwNTkxXV0sIFsnRG93blJpZ2h0VmVjdG9yQmFyJywgWzEwNTgzXV0sIFsnRG93blJpZ2h0VmVjdG9yJywgWzg2NDFdXSwgWydEb3duVGVlQXJyb3cnLCBbODYxNV1dLCBbJ0Rvd25UZWUnLCBbODg2OF1dLCBbJ2RyYmthcm93JywgWzEwNTEyXV0sIFsnZHJjb3JuJywgWzg5OTFdXSwgWydkcmNyb3AnLCBbODk3Ml1dLCBbJ0RzY3InLCBbMTE5OTY3XV0sIFsnZHNjcicsIFsxMTk5OTNdXSwgWydEU2N5JywgWzEwMjldXSwgWydkc2N5JywgWzExMDldXSwgWydkc29sJywgWzEwNzQyXV0sIFsnRHN0cm9rJywgWzI3Ml1dLCBbJ2RzdHJvaycsIFsyNzNdXSwgWydkdGRvdCcsIFs4OTQ1XV0sIFsnZHRyaScsIFs5NjYzXV0sIFsnZHRyaWYnLCBbOTY2Ml1dLCBbJ2R1YXJyJywgWzg2OTNdXSwgWydkdWhhcicsIFsxMDYwN11dLCBbJ2R3YW5nbGUnLCBbMTA2NjJdXSwgWydEWmN5JywgWzEwMzldXSwgWydkemN5JywgWzExMTldXSwgWydkemlncmFycicsIFsxMDIzOV1dLCBbJ0VhY3V0ZScsIFsyMDFdXSwgWydlYWN1dGUnLCBbMjMzXV0sIFsnZWFzdGVyJywgWzEwODYyXV0sIFsnRWNhcm9uJywgWzI4Ml1dLCBbJ2VjYXJvbicsIFsyODNdXSwgWydFY2lyYycsIFsyMDJdXSwgWydlY2lyYycsIFsyMzRdXSwgWydlY2lyJywgWzg3OTBdXSwgWydlY29sb24nLCBbODc4OV1dLCBbJ0VjeScsIFsxMDY5XV0sIFsnZWN5JywgWzExMDFdXSwgWydlRERvdCcsIFsxMDg3MV1dLCBbJ0Vkb3QnLCBbMjc4XV0sIFsnZWRvdCcsIFsyNzldXSwgWydlRG90JywgWzg3ODVdXSwgWydlZScsIFs4NTE5XV0sIFsnZWZEb3QnLCBbODc4Nl1dLCBbJ0VmcicsIFsxMjAwNzJdXSwgWydlZnInLCBbMTIwMDk4XV0sIFsnZWcnLCBbMTA5MDZdXSwgWydFZ3JhdmUnLCBbMjAwXV0sIFsnZWdyYXZlJywgWzIzMl1dLCBbJ2VncycsIFsxMDkwMl1dLCBbJ2Vnc2RvdCcsIFsxMDkwNF1dLCBbJ2VsJywgWzEwOTA1XV0sIFsnRWxlbWVudCcsIFs4NzEyXV0sIFsnZWxpbnRlcnMnLCBbOTE5MV1dLCBbJ2VsbCcsIFs4NDY3XV0sIFsnZWxzJywgWzEwOTAxXV0sIFsnZWxzZG90JywgWzEwOTAzXV0sIFsnRW1hY3InLCBbMjc0XV0sIFsnZW1hY3InLCBbMjc1XV0sIFsnZW1wdHknLCBbODcwOV1dLCBbJ2VtcHR5c2V0JywgWzg3MDldXSwgWydFbXB0eVNtYWxsU3F1YXJlJywgWzk3MjNdXSwgWydlbXB0eXYnLCBbODcwOV1dLCBbJ0VtcHR5VmVyeVNtYWxsU3F1YXJlJywgWzk2NDNdXSwgWydlbXNwMTMnLCBbODE5Nl1dLCBbJ2Vtc3AxNCcsIFs4MTk3XV0sIFsnZW1zcCcsIFs4MTk1XV0sIFsnRU5HJywgWzMzMF1dLCBbJ2VuZycsIFszMzFdXSwgWydlbnNwJywgWzgxOTRdXSwgWydFb2dvbicsIFsyODBdXSwgWydlb2dvbicsIFsyODFdXSwgWydFb3BmJywgWzEyMDEyNF1dLCBbJ2VvcGYnLCBbMTIwMTUwXV0sIFsnZXBhcicsIFs4OTE3XV0sIFsnZXBhcnNsJywgWzEwNzIzXV0sIFsnZXBsdXMnLCBbMTA4NjVdXSwgWydlcHNpJywgWzk0OV1dLCBbJ0Vwc2lsb24nLCBbOTE3XV0sIFsnZXBzaWxvbicsIFs5NDldXSwgWydlcHNpdicsIFsxMDEzXV0sIFsnZXFjaXJjJywgWzg3OTBdXSwgWydlcWNvbG9uJywgWzg3ODldXSwgWydlcXNpbScsIFs4NzcwXV0sIFsnZXFzbGFudGd0cicsIFsxMDkwMl1dLCBbJ2Vxc2xhbnRsZXNzJywgWzEwOTAxXV0sIFsnRXF1YWwnLCBbMTA4NjldXSwgWydlcXVhbHMnLCBbNjFdXSwgWydFcXVhbFRpbGRlJywgWzg3NzBdXSwgWydlcXVlc3QnLCBbODc5OV1dLCBbJ0VxdWlsaWJyaXVtJywgWzg2NTJdXSwgWydlcXVpdicsIFs4ODAxXV0sIFsnZXF1aXZERCcsIFsxMDg3Ml1dLCBbJ2VxdnBhcnNsJywgWzEwNzI1XV0sIFsnZXJhcnInLCBbMTA2MDldXSwgWydlckRvdCcsIFs4Nzg3XV0sIFsnZXNjcicsIFs4NDk1XV0sIFsnRXNjcicsIFs4NDk2XV0sIFsnZXNkb3QnLCBbODc4NF1dLCBbJ0VzaW0nLCBbMTA4NjddXSwgWydlc2ltJywgWzg3NzBdXSwgWydFdGEnLCBbOTE5XV0sIFsnZXRhJywgWzk1MV1dLCBbJ0VUSCcsIFsyMDhdXSwgWydldGgnLCBbMjQwXV0sIFsnRXVtbCcsIFsyMDNdXSwgWydldW1sJywgWzIzNV1dLCBbJ2V1cm8nLCBbODM2NF1dLCBbJ2V4Y2wnLCBbMzNdXSwgWydleGlzdCcsIFs4NzA3XV0sIFsnRXhpc3RzJywgWzg3MDddXSwgWydleHBlY3RhdGlvbicsIFs4NDk2XV0sIFsnZXhwb25lbnRpYWxlJywgWzg1MTldXSwgWydFeHBvbmVudGlhbEUnLCBbODUxOV1dLCBbJ2ZhbGxpbmdkb3RzZXEnLCBbODc4Nl1dLCBbJ0ZjeScsIFsxMDYwXV0sIFsnZmN5JywgWzEwOTJdXSwgWydmZW1hbGUnLCBbOTc5Ml1dLCBbJ2ZmaWxpZycsIFs2NDI1OV1dLCBbJ2ZmbGlnJywgWzY0MjU2XV0sIFsnZmZsbGlnJywgWzY0MjYwXV0sIFsnRmZyJywgWzEyMDA3M11dLCBbJ2ZmcicsIFsxMjAwOTldXSwgWydmaWxpZycsIFs2NDI1N11dLCBbJ0ZpbGxlZFNtYWxsU3F1YXJlJywgWzk3MjRdXSwgWydGaWxsZWRWZXJ5U21hbGxTcXVhcmUnLCBbOTY0Ml1dLCBbJ2ZqbGlnJywgWzEwMiwgMTA2XV0sIFsnZmxhdCcsIFs5ODM3XV0sIFsnZmxsaWcnLCBbNjQyNThdXSwgWydmbHRucycsIFs5NjQ5XV0sIFsnZm5vZicsIFs0MDJdXSwgWydGb3BmJywgWzEyMDEyNV1dLCBbJ2ZvcGYnLCBbMTIwMTUxXV0sIFsnZm9yYWxsJywgWzg3MDRdXSwgWydGb3JBbGwnLCBbODcwNF1dLCBbJ2ZvcmsnLCBbODkxNl1dLCBbJ2Zvcmt2JywgWzEwOTY5XV0sIFsnRm91cmllcnRyZicsIFs4NDk3XV0sIFsnZnBhcnRpbnQnLCBbMTA3NjVdXSwgWydmcmFjMTInLCBbMTg5XV0sIFsnZnJhYzEzJywgWzg1MzFdXSwgWydmcmFjMTQnLCBbMTg4XV0sIFsnZnJhYzE1JywgWzg1MzNdXSwgWydmcmFjMTYnLCBbODUzN11dLCBbJ2ZyYWMxOCcsIFs4NTM5XV0sIFsnZnJhYzIzJywgWzg1MzJdXSwgWydmcmFjMjUnLCBbODUzNF1dLCBbJ2ZyYWMzNCcsIFsxOTBdXSwgWydmcmFjMzUnLCBbODUzNV1dLCBbJ2ZyYWMzOCcsIFs4NTQwXV0sIFsnZnJhYzQ1JywgWzg1MzZdXSwgWydmcmFjNTYnLCBbODUzOF1dLCBbJ2ZyYWM1OCcsIFs4NTQxXV0sIFsnZnJhYzc4JywgWzg1NDJdXSwgWydmcmFzbCcsIFs4MjYwXV0sIFsnZnJvd24nLCBbODk5NF1dLCBbJ2ZzY3InLCBbMTE5OTk1XV0sIFsnRnNjcicsIFs4NDk3XV0sIFsnZ2FjdXRlJywgWzUwMV1dLCBbJ0dhbW1hJywgWzkxNV1dLCBbJ2dhbW1hJywgWzk0N11dLCBbJ0dhbW1hZCcsIFs5ODhdXSwgWydnYW1tYWQnLCBbOTg5XV0sIFsnZ2FwJywgWzEwODg2XV0sIFsnR2JyZXZlJywgWzI4Nl1dLCBbJ2dicmV2ZScsIFsyODddXSwgWydHY2VkaWwnLCBbMjkwXV0sIFsnR2NpcmMnLCBbMjg0XV0sIFsnZ2NpcmMnLCBbMjg1XV0sIFsnR2N5JywgWzEwNDNdXSwgWydnY3knLCBbMTA3NV1dLCBbJ0dkb3QnLCBbMjg4XV0sIFsnZ2RvdCcsIFsyODldXSwgWydnZScsIFs4ODA1XV0sIFsnZ0UnLCBbODgwN11dLCBbJ2dFbCcsIFsxMDg5Ml1dLCBbJ2dlbCcsIFs4OTIzXV0sIFsnZ2VxJywgWzg4MDVdXSwgWydnZXFxJywgWzg4MDddXSwgWydnZXFzbGFudCcsIFsxMDg3OF1dLCBbJ2dlc2NjJywgWzEwOTIxXV0sIFsnZ2VzJywgWzEwODc4XV0sIFsnZ2VzZG90JywgWzEwODgwXV0sIFsnZ2VzZG90bycsIFsxMDg4Ml1dLCBbJ2dlc2RvdG9sJywgWzEwODg0XV0sIFsnZ2VzbCcsIFs4OTIzLCA2NTAyNF1dLCBbJ2dlc2xlcycsIFsxMDkwMF1dLCBbJ0dmcicsIFsxMjAwNzRdXSwgWydnZnInLCBbMTIwMTAwXV0sIFsnZ2cnLCBbODgxMV1dLCBbJ0dnJywgWzg5MjFdXSwgWydnZ2cnLCBbODkyMV1dLCBbJ2dpbWVsJywgWzg1MDNdXSwgWydHSmN5JywgWzEwMjddXSwgWydnamN5JywgWzExMDddXSwgWydnbGEnLCBbMTA5MTddXSwgWydnbCcsIFs4ODIzXV0sIFsnZ2xFJywgWzEwODk4XV0sIFsnZ2xqJywgWzEwOTE2XV0sIFsnZ25hcCcsIFsxMDg5MF1dLCBbJ2duYXBwcm94JywgWzEwODkwXV0sIFsnZ25lJywgWzEwODg4XV0sIFsnZ25FJywgWzg4MDldXSwgWydnbmVxJywgWzEwODg4XV0sIFsnZ25lcXEnLCBbODgwOV1dLCBbJ2duc2ltJywgWzg5MzVdXSwgWydHb3BmJywgWzEyMDEyNl1dLCBbJ2dvcGYnLCBbMTIwMTUyXV0sIFsnZ3JhdmUnLCBbOTZdXSwgWydHcmVhdGVyRXF1YWwnLCBbODgwNV1dLCBbJ0dyZWF0ZXJFcXVhbExlc3MnLCBbODkyM11dLCBbJ0dyZWF0ZXJGdWxsRXF1YWwnLCBbODgwN11dLCBbJ0dyZWF0ZXJHcmVhdGVyJywgWzEwOTE0XV0sIFsnR3JlYXRlckxlc3MnLCBbODgyM11dLCBbJ0dyZWF0ZXJTbGFudEVxdWFsJywgWzEwODc4XV0sIFsnR3JlYXRlclRpbGRlJywgWzg4MTldXSwgWydHc2NyJywgWzExOTk3MF1dLCBbJ2dzY3InLCBbODQ1OF1dLCBbJ2dzaW0nLCBbODgxOV1dLCBbJ2dzaW1lJywgWzEwODk0XV0sIFsnZ3NpbWwnLCBbMTA4OTZdXSwgWydndGNjJywgWzEwOTE5XV0sIFsnZ3RjaXInLCBbMTA4NzRdXSwgWydndCcsIFs2Ml1dLCBbJ0dUJywgWzYyXV0sIFsnR3QnLCBbODgxMV1dLCBbJ2d0ZG90JywgWzg5MTldXSwgWydndGxQYXInLCBbMTA2NDVdXSwgWydndHF1ZXN0JywgWzEwODc2XV0sIFsnZ3RyYXBwcm94JywgWzEwODg2XV0sIFsnZ3RyYXJyJywgWzEwNjE2XV0sIFsnZ3RyZG90JywgWzg5MTldXSwgWydndHJlcWxlc3MnLCBbODkyM11dLCBbJ2d0cmVxcWxlc3MnLCBbMTA4OTJdXSwgWydndHJsZXNzJywgWzg4MjNdXSwgWydndHJzaW0nLCBbODgxOV1dLCBbJ2d2ZXJ0bmVxcScsIFs4ODA5LCA2NTAyNF1dLCBbJ2d2bkUnLCBbODgwOSwgNjUwMjRdXSwgWydIYWNlaycsIFs3MTFdXSwgWydoYWlyc3AnLCBbODIwMl1dLCBbJ2hhbGYnLCBbMTg5XV0sIFsnaGFtaWx0JywgWzg0NTldXSwgWydIQVJEY3knLCBbMTA2Nl1dLCBbJ2hhcmRjeScsIFsxMDk4XV0sIFsnaGFycmNpcicsIFsxMDU2OF1dLCBbJ2hhcnInLCBbODU5Nl1dLCBbJ2hBcnInLCBbODY2MF1dLCBbJ2hhcnJ3JywgWzg2MjFdXSwgWydIYXQnLCBbOTRdXSwgWydoYmFyJywgWzg0NjNdXSwgWydIY2lyYycsIFsyOTJdXSwgWydoY2lyYycsIFsyOTNdXSwgWydoZWFydHMnLCBbOTgyOV1dLCBbJ2hlYXJ0c3VpdCcsIFs5ODI5XV0sIFsnaGVsbGlwJywgWzgyMzBdXSwgWydoZXJjb24nLCBbODg4OV1dLCBbJ2hmcicsIFsxMjAxMDFdXSwgWydIZnInLCBbODQ2MF1dLCBbJ0hpbGJlcnRTcGFjZScsIFs4NDU5XV0sIFsnaGtzZWFyb3cnLCBbMTA1MzNdXSwgWydoa3N3YXJvdycsIFsxMDUzNF1dLCBbJ2hvYXJyJywgWzg3MDNdXSwgWydob210aHQnLCBbODc2M11dLCBbJ2hvb2tsZWZ0YXJyb3cnLCBbODYxN11dLCBbJ2hvb2tyaWdodGFycm93JywgWzg2MThdXSwgWydob3BmJywgWzEyMDE1M11dLCBbJ0hvcGYnLCBbODQ2MV1dLCBbJ2hvcmJhcicsIFs4MjEzXV0sIFsnSG9yaXpvbnRhbExpbmUnLCBbOTQ3Ml1dLCBbJ2hzY3InLCBbMTE5OTk3XV0sIFsnSHNjcicsIFs4NDU5XV0sIFsnaHNsYXNoJywgWzg0NjNdXSwgWydIc3Ryb2snLCBbMjk0XV0sIFsnaHN0cm9rJywgWzI5NV1dLCBbJ0h1bXBEb3duSHVtcCcsIFs4NzgyXV0sIFsnSHVtcEVxdWFsJywgWzg3ODNdXSwgWydoeWJ1bGwnLCBbODI1OV1dLCBbJ2h5cGhlbicsIFs4MjA4XV0sIFsnSWFjdXRlJywgWzIwNV1dLCBbJ2lhY3V0ZScsIFsyMzddXSwgWydpYycsIFs4MjkxXV0sIFsnSWNpcmMnLCBbMjA2XV0sIFsnaWNpcmMnLCBbMjM4XV0sIFsnSWN5JywgWzEwNDhdXSwgWydpY3knLCBbMTA4MF1dLCBbJ0lkb3QnLCBbMzA0XV0sIFsnSUVjeScsIFsxMDQ1XV0sIFsnaWVjeScsIFsxMDc3XV0sIFsnaWV4Y2wnLCBbMTYxXV0sIFsnaWZmJywgWzg2NjBdXSwgWydpZnInLCBbMTIwMTAyXV0sIFsnSWZyJywgWzg0NjVdXSwgWydJZ3JhdmUnLCBbMjA0XV0sIFsnaWdyYXZlJywgWzIzNl1dLCBbJ2lpJywgWzg1MjBdXSwgWydpaWlpbnQnLCBbMTA3NjRdXSwgWydpaWludCcsIFs4NzQ5XV0sIFsnaWluZmluJywgWzEwNzE2XV0sIFsnaWlvdGEnLCBbODQ4OV1dLCBbJ0lKbGlnJywgWzMwNl1dLCBbJ2lqbGlnJywgWzMwN11dLCBbJ0ltYWNyJywgWzI5OF1dLCBbJ2ltYWNyJywgWzI5OV1dLCBbJ2ltYWdlJywgWzg0NjVdXSwgWydJbWFnaW5hcnlJJywgWzg1MjBdXSwgWydpbWFnbGluZScsIFs4NDY0XV0sIFsnaW1hZ3BhcnQnLCBbODQ2NV1dLCBbJ2ltYXRoJywgWzMwNV1dLCBbJ0ltJywgWzg0NjVdXSwgWydpbW9mJywgWzg4ODddXSwgWydpbXBlZCcsIFs0MzddXSwgWydJbXBsaWVzJywgWzg2NThdXSwgWydpbmNhcmUnLCBbODQ1M11dLCBbJ2luJywgWzg3MTJdXSwgWydpbmZpbicsIFs4NzM0XV0sIFsnaW5maW50aWUnLCBbMTA3MTddXSwgWydpbm9kb3QnLCBbMzA1XV0sIFsnaW50Y2FsJywgWzg4OTBdXSwgWydpbnQnLCBbODc0N11dLCBbJ0ludCcsIFs4NzQ4XV0sIFsnaW50ZWdlcnMnLCBbODQ4NF1dLCBbJ0ludGVncmFsJywgWzg3NDddXSwgWydpbnRlcmNhbCcsIFs4ODkwXV0sIFsnSW50ZXJzZWN0aW9uJywgWzg4OThdXSwgWydpbnRsYXJoaycsIFsxMDc3NV1dLCBbJ2ludHByb2QnLCBbMTA4MTJdXSwgWydJbnZpc2libGVDb21tYScsIFs4MjkxXV0sIFsnSW52aXNpYmxlVGltZXMnLCBbODI5MF1dLCBbJ0lPY3knLCBbMTAyNV1dLCBbJ2lvY3knLCBbMTEwNV1dLCBbJ0lvZ29uJywgWzMwMl1dLCBbJ2lvZ29uJywgWzMwM11dLCBbJ0lvcGYnLCBbMTIwMTI4XV0sIFsnaW9wZicsIFsxMjAxNTRdXSwgWydJb3RhJywgWzkyMV1dLCBbJ2lvdGEnLCBbOTUzXV0sIFsnaXByb2QnLCBbMTA4MTJdXSwgWydpcXVlc3QnLCBbMTkxXV0sIFsnaXNjcicsIFsxMTk5OThdXSwgWydJc2NyJywgWzg0NjRdXSwgWydpc2luJywgWzg3MTJdXSwgWydpc2luZG90JywgWzg5NDldXSwgWydpc2luRScsIFs4OTUzXV0sIFsnaXNpbnMnLCBbODk0OF1dLCBbJ2lzaW5zdicsIFs4OTQ3XV0sIFsnaXNpbnYnLCBbODcxMl1dLCBbJ2l0JywgWzgyOTBdXSwgWydJdGlsZGUnLCBbMjk2XV0sIFsnaXRpbGRlJywgWzI5N11dLCBbJ0l1a2N5JywgWzEwMzBdXSwgWydpdWtjeScsIFsxMTEwXV0sIFsnSXVtbCcsIFsyMDddXSwgWydpdW1sJywgWzIzOV1dLCBbJ0pjaXJjJywgWzMwOF1dLCBbJ2pjaXJjJywgWzMwOV1dLCBbJ0pjeScsIFsxMDQ5XV0sIFsnamN5JywgWzEwODFdXSwgWydKZnInLCBbMTIwMDc3XV0sIFsnamZyJywgWzEyMDEwM11dLCBbJ2ptYXRoJywgWzU2N11dLCBbJ0pvcGYnLCBbMTIwMTI5XV0sIFsnam9wZicsIFsxMjAxNTVdXSwgWydKc2NyJywgWzExOTk3M11dLCBbJ2pzY3InLCBbMTE5OTk5XV0sIFsnSnNlcmN5JywgWzEwMzJdXSwgWydqc2VyY3knLCBbMTExMl1dLCBbJ0p1a2N5JywgWzEwMjhdXSwgWydqdWtjeScsIFsxMTA4XV0sIFsnS2FwcGEnLCBbOTIyXV0sIFsna2FwcGEnLCBbOTU0XV0sIFsna2FwcGF2JywgWzEwMDhdXSwgWydLY2VkaWwnLCBbMzEwXV0sIFsna2NlZGlsJywgWzMxMV1dLCBbJ0tjeScsIFsxMDUwXV0sIFsna2N5JywgWzEwODJdXSwgWydLZnInLCBbMTIwMDc4XV0sIFsna2ZyJywgWzEyMDEwNF1dLCBbJ2tncmVlbicsIFszMTJdXSwgWydLSGN5JywgWzEwNjFdXSwgWydraGN5JywgWzEwOTNdXSwgWydLSmN5JywgWzEwMzZdXSwgWydramN5JywgWzExMTZdXSwgWydLb3BmJywgWzEyMDEzMF1dLCBbJ2tvcGYnLCBbMTIwMTU2XV0sIFsnS3NjcicsIFsxMTk5NzRdXSwgWydrc2NyJywgWzEyMDAwMF1dLCBbJ2xBYXJyJywgWzg2NjZdXSwgWydMYWN1dGUnLCBbMzEzXV0sIFsnbGFjdXRlJywgWzMxNF1dLCBbJ2xhZW1wdHl2JywgWzEwNjc2XV0sIFsnbGFncmFuJywgWzg0NjZdXSwgWydMYW1iZGEnLCBbOTIzXV0sIFsnbGFtYmRhJywgWzk1NV1dLCBbJ2xhbmcnLCBbMTAyMTZdXSwgWydMYW5nJywgWzEwMjE4XV0sIFsnbGFuZ2QnLCBbMTA2NDFdXSwgWydsYW5nbGUnLCBbMTAyMTZdXSwgWydsYXAnLCBbMTA4ODVdXSwgWydMYXBsYWNldHJmJywgWzg0NjZdXSwgWydsYXF1bycsIFsxNzFdXSwgWydsYXJyYicsIFs4Njc2XV0sIFsnbGFycmJmcycsIFsxMDUyN11dLCBbJ2xhcnInLCBbODU5Ml1dLCBbJ0xhcnInLCBbODYwNl1dLCBbJ2xBcnInLCBbODY1Nl1dLCBbJ2xhcnJmcycsIFsxMDUyNV1dLCBbJ2xhcnJoaycsIFs4NjE3XV0sIFsnbGFycmxwJywgWzg2MTldXSwgWydsYXJycGwnLCBbMTA1NTNdXSwgWydsYXJyc2ltJywgWzEwNjExXV0sIFsnbGFycnRsJywgWzg2MTBdXSwgWydsYXRhaWwnLCBbMTA1MjFdXSwgWydsQXRhaWwnLCBbMTA1MjNdXSwgWydsYXQnLCBbMTA5MjNdXSwgWydsYXRlJywgWzEwOTI1XV0sIFsnbGF0ZXMnLCBbMTA5MjUsIDY1MDI0XV0sIFsnbGJhcnInLCBbMTA1MDhdXSwgWydsQmFycicsIFsxMDUxMF1dLCBbJ2xiYnJrJywgWzEwMDk4XV0sIFsnbGJyYWNlJywgWzEyM11dLCBbJ2xicmFjaycsIFs5MV1dLCBbJ2xicmtlJywgWzEwNjM1XV0sIFsnbGJya3NsZCcsIFsxMDYzOV1dLCBbJ2xicmtzbHUnLCBbMTA2MzddXSwgWydMY2Fyb24nLCBbMzE3XV0sIFsnbGNhcm9uJywgWzMxOF1dLCBbJ0xjZWRpbCcsIFszMTVdXSwgWydsY2VkaWwnLCBbMzE2XV0sIFsnbGNlaWwnLCBbODk2OF1dLCBbJ2xjdWInLCBbMTIzXV0sIFsnTGN5JywgWzEwNTFdXSwgWydsY3knLCBbMTA4M11dLCBbJ2xkY2EnLCBbMTA1NTBdXSwgWydsZHF1bycsIFs4MjIwXV0sIFsnbGRxdW9yJywgWzgyMjJdXSwgWydsZHJkaGFyJywgWzEwNTk5XV0sIFsnbGRydXNoYXInLCBbMTA1NzFdXSwgWydsZHNoJywgWzg2MjZdXSwgWydsZScsIFs4ODA0XV0sIFsnbEUnLCBbODgwNl1dLCBbJ0xlZnRBbmdsZUJyYWNrZXQnLCBbMTAyMTZdXSwgWydMZWZ0QXJyb3dCYXInLCBbODY3Nl1dLCBbJ2xlZnRhcnJvdycsIFs4NTkyXV0sIFsnTGVmdEFycm93JywgWzg1OTJdXSwgWydMZWZ0YXJyb3cnLCBbODY1Nl1dLCBbJ0xlZnRBcnJvd1JpZ2h0QXJyb3cnLCBbODY0Nl1dLCBbJ2xlZnRhcnJvd3RhaWwnLCBbODYxMF1dLCBbJ0xlZnRDZWlsaW5nJywgWzg5NjhdXSwgWydMZWZ0RG91YmxlQnJhY2tldCcsIFsxMDIxNF1dLCBbJ0xlZnREb3duVGVlVmVjdG9yJywgWzEwNTkzXV0sIFsnTGVmdERvd25WZWN0b3JCYXInLCBbMTA1ODVdXSwgWydMZWZ0RG93blZlY3RvcicsIFs4NjQzXV0sIFsnTGVmdEZsb29yJywgWzg5NzBdXSwgWydsZWZ0aGFycG9vbmRvd24nLCBbODYzN11dLCBbJ2xlZnRoYXJwb29udXAnLCBbODYzNl1dLCBbJ2xlZnRsZWZ0YXJyb3dzJywgWzg2NDddXSwgWydsZWZ0cmlnaHRhcnJvdycsIFs4NTk2XV0sIFsnTGVmdFJpZ2h0QXJyb3cnLCBbODU5Nl1dLCBbJ0xlZnRyaWdodGFycm93JywgWzg2NjBdXSwgWydsZWZ0cmlnaHRhcnJvd3MnLCBbODY0Nl1dLCBbJ2xlZnRyaWdodGhhcnBvb25zJywgWzg2NTFdXSwgWydsZWZ0cmlnaHRzcXVpZ2Fycm93JywgWzg2MjFdXSwgWydMZWZ0UmlnaHRWZWN0b3InLCBbMTA1NzRdXSwgWydMZWZ0VGVlQXJyb3cnLCBbODYxMl1dLCBbJ0xlZnRUZWUnLCBbODg2N11dLCBbJ0xlZnRUZWVWZWN0b3InLCBbMTA1ODZdXSwgWydsZWZ0dGhyZWV0aW1lcycsIFs4OTA3XV0sIFsnTGVmdFRyaWFuZ2xlQmFyJywgWzEwNzAzXV0sIFsnTGVmdFRyaWFuZ2xlJywgWzg4ODJdXSwgWydMZWZ0VHJpYW5nbGVFcXVhbCcsIFs4ODg0XV0sIFsnTGVmdFVwRG93blZlY3RvcicsIFsxMDU3N11dLCBbJ0xlZnRVcFRlZVZlY3RvcicsIFsxMDU5Ml1dLCBbJ0xlZnRVcFZlY3RvckJhcicsIFsxMDU4NF1dLCBbJ0xlZnRVcFZlY3RvcicsIFs4NjM5XV0sIFsnTGVmdFZlY3RvckJhcicsIFsxMDU3OF1dLCBbJ0xlZnRWZWN0b3InLCBbODYzNl1dLCBbJ2xFZycsIFsxMDg5MV1dLCBbJ2xlZycsIFs4OTIyXV0sIFsnbGVxJywgWzg4MDRdXSwgWydsZXFxJywgWzg4MDZdXSwgWydsZXFzbGFudCcsIFsxMDg3N11dLCBbJ2xlc2NjJywgWzEwOTIwXV0sIFsnbGVzJywgWzEwODc3XV0sIFsnbGVzZG90JywgWzEwODc5XV0sIFsnbGVzZG90bycsIFsxMDg4MV1dLCBbJ2xlc2RvdG9yJywgWzEwODgzXV0sIFsnbGVzZycsIFs4OTIyLCA2NTAyNF1dLCBbJ2xlc2dlcycsIFsxMDg5OV1dLCBbJ2xlc3NhcHByb3gnLCBbMTA4ODVdXSwgWydsZXNzZG90JywgWzg5MThdXSwgWydsZXNzZXFndHInLCBbODkyMl1dLCBbJ2xlc3NlcXFndHInLCBbMTA4OTFdXSwgWydMZXNzRXF1YWxHcmVhdGVyJywgWzg5MjJdXSwgWydMZXNzRnVsbEVxdWFsJywgWzg4MDZdXSwgWydMZXNzR3JlYXRlcicsIFs4ODIyXV0sIFsnbGVzc2d0cicsIFs4ODIyXV0sIFsnTGVzc0xlc3MnLCBbMTA5MTNdXSwgWydsZXNzc2ltJywgWzg4MThdXSwgWydMZXNzU2xhbnRFcXVhbCcsIFsxMDg3N11dLCBbJ0xlc3NUaWxkZScsIFs4ODE4XV0sIFsnbGZpc2h0JywgWzEwNjIwXV0sIFsnbGZsb29yJywgWzg5NzBdXSwgWydMZnInLCBbMTIwMDc5XV0sIFsnbGZyJywgWzEyMDEwNV1dLCBbJ2xnJywgWzg4MjJdXSwgWydsZ0UnLCBbMTA4OTddXSwgWydsSGFyJywgWzEwNTk0XV0sIFsnbGhhcmQnLCBbODYzN11dLCBbJ2xoYXJ1JywgWzg2MzZdXSwgWydsaGFydWwnLCBbMTA2MDJdXSwgWydsaGJsaycsIFs5NjA0XV0sIFsnTEpjeScsIFsxMDMzXV0sIFsnbGpjeScsIFsxMTEzXV0sIFsnbGxhcnInLCBbODY0N11dLCBbJ2xsJywgWzg4MTBdXSwgWydMbCcsIFs4OTIwXV0sIFsnbGxjb3JuZXInLCBbODk5MF1dLCBbJ0xsZWZ0YXJyb3cnLCBbODY2Nl1dLCBbJ2xsaGFyZCcsIFsxMDYwM11dLCBbJ2xsdHJpJywgWzk3MjJdXSwgWydMbWlkb3QnLCBbMzE5XV0sIFsnbG1pZG90JywgWzMyMF1dLCBbJ2xtb3VzdGFjaGUnLCBbOTEzNl1dLCBbJ2xtb3VzdCcsIFs5MTM2XV0sIFsnbG5hcCcsIFsxMDg4OV1dLCBbJ2xuYXBwcm94JywgWzEwODg5XV0sIFsnbG5lJywgWzEwODg3XV0sIFsnbG5FJywgWzg4MDhdXSwgWydsbmVxJywgWzEwODg3XV0sIFsnbG5lcXEnLCBbODgwOF1dLCBbJ2xuc2ltJywgWzg5MzRdXSwgWydsb2FuZycsIFsxMDIyMF1dLCBbJ2xvYXJyJywgWzg3MDFdXSwgWydsb2JyaycsIFsxMDIxNF1dLCBbJ2xvbmdsZWZ0YXJyb3cnLCBbMTAyMjldXSwgWydMb25nTGVmdEFycm93JywgWzEwMjI5XV0sIFsnTG9uZ2xlZnRhcnJvdycsIFsxMDIzMl1dLCBbJ2xvbmdsZWZ0cmlnaHRhcnJvdycsIFsxMDIzMV1dLCBbJ0xvbmdMZWZ0UmlnaHRBcnJvdycsIFsxMDIzMV1dLCBbJ0xvbmdsZWZ0cmlnaHRhcnJvdycsIFsxMDIzNF1dLCBbJ2xvbmdtYXBzdG8nLCBbMTAyMzZdXSwgWydsb25ncmlnaHRhcnJvdycsIFsxMDIzMF1dLCBbJ0xvbmdSaWdodEFycm93JywgWzEwMjMwXV0sIFsnTG9uZ3JpZ2h0YXJyb3cnLCBbMTAyMzNdXSwgWydsb29wYXJyb3dsZWZ0JywgWzg2MTldXSwgWydsb29wYXJyb3dyaWdodCcsIFs4NjIwXV0sIFsnbG9wYXInLCBbMTA2MjldXSwgWydMb3BmJywgWzEyMDEzMV1dLCBbJ2xvcGYnLCBbMTIwMTU3XV0sIFsnbG9wbHVzJywgWzEwNzk3XV0sIFsnbG90aW1lcycsIFsxMDgwNF1dLCBbJ2xvd2FzdCcsIFs4NzI3XV0sIFsnbG93YmFyJywgWzk1XV0sIFsnTG93ZXJMZWZ0QXJyb3cnLCBbODYwMV1dLCBbJ0xvd2VyUmlnaHRBcnJvdycsIFs4NjAwXV0sIFsnbG96JywgWzk2NzRdXSwgWydsb3plbmdlJywgWzk2NzRdXSwgWydsb3pmJywgWzEwNzMxXV0sIFsnbHBhcicsIFs0MF1dLCBbJ2xwYXJsdCcsIFsxMDY0M11dLCBbJ2xyYXJyJywgWzg2NDZdXSwgWydscmNvcm5lcicsIFs4OTkxXV0sIFsnbHJoYXInLCBbODY1MV1dLCBbJ2xyaGFyZCcsIFsxMDYwNV1dLCBbJ2xybScsIFs4MjA2XV0sIFsnbHJ0cmknLCBbODg5NV1dLCBbJ2xzYXF1bycsIFs4MjQ5XV0sIFsnbHNjcicsIFsxMjAwMDFdXSwgWydMc2NyJywgWzg0NjZdXSwgWydsc2gnLCBbODYyNF1dLCBbJ0xzaCcsIFs4NjI0XV0sIFsnbHNpbScsIFs4ODE4XV0sIFsnbHNpbWUnLCBbMTA4OTNdXSwgWydsc2ltZycsIFsxMDg5NV1dLCBbJ2xzcWInLCBbOTFdXSwgWydsc3F1bycsIFs4MjE2XV0sIFsnbHNxdW9yJywgWzgyMThdXSwgWydMc3Ryb2snLCBbMzIxXV0sIFsnbHN0cm9rJywgWzMyMl1dLCBbJ2x0Y2MnLCBbMTA5MThdXSwgWydsdGNpcicsIFsxMDg3M11dLCBbJ2x0JywgWzYwXV0sIFsnTFQnLCBbNjBdXSwgWydMdCcsIFs4ODEwXV0sIFsnbHRkb3QnLCBbODkxOF1dLCBbJ2x0aHJlZScsIFs4OTA3XV0sIFsnbHRpbWVzJywgWzg5MDVdXSwgWydsdGxhcnInLCBbMTA2MTRdXSwgWydsdHF1ZXN0JywgWzEwODc1XV0sIFsnbHRyaScsIFs5NjY3XV0sIFsnbHRyaWUnLCBbODg4NF1dLCBbJ2x0cmlmJywgWzk2NjZdXSwgWydsdHJQYXInLCBbMTA2NDZdXSwgWydsdXJkc2hhcicsIFsxMDU3MF1dLCBbJ2x1cnVoYXInLCBbMTA1OThdXSwgWydsdmVydG5lcXEnLCBbODgwOCwgNjUwMjRdXSwgWydsdm5FJywgWzg4MDgsIDY1MDI0XV0sIFsnbWFjcicsIFsxNzVdXSwgWydtYWxlJywgWzk3OTRdXSwgWydtYWx0JywgWzEwMDE2XV0sIFsnbWFsdGVzZScsIFsxMDAxNl1dLCBbJ01hcCcsIFsxMDUwMV1dLCBbJ21hcCcsIFs4NjE0XV0sIFsnbWFwc3RvJywgWzg2MTRdXSwgWydtYXBzdG9kb3duJywgWzg2MTVdXSwgWydtYXBzdG9sZWZ0JywgWzg2MTJdXSwgWydtYXBzdG91cCcsIFs4NjEzXV0sIFsnbWFya2VyJywgWzk2NDZdXSwgWydtY29tbWEnLCBbMTA3OTNdXSwgWydNY3knLCBbMTA1Ml1dLCBbJ21jeScsIFsxMDg0XV0sIFsnbWRhc2gnLCBbODIxMl1dLCBbJ21ERG90JywgWzg3NjJdXSwgWydtZWFzdXJlZGFuZ2xlJywgWzg3MzddXSwgWydNZWRpdW1TcGFjZScsIFs4Mjg3XV0sIFsnTWVsbGludHJmJywgWzg0OTldXSwgWydNZnInLCBbMTIwMDgwXV0sIFsnbWZyJywgWzEyMDEwNl1dLCBbJ21obycsIFs4NDg3XV0sIFsnbWljcm8nLCBbMTgxXV0sIFsnbWlkYXN0JywgWzQyXV0sIFsnbWlkY2lyJywgWzEwOTkyXV0sIFsnbWlkJywgWzg3MzldXSwgWydtaWRkb3QnLCBbMTgzXV0sIFsnbWludXNiJywgWzg4NjNdXSwgWydtaW51cycsIFs4NzIyXV0sIFsnbWludXNkJywgWzg3NjBdXSwgWydtaW51c2R1JywgWzEwNzk0XV0sIFsnTWludXNQbHVzJywgWzg3MjNdXSwgWydtbGNwJywgWzEwOTcxXV0sIFsnbWxkcicsIFs4MjMwXV0sIFsnbW5wbHVzJywgWzg3MjNdXSwgWydtb2RlbHMnLCBbODg3MV1dLCBbJ01vcGYnLCBbMTIwMTMyXV0sIFsnbW9wZicsIFsxMjAxNThdXSwgWydtcCcsIFs4NzIzXV0sIFsnbXNjcicsIFsxMjAwMDJdXSwgWydNc2NyJywgWzg0OTldXSwgWydtc3Rwb3MnLCBbODc2Nl1dLCBbJ011JywgWzkyNF1dLCBbJ211JywgWzk1Nl1dLCBbJ211bHRpbWFwJywgWzg4ODhdXSwgWydtdW1hcCcsIFs4ODg4XV0sIFsnbmFibGEnLCBbODcxMV1dLCBbJ05hY3V0ZScsIFszMjNdXSwgWyduYWN1dGUnLCBbMzI0XV0sIFsnbmFuZycsIFs4NzM2LCA4NDAyXV0sIFsnbmFwJywgWzg3NzddXSwgWyduYXBFJywgWzEwODY0LCA4MjRdXSwgWyduYXBpZCcsIFs4Nzc5LCA4MjRdXSwgWyduYXBvcycsIFszMjldXSwgWyduYXBwcm94JywgWzg3NzddXSwgWyduYXR1cmFsJywgWzk4MzhdXSwgWyduYXR1cmFscycsIFs4NDY5XV0sIFsnbmF0dXInLCBbOTgzOF1dLCBbJ25ic3AnLCBbMTYwXV0sIFsnbmJ1bXAnLCBbODc4MiwgODI0XV0sIFsnbmJ1bXBlJywgWzg3ODMsIDgyNF1dLCBbJ25jYXAnLCBbMTA4MTldXSwgWydOY2Fyb24nLCBbMzI3XV0sIFsnbmNhcm9uJywgWzMyOF1dLCBbJ05jZWRpbCcsIFszMjVdXSwgWyduY2VkaWwnLCBbMzI2XV0sIFsnbmNvbmcnLCBbODc3NV1dLCBbJ25jb25nZG90JywgWzEwODYxLCA4MjRdXSwgWyduY3VwJywgWzEwODE4XV0sIFsnTmN5JywgWzEwNTNdXSwgWyduY3knLCBbMTA4NV1dLCBbJ25kYXNoJywgWzgyMTFdXSwgWyduZWFyaGsnLCBbMTA1MzJdXSwgWyduZWFycicsIFs4NTk5XV0sIFsnbmVBcnInLCBbODY2M11dLCBbJ25lYXJyb3cnLCBbODU5OV1dLCBbJ25lJywgWzg4MDBdXSwgWyduZWRvdCcsIFs4Nzg0LCA4MjRdXSwgWydOZWdhdGl2ZU1lZGl1bVNwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVRoaWNrU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpblNwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVZlcnlUaGluU3BhY2UnLCBbODIwM11dLCBbJ25lcXVpdicsIFs4ODAyXV0sIFsnbmVzZWFyJywgWzEwNTM2XV0sIFsnbmVzaW0nLCBbODc3MCwgODI0XV0sIFsnTmVzdGVkR3JlYXRlckdyZWF0ZXInLCBbODgxMV1dLCBbJ05lc3RlZExlc3NMZXNzJywgWzg4MTBdXSwgWyduZXhpc3QnLCBbODcwOF1dLCBbJ25leGlzdHMnLCBbODcwOF1dLCBbJ05mcicsIFsxMjAwODFdXSwgWyduZnInLCBbMTIwMTA3XV0sIFsnbmdFJywgWzg4MDcsIDgyNF1dLCBbJ25nZScsIFs4ODE3XV0sIFsnbmdlcScsIFs4ODE3XV0sIFsnbmdlcXEnLCBbODgwNywgODI0XV0sIFsnbmdlcXNsYW50JywgWzEwODc4LCA4MjRdXSwgWyduZ2VzJywgWzEwODc4LCA4MjRdXSwgWyduR2cnLCBbODkyMSwgODI0XV0sIFsnbmdzaW0nLCBbODgyMV1dLCBbJ25HdCcsIFs4ODExLCA4NDAyXV0sIFsnbmd0JywgWzg4MTVdXSwgWyduZ3RyJywgWzg4MTVdXSwgWyduR3R2JywgWzg4MTEsIDgyNF1dLCBbJ25oYXJyJywgWzg2MjJdXSwgWyduaEFycicsIFs4NjU0XV0sIFsnbmhwYXInLCBbMTA5OTRdXSwgWyduaScsIFs4NzE1XV0sIFsnbmlzJywgWzg5NTZdXSwgWyduaXNkJywgWzg5NTRdXSwgWyduaXYnLCBbODcxNV1dLCBbJ05KY3knLCBbMTAzNF1dLCBbJ25qY3knLCBbMTExNF1dLCBbJ25sYXJyJywgWzg2MDJdXSwgWydubEFycicsIFs4NjUzXV0sIFsnbmxkcicsIFs4MjI5XV0sIFsnbmxFJywgWzg4MDYsIDgyNF1dLCBbJ25sZScsIFs4ODE2XV0sIFsnbmxlZnRhcnJvdycsIFs4NjAyXV0sIFsnbkxlZnRhcnJvdycsIFs4NjUzXV0sIFsnbmxlZnRyaWdodGFycm93JywgWzg2MjJdXSwgWyduTGVmdHJpZ2h0YXJyb3cnLCBbODY1NF1dLCBbJ25sZXEnLCBbODgxNl1dLCBbJ25sZXFxJywgWzg4MDYsIDgyNF1dLCBbJ25sZXFzbGFudCcsIFsxMDg3NywgODI0XV0sIFsnbmxlcycsIFsxMDg3NywgODI0XV0sIFsnbmxlc3MnLCBbODgxNF1dLCBbJ25MbCcsIFs4OTIwLCA4MjRdXSwgWydubHNpbScsIFs4ODIwXV0sIFsnbkx0JywgWzg4MTAsIDg0MDJdXSwgWydubHQnLCBbODgxNF1dLCBbJ25sdHJpJywgWzg5MzhdXSwgWydubHRyaWUnLCBbODk0MF1dLCBbJ25MdHYnLCBbODgxMCwgODI0XV0sIFsnbm1pZCcsIFs4NzQwXV0sIFsnTm9CcmVhaycsIFs4Mjg4XV0sIFsnTm9uQnJlYWtpbmdTcGFjZScsIFsxNjBdXSwgWydub3BmJywgWzEyMDE1OV1dLCBbJ05vcGYnLCBbODQ2OV1dLCBbJ05vdCcsIFsxMDk4OF1dLCBbJ25vdCcsIFsxNzJdXSwgWydOb3RDb25ncnVlbnQnLCBbODgwMl1dLCBbJ05vdEN1cENhcCcsIFs4ODEzXV0sIFsnTm90RG91YmxlVmVydGljYWxCYXInLCBbODc0Ml1dLCBbJ05vdEVsZW1lbnQnLCBbODcxM11dLCBbJ05vdEVxdWFsJywgWzg4MDBdXSwgWydOb3RFcXVhbFRpbGRlJywgWzg3NzAsIDgyNF1dLCBbJ05vdEV4aXN0cycsIFs4NzA4XV0sIFsnTm90R3JlYXRlcicsIFs4ODE1XV0sIFsnTm90R3JlYXRlckVxdWFsJywgWzg4MTddXSwgWydOb3RHcmVhdGVyRnVsbEVxdWFsJywgWzg4MDcsIDgyNF1dLCBbJ05vdEdyZWF0ZXJHcmVhdGVyJywgWzg4MTEsIDgyNF1dLCBbJ05vdEdyZWF0ZXJMZXNzJywgWzg4MjVdXSwgWydOb3RHcmVhdGVyU2xhbnRFcXVhbCcsIFsxMDg3OCwgODI0XV0sIFsnTm90R3JlYXRlclRpbGRlJywgWzg4MjFdXSwgWydOb3RIdW1wRG93bkh1bXAnLCBbODc4MiwgODI0XV0sIFsnTm90SHVtcEVxdWFsJywgWzg3ODMsIDgyNF1dLCBbJ25vdGluJywgWzg3MTNdXSwgWydub3RpbmRvdCcsIFs4OTQ5LCA4MjRdXSwgWydub3RpbkUnLCBbODk1MywgODI0XV0sIFsnbm90aW52YScsIFs4NzEzXV0sIFsnbm90aW52YicsIFs4OTUxXV0sIFsnbm90aW52YycsIFs4OTUwXV0sIFsnTm90TGVmdFRyaWFuZ2xlQmFyJywgWzEwNzAzLCA4MjRdXSwgWydOb3RMZWZ0VHJpYW5nbGUnLCBbODkzOF1dLCBbJ05vdExlZnRUcmlhbmdsZUVxdWFsJywgWzg5NDBdXSwgWydOb3RMZXNzJywgWzg4MTRdXSwgWydOb3RMZXNzRXF1YWwnLCBbODgxNl1dLCBbJ05vdExlc3NHcmVhdGVyJywgWzg4MjRdXSwgWydOb3RMZXNzTGVzcycsIFs4ODEwLCA4MjRdXSwgWydOb3RMZXNzU2xhbnRFcXVhbCcsIFsxMDg3NywgODI0XV0sIFsnTm90TGVzc1RpbGRlJywgWzg4MjBdXSwgWydOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFsxMDkxNCwgODI0XV0sIFsnTm90TmVzdGVkTGVzc0xlc3MnLCBbMTA5MTMsIDgyNF1dLCBbJ25vdG5pJywgWzg3MTZdXSwgWydub3RuaXZhJywgWzg3MTZdXSwgWydub3RuaXZiJywgWzg5NThdXSwgWydub3RuaXZjJywgWzg5NTddXSwgWydOb3RQcmVjZWRlcycsIFs4ODMyXV0sIFsnTm90UHJlY2VkZXNFcXVhbCcsIFsxMDkyNywgODI0XV0sIFsnTm90UHJlY2VkZXNTbGFudEVxdWFsJywgWzg5MjhdXSwgWydOb3RSZXZlcnNlRWxlbWVudCcsIFs4NzE2XV0sIFsnTm90UmlnaHRUcmlhbmdsZUJhcicsIFsxMDcwNCwgODI0XV0sIFsnTm90UmlnaHRUcmlhbmdsZScsIFs4OTM5XV0sIFsnTm90UmlnaHRUcmlhbmdsZUVxdWFsJywgWzg5NDFdXSwgWydOb3RTcXVhcmVTdWJzZXQnLCBbODg0NywgODI0XV0sIFsnTm90U3F1YXJlU3Vic2V0RXF1YWwnLCBbODkzMF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0JywgWzg4NDgsIDgyNF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODkzMV1dLCBbJ05vdFN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnTm90U3Vic2V0RXF1YWwnLCBbODg0MF1dLCBbJ05vdFN1Y2NlZWRzJywgWzg4MzNdXSwgWydOb3RTdWNjZWVkc0VxdWFsJywgWzEwOTI4LCA4MjRdXSwgWydOb3RTdWNjZWVkc1NsYW50RXF1YWwnLCBbODkyOV1dLCBbJ05vdFN1Y2NlZWRzVGlsZGUnLCBbODgzMSwgODI0XV0sIFsnTm90U3VwZXJzZXQnLCBbODgzNSwgODQwMl1dLCBbJ05vdFN1cGVyc2V0RXF1YWwnLCBbODg0MV1dLCBbJ05vdFRpbGRlJywgWzg3NjldXSwgWydOb3RUaWxkZUVxdWFsJywgWzg3NzJdXSwgWydOb3RUaWxkZUZ1bGxFcXVhbCcsIFs4Nzc1XV0sIFsnTm90VGlsZGVUaWxkZScsIFs4Nzc3XV0sIFsnTm90VmVydGljYWxCYXInLCBbODc0MF1dLCBbJ25wYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnBhcicsIFs4NzQyXV0sIFsnbnBhcnNsJywgWzExMDA1LCA4NDIxXV0sIFsnbnBhcnQnLCBbODcwNiwgODI0XV0sIFsnbnBvbGludCcsIFsxMDc3Ml1dLCBbJ25wcicsIFs4ODMyXV0sIFsnbnByY3VlJywgWzg5MjhdXSwgWyducHJlYycsIFs4ODMyXV0sIFsnbnByZWNlcScsIFsxMDkyNywgODI0XV0sIFsnbnByZScsIFsxMDkyNywgODI0XV0sIFsnbnJhcnJjJywgWzEwNTQ3LCA4MjRdXSwgWyducmFycicsIFs4NjAzXV0sIFsnbnJBcnInLCBbODY1NV1dLCBbJ25yYXJydycsIFs4NjA1LCA4MjRdXSwgWyducmlnaHRhcnJvdycsIFs4NjAzXV0sIFsnblJpZ2h0YXJyb3cnLCBbODY1NV1dLCBbJ25ydHJpJywgWzg5MzldXSwgWyducnRyaWUnLCBbODk0MV1dLCBbJ25zYycsIFs4ODMzXV0sIFsnbnNjY3VlJywgWzg5MjldXSwgWyduc2NlJywgWzEwOTI4LCA4MjRdXSwgWydOc2NyJywgWzExOTk3N11dLCBbJ25zY3InLCBbMTIwMDAzXV0sIFsnbnNob3J0bWlkJywgWzg3NDBdXSwgWyduc2hvcnRwYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnNpbScsIFs4NzY5XV0sIFsnbnNpbWUnLCBbODc3Ml1dLCBbJ25zaW1lcScsIFs4NzcyXV0sIFsnbnNtaWQnLCBbODc0MF1dLCBbJ25zcGFyJywgWzg3NDJdXSwgWyduc3FzdWJlJywgWzg5MzBdXSwgWyduc3FzdXBlJywgWzg5MzFdXSwgWyduc3ViJywgWzg4MzZdXSwgWyduc3ViRScsIFsxMDk0OSwgODI0XV0sIFsnbnN1YmUnLCBbODg0MF1dLCBbJ25zdWJzZXQnLCBbODgzNCwgODQwMl1dLCBbJ25zdWJzZXRlcScsIFs4ODQwXV0sIFsnbnN1YnNldGVxcScsIFsxMDk0OSwgODI0XV0sIFsnbnN1Y2MnLCBbODgzM11dLCBbJ25zdWNjZXEnLCBbMTA5MjgsIDgyNF1dLCBbJ25zdXAnLCBbODgzN11dLCBbJ25zdXBFJywgWzEwOTUwLCA4MjRdXSwgWyduc3VwZScsIFs4ODQxXV0sIFsnbnN1cHNldCcsIFs4ODM1LCA4NDAyXV0sIFsnbnN1cHNldGVxJywgWzg4NDFdXSwgWyduc3Vwc2V0ZXFxJywgWzEwOTUwLCA4MjRdXSwgWydudGdsJywgWzg4MjVdXSwgWydOdGlsZGUnLCBbMjA5XV0sIFsnbnRpbGRlJywgWzI0MV1dLCBbJ250bGcnLCBbODgyNF1dLCBbJ250cmlhbmdsZWxlZnQnLCBbODkzOF1dLCBbJ250cmlhbmdsZWxlZnRlcScsIFs4OTQwXV0sIFsnbnRyaWFuZ2xlcmlnaHQnLCBbODkzOV1dLCBbJ250cmlhbmdsZXJpZ2h0ZXEnLCBbODk0MV1dLCBbJ051JywgWzkyNV1dLCBbJ251JywgWzk1N11dLCBbJ251bScsIFszNV1dLCBbJ251bWVybycsIFs4NDcwXV0sIFsnbnVtc3AnLCBbODE5OV1dLCBbJ252YXAnLCBbODc4MSwgODQwMl1dLCBbJ252ZGFzaCcsIFs4ODc2XV0sIFsnbnZEYXNoJywgWzg4NzddXSwgWyduVmRhc2gnLCBbODg3OF1dLCBbJ25WRGFzaCcsIFs4ODc5XV0sIFsnbnZnZScsIFs4ODA1LCA4NDAyXV0sIFsnbnZndCcsIFs2MiwgODQwMl1dLCBbJ252SGFycicsIFsxMDUwMF1dLCBbJ252aW5maW4nLCBbMTA3MThdXSwgWydudmxBcnInLCBbMTA0OThdXSwgWydudmxlJywgWzg4MDQsIDg0MDJdXSwgWydudmx0JywgWzYwLCA4NDAyXV0sIFsnbnZsdHJpZScsIFs4ODg0LCA4NDAyXV0sIFsnbnZyQXJyJywgWzEwNDk5XV0sIFsnbnZydHJpZScsIFs4ODg1LCA4NDAyXV0sIFsnbnZzaW0nLCBbODc2NCwgODQwMl1dLCBbJ253YXJoaycsIFsxMDUzMV1dLCBbJ253YXJyJywgWzg1OThdXSwgWydud0FycicsIFs4NjYyXV0sIFsnbndhcnJvdycsIFs4NTk4XV0sIFsnbnduZWFyJywgWzEwNTM1XV0sIFsnT2FjdXRlJywgWzIxMV1dLCBbJ29hY3V0ZScsIFsyNDNdXSwgWydvYXN0JywgWzg4NTldXSwgWydPY2lyYycsIFsyMTJdXSwgWydvY2lyYycsIFsyNDRdXSwgWydvY2lyJywgWzg4NThdXSwgWydPY3knLCBbMTA1NF1dLCBbJ29jeScsIFsxMDg2XV0sIFsnb2Rhc2gnLCBbODg2MV1dLCBbJ09kYmxhYycsIFszMzZdXSwgWydvZGJsYWMnLCBbMzM3XV0sIFsnb2RpdicsIFsxMDgwOF1dLCBbJ29kb3QnLCBbODg1N11dLCBbJ29kc29sZCcsIFsxMDY4NF1dLCBbJ09FbGlnJywgWzMzOF1dLCBbJ29lbGlnJywgWzMzOV1dLCBbJ29mY2lyJywgWzEwNjg3XV0sIFsnT2ZyJywgWzEyMDA4Ml1dLCBbJ29mcicsIFsxMjAxMDhdXSwgWydvZ29uJywgWzczMV1dLCBbJ09ncmF2ZScsIFsyMTBdXSwgWydvZ3JhdmUnLCBbMjQyXV0sIFsnb2d0JywgWzEwNjg5XV0sIFsnb2hiYXInLCBbMTA2NzddXSwgWydvaG0nLCBbOTM3XV0sIFsnb2ludCcsIFs4NzUwXV0sIFsnb2xhcnInLCBbODYzNF1dLCBbJ29sY2lyJywgWzEwNjg2XV0sIFsnb2xjcm9zcycsIFsxMDY4M11dLCBbJ29saW5lJywgWzgyNTRdXSwgWydvbHQnLCBbMTA2ODhdXSwgWydPbWFjcicsIFszMzJdXSwgWydvbWFjcicsIFszMzNdXSwgWydPbWVnYScsIFs5MzddXSwgWydvbWVnYScsIFs5NjldXSwgWydPbWljcm9uJywgWzkyN11dLCBbJ29taWNyb24nLCBbOTU5XV0sIFsnb21pZCcsIFsxMDY3OF1dLCBbJ29taW51cycsIFs4ODU0XV0sIFsnT29wZicsIFsxMjAxMzRdXSwgWydvb3BmJywgWzEyMDE2MF1dLCBbJ29wYXInLCBbMTA2NzldXSwgWydPcGVuQ3VybHlEb3VibGVRdW90ZScsIFs4MjIwXV0sIFsnT3BlbkN1cmx5UXVvdGUnLCBbODIxNl1dLCBbJ29wZXJwJywgWzEwNjgxXV0sIFsnb3BsdXMnLCBbODg1M11dLCBbJ29yYXJyJywgWzg2MzVdXSwgWydPcicsIFsxMDgzNl1dLCBbJ29yJywgWzg3NDRdXSwgWydvcmQnLCBbMTA4NDVdXSwgWydvcmRlcicsIFs4NTAwXV0sIFsnb3JkZXJvZicsIFs4NTAwXV0sIFsnb3JkZicsIFsxNzBdXSwgWydvcmRtJywgWzE4Nl1dLCBbJ29yaWdvZicsIFs4ODg2XV0sIFsnb3JvcicsIFsxMDgzOF1dLCBbJ29yc2xvcGUnLCBbMTA4MzldXSwgWydvcnYnLCBbMTA4NDNdXSwgWydvUycsIFs5NDE2XV0sIFsnT3NjcicsIFsxMTk5NzhdXSwgWydvc2NyJywgWzg1MDBdXSwgWydPc2xhc2gnLCBbMjE2XV0sIFsnb3NsYXNoJywgWzI0OF1dLCBbJ29zb2wnLCBbODg1Nl1dLCBbJ090aWxkZScsIFsyMTNdXSwgWydvdGlsZGUnLCBbMjQ1XV0sIFsnb3RpbWVzYXMnLCBbMTA4MDZdXSwgWydPdGltZXMnLCBbMTA4MDddXSwgWydvdGltZXMnLCBbODg1NV1dLCBbJ091bWwnLCBbMjE0XV0sIFsnb3VtbCcsIFsyNDZdXSwgWydvdmJhcicsIFs5MDIxXV0sIFsnT3ZlckJhcicsIFs4MjU0XV0sIFsnT3ZlckJyYWNlJywgWzkxODJdXSwgWydPdmVyQnJhY2tldCcsIFs5MTQwXV0sIFsnT3ZlclBhcmVudGhlc2lzJywgWzkxODBdXSwgWydwYXJhJywgWzE4Ml1dLCBbJ3BhcmFsbGVsJywgWzg3NDFdXSwgWydwYXInLCBbODc0MV1dLCBbJ3BhcnNpbScsIFsxMDk5NV1dLCBbJ3BhcnNsJywgWzExMDA1XV0sIFsncGFydCcsIFs4NzA2XV0sIFsnUGFydGlhbEQnLCBbODcwNl1dLCBbJ1BjeScsIFsxMDU1XV0sIFsncGN5JywgWzEwODddXSwgWydwZXJjbnQnLCBbMzddXSwgWydwZXJpb2QnLCBbNDZdXSwgWydwZXJtaWwnLCBbODI0MF1dLCBbJ3BlcnAnLCBbODg2OV1dLCBbJ3BlcnRlbmsnLCBbODI0MV1dLCBbJ1BmcicsIFsxMjAwODNdXSwgWydwZnInLCBbMTIwMTA5XV0sIFsnUGhpJywgWzkzNF1dLCBbJ3BoaScsIFs5NjZdXSwgWydwaGl2JywgWzk4MV1dLCBbJ3BobW1hdCcsIFs4NDk5XV0sIFsncGhvbmUnLCBbOTc0Ml1dLCBbJ1BpJywgWzkyOF1dLCBbJ3BpJywgWzk2MF1dLCBbJ3BpdGNoZm9yaycsIFs4OTE2XV0sIFsncGl2JywgWzk4Ml1dLCBbJ3BsYW5jaycsIFs4NDYzXV0sIFsncGxhbmNraCcsIFs4NDYyXV0sIFsncGxhbmt2JywgWzg0NjNdXSwgWydwbHVzYWNpcicsIFsxMDc4N11dLCBbJ3BsdXNiJywgWzg4NjJdXSwgWydwbHVzY2lyJywgWzEwNzg2XV0sIFsncGx1cycsIFs0M11dLCBbJ3BsdXNkbycsIFs4NzI0XV0sIFsncGx1c2R1JywgWzEwNzg5XV0sIFsncGx1c2UnLCBbMTA4NjZdXSwgWydQbHVzTWludXMnLCBbMTc3XV0sIFsncGx1c21uJywgWzE3N11dLCBbJ3BsdXNzaW0nLCBbMTA3OTBdXSwgWydwbHVzdHdvJywgWzEwNzkxXV0sIFsncG0nLCBbMTc3XV0sIFsnUG9pbmNhcmVwbGFuZScsIFs4NDYwXV0sIFsncG9pbnRpbnQnLCBbMTA3NzNdXSwgWydwb3BmJywgWzEyMDE2MV1dLCBbJ1BvcGYnLCBbODQ3M11dLCBbJ3BvdW5kJywgWzE2M11dLCBbJ3ByYXAnLCBbMTA5MzVdXSwgWydQcicsIFsxMDkzOV1dLCBbJ3ByJywgWzg4MjZdXSwgWydwcmN1ZScsIFs4ODI4XV0sIFsncHJlY2FwcHJveCcsIFsxMDkzNV1dLCBbJ3ByZWMnLCBbODgyNl1dLCBbJ3ByZWNjdXJseWVxJywgWzg4MjhdXSwgWydQcmVjZWRlcycsIFs4ODI2XV0sIFsnUHJlY2VkZXNFcXVhbCcsIFsxMDkyN11dLCBbJ1ByZWNlZGVzU2xhbnRFcXVhbCcsIFs4ODI4XV0sIFsnUHJlY2VkZXNUaWxkZScsIFs4ODMwXV0sIFsncHJlY2VxJywgWzEwOTI3XV0sIFsncHJlY25hcHByb3gnLCBbMTA5MzddXSwgWydwcmVjbmVxcScsIFsxMDkzM11dLCBbJ3ByZWNuc2ltJywgWzg5MzZdXSwgWydwcmUnLCBbMTA5MjddXSwgWydwckUnLCBbMTA5MzFdXSwgWydwcmVjc2ltJywgWzg4MzBdXSwgWydwcmltZScsIFs4MjQyXV0sIFsnUHJpbWUnLCBbODI0M11dLCBbJ3ByaW1lcycsIFs4NDczXV0sIFsncHJuYXAnLCBbMTA5MzddXSwgWydwcm5FJywgWzEwOTMzXV0sIFsncHJuc2ltJywgWzg5MzZdXSwgWydwcm9kJywgWzg3MTldXSwgWydQcm9kdWN0JywgWzg3MTldXSwgWydwcm9mYWxhcicsIFs5MDA2XV0sIFsncHJvZmxpbmUnLCBbODk3OF1dLCBbJ3Byb2ZzdXJmJywgWzg5NzldXSwgWydwcm9wJywgWzg3MzNdXSwgWydQcm9wb3J0aW9uYWwnLCBbODczM11dLCBbJ1Byb3BvcnRpb24nLCBbODc1OV1dLCBbJ3Byb3B0bycsIFs4NzMzXV0sIFsncHJzaW0nLCBbODgzMF1dLCBbJ3BydXJlbCcsIFs4ODgwXV0sIFsnUHNjcicsIFsxMTk5NzldXSwgWydwc2NyJywgWzEyMDAwNV1dLCBbJ1BzaScsIFs5MzZdXSwgWydwc2knLCBbOTY4XV0sIFsncHVuY3NwJywgWzgyMDBdXSwgWydRZnInLCBbMTIwMDg0XV0sIFsncWZyJywgWzEyMDExMF1dLCBbJ3FpbnQnLCBbMTA3NjRdXSwgWydxb3BmJywgWzEyMDE2Ml1dLCBbJ1FvcGYnLCBbODQ3NF1dLCBbJ3FwcmltZScsIFs4Mjc5XV0sIFsnUXNjcicsIFsxMTk5ODBdXSwgWydxc2NyJywgWzEyMDAwNl1dLCBbJ3F1YXRlcm5pb25zJywgWzg0NjFdXSwgWydxdWF0aW50JywgWzEwNzc0XV0sIFsncXVlc3QnLCBbNjNdXSwgWydxdWVzdGVxJywgWzg3OTldXSwgWydxdW90JywgWzM0XV0sIFsnUVVPVCcsIFszNF1dLCBbJ3JBYXJyJywgWzg2NjddXSwgWydyYWNlJywgWzg3NjUsIDgxN11dLCBbJ1JhY3V0ZScsIFszNDBdXSwgWydyYWN1dGUnLCBbMzQxXV0sIFsncmFkaWMnLCBbODczMF1dLCBbJ3JhZW1wdHl2JywgWzEwNjc1XV0sIFsncmFuZycsIFsxMDIxN11dLCBbJ1JhbmcnLCBbMTAyMTldXSwgWydyYW5nZCcsIFsxMDY0Ml1dLCBbJ3JhbmdlJywgWzEwNjYxXV0sIFsncmFuZ2xlJywgWzEwMjE3XV0sIFsncmFxdW8nLCBbMTg3XV0sIFsncmFycmFwJywgWzEwNjEzXV0sIFsncmFycmInLCBbODY3N11dLCBbJ3JhcnJiZnMnLCBbMTA1MjhdXSwgWydyYXJyYycsIFsxMDU0N11dLCBbJ3JhcnInLCBbODU5NF1dLCBbJ1JhcnInLCBbODYwOF1dLCBbJ3JBcnInLCBbODY1OF1dLCBbJ3JhcnJmcycsIFsxMDUyNl1dLCBbJ3JhcnJoaycsIFs4NjE4XV0sIFsncmFycmxwJywgWzg2MjBdXSwgWydyYXJycGwnLCBbMTA1NjVdXSwgWydyYXJyc2ltJywgWzEwNjEyXV0sIFsnUmFycnRsJywgWzEwNTE4XV0sIFsncmFycnRsJywgWzg2MTFdXSwgWydyYXJydycsIFs4NjA1XV0sIFsncmF0YWlsJywgWzEwNTIyXV0sIFsnckF0YWlsJywgWzEwNTI0XV0sIFsncmF0aW8nLCBbODc1OF1dLCBbJ3JhdGlvbmFscycsIFs4NDc0XV0sIFsncmJhcnInLCBbMTA1MDldXSwgWydyQmFycicsIFsxMDUxMV1dLCBbJ1JCYXJyJywgWzEwNTEyXV0sIFsncmJicmsnLCBbMTAwOTldXSwgWydyYnJhY2UnLCBbMTI1XV0sIFsncmJyYWNrJywgWzkzXV0sIFsncmJya2UnLCBbMTA2MzZdXSwgWydyYnJrc2xkJywgWzEwNjM4XV0sIFsncmJya3NsdScsIFsxMDY0MF1dLCBbJ1JjYXJvbicsIFszNDRdXSwgWydyY2Fyb24nLCBbMzQ1XV0sIFsnUmNlZGlsJywgWzM0Ml1dLCBbJ3JjZWRpbCcsIFszNDNdXSwgWydyY2VpbCcsIFs4OTY5XV0sIFsncmN1YicsIFsxMjVdXSwgWydSY3knLCBbMTA1Nl1dLCBbJ3JjeScsIFsxMDg4XV0sIFsncmRjYScsIFsxMDU1MV1dLCBbJ3JkbGRoYXInLCBbMTA2MDFdXSwgWydyZHF1bycsIFs4MjIxXV0sIFsncmRxdW9yJywgWzgyMjFdXSwgWydyZHNoJywgWzg2MjddXSwgWydyZWFsJywgWzg0NzZdXSwgWydyZWFsaW5lJywgWzg0NzVdXSwgWydyZWFscGFydCcsIFs4NDc2XV0sIFsncmVhbHMnLCBbODQ3N11dLCBbJ1JlJywgWzg0NzZdXSwgWydyZWN0JywgWzk2NDVdXSwgWydyZWcnLCBbMTc0XV0sIFsnUkVHJywgWzE3NF1dLCBbJ1JldmVyc2VFbGVtZW50JywgWzg3MTVdXSwgWydSZXZlcnNlRXF1aWxpYnJpdW0nLCBbODY1MV1dLCBbJ1JldmVyc2VVcEVxdWlsaWJyaXVtJywgWzEwNjA3XV0sIFsncmZpc2h0JywgWzEwNjIxXV0sIFsncmZsb29yJywgWzg5NzFdXSwgWydyZnInLCBbMTIwMTExXV0sIFsnUmZyJywgWzg0NzZdXSwgWydySGFyJywgWzEwNTk2XV0sIFsncmhhcmQnLCBbODY0MV1dLCBbJ3JoYXJ1JywgWzg2NDBdXSwgWydyaGFydWwnLCBbMTA2MDRdXSwgWydSaG8nLCBbOTI5XV0sIFsncmhvJywgWzk2MV1dLCBbJ3Job3YnLCBbMTAwOV1dLCBbJ1JpZ2h0QW5nbGVCcmFja2V0JywgWzEwMjE3XV0sIFsnUmlnaHRBcnJvd0JhcicsIFs4Njc3XV0sIFsncmlnaHRhcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRhcnJvdycsIFs4NjU4XV0sIFsnUmlnaHRBcnJvd0xlZnRBcnJvdycsIFs4NjQ0XV0sIFsncmlnaHRhcnJvd3RhaWwnLCBbODYxMV1dLCBbJ1JpZ2h0Q2VpbGluZycsIFs4OTY5XV0sIFsnUmlnaHREb3VibGVCcmFja2V0JywgWzEwMjE1XV0sIFsnUmlnaHREb3duVGVlVmVjdG9yJywgWzEwNTg5XV0sIFsnUmlnaHREb3duVmVjdG9yQmFyJywgWzEwNTgxXV0sIFsnUmlnaHREb3duVmVjdG9yJywgWzg2NDJdXSwgWydSaWdodEZsb29yJywgWzg5NzFdXSwgWydyaWdodGhhcnBvb25kb3duJywgWzg2NDFdXSwgWydyaWdodGhhcnBvb251cCcsIFs4NjQwXV0sIFsncmlnaHRsZWZ0YXJyb3dzJywgWzg2NDRdXSwgWydyaWdodGxlZnRoYXJwb29ucycsIFs4NjUyXV0sIFsncmlnaHRyaWdodGFycm93cycsIFs4NjQ5XV0sIFsncmlnaHRzcXVpZ2Fycm93JywgWzg2MDVdXSwgWydSaWdodFRlZUFycm93JywgWzg2MTRdXSwgWydSaWdodFRlZScsIFs4ODY2XV0sIFsnUmlnaHRUZWVWZWN0b3InLCBbMTA1ODddXSwgWydyaWdodHRocmVldGltZXMnLCBbODkwOF1dLCBbJ1JpZ2h0VHJpYW5nbGVCYXInLCBbMTA3MDRdXSwgWydSaWdodFRyaWFuZ2xlJywgWzg4ODNdXSwgWydSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODg4NV1dLCBbJ1JpZ2h0VXBEb3duVmVjdG9yJywgWzEwNTc1XV0sIFsnUmlnaHRVcFRlZVZlY3RvcicsIFsxMDU4OF1dLCBbJ1JpZ2h0VXBWZWN0b3JCYXInLCBbMTA1ODBdXSwgWydSaWdodFVwVmVjdG9yJywgWzg2MzhdXSwgWydSaWdodFZlY3RvckJhcicsIFsxMDU3OV1dLCBbJ1JpZ2h0VmVjdG9yJywgWzg2NDBdXSwgWydyaW5nJywgWzczMF1dLCBbJ3Jpc2luZ2RvdHNlcScsIFs4Nzg3XV0sIFsncmxhcnInLCBbODY0NF1dLCBbJ3JsaGFyJywgWzg2NTJdXSwgWydybG0nLCBbODIwN11dLCBbJ3Jtb3VzdGFjaGUnLCBbOTEzN11dLCBbJ3Jtb3VzdCcsIFs5MTM3XV0sIFsncm5taWQnLCBbMTA5OTBdXSwgWydyb2FuZycsIFsxMDIyMV1dLCBbJ3JvYXJyJywgWzg3MDJdXSwgWydyb2JyaycsIFsxMDIxNV1dLCBbJ3JvcGFyJywgWzEwNjMwXV0sIFsncm9wZicsIFsxMjAxNjNdXSwgWydSb3BmJywgWzg0NzddXSwgWydyb3BsdXMnLCBbMTA3OThdXSwgWydyb3RpbWVzJywgWzEwODA1XV0sIFsnUm91bmRJbXBsaWVzJywgWzEwNjA4XV0sIFsncnBhcicsIFs0MV1dLCBbJ3JwYXJndCcsIFsxMDY0NF1dLCBbJ3JwcG9saW50JywgWzEwNzcwXV0sIFsncnJhcnInLCBbODY0OV1dLCBbJ1JyaWdodGFycm93JywgWzg2NjddXSwgWydyc2FxdW8nLCBbODI1MF1dLCBbJ3JzY3InLCBbMTIwMDA3XV0sIFsnUnNjcicsIFs4NDc1XV0sIFsncnNoJywgWzg2MjVdXSwgWydSc2gnLCBbODYyNV1dLCBbJ3JzcWInLCBbOTNdXSwgWydyc3F1bycsIFs4MjE3XV0sIFsncnNxdW9yJywgWzgyMTddXSwgWydydGhyZWUnLCBbODkwOF1dLCBbJ3J0aW1lcycsIFs4OTA2XV0sIFsncnRyaScsIFs5NjU3XV0sIFsncnRyaWUnLCBbODg4NV1dLCBbJ3J0cmlmJywgWzk2NTZdXSwgWydydHJpbHRyaScsIFsxMDcwMl1dLCBbJ1J1bGVEZWxheWVkJywgWzEwNzQwXV0sIFsncnVsdWhhcicsIFsxMDYwMF1dLCBbJ3J4JywgWzg0NzhdXSwgWydTYWN1dGUnLCBbMzQ2XV0sIFsnc2FjdXRlJywgWzM0N11dLCBbJ3NicXVvJywgWzgyMThdXSwgWydzY2FwJywgWzEwOTM2XV0sIFsnU2Nhcm9uJywgWzM1Ml1dLCBbJ3NjYXJvbicsIFszNTNdXSwgWydTYycsIFsxMDk0MF1dLCBbJ3NjJywgWzg4MjddXSwgWydzY2N1ZScsIFs4ODI5XV0sIFsnc2NlJywgWzEwOTI4XV0sIFsnc2NFJywgWzEwOTMyXV0sIFsnU2NlZGlsJywgWzM1MF1dLCBbJ3NjZWRpbCcsIFszNTFdXSwgWydTY2lyYycsIFszNDhdXSwgWydzY2lyYycsIFszNDldXSwgWydzY25hcCcsIFsxMDkzOF1dLCBbJ3NjbkUnLCBbMTA5MzRdXSwgWydzY25zaW0nLCBbODkzN11dLCBbJ3NjcG9saW50JywgWzEwNzcxXV0sIFsnc2NzaW0nLCBbODgzMV1dLCBbJ1NjeScsIFsxMDU3XV0sIFsnc2N5JywgWzEwODldXSwgWydzZG90YicsIFs4ODY1XV0sIFsnc2RvdCcsIFs4OTAxXV0sIFsnc2RvdGUnLCBbMTA4NTRdXSwgWydzZWFyaGsnLCBbMTA1MzNdXSwgWydzZWFycicsIFs4NjAwXV0sIFsnc2VBcnInLCBbODY2NF1dLCBbJ3NlYXJyb3cnLCBbODYwMF1dLCBbJ3NlY3QnLCBbMTY3XV0sIFsnc2VtaScsIFs1OV1dLCBbJ3Nlc3dhcicsIFsxMDUzN11dLCBbJ3NldG1pbnVzJywgWzg3MjZdXSwgWydzZXRtbicsIFs4NzI2XV0sIFsnc2V4dCcsIFsxMDAzOF1dLCBbJ1NmcicsIFsxMjAwODZdXSwgWydzZnInLCBbMTIwMTEyXV0sIFsnc2Zyb3duJywgWzg5OTRdXSwgWydzaGFycCcsIFs5ODM5XV0sIFsnU0hDSGN5JywgWzEwNjVdXSwgWydzaGNoY3knLCBbMTA5N11dLCBbJ1NIY3knLCBbMTA2NF1dLCBbJ3NoY3knLCBbMTA5Nl1dLCBbJ1Nob3J0RG93bkFycm93JywgWzg1OTVdXSwgWydTaG9ydExlZnRBcnJvdycsIFs4NTkyXV0sIFsnc2hvcnRtaWQnLCBbODczOV1dLCBbJ3Nob3J0cGFyYWxsZWwnLCBbODc0MV1dLCBbJ1Nob3J0UmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnU2hvcnRVcEFycm93JywgWzg1OTNdXSwgWydzaHknLCBbMTczXV0sIFsnU2lnbWEnLCBbOTMxXV0sIFsnc2lnbWEnLCBbOTYzXV0sIFsnc2lnbWFmJywgWzk2Ml1dLCBbJ3NpZ21hdicsIFs5NjJdXSwgWydzaW0nLCBbODc2NF1dLCBbJ3NpbWRvdCcsIFsxMDg1OF1dLCBbJ3NpbWUnLCBbODc3MV1dLCBbJ3NpbWVxJywgWzg3NzFdXSwgWydzaW1nJywgWzEwOTEwXV0sIFsnc2ltZ0UnLCBbMTA5MTJdXSwgWydzaW1sJywgWzEwOTA5XV0sIFsnc2ltbEUnLCBbMTA5MTFdXSwgWydzaW1uZScsIFs4Nzc0XV0sIFsnc2ltcGx1cycsIFsxMDc4OF1dLCBbJ3NpbXJhcnInLCBbMTA2MTBdXSwgWydzbGFycicsIFs4NTkyXV0sIFsnU21hbGxDaXJjbGUnLCBbODcyOF1dLCBbJ3NtYWxsc2V0bWludXMnLCBbODcyNl1dLCBbJ3NtYXNocCcsIFsxMDgwM11dLCBbJ3NtZXBhcnNsJywgWzEwNzI0XV0sIFsnc21pZCcsIFs4NzM5XV0sIFsnc21pbGUnLCBbODk5NV1dLCBbJ3NtdCcsIFsxMDkyMl1dLCBbJ3NtdGUnLCBbMTA5MjRdXSwgWydzbXRlcycsIFsxMDkyNCwgNjUwMjRdXSwgWydTT0ZUY3knLCBbMTA2OF1dLCBbJ3NvZnRjeScsIFsxMTAwXV0sIFsnc29sYmFyJywgWzkwMjNdXSwgWydzb2xiJywgWzEwNjkyXV0sIFsnc29sJywgWzQ3XV0sIFsnU29wZicsIFsxMjAxMzhdXSwgWydzb3BmJywgWzEyMDE2NF1dLCBbJ3NwYWRlcycsIFs5ODI0XV0sIFsnc3BhZGVzdWl0JywgWzk4MjRdXSwgWydzcGFyJywgWzg3NDFdXSwgWydzcWNhcCcsIFs4ODUxXV0sIFsnc3FjYXBzJywgWzg4NTEsIDY1MDI0XV0sIFsnc3FjdXAnLCBbODg1Ml1dLCBbJ3NxY3VwcycsIFs4ODUyLCA2NTAyNF1dLCBbJ1NxcnQnLCBbODczMF1dLCBbJ3Nxc3ViJywgWzg4NDddXSwgWydzcXN1YmUnLCBbODg0OV1dLCBbJ3Nxc3Vic2V0JywgWzg4NDddXSwgWydzcXN1YnNldGVxJywgWzg4NDldXSwgWydzcXN1cCcsIFs4ODQ4XV0sIFsnc3FzdXBlJywgWzg4NTBdXSwgWydzcXN1cHNldCcsIFs4ODQ4XV0sIFsnc3FzdXBzZXRlcScsIFs4ODUwXV0sIFsnc3F1YXJlJywgWzk2MzNdXSwgWydTcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZUludGVyc2VjdGlvbicsIFs4ODUxXV0sIFsnU3F1YXJlU3Vic2V0JywgWzg4NDddXSwgWydTcXVhcmVTdWJzZXRFcXVhbCcsIFs4ODQ5XV0sIFsnU3F1YXJlU3VwZXJzZXQnLCBbODg0OF1dLCBbJ1NxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODg1MF1dLCBbJ1NxdWFyZVVuaW9uJywgWzg4NTJdXSwgWydzcXVhcmYnLCBbOTY0Ml1dLCBbJ3NxdScsIFs5NjMzXV0sIFsnc3F1ZicsIFs5NjQyXV0sIFsnc3JhcnInLCBbODU5NF1dLCBbJ1NzY3InLCBbMTE5OTgyXV0sIFsnc3NjcicsIFsxMjAwMDhdXSwgWydzc2V0bW4nLCBbODcyNl1dLCBbJ3NzbWlsZScsIFs4OTk1XV0sIFsnc3N0YXJmJywgWzg5MDJdXSwgWydTdGFyJywgWzg5MDJdXSwgWydzdGFyJywgWzk3MzRdXSwgWydzdGFyZicsIFs5NzMzXV0sIFsnc3RyYWlnaHRlcHNpbG9uJywgWzEwMTNdXSwgWydzdHJhaWdodHBoaScsIFs5ODFdXSwgWydzdHJucycsIFsxNzVdXSwgWydzdWInLCBbODgzNF1dLCBbJ1N1YicsIFs4OTEyXV0sIFsnc3ViZG90JywgWzEwOTQxXV0sIFsnc3ViRScsIFsxMDk0OV1dLCBbJ3N1YmUnLCBbODgzOF1dLCBbJ3N1YmVkb3QnLCBbMTA5NDddXSwgWydzdWJtdWx0JywgWzEwOTQ1XV0sIFsnc3VibkUnLCBbMTA5NTVdXSwgWydzdWJuZScsIFs4ODQyXV0sIFsnc3VicGx1cycsIFsxMDk0M11dLCBbJ3N1YnJhcnInLCBbMTA2MTddXSwgWydzdWJzZXQnLCBbODgzNF1dLCBbJ1N1YnNldCcsIFs4OTEyXV0sIFsnc3Vic2V0ZXEnLCBbODgzOF1dLCBbJ3N1YnNldGVxcScsIFsxMDk0OV1dLCBbJ1N1YnNldEVxdWFsJywgWzg4MzhdXSwgWydzdWJzZXRuZXEnLCBbODg0Ml1dLCBbJ3N1YnNldG5lcXEnLCBbMTA5NTVdXSwgWydzdWJzaW0nLCBbMTA5NTFdXSwgWydzdWJzdWInLCBbMTA5NjVdXSwgWydzdWJzdXAnLCBbMTA5NjNdXSwgWydzdWNjYXBwcm94JywgWzEwOTM2XV0sIFsnc3VjYycsIFs4ODI3XV0sIFsnc3VjY2N1cmx5ZXEnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzJywgWzg4MjddXSwgWydTdWNjZWVkc0VxdWFsJywgWzEwOTI4XV0sIFsnU3VjY2VlZHNTbGFudEVxdWFsJywgWzg4MjldXSwgWydTdWNjZWVkc1RpbGRlJywgWzg4MzFdXSwgWydzdWNjZXEnLCBbMTA5MjhdXSwgWydzdWNjbmFwcHJveCcsIFsxMDkzOF1dLCBbJ3N1Y2NuZXFxJywgWzEwOTM0XV0sIFsnc3VjY25zaW0nLCBbODkzN11dLCBbJ3N1Y2NzaW0nLCBbODgzMV1dLCBbJ1N1Y2hUaGF0JywgWzg3MTVdXSwgWydzdW0nLCBbODcyMV1dLCBbJ1N1bScsIFs4NzIxXV0sIFsnc3VuZycsIFs5ODM0XV0sIFsnc3VwMScsIFsxODVdXSwgWydzdXAyJywgWzE3OF1dLCBbJ3N1cDMnLCBbMTc5XV0sIFsnc3VwJywgWzg4MzVdXSwgWydTdXAnLCBbODkxM11dLCBbJ3N1cGRvdCcsIFsxMDk0Ml1dLCBbJ3N1cGRzdWInLCBbMTA5NjhdXSwgWydzdXBFJywgWzEwOTUwXV0sIFsnc3VwZScsIFs4ODM5XV0sIFsnc3VwZWRvdCcsIFsxMDk0OF1dLCBbJ1N1cGVyc2V0JywgWzg4MzVdXSwgWydTdXBlcnNldEVxdWFsJywgWzg4MzldXSwgWydzdXBoc29sJywgWzEwMTg1XV0sIFsnc3VwaHN1YicsIFsxMDk2N11dLCBbJ3N1cGxhcnInLCBbMTA2MTldXSwgWydzdXBtdWx0JywgWzEwOTQ2XV0sIFsnc3VwbkUnLCBbMTA5NTZdXSwgWydzdXBuZScsIFs4ODQzXV0sIFsnc3VwcGx1cycsIFsxMDk0NF1dLCBbJ3N1cHNldCcsIFs4ODM1XV0sIFsnU3Vwc2V0JywgWzg5MTNdXSwgWydzdXBzZXRlcScsIFs4ODM5XV0sIFsnc3Vwc2V0ZXFxJywgWzEwOTUwXV0sIFsnc3Vwc2V0bmVxJywgWzg4NDNdXSwgWydzdXBzZXRuZXFxJywgWzEwOTU2XV0sIFsnc3Vwc2ltJywgWzEwOTUyXV0sIFsnc3Vwc3ViJywgWzEwOTY0XV0sIFsnc3Vwc3VwJywgWzEwOTY2XV0sIFsnc3dhcmhrJywgWzEwNTM0XV0sIFsnc3dhcnInLCBbODYwMV1dLCBbJ3N3QXJyJywgWzg2NjVdXSwgWydzd2Fycm93JywgWzg2MDFdXSwgWydzd253YXInLCBbMTA1MzhdXSwgWydzemxpZycsIFsyMjNdXSwgWydUYWInLCBbOV1dLCBbJ3RhcmdldCcsIFs4OTgyXV0sIFsnVGF1JywgWzkzMl1dLCBbJ3RhdScsIFs5NjRdXSwgWyd0YnJrJywgWzkxNDBdXSwgWydUY2Fyb24nLCBbMzU2XV0sIFsndGNhcm9uJywgWzM1N11dLCBbJ1RjZWRpbCcsIFszNTRdXSwgWyd0Y2VkaWwnLCBbMzU1XV0sIFsnVGN5JywgWzEwNThdXSwgWyd0Y3knLCBbMTA5MF1dLCBbJ3Rkb3QnLCBbODQxMV1dLCBbJ3RlbHJlYycsIFs4OTgxXV0sIFsnVGZyJywgWzEyMDA4N11dLCBbJ3RmcicsIFsxMjAxMTNdXSwgWyd0aGVyZTQnLCBbODc1Nl1dLCBbJ3RoZXJlZm9yZScsIFs4NzU2XV0sIFsnVGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGV0YScsIFs5MjBdXSwgWyd0aGV0YScsIFs5NTJdXSwgWyd0aGV0YXN5bScsIFs5NzddXSwgWyd0aGV0YXYnLCBbOTc3XV0sIFsndGhpY2thcHByb3gnLCBbODc3Nl1dLCBbJ3RoaWNrc2ltJywgWzg3NjRdXSwgWydUaGlja1NwYWNlJywgWzgyODcsIDgyMDJdXSwgWydUaGluU3BhY2UnLCBbODIwMV1dLCBbJ3RoaW5zcCcsIFs4MjAxXV0sIFsndGhrYXAnLCBbODc3Nl1dLCBbJ3Roa3NpbScsIFs4NzY0XV0sIFsnVEhPUk4nLCBbMjIyXV0sIFsndGhvcm4nLCBbMjU0XV0sIFsndGlsZGUnLCBbNzMyXV0sIFsnVGlsZGUnLCBbODc2NF1dLCBbJ1RpbGRlRXF1YWwnLCBbODc3MV1dLCBbJ1RpbGRlRnVsbEVxdWFsJywgWzg3NzNdXSwgWydUaWxkZVRpbGRlJywgWzg3NzZdXSwgWyd0aW1lc2JhcicsIFsxMDgwMV1dLCBbJ3RpbWVzYicsIFs4ODY0XV0sIFsndGltZXMnLCBbMjE1XV0sIFsndGltZXNkJywgWzEwODAwXV0sIFsndGludCcsIFs4NzQ5XV0sIFsndG9lYScsIFsxMDUzNl1dLCBbJ3RvcGJvdCcsIFs5MDE0XV0sIFsndG9wY2lyJywgWzEwOTkzXV0sIFsndG9wJywgWzg4NjhdXSwgWydUb3BmJywgWzEyMDEzOV1dLCBbJ3RvcGYnLCBbMTIwMTY1XV0sIFsndG9wZm9yaycsIFsxMDk3MF1dLCBbJ3Rvc2EnLCBbMTA1MzddXSwgWyd0cHJpbWUnLCBbODI0NF1dLCBbJ3RyYWRlJywgWzg0ODJdXSwgWydUUkFERScsIFs4NDgyXV0sIFsndHJpYW5nbGUnLCBbOTY1M11dLCBbJ3RyaWFuZ2xlZG93bicsIFs5NjYzXV0sIFsndHJpYW5nbGVsZWZ0JywgWzk2NjddXSwgWyd0cmlhbmdsZWxlZnRlcScsIFs4ODg0XV0sIFsndHJpYW5nbGVxJywgWzg3OTZdXSwgWyd0cmlhbmdsZXJpZ2h0JywgWzk2NTddXSwgWyd0cmlhbmdsZXJpZ2h0ZXEnLCBbODg4NV1dLCBbJ3RyaWRvdCcsIFs5NzA4XV0sIFsndHJpZScsIFs4Nzk2XV0sIFsndHJpbWludXMnLCBbMTA4MTBdXSwgWydUcmlwbGVEb3QnLCBbODQxMV1dLCBbJ3RyaXBsdXMnLCBbMTA4MDldXSwgWyd0cmlzYicsIFsxMDcwMV1dLCBbJ3RyaXRpbWUnLCBbMTA4MTFdXSwgWyd0cnBleml1bScsIFs5MTg2XV0sIFsnVHNjcicsIFsxMTk5ODNdXSwgWyd0c2NyJywgWzEyMDAwOV1dLCBbJ1RTY3knLCBbMTA2Ml1dLCBbJ3RzY3knLCBbMTA5NF1dLCBbJ1RTSGN5JywgWzEwMzVdXSwgWyd0c2hjeScsIFsxMTE1XV0sIFsnVHN0cm9rJywgWzM1OF1dLCBbJ3RzdHJvaycsIFszNTldXSwgWyd0d2l4dCcsIFs4ODEyXV0sIFsndHdvaGVhZGxlZnRhcnJvdycsIFs4NjA2XV0sIFsndHdvaGVhZHJpZ2h0YXJyb3cnLCBbODYwOF1dLCBbJ1VhY3V0ZScsIFsyMThdXSwgWyd1YWN1dGUnLCBbMjUwXV0sIFsndWFycicsIFs4NTkzXV0sIFsnVWFycicsIFs4NjA3XV0sIFsndUFycicsIFs4NjU3XV0sIFsnVWFycm9jaXInLCBbMTA1NjldXSwgWydVYnJjeScsIFsxMDM4XV0sIFsndWJyY3knLCBbMTExOF1dLCBbJ1VicmV2ZScsIFszNjRdXSwgWyd1YnJldmUnLCBbMzY1XV0sIFsnVWNpcmMnLCBbMjE5XV0sIFsndWNpcmMnLCBbMjUxXV0sIFsnVWN5JywgWzEwNTldXSwgWyd1Y3knLCBbMTA5MV1dLCBbJ3VkYXJyJywgWzg2NDVdXSwgWydVZGJsYWMnLCBbMzY4XV0sIFsndWRibGFjJywgWzM2OV1dLCBbJ3VkaGFyJywgWzEwNjA2XV0sIFsndWZpc2h0JywgWzEwNjIyXV0sIFsnVWZyJywgWzEyMDA4OF1dLCBbJ3VmcicsIFsxMjAxMTRdXSwgWydVZ3JhdmUnLCBbMjE3XV0sIFsndWdyYXZlJywgWzI0OV1dLCBbJ3VIYXInLCBbMTA1OTVdXSwgWyd1aGFybCcsIFs4NjM5XV0sIFsndWhhcnInLCBbODYzOF1dLCBbJ3VoYmxrJywgWzk2MDBdXSwgWyd1bGNvcm4nLCBbODk4OF1dLCBbJ3VsY29ybmVyJywgWzg5ODhdXSwgWyd1bGNyb3AnLCBbODk3NV1dLCBbJ3VsdHJpJywgWzk3MjBdXSwgWydVbWFjcicsIFszNjJdXSwgWyd1bWFjcicsIFszNjNdXSwgWyd1bWwnLCBbMTY4XV0sIFsnVW5kZXJCYXInLCBbOTVdXSwgWydVbmRlckJyYWNlJywgWzkxODNdXSwgWydVbmRlckJyYWNrZXQnLCBbOTE0MV1dLCBbJ1VuZGVyUGFyZW50aGVzaXMnLCBbOTE4MV1dLCBbJ1VuaW9uJywgWzg4OTldXSwgWydVbmlvblBsdXMnLCBbODg0Nl1dLCBbJ1VvZ29uJywgWzM3MF1dLCBbJ3VvZ29uJywgWzM3MV1dLCBbJ1VvcGYnLCBbMTIwMTQwXV0sIFsndW9wZicsIFsxMjAxNjZdXSwgWydVcEFycm93QmFyJywgWzEwNTE0XV0sIFsndXBhcnJvdycsIFs4NTkzXV0sIFsnVXBBcnJvdycsIFs4NTkzXV0sIFsnVXBhcnJvdycsIFs4NjU3XV0sIFsnVXBBcnJvd0Rvd25BcnJvdycsIFs4NjQ1XV0sIFsndXBkb3duYXJyb3cnLCBbODU5N11dLCBbJ1VwRG93bkFycm93JywgWzg1OTddXSwgWydVcGRvd25hcnJvdycsIFs4NjYxXV0sIFsnVXBFcXVpbGlicml1bScsIFsxMDYwNl1dLCBbJ3VwaGFycG9vbmxlZnQnLCBbODYzOV1dLCBbJ3VwaGFycG9vbnJpZ2h0JywgWzg2MzhdXSwgWyd1cGx1cycsIFs4ODQ2XV0sIFsnVXBwZXJMZWZ0QXJyb3cnLCBbODU5OF1dLCBbJ1VwcGVyUmlnaHRBcnJvdycsIFs4NTk5XV0sIFsndXBzaScsIFs5NjVdXSwgWydVcHNpJywgWzk3OF1dLCBbJ3Vwc2loJywgWzk3OF1dLCBbJ1Vwc2lsb24nLCBbOTMzXV0sIFsndXBzaWxvbicsIFs5NjVdXSwgWydVcFRlZUFycm93JywgWzg2MTNdXSwgWydVcFRlZScsIFs4ODY5XV0sIFsndXB1cGFycm93cycsIFs4NjQ4XV0sIFsndXJjb3JuJywgWzg5ODldXSwgWyd1cmNvcm5lcicsIFs4OTg5XV0sIFsndXJjcm9wJywgWzg5NzRdXSwgWydVcmluZycsIFszNjZdXSwgWyd1cmluZycsIFszNjddXSwgWyd1cnRyaScsIFs5NzIxXV0sIFsnVXNjcicsIFsxMTk5ODRdXSwgWyd1c2NyJywgWzEyMDAxMF1dLCBbJ3V0ZG90JywgWzg5NDRdXSwgWydVdGlsZGUnLCBbMzYwXV0sIFsndXRpbGRlJywgWzM2MV1dLCBbJ3V0cmknLCBbOTY1M11dLCBbJ3V0cmlmJywgWzk2NTJdXSwgWyd1dWFycicsIFs4NjQ4XV0sIFsnVXVtbCcsIFsyMjBdXSwgWyd1dW1sJywgWzI1Ml1dLCBbJ3V3YW5nbGUnLCBbMTA2NjNdXSwgWyd2YW5ncnQnLCBbMTA2NTJdXSwgWyd2YXJlcHNpbG9uJywgWzEwMTNdXSwgWyd2YXJrYXBwYScsIFsxMDA4XV0sIFsndmFybm90aGluZycsIFs4NzA5XV0sIFsndmFycGhpJywgWzk4MV1dLCBbJ3ZhcnBpJywgWzk4Ml1dLCBbJ3ZhcnByb3B0bycsIFs4NzMzXV0sIFsndmFycicsIFs4NTk3XV0sIFsndkFycicsIFs4NjYxXV0sIFsndmFycmhvJywgWzEwMDldXSwgWyd2YXJzaWdtYScsIFs5NjJdXSwgWyd2YXJzdWJzZXRuZXEnLCBbODg0MiwgNjUwMjRdXSwgWyd2YXJzdWJzZXRuZXFxJywgWzEwOTU1LCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcScsIFs4ODQzLCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcXEnLCBbMTA5NTYsIDY1MDI0XV0sIFsndmFydGhldGEnLCBbOTc3XV0sIFsndmFydHJpYW5nbGVsZWZ0JywgWzg4ODJdXSwgWyd2YXJ0cmlhbmdsZXJpZ2h0JywgWzg4ODNdXSwgWyd2QmFyJywgWzEwOTg0XV0sIFsnVmJhcicsIFsxMDk4N11dLCBbJ3ZCYXJ2JywgWzEwOTg1XV0sIFsnVmN5JywgWzEwNDJdXSwgWyd2Y3knLCBbMTA3NF1dLCBbJ3ZkYXNoJywgWzg4NjZdXSwgWyd2RGFzaCcsIFs4ODcyXV0sIFsnVmRhc2gnLCBbODg3M11dLCBbJ1ZEYXNoJywgWzg4NzVdXSwgWydWZGFzaGwnLCBbMTA5ODJdXSwgWyd2ZWViYXInLCBbODg5MV1dLCBbJ3ZlZScsIFs4NzQ0XV0sIFsnVmVlJywgWzg4OTddXSwgWyd2ZWVlcScsIFs4Nzk0XV0sIFsndmVsbGlwJywgWzg5NDJdXSwgWyd2ZXJiYXInLCBbMTI0XV0sIFsnVmVyYmFyJywgWzgyMTRdXSwgWyd2ZXJ0JywgWzEyNF1dLCBbJ1ZlcnQnLCBbODIxNF1dLCBbJ1ZlcnRpY2FsQmFyJywgWzg3MzldXSwgWydWZXJ0aWNhbExpbmUnLCBbMTI0XV0sIFsnVmVydGljYWxTZXBhcmF0b3InLCBbMTAwNzJdXSwgWydWZXJ0aWNhbFRpbGRlJywgWzg3NjhdXSwgWydWZXJ5VGhpblNwYWNlJywgWzgyMDJdXSwgWydWZnInLCBbMTIwMDg5XV0sIFsndmZyJywgWzEyMDExNV1dLCBbJ3ZsdHJpJywgWzg4ODJdXSwgWyd2bnN1YicsIFs4ODM0LCA4NDAyXV0sIFsndm5zdXAnLCBbODgzNSwgODQwMl1dLCBbJ1ZvcGYnLCBbMTIwMTQxXV0sIFsndm9wZicsIFsxMjAxNjddXSwgWyd2cHJvcCcsIFs4NzMzXV0sIFsndnJ0cmknLCBbODg4M11dLCBbJ1ZzY3InLCBbMTE5OTg1XV0sIFsndnNjcicsIFsxMjAwMTFdXSwgWyd2c3VibkUnLCBbMTA5NTUsIDY1MDI0XV0sIFsndnN1Ym5lJywgWzg4NDIsIDY1MDI0XV0sIFsndnN1cG5FJywgWzEwOTU2LCA2NTAyNF1dLCBbJ3ZzdXBuZScsIFs4ODQzLCA2NTAyNF1dLCBbJ1Z2ZGFzaCcsIFs4ODc0XV0sIFsndnppZ3phZycsIFsxMDY1MF1dLCBbJ1djaXJjJywgWzM3Ml1dLCBbJ3djaXJjJywgWzM3M11dLCBbJ3dlZGJhcicsIFsxMDg0N11dLCBbJ3dlZGdlJywgWzg3NDNdXSwgWydXZWRnZScsIFs4ODk2XV0sIFsnd2VkZ2VxJywgWzg3OTNdXSwgWyd3ZWllcnAnLCBbODQ3Ml1dLCBbJ1dmcicsIFsxMjAwOTBdXSwgWyd3ZnInLCBbMTIwMTE2XV0sIFsnV29wZicsIFsxMjAxNDJdXSwgWyd3b3BmJywgWzEyMDE2OF1dLCBbJ3dwJywgWzg0NzJdXSwgWyd3cicsIFs4NzY4XV0sIFsnd3JlYXRoJywgWzg3NjhdXSwgWydXc2NyJywgWzExOTk4Nl1dLCBbJ3dzY3InLCBbMTIwMDEyXV0sIFsneGNhcCcsIFs4ODk4XV0sIFsneGNpcmMnLCBbOTcxMV1dLCBbJ3hjdXAnLCBbODg5OV1dLCBbJ3hkdHJpJywgWzk2NjFdXSwgWydYZnInLCBbMTIwMDkxXV0sIFsneGZyJywgWzEyMDExN11dLCBbJ3hoYXJyJywgWzEwMjMxXV0sIFsneGhBcnInLCBbMTAyMzRdXSwgWydYaScsIFs5MjZdXSwgWyd4aScsIFs5NThdXSwgWyd4bGFycicsIFsxMDIyOV1dLCBbJ3hsQXJyJywgWzEwMjMyXV0sIFsneG1hcCcsIFsxMDIzNl1dLCBbJ3huaXMnLCBbODk1NV1dLCBbJ3hvZG90JywgWzEwNzUyXV0sIFsnWG9wZicsIFsxMjAxNDNdXSwgWyd4b3BmJywgWzEyMDE2OV1dLCBbJ3hvcGx1cycsIFsxMDc1M11dLCBbJ3hvdGltZScsIFsxMDc1NF1dLCBbJ3hyYXJyJywgWzEwMjMwXV0sIFsneHJBcnInLCBbMTAyMzNdXSwgWydYc2NyJywgWzExOTk4N11dLCBbJ3hzY3InLCBbMTIwMDEzXV0sIFsneHNxY3VwJywgWzEwNzU4XV0sIFsneHVwbHVzJywgWzEwNzU2XV0sIFsneHV0cmknLCBbOTY1MV1dLCBbJ3h2ZWUnLCBbODg5N11dLCBbJ3h3ZWRnZScsIFs4ODk2XV0sIFsnWWFjdXRlJywgWzIyMV1dLCBbJ3lhY3V0ZScsIFsyNTNdXSwgWydZQWN5JywgWzEwNzFdXSwgWyd5YWN5JywgWzExMDNdXSwgWydZY2lyYycsIFszNzRdXSwgWyd5Y2lyYycsIFszNzVdXSwgWydZY3knLCBbMTA2N11dLCBbJ3ljeScsIFsxMDk5XV0sIFsneWVuJywgWzE2NV1dLCBbJ1lmcicsIFsxMjAwOTJdXSwgWyd5ZnInLCBbMTIwMTE4XV0sIFsnWUljeScsIFsxMDMxXV0sIFsneWljeScsIFsxMTExXV0sIFsnWW9wZicsIFsxMjAxNDRdXSwgWyd5b3BmJywgWzEyMDE3MF1dLCBbJ1lzY3InLCBbMTE5OTg4XV0sIFsneXNjcicsIFsxMjAwMTRdXSwgWydZVWN5JywgWzEwNzBdXSwgWyd5dWN5JywgWzExMDJdXSwgWyd5dW1sJywgWzI1NV1dLCBbJ1l1bWwnLCBbMzc2XV0sIFsnWmFjdXRlJywgWzM3N11dLCBbJ3phY3V0ZScsIFszNzhdXSwgWydaY2Fyb24nLCBbMzgxXV0sIFsnemNhcm9uJywgWzM4Ml1dLCBbJ1pjeScsIFsxMDQ3XV0sIFsnemN5JywgWzEwNzldXSwgWydaZG90JywgWzM3OV1dLCBbJ3pkb3QnLCBbMzgwXV0sIFsnemVldHJmJywgWzg0ODhdXSwgWydaZXJvV2lkdGhTcGFjZScsIFs4MjAzXV0sIFsnWmV0YScsIFs5MThdXSwgWyd6ZXRhJywgWzk1MF1dLCBbJ3pmcicsIFsxMjAxMTldXSwgWydaZnInLCBbODQ4OF1dLCBbJ1pIY3knLCBbMTA0Nl1dLCBbJ3poY3knLCBbMTA3OF1dLCBbJ3ppZ3JhcnInLCBbODY2OV1dLCBbJ3pvcGYnLCBbMTIwMTcxXV0sIFsnWm9wZicsIFs4NDg0XV0sIFsnWnNjcicsIFsxMTk5ODldXSwgWyd6c2NyJywgWzEyMDAxNV1dLCBbJ3p3aicsIFs4MjA1XV0sIFsnenduaicsIFs4MjA0XV1dO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIGNoYXJJbmRleCA9IHt9O1xuXG5jcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCk7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw1RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtzdHIuY2hhckNvZGVBdChpKV07XG4gICAgICAgIGlmIChjaGFySW5mbykge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gY2hhckluZm9bc3RyLmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBjaGFySW5mb1snJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtjXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjIDwgMzIgfHwgYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrK1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYWxwaGFJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtPYmplY3R9IGNoYXJJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCkge1xuICAgIHZhciBpID0gRU5USVRJRVMubGVuZ3RoO1xuICAgIHZhciBfcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGUgPSBFTlRJVElFU1tpXTtcbiAgICAgICAgdmFyIGFscGhhID0gZVswXTtcbiAgICAgICAgdmFyIGNoYXJzID0gZVsxXTtcbiAgICAgICAgdmFyIGNociA9IGNoYXJzWzBdO1xuICAgICAgICB2YXIgYWRkQ2hhciA9IChjaHIgPCAzMiB8fCBjaHIgPiAxMjYpIHx8IGNociA9PT0gNjIgfHwgY2hyID09PSA2MCB8fCBjaHIgPT09IDM4IHx8IGNociA9PT0gMzQgfHwgY2hyID09PSAzOTtcbiAgICAgICAgdmFyIGNoYXJJbmZvO1xuICAgICAgICBpZiAoYWRkQ2hhcikge1xuICAgICAgICAgICAgY2hhckluZm8gPSBjaGFySW5kZXhbY2hyXSA9IGNoYXJJbmRleFtjaHJdIHx8IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyc1sxXSkge1xuICAgICAgICAgICAgdmFyIGNocjIgPSBjaGFyc1sxXTtcbiAgICAgICAgICAgIGFscGhhSW5kZXhbYWxwaGFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bY2hyMl0gPSBhbHBoYSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGFkZENoYXIgJiYgKGNoYXJJbmZvWycnXSA9IGFscGhhKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSHRtbDVFbnRpdGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNS1lbnRpdGllcy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBzaXplcyA9IHtcbiAgZ2lhbnQ6IDExNzAsXG4gIGRlc2t0b3A6IDk5MixcbiAgdGFibGV0OiA3NjgsXG4gIGJ0d25UYWJsZXRBbmRNb2JpbGU6IDY4NSxcbiAgbW9iaWxlOiA0NTBcbn1cblxuY29uc3QgbWVkaWFRdWVyeSA9IE9iamVjdC5rZXlzKHNpemVzKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBsYWJlbCkgPT4ge1xuICAvLyB1c2UgZW0gaW4gYnJlYWtwb2ludHMgdG8gd29yayBwcm9wZXJseSBjcm9zcy1icm93c2VyIGFuZCBzdXBwb3J0IHVzZXJzXG4gIC8vIGNoYW5naW5nIHRoZWlyIGJyb3dzZXJzIGZvbnQtc2l6ZTogaHR0cHM6Ly96ZWxsd2suY29tL2Jsb2cvbWVkaWEtcXVlcnktdW5pdHMvXG4gIGNvbnN0IGVtU2l6ZSA9IHNpemVzW2xhYmVsXSAvIDE2XG4gIGFjY3VtdWxhdG9yW2xhYmVsXSA9ICguLi5hcmdzKSA9PiBjc3NgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7ZW1TaXplfWVtKSB7XG4gICAgICAke2NzcyguLi5hcmdzKX1cbiAgICB9XG4gIGBcbiAgcmV0dXJuIGFjY3VtdWxhdG9yXG59LCB7fSlcblxuZXhwb3J0IGRlZmF1bHQgbWVkaWFRdWVyeVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL21lZGlhUXVlcnkuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoeXBoZW5hdGUgPSByZXF1aXJlKCcuL2h5cGhlbmF0ZScpO1xuXG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuXG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkb0hhc2g7XG4vLyBtdXJtdXJoYXNoMiB2aWEgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcmF5Y21vcmdhbi81ODg0MjNcblxuZnVuY3Rpb24gZG9IYXNoKHN0ciwgc2VlZCkge1xuICB2YXIgbSA9IDB4NWJkMWU5OTU7XG4gIHZhciByID0gMjQ7XG4gIHZhciBoID0gc2VlZCBeIHN0ci5sZW5ndGg7XG4gIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoO1xuICB2YXIgY3VycmVudEluZGV4ID0gMDtcblxuICB3aGlsZSAobGVuZ3RoID49IDQpIHtcbiAgICB2YXIgayA9IFVJbnQzMihzdHIsIGN1cnJlbnRJbmRleCk7XG5cbiAgICBrID0gVW11bDMyKGssIG0pO1xuICAgIGsgXj0gayA+Pj4gcjtcbiAgICBrID0gVW11bDMyKGssIG0pO1xuXG4gICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICBoIF49IGs7XG5cbiAgICBjdXJyZW50SW5kZXggKz0gNDtcbiAgICBsZW5ndGggLT0gNDtcbiAgfVxuXG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSBVSW50MTYoc3RyLCBjdXJyZW50SW5kZXgpO1xuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChjdXJyZW50SW5kZXggKyAyKSA8PCAxNjtcbiAgICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gVUludDE2KHN0ciwgY3VycmVudEluZGV4KTtcbiAgICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoY3VycmVudEluZGV4KTtcbiAgICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPSBVbXVsMzIoaCwgbSk7XG4gIGggXj0gaCA+Pj4gMTU7XG5cbiAgcmV0dXJuIGggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIFVJbnQzMihzdHIsIHBvcykge1xuICByZXR1cm4gc3RyLmNoYXJDb2RlQXQocG9zKyspICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCA4KSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgMTYpICsgKHN0ci5jaGFyQ29kZUF0KHBvcykgPDwgMjQpO1xufVxuXG5mdW5jdGlvbiBVSW50MTYoc3RyLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KHBvcysrKSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgOCk7XG59XG5cbmZ1bmN0aW9uIFVtdWwzMihuLCBtKSB7XG4gIG4gPSBuIHwgMDtcbiAgbSA9IG0gfCAwO1xuICB2YXIgbmxvID0gbiAmIDB4ZmZmZjtcbiAgdmFyIG5oaSA9IG4gPj4+IDE2O1xuICB2YXIgcmVzID0gbmxvICogbSArICgobmhpICogbSAmIDB4ZmZmZikgPDwgMTYpIHwgMDtcbiAgcmV0dXJuIHJlcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9oYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7IFwiV2Via2l0XCI6IHsgXCJ0cmFuc2Zvcm1cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiB0cnVlLCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiB0cnVlLCBcInBlcnNwZWN0aXZlXCI6IHRydWUsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblpcIjogdHJ1ZSwgXCJhbmltYXRpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25EZWxheVwiOiB0cnVlLCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IHRydWUsIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiB0cnVlLCBcImFuaW1hdGlvbk5hbWVcIjogdHJ1ZSwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogdHJ1ZSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiB0cnVlLCBcImFwcGVhcmFuY2VcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwiZm9udEtlcm5pbmdcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiB0cnVlLCBcInRleHRFbXBoYXNpc1wiOiB0cnVlLCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogdHJ1ZSwgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogdHJ1ZSwgXCJjbGlwUGF0aFwiOiB0cnVlLCBcIm1hc2tJbWFnZVwiOiB0cnVlLCBcIm1hc2tNb2RlXCI6IHRydWUsIFwibWFza1JlcGVhdFwiOiB0cnVlLCBcIm1hc2tQb3NpdGlvblwiOiB0cnVlLCBcIm1hc2tDbGlwXCI6IHRydWUsIFwibWFza09yaWdpblwiOiB0cnVlLCBcIm1hc2tTaXplXCI6IHRydWUsIFwibWFza0NvbXBvc2l0ZVwiOiB0cnVlLCBcIm1hc2tcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyU291cmNlXCI6IHRydWUsIFwibWFza0JvcmRlck1vZGVcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyV2lkdGhcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IHRydWUsIFwibWFza0JvcmRlclJlcGVhdFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJcIjogdHJ1ZSwgXCJtYXNrVHlwZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IHRydWUsIFwiZmlsdGVyXCI6IHRydWUsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwiY29sdW1uQ291bnRcIjogdHJ1ZSwgXCJjb2x1bW5GaWxsXCI6IHRydWUsIFwiY29sdW1uR2FwXCI6IHRydWUsIFwiY29sdW1uUnVsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVDb2xvclwiOiB0cnVlLCBcImNvbHVtblJ1bGVTdHlsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVXaWR0aFwiOiB0cnVlLCBcImNvbHVtbnNcIjogdHJ1ZSwgXCJjb2x1bW5TcGFuXCI6IHRydWUsIFwiY29sdW1uV2lkdGhcIjogdHJ1ZSwgXCJmbGV4XCI6IHRydWUsIFwiZmxleEJhc2lzXCI6IHRydWUsIFwiZmxleERpcmVjdGlvblwiOiB0cnVlLCBcImZsZXhHcm93XCI6IHRydWUsIFwiZmxleEZsb3dcIjogdHJ1ZSwgXCJmbGV4U2hyaW5rXCI6IHRydWUsIFwiZmxleFdyYXBcIjogdHJ1ZSwgXCJhbGlnbkNvbnRlbnRcIjogdHJ1ZSwgXCJhbGlnbkl0ZW1zXCI6IHRydWUsIFwiYWxpZ25TZWxmXCI6IHRydWUsIFwianVzdGlmeUNvbnRlbnRcIjogdHJ1ZSwgXCJvcmRlclwiOiB0cnVlLCBcInRyYW5zaXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSwgXCJiYWNrZHJvcEZpbHRlclwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiB0cnVlLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogdHJ1ZSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmbG93SW50b1wiOiB0cnVlLCBcImZsb3dGcm9tXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlIH0sIFwiTW96XCI6IHsgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImJveFNpemluZ1wiOiB0cnVlLCBcInRleHRBbGlnbkxhc3RcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcInRhYlNpemVcIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwiY29sdW1uQ291bnRcIjogdHJ1ZSwgXCJjb2x1bW5GaWxsXCI6IHRydWUsIFwiY29sdW1uR2FwXCI6IHRydWUsIFwiY29sdW1uUnVsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVDb2xvclwiOiB0cnVlLCBcImNvbHVtblJ1bGVTdHlsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVXaWR0aFwiOiB0cnVlLCBcImNvbHVtbnNcIjogdHJ1ZSwgXCJjb2x1bW5TcGFuXCI6IHRydWUsIFwiY29sdW1uV2lkdGhcIjogdHJ1ZSB9LCBcIm1zXCI6IHsgXCJmbGV4XCI6IHRydWUsIFwiZmxleEJhc2lzXCI6IGZhbHNlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiBmYWxzZSwgXCJmbGV4Rmxvd1wiOiB0cnVlLCBcImZsZXhTaHJpbmtcIjogZmFsc2UsIFwiZmxleFdyYXBcIjogdHJ1ZSwgXCJhbGlnbkNvbnRlbnRcIjogZmFsc2UsIFwiYWxpZ25JdGVtc1wiOiBmYWxzZSwgXCJhbGlnblNlbGZcIjogZmFsc2UsIFwianVzdGlmeUNvbnRlbnRcIjogZmFsc2UsIFwib3JkZXJcIjogZmFsc2UsIFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwid3JhcEZsb3dcIjogdHJ1ZSwgXCJ3cmFwVGhyb3VnaFwiOiB0cnVlLCBcIndyYXBNYXJnaW5cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInRvdWNoQWN0aW9uXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZsb3dJbnRvXCI6IHRydWUsIFwiZmxvd0Zyb21cIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVJvd3NcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVwiOiB0cnVlLCBcImdyaWRBdXRvQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRBdXRvUm93c1wiOiB0cnVlLCBcImdyaWRBdXRvRmxvd1wiOiB0cnVlLCBcImdyaWRcIjogdHJ1ZSwgXCJncmlkUm93U3RhcnRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uU3RhcnRcIjogdHJ1ZSwgXCJncmlkUm93RW5kXCI6IHRydWUsIFwiZ3JpZFJvd1wiOiB0cnVlLCBcImdyaWRDb2x1bW5cIjogdHJ1ZSwgXCJncmlkQ29sdW1uRW5kXCI6IHRydWUsIFwiZ3JpZENvbHVtbkdhcFwiOiB0cnVlLCBcImdyaWRSb3dHYXBcIjogdHJ1ZSwgXCJncmlkQXJlYVwiOiB0cnVlLCBcImdyaWRHYXBcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlIH0gfTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3ByZWZpeFByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBoZWxwZXIgdG8gY2FwaXRhbGl6ZSBzdHJpbmdzXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvY2FwaXRhbGl6ZVN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIi8qIVxuICogaXMtcGxhaW4tb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcblxuZnVuY3Rpb24gaXNPYmplY3RPYmplY3Qobykge1xuICByZXR1cm4gaXNPYmplY3QobykgPT09IHRydWVcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICB2YXIgY3Rvcixwcm90O1xuICBcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICBcbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcbiAgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuICBpZiAoaXNPYmplY3RPYmplY3QocHJvdCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1wbGFpbi1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcGFyc2UgPSByZXF1aXJlKCcuLi92ZW5kb3IvcG9zdGNzcy1zYWZlLXBhcnNlci9wYXJzZScpO1xuXG52YXIgX3BhcnNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlKTtcblxudmFyIF9wb3N0Y3NzTmVzdGVkID0gcmVxdWlyZSgnLi4vdmVuZG9yL3Bvc3Rjc3MtbmVzdGVkJyk7XG5cbnZhciBfcG9zdGNzc05lc3RlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3N0Y3NzTmVzdGVkKTtcblxudmFyIF9mbGF0dGVuID0gcmVxdWlyZSgnLi4vdXRpbHMvZmxhdHRlbicpO1xuXG52YXIgX2ZsYXR0ZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxhdHRlbik7XG5cbnZhciBfU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vU3R5bGVTaGVldCcpO1xuXG52YXIgX1N0eWxlU2hlZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVTaGVldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0IHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIENvbXBvbmVudFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnRTdHlsZShydWxlcywgc2VsZWN0b3IpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50U3R5bGUpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb21wb25lbnRTdHlsZSwgW3tcbiAgICBrZXk6ICdnZW5lcmF0ZUFuZEluamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0KCkge1xuICAgICAgaWYgKCFfU3R5bGVTaGVldDIuZGVmYXVsdC5pbmplY3RlZCkgX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5qZWN0KCk7XG4gICAgICB2YXIgZmxhdENTUyA9ICgwLCBfZmxhdHRlbjIuZGVmYXVsdCkodGhpcy5ydWxlcykuam9pbignJyk7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rvcikge1xuICAgICAgICBmbGF0Q1NTID0gdGhpcy5zZWxlY3RvciArICcgeycgKyBmbGF0Q1NTICsgJ1xcbn0nO1xuICAgICAgfVxuICAgICAgdmFyIHJvb3QgPSAoMCwgX3BhcnNlMi5kZWZhdWx0KShmbGF0Q1NTKTtcbiAgICAgICgwLCBfcG9zdGNzc05lc3RlZDIuZGVmYXVsdCkocm9vdCk7XG4gICAgICBfU3R5bGVTaGVldDIuZGVmYXVsdC5pbnNlcnQocm9vdC50b1Jlc3VsdCgpLmNzcywgeyBnbG9iYWw6IHRydWUgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudFN0eWxlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnRTdHlsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL0dsb2JhbFN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4vKiBXcmFwcyBnbGFtb3IncyBzdHlsZXNoZWV0IGFuZCBleHBvcnRzIGEgc2luZ2xldG9uIGZvciBzdHlsZWQgY29tcG9uZW50c1xudG8gdXNlLiAqL1xuXG5cbnZhciBfc2hlZXQgPSByZXF1aXJlKCcuLi92ZW5kb3IvZ2xhbW9yL3NoZWV0Jyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9HbGFtb3JJbnNlcnRlZFJ1bGUgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0dsYW1vckluc2VydGVkUnVsZSB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9HbGFtb3JSdWxlID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9HbGFtb3JSdWxlIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIFN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlU2hlZXQpO1xuXG4gICAgLyogRG9uJ3Qgc3BlY2lmeSBhIG1heExlbmd0aCBmb3IgdGhlIGdsb2JhbCBzaGVldCwgc2luY2UgdGhlc2UgcnVsZXNcbiAgICAgKiBhcmUgZGVmaW5lZCBhdCBpbml0aWFsaXphdGlvbiBhbmQgc2hvdWxkIHJlbWFpbiBzdGF0aWMgYWZ0ZXIgdGhhdCAqL1xuICAgIHRoaXMuZ2xvYmFsU3R5bGVTaGVldCA9IG5ldyBfc2hlZXQuU3R5bGVTaGVldCh7IHNwZWVkeTogZmFsc2UgfSk7XG4gICAgdGhpcy5jb21wb25lbnRTdHlsZVNoZWV0ID0gbmV3IF9zaGVldC5TdHlsZVNoZWV0KHsgc3BlZWR5OiBmYWxzZSwgbWF4TGVuZ3RoOiA0MCB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogJ2luamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluamVjdCgpIHtcbiAgICAgIHRoaXMuZ2xvYmFsU3R5bGVTaGVldC5pbmplY3QoKTtcbiAgICAgIHRoaXMuY29tcG9uZW50U3R5bGVTaGVldC5pbmplY3QoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmbHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsU3R5bGVTaGVldC5zaGVldCkgdGhpcy5nbG9iYWxTdHlsZVNoZWV0LmZsdXNoKCk7XG4gICAgICBpZiAodGhpcy5jb21wb25lbnRTdHlsZVNoZWV0LnNoZWV0KSB0aGlzLmNvbXBvbmVudFN0eWxlU2hlZXQuZmx1c2goKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbnNlcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHsgZ2xvYmFsOiBmYWxzZSB9O1xuXG4gICAgICB2YXIgc2hlZXQgPSBvcHRzLmdsb2JhbCA/IHRoaXMuZ2xvYmFsU3R5bGVTaGVldCA6IHRoaXMuY29tcG9uZW50U3R5bGVTaGVldDtcbiAgICAgIHJldHVybiBzaGVldC5pbnNlcnQocnVsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncnVsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydWxlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbFN0eWxlU2hlZXQucnVsZXMoKS5jb25jYXQodGhpcy5jb21wb25lbnRTdHlsZVNoZWV0LnJ1bGVzKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luamVjdGVkJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbFN0eWxlU2hlZXQuaW5qZWN0ZWQgJiYgdGhpcy5jb21wb25lbnRTdHlsZVNoZWV0LmluamVjdGVkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG4vKiBFeHBvcnQgc3R5bGVzaGVldCBhcyBhIHNpbmdsZXRvbiBjbGFzcyAqL1xuXG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBTdHlsZVNoZWV0KCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9TdHlsZVNoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLmV4cG9ydHMsIFwiYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfQnJvYWRjYXN0XCIsIHtcbiAgdmFsdWU6IHJlcXVpcmUoXCJyZWFjdFwiKS5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIHB1Ymxpc2g6IHJlcXVpcmUoXCJyZWFjdFwiKS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHN1YnNjcmliZTogcmVxdWlyZShcInJlYWN0XCIpLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSlcbn0pO1xuLyoqXG4gKiBDcmVhdGVzIGEgYnJvYWRjYXN0IHRoYXQgY2FuIGJlIGxpc3RlbmVkIHRvLCBpLmUuIHNpbXBsZSBldmVudCBlbWl0dGVyXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9yZWFjdC1icm9hZGNhc3RcbiAqL1xuXG52YXIgY3JlYXRlQnJvYWRjYXN0ID0gZnVuY3Rpb24gY3JlYXRlQnJvYWRjYXN0KGluaXRpYWxWYWx1ZSkge1xuICB2YXIgbGlzdGVuZXJzID0gW107XG4gIHZhciBjdXJyZW50VmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cbiAgcmV0dXJuIHtcbiAgICBwdWJsaXNoOiBmdW5jdGlvbiBwdWJsaXNoKHZhbHVlKSB7XG4gICAgICBjdXJyZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoY3VycmVudFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgICAgLy8gUHVibGlzaCB0byB0aGlzIHN1YnNjcmliZXIgb25jZSBpbW1lZGlhdGVseS5cbiAgICAgIGxpc3RlbmVyKGN1cnJlbnRWYWx1ZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCcm9hZGNhc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvY3JlYXRlLWJyb2FkY2FzdC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIHNlbGVjdG9ycyhwYXJlbnQsIG5vZGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBwYXJlbnQuc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICBub2RlLnNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChqKSB7XG4gICAgICBpZiAoai5pbmRleE9mKCcmJykgPT09IC0xKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGkgKyAnICcgKyBqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGoucmVwbGFjZSgvJi9nLCBpKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwaWNrQ29tbWVudChjb21tZW50LCBhZnRlcikge1xuICBpZiAoY29tbWVudCAmJiBjb21tZW50LnR5cGUgPT09ICdjb21tZW50Jykge1xuICAgIHJldHVybiBjb21tZW50Lm1vdmVBZnRlcihhZnRlcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFmdGVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0cnVsZUNoaWxkcyhydWxlLCBhdHJ1bGUpIHtcbiAgdmFyIGNoaWxkcmVuID0gW107XG4gIGF0cnVsZS5lYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09ICdydWxlJykge1xuICAgICAgY2hpbGQuc2VsZWN0b3JzID0gc2VsZWN0b3JzKHJ1bGUsIGNoaWxkKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09ICdhdHJ1bGUnKSB7XG4gICAgICBhdHJ1bGVDaGlsZHMocnVsZSwgY2hpbGQpO1xuICAgIH1cbiAgfSk7XG4gIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICB2YXIgY2xvbmUgPSBydWxlLmNsb25lKHsgbm9kZXM6IFtdIH0pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLm1vdmVUbyhjbG9uZSk7XG4gICAgfWF0cnVsZS5wcmVwZW5kKGNsb25lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzUnVsZShydWxlLCBidWJibGUpIHtcbiAgdmFyIHVud3JhcHBlZCA9IGZhbHNlO1xuICB2YXIgYWZ0ZXIgPSBydWxlO1xuICBydWxlLmVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09ICdydWxlJykge1xuICAgICAgdW53cmFwcGVkID0gdHJ1ZTtcbiAgICAgIGNoaWxkLnNlbGVjdG9ycyA9IHNlbGVjdG9ycyhydWxlLCBjaGlsZCk7XG4gICAgICBhZnRlciA9IHBpY2tDb21tZW50KGNoaWxkLnByZXYoKSwgYWZ0ZXIpO1xuICAgICAgYWZ0ZXIgPSBjaGlsZC5tb3ZlQWZ0ZXIoYWZ0ZXIpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gJ2F0cnVsZScpIHtcbiAgICAgIGlmIChidWJibGUuaW5kZXhPZihjaGlsZC5uYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgdW53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgYXRydWxlQ2hpbGRzKHJ1bGUsIGNoaWxkKTtcbiAgICAgICAgYWZ0ZXIgPSBwaWNrQ29tbWVudChjaGlsZC5wcmV2KCksIGFmdGVyKTtcbiAgICAgICAgYWZ0ZXIgPSBjaGlsZC5tb3ZlQWZ0ZXIoYWZ0ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGlmICh1bndyYXBwZWQpIHtcbiAgICBydWxlLnJhd3Muc2VtaWNvbG9uID0gdHJ1ZTtcbiAgICBpZiAocnVsZS5ub2Rlcy5sZW5ndGggPT09IDApIHJ1bGUucmVtb3ZlKCk7XG4gIH1cbn1cblxudmFyIGJ1YmJsZSA9IFsnbWVkaWEnLCAnc3VwcG9ydHMnLCAnZG9jdW1lbnQnXTtcblxudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKG5vZGUpIHtcbiAgbm9kZS5lYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSAncnVsZScpIHtcbiAgICAgIHByb2Nlc3NSdWxlKGNoaWxkLCBidWJibGUpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gJ2F0cnVsZScpIHtcbiAgICAgIHByb2Nlc3MoY2hpbGQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwcm9jZXNzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy1uZXN0ZWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNhZmVQYXJzZTtcblxudmFyIF9pbnB1dCA9IHJlcXVpcmUoJy4uL3Bvc3Rjc3MvaW5wdXQnKTtcblxudmFyIF9pbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnB1dCk7XG5cbnZhciBfc2FmZVBhcnNlciA9IHJlcXVpcmUoJy4vc2FmZS1wYXJzZXInKTtcblxudmFyIF9zYWZlUGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NhZmVQYXJzZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzYWZlUGFyc2UoY3NzLCBvcHRzKSB7XG4gICAgdmFyIGlucHV0ID0gbmV3IF9pbnB1dDIuZGVmYXVsdChjc3MsIG9wdHMpO1xuXG4gICAgdmFyIHBhcnNlciA9IG5ldyBfc2FmZVBhcnNlcjIuZGVmYXVsdChpbnB1dCk7XG4gICAgcGFyc2VyLnRva2VuaXplKCk7XG4gICAgcGFyc2VyLmxvb3AoKTtcblxuICAgIHJldHVybiBwYXJzZXIucm9vdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3Mtc2FmZS1wYXJzZXIvcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcblxudmFyIF9zdXBwb3J0c0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N1cHBvcnRzQ29sb3IpO1xuXG52YXIgX3Rlcm1pbmFsSGlnaGxpZ2h0ID0gcmVxdWlyZSgnLi90ZXJtaW5hbC1oaWdobGlnaHQnKTtcblxudmFyIF90ZXJtaW5hbEhpZ2hsaWdodDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtaW5hbEhpZ2hsaWdodCk7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBUaGUgQ1NTIHBhcnNlciB0aHJvd3MgdGhpcyBlcnJvciBmb3IgYnJva2VuIENTUy5cbiAqXG4gKiBDdXN0b20gcGFyc2VycyBjYW4gdGhyb3cgdGhpcyBlcnJvciBmb3IgYnJva2VuIGN1c3RvbSBzeW50YXggdXNpbmdcbiAqIHRoZSB7QGxpbmsgTm9kZSNlcnJvcn0gbWV0aG9kLlxuICpcbiAqIFBvc3RDU1Mgd2lsbCB1c2UgdGhlIGlucHV0IHNvdXJjZSBtYXAgdG8gZGV0ZWN0IHRoZSBvcmlnaW5hbCBlcnJvciBsb2NhdGlvbi5cbiAqIElmIHlvdSB3cm90ZSBhIFNhc3MgZmlsZSwgY29tcGlsZWQgaXQgdG8gQ1NTIGFuZCB0aGVuIHBhcnNlZCBpdCB3aXRoIFBvc3RDU1MsXG4gKiBQb3N0Q1NTIHdpbGwgc2hvdyB0aGUgb3JpZ2luYWwgcG9zaXRpb24gaW4gdGhlIFNhc3MgZmlsZS5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0aGUgcG9zaXRpb24gaW4gdGhlIFBvc3RDU1MgaW5wdXRcbiAqIChlLmcuLCB0byBkZWJ1ZyB0aGUgcHJldmlvdXMgY29tcGlsZXIpLCB1c2UgYGVycm9yLmlucHV0LmZpbGVgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDYXRjaGluZyBhbmQgY2hlY2tpbmcgc3ludGF4IGVycm9yXG4gKiB0cnkge1xuICogICBwb3N0Y3NzLnBhcnNlKCdheycpXG4gKiB9IGNhdGNoIChlcnJvcikge1xuICogICBpZiAoIGVycm9yLm5hbWUgPT09ICdDc3NTeW50YXhFcnJvcicgKSB7XG4gKiAgICAgZXJyb3IgLy89PiBDc3NTeW50YXhFcnJvclxuICogICB9XG4gKiB9XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJhaXNpbmcgZXJyb3IgZnJvbSBwbHVnaW5cbiAqIHRocm93IG5vZGUuZXJyb3IoJ1Vua25vd24gdmFyaWFibGUnLCB7IHBsdWdpbjogJ3Bvc3Rjc3MtdmFycycgfSk7XG4gKi9cbnZhciBDc3NTeW50YXhFcnJvciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICAtIGVycm9yIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xpbmVdICAgLSBzb3VyY2UgbGluZSBvZiB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbHVtbl0gLSBzb3VyY2UgY29sdW1uIG9mIHRoZSBlcnJvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc291cmNlXSAtIHNvdXJjZSBjb2RlIG9mIHRoZSBicm9rZW4gZmlsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZmlsZV0gICAtIGFic29sdXRlIHBhdGggdG8gdGhlIGJyb2tlbiBmaWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtwbHVnaW5dIC0gUG9zdENTUyBwbHVnaW4gbmFtZSwgaWYgZXJyb3IgY2FtZSBmcm9tIHBsdWdpblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENzc1N5bnRheEVycm9yKG1lc3NhZ2UsIGxpbmUsIGNvbHVtbiwgc291cmNlLCBmaWxlLCBwbHVnaW4pIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENzc1N5bnRheEVycm9yKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSAtIEFsd2F5cyBlcXVhbCB0byBgJ0Nzc1N5bnRheEVycm9yJ2AuIFlvdSBzaG91bGRcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIGFsd2F5cyBjaGVjayBlcnJvciB0eXBlXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICBieSBgZXJyb3IubmFtZSA9PT0gJ0Nzc1N5bnRheEVycm9yJ2AgaW5zdGVhZCBvZlxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgYGVycm9yIGluc3RhbmNlb2YgQ3NzU3ludGF4RXJyb3JgLCBiZWNhdXNlXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICBucG0gY291bGQgaGF2ZSBzZXZlcmFsIFBvc3RDU1MgdmVyc2lvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGlmICggZXJyb3IubmFtZSA9PT0gJ0Nzc1N5bnRheEVycm9yJyApIHtcbiAgICAgICAgICogICBlcnJvciAvLz0+IENzc1N5bnRheEVycm9yXG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICdDc3NTeW50YXhFcnJvcic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gRXJyb3IgbWVzc2FnZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZXJyb3IubWVzc2FnZSAvLz0+ICdVbmNsb3NlZCBibG9jaydcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhc29uID0gbWVzc2FnZTtcblxuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gQWJzb2x1dGUgcGF0aCB0byB0aGUgYnJva2VuIGZpbGUuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqIGVycm9yLmZpbGUgICAgICAgLy89PiAnYS5zYXNzJ1xuICAgICAgICAgICAgICogZXJyb3IuaW5wdXQuZmlsZSAvLz0+ICdhLmNzcydcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBTb3VyY2UgY29kZSBvZiB0aGUgYnJva2VuIGZpbGUuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqIGVycm9yLnNvdXJjZSAgICAgICAvLz0+ICdhIHsgYiB7fSB9J1xuICAgICAgICAgICAgICogZXJyb3IuaW5wdXQuY29sdW1uIC8vPT4gJ2EgYiB7IH0nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbHVnaW4pIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSAtIFBsdWdpbiBuYW1lLCBpZiBlcnJvciBjYW1lIGZyb20gcGx1Z2luLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgKiBlcnJvci5wbHVnaW4gLy89PiAncG9zdGNzcy12YXJzJ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxpbmUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb2x1bW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gLSBTb3VyY2UgbGluZSBvZiB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqIGVycm9yLmxpbmUgICAgICAgLy89PiAyXG4gICAgICAgICAgICAgKiBlcnJvci5pbnB1dC5saW5lIC8vPT4gNFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IC0gU291cmNlIGNvbHVtbiBvZiB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqIGVycm9yLmNvbHVtbiAgICAgICAvLz0+IDFcbiAgICAgICAgICAgICAqIGVycm9yLmlucHV0LmNvbHVtbiAvLz0+IDRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldE1lc3NhZ2UoKTtcblxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIENzc1N5bnRheEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDc3NTeW50YXhFcnJvciwgW3tcbiAgICAgICAga2V5OiAnc2V0TWVzc2FnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRNZXNzYWdlKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gRnVsbCBlcnJvciB0ZXh0IGluIHRoZSBHTlUgZXJyb3IgZm9ybWF0XG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgd2l0aCBwbHVnaW4sIGZpbGUsIGxpbmUgYW5kIGNvbHVtbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgICAgICogZXJyb3IubWVzc2FnZSAvLz0+ICdhLmNzczoxOjE6IFVuY2xvc2VkIGJsb2NrJ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnBsdWdpbiA/IHRoaXMucGx1Z2luICsgJzogJyA6ICcnO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlICs9IHRoaXMuZmlsZSA/IHRoaXMuZmlsZSA6ICc8Y3NzIGlucHV0Pic7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgKz0gJzonICsgdGhpcy5saW5lICsgJzonICsgdGhpcy5jb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgKz0gJzogJyArIHRoaXMucmVhc29uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBmZXcgbGluZXMgb2YgQ1NTIHNvdXJjZSB0aGF0IGNhdXNlZCB0aGUgZXJyb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBDU1MgaGFzIGFuIGlucHV0IHNvdXJjZSBtYXAgd2l0aG91dCBgc291cmNlQ29udGVudGAsXG4gICAgICAgICAqIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbY29sb3JdIHdoZXRoZXIgYXJyb3cgd2lsbCBiZSBjb2xvcmVkIHJlZCBieSB0ZXJtaW5hbFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgY29kZXMuIEJ5IGRlZmF1bHQsIFBvc3RDU1Mgd2lsbCBkZXRlY3RcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIHN1cHBvcnQgYnkgYHByb2Nlc3Muc3Rkb3V0LmlzVFRZYFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGBwcm9jZXNzLmVudi5OT0RFX0RJU0FCTEVfQ09MT1JTYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZXJyb3Iuc2hvd1NvdXJjZUNvZGUoKSAvLz0+IFwiICA0IHwgfVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgNSB8IGEge1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgID4gNiB8ICAgYmFkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIHwgICBeXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICA3IHwgfVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgOCB8IGIge1wiXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gZmV3IGxpbmVzIG9mIENTUyBzb3VyY2UgdGhhdCBjYXVzZWQgdGhlIGVycm9yXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzaG93U291cmNlQ29kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93U291cmNlQ29kZShjb2xvcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnNvdXJjZSkgcmV0dXJuICcnO1xuXG4gICAgICAgICAgICB2YXIgY3NzID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgY29sb3IgPSBfc3VwcG9ydHNDb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIGlmIChjb2xvcikgY3NzID0gKDAsIF90ZXJtaW5hbEhpZ2hsaWdodDIuZGVmYXVsdCkoY3NzKTtcblxuICAgICAgICAgICAgdmFyIGxpbmVzID0gY3NzLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBNYXRoLm1heCh0aGlzLmxpbmUgLSAzLCAwKTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBNYXRoLm1pbih0aGlzLmxpbmUgKyAyLCBsaW5lcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICB2YXIgbWF4V2lkdGggPSBTdHJpbmcoZW5kKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIHJldHVybiBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24gKGxpbmUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bWJlciA9IHN0YXJ0ICsgMSArIGluZGV4O1xuICAgICAgICAgICAgICAgIHZhciBwYWRkZWQgPSAoJyAnICsgbnVtYmVyKS5zbGljZSgtbWF4V2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBndXR0ZXIgPSAnICcgKyBwYWRkZWQgKyAnIHwgJztcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyID09PSBfdGhpcy5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGFjaW5nID0gZ3V0dGVyLnJlcGxhY2UoL1xcZC9nLCAnICcpICsgbGluZS5zbGljZSgwLCBfdGhpcy5jb2x1bW4gLSAxKS5yZXBsYWNlKC9bXlxcdF0vZywgJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc+JyArIGd1dHRlciArIGxpbmUgKyAnXFxuICcgKyBzcGFjaW5nICsgJ14nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnICcgKyBndXR0ZXIgKyBsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgZXJyb3IgcG9zaXRpb24sIG1lc3NhZ2UgYW5kIHNvdXJjZSBjb2RlIG9mIHRoZSBicm9rZW4gcGFydC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZXJyb3IudG9TdHJpbmcoKSAvLz0+IFwiQ3NzU3ludGF4RXJyb3I6IGFwcC5jc3M6MToxOiBVbmNsb3NlZCBibG9ja1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIC8vICAgID4gMSB8IGEge1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIC8vICAgICAgICB8IF5cIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGVycm9yIHBvc2l0aW9uLCBtZXNzYWdlIGFuZCBzb3VyY2UgY29kZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IHRoaXMuc2hvd1NvdXJjZUNvZGUoKTtcbiAgICAgICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICAgICAgY29kZSA9ICdcXG5cXG4nICsgY29kZSArICdcXG4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArICc6ICcgKyB0aGlzLm1lc3NhZ2UgKyBjb2RlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZW5lcmF0ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdDc3NTeW50YXhFcnJvciNnZW5lcmF0ZWQgaXMgZGVwcmVhY3RlZC4gVXNlIGlucHV0IGluc3RlYWQuJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ3NzU3ludGF4RXJyb3IjXG4gICAgICAgICAqIEBtZW1iZXIge0lucHV0fSBpbnB1dCAtIElucHV0IG9iamVjdCB3aXRoIFBvc3RDU1MgaW50ZXJuYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQgaW5wdXQgZmlsZS4gSWYgaW5wdXQgaGFzIHNvdXJjZSBtYXBcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBwcmV2aW91cyB0b29sLCBQb3N0Q1NTIHdpbGwgdXNlIG9yaWdpblxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAoZm9yIGV4YW1wbGUsIFNhc3MpIHNvdXJjZS4gWW91IGNhbiB1c2UgdGhpc1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgdG8gZ2V0IFBvc3RDU1MgaW5wdXQgc291cmNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBlcnJvci5pbnB1dC5maWxlIC8vPT4gJ2EuY3NzJ1xuICAgICAgICAgKiBlcnJvci5maWxlICAgICAgIC8vPT4gJ2Euc2FzcydcbiAgICAgICAgICovXG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ3NzU3ludGF4RXJyb3I7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENzc1N5bnRheEVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9jc3Mtc3ludGF4LWVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxudmFyIF9ub2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG5cbnZhciBfbm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub2RlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBDU1MgZGVjbGFyYXRpb24uXG4gKlxuICogQGV4dGVuZHMgTm9kZVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7IGNvbG9yOiBibGFjayB9Jyk7XG4gKiBjb25zdCBkZWNsID0gcm9vdC5maXJzdC5maXJzdDtcbiAqIGRlY2wudHlwZSAgICAgICAvLz0+ICdkZWNsJ1xuICogZGVjbC50b1N0cmluZygpIC8vPT4gJyBjb2xvcjogYmxhY2snXG4gKi9cbnZhciBEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIChfTm9kZSkge1xuICAgIF9pbmhlcml0cyhEZWNsYXJhdGlvbiwgX05vZGUpO1xuXG4gICAgZnVuY3Rpb24gRGVjbGFyYXRpb24oZGVmYXVsdHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERlY2xhcmF0aW9uKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRGVjbGFyYXRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEZWNsYXJhdGlvbikpLmNhbGwodGhpcywgZGVmYXVsdHMpKTtcblxuICAgICAgICBfdGhpcy50eXBlID0gJ2RlY2wnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERlY2xhcmF0aW9uLCBbe1xuICAgICAgICBrZXk6ICdfdmFsdWUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI192YWx1ZSB3YXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3cy52YWx1ZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNfdmFsdWUgd2FzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MudmFsdWUnKTtcbiAgICAgICAgICAgIHRoaXMucmF3cy52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2ltcG9ydGFudCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ05vZGUjX2ltcG9ydGFudCB3YXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3cy5pbXBvcnRhbnQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3MuaW1wb3J0YW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI19pbXBvcnRhbnQgd2FzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MuaW1wb3J0YW50Jyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MuaW1wb3J0YW50ID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBEZWNsYXJhdGlvbiNcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBwcm9wIC0gdGhlIGRlY2xhcmF0aW9u4oCZcyBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhIHsgY29sb3I6IGJsYWNrIH0nKTtcbiAgICAgICAgICogY29uc3QgZGVjbCA9IHJvb3QuZmlyc3QuZmlyc3Q7XG4gICAgICAgICAqIGRlY2wucHJvcCAvLz0+ICdjb2xvcidcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBEZWNsYXJhdGlvbiNcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB2YWx1ZSAtIHRoZSBkZWNsYXJhdGlvbuKAmXMgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EgeyBjb2xvcjogYmxhY2sgfScpO1xuICAgICAgICAgKiBjb25zdCBkZWNsID0gcm9vdC5maXJzdC5maXJzdDtcbiAgICAgICAgICogZGVjbC52YWx1ZSAvLz0+ICdibGFjaydcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBEZWNsYXJhdGlvbiNcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gaW1wb3J0YW50IC0gYHRydWVgIGlmIHRoZSBkZWNsYXJhdGlvblxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXMgYW4gIWltcG9ydGFudCBhbm5vdGF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7IGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyBjb2xvcjogcmVkIH0nKTtcbiAgICAgICAgICogcm9vdC5maXJzdC5maXJzdC5pbXBvcnRhbnQgLy89PiB0cnVlXG4gICAgICAgICAqIHJvb3QuZmlyc3QubGFzdC5pbXBvcnRhbnQgIC8vPT4gdW5kZWZpbmVkXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgRGVjbGFyYXRpb24jXG4gICAgICAgICAqIEBtZW1iZXIge29iamVjdH0gcmF3cyAtIEluZm9ybWF0aW9uIHRvIGdlbmVyYXRlIGJ5dGUtdG8tYnl0ZSBlcXVhbFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHN0cmluZyBhcyBpdCB3YXMgaW4gdGhlIG9yaWdpbiBpbnB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogRXZlcnkgcGFyc2VyIHNhdmVzIGl0cyBvd24gcHJvcGVydGllcyxcbiAgICAgICAgICogYnV0IHRoZSBkZWZhdWx0IENTUyBwYXJzZXIgdXNlczpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBgYmVmb3JlYDogdGhlIHNwYWNlIHN5bWJvbHMgYmVmb3JlIHRoZSBub2RlLiBJdCBhbHNvIHN0b3JlcyBgKmBcbiAgICAgICAgICogICBhbmQgYF9gIHN5bWJvbHMgYmVmb3JlIHRoZSBkZWNsYXJhdGlvbiAoSUUgaGFjaykuXG4gICAgICAgICAqICogYGJldHdlZW5gOiB0aGUgc3ltYm9scyBiZXR3ZWVuIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICAgICAgICogICBmb3IgZGVjbGFyYXRpb25zLCBzZWxlY3RvciBhbmQgYHtgIGZvciBydWxlcywgb3IgbGFzdCBwYXJhbWV0ZXJcbiAgICAgICAgICogICBhbmQgYHtgIGZvciBhdC1ydWxlcy5cbiAgICAgICAgICogKiBgaW1wb3J0YW50YDogdGhlIGNvbnRlbnQgb2YgdGhlIGltcG9ydGFudCBzdGF0ZW1lbnQsXG4gICAgICAgICAqICAgaWYgaXQgaXMgbm90IGp1c3QgYCFpbXBvcnRhbnRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBQb3N0Q1NTIGNsZWFucyBkZWNsYXJhdGlvbiBmcm9tIGNvbW1lbnRzIGFuZCBleHRyYSBzcGFjZXMsXG4gICAgICAgICAqIGJ1dCBpdCBzdG9yZXMgb3JpZ2luIGNvbnRlbnQgaW4gcmF3cyBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBBcyBzdWNoLCBpZiB5b3UgZG9u4oCZdCBjaGFuZ2UgYSBkZWNsYXJhdGlvbuKAmXMgdmFsdWUsXG4gICAgICAgICAqIFBvc3RDU1Mgd2lsbCB1c2UgdGhlIHJhdyB2YWx1ZSB3aXRoIGNvbW1lbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7XFxuICBjb2xvcjpibGFja1xcbn0nKVxuICAgICAgICAgKiByb290LmZpcnN0LmZpcnN0LnJhd3MgLy89PiB7IGJlZm9yZTogJ1xcbiAgJywgYmV0d2VlbjogJzonIH1cbiAgICAgICAgICovXG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRGVjbGFyYXRpb247XG59KF9ub2RlMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRGVjbGFyYXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2RlY2xhcmF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zdHJpbmdpZnkyID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcblxudmFyIF9zdHJpbmdpZnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5Mik7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxudmFyIF9yZXN1bHQgPSByZXF1aXJlKCcuL3Jlc3VsdCcpO1xuXG52YXIgX3Jlc3VsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXN1bHQpO1xuXG52YXIgX3BhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuXG52YXIgX3BhcnNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25GdWxmaWxsZWRcbiAqIEBwYXJhbSB7UmVzdWx0fSByZXN1bHRcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblJlamVjdGVkXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICovXG5cbi8qKlxuICogQSBQcm9taXNlIHByb3h5IGZvciB0aGUgcmVzdWx0IG9mIFBvc3RDU1MgdHJhbnNmb3JtYXRpb25zLlxuICpcbiAqIEEgYExhenlSZXN1bHRgIGluc3RhbmNlIGlzIHJldHVybmVkIGJ5IHtAbGluayBQcm9jZXNzb3IjcHJvY2Vzc30uXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGxhenkgPSBwb3N0Y3NzKFtjc3NuZXh0XSkucHJvY2Vzcyhjc3MpO1xuICovXG5cbnZhciBMYXp5UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExhenlSZXN1bHQocHJvY2Vzc29yLCBjc3MsIG9wdHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhenlSZXN1bHQpO1xuXG4gICAgICAgIHRoaXMuc3RyaW5naWZpZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgcm9vdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKCh0eXBlb2YgY3NzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjc3MpKSA9PT0gJ29iamVjdCcgJiYgY3NzLnR5cGUgPT09ICdyb290Jykge1xuICAgICAgICAgICAgcm9vdCA9IGNzcztcbiAgICAgICAgfSBlbHNlIGlmIChjc3MgaW5zdGFuY2VvZiBMYXp5UmVzdWx0IHx8IGNzcyBpbnN0YW5jZW9mIF9yZXN1bHQyLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHJvb3QgPSBjc3Mucm9vdDtcbiAgICAgICAgICAgIGlmIChjc3MubWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLm1hcCA9PT0gJ3VuZGVmaW5lZCcpIG9wdHMubWFwID0ge307XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRzLm1hcC5pbmxpbmUpIG9wdHMubWFwLmlubGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG9wdHMubWFwLnByZXYgPSBjc3MubWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhcnNlciA9IF9wYXJzZTIuZGVmYXVsdDtcbiAgICAgICAgICAgIGlmIChvcHRzLnN5bnRheCkgcGFyc2VyID0gb3B0cy5zeW50YXgucGFyc2U7XG4gICAgICAgICAgICBpZiAob3B0cy5wYXJzZXIpIHBhcnNlciA9IG9wdHMucGFyc2VyO1xuICAgICAgICAgICAgaWYgKHBhcnNlci5wYXJzZSkgcGFyc2VyID0gcGFyc2VyLnBhcnNlO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSBwYXJzZXIoY3NzLCBvcHRzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN1bHQgPSBuZXcgX3Jlc3VsdDIuZGVmYXVsdChwcm9jZXNzb3IsIHJvb3QsIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB7QGxpbmsgUHJvY2Vzc29yfSBpbnN0YW5jZSwgd2hpY2ggd2lsbCBiZSB1c2VkXG4gICAgICogZm9yIENTUyB0cmFuc2Zvcm1hdGlvbnMuXG4gICAgICogQHR5cGUge1Byb2Nlc3Nvcn1cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKExhenlSZXN1bHQsIFt7XG4gICAgICAgIGtleTogJ3dhcm5pbmdzJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9jZXNzZXMgaW5wdXQgQ1NTIHRocm91Z2ggc3luY2hyb25vdXMgcGx1Z2luc1xuICAgICAgICAgKiBhbmQgY2FsbHMge0BsaW5rIFJlc3VsdCN3YXJuaW5ncygpfS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7V2FybmluZ1tdfSB3YXJuaW5ncyBmcm9tIHBsdWdpbnNcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuaW5ncygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bmMoKS53YXJuaW5ncygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsaWFzIGZvciB0aGUge0BsaW5rIExhenlSZXN1bHQjY3NzfSBwcm9wZXJ0eS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogbGF6eSArICcnID09PSBsYXp5LmNzcztcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBvdXRwdXQgQ1NTXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9jZXNzZXMgaW5wdXQgQ1NTIHRocm91Z2ggc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91cyBwbHVnaW5zXG4gICAgICAgICAqIGFuZCBjYWxscyBgb25GdWxmaWxsZWRgIHdpdGggYSBSZXN1bHQgaW5zdGFuY2UuIElmIGEgcGx1Z2luIHRocm93c1xuICAgICAgICAgKiBhbiBlcnJvciwgdGhlIGBvblJlamVjdGVkYCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBpbXBsZW1lbnRzIHN0YW5kYXJkIFByb21pc2UgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29uRnVsZmlsbGVkfSBvbkZ1bGZpbGxlZCAtIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWRcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGFsbCBwbHVnaW5zIHdpbGwgZmluaXNoIHdvcmtcbiAgICAgICAgICogQHBhcmFtIHtvblJlamVjdGVkfSAgb25SZWplY3RlZCAgLSBjYWxsYmFjayB3aWxsIGJlIGV4ZWNpdGVkIG9uIGFueSBlcnJvclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIEFQSSB0byBtYWtlIHF1ZXVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHBvc3Rjc3MoW2Nzc25leHRdKS5wcm9jZXNzKGNzcykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgKiAgIGNvbnNvbGUubG9nKHJlc3VsdC5jc3MpO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RoZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9jZXNzZXMgaW5wdXQgQ1NTIHRocm91Z2ggc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91cyBwbHVnaW5zXG4gICAgICAgICAqIGFuZCBjYWxscyBvblJlamVjdGVkIGZvciBlYWNoIGVycm9yIHRocm93biBpbiBhbnkgcGx1Z2luLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBpbXBsZW1lbnRzIHN0YW5kYXJkIFByb21pc2UgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29uUmVqZWN0ZWR9IG9uUmVqZWN0ZWQgLSBjYWxsYmFjayB3aWxsIGJlIGV4ZWNpdGVkIG9uIGFueSBlcnJvclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIEFQSSB0byBtYWtlIHF1ZXVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHBvc3Rjc3MoW2Nzc25leHRdKS5wcm9jZXNzKGNzcykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgKiAgIGNvbnNvbGUubG9nKHJlc3VsdC5jc3MpO1xuICAgICAgICAgKiB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAqICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2F0Y2gnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFzeW5jKCkuY2F0Y2gob25SZWplY3RlZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZUVycm9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBwbHVnaW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnQ3NzU3ludGF4RXJyb3InICYmICFlcnJvci5wbHVnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucGx1Z2luID0gcGx1Z2luLnBvc3Rjc3NQbHVnaW47XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnNldE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpbi5wb3N0Y3NzVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1Z2luTmFtZSA9IHBsdWdpbi5wb3N0Y3NzUGx1Z2luO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1Z2luVmVyID0gcGx1Z2luLnBvc3Rjc3NWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnVudGltZVZlciA9IHRoaXMucmVzdWx0LnByb2Nlc3Nvci52ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHBsdWdpblZlci5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IHJ1bnRpbWVWZXIuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYVswXSAhPT0gYlswXSB8fCBwYXJzZUludChhWzFdKSA+IHBhcnNlSW50KGJbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnWW91ciBjdXJyZW50IFBvc3RDU1MgdmVyc2lvbiAnICsgJ2lzICcgKyBydW50aW1lVmVyICsgJywgYnV0ICcgKyBwbHVnaW5OYW1lICsgJyAnICsgJ3VzZXMgJyArIHBsdWdpblZlciArICcuIFBlcmhhcHMgdGhpcyBpcyAnICsgJ3RoZSBzb3VyY2Ugb2YgdGhlIGVycm9yIGJlbG93LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhc3luY1RpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXN5bmNUaWNrKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luID49IHRoaXMucHJvY2Vzc29yLnBsdWdpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpbiA9IHRoaXMucHJvY2Vzc29yLnBsdWdpbnNbdGhpcy5wbHVnaW5dO1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5ydW4ocGx1Z2luKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbiArPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXN5bmNUaWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIHBsdWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3luY1RpY2socmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhc3luYycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhc3luYygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9jZXNzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoX3RoaXMyLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMyLnN0cmluZ2lmeSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3Npbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLmVycm9yKSByZXR1cm4gcmVqZWN0KF90aGlzMi5lcnJvcik7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnBsdWdpbiA9IDA7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmFzeW5jVGljayhyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zdHJpbmdpZnkoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzeW5jJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkKSByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZSBwcm9jZXNzKGNzcykudGhlbihjYikgdG8gd29yayB3aXRoIGFzeW5jIHBsdWdpbnMnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3I7XG5cbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnByb2Nlc3Nvci5wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gX3RoaXMzLnJ1bihwbHVnaW4pO1xuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2UgcHJvY2Vzcyhjc3MpLnRoZW4oY2IpIHRvIHdvcmsgd2l0aCBhc3luYyBwbHVnaW5zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncnVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bihwbHVnaW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW47XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbih0aGlzLnJlc3VsdC5yb290LCB0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIHBsdWdpbik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0cmluZ2lmeScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdpZnkoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpbmdpZmllZCkgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdpZmllZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuc3luYygpO1xuXG4gICAgICAgICAgICB2YXIgb3B0cyA9IHRoaXMucmVzdWx0Lm9wdHM7XG4gICAgICAgICAgICB2YXIgc3RyID0gX3N0cmluZ2lmeTMuZGVmYXVsdDtcbiAgICAgICAgICAgIGlmIChvcHRzLnN5bnRheCkgc3RyID0gb3B0cy5zeW50YXguc3RyaW5naWZ5O1xuICAgICAgICAgICAgaWYgKG9wdHMuc3RyaW5naWZpZXIpIHN0ciA9IG9wdHMuc3RyaW5naWZpZXI7XG4gICAgICAgICAgICBpZiAoc3RyLnN0cmluZ2lmeSkgc3RyID0gc3RyLnN0cmluZ2lmeTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgc3RyKHRoaXMucm9vdCwgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gaTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuY3NzID0gcmVzdWx0O1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Byb2Nlc3NvcicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnByb2Nlc3NvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPcHRpb25zIGZyb20gdGhlIHtAbGluayBQcm9jZXNzb3IjcHJvY2Vzc30gY2FsbC5cbiAgICAgICAgICogQHR5cGUge3Byb2Nlc3NPcHRpb25zfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb3B0cycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm9wdHM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvY2Vzc2VzIGlucHV0IENTUyB0aHJvdWdoIHN5bmNocm9ub3VzIHBsdWdpbnMsIGNvbnZlcnRzIGBSb290YFxuICAgICAgICAgKiB0byBhIENTUyBzdHJpbmcgYW5kIHJldHVybnMge0BsaW5rIFJlc3VsdCNjc3N9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHByb3BlcnR5IHdpbGwgb25seSB3b3JrIHdpdGggc3luY2hyb25vdXMgcGx1Z2lucy5cbiAgICAgICAgICogSWYgdGhlIHByb2Nlc3NvciBjb250YWlucyBhbnkgYXN5bmNocm9ub3VzIHBsdWdpbnNcbiAgICAgICAgICogaXQgd2lsbCB0aHJvdyBhbiBlcnJvci4gVGhpcyBpcyB3aHkgdGhpcyBtZXRob2QgaXMgb25seVxuICAgICAgICAgKiBmb3IgZGVidWcgcHVycG9zZSwgeW91IHNob3VsZCBhbHdheXMgdXNlIHtAbGluayBMYXp5UmVzdWx0I3RoZW59LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAc2VlIFJlc3VsdCNjc3NcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NzcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkuY3NzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFsaWFzIGZvciB0aGUgYGNzc2AgcHJvcGVydHkuIFVzZSBpdCB3aXRoIHN5bnRheGVzXG4gICAgICAgICAqIHRoYXQgZ2VuZXJhdGUgbm9uLUNTUyBvdXRwdXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgcHJvcGVydHkgd2lsbCBvbmx5IHdvcmsgd2l0aCBzeW5jaHJvbm91cyBwbHVnaW5zLlxuICAgICAgICAgKiBJZiB0aGUgcHJvY2Vzc29yIGNvbnRhaW5zIGFueSBhc3luY2hyb25vdXMgcGx1Z2luc1xuICAgICAgICAgKiBpdCB3aWxsIHRocm93IGFuIGVycm9yLiBUaGlzIGlzIHdoeSB0aGlzIG1ldGhvZCBpcyBvbmx5XG4gICAgICAgICAqIGZvciBkZWJ1ZyBwdXJwb3NlLCB5b3Ugc2hvdWxkIGFsd2F5cyB1c2Uge0BsaW5rIExhenlSZXN1bHQjdGhlbn0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBzZWUgUmVzdWx0I2NvbnRlbnRcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbnRlbnQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLmNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvY2Vzc2VzIGlucHV0IENTUyB0aHJvdWdoIHN5bmNocm9ub3VzIHBsdWdpbnNcbiAgICAgICAgICogYW5kIHJldHVybnMge0BsaW5rIFJlc3VsdCNtYXB9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHByb3BlcnR5IHdpbGwgb25seSB3b3JrIHdpdGggc3luY2hyb25vdXMgcGx1Z2lucy5cbiAgICAgICAgICogSWYgdGhlIHByb2Nlc3NvciBjb250YWlucyBhbnkgYXN5bmNocm9ub3VzIHBsdWdpbnNcbiAgICAgICAgICogaXQgd2lsbCB0aHJvdyBhbiBlcnJvci4gVGhpcyBpcyB3aHkgdGhpcyBtZXRob2QgaXMgb25seVxuICAgICAgICAgKiBmb3IgZGVidWcgcHVycG9zZSwgeW91IHNob3VsZCBhbHdheXMgdXNlIHtAbGluayBMYXp5UmVzdWx0I3RoZW59LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U291cmNlTWFwR2VuZXJhdG9yfVxuICAgICAgICAgKiBAc2VlIFJlc3VsdCNtYXBcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21hcCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkubWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2Nlc3NlcyBpbnB1dCBDU1MgdGhyb3VnaCBzeW5jaHJvbm91cyBwbHVnaW5zXG4gICAgICAgICAqIGFuZCByZXR1cm5zIHtAbGluayBSZXN1bHQjcm9vdH0uXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgcHJvcGVydHkgd2lsbCBvbmx5IHdvcmsgd2l0aCBzeW5jaHJvbm91cyBwbHVnaW5zLiBJZiB0aGUgcHJvY2Vzc29yXG4gICAgICAgICAqIGNvbnRhaW5zIGFueSBhc3luY2hyb25vdXMgcGx1Z2lucyBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIHdoeSB0aGlzIG1ldGhvZCBpcyBvbmx5IGZvciBkZWJ1ZyBwdXJwb3NlLFxuICAgICAgICAgKiB5b3Ugc2hvdWxkIGFsd2F5cyB1c2Uge0BsaW5rIExhenlSZXN1bHQjdGhlbn0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtSb290fVxuICAgICAgICAgKiBAc2VlIFJlc3VsdCNyb290XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyb290JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeW5jKCkucm9vdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9jZXNzZXMgaW5wdXQgQ1NTIHRocm91Z2ggc3luY2hyb25vdXMgcGx1Z2luc1xuICAgICAgICAgKiBhbmQgcmV0dXJucyB7QGxpbmsgUmVzdWx0I21lc3NhZ2VzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSB3aWxsIG9ubHkgd29yayB3aXRoIHN5bmNocm9ub3VzIHBsdWdpbnMuIElmIHRoZSBwcm9jZXNzb3JcbiAgICAgICAgICogY29udGFpbnMgYW55IGFzeW5jaHJvbm91cyBwbHVnaW5zIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgd2h5IHRoaXMgbWV0aG9kIGlzIG9ubHkgZm9yIGRlYnVnIHB1cnBvc2UsXG4gICAgICAgICAqIHlvdSBzaG91bGQgYWx3YXlzIHVzZSB7QGxpbmsgTGF6eVJlc3VsdCN0aGVufS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge01lc3NhZ2VbXX1cbiAgICAgICAgICogQHNlZSBSZXN1bHQjbWVzc2FnZXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21lc3NhZ2VzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeW5jKCkubWVzc2FnZXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGF6eVJlc3VsdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGF6eVJlc3VsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvbGF6eS1yZXN1bHQuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlO1xuXG52YXIgX3BhcnNlciA9IHJlcXVpcmUoJy4vcGFyc2VyJyk7XG5cbnZhciBfcGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlcik7XG5cbnZhciBfaW5wdXQgPSByZXF1aXJlKCcuL2lucHV0Jyk7XG5cbnZhciBfaW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5wdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJzZShjc3MsIG9wdHMpIHtcbiAgICBpZiAob3B0cyAmJiBvcHRzLnNhZmUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcHRpb24gc2FmZSB3YXMgcmVtb3ZlZC4gJyArICdVc2UgcGFyc2VyOiByZXF1aXJlKFwicG9zdGNzcy1zYWZlLXBhcnNlclwiKScpO1xuICAgIH1cblxuICAgIHZhciBpbnB1dCA9IG5ldyBfaW5wdXQyLmRlZmF1bHQoY3NzLCBvcHRzKTtcblxuICAgIHZhciBwYXJzZXIgPSBuZXcgX3BhcnNlcjIuZGVmYXVsdChpbnB1dCk7XG4gICAgdHJ5IHtcbiAgICAgICAgcGFyc2VyLnRva2VuaXplKCk7XG4gICAgICAgIHBhcnNlci5sb29wKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZS5uYW1lID09PSAnQ3NzU3ludGF4RXJyb3InICYmIG9wdHMgJiYgb3B0cy5mcm9tKSB7XG4gICAgICAgICAgICBpZiAoL1xcLnNjc3MkL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlICs9ICdcXG5Zb3UgdHJpZWQgdG8gcGFyc2UgU0NTUyB3aXRoICcgKyAndGhlIHN0YW5kYXJkIENTUyBwYXJzZXI7ICcgKyAndHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3Mtc2NzcyBwYXJzZXInO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXFwubGVzcyQvaS50ZXN0KG9wdHMuZnJvbSkpIHtcbiAgICAgICAgICAgICAgICBlLm1lc3NhZ2UgKz0gJ1xcbllvdSB0cmllZCB0byBwYXJzZSBMZXNzIHdpdGggJyArICd0aGUgc3RhbmRhcmQgQ1NTIHBhcnNlcjsgJyArICd0cnkgYWdhaW4gd2l0aCB0aGUgcG9zdGNzcy1sZXNzIHBhcnNlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VyLnJvb3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3BhcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVjbGFyYXRpb24gPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9uJyk7XG5cbnZhciBfZGVjbGFyYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjbGFyYXRpb24pO1xuXG52YXIgX3Rva2VuaXplID0gcmVxdWlyZSgnLi90b2tlbml6ZScpO1xuXG52YXIgX3Rva2VuaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rva2VuaXplKTtcblxudmFyIF9jb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50Jyk7XG5cbnZhciBfY29tbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tZW50KTtcblxudmFyIF9hdFJ1bGUgPSByZXF1aXJlKCcuL2F0LXJ1bGUnKTtcblxudmFyIF9hdFJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXRSdWxlKTtcblxudmFyIF9yb290ID0gcmVxdWlyZSgnLi9yb290Jyk7XG5cbnZhciBfcm9vdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb290KTtcblxudmFyIF9ydWxlID0gcmVxdWlyZSgnLi9ydWxlJyk7XG5cbnZhciBfcnVsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFBhcnNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXJzZXIoaW5wdXQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcnNlcik7XG5cbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuXG4gICAgICAgIHRoaXMucG9zID0gMDtcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IF9yb290Mi5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucm9vdDtcbiAgICAgICAgdGhpcy5zcGFjZXMgPSAnJztcbiAgICAgICAgdGhpcy5zZW1pY29sb24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJvb3Quc291cmNlID0geyBpbnB1dDogaW5wdXQsIHN0YXJ0OiB7IGxpbmU6IDEsIGNvbHVtbjogMSB9IH07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBhcnNlciwgW3tcbiAgICAgICAga2V5OiAndG9rZW5pemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9rZW5pemUoKSB7XG4gICAgICAgICAgICB0aGlzLnRva2VucyA9ICgwLCBfdG9rZW5pemUyLmRlZmF1bHQpKHRoaXMuaW5wdXQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb29wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB2b2lkIDA7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wb3MgPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMucG9zXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGFjZXMgKz0gdG9rZW5bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbW1lbnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50KHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0LXdvcmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHJ1bGUodG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5UnVsZSh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5kRmlsZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21tZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbW1lbnQodG9rZW4pIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9jb21tZW50Mi5kZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluaXQobm9kZSwgdG9rZW5bMl0sIHRva2VuWzNdKTtcbiAgICAgICAgICAgIG5vZGUuc291cmNlLmVuZCA9IHsgbGluZTogdG9rZW5bNF0sIGNvbHVtbjogdG9rZW5bNV0gfTtcblxuICAgICAgICAgICAgdmFyIHRleHQgPSB0b2tlblsxXS5zbGljZSgyLCAtMik7XG4gICAgICAgICAgICBpZiAoL15cXHMqJC8udGVzdCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIG5vZGUudGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgIG5vZGUucmF3cy5sZWZ0ID0gdGV4dDtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MucmlnaHQgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdGV4dC5tYXRjaCgvXihcXHMqKShbXl0qW15cXHNdKShcXHMqKSQvKTtcbiAgICAgICAgICAgICAgICBub2RlLnRleHQgPSBtYXRjaFsyXTtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MubGVmdCA9IG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIG5vZGUucmF3cy5yaWdodCA9IG1hdGNoWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbXB0eVJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1wdHlSdWxlKHRva2VuKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfcnVsZTIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0KG5vZGUsIHRva2VuWzJdLCB0b2tlblszXSk7XG4gICAgICAgICAgICBub2RlLnNlbGVjdG9yID0gJyc7XG4gICAgICAgICAgICBub2RlLnJhd3MuYmV0d2VlbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb3RoZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb3RoZXIoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgZW5kID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgY29sb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBicmFja2V0ID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBicmFja2V0cyA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBvcyA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5wb3NdO1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0b2tlblswXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnKCcgfHwgdHlwZSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYnJhY2tldCkgYnJhY2tldCA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICBicmFja2V0cy5wdXNoKHR5cGUgPT09ICcoJyA/ICcpJyA6ICddJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChicmFja2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICc7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNsKHRoaXMudG9rZW5zLnNsaWNlKHN0YXJ0LCB0aGlzLnBvcyArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlKHRoaXMudG9rZW5zLnNsaWNlKHN0YXJ0LCB0aGlzLnBvcyArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGJyYWNrZXRzW2JyYWNrZXRzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnJhY2tldHMubGVuZ3RoID09PSAwKSBicmFja2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9zID09PSB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyAtPSAxO1xuICAgICAgICAgICAgICAgIGVuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChicmFja2V0cy5sZW5ndGggPiAwKSB0aGlzLnVuY2xvc2VkQnJhY2tldChicmFja2V0KTtcblxuICAgICAgICAgICAgaWYgKGVuZCAmJiBjb2xvbikge1xuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLnBvcyA+IHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5wb3NdWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4gIT09ICdzcGFjZScgJiYgdG9rZW4gIT09ICdjb21tZW50JykgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGVjbCh0aGlzLnRva2Vucy5zbGljZShzdGFydCwgdGhpcy5wb3MgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVua25vd25Xb3JkKHN0YXJ0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncnVsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBydWxlKHRva2Vucykge1xuICAgICAgICAgICAgdG9rZW5zLnBvcCgpO1xuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfcnVsZTIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0KG5vZGUsIHRva2Vuc1swXVsyXSwgdG9rZW5zWzBdWzNdKTtcblxuICAgICAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gPSB0aGlzLnNwYWNlc0Zyb21FbmQodG9rZW5zKTtcbiAgICAgICAgICAgIHRoaXMucmF3KG5vZGUsICdzZWxlY3RvcicsIHRva2Vucyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBub2RlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZWNsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlY2wodG9rZW5zKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfZGVjbGFyYXRpb24yLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdChub2RlKTtcblxuICAgICAgICAgICAgdmFyIGxhc3QgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKGxhc3RbMF0gPT09ICc7Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VtaWNvbG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0b2tlbnMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFzdFs0XSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc291cmNlLmVuZCA9IHsgbGluZTogbGFzdFs0XSwgY29sdW1uOiBsYXN0WzVdIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc291cmNlLmVuZCA9IHsgbGluZTogbGFzdFsyXSwgY29sdW1uOiBsYXN0WzNdIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlICh0b2tlbnNbMF1bMF0gIT09ICd3b3JkJykge1xuICAgICAgICAgICAgICAgIG5vZGUucmF3cy5iZWZvcmUgKz0gdG9rZW5zLnNoaWZ0KClbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNvdXJjZS5zdGFydCA9IHsgbGluZTogdG9rZW5zWzBdWzJdLCBjb2x1bW46IHRva2Vuc1swXVszXSB9O1xuXG4gICAgICAgICAgICBub2RlLnByb3AgPSAnJztcbiAgICAgICAgICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0b2tlbnNbMF1bMF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICc6JyB8fCB0eXBlID09PSAnc3BhY2UnIHx8IHR5cGUgPT09ICdjb21tZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5wcm9wICs9IHRva2Vucy5zaGlmdCgpWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlLnJhd3MuYmV0d2VlbiA9ICcnO1xuXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB2b2lkIDA7XG4gICAgICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW5bMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJhd3MuYmV0d2VlbiArPSB0b2tlblsxXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gKz0gdG9rZW5bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZS5wcm9wWzBdID09PSAnXycgfHwgbm9kZS5wcm9wWzBdID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MuYmVmb3JlICs9IG5vZGUucHJvcFswXTtcbiAgICAgICAgICAgICAgICBub2RlLnByb3AgPSBub2RlLnByb3Auc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnJhd3MuYmV0d2VlbiArPSB0aGlzLnNwYWNlc0Zyb21TdGFydCh0b2tlbnMpO1xuICAgICAgICAgICAgdGhpcy5wcmVjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5bMV0gPT09ICchaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmltcG9ydGFudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJpbmcgPSB0aGlzLnN0cmluZ0Zyb20odG9rZW5zLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gdGhpcy5zcGFjZXNGcm9tRW5kKHRva2VucykgKyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmcgIT09ICcgIWltcG9ydGFudCcpIG5vZGUucmF3cy5pbXBvcnRhbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW5bMV0gPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWNoZSA9IHRva2Vucy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gaTsgaiA+IDA7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF90eXBlID0gY2FjaGVbal1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLnRyaW0oKS5pbmRleE9mKCchJykgPT09IDAgJiYgX3R5cGUgIT09ICdzcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGNhY2hlLnBvcCgpWzFdICsgc3RyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHIudHJpbSgpLmluZGV4T2YoJyEnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbXBvcnRhbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yYXdzLmltcG9ydGFudCA9IHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VucyA9IGNhY2hlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuWzBdICE9PSAnc3BhY2UnICYmIHRva2VuWzBdICE9PSAnY29tbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJhdyhub2RlLCAndmFsdWUnLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICBpZiAobm9kZS52YWx1ZS5pbmRleE9mKCc6JykgIT09IC0xKSB0aGlzLmNoZWNrTWlzc2VkU2VtaWNvbG9uKHRva2Vucyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2F0cnVsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhdHJ1bGUodG9rZW4pIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9hdFJ1bGUyLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IHRva2VuWzFdLnNsaWNlKDEpO1xuICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVubmFtZWRBdHJ1bGUobm9kZSwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0KG5vZGUsIHRva2VuWzJdLCB0b2tlblszXSk7XG5cbiAgICAgICAgICAgIHZhciBsYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgb3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLnBvc107XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW5bMF0gPT09ICc7Jykge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNvdXJjZS5lbmQgPSB7IGxpbmU6IHRva2VuWzJdLCBjb2x1bW46IHRva2VuWzNdIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VtaWNvbG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlblswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuWzBdID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmQodG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA9PT0gdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGFzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUucmF3cy5iZXR3ZWVuID0gdGhpcy5zcGFjZXNGcm9tRW5kKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmF3cy5hZnRlck5hbWUgPSB0aGlzLnNwYWNlc0Zyb21TdGFydChwYXJhbXMpO1xuICAgICAgICAgICAgICAgIHRoaXMucmF3KG5vZGUsICdwYXJhbXMnLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gcGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zb3VyY2UuZW5kID0geyBsaW5lOiB0b2tlbls0XSwgY29sdW1uOiB0b2tlbls1XSB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYWNlcyA9IG5vZGUucmF3cy5iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJhd3MuYmV0d2VlbiA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yYXdzLmFmdGVyTmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyYW1zID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmQodG9rZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMgJiYgdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudC5yYXdzLnNlbWljb2xvbiA9IHRoaXMuc2VtaWNvbG9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZW1pY29sb24gPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgPSAodGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgfHwgJycpICsgdGhpcy5zcGFjZXM7XG4gICAgICAgICAgICB0aGlzLnNwYWNlcyA9ICcnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudC5zb3VyY2UuZW5kID0geyBsaW5lOiB0b2tlblsyXSwgY29sdW1uOiB0b2tlblszXSB9O1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5leHBlY3RlZENsb3NlKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5kRmlsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmRGaWxlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudC5wYXJlbnQpIHRoaXMudW5jbG9zZWRCbG9jaygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudC5ub2RlcyAmJiB0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJhd3Muc2VtaWNvbG9uID0gdGhpcy5zZW1pY29sb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciA9ICh0aGlzLmN1cnJlbnQucmF3cy5hZnRlciB8fCAnJykgKyB0aGlzLnNwYWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhlbHBlcnNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5pdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KG5vZGUsIGxpbmUsIGNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50LnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgIG5vZGUuc291cmNlID0geyBzdGFydDogeyBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbiB9LCBpbnB1dDogdGhpcy5pbnB1dCB9O1xuICAgICAgICAgICAgbm9kZS5yYXdzLmJlZm9yZSA9IHRoaXMuc3BhY2VzO1xuICAgICAgICAgICAgdGhpcy5zcGFjZXMgPSAnJztcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgIT09ICdjb21tZW50JykgdGhpcy5zZW1pY29sb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmF3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhdyhub2RlLCBwcm9wLCB0b2tlbnMpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICB0eXBlID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHRva2Vucy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAnJztcbiAgICAgICAgICAgIHZhciBjbGVhbiA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnY29tbWVudCcgfHwgdHlwZSA9PT0gJ3NwYWNlJyAmJiBpID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdG9rZW5bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjbGVhbikge1xuICAgICAgICAgICAgICAgIHZhciByYXcgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uIChhbGwsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsbCArIGlbMV07XG4gICAgICAgICAgICAgICAgfSwgJycpO1xuICAgICAgICAgICAgICAgIG5vZGUucmF3c1twcm9wXSA9IHsgdmFsdWU6IHZhbHVlLCByYXc6IHJhdyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzcGFjZXNGcm9tRW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNlc0Zyb21FbmQodG9rZW5zKSB7XG4gICAgICAgICAgICB2YXIgbGFzdFRva2VuVHlwZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBzcGFjZXMgPSAnJztcbiAgICAgICAgICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGFzdFRva2VuVHlwZSA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1bMF07XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RUb2tlblR5cGUgIT09ICdzcGFjZScgJiYgbGFzdFRva2VuVHlwZSAhPT0gJ2NvbW1lbnQnKSBicmVhaztcbiAgICAgICAgICAgICAgICBzcGFjZXMgPSB0b2tlbnMucG9wKClbMV0gKyBzcGFjZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzcGFjZXNGcm9tU3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2VzRnJvbVN0YXJ0KHRva2Vucykge1xuICAgICAgICAgICAgdmFyIG5leHQgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgc3BhY2VzID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5leHQgPSB0b2tlbnNbMF1bMF07XG4gICAgICAgICAgICAgICAgaWYgKG5leHQgIT09ICdzcGFjZScgJiYgbmV4dCAhPT0gJ2NvbW1lbnQnKSBicmVhaztcbiAgICAgICAgICAgICAgICBzcGFjZXMgKz0gdG9rZW5zLnNoaWZ0KClbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdHJpbmdGcm9tJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ0Zyb20odG9rZW5zLCBmcm9tKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZnJvbTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0b2tlbnNbaV1bMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGZyb20sIHRva2Vucy5sZW5ndGggLSBmcm9tKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbG9uKHRva2Vucykge1xuICAgICAgICAgICAgdmFyIGJyYWNrZXRzID0gMDtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICB0eXBlID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIHByZXYgPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0b2tlblswXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldHMgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBicmFja2V0cyAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYnJhY2tldHMgPT09IDAgJiYgdHlwZSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3VibGVDb2xvbih0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldlswXSA9PT0gJ3dvcmQnICYmIHByZXZbMV0gPT09ICdwcm9naWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJldiA9IHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXJyb3JzXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuY2xvc2VkQnJhY2tldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmNsb3NlZEJyYWNrZXQoYnJhY2tldCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcignVW5jbG9zZWQgYnJhY2tldCcsIGJyYWNrZXRbMl0sIGJyYWNrZXRbM10pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmtub3duV29yZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmtub3duV29yZChzdGFydCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbc3RhcnRdO1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcignVW5rbm93biB3b3JkJywgdG9rZW5bMl0sIHRva2VuWzNdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5leHBlY3RlZENsb3NlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuZXhwZWN0ZWRDbG9zZSh0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcignVW5leHBlY3RlZCB9JywgdG9rZW5bMl0sIHRva2VuWzNdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5jbG9zZWRCbG9jaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmNsb3NlZEJsb2NrKCkge1xuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuY3VycmVudC5zb3VyY2Uuc3RhcnQ7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKCdVbmNsb3NlZCBibG9jaycsIHBvcy5saW5lLCBwb3MuY29sdW1uKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZG91YmxlQ29sb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG91YmxlQ29sb24odG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoJ0RvdWJsZSBjb2xvbicsIHRva2VuWzJdLCB0b2tlblszXSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VubmFtZWRBdHJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5uYW1lZEF0cnVsZShub2RlLCB0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcignQXQtcnVsZSB3aXRob3V0IG5hbWUnLCB0b2tlblsyXSwgdG9rZW5bM10pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVjaGVja01pc3NlZFNlbWljb2xvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpIHtcbiAgICAgICAgICAgIC8vIEhvb2sgZm9yIFNhZmUgUGFyc2VyXG4gICAgICAgICAgICB0b2tlbnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoZWNrTWlzc2VkU2VtaWNvbG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrTWlzc2VkU2VtaWNvbG9uKHRva2Vucykge1xuICAgICAgICAgICAgdmFyIGNvbG9uID0gdGhpcy5jb2xvbih0b2tlbnMpO1xuICAgICAgICAgICAgaWYgKGNvbG9uID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgZm91bmRlZCA9IDA7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gY29sb24gLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2pdO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlblswXSAhPT0gJ3NwYWNlJykge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZGVkID09PSAyKSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKCdNaXNzZWQgc2VtaWNvbG9uJywgdG9rZW5bMl0sIHRva2VuWzNdKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQYXJzZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBhcnNlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG5cbnZhciBkZWZhdWx0UmF3ID0ge1xuICAgIGNvbG9uOiAnOiAnLFxuICAgIGluZGVudDogJyAgICAnLFxuICAgIGJlZm9yZURlY2w6ICdcXG4nLFxuICAgIGJlZm9yZVJ1bGU6ICdcXG4nLFxuICAgIGJlZm9yZU9wZW46ICcgJyxcbiAgICBiZWZvcmVDbG9zZTogJ1xcbicsXG4gICAgYmVmb3JlQ29tbWVudDogJ1xcbicsXG4gICAgYWZ0ZXI6ICdcXG4nLFxuICAgIGVtcHR5Qm9keTogJycsXG4gICAgY29tbWVudExlZnQ6ICcgJyxcbiAgICBjb21tZW50UmlnaHQ6ICcgJ1xufTtcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbnZhciBTdHJpbmdpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHJpbmdpZmllcihidWlsZGVyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmdpZmllcik7XG5cbiAgICAgICAgdGhpcy5idWlsZGVyID0gYnVpbGRlcjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RyaW5naWZpZXIsIFt7XG4gICAgICAgIGtleTogJ3N0cmluZ2lmeScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdpZnkobm9kZSwgc2VtaWNvbG9uKSB7XG4gICAgICAgICAgICB0aGlzW25vZGUudHlwZV0obm9kZSwgc2VtaWNvbG9uKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncm9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByb290KG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keShub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnJhd3MuYWZ0ZXIpIHRoaXMuYnVpbGRlcihub2RlLnJhd3MuYWZ0ZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21tZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbW1lbnQobm9kZSkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnJhdyhub2RlLCAnbGVmdCcsICdjb21tZW50TGVmdCcpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy5yYXcobm9kZSwgJ3JpZ2h0JywgJ2NvbW1lbnRSaWdodCcpO1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyKCcvKicgKyBsZWZ0ICsgbm9kZS50ZXh0ICsgcmlnaHQgKyAnKi8nLCBub2RlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVjbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWNsKG5vZGUsIHNlbWljb2xvbikge1xuICAgICAgICAgICAgdmFyIGJldHdlZW4gPSB0aGlzLnJhdyhub2RlLCAnYmV0d2VlbicsICdjb2xvbicpO1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9IG5vZGUucHJvcCArIGJldHdlZW4gKyB0aGlzLnJhd1ZhbHVlKG5vZGUsICd2YWx1ZScpO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5pbXBvcnRhbnQpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gbm9kZS5yYXdzLmltcG9ydGFudCB8fCAnICFpbXBvcnRhbnQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VtaWNvbG9uKSBzdHJpbmcgKz0gJzsnO1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyKHN0cmluZywgbm9kZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3J1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcnVsZShub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrKG5vZGUsIHRoaXMucmF3VmFsdWUobm9kZSwgJ3NlbGVjdG9yJykpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhdHJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXRydWxlKG5vZGUsIHNlbWljb2xvbikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSAnQCcgKyBub2RlLm5hbWU7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gbm9kZS5wYXJhbXMgPyB0aGlzLnJhd1ZhbHVlKG5vZGUsICdwYXJhbXMnKSA6ICcnO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUucmF3cy5hZnRlck5hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbmFtZSArPSBub2RlLnJhd3MuYWZ0ZXJOYW1lO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBuYW1lICs9ICcgJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUubm9kZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrKG5vZGUsIG5hbWUgKyBwYXJhbXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gKG5vZGUucmF3cy5iZXR3ZWVuIHx8ICcnKSArIChzZW1pY29sb24gPyAnOycgOiAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyKG5hbWUgKyBwYXJhbXMgKyBlbmQsIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdib2R5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJvZHkobm9kZSkge1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBub2RlLm5vZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAobGFzdCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2Rlc1tsYXN0XS50eXBlICE9PSAnY29tbWVudCcpIGJyZWFrO1xuICAgICAgICAgICAgICAgIGxhc3QgLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNlbWljb2xvbiA9IHRoaXMucmF3KG5vZGUsICdzZW1pY29sb24nKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUubm9kZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9IHRoaXMucmF3KGNoaWxkLCAnYmVmb3JlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSkgdGhpcy5idWlsZGVyKGJlZm9yZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdpZnkoY2hpbGQsIGxhc3QgIT09IGkgfHwgc2VtaWNvbG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmxvY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmxvY2sobm9kZSwgc3RhcnQpIHtcbiAgICAgICAgICAgIHZhciBiZXR3ZWVuID0gdGhpcy5yYXcobm9kZSwgJ2JldHdlZW4nLCAnYmVmb3JlT3BlbicpO1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyKHN0YXJ0ICsgYmV0d2VlbiArICd7Jywgbm9kZSwgJ3N0YXJ0Jyk7XG5cbiAgICAgICAgICAgIHZhciBhZnRlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVzICYmIG5vZGUubm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGFmdGVyID0gdGhpcy5yYXcobm9kZSwgJ2FmdGVyJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFmdGVyID0gdGhpcy5yYXcobm9kZSwgJ2FmdGVyJywgJ2VtcHR5Qm9keScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWZ0ZXIpIHRoaXMuYnVpbGRlcihhZnRlcik7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIoJ30nLCBub2RlLCAnZW5kJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JhdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXcobm9kZSwgb3duLCBkZXRlY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmICghZGV0ZWN0KSBkZXRlY3QgPSBvd247XG5cbiAgICAgICAgICAgIC8vIEFscmVhZHkgaGFkXG4gICAgICAgICAgICBpZiAob3duKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBub2RlLnJhd3Nbb3duXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEhhY2sgZm9yIGZpcnN0IHJ1bGUgaW4gQ1NTXG4gICAgICAgICAgICBpZiAoZGV0ZWN0ID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgIGlmICghcGFyZW50IHx8IHBhcmVudC50eXBlID09PSAncm9vdCcgJiYgcGFyZW50LmZpcnN0ID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZsb2F0aW5nIGNoaWxkIHdpdGhvdXQgcGFyZW50XG4gICAgICAgICAgICBpZiAoIXBhcmVudCkgcmV0dXJuIGRlZmF1bHRSYXdbZGV0ZWN0XTtcblxuICAgICAgICAgICAgLy8gRGV0ZWN0IHN0eWxlIGJ5IG90aGVyIG5vZGVzXG4gICAgICAgICAgICB2YXIgcm9vdCA9IG5vZGUucm9vdCgpO1xuICAgICAgICAgICAgaWYgKCFyb290LnJhd0NhY2hlKSByb290LnJhd0NhY2hlID0ge307XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3QucmF3Q2FjaGVbZGV0ZWN0XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdC5yYXdDYWNoZVtkZXRlY3RdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGV0ZWN0ID09PSAnYmVmb3JlJyB8fCBkZXRlY3QgPT09ICdhZnRlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVBZnRlcihub2RlLCBkZXRlY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gJ3JhdycgKyBjYXBpdGFsaXplKGRldGVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXNbbWV0aG9kXShyb290LCBub2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LndhbGsoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaS5yYXdzW293bl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB2YWx1ZSA9IGRlZmF1bHRSYXdbZGV0ZWN0XTtcblxuICAgICAgICAgICAgcm9vdC5yYXdDYWNoZVtkZXRlY3RdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd1NlbWljb2xvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdTZW1pY29sb24ocm9vdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgcm9vdC53YWxrKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggJiYgaS5sYXN0LnR5cGUgPT09ICdkZWNsJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGkucmF3cy5zZW1pY29sb247XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd0VtcHR5Qm9keScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdFbXB0eUJvZHkocm9vdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgcm9vdC53YWxrKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpLnJhd3MuYWZ0ZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd0luZGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdJbmRlbnQocm9vdCkge1xuICAgICAgICAgICAgaWYgKHJvb3QucmF3cy5pbmRlbnQpIHJldHVybiByb290LnJhd3MuaW5kZW50O1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgcm9vdC53YWxrKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBpLnBhcmVudDtcbiAgICAgICAgICAgICAgICBpZiAocCAmJiBwICE9PSByb290ICYmIHAucGFyZW50ICYmIHAucGFyZW50ID09PSByb290KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGkucmF3cy5iZWZvcmUuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXHNdL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdCZWZvcmVDb21tZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhd0JlZm9yZUNvbW1lbnQocm9vdCwgbm9kZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgcm9vdC53YWxrQ29tbWVudHMoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ1xcbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZSwgbnVsbCwgJ2JlZm9yZURlY2wnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmF3QmVmb3JlRGVjbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdCZWZvcmVEZWNsKHJvb3QsIG5vZGUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2Fsa0RlY2xzKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZWZvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdcXG4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdiZWZvcmVSdWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd0JlZm9yZVJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3QmVmb3JlUnVsZShyb290KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICByb290LndhbGsoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaS5ub2RlcyAmJiAoaS5wYXJlbnQgIT09IHJvb3QgfHwgcm9vdC5maXJzdCAhPT0gaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmVmb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ1xcbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmF3QmVmb3JlQ2xvc2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3QmVmb3JlQ2xvc2Uocm9vdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgcm9vdC53YWxrKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmFmdGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpLnJhd3MuYWZ0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignXFxuJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdCZWZvcmVPcGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhd0JlZm9yZU9wZW4ocm9vdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgcm9vdC53YWxrKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkudHlwZSAhPT0gJ2RlY2wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd0NvbG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhd0NvbG9uKHJvb3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2Fsa0RlY2xzKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmV0d2VlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmV0d2Vlbi5yZXBsYWNlKC9bXlxcczpdL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiZWZvcmVBZnRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBiZWZvcmVBZnRlcihub2RlLCBkZXRlY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdkZWNsJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZSwgbnVsbCwgJ2JlZm9yZURlY2wnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdiZWZvcmVDb21tZW50Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldGVjdCA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdiZWZvcmVSdWxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZSwgbnVsbCwgJ2JlZm9yZUNsb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBidWYgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoYnVmICYmIGJ1Zi50eXBlICE9PSAncm9vdCcpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCArPSAxO1xuICAgICAgICAgICAgICAgIGJ1ZiA9IGJ1Zi5wYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdcXG4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZW50ID0gdGhpcy5yYXcobm9kZSwgbnVsbCwgJ2luZGVudCcpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHN0ZXAgPSAwOyBzdGVwIDwgZGVwdGg7IHN0ZXArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gaW5kZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd1ZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhd1ZhbHVlKG5vZGUsIHByb3ApIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG5vZGVbcHJvcF07XG4gICAgICAgICAgICB2YXIgcmF3ID0gbm9kZS5yYXdzW3Byb3BdO1xuICAgICAgICAgICAgaWYgKHJhdyAmJiByYXcudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhdy5yYXc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdHJpbmdpZmllcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyaW5naWZpZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3N0cmluZ2lmaWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdpZnk7XG5cbnZhciBfc3RyaW5naWZpZXIgPSByZXF1aXJlKCcuL3N0cmluZ2lmaWVyJyk7XG5cbnZhciBfc3RyaW5naWZpZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZpZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkobm9kZSwgYnVpbGRlcikge1xuICAgIHZhciBzdHIgPSBuZXcgX3N0cmluZ2lmaWVyMi5kZWZhdWx0KGJ1aWxkZXIpO1xuICAgIHN0ci5zdHJpbmdpZnkobm9kZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gL1tcXHUwMDFiXFx1MDA5Yl1bWygpIzs/XSooPzpbMC05XXsxLDR9KD86O1swLTldezAsNH0pKik/WzAtOUEtUFJaY2YtbnFyeT0+PF0vZztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5zaS1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5BcnJheS5mcm9tO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgJCQgICAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiAgID0gJCQubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSAkJGxlbiA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCAkJGxlbiA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBYbWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIveG1sLWVudGl0aWVzLmpzJyksXG4gIEh0bWw0RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw0LWVudGl0aWVzLmpzJyksXG4gIEh0bWw1RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw1LWVudGl0aWVzLmpzJyksXG4gIEFsbEh0bWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwidmFyIEhUTUxfQUxQSEEgPSBbJ2Fwb3MnLCAnbmJzcCcsICdpZXhjbCcsICdjZW50JywgJ3BvdW5kJywgJ2N1cnJlbicsICd5ZW4nLCAnYnJ2YmFyJywgJ3NlY3QnLCAndW1sJywgJ2NvcHknLCAnb3JkZicsICdsYXF1bycsICdub3QnLCAnc2h5JywgJ3JlZycsICdtYWNyJywgJ2RlZycsICdwbHVzbW4nLCAnc3VwMicsICdzdXAzJywgJ2FjdXRlJywgJ21pY3JvJywgJ3BhcmEnLCAnbWlkZG90JywgJ2NlZGlsJywgJ3N1cDEnLCAnb3JkbScsICdyYXF1bycsICdmcmFjMTQnLCAnZnJhYzEyJywgJ2ZyYWMzNCcsICdpcXVlc3QnLCAnQWdyYXZlJywgJ0FhY3V0ZScsICdBY2lyYycsICdBdGlsZGUnLCAnQXVtbCcsICdBcmluZycsICdBZWxpZycsICdDY2VkaWwnLCAnRWdyYXZlJywgJ0VhY3V0ZScsICdFY2lyYycsICdFdW1sJywgJ0lncmF2ZScsICdJYWN1dGUnLCAnSWNpcmMnLCAnSXVtbCcsICdFVEgnLCAnTnRpbGRlJywgJ09ncmF2ZScsICdPYWN1dGUnLCAnT2NpcmMnLCAnT3RpbGRlJywgJ091bWwnLCAndGltZXMnLCAnT3NsYXNoJywgJ1VncmF2ZScsICdVYWN1dGUnLCAnVWNpcmMnLCAnVXVtbCcsICdZYWN1dGUnLCAnVEhPUk4nLCAnc3psaWcnLCAnYWdyYXZlJywgJ2FhY3V0ZScsICdhY2lyYycsICdhdGlsZGUnLCAnYXVtbCcsICdhcmluZycsICdhZWxpZycsICdjY2VkaWwnLCAnZWdyYXZlJywgJ2VhY3V0ZScsICdlY2lyYycsICdldW1sJywgJ2lncmF2ZScsICdpYWN1dGUnLCAnaWNpcmMnLCAnaXVtbCcsICdldGgnLCAnbnRpbGRlJywgJ29ncmF2ZScsICdvYWN1dGUnLCAnb2NpcmMnLCAnb3RpbGRlJywgJ291bWwnLCAnZGl2aWRlJywgJ09zbGFzaCcsICd1Z3JhdmUnLCAndWFjdXRlJywgJ3VjaXJjJywgJ3V1bWwnLCAneWFjdXRlJywgJ3Rob3JuJywgJ3l1bWwnLCAncXVvdCcsICdhbXAnLCAnbHQnLCAnZ3QnLCAnb2VsaWcnLCAnb2VsaWcnLCAnc2Nhcm9uJywgJ3NjYXJvbicsICd5dW1sJywgJ2NpcmMnLCAndGlsZGUnLCAnZW5zcCcsICdlbXNwJywgJ3RoaW5zcCcsICd6d25qJywgJ3p3aicsICdscm0nLCAncmxtJywgJ25kYXNoJywgJ21kYXNoJywgJ2xzcXVvJywgJ3JzcXVvJywgJ3NicXVvJywgJ2xkcXVvJywgJ3JkcXVvJywgJ2JkcXVvJywgJ2RhZ2dlcicsICdkYWdnZXInLCAncGVybWlsJywgJ2xzYXF1bycsICdyc2FxdW8nLCAnZXVybycsICdmbm9mJywgJ2FscGhhJywgJ2JldGEnLCAnZ2FtbWEnLCAnZGVsdGEnLCAnZXBzaWxvbicsICd6ZXRhJywgJ2V0YScsICd0aGV0YScsICdpb3RhJywgJ2thcHBhJywgJ2xhbWJkYScsICdtdScsICdudScsICd4aScsICdvbWljcm9uJywgJ3BpJywgJ3JobycsICdzaWdtYScsICd0YXUnLCAndXBzaWxvbicsICdwaGknLCAnY2hpJywgJ3BzaScsICdvbWVnYScsICdhbHBoYScsICdiZXRhJywgJ2dhbW1hJywgJ2RlbHRhJywgJ2Vwc2lsb24nLCAnemV0YScsICdldGEnLCAndGhldGEnLCAnaW90YScsICdrYXBwYScsICdsYW1iZGEnLCAnbXUnLCAnbnUnLCAneGknLCAnb21pY3JvbicsICdwaScsICdyaG8nLCAnc2lnbWFmJywgJ3NpZ21hJywgJ3RhdScsICd1cHNpbG9uJywgJ3BoaScsICdjaGknLCAncHNpJywgJ29tZWdhJywgJ3RoZXRhc3ltJywgJ3Vwc2loJywgJ3BpdicsICdidWxsJywgJ2hlbGxpcCcsICdwcmltZScsICdwcmltZScsICdvbGluZScsICdmcmFzbCcsICd3ZWllcnAnLCAnaW1hZ2UnLCAncmVhbCcsICd0cmFkZScsICdhbGVmc3ltJywgJ2xhcnInLCAndWFycicsICdyYXJyJywgJ2RhcnInLCAnaGFycicsICdjcmFycicsICdsYXJyJywgJ3VhcnInLCAncmFycicsICdkYXJyJywgJ2hhcnInLCAnZm9yYWxsJywgJ3BhcnQnLCAnZXhpc3QnLCAnZW1wdHknLCAnbmFibGEnLCAnaXNpbicsICdub3RpbicsICduaScsICdwcm9kJywgJ3N1bScsICdtaW51cycsICdsb3dhc3QnLCAncmFkaWMnLCAncHJvcCcsICdpbmZpbicsICdhbmcnLCAnYW5kJywgJ29yJywgJ2NhcCcsICdjdXAnLCAnaW50JywgJ3RoZXJlNCcsICdzaW0nLCAnY29uZycsICdhc3ltcCcsICduZScsICdlcXVpdicsICdsZScsICdnZScsICdzdWInLCAnc3VwJywgJ25zdWInLCAnc3ViZScsICdzdXBlJywgJ29wbHVzJywgJ290aW1lcycsICdwZXJwJywgJ3Nkb3QnLCAnbGNlaWwnLCAncmNlaWwnLCAnbGZsb29yJywgJ3JmbG9vcicsICdsYW5nJywgJ3JhbmcnLCAnbG96JywgJ3NwYWRlcycsICdjbHVicycsICdoZWFydHMnLCAnZGlhbXMnXTtcbnZhciBIVE1MX0NPREVTID0gWzM5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLCAxNzIsIDE3MywgMTc0LCAxNzUsIDE3NiwgMTc3LCAxNzgsIDE3OSwgMTgwLCAxODEsIDE4MiwgMTgzLCAxODQsIDE4NSwgMTg2LCAxODcsIDE4OCwgMTg5LCAxOTAsIDE5MSwgMTkyLCAxOTMsIDE5NCwgMTk1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAxLCAyMDIsIDIwMywgMjA0LCAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjEwLCAyMTEsIDIxMiwgMjEzLCAyMTQsIDIxNSwgMjE2LCAyMTcsIDIxOCwgMjE5LCAyMjAsIDIyMSwgMjIyLCAyMjMsIDIyNCwgMjI1LCAyMjYsIDIyNywgMjI4LCAyMjksIDIzMCwgMjMxLCAyMzIsIDIzMywgMjM0LCAyMzUsIDIzNiwgMjM3LCAyMzgsIDIzOSwgMjQwLCAyNDEsIDI0MiwgMjQzLCAyNDQsIDI0NSwgMjQ2LCAyNDcsIDI0OCwgMjQ5LCAyNTAsIDI1MSwgMjUyLCAyNTMsIDI1NCwgMjU1LCAzNCwgMzgsIDYwLCA2MiwgMzM4LCAzMzksIDM1MiwgMzUzLCAzNzYsIDcxMCwgNzMyLCA4MTk0LCA4MTk1LCA4MjAxLCA4MjA0LCA4MjA1LCA4MjA2LCA4MjA3LCA4MjExLCA4MjEyLCA4MjE2LCA4MjE3LCA4MjE4LCA4MjIwLCA4MjIxLCA4MjIyLCA4MjI0LCA4MjI1LCA4MjQwLCA4MjQ5LCA4MjUwLCA4MzY0LCA0MDIsIDkxMywgOTE0LCA5MTUsIDkxNiwgOTE3LCA5MTgsIDkxOSwgOTIwLCA5MjEsIDkyMiwgOTIzLCA5MjQsIDkyNSwgOTI2LCA5MjcsIDkyOCwgOTI5LCA5MzEsIDkzMiwgOTMzLCA5MzQsIDkzNSwgOTM2LCA5MzcsIDk0NSwgOTQ2LCA5NDcsIDk0OCwgOTQ5LCA5NTAsIDk1MSwgOTUyLCA5NTMsIDk1NCwgOTU1LCA5NTYsIDk1NywgOTU4LCA5NTksIDk2MCwgOTYxLCA5NjIsIDk2MywgOTY0LCA5NjUsIDk2NiwgOTY3LCA5NjgsIDk2OSwgOTc3LCA5NzgsIDk4MiwgODIyNiwgODIzMCwgODI0MiwgODI0MywgODI1NCwgODI2MCwgODQ3MiwgODQ2NSwgODQ3NiwgODQ4MiwgODUwMSwgODU5MiwgODU5MywgODU5NCwgODU5NSwgODU5NiwgODYyOSwgODY1NiwgODY1NywgODY1OCwgODY1OSwgODY2MCwgODcwNCwgODcwNiwgODcwNywgODcwOSwgODcxMSwgODcxMiwgODcxMywgODcxNSwgODcxOSwgODcyMSwgODcyMiwgODcyNywgODczMCwgODczMywgODczNCwgODczNiwgODc0MywgODc0NCwgODc0NSwgODc0NiwgODc0NywgODc1NiwgODc2NCwgODc3MywgODc3NiwgODgwMCwgODgwMSwgODgwNCwgODgwNSwgODgzNCwgODgzNSwgODgzNiwgODgzOCwgODgzOSwgODg1MywgODg1NSwgODg2OSwgODkwMSwgODk2OCwgODk2OSwgODk3MCwgODk3MSwgOTAwMSwgOTAwMiwgOTY3NCwgOTgyNCwgOTgyNywgOTgyOSwgOTgzMF07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgbnVtSW5kZXggPSB7fTtcblxudmFyIGkgPSAwO1xudmFyIGxlbmd0aCA9IEhUTUxfQUxQSEEubGVuZ3RoO1xud2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICB2YXIgYSA9IEhUTUxfQUxQSEFbaV07XG4gICAgdmFyIGMgPSBIVE1MX0NPREVTW2ldO1xuICAgIGFscGhhSW5kZXhbYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgIG51bUluZGV4W2NdID0gYTtcbiAgICBpKys7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw0RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMiksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmRlY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYWxwaGEgPSBudW1JbmRleFtzdHIuY2hhckNvZGVBdChpKV07XG4gICAgICAgIHJlc3VsdCArPSBhbHBoYSA/IFwiJlwiICsgYWxwaGEgKyBcIjtcIiA6IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W2NjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGNjIDwgMzIgfHwgY2MgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiYjXCIgKyBjYyArIFwiO1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNEVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwidmFyIEFMUEhBX0lOREVYID0ge1xuICAgICcmbHQnOiAnPCcsXG4gICAgJyZndCc6ICc+JyxcbiAgICAnJnF1b3QnOiAnXCInLFxuICAgICcmYXBvcyc6ICdcXCcnLFxuICAgICcmYW1wJzogJyYnLFxuICAgICcmbHQ7JzogJzwnLFxuICAgICcmZ3Q7JzogJz4nLFxuICAgICcmcXVvdDsnOiAnXCInLFxuICAgICcmYXBvczsnOiAnXFwnJyxcbiAgICAnJmFtcDsnOiAnJidcbn07XG5cbnZhciBDSEFSX0lOREVYID0ge1xuICAgIDYwOiAnbHQnLFxuICAgIDYyOiAnZ3QnLFxuICAgIDM0OiAncXVvdCcsXG4gICAgMzk6ICdhcG9zJyxcbiAgICAzODogJ2FtcCdcbn07XG5cbnZhciBDSEFSX1NfSU5ERVggPSB7XG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgJ1xcJyc6ICcmYXBvczsnLFxuICAgICcmJzogJyZhbXA7J1xufTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gWG1sRW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvPHw+fFwifCd8Ji9nLCBmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBDSEFSX1NfSU5ERVhbc107XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjP1swLTlhLXpBLVpdKzs/L2csIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgaWYgKHMuY2hhckF0KDEpID09PSAnIycpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gcy5jaGFyQXQoMikudG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChzLnN1YnN0cigzKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChzLnN1YnN0cigyKSk7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBTFBIQV9JTkRFWFtzXSB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmRlY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBhbHBoYSA9IENIQVJfSU5ERVhbY107XG4gICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjIDwgMzIgfHwgYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmdodCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5naHQpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG4gfTtcblxubW9kdWxlLmV4cG9ydHMgPSBYbWxFbnRpdGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxudmFyIF9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlID0gcmVxdWlyZSgnd2VicGFjay1ob3QtbWlkZGxld2FyZS9jbGllbnQ/b3ZlcmxheT1mYWxzZSZyZWxvYWQ9dHJ1ZScpO1xuXG52YXIgX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoYW5kbGVycyA9IHtcbiAgcmVsb2FkOiBmdW5jdGlvbiByZWxvYWQocm91dGUpIHtcbiAgICBpZiAocm91dGUgPT09ICcvX2Vycm9yJykge1xuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKCgwLCBfa2V5czIuZGVmYXVsdCkobmV4dC5yb3V0ZXIuY29tcG9uZW50cykpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyXS5Db21wb25lbnQ7XG5cbiAgICAgICAgICBpZiAoQ29tcG9uZW50Ll9fcm91dGUgPT09ICcvX2Vycm9yLWRlYnVnJykge1xuICAgICAgICAgICAgLy8gcmVsb2FkIGFsbCAnL19lcnJvci1kZWJ1ZydcbiAgICAgICAgICAgIC8vIHdoaWNoIGFyZSBleHBlY3RlZCB0byBiZSBlcnJvcnMgb2YgJy9fZXJyb3InIHJvdXRlc1xuICAgICAgICAgICAgbmV4dC5yb3V0ZXIucmVsb2FkKHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICB9LFxuICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShyb3V0ZSkge1xuICAgIHZhciBfcmVmID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyb3V0ZV0gfHwge30sXG4gICAgICAgIENvbXBvbmVudCA9IF9yZWYuQ29tcG9uZW50O1xuXG4gICAgaWYgKENvbXBvbmVudCAmJiBDb21wb25lbnQuX19yb3V0ZSA9PT0gJy9fZXJyb3ItZGVidWcnKSB7XG4gICAgICAvLyByZWxvYWQgdG8gcmVjb3ZlciBmcm9tIHJ1bnRpbWUgZXJyb3JzXG4gICAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICAgIH1cbiAgfVxufTsgLyogZ2xvYmFsIG5leHQgKi9cblxuXG5fY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZTIuZGVmYXVsdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG9iaikge1xuICB2YXIgZm4gPSBoYW5kbGVyc1tvYmouYWN0aW9uXTtcbiAgaWYgKGZuKSB7XG4gICAgdmFyIGRhdGEgPSBvYmouZGF0YSB8fCBbXTtcbiAgICBmbi5hcHBseSh1bmRlZmluZWQsICgwLCBfdG9Db25zdW1hYmxlQXJyYXkzLmRlZmF1bHQpKGRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgYWN0aW9uICcgKyBvYmouYWN0aW9uKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBhbnNpUmVnZXggPSByZXF1aXJlKCdhbnNpLXJlZ2V4JykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5yZXBsYWNlKGFuc2lSZWdleCwgJycpIDogc3RyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHJpcC1hbnNpL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwiLyplc2xpbnQtZW52IGJyb3dzZXIqL1xuXG52YXIgY2xpZW50T3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudmFyIHN0eWxlcyA9IHtcbiAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC44NSknLFxuICBjb2xvcjogJyNFOEU4RTgnLFxuICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgd2hpdGVTcGFjZTogJ3ByZScsXG4gIGZvbnRGYW1pbHk6ICdNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZScsXG4gIGZvbnRTaXplOiAnMTNweCcsXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB6SW5kZXg6IDk5OTksXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIHRvcDogMCxcbiAgYm90dG9tOiAwLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICBkaXI6ICdsdHInXG59O1xuZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICBjbGllbnRPdmVybGF5LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbn1cblxudmFyIGFuc2lIVE1MID0gcmVxdWlyZSgnYW5zaS1odG1sJyk7XG52YXIgY29sb3JzID0ge1xuICByZXNldDogWyd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCddLFxuICBibGFjazogJzE4MTgxOCcsXG4gIHJlZDogJ0UzNjA0OScsXG4gIGdyZWVuOiAnQjNDQjc0JyxcbiAgeWVsbG93OiAnRkZEMDgwJyxcbiAgYmx1ZTogJzdDQUZDMicsXG4gIG1hZ2VudGE6ICc3RkFDQ0EnLFxuICBjeWFuOiAnQzNDMkVGJyxcbiAgbGlnaHRncmV5OiAnRUJFN0UzJyxcbiAgZGFya2dyZXk6ICc2RDc4OTEnXG59O1xuYW5zaUhUTUwuc2V0Q29sb3JzKGNvbG9ycyk7XG5cbnZhciBFbnRpdGllcyA9IHJlcXVpcmUoJ2h0bWwtZW50aXRpZXMnKS5BbGxIdG1sRW50aXRpZXM7XG52YXIgZW50aXRpZXMgPSBuZXcgRW50aXRpZXMoKTtcblxuZXhwb3J0cy5zaG93UHJvYmxlbXMgPVxuZnVuY3Rpb24gc2hvd1Byb2JsZW1zKHR5cGUsIGxpbmVzKSB7XG4gIGNsaWVudE92ZXJsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obXNnKSB7XG4gICAgbXNnID0gYW5zaUhUTUwoZW50aXRpZXMuZW5jb2RlKG1zZykpO1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc3R5bGUubWFyZ2luQm90dG9tID0gJzI2cHgnO1xuICAgIGRpdi5pbm5lckhUTUwgPSBwcm9ibGVtVHlwZSh0eXBlKSArICcgaW4gJyArIG1zZztcbiAgICBjbGllbnRPdmVybGF5LmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuY2xlYXIgPVxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5ICYmIGNsaWVudE92ZXJsYXkucGFyZW50Tm9kZSkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn07XG5cbnZhciBwcm9ibGVtQ29sb3JzID0ge1xuICBlcnJvcnM6IGNvbG9ycy5yZWQsXG4gIHdhcm5pbmdzOiBjb2xvcnMueWVsbG93XG59O1xuXG5mdW5jdGlvbiBwcm9ibGVtVHlwZSAodHlwZSkge1xuICB2YXIgY29sb3IgPSBwcm9ibGVtQ29sb3JzW3R5cGVdIHx8IGNvbG9ycy5yZWQ7XG4gIHJldHVybiAoXG4gICAgJzxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojJyArIGNvbG9yICsgJzsgY29sb3I6I2ZmZjsgcGFkZGluZzoycHggNHB4OyBib3JkZXItcmFkaXVzOiAycHhcIj4nICtcbiAgICAgIHR5cGUuc2xpY2UoMCwgLTEpLnRvVXBwZXJDYXNlKCkgK1xuICAgICc8L3NwYW4+J1xuICApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC1vdmVybGF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwiLyplc2xpbnQtZW52IGJyb3dzZXIqL1xuLypnbG9iYWwgX19yZXNvdXJjZVF1ZXJ5IF9fd2VicGFja19wdWJsaWNfcGF0aF9fKi9cblxudmFyIG9wdGlvbnMgPSB7XG4gIHBhdGg6IFwiL19fd2VicGFja19obXJcIixcbiAgdGltZW91dDogMjAgKiAxMDAwLFxuICBvdmVybGF5OiB0cnVlLFxuICByZWxvYWQ6IGZhbHNlLFxuICBsb2c6IHRydWUsXG4gIHdhcm46IHRydWVcbn07XG5pZiAoX19yZXNvdXJjZVF1ZXJ5KSB7XG4gIHZhciBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG4gIHZhciBvdmVycmlkZXMgPSBxdWVyeXN0cmluZy5wYXJzZShfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkpO1xuICBpZiAob3ZlcnJpZGVzLnBhdGgpIG9wdGlvbnMucGF0aCA9IG92ZXJyaWRlcy5wYXRoO1xuICBpZiAob3ZlcnJpZGVzLnRpbWVvdXQpIG9wdGlvbnMudGltZW91dCA9IG92ZXJyaWRlcy50aW1lb3V0O1xuICBpZiAob3ZlcnJpZGVzLm92ZXJsYXkpIG9wdGlvbnMub3ZlcmxheSA9IG92ZXJyaWRlcy5vdmVybGF5ICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLnJlbG9hZCkgb3B0aW9ucy5yZWxvYWQgPSBvdmVycmlkZXMucmVsb2FkICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLm5vSW5mbyAmJiBvdmVycmlkZXMubm9JbmZvICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLnF1aWV0ICYmIG92ZXJyaWRlcy5xdWlldCAhPT0gJ2ZhbHNlJykge1xuICAgIG9wdGlvbnMubG9nID0gZmFsc2U7XG4gICAgb3B0aW9ucy53YXJuID0gZmFsc2U7XG4gIH1cbiAgaWYgKG92ZXJyaWRlcy5keW5hbWljUHVibGljUGF0aCkge1xuICAgIG9wdGlvbnMucGF0aCA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgb3B0aW9ucy5wYXRoO1xuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAvLyBkbyBub3RoaW5nXG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuRXZlbnRTb3VyY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnNvbGUud2FybihcbiAgICBcIndlYnBhY2staG90LW1pZGRsZXdhcmUncyBjbGllbnQgcmVxdWlyZXMgRXZlbnRTb3VyY2UgdG8gd29yay4gXCIgK1xuICAgIFwiWW91IHNob3VsZCBpbmNsdWRlIGEgcG9seWZpbGwgaWYgeW91IHdhbnQgdG8gc3VwcG9ydCB0aGlzIGJyb3dzZXI6IFwiICtcbiAgICBcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2ZXItc2VudF9ldmVudHMjVG9vbHNcIlxuICApO1xufSBlbHNlIHtcbiAgY29ubmVjdCh3aW5kb3cuRXZlbnRTb3VyY2UpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0KEV2ZW50U291cmNlKSB7XG4gIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG5cbiAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZTtcbiAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG4gIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdDtcblxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAoKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkpID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KCk7XG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKTtcblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIGNvbm5lY3RlZFwiKTtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKGV2ZW50LmRhdGEgPT0gXCJcXHVEODNEXFx1REM5M1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzTWVzc2FnZShKU09OLnBhcnNlKGV2ZW50LmRhdGEpKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIEhNUiBtZXNzYWdlOiBcIiArIGV2ZW50LmRhdGEgKyBcIlxcblwiICsgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgc291cmNlLmNsb3NlKCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY29ubmVjdChFdmVudFNvdXJjZSk7IH0sIG9wdGlvbnMudGltZW91dCk7XG4gIH1cblxufVxuXG52YXIgcmVwb3J0ZXI7XG4vLyB0aGUgcmVwb3J0ZXIgbmVlZHMgdG8gYmUgYSBzaW5nbGV0b24gb24gdGhlIHBhZ2Vcbi8vIGluIGNhc2UgdGhlIGNsaWVudCBpcyBiZWluZyB1c2VkIGJ5IG11dGxpcGxlIGJ1bmRsZXNcbi8vIHdlIG9ubHkgd2FudCB0byByZXBvcnQgb25jZS5cbi8vIGFsbCB0aGUgZXJyb3JzIHdpbGwgZ28gdG8gYWxsIGNsaWVudHNcbnZhciBzaW5nbGV0b25LZXkgPSAnX193ZWJwYWNrX2hvdF9taWRkbGV3YXJlX3JlcG9ydGVyX18nO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3dbc2luZ2xldG9uS2V5XSkge1xuICByZXBvcnRlciA9IHdpbmRvd1tzaW5nbGV0b25LZXldID0gY3JlYXRlUmVwb3J0ZXIoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVwb3J0ZXIoKSB7XG4gIHZhciBzdHJpcCA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcblxuICB2YXIgb3ZlcmxheTtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5vdmVybGF5KSB7XG4gICAgb3ZlcmxheSA9IHJlcXVpcmUoJy4vY2xpZW50LW92ZXJsYXknKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvYmxlbXM6IGZ1bmN0aW9uKHR5cGUsIG9iaikge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBidW5kbGUgaGFzIFwiICsgdHlwZSArIFwiOlwiKTtcbiAgICAgICAgb2JqW3R5cGVdLmZvckVhY2goZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gXCIgKyBzdHJpcChtc2cpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcmxheSAmJiB0eXBlICE9PSAnd2FybmluZ3MnKSBvdmVybGF5LnNob3dQcm9ibGVtcyh0eXBlLCBvYmpbdHlwZV0pO1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob3ZlcmxheSkgb3ZlcmxheS5jbGVhcigpO1xuICAgIH0sXG4gICAgdXNlQ3VzdG9tT3ZlcmxheTogZnVuY3Rpb24oY3VzdG9tT3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGN1c3RvbU92ZXJsYXk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgcHJvY2Vzc1VwZGF0ZSA9IHJlcXVpcmUoJy4vcHJvY2Vzcy11cGRhdGUnKTtcblxudmFyIGN1c3RvbUhhbmRsZXI7XG52YXIgc3Vic2NyaWJlQWxsSGFuZGxlcjtcbmZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG9iaikge1xuICBzd2l0Y2gob2JqLmFjdGlvbikge1xuICAgIGNhc2UgXCJidWlsZGluZ1wiOlxuICAgICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIGJ1bmRsZSByZWJ1aWxkaW5nXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJ1aWx0XCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJbSE1SXSBidW5kbGUgXCIgKyAob2JqLm5hbWUgPyBvYmoubmFtZSArIFwiIFwiIDogXCJcIikgK1xuICAgICAgICAgIFwicmVidWlsdCBpbiBcIiArIG9iai50aW1lICsgXCJtc1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICBjYXNlIFwic3luY1wiOlxuICAgICAgaWYgKG9iai5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAocmVwb3J0ZXIpIHJlcG9ydGVyLnByb2JsZW1zKCdlcnJvcnMnLCBvYmopO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSB7XG4gICAgICAgICAgaWYgKG9iai53YXJuaW5ncy5sZW5ndGggPiAwKSByZXBvcnRlci5wcm9ibGVtcygnd2FybmluZ3MnLCBvYmopO1xuICAgICAgICAgIHJlcG9ydGVyLnN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzVXBkYXRlKG9iai5oYXNoLCBvYmoubW9kdWxlcywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGN1c3RvbUhhbmRsZXIpIHtcbiAgICAgICAgY3VzdG9tSGFuZGxlcihvYmopO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKHN1YnNjcmliZUFsbEhhbmRsZXIpIHtcbiAgICBzdWJzY3JpYmVBbGxIYW5kbGVyKG9iaik7XG4gIH1cbn1cblxuaWYgKG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdWJzY3JpYmVBbGw6IGZ1bmN0aW9uIHN1YnNjcmliZUFsbChoYW5kbGVyKSB7XG4gICAgICBzdWJzY3JpYmVBbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgIGN1c3RvbUhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgdXNlQ3VzdG9tT3ZlcmxheTogZnVuY3Rpb24gdXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KSB7XG4gICAgICBpZiAocmVwb3J0ZXIpIHJlcG9ydGVyLnVzZUN1c3RvbU92ZXJsYXkoY3VzdG9tT3ZlcmxheSk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC5qcz9vdmVybGF5PWZhbHNlJnJlbG9hZD10cnVlXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwiLyoqXG4gKiBCYXNlZCBoZWF2aWx5IG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svYmxvYi9cbiAqICBjMGFmZGY5YzZhYmMxZGQ3MDcwN2M1OTRlNDczODAyYTU2NmY3YjZlL2hvdC9vbmx5LWRldi1zZXJ2ZXIuanNcbiAqIE9yaWdpbmFsIGNvcHlyaWdodCBUb2JpYXMgS29wcGVycyBAc29rcmEgKE1JVCBsaWNlbnNlKVxuICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgX193ZWJwYWNrX2hhc2hfXyAqL1xuXG5pZiAoIW1vZHVsZS5ob3QpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG5cbnZhciBobXJEb2NzVXJsID0gXCJodHRwOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50LXdpdGgtd2VicGFjay5odG1sXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXG52YXIgbGFzdEhhc2g7XG52YXIgZmFpbHVyZVN0YXR1c2VzID0geyBhYm9ydDogMSwgZmFpbDogMSB9O1xudmFyIGFwcGx5T3B0aW9ucyA9IHsgaWdub3JlVW5hY2NlcHRlZDogdHJ1ZSB9O1xuXG5mdW5jdGlvbiB1cFRvRGF0ZShoYXNoKSB7XG4gIGlmIChoYXNoKSBsYXN0SGFzaCA9IGhhc2g7XG4gIHJldHVybiBsYXN0SGFzaCA9PSBfX3dlYnBhY2tfaGFzaF9fO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhhc2gsIG1vZHVsZU1hcCwgb3B0aW9ucykge1xuICB2YXIgcmVsb2FkID0gb3B0aW9ucy5yZWxvYWQ7XG4gIGlmICghdXBUb0RhdGUoaGFzaCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PSBcImlkbGVcIikge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xuICAgIGNoZWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbihlcnIsIHVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoZXJyKTtcblxuICAgICAgaWYoIXVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgZmluZCB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gKFByb2JhYmx5IGJlY2F1c2Ugb2YgcmVzdGFydGluZyB0aGUgc2VydmVyKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXBwbHlDYWxsYmFjayA9IGZ1bmN0aW9uKGFwcGx5RXJyLCByZW5ld2VkTW9kdWxlcykge1xuICAgICAgICBpZiAoYXBwbHlFcnIpIHJldHVybiBoYW5kbGVFcnJvcihhcHBseUVycik7XG5cbiAgICAgICAgaWYgKCF1cFRvRGF0ZSgpKSBjaGVjaygpO1xuXG4gICAgICAgIGxvZ1VwZGF0ZXModXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhcHBseVJlc3VsdCA9IG1vZHVsZS5ob3QuYXBwbHkoYXBwbHlPcHRpb25zLCBhcHBseUNhbGxiYWNrKTtcbiAgICAgIC8vIHdlYnBhY2sgMiBwcm9taXNlXG4gICAgICBpZiAoYXBwbHlSZXN1bHQgJiYgYXBwbHlSZXN1bHQudGhlbikge1xuICAgICAgICAvLyBIb3RNb2R1bGVSZXBsYWNlbWVudC5ydW50aW1lLmpzIHJlZmVycyB0byB0aGUgcmVzdWx0IGFzIGBvdXRkYXRlZE1vZHVsZXNgXG4gICAgICAgIGFwcGx5UmVzdWx0LnRoZW4oZnVuY3Rpb24ob3V0ZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgICAgYXBwbHlDYWxsYmFjayhudWxsLCBvdXRkYXRlZE1vZHVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwbHlSZXN1bHQuY2F0Y2goYXBwbHlDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9IG1vZHVsZS5ob3QuY2hlY2soZmFsc2UsIGNiKTtcbiAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24odXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICAgIGNiKG51bGwsIHVwZGF0ZWRNb2R1bGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5jYXRjaChjYik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICB2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgIHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG4gICAgfSk7XG5cbiAgICBpZih1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogXCIgK1xuICAgICAgICAgIFwiKEZ1bGwgcmVsb2FkIG5lZWRlZClcXG5cIiArXG4gICAgICAgICAgXCJUaGlzIGlzIHVzdWFsbHkgYmVjYXVzZSB0aGUgbW9kdWxlcyB3aGljaCBoYXZlIGNoYW5nZWQgXCIgK1xuICAgICAgICAgIFwiKGFuZCB0aGVpciBwYXJlbnRzKSBkbyBub3Qga25vdyBob3cgdG8gaG90IHJlbG9hZCB0aGVtc2VsdmVzLiBcIiArXG4gICAgICAgICAgXCJTZWUgXCIgKyBobXJEb2NzVXJsICsgXCIgZm9yIG1vcmUgZGV0YWlscy5cIlxuICAgICAgICApO1xuICAgICAgICB1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVNYXBbbW9kdWxlSWRdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubG9nKSB7XG4gICAgICBpZighcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG4gICAgICAgIHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdICAtIFwiICsgbW9kdWxlTWFwW21vZHVsZUlkXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodXBUb0RhdGUoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIpIHtcbiAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSBpbiBmYWlsdXJlU3RhdHVzZXMpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gQ2Fubm90IGNoZWNrIGZvciB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIFwiICsgZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gVXBkYXRlIGNoZWNrIGZhaWxlZDogXCIgKyBlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm1SZWxvYWQoKSB7XG4gICAgaWYgKHJlbG9hZCkge1xuICAgICAgaWYgKG9wdGlvbnMud2FybikgY29uc29sZS53YXJuKFwiW0hNUl0gUmVsb2FkaW5nIHBhZ2VcIik7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL3Byb2Nlc3MtdXBkYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9mcmVlemVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKFQsIEQpe1xuICByZXR1cm4gJC5zZXREZXNjcyhULCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmZyZWV6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9mcmVlemUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uKCRmcmVlemUpe1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKGl0KSA6IGl0O1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbnZhciBfaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG5cbi8qKlxuICogQ2FtZWxjYXNlcyBhIGh5cGhlbmF0ZWQgc3RyaW5nLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gY2FtZWxpemUoJ2JhY2tncm91bmQtY29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZENvbG9yXCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoX2h5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChfLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsaXplO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9jYW1lbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhbWVsaXplID0gcmVxdWlyZSgnLi9jYW1lbGl6ZScpO1xuXG52YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCdiYWNrZ3JvdW5kLWNvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmRDb2xvclwiXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJy1tb3otdHJhbnNpdGlvbicpXG4gKiAgIDwgXCJNb3pUcmFuc2l0aW9uXCJcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnLW1zLXRyYW5zaXRpb24nKVxuICogICA8IFwibXNUcmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBBbmRpIFNtaXRoIHN1Z2dlc3RzXG4gKiAoaHR0cDovL3d3dy5hbmRpc21pdGguY29tL2Jsb2cvMjAxMi8wMi9tb2Rlcm5penItcHJlZml4ZWQvKSwgYW4gYC1tc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gbG93ZXJjYXNlIGBtc2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYW1lbGl6ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGNhbWVsaXplKHN0cmluZy5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbGl6ZVN0eWxlTmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbnZhciBfdXBwZXJjYXNlUGF0dGVybiA9IC8oW0EtWl0pL2c7XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgc3RyaW5nLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKlxuICogRm9yIENTUyBzdHlsZSBuYW1lcywgdXNlIGBoeXBoZW5hdGVTdHlsZU5hbWVgIGluc3RlYWQgd2hpY2ggd29ya3MgcHJvcGVybHlcbiAqIHdpdGggYWxsIHZlbmRvciBwcmVmaXhlcywgaW5jbHVkaW5nIGBtc2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfdXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9oeXBoZW5hdGUuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xudmFyIGNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nIGluIGNhY2hlXG4gICAgPyBjYWNoZVtzdHJpbmddXG4gICAgOiBjYWNoZVtzdHJpbmddID0gc3RyaW5nXG4gICAgICAucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQmJylcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FsYztcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfam9pblByZWZpeGVkVmFsdWUpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjYWxjKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEpIHtcbiAgICByZXR1cm4gKDAsIF9qb2luUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkocHJvcGVydHksIHZhbHVlLCBmdW5jdGlvbiAocHJlZml4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgcHJlZml4ICsgJ2NhbGMoJyk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2NhbGMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJzb3I7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbHVlcyA9IHtcbiAgJ3pvb20taW4nOiB0cnVlLFxuICAnem9vbS1vdXQnOiB0cnVlLFxuICBncmFiOiB0cnVlLFxuICBncmFiYmluZzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3Vyc29yKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdjdXJzb3InICYmIHZhbHVlc1t2YWx1ZV0pIHtcbiAgICByZXR1cm4gKDAsIF9qb2luUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkocHJvcGVydHksIHZhbHVlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvY3Vyc29yLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleDtcbnZhciB2YWx1ZXMgPSB7IGZsZXg6IHRydWUsICdpbmxpbmUtZmxleCc6IHRydWUgfTtcblxuZnVuY3Rpb24gZmxleChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBbJy13ZWJraXQtYm94JywgJy1tb3otYm94JywgJy1tcy0nICsgdmFsdWUgKyAnYm94JywgJy13ZWJraXQtJyArIHZhbHVlLCB2YWx1ZV1cbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleGJveElFO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnZGlzdHJpYnV0ZScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnXG59O1xudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduQ29udGVudDogJ21zRmxleExpbmVQYWNrJyxcbiAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgYWxpZ25JdGVtczogJ21zRmxleEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdtc0ZsZXhQYWNrJyxcbiAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gIGZsZXhHcm93OiAnbXNGbGV4UG9zaXRpdmUnLFxuICBmbGV4U2hyaW5rOiAnbXNGbGV4TmVnYXRpdmUnLFxuICBmbGV4QmFzaXM6ICdtc1ByZWZlcnJlZFNpemUnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94SUUocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94SUUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICAnd3JhcC1yZXZlcnNlJzogJ211bHRpcGxlJyxcbiAgd3JhcDogJ211bHRpcGxlJ1xufTtcblxudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnV2Via2l0Qm94UGFjaycsXG4gIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94T2xkKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFdlYmtpdEJveE9yaWVudDogdmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsXG4gICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICB9O1xuICB9XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94T2xkLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC87XG5cbmZ1bmN0aW9uIGdyYWRpZW50KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5tYXRjaCh2YWx1ZXMpICE9PSBudWxsKSB7XG4gICAgcmV0dXJuICgwLCBfam9pblByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHByb3BlcnR5LCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2dyYWRpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5mdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAncG9zaXRpb24nICYmIHZhbHVlID09PSAnc3RpY2t5Jykge1xuICAgIHJldHVybiB7IHBvc2l0aW9uOiBbJy13ZWJraXQtc3RpY2t5JywgJ3N0aWNreSddIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL3Bvc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2l6aW5nO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvam9pblByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qb2luUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICBtYXhIZWlnaHQ6IHRydWUsXG4gIG1heFdpZHRoOiB0cnVlLFxuICB3aWR0aDogdHJ1ZSxcbiAgaGVpZ2h0OiB0cnVlLFxuICBjb2x1bW5XaWR0aDogdHJ1ZSxcbiAgbWluV2lkdGg6IHRydWUsXG4gIG1pbkhlaWdodDogdHJ1ZVxufTtcbnZhciB2YWx1ZXMgPSB7XG4gICdtaW4tY29udGVudCc6IHRydWUsXG4gICdtYXgtY29udGVudCc6IHRydWUsXG4gICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICdmaXQtY29udGVudCc6IHRydWUsXG4gICdjb250YWluLWZsb2F0cyc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHNpemluZyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldICYmIHZhbHVlc1t2YWx1ZV0pIHtcbiAgICByZXR1cm4gKDAsIF9qb2luUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkocHJvcGVydHksIHZhbHVlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvc2l6aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbjtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdoeXBoZW5hdGUtc3R5bGUtbmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxudmFyIF9wcmVmaXhQcm9wcyA9IHJlcXVpcmUoJy4uL3ByZWZpeFByb3BzJyk7XG5cbnZhciBfcHJlZml4UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uOiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgb3V0cHV0VmFsdWUgPSBwcmVmaXhWYWx1ZSh2YWx1ZSk7XG4gICAgdmFyIHdlYmtpdE91dHB1dCA9IG91dHB1dFZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvLW1vei18LW1zLS8pID09PSBudWxsO1xuICAgIH0pLmpvaW4oJywnKTtcblxuICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSBpcyBhbHJlYWR5IHByZWZpeGVkXG4gICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ1dlYmtpdCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCB3ZWJraXRPdXRwdXQpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVmMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsICdXZWJraXQnICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSksIHdlYmtpdE91dHB1dCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcHJvcGVydHksIG91dHB1dFZhbHVlKSwgX3JlZjI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZml4VmFsdWUodmFsdWUpIHtcbiAgaWYgKCgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyBvbmx5IHNwbGl0IG11bHRpIHZhbHVlcywgbm90IGN1YmljIGJlemllcnNcbiAgdmFyIG11bHRpcGxlVmFsdWVzID0gdmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZyk7XG5cbiAgLy8gaXRlcmF0ZSBlYWNoIHNpbmdsZSB2YWx1ZSBhbmQgY2hlY2sgZm9yIHRyYW5zaXRpb25lZCBwcm9wZXJ0aWVzXG4gIC8vIHRoYXQgbmVlZCB0byBiZSBwcmVmaXhlZCBhcyB3ZWxsXG4gIG11bHRpcGxlVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSBPYmplY3Qua2V5cyhfcHJlZml4UHJvcHMyLmRlZmF1bHQpLnJlZHVjZShmdW5jdGlvbiAob3V0LCBwcmVmaXgpIHtcbiAgICAgIHZhciBkYXNoQ2FzZVByZWZpeCA9ICctJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJy0nO1xuXG4gICAgICBPYmplY3Qua2V5cyhfcHJlZml4UHJvcHMyLmRlZmF1bHRbcHJlZml4XSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgZGFzaENhc2VQcm9wZXJ0eSA9ICgwLCBfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KShwcm9wKTtcblxuICAgICAgICBpZiAodmFsLmluZGV4T2YoZGFzaENhc2VQcm9wZXJ0eSkgPiAtMSAmJiBkYXNoQ2FzZVByb3BlcnR5ICE9PSAnb3JkZXInKSB7XG4gICAgICAgICAgLy8gam9pbiBhbGwgcHJlZml4ZXMgYW5kIGNyZWF0ZSBhIG5ldyB2YWx1ZVxuICAgICAgICAgIG91dCA9IHZhbC5yZXBsYWNlKGRhc2hDYXNlUHJvcGVydHksIGRhc2hDYXNlUHJlZml4ICsgZGFzaENhc2VQcm9wZXJ0eSkgKyAnLCcgKyBvdXQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9LCB2YWwpO1xuICB9KTtcblxuICByZXR1cm4gbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvdHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeEFsbDtcblxudmFyIF9wcmVmaXhQcm9wcyA9IHJlcXVpcmUoJy4vcHJlZml4UHJvcHMnKTtcblxudmFyIF9wcmVmaXhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQcm9wcyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX3NvcnRQcmVmaXhlZFN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbHMvc29ydFByZWZpeGVkU3R5bGUnKTtcblxudmFyIF9zb3J0UHJlZml4ZWRTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zb3J0UHJlZml4ZWRTdHlsZSk7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCcuL3BsdWdpbnMvcG9zaXRpb24nKTtcblxudmFyIF9wb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jYWxjJyk7XG5cbnZhciBfY2FsYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYWxjKTtcblxudmFyIF9jdXJzb3IgPSByZXF1aXJlKCcuL3BsdWdpbnMvY3Vyc29yJyk7XG5cbnZhciBfY3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnNvcik7XG5cbnZhciBfZmxleCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Jyk7XG5cbnZhciBfZmxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4KTtcblxudmFyIF9zaXppbmcgPSByZXF1aXJlKCcuL3BsdWdpbnMvc2l6aW5nJyk7XG5cbnZhciBfc2l6aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpemluZyk7XG5cbnZhciBfZ3JhZGllbnQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZ3JhZGllbnQnKTtcblxudmFyIF9ncmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmFkaWVudCk7XG5cbnZhciBfdHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy90cmFuc2l0aW9uJyk7XG5cbnZhciBfdHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uKTtcblxudmFyIF9mbGV4Ym94SUUgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveElFJyk7XG5cbnZhciBfZmxleGJveElFMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hJRSk7XG5cbnZhciBfZmxleGJveE9sZCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94T2xkJyk7XG5cbnZhciBfZmxleGJveE9sZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4Ym94T2xkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gc3BlY2lhbCBmbGV4Ym94IHNwZWNpZmljYXRpb25zXG5cblxudmFyIHBsdWdpbnMgPSBbX3Bvc2l0aW9uMi5kZWZhdWx0LCBfY2FsYzIuZGVmYXVsdCwgX2N1cnNvcjIuZGVmYXVsdCwgX3NpemluZzIuZGVmYXVsdCwgX2dyYWRpZW50Mi5kZWZhdWx0LCBfdHJhbnNpdGlvbjIuZGVmYXVsdCwgX2ZsZXhib3hJRTIuZGVmYXVsdCwgX2ZsZXhib3hPbGQyLmRlZmF1bHQsIF9mbGV4Mi5kZWZhdWx0XTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2JqZWN0IHVzaW5nIGFsbCB2ZW5kb3IgcHJlZml4ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgLy8gcmVjdXJzZSB0aHJvdWdoIG5lc3RlZCBzdHlsZSBvYmplY3RzXG4gICAgICBzdHlsZXNbcHJvcGVydHldID0gcHJlZml4QWxsKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoX3ByZWZpeFByb3BzMi5kZWZhdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBfcHJlZml4UHJvcHMyLmRlZmF1bHRbcHJlZml4XTtcbiAgICAgICAgLy8gYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICBzdHlsZXNbcHJlZml4ICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIFtdLmNvbmNhdChzdHlsZXNbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIC8vIHJlc29sdmUgZXZlcnkgc3BlY2lhbCBwbHVnaW5zXG4gICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gYXNzaWduU3R5bGVzKHN0eWxlcywgcGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoMCwgX3NvcnRQcmVmaXhlZFN0eWxlMi5kZWZhdWx0KShzdHlsZXMpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25TdHlsZXMoYmFzZSkge1xuICB2YXIgZXh0ZW5kID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgT2JqZWN0LmtleXMoZXh0ZW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHZhciBiYXNlVmFsdWUgPSBiYXNlW3Byb3BlcnR5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlVmFsdWUpKSB7XG4gICAgICBbXS5jb25jYXQoZXh0ZW5kW3Byb3BlcnR5XSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlSW5kZXggPSBiYXNlVmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICBiYXNlW3Byb3BlcnR5XS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZVtwcm9wZXJ0eV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVtwcm9wZXJ0eV0gPSBleHRlbmRbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcHJlZml4QWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14oV2Via2l0fE1venxPfG1zKS8pICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9pc1ByZWZpeGVkUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzb3J0UHJlZml4ZWRTdHlsZTtcblxudmFyIF9pc1ByZWZpeGVkUHJvcGVydHkgPSByZXF1aXJlKCcuL2lzUHJlZml4ZWRQcm9wZXJ0eScpO1xuXG52YXIgX2lzUHJlZml4ZWRQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzb3J0UHJlZml4ZWRTdHlsZShzdHlsZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKCgwLCBfaXNQcmVmaXhlZFByb3BlcnR5Mi5kZWZhdWx0KShsZWZ0KSAmJiAhKDAsIF9pc1ByZWZpeGVkUHJvcGVydHkyLmRlZmF1bHQpKHJpZ2h0KSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoISgwLCBfaXNQcmVmaXhlZFByb3BlcnR5Mi5kZWZhdWx0KShsZWZ0KSAmJiAoMCwgX2lzUHJlZml4ZWRQcm9wZXJ0eTIuZGVmYXVsdCkocmlnaHQpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoc29ydGVkU3R5bGUsIHByb3ApIHtcbiAgICBzb3J0ZWRTdHlsZVtwcm9wXSA9IHN0eWxlW3Byb3BdO1xuICAgIHJldHVybiBzb3J0ZWRTdHlsZTtcbiAgfSwge30pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvc29ydFByZWZpeGVkU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3N0YXRpYy9wcmVmaXhBbGwnKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb25cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmbikge1xuICB2YXIgc3RyaW5nID0gdG9TdHJpbmcuY2FsbChmbilcbiAgcmV0dXJuIHN0cmluZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fFxuICAgICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgc3RyaW5nICE9PSAnW29iamVjdCBSZWdFeHBdJykgfHxcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgLy8gSUU4IGFuZCBiZWxvd1xuICAgICAoZm4gPT09IHdpbmRvdy5zZXRUaW1lb3V0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmFsZXJ0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmNvbmZpcm0gfHxcbiAgICAgIGZuID09PSB3aW5kb3cucHJvbXB0KSlcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIi8qIVxuICogaXNvYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgaXNBcnJheSh2YWwpID09PSBmYWxzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNvYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3NzID0gcmVxdWlyZSgnLi9jc3MnKTtcblxudmFyIF9jc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzKTtcblxudmFyIF9HbG9iYWxTdHlsZSA9IHJlcXVpcmUoJy4uL21vZGVscy9HbG9iYWxTdHlsZScpO1xuXG52YXIgX0dsb2JhbFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dsb2JhbFN0eWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgaW5qZWN0R2xvYmFsID0gZnVuY3Rpb24gaW5qZWN0R2xvYmFsKHN0cmluZ3MpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBnbG9iYWxTdHlsZSA9IG5ldyBfR2xvYmFsU3R5bGUyLmRlZmF1bHQoX2NzczIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKSk7XG4gIGdsb2JhbFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0KCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpbmplY3RHbG9iYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL2NvbnN0cnVjdG9ycy9pbmplY3RHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2hhc2ggPSByZXF1aXJlKCdnbGFtb3IvbGliL2hhc2gnKTtcblxudmFyIF9oYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2gpO1xuXG52YXIgX2NzcyA9IHJlcXVpcmUoJy4vY3NzJyk7XG5cbnZhciBfY3NzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzcyk7XG5cbnZhciBfR2xvYmFsU3R5bGUgPSByZXF1aXJlKCcuLi9tb2RlbHMvR2xvYmFsU3R5bGUnKTtcblxudmFyIF9HbG9iYWxTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbG9iYWxTdHlsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9OYW1lR2VuZXJhdG9yID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9OYW1lR2VuZXJhdG9yIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgcmVwbGFjZVdoaXRlc3BhY2UgPSBmdW5jdGlvbiByZXBsYWNlV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHN8XFxcXG4vZywgJycpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG5hbWVHZW5lcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmdzKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBydWxlcyA9IF9jc3MyLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gICAgdmFyIGhhc2ggPSAoMCwgX2hhc2gyLmRlZmF1bHQpKHJlcGxhY2VXaGl0ZXNwYWNlKEpTT04uc3RyaW5naWZ5KHJ1bGVzKSkpO1xuICAgIHZhciBuYW1lID0gbmFtZUdlbmVyYXRvcihoYXNoKTtcbiAgICB2YXIga2V5ZnJhbWVzID0gbmV3IF9HbG9iYWxTdHlsZTIuZGVmYXVsdChydWxlcywgJ0BrZXlmcmFtZXMgJyArIG5hbWUpO1xuICAgIGtleWZyYW1lcy5nZW5lcmF0ZUFuZEluamVjdCgpO1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMva2V5ZnJhbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jc3MgPSByZXF1aXJlKCcuL2NzcycpO1xuXG52YXIgX2NzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MpO1xuXG52YXIgX2RvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tRWxlbWVudHMnKTtcblxudmFyIF9kb21FbGVtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21FbGVtZW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhcmdldCB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0eWxlZENvbXBvbmVudCkge1xuICB2YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKHRhZykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyaW5ncykge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZWRDb21wb25lbnQodGFnLCBfY3NzMi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgW3N0cmluZ3NdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFNob3J0aGFuZHMgZm9yIGFsbCB2YWxpZCBIVE1MIEVsZW1lbnRzXG4gIF9kb21FbGVtZW50czIuZGVmYXVsdC5mb3JFYWNoKGZ1bmN0aW9uIChkb21FbGVtZW50KSB7XG4gICAgc3R5bGVkW2RvbUVsZW1lbnRdID0gc3R5bGVkKGRvbUVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gc3R5bGVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMvc3R5bGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKCcuLi9tb2RlbHMvVGhlbWVQcm92aWRlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG4vKiBnbG9iYWxzIFJlYWN0Q2xhc3MgKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDI7XG5cbiAgcmV0dXJuIF90ZW1wMiA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKF9jbGFzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBfY2xhc3MoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9jbGFzcyk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBfY2xhc3MuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihfY2xhc3MpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHt9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0W19UaGVtZVByb3ZpZGVyLkNIQU5ORUxdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbd2l0aFRoZW1lXSBQbGVhc2UgdXNlIFRoZW1lUHJvdmlkZXIgdG8gYmUgYWJsZSB0byB1c2Ugd2l0aFRoZW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3Vic2NyaWJlID0gdGhpcy5jb250ZXh0W19UaGVtZVByb3ZpZGVyLkNIQU5ORUxdO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHRoZW1lOiB0aGVtZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5zdGF0ZS50aGVtZTtcblxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHsgdGhlbWU6IHRoZW1lIH0sIHRoaXMucHJvcHMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gX2NsYXNzO1xuICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCBfY2xhc3MuY29udGV4dFR5cGVzID0gX2RlZmluZVByb3BlcnR5KHt9LCBfVGhlbWVQcm92aWRlci5DSEFOTkVMLCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMpLCBfdGVtcDI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL2hvYy93aXRoVGhlbWUuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZSgnLi9UaGVtZVByb3ZpZGVyJyk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEFic3RyYWN0U3R5bGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFic3RyYWN0U3R5bGVkQ29tcG9uZW50LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBYnN0cmFjdFN0eWxlZENvbXBvbmVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWJzdHJhY3RTdHlsZWRDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBYnN0cmFjdFN0eWxlZENvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFic3RyYWN0U3R5bGVkQ29tcG9uZW50KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICByZXR1cm4gQWJzdHJhY3RTdHlsZWRDb21wb25lbnQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBYnN0cmFjdFN0eWxlZENvbXBvbmVudDtcblxuXG5BYnN0cmFjdFN0eWxlZENvbXBvbmVudC5jb250ZXh0VHlwZXMgPSBfZGVmaW5lUHJvcGVydHkoe30sIF9UaGVtZVByb3ZpZGVyLkNIQU5ORUwsIF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9BYnN0cmFjdFN0eWxlZENvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJ2dsYW1vci9saWIvaGFzaCcpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbnZhciBfZmxhdHRlbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZsYXR0ZW4nKTtcblxudmFyIF9mbGF0dGVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsYXR0ZW4pO1xuXG52YXIgX3BhcnNlID0gcmVxdWlyZSgnLi4vdmVuZG9yL3Bvc3Rjc3Mtc2FmZS1wYXJzZXIvcGFyc2UnKTtcblxudmFyIF9wYXJzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZSk7XG5cbnZhciBfcG9zdGNzc05lc3RlZCA9IHJlcXVpcmUoJy4uL3ZlbmRvci9wb3N0Y3NzLW5lc3RlZCcpO1xuXG52YXIgX3Bvc3Rjc3NOZXN0ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zdGNzc05lc3RlZCk7XG5cbnZhciBfYXV0b3ByZWZpeCA9IHJlcXVpcmUoJy4uL3V0aWxzL2F1dG9wcmVmaXgnKTtcblxudmFyIF9hdXRvcHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9wcmVmaXgpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKTtcblxudmFyIF9TdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfR2xhbW9ySW5zZXJ0ZWRSdWxlID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9HbGFtb3JJbnNlcnRlZFJ1bGUgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfTmFtZUdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfTmFtZUdlbmVyYXRvciB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0IHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxuLypcbiBDb21wb25lbnRTdHlsZSBpcyBhbGwgdGhlIENTUy1zcGVjaWZpYyBzdHVmZiwgbm90XG4gdGhlIFJlYWN0LXNwZWNpZmljIHN0dWZmLlxuICovXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAobmFtZUdlbmVyYXRvcikge1xuICB2YXIgaW5zZXJ0ZWQgPSB7fTtcblxuICB2YXIgQ29tcG9uZW50U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50U3R5bGUocnVsZXMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnRTdHlsZSk7XG5cbiAgICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICAgIGlmICghX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5qZWN0ZWQpIF9TdHlsZVNoZWV0Mi5kZWZhdWx0LmluamVjdCgpO1xuICAgICAgdGhpcy5pbnNlcnRlZFJ1bGUgPSBfU3R5bGVTaGVldDIuZGVmYXVsdC5pbnNlcnQoJycpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRmxhdHRlbnMgYSBydWxlIHNldCBpbnRvIHZhbGlkIENTU1xuICAgICAqIEhhc2hlcyBpdCwgd3JhcHMgdGhlIHdob2xlIGNodW5rIGluIGEgLl9oYXNoTmFtZSB7fVxuICAgICAqIFBhcnNlcyB0aGF0IHdpdGggUG9zdENTUyB0aGVuIHJ1bnMgUG9zdENTUy1OZXN0ZWQgb24gaXRcbiAgICAgKiBSZXR1cm5zIHRoZSBoYXNoIHRvIGJlIGluamVjdGVkIG9uIHJlbmRlcigpXG4gICAgICogKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbXBvbmVudFN0eWxlLCBbe1xuICAgICAga2V5OiAnZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQpIHtcbiAgICAgICAgdmFyIGZsYXRDU1MgPSAoMCwgX2ZsYXR0ZW4yLmRlZmF1bHQpKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQpLmpvaW4oJycpLnJlcGxhY2UoL15cXHMqXFwvXFwvLiokL2dtLCAnJyk7IC8vIHJlcGxhY2UgSlMgY29tbWVudHNcbiAgICAgICAgdmFyIGhhc2ggPSAoMCwgX2hhc2gyLmRlZmF1bHQpKGZsYXRDU1MpO1xuICAgICAgICBpZiAoIWluc2VydGVkW2hhc2hdKSB7XG4gICAgICAgICAgdmFyIHNlbGVjdG9yID0gbmFtZUdlbmVyYXRvcihoYXNoKTtcbiAgICAgICAgICBpbnNlcnRlZFtoYXNoXSA9IHNlbGVjdG9yO1xuICAgICAgICAgIHZhciByb290ID0gKDAsIF9wYXJzZTIuZGVmYXVsdCkoJy4nICsgc2VsZWN0b3IgKyAnIHsgJyArIGZsYXRDU1MgKyAnIH0nKTtcbiAgICAgICAgICAoMCwgX3Bvc3Rjc3NOZXN0ZWQyLmRlZmF1bHQpKHJvb3QpO1xuICAgICAgICAgICgwLCBfYXV0b3ByZWZpeDIuZGVmYXVsdCkocm9vdCk7XG4gICAgICAgICAgdGhpcy5pbnNlcnRlZFJ1bGUuYXBwZW5kUnVsZShyb290LnRvUmVzdWx0KCkuY3NzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zZXJ0ZWRbaGFzaF07XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudFN0eWxlO1xuICB9KCk7XG5cbiAgcmV0dXJuIENvbXBvbmVudFN0eWxlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvQ29tcG9uZW50U3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF92YWxpZEF0dHIgPSByZXF1aXJlKCcuLi91dGlscy92YWxpZEF0dHInKTtcblxudmFyIF92YWxpZEF0dHIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsaWRBdHRyKTtcblxudmFyIF9pc1RhZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzVGFnJyk7XG5cbnZhciBfaXNUYWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNUYWcpO1xuXG52YXIgX0Fic3RyYWN0U3R5bGVkQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9BYnN0cmFjdFN0eWxlZENvbXBvbmVudCcpO1xuXG52YXIgX0Fic3RyYWN0U3R5bGVkQ29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0U3R5bGVkQ29tcG9uZW50KTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZSgnLi9UaGVtZVByb3ZpZGVyJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RoZW1lID0gcmVxdWlyZSgnLi9UaGVtZVByb3ZpZGVyJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGhlbWUgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGFyZ2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfUnVsZVNldCA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfUnVsZVNldCB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChDb21wb25lbnRTdHlsZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGNyZWF0ZVN0eWxlZENvbXBvbmVudCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YXJnZXQsIHJ1bGVzLCBwYXJlbnQpIHtcbiAgICAvKiBIYW5kbGUgc3R5bGVkKE90aGVyU3R5bGVkQ29tcG9uZW50KSBkaWZmZXJlbnRseSAqL1xuICAgIHZhciBpc1N0eWxlZENvbXBvbmVudCA9IF9BYnN0cmFjdFN0eWxlZENvbXBvbmVudDIuZGVmYXVsdC5pc1Byb3RvdHlwZU9mKHRhcmdldCk7XG4gICAgaWYgKCEoMCwgX2lzVGFnMi5kZWZhdWx0KSh0YXJnZXQpICYmIGlzU3R5bGVkQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3R5bGVkQ29tcG9uZW50KHRhcmdldC50YXJnZXQsIHRhcmdldC5ydWxlcy5jb25jYXQocnVsZXMpLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBjb21wb25lbnRTdHlsZSA9IG5ldyBDb21wb25lbnRTdHlsZShydWxlcyk7XG4gICAgdmFyIFBhcmVudENvbXBvbmVudCA9IHBhcmVudCB8fCBfQWJzdHJhY3RTdHlsZWRDb21wb25lbnQyLmRlZmF1bHQ7XG5cbiAgICB2YXIgU3R5bGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9QYXJlbnRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhTdHlsZWRDb21wb25lbnQsIF9QYXJlbnRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBTdHlsZWRDb21wb25lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZWRDb21wb25lbnQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdHlsZWRDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHlsZWRDb21wb25lbnQpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICB0aGVtZTogbnVsbCxcbiAgICAgICAgICBnZW5lcmF0ZWRDbGFzc05hbWU6ICcnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKFN0eWxlZENvbXBvbmVudCwgW3tcbiAgICAgICAga2V5OiAnZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModGhlbWUsIHByb3BzKSB7XG4gICAgICAgICAgdmFyIGV4ZWN1dGlvbkNvbnRleHQgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgdGhlbWU6IHRoZW1lIH0pO1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnRTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhleGVjdXRpb25Db250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0aGVtZSBpbiB0aGUgY29udGV4dCwgc3Vic2NyaWJlIHRvIHRoZSBldmVudCBlbWl0dGVyLiBUaGlzXG4gICAgICAgICAgLy8gaXMgbmVjZXNzYXJ5IGR1ZSB0byBwdXJlIGNvbXBvbmVudHMgYmxvY2tpbmcgY29udGV4dCB1cGRhdGVzLCB0aGlzIGNpcmN1bXZlbnRzXG4gICAgICAgICAgLy8gdGhhdCBieSB1cGRhdGluZyB3aGVuIGFuIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICAgICAgICBpZiAodGhpcy5jb250ZXh0W19UaGVtZVByb3ZpZGVyLkNIQU5ORUxdKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaWJlID0gdGhpcy5jb250ZXh0W19UaGVtZVByb3ZpZGVyLkNIQU5ORUxdO1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN1YnNjcmliZShmdW5jdGlvbiAobmV4dFRoZW1lKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgb25jZSBpbW1lZGlhdGVseVxuXG4gICAgICAgICAgICAgIC8vIFByb3BzIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBUaGVtZVByb3ZpZGVyLCB3aGljaCBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXJcbiAgICAgICAgICAgICAgLy8gZGVmYXVsdFByb3BzLCBidXQgUmVhY3QgYXV0b21hdGljYWxseSBwdXRzIGRlZmF1bHRQcm9wcyBvbiBwcm9wcy5cbiAgICAgICAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IF90aGlzMi5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgICAgICAgdmFyIGlzRGVmYXVsdFRoZW1lID0gZGVmYXVsdFByb3BzICYmIF90aGlzMi5wcm9wcy50aGVtZSA9PT0gZGVmYXVsdFByb3BzLnRoZW1lO1xuICAgICAgICAgICAgICB2YXIgdGhlbWUgPSBfdGhpczIucHJvcHMudGhlbWUgJiYgIWlzRGVmYXVsdFRoZW1lID8gX3RoaXMyLnByb3BzLnRoZW1lIDogbmV4dFRoZW1lO1xuICAgICAgICAgICAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gX3RoaXMyLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHRoZW1lLCBfdGhpczIucHJvcHMpO1xuICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB0aGVtZTogdGhlbWUsIGdlbmVyYXRlZENsYXNzTmFtZTogZ2VuZXJhdGVkQ2xhc3NOYW1lIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfdGhlbWUgPSB0aGlzLnByb3BzLnRoZW1lIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IHRoaXMuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoX3RoZW1lLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogX3RoZW1lLCBnZW5lcmF0ZWRDbGFzc05hbWU6IGdlbmVyYXRlZENsYXNzTmFtZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAob2xkU3RhdGUpIHtcbiAgICAgICAgICAgIC8vIFByb3BzIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBUaGVtZVByb3ZpZGVyLCB3aGljaCBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRQcm9wcywgYnV0IFJlYWN0IGF1dG9tYXRpY2FsbHkgcHV0cyBkZWZhdWx0UHJvcHMgb24gcHJvcHMuXG4gICAgICAgICAgICB2YXIgZGVmYXVsdFByb3BzID0gX3RoaXMzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcztcblxuICAgICAgICAgICAgdmFyIGlzRGVmYXVsdFRoZW1lID0gZGVmYXVsdFByb3BzICYmIG5leHRQcm9wcy50aGVtZSA9PT0gZGVmYXVsdFByb3BzLnRoZW1lO1xuICAgICAgICAgICAgdmFyIHRoZW1lID0gbmV4dFByb3BzLnRoZW1lICYmICFpc0RlZmF1bHRUaGVtZSA/IG5leHRQcm9wcy50aGVtZSA6IG9sZFN0YXRlLnRoZW1lO1xuICAgICAgICAgICAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IF90aGlzMy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGVtZSwgbmV4dFByb3BzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgdGhlbWU6IHRoZW1lLCBnZW5lcmF0ZWRDbGFzc05hbWU6IGdlbmVyYXRlZENsYXNzTmFtZSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgIGlubmVyUmVmID0gX3Byb3BzLmlubmVyUmVmO1xuICAgICAgICAgIHZhciBnZW5lcmF0ZWRDbGFzc05hbWUgPSB0aGlzLnN0YXRlLmdlbmVyYXRlZENsYXNzTmFtZTtcblxuXG4gICAgICAgICAgdmFyIHByb3BzRm9yRWxlbWVudCA9IHt9O1xuICAgICAgICAgIC8qIERvbid0IHBhc3MgdGhyb3VnaCBub24gSFRNTCB0YWdzIHRocm91Z2ggdG8gSFRNTCBlbGVtZW50cyAqL1xuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZpbHRlcihmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9pc1RhZzIuZGVmYXVsdCkodGFyZ2V0KSB8fCAoMCwgX3ZhbGlkQXR0cjIuZGVmYXVsdCkocHJvcE5hbWUpO1xuICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgICAgICBwcm9wc0ZvckVsZW1lbnRbcHJvcE5hbWVdID0gX3RoaXM0LnByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwcm9wc0ZvckVsZW1lbnQuY2xhc3NOYW1lID0gW2NsYXNzTmFtZSwgZ2VuZXJhdGVkQ2xhc3NOYW1lXS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICAgICAgICBpZiAoaW5uZXJSZWYpIHtcbiAgICAgICAgICAgIHByb3BzRm9yRWxlbWVudC5yZWYgPSBpbm5lclJlZjtcbiAgICAgICAgICAgIGlmICgoMCwgX2lzVGFnMi5kZWZhdWx0KSh0YXJnZXQpKSBkZWxldGUgcHJvcHNGb3JFbGVtZW50LmlubmVyUmVmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKHRhcmdldCwgcHJvcHNGb3JFbGVtZW50LCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFN0eWxlZENvbXBvbmVudDtcbiAgICB9KFBhcmVudENvbXBvbmVudCk7XG5cbiAgICBTdHlsZWRDb21wb25lbnQuY29udGV4dFR5cGVzID0gUGFyZW50Q29tcG9uZW50LmNvbnRleHRUeXBlcztcblxuXG4gICAgU3R5bGVkQ29tcG9uZW50LnRhcmdldCA9IHRhcmdldDtcbiAgICBTdHlsZWRDb21wb25lbnQucnVsZXMgPSBydWxlcztcblxuICAgIFN0eWxlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICgwLCBfaXNUYWcyLmRlZmF1bHQpKHRhcmdldCkgPyAnc3R5bGVkLicgKyB0YXJnZXQgOiAnU3R5bGVkKCcgKyAodGFyZ2V0LmRpc3BsYXlOYW1lIHx8IHRhcmdldC5uYW1lIHx8ICdDb21wb25lbnQnKSArICcpJztcblxuICAgIHJldHVybiBTdHlsZWRDb21wb25lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL1N0eWxlZENvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2FtZWxpemVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplU3R5bGVOYW1lKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGVOYW1lKTtcblxudmFyIF9zdGF0aWMgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljJyk7XG5cbnZhciBfc3RhdGljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRpYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9Db250YWluZXIgPSByZXF1aXJlKCcuLi92ZW5kb3IvcG9zdGNzcy9jb250YWluZXInKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9Db250YWluZXIgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocm9vdCkge1xuICByb290LndhbGtEZWNscyhmdW5jdGlvbiAoZGVjbCkge1xuICAgIC8qIE5vIHBvaW50IGV2ZW4gY2hlY2tpbmcgY3VzdG9tIHByb3BzICovXG4gICAgaWYgKC9eLS0vLnRlc3QoZGVjbC5wcm9wKSkgcmV0dXJuO1xuXG4gICAgdmFyIG9ialN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCAoMCwgX2NhbWVsaXplU3R5bGVOYW1lMi5kZWZhdWx0KShkZWNsLnByb3ApLCBkZWNsLnZhbHVlKTtcbiAgICB2YXIgcHJlZml4ZWQgPSAoMCwgX3N0YXRpYzIuZGVmYXVsdCkob2JqU3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKHByZWZpeGVkKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAobmV3UHJvcCkge1xuICAgICAgdmFyIG5ld1ZhbHMgPSBwcmVmaXhlZFtuZXdQcm9wXTtcbiAgICAgIHZhciBuZXdWYWxBcnJheSA9IEFycmF5LmlzQXJyYXkobmV3VmFscykgPyBuZXdWYWxzIDogW25ld1ZhbHNdO1xuICAgICAgbmV3VmFsQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICAgIGRlY2wuY2xvbmVCZWZvcmUoe1xuICAgICAgICAgIHByb3A6ICgwLCBfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KShuZXdQcm9wKSxcbiAgICAgICAgICB2YWx1ZTogbmV3VmFsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGVjbC5yZW1vdmUoKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2F1dG9wcmVmaXguanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG4vLyBUaGFua3MgdG8gUmVhY3RET01GYWN0b3JpZXMgZm9yIHRoaXMgaGFuZHkgbGlzdCFcblxuZXhwb3J0cy5kZWZhdWx0ID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJyxcblxuLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdnJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyR3JhZGllbnQnLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZG9tRWxlbWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLnNwbGl0KCcnKTtcblxuLyogU29tZSBoaWdoIG51bWJlciwgdXN1YWxseSA5LWRpZ2l0IGJhc2UtMTAuIE1hcCBpdCB0byBiYXNlLfCfmI4gKi9cbnZhciBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lID0gZnVuY3Rpb24gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShjb2RlKSB7XG4gIHZhciBsYXN0RGlnaXQgPSBjaGFyc1tjb2RlICUgY2hhcnMubGVuZ3RoXTtcbiAgcmV0dXJuIGNvZGUgPiBjaGFycy5sZW5ndGggPyAnJyArIGdlbmVyYXRlQWxwaGFiZXRpY05hbWUoTWF0aC5mbG9vcihjb2RlIC8gY2hhcnMubGVuZ3RoKSkgKyBsYXN0RGlnaXQgOiBsYXN0RGlnaXQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RyaW5ncywgaW50ZXJwb2xhdGlvbnMpIHtcbiAgcmV0dXJuIGludGVycG9sYXRpb25zLnJlZHVjZShmdW5jdGlvbiAoYXJyYXksIGludGVycCwgaSkge1xuICAgIHJldHVybiBhcnJheS5jb25jYXQoaW50ZXJwLCBzdHJpbmdzW2kgKyAxXSk7XG4gIH0sIFtzdHJpbmdzWzBdXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2ludGVybGVhdmUuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNUYWc7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhcmdldCB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbmZ1bmN0aW9uIGlzVGFnKHRhcmdldCkgLyogOiAlY2hlY2tzICove1xuICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZyc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2lzVGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuLyogVHJ5aW5nIHRvIGF2b2lkIHRoZSB1bmtub3duLXByb3AgZXJyb3JzIG9uIHN0eWxlZCBjb21wb25lbnRzXG4gYnkgZmlsdGVyaW5nIGJ5IFJlYWN0J3MgYXR0cmlidXRlIHdoaXRlbGlzdC5cbiAqL1xuXG4vKiBMb2dpYyBjb3BpZWQgZnJvbSBSZWFjdERPTVVua25vd25Qcm9wZXJ0eUhvb2sgKi9cbnZhciByZWFjdFByb3BzID0ge1xuICBjaGlsZHJlbjogdHJ1ZSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHRydWUsXG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBhdXRvRm9jdXM6IHRydWUsXG4gIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAgdmFsdWVMaW5rOiB0cnVlLFxuICBkZWZhdWx0Q2hlY2tlZDogdHJ1ZSxcbiAgY2hlY2tlZExpbms6IHRydWUsXG4gIGlubmVySFRNTDogdHJ1ZSxcbiAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nOiB0cnVlLFxuICBvbkZvY3VzSW46IHRydWUsXG4gIG9uRm9jdXNPdXQ6IHRydWUsXG4gIGNsYXNzTmFtZTogdHJ1ZSxcblxuICAvKiBMaXN0IGNvcGllZCBmcm9tIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvZXZlbnRzLmh0bWwgKi9cbiAgb25Db3B5OiB0cnVlLFxuICBvbkN1dDogdHJ1ZSxcbiAgb25QYXN0ZTogdHJ1ZSxcbiAgb25Db21wb3NpdGlvbkVuZDogdHJ1ZSxcbiAgb25Db21wb3NpdGlvblN0YXJ0OiB0cnVlLFxuICBvbkNvbXBvc2l0aW9uVXBkYXRlOiB0cnVlLFxuICBvbktleURvd246IHRydWUsXG4gIG9uS2V5UHJlc3M6IHRydWUsXG4gIG9uS2V5VXA6IHRydWUsXG4gIG9uRm9jdXM6IHRydWUsXG4gIG9uQmx1cjogdHJ1ZSxcbiAgb25DaGFuZ2U6IHRydWUsXG4gIG9uSW5wdXQ6IHRydWUsXG4gIG9uU3VibWl0OiB0cnVlLFxuICBvbkNsaWNrOiB0cnVlLFxuICBvbkNvbnRleHRNZW51OiB0cnVlLFxuICBvbkRvdWJsZUNsaWNrOiB0cnVlLFxuICBvbkRyYWc6IHRydWUsXG4gIG9uRHJhZ0VuZDogdHJ1ZSxcbiAgb25EcmFnRW50ZXI6IHRydWUsXG4gIG9uRHJhZ0V4aXQ6IHRydWUsXG4gIG9uRHJhZ0xlYXZlOiB0cnVlLFxuICBvbkRyYWdPdmVyOiB0cnVlLFxuICBvbkRyYWdTdGFydDogdHJ1ZSxcbiAgb25Ecm9wOiB0cnVlLFxuICBvbk1vdXNlRG93bjogdHJ1ZSxcbiAgb25Nb3VzZUVudGVyOiB0cnVlLFxuICBvbk1vdXNlTGVhdmU6IHRydWUsXG4gIG9uTW91c2VNb3ZlOiB0cnVlLFxuICBvbk1vdXNlT3V0OiB0cnVlLFxuICBvbk1vdXNlT3ZlcjogdHJ1ZSxcbiAgb25Nb3VzZVVwOiB0cnVlLFxuICBvblNlbGVjdDogdHJ1ZSxcbiAgb25Ub3VjaENhbmNlbDogdHJ1ZSxcbiAgb25Ub3VjaEVuZDogdHJ1ZSxcbiAgb25Ub3VjaE1vdmU6IHRydWUsXG4gIG9uVG91Y2hTdGFydDogdHJ1ZSxcbiAgb25TY3JvbGw6IHRydWUsXG4gIG9uV2hlZWw6IHRydWUsXG4gIG9uQWJvcnQ6IHRydWUsXG4gIG9uQ2FuUGxheTogdHJ1ZSxcbiAgb25DYW5QbGF5VGhyb3VnaDogdHJ1ZSxcbiAgb25EdXJhdGlvbkNoYW5nZTogdHJ1ZSxcbiAgb25FbXB0aWVkOiB0cnVlLFxuICBvbkVuY3J5cHRlZDogdHJ1ZSxcbiAgb25FbmRlZDogdHJ1ZSxcbiAgb25FcnJvcjogdHJ1ZSxcbiAgb25Mb2FkZWREYXRhOiB0cnVlLFxuICBvbkxvYWRlZE1ldGFkYXRhOiB0cnVlLFxuICBvbkxvYWRTdGFydDogdHJ1ZSxcbiAgb25QYXVzZTogdHJ1ZSxcbiAgb25QbGF5OiB0cnVlLFxuICBvblBsYXlpbmc6IHRydWUsXG4gIG9uUHJvZ3Jlc3M6IHRydWUsXG4gIG9uUmF0ZUNoYW5nZTogdHJ1ZSxcbiAgb25TZWVrZWQ6IHRydWUsXG4gIG9uU2Vla2luZzogdHJ1ZSxcbiAgb25TdGFsbGVkOiB0cnVlLFxuICBvblN1c3BlbmQ6IHRydWUsXG4gIG9uVGltZVVwZGF0ZTogdHJ1ZSxcbiAgb25Wb2x1bWVDaGFuZ2U6IHRydWUsXG4gIG9uV2FpdGluZzogdHJ1ZSxcbiAgb25Mb2FkOiB0cnVlLFxuICBvbkFuaW1hdGlvblN0YXJ0OiB0cnVlLFxuICBvbkFuaW1hdGlvbkVuZDogdHJ1ZSxcbiAgb25BbmltYXRpb25JdGVyYXRpb246IHRydWUsXG4gIG9uVHJhbnNpdGlvbkVuZDogdHJ1ZSxcblxuICBvbkNvcHlDYXB0dXJlOiB0cnVlLFxuICBvbkN1dENhcHR1cmU6IHRydWUsXG4gIG9uUGFzdGVDYXB0dXJlOiB0cnVlLFxuICBvbkNvbXBvc2l0aW9uRW5kQ2FwdHVyZTogdHJ1ZSxcbiAgb25Db21wb3NpdGlvblN0YXJ0Q2FwdHVyZTogdHJ1ZSxcbiAgb25Db21wb3NpdGlvblVwZGF0ZUNhcHR1cmU6IHRydWUsXG4gIG9uS2V5RG93bkNhcHR1cmU6IHRydWUsXG4gIG9uS2V5UHJlc3NDYXB0dXJlOiB0cnVlLFxuICBvbktleVVwQ2FwdHVyZTogdHJ1ZSxcbiAgb25Gb2N1c0NhcHR1cmU6IHRydWUsXG4gIG9uQmx1ckNhcHR1cmU6IHRydWUsXG4gIG9uQ2hhbmdlQ2FwdHVyZTogdHJ1ZSxcbiAgb25JbnB1dENhcHR1cmU6IHRydWUsXG4gIG9uU3VibWl0Q2FwdHVyZTogdHJ1ZSxcbiAgb25DbGlja0NhcHR1cmU6IHRydWUsXG4gIG9uQ29udGV4dE1lbnVDYXB0dXJlOiB0cnVlLFxuICBvbkRvdWJsZUNsaWNrQ2FwdHVyZTogdHJ1ZSxcbiAgb25EcmFnQ2FwdHVyZTogdHJ1ZSxcbiAgb25EcmFnRW5kQ2FwdHVyZTogdHJ1ZSxcbiAgb25EcmFnRW50ZXJDYXB0dXJlOiB0cnVlLFxuICBvbkRyYWdFeGl0Q2FwdHVyZTogdHJ1ZSxcbiAgb25EcmFnTGVhdmVDYXB0dXJlOiB0cnVlLFxuICBvbkRyYWdPdmVyQ2FwdHVyZTogdHJ1ZSxcbiAgb25EcmFnU3RhcnRDYXB0dXJlOiB0cnVlLFxuICBvbkRyb3BDYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlRG93bkNhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VFbnRlckNhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VMZWF2ZUNhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VNb3ZlQ2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZU91dENhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VPdmVyQ2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZVVwQ2FwdHVyZTogdHJ1ZSxcbiAgb25TZWxlY3RDYXB0dXJlOiB0cnVlLFxuICBvblRvdWNoQ2FuY2VsQ2FwdHVyZTogdHJ1ZSxcbiAgb25Ub3VjaEVuZENhcHR1cmU6IHRydWUsXG4gIG9uVG91Y2hNb3ZlQ2FwdHVyZTogdHJ1ZSxcbiAgb25Ub3VjaFN0YXJ0Q2FwdHVyZTogdHJ1ZSxcbiAgb25TY3JvbGxDYXB0dXJlOiB0cnVlLFxuICBvbldoZWVsQ2FwdHVyZTogdHJ1ZSxcbiAgb25BYm9ydENhcHR1cmU6IHRydWUsXG4gIG9uQ2FuUGxheUNhcHR1cmU6IHRydWUsXG4gIG9uQ2FuUGxheVRocm91Z2hDYXB0dXJlOiB0cnVlLFxuICBvbkR1cmF0aW9uQ2hhbmdlQ2FwdHVyZTogdHJ1ZSxcbiAgb25FbXB0aWVkQ2FwdHVyZTogdHJ1ZSxcbiAgb25FbmNyeXB0ZWRDYXB0dXJlOiB0cnVlLFxuICBvbkVuZGVkQ2FwdHVyZTogdHJ1ZSxcbiAgb25FcnJvckNhcHR1cmU6IHRydWUsXG4gIG9uTG9hZGVkRGF0YUNhcHR1cmU6IHRydWUsXG4gIG9uTG9hZGVkTWV0YWRhdGFDYXB0dXJlOiB0cnVlLFxuICBvbkxvYWRTdGFydENhcHR1cmU6IHRydWUsXG4gIG9uUGF1c2VDYXB0dXJlOiB0cnVlLFxuICBvblBsYXlDYXB0dXJlOiB0cnVlLFxuICBvblBsYXlpbmdDYXB0dXJlOiB0cnVlLFxuICBvblByb2dyZXNzQ2FwdHVyZTogdHJ1ZSxcbiAgb25SYXRlQ2hhbmdlQ2FwdHVyZTogdHJ1ZSxcbiAgb25TZWVrZWRDYXB0dXJlOiB0cnVlLFxuICBvblNlZWtpbmdDYXB0dXJlOiB0cnVlLFxuICBvblN0YWxsZWRDYXB0dXJlOiB0cnVlLFxuICBvblN1c3BlbmRDYXB0dXJlOiB0cnVlLFxuICBvblRpbWVVcGRhdGVDYXB0dXJlOiB0cnVlLFxuICBvblZvbHVtZUNoYW5nZUNhcHR1cmU6IHRydWUsXG4gIG9uV2FpdGluZ0NhcHR1cmU6IHRydWUsXG4gIG9uTG9hZENhcHR1cmU6IHRydWUsXG4gIG9uQW5pbWF0aW9uU3RhcnRDYXB0dXJlOiB0cnVlLFxuICBvbkFuaW1hdGlvbkVuZENhcHR1cmU6IHRydWUsXG4gIG9uQW5pbWF0aW9uSXRlcmF0aW9uQ2FwdHVyZTogdHJ1ZSxcbiAgb25UcmFuc2l0aW9uRW5kQ2FwdHVyZTogdHJ1ZVxufTtcblxuLyogRnJvbSBIVE1MRE9NUHJvcGVydHlDb25maWcgKi9cbnZhciBodG1sUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBQcm9wZXJ0aWVzXG4gICAqL1xuICBhY2NlcHQ6IHRydWUsXG4gIGFjY2VwdENoYXJzZXQ6IHRydWUsXG4gIGFjY2Vzc0tleTogdHJ1ZSxcbiAgYWN0aW9uOiB0cnVlLFxuICBhbGxvd0Z1bGxTY3JlZW46IHRydWUsXG4gIGFsbG93VHJhbnNwYXJlbmN5OiB0cnVlLFxuICBhbHQ6IHRydWUsXG4gIC8vIHNwZWNpZmllcyB0YXJnZXQgY29udGV4dCBmb3IgbGlua3Mgd2l0aCBgcHJlbG9hZGAgdHlwZVxuICBhczogdHJ1ZSxcbiAgYXN5bmM6IHRydWUsXG4gIGF1dG9Db21wbGV0ZTogdHJ1ZSxcbiAgLy8gYXV0b0ZvY3VzIGlzIHBvbHlmaWxsZWQvbm9ybWFsaXplZCBieSBBdXRvRm9jdXNVdGlsc1xuICAvLyBhdXRvRm9jdXM6IHRydWUsXG4gIGF1dG9QbGF5OiB0cnVlLFxuICBjYXB0dXJlOiB0cnVlLFxuICBjZWxsUGFkZGluZzogdHJ1ZSxcbiAgY2VsbFNwYWNpbmc6IHRydWUsXG4gIGNoYXJTZXQ6IHRydWUsXG4gIGNoYWxsZW5nZTogdHJ1ZSxcbiAgY2hlY2tlZDogdHJ1ZSxcbiAgY2l0ZTogdHJ1ZSxcbiAgY2xhc3NJRDogdHJ1ZSxcbiAgY2xhc3NOYW1lOiB0cnVlLFxuICBjb2xzOiB0cnVlLFxuICBjb2xTcGFuOiB0cnVlLFxuICBjb250ZW50OiB0cnVlLFxuICBjb250ZW50RWRpdGFibGU6IHRydWUsXG4gIGNvbnRleHRNZW51OiB0cnVlLFxuICBjb250cm9sczogdHJ1ZSxcbiAgY29vcmRzOiB0cnVlLFxuICBjcm9zc09yaWdpbjogdHJ1ZSxcbiAgZGF0YTogdHJ1ZSwgLy8gRm9yIGA8b2JqZWN0IC8+YCBhY3RzIGFzIGBzcmNgLlxuICBkYXRlVGltZTogdHJ1ZSxcbiAgZGVmYXVsdDogdHJ1ZSxcbiAgZGVmZXI6IHRydWUsXG4gIGRpcjogdHJ1ZSxcbiAgZGlzYWJsZWQ6IHRydWUsXG4gIGRvd25sb2FkOiB0cnVlLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIGVuY1R5cGU6IHRydWUsXG4gIGZvcm06IHRydWUsXG4gIGZvcm1BY3Rpb246IHRydWUsXG4gIGZvcm1FbmNUeXBlOiB0cnVlLFxuICBmb3JtTWV0aG9kOiB0cnVlLFxuICBmb3JtTm9WYWxpZGF0ZTogdHJ1ZSxcbiAgZm9ybVRhcmdldDogdHJ1ZSxcbiAgZnJhbWVCb3JkZXI6IHRydWUsXG4gIGhlYWRlcnM6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgaGlkZGVuOiB0cnVlLFxuICBoaWdoOiB0cnVlLFxuICBocmVmOiB0cnVlLFxuICBocmVmTGFuZzogdHJ1ZSxcbiAgaHRtbEZvcjogdHJ1ZSxcbiAgaHR0cEVxdWl2OiB0cnVlLFxuICBpY29uOiB0cnVlLFxuICBpZDogdHJ1ZSxcbiAgaW5wdXRNb2RlOiB0cnVlLFxuICBpbnRlZ3JpdHk6IHRydWUsXG4gIGlzOiB0cnVlLFxuICBrZXlQYXJhbXM6IHRydWUsXG4gIGtleVR5cGU6IHRydWUsXG4gIGtpbmQ6IHRydWUsXG4gIGxhYmVsOiB0cnVlLFxuICBsYW5nOiB0cnVlLFxuICBsaXN0OiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBsb3c6IHRydWUsXG4gIG1hbmlmZXN0OiB0cnVlLFxuICBtYXJnaW5IZWlnaHQ6IHRydWUsXG4gIG1hcmdpbldpZHRoOiB0cnVlLFxuICBtYXg6IHRydWUsXG4gIG1heExlbmd0aDogdHJ1ZSxcbiAgbWVkaWE6IHRydWUsXG4gIG1lZGlhR3JvdXA6IHRydWUsXG4gIG1ldGhvZDogdHJ1ZSxcbiAgbWluOiB0cnVlLFxuICBtaW5MZW5ndGg6IHRydWUsXG4gIC8vIENhdXRpb247IGBvcHRpb24uc2VsZWN0ZWRgIGlzIG5vdCB1cGRhdGVkIGlmIGBzZWxlY3QubXVsdGlwbGVgIGlzXG4gIC8vIGRpc2FibGVkIHdpdGggYHJlbW92ZUF0dHJpYnV0ZWAuXG4gIG11bHRpcGxlOiB0cnVlLFxuICBtdXRlZDogdHJ1ZSxcbiAgbmFtZTogdHJ1ZSxcbiAgbm9uY2U6IHRydWUsXG4gIG5vVmFsaWRhdGU6IHRydWUsXG4gIG9wZW46IHRydWUsXG4gIG9wdGltdW06IHRydWUsXG4gIHBhdHRlcm46IHRydWUsXG4gIHBsYWNlaG9sZGVyOiB0cnVlLFxuICBwbGF5c0lubGluZTogdHJ1ZSxcbiAgcG9zdGVyOiB0cnVlLFxuICBwcmVsb2FkOiB0cnVlLFxuICBwcm9maWxlOiB0cnVlLFxuICByYWRpb0dyb3VwOiB0cnVlLFxuICByZWFkT25seTogdHJ1ZSxcbiAgcmVmZXJyZXJQb2xpY3k6IHRydWUsXG4gIHJlbDogdHJ1ZSxcbiAgcmVxdWlyZWQ6IHRydWUsXG4gIHJldmVyc2VkOiB0cnVlLFxuICByb2xlOiB0cnVlLFxuICByb3dzOiB0cnVlLFxuICByb3dTcGFuOiB0cnVlLFxuICBzYW5kYm94OiB0cnVlLFxuICBzY29wZTogdHJ1ZSxcbiAgc2NvcGVkOiB0cnVlLFxuICBzY3JvbGxpbmc6IHRydWUsXG4gIHNlYW1sZXNzOiB0cnVlLFxuICBzZWxlY3RlZDogdHJ1ZSxcbiAgc2hhcGU6IHRydWUsXG4gIHNpemU6IHRydWUsXG4gIHNpemVzOiB0cnVlLFxuICBzcGFuOiB0cnVlLFxuICBzcGVsbENoZWNrOiB0cnVlLFxuICBzcmM6IHRydWUsXG4gIHNyY0RvYzogdHJ1ZSxcbiAgc3JjTGFuZzogdHJ1ZSxcbiAgc3JjU2V0OiB0cnVlLFxuICBzdGFydDogdHJ1ZSxcbiAgc3RlcDogdHJ1ZSxcbiAgc3R5bGU6IHRydWUsXG4gIHN1bW1hcnk6IHRydWUsXG4gIHRhYkluZGV4OiB0cnVlLFxuICB0YXJnZXQ6IHRydWUsXG4gIHRpdGxlOiB0cnVlLFxuICAvLyBTZXR0aW5nIC50eXBlIHRocm93cyBvbiBub24tPGlucHV0PiB0YWdzXG4gIHR5cGU6IHRydWUsXG4gIHVzZU1hcDogdHJ1ZSxcbiAgdmFsdWU6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICB3bW9kZTogdHJ1ZSxcbiAgd3JhcDogdHJ1ZSxcblxuICAvKipcbiAgICogUkRGYSBQcm9wZXJ0aWVzXG4gICAqL1xuICBhYm91dDogdHJ1ZSxcbiAgZGF0YXR5cGU6IHRydWUsXG4gIGlubGlzdDogdHJ1ZSxcbiAgcHJlZml4OiB0cnVlLFxuICAvLyBwcm9wZXJ0eSBpcyBhbHNvIHN1cHBvcnRlZCBmb3IgT3BlbkdyYXBoIGluIG1ldGEgdGFncy5cbiAgcHJvcGVydHk6IHRydWUsXG4gIHJlc291cmNlOiB0cnVlLFxuICB0eXBlb2Y6IHRydWUsXG4gIHZvY2FiOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBOb24tc3RhbmRhcmQgUHJvcGVydGllc1xuICAgKi9cbiAgLy8gYXV0b0NhcGl0YWxpemUgYW5kIGF1dG9Db3JyZWN0IGFyZSBzdXBwb3J0ZWQgaW4gTW9iaWxlIFNhZmFyaSBmb3JcbiAgLy8ga2V5Ym9hcmQgaGludHMuXG4gIGF1dG9DYXBpdGFsaXplOiB0cnVlLFxuICBhdXRvQ29ycmVjdDogdHJ1ZSxcbiAgLy8gYXV0b1NhdmUgYWxsb3dzIFdlYktpdC9CbGluayB0byBwZXJzaXN0IHZhbHVlcyBvZiBpbnB1dCBmaWVsZHMgb24gcGFnZSByZWxvYWRzXG4gIGF1dG9TYXZlOiB0cnVlLFxuICAvLyBjb2xvciBpcyBmb3IgU2FmYXJpIG1hc2staWNvbiBsaW5rXG4gIGNvbG9yOiB0cnVlLFxuICAvLyBpdGVtUHJvcCwgaXRlbVNjb3BlLCBpdGVtVHlwZSBhcmUgZm9yXG4gIC8vIE1pY3JvZGF0YSBzdXBwb3J0LiBTZWUgaHR0cDovL3NjaGVtYS5vcmcvZG9jcy9ncy5odG1sXG4gIGl0ZW1Qcm9wOiB0cnVlLFxuICBpdGVtU2NvcGU6IHRydWUsXG4gIGl0ZW1UeXBlOiB0cnVlLFxuICAvLyBpdGVtSUQgYW5kIGl0ZW1SZWYgYXJlIGZvciBNaWNyb2RhdGEgc3VwcG9ydCBhcyB3ZWxsIGJ1dFxuICAvLyBvbmx5IHNwZWNpZmllZCBpbiB0aGUgV0hBVFdHIHNwZWMgZG9jdW1lbnQuIFNlZVxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9taWNyb2RhdGEuaHRtbCNtaWNyb2RhdGEtZG9tLWFwaVxuICBpdGVtSUQ6IHRydWUsXG4gIGl0ZW1SZWY6IHRydWUsXG4gIC8vIHJlc3VsdHMgc2hvdyBsb29raW5nIGdsYXNzIGljb24gYW5kIHJlY2VudCBzZWFyY2hlcyBvbiBpbnB1dFxuICAvLyBzZWFyY2ggZmllbGRzIGluIFdlYktpdC9CbGlua1xuICByZXN1bHRzOiB0cnVlLFxuICAvLyBJRS1vbmx5IGF0dHJpYnV0ZSB0aGF0IHNwZWNpZmllcyBzZWN1cml0eSByZXN0cmljdGlvbnMgb24gYW4gaWZyYW1lXG4gIC8vIGFzIGFuIGFsdGVybmF0aXZlIHRvIHRoZSBzYW5kYm94IGF0dHJpYnV0ZSBvbiBJRTwxMFxuICBzZWN1cml0eTogdHJ1ZSxcbiAgLy8gSUUtb25seSBhdHRyaWJ1dGUgdGhhdCBjb250cm9scyBmb2N1cyBiZWhhdmlvclxuICB1bnNlbGVjdGFibGU6IDBcbn07XG5cbnZhciBzdmdQcm9wcyA9IHtcbiAgYWNjZW50SGVpZ2h0OiB0cnVlLFxuICBhY2N1bXVsYXRlOiB0cnVlLFxuICBhZGRpdGl2ZTogdHJ1ZSxcbiAgYWxpZ25tZW50QmFzZWxpbmU6IHRydWUsXG4gIGFsbG93UmVvcmRlcjogdHJ1ZSxcbiAgYWxwaGFiZXRpYzogdHJ1ZSxcbiAgYW1wbGl0dWRlOiB0cnVlLFxuICBhcmFiaWNGb3JtOiB0cnVlLFxuICBhc2NlbnQ6IHRydWUsXG4gIGF0dHJpYnV0ZU5hbWU6IHRydWUsXG4gIGF0dHJpYnV0ZVR5cGU6IHRydWUsXG4gIGF1dG9SZXZlcnNlOiB0cnVlLFxuICBhemltdXRoOiB0cnVlLFxuICBiYXNlRnJlcXVlbmN5OiB0cnVlLFxuICBiYXNlUHJvZmlsZTogdHJ1ZSxcbiAgYmFzZWxpbmVTaGlmdDogdHJ1ZSxcbiAgYmJveDogdHJ1ZSxcbiAgYmVnaW46IHRydWUsXG4gIGJpYXM6IHRydWUsXG4gIGJ5OiB0cnVlLFxuICBjYWxjTW9kZTogdHJ1ZSxcbiAgY2FwSGVpZ2h0OiB0cnVlLFxuICBjbGlwOiB0cnVlLFxuICBjbGlwUGF0aDogdHJ1ZSxcbiAgY2xpcFJ1bGU6IHRydWUsXG4gIGNsaXBQYXRoVW5pdHM6IHRydWUsXG4gIGNvbG9ySW50ZXJwb2xhdGlvbjogdHJ1ZSxcbiAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyczogdHJ1ZSxcbiAgY29sb3JQcm9maWxlOiB0cnVlLFxuICBjb2xvclJlbmRlcmluZzogdHJ1ZSxcbiAgY29udGVudFNjcmlwdFR5cGU6IHRydWUsXG4gIGNvbnRlbnRTdHlsZVR5cGU6IHRydWUsXG4gIGN1cnNvcjogdHJ1ZSxcbiAgY3g6IHRydWUsXG4gIGN5OiB0cnVlLFxuICBkOiB0cnVlLFxuICBkZWNlbGVyYXRlOiB0cnVlLFxuICBkZXNjZW50OiB0cnVlLFxuICBkaWZmdXNlQ29uc3RhbnQ6IHRydWUsXG4gIGRpcmVjdGlvbjogdHJ1ZSxcbiAgZGlzcGxheTogdHJ1ZSxcbiAgZGl2aXNvcjogdHJ1ZSxcbiAgZG9taW5hbnRCYXNlbGluZTogdHJ1ZSxcbiAgZHVyOiB0cnVlLFxuICBkeDogdHJ1ZSxcbiAgZHk6IHRydWUsXG4gIGVkZ2VNb2RlOiB0cnVlLFxuICBlbGV2YXRpb246IHRydWUsXG4gIGVuYWJsZUJhY2tncm91bmQ6IHRydWUsXG4gIGVuZDogdHJ1ZSxcbiAgZXhwb25lbnQ6IHRydWUsXG4gIGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQ6IHRydWUsXG4gIGZpbGw6IHRydWUsXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmaWxsUnVsZTogdHJ1ZSxcbiAgZmlsdGVyOiB0cnVlLFxuICBmaWx0ZXJSZXM6IHRydWUsXG4gIGZpbHRlclVuaXRzOiB0cnVlLFxuICBmbG9vZENvbG9yOiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIGZvY3VzYWJsZTogdHJ1ZSxcbiAgZm9udEZhbWlseTogdHJ1ZSxcbiAgZm9udFNpemU6IHRydWUsXG4gIGZvbnRTaXplQWRqdXN0OiB0cnVlLFxuICBmb250U3RyZXRjaDogdHJ1ZSxcbiAgZm9udFN0eWxlOiB0cnVlLFxuICBmb250VmFyaWFudDogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgZm9ybWF0OiB0cnVlLFxuICBmcm9tOiB0cnVlLFxuICBmeDogdHJ1ZSxcbiAgZnk6IHRydWUsXG4gIGcxOiB0cnVlLFxuICBnMjogdHJ1ZSxcbiAgZ2x5cGhOYW1lOiB0cnVlLFxuICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbDogdHJ1ZSxcbiAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiB0cnVlLFxuICBnbHlwaFJlZjogdHJ1ZSxcbiAgZ3JhZGllbnRUcmFuc2Zvcm06IHRydWUsXG4gIGdyYWRpZW50VW5pdHM6IHRydWUsXG4gIGhhbmdpbmc6IHRydWUsXG4gIGhvcml6QWR2WDogdHJ1ZSxcbiAgaG9yaXpPcmlnaW5YOiB0cnVlLFxuICBpZGVvZ3JhcGhpYzogdHJ1ZSxcbiAgaW1hZ2VSZW5kZXJpbmc6IHRydWUsXG4gIGluOiB0cnVlLFxuICBpbjI6IHRydWUsXG4gIGludGVyY2VwdDogdHJ1ZSxcbiAgazogdHJ1ZSxcbiAgazE6IHRydWUsXG4gIGsyOiB0cnVlLFxuICBrMzogdHJ1ZSxcbiAgazQ6IHRydWUsXG4gIGtlcm5lbE1hdHJpeDogdHJ1ZSxcbiAga2VybmVsVW5pdExlbmd0aDogdHJ1ZSxcbiAga2VybmluZzogdHJ1ZSxcbiAga2V5UG9pbnRzOiB0cnVlLFxuICBrZXlTcGxpbmVzOiB0cnVlLFxuICBrZXlUaW1lczogdHJ1ZSxcbiAgbGVuZ3RoQWRqdXN0OiB0cnVlLFxuICBsZXR0ZXJTcGFjaW5nOiB0cnVlLFxuICBsaWdodGluZ0NvbG9yOiB0cnVlLFxuICBsaW1pdGluZ0NvbmVBbmdsZTogdHJ1ZSxcbiAgbG9jYWw6IHRydWUsXG4gIG1hcmtlckVuZDogdHJ1ZSxcbiAgbWFya2VyTWlkOiB0cnVlLFxuICBtYXJrZXJTdGFydDogdHJ1ZSxcbiAgbWFya2VySGVpZ2h0OiB0cnVlLFxuICBtYXJrZXJVbml0czogdHJ1ZSxcbiAgbWFya2VyV2lkdGg6IHRydWUsXG4gIG1hc2s6IHRydWUsXG4gIG1hc2tDb250ZW50VW5pdHM6IHRydWUsXG4gIG1hc2tVbml0czogdHJ1ZSxcbiAgbWF0aGVtYXRpY2FsOiB0cnVlLFxuICBtb2RlOiB0cnVlLFxuICBudW1PY3RhdmVzOiB0cnVlLFxuICBvZmZzZXQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9wZXJhdG9yOiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JpZW50OiB0cnVlLFxuICBvcmllbnRhdGlvbjogdHJ1ZSxcbiAgb3JpZ2luOiB0cnVlLFxuICBvdmVyZmxvdzogdHJ1ZSxcbiAgb3ZlcmxpbmVQb3NpdGlvbjogdHJ1ZSxcbiAgb3ZlcmxpbmVUaGlja25lc3M6IHRydWUsXG4gIHBhaW50T3JkZXI6IHRydWUsXG4gIHBhbm9zZTE6IHRydWUsXG4gIHBhdGhMZW5ndGg6IHRydWUsXG4gIHBhdHRlcm5Db250ZW50VW5pdHM6IHRydWUsXG4gIHBhdHRlcm5UcmFuc2Zvcm06IHRydWUsXG4gIHBhdHRlcm5Vbml0czogdHJ1ZSxcbiAgcG9pbnRlckV2ZW50czogdHJ1ZSxcbiAgcG9pbnRzOiB0cnVlLFxuICBwb2ludHNBdFg6IHRydWUsXG4gIHBvaW50c0F0WTogdHJ1ZSxcbiAgcG9pbnRzQXRaOiB0cnVlLFxuICBwcmVzZXJ2ZUFscGhhOiB0cnVlLFxuICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiB0cnVlLFxuICBwcmltaXRpdmVVbml0czogdHJ1ZSxcbiAgcjogdHJ1ZSxcbiAgcmFkaXVzOiB0cnVlLFxuICByZWZYOiB0cnVlLFxuICByZWZZOiB0cnVlLFxuICByZW5kZXJpbmdJbnRlbnQ6IHRydWUsXG4gIHJlcGVhdENvdW50OiB0cnVlLFxuICByZXBlYXREdXI6IHRydWUsXG4gIHJlcXVpcmVkRXh0ZW5zaW9uczogdHJ1ZSxcbiAgcmVxdWlyZWRGZWF0dXJlczogdHJ1ZSxcbiAgcmVzdGFydDogdHJ1ZSxcbiAgcmVzdWx0OiB0cnVlLFxuICByb3RhdGU6IHRydWUsXG4gIHJ4OiB0cnVlLFxuICByeTogdHJ1ZSxcbiAgc2NhbGU6IHRydWUsXG4gIHNlZWQ6IHRydWUsXG4gIHNoYXBlUmVuZGVyaW5nOiB0cnVlLFxuICBzbG9wZTogdHJ1ZSxcbiAgc3BhY2luZzogdHJ1ZSxcbiAgc3BlY3VsYXJDb25zdGFudDogdHJ1ZSxcbiAgc3BlY3VsYXJFeHBvbmVudDogdHJ1ZSxcbiAgc3BlZWQ6IHRydWUsXG4gIHNwcmVhZE1ldGhvZDogdHJ1ZSxcbiAgc3RhcnRPZmZzZXQ6IHRydWUsXG4gIHN0ZERldmlhdGlvbjogdHJ1ZSxcbiAgc3RlbWg6IHRydWUsXG4gIHN0ZW12OiB0cnVlLFxuICBzdGl0Y2hUaWxlczogdHJ1ZSxcbiAgc3RvcENvbG9yOiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3RyaWtldGhyb3VnaFBvc2l0aW9uOiB0cnVlLFxuICBzdHJpa2V0aHJvdWdoVGhpY2tuZXNzOiB0cnVlLFxuICBzdHJpbmc6IHRydWUsXG4gIHN0cm9rZTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxuICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICBzdHJva2VMaW5lY2FwOiB0cnVlLFxuICBzdHJva2VMaW5lam9pbjogdHJ1ZSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWUsXG4gIHN1cmZhY2VTY2FsZTogdHJ1ZSxcbiAgc3lzdGVtTGFuZ3VhZ2U6IHRydWUsXG4gIHRhYmxlVmFsdWVzOiB0cnVlLFxuICB0YXJnZXRYOiB0cnVlLFxuICB0YXJnZXRZOiB0cnVlLFxuICB0ZXh0QW5jaG9yOiB0cnVlLFxuICB0ZXh0RGVjb3JhdGlvbjogdHJ1ZSxcbiAgdGV4dFJlbmRlcmluZzogdHJ1ZSxcbiAgdGV4dExlbmd0aDogdHJ1ZSxcbiAgdG86IHRydWUsXG4gIHRyYW5zZm9ybTogdHJ1ZSxcbiAgdTE6IHRydWUsXG4gIHUyOiB0cnVlLFxuICB1bmRlcmxpbmVQb3NpdGlvbjogdHJ1ZSxcbiAgdW5kZXJsaW5lVGhpY2tuZXNzOiB0cnVlLFxuICB1bmljb2RlOiB0cnVlLFxuICB1bmljb2RlQmlkaTogdHJ1ZSxcbiAgdW5pY29kZVJhbmdlOiB0cnVlLFxuICB1bml0c1BlckVtOiB0cnVlLFxuICB2QWxwaGFiZXRpYzogdHJ1ZSxcbiAgdkhhbmdpbmc6IHRydWUsXG4gIHZJZGVvZ3JhcGhpYzogdHJ1ZSxcbiAgdk1hdGhlbWF0aWNhbDogdHJ1ZSxcbiAgdmFsdWVzOiB0cnVlLFxuICB2ZWN0b3JFZmZlY3Q6IHRydWUsXG4gIHZlcnNpb246IHRydWUsXG4gIHZlcnRBZHZZOiB0cnVlLFxuICB2ZXJ0T3JpZ2luWDogdHJ1ZSxcbiAgdmVydE9yaWdpblk6IHRydWUsXG4gIHZpZXdCb3g6IHRydWUsXG4gIHZpZXdUYXJnZXQ6IHRydWUsXG4gIHZpc2liaWxpdHk6IHRydWUsXG4gIHdpZHRoczogdHJ1ZSxcbiAgd29yZFNwYWNpbmc6IHRydWUsXG4gIHdyaXRpbmdNb2RlOiB0cnVlLFxuICB4OiB0cnVlLFxuICB4SGVpZ2h0OiB0cnVlLFxuICB4MTogdHJ1ZSxcbiAgeDI6IHRydWUsXG4gIHhDaGFubmVsU2VsZWN0b3I6IHRydWUsXG4gIHhsaW5rQWN0dWF0ZTogdHJ1ZSxcbiAgeGxpbmtBcmNyb2xlOiB0cnVlLFxuICB4bGlua0hyZWY6IHRydWUsXG4gIHhsaW5rUm9sZTogdHJ1ZSxcbiAgeGxpbmtTaG93OiB0cnVlLFxuICB4bGlua1RpdGxlOiB0cnVlLFxuICB4bGlua1R5cGU6IHRydWUsXG4gIHhtbEJhc2U6IHRydWUsXG4gIHhtbG5zOiB0cnVlLFxuICB4bWxuc1hsaW5rOiB0cnVlLFxuICB4bWxMYW5nOiB0cnVlLFxuICB4bWxTcGFjZTogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgeTE6IHRydWUsXG4gIHkyOiB0cnVlLFxuICB5Q2hhbm5lbFNlbGVjdG9yOiB0cnVlLFxuICB6OiB0cnVlLFxuICB6b29tQW5kUGFuOiB0cnVlXG59O1xuXG4vKiBGcm9tIERPTVByb3BlcnR5ICovXG52YXIgQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiA9ICc6QS1aX2EtelxcXFx1MDBDMC1cXFxcdTAwRDZcXFxcdTAwRDgtXFxcXHUwMEY2XFxcXHUwMEY4LVxcXFx1MDJGRlxcXFx1MDM3MC1cXFxcdTAzN0RcXFxcdTAzN0YtXFxcXHUxRkZGXFxcXHUyMDBDLVxcXFx1MjAwRFxcXFx1MjA3MC1cXFxcdTIxOEZcXFxcdTJDMDAtXFxcXHUyRkVGXFxcXHUzMDAxLVxcXFx1RDdGRlxcXFx1RjkwMC1cXFxcdUZEQ0ZcXFxcdUZERjAtXFxcXHVGRkZEJztcbnZhciBBVFRSSUJVVEVfTkFNRV9DSEFSID0gQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiArICdcXFxcLS4wLTlcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MCc7XG52YXIgaXNDdXN0b21BdHRyaWJ1dGUgPSBSZWdFeHAucHJvdG90eXBlLnRlc3QuYmluZChuZXcgUmVnRXhwKCdeKGRhdGF8YXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpKTtcblxudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGh0bWxQcm9wcywgbmFtZSkgfHwgaGFzT3duUHJvcGVydHkuY2FsbChzdmdQcm9wcywgbmFtZSkgfHwgaXNDdXN0b21BdHRyaWJ1dGUobmFtZS50b0xvd2VyQ2FzZSgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlYWN0UHJvcHMsIG5hbWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy92YWxpZEF0dHIuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLypcblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG4tICdwb2x5ZmlsbHMnIG9uIHNlcnZlciBzaWRlXG5cblxuLy8gdXNhZ2VcblxuaW1wb3J0IFN0eWxlU2hlZXQgZnJvbSAnZ2xhbW9yL2xpYi9zaGVldCdcbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoKVxuXG5zdHlsZVNoZWV0LmluamVjdCgpXG4tICdpbmplY3RzJyB0aGUgc3R5bGVzaGVldCBpbnRvIHRoZSBwYWdlIChvciBpbnRvIG1lbW9yeSBpZiBvbiBzZXJ2ZXIpXG5cbnN0eWxlU2hlZXQuaW5zZXJ0KCcjYm94IHsgYm9yZGVyOiAxcHggc29saWQgcmVkOyB9Jylcbi0gYXBwZW5kcyBhIGNzcyBydWxlIGludG8gdGhlIHN0eWxlc2hlZXRcblxuc3R5bGVTaGVldC5mbHVzaCgpXG4tIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXQgb2YgYWxsIGl0cyBjb250ZW50c1xuXG5cbiovXG5cbmZ1bmN0aW9uIGxhc3QoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbnZhciBpc0RldiA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4ID09PSAnZGV2ZWxvcG1lbnQnIHx8ICF4O1xufShwcm9jZXNzLmVudi5OT0RFX0VOVik7XG52YXIgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcblxudmFyIG9sZElFID0gZnVuY3Rpb24gKCkge1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnPCEtLVtpZiBsdCBJRSAxMF0+PGk+PC9pPjwhW2VuZGlmXS0tPic7XG4gICAgcmV0dXJuIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpLmxlbmd0aCA9PT0gMTtcbiAgfVxufSgpO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVUYWcoKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKS5hcHBlbmRDaGlsZCh0YWcpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9IGV4cG9ydHMuU3R5bGVTaGVldCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldCgpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkc3BlZWR5ID0gX3JlZi5zcGVlZHksXG4gICAgICAgIHNwZWVkeSA9IF9yZWYkc3BlZWR5ID09PSB1bmRlZmluZWQgPyAhaXNEZXYgJiYgIWlzVGVzdCA6IF9yZWYkc3BlZWR5LFxuICAgICAgICBfcmVmJG1heExlbmd0aCA9IF9yZWYubWF4TGVuZ3RoLFxuICAgICAgICBtYXhMZW5ndGggPSBfcmVmJG1heExlbmd0aCA9PT0gdW5kZWZpbmVkID8gaXNCcm93c2VyICYmIG9sZElFID8gNDAwMCA6IDY1MDAwIDogX3JlZiRtYXhMZW5ndGg7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVTaGVldCk7XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gc3BlZWR5OyAvLyB0aGUgYmlnIGRyYXdiYWNrIGhlcmUgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG4gICAgdGhpcy5zaGVldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICB0aGlzLmN0ciA9IDA7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVTaGVldCwgW3tcbiAgICBrZXk6ICdpbmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5pbmplY3RlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FscmVhZHkgaW5qZWN0ZWQgc3R5bGVzaGVldCEnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgLy8gdGhpcyBzZWN0aW9uIGlzIGp1c3Qgd2VpcmQgYWxjaGVteSBJIGZvdW5kIG9ubGluZSBvZmYgbWFueSBzb3VyY2VzXG4gICAgICAgIHRoaXMudGFnc1swXSA9IG1ha2VTdHlsZVRhZygpO1xuICAgICAgICAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG4gICAgICAgIHRoaXMuc2hlZXQgPSBzaGVldEZvclRhZyh0aGlzLnRhZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2VydmVyIHNpZGUgJ3BvbHlmaWxsJy4ganVzdCBlbm91Z2ggYmVoYXZpb3IgdG8gYmUgdXNlZnVsLlxuICAgICAgICB0aGlzLnNoZWV0ID0ge1xuICAgICAgICAgIGNzc1J1bGVzOiBbXSxcbiAgICAgICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUpIHtcbiAgICAgICAgICAgIC8vIGVub3VnaCAnc3BlYyBjb21wbGlhbmNlJyB0byBiZSBhYmxlIHRvIGV4dHJhY3QgdGhlIHJ1bGVzIGxhdGVyXG4gICAgICAgICAgICAvLyBpbiBvdGhlciB3b3JkcywganVzdCB0aGUgY3NzVGV4dCBmaWVsZFxuICAgICAgICAgICAgdmFyIHNlcnZlclJ1bGUgPSB7IGNzc1RleHQ6IHJ1bGUgfTtcbiAgICAgICAgICAgIF90aGlzLnNoZWV0LmNzc1J1bGVzLnB1c2goc2VydmVyUnVsZSk7XG4gICAgICAgICAgICByZXR1cm4geyBzZXJ2ZXJSdWxlOiBzZXJ2ZXJSdWxlLCBhcHBlbmRSdWxlOiBmdW5jdGlvbiBhcHBlbmRSdWxlKG5ld0Nzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2ZXJSdWxlLmNzc1RleHQgKz0gbmV3Q3NzO1xuICAgICAgICAgICAgICB9IH07XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5pbmplY3RlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3BlZWR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3BlZWR5KGJvb2wpIHtcbiAgICAgIGlmICh0aGlzLmN0ciAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjaGFuZ2Ugc3BlZWR5IG1vZGUgYWZ0ZXIgaW5zZXJ0aW5nIGFueSBydWxlIHRvIHNoZWV0LiBFaXRoZXIgY2FsbCBzcGVlZHkoJyArIGJvb2wgKyAnKSBlYXJsaWVyIGluIHlvdXIgYXBwLCBvciBjYWxsIGZsdXNoKCkgYmVmb3JlIHNwZWVkeSgnICsgYm9vbCArICcpJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzU3BlZWR5ID0gISFib29sO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pbnNlcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5zZXJ0KHJ1bGUpIHtcbiAgICAgIC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHRoaXMuc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTsgLy8gdG9kbyAtIGNvcnJlY3QgaW5kZXggaGVyZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaXNEZXYpIHtcbiAgICAgICAgICAvLyBtaWdodCBuZWVkIGJldGVyIGR4IGZvciB0aGlzXG4gICAgICAgICAgY29uc29sZS53YXJuKCd3aG9vcHMsIGlsbGVnYWwgcnVsZSBpbnNlcnRlZCcsIHJ1bGUpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5zZXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgIHZhciBpbnNlcnRlZFJ1bGUgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICBpZiAodGhpcy5pc1NwZWVkeSAmJiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUpIHtcbiAgICAgICAgICB0aGlzLl9pbnNlcnQocnVsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSk7XG4gICAgICAgICAgbGFzdCh0aGlzLnRhZ3MpLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgICBpbnNlcnRlZFJ1bGUgPSB7IHRleHROb2RlOiB0ZXh0Tm9kZSwgYXBwZW5kUnVsZTogZnVuY3Rpb24gYXBwZW5kUnVsZShuZXdDc3MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHROb2RlLmFwcGVuZERhdGEobmV3Q3NzKTtcbiAgICAgICAgICAgIH0gfTtcblxuICAgICAgICAgIGlmICghdGhpcy5pc1NwZWVkeSkge1xuICAgICAgICAgICAgLy8gc2lnaGhoXG4gICAgICAgICAgICB0aGlzLnNoZWV0ID0gc2hlZXRGb3JUYWcobGFzdCh0aGlzLnRhZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNlcnZlciBzaWRlIGlzIHByZXR0eSBzaW1wbGVcbiAgICAgICAgaW5zZXJ0ZWRSdWxlID0gdGhpcy5zaGVldC5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN0cisrO1xuICAgICAgaWYgKGlzQnJvd3NlciAmJiB0aGlzLmN0ciAlIHRoaXMubWF4TGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudGFncy5wdXNoKG1ha2VTdHlsZVRhZygpKTtcbiAgICAgICAgdGhpcy5zaGVldCA9IHNoZWV0Rm9yVGFnKGxhc3QodGhpcy50YWdzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5zZXJ0ZWRSdWxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZsdXNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFncyA9IFtdO1xuICAgICAgICB0aGlzLnNoZWV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdHIgPSAwO1xuICAgICAgICAvLyB0b2RvIC0gbG9vayBmb3IgcmVtbmFudHMgaW4gZG9jdW1lbnQuc3R5bGVTaGVldHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyXG4gICAgICAgIHRoaXMuc2hlZXQuY3NzUnVsZXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5qZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdydWxlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bGVzKCkge1xuICAgICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hlZXQuY3NzUnVsZXM7XG4gICAgICB9XG4gICAgICB2YXIgYXJyID0gW107XG4gICAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiBhcnIuc3BsaWNlLmFwcGx5KGFyciwgW2Fyci5sZW5ndGgsIDBdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkuZnJvbShzaGVldEZvclRhZyh0YWcpLmNzc1J1bGVzKSkpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9nbGFtb3Ivc2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdG9rZW5pemUyID0gcmVxdWlyZSgnLi4vcG9zdGNzcy90b2tlbml6ZScpO1xuXG52YXIgX3Rva2VuaXplMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rva2VuaXplMik7XG5cbnZhciBfY29tbWVudCA9IHJlcXVpcmUoJy4uL3Bvc3Rjc3MvY29tbWVudCcpO1xuXG52YXIgX2NvbW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tbWVudCk7XG5cbnZhciBfcGFyc2VyID0gcmVxdWlyZSgnLi4vcG9zdGNzcy9wYXJzZXInKTtcblxudmFyIF9wYXJzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU2FmZVBhcnNlciA9IGZ1bmN0aW9uIChfUGFyc2VyKSB7XG4gICAgX2luaGVyaXRzKFNhZmVQYXJzZXIsIF9QYXJzZXIpO1xuXG4gICAgZnVuY3Rpb24gU2FmZVBhcnNlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNhZmVQYXJzZXIpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2FmZVBhcnNlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNhZmVQYXJzZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2FmZVBhcnNlciwgW3tcbiAgICAgICAga2V5OiAndG9rZW5pemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9rZW5pemUoKSB7XG4gICAgICAgICAgICB0aGlzLnRva2VucyA9ICgwLCBfdG9rZW5pemUzLmRlZmF1bHQpKHRoaXMuaW5wdXQsIHsgaWdub3JlRXJyb3JzOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21tZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbW1lbnQodG9rZW4pIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9jb21tZW50Mi5kZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluaXQobm9kZSwgdG9rZW5bMl0sIHRva2VuWzNdKTtcbiAgICAgICAgICAgIG5vZGUuc291cmNlLmVuZCA9IHsgbGluZTogdG9rZW5bNF0sIGNvbHVtbjogdG9rZW5bNV0gfTtcblxuICAgICAgICAgICAgdmFyIHRleHQgPSB0b2tlblsxXS5zbGljZSgyKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LnNsaWNlKC0yKSA9PT0gJyovJykgdGV4dCA9IHRleHQuc2xpY2UoMCwgLTIpO1xuXG4gICAgICAgICAgICBpZiAoL15cXHMqJC8udGVzdCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIG5vZGUudGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgIG5vZGUucmF3cy5sZWZ0ID0gdGV4dDtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MucmlnaHQgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdGV4dC5tYXRjaCgvXihcXHMqKShbXl0qW15cXHNdKShcXHMqKSQvKTtcbiAgICAgICAgICAgICAgICBub2RlLnRleHQgPSBtYXRjaFsyXTtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MubGVmdCA9IG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIG5vZGUucmF3cy5yaWdodCA9IG1hdGNoWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmNsb3NlZEJyYWNrZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5jbG9zZWRCcmFja2V0KCkge31cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Vua25vd25Xb3JkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVua25vd25Xb3JkKHN0YXJ0KSB7XG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy50b2tlbnMuc2xpY2Uoc3RhcnQsIHRoaXMucG9zICsgMSk7XG4gICAgICAgICAgICB0aGlzLnNwYWNlcyArPSBidWZmZXIubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlbMV07XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5leHBlY3RlZENsb3NlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuZXhwZWN0ZWRDbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5yYXdzLmFmdGVyICs9ICd9JztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZG91YmxlQ29sb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG91YmxlQ29sb24oKSB7fVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5uYW1lZEF0cnVsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bm5hbWVkQXRydWxlKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUubmFtZSA9ICcnO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVjaGVja01pc3NlZFNlbWljb2xvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpIHtcbiAgICAgICAgICAgIHZhciBjb2xvbiA9IHRoaXMuY29sb24odG9rZW5zKTtcbiAgICAgICAgICAgIGlmIChjb2xvbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIHNwbGl0ID0gdm9pZCAwO1xuICAgICAgICAgICAgZm9yIChzcGxpdCA9IGNvbG9uIC0gMTsgc3BsaXQgPj0gMDsgc3BsaXQtLSkge1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbnNbc3BsaXRdWzBdID09PSAnd29yZCcpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChzcGxpdCAtPSAxOyBzcGxpdCA+PSAwOyBzcGxpdC0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRva2Vuc1tzcGxpdF1bMF0gIT09ICdzcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG90aGVyID0gdG9rZW5zLnNwbGljZShzcGxpdCwgdG9rZW5zLmxlbmd0aCAtIHNwbGl0KTtcbiAgICAgICAgICAgIHRoaXMuZGVjbChvdGhlcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoZWNrTWlzc2VkU2VtaWNvbG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrTWlzc2VkU2VtaWNvbG9uKCkge31cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuZEZpbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5kRmlsZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMgJiYgdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudC5yYXdzLnNlbWljb2xvbiA9IHRoaXMuc2VtaWNvbG9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgPSAodGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgfHwgJycpICsgdGhpcy5zcGFjZXM7XG5cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmN1cnJlbnQucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LnBhcmVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNhZmVQYXJzZXI7XG59KF9wYXJzZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTYWZlUGFyc2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy1zYWZlLXBhcnNlci9zYWZlLXBhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQ29udGFpbnMgaGVscGVycyBmb3Igc2FmZWx5IHNwbGl0dGluZyBsaXN0cyBvZiBDU1MgdmFsdWVzLFxuICogcHJlc2VydmluZyBwYXJlbnRoZXNlcyBhbmQgcXVvdGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBsaXN0ID0gcG9zdGNzcy5saXN0O1xuICpcbiAqIEBuYW1lc3BhY2UgbGlzdFxuICovXG52YXIgbGlzdCA9IHtcbiAgICBzcGxpdDogZnVuY3Rpb24gc3BsaXQoc3RyaW5nLCBzZXBhcmF0b3JzLCBsYXN0KSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgZnVuYyA9IDA7XG4gICAgICAgIHZhciBxdW90ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICAgICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnXCInIHx8IGxldHRlciA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICBxdW90ZSA9IGxldHRlcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICBmdW5jICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bmMgPiAwKSBmdW5jIC09IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZ1bmMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VwYXJhdG9ycy5pbmRleE9mKGxldHRlcikgIT09IC0xKSBzcGxpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGxpdCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSAnJykgYXJyYXkucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9ICcnO1xuICAgICAgICAgICAgICAgIHNwbGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgKz0gbGV0dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3QgfHwgY3VycmVudCAhPT0gJycpIGFycmF5LnB1c2goY3VycmVudC50cmltKCkpO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2FmZWx5IHNwbGl0cyBzcGFjZS1zZXBhcmF0ZWQgdmFsdWVzIChzdWNoIGFzIHRob3NlIGZvciBgYmFja2dyb3VuZGAsXG4gICAgICogYGJvcmRlci1yYWRpdXNgLCBhbmQgb3RoZXIgc2hvcnRoYW5kIHByb3BlcnRpZXMpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIHNwYWNlLXNlcGFyYXRlZCB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfSBzcGxpdHRlZCB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcG9zdGNzcy5saXN0LnNwYWNlKCcxcHggY2FsYygxMCUgKyAxcHgpJykgLy89PiBbJzFweCcsICdjYWxjKDEwJSArIDFweCknXVxuICAgICAqL1xuICAgIHNwYWNlOiBmdW5jdGlvbiBzcGFjZShzdHJpbmcpIHtcbiAgICAgICAgdmFyIHNwYWNlcyA9IFsnICcsICdcXG4nLCAnXFx0J107XG4gICAgICAgIHJldHVybiBsaXN0LnNwbGl0KHN0cmluZywgc3BhY2VzKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTYWZlbHkgc3BsaXRzIGNvbW1hLXNlcGFyYXRlZCB2YWx1ZXMgKHN1Y2ggYXMgdGhvc2UgZm9yIGB0cmFuc2l0aW9uLSpgXG4gICAgICogYW5kIGBiYWNrZ3JvdW5kYCBwcm9wZXJ0aWVzKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBjb21tYS1zZXBhcmF0ZWQgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gc3BsaXR0ZWQgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHBvc3Rjc3MubGlzdC5jb21tYSgnYmxhY2ssIGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgYmxhY2spJylcbiAgICAgKiAvLz0+IFsnYmxhY2snLCAnbGluZWFyLWdyYWRpZW50KHdoaXRlLCBibGFjayknXVxuICAgICAqL1xuICAgIGNvbW1hOiBmdW5jdGlvbiBjb21tYShzdHJpbmcpIHtcbiAgICAgICAgdmFyIGNvbW1hID0gJywnO1xuICAgICAgICByZXR1cm4gbGlzdC5zcGxpdChzdHJpbmcsIFtjb21tYV0sIHRydWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGxpc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfbGF6eVJlc3VsdCA9IHJlcXVpcmUoJy4vbGF6eS1yZXN1bHQnKTtcblxudmFyIF9sYXp5UmVzdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xhenlSZXN1bHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIEBjYWxsYmFjayBidWlsZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFydCAgICAgICAgICAtIHBhcnQgb2YgZ2VuZXJhdGVkIENTUyBjb25uZWN0ZWQgdG8gdGhpcyBub2RlXG4gKiBAcGFyYW0ge05vZGV9ICAgbm9kZSAgICAgICAgICAtIEFTVCBub2RlXG4gKiBAcGFyYW0ge1wic3RhcnRcInxcImVuZFwifSBbdHlwZV0gLSBub2Rl4oCZcyBwYXJ0IHR5cGVcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBwYXJzZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3x0b1N0cmluZ30gY3NzICAgLSBzdHJpbmcgd2l0aCBpbnB1dCBDU1Mgb3IgYW55IG9iamVjdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCB0b1N0cmluZygpIG1ldGhvZCwgbGlrZSBhIEJ1ZmZlclxuICogQHBhcmFtIHtwcm9jZXNzT3B0aW9uc30gW29wdHNdIC0gb3B0aW9ucyB3aXRoIG9ubHkgYGZyb21gIGFuZCBgbWFwYCBrZXlzXG4gKlxuICogQHJldHVybiB7Um9vdH0gUG9zdENTUyBBU1RcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBzdHJpbmdpZmllclxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAgICAgICAtIHN0YXJ0IG5vZGUgZm9yIHN0cmluZ2lmaW5nLiBVc3VhbGx5IHtAbGluayBSb290fS5cbiAqIEBwYXJhbSB7YnVpbGRlcn0gYnVpbGRlciAtIGZ1bmN0aW9uIHRvIGNvbmNhdGVuYXRlIENTUyBmcm9tIG5vZGXigJlzIHBhcnRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBnZW5lcmF0ZSBzdHJpbmcgYW5kIHNvdXJjZSBtYXBcbiAqXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gc3ludGF4XG4gKiBAcHJvcGVydHkge3BhcnNlcn0gcGFyc2UgICAgICAgICAgLSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBBU1QgYnkgc3RyaW5nXG4gKiBAcHJvcGVydHkge3N0cmluZ2lmaWVyfSBzdHJpbmdpZnkgLSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBzdHJpbmcgYnkgQVNUXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSB0b1N0cmluZ1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gdG9TdHJpbmdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBwbHVnaW5GdW5jdGlvblxuICogQHBhcmFtIHtSb290fSByb290ICAgICAtIHBhcnNlZCBpbnB1dCBDU1NcbiAqIEBwYXJhbSB7UmVzdWx0fSByZXN1bHQgLSByZXN1bHQgdG8gc2V0IHdhcm5pbmdzIG9yIGNoZWNrIG90aGVyIHBsdWdpbnNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFBsdWdpblxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gcG9zdGNzcyAtIFBvc3RDU1MgcGx1Z2luIGZ1bmN0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBwcm9jZXNzT3B0aW9uc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGZyb20gICAgICAgICAgICAgLSB0aGUgcGF0aCBvZiB0aGUgQ1NTIHNvdXJjZSBmaWxlLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3Ugc2hvdWxkIGFsd2F5cyBzZXQgYGZyb21gLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWNhdXNlIGl0IGlzIHVzZWQgaW4gc291cmNlIG1hcFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uIGFuZCBzeW50YXggZXJyb3IgbWVzc2FnZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdG8gICAgICAgICAgICAgICAtIHRoZSBwYXRoIHdoZXJlIHlvdeKAmWxsIHB1dCB0aGUgb3V0cHV0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENTUyBmaWxlLiBZb3Ugc2hvdWxkIGFsd2F5cyBzZXQgYHRvYFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBnZW5lcmF0ZSBjb3JyZWN0IHNvdXJjZSBtYXBzLlxuICogQHByb3BlcnR5IHtwYXJzZXJ9IHBhcnNlciAgICAgICAgICAgLSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBBU1QgYnkgc3RyaW5nXG4gKiBAcHJvcGVydHkge3N0cmluZ2lmaWVyfSBzdHJpbmdpZmllciAtIGNsYXNzIHRvIGdlbmVyYXRlIHN0cmluZyBieSBBU1RcbiAqIEBwcm9wZXJ0eSB7c3ludGF4fSBzeW50YXggICAgICAgICAgIC0gb2JqZWN0IHdpdGggYHBhcnNlYCBhbmQgYHN0cmluZ2lmeWBcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBtYXAgICAgICAgICAgICAgIC0gc291cmNlIG1hcCBvcHRpb25zXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG1hcC5pbmxpbmUgICAgICAgICAgICAgICAgICAgIC0gZG9lcyBzb3VyY2UgbWFwIHNob3VsZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGVtYmVkZGVkIGluIHRoZSBvdXRwdXRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDU1MgYXMgYSBiYXNlNjQtZW5jb2RlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG9iamVjdHxmYWxzZXxmdW5jdGlvbn0gbWFwLnByZXYgLSBzb3VyY2UgbWFwIGNvbnRlbnRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIGEgcHJldmlvdXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nIHN0ZXBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9yIGV4YW1wbGUsIFNhc3MpLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RDU1Mgd2lsbCB0cnkgdG8gZmluZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzIG1hcFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHksIHNvIHlvdVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdWxkIGRpc2FibGUgaXQgYnlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZmFsc2VgIHZhbHVlLlxuICogQHByb3BlcnR5IHtib29sZWFufSBtYXAuc291cmNlc0NvbnRlbnQgICAgICAgICAgICAtIGRvZXMgUG9zdENTUyBzaG91bGQgc2V0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIG9yaWdpbiBjb250ZW50IHRvIG1hcFxuICogQHByb3BlcnR5IHtzdHJpbmd8ZmFsc2V9IG1hcC5hbm5vdGF0aW9uICAgICAgICAgICAtIGRvZXMgUG9zdENTUyBzaG91bGQgc2V0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbiBjb21tZW50IHRvIG1hcFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1hcC5mcm9tICAgICAgICAgICAgICAgICAgICAgICAtIG92ZXJyaWRlIGBmcm9tYCBpbiBtYXDigJlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNvdXJjZXNgXG4gKi9cblxuLyoqXG4gKiBDb250YWlucyBwbHVnaW5zIHRvIHByb2Nlc3MgQ1NTLiBDcmVhdGUgb25lIGBQcm9jZXNzb3JgIGluc3RhbmNlLFxuICogaW5pdGlhbGl6ZSBpdHMgcGx1Z2lucywgYW5kIHRoZW4gdXNlIHRoYXQgaW5zdGFuY2Ugb24gbnVtZXJvdXMgQ1NTIGZpbGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwcm9jZXNzb3IgPSBwb3N0Y3NzKFthdXRvcHJlZml4ZXIsIHByZWNzc10pO1xuICogcHJvY2Vzc29yLnByb2Nlc3MoY3NzMSkudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0LmNzcykpO1xuICogcHJvY2Vzc29yLnByb2Nlc3MoY3NzMikudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0LmNzcykpO1xuICovXG52YXIgUHJvY2Vzc29yID0gZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FycmF5LjxQbHVnaW58cGx1Z2luRnVuY3Rpb24+fFByb2Nlc3Nvcn0gcGx1Z2lucyAtIFBvc3RDU1NcbiAgICogICAgICAgIHBsdWdpbnMuIFNlZSB7QGxpbmsgUHJvY2Vzc29yI3VzZX0gZm9yIHBsdWdpbiBmb3JtYXQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9jZXNzb3IoKSB7XG4gICAgdmFyIHBsdWdpbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2Nlc3Nvcik7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gQ3VycmVudCBQb3N0Q1NTIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGlmICggcmVzdWx0LnByb2Nlc3Nvci52ZXJzaW9uLnNwbGl0KCcuJylbMF0gIT09ICc1JyApIHtcbiAgICAgKiAgIHRocm93IG5ldyBFcnJvcignVGhpcyBwbHVnaW4gd29ya3Mgb25seSB3aXRoIFBvc3RDU1MgNScpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnNpb24gPSAnNS4yLjAnO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3BsdWdpbkZ1bmN0aW9uW119IC0gUGx1Z2lucyBhZGRlZCB0byB0aGlzIHByb2Nlc3Nvci5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3QgcHJvY2Vzc29yID0gcG9zdGNzcyhbYXV0b3ByZWZpeGVyLCBwcmVjc3NdKTtcbiAgICAgKiBwcm9jZXNzb3IucGx1Z2lucy5sZW5ndGggLy89PiAyXG4gICAgICovXG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5ub3JtYWxpemUocGx1Z2lucyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBsdWdpbiB0byBiZSB1c2VkIGFzIGEgQ1NTIHByb2Nlc3Nvci5cbiAgICpcbiAgICogUG9zdENTUyBwbHVnaW4gY2FuIGJlIGluIDQgZm9ybWF0czpcbiAgICogKiBBIHBsdWdpbiBjcmVhdGVkIGJ5IHtAbGluayBwb3N0Y3NzLnBsdWdpbn0gbWV0aG9kLlxuICAgKiAqIEEgZnVuY3Rpb24uIFBvc3RDU1Mgd2lsbCBwYXNzIHRoZSBmdW5jdGlvbiBhIEB7bGluayBSb290fVxuICAgKiAgIGFzIHRoZSBmaXJzdCBhcmd1bWVudCBhbmQgY3VycmVudCB7QGxpbmsgUmVzdWx0fSBpbnN0YW5jZVxuICAgKiAgIGFzIHRoZSBzZWNvbmQuXG4gICAqICogQW4gb2JqZWN0IHdpdGggYSBgcG9zdGNzc2AgbWV0aG9kLiBQb3N0Q1NTIHdpbGwgdXNlIHRoYXQgbWV0aG9kXG4gICAqICAgYXMgZGVzY3JpYmVkIGluICMyLlxuICAgKiAqIEFub3RoZXIge0BsaW5rIFByb2Nlc3Nvcn0gaW5zdGFuY2UuIFBvc3RDU1Mgd2lsbCBjb3B5IHBsdWdpbnNcbiAgICogICBmcm9tIHRoYXQgaW5zdGFuY2UgaW50byB0aGlzIG9uZS5cbiAgICpcbiAgICogUGx1Z2lucyBjYW4gYWxzbyBiZSBhZGRlZCBieSBwYXNzaW5nIHRoZW0gYXMgYXJndW1lbnRzIHdoZW4gY3JlYXRpbmdcbiAgICogYSBgcG9zdGNzc2AgaW5zdGFuY2UgKHNlZSBbYHBvc3Rjc3MocGx1Z2lucylgXSkuXG4gICAqXG4gICAqIEFzeW5jaHJvbm91cyBwbHVnaW5zIHNob3VsZCByZXR1cm4gYSBgUHJvbWlzZWAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UGx1Z2lufHBsdWdpbkZ1bmN0aW9ufFByb2Nlc3Nvcn0gcGx1Z2luIC0gUG9zdENTUyBwbHVnaW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciB7QGxpbmsgUHJvY2Vzc29yfVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggcGx1Z2luc1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBwcm9jZXNzb3IgPSBwb3N0Y3NzKClcbiAgICogICAudXNlKGF1dG9wcmVmaXhlcilcbiAgICogICAudXNlKHByZWNzcyk7XG4gICAqXG4gICAqIEByZXR1cm4ge1Byb2Nlc3Nlc30gY3VycmVudCBwcm9jZXNzb3IgdG8gbWFrZSBtZXRob2RzIGNoYWluXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFByb2Nlc3NvciwgW3tcbiAgICBrZXk6ICd1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1c2UocGx1Z2luKSB7XG4gICAgICB0aGlzLnBsdWdpbnMgPSB0aGlzLnBsdWdpbnMuY29uY2F0KHRoaXMubm9ybWFsaXplKFtwbHVnaW5dKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgc291cmNlIENTUyBhbmQgcmV0dXJucyBhIHtAbGluayBMYXp5UmVzdWx0fSBQcm9taXNlIHByb3h5LlxuICAgICAqIEJlY2F1c2Ugc29tZSBwbHVnaW5zIGNhbiBiZSBhc3luY2hyb25vdXMgaXQgZG9lc27igJl0IG1ha2VcbiAgICAgKiBhbnkgdHJhbnNmb3JtYXRpb25zLiBUcmFuc2Zvcm1hdGlvbnMgd2lsbCBiZSBhcHBsaWVkXG4gICAgICogaW4gdGhlIHtAbGluayBMYXp5UmVzdWx0fSBtZXRob2RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8dG9TdHJpbmd8UmVzdWx0fSBjc3MgLSBTdHJpbmcgd2l0aCBpbnB1dCBDU1Mgb3JcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBvYmplY3Qgd2l0aCBhIGB0b1N0cmluZygpYFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLCBsaWtlIGEgQnVmZmVyLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3B0aW9uYWxseSwgc2VuZCBhIHtAbGluayBSZXN1bHR9XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSBhbmQgdGhlIHByb2Nlc3NvciB3aWxsXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlIHRoZSB7QGxpbmsgUm9vdH0gZnJvbSBpdC5cbiAgICAgKiBAcGFyYW0ge3Byb2Nlc3NPcHRpb25zfSBbb3B0c10gICAgICAtIG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0xhenlSZXN1bHR9IFByb21pc2UgcHJveHlcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcHJvY2Vzc29yLnByb2Nlc3MoY3NzLCB7IGZyb206ICdhLmNzcycsIHRvOiAnYS5vdXQuY3NzJyB9KVxuICAgICAqICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgKiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5jc3MpO1xuICAgICAqICAgfSk7XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3Byb2Nlc3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9jZXNzKGNzcykge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICByZXR1cm4gbmV3IF9sYXp5UmVzdWx0Mi5kZWZhdWx0KHRoaXMsIGNzcywgb3B0cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbm9ybWFsaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbm9ybWFsaXplKHBsdWdpbnMpIHtcbiAgICAgIHZhciBub3JtYWxpemVkID0gW107XG4gICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaWYgKGkucG9zdGNzcykgaSA9IGkucG9zdGNzcztcblxuICAgICAgICBpZiAoKHR5cGVvZiBpID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihpKSkgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoaS5wbHVnaW5zKSkge1xuICAgICAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVkLmNvbmNhdChpLnBsdWdpbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbm9ybWFsaXplZC5wdXNoKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihpICsgJyBpcyBub3QgYSBQb3N0Q1NTIHBsdWdpbicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBub3JtYWxpemVkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcm9jZXNzb3I7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFByb2Nlc3Nvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcHJvY2Vzc29yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnLi93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBAdHlwZWRlZiAge29iamVjdH0gTWVzc2FnZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgICAtIG1lc3NhZ2UgdHlwZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBsdWdpbiAtIHNvdXJjZSBQb3N0Q1NTIHBsdWdpbiBuYW1lXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyB0aGUgcmVzdWx0IG9mIHRoZSBQb3N0Q1NTIHRyYW5zZm9ybWF0aW9ucy5cbiAqXG4gKiBBIFJlc3VsdCBpbnN0YW5jZSBpcyByZXR1cm5lZCBieSB7QGxpbmsgTGF6eVJlc3VsdCN0aGVufVxuICogb3Ige0BsaW5rIFJvb3QjdG9SZXN1bHR9IG1ldGhvZHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIHBvc3Rjc3MoW2Nzc25leHRdKS5wcm9jZXNzKGNzcykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gKiAgICBjb25zb2xlLmxvZyhyZXN1bHQuY3NzKTtcbiAqIH0pO1xuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcmVzdWx0MiA9IHBvc3Rjc3MucGFyc2UoY3NzKS50b1Jlc3VsdCgpO1xuICovXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1Byb2Nlc3Nvcn0gcHJvY2Vzc29yIC0gcHJvY2Vzc29yIHVzZWQgZm9yIHRoaXMgdHJhbnNmb3JtYXRpb24uXG4gICAqIEBwYXJhbSB7Um9vdH0gICAgICByb290ICAgICAgLSBSb290IG5vZGUgYWZ0ZXIgYWxsIHRyYW5zZm9ybWF0aW9ucy5cbiAgICogQHBhcmFtIHtwcm9jZXNzT3B0aW9uc30gb3B0cyAtIG9wdGlvbnMgZnJvbSB0aGUge0BsaW5rIFByb2Nlc3NvciNwcm9jZXNzfVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Ige0BsaW5rIFJvb3QjdG9SZXN1bHR9XG4gICAqL1xuICBmdW5jdGlvbiBSZXN1bHQocHJvY2Vzc29yLCByb290LCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3VsdCk7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9jZXNzb3J9IC0gVGhlIFByb2Nlc3NvciBpbnN0YW5jZSB1c2VkXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGlzIHRyYW5zZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmb3IgKCBsZXQgcGx1Z2luIG9mIHJlc3VsdC5wcm9jZXNzb3IucGx1Z2lucykge1xuICAgICAqICAgaWYgKCBwbHVnaW4ucG9zdGNzc1BsdWdpbiA9PT0gJ3Bvc3Rjc3MtYmFkJyApIHtcbiAgICAgKiAgICAgdGhyb3cgJ3Bvc3Rjc3MtZ29vZCBpcyBpbmNvbXBhdGlibGUgd2l0aCBwb3N0Y3NzLWJhZCc7XG4gICAgICogICB9XG4gICAgICogfSk7XG4gICAgICovXG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TWVzc2FnZVtdfSAtIENvbnRhaW5zIG1lc3NhZ2VzIGZyb20gcGx1Z2luc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAoZS5nLiwgd2FybmluZ3Mgb3IgY3VzdG9tIG1lc3NhZ2VzKS5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBtZXNzYWdlIHNob3VsZCBoYXZlIHR5cGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgYW5kIHBsdWdpbiBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBwb3N0Y3NzLnBsdWdpbigncG9zdGNzcy1taW4tYnJvd3NlcicsICgpID0+IHtcbiAgICAgKiAgIHJldHVybiAocm9vdCwgcmVzdWx0KSA9PiB7XG4gICAgICogICAgIHZhciBicm93c2VycyA9IGRldGVjdE1pbkJyb3dzZXJzQnlDYW5JVXNlKHJvb3QpO1xuICAgICAqICAgICByZXN1bHQubWVzc2FnZXMucHVzaCh7XG4gICAgICogICAgICAgdHlwZTogICAgJ21pbi1icm93c2VyJyxcbiAgICAgKiAgICAgICBwbHVnaW46ICAncG9zdGNzcy1taW4tYnJvd3NlcicsXG4gICAgICogICAgICAgYnJvd3NlcnM6IGJyb3dzZXJzXG4gICAgICogICAgIH0pO1xuICAgICAqICAgfTtcbiAgICAgKiB9KTtcbiAgICAgKi9cbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Um9vdH0gLSBSb290IG5vZGUgYWZ0ZXIgYWxsIHRyYW5zZm9ybWF0aW9ucy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcm9vdC50b1Jlc3VsdCgpLnJvb3QgPT0gcm9vdDtcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3Byb2Nlc3NPcHRpb25zfSAtIE9wdGlvbnMgZnJvbSB0aGUge0BsaW5rIFByb2Nlc3NvciNwcm9jZXNzfVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIHtAbGluayBSb290I3RvUmVzdWx0fSBjYWxsXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBwcm9kdWNlZCB0aGlzIFJlc3VsdCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcm9vdC50b1Jlc3VsdChvcHRzKS5vcHRzID09IG9wdHM7XG4gICAgICovXG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gQSBDU1Mgc3RyaW5nIHJlcHJlc2VudGluZyBvZiB7QGxpbmsgUmVzdWx0I3Jvb3R9LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBwb3N0Y3NzLnBhcnNlKCdhe30nKS50b1Jlc3VsdCgpLmNzcyAvLz0+IFwiYXt9XCJcbiAgICAgKi9cbiAgICB0aGlzLmNzcyA9IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3VyY2VNYXBHZW5lcmF0b3J9IC0gQW4gaW5zdGFuY2Ugb2YgYFNvdXJjZU1hcEdlbmVyYXRvcmBcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgZnJvbSB0aGUgYHNvdXJjZS1tYXBgIGxpYnJhcnksXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHJlc2VudGluZyBjaGFuZ2VzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHRoZSB7QGxpbmsgUmVzdWx0I3Jvb3R9IGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZXN1bHQubWFwLnRvSlNPTigpIC8vPT4geyB2ZXJzaW9uOiAzLCBmaWxlOiAnYS5jc3MnLCDigKYgfVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpZiAoIHJlc3VsdC5tYXAgKSB7XG4gICAgICogICBmcy53cml0ZUZpbGVTeW5jKHJlc3VsdC5vcHRzLnRvICsgJy5tYXAnLCByZXN1bHQubWFwLnRvU3RyaW5nKCkpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZvciBAe2xpbmsgUmVzdWx0I2Nzc30gY29udGVudC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcmVzdWx0ICsgJycgPT09IHJlc3VsdC5jc3NcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50aW5nIG9mIHtAbGluayBSZXN1bHQjcm9vdH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUmVzdWx0LCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB7QGxpbmsgV2FybmluZ30gYW5kIGFkZHMgaXRcbiAgICAgKiB0byB7QGxpbmsgUmVzdWx0I21lc3NhZ2VzfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0ICAgICAgICAtIHdhcm5pbmcgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gICAgICAtIHdhcm5pbmcgb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7Tm9kZX0gICBvcHRzLm5vZGUgICAtIENTUyBub2RlIHRoYXQgY2F1c2VkIHRoZSB3YXJuaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMud29yZCAgIC0gd29yZCBpbiBDU1Mgc291cmNlIHRoYXQgY2F1c2VkIHRoZSB3YXJuaW5nXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9wdHMuaW5kZXggIC0gaW5kZXggaW4gQ1NTIG5vZGUgc3RyaW5nIHRoYXQgY2F1c2VkXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHdhcm5pbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5wbHVnaW4gLSBuYW1lIG9mIHRoZSBwbHVnaW4gdGhhdCBjcmVhdGVkXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyB3YXJuaW5nLiB7QGxpbmsgUmVzdWx0I3dhcm59IGZpbGxzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyBwcm9wZXJ0eSBhdXRvbWF0aWNhbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiB7V2FybmluZ30gY3JlYXRlZCB3YXJuaW5nXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dhcm4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuKHRleHQpIHtcbiAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgaWYgKCFvcHRzLnBsdWdpbikge1xuICAgICAgICBpZiAodGhpcy5sYXN0UGx1Z2luICYmIHRoaXMubGFzdFBsdWdpbi5wb3N0Y3NzUGx1Z2luKSB7XG4gICAgICAgICAgb3B0cy5wbHVnaW4gPSB0aGlzLmxhc3RQbHVnaW4ucG9zdGNzc1BsdWdpbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgd2FybmluZyA9IG5ldyBfd2FybmluZzIuZGVmYXVsdCh0ZXh0LCBvcHRzKTtcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh3YXJuaW5nKTtcblxuICAgICAgcmV0dXJuIHdhcm5pbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3YXJuaW5ncyBmcm9tIHBsdWdpbnMuIEZpbHRlcnMge0BsaW5rIFdhcm5pbmd9IGluc3RhbmNlc1xuICAgICAqIGZyb20ge0BsaW5rIFJlc3VsdCNtZXNzYWdlc30uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHJlc3VsdC53YXJuaW5ncygpLmZvckVhY2god2FybiA9PiB7XG4gICAgICogICBjb25zb2xlLndhcm4od2Fybi50b1N0cmluZygpKTtcbiAgICAgKiB9KTtcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1dhcm5pbmdbXX0gd2FybmluZ3MgZnJvbSBwbHVnaW5zXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dhcm5pbmdzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2FybmluZ3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXNzYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkudHlwZSA9PT0gJ3dhcm5pbmcnO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXMgZm9yIHRoZSB7QGxpbmsgUmVzdWx0I2Nzc30gcHJvcGVydHkuXG4gICAgICogVXNlIGl0IHdpdGggc3ludGF4ZXMgdGhhdCBnZW5lcmF0ZSBub24tQ1NTIG91dHB1dC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZXN1bHQuY3NzID09PSByZXN1bHQuY29udGVudDtcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY29udGVudCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jc3M7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc3VsdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9yZXN1bHQuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdG9rZW5pemUgPSByZXF1aXJlKCcuL3Rva2VuaXplJyk7XG5cbnZhciBfdG9rZW5pemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9rZW5pemUpO1xuXG52YXIgX2lucHV0ID0gcmVxdWlyZSgnLi9pbnB1dCcpO1xuXG52YXIgX2lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lucHV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEhJR0hMSUdIVF9USEVNRSA9IHtcbiAgICAnYnJhY2tldHMnOiBbMzYsIDM5XSwgLy8gY3lhblxuICAgICdzdHJpbmcnOiBbMzEsIDM5XSwgLy8gcmVkXG4gICAgJ2F0LXdvcmQnOiBbMzEsIDM5XSwgLy8gcmVkXG4gICAgJ2NvbW1lbnQnOiBbOTAsIDM5XSwgLy8gZ3JheVxuICAgICd7JzogWzMyLCAzOV0sIC8vIGdyZWVuXG4gICAgJ30nOiBbMzIsIDM5XSwgLy8gZ3JlZW5cbiAgICAnOic6IFsxLCAyMl0sIC8vIGJvbGRcbiAgICAnOyc6IFsxLCAyMl0sIC8vIGJvbGRcbiAgICAnKCc6IFsxLCAyMl0sIC8vIGJvbGRcbiAgICAnKSc6IFsxLCAyMl0gLy8gYm9sZFxufTtcblxuZnVuY3Rpb24gY29kZShjb2xvcikge1xuICAgIHJldHVybiAnXFx4MUJbJyArIGNvbG9yICsgJ20nO1xufVxuXG5mdW5jdGlvbiB0ZXJtaW5hbEhpZ2hsaWdodChjc3MpIHtcbiAgICB2YXIgdG9rZW5zID0gKDAsIF90b2tlbml6ZTIuZGVmYXVsdCkobmV3IF9pbnB1dDIuZGVmYXVsdChjc3MpLCB7IGlnbm9yZUVycm9yczogdHJ1ZSB9KTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHZhciBjb2xvciA9IEhJR0hMSUdIVF9USEVNRVt0b2tlblswXV07XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godG9rZW5bMV0uc3BsaXQoL1xccj9cXG4vKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29kZShjb2xvclswXSkgKyBpICsgY29kZShjb2xvclsxXSk7XG4gICAgICAgICAgICB9KS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0b2tlblsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0ZXJtaW5hbEhpZ2hsaWdodDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvdGVybWluYWwtaGlnaGxpZ2h0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcGx1Z2lu4oCZcyB3YXJuaW5nLiBJdCBjYW4gYmUgY3JlYXRlZCB1c2luZyB7QGxpbmsgTm9kZSN3YXJufS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaWYgKCBkZWNsLmltcG9ydGFudCApIHtcbiAqICAgICBkZWNsLndhcm4ocmVzdWx0LCAnQXZvaWQgIWltcG9ydGFudCcsIHsgd29yZDogJyFpbXBvcnRhbnQnIH0pO1xuICogfVxuICovXG52YXIgV2FybmluZyA9IGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgICAgICAgIC0gd2FybmluZyBtZXNzYWdlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gICAgICAtIHdhcm5pbmcgb3B0aW9uc1xuICAgKiBAcGFyYW0ge05vZGV9ICAgb3B0cy5ub2RlICAgLSBDU1Mgbm9kZSB0aGF0IGNhdXNlZCB0aGUgd2FybmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy53b3JkICAgLSB3b3JkIGluIENTUyBzb3VyY2UgdGhhdCBjYXVzZWQgdGhlIHdhcm5pbmdcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdHMuaW5kZXggIC0gaW5kZXggaW4gQ1NTIG5vZGUgc3RyaW5nIHRoYXQgY2F1c2VkXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSB3YXJuaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnBsdWdpbiAtIG5hbWUgb2YgdGhlIHBsdWdpbiB0aGF0IGNyZWF0ZWRcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyB3YXJuaW5nLiB7QGxpbmsgUmVzdWx0I3dhcm59IGZpbGxzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgcHJvcGVydHkgYXV0b21hdGljYWxseS5cbiAgICovXG4gIGZ1bmN0aW9uIFdhcm5pbmcodGV4dCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXYXJuaW5nKTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBUeXBlIHRvIGZpbHRlciB3YXJuaW5ncyBmcm9tXG4gICAgICogICAgICAgICAgICAgICAgICAgIHtAbGluayBSZXN1bHQjbWVzc2FnZXN9LiBBbHdheXMgZXF1YWxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgdG8gYFwid2FybmluZ1wiYC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3Qgbm9uV2FybmluZyA9IHJlc3VsdC5tZXNzYWdlcy5maWx0ZXIoaSA9PiBpLnR5cGUgIT09ICd3YXJuaW5nJylcbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSAnd2FybmluZyc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSAtIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHdhcm5pbmcudGV4dCAvLz0+ICdUcnkgdG8gYXZvaWQgIWltcG9ydGFudCdcbiAgICAgKi9cbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuXG4gICAgaWYgKG9wdHMubm9kZSAmJiBvcHRzLm5vZGUuc291cmNlKSB7XG4gICAgICB2YXIgcG9zID0gb3B0cy5ub2RlLnBvc2l0aW9uQnkob3B0cyk7XG4gICAgICAvKipcbiAgICAgICAqIEBtZW1iZXIge251bWJlcn0gLSBMaW5lIGluIHRoZSBpbnB1dCBmaWxlXG4gICAgICAgKiAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGlzIHdhcm5pbmfigJlzIHNvdXJjZVxuICAgICAgICpcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKiB3YXJuaW5nLmxpbmUgLy89PiA1XG4gICAgICAgKi9cbiAgICAgIHRoaXMubGluZSA9IHBvcy5saW5lO1xuICAgICAgLyoqXG4gICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IC0gQ29sdW1uIGluIHRoZSBpbnB1dCBmaWxlXG4gICAgICAgKiAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGlzIHdhcm5pbmfigJlzIHNvdXJjZS5cbiAgICAgICAqXG4gICAgICAgKiBAZXhhbXBsZVxuICAgICAgICogd2FybmluZy5jb2x1bW4gLy89PiA2XG4gICAgICAgKi9cbiAgICAgIHRoaXMuY29sdW1uID0gcG9zLmNvbHVtbjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBvcHQgaW4gb3B0cykge1xuICAgICAgdGhpc1tvcHRdID0gb3B0c1tvcHRdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgd2FybmluZyBwb3NpdGlvbiBhbmQgbWVzc2FnZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogd2FybmluZy50b1N0cmluZygpIC8vPT4gJ3Bvc3Rjc3MtbGludDphLmNzczoxMDoxNDogQXZvaWQgIWltcG9ydGFudCdcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSB3YXJuaW5nIHBvc2l0aW9uIGFuZCBtZXNzYWdlXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdhcm5pbmcsIFt7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5lcnJvcih0aGlzLnRleHQsIHtcbiAgICAgICAgICBwbHVnaW46IHRoaXMucGx1Z2luLFxuICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgIHdvcmQ6IHRoaXMud29yZFxuICAgICAgICB9KS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsdWdpbikge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW4gKyAnOiAnICsgdGhpcy50ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyb2YgV2FybmluZyNcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHBsdWdpbiAtIFRoZSBuYW1lIG9mIHRoZSBwbHVnaW4gdGhhdCBjcmVhdGVkXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBpdCB3aWxsIGZpbGwgdGhpcyBwcm9wZXJ0eSBhdXRvbWF0aWNhbGx5LlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyB3YXJuaW5nLiBXaGVuIHlvdSBjYWxsIHtAbGluayBOb2RlI3dhcm59XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHdhcm5pbmcucGx1Z2luIC8vPT4gJ3Bvc3Rjc3MtaW1wb3J0YW50J1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlcm9mIFdhcm5pbmcjXG4gICAgICogQG1lbWJlciB7Tm9kZX0gbm9kZSAtIENvbnRhaW5zIHRoZSBDU1Mgbm9kZSB0aGF0IGNhdXNlZCB0aGUgd2FybmluZy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogd2FybmluZy5ub2RlLnRvU3RyaW5nKCkgLy89PiAnY29sb3I6IHdoaXRlICFpbXBvcnRhbnQnXG4gICAgICovXG5cbiAgfV0pO1xuXG4gIHJldHVybiBXYXJuaW5nO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBXYXJuaW5nO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3VwcG9ydHMtY29sb3IvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIiXSwic291cmNlUm9vdCI6IiJ9