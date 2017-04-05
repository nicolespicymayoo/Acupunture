module.exports =
webpackJsonp([10],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	module.exports = __webpack_require__(168);


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
	
	var _isFunction = __webpack_require__(97);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isPlainObject = __webpack_require__(29);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _createBroadcast = __webpack_require__(32);
	
	var _createBroadcast2 = _interopRequireDefault(_createBroadcast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* globals React$Element */
	
	
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var babelPluginFlowReactPropTypes_proptype_Broadcast = __webpack_require__(32).babelPluginFlowReactPropTypes_proptype_Broadcast || __webpack_require__(1).PropTypes.any;
	
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
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _interleave = __webpack_require__(112);
	
	var _interleave2 = _interopRequireDefault(_interleave);
	
	var _flatten = __webpack_require__(12);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _parse = __webpack_require__(38);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	var _root = __webpack_require__(17);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _rule = __webpack_require__(18);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _atRule = __webpack_require__(13);
	
	var _atRule2 = _interopRequireDefault(_atRule);
	
	var _declaration = __webpack_require__(36);
	
	var _declaration2 = _interopRequireDefault(_declaration);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _comment = __webpack_require__(14);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _node = __webpack_require__(16);
	
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
/* 10 */,
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.objToCss = undefined;
	
	var _hyphenateStyleName = __webpack_require__(25);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _isPlainObject = __webpack_require__(29);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _container = __webpack_require__(9);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _node = __webpack_require__(16);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // break cyclical dependency deadlock – #87
	
	__webpack_require__(17);
	
	var _cssSyntaxError = __webpack_require__(35);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _cssSyntaxError = __webpack_require__(35);
	
	var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);
	
	var _stringifier = __webpack_require__(40);
	
	var _stringifier2 = _interopRequireDefault(_stringifier);
	
	var _stringify = __webpack_require__(41);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	__webpack_require__(18);
	
	var _container = __webpack_require__(9);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _lazyResult = __webpack_require__(37);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(13);
	
	var _container = __webpack_require__(9);
	
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperties = __webpack_require__(75);
	
	var _defineProperties2 = _interopRequireDefault(_defineProperties);
	
	var _freeze = __webpack_require__(76);
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;
	
	var _generateAlphabeticName = __webpack_require__(111);
	
	var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);
	
	var _css = __webpack_require__(8);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(6)('iterator')
	  , Iterators = __webpack_require__(44);
	module.exports = __webpack_require__(4).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 23 */
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
/* 24 */,
/* 25 */
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
	
	var hyphenate = __webpack_require__(82);
	
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
/* 26 */
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
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(99);
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parse = __webpack_require__(34);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	var _postcssNested = __webpack_require__(33);
	
	var _postcssNested2 = _interopRequireDefault(_postcssNested);
	
	var _flatten = __webpack_require__(12);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _StyleSheet = __webpack_require__(31);
	
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = safeParse;
	
	var _input = __webpack_require__(15);
	
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _node = __webpack_require__(16);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _stringify2 = __webpack_require__(41);
	
	var _stringify3 = _interopRequireDefault(_stringify2);
	
	var _warnOnce = __webpack_require__(3);
	
	var _warnOnce2 = _interopRequireDefault(_warnOnce);
	
	var _result = __webpack_require__(119);
	
	var _result2 = _interopRequireDefault(_result);
	
	var _parse = __webpack_require__(38);
	
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parse;
	
	var _parser = __webpack_require__(39);
	
	var _parser2 = _interopRequireDefault(_parser);
	
	var _input = __webpack_require__(15);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _declaration = __webpack_require__(36);
	
	var _declaration2 = _interopRequireDefault(_declaration);
	
	var _tokenize = __webpack_require__(19);
	
	var _tokenize2 = _interopRequireDefault(_tokenize);
	
	var _comment = __webpack_require__(14);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _atRule = __webpack_require__(13);
	
	var _atRule2 = _interopRequireDefault(_atRule);
	
	var _root = __webpack_require__(17);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _rule = __webpack_require__(18);
	
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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = stringify;
	
	var _stringifier = __webpack_require__(40);
	
	var _stringifier2 = _interopRequireDefault(_stringifier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function stringify(node, builder) {
	    var str = new _stringifier2.default(builder);
	    str.stringify(node);
	}
	module.exports = exports['default'];

/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(47);
	
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	__webpack_require__(60);
	module.exports = __webpack_require__(4).Array.from;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(126);
	__webpack_require__(43);
	module.exports = __webpack_require__(59);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	module.exports = __webpack_require__(4).Object.keys;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(123)
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(44)
	  , ITERATOR   = __webpack_require__(6)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(24);
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
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(128)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(24)
	  , get      = __webpack_require__(22);
	module.exports = __webpack_require__(4).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(124)
	  , $export     = __webpack_require__(74)
	  , toObject    = __webpack_require__(42)
	  , call        = __webpack_require__(56)
	  , isArrayIter = __webpack_require__(55)
	  , toLength    = __webpack_require__(58)
	  , getIterFn   = __webpack_require__(22);
	$export($export.S + $export.F * !__webpack_require__(57)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(42);
	
	__webpack_require__(45)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  XmlEntities: __webpack_require__(64),
	  Html4Entities: __webpack_require__(63),
	  Html5Entities: __webpack_require__(23),
	  AllHtmlEntities: __webpack_require__(23)
	};


/***/ },
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(50);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _keys = __webpack_require__(49);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(48);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _clientOverlayFalseReloadTrue = __webpack_require__(71);
	
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
/* 66 */
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
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(66);
	exports.encode = exports.stringify = __webpack_require__(67);


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(46)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 70 */
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
	
	var ansiHTML = __webpack_require__(127);
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
	
	var Entities = __webpack_require__(62).AllHtmlEntities;
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
/* 71 */
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
	  var querystring = __webpack_require__(68);
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
	  var strip = __webpack_require__(69);
	
	  var overlay;
	  if (typeof document !== 'undefined' && options.overlay) {
	    overlay = __webpack_require__(70);
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
	
	var processUpdate = __webpack_require__(72);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?overlay=false&reload=true", __webpack_require__(73)(module)))

/***/ },
/* 72 */
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
/* 73 */
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
/* 74 */,
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function defineProperties(T, D){
	  return $.setDescs(T, D);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	module.exports = __webpack_require__(4).Object.freeze;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(125);
	
	__webpack_require__(45)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 80 */
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
/* 81 */
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
	
	var camelize = __webpack_require__(80);
	
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
/* 82 */
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
/* 83 */
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _joinPrefixedValue = __webpack_require__(7);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(11);
	
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;
	
	var _joinPrefixedValue = __webpack_require__(7);
	
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
/* 86 */
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
/* 87 */
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
/* 88 */
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _joinPrefixedValue = __webpack_require__(7);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(11);
	
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
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	
	var _joinPrefixedValue = __webpack_require__(7);
	
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;
	
	var _hyphenateStyleName = __webpack_require__(83);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _capitalizeString = __webpack_require__(28);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _isPrefixedValue = __webpack_require__(11);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	var _prefixProps = __webpack_require__(27);
	
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;
	
	var _prefixProps = __webpack_require__(27);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	var _capitalizeString = __webpack_require__(28);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _sortPrefixedStyle = __webpack_require__(95);
	
	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);
	
	var _position = __webpack_require__(90);
	
	var _position2 = _interopRequireDefault(_position);
	
	var _calc = __webpack_require__(84);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _cursor = __webpack_require__(85);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _flex = __webpack_require__(86);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _sizing = __webpack_require__(91);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _gradient = __webpack_require__(89);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _transition = __webpack_require__(92);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _flexboxIE = __webpack_require__(87);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(88);
	
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
/* 94 */
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sortPrefixedStyle;
	
	var _isPrefixedProperty = __webpack_require__(94);
	
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(93)


/***/ },
/* 97 */
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
/* 98 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isArray = __webpack_require__(98);
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && isArray(val) === false;
	};


/***/ },
/* 100 */,
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
	
	var _css = __webpack_require__(8);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _GlobalStyle = __webpack_require__(30);
	
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
	
	var _hash = __webpack_require__(26);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _css = __webpack_require__(8);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _GlobalStyle = __webpack_require__(30);
	
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
	
	var _css = __webpack_require__(8);
	
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
	
	var _hash = __webpack_require__(26);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _flatten = __webpack_require__(12);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _parse = __webpack_require__(34);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	var _postcssNested = __webpack_require__(33);
	
	var _postcssNested2 = _interopRequireDefault(_postcssNested);
	
	var _autoprefix = __webpack_require__(109);
	
	var _autoprefix2 = _interopRequireDefault(_autoprefix);
	
	var _StyleSheet = __webpack_require__(31);
	
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
	
	var _camelizeStyleName = __webpack_require__(81);
	
	var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);
	
	var _hyphenateStyleName = __webpack_require__(25);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _static = __webpack_require__(96);
	
	var _static2 = _interopRequireDefault(_static);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// eslint-disable-next-line
	
	
	var babelPluginFlowReactPropTypes_proptype_Container = __webpack_require__(9).babelPluginFlowReactPropTypes_proptype_Container || __webpack_require__(1).PropTypes.any;
	
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
	
	var _tokenize2 = __webpack_require__(19);
	
	var _tokenize3 = _interopRequireDefault(_tokenize2);
	
	var _comment = __webpack_require__(14);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _parser = __webpack_require__(39);
	
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
	
	var _lazyResult = __webpack_require__(37);
	
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
	
	var _tokenize = __webpack_require__(19);
	
	var _tokenize2 = _interopRequireDefault(_tokenize);
	
	var _input = __webpack_require__(15);
	
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


/***/ },
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _taggedTemplateLiteral2 = __webpack_require__(20);
	
	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);
	
	var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(21);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TestimonialItem = function TestimonialItem(_ref) {
	  var testimonial = _ref.testimonial;
	  return _react2.default.createElement(
	    TestimonialItemContainer,
	    null,
	    _react2.default.createElement(Quote, null),
	    _react2.default.createElement(PatientName, null),
	    _react2.default.createElement(Location, null)
	  );
	};
	
	exports.default = TestimonialItem;
	
	
	var TestimonialItemContainer = _styledComponents2.default.div(_templateObject);
	
	var Quote = _styledComponents2.default.div(_templateObject);
	
	var PatientName = _styledComponents2.default.div(_templateObject);
	
	var Location = _styledComponents2.default.div(_templateObject);
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3RpbW9uaWFsSXRlbS5qcyJdLCJuYW1lcyI6WyJUZXN0aW1vbmlhbEl0ZW0iLCJ0ZXN0aW1vbmlhbCIsIlRlc3RpbW9uaWFsSXRlbUNvbnRhaW5lciIsImRpdiIsIlF1b3RlIiwiUGF0aWVudE5hbWUiLCJMb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUVDLFdBQUYsUUFBRUEsV0FBRjtBQUFBLFNBQ3RCO0FBQUMsNEJBQUQ7QUFBQTtBQUNJLGtDQUFDLEtBQUQsT0FESjtBQUlJLGtDQUFDLFdBQUQsT0FKSjtBQU9JLGtDQUFDLFFBQUQ7QUFQSixHQURzQjtBQUFBLENBQXhCOztrQkFlZUQsZTs7O0FBRWYsSUFBTUUsMkJBQTJCLDJCQUFPQyxHQUFsQyxpQkFBTjs7QUFJQSxJQUFNQyxRQUFRLDJCQUFPRCxHQUFmLGlCQUFOOztBQUlBLElBQU1FLGNBQWMsMkJBQU9GLEdBQXJCLGlCQUFOOztBQUlBLElBQU1HLFdBQVcsMkJBQU9ILEdBQWxCLGlCQUFOIiwiZmlsZSI6InRlc3RpbW9uaWFsSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgVGVzdGltb25pYWxJdGVtID0gKHt0ZXN0aW1vbmlhbH0pID0+IChcbiAgPFRlc3RpbW9uaWFsSXRlbUNvbnRhaW5lcj5cbiAgICAgIDxRdW90ZT5cbiAgICAgICAgXG4gICAgICA8L1F1b3RlPlxuICAgICAgPFBhdGllbnROYW1lPlxuICAgICAgIFxuICAgICAgPC9QYXRpZW50TmFtZT5cbiAgICAgIDxMb2NhdGlvbj5cbiAgICAgICAgXG4gICAgICA8L0xvY2F0aW9uPlxuICAgICAgXG4gIDwvVGVzdGltb25pYWxJdGVtQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbEl0ZW1cblxuY29uc3QgVGVzdGltb25pYWxJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblxuYFxuXG5jb25zdCBRdW90ZSA9IHN0eWxlZC5kaXZgXG5cbmBcblxuY29uc3QgUGF0aWVudE5hbWUgPSBzdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IExvY2F0aW9uID0gc3R5bGVkLmRpdmBcblxuYCJdfQ==
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/testimonialItem"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/testimonialItem") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi90eXBlcy5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3dhcm4tb25jZS5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9UaGVtZVByb3ZpZGVyLmpzP2MzY2VhOTciLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlLmpzP2MzY2VhOTciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL2Nzcy5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2NvbnRhaW5lci5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9pc1ByZWZpeGVkVmFsdWUuanM/YzNjZWE5NyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9mbGF0dGVuLmpzP2MzY2VhOTciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvYXQtcnVsZS5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2NvbW1lbnQuanM/YzNjZWE5NyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9pbnB1dC5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL25vZGUuanM/YzNjZWE5NyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9yb290LmpzP2MzY2VhOTciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcnVsZS5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3Rva2VuaXplLmpzP2MzY2VhOTciLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzP2MzY2VhOTciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvaW5kZXguanM/YzNjZWE5NyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDUtZW50aXRpZXMuanM/YzNjZWE5NyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZS5qcz9jM2NlYTk3Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9oYXNoLmpzP2MzY2VhOTciLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhQcm9wcy5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9jYXBpdGFsaXplU3RyaW5nLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1wbGFpbi1vYmplY3QvaW5kZXguanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvR2xvYmFsU3R5bGUuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvU3R5bGVTaGVldC5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2NyZWF0ZS1icm9hZGNhc3QuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy1uZXN0ZWQvaW5kZXguanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy1zYWZlLXBhcnNlci9wYXJzZS5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2Nzcy1zeW50YXgtZXJyb3IuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9kZWNsYXJhdGlvbi5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2xhenktcmVzdWx0LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcGFyc2UuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9wYXJzZXIuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9zdHJpbmdpZmllci5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3N0cmluZ2lmeS5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vYW5zaS1yZWdleC9pbmRleC5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtYXJyYXktaXRlci5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNhbGwuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tbGVuZ3RoLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9pbmRleC5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL3htbC1lbnRpdGllcy5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vbmV4dC9kaXN0L2NsaWVudC93ZWJwYWNrLWhvdC1taWRkbGV3YXJlLWNsaWVudC5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJpcC1hbnNpL2luZGV4LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQtb3ZlcmxheS5qcz81MDk3MjZlIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9wcm9jZXNzLXVwZGF0ZS5qcz81MDk3MjZlIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZS5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2NhbWVsaXplLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZS5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvaHlwaGVuYXRlLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBoZW5hdGUtc3R5bGUtbmFtZS9pbmRleC5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9jYWxjLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2N1cnNvci5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hJRS5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94T2xkLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2dyYWRpZW50LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL3Bvc2l0aW9uLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL3NpemluZy5qcz81MDk3MjZlIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy90cmFuc2l0aW9uLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhBbGwuanM/NTA5NzI2ZSIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvaXNQcmVmaXhlZFByb3BlcnR5LmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL3NvcnRQcmVmaXhlZFN0eWxlLmpzPzUwOTcyNmUiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljLmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1mdW5jdGlvbi9pbmRleC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vaXNhcnJheS9pbmRleC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vaXNvYmplY3QvaW5kZXguanM/OTcyNGVmMiIsIndlYnBhY2s6Ly8vLi9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL2luamVjdEdsb2JhbC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL2NvbnN0cnVjdG9ycy9rZXlmcmFtZXMuanM/OTcyNGVmMiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMvc3R5bGVkLmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvaG9jL3dpdGhUaGVtZS5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9BYnN0cmFjdFN0eWxlZENvbXBvbmVudC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9Db21wb25lbnRTdHlsZS5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9TdHlsZWRDb21wb25lbnQuanM/OTcyNGVmMiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9hdXRvcHJlZml4LmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZG9tRWxlbWVudHMuanM/OTcyNGVmMiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lLmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvaW50ZXJsZWF2ZS5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2lzVGFnLmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvdmFsaWRBdHRyLmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL2dsYW1vci9zaGVldC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzLXNhZmUtcGFyc2VyL3NhZmUtcGFyc2VyLmpzPzk3MjRlZjIiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvbGlzdC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3Byb2Nlc3Nvci5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3Jlc3VsdC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3Rlcm1pbmFsLWhpZ2hsaWdodC5qcz85NzI0ZWYyIiwid2VicGFjazovLy8uL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3dhcm5pbmcuanM/OTcyNGVmMiIsIndlYnBhY2s6Ly8vLi9+L3N1cHBvcnRzLWNvbG9yL2Jyb3dzZXIuanM/OTcyNGVmMiIsIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW1vbmlhbEl0ZW0uanM/OTcyNGVmMiJdLCJuYW1lcyI6WyJUZXN0aW1vbmlhbEl0ZW0iLCJ0ZXN0aW1vbmlhbCIsIlRlc3RpbW9uaWFsSXRlbUNvbnRhaW5lciIsImRpdiIsIlF1b3RlIiwiUGF0aWVudE5hbWUiLCJMb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVELDhCOzs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQzs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw0Q0FBMkMsa0JBQWtCLGtDQUFr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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsWUFBWSxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQixFQUFFO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTBGOztBQUUxRjtBQUNBLHdCQUF1QjtBQUN2QixxQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNU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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDbkx0Qzs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQSwrRkFBOEYsYUFBYTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDOzs7Ozs7QUM1QkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7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WkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQSxxQzs7Ozs7O0FDZEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7O0FDWkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ3ZsQkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLG1DQUFrQywwQkFBMEIsMENBQTBDLGdCQUFnQixPQUFPLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxPQUFPLHdCQUF3QixFQUFFOztBQUVqTSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Sjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBeUIsdUJBQXVCLEVBQUU7QUFDbEQ7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCLGlDQUFpQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRTtBQUNoRSxRQUFPO0FBQ1A7QUFDQTtBQUNBLCtEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQyxHOzs7Ozs7O0FDOU1EOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0QscUJBQXFCO0FBQ3BGO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBLDZCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ2hJQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF1QixtQkFBbUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBLGlCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDL0ZBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELHFHQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxLQUFLO0FBQ2hCLFlBQVcsY0FBYztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFlBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQVksS0FBSztBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEtBQUssbURBQW1ELFdBQVc7QUFDOUUsWUFBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQSxjQUFhLE9BQU87QUFDcEIsZUFBYyxPQUFPO0FBQ3JCLGVBQWMsWUFBWTtBQUMxQjs7QUFFQTtBQUNBLGNBQWEsT0FBTztBQUNwQixlQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLFlBQVcsS0FBSztBQUNoQixZQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQSxjQUFhLE9BQU87QUFDcEIsZUFBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxlQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLGVBQWMsT0FBTztBQUNyQixlQUFjLFlBQVk7QUFDMUIsZUFBYyxPQUFPO0FBQ3JCLGVBQWMsT0FBTztBQUNyQixlQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsZUFBYyw2QkFBNkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsUUFBUTtBQUN0QjtBQUNBLGVBQWMsYUFBYTtBQUMzQjtBQUNBLGVBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYSx3Q0FBd0M7QUFDckQsMkJBQTBCLG9CQUFvQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixxQkFBcUI7QUFDakQsdURBQXNEO0FBQ3RELDJDQUEwQyxhQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLGdDQUFnQztBQUM3Qyw0REFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLFVBQVU7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF3QyxpQkFBaUI7QUFDekQ7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBLGdCQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0Esd0RBQXVELFdBQVc7QUFDbEUsZ0JBQWUsZUFBZTtBQUM5QjtBQUNBLGlCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQSxnQ0FBK0IsaUNBQWlDO0FBQ2hFO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUN2T0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBLGVBQWMsT0FBTztBQUNyQixlQUFjLE9BQU87QUFDckIsZUFBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQyxRQUFPLG9CQUFvQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYSxVQUFVO0FBQ3ZCLGNBQWEsS0FBSztBQUNsQixjQUFhLGVBQWUsMEJBQTBCO0FBQ3RELHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGVBQWUscUJBQXFCO0FBQ3BELHVDQUFzQyxvQkFBb0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsT0FBTyxpQ0FBaUMsa0JBQWtCO0FBQzFFO0FBQ0E7QUFDQSwwQkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBLCtDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsT0FBTyx5QkFBeUI7QUFDOUM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBK0IsY0FBYztBQUM3QyxZQUFXLHNCQUFzQjtBQUNqQztBQUNBLGdCQUFlLE9BQU87QUFDdEIsZ0JBQWUsT0FBTztBQUN0QixnQkFBZSxLQUFLO0FBQ3BCLGdCQUFlLE9BQU87QUFDdEIsZ0JBQWUsT0FBTztBQUN0QjtBQUNBLGdCQUFlLE9BQU87QUFDdEIscURBQW9ELGtCQUFrQjtBQUN0RTtBQUNBO0FBQ0EsaUJBQWdCLFFBQVE7QUFDeEI7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdEQUErQyxjQUFjO0FBQzdELGNBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0EsaUJBQWdCLFVBQVU7QUFDMUI7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsMEJBQXlCLGlCQUFpQjtBQUMxQztBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUNoTkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04sT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRUFBb0UscUJBQXFCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQ2xEQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQSw0REFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QyxxQkFBcUI7QUFDbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixjQUFhLEtBQUs7QUFDbEIsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQjtBQUNBLGNBQWEsT0FBTztBQUNwQixtREFBa0Qsa0JBQWtCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWdCLE9BQU87QUFDdkIsNEJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLE9BQU87QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLE9BQU87QUFDdkI7QUFDQSwrREFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ2hJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLE9BQUVDLFdBQUYsUUFBRUEsV0FBRjtBQUFBLFVBQ3RCO0FBQUMsNkJBQUQ7QUFBQTtBQUNJLG1DQUFDLEtBQUQsT0FESjtBQUlJLG1DQUFDLFdBQUQsT0FKSjtBQU9JLG1DQUFDLFFBQUQ7QUFQSixJQURzQjtBQUFBLEVBQXhCOzttQkFlZUQsZTs7O0FBRWYsS0FBTUUsMkJBQTJCLDJCQUFPQyxHQUFsQyxpQkFBTjs7QUFJQSxLQUFNQyxRQUFRLDJCQUFPRCxHQUFmLGlCQUFOOztBQUlBLEtBQU1FLGNBQWMsMkJBQU9GLEdBQXJCLGlCQUFOOztBQUlBLEtBQU1HLFdBQVcsMkJBQU9ILEdBQWxCLGlCQUFOIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvdGVzdGltb25pYWxJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIHRvZG86IEkgd2FudCB0aGlzIHRvIGFjdHVhbGx5IGJlIGFuIGFycmF5IG9mIEZ1bmN0aW9uIHwgc3RyaW5nIGJ1dCB0aGF0IGNhdXNlcyBlcnJvcnMgKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgXCJiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9HbGFtb3JSdWxlXCIsIHtcbiAgdmFsdWU6IHJlcXVpcmUoXCJyZWFjdFwiKS5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNzc1RleHQ6IHJlcXVpcmUoXCJyZWFjdFwiKS5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSlcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2Fybk9uY2U7XG52YXIgcHJpbnRlZCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gICAgaWYgKHByaW50ZWRbbWVzc2FnZV0pIHJldHVybjtcbiAgICBwcmludGVkW21lc3NhZ2VdID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3dhcm4tb25jZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5DSEFOTkVMID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzLWZ1bmN0aW9uJyk7XG5cbnZhciBfaXNGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0Z1bmN0aW9uKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9jcmVhdGVCcm9hZGNhc3QgPSByZXF1aXJlKCcuLi91dGlscy9jcmVhdGUtYnJvYWRjYXN0Jyk7XG5cbnZhciBfY3JlYXRlQnJvYWRjYXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJyb2FkY2FzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cbi8qIGdsb2JhbHMgUmVhY3QkRWxlbWVudCAqL1xuXG5cbi8vIE5PVEU6IERPIE5PVCBDSEFOR0UsIGNoYW5naW5nIHRoaXMgaXMgYSBzZW12ZXIgbWFqb3IgY2hhbmdlIVxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0Jyb2FkY2FzdCA9IHJlcXVpcmUoJy4uL3V0aWxzL2NyZWF0ZS1icm9hZGNhc3QnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9Ccm9hZGNhc3QgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgQ0hBTk5FTCA9IGV4cG9ydHMuQ0hBTk5FTCA9ICdfX3N0eWxlZC1jb21wb25lbnRzX18nO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLmV4cG9ydHMsICdiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UaGVtZScsIHtcbiAgdmFsdWU6IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLnNoYXBlKHt9KVxufSk7XG5cbi8qKlxuICogUHJvdmlkZSBhIHRoZW1lIHRvIGFuIGVudGlyZSByZWFjdCBjb21wb25lbnQgdHJlZSB2aWEgY29udGV4dCBhbmQgZXZlbnQgbGlzdGVuZXJzIChoYXZlIHRvIGRvXG4gKiBib3RoIGNvbnRleHQgYW5kIGV2ZW50IGVtaXR0ZXIgYXMgcHVyZSBjb21wb25lbnRzIGJsb2NrIGNvbnRleHQgdXBkYXRlcylcbiAqL1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGhlbWVQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGhlbWVQcm92aWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGhlbWVQcm92aWRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGhlbWVQcm92aWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRoZW1lUHJvdmlkZXIpKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLmdldFRoZW1lID0gX3RoaXMuZ2V0VGhlbWUuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRoZW1lUHJvdmlkZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgVGhlbWVQcm92aWRlciB3cmFwcGVyIGFueXdoZXJlIGFyb3VuZCB0aGlzIHRoZW1lIHByb3ZpZGVyLCBtZXJnZSB0aGlzIHRoZW1lXG4gICAgICAvLyB3aXRoIHRoZSBvdXRlciB0aGVtZVxuICAgICAgaWYgKHRoaXMuY29udGV4dFtDSEFOTkVMXSkge1xuICAgICAgICB2YXIgc3Vic2NyaWJlID0gdGhpcy5jb250ZXh0W0NIQU5ORUxdO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlVG9PdXRlciA9IHN1YnNjcmliZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgICBfdGhpczIub3V0ZXJUaGVtZSA9IHRoZW1lO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnJvYWRjYXN0ID0gKDAsIF9jcmVhdGVCcm9hZGNhc3QyLmRlZmF1bHQpKHRoaXMuZ2V0VGhlbWUoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLmNvbnRleHQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgQ0hBTk5FTCwgdGhpcy5icm9hZGNhc3Quc3Vic2NyaWJlKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50aGVtZSAhPT0gbmV4dFByb3BzLnRoZW1lKSB0aGlzLmJyb2FkY2FzdC5wdWJsaXNoKHRoaXMuZ2V0VGhlbWUobmV4dFByb3BzLnRoZW1lKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbQ0hBTk5FTF0pIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvT3V0ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIHRoZW1lIGZyb20gdGhlIHByb3BzLCBzdXBwb3J0aW5nIGJvdGggKG91dGVyVGhlbWUpID0+IHt9IGFzIHdlbGwgYXMgb2JqZWN0IG5vdGF0aW9uXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFRoZW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGhlbWUocGFzc2VkVGhlbWUpIHtcbiAgICAgIHZhciB0aGVtZSA9IHBhc3NlZFRoZW1lIHx8IHRoaXMucHJvcHMudGhlbWU7XG4gICAgICBpZiAoKDAsIF9pc0Z1bmN0aW9uMi5kZWZhdWx0KSh0aGVtZSkpIHtcbiAgICAgICAgdmFyIG1lcmdlZFRoZW1lID0gdGhlbWUodGhpcy5vdXRlclRoZW1lKTtcbiAgICAgICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpKG1lcmdlZFRoZW1lKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciB0aGVtZSBmdW5jdGlvbiwgaS5lLiB0aGVtZT17KCkgPT4gKHt9KX0hJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICAgICAgfVxuICAgICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpKHRoZW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgbWFrZSB5b3VyIHRoZW1lIHByb3AgYSBwbGFpbiBvYmplY3QnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5vdXRlclRoZW1lLCB0aGVtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUaGVtZVByb3ZpZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGhlbWVQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnksXG4gIHRoZW1lOiByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5vbmVPZlR5cGUoW3JlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLnNoYXBlKHt9KSwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWRcbn07XG5cblxuVGhlbWVQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgQ0hBTk5FTCwgX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQpO1xuVGhlbWVQcm92aWRlci5jb250ZXh0VHlwZXMgPSBfZGVmaW5lUHJvcGVydHkoe30sIENIQU5ORUwsIF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRoZW1lUHJvdmlkZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvVGhlbWVQcm92aWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyByZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgY29uY2F0ZWQgcHJlZml4ZWQgdmFsdWUgc3RyaW5nXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gIH0gOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBbJy13ZWJraXQtJywgJy1tb3otJywgJyddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgcmV0dXJuIHJlcGxhY2VyKHByZWZpeCwgdmFsdWUpO1xuICB9KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2ludGVybGVhdmUgPSByZXF1aXJlKCcuLi91dGlscy9pbnRlcmxlYXZlJyk7XG5cbnZhciBfaW50ZXJsZWF2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcmxlYXZlKTtcblxudmFyIF9mbGF0dGVuID0gcmVxdWlyZSgnLi4vdXRpbHMvZmxhdHRlbicpO1xuXG52YXIgX2ZsYXR0ZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxhdHRlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0IHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RyaW5ncykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfZmxhdHRlbjIuZGVmYXVsdCkoKDAsIF9pbnRlcmxlYXZlMi5kZWZhdWx0KShzdHJpbmdzLCBpbnRlcnBvbGF0aW9ucykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMvY3NzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX3BhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuXG52YXIgX3BhcnNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlKTtcblxudmFyIF9yb290ID0gcmVxdWlyZSgnLi9yb290Jyk7XG5cbnZhciBfcm9vdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb290KTtcblxudmFyIF9ydWxlID0gcmVxdWlyZSgnLi9ydWxlJyk7XG5cbnZhciBfcnVsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydWxlKTtcblxudmFyIF9hdFJ1bGUgPSByZXF1aXJlKCcuL2F0LXJ1bGUnKTtcblxudmFyIF9hdFJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXRSdWxlKTtcblxudmFyIF9kZWNsYXJhdGlvbiA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb24nKTtcblxudmFyIF9kZWNsYXJhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNsYXJhdGlvbik7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxudmFyIF9jb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50Jyk7XG5cbnZhciBfY29tbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tZW50KTtcblxudmFyIF9ub2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG5cbnZhciBfbm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub2RlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBjbGVhblNvdXJjZShub2Rlcykge1xuICAgIHJldHVybiBub2Rlcy5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaWYgKGkubm9kZXMpIGkubm9kZXMgPSBjbGVhblNvdXJjZShpLm5vZGVzKTtcbiAgICAgICAgZGVsZXRlIGkuc291cmNlO1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2hpbGRDb25kaXRpb25cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAgICAtIGNvbnRhaW5lciBjaGlsZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gY2hpbGQgaW5kZXhcbiAqIEBwYXJhbSB7Tm9kZVtdfSBub2RlcyAtIGFsbCBjb250YWluZXIgY2hpbGRyZW5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2hpbGRJdGVyYXRvclxuICogQHBhcmFtIHtOb2RlfSBub2RlICAgIC0gY29udGFpbmVyIGNoaWxkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBjaGlsZCBpbmRleFxuICogQHJldHVybiB7ZmFsc2V8dW5kZWZpbmVkfSByZXR1cm5pbmcgYGZhbHNlYCB3aWxsIGJyZWFrIGl0ZXJhdGlvblxuICovXG5cbi8qKlxuICogVGhlIHtAbGluayBSb290fSwge0BsaW5rIEF0UnVsZX0sIGFuZCB7QGxpbmsgUnVsZX0gY29udGFpbmVyIG5vZGVzXG4gKiBpbmhlcml0IHNvbWUgY29tbW9uIG1ldGhvZHMgdG8gaGVscCB3b3JrIHdpdGggdGhlaXIgY2hpbGRyZW4uXG4gKlxuICogTm90ZSB0aGF0IGFsbCBjb250YWluZXJzIGNhbiBzdG9yZSBhbnkgY29udGVudC4gSWYgeW91IHdyaXRlIGEgcnVsZSBpbnNpZGVcbiAqIGEgcnVsZSwgUG9zdENTUyB3aWxsIHBhcnNlIGl0LlxuICpcbiAqIEBleHRlbmRzIE5vZGVcbiAqIEBhYnN0cmFjdFxuICovXG5cbnZhciBDb250YWluZXIgPSBmdW5jdGlvbiAoX05vZGUpIHtcbiAgICBfaW5oZXJpdHMoQ29udGFpbmVyLCBfTm9kZSk7XG5cbiAgICBmdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29udGFpbmVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29udGFpbmVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbnRhaW5lciwgW3tcbiAgICAgICAga2V5OiAncHVzaCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0ZXJhdGVzIHRocm91Z2ggdGhlIGNvbnRhaW5lcuKAmXMgaW1tZWRpYXRlIGNoaWxkcmVuLFxuICAgICAgICAgKiBjYWxsaW5nIGBjYWxsYmFja2AgZm9yIGVhY2ggY2hpbGQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybmluZyBgZmFsc2VgIGluIHRoZSBjYWxsYmFjayB3aWxsIGJyZWFrIGl0ZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZXRob2Qgb25seSBpdGVyYXRlcyB0aHJvdWdoIHRoZSBjb250YWluZXLigJlzIGltbWVkaWF0ZSBjaGlsZHJlbi5cbiAgICAgICAgICogSWYgeW91IG5lZWQgdG8gcmVjdXJzaXZlbHkgaXRlcmF0ZSB0aHJvdWdoIGFsbCB0aGUgY29udGFpbmVy4oCZcyBkZXNjZW5kYW50XG4gICAgICAgICAqIG5vZGVzLCB1c2Uge0BsaW5rIENvbnRhaW5lciN3YWxrfS5cbiAgICAgICAgICpcbiAgICAgICAgICogVW5saWtlIHRoZSBmb3IgYHt9YC1jeWNsZSBvciBgQXJyYXkjZm9yRWFjaGAgdGhpcyBpdGVyYXRvciBpcyBzYWZlXG4gICAgICAgICAqIGlmIHlvdSBhcmUgbXV0YXRpbmcgdGhlIGFycmF5IG9mIGNoaWxkIG5vZGVzIGR1cmluZyBpdGVyYXRpb24uXG4gICAgICAgICAqIFBvc3RDU1Mgd2lsbCBhZGp1c3QgdGhlIGN1cnJlbnQgaW5kZXggdG8gbWF0Y2ggdGhlIG11dGF0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtjaGlsZEl0ZXJhdG9yfSBjYWxsYmFjayAtIGl0ZXJhdG9yIHJlY2VpdmVzIGVhY2ggbm9kZSBhbmQgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmFsc2V8dW5kZWZpbmVkfSByZXR1cm5zIGBmYWxzZWAgaWYgaXRlcmF0aW9uIHdhcyBicm9rZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7IGNvbG9yOiBibGFjazsgei1pbmRleDogMSB9Jyk7XG4gICAgICAgICAqIGNvbnN0IHJ1bGUgPSByb290LmZpcnN0O1xuICAgICAgICAgKlxuICAgICAgICAgKiBmb3IgKCBsZXQgZGVjbCBvZiBydWxlLm5vZGVzICkge1xuICAgICAgICAgKiAgICAgZGVjbC5jbG9uZUJlZm9yZSh7IHByb3A6ICctd2Via2l0LScgKyBkZWNsLnByb3AgfSk7XG4gICAgICAgICAqICAgICAvLyBDeWNsZSB3aWxsIGJlIGluZmluaXRlLCBiZWNhdXNlIGNsb25lQmVmb3JlIG1vdmVzIHRoZSBjdXJyZW50IG5vZGVcbiAgICAgICAgICogICAgIC8vIHRvIHRoZSBuZXh0IGluZGV4XG4gICAgICAgICAqIH1cbiAgICAgICAgICpcbiAgICAgICAgICogcnVsZS5lYWNoKGRlY2wgPT4ge1xuICAgICAgICAgKiAgICAgZGVjbC5jbG9uZUJlZm9yZSh7IHByb3A6ICctd2Via2l0LScgKyBkZWNsLnByb3AgfSk7XG4gICAgICAgICAqICAgICAvLyBXaWxsIGJlIGV4ZWN1dGVkIG9ubHkgZm9yIGNvbG9yIGFuZCB6LWluZGV4XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZWFjaCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGFzdEVhY2gpIHRoaXMubGFzdEVhY2ggPSAwO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluZGV4ZXMpIHRoaXMuaW5kZXhlcyA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RFYWNoICs9IDE7XG4gICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmxhc3RFYWNoO1xuICAgICAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IDA7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlcykgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmluZGV4ZXNbaWRdIDwgdGhpcy5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcy5ub2Rlc1tpbmRleF0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ZXNbaWRdICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmluZGV4ZXNbaWRdO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYXZlcnNlcyB0aGUgY29udGFpbmVy4oCZcyBkZXNjZW5kYW50IG5vZGVzLCBjYWxsaW5nIGNhbGxiYWNrXG4gICAgICAgICAqIGZvciBlYWNoIG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIExpa2UgY29udGFpbmVyLmVhY2goKSwgdGhpcyBtZXRob2QgaXMgc2FmZSB0byB1c2VcbiAgICAgICAgICogaWYgeW91IGFyZSBtdXRhdGluZyBhcnJheXMgZHVyaW5nIGl0ZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IG9ubHkgbmVlZCB0byBpdGVyYXRlIHRocm91Z2ggdGhlIGNvbnRhaW5lcuKAmXMgaW1tZWRpYXRlIGNoaWxkcmVuLFxuICAgICAgICAgKiB1c2Uge0BsaW5rIENvbnRhaW5lciNlYWNofS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtjaGlsZEl0ZXJhdG9yfSBjYWxsYmFjayAtIGl0ZXJhdG9yIHJlY2VpdmVzIGVhY2ggbm9kZSBhbmQgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmFsc2V8dW5kZWZpbmVkfSByZXR1cm5zIGBmYWxzZWAgaWYgaXRlcmF0aW9uIHdhcyBicm9rZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiByb290LndhbGsobm9kZSA9PiB7XG4gICAgICAgICAqICAgLy8gVHJhdmVyc2VzIGFsbCBkZXNjZW5kYW50IG5vZGVzLlxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3dhbGsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2FsayhjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlICYmIGNoaWxkLndhbGspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY2hpbGQud2FsayhjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmF2ZXJzZXMgdGhlIGNvbnRhaW5lcuKAmXMgZGVzY2VuZGFudCBub2RlcywgY2FsbGluZyBjYWxsYmFja1xuICAgICAgICAgKiBmb3IgZWFjaCBkZWNsYXJhdGlvbiBub2RlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UgcGFzcyBhIGZpbHRlciwgaXRlcmF0aW9uIHdpbGwgb25seSBoYXBwZW4gb3ZlciBkZWNsYXJhdGlvbnNcbiAgICAgICAgICogd2l0aCBtYXRjaGluZyBwcm9wZXJ0aWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBMaWtlIHtAbGluayBDb250YWluZXIjZWFjaH0sIHRoaXMgbWV0aG9kIGlzIHNhZmVcbiAgICAgICAgICogdG8gdXNlIGlmIHlvdSBhcmUgbXV0YXRpbmcgYXJyYXlzIGR1cmluZyBpdGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gW3Byb3BdICAgLSBzdHJpbmcgb3IgcmVndWxhciBleHByZXNzaW9uXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBmaWx0ZXIgZGVjbGFyYXRpb25zIGJ5IHByb3BlcnR5IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtjaGlsZEl0ZXJhdG9yfSBjYWxsYmFjayAtIGl0ZXJhdG9yIHJlY2VpdmVzIGVhY2ggbm9kZSBhbmQgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmFsc2V8dW5kZWZpbmVkfSByZXR1cm5zIGBmYWxzZWAgaWYgaXRlcmF0aW9uIHdhcyBicm9rZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiByb290LndhbGtEZWNscyhkZWNsID0+IHtcbiAgICAgICAgICogICBjaGVja1Byb3BlcnR5U3VwcG9ydChkZWNsLnByb3ApO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogcm9vdC53YWxrRGVjbHMoJ2JvcmRlci1yYWRpdXMnLCBkZWNsID0+IHtcbiAgICAgICAgICogICBkZWNsLnJlbW92ZSgpO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogcm9vdC53YWxrRGVjbHMoL15iYWNrZ3JvdW5kLywgZGVjbCA9PiB7XG4gICAgICAgICAqICAgZGVjbC52YWx1ZSA9IHRha2VGaXJzdENvbG9yRnJvbUdyYWRpZW50KGRlY2wudmFsdWUpO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3dhbGtEZWNscycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3YWxrRGVjbHMocHJvcCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHByb3A7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdkZWNsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdkZWNsJyAmJiBwcm9wLnRlc3QoY2hpbGQucHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdkZWNsJyAmJiBjaGlsZC5wcm9wID09PSBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhdmVyc2VzIHRoZSBjb250YWluZXLigJlzIGRlc2NlbmRhbnQgbm9kZXMsIGNhbGxpbmcgY2FsbGJhY2tcbiAgICAgICAgICogZm9yIGVhY2ggcnVsZSBub2RlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UgcGFzcyBhIGZpbHRlciwgaXRlcmF0aW9uIHdpbGwgb25seSBoYXBwZW4gb3ZlciBydWxlc1xuICAgICAgICAgKiB3aXRoIG1hdGNoaW5nIHNlbGVjdG9ycy5cbiAgICAgICAgICpcbiAgICAgICAgICogTGlrZSB7QGxpbmsgQ29udGFpbmVyI2VhY2h9LCB0aGlzIG1ldGhvZCBpcyBzYWZlXG4gICAgICAgICAqIHRvIHVzZSBpZiB5b3UgYXJlIG11dGF0aW5nIGFycmF5cyBkdXJpbmcgaXRlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IFtzZWxlY3Rvcl0gLSBzdHJpbmcgb3IgcmVndWxhciBleHByZXNzaW9uXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGZpbHRlciBydWxlcyBieSBzZWxlY3RvclxuICAgICAgICAgKiBAcGFyYW0ge2NoaWxkSXRlcmF0b3J9IGNhbGxiYWNrICAgLSBpdGVyYXRvciByZWNlaXZlcyBlYWNoIG5vZGUgYW5kIGluZGV4XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge2ZhbHNlfHVuZGVmaW5lZH0gcmV0dXJucyBgZmFsc2VgIGlmIGl0ZXJhdGlvbiB3YXMgYnJva2VcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgc2VsZWN0b3JzID0gW107XG4gICAgICAgICAqIHJvb3Qud2Fsa1J1bGVzKHJ1bGUgPT4ge1xuICAgICAgICAgKiAgIHNlbGVjdG9ycy5wdXNoKHJ1bGUuc2VsZWN0b3IpO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogY29uc29sZS5sb2coYFlvdXIgQ1NTIHVzZXMgJHtzZWxlY3RvcnMubGVuZ3RofSBzZWxlY3RvcnNgKTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3dhbGtSdWxlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3YWxrUnVsZXMoc2VsZWN0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWxlY3RvcjtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGsoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAncnVsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ3J1bGUnICYmIHNlbGVjdG9yLnRlc3QoY2hpbGQuc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGsoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAncnVsZScgJiYgY2hpbGQuc2VsZWN0b3IgPT09IHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhdmVyc2VzIHRoZSBjb250YWluZXLigJlzIGRlc2NlbmRhbnQgbm9kZXMsIGNhbGxpbmcgY2FsbGJhY2tcbiAgICAgICAgICogZm9yIGVhY2ggYXQtcnVsZSBub2RlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UgcGFzcyBhIGZpbHRlciwgaXRlcmF0aW9uIHdpbGwgb25seSBoYXBwZW4gb3ZlciBhdC1ydWxlc1xuICAgICAgICAgKiB0aGF0IGhhdmUgbWF0Y2hpbmcgbmFtZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIExpa2Uge0BsaW5rIENvbnRhaW5lciNlYWNofSwgdGhpcyBtZXRob2QgaXMgc2FmZVxuICAgICAgICAgKiB0byB1c2UgaWYgeW91IGFyZSBtdXRhdGluZyBhcnJheXMgZHVyaW5nIGl0ZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBbbmFtZV0gICAtIHN0cmluZyBvciByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGZpbHRlciBhdC1ydWxlcyBieSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7Y2hpbGRJdGVyYXRvcn0gY2FsbGJhY2sgLSBpdGVyYXRvciByZWNlaXZlcyBlYWNoIG5vZGUgYW5kIGluZGV4XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge2ZhbHNlfHVuZGVmaW5lZH0gcmV0dXJucyBgZmFsc2VgIGlmIGl0ZXJhdGlvbiB3YXMgYnJva2VcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcm9vdC53YWxrQXRSdWxlcyhydWxlID0+IHtcbiAgICAgICAgICogICBpZiAoIGlzT2xkKHJ1bGUubmFtZSkgKSBydWxlLnJlbW92ZSgpO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAqIHJvb3Qud2Fsa0F0UnVsZXMoJ2NoYXJzZXQnLCBydWxlID0+IHtcbiAgICAgICAgICogICBpZiAoICFmaXJzdCApIHtcbiAgICAgICAgICogICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICogICB9IGVsc2Uge1xuICAgICAgICAgKiAgICAgcnVsZS5yZW1vdmUoKTtcbiAgICAgICAgICogICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnd2Fsa0F0UnVsZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2Fsa0F0UnVsZXMobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IG5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdhdHJ1bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2F0cnVsZScgJiYgbmFtZS50ZXN0KGNoaWxkLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGsoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAnYXRydWxlJyAmJiBjaGlsZC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhdmVyc2VzIHRoZSBjb250YWluZXLigJlzIGRlc2NlbmRhbnQgbm9kZXMsIGNhbGxpbmcgY2FsbGJhY2tcbiAgICAgICAgICogZm9yIGVhY2ggY29tbWVudCBub2RlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBMaWtlIHtAbGluayBDb250YWluZXIjZWFjaH0sIHRoaXMgbWV0aG9kIGlzIHNhZmVcbiAgICAgICAgICogdG8gdXNlIGlmIHlvdSBhcmUgbXV0YXRpbmcgYXJyYXlzIGR1cmluZyBpdGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Y2hpbGRJdGVyYXRvcn0gY2FsbGJhY2sgLSBpdGVyYXRvciByZWNlaXZlcyBlYWNoIG5vZGUgYW5kIGluZGV4XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge2ZhbHNlfHVuZGVmaW5lZH0gcmV0dXJucyBgZmFsc2VgIGlmIGl0ZXJhdGlvbiB3YXMgYnJva2VcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcm9vdC53YWxrQ29tbWVudHMoY29tbWVudCA9PiB7XG4gICAgICAgICAqICAgY29tbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd3YWxrQ29tbWVudHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2Fsa0NvbW1lbnRzKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIG5ldyBub2RlcyB0byB0aGUgc3RhcnQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsuLi4oTm9kZXxvYmplY3R8c3RyaW5nfE5vZGVbXSl9IGNoaWxkcmVuIC0gbmV3IG5vZGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IHRoaXMgbm9kZSBmb3IgbWV0aG9kcyBjaGFpblxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBkZWNsMSA9IHBvc3Rjc3MuZGVjbCh7IHByb3A6ICdjb2xvcicsIHZhbHVlOiAnYmxhY2snIH0pO1xuICAgICAgICAgKiBjb25zdCBkZWNsMiA9IHBvc3Rjc3MuZGVjbCh7IHByb3A6ICdiYWNrZ3JvdW5kLWNvbG9yJywgdmFsdWU6ICd3aGl0ZScgfSk7XG4gICAgICAgICAqIHJ1bGUuYXBwZW5kKGRlY2wxLCBkZWNsMik7XG4gICAgICAgICAqXG4gICAgICAgICAqIHJvb3QuYXBwZW5kKHsgbmFtZTogJ2NoYXJzZXQnLCBwYXJhbXM6ICdcIlVURi04XCInIH0pOyAgLy8gYXQtcnVsZVxuICAgICAgICAgKiByb290LmFwcGVuZCh7IHNlbGVjdG9yOiAnYScgfSk7ICAgICAgICAgICAgICAgICAgICAgICAvLyBydWxlXG4gICAgICAgICAqIHJ1bGUuYXBwZW5kKHsgcHJvcDogJ2NvbG9yJywgdmFsdWU6ICdibGFjaycgfSk7ICAgICAgIC8vIGRlY2xhcmF0aW9uXG4gICAgICAgICAqIHJ1bGUuYXBwZW5kKHsgdGV4dDogJ0NvbW1lbnQnIH0pICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogcm9vdC5hcHBlbmQoJ2Ege30nKTtcbiAgICAgICAgICogcm9vdC5maXJzdC5hcHBlbmQoJ2NvbG9yOiBibGFjazsgei1pbmRleDogMScpO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYXBwZW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY2hpbGRyZW4gPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSBfdGhpczIubm9ybWFsaXplKGNoaWxkLCBfdGhpczIubGFzdCk7XG4gICAgICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgbmV3IG5vZGVzIHRvIHRoZSBlbmQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsuLi4oTm9kZXxvYmplY3R8c3RyaW5nfE5vZGVbXSl9IGNoaWxkcmVuIC0gbmV3IG5vZGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IHRoaXMgbm9kZSBmb3IgbWV0aG9kcyBjaGFpblxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBkZWNsMSA9IHBvc3Rjc3MuZGVjbCh7IHByb3A6ICdjb2xvcicsIHZhbHVlOiAnYmxhY2snIH0pO1xuICAgICAgICAgKiBjb25zdCBkZWNsMiA9IHBvc3Rjc3MuZGVjbCh7IHByb3A6ICdiYWNrZ3JvdW5kLWNvbG9yJywgdmFsdWU6ICd3aGl0ZScgfSk7XG4gICAgICAgICAqIHJ1bGUucHJlcGVuZChkZWNsMSwgZGVjbDIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiByb290LmFwcGVuZCh7IG5hbWU6ICdjaGFyc2V0JywgcGFyYW1zOiAnXCJVVEYtOFwiJyB9KTsgIC8vIGF0LXJ1bGVcbiAgICAgICAgICogcm9vdC5hcHBlbmQoeyBzZWxlY3RvcjogJ2EnIH0pOyAgICAgICAgICAgICAgICAgICAgICAgLy8gcnVsZVxuICAgICAgICAgKiBydWxlLmFwcGVuZCh7IHByb3A6ICdjb2xvcicsIHZhbHVlOiAnYmxhY2snIH0pOyAgICAgICAvLyBkZWNsYXJhdGlvblxuICAgICAgICAgKiBydWxlLmFwcGVuZCh7IHRleHQ6ICdDb21tZW50JyB9KSAgICAgICAgICAgICAgICAgICAgICAvLyBjb21tZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIHJvb3QuYXBwZW5kKCdhIHt9Jyk7XG4gICAgICAgICAqIHJvb3QuZmlyc3QuYXBwZW5kKCdjb2xvcjogYmxhY2s7IHotaW5kZXg6IDEnKTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXBlbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGVuZCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNoaWxkcmVuID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLnJldmVyc2UoKTtcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gX3RoaXMzLm5vcm1hbGl6ZShjaGlsZCwgX3RoaXMzLmZpcnN0LCAncHJlcGVuZCcpLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMubm9kZXMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBfdGhpczMuaW5kZXhlcykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczMuaW5kZXhlc1tpZF0gPSBfdGhpczMuaW5kZXhlc1tpZF0gKyBub2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xlYW5SYXdzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFuUmF3cyhrZWVwQmV0d2Vlbikge1xuICAgICAgICAgICAgX2dldChDb250YWluZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29udGFpbmVyLnByb3RvdHlwZSksICdjbGVhblJhd3MnLCB0aGlzKS5jYWxsKHRoaXMsIGtlZXBCZXR3ZWVuKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmNsZWFuUmF3cyhrZWVwQmV0d2Vlbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0IG5ldyBub2RlIGJlZm9yZSBvbGQgbm9kZSB3aXRoaW4gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOb2RlfG51bWJlcn0gZXhpc3QgICAgICAgICAgICAgLSBjaGlsZCBvciBjaGlsZOKAmXMgaW5kZXguXG4gICAgICAgICAqIEBwYXJhbSB7Tm9kZXxvYmplY3R8c3RyaW5nfE5vZGVbXX0gYWRkIC0gbmV3IG5vZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gdGhpcyBub2RlIGZvciBtZXRob2RzIGNoYWluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJ1bGUuaW5zZXJ0QmVmb3JlKGRlY2wsIGRlY2wuY2xvbmUoeyBwcm9wOiAnLXdlYmtpdC0nICsgZGVjbC5wcm9wIH0pKTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luc2VydEJlZm9yZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRCZWZvcmUoZXhpc3QsIGFkZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGV4aXN0ID0gdGhpcy5pbmRleChleGlzdCk7XG5cbiAgICAgICAgICAgIHZhciB0eXBlID0gZXhpc3QgPT09IDAgPyAncHJlcGVuZCcgOiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXMubm9ybWFsaXplKGFkZCwgdGhpcy5ub2Rlc1tleGlzdF0sIHR5cGUpLnJldmVyc2UoKTtcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0Lm5vZGVzLnNwbGljZShleGlzdCwgMCwgbm9kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdm9pZCAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4ZXNbaWRdO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdCA8PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gaW5kZXggKyBub2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnQgbmV3IG5vZGUgYWZ0ZXIgb2xkIG5vZGUgd2l0aGluIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Tm9kZXxudW1iZXJ9IGV4aXN0ICAgICAgICAgICAgIC0gY2hpbGQgb3IgY2hpbGTigJlzIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7Tm9kZXxvYmplY3R8c3RyaW5nfE5vZGVbXX0gYWRkIC0gbmV3IG5vZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gdGhpcyBub2RlIGZvciBtZXRob2RzIGNoYWluXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbnNlcnRBZnRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRBZnRlcihleGlzdCwgYWRkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgZXhpc3QgPSB0aGlzLmluZGV4KGV4aXN0KTtcblxuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5ub3JtYWxpemUoYWRkLCB0aGlzLm5vZGVzW2V4aXN0XSkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczUubm9kZXMuc3BsaWNlKGV4aXN0ICsgMSwgMCwgbm9kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdm9pZCAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4ZXNbaWRdO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleCArIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdDb250YWluZXIjcmVtb3ZlIGlzIGRlcHJlY2F0ZWQuICcgKyAnVXNlIENvbnRhaW5lciNyZW1vdmVDaGlsZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfZ2V0KENvbnRhaW5lci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250YWluZXIucHJvdG90eXBlKSwgJ3JlbW92ZScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIG5vZGUgZnJvbSB0aGUgY29udGFpbmVyIGFuZCBjbGVhbnMgdGhlIHBhcmVudCBwcm9wZXJ0aWVzXG4gICAgICAgICAqIGZyb20gdGhlIG5vZGUgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOb2RlfG51bWJlcn0gY2hpbGQgLSBjaGlsZCBvciBjaGlsZOKAmXMgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gdGhpcyBub2RlIGZvciBtZXRob2RzIGNoYWluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJ1bGUubm9kZXMubGVuZ3RoICAvLz0+IDVcbiAgICAgICAgICogcnVsZS5yZW1vdmVDaGlsZChkZWNsKTtcbiAgICAgICAgICogcnVsZS5ub2Rlcy5sZW5ndGggIC8vPT4gNFxuICAgICAgICAgKiBkZWNsLnBhcmVudCAgICAgICAgLy89PiB1bmRlZmluZWRcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUNoaWxkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHRoaXMuaW5kZXgoY2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5ub2Rlc1tjaGlsZF0ucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoY2hpbGQsIDEpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIHRoZSBjb250YWluZXJcbiAgICAgICAgICogYW5kIGNsZWFucyB0aGVpciBwYXJlbnQgcHJvcGVydGllcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gdGhpcyBub2RlIGZvciBtZXRob2RzIGNoYWluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJ1bGUucmVtb3ZlQWxsKCk7XG4gICAgICAgICAqIHJ1bGUubm9kZXMubGVuZ3RoIC8vPT4gMFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlQWxsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFzc2VzIGFsbCBkZWNsYXJhdGlvbiB2YWx1ZXMgd2l0aGluIHRoZSBjb250YWluZXIgdGhhdCBtYXRjaCBwYXR0ZXJuXG4gICAgICAgICAqIHRocm91Z2ggY2FsbGJhY2ssIHJlcGxhY2luZyB0aG9zZSB2YWx1ZXMgd2l0aCB0aGUgcmV0dXJuZWQgcmVzdWx0XG4gICAgICAgICAqIG9mIGNhbGxiYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VmdWwgaWYgeW91IGFyZSB1c2luZyBhIGN1c3RvbSB1bml0IG9yIGZ1bmN0aW9uXG4gICAgICAgICAqIGFuZCBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCBhbGwgdmFsdWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHBhdHRlcm4gICAgICAtIHJlcGxhY2UgcGF0dGVyblxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0cyAgICAgICAgICAgICAgICAtIG9wdGlvbnMgdG8gc3BlZWQgdXAgdGhlIHNlYXJjaFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gb3B0cy5wcm9wcyAtIGFuIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZhc3QgICAgICAgICAgIC0gc3RyaW5nIHRoYXTigJlzIHVzZWRcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBuYXJyb3cgZG93biB2YWx1ZXMgYW5kIHNwZWVkIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJlZ2V4cCBzZWFyY2hcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbnxzdHJpbmd9IGNhbGxiYWNrICAgLSBzdHJpbmcgdG8gcmVwbGFjZSBwYXR0ZXJuXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgY2FsbGJhY2sgdGhhdCByZXR1cm5zIGEgbmV3XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGNhbGxiYWNrIHdpbGwgcmVjZWl2ZVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzYW1lIGFyZ3VtZW50cyBhcyB0aG9zZVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHBhcmFtZXRlclxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIGBTdHJpbmcjcmVwbGFjZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IHRoaXMgbm9kZSBmb3IgbWV0aG9kcyBjaGFpblxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiByb290LnJlcGxhY2VWYWx1ZXMoL1xcZCtyZW0vLCB7IGZhc3Q6ICdyZW0nIH0sIHN0cmluZyA9PiB7XG4gICAgICAgICAqICAgcmV0dXJuIDE1ICogcGFyc2VJbnQoc3RyaW5nKSArICdweCc7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVwbGFjZVZhbHVlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlVmFsdWVzKHBhdHRlcm4sIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy53YWxrRGVjbHMoZnVuY3Rpb24gKGRlY2wpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5wcm9wcyAmJiBvcHRzLnByb3BzLmluZGV4T2YoZGVjbC5wcm9wKSA9PT0gLTEpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5mYXN0ICYmIGRlY2wudmFsdWUuaW5kZXhPZihvcHRzLmZhc3QpID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgZGVjbC52YWx1ZSA9IGRlY2wudmFsdWUucmVwbGFjZShwYXR0ZXJuLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWBcbiAgICAgICAgICogZm9yIGFsbCBvZiB0aGUgY29udGFpbmVy4oCZcyBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtjaGlsZENvbmRpdGlvbn0gY29uZGl0aW9uIC0gaXRlcmF0b3IgcmV0dXJucyB0cnVlIG9yIGZhbHNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBpcyBldmVyeSBjaGlsZCBwYXNzIGNvbmRpdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBub1ByZWZpeGVzID0gcnVsZS5ldmVyeShpID0+IGkucHJvcFswXSAhPT0gJy0nKTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2V2ZXJ5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV2ZXJ5KGNvbmRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMuZXZlcnkoY29uZGl0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgKGF0IGxlYXN0KSBvbmVcbiAgICAgICAgICogb2YgdGhlIGNvbnRhaW5lcuKAmXMgY2hpbGRyZW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Y2hpbGRDb25kaXRpb259IGNvbmRpdGlvbiAtIGl0ZXJhdG9yIHJldHVybnMgdHJ1ZSBvciBmYWxzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gaXMgc29tZSBjaGlsZCBwYXNzIGNvbmRpdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBoYXNQcmVmaXggPSBydWxlLnNvbWUoaSA9PiBpLnByb3BbMF0gPT09ICctJyk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb21lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvbWUoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5zb21lKGNvbmRpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIGBjaGlsZGDigJlzIGluZGV4IHdpdGhpbiB0aGUge0BsaW5rIENvbnRhaW5lciNub2Rlc30gYXJyYXkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgLSBjaGlsZCBvZiB0aGUgY3VycmVudCBjb250YWluZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gY2hpbGQgaW5kZXhcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcnVsZS5pbmRleCggcnVsZS5ub2Rlc1syXSApIC8vPT4gMlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5kZXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5kZXgoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29udGFpbmVy4oCZcyBmaXJzdCBjaGlsZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge05vZGV9XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJ1bGUuZmlyc3QgPT0gcnVsZXMubm9kZXNbMF07XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdub3JtYWxpemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbm9ybWFsaXplKG5vZGVzLCBzYW1wbGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5vZGVzID0gY2xlYW5Tb3VyY2UoKDAsIF9wYXJzZTIuZGVmYXVsdCkobm9kZXMpLm5vZGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzLnR5cGUgPT09ICdyb290Jykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLm5vZGVzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZXMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IFtub2Rlc107XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2Rlcy5wcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZXMudmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIGZpZWxkIGlzIG1pc3NlZCBpbiBub2RlIGNyZWF0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGVzLnZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMudmFsdWUgPSBTdHJpbmcobm9kZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gW25ldyBfZGVjbGFyYXRpb24yLmRlZmF1bHQobm9kZXMpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGVzLnNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gW25ldyBfcnVsZTIuZGVmYXVsdChub2RlcyldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZXMubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IFtuZXcgX2F0UnVsZTIuZGVmYXVsdChub2RlcyldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZXMudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IFtuZXcgX2NvbW1lbnQyLmRlZmF1bHQobm9kZXMpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbm9kZSB0eXBlIGluIG5vZGUgY3JlYXRpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwcm9jZXNzZWQgPSBub2Rlcy5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkucmF3cyA9PT0gJ3VuZGVmaW5lZCcpIGkgPSBfdGhpczYucmVidWlsZChpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpLnBhcmVudCkgaSA9IGkuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzYW1wbGUgJiYgdHlwZW9mIHNhbXBsZS5yYXdzLmJlZm9yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucmF3cy5iZWZvcmUgPSBzYW1wbGUucmF3cy5iZWZvcmUucmVwbGFjZSgvW15cXHNdL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpLnBhcmVudCA9IF90aGlzNjtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWJ1aWxkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlYnVpbGQobm9kZSwgcGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGZpeCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdyb290Jykge1xuICAgICAgICAgICAgICAgIGZpeCA9IG5ldyBfcm9vdDIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdhdHJ1bGUnKSB7XG4gICAgICAgICAgICAgICAgZml4ID0gbmV3IF9hdFJ1bGUyLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAncnVsZScpIHtcbiAgICAgICAgICAgICAgICBmaXggPSBuZXcgX3J1bGUyLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnZGVjbCcpIHtcbiAgICAgICAgICAgICAgICBmaXggPSBuZXcgX2RlY2xhcmF0aW9uMi5kZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgZml4ID0gbmV3IF9jb21tZW50Mi5kZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAnbm9kZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpeC5ub2RlcyA9IG5vZGUubm9kZXMubWFwKGZ1bmN0aW9uIChqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM3LnJlYnVpbGQoaiwgZml4KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAncGFyZW50JyAmJiBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZml4LnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZml4W2ldID0gbm9kZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaXg7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VhY2hJbnNpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaEluc2lkZShjYWxsYmFjaykge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbnRhaW5lciNlYWNoSW5zaWRlIGlzIGRlcHJlY2F0ZWQuICcgKyAnVXNlIENvbnRhaW5lciN3YWxrIGluc3RlYWQuJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWxrKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZWFjaERlY2wnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaERlY2wocHJvcCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdDb250YWluZXIjZWFjaERlY2wgaXMgZGVwcmVjYXRlZC4gJyArICdVc2UgQ29udGFpbmVyI3dhbGtEZWNscyBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2Fsa0RlY2xzKHByb3AsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZWFjaFJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaFJ1bGUoc2VsZWN0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQ29udGFpbmVyI2VhY2hSdWxlIGlzIGRlcHJlY2F0ZWQuICcgKyAnVXNlIENvbnRhaW5lciN3YWxrUnVsZXMgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGtSdWxlcyhzZWxlY3RvciwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlYWNoQXRSdWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2hBdFJ1bGUobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdDb250YWluZXIjZWFjaEF0UnVsZSBpcyBkZXByZWNhdGVkLiAnICsgJ1VzZSBDb250YWluZXIjd2Fsa0F0UnVsZXMgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGtBdFJ1bGVzKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZWFjaENvbW1lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaENvbW1lbnQoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdDb250YWluZXIjZWFjaENvbW1lbnQgaXMgZGVwcmVjYXRlZC4gJyArICdVc2UgQ29udGFpbmVyI3dhbGtDb21tZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2Fsa0NvbW1lbnRzKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlcykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb250YWluZXLigJlzIGxhc3QgY2hpbGQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtOb2RlfVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBydWxlLmxhc3QgPT0gcnVsZS5ub2Rlc1tydWxlLm5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGFzdCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGVzKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2VtaWNvbG9uJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNzZW1pY29sb24gaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3cy5zZW1pY29sb24nKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3Muc2VtaWNvbG9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI3NlbWljb2xvbiBpcyBkZXByZWNhdGVkLiBVc2UgTm9kZSNyYXdzLnNlbWljb2xvbicpO1xuICAgICAgICAgICAgdGhpcy5yYXdzLnNlbWljb2xvbiA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWZ0ZXInLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI2FmdGVyIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MuYWZ0ZXInKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3MuYWZ0ZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ05vZGUjYWZ0ZXIgaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3cy5hZnRlcicpO1xuICAgICAgICAgICAgdGhpcy5yYXdzLmFmdGVyID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb250YWluZXIjXG4gICAgICAgICAqIEBtZW1iZXIge05vZGVbXX0gbm9kZXMgLSBhbiBhcnJheSBjb250YWluaW5nIHRoZSBjb250YWluZXLigJlzIGNoaWxkcmVuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhIHsgY29sb3I6IGJsYWNrIH0nKTtcbiAgICAgICAgICogcm9vdC5ub2Rlcy5sZW5ndGggICAgICAgICAgIC8vPT4gMVxuICAgICAgICAgKiByb290Lm5vZGVzWzBdLnNlbGVjdG9yICAgICAgLy89PiAnYSdcbiAgICAgICAgICogcm9vdC5ub2Rlc1swXS5ub2Rlc1swXS5wcm9wIC8vPT4gJ2NvbG9yJ1xuICAgICAgICAgKi9cblxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb250YWluZXI7XG59KF9ub2RlMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29udGFpbmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9jb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS5qb2luKCcsJyk7XG5cbiAgcmV0dXJuIHZhbHVlLm1hdGNoKC8td2Via2l0LXwtbW96LXwtbXMtLykgIT09IG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9pc1ByZWZpeGVkVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9ialRvQ3NzID0gdW5kZWZpbmVkO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgb2JqVG9Dc3MgPSBleHBvcnRzLm9ialRvQ3NzID0gZnVuY3Rpb24gb2JqVG9Dc3Mob2JqLCBwcmV2S2V5KSB7XG4gIHZhciBjc3MgPSBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkob2JqW2tleV0pKSByZXR1cm4gb2JqVG9Dc3Mob2JqW2tleV0sIGtleSk7XG4gICAgcmV0dXJuICgwLCBfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KShrZXkpICsgJzogJyArIG9ialtrZXldICsgJzsnO1xuICB9KS5qb2luKCcgJyk7XG4gIHJldHVybiBwcmV2S2V5ID8gcHJldktleSArICcge1xcbiAgJyArIGNzcyArICdcXG59JyA6IGNzcztcbn07XG5cbnZhciBmbGF0dGVuID0gZnVuY3Rpb24gZmxhdHRlbihjaHVua3MsIGV4ZWN1dGlvbkNvbnRleHQpIHtcbiAgcmV0dXJuIGNodW5rcy5yZWR1Y2UoZnVuY3Rpb24gKHJ1bGVTZXQsIGNodW5rKSB7XG4gICAgLyogUmVtb3ZlIGZhbHNleSB2YWx1ZXMgKi9cbiAgICBpZiAoY2h1bmsgPT09IHVuZGVmaW5lZCB8fCBjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gZmFsc2UgfHwgY2h1bmsgPT09ICcnKSByZXR1cm4gcnVsZVNldDtcbiAgICAvKiBGbGF0dGVuIHJ1bGVTZXQgKi9cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaHVuaykpIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHJ1bGVTZXQpLCBfdG9Db25zdW1hYmxlQXJyYXkoZmxhdHRlbihjaHVuaywgZXhlY3V0aW9uQ29udGV4dCkpKTtcbiAgICAvKiBFaXRoZXIgZXhlY3V0ZSBvciBkZWZlciB0aGUgZnVuY3Rpb24gKi9cbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZXhlY3V0aW9uQ29udGV4dCA/IHJ1bGVTZXQuY29uY2F0LmFwcGx5KHJ1bGVTZXQsIF90b0NvbnN1bWFibGVBcnJheShmbGF0dGVuKFtjaHVuayhleGVjdXRpb25Db250ZXh0KV0sIGV4ZWN1dGlvbkNvbnRleHQpKSkgOiBydWxlU2V0LmNvbmNhdChjaHVuayk7XG4gICAgfVxuXG4gICAgLyogSGFuZGxlIG9iamVjdHMgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIGhhdmUgdG8gYWRkICVjaGVja3Mgc29tZWhvdyB0byBpc1BsYWluT2JqZWN0XG4gICAgcmV0dXJuIHJ1bGVTZXQuY29uY2F0KCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoY2h1bmspID8gb2JqVG9Dc3MoY2h1bmspIDogY2h1bmsudG9TdHJpbmcoKSk7XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZsYXR0ZW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9mbGF0dGVuLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKTtcblxudmFyIF93YXJuT25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuT25jZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGF0LXJ1bGUuXG4gKlxuICogSWYgaXTigJlzIGZvbGxvd2VkIGluIHRoZSBDU1MgYnkgYSB7fSBibG9jaywgdGhpcyBub2RlIHdpbGwgaGF2ZVxuICogYSBub2RlcyBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBleHRlbmRzIENvbnRhaW5lclxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnQGNoYXJzZXQgXCJVVEYtOFwiOyBAbWVkaWEgcHJpbnQge30nKTtcbiAqXG4gKiBjb25zdCBjaGFyc2V0ID0gcm9vdC5maXJzdDtcbiAqIGNoYXJzZXQudHlwZSAgLy89PiAnYXRydWxlJ1xuICogY2hhcnNldC5ub2RlcyAvLz0+IHVuZGVmaW5lZFxuICpcbiAqIGNvbnN0IG1lZGlhID0gcm9vdC5sYXN0O1xuICogbWVkaWEubm9kZXMgICAvLz0+IFtdXG4gKi9cbnZhciBBdFJ1bGUgPSBmdW5jdGlvbiAoX0NvbnRhaW5lcikge1xuICAgIF9pbmhlcml0cyhBdFJ1bGUsIF9Db250YWluZXIpO1xuXG4gICAgZnVuY3Rpb24gQXRSdWxlKGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdFJ1bGUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBdFJ1bGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBdFJ1bGUpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdhdHJ1bGUnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEF0UnVsZSwgW3tcbiAgICAgICAga2V5OiAnYXBwZW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgICAgICAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjaGlsZHJlbiA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKF9nZXQyID0gX2dldChBdFJ1bGUucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXRSdWxlLnByb3RvdHlwZSksICdhcHBlbmQnLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChjaGlsZHJlbikpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVwZW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBlbmQoKSB7XG4gICAgICAgICAgICB2YXIgX2dldDM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNoaWxkcmVuID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKF9nZXQzID0gX2dldChBdFJ1bGUucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXRSdWxlLnByb3RvdHlwZSksICdwcmVwZW5kJywgdGhpcykpLmNhbGwuYXBwbHkoX2dldDMsIFt0aGlzXS5jb25jYXQoY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWZ0ZXJOYW1lJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQXRSdWxlI2FmdGVyTmFtZSB3YXMgZGVwcmVjYXRlZC4gVXNlIEF0UnVsZSNyYXdzLmFmdGVyTmFtZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5hZnRlck5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0F0UnVsZSNhZnRlck5hbWUgd2FzIGRlcHJlY2F0ZWQuIFVzZSBBdFJ1bGUjcmF3cy5hZnRlck5hbWUnKTtcbiAgICAgICAgICAgIHRoaXMucmF3cy5hZnRlck5hbWUgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19wYXJhbXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdBdFJ1bGUjX3BhcmFtcyB3YXMgZGVwcmVjYXRlZC4gVXNlIEF0UnVsZSNyYXdzLnBhcmFtcycpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5wYXJhbXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0F0UnVsZSNfcGFyYW1zIHdhcyBkZXByZWNhdGVkLiBVc2UgQXRSdWxlI3Jhd3MucGFyYW1zJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MucGFyYW1zID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBBdFJ1bGUjXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZSAtIHRoZSBhdC1ydWxl4oCZcyBuYW1lIGltbWVkaWF0ZWx5IGZvbGxvd3MgdGhlIGBAYFxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ICA9IHBvc3Rjc3MucGFyc2UoJ0BtZWRpYSBwcmludCB7fScpO1xuICAgICAgICAgKiBtZWRpYS5uYW1lIC8vPT4gJ21lZGlhJ1xuICAgICAgICAgKiBjb25zdCBtZWRpYSA9IHJvb3QuZmlyc3Q7XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgQXRSdWxlI1xuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHBhcmFtcyAtIHRoZSBhdC1ydWxl4oCZcyBwYXJhbWV0ZXJzLCB0aGUgdmFsdWVzXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBmb2xsb3cgdGhlIGF0LXJ1bGXigJlzIG5hbWUgYnV0IHByZWNlZGVcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkge30gYmxvY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCAgPSBwb3N0Y3NzLnBhcnNlKCdAbWVkaWEgcHJpbnQsIHNjcmVlbiB7fScpO1xuICAgICAgICAgKiBjb25zdCBtZWRpYSA9IHJvb3QuZmlyc3Q7XG4gICAgICAgICAqIG1lZGlhLnBhcmFtcyAvLz0+ICdwcmludCwgc2NyZWVuJ1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIEF0UnVsZSNcbiAgICAgICAgICogQG1lbWJlciB7b2JqZWN0fSByYXdzIC0gSW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgYnl0ZS10by1ieXRlIGVxdWFsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgc3RyaW5nIGFzIGl0IHdhcyBpbiB0aGUgb3JpZ2luIGlucHV0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBFdmVyeSBwYXJzZXIgc2F2ZXMgaXRzIG93biBwcm9wZXJ0aWVzLFxuICAgICAgICAgKiBidXQgdGhlIGRlZmF1bHQgQ1NTIHBhcnNlciB1c2VzOlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIGBiZWZvcmVgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZWZvcmUgdGhlIG5vZGUuIEl0IGFsc28gc3RvcmVzIGAqYFxuICAgICAgICAgKiAgIGFuZCBgX2Agc3ltYm9scyBiZWZvcmUgdGhlIGRlY2xhcmF0aW9uIChJRSBoYWNrKS5cbiAgICAgICAgICogKiBgYWZ0ZXJgOiB0aGUgc3BhY2Ugc3ltYm9scyBhZnRlciB0aGUgbGFzdCBjaGlsZCBvZiB0aGUgbm9kZVxuICAgICAgICAgKiAgIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGUuXG4gICAgICAgICAqICogYGJldHdlZW5gOiB0aGUgc3ltYm9scyBiZXR3ZWVuIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICAgICAgICogICBmb3IgZGVjbGFyYXRpb25zLCBzZWxlY3RvciBhbmQgYHtgIGZvciBydWxlcywgb3IgbGFzdCBwYXJhbWV0ZXJcbiAgICAgICAgICogICBhbmQgYHtgIGZvciBhdC1ydWxlcy5cbiAgICAgICAgICogKiBgc2VtaWNvbG9uYDogY29udGFpbnMgdHJ1ZSBpZiB0aGUgbGFzdCBjaGlsZCBoYXNcbiAgICAgICAgICogICBhbiAob3B0aW9uYWwpIHNlbWljb2xvbi5cbiAgICAgICAgICogKiBgYWZ0ZXJOYW1lYDogdGhlIHNwYWNlIGJldHdlZW4gdGhlIGF0LXJ1bGUgbmFtZSBhbmQgaXRzIHBhcmFtZXRlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFBvc3RDU1MgY2xlYW5zIGF0LXJ1bGUgcGFyYW1ldGVycyBmcm9tIGNvbW1lbnRzIGFuZCBleHRyYSBzcGFjZXMsXG4gICAgICAgICAqIGJ1dCBpdCBzdG9yZXMgb3JpZ2luIGNvbnRlbnQgaW4gcmF3cyBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBBcyBzdWNoLCBpZiB5b3UgZG9u4oCZdCBjaGFuZ2UgYSBkZWNsYXJhdGlvbuKAmXMgdmFsdWUsXG4gICAgICAgICAqIFBvc3RDU1Mgd2lsbCB1c2UgdGhlIHJhdyB2YWx1ZSB3aXRoIGNvbW1lbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnICBAbWVkaWFcXG5wcmludCB7XFxufScpXG4gICAgICAgICAqIHJvb3QuZmlyc3QuZmlyc3QucmF3cyAvLz0+IHsgYmVmb3JlOiAnICAnLFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJldHdlZW46ICcgJyxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhZnRlck5hbWU6ICdcXG4nLFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFmdGVyOiAnXFxuJyB9XG4gICAgICAgICAqL1xuXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEF0UnVsZTtcbn0oX2NvbnRhaW5lcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF0UnVsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvYXQtcnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKTtcblxudmFyIF93YXJuT25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuT25jZSk7XG5cbnZhciBfbm9kZSA9IHJlcXVpcmUoJy4vbm9kZScpO1xuXG52YXIgX25vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29tbWVudCBiZXR3ZWVuIGRlY2xhcmF0aW9ucyBvciBzdGF0ZW1lbnRzIChydWxlIGFuZCBhdC1ydWxlcykuXG4gKlxuICogQ29tbWVudHMgaW5zaWRlIHNlbGVjdG9ycywgYXQtcnVsZSBwYXJhbWV0ZXJzLCBvciBkZWNsYXJhdGlvbiB2YWx1ZXNcbiAqIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBgcmF3c2AgcHJvcGVydGllcyBleHBsYWluZWQgYWJvdmUuXG4gKlxuICogQGV4dGVuZHMgTm9kZVxuICovXG52YXIgQ29tbWVudCA9IGZ1bmN0aW9uIChfTm9kZSkge1xuICAgIF9pbmhlcml0cyhDb21tZW50LCBfTm9kZSk7XG5cbiAgICBmdW5jdGlvbiBDb21tZW50KGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21tZW50KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29tbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbW1lbnQpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdjb21tZW50JztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb21tZW50LCBbe1xuICAgICAgICBrZXk6ICdsZWZ0JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQ29tbWVudCNsZWZ0IHdhcyBkZXByZWNhdGVkLiBVc2UgQ29tbWVudCNyYXdzLmxlZnQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3MubGVmdDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQ29tbWVudCNsZWZ0IHdhcyBkZXByZWNhdGVkLiBVc2UgQ29tbWVudCNyYXdzLmxlZnQnKTtcbiAgICAgICAgICAgIHRoaXMucmF3cy5sZWZ0ID0gdmFsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyaWdodCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbW1lbnQjcmlnaHQgd2FzIGRlcHJlY2F0ZWQuIFVzZSBDb21tZW50I3Jhd3MucmlnaHQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3MucmlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ0NvbW1lbnQjcmlnaHQgd2FzIGRlcHJlY2F0ZWQuIFVzZSBDb21tZW50I3Jhd3MucmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMucmF3cy5yaWdodCA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tbWVudCNcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB0ZXh0IC0gdGhlIGNvbW1lbnTigJlzIHRleHRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21tZW50I1xuICAgICAgICAgKiBAbWVtYmVyIHtvYmplY3R9IHJhd3MgLSBJbmZvcm1hdGlvbiB0byBnZW5lcmF0ZSBieXRlLXRvLWJ5dGUgZXF1YWxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBzdHJpbmcgYXMgaXQgd2FzIGluIHRoZSBvcmlnaW4gaW5wdXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEV2ZXJ5IHBhcnNlciBzYXZlcyBpdHMgb3duIHByb3BlcnRpZXMsXG4gICAgICAgICAqIGJ1dCB0aGUgZGVmYXVsdCBDU1MgcGFyc2VyIHVzZXM6XG4gICAgICAgICAqXG4gICAgICAgICAqICogYGJlZm9yZWA6IHRoZSBzcGFjZSBzeW1ib2xzIGJlZm9yZSB0aGUgbm9kZS5cbiAgICAgICAgICogKiBgbGVmdGA6IHRoZSBzcGFjZSBzeW1ib2xzIGJldHdlZW4gYC8qYCBhbmQgdGhlIGNvbW1lbnTigJlzIHRleHQuXG4gICAgICAgICAqICogYHJpZ2h0YDogdGhlIHNwYWNlIHN5bWJvbHMgYmV0d2VlbiB0aGUgY29tbWVudOKAmXMgdGV4dC5cbiAgICAgICAgICovXG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29tbWVudDtcbn0oX25vZGUyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb21tZW50O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9jb21tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8vIGJyZWFrIGN5Y2xpY2FsIGRlcGVuZGVuY3kgZGVhZGxvY2sg4oCTICM4N1xuXG5yZXF1aXJlKCcuL3Jvb3QnKTtcblxudmFyIF9jc3NTeW50YXhFcnJvciA9IHJlcXVpcmUoJy4vY3NzLXN5bnRheC1lcnJvcicpO1xuXG52YXIgX2Nzc1N5bnRheEVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1N5bnRheEVycm9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gaW1wb3J0IFByZXZpb3VzTWFwICAgIGZyb20gJy4vcHJldmlvdXMtbWFwJztcblxudmFyIHNlcXVlbmNlID0gMDtcblxuLyoqXG4gKiBAdHlwZWRlZiAge29iamVjdH0gZmlsZVBvc2l0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZmlsZSAgIC0gcGF0aCB0byBmaWxlXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZSAgIC0gc291cmNlIGxpbmUgaW4gZmlsZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiAtIHNvdXJjZSBjb2x1bW4gaW4gZmlsZVxuICovXG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgc291cmNlIENTUy5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgcm9vdCAgPSBwb3N0Y3NzLnBhcnNlKGNzcywgeyBmcm9tOiBmaWxlIH0pO1xuICogY29uc3QgaW5wdXQgPSByb290LnNvdXJjZS5pbnB1dDtcbiAqL1xuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3NzICAgIC0gaW5wdXQgQ1NTIHNvdXJjZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0c10gLSB7QGxpbmsgUHJvY2Vzc29yI3Byb2Nlc3N9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBJbnB1dChjc3MpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBpbnB1dCBDU1Mgc291cmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IGlucHV0ID0gcG9zdGNzcy5wYXJzZSgnYXt9JywgeyBmcm9tOiBmaWxlIH0pLmlucHV0O1xuICAgICAgICAgKiBpbnB1dC5jc3MgLy89PiBcImF7fVwiO1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jc3MgPSBjc3MudG9TdHJpbmcoKTtcblxuICAgICAgICBpZiAodGhpcy5jc3NbMF0gPT09ICdcXHVGRUZGJyB8fCB0aGlzLmNzc1swXSA9PT0gJ1xcdUZGRkUnKSB7XG4gICAgICAgICAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdHMuZnJvbSkge1xuICAgICAgICAgICAgaWYgKC9eXFx3KzpcXC9cXC8vLnRlc3Qob3B0cy5mcm9tKSkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgQ1NTIHNvdXJjZSBmaWxlXG4gICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgIGRlZmluZWQgd2l0aCB0aGUgYGZyb21gIG9wdGlvbi5cbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoY3NzLCB7IGZyb206ICdhLmNzcycgfSk7XG4gICAgICAgICAgICAgICAgICogcm9vdC5zb3VyY2UuaW5wdXQuZmlsZSAvLz0+ICcvaG9tZS9haS9hLmNzcydcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBvcHRzLmZyb207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IHBhdGgucmVzb2x2ZShvcHRzLmZyb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gbmV3IFByZXZpb3VzTWFwKHRoaXMuY3NzLCBvcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAoIG1hcC50ZXh0ICkge1xuICAgICAgICAgICAgICAgICAgICAvISoqXG4gICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge1ByZXZpb3VzTWFwfSAtIFRoZSBpbnB1dCBzb3VyY2UgbWFwIHBhc3NlZCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIGEgY29tcGlsYXRpb24gc3RlcCBiZWZvcmUgUG9zdENTU1xuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAoZm9yIGV4YW1wbGUsIGZyb20gU2FzcyBjb21waWxlcikuXG4gICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgICAgICAgICAqIHJvb3Quc291cmNlLmlucHV0Lm1hcC5jb25zdW1lcigpLnNvdXJjZXMgLy89PiBbJ2Euc2FzcyddXG4gICAgICAgICAgICAgICAgICAgICAqIS9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gbWFwLmNvbnN1bWVyKCkuZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5maWxlICYmIGZpbGUgKSB0aGlzLmZpbGUgPSB0aGlzLm1hcFJlc29sdmUoZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICAgICAgICBzZXF1ZW5jZSArPSAxO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgQ1NTIHNvdXJjZS4gSXQgd2lsbCBiZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQgaWYgYGZyb21gIG9wdGlvbiBpcyBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAoYmVjYXVzZSBQb3N0Q1NTIGRvZXMgbm90IGtub3cgdGhlIGZpbGUgcGF0aCkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKGNzcyk7XG4gICAgICAgICAgICAgKiByb290LnNvdXJjZS5pbnB1dC5maWxlIC8vPT4gdW5kZWZpbmVkXG4gICAgICAgICAgICAgKiByb290LnNvdXJjZS5pbnB1dC5pZCAgIC8vPT4gXCI8aW5wdXQgY3NzIDE+XCJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pZCA9ICc8aW5wdXQgY3NzICcgKyBzZXF1ZW5jZSArICc+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLmZpbGUgPSB0aGlzLmZyb207XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlLCBsaW5lLCBjb2x1bW4pIHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLm9yaWdpbihsaW5lLCBjb2x1bW4pO1xuICAgICAgICAgICAgaWYgKG9yaWdpbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBfY3NzU3ludGF4RXJyb3IyLmRlZmF1bHQobWVzc2FnZSwgb3JpZ2luLmxpbmUsIG9yaWdpbi5jb2x1bW4sIG9yaWdpbi5zb3VyY2UsIG9yaWdpbi5maWxlLCBvcHRzLnBsdWdpbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBfY3NzU3ludGF4RXJyb3IyLmRlZmF1bHQobWVzc2FnZSwgbGluZSwgY29sdW1uLCB0aGlzLmNzcywgdGhpcy5maWxlLCBvcHRzLnBsdWdpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5pbnB1dCA9IHsgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIHNvdXJjZTogdGhpcy5jc3MgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUpIHJlc3VsdC5pbnB1dC5maWxlID0gdGhpcy5maWxlO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWRzIHRoZSBpbnB1dCBzb3VyY2UgbWFwIGFuZCByZXR1cm5zIGEgc3ltYm9sIHBvc2l0aW9uXG4gICAgICAgICAqIGluIHRoZSBpbnB1dCBzb3VyY2UgKGUuZy4sIGluIGEgU2FzcyBmaWxlIHRoYXQgd2FzIGNvbXBpbGVkXG4gICAgICAgICAqIHRvIENTUyBiZWZvcmUgYmVpbmcgcGFzc2VkIHRvIFBvc3RDU1MpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbGluZSAgIC0gbGluZSBpbiBpbnB1dCBDU1NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIGNvbHVtbiBpbiBpbnB1dCBDU1NcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7ZmlsZVBvc2l0aW9ufSBwb3NpdGlvbiBpbiBpbnB1dCBzb3VyY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcm9vdC5zb3VyY2UuaW5wdXQub3JpZ2luKDEsIDEpIC8vPT4geyBmaWxlOiAnYS5jc3MnLCBsaW5lOiAzLCBjb2x1bW46IDEgfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9yaWdpbihsaW5lLCBjb2x1bW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBjb25zdW1lciA9IHRoaXMubWFwLmNvbnN1bWVyKCk7XG5cbiAgICAgICAgICAgIHZhciBmcm9tID0gY29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7IGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uIH0pO1xuICAgICAgICAgICAgaWYgKCFmcm9tLnNvdXJjZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGZpbGU6IHRoaXMubWFwUmVzb2x2ZShmcm9tLnNvdXJjZSksXG4gICAgICAgICAgICAgICAgbGluZTogZnJvbS5saW5lLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogZnJvbS5jb2x1bW5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBjb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKGZyb20uc291cmNlKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2UpIHJlc3VsdC5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21hcFJlc29sdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbWFwUmVzb2x2ZShmaWxlKSB7XG4gICAgICAgICAgICBpZiAoL15cXHcrOlxcL1xcLy8udGVzdChmaWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdCB8fCAnLicsIGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBDU1Mgc291cmNlIGlkZW50aWZpZXIuIENvbnRhaW5zIHtAbGluayBJbnB1dCNmaWxlfSBpZiB0aGUgdXNlclxuICAgICAgICAgKiBzZXQgdGhlIGBmcm9tYCBvcHRpb24sIG9yIHtAbGluayBJbnB1dCNpZH0gaWYgdGhleSBkaWQgbm90LlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZShjc3MsIHsgZnJvbTogJ2EuY3NzJyB9KTtcbiAgICAgICAgICogcm9vdC5zb3VyY2UuaW5wdXQuZnJvbSAvLz0+IFwiL2hvbWUvYWkvYS5jc3NcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZShjc3MpO1xuICAgICAgICAgKiByb290LnNvdXJjZS5pbnB1dC5mcm9tIC8vPT4gXCI8aW5wdXQgY3NzIDE+XCJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Zyb20nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUgfHwgdGhpcy5pZDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jc3NTeW50YXhFcnJvciA9IHJlcXVpcmUoJy4vY3NzLXN5bnRheC1lcnJvcicpO1xuXG52YXIgX2Nzc1N5bnRheEVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1N5bnRheEVycm9yKTtcblxudmFyIF9zdHJpbmdpZmllciA9IHJlcXVpcmUoJy4vc3RyaW5naWZpZXInKTtcblxudmFyIF9zdHJpbmdpZmllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZmllcik7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcblxudmFyIF9zdHJpbmdpZnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTtcblxudmFyIF93YXJuT25jZSA9IHJlcXVpcmUoJy4vd2Fybi1vbmNlJyk7XG5cbnZhciBfd2Fybk9uY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Fybk9uY2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IHBvc2l0aW9uXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZSAgIC0gc291cmNlIGxpbmUgaW4gZmlsZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiAtIHNvdXJjZSBjb2x1bW4gaW4gZmlsZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gc291cmNlXG4gKiBAcHJvcGVydHkge0lucHV0fSBpbnB1dCAgICAtIHtAbGluayBJbnB1dH0gd2l0aCBpbnB1dCBmaWxlXG4gKiBAcHJvcGVydHkge3Bvc2l0aW9ufSBzdGFydCAtIFRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgbm9kZeKAmXMgc291cmNlXG4gKiBAcHJvcGVydHkge3Bvc2l0aW9ufSBlbmQgICAtIFRoZSBlbmRpbmcgcG9zaXRpb24gb2YgdGhlIG5vZGXigJlzIHNvdXJjZVxuICovXG5cbnZhciBjbG9uZU5vZGUgPSBmdW5jdGlvbiBjbG9uZU5vZGUob2JqLCBwYXJlbnQpIHtcbiAgICB2YXIgY2xvbmVkID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgPT09ICdwYXJlbnQnICYmIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50KSBjbG9uZWRbaV0gPSBwYXJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gJ3NvdXJjZScpIHtcbiAgICAgICAgICAgIGNsb25lZFtpXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNsb25lZFtpXSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZU5vZGUoaiwgY2xvbmVkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGkgIT09ICdiZWZvcmUnICYmIGkgIT09ICdhZnRlcicgJiYgaSAhPT0gJ2JldHdlZW4nICYmIGkgIT09ICdzZW1pY29sb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHZhbHVlID0gY2xvbmVOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIGNsb25lZFtpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZDtcbn07XG5cbi8qKlxuICogQWxsIG5vZGUgY2xhc3NlcyBpbmhlcml0IHRoZSBmb2xsb3dpbmcgY29tbW9uIG1ldGhvZHMuXG4gKlxuICogQGFic3RyYWN0XG4gKi9cblxudmFyIE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSAtIHZhbHVlIGZvciBub2RlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOb2RlKCkge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuICAgICAgICB0aGlzLnJhd3MgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IGRlZmF1bHRzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIENzc1N5bnRheEVycm9yIGluc3RhbmNlIGNvbnRhaW5pbmcgdGhlIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICogb2YgdGhlIG5vZGUgaW4gdGhlIHNvdXJjZSwgc2hvd2luZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBhbmQgYWxzb1xuICAgICAqIGEgc21hbGwgZXhjZXJwdCB0byBmYWNpbGl0YXRlIGRlYnVnZ2luZy5cbiAgICAgKlxuICAgICAqIElmIHByZXNlbnQsIGFuIGlucHV0IHNvdXJjZSBtYXAgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgKiBvZiB0aGUgc291cmNlLCBldmVuIGZyb20gYSBwcmV2aW91cyBjb21waWxhdGlvbiBzdGVwXG4gICAgICogKGUuZy4sIGZyb20gU2FzcyBjb21waWxhdGlvbikuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBwcm9kdWNlcyB2ZXJ5IHVzZWZ1bCBlcnJvciBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICAgICAtIGVycm9yIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRzXSAgICAgIC0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnBsdWdpbiAtIHBsdWdpbiBuYW1lIHRoYXQgY3JlYXRlZCB0aGlzIGVycm9yLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RDU1Mgd2lsbCBzZXQgaXQgYXV0b21hdGljYWxseS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy53b3JkICAgLSBhIHdvcmQgaW5zaWRlIGEgbm9kZeKAmXMgc3RyaW5nIHRoYXQgc2hvdWxkXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgaGlnaGxpZ2h0ZWQgYXMgdGhlIHNvdXJjZSBvZiB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb3B0cy5pbmRleCAgLSBhbiBpbmRleCBpbnNpZGUgYSBub2Rl4oCZcyBzdHJpbmcgdGhhdCBzaG91bGRcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSBoaWdobGlnaHRlZCBhcyB0aGUgc291cmNlIG9mIHRoZSBlcnJvclxuICAgICAqXG4gICAgICogQHJldHVybiB7Q3NzU3ludGF4RXJyb3J9IGVycm9yIG9iamVjdCB0byB0aHJvdyBpdFxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpZiAoICF2YXJpYWJsZXNbbmFtZV0gKSB7XG4gICAgICogICB0aHJvdyBkZWNsLmVycm9yKCdVbmtub3duIHZhcmlhYmxlICcgKyBuYW1lLCB7IHdvcmQ6IG5hbWUgfSk7XG4gICAgICogICAvLyBDc3NTeW50YXhFcnJvcjogcG9zdGNzcy12YXJzOmEuc2Fzczo0OjM6IFVua25vd24gdmFyaWFibGUgJGJsYWNrXG4gICAgICogICAvLyAgIGNvbG9yOiAkYmxhY2tcbiAgICAgKiAgIC8vIGFcbiAgICAgKiAgIC8vICAgICAgICAgIF5cbiAgICAgKiAgIC8vICAgYmFja2dyb3VuZDogd2hpdGVcbiAgICAgKiB9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhOb2RlLCBbe1xuICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnBvc2l0aW9uQnkob3B0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmlucHV0LmVycm9yKG1lc3NhZ2UsIHBvcy5saW5lLCBwb3MuY29sdW1uLCBvcHRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfY3NzU3ludGF4RXJyb3IyLmRlZmF1bHQobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgYXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGZvciB7QGxpbmsgUmVzdWx0I3dhcm59LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1Jlc3VsdH0gcmVzdWx0ICAgICAgLSB0aGUge0BsaW5rIFJlc3VsdH0gaW5zdGFuY2VcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIHdhcm5pbmdcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgICAgICAgIC0gd2FybmluZyBtZXNzYWdlXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0c10gICAgICAtIG9wdGlvbnNcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMucGx1Z2luIC0gcGx1Z2luIG5hbWUgdGhhdCBjcmVhdGVkIHRoaXMgd2FybmluZy5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zdENTUyB3aWxsIHNldCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy53b3JkICAgLSBhIHdvcmQgaW5zaWRlIGEgbm9kZeKAmXMgc3RyaW5nIHRoYXQgc2hvdWxkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGhpZ2hsaWdodGVkIGFzIHRoZSBzb3VyY2Ugb2YgdGhlIHdhcm5pbmdcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9wdHMuaW5kZXggIC0gYW4gaW5kZXggaW5zaWRlIGEgbm9kZeKAmXMgc3RyaW5nIHRoYXQgc2hvdWxkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGhpZ2hsaWdodGVkIGFzIHRoZSBzb3VyY2Ugb2YgdGhlIHdhcm5pbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7V2FybmluZ30gY3JlYXRlZCB3YXJuaW5nIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBwbHVnaW4gPSBwb3N0Y3NzLnBsdWdpbigncG9zdGNzcy1kZXByZWNhdGVkJywgKCkgPT4ge1xuICAgICAgICAgKiAgIHJldHVybiAocm9vdCwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAqICAgICByb290LndhbGtEZWNscygnYmFkJywgZGVjbCA9PiB7XG4gICAgICAgICAqICAgICAgIGRlY2wud2FybihyZXN1bHQsICdEZXByZWNhdGVkIHByb3BlcnR5IGJhZCcpO1xuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqICAgfTtcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd3YXJuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm4ocmVzdWx0LCB0ZXh0LCBvcHRzKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHsgbm9kZTogdGhpcyB9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IG9wdHNbaV07XG4gICAgICAgICAgICB9cmV0dXJuIHJlc3VsdC53YXJuKHRleHQsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIG5vZGUgZnJvbSBpdHMgcGFyZW50IGFuZCBjbGVhbnMgdGhlIHBhcmVudCBwcm9wZXJ0aWVzXG4gICAgICAgICAqIGZyb20gdGhlIG5vZGUgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogaWYgKCBkZWNsLnByb3AubWF0Y2goL14td2Via2l0LS8pICkge1xuICAgICAgICAgKiAgIGRlY2wucmVtb3ZlKCk7XG4gICAgICAgICAqIH1cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gbm9kZSB0byBtYWtlIGNhbGxzIGNoYWluXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBDU1Mgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbm9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmdpZmllcnxzeW50YXh9IFtzdHJpbmdpZmllcl0gLSBhIHN5bnRheCB0byB1c2VcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiBzdHJpbmcgZ2VuZXJhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IENTUyBzdHJpbmcgb2YgdGhpcyBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHBvc3Rjc3MucnVsZSh7IHNlbGVjdG9yOiAnYScgfSkudG9TdHJpbmcoKSAvLz0+IFwiYSB7fVwiXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmdpZmllciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX3N0cmluZ2lmeTIuZGVmYXVsdDtcblxuICAgICAgICAgICAgaWYgKHN0cmluZ2lmaWVyLnN0cmluZ2lmeSkgc3RyaW5naWZpZXIgPSBzdHJpbmdpZmllci5zdHJpbmdpZnk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBzdHJpbmdpZmllcih0aGlzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbm9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHJlc3VsdGluZyBjbG9uZWQgbm9kZSBhbmQgaXRzIChjbG9uZWQpIGNoaWxkcmVuIHdpbGwgaGF2ZVxuICAgICAgICAgKiBhIGNsZWFuIHBhcmVudCBhbmQgY29kZSBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gW292ZXJyaWRlc10gLSBuZXcgcHJvcGVydGllcyB0byBvdmVycmlkZSBpbiB0aGUgY2xvbmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IGNsb25lZCA9IGRlY2wuY2xvbmUoeyBwcm9wOiAnLW1vei0nICsgZGVjbC5wcm9wIH0pO1xuICAgICAgICAgKiBjbG9uZWQucmF3cy5iZWZvcmUgIC8vPT4gdW5kZWZpbmVkXG4gICAgICAgICAqIGNsb25lZC5wYXJlbnQgICAgICAgLy89PiB1bmRlZmluZWRcbiAgICAgICAgICogY2xvbmVkLnRvU3RyaW5nKCkgICAvLz0+IC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSBjbG9uZSBvZiB0aGUgbm9kZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xvbmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgICAgICB2YXIgb3ZlcnJpZGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgdmFyIGNsb25lZCA9IGNsb25lTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gb3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkW25hbWVdID0gb3ZlcnJpZGVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCB0byBjbG9uZSB0aGUgbm9kZSBhbmQgaW5zZXJ0IHRoZSByZXN1bHRpbmcgY2xvbmVkIG5vZGVcbiAgICAgICAgICogYmVmb3JlIHRoZSBjdXJyZW50IG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3ZlcnJpZGVzXSAtIG5ldyBwcm9wZXJ0aWVzIHRvIG92ZXJyaWRlIGluIHRoZSBjbG9uZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZGVjbC5jbG9uZUJlZm9yZSh7IHByb3A6ICctbW96LScgKyBkZWNsLnByb3AgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IC0gbmV3IG5vZGVcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nsb25lQmVmb3JlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lQmVmb3JlKCkge1xuICAgICAgICAgICAgdmFyIG92ZXJyaWRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIHZhciBjbG9uZWQgPSB0aGlzLmNsb25lKG92ZXJyaWRlcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgY2xvbmVkKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgdG8gY2xvbmUgdGhlIG5vZGUgYW5kIGluc2VydCB0aGUgcmVzdWx0aW5nIGNsb25lZCBub2RlXG4gICAgICAgICAqIGFmdGVyIHRoZSBjdXJyZW50IG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3ZlcnJpZGVzXSAtIG5ldyBwcm9wZXJ0aWVzIHRvIG92ZXJyaWRlIGluIHRoZSBjbG9uZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gLSBuZXcgbm9kZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xvbmVBZnRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZUFmdGVyKCkge1xuICAgICAgICAgICAgdmFyIG92ZXJyaWRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIHZhciBjbG9uZWQgPSB0aGlzLmNsb25lKG92ZXJyaWRlcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLCBjbG9uZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIG5vZGUocykgYmVmb3JlIHRoZSBjdXJyZW50IG5vZGUgYW5kIHJlbW92ZXMgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsuLi5Ob2RlfSBub2RlcyAtIG5vZGUocykgdG8gcmVwbGFjZSBjdXJyZW50IG9uZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBpZiAoIGF0cnVsZS5uYW1lID09ICdtaXhpbicgKSB7XG4gICAgICAgICAqICAgYXRydWxlLnJlcGxhY2VXaXRoKG1peGluUnVsZXNbYXRydWxlLnBhcmFtc10pO1xuICAgICAgICAgKiB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IGN1cnJlbnQgbm9kZSB0byBtZXRob2RzIGNoYWluXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXBsYWNlV2l0aCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlV2l0aCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBub2RlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUoX3RoaXMsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCBhbmQgaW5zZXJ0cyBpdFxuICAgICAgICAgKiBhdCB0aGUgZW5kIG9mIGBuZXdQYXJlbnRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHdpbGwgY2xlYW4gdGhlIGBiZWZvcmVgIGFuZCBgYWZ0ZXJgIGNvZGUge0BsaW5rIE5vZGUjcmF3c30gZGF0YVxuICAgICAgICAgKiBmcm9tIHRoZSBub2RlIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB0aGUgaW5kZW50YXRpb24gc3R5bGUgb2YgYG5ld1BhcmVudGAuXG4gICAgICAgICAqIEl0IHdpbGwgYWxzbyBjbGVhbiB0aGUgYGJldHdlZW5gIHByb3BlcnR5XG4gICAgICAgICAqIGlmIGBuZXdQYXJlbnRgIGlzIGluIGFub3RoZXIge0BsaW5rIFJvb3R9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0NvbnRhaW5lcn0gbmV3UGFyZW50IC0gY29udGFpbmVyIG5vZGUgd2hlcmUgdGhlIGN1cnJlbnQgbm9kZVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCBiZSBtb3ZlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBhdHJ1bGUubW92ZVRvKGF0cnVsZS5yb290KCkpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfSBjdXJyZW50IG5vZGUgdG8gbWV0aG9kcyBjaGFpblxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbW92ZVRvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVUbyhuZXdQYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5SYXdzKHRoaXMucm9vdCgpID09PSBuZXdQYXJlbnQucm9vdCgpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICBuZXdQYXJlbnQuYXBwZW5kKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCBhbmQgaW5zZXJ0cyBpdCBpbnRvXG4gICAgICAgICAqIGEgbmV3IHBhcmVudCBiZWZvcmUgYG90aGVyTm9kZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgd2lsbCBhbHNvIGNsZWFuIHRoZSBub2Rl4oCZcyBjb2RlIHN0eWxlIHByb3BlcnRpZXMganVzdCBhcyBpdCB3b3VsZFxuICAgICAgICAgKiBpbiB7QGxpbmsgTm9kZSNtb3ZlVG99LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge05vZGV9IG90aGVyTm9kZSAtIG5vZGUgdGhhdCB3aWxsIGJlIGJlZm9yZSBjdXJyZW50IG5vZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Tm9kZX0gY3VycmVudCBub2RlIHRvIG1ldGhvZHMgY2hhaW5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21vdmVCZWZvcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZUJlZm9yZShvdGhlck5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5SYXdzKHRoaXMucm9vdCgpID09PSBvdGhlck5vZGUucm9vdCgpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICBvdGhlck5vZGUucGFyZW50Lmluc2VydEJlZm9yZShvdGhlck5vZGUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCBhbmQgaW5zZXJ0cyBpdCBpbnRvXG4gICAgICAgICAqIGEgbmV3IHBhcmVudCBhZnRlciBgb3RoZXJOb2RlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIGFsc28gY2xlYW4gdGhlIG5vZGXigJlzIGNvZGUgc3R5bGUgcHJvcGVydGllcyBqdXN0IGFzIGl0IHdvdWxkXG4gICAgICAgICAqIGluIHtAbGluayBOb2RlI21vdmVUb30uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Tm9kZX0gb3RoZXJOb2RlIC0gbm9kZSB0aGF0IHdpbGwgYmUgYWZ0ZXIgY3VycmVudCBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge05vZGV9IGN1cnJlbnQgbm9kZSB0byBtZXRob2RzIGNoYWluXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtb3ZlQWZ0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZUFmdGVyKG90aGVyTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhblJhd3ModGhpcy5yb290KCkgPT09IG90aGVyTm9kZS5yb290KCkpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIG90aGVyTm9kZS5wYXJlbnQuaW5zZXJ0QWZ0ZXIob3RoZXJOb2RlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG5leHQgY2hpbGQgb2YgdGhlIG5vZGXigJlzIHBhcmVudC5cbiAgICAgICAgICogUmV0dXJucyBgdW5kZWZpbmVkYCBpZiB0aGUgY3VycmVudCBub2RlIGlzIHRoZSBsYXN0IGNoaWxkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfHVuZGVmaW5lZH0gbmV4dCBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGlmICggY29tbWVudC50ZXh0ID09PSAnZGVsZXRlIG5leHQnICkge1xuICAgICAgICAgKiAgIGNvbnN0IG5leHQgPSBjb21tZW50Lm5leHQoKTtcbiAgICAgICAgICogICBpZiAoIG5leHQgKSB7XG4gICAgICAgICAqICAgICBuZXh0LnJlbW92ZSgpO1xuICAgICAgICAgKiAgIH1cbiAgICAgICAgICogfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbmV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wYXJlbnQuaW5kZXgodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBwcmV2aW91cyBjaGlsZCBvZiB0aGUgbm9kZeKAmXMgcGFyZW50LlxuICAgICAgICAgKiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIHRoZSBjdXJyZW50IG5vZGUgaXMgdGhlIGZpcnN0IGNoaWxkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOb2RlfHVuZGVmaW5lZH0gcHJldmlvdXMgbm9kZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBhbm5vdGF0aW9uID0gZGVjbC5wcmV2KCk7XG4gICAgICAgICAqIGlmICggYW5ub3RhdGlvbi50eXBlID09ICdjb21tZW50JyApIHtcbiAgICAgICAgICogIHJlYWRBbm5vdGF0aW9uKGFubm90YXRpb24udGV4dCk7XG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXYnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJldigpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMucGFyZW50LmluZGV4KHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Lm5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvSlNPTicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICAgICAgICB2YXIgZml4ZWQgPSB7fTtcblxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3BhcmVudCcpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgaSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaSkpID09PSAnb2JqZWN0JyAmJiBpLnRvSlNPTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS50b0pTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZS50b0pTT04oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpeGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB7QGxpbmsgTm9kZSNyYXdzfSB2YWx1ZS4gSWYgdGhlIG5vZGUgaXMgbWlzc2luZ1xuICAgICAgICAgKiB0aGUgY29kZSBzdHlsZSBwcm9wZXJ0eSAoYmVjYXVzZSB0aGUgbm9kZSB3YXMgbWFudWFsbHkgYnVpbHQgb3IgY2xvbmVkKSxcbiAgICAgICAgICogUG9zdENTUyB3aWxsIHRyeSB0byBhdXRvZGV0ZWN0IHRoZSBjb2RlIHN0eWxlIHByb3BlcnR5IGJ5IGxvb2tpbmdcbiAgICAgICAgICogYXQgb3RoZXIgbm9kZXMgaW4gdGhlIHRyZWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wICAgICAgICAgIC0gbmFtZSBvZiBjb2RlIHN0eWxlIHByb3BlcnR5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFR5cGVdIC0gbmFtZSBvZiBkZWZhdWx0IHZhbHVlLCBpdCBjYW4gYmUgbWlzc2VkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgdGhlIHZhbHVlIGlzIHRoZSBzYW1lIGFzIHByb3BcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EgeyBiYWNrZ3JvdW5kOiB3aGl0ZSB9Jyk7XG4gICAgICAgICAqIHJvb3Qubm9kZXNbMF0uYXBwZW5kKHsgcHJvcDogJ2NvbG9yJywgdmFsdWU6ICdibGFjaycgfSk7XG4gICAgICAgICAqIHJvb3Qubm9kZXNbMF0ubm9kZXNbMV0ucmF3cy5iZWZvcmUgICAvLz0+IHVuZGVmaW5lZFxuICAgICAgICAgKiByb290Lm5vZGVzWzBdLm5vZGVzWzFdLnJhdygnYmVmb3JlJykgLy89PiAnICdcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBjb2RlIHN0eWxlIHZhbHVlXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3KHByb3AsIGRlZmF1bHRUeXBlKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gbmV3IF9zdHJpbmdpZmllcjIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yYXcodGhpcywgcHJvcCwgZGVmYXVsdFR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBSb290IGluc3RhbmNlIG9mIHRoZSBub2Rl4oCZcyB0cmVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiByb290Lm5vZGVzWzBdLm5vZGVzWzBdLnJvb3QoKSA9PT0gcm9vdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtSb290fSByb290IHBhcmVudFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncm9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByb290KCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XG4gICAgICAgICAgICB3aGlsZSAocmVzdWx0LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQ7XG4gICAgICAgICAgICB9cmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xlYW5SYXdzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFuUmF3cyhrZWVwQmV0d2Vlbikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmF3cy5iZWZvcmU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yYXdzLmFmdGVyO1xuICAgICAgICAgICAgaWYgKCFrZWVwQmV0d2VlbikgZGVsZXRlIHRoaXMucmF3cy5iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwb3NpdGlvbkluc2lkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwb3NpdGlvbkluc2lkZShpbmRleCkge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLnNvdXJjZS5zdGFydC5jb2x1bW47XG4gICAgICAgICAgICB2YXIgbGluZSA9IHRoaXMuc291cmNlLnN0YXJ0LmxpbmU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdbaV0gPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Bvc2l0aW9uQnknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcG9zaXRpb25CeShvcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5zb3VyY2Uuc3RhcnQ7XG4gICAgICAgICAgICBpZiAob3B0cy5pbmRleCkge1xuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5pbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMud29yZCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudG9TdHJpbmcoKS5pbmRleE9mKG9wdHMud29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgcG9zID0gdGhpcy5wb3NpdGlvbkluc2lkZShpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVTZWxmJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVNlbGYoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNyZW1vdmVTZWxmIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3JlbW92ZS4nKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXBsYWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2Uobm9kZXMpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI3JlcGxhY2UgaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmVwbGFjZVdpdGgnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VXaXRoKG5vZGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3R5bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3R5bGUob3duLCBkZXRlY3QpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI3N0eWxlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3KCknKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhdyhvd24sIGRldGVjdCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFuU3R5bGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFuU3R5bGVzKGtlZXBCZXR3ZWVuKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNjbGVhblN0eWxlcygpIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI2NsZWFuUmF3cygpJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGVhblJhd3Moa2VlcEJldHdlZW4pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiZWZvcmUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI2JlZm9yZSBpcyBkZXByZWNhdGVkLiBVc2UgTm9kZSNyYXdzLmJlZm9yZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5iZWZvcmU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ05vZGUjYmVmb3JlIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MuYmVmb3JlJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MuYmVmb3JlID0gdmFsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiZXR3ZWVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNiZXR3ZWVuIGlzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MuYmV0d2VlbicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF3cy5iZXR3ZWVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI2JldHdlZW4gaXMgZGVwcmVjYXRlZC4gVXNlIE5vZGUjcmF3cy5iZXR3ZWVuJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MuYmV0d2VlbiA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgTm9kZSNcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB0eXBlIC0gU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbm9kZeKAmXMgdHlwZS5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgUG9zc2libGUgdmFsdWVzIGFyZSBgcm9vdGAsIGBhdHJ1bGVgLCBgcnVsZWAsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIGBkZWNsYCwgb3IgYGNvbW1lbnRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBwb3N0Y3NzLmRlY2woeyBwcm9wOiAnY29sb3InLCB2YWx1ZTogJ2JsYWNrJyB9KS50eXBlIC8vPT4gJ2RlY2wnXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgTm9kZSNcbiAgICAgICAgICogQG1lbWJlciB7Q29udGFpbmVyfSBwYXJlbnQgLSB0aGUgbm9kZeKAmXMgcGFyZW50IG5vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJvb3Qubm9kZXNbMF0ucGFyZW50ID09IHJvb3Q7XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgTm9kZSNcbiAgICAgICAgICogQG1lbWJlciB7c291cmNlfSBzb3VyY2UgLSB0aGUgaW5wdXQgc291cmNlIG9mIHRoZSBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGluIHNvdXJjZSBtYXAgZ2VuZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IGNyZWF0ZSBhIG5vZGUgbWFudWFsbHkgKGUuZy4sIHdpdGggYHBvc3Rjc3MuZGVjbCgpYCksXG4gICAgICAgICAqIHRoYXQgbm9kZSB3aWxsIG5vdCBoYXZlIGEgYHNvdXJjZWAgcHJvcGVydHkgYW5kIHdpbGwgYmUgYWJzZW50XG4gICAgICAgICAqIGZyb20gdGhlIHNvdXJjZSBtYXAuIEZvciB0aGlzIHJlYXNvbiwgdGhlIHBsdWdpbiBkZXZlbG9wZXIgc2hvdWxkXG4gICAgICAgICAqIGNvbnNpZGVyIGNsb25pbmcgbm9kZXMgdG8gY3JlYXRlIG5ldyBvbmVzIChpbiB3aGljaCBjYXNlIHRoZSBuZXcgbm9kZeKAmXNcbiAgICAgICAgICogc291cmNlIHdpbGwgcmVmZXJlbmNlIHRoZSBvcmlnaW5hbCwgY2xvbmVkIG5vZGUpIG9yIHNldHRpbmdcbiAgICAgICAgICogdGhlIGBzb3VyY2VgIHByb3BlcnR5IG1hbnVhbGx5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBqc1xuICAgICAgICAgKiAvLyBCYWRcbiAgICAgICAgICogY29uc3QgcHJlZml4ZWQgPSBwb3N0Y3NzLmRlY2woe1xuICAgICAgICAgKiAgIHByb3A6ICctbW96LScgKyBkZWNsLnByb3AsXG4gICAgICAgICAqICAgdmFsdWU6IGRlY2wudmFsdWVcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEdvb2RcbiAgICAgICAgICogY29uc3QgcHJlZml4ZWQgPSBkZWNsLmNsb25lKHsgcHJvcDogJy1tb3otJyArIGRlY2wucHJvcCB9KTtcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYGpzXG4gICAgICAgICAqIGlmICggYXRydWxlLm5hbWUgPT0gJ2FkZC1saW5rJyApIHtcbiAgICAgICAgICogICBjb25zdCBydWxlID0gcG9zdGNzcy5ydWxlKHsgc2VsZWN0b3I6ICdhJywgc291cmNlOiBhdHJ1bGUuc291cmNlIH0pO1xuICAgICAgICAgKiAgIGF0cnVsZS5wYXJlbnQuaW5zZXJ0QmVmb3JlKGF0cnVsZSwgcnVsZSk7XG4gICAgICAgICAqIH1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGRlY2wuc291cmNlLmlucHV0LmZyb20gLy89PiAnL2hvbWUvYWkvYS5zYXNzJ1xuICAgICAgICAgKiBkZWNsLnNvdXJjZS5zdGFydCAgICAgIC8vPT4geyBsaW5lOiAxMCwgY29sdW1uOiAyIH1cbiAgICAgICAgICogZGVjbC5zb3VyY2UuZW5kICAgICAgICAvLz0+IHsgbGluZTogMTAsIGNvbHVtbjogMTIgfVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIE5vZGUjXG4gICAgICAgICAqIEBtZW1iZXIge29iamVjdH0gcmF3cyAtIEluZm9ybWF0aW9uIHRvIGdlbmVyYXRlIGJ5dGUtdG8tYnl0ZSBlcXVhbFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHN0cmluZyBhcyBpdCB3YXMgaW4gdGhlIG9yaWdpbiBpbnB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogRXZlcnkgcGFyc2VyIHNhdmVzIGl0cyBvd24gcHJvcGVydGllcyxcbiAgICAgICAgICogYnV0IHRoZSBkZWZhdWx0IENTUyBwYXJzZXIgdXNlczpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBgYmVmb3JlYDogdGhlIHNwYWNlIHN5bWJvbHMgYmVmb3JlIHRoZSBub2RlLiBJdCBhbHNvIHN0b3JlcyBgKmBcbiAgICAgICAgICogICBhbmQgYF9gIHN5bWJvbHMgYmVmb3JlIHRoZSBkZWNsYXJhdGlvbiAoSUUgaGFjaykuXG4gICAgICAgICAqICogYGFmdGVyYDogdGhlIHNwYWNlIHN5bWJvbHMgYWZ0ZXIgdGhlIGxhc3QgY2hpbGQgb2YgdGhlIG5vZGVcbiAgICAgICAgICogICB0byB0aGUgZW5kIG9mIHRoZSBub2RlLlxuICAgICAgICAgKiAqIGBiZXR3ZWVuYDogdGhlIHN5bWJvbHMgYmV0d2VlbiB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICAgICAqICAgZm9yIGRlY2xhcmF0aW9ucywgc2VsZWN0b3IgYW5kIGB7YCBmb3IgcnVsZXMsIG9yIGxhc3QgcGFyYW1ldGVyXG4gICAgICAgICAqICAgYW5kIGB7YCBmb3IgYXQtcnVsZXMuXG4gICAgICAgICAqICogYHNlbWljb2xvbmA6IGNvbnRhaW5zIHRydWUgaWYgdGhlIGxhc3QgY2hpbGQgaGFzXG4gICAgICAgICAqICAgYW4gKG9wdGlvbmFsKSBzZW1pY29sb24uXG4gICAgICAgICAqICogYGFmdGVyTmFtZWA6IHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBhdC1ydWxlIG5hbWUgYW5kIGl0cyBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiAqIGBsZWZ0YDogdGhlIHNwYWNlIHN5bWJvbHMgYmV0d2VlbiBgLypgIGFuZCB0aGUgY29tbWVudOKAmXMgdGV4dC5cbiAgICAgICAgICogKiBgcmlnaHRgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZXR3ZWVuIHRoZSBjb21tZW504oCZcyB0ZXh0XG4gICAgICAgICAqICAgYW5kIDxjb2RlPiomIzQ3OzwvY29kZT4uXG4gICAgICAgICAqICogYGltcG9ydGFudGA6IHRoZSBjb250ZW50IG9mIHRoZSBpbXBvcnRhbnQgc3RhdGVtZW50LFxuICAgICAgICAgKiAgIGlmIGl0IGlzIG5vdCBqdXN0IGAhaW1wb3J0YW50YC5cbiAgICAgICAgICpcbiAgICAgICAgICogUG9zdENTUyBjbGVhbnMgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbiB2YWx1ZXMgYW5kIGF0LXJ1bGUgcGFyYW1ldGVyc1xuICAgICAgICAgKiBmcm9tIGNvbW1lbnRzIGFuZCBleHRyYSBzcGFjZXMsIGJ1dCBpdCBzdG9yZXMgb3JpZ2luIGNvbnRlbnQgaW4gcmF3c1xuICAgICAgICAgKiBwcm9wZXJ0aWVzLiBBcyBzdWNoLCBpZiB5b3UgZG9u4oCZdCBjaGFuZ2UgYSBkZWNsYXJhdGlvbuKAmXMgdmFsdWUsXG4gICAgICAgICAqIFBvc3RDU1Mgd2lsbCB1c2UgdGhlIHJhdyB2YWx1ZSB3aXRoIGNvbW1lbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7XFxuICBjb2xvcjpibGFja1xcbn0nKVxuICAgICAgICAgKiByb290LmZpcnN0LmZpcnN0LnJhd3MgLy89PiB7IGJlZm9yZTogJ1xcbiAgJywgYmV0d2VlbjogJzonIH1cbiAgICAgICAgICovXG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTm9kZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm9kZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3Mvbm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnJlcXVpcmUoJy4vcnVsZScpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfbGF6eVJlc3VsdCA9IHJlcXVpcmUoJy4vbGF6eS1yZXN1bHQnKTtcblxudmFyIF9sYXp5UmVzdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xhenlSZXN1bHQpO1xuXG52YXIgX3Byb2Nlc3NvciA9IHJlcXVpcmUoJy4vcHJvY2Vzc29yJyk7XG5cbnZhciBfcHJvY2Vzc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb2Nlc3Nvcik7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBicmVhayBjeWNsaWNhbCBkZXBlbmRlbmN5IGRlYWRsb2NrIOKAkyAjODdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQ1NTIGZpbGUgYW5kIGNvbnRhaW5zIGFsbCBpdHMgcGFyc2VkIG5vZGVzLlxuICpcbiAqIEBleHRlbmRzIENvbnRhaW5lclxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYXtjb2xvcjpibGFja30gYnt6LWluZGV4OjJ9Jyk7XG4gKiByb290LnR5cGUgICAgICAgICAvLz0+ICdyb290J1xuICogcm9vdC5ub2Rlcy5sZW5ndGggLy89PiAyXG4gKi9cbnZhciBSb290ID0gZnVuY3Rpb24gKF9Db250YWluZXIpIHtcbiAgICBfaW5oZXJpdHMoUm9vdCwgX0NvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBSb290KGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb290KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUm9vdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJvb3QpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdyb290JztcbiAgICAgICAgaWYgKCFfdGhpcy5ub2RlcykgX3RoaXMubm9kZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSb290LCBbe1xuICAgICAgICBrZXk6ICdyZW1vdmVDaGlsZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQgPSB0aGlzLmluZGV4KGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkID09PSAwICYmIHRoaXMubm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXNbMV0ucmF3cy5iZWZvcmUgPSB0aGlzLm5vZGVzW2NoaWxkXS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9nZXQoUm9vdC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSb290LnByb3RvdHlwZSksICdyZW1vdmVDaGlsZCcsIHRoaXMpLmNhbGwodGhpcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdub3JtYWxpemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbm9ybWFsaXplKGNoaWxkLCBzYW1wbGUsIHR5cGUpIHtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IF9nZXQoUm9vdC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSb290LnByb3RvdHlwZSksICdub3JtYWxpemUnLCB0aGlzKS5jYWxsKHRoaXMsIGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKHNhbXBsZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAncHJlcGVuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlLnJhd3MuYmVmb3JlID0gdGhpcy5ub2Rlc1sxXS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzYW1wbGUucmF3cy5iZWZvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlyc3QgIT09IHNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJhd3MuYmVmb3JlID0gc2FtcGxlLnJhd3MuYmVmb3JlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEge0BsaW5rIFJlc3VsdH0gaW5zdGFuY2UgcmVwcmVzZW50aW5nIHRoZSByb2904oCZcyBDU1MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7cHJvY2Vzc09wdGlvbnN9IFtvcHRzXSAtIG9wdGlvbnMgd2l0aCBvbmx5IGB0b2AgYW5kIGBtYXBgIGtleXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7UmVzdWx0fSByZXN1bHQgd2l0aCBjdXJyZW50IHJvb3TigJlzIENTU1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290MSA9IHBvc3Rjc3MucGFyc2UoY3NzMSwgeyBmcm9tOiAnYS5jc3MnIH0pO1xuICAgICAgICAgKiBjb25zdCByb290MiA9IHBvc3Rjc3MucGFyc2UoY3NzMiwgeyBmcm9tOiAnYi5jc3MnIH0pO1xuICAgICAgICAgKiByb290MS5hcHBlbmQocm9vdDIpO1xuICAgICAgICAgKiBjb25zdCByZXN1bHQgPSByb290MS50b1Jlc3VsdCh7IHRvOiAnYWxsLmNzcycsIG1hcDogdHJ1ZSB9KTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvUmVzdWx0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvUmVzdWx0KCkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICB2YXIgbGF6eSA9IG5ldyBfbGF6eVJlc3VsdDIuZGVmYXVsdChuZXcgX3Byb2Nlc3NvcjIuZGVmYXVsdCgpLCB0aGlzLCBvcHRzKTtcbiAgICAgICAgICAgIHJldHVybiBsYXp5LnN0cmluZ2lmeSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGNoaWxkKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnUm9vdCNyZW1vdmUgaXMgZGVwcmVjYXRlZC4gVXNlIFJvb3QjcmVtb3ZlQ2hpbGQnKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmV2TWFwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXZNYXAoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnUm9vdCNwcmV2TWFwIGlzIGRlcHJlY2F0ZWQuIFVzZSBSb290I3NvdXJjZS5pbnB1dC5tYXAnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5pbnB1dC5tYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIFJvb3QjXG4gICAgICAgICAqIEBtZW1iZXIge29iamVjdH0gcmF3cyAtIEluZm9ybWF0aW9uIHRvIGdlbmVyYXRlIGJ5dGUtdG8tYnl0ZSBlcXVhbFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHN0cmluZyBhcyBpdCB3YXMgaW4gdGhlIG9yaWdpbiBpbnB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogRXZlcnkgcGFyc2VyIHNhdmVzIGl0cyBvd24gcHJvcGVydGllcyxcbiAgICAgICAgICogYnV0IHRoZSBkZWZhdWx0IENTUyBwYXJzZXIgdXNlczpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBgYWZ0ZXJgOiB0aGUgc3BhY2Ugc3ltYm9scyBhZnRlciB0aGUgbGFzdCBjaGlsZCB0byB0aGUgZW5kIG9mIGZpbGUuXG4gICAgICAgICAqICogYHNlbWljb2xvbmA6IGlzIHRoZSBsYXN0IGNoaWxkIGhhcyBhbiAob3B0aW9uYWwpIHNlbWljb2xvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcG9zdGNzcy5wYXJzZSgnYSB7fVxcbicpLnJhd3MgLy89PiB7IGFmdGVyOiAnXFxuJyB9XG4gICAgICAgICAqIHBvc3Rjc3MucGFyc2UoJ2Ege30nKS5yYXdzICAgLy89PiB7IGFmdGVyOiAnJyB9XG4gICAgICAgICAqL1xuXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJvb3Q7XG59KF9jb250YWluZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb290O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnJlcXVpcmUoJy4vYXQtcnVsZScpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpO1xuXG52YXIgX3dhcm5PbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5PbmNlKTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBicmVhayBjeWNsaWNhbCBkZXBlbmRlbmN5IGRlYWRsb2NrIOKAkyAjODdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQ1NTIHJ1bGU6IGEgc2VsZWN0b3IgZm9sbG93ZWQgYnkgYSBkZWNsYXJhdGlvbiBibG9jay5cbiAqXG4gKiBAZXh0ZW5kcyBDb250YWluZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2F7fScpO1xuICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3Q7XG4gKiBydWxlLnR5cGUgICAgICAgLy89PiAncnVsZSdcbiAqIHJ1bGUudG9TdHJpbmcoKSAvLz0+ICdhe30nXG4gKi9cbnZhciBSdWxlID0gZnVuY3Rpb24gKF9Db250YWluZXIpIHtcbiAgICBfaW5oZXJpdHMoUnVsZSwgX0NvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBSdWxlKGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSdWxlKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUnVsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJ1bGUpKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdydWxlJztcbiAgICAgICAgaWYgKCFfdGhpcy5ub2RlcykgX3RoaXMubm9kZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJ1bGXigJlzIGluZGl2aWR1YWwgc2VsZWN0b3JzLlxuICAgICAqIEdyb3VwcyBvZiBzZWxlY3RvcnMgYXJlIHNwbGl0IGF0IGNvbW1hcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EsIGIgeyB9Jyk7XG4gICAgICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3Q7XG4gICAgICpcbiAgICAgKiBydWxlLnNlbGVjdG9yICAvLz0+ICdhLCBiJ1xuICAgICAqIHJ1bGUuc2VsZWN0b3JzIC8vPT4gWydhJywgJ2InXVxuICAgICAqXG4gICAgICogcnVsZS5zZWxlY3RvcnMgPSBbJ2EnLCAnc3Ryb25nJ107XG4gICAgICogcnVsZS5zZWxlY3RvciAvLz0+ICdhLCBzdHJvbmcnXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSdWxlLCBbe1xuICAgICAgICBrZXk6ICdzZWxlY3RvcnMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfbGlzdDIuZGVmYXVsdC5jb21tYSh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSB0aGlzLnNlbGVjdG9yID8gdGhpcy5zZWxlY3Rvci5tYXRjaCgvLFxccyovKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgc2VwID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcsJyArIHRoaXMucmF3KCdiZXR3ZWVuJywgJ2JlZm9yZU9wZW4nKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IgPSB2YWx1ZXMuam9pbihzZXApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfc2VsZWN0b3InLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdSdWxlI19zZWxlY3RvciBpcyBkZXByZWNhdGVkLiBVc2UgUnVsZSNyYXdzLnNlbGVjdG9yJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXdzLnNlbGVjdG9yO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdSdWxlI19zZWxlY3RvciBpcyBkZXByZWNhdGVkLiBVc2UgUnVsZSNyYXdzLnNlbGVjdG9yJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3Muc2VsZWN0b3IgPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIFJ1bGUjXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gc2VsZWN0b3IgLSB0aGUgcnVsZeKAmXMgZnVsbCBzZWxlY3RvciByZXByZXNlbnRlZFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgYSBzdHJpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EsIGIgeyB9Jyk7XG4gICAgICAgICAqIGNvbnN0IHJ1bGUgPSByb290LmZpcnN0O1xuICAgICAgICAgKiBydWxlLnNlbGVjdG9yIC8vPT4gJ2EsIGInXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgUnVsZSNcbiAgICAgICAgICogQG1lbWJlciB7b2JqZWN0fSByYXdzIC0gSW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgYnl0ZS10by1ieXRlIGVxdWFsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgc3RyaW5nIGFzIGl0IHdhcyBpbiB0aGUgb3JpZ2luIGlucHV0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBFdmVyeSBwYXJzZXIgc2F2ZXMgaXRzIG93biBwcm9wZXJ0aWVzLFxuICAgICAgICAgKiBidXQgdGhlIGRlZmF1bHQgQ1NTIHBhcnNlciB1c2VzOlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIGBiZWZvcmVgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZWZvcmUgdGhlIG5vZGUuIEl0IGFsc28gc3RvcmVzIGAqYFxuICAgICAgICAgKiAgIGFuZCBgX2Agc3ltYm9scyBiZWZvcmUgdGhlIGRlY2xhcmF0aW9uIChJRSBoYWNrKS5cbiAgICAgICAgICogKiBgYWZ0ZXJgOiB0aGUgc3BhY2Ugc3ltYm9scyBhZnRlciB0aGUgbGFzdCBjaGlsZCBvZiB0aGUgbm9kZVxuICAgICAgICAgKiAgIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGUuXG4gICAgICAgICAqICogYGJldHdlZW5gOiB0aGUgc3ltYm9scyBiZXR3ZWVuIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICAgICAgICogICBmb3IgZGVjbGFyYXRpb25zLCBzZWxlY3RvciBhbmQgYHtgIGZvciBydWxlcywgb3IgbGFzdCBwYXJhbWV0ZXJcbiAgICAgICAgICogICBhbmQgYHtgIGZvciBhdC1ydWxlcy5cbiAgICAgICAgICogKiBgc2VtaWNvbG9uYDogY29udGFpbnMgdHJ1ZSBpZiB0aGUgbGFzdCBjaGlsZCBoYXNcbiAgICAgICAgICogICBhbiAob3B0aW9uYWwpIHNlbWljb2xvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogUG9zdENTUyBjbGVhbnMgc2VsZWN0b3JzIGZyb20gY29tbWVudHMgYW5kIGV4dHJhIHNwYWNlcyxcbiAgICAgICAgICogYnV0IGl0IHN0b3JlcyBvcmlnaW4gY29udGVudCBpbiByYXdzIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEFzIHN1Y2gsIGlmIHlvdSBkb27igJl0IGNoYW5nZSBhIGRlY2xhcmF0aW9u4oCZcyB2YWx1ZSxcbiAgICAgICAgICogUG9zdENTUyB3aWxsIHVzZSB0aGUgcmF3IHZhbHVlIHdpdGggY29tbWVudHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhIHtcXG4gIGNvbG9yOmJsYWNrXFxufScpXG4gICAgICAgICAqIHJvb3QuZmlyc3QuZmlyc3QucmF3cyAvLz0+IHsgYmVmb3JlOiAnJywgYmV0d2VlbjogJyAnLCBhZnRlcjogJ1xcbicgfVxuICAgICAgICAgKi9cblxuICAgIH1dKTtcblxuICAgIHJldHVybiBSdWxlO1xufShfY29udGFpbmVyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUnVsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9rZW5pemU7XG52YXIgU0lOR0xFX1FVT1RFID0gJ1xcJycuY2hhckNvZGVBdCgwKTtcbnZhciBET1VCTEVfUVVPVEUgPSAnXCInLmNoYXJDb2RlQXQoMCk7XG52YXIgQkFDS1NMQVNIID0gJ1xcXFwnLmNoYXJDb2RlQXQoMCk7XG52YXIgU0xBU0ggPSAnLycuY2hhckNvZGVBdCgwKTtcbnZhciBORVdMSU5FID0gJ1xcbicuY2hhckNvZGVBdCgwKTtcbnZhciBTUEFDRSA9ICcgJy5jaGFyQ29kZUF0KDApO1xudmFyIEZFRUQgPSAnXFxmJy5jaGFyQ29kZUF0KDApO1xudmFyIFRBQiA9ICdcXHQnLmNoYXJDb2RlQXQoMCk7XG52YXIgQ1IgPSAnXFxyJy5jaGFyQ29kZUF0KDApO1xudmFyIE9QRU5fU1FVQVJFID0gJ1snLmNoYXJDb2RlQXQoMCk7XG52YXIgQ0xPU0VfU1FVQVJFID0gJ10nLmNoYXJDb2RlQXQoMCk7XG52YXIgT1BFTl9QQVJFTlRIRVNFUyA9ICcoJy5jaGFyQ29kZUF0KDApO1xudmFyIENMT1NFX1BBUkVOVEhFU0VTID0gJyknLmNoYXJDb2RlQXQoMCk7XG52YXIgT1BFTl9DVVJMWSA9ICd7Jy5jaGFyQ29kZUF0KDApO1xudmFyIENMT1NFX0NVUkxZID0gJ30nLmNoYXJDb2RlQXQoMCk7XG52YXIgU0VNSUNPTE9OID0gJzsnLmNoYXJDb2RlQXQoMCk7XG52YXIgQVNURVJJU0sgPSAnKicuY2hhckNvZGVBdCgwKTtcbnZhciBDT0xPTiA9ICc6Jy5jaGFyQ29kZUF0KDApO1xudmFyIEFUID0gJ0AnLmNoYXJDb2RlQXQoMCk7XG5cbnZhciBSRV9BVF9FTkQgPSAvWyBcXG5cXHRcXHJcXGZcXHtcXChcXCknXCJcXFxcOy9cXFtcXF0jXS9nO1xudmFyIFJFX1dPUkRfRU5EID0gL1sgXFxuXFx0XFxyXFxmXFwoXFwpXFx7XFx9OjtAISdcIlxcXFxcXF1cXFsjXXxcXC8oPz1cXCopL2c7XG52YXIgUkVfQkFEX0JSQUNLRVQgPSAvLltcXFxcXFwvXFwoXCInXFxuXS87XG5cbmZ1bmN0aW9uIHRva2VuaXplKGlucHV0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBjc3MgPSBpbnB1dC5jc3MudmFsdWVPZigpO1xuXG4gICAgdmFyIGlnbm9yZSA9IG9wdGlvbnMuaWdub3JlRXJyb3JzO1xuXG4gICAgdmFyIGNvZGUgPSB2b2lkIDAsXG4gICAgICAgIG5leHQgPSB2b2lkIDAsXG4gICAgICAgIHF1b3RlID0gdm9pZCAwLFxuICAgICAgICBsaW5lcyA9IHZvaWQgMCxcbiAgICAgICAgbGFzdCA9IHZvaWQgMCxcbiAgICAgICAgY29udGVudCA9IHZvaWQgMCxcbiAgICAgICAgZXNjYXBlID0gdm9pZCAwLFxuICAgICAgICBuZXh0TGluZSA9IHZvaWQgMCxcbiAgICAgICAgbmV4dE9mZnNldCA9IHZvaWQgMCxcbiAgICAgICAgZXNjYXBlZCA9IHZvaWQgMCxcbiAgICAgICAgZXNjYXBlUG9zID0gdm9pZCAwLFxuICAgICAgICBwcmV2ID0gdm9pZCAwLFxuICAgICAgICBuID0gdm9pZCAwO1xuXG4gICAgdmFyIGxlbmd0aCA9IGNzcy5sZW5ndGg7XG4gICAgdmFyIG9mZnNldCA9IC0xO1xuICAgIHZhciBsaW5lID0gMTtcbiAgICB2YXIgcG9zID0gMDtcblxuICAgIGZ1bmN0aW9uIHVuY2xvc2VkKHdoYXQpIHtcbiAgICAgICAgdGhyb3cgaW5wdXQuZXJyb3IoJ1VuY2xvc2VkICcgKyB3aGF0LCBsaW5lLCBwb3MgLSBvZmZzZXQpO1xuICAgIH1cblxuICAgIHdoaWxlIChwb3MgPCBsZW5ndGgpIHtcbiAgICAgICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IE5FV0xJTkUgfHwgY29kZSA9PT0gRkVFRCB8fCBjb2RlID09PSBDUiAmJiBjc3MuY2hhckNvZGVBdChwb3MgKyAxKSAhPT0gTkVXTElORSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcG9zO1xuICAgICAgICAgICAgbGluZSArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIE5FV0xJTkU6XG4gICAgICAgICAgICBjYXNlIFNQQUNFOlxuICAgICAgICAgICAgY2FzZSBUQUI6XG4gICAgICAgICAgICBjYXNlIENSOlxuICAgICAgICAgICAgY2FzZSBGRUVEOlxuICAgICAgICAgICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPSBjc3MuY2hhckNvZGVBdChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IE5FV0xJTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChjb2RlID09PSBTUEFDRSB8fCBjb2RlID09PSBORVdMSU5FIHx8IGNvZGUgPT09IFRBQiB8fCBjb2RlID09PSBDUiB8fCBjb2RlID09PSBGRUVEKTtcblxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnc3BhY2UnLCBjc3Muc2xpY2UocG9zLCBuZXh0KV0pO1xuICAgICAgICAgICAgICAgIHBvcyA9IG5leHQgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE9QRU5fU1FVQVJFOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnWycsICdbJywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgQ0xPU0VfU1FVQVJFOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnXScsICddJywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgT1BFTl9DVVJMWTpcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChbJ3snLCAneycsIGxpbmUsIHBvcyAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIENMT1NFX0NVUkxZOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnfScsICd9JywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgQ09MT046XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWyc6JywgJzonLCBsaW5lLCBwb3MgLSBvZmZzZXRdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTRU1JQ09MT046XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWyc7JywgJzsnLCBsaW5lLCBwb3MgLSBvZmZzZXRdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBPUEVOX1BBUkVOVEhFU0VTOlxuICAgICAgICAgICAgICAgIHByZXYgPSB0b2tlbnMubGVuZ3RoID8gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVsxXSA6ICcnO1xuICAgICAgICAgICAgICAgIG4gPSBjc3MuY2hhckNvZGVBdChwb3MgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldiA9PT0gJ3VybCcgJiYgbiAhPT0gU0lOR0xFX1FVT1RFICYmIG4gIT09IERPVUJMRV9RVU9URSAmJiBuICE9PSBTUEFDRSAmJiBuICE9PSBORVdMSU5FICYmIG4gIT09IFRBQiAmJiBuICE9PSBGRUVEICYmIG4gIT09IENSKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZignKScsIG5leHQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jbG9zZWQoJ2JyYWNrZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVQb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KGVzY2FwZVBvcyAtIDEpID09PSBCQUNLU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVQb3MgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKGVzY2FwZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnYnJhY2tldHMnLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIGxpbmUsIHBvcyAtIG9mZnNldCwgbGluZSwgbmV4dCAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZignKScsIHBvcyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSB8fCBSRV9CQURfQlJBQ0tFVC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChbJygnLCAnKCcsIGxpbmUsIHBvcyAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydicmFja2V0cycsIGNvbnRlbnQsIGxpbmUsIHBvcyAtIG9mZnNldCwgbGluZSwgbmV4dCAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIENMT1NFX1BBUkVOVEhFU0VTOlxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnKScsICcpJywgbGluZSwgcG9zIC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU0lOR0xFX1FVT1RFOlxuICAgICAgICAgICAgY2FzZSBET1VCTEVfUVVPVEU6XG4gICAgICAgICAgICAgICAgcXVvdGUgPSBjb2RlID09PSBTSU5HTEVfUVVPVEUgPyAnXFwnJyA6ICdcIic7XG4gICAgICAgICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNzcy5pbmRleE9mKHF1b3RlLCBuZXh0ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNsb3NlZCgncXVvdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVQb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3NzLmNoYXJDb2RlQXQoZXNjYXBlUG9zIC0gMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlUG9zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChlc2NhcGVkKTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSk7XG4gICAgICAgICAgICAgICAgbGluZXMgPSBjb250ZW50LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gbGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChsYXN0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmUgKyBsYXN0O1xuICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0ID0gbmV4dCAtIGxpbmVzW2xhc3RdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIG5leHRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydzdHJpbmcnLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIGxpbmUsIHBvcyAtIG9mZnNldCwgbmV4dExpbmUsIG5leHQgLSBuZXh0T2Zmc2V0XSk7XG5cbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBuZXh0T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGxpbmUgPSBuZXh0TGluZTtcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEFUOlxuICAgICAgICAgICAgICAgIFJFX0FUX0VORC5sYXN0SW5kZXggPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgIFJFX0FUX0VORC50ZXN0KGNzcyk7XG4gICAgICAgICAgICAgICAgaWYgKFJFX0FUX0VORC5sYXN0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNzcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBSRV9BVF9FTkQubGFzdEluZGV4IC0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydhdC13b3JkJywgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBsaW5lLCBwb3MgLSBvZmZzZXQsIGxpbmUsIG5leHQgLSBvZmZzZXRdKTtcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEJBQ0tTTEFTSDpcbiAgICAgICAgICAgICAgICBuZXh0ID0gcG9zO1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKSA9PT0gQkFDS1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlID0gIWVzY2FwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZXNjYXBlICYmIGNvZGUgIT09IFNMQVNIICYmIGNvZGUgIT09IFNQQUNFICYmIGNvZGUgIT09IE5FV0xJTkUgJiYgY29kZSAhPT0gVEFCICYmIGNvZGUgIT09IENSICYmIGNvZGUgIT09IEZFRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChbJ3dvcmQnLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIGxpbmUsIHBvcyAtIG9mZnNldCwgbGluZSwgbmV4dCAtIG9mZnNldF0pO1xuICAgICAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IFNMQVNIICYmIGNzcy5jaGFyQ29kZUF0KHBvcyArIDEpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YoJyovJywgcG9zICsgMikgKyAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBjc3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNsb3NlZCgnY29tbWVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGNzcy5zbGljZShwb3MsIG5leHQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMgPSBjb250ZW50LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGxpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3QgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmUgKyBsYXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldCA9IG5leHQgLSBsaW5lc1tsYXN0XS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWydjb21tZW50JywgY29udGVudCwgbGluZSwgcG9zIC0gb2Zmc2V0LCBuZXh0TGluZSwgbmV4dCAtIG5leHRPZmZzZXRdKTtcblxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBuZXh0T2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbmV4dExpbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUkVfV09SRF9FTkQubGFzdEluZGV4ID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgUkVfV09SRF9FTkQudGVzdChjc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoUkVfV09SRF9FTkQubGFzdEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gUkVfV09SRF9FTkQubGFzdEluZGV4IC0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsnd29yZCcsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgbGluZSwgcG9zIC0gb2Zmc2V0LCBsaW5lLCBuZXh0IC0gb2Zmc2V0XSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwb3MrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy90b2tlbml6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0aWVzKTtcblxudmFyIF9mcmVlemUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZnJlZXplXCIpO1xuXG52YXIgX2ZyZWV6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcmVlemUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RyaW5ncywgcmF3KSB7XG4gIHJldHVybiAoMCwgX2ZyZWV6ZTIuZGVmYXVsdCkoKDAsIF9kZWZpbmVQcm9wZXJ0aWVzMi5kZWZhdWx0KShzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogKDAsIF9mcmVlemUyLmRlZmF1bHQpKHJhdylcbiAgICB9XG4gIH0pKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhUaGVtZSA9IGV4cG9ydHMuVGhlbWVQcm92aWRlciA9IGV4cG9ydHMuaW5qZWN0R2xvYmFsID0gZXhwb3J0cy5rZXlmcmFtZXMgPSBleHBvcnRzLmNzcyA9IHVuZGVmaW5lZDtcblxudmFyIF9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lID0gcmVxdWlyZSgnLi91dGlscy9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lJyk7XG5cbnZhciBfZ2VuZXJhdGVBbHBoYWJldGljTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lKTtcblxudmFyIF9jc3MgPSByZXF1aXJlKCcuL2NvbnN0cnVjdG9ycy9jc3MnKTtcblxudmFyIF9jc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzKTtcblxudmFyIF9pbmplY3RHbG9iYWwgPSByZXF1aXJlKCcuL2NvbnN0cnVjdG9ycy9pbmplY3RHbG9iYWwnKTtcblxudmFyIF9pbmplY3RHbG9iYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5qZWN0R2xvYmFsKTtcblxudmFyIF9TdHlsZWRDb21wb25lbnQgPSByZXF1aXJlKCcuL21vZGVscy9TdHlsZWRDb21wb25lbnQnKTtcblxudmFyIF9TdHlsZWRDb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVkQ29tcG9uZW50KTtcblxudmFyIF9zdHlsZWQyID0gcmVxdWlyZSgnLi9jb25zdHJ1Y3RvcnMvc3R5bGVkJyk7XG5cbnZhciBfc3R5bGVkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlZDIpO1xuXG52YXIgX2tleWZyYW1lczIgPSByZXF1aXJlKCcuL2NvbnN0cnVjdG9ycy9rZXlmcmFtZXMnKTtcblxudmFyIF9rZXlmcmFtZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5ZnJhbWVzMik7XG5cbnZhciBfQ29tcG9uZW50U3R5bGUyID0gcmVxdWlyZSgnLi9tb2RlbHMvQ29tcG9uZW50U3R5bGUnKTtcblxudmFyIF9Db21wb25lbnRTdHlsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnRTdHlsZTIpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKCcuL21vZGVscy9UaGVtZVByb3ZpZGVyJyk7XG5cbnZhciBfVGhlbWVQcm92aWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaGVtZVByb3ZpZGVyKTtcblxudmFyIF93aXRoVGhlbWUgPSByZXF1aXJlKCcuL2hvYy93aXRoVGhlbWUnKTtcblxudmFyIF93aXRoVGhlbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFRoZW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogSW5zdGFudGlhdGUgc2luZ2xldG9ucyAqL1xuXG5cbi8qIEltcG9ydCBjb21wb25lbnRzICovXG5cblxuLyogSW1wb3J0IHNpbmdsZXRvbiBjb25zdHJ1Y3RvcnMgKi9cbnZhciBrZXlmcmFtZXMgPSAoMCwgX2tleWZyYW1lczMuZGVmYXVsdCkoX2dlbmVyYXRlQWxwaGFiZXRpY05hbWUyLmRlZmF1bHQpO1xuXG4vKiBJbXBvcnQgSGlnaGVyIE9yZGVyIENvbXBvbmVudHMgKi9cblxuXG4vKiBJbXBvcnQgc2luZ2xldG9ucyAqL1xuXG52YXIgc3R5bGVkID0gKDAsIF9zdHlsZWQzLmRlZmF1bHQpKCgwLCBfU3R5bGVkQ29tcG9uZW50Mi5kZWZhdWx0KSgoMCwgX0NvbXBvbmVudFN0eWxlMy5kZWZhdWx0KShfZ2VuZXJhdGVBbHBoYWJldGljTmFtZTIuZGVmYXVsdCkpKTtcblxuLyogRXhwb3J0IGV2ZXJ5dGhpbmcgKi9cbmV4cG9ydHMuZGVmYXVsdCA9IHN0eWxlZDtcbmV4cG9ydHMuY3NzID0gX2NzczIuZGVmYXVsdDtcbmV4cG9ydHMua2V5ZnJhbWVzID0ga2V5ZnJhbWVzO1xuZXhwb3J0cy5pbmplY3RHbG9iYWwgPSBfaW5qZWN0R2xvYmFsMi5kZWZhdWx0O1xuZXhwb3J0cy5UaGVtZVByb3ZpZGVyID0gX1RoZW1lUHJvdmlkZXIyLmRlZmF1bHQ7XG5leHBvcnRzLndpdGhUaGVtZSA9IF93aXRoVGhlbWUyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDE0IDE2IiwidmFyIEVOVElUSUVTID0gW1snQWFjdXRlJywgWzE5M11dLCBbJ2FhY3V0ZScsIFsyMjVdXSwgWydBYnJldmUnLCBbMjU4XV0sIFsnYWJyZXZlJywgWzI1OV1dLCBbJ2FjJywgWzg3NjZdXSwgWydhY2QnLCBbODc2N11dLCBbJ2FjRScsIFs4NzY2LCA4MTldXSwgWydBY2lyYycsIFsxOTRdXSwgWydhY2lyYycsIFsyMjZdXSwgWydhY3V0ZScsIFsxODBdXSwgWydBY3knLCBbMTA0MF1dLCBbJ2FjeScsIFsxMDcyXV0sIFsnQUVsaWcnLCBbMTk4XV0sIFsnYWVsaWcnLCBbMjMwXV0sIFsnYWYnLCBbODI4OV1dLCBbJ0FmcicsIFsxMjAwNjhdXSwgWydhZnInLCBbMTIwMDk0XV0sIFsnQWdyYXZlJywgWzE5Ml1dLCBbJ2FncmF2ZScsIFsyMjRdXSwgWydhbGVmc3ltJywgWzg1MDFdXSwgWydhbGVwaCcsIFs4NTAxXV0sIFsnQWxwaGEnLCBbOTEzXV0sIFsnYWxwaGEnLCBbOTQ1XV0sIFsnQW1hY3InLCBbMjU2XV0sIFsnYW1hY3InLCBbMjU3XV0sIFsnYW1hbGcnLCBbMTA4MTVdXSwgWydhbXAnLCBbMzhdXSwgWydBTVAnLCBbMzhdXSwgWydhbmRhbmQnLCBbMTA4MzddXSwgWydBbmQnLCBbMTA4MzVdXSwgWydhbmQnLCBbODc0M11dLCBbJ2FuZGQnLCBbMTA4NDRdXSwgWydhbmRzbG9wZScsIFsxMDg0MF1dLCBbJ2FuZHYnLCBbMTA4NDJdXSwgWydhbmcnLCBbODczNl1dLCBbJ2FuZ2UnLCBbMTA2NjBdXSwgWydhbmdsZScsIFs4NzM2XV0sIFsnYW5nbXNkYWEnLCBbMTA2NjRdXSwgWydhbmdtc2RhYicsIFsxMDY2NV1dLCBbJ2FuZ21zZGFjJywgWzEwNjY2XV0sIFsnYW5nbXNkYWQnLCBbMTA2NjddXSwgWydhbmdtc2RhZScsIFsxMDY2OF1dLCBbJ2FuZ21zZGFmJywgWzEwNjY5XV0sIFsnYW5nbXNkYWcnLCBbMTA2NzBdXSwgWydhbmdtc2RhaCcsIFsxMDY3MV1dLCBbJ2FuZ21zZCcsIFs4NzM3XV0sIFsnYW5ncnQnLCBbODczNV1dLCBbJ2FuZ3J0dmInLCBbODg5NF1dLCBbJ2FuZ3J0dmJkJywgWzEwNjUzXV0sIFsnYW5nc3BoJywgWzg3MzhdXSwgWydhbmdzdCcsIFsxOTddXSwgWydhbmd6YXJyJywgWzkwODRdXSwgWydBb2dvbicsIFsyNjBdXSwgWydhb2dvbicsIFsyNjFdXSwgWydBb3BmJywgWzEyMDEyMF1dLCBbJ2FvcGYnLCBbMTIwMTQ2XV0sIFsnYXBhY2lyJywgWzEwODYzXV0sIFsnYXAnLCBbODc3Nl1dLCBbJ2FwRScsIFsxMDg2NF1dLCBbJ2FwZScsIFs4Nzc4XV0sIFsnYXBpZCcsIFs4Nzc5XV0sIFsnYXBvcycsIFszOV1dLCBbJ0FwcGx5RnVuY3Rpb24nLCBbODI4OV1dLCBbJ2FwcHJveCcsIFs4Nzc2XV0sIFsnYXBwcm94ZXEnLCBbODc3OF1dLCBbJ0FyaW5nJywgWzE5N11dLCBbJ2FyaW5nJywgWzIyOV1dLCBbJ0FzY3InLCBbMTE5OTY0XV0sIFsnYXNjcicsIFsxMTk5OTBdXSwgWydBc3NpZ24nLCBbODc4OF1dLCBbJ2FzdCcsIFs0Ml1dLCBbJ2FzeW1wJywgWzg3NzZdXSwgWydhc3ltcGVxJywgWzg3ODFdXSwgWydBdGlsZGUnLCBbMTk1XV0sIFsnYXRpbGRlJywgWzIyN11dLCBbJ0F1bWwnLCBbMTk2XV0sIFsnYXVtbCcsIFsyMjhdXSwgWydhd2NvbmludCcsIFs4NzU1XV0sIFsnYXdpbnQnLCBbMTA3NjldXSwgWydiYWNrY29uZycsIFs4NzgwXV0sIFsnYmFja2Vwc2lsb24nLCBbMTAxNF1dLCBbJ2JhY2twcmltZScsIFs4MjQ1XV0sIFsnYmFja3NpbScsIFs4NzY1XV0sIFsnYmFja3NpbWVxJywgWzg5MDldXSwgWydCYWNrc2xhc2gnLCBbODcyNl1dLCBbJ0JhcnYnLCBbMTA5ODNdXSwgWydiYXJ2ZWUnLCBbODg5M11dLCBbJ2JhcndlZCcsIFs4OTY1XV0sIFsnQmFyd2VkJywgWzg5NjZdXSwgWydiYXJ3ZWRnZScsIFs4OTY1XV0sIFsnYmJyaycsIFs5MTQxXV0sIFsnYmJya3RicmsnLCBbOTE0Ml1dLCBbJ2Jjb25nJywgWzg3ODBdXSwgWydCY3knLCBbMTA0MV1dLCBbJ2JjeScsIFsxMDczXV0sIFsnYmRxdW8nLCBbODIyMl1dLCBbJ2JlY2F1cycsIFs4NzU3XV0sIFsnYmVjYXVzZScsIFs4NzU3XV0sIFsnQmVjYXVzZScsIFs4NzU3XV0sIFsnYmVtcHR5dicsIFsxMDY3Ml1dLCBbJ2JlcHNpJywgWzEwMTRdXSwgWydiZXJub3UnLCBbODQ5Ml1dLCBbJ0Jlcm5vdWxsaXMnLCBbODQ5Ml1dLCBbJ0JldGEnLCBbOTE0XV0sIFsnYmV0YScsIFs5NDZdXSwgWydiZXRoJywgWzg1MDJdXSwgWydiZXR3ZWVuJywgWzg4MTJdXSwgWydCZnInLCBbMTIwMDY5XV0sIFsnYmZyJywgWzEyMDA5NV1dLCBbJ2JpZ2NhcCcsIFs4ODk4XV0sIFsnYmlnY2lyYycsIFs5NzExXV0sIFsnYmlnY3VwJywgWzg4OTldXSwgWydiaWdvZG90JywgWzEwNzUyXV0sIFsnYmlnb3BsdXMnLCBbMTA3NTNdXSwgWydiaWdvdGltZXMnLCBbMTA3NTRdXSwgWydiaWdzcWN1cCcsIFsxMDc1OF1dLCBbJ2JpZ3N0YXInLCBbOTczM11dLCBbJ2JpZ3RyaWFuZ2xlZG93bicsIFs5NjYxXV0sIFsnYmlndHJpYW5nbGV1cCcsIFs5NjUxXV0sIFsnYmlndXBsdXMnLCBbMTA3NTZdXSwgWydiaWd2ZWUnLCBbODg5N11dLCBbJ2JpZ3dlZGdlJywgWzg4OTZdXSwgWydia2Fyb3cnLCBbMTA1MDldXSwgWydibGFja2xvemVuZ2UnLCBbMTA3MzFdXSwgWydibGFja3NxdWFyZScsIFs5NjQyXV0sIFsnYmxhY2t0cmlhbmdsZScsIFs5NjUyXV0sIFsnYmxhY2t0cmlhbmdsZWRvd24nLCBbOTY2Ml1dLCBbJ2JsYWNrdHJpYW5nbGVsZWZ0JywgWzk2NjZdXSwgWydibGFja3RyaWFuZ2xlcmlnaHQnLCBbOTY1Nl1dLCBbJ2JsYW5rJywgWzkyNTFdXSwgWydibGsxMicsIFs5NjE4XV0sIFsnYmxrMTQnLCBbOTYxN11dLCBbJ2JsazM0JywgWzk2MTldXSwgWydibG9jaycsIFs5NjA4XV0sIFsnYm5lJywgWzYxLCA4NDIxXV0sIFsnYm5lcXVpdicsIFs4ODAxLCA4NDIxXV0sIFsnYk5vdCcsIFsxMDk4OV1dLCBbJ2Jub3QnLCBbODk3Nl1dLCBbJ0JvcGYnLCBbMTIwMTIxXV0sIFsnYm9wZicsIFsxMjAxNDddXSwgWydib3QnLCBbODg2OV1dLCBbJ2JvdHRvbScsIFs4ODY5XV0sIFsnYm93dGllJywgWzg5MDRdXSwgWydib3hib3gnLCBbMTA2OTddXSwgWydib3hkbCcsIFs5NDg4XV0sIFsnYm94ZEwnLCBbOTU1N11dLCBbJ2JveERsJywgWzk1NThdXSwgWydib3hETCcsIFs5NTU5XV0sIFsnYm94ZHInLCBbOTQ4NF1dLCBbJ2JveGRSJywgWzk1NTRdXSwgWydib3hEcicsIFs5NTU1XV0sIFsnYm94RFInLCBbOTU1Nl1dLCBbJ2JveGgnLCBbOTQ3Ml1dLCBbJ2JveEgnLCBbOTU1Ml1dLCBbJ2JveGhkJywgWzk1MTZdXSwgWydib3hIZCcsIFs5NTcyXV0sIFsnYm94aEQnLCBbOTU3M11dLCBbJ2JveEhEJywgWzk1NzRdXSwgWydib3hodScsIFs5NTI0XV0sIFsnYm94SHUnLCBbOTU3NV1dLCBbJ2JveGhVJywgWzk1NzZdXSwgWydib3hIVScsIFs5NTc3XV0sIFsnYm94bWludXMnLCBbODg2M11dLCBbJ2JveHBsdXMnLCBbODg2Ml1dLCBbJ2JveHRpbWVzJywgWzg4NjRdXSwgWydib3h1bCcsIFs5NDk2XV0sIFsnYm94dUwnLCBbOTU2M11dLCBbJ2JveFVsJywgWzk1NjRdXSwgWydib3hVTCcsIFs5NTY1XV0sIFsnYm94dXInLCBbOTQ5Ml1dLCBbJ2JveHVSJywgWzk1NjBdXSwgWydib3hVcicsIFs5NTYxXV0sIFsnYm94VVInLCBbOTU2Ml1dLCBbJ2JveHYnLCBbOTQ3NF1dLCBbJ2JveFYnLCBbOTU1M11dLCBbJ2JveHZoJywgWzk1MzJdXSwgWydib3h2SCcsIFs5NTc4XV0sIFsnYm94VmgnLCBbOTU3OV1dLCBbJ2JveFZIJywgWzk1ODBdXSwgWydib3h2bCcsIFs5NTA4XV0sIFsnYm94dkwnLCBbOTU2OV1dLCBbJ2JveFZsJywgWzk1NzBdXSwgWydib3hWTCcsIFs5NTcxXV0sIFsnYm94dnInLCBbOTUwMF1dLCBbJ2JveHZSJywgWzk1NjZdXSwgWydib3hWcicsIFs5NTY3XV0sIFsnYm94VlInLCBbOTU2OF1dLCBbJ2JwcmltZScsIFs4MjQ1XV0sIFsnYnJldmUnLCBbNzI4XV0sIFsnQnJldmUnLCBbNzI4XV0sIFsnYnJ2YmFyJywgWzE2Nl1dLCBbJ2JzY3InLCBbMTE5OTkxXV0sIFsnQnNjcicsIFs4NDkyXV0sIFsnYnNlbWknLCBbODI3MV1dLCBbJ2JzaW0nLCBbODc2NV1dLCBbJ2JzaW1lJywgWzg5MDldXSwgWydic29sYicsIFsxMDY5M11dLCBbJ2Jzb2wnLCBbOTJdXSwgWydic29saHN1YicsIFsxMDE4NF1dLCBbJ2J1bGwnLCBbODIyNl1dLCBbJ2J1bGxldCcsIFs4MjI2XV0sIFsnYnVtcCcsIFs4NzgyXV0sIFsnYnVtcEUnLCBbMTA5MjZdXSwgWydidW1wZScsIFs4NzgzXV0sIFsnQnVtcGVxJywgWzg3ODJdXSwgWydidW1wZXEnLCBbODc4M11dLCBbJ0NhY3V0ZScsIFsyNjJdXSwgWydjYWN1dGUnLCBbMjYzXV0sIFsnY2FwYW5kJywgWzEwODIwXV0sIFsnY2FwYnJjdXAnLCBbMTA4MjVdXSwgWydjYXBjYXAnLCBbMTA4MjddXSwgWydjYXAnLCBbODc0NV1dLCBbJ0NhcCcsIFs4OTE0XV0sIFsnY2FwY3VwJywgWzEwODIzXV0sIFsnY2FwZG90JywgWzEwODE2XV0sIFsnQ2FwaXRhbERpZmZlcmVudGlhbEQnLCBbODUxN11dLCBbJ2NhcHMnLCBbODc0NSwgNjUwMjRdXSwgWydjYXJldCcsIFs4MjU3XV0sIFsnY2Fyb24nLCBbNzExXV0sIFsnQ2F5bGV5cycsIFs4NDkzXV0sIFsnY2NhcHMnLCBbMTA4MjldXSwgWydDY2Fyb24nLCBbMjY4XV0sIFsnY2Nhcm9uJywgWzI2OV1dLCBbJ0NjZWRpbCcsIFsxOTldXSwgWydjY2VkaWwnLCBbMjMxXV0sIFsnQ2NpcmMnLCBbMjY0XV0sIFsnY2NpcmMnLCBbMjY1XV0sIFsnQ2NvbmludCcsIFs4NzUyXV0sIFsnY2N1cHMnLCBbMTA4MjhdXSwgWydjY3Vwc3NtJywgWzEwODMyXV0sIFsnQ2RvdCcsIFsyNjZdXSwgWydjZG90JywgWzI2N11dLCBbJ2NlZGlsJywgWzE4NF1dLCBbJ0NlZGlsbGEnLCBbMTg0XV0sIFsnY2VtcHR5dicsIFsxMDY3NF1dLCBbJ2NlbnQnLCBbMTYyXV0sIFsnY2VudGVyZG90JywgWzE4M11dLCBbJ0NlbnRlckRvdCcsIFsxODNdXSwgWydjZnInLCBbMTIwMDk2XV0sIFsnQ2ZyJywgWzg0OTNdXSwgWydDSGN5JywgWzEwNjNdXSwgWydjaGN5JywgWzEwOTVdXSwgWydjaGVjaycsIFsxMDAwM11dLCBbJ2NoZWNrbWFyaycsIFsxMDAwM11dLCBbJ0NoaScsIFs5MzVdXSwgWydjaGknLCBbOTY3XV0sIFsnY2lyYycsIFs3MTBdXSwgWydjaXJjZXEnLCBbODc5MV1dLCBbJ2NpcmNsZWFycm93bGVmdCcsIFs4NjM0XV0sIFsnY2lyY2xlYXJyb3dyaWdodCcsIFs4NjM1XV0sIFsnY2lyY2xlZGFzdCcsIFs4ODU5XV0sIFsnY2lyY2xlZGNpcmMnLCBbODg1OF1dLCBbJ2NpcmNsZWRkYXNoJywgWzg4NjFdXSwgWydDaXJjbGVEb3QnLCBbODg1N11dLCBbJ2NpcmNsZWRSJywgWzE3NF1dLCBbJ2NpcmNsZWRTJywgWzk0MTZdXSwgWydDaXJjbGVNaW51cycsIFs4ODU0XV0sIFsnQ2lyY2xlUGx1cycsIFs4ODUzXV0sIFsnQ2lyY2xlVGltZXMnLCBbODg1NV1dLCBbJ2NpcicsIFs5Njc1XV0sIFsnY2lyRScsIFsxMDY5MV1dLCBbJ2NpcmUnLCBbODc5MV1dLCBbJ2NpcmZuaW50JywgWzEwNzY4XV0sIFsnY2lybWlkJywgWzEwOTkxXV0sIFsnY2lyc2NpcicsIFsxMDY5MF1dLCBbJ0Nsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU0XV0sIFsnQ2xvc2VDdXJseURvdWJsZVF1b3RlJywgWzgyMjFdXSwgWydDbG9zZUN1cmx5UXVvdGUnLCBbODIxN11dLCBbJ2NsdWJzJywgWzk4MjddXSwgWydjbHVic3VpdCcsIFs5ODI3XV0sIFsnY29sb24nLCBbNThdXSwgWydDb2xvbicsIFs4NzU5XV0sIFsnQ29sb25lJywgWzEwODY4XV0sIFsnY29sb25lJywgWzg3ODhdXSwgWydjb2xvbmVxJywgWzg3ODhdXSwgWydjb21tYScsIFs0NF1dLCBbJ2NvbW1hdCcsIFs2NF1dLCBbJ2NvbXAnLCBbODcwNV1dLCBbJ2NvbXBmbicsIFs4NzI4XV0sIFsnY29tcGxlbWVudCcsIFs4NzA1XV0sIFsnY29tcGxleGVzJywgWzg0NTBdXSwgWydjb25nJywgWzg3NzNdXSwgWydjb25nZG90JywgWzEwODYxXV0sIFsnQ29uZ3J1ZW50JywgWzg4MDFdXSwgWydjb25pbnQnLCBbODc1MF1dLCBbJ0NvbmludCcsIFs4NzUxXV0sIFsnQ29udG91ckludGVncmFsJywgWzg3NTBdXSwgWydjb3BmJywgWzEyMDE0OF1dLCBbJ0NvcGYnLCBbODQ1MF1dLCBbJ2NvcHJvZCcsIFs4NzIwXV0sIFsnQ29wcm9kdWN0JywgWzg3MjBdXSwgWydjb3B5JywgWzE2OV1dLCBbJ0NPUFknLCBbMTY5XV0sIFsnY29weXNyJywgWzg0NzFdXSwgWydDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsJywgWzg3NTVdXSwgWydjcmFycicsIFs4NjI5XV0sIFsnY3Jvc3MnLCBbMTAwMDddXSwgWydDcm9zcycsIFsxMDc5OV1dLCBbJ0NzY3InLCBbMTE5OTY2XV0sIFsnY3NjcicsIFsxMTk5OTJdXSwgWydjc3ViJywgWzEwOTU5XV0sIFsnY3N1YmUnLCBbMTA5NjFdXSwgWydjc3VwJywgWzEwOTYwXV0sIFsnY3N1cGUnLCBbMTA5NjJdXSwgWydjdGRvdCcsIFs4OTQzXV0sIFsnY3VkYXJybCcsIFsxMDU1Ml1dLCBbJ2N1ZGFycnInLCBbMTA1NDldXSwgWydjdWVwcicsIFs4OTI2XV0sIFsnY3Vlc2MnLCBbODkyN11dLCBbJ2N1bGFycicsIFs4NjMwXV0sIFsnY3VsYXJycCcsIFsxMDU1N11dLCBbJ2N1cGJyY2FwJywgWzEwODI0XV0sIFsnY3VwY2FwJywgWzEwODIyXV0sIFsnQ3VwQ2FwJywgWzg3ODFdXSwgWydjdXAnLCBbODc0Nl1dLCBbJ0N1cCcsIFs4OTE1XV0sIFsnY3VwY3VwJywgWzEwODI2XV0sIFsnY3VwZG90JywgWzg4NDVdXSwgWydjdXBvcicsIFsxMDgyMV1dLCBbJ2N1cHMnLCBbODc0NiwgNjUwMjRdXSwgWydjdXJhcnInLCBbODYzMV1dLCBbJ2N1cmFycm0nLCBbMTA1NTZdXSwgWydjdXJseWVxcHJlYycsIFs4OTI2XV0sIFsnY3VybHllcXN1Y2MnLCBbODkyN11dLCBbJ2N1cmx5dmVlJywgWzg5MTBdXSwgWydjdXJseXdlZGdlJywgWzg5MTFdXSwgWydjdXJyZW4nLCBbMTY0XV0sIFsnY3VydmVhcnJvd2xlZnQnLCBbODYzMF1dLCBbJ2N1cnZlYXJyb3dyaWdodCcsIFs4NjMxXV0sIFsnY3V2ZWUnLCBbODkxMF1dLCBbJ2N1d2VkJywgWzg5MTFdXSwgWydjd2NvbmludCcsIFs4NzU0XV0sIFsnY3dpbnQnLCBbODc1M11dLCBbJ2N5bGN0eScsIFs5MDA1XV0sIFsnZGFnZ2VyJywgWzgyMjRdXSwgWydEYWdnZXInLCBbODIyNV1dLCBbJ2RhbGV0aCcsIFs4NTA0XV0sIFsnZGFycicsIFs4NTk1XV0sIFsnRGFycicsIFs4NjA5XV0sIFsnZEFycicsIFs4NjU5XV0sIFsnZGFzaCcsIFs4MjA4XV0sIFsnRGFzaHYnLCBbMTA5ODBdXSwgWydkYXNodicsIFs4ODY3XV0sIFsnZGJrYXJvdycsIFsxMDUxMV1dLCBbJ2RibGFjJywgWzczM11dLCBbJ0RjYXJvbicsIFsyNzBdXSwgWydkY2Fyb24nLCBbMjcxXV0sIFsnRGN5JywgWzEwNDRdXSwgWydkY3knLCBbMTA3Nl1dLCBbJ2RkYWdnZXInLCBbODIyNV1dLCBbJ2RkYXJyJywgWzg2NTBdXSwgWydERCcsIFs4NTE3XV0sIFsnZGQnLCBbODUxOF1dLCBbJ0REb3RyYWhkJywgWzEwNTEzXV0sIFsnZGRvdHNlcScsIFsxMDg3MV1dLCBbJ2RlZycsIFsxNzZdXSwgWydEZWwnLCBbODcxMV1dLCBbJ0RlbHRhJywgWzkxNl1dLCBbJ2RlbHRhJywgWzk0OF1dLCBbJ2RlbXB0eXYnLCBbMTA2NzNdXSwgWydkZmlzaHQnLCBbMTA2MjNdXSwgWydEZnInLCBbMTIwMDcxXV0sIFsnZGZyJywgWzEyMDA5N11dLCBbJ2RIYXInLCBbMTA1OTddXSwgWydkaGFybCcsIFs4NjQzXV0sIFsnZGhhcnInLCBbODY0Ml1dLCBbJ0RpYWNyaXRpY2FsQWN1dGUnLCBbMTgwXV0sIFsnRGlhY3JpdGljYWxEb3QnLCBbNzI5XV0sIFsnRGlhY3JpdGljYWxEb3VibGVBY3V0ZScsIFs3MzNdXSwgWydEaWFjcml0aWNhbEdyYXZlJywgWzk2XV0sIFsnRGlhY3JpdGljYWxUaWxkZScsIFs3MzJdXSwgWydkaWFtJywgWzg5MDBdXSwgWydkaWFtb25kJywgWzg5MDBdXSwgWydEaWFtb25kJywgWzg5MDBdXSwgWydkaWFtb25kc3VpdCcsIFs5ODMwXV0sIFsnZGlhbXMnLCBbOTgzMF1dLCBbJ2RpZScsIFsxNjhdXSwgWydEaWZmZXJlbnRpYWxEJywgWzg1MThdXSwgWydkaWdhbW1hJywgWzk4OV1dLCBbJ2Rpc2luJywgWzg5NDZdXSwgWydkaXYnLCBbMjQ3XV0sIFsnZGl2aWRlJywgWzI0N11dLCBbJ2RpdmlkZW9udGltZXMnLCBbODkwM11dLCBbJ2Rpdm9ueCcsIFs4OTAzXV0sIFsnREpjeScsIFsxMDI2XV0sIFsnZGpjeScsIFsxMTA2XV0sIFsnZGxjb3JuJywgWzg5OTBdXSwgWydkbGNyb3AnLCBbODk3M11dLCBbJ2RvbGxhcicsIFszNl1dLCBbJ0RvcGYnLCBbMTIwMTIzXV0sIFsnZG9wZicsIFsxMjAxNDldXSwgWydEb3QnLCBbMTY4XV0sIFsnZG90JywgWzcyOV1dLCBbJ0RvdERvdCcsIFs4NDEyXV0sIFsnZG90ZXEnLCBbODc4NF1dLCBbJ2RvdGVxZG90JywgWzg3ODVdXSwgWydEb3RFcXVhbCcsIFs4Nzg0XV0sIFsnZG90bWludXMnLCBbODc2MF1dLCBbJ2RvdHBsdXMnLCBbODcyNF1dLCBbJ2RvdHNxdWFyZScsIFs4ODY1XV0sIFsnZG91YmxlYmFyd2VkZ2UnLCBbODk2Nl1dLCBbJ0RvdWJsZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzUxXV0sIFsnRG91YmxlRG90JywgWzE2OF1dLCBbJ0RvdWJsZURvd25BcnJvdycsIFs4NjU5XV0sIFsnRG91YmxlTGVmdEFycm93JywgWzg2NTZdXSwgWydEb3VibGVMZWZ0UmlnaHRBcnJvdycsIFs4NjYwXV0sIFsnRG91YmxlTGVmdFRlZScsIFsxMDk4MF1dLCBbJ0RvdWJsZUxvbmdMZWZ0QXJyb3cnLCBbMTAyMzJdXSwgWydEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3cnLCBbMTAyMzRdXSwgWydEb3VibGVMb25nUmlnaHRBcnJvdycsIFsxMDIzM11dLCBbJ0RvdWJsZVJpZ2h0QXJyb3cnLCBbODY1OF1dLCBbJ0RvdWJsZVJpZ2h0VGVlJywgWzg4NzJdXSwgWydEb3VibGVVcEFycm93JywgWzg2NTddXSwgWydEb3VibGVVcERvd25BcnJvdycsIFs4NjYxXV0sIFsnRG91YmxlVmVydGljYWxCYXInLCBbODc0MV1dLCBbJ0Rvd25BcnJvd0JhcicsIFsxMDUxNV1dLCBbJ2Rvd25hcnJvdycsIFs4NTk1XV0sIFsnRG93bkFycm93JywgWzg1OTVdXSwgWydEb3duYXJyb3cnLCBbODY1OV1dLCBbJ0Rvd25BcnJvd1VwQXJyb3cnLCBbODY5M11dLCBbJ0Rvd25CcmV2ZScsIFs3ODVdXSwgWydkb3duZG93bmFycm93cycsIFs4NjUwXV0sIFsnZG93bmhhcnBvb25sZWZ0JywgWzg2NDNdXSwgWydkb3duaGFycG9vbnJpZ2h0JywgWzg2NDJdXSwgWydEb3duTGVmdFJpZ2h0VmVjdG9yJywgWzEwNTc2XV0sIFsnRG93bkxlZnRUZWVWZWN0b3InLCBbMTA1OTBdXSwgWydEb3duTGVmdFZlY3RvckJhcicsIFsxMDU4Ml1dLCBbJ0Rvd25MZWZ0VmVjdG9yJywgWzg2MzddXSwgWydEb3duUmlnaHRUZWVWZWN0b3InLCBbMTA1OTFdXSwgWydEb3duUmlnaHRWZWN0b3JCYXInLCBbMTA1ODNdXSwgWydEb3duUmlnaHRWZWN0b3InLCBbODY0MV1dLCBbJ0Rvd25UZWVBcnJvdycsIFs4NjE1XV0sIFsnRG93blRlZScsIFs4ODY4XV0sIFsnZHJia2Fyb3cnLCBbMTA1MTJdXSwgWydkcmNvcm4nLCBbODk5MV1dLCBbJ2RyY3JvcCcsIFs4OTcyXV0sIFsnRHNjcicsIFsxMTk5NjddXSwgWydkc2NyJywgWzExOTk5M11dLCBbJ0RTY3knLCBbMTAyOV1dLCBbJ2RzY3knLCBbMTEwOV1dLCBbJ2Rzb2wnLCBbMTA3NDJdXSwgWydEc3Ryb2snLCBbMjcyXV0sIFsnZHN0cm9rJywgWzI3M11dLCBbJ2R0ZG90JywgWzg5NDVdXSwgWydkdHJpJywgWzk2NjNdXSwgWydkdHJpZicsIFs5NjYyXV0sIFsnZHVhcnInLCBbODY5M11dLCBbJ2R1aGFyJywgWzEwNjA3XV0sIFsnZHdhbmdsZScsIFsxMDY2Ml1dLCBbJ0RaY3knLCBbMTAzOV1dLCBbJ2R6Y3knLCBbMTExOV1dLCBbJ2R6aWdyYXJyJywgWzEwMjM5XV0sIFsnRWFjdXRlJywgWzIwMV1dLCBbJ2VhY3V0ZScsIFsyMzNdXSwgWydlYXN0ZXInLCBbMTA4NjJdXSwgWydFY2Fyb24nLCBbMjgyXV0sIFsnZWNhcm9uJywgWzI4M11dLCBbJ0VjaXJjJywgWzIwMl1dLCBbJ2VjaXJjJywgWzIzNF1dLCBbJ2VjaXInLCBbODc5MF1dLCBbJ2Vjb2xvbicsIFs4Nzg5XV0sIFsnRWN5JywgWzEwNjldXSwgWydlY3knLCBbMTEwMV1dLCBbJ2VERG90JywgWzEwODcxXV0sIFsnRWRvdCcsIFsyNzhdXSwgWydlZG90JywgWzI3OV1dLCBbJ2VEb3QnLCBbODc4NV1dLCBbJ2VlJywgWzg1MTldXSwgWydlZkRvdCcsIFs4Nzg2XV0sIFsnRWZyJywgWzEyMDA3Ml1dLCBbJ2VmcicsIFsxMjAwOThdXSwgWydlZycsIFsxMDkwNl1dLCBbJ0VncmF2ZScsIFsyMDBdXSwgWydlZ3JhdmUnLCBbMjMyXV0sIFsnZWdzJywgWzEwOTAyXV0sIFsnZWdzZG90JywgWzEwOTA0XV0sIFsnZWwnLCBbMTA5MDVdXSwgWydFbGVtZW50JywgWzg3MTJdXSwgWydlbGludGVycycsIFs5MTkxXV0sIFsnZWxsJywgWzg0NjddXSwgWydlbHMnLCBbMTA5MDFdXSwgWydlbHNkb3QnLCBbMTA5MDNdXSwgWydFbWFjcicsIFsyNzRdXSwgWydlbWFjcicsIFsyNzVdXSwgWydlbXB0eScsIFs4NzA5XV0sIFsnZW1wdHlzZXQnLCBbODcwOV1dLCBbJ0VtcHR5U21hbGxTcXVhcmUnLCBbOTcyM11dLCBbJ2VtcHR5dicsIFs4NzA5XV0sIFsnRW1wdHlWZXJ5U21hbGxTcXVhcmUnLCBbOTY0M11dLCBbJ2Vtc3AxMycsIFs4MTk2XV0sIFsnZW1zcDE0JywgWzgxOTddXSwgWydlbXNwJywgWzgxOTVdXSwgWydFTkcnLCBbMzMwXV0sIFsnZW5nJywgWzMzMV1dLCBbJ2Vuc3AnLCBbODE5NF1dLCBbJ0VvZ29uJywgWzI4MF1dLCBbJ2VvZ29uJywgWzI4MV1dLCBbJ0VvcGYnLCBbMTIwMTI0XV0sIFsnZW9wZicsIFsxMjAxNTBdXSwgWydlcGFyJywgWzg5MTddXSwgWydlcGFyc2wnLCBbMTA3MjNdXSwgWydlcGx1cycsIFsxMDg2NV1dLCBbJ2Vwc2knLCBbOTQ5XV0sIFsnRXBzaWxvbicsIFs5MTddXSwgWydlcHNpbG9uJywgWzk0OV1dLCBbJ2Vwc2l2JywgWzEwMTNdXSwgWydlcWNpcmMnLCBbODc5MF1dLCBbJ2VxY29sb24nLCBbODc4OV1dLCBbJ2Vxc2ltJywgWzg3NzBdXSwgWydlcXNsYW50Z3RyJywgWzEwOTAyXV0sIFsnZXFzbGFudGxlc3MnLCBbMTA5MDFdXSwgWydFcXVhbCcsIFsxMDg2OV1dLCBbJ2VxdWFscycsIFs2MV1dLCBbJ0VxdWFsVGlsZGUnLCBbODc3MF1dLCBbJ2VxdWVzdCcsIFs4Nzk5XV0sIFsnRXF1aWxpYnJpdW0nLCBbODY1Ml1dLCBbJ2VxdWl2JywgWzg4MDFdXSwgWydlcXVpdkREJywgWzEwODcyXV0sIFsnZXF2cGFyc2wnLCBbMTA3MjVdXSwgWydlcmFycicsIFsxMDYwOV1dLCBbJ2VyRG90JywgWzg3ODddXSwgWydlc2NyJywgWzg0OTVdXSwgWydFc2NyJywgWzg0OTZdXSwgWydlc2RvdCcsIFs4Nzg0XV0sIFsnRXNpbScsIFsxMDg2N11dLCBbJ2VzaW0nLCBbODc3MF1dLCBbJ0V0YScsIFs5MTldXSwgWydldGEnLCBbOTUxXV0sIFsnRVRIJywgWzIwOF1dLCBbJ2V0aCcsIFsyNDBdXSwgWydFdW1sJywgWzIwM11dLCBbJ2V1bWwnLCBbMjM1XV0sIFsnZXVybycsIFs4MzY0XV0sIFsnZXhjbCcsIFszM11dLCBbJ2V4aXN0JywgWzg3MDddXSwgWydFeGlzdHMnLCBbODcwN11dLCBbJ2V4cGVjdGF0aW9uJywgWzg0OTZdXSwgWydleHBvbmVudGlhbGUnLCBbODUxOV1dLCBbJ0V4cG9uZW50aWFsRScsIFs4NTE5XV0sIFsnZmFsbGluZ2RvdHNlcScsIFs4Nzg2XV0sIFsnRmN5JywgWzEwNjBdXSwgWydmY3knLCBbMTA5Ml1dLCBbJ2ZlbWFsZScsIFs5NzkyXV0sIFsnZmZpbGlnJywgWzY0MjU5XV0sIFsnZmZsaWcnLCBbNjQyNTZdXSwgWydmZmxsaWcnLCBbNjQyNjBdXSwgWydGZnInLCBbMTIwMDczXV0sIFsnZmZyJywgWzEyMDA5OV1dLCBbJ2ZpbGlnJywgWzY0MjU3XV0sIFsnRmlsbGVkU21hbGxTcXVhcmUnLCBbOTcyNF1dLCBbJ0ZpbGxlZFZlcnlTbWFsbFNxdWFyZScsIFs5NjQyXV0sIFsnZmpsaWcnLCBbMTAyLCAxMDZdXSwgWydmbGF0JywgWzk4MzddXSwgWydmbGxpZycsIFs2NDI1OF1dLCBbJ2ZsdG5zJywgWzk2NDldXSwgWydmbm9mJywgWzQwMl1dLCBbJ0ZvcGYnLCBbMTIwMTI1XV0sIFsnZm9wZicsIFsxMjAxNTFdXSwgWydmb3JhbGwnLCBbODcwNF1dLCBbJ0ZvckFsbCcsIFs4NzA0XV0sIFsnZm9yaycsIFs4OTE2XV0sIFsnZm9ya3YnLCBbMTA5NjldXSwgWydGb3VyaWVydHJmJywgWzg0OTddXSwgWydmcGFydGludCcsIFsxMDc2NV1dLCBbJ2ZyYWMxMicsIFsxODldXSwgWydmcmFjMTMnLCBbODUzMV1dLCBbJ2ZyYWMxNCcsIFsxODhdXSwgWydmcmFjMTUnLCBbODUzM11dLCBbJ2ZyYWMxNicsIFs4NTM3XV0sIFsnZnJhYzE4JywgWzg1MzldXSwgWydmcmFjMjMnLCBbODUzMl1dLCBbJ2ZyYWMyNScsIFs4NTM0XV0sIFsnZnJhYzM0JywgWzE5MF1dLCBbJ2ZyYWMzNScsIFs4NTM1XV0sIFsnZnJhYzM4JywgWzg1NDBdXSwgWydmcmFjNDUnLCBbODUzNl1dLCBbJ2ZyYWM1NicsIFs4NTM4XV0sIFsnZnJhYzU4JywgWzg1NDFdXSwgWydmcmFjNzgnLCBbODU0Ml1dLCBbJ2ZyYXNsJywgWzgyNjBdXSwgWydmcm93bicsIFs4OTk0XV0sIFsnZnNjcicsIFsxMTk5OTVdXSwgWydGc2NyJywgWzg0OTddXSwgWydnYWN1dGUnLCBbNTAxXV0sIFsnR2FtbWEnLCBbOTE1XV0sIFsnZ2FtbWEnLCBbOTQ3XV0sIFsnR2FtbWFkJywgWzk4OF1dLCBbJ2dhbW1hZCcsIFs5ODldXSwgWydnYXAnLCBbMTA4ODZdXSwgWydHYnJldmUnLCBbMjg2XV0sIFsnZ2JyZXZlJywgWzI4N11dLCBbJ0djZWRpbCcsIFsyOTBdXSwgWydHY2lyYycsIFsyODRdXSwgWydnY2lyYycsIFsyODVdXSwgWydHY3knLCBbMTA0M11dLCBbJ2djeScsIFsxMDc1XV0sIFsnR2RvdCcsIFsyODhdXSwgWydnZG90JywgWzI4OV1dLCBbJ2dlJywgWzg4MDVdXSwgWydnRScsIFs4ODA3XV0sIFsnZ0VsJywgWzEwODkyXV0sIFsnZ2VsJywgWzg5MjNdXSwgWydnZXEnLCBbODgwNV1dLCBbJ2dlcXEnLCBbODgwN11dLCBbJ2dlcXNsYW50JywgWzEwODc4XV0sIFsnZ2VzY2MnLCBbMTA5MjFdXSwgWydnZXMnLCBbMTA4NzhdXSwgWydnZXNkb3QnLCBbMTA4ODBdXSwgWydnZXNkb3RvJywgWzEwODgyXV0sIFsnZ2VzZG90b2wnLCBbMTA4ODRdXSwgWydnZXNsJywgWzg5MjMsIDY1MDI0XV0sIFsnZ2VzbGVzJywgWzEwOTAwXV0sIFsnR2ZyJywgWzEyMDA3NF1dLCBbJ2dmcicsIFsxMjAxMDBdXSwgWydnZycsIFs4ODExXV0sIFsnR2cnLCBbODkyMV1dLCBbJ2dnZycsIFs4OTIxXV0sIFsnZ2ltZWwnLCBbODUwM11dLCBbJ0dKY3knLCBbMTAyN11dLCBbJ2dqY3knLCBbMTEwN11dLCBbJ2dsYScsIFsxMDkxN11dLCBbJ2dsJywgWzg4MjNdXSwgWydnbEUnLCBbMTA4OThdXSwgWydnbGonLCBbMTA5MTZdXSwgWydnbmFwJywgWzEwODkwXV0sIFsnZ25hcHByb3gnLCBbMTA4OTBdXSwgWydnbmUnLCBbMTA4ODhdXSwgWydnbkUnLCBbODgwOV1dLCBbJ2duZXEnLCBbMTA4ODhdXSwgWydnbmVxcScsIFs4ODA5XV0sIFsnZ25zaW0nLCBbODkzNV1dLCBbJ0dvcGYnLCBbMTIwMTI2XV0sIFsnZ29wZicsIFsxMjAxNTJdXSwgWydncmF2ZScsIFs5Nl1dLCBbJ0dyZWF0ZXJFcXVhbCcsIFs4ODA1XV0sIFsnR3JlYXRlckVxdWFsTGVzcycsIFs4OTIzXV0sIFsnR3JlYXRlckZ1bGxFcXVhbCcsIFs4ODA3XV0sIFsnR3JlYXRlckdyZWF0ZXInLCBbMTA5MTRdXSwgWydHcmVhdGVyTGVzcycsIFs4ODIzXV0sIFsnR3JlYXRlclNsYW50RXF1YWwnLCBbMTA4NzhdXSwgWydHcmVhdGVyVGlsZGUnLCBbODgxOV1dLCBbJ0dzY3InLCBbMTE5OTcwXV0sIFsnZ3NjcicsIFs4NDU4XV0sIFsnZ3NpbScsIFs4ODE5XV0sIFsnZ3NpbWUnLCBbMTA4OTRdXSwgWydnc2ltbCcsIFsxMDg5Nl1dLCBbJ2d0Y2MnLCBbMTA5MTldXSwgWydndGNpcicsIFsxMDg3NF1dLCBbJ2d0JywgWzYyXV0sIFsnR1QnLCBbNjJdXSwgWydHdCcsIFs4ODExXV0sIFsnZ3Rkb3QnLCBbODkxOV1dLCBbJ2d0bFBhcicsIFsxMDY0NV1dLCBbJ2d0cXVlc3QnLCBbMTA4NzZdXSwgWydndHJhcHByb3gnLCBbMTA4ODZdXSwgWydndHJhcnInLCBbMTA2MTZdXSwgWydndHJkb3QnLCBbODkxOV1dLCBbJ2d0cmVxbGVzcycsIFs4OTIzXV0sIFsnZ3RyZXFxbGVzcycsIFsxMDg5Ml1dLCBbJ2d0cmxlc3MnLCBbODgyM11dLCBbJ2d0cnNpbScsIFs4ODE5XV0sIFsnZ3ZlcnRuZXFxJywgWzg4MDksIDY1MDI0XV0sIFsnZ3ZuRScsIFs4ODA5LCA2NTAyNF1dLCBbJ0hhY2VrJywgWzcxMV1dLCBbJ2hhaXJzcCcsIFs4MjAyXV0sIFsnaGFsZicsIFsxODldXSwgWydoYW1pbHQnLCBbODQ1OV1dLCBbJ0hBUkRjeScsIFsxMDY2XV0sIFsnaGFyZGN5JywgWzEwOThdXSwgWydoYXJyY2lyJywgWzEwNTY4XV0sIFsnaGFycicsIFs4NTk2XV0sIFsnaEFycicsIFs4NjYwXV0sIFsnaGFycncnLCBbODYyMV1dLCBbJ0hhdCcsIFs5NF1dLCBbJ2hiYXInLCBbODQ2M11dLCBbJ0hjaXJjJywgWzI5Ml1dLCBbJ2hjaXJjJywgWzI5M11dLCBbJ2hlYXJ0cycsIFs5ODI5XV0sIFsnaGVhcnRzdWl0JywgWzk4MjldXSwgWydoZWxsaXAnLCBbODIzMF1dLCBbJ2hlcmNvbicsIFs4ODg5XV0sIFsnaGZyJywgWzEyMDEwMV1dLCBbJ0hmcicsIFs4NDYwXV0sIFsnSGlsYmVydFNwYWNlJywgWzg0NTldXSwgWydoa3NlYXJvdycsIFsxMDUzM11dLCBbJ2hrc3dhcm93JywgWzEwNTM0XV0sIFsnaG9hcnInLCBbODcwM11dLCBbJ2hvbXRodCcsIFs4NzYzXV0sIFsnaG9va2xlZnRhcnJvdycsIFs4NjE3XV0sIFsnaG9va3JpZ2h0YXJyb3cnLCBbODYxOF1dLCBbJ2hvcGYnLCBbMTIwMTUzXV0sIFsnSG9wZicsIFs4NDYxXV0sIFsnaG9yYmFyJywgWzgyMTNdXSwgWydIb3Jpem9udGFsTGluZScsIFs5NDcyXV0sIFsnaHNjcicsIFsxMTk5OTddXSwgWydIc2NyJywgWzg0NTldXSwgWydoc2xhc2gnLCBbODQ2M11dLCBbJ0hzdHJvaycsIFsyOTRdXSwgWydoc3Ryb2snLCBbMjk1XV0sIFsnSHVtcERvd25IdW1wJywgWzg3ODJdXSwgWydIdW1wRXF1YWwnLCBbODc4M11dLCBbJ2h5YnVsbCcsIFs4MjU5XV0sIFsnaHlwaGVuJywgWzgyMDhdXSwgWydJYWN1dGUnLCBbMjA1XV0sIFsnaWFjdXRlJywgWzIzN11dLCBbJ2ljJywgWzgyOTFdXSwgWydJY2lyYycsIFsyMDZdXSwgWydpY2lyYycsIFsyMzhdXSwgWydJY3knLCBbMTA0OF1dLCBbJ2ljeScsIFsxMDgwXV0sIFsnSWRvdCcsIFszMDRdXSwgWydJRWN5JywgWzEwNDVdXSwgWydpZWN5JywgWzEwNzddXSwgWydpZXhjbCcsIFsxNjFdXSwgWydpZmYnLCBbODY2MF1dLCBbJ2lmcicsIFsxMjAxMDJdXSwgWydJZnInLCBbODQ2NV1dLCBbJ0lncmF2ZScsIFsyMDRdXSwgWydpZ3JhdmUnLCBbMjM2XV0sIFsnaWknLCBbODUyMF1dLCBbJ2lpaWludCcsIFsxMDc2NF1dLCBbJ2lpaW50JywgWzg3NDldXSwgWydpaW5maW4nLCBbMTA3MTZdXSwgWydpaW90YScsIFs4NDg5XV0sIFsnSUpsaWcnLCBbMzA2XV0sIFsnaWpsaWcnLCBbMzA3XV0sIFsnSW1hY3InLCBbMjk4XV0sIFsnaW1hY3InLCBbMjk5XV0sIFsnaW1hZ2UnLCBbODQ2NV1dLCBbJ0ltYWdpbmFyeUknLCBbODUyMF1dLCBbJ2ltYWdsaW5lJywgWzg0NjRdXSwgWydpbWFncGFydCcsIFs4NDY1XV0sIFsnaW1hdGgnLCBbMzA1XV0sIFsnSW0nLCBbODQ2NV1dLCBbJ2ltb2YnLCBbODg4N11dLCBbJ2ltcGVkJywgWzQzN11dLCBbJ0ltcGxpZXMnLCBbODY1OF1dLCBbJ2luY2FyZScsIFs4NDUzXV0sIFsnaW4nLCBbODcxMl1dLCBbJ2luZmluJywgWzg3MzRdXSwgWydpbmZpbnRpZScsIFsxMDcxN11dLCBbJ2lub2RvdCcsIFszMDVdXSwgWydpbnRjYWwnLCBbODg5MF1dLCBbJ2ludCcsIFs4NzQ3XV0sIFsnSW50JywgWzg3NDhdXSwgWydpbnRlZ2VycycsIFs4NDg0XV0sIFsnSW50ZWdyYWwnLCBbODc0N11dLCBbJ2ludGVyY2FsJywgWzg4OTBdXSwgWydJbnRlcnNlY3Rpb24nLCBbODg5OF1dLCBbJ2ludGxhcmhrJywgWzEwNzc1XV0sIFsnaW50cHJvZCcsIFsxMDgxMl1dLCBbJ0ludmlzaWJsZUNvbW1hJywgWzgyOTFdXSwgWydJbnZpc2libGVUaW1lcycsIFs4MjkwXV0sIFsnSU9jeScsIFsxMDI1XV0sIFsnaW9jeScsIFsxMTA1XV0sIFsnSW9nb24nLCBbMzAyXV0sIFsnaW9nb24nLCBbMzAzXV0sIFsnSW9wZicsIFsxMjAxMjhdXSwgWydpb3BmJywgWzEyMDE1NF1dLCBbJ0lvdGEnLCBbOTIxXV0sIFsnaW90YScsIFs5NTNdXSwgWydpcHJvZCcsIFsxMDgxMl1dLCBbJ2lxdWVzdCcsIFsxOTFdXSwgWydpc2NyJywgWzExOTk5OF1dLCBbJ0lzY3InLCBbODQ2NF1dLCBbJ2lzaW4nLCBbODcxMl1dLCBbJ2lzaW5kb3QnLCBbODk0OV1dLCBbJ2lzaW5FJywgWzg5NTNdXSwgWydpc2lucycsIFs4OTQ4XV0sIFsnaXNpbnN2JywgWzg5NDddXSwgWydpc2ludicsIFs4NzEyXV0sIFsnaXQnLCBbODI5MF1dLCBbJ0l0aWxkZScsIFsyOTZdXSwgWydpdGlsZGUnLCBbMjk3XV0sIFsnSXVrY3knLCBbMTAzMF1dLCBbJ2l1a2N5JywgWzExMTBdXSwgWydJdW1sJywgWzIwN11dLCBbJ2l1bWwnLCBbMjM5XV0sIFsnSmNpcmMnLCBbMzA4XV0sIFsnamNpcmMnLCBbMzA5XV0sIFsnSmN5JywgWzEwNDldXSwgWydqY3knLCBbMTA4MV1dLCBbJ0pmcicsIFsxMjAwNzddXSwgWydqZnInLCBbMTIwMTAzXV0sIFsnam1hdGgnLCBbNTY3XV0sIFsnSm9wZicsIFsxMjAxMjldXSwgWydqb3BmJywgWzEyMDE1NV1dLCBbJ0pzY3InLCBbMTE5OTczXV0sIFsnanNjcicsIFsxMTk5OTldXSwgWydKc2VyY3knLCBbMTAzMl1dLCBbJ2pzZXJjeScsIFsxMTEyXV0sIFsnSnVrY3knLCBbMTAyOF1dLCBbJ2p1a2N5JywgWzExMDhdXSwgWydLYXBwYScsIFs5MjJdXSwgWydrYXBwYScsIFs5NTRdXSwgWydrYXBwYXYnLCBbMTAwOF1dLCBbJ0tjZWRpbCcsIFszMTBdXSwgWydrY2VkaWwnLCBbMzExXV0sIFsnS2N5JywgWzEwNTBdXSwgWydrY3knLCBbMTA4Ml1dLCBbJ0tmcicsIFsxMjAwNzhdXSwgWydrZnInLCBbMTIwMTA0XV0sIFsna2dyZWVuJywgWzMxMl1dLCBbJ0tIY3knLCBbMTA2MV1dLCBbJ2toY3knLCBbMTA5M11dLCBbJ0tKY3knLCBbMTAzNl1dLCBbJ2tqY3knLCBbMTExNl1dLCBbJ0tvcGYnLCBbMTIwMTMwXV0sIFsna29wZicsIFsxMjAxNTZdXSwgWydLc2NyJywgWzExOTk3NF1dLCBbJ2tzY3InLCBbMTIwMDAwXV0sIFsnbEFhcnInLCBbODY2Nl1dLCBbJ0xhY3V0ZScsIFszMTNdXSwgWydsYWN1dGUnLCBbMzE0XV0sIFsnbGFlbXB0eXYnLCBbMTA2NzZdXSwgWydsYWdyYW4nLCBbODQ2Nl1dLCBbJ0xhbWJkYScsIFs5MjNdXSwgWydsYW1iZGEnLCBbOTU1XV0sIFsnbGFuZycsIFsxMDIxNl1dLCBbJ0xhbmcnLCBbMTAyMThdXSwgWydsYW5nZCcsIFsxMDY0MV1dLCBbJ2xhbmdsZScsIFsxMDIxNl1dLCBbJ2xhcCcsIFsxMDg4NV1dLCBbJ0xhcGxhY2V0cmYnLCBbODQ2Nl1dLCBbJ2xhcXVvJywgWzE3MV1dLCBbJ2xhcnJiJywgWzg2NzZdXSwgWydsYXJyYmZzJywgWzEwNTI3XV0sIFsnbGFycicsIFs4NTkyXV0sIFsnTGFycicsIFs4NjA2XV0sIFsnbEFycicsIFs4NjU2XV0sIFsnbGFycmZzJywgWzEwNTI1XV0sIFsnbGFycmhrJywgWzg2MTddXSwgWydsYXJybHAnLCBbODYxOV1dLCBbJ2xhcnJwbCcsIFsxMDU1M11dLCBbJ2xhcnJzaW0nLCBbMTA2MTFdXSwgWydsYXJydGwnLCBbODYxMF1dLCBbJ2xhdGFpbCcsIFsxMDUyMV1dLCBbJ2xBdGFpbCcsIFsxMDUyM11dLCBbJ2xhdCcsIFsxMDkyM11dLCBbJ2xhdGUnLCBbMTA5MjVdXSwgWydsYXRlcycsIFsxMDkyNSwgNjUwMjRdXSwgWydsYmFycicsIFsxMDUwOF1dLCBbJ2xCYXJyJywgWzEwNTEwXV0sIFsnbGJicmsnLCBbMTAwOThdXSwgWydsYnJhY2UnLCBbMTIzXV0sIFsnbGJyYWNrJywgWzkxXV0sIFsnbGJya2UnLCBbMTA2MzVdXSwgWydsYnJrc2xkJywgWzEwNjM5XV0sIFsnbGJya3NsdScsIFsxMDYzN11dLCBbJ0xjYXJvbicsIFszMTddXSwgWydsY2Fyb24nLCBbMzE4XV0sIFsnTGNlZGlsJywgWzMxNV1dLCBbJ2xjZWRpbCcsIFszMTZdXSwgWydsY2VpbCcsIFs4OTY4XV0sIFsnbGN1YicsIFsxMjNdXSwgWydMY3knLCBbMTA1MV1dLCBbJ2xjeScsIFsxMDgzXV0sIFsnbGRjYScsIFsxMDU1MF1dLCBbJ2xkcXVvJywgWzgyMjBdXSwgWydsZHF1b3InLCBbODIyMl1dLCBbJ2xkcmRoYXInLCBbMTA1OTldXSwgWydsZHJ1c2hhcicsIFsxMDU3MV1dLCBbJ2xkc2gnLCBbODYyNl1dLCBbJ2xlJywgWzg4MDRdXSwgWydsRScsIFs4ODA2XV0sIFsnTGVmdEFuZ2xlQnJhY2tldCcsIFsxMDIxNl1dLCBbJ0xlZnRBcnJvd0JhcicsIFs4Njc2XV0sIFsnbGVmdGFycm93JywgWzg1OTJdXSwgWydMZWZ0QXJyb3cnLCBbODU5Ml1dLCBbJ0xlZnRhcnJvdycsIFs4NjU2XV0sIFsnTGVmdEFycm93UmlnaHRBcnJvdycsIFs4NjQ2XV0sIFsnbGVmdGFycm93dGFpbCcsIFs4NjEwXV0sIFsnTGVmdENlaWxpbmcnLCBbODk2OF1dLCBbJ0xlZnREb3VibGVCcmFja2V0JywgWzEwMjE0XV0sIFsnTGVmdERvd25UZWVWZWN0b3InLCBbMTA1OTNdXSwgWydMZWZ0RG93blZlY3RvckJhcicsIFsxMDU4NV1dLCBbJ0xlZnREb3duVmVjdG9yJywgWzg2NDNdXSwgWydMZWZ0Rmxvb3InLCBbODk3MF1dLCBbJ2xlZnRoYXJwb29uZG93bicsIFs4NjM3XV0sIFsnbGVmdGhhcnBvb251cCcsIFs4NjM2XV0sIFsnbGVmdGxlZnRhcnJvd3MnLCBbODY0N11dLCBbJ2xlZnRyaWdodGFycm93JywgWzg1OTZdXSwgWydMZWZ0UmlnaHRBcnJvdycsIFs4NTk2XV0sIFsnTGVmdHJpZ2h0YXJyb3cnLCBbODY2MF1dLCBbJ2xlZnRyaWdodGFycm93cycsIFs4NjQ2XV0sIFsnbGVmdHJpZ2h0aGFycG9vbnMnLCBbODY1MV1dLCBbJ2xlZnRyaWdodHNxdWlnYXJyb3cnLCBbODYyMV1dLCBbJ0xlZnRSaWdodFZlY3RvcicsIFsxMDU3NF1dLCBbJ0xlZnRUZWVBcnJvdycsIFs4NjEyXV0sIFsnTGVmdFRlZScsIFs4ODY3XV0sIFsnTGVmdFRlZVZlY3RvcicsIFsxMDU4Nl1dLCBbJ2xlZnR0aHJlZXRpbWVzJywgWzg5MDddXSwgWydMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDNdXSwgWydMZWZ0VHJpYW5nbGUnLCBbODg4Ml1dLCBbJ0xlZnRUcmlhbmdsZUVxdWFsJywgWzg4ODRdXSwgWydMZWZ0VXBEb3duVmVjdG9yJywgWzEwNTc3XV0sIFsnTGVmdFVwVGVlVmVjdG9yJywgWzEwNTkyXV0sIFsnTGVmdFVwVmVjdG9yQmFyJywgWzEwNTg0XV0sIFsnTGVmdFVwVmVjdG9yJywgWzg2MzldXSwgWydMZWZ0VmVjdG9yQmFyJywgWzEwNTc4XV0sIFsnTGVmdFZlY3RvcicsIFs4NjM2XV0sIFsnbEVnJywgWzEwODkxXV0sIFsnbGVnJywgWzg5MjJdXSwgWydsZXEnLCBbODgwNF1dLCBbJ2xlcXEnLCBbODgwNl1dLCBbJ2xlcXNsYW50JywgWzEwODc3XV0sIFsnbGVzY2MnLCBbMTA5MjBdXSwgWydsZXMnLCBbMTA4NzddXSwgWydsZXNkb3QnLCBbMTA4NzldXSwgWydsZXNkb3RvJywgWzEwODgxXV0sIFsnbGVzZG90b3InLCBbMTA4ODNdXSwgWydsZXNnJywgWzg5MjIsIDY1MDI0XV0sIFsnbGVzZ2VzJywgWzEwODk5XV0sIFsnbGVzc2FwcHJveCcsIFsxMDg4NV1dLCBbJ2xlc3Nkb3QnLCBbODkxOF1dLCBbJ2xlc3NlcWd0cicsIFs4OTIyXV0sIFsnbGVzc2VxcWd0cicsIFsxMDg5MV1dLCBbJ0xlc3NFcXVhbEdyZWF0ZXInLCBbODkyMl1dLCBbJ0xlc3NGdWxsRXF1YWwnLCBbODgwNl1dLCBbJ0xlc3NHcmVhdGVyJywgWzg4MjJdXSwgWydsZXNzZ3RyJywgWzg4MjJdXSwgWydMZXNzTGVzcycsIFsxMDkxM11dLCBbJ2xlc3NzaW0nLCBbODgxOF1dLCBbJ0xlc3NTbGFudEVxdWFsJywgWzEwODc3XV0sIFsnTGVzc1RpbGRlJywgWzg4MThdXSwgWydsZmlzaHQnLCBbMTA2MjBdXSwgWydsZmxvb3InLCBbODk3MF1dLCBbJ0xmcicsIFsxMjAwNzldXSwgWydsZnInLCBbMTIwMTA1XV0sIFsnbGcnLCBbODgyMl1dLCBbJ2xnRScsIFsxMDg5N11dLCBbJ2xIYXInLCBbMTA1OTRdXSwgWydsaGFyZCcsIFs4NjM3XV0sIFsnbGhhcnUnLCBbODYzNl1dLCBbJ2xoYXJ1bCcsIFsxMDYwMl1dLCBbJ2xoYmxrJywgWzk2MDRdXSwgWydMSmN5JywgWzEwMzNdXSwgWydsamN5JywgWzExMTNdXSwgWydsbGFycicsIFs4NjQ3XV0sIFsnbGwnLCBbODgxMF1dLCBbJ0xsJywgWzg5MjBdXSwgWydsbGNvcm5lcicsIFs4OTkwXV0sIFsnTGxlZnRhcnJvdycsIFs4NjY2XV0sIFsnbGxoYXJkJywgWzEwNjAzXV0sIFsnbGx0cmknLCBbOTcyMl1dLCBbJ0xtaWRvdCcsIFszMTldXSwgWydsbWlkb3QnLCBbMzIwXV0sIFsnbG1vdXN0YWNoZScsIFs5MTM2XV0sIFsnbG1vdXN0JywgWzkxMzZdXSwgWydsbmFwJywgWzEwODg5XV0sIFsnbG5hcHByb3gnLCBbMTA4ODldXSwgWydsbmUnLCBbMTA4ODddXSwgWydsbkUnLCBbODgwOF1dLCBbJ2xuZXEnLCBbMTA4ODddXSwgWydsbmVxcScsIFs4ODA4XV0sIFsnbG5zaW0nLCBbODkzNF1dLCBbJ2xvYW5nJywgWzEwMjIwXV0sIFsnbG9hcnInLCBbODcwMV1dLCBbJ2xvYnJrJywgWzEwMjE0XV0sIFsnbG9uZ2xlZnRhcnJvdycsIFsxMDIyOV1dLCBbJ0xvbmdMZWZ0QXJyb3cnLCBbMTAyMjldXSwgWydMb25nbGVmdGFycm93JywgWzEwMjMyXV0sIFsnbG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjMxXV0sIFsnTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjMxXV0sIFsnTG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjM0XV0sIFsnbG9uZ21hcHN0bycsIFsxMDIzNl1dLCBbJ2xvbmdyaWdodGFycm93JywgWzEwMjMwXV0sIFsnTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzBdXSwgWydMb25ncmlnaHRhcnJvdycsIFsxMDIzM11dLCBbJ2xvb3BhcnJvd2xlZnQnLCBbODYxOV1dLCBbJ2xvb3BhcnJvd3JpZ2h0JywgWzg2MjBdXSwgWydsb3BhcicsIFsxMDYyOV1dLCBbJ0xvcGYnLCBbMTIwMTMxXV0sIFsnbG9wZicsIFsxMjAxNTddXSwgWydsb3BsdXMnLCBbMTA3OTddXSwgWydsb3RpbWVzJywgWzEwODA0XV0sIFsnbG93YXN0JywgWzg3MjddXSwgWydsb3diYXInLCBbOTVdXSwgWydMb3dlckxlZnRBcnJvdycsIFs4NjAxXV0sIFsnTG93ZXJSaWdodEFycm93JywgWzg2MDBdXSwgWydsb3onLCBbOTY3NF1dLCBbJ2xvemVuZ2UnLCBbOTY3NF1dLCBbJ2xvemYnLCBbMTA3MzFdXSwgWydscGFyJywgWzQwXV0sIFsnbHBhcmx0JywgWzEwNjQzXV0sIFsnbHJhcnInLCBbODY0Nl1dLCBbJ2xyY29ybmVyJywgWzg5OTFdXSwgWydscmhhcicsIFs4NjUxXV0sIFsnbHJoYXJkJywgWzEwNjA1XV0sIFsnbHJtJywgWzgyMDZdXSwgWydscnRyaScsIFs4ODk1XV0sIFsnbHNhcXVvJywgWzgyNDldXSwgWydsc2NyJywgWzEyMDAwMV1dLCBbJ0xzY3InLCBbODQ2Nl1dLCBbJ2xzaCcsIFs4NjI0XV0sIFsnTHNoJywgWzg2MjRdXSwgWydsc2ltJywgWzg4MThdXSwgWydsc2ltZScsIFsxMDg5M11dLCBbJ2xzaW1nJywgWzEwODk1XV0sIFsnbHNxYicsIFs5MV1dLCBbJ2xzcXVvJywgWzgyMTZdXSwgWydsc3F1b3InLCBbODIxOF1dLCBbJ0xzdHJvaycsIFszMjFdXSwgWydsc3Ryb2snLCBbMzIyXV0sIFsnbHRjYycsIFsxMDkxOF1dLCBbJ2x0Y2lyJywgWzEwODczXV0sIFsnbHQnLCBbNjBdXSwgWydMVCcsIFs2MF1dLCBbJ0x0JywgWzg4MTBdXSwgWydsdGRvdCcsIFs4OTE4XV0sIFsnbHRocmVlJywgWzg5MDddXSwgWydsdGltZXMnLCBbODkwNV1dLCBbJ2x0bGFycicsIFsxMDYxNF1dLCBbJ2x0cXVlc3QnLCBbMTA4NzVdXSwgWydsdHJpJywgWzk2NjddXSwgWydsdHJpZScsIFs4ODg0XV0sIFsnbHRyaWYnLCBbOTY2Nl1dLCBbJ2x0clBhcicsIFsxMDY0Nl1dLCBbJ2x1cmRzaGFyJywgWzEwNTcwXV0sIFsnbHVydWhhcicsIFsxMDU5OF1dLCBbJ2x2ZXJ0bmVxcScsIFs4ODA4LCA2NTAyNF1dLCBbJ2x2bkUnLCBbODgwOCwgNjUwMjRdXSwgWydtYWNyJywgWzE3NV1dLCBbJ21hbGUnLCBbOTc5NF1dLCBbJ21hbHQnLCBbMTAwMTZdXSwgWydtYWx0ZXNlJywgWzEwMDE2XV0sIFsnTWFwJywgWzEwNTAxXV0sIFsnbWFwJywgWzg2MTRdXSwgWydtYXBzdG8nLCBbODYxNF1dLCBbJ21hcHN0b2Rvd24nLCBbODYxNV1dLCBbJ21hcHN0b2xlZnQnLCBbODYxMl1dLCBbJ21hcHN0b3VwJywgWzg2MTNdXSwgWydtYXJrZXInLCBbOTY0Nl1dLCBbJ21jb21tYScsIFsxMDc5M11dLCBbJ01jeScsIFsxMDUyXV0sIFsnbWN5JywgWzEwODRdXSwgWydtZGFzaCcsIFs4MjEyXV0sIFsnbUREb3QnLCBbODc2Ml1dLCBbJ21lYXN1cmVkYW5nbGUnLCBbODczN11dLCBbJ01lZGl1bVNwYWNlJywgWzgyODddXSwgWydNZWxsaW50cmYnLCBbODQ5OV1dLCBbJ01mcicsIFsxMjAwODBdXSwgWydtZnInLCBbMTIwMTA2XV0sIFsnbWhvJywgWzg0ODddXSwgWydtaWNybycsIFsxODFdXSwgWydtaWRhc3QnLCBbNDJdXSwgWydtaWRjaXInLCBbMTA5OTJdXSwgWydtaWQnLCBbODczOV1dLCBbJ21pZGRvdCcsIFsxODNdXSwgWydtaW51c2InLCBbODg2M11dLCBbJ21pbnVzJywgWzg3MjJdXSwgWydtaW51c2QnLCBbODc2MF1dLCBbJ21pbnVzZHUnLCBbMTA3OTRdXSwgWydNaW51c1BsdXMnLCBbODcyM11dLCBbJ21sY3AnLCBbMTA5NzFdXSwgWydtbGRyJywgWzgyMzBdXSwgWydtbnBsdXMnLCBbODcyM11dLCBbJ21vZGVscycsIFs4ODcxXV0sIFsnTW9wZicsIFsxMjAxMzJdXSwgWydtb3BmJywgWzEyMDE1OF1dLCBbJ21wJywgWzg3MjNdXSwgWydtc2NyJywgWzEyMDAwMl1dLCBbJ01zY3InLCBbODQ5OV1dLCBbJ21zdHBvcycsIFs4NzY2XV0sIFsnTXUnLCBbOTI0XV0sIFsnbXUnLCBbOTU2XV0sIFsnbXVsdGltYXAnLCBbODg4OF1dLCBbJ211bWFwJywgWzg4ODhdXSwgWyduYWJsYScsIFs4NzExXV0sIFsnTmFjdXRlJywgWzMyM11dLCBbJ25hY3V0ZScsIFszMjRdXSwgWyduYW5nJywgWzg3MzYsIDg0MDJdXSwgWyduYXAnLCBbODc3N11dLCBbJ25hcEUnLCBbMTA4NjQsIDgyNF1dLCBbJ25hcGlkJywgWzg3NzksIDgyNF1dLCBbJ25hcG9zJywgWzMyOV1dLCBbJ25hcHByb3gnLCBbODc3N11dLCBbJ25hdHVyYWwnLCBbOTgzOF1dLCBbJ25hdHVyYWxzJywgWzg0NjldXSwgWyduYXR1cicsIFs5ODM4XV0sIFsnbmJzcCcsIFsxNjBdXSwgWyduYnVtcCcsIFs4NzgyLCA4MjRdXSwgWyduYnVtcGUnLCBbODc4MywgODI0XV0sIFsnbmNhcCcsIFsxMDgxOV1dLCBbJ05jYXJvbicsIFszMjddXSwgWyduY2Fyb24nLCBbMzI4XV0sIFsnTmNlZGlsJywgWzMyNV1dLCBbJ25jZWRpbCcsIFszMjZdXSwgWyduY29uZycsIFs4Nzc1XV0sIFsnbmNvbmdkb3QnLCBbMTA4NjEsIDgyNF1dLCBbJ25jdXAnLCBbMTA4MThdXSwgWydOY3knLCBbMTA1M11dLCBbJ25jeScsIFsxMDg1XV0sIFsnbmRhc2gnLCBbODIxMV1dLCBbJ25lYXJoaycsIFsxMDUzMl1dLCBbJ25lYXJyJywgWzg1OTldXSwgWyduZUFycicsIFs4NjYzXV0sIFsnbmVhcnJvdycsIFs4NTk5XV0sIFsnbmUnLCBbODgwMF1dLCBbJ25lZG90JywgWzg3ODQsIDgyNF1dLCBbJ05lZ2F0aXZlTWVkaXVtU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpY2tTcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVUaGluU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVmVyeVRoaW5TcGFjZScsIFs4MjAzXV0sIFsnbmVxdWl2JywgWzg4MDJdXSwgWyduZXNlYXInLCBbMTA1MzZdXSwgWyduZXNpbScsIFs4NzcwLCA4MjRdXSwgWydOZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFs4ODExXV0sIFsnTmVzdGVkTGVzc0xlc3MnLCBbODgxMF1dLCBbJ25leGlzdCcsIFs4NzA4XV0sIFsnbmV4aXN0cycsIFs4NzA4XV0sIFsnTmZyJywgWzEyMDA4MV1dLCBbJ25mcicsIFsxMjAxMDddXSwgWyduZ0UnLCBbODgwNywgODI0XV0sIFsnbmdlJywgWzg4MTddXSwgWyduZ2VxJywgWzg4MTddXSwgWyduZ2VxcScsIFs4ODA3LCA4MjRdXSwgWyduZ2Vxc2xhbnQnLCBbMTA4NzgsIDgyNF1dLCBbJ25nZXMnLCBbMTA4NzgsIDgyNF1dLCBbJ25HZycsIFs4OTIxLCA4MjRdXSwgWyduZ3NpbScsIFs4ODIxXV0sIFsnbkd0JywgWzg4MTEsIDg0MDJdXSwgWyduZ3QnLCBbODgxNV1dLCBbJ25ndHInLCBbODgxNV1dLCBbJ25HdHYnLCBbODgxMSwgODI0XV0sIFsnbmhhcnInLCBbODYyMl1dLCBbJ25oQXJyJywgWzg2NTRdXSwgWyduaHBhcicsIFsxMDk5NF1dLCBbJ25pJywgWzg3MTVdXSwgWyduaXMnLCBbODk1Nl1dLCBbJ25pc2QnLCBbODk1NF1dLCBbJ25pdicsIFs4NzE1XV0sIFsnTkpjeScsIFsxMDM0XV0sIFsnbmpjeScsIFsxMTE0XV0sIFsnbmxhcnInLCBbODYwMl1dLCBbJ25sQXJyJywgWzg2NTNdXSwgWydubGRyJywgWzgyMjldXSwgWydubEUnLCBbODgwNiwgODI0XV0sIFsnbmxlJywgWzg4MTZdXSwgWydubGVmdGFycm93JywgWzg2MDJdXSwgWyduTGVmdGFycm93JywgWzg2NTNdXSwgWydubGVmdHJpZ2h0YXJyb3cnLCBbODYyMl1dLCBbJ25MZWZ0cmlnaHRhcnJvdycsIFs4NjU0XV0sIFsnbmxlcScsIFs4ODE2XV0sIFsnbmxlcXEnLCBbODgwNiwgODI0XV0sIFsnbmxlcXNsYW50JywgWzEwODc3LCA4MjRdXSwgWydubGVzJywgWzEwODc3LCA4MjRdXSwgWydubGVzcycsIFs4ODE0XV0sIFsnbkxsJywgWzg5MjAsIDgyNF1dLCBbJ25sc2ltJywgWzg4MjBdXSwgWyduTHQnLCBbODgxMCwgODQwMl1dLCBbJ25sdCcsIFs4ODE0XV0sIFsnbmx0cmknLCBbODkzOF1dLCBbJ25sdHJpZScsIFs4OTQwXV0sIFsnbkx0dicsIFs4ODEwLCA4MjRdXSwgWydubWlkJywgWzg3NDBdXSwgWydOb0JyZWFrJywgWzgyODhdXSwgWydOb25CcmVha2luZ1NwYWNlJywgWzE2MF1dLCBbJ25vcGYnLCBbMTIwMTU5XV0sIFsnTm9wZicsIFs4NDY5XV0sIFsnTm90JywgWzEwOTg4XV0sIFsnbm90JywgWzE3Ml1dLCBbJ05vdENvbmdydWVudCcsIFs4ODAyXV0sIFsnTm90Q3VwQ2FwJywgWzg4MTNdXSwgWydOb3REb3VibGVWZXJ0aWNhbEJhcicsIFs4NzQyXV0sIFsnTm90RWxlbWVudCcsIFs4NzEzXV0sIFsnTm90RXF1YWwnLCBbODgwMF1dLCBbJ05vdEVxdWFsVGlsZGUnLCBbODc3MCwgODI0XV0sIFsnTm90RXhpc3RzJywgWzg3MDhdXSwgWydOb3RHcmVhdGVyJywgWzg4MTVdXSwgWydOb3RHcmVhdGVyRXF1YWwnLCBbODgxN11dLCBbJ05vdEdyZWF0ZXJGdWxsRXF1YWwnLCBbODgwNywgODI0XV0sIFsnTm90R3JlYXRlckdyZWF0ZXInLCBbODgxMSwgODI0XV0sIFsnTm90R3JlYXRlckxlc3MnLCBbODgyNV1dLCBbJ05vdEdyZWF0ZXJTbGFudEVxdWFsJywgWzEwODc4LCA4MjRdXSwgWydOb3RHcmVhdGVyVGlsZGUnLCBbODgyMV1dLCBbJ05vdEh1bXBEb3duSHVtcCcsIFs4NzgyLCA4MjRdXSwgWydOb3RIdW1wRXF1YWwnLCBbODc4MywgODI0XV0sIFsnbm90aW4nLCBbODcxM11dLCBbJ25vdGluZG90JywgWzg5NDksIDgyNF1dLCBbJ25vdGluRScsIFs4OTUzLCA4MjRdXSwgWydub3RpbnZhJywgWzg3MTNdXSwgWydub3RpbnZiJywgWzg5NTFdXSwgWydub3RpbnZjJywgWzg5NTBdXSwgWydOb3RMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDMsIDgyNF1dLCBbJ05vdExlZnRUcmlhbmdsZScsIFs4OTM4XV0sIFsnTm90TGVmdFRyaWFuZ2xlRXF1YWwnLCBbODk0MF1dLCBbJ05vdExlc3MnLCBbODgxNF1dLCBbJ05vdExlc3NFcXVhbCcsIFs4ODE2XV0sIFsnTm90TGVzc0dyZWF0ZXInLCBbODgyNF1dLCBbJ05vdExlc3NMZXNzJywgWzg4MTAsIDgyNF1dLCBbJ05vdExlc3NTbGFudEVxdWFsJywgWzEwODc3LCA4MjRdXSwgWydOb3RMZXNzVGlsZGUnLCBbODgyMF1dLCBbJ05vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyJywgWzEwOTE0LCA4MjRdXSwgWydOb3ROZXN0ZWRMZXNzTGVzcycsIFsxMDkxMywgODI0XV0sIFsnbm90bmknLCBbODcxNl1dLCBbJ25vdG5pdmEnLCBbODcxNl1dLCBbJ25vdG5pdmInLCBbODk1OF1dLCBbJ25vdG5pdmMnLCBbODk1N11dLCBbJ05vdFByZWNlZGVzJywgWzg4MzJdXSwgWydOb3RQcmVjZWRlc0VxdWFsJywgWzEwOTI3LCA4MjRdXSwgWydOb3RQcmVjZWRlc1NsYW50RXF1YWwnLCBbODkyOF1dLCBbJ05vdFJldmVyc2VFbGVtZW50JywgWzg3MTZdXSwgWydOb3RSaWdodFRyaWFuZ2xlQmFyJywgWzEwNzA0LCA4MjRdXSwgWydOb3RSaWdodFRyaWFuZ2xlJywgWzg5MzldXSwgWydOb3RSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODk0MV1dLCBbJ05vdFNxdWFyZVN1YnNldCcsIFs4ODQ3LCA4MjRdXSwgWydOb3RTcXVhcmVTdWJzZXRFcXVhbCcsIFs4OTMwXV0sIFsnTm90U3F1YXJlU3VwZXJzZXQnLCBbODg0OCwgODI0XV0sIFsnTm90U3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4OTMxXV0sIFsnTm90U3Vic2V0JywgWzg4MzQsIDg0MDJdXSwgWydOb3RTdWJzZXRFcXVhbCcsIFs4ODQwXV0sIFsnTm90U3VjY2VlZHMnLCBbODgzM11dLCBbJ05vdFN1Y2NlZWRzRXF1YWwnLCBbMTA5MjgsIDgyNF1dLCBbJ05vdFN1Y2NlZWRzU2xhbnRFcXVhbCcsIFs4OTI5XV0sIFsnTm90U3VjY2VlZHNUaWxkZScsIFs4ODMxLCA4MjRdXSwgWydOb3RTdXBlcnNldCcsIFs4ODM1LCA4NDAyXV0sIFsnTm90U3VwZXJzZXRFcXVhbCcsIFs4ODQxXV0sIFsnTm90VGlsZGUnLCBbODc2OV1dLCBbJ05vdFRpbGRlRXF1YWwnLCBbODc3Ml1dLCBbJ05vdFRpbGRlRnVsbEVxdWFsJywgWzg3NzVdXSwgWydOb3RUaWxkZVRpbGRlJywgWzg3NzddXSwgWydOb3RWZXJ0aWNhbEJhcicsIFs4NzQwXV0sIFsnbnBhcmFsbGVsJywgWzg3NDJdXSwgWyducGFyJywgWzg3NDJdXSwgWyducGFyc2wnLCBbMTEwMDUsIDg0MjFdXSwgWyducGFydCcsIFs4NzA2LCA4MjRdXSwgWyducG9saW50JywgWzEwNzcyXV0sIFsnbnByJywgWzg4MzJdXSwgWyducHJjdWUnLCBbODkyOF1dLCBbJ25wcmVjJywgWzg4MzJdXSwgWyducHJlY2VxJywgWzEwOTI3LCA4MjRdXSwgWyducHJlJywgWzEwOTI3LCA4MjRdXSwgWyducmFycmMnLCBbMTA1NDcsIDgyNF1dLCBbJ25yYXJyJywgWzg2MDNdXSwgWyduckFycicsIFs4NjU1XV0sIFsnbnJhcnJ3JywgWzg2MDUsIDgyNF1dLCBbJ25yaWdodGFycm93JywgWzg2MDNdXSwgWyduUmlnaHRhcnJvdycsIFs4NjU1XV0sIFsnbnJ0cmknLCBbODkzOV1dLCBbJ25ydHJpZScsIFs4OTQxXV0sIFsnbnNjJywgWzg4MzNdXSwgWyduc2NjdWUnLCBbODkyOV1dLCBbJ25zY2UnLCBbMTA5MjgsIDgyNF1dLCBbJ05zY3InLCBbMTE5OTc3XV0sIFsnbnNjcicsIFsxMjAwMDNdXSwgWyduc2hvcnRtaWQnLCBbODc0MF1dLCBbJ25zaG9ydHBhcmFsbGVsJywgWzg3NDJdXSwgWyduc2ltJywgWzg3NjldXSwgWyduc2ltZScsIFs4NzcyXV0sIFsnbnNpbWVxJywgWzg3NzJdXSwgWyduc21pZCcsIFs4NzQwXV0sIFsnbnNwYXInLCBbODc0Ml1dLCBbJ25zcXN1YmUnLCBbODkzMF1dLCBbJ25zcXN1cGUnLCBbODkzMV1dLCBbJ25zdWInLCBbODgzNl1dLCBbJ25zdWJFJywgWzEwOTQ5LCA4MjRdXSwgWyduc3ViZScsIFs4ODQwXV0sIFsnbnN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnbnN1YnNldGVxJywgWzg4NDBdXSwgWyduc3Vic2V0ZXFxJywgWzEwOTQ5LCA4MjRdXSwgWyduc3VjYycsIFs4ODMzXV0sIFsnbnN1Y2NlcScsIFsxMDkyOCwgODI0XV0sIFsnbnN1cCcsIFs4ODM3XV0sIFsnbnN1cEUnLCBbMTA5NTAsIDgyNF1dLCBbJ25zdXBlJywgWzg4NDFdXSwgWyduc3Vwc2V0JywgWzg4MzUsIDg0MDJdXSwgWyduc3Vwc2V0ZXEnLCBbODg0MV1dLCBbJ25zdXBzZXRlcXEnLCBbMTA5NTAsIDgyNF1dLCBbJ250Z2wnLCBbODgyNV1dLCBbJ050aWxkZScsIFsyMDldXSwgWydudGlsZGUnLCBbMjQxXV0sIFsnbnRsZycsIFs4ODI0XV0sIFsnbnRyaWFuZ2xlbGVmdCcsIFs4OTM4XV0sIFsnbnRyaWFuZ2xlbGVmdGVxJywgWzg5NDBdXSwgWydudHJpYW5nbGVyaWdodCcsIFs4OTM5XV0sIFsnbnRyaWFuZ2xlcmlnaHRlcScsIFs4OTQxXV0sIFsnTnUnLCBbOTI1XV0sIFsnbnUnLCBbOTU3XV0sIFsnbnVtJywgWzM1XV0sIFsnbnVtZXJvJywgWzg0NzBdXSwgWydudW1zcCcsIFs4MTk5XV0sIFsnbnZhcCcsIFs4NzgxLCA4NDAyXV0sIFsnbnZkYXNoJywgWzg4NzZdXSwgWydudkRhc2gnLCBbODg3N11dLCBbJ25WZGFzaCcsIFs4ODc4XV0sIFsnblZEYXNoJywgWzg4NzldXSwgWydudmdlJywgWzg4MDUsIDg0MDJdXSwgWydudmd0JywgWzYyLCA4NDAyXV0sIFsnbnZIYXJyJywgWzEwNTAwXV0sIFsnbnZpbmZpbicsIFsxMDcxOF1dLCBbJ252bEFycicsIFsxMDQ5OF1dLCBbJ252bGUnLCBbODgwNCwgODQwMl1dLCBbJ252bHQnLCBbNjAsIDg0MDJdXSwgWydudmx0cmllJywgWzg4ODQsIDg0MDJdXSwgWydudnJBcnInLCBbMTA0OTldXSwgWydudnJ0cmllJywgWzg4ODUsIDg0MDJdXSwgWydudnNpbScsIFs4NzY0LCA4NDAyXV0sIFsnbndhcmhrJywgWzEwNTMxXV0sIFsnbndhcnInLCBbODU5OF1dLCBbJ253QXJyJywgWzg2NjJdXSwgWydud2Fycm93JywgWzg1OThdXSwgWydud25lYXInLCBbMTA1MzVdXSwgWydPYWN1dGUnLCBbMjExXV0sIFsnb2FjdXRlJywgWzI0M11dLCBbJ29hc3QnLCBbODg1OV1dLCBbJ09jaXJjJywgWzIxMl1dLCBbJ29jaXJjJywgWzI0NF1dLCBbJ29jaXInLCBbODg1OF1dLCBbJ09jeScsIFsxMDU0XV0sIFsnb2N5JywgWzEwODZdXSwgWydvZGFzaCcsIFs4ODYxXV0sIFsnT2RibGFjJywgWzMzNl1dLCBbJ29kYmxhYycsIFszMzddXSwgWydvZGl2JywgWzEwODA4XV0sIFsnb2RvdCcsIFs4ODU3XV0sIFsnb2Rzb2xkJywgWzEwNjg0XV0sIFsnT0VsaWcnLCBbMzM4XV0sIFsnb2VsaWcnLCBbMzM5XV0sIFsnb2ZjaXInLCBbMTA2ODddXSwgWydPZnInLCBbMTIwMDgyXV0sIFsnb2ZyJywgWzEyMDEwOF1dLCBbJ29nb24nLCBbNzMxXV0sIFsnT2dyYXZlJywgWzIxMF1dLCBbJ29ncmF2ZScsIFsyNDJdXSwgWydvZ3QnLCBbMTA2ODldXSwgWydvaGJhcicsIFsxMDY3N11dLCBbJ29obScsIFs5MzddXSwgWydvaW50JywgWzg3NTBdXSwgWydvbGFycicsIFs4NjM0XV0sIFsnb2xjaXInLCBbMTA2ODZdXSwgWydvbGNyb3NzJywgWzEwNjgzXV0sIFsnb2xpbmUnLCBbODI1NF1dLCBbJ29sdCcsIFsxMDY4OF1dLCBbJ09tYWNyJywgWzMzMl1dLCBbJ29tYWNyJywgWzMzM11dLCBbJ09tZWdhJywgWzkzN11dLCBbJ29tZWdhJywgWzk2OV1dLCBbJ09taWNyb24nLCBbOTI3XV0sIFsnb21pY3JvbicsIFs5NTldXSwgWydvbWlkJywgWzEwNjc4XV0sIFsnb21pbnVzJywgWzg4NTRdXSwgWydPb3BmJywgWzEyMDEzNF1dLCBbJ29vcGYnLCBbMTIwMTYwXV0sIFsnb3BhcicsIFsxMDY3OV1dLCBbJ09wZW5DdXJseURvdWJsZVF1b3RlJywgWzgyMjBdXSwgWydPcGVuQ3VybHlRdW90ZScsIFs4MjE2XV0sIFsnb3BlcnAnLCBbMTA2ODFdXSwgWydvcGx1cycsIFs4ODUzXV0sIFsnb3JhcnInLCBbODYzNV1dLCBbJ09yJywgWzEwODM2XV0sIFsnb3InLCBbODc0NF1dLCBbJ29yZCcsIFsxMDg0NV1dLCBbJ29yZGVyJywgWzg1MDBdXSwgWydvcmRlcm9mJywgWzg1MDBdXSwgWydvcmRmJywgWzE3MF1dLCBbJ29yZG0nLCBbMTg2XV0sIFsnb3JpZ29mJywgWzg4ODZdXSwgWydvcm9yJywgWzEwODM4XV0sIFsnb3JzbG9wZScsIFsxMDgzOV1dLCBbJ29ydicsIFsxMDg0M11dLCBbJ29TJywgWzk0MTZdXSwgWydPc2NyJywgWzExOTk3OF1dLCBbJ29zY3InLCBbODUwMF1dLCBbJ09zbGFzaCcsIFsyMTZdXSwgWydvc2xhc2gnLCBbMjQ4XV0sIFsnb3NvbCcsIFs4ODU2XV0sIFsnT3RpbGRlJywgWzIxM11dLCBbJ290aWxkZScsIFsyNDVdXSwgWydvdGltZXNhcycsIFsxMDgwNl1dLCBbJ090aW1lcycsIFsxMDgwN11dLCBbJ290aW1lcycsIFs4ODU1XV0sIFsnT3VtbCcsIFsyMTRdXSwgWydvdW1sJywgWzI0Nl1dLCBbJ292YmFyJywgWzkwMjFdXSwgWydPdmVyQmFyJywgWzgyNTRdXSwgWydPdmVyQnJhY2UnLCBbOTE4Ml1dLCBbJ092ZXJCcmFja2V0JywgWzkxNDBdXSwgWydPdmVyUGFyZW50aGVzaXMnLCBbOTE4MF1dLCBbJ3BhcmEnLCBbMTgyXV0sIFsncGFyYWxsZWwnLCBbODc0MV1dLCBbJ3BhcicsIFs4NzQxXV0sIFsncGFyc2ltJywgWzEwOTk1XV0sIFsncGFyc2wnLCBbMTEwMDVdXSwgWydwYXJ0JywgWzg3MDZdXSwgWydQYXJ0aWFsRCcsIFs4NzA2XV0sIFsnUGN5JywgWzEwNTVdXSwgWydwY3knLCBbMTA4N11dLCBbJ3BlcmNudCcsIFszN11dLCBbJ3BlcmlvZCcsIFs0Nl1dLCBbJ3Blcm1pbCcsIFs4MjQwXV0sIFsncGVycCcsIFs4ODY5XV0sIFsncGVydGVuaycsIFs4MjQxXV0sIFsnUGZyJywgWzEyMDA4M11dLCBbJ3BmcicsIFsxMjAxMDldXSwgWydQaGknLCBbOTM0XV0sIFsncGhpJywgWzk2Nl1dLCBbJ3BoaXYnLCBbOTgxXV0sIFsncGhtbWF0JywgWzg0OTldXSwgWydwaG9uZScsIFs5NzQyXV0sIFsnUGknLCBbOTI4XV0sIFsncGknLCBbOTYwXV0sIFsncGl0Y2hmb3JrJywgWzg5MTZdXSwgWydwaXYnLCBbOTgyXV0sIFsncGxhbmNrJywgWzg0NjNdXSwgWydwbGFuY2toJywgWzg0NjJdXSwgWydwbGFua3YnLCBbODQ2M11dLCBbJ3BsdXNhY2lyJywgWzEwNzg3XV0sIFsncGx1c2InLCBbODg2Ml1dLCBbJ3BsdXNjaXInLCBbMTA3ODZdXSwgWydwbHVzJywgWzQzXV0sIFsncGx1c2RvJywgWzg3MjRdXSwgWydwbHVzZHUnLCBbMTA3ODldXSwgWydwbHVzZScsIFsxMDg2Nl1dLCBbJ1BsdXNNaW51cycsIFsxNzddXSwgWydwbHVzbW4nLCBbMTc3XV0sIFsncGx1c3NpbScsIFsxMDc5MF1dLCBbJ3BsdXN0d28nLCBbMTA3OTFdXSwgWydwbScsIFsxNzddXSwgWydQb2luY2FyZXBsYW5lJywgWzg0NjBdXSwgWydwb2ludGludCcsIFsxMDc3M11dLCBbJ3BvcGYnLCBbMTIwMTYxXV0sIFsnUG9wZicsIFs4NDczXV0sIFsncG91bmQnLCBbMTYzXV0sIFsncHJhcCcsIFsxMDkzNV1dLCBbJ1ByJywgWzEwOTM5XV0sIFsncHInLCBbODgyNl1dLCBbJ3ByY3VlJywgWzg4MjhdXSwgWydwcmVjYXBwcm94JywgWzEwOTM1XV0sIFsncHJlYycsIFs4ODI2XV0sIFsncHJlY2N1cmx5ZXEnLCBbODgyOF1dLCBbJ1ByZWNlZGVzJywgWzg4MjZdXSwgWydQcmVjZWRlc0VxdWFsJywgWzEwOTI3XV0sIFsnUHJlY2VkZXNTbGFudEVxdWFsJywgWzg4MjhdXSwgWydQcmVjZWRlc1RpbGRlJywgWzg4MzBdXSwgWydwcmVjZXEnLCBbMTA5MjddXSwgWydwcmVjbmFwcHJveCcsIFsxMDkzN11dLCBbJ3ByZWNuZXFxJywgWzEwOTMzXV0sIFsncHJlY25zaW0nLCBbODkzNl1dLCBbJ3ByZScsIFsxMDkyN11dLCBbJ3ByRScsIFsxMDkzMV1dLCBbJ3ByZWNzaW0nLCBbODgzMF1dLCBbJ3ByaW1lJywgWzgyNDJdXSwgWydQcmltZScsIFs4MjQzXV0sIFsncHJpbWVzJywgWzg0NzNdXSwgWydwcm5hcCcsIFsxMDkzN11dLCBbJ3BybkUnLCBbMTA5MzNdXSwgWydwcm5zaW0nLCBbODkzNl1dLCBbJ3Byb2QnLCBbODcxOV1dLCBbJ1Byb2R1Y3QnLCBbODcxOV1dLCBbJ3Byb2ZhbGFyJywgWzkwMDZdXSwgWydwcm9mbGluZScsIFs4OTc4XV0sIFsncHJvZnN1cmYnLCBbODk3OV1dLCBbJ3Byb3AnLCBbODczM11dLCBbJ1Byb3BvcnRpb25hbCcsIFs4NzMzXV0sIFsnUHJvcG9ydGlvbicsIFs4NzU5XV0sIFsncHJvcHRvJywgWzg3MzNdXSwgWydwcnNpbScsIFs4ODMwXV0sIFsncHJ1cmVsJywgWzg4ODBdXSwgWydQc2NyJywgWzExOTk3OV1dLCBbJ3BzY3InLCBbMTIwMDA1XV0sIFsnUHNpJywgWzkzNl1dLCBbJ3BzaScsIFs5NjhdXSwgWydwdW5jc3AnLCBbODIwMF1dLCBbJ1FmcicsIFsxMjAwODRdXSwgWydxZnInLCBbMTIwMTEwXV0sIFsncWludCcsIFsxMDc2NF1dLCBbJ3FvcGYnLCBbMTIwMTYyXV0sIFsnUW9wZicsIFs4NDc0XV0sIFsncXByaW1lJywgWzgyNzldXSwgWydRc2NyJywgWzExOTk4MF1dLCBbJ3FzY3InLCBbMTIwMDA2XV0sIFsncXVhdGVybmlvbnMnLCBbODQ2MV1dLCBbJ3F1YXRpbnQnLCBbMTA3NzRdXSwgWydxdWVzdCcsIFs2M11dLCBbJ3F1ZXN0ZXEnLCBbODc5OV1dLCBbJ3F1b3QnLCBbMzRdXSwgWydRVU9UJywgWzM0XV0sIFsnckFhcnInLCBbODY2N11dLCBbJ3JhY2UnLCBbODc2NSwgODE3XV0sIFsnUmFjdXRlJywgWzM0MF1dLCBbJ3JhY3V0ZScsIFszNDFdXSwgWydyYWRpYycsIFs4NzMwXV0sIFsncmFlbXB0eXYnLCBbMTA2NzVdXSwgWydyYW5nJywgWzEwMjE3XV0sIFsnUmFuZycsIFsxMDIxOV1dLCBbJ3JhbmdkJywgWzEwNjQyXV0sIFsncmFuZ2UnLCBbMTA2NjFdXSwgWydyYW5nbGUnLCBbMTAyMTddXSwgWydyYXF1bycsIFsxODddXSwgWydyYXJyYXAnLCBbMTA2MTNdXSwgWydyYXJyYicsIFs4Njc3XV0sIFsncmFycmJmcycsIFsxMDUyOF1dLCBbJ3JhcnJjJywgWzEwNTQ3XV0sIFsncmFycicsIFs4NTk0XV0sIFsnUmFycicsIFs4NjA4XV0sIFsnckFycicsIFs4NjU4XV0sIFsncmFycmZzJywgWzEwNTI2XV0sIFsncmFycmhrJywgWzg2MThdXSwgWydyYXJybHAnLCBbODYyMF1dLCBbJ3JhcnJwbCcsIFsxMDU2NV1dLCBbJ3JhcnJzaW0nLCBbMTA2MTJdXSwgWydSYXJydGwnLCBbMTA1MThdXSwgWydyYXJydGwnLCBbODYxMV1dLCBbJ3JhcnJ3JywgWzg2MDVdXSwgWydyYXRhaWwnLCBbMTA1MjJdXSwgWydyQXRhaWwnLCBbMTA1MjRdXSwgWydyYXRpbycsIFs4NzU4XV0sIFsncmF0aW9uYWxzJywgWzg0NzRdXSwgWydyYmFycicsIFsxMDUwOV1dLCBbJ3JCYXJyJywgWzEwNTExXV0sIFsnUkJhcnInLCBbMTA1MTJdXSwgWydyYmJyaycsIFsxMDA5OV1dLCBbJ3JicmFjZScsIFsxMjVdXSwgWydyYnJhY2snLCBbOTNdXSwgWydyYnJrZScsIFsxMDYzNl1dLCBbJ3JicmtzbGQnLCBbMTA2MzhdXSwgWydyYnJrc2x1JywgWzEwNjQwXV0sIFsnUmNhcm9uJywgWzM0NF1dLCBbJ3JjYXJvbicsIFszNDVdXSwgWydSY2VkaWwnLCBbMzQyXV0sIFsncmNlZGlsJywgWzM0M11dLCBbJ3JjZWlsJywgWzg5NjldXSwgWydyY3ViJywgWzEyNV1dLCBbJ1JjeScsIFsxMDU2XV0sIFsncmN5JywgWzEwODhdXSwgWydyZGNhJywgWzEwNTUxXV0sIFsncmRsZGhhcicsIFsxMDYwMV1dLCBbJ3JkcXVvJywgWzgyMjFdXSwgWydyZHF1b3InLCBbODIyMV1dLCBbJ3Jkc2gnLCBbODYyN11dLCBbJ3JlYWwnLCBbODQ3Nl1dLCBbJ3JlYWxpbmUnLCBbODQ3NV1dLCBbJ3JlYWxwYXJ0JywgWzg0NzZdXSwgWydyZWFscycsIFs4NDc3XV0sIFsnUmUnLCBbODQ3Nl1dLCBbJ3JlY3QnLCBbOTY0NV1dLCBbJ3JlZycsIFsxNzRdXSwgWydSRUcnLCBbMTc0XV0sIFsnUmV2ZXJzZUVsZW1lbnQnLCBbODcxNV1dLCBbJ1JldmVyc2VFcXVpbGlicml1bScsIFs4NjUxXV0sIFsnUmV2ZXJzZVVwRXF1aWxpYnJpdW0nLCBbMTA2MDddXSwgWydyZmlzaHQnLCBbMTA2MjFdXSwgWydyZmxvb3InLCBbODk3MV1dLCBbJ3JmcicsIFsxMjAxMTFdXSwgWydSZnInLCBbODQ3Nl1dLCBbJ3JIYXInLCBbMTA1OTZdXSwgWydyaGFyZCcsIFs4NjQxXV0sIFsncmhhcnUnLCBbODY0MF1dLCBbJ3JoYXJ1bCcsIFsxMDYwNF1dLCBbJ1JobycsIFs5MjldXSwgWydyaG8nLCBbOTYxXV0sIFsncmhvdicsIFsxMDA5XV0sIFsnUmlnaHRBbmdsZUJyYWNrZXQnLCBbMTAyMTddXSwgWydSaWdodEFycm93QmFyJywgWzg2NzddXSwgWydyaWdodGFycm93JywgWzg1OTRdXSwgWydSaWdodEFycm93JywgWzg1OTRdXSwgWydSaWdodGFycm93JywgWzg2NThdXSwgWydSaWdodEFycm93TGVmdEFycm93JywgWzg2NDRdXSwgWydyaWdodGFycm93dGFpbCcsIFs4NjExXV0sIFsnUmlnaHRDZWlsaW5nJywgWzg5NjldXSwgWydSaWdodERvdWJsZUJyYWNrZXQnLCBbMTAyMTVdXSwgWydSaWdodERvd25UZWVWZWN0b3InLCBbMTA1ODldXSwgWydSaWdodERvd25WZWN0b3JCYXInLCBbMTA1ODFdXSwgWydSaWdodERvd25WZWN0b3InLCBbODY0Ml1dLCBbJ1JpZ2h0Rmxvb3InLCBbODk3MV1dLCBbJ3JpZ2h0aGFycG9vbmRvd24nLCBbODY0MV1dLCBbJ3JpZ2h0aGFycG9vbnVwJywgWzg2NDBdXSwgWydyaWdodGxlZnRhcnJvd3MnLCBbODY0NF1dLCBbJ3JpZ2h0bGVmdGhhcnBvb25zJywgWzg2NTJdXSwgWydyaWdodHJpZ2h0YXJyb3dzJywgWzg2NDldXSwgWydyaWdodHNxdWlnYXJyb3cnLCBbODYwNV1dLCBbJ1JpZ2h0VGVlQXJyb3cnLCBbODYxNF1dLCBbJ1JpZ2h0VGVlJywgWzg4NjZdXSwgWydSaWdodFRlZVZlY3RvcicsIFsxMDU4N11dLCBbJ3JpZ2h0dGhyZWV0aW1lcycsIFs4OTA4XV0sIFsnUmlnaHRUcmlhbmdsZUJhcicsIFsxMDcwNF1dLCBbJ1JpZ2h0VHJpYW5nbGUnLCBbODg4M11dLCBbJ1JpZ2h0VHJpYW5nbGVFcXVhbCcsIFs4ODg1XV0sIFsnUmlnaHRVcERvd25WZWN0b3InLCBbMTA1NzVdXSwgWydSaWdodFVwVGVlVmVjdG9yJywgWzEwNTg4XV0sIFsnUmlnaHRVcFZlY3RvckJhcicsIFsxMDU4MF1dLCBbJ1JpZ2h0VXBWZWN0b3InLCBbODYzOF1dLCBbJ1JpZ2h0VmVjdG9yQmFyJywgWzEwNTc5XV0sIFsnUmlnaHRWZWN0b3InLCBbODY0MF1dLCBbJ3JpbmcnLCBbNzMwXV0sIFsncmlzaW5nZG90c2VxJywgWzg3ODddXSwgWydybGFycicsIFs4NjQ0XV0sIFsncmxoYXInLCBbODY1Ml1dLCBbJ3JsbScsIFs4MjA3XV0sIFsncm1vdXN0YWNoZScsIFs5MTM3XV0sIFsncm1vdXN0JywgWzkxMzddXSwgWydybm1pZCcsIFsxMDk5MF1dLCBbJ3JvYW5nJywgWzEwMjIxXV0sIFsncm9hcnInLCBbODcwMl1dLCBbJ3JvYnJrJywgWzEwMjE1XV0sIFsncm9wYXInLCBbMTA2MzBdXSwgWydyb3BmJywgWzEyMDE2M11dLCBbJ1JvcGYnLCBbODQ3N11dLCBbJ3JvcGx1cycsIFsxMDc5OF1dLCBbJ3JvdGltZXMnLCBbMTA4MDVdXSwgWydSb3VuZEltcGxpZXMnLCBbMTA2MDhdXSwgWydycGFyJywgWzQxXV0sIFsncnBhcmd0JywgWzEwNjQ0XV0sIFsncnBwb2xpbnQnLCBbMTA3NzBdXSwgWydycmFycicsIFs4NjQ5XV0sIFsnUnJpZ2h0YXJyb3cnLCBbODY2N11dLCBbJ3JzYXF1bycsIFs4MjUwXV0sIFsncnNjcicsIFsxMjAwMDddXSwgWydSc2NyJywgWzg0NzVdXSwgWydyc2gnLCBbODYyNV1dLCBbJ1JzaCcsIFs4NjI1XV0sIFsncnNxYicsIFs5M11dLCBbJ3JzcXVvJywgWzgyMTddXSwgWydyc3F1b3InLCBbODIxN11dLCBbJ3J0aHJlZScsIFs4OTA4XV0sIFsncnRpbWVzJywgWzg5MDZdXSwgWydydHJpJywgWzk2NTddXSwgWydydHJpZScsIFs4ODg1XV0sIFsncnRyaWYnLCBbOTY1Nl1dLCBbJ3J0cmlsdHJpJywgWzEwNzAyXV0sIFsnUnVsZURlbGF5ZWQnLCBbMTA3NDBdXSwgWydydWx1aGFyJywgWzEwNjAwXV0sIFsncngnLCBbODQ3OF1dLCBbJ1NhY3V0ZScsIFszNDZdXSwgWydzYWN1dGUnLCBbMzQ3XV0sIFsnc2JxdW8nLCBbODIxOF1dLCBbJ3NjYXAnLCBbMTA5MzZdXSwgWydTY2Fyb24nLCBbMzUyXV0sIFsnc2Nhcm9uJywgWzM1M11dLCBbJ1NjJywgWzEwOTQwXV0sIFsnc2MnLCBbODgyN11dLCBbJ3NjY3VlJywgWzg4MjldXSwgWydzY2UnLCBbMTA5MjhdXSwgWydzY0UnLCBbMTA5MzJdXSwgWydTY2VkaWwnLCBbMzUwXV0sIFsnc2NlZGlsJywgWzM1MV1dLCBbJ1NjaXJjJywgWzM0OF1dLCBbJ3NjaXJjJywgWzM0OV1dLCBbJ3NjbmFwJywgWzEwOTM4XV0sIFsnc2NuRScsIFsxMDkzNF1dLCBbJ3NjbnNpbScsIFs4OTM3XV0sIFsnc2Nwb2xpbnQnLCBbMTA3NzFdXSwgWydzY3NpbScsIFs4ODMxXV0sIFsnU2N5JywgWzEwNTddXSwgWydzY3knLCBbMTA4OV1dLCBbJ3Nkb3RiJywgWzg4NjVdXSwgWydzZG90JywgWzg5MDFdXSwgWydzZG90ZScsIFsxMDg1NF1dLCBbJ3NlYXJoaycsIFsxMDUzM11dLCBbJ3NlYXJyJywgWzg2MDBdXSwgWydzZUFycicsIFs4NjY0XV0sIFsnc2VhcnJvdycsIFs4NjAwXV0sIFsnc2VjdCcsIFsxNjddXSwgWydzZW1pJywgWzU5XV0sIFsnc2Vzd2FyJywgWzEwNTM3XV0sIFsnc2V0bWludXMnLCBbODcyNl1dLCBbJ3NldG1uJywgWzg3MjZdXSwgWydzZXh0JywgWzEwMDM4XV0sIFsnU2ZyJywgWzEyMDA4Nl1dLCBbJ3NmcicsIFsxMjAxMTJdXSwgWydzZnJvd24nLCBbODk5NF1dLCBbJ3NoYXJwJywgWzk4MzldXSwgWydTSENIY3knLCBbMTA2NV1dLCBbJ3NoY2hjeScsIFsxMDk3XV0sIFsnU0hjeScsIFsxMDY0XV0sIFsnc2hjeScsIFsxMDk2XV0sIFsnU2hvcnREb3duQXJyb3cnLCBbODU5NV1dLCBbJ1Nob3J0TGVmdEFycm93JywgWzg1OTJdXSwgWydzaG9ydG1pZCcsIFs4NzM5XV0sIFsnc2hvcnRwYXJhbGxlbCcsIFs4NzQxXV0sIFsnU2hvcnRSaWdodEFycm93JywgWzg1OTRdXSwgWydTaG9ydFVwQXJyb3cnLCBbODU5M11dLCBbJ3NoeScsIFsxNzNdXSwgWydTaWdtYScsIFs5MzFdXSwgWydzaWdtYScsIFs5NjNdXSwgWydzaWdtYWYnLCBbOTYyXV0sIFsnc2lnbWF2JywgWzk2Ml1dLCBbJ3NpbScsIFs4NzY0XV0sIFsnc2ltZG90JywgWzEwODU4XV0sIFsnc2ltZScsIFs4NzcxXV0sIFsnc2ltZXEnLCBbODc3MV1dLCBbJ3NpbWcnLCBbMTA5MTBdXSwgWydzaW1nRScsIFsxMDkxMl1dLCBbJ3NpbWwnLCBbMTA5MDldXSwgWydzaW1sRScsIFsxMDkxMV1dLCBbJ3NpbW5lJywgWzg3NzRdXSwgWydzaW1wbHVzJywgWzEwNzg4XV0sIFsnc2ltcmFycicsIFsxMDYxMF1dLCBbJ3NsYXJyJywgWzg1OTJdXSwgWydTbWFsbENpcmNsZScsIFs4NzI4XV0sIFsnc21hbGxzZXRtaW51cycsIFs4NzI2XV0sIFsnc21hc2hwJywgWzEwODAzXV0sIFsnc21lcGFyc2wnLCBbMTA3MjRdXSwgWydzbWlkJywgWzg3MzldXSwgWydzbWlsZScsIFs4OTk1XV0sIFsnc210JywgWzEwOTIyXV0sIFsnc210ZScsIFsxMDkyNF1dLCBbJ3NtdGVzJywgWzEwOTI0LCA2NTAyNF1dLCBbJ1NPRlRjeScsIFsxMDY4XV0sIFsnc29mdGN5JywgWzExMDBdXSwgWydzb2xiYXInLCBbOTAyM11dLCBbJ3NvbGInLCBbMTA2OTJdXSwgWydzb2wnLCBbNDddXSwgWydTb3BmJywgWzEyMDEzOF1dLCBbJ3NvcGYnLCBbMTIwMTY0XV0sIFsnc3BhZGVzJywgWzk4MjRdXSwgWydzcGFkZXN1aXQnLCBbOTgyNF1dLCBbJ3NwYXInLCBbODc0MV1dLCBbJ3NxY2FwJywgWzg4NTFdXSwgWydzcWNhcHMnLCBbODg1MSwgNjUwMjRdXSwgWydzcWN1cCcsIFs4ODUyXV0sIFsnc3FjdXBzJywgWzg4NTIsIDY1MDI0XV0sIFsnU3FydCcsIFs4NzMwXV0sIFsnc3FzdWInLCBbODg0N11dLCBbJ3Nxc3ViZScsIFs4ODQ5XV0sIFsnc3FzdWJzZXQnLCBbODg0N11dLCBbJ3Nxc3Vic2V0ZXEnLCBbODg0OV1dLCBbJ3Nxc3VwJywgWzg4NDhdXSwgWydzcXN1cGUnLCBbODg1MF1dLCBbJ3Nxc3Vwc2V0JywgWzg4NDhdXSwgWydzcXN1cHNldGVxJywgWzg4NTBdXSwgWydzcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZScsIFs5NjMzXV0sIFsnU3F1YXJlSW50ZXJzZWN0aW9uJywgWzg4NTFdXSwgWydTcXVhcmVTdWJzZXQnLCBbODg0N11dLCBbJ1NxdWFyZVN1YnNldEVxdWFsJywgWzg4NDldXSwgWydTcXVhcmVTdXBlcnNldCcsIFs4ODQ4XV0sIFsnU3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4ODUwXV0sIFsnU3F1YXJlVW5pb24nLCBbODg1Ml1dLCBbJ3NxdWFyZicsIFs5NjQyXV0sIFsnc3F1JywgWzk2MzNdXSwgWydzcXVmJywgWzk2NDJdXSwgWydzcmFycicsIFs4NTk0XV0sIFsnU3NjcicsIFsxMTk5ODJdXSwgWydzc2NyJywgWzEyMDAwOF1dLCBbJ3NzZXRtbicsIFs4NzI2XV0sIFsnc3NtaWxlJywgWzg5OTVdXSwgWydzc3RhcmYnLCBbODkwMl1dLCBbJ1N0YXInLCBbODkwMl1dLCBbJ3N0YXInLCBbOTczNF1dLCBbJ3N0YXJmJywgWzk3MzNdXSwgWydzdHJhaWdodGVwc2lsb24nLCBbMTAxM11dLCBbJ3N0cmFpZ2h0cGhpJywgWzk4MV1dLCBbJ3N0cm5zJywgWzE3NV1dLCBbJ3N1YicsIFs4ODM0XV0sIFsnU3ViJywgWzg5MTJdXSwgWydzdWJkb3QnLCBbMTA5NDFdXSwgWydzdWJFJywgWzEwOTQ5XV0sIFsnc3ViZScsIFs4ODM4XV0sIFsnc3ViZWRvdCcsIFsxMDk0N11dLCBbJ3N1Ym11bHQnLCBbMTA5NDVdXSwgWydzdWJuRScsIFsxMDk1NV1dLCBbJ3N1Ym5lJywgWzg4NDJdXSwgWydzdWJwbHVzJywgWzEwOTQzXV0sIFsnc3VicmFycicsIFsxMDYxN11dLCBbJ3N1YnNldCcsIFs4ODM0XV0sIFsnU3Vic2V0JywgWzg5MTJdXSwgWydzdWJzZXRlcScsIFs4ODM4XV0sIFsnc3Vic2V0ZXFxJywgWzEwOTQ5XV0sIFsnU3Vic2V0RXF1YWwnLCBbODgzOF1dLCBbJ3N1YnNldG5lcScsIFs4ODQyXV0sIFsnc3Vic2V0bmVxcScsIFsxMDk1NV1dLCBbJ3N1YnNpbScsIFsxMDk1MV1dLCBbJ3N1YnN1YicsIFsxMDk2NV1dLCBbJ3N1YnN1cCcsIFsxMDk2M11dLCBbJ3N1Y2NhcHByb3gnLCBbMTA5MzZdXSwgWydzdWNjJywgWzg4MjddXSwgWydzdWNjY3VybHllcScsIFs4ODI5XV0sIFsnU3VjY2VlZHMnLCBbODgyN11dLCBbJ1N1Y2NlZWRzRXF1YWwnLCBbMTA5MjhdXSwgWydTdWNjZWVkc1NsYW50RXF1YWwnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzVGlsZGUnLCBbODgzMV1dLCBbJ3N1Y2NlcScsIFsxMDkyOF1dLCBbJ3N1Y2NuYXBwcm94JywgWzEwOTM4XV0sIFsnc3VjY25lcXEnLCBbMTA5MzRdXSwgWydzdWNjbnNpbScsIFs4OTM3XV0sIFsnc3VjY3NpbScsIFs4ODMxXV0sIFsnU3VjaFRoYXQnLCBbODcxNV1dLCBbJ3N1bScsIFs4NzIxXV0sIFsnU3VtJywgWzg3MjFdXSwgWydzdW5nJywgWzk4MzRdXSwgWydzdXAxJywgWzE4NV1dLCBbJ3N1cDInLCBbMTc4XV0sIFsnc3VwMycsIFsxNzldXSwgWydzdXAnLCBbODgzNV1dLCBbJ1N1cCcsIFs4OTEzXV0sIFsnc3VwZG90JywgWzEwOTQyXV0sIFsnc3VwZHN1YicsIFsxMDk2OF1dLCBbJ3N1cEUnLCBbMTA5NTBdXSwgWydzdXBlJywgWzg4MzldXSwgWydzdXBlZG90JywgWzEwOTQ4XV0sIFsnU3VwZXJzZXQnLCBbODgzNV1dLCBbJ1N1cGVyc2V0RXF1YWwnLCBbODgzOV1dLCBbJ3N1cGhzb2wnLCBbMTAxODVdXSwgWydzdXBoc3ViJywgWzEwOTY3XV0sIFsnc3VwbGFycicsIFsxMDYxOV1dLCBbJ3N1cG11bHQnLCBbMTA5NDZdXSwgWydzdXBuRScsIFsxMDk1Nl1dLCBbJ3N1cG5lJywgWzg4NDNdXSwgWydzdXBwbHVzJywgWzEwOTQ0XV0sIFsnc3Vwc2V0JywgWzg4MzVdXSwgWydTdXBzZXQnLCBbODkxM11dLCBbJ3N1cHNldGVxJywgWzg4MzldXSwgWydzdXBzZXRlcXEnLCBbMTA5NTBdXSwgWydzdXBzZXRuZXEnLCBbODg0M11dLCBbJ3N1cHNldG5lcXEnLCBbMTA5NTZdXSwgWydzdXBzaW0nLCBbMTA5NTJdXSwgWydzdXBzdWInLCBbMTA5NjRdXSwgWydzdXBzdXAnLCBbMTA5NjZdXSwgWydzd2FyaGsnLCBbMTA1MzRdXSwgWydzd2FycicsIFs4NjAxXV0sIFsnc3dBcnInLCBbODY2NV1dLCBbJ3N3YXJyb3cnLCBbODYwMV1dLCBbJ3N3bndhcicsIFsxMDUzOF1dLCBbJ3N6bGlnJywgWzIyM11dLCBbJ1RhYicsIFs5XV0sIFsndGFyZ2V0JywgWzg5ODJdXSwgWydUYXUnLCBbOTMyXV0sIFsndGF1JywgWzk2NF1dLCBbJ3RicmsnLCBbOTE0MF1dLCBbJ1RjYXJvbicsIFszNTZdXSwgWyd0Y2Fyb24nLCBbMzU3XV0sIFsnVGNlZGlsJywgWzM1NF1dLCBbJ3RjZWRpbCcsIFszNTVdXSwgWydUY3knLCBbMTA1OF1dLCBbJ3RjeScsIFsxMDkwXV0sIFsndGRvdCcsIFs4NDExXV0sIFsndGVscmVjJywgWzg5ODFdXSwgWydUZnInLCBbMTIwMDg3XV0sIFsndGZyJywgWzEyMDExM11dLCBbJ3RoZXJlNCcsIFs4NzU2XV0sIFsndGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGVyZWZvcmUnLCBbODc1Nl1dLCBbJ1RoZXRhJywgWzkyMF1dLCBbJ3RoZXRhJywgWzk1Ml1dLCBbJ3RoZXRhc3ltJywgWzk3N11dLCBbJ3RoZXRhdicsIFs5NzddXSwgWyd0aGlja2FwcHJveCcsIFs4Nzc2XV0sIFsndGhpY2tzaW0nLCBbODc2NF1dLCBbJ1RoaWNrU3BhY2UnLCBbODI4NywgODIwMl1dLCBbJ1RoaW5TcGFjZScsIFs4MjAxXV0sIFsndGhpbnNwJywgWzgyMDFdXSwgWyd0aGthcCcsIFs4Nzc2XV0sIFsndGhrc2ltJywgWzg3NjRdXSwgWydUSE9STicsIFsyMjJdXSwgWyd0aG9ybicsIFsyNTRdXSwgWyd0aWxkZScsIFs3MzJdXSwgWydUaWxkZScsIFs4NzY0XV0sIFsnVGlsZGVFcXVhbCcsIFs4NzcxXV0sIFsnVGlsZGVGdWxsRXF1YWwnLCBbODc3M11dLCBbJ1RpbGRlVGlsZGUnLCBbODc3Nl1dLCBbJ3RpbWVzYmFyJywgWzEwODAxXV0sIFsndGltZXNiJywgWzg4NjRdXSwgWyd0aW1lcycsIFsyMTVdXSwgWyd0aW1lc2QnLCBbMTA4MDBdXSwgWyd0aW50JywgWzg3NDldXSwgWyd0b2VhJywgWzEwNTM2XV0sIFsndG9wYm90JywgWzkwMTRdXSwgWyd0b3BjaXInLCBbMTA5OTNdXSwgWyd0b3AnLCBbODg2OF1dLCBbJ1RvcGYnLCBbMTIwMTM5XV0sIFsndG9wZicsIFsxMjAxNjVdXSwgWyd0b3Bmb3JrJywgWzEwOTcwXV0sIFsndG9zYScsIFsxMDUzN11dLCBbJ3RwcmltZScsIFs4MjQ0XV0sIFsndHJhZGUnLCBbODQ4Ml1dLCBbJ1RSQURFJywgWzg0ODJdXSwgWyd0cmlhbmdsZScsIFs5NjUzXV0sIFsndHJpYW5nbGVkb3duJywgWzk2NjNdXSwgWyd0cmlhbmdsZWxlZnQnLCBbOTY2N11dLCBbJ3RyaWFuZ2xlbGVmdGVxJywgWzg4ODRdXSwgWyd0cmlhbmdsZXEnLCBbODc5Nl1dLCBbJ3RyaWFuZ2xlcmlnaHQnLCBbOTY1N11dLCBbJ3RyaWFuZ2xlcmlnaHRlcScsIFs4ODg1XV0sIFsndHJpZG90JywgWzk3MDhdXSwgWyd0cmllJywgWzg3OTZdXSwgWyd0cmltaW51cycsIFsxMDgxMF1dLCBbJ1RyaXBsZURvdCcsIFs4NDExXV0sIFsndHJpcGx1cycsIFsxMDgwOV1dLCBbJ3RyaXNiJywgWzEwNzAxXV0sIFsndHJpdGltZScsIFsxMDgxMV1dLCBbJ3RycGV6aXVtJywgWzkxODZdXSwgWydUc2NyJywgWzExOTk4M11dLCBbJ3RzY3InLCBbMTIwMDA5XV0sIFsnVFNjeScsIFsxMDYyXV0sIFsndHNjeScsIFsxMDk0XV0sIFsnVFNIY3knLCBbMTAzNV1dLCBbJ3RzaGN5JywgWzExMTVdXSwgWydUc3Ryb2snLCBbMzU4XV0sIFsndHN0cm9rJywgWzM1OV1dLCBbJ3R3aXh0JywgWzg4MTJdXSwgWyd0d29oZWFkbGVmdGFycm93JywgWzg2MDZdXSwgWyd0d29oZWFkcmlnaHRhcnJvdycsIFs4NjA4XV0sIFsnVWFjdXRlJywgWzIxOF1dLCBbJ3VhY3V0ZScsIFsyNTBdXSwgWyd1YXJyJywgWzg1OTNdXSwgWydVYXJyJywgWzg2MDddXSwgWyd1QXJyJywgWzg2NTddXSwgWydVYXJyb2NpcicsIFsxMDU2OV1dLCBbJ1VicmN5JywgWzEwMzhdXSwgWyd1YnJjeScsIFsxMTE4XV0sIFsnVWJyZXZlJywgWzM2NF1dLCBbJ3VicmV2ZScsIFszNjVdXSwgWydVY2lyYycsIFsyMTldXSwgWyd1Y2lyYycsIFsyNTFdXSwgWydVY3knLCBbMTA1OV1dLCBbJ3VjeScsIFsxMDkxXV0sIFsndWRhcnInLCBbODY0NV1dLCBbJ1VkYmxhYycsIFszNjhdXSwgWyd1ZGJsYWMnLCBbMzY5XV0sIFsndWRoYXInLCBbMTA2MDZdXSwgWyd1ZmlzaHQnLCBbMTA2MjJdXSwgWydVZnInLCBbMTIwMDg4XV0sIFsndWZyJywgWzEyMDExNF1dLCBbJ1VncmF2ZScsIFsyMTddXSwgWyd1Z3JhdmUnLCBbMjQ5XV0sIFsndUhhcicsIFsxMDU5NV1dLCBbJ3VoYXJsJywgWzg2MzldXSwgWyd1aGFycicsIFs4NjM4XV0sIFsndWhibGsnLCBbOTYwMF1dLCBbJ3VsY29ybicsIFs4OTg4XV0sIFsndWxjb3JuZXInLCBbODk4OF1dLCBbJ3VsY3JvcCcsIFs4OTc1XV0sIFsndWx0cmknLCBbOTcyMF1dLCBbJ1VtYWNyJywgWzM2Ml1dLCBbJ3VtYWNyJywgWzM2M11dLCBbJ3VtbCcsIFsxNjhdXSwgWydVbmRlckJhcicsIFs5NV1dLCBbJ1VuZGVyQnJhY2UnLCBbOTE4M11dLCBbJ1VuZGVyQnJhY2tldCcsIFs5MTQxXV0sIFsnVW5kZXJQYXJlbnRoZXNpcycsIFs5MTgxXV0sIFsnVW5pb24nLCBbODg5OV1dLCBbJ1VuaW9uUGx1cycsIFs4ODQ2XV0sIFsnVW9nb24nLCBbMzcwXV0sIFsndW9nb24nLCBbMzcxXV0sIFsnVW9wZicsIFsxMjAxNDBdXSwgWyd1b3BmJywgWzEyMDE2Nl1dLCBbJ1VwQXJyb3dCYXInLCBbMTA1MTRdXSwgWyd1cGFycm93JywgWzg1OTNdXSwgWydVcEFycm93JywgWzg1OTNdXSwgWydVcGFycm93JywgWzg2NTddXSwgWydVcEFycm93RG93bkFycm93JywgWzg2NDVdXSwgWyd1cGRvd25hcnJvdycsIFs4NTk3XV0sIFsnVXBEb3duQXJyb3cnLCBbODU5N11dLCBbJ1VwZG93bmFycm93JywgWzg2NjFdXSwgWydVcEVxdWlsaWJyaXVtJywgWzEwNjA2XV0sIFsndXBoYXJwb29ubGVmdCcsIFs4NjM5XV0sIFsndXBoYXJwb29ucmlnaHQnLCBbODYzOF1dLCBbJ3VwbHVzJywgWzg4NDZdXSwgWydVcHBlckxlZnRBcnJvdycsIFs4NTk4XV0sIFsnVXBwZXJSaWdodEFycm93JywgWzg1OTldXSwgWyd1cHNpJywgWzk2NV1dLCBbJ1Vwc2knLCBbOTc4XV0sIFsndXBzaWgnLCBbOTc4XV0sIFsnVXBzaWxvbicsIFs5MzNdXSwgWyd1cHNpbG9uJywgWzk2NV1dLCBbJ1VwVGVlQXJyb3cnLCBbODYxM11dLCBbJ1VwVGVlJywgWzg4NjldXSwgWyd1cHVwYXJyb3dzJywgWzg2NDhdXSwgWyd1cmNvcm4nLCBbODk4OV1dLCBbJ3VyY29ybmVyJywgWzg5ODldXSwgWyd1cmNyb3AnLCBbODk3NF1dLCBbJ1VyaW5nJywgWzM2Nl1dLCBbJ3VyaW5nJywgWzM2N11dLCBbJ3VydHJpJywgWzk3MjFdXSwgWydVc2NyJywgWzExOTk4NF1dLCBbJ3VzY3InLCBbMTIwMDEwXV0sIFsndXRkb3QnLCBbODk0NF1dLCBbJ1V0aWxkZScsIFszNjBdXSwgWyd1dGlsZGUnLCBbMzYxXV0sIFsndXRyaScsIFs5NjUzXV0sIFsndXRyaWYnLCBbOTY1Ml1dLCBbJ3V1YXJyJywgWzg2NDhdXSwgWydVdW1sJywgWzIyMF1dLCBbJ3V1bWwnLCBbMjUyXV0sIFsndXdhbmdsZScsIFsxMDY2M11dLCBbJ3ZhbmdydCcsIFsxMDY1Ml1dLCBbJ3ZhcmVwc2lsb24nLCBbMTAxM11dLCBbJ3ZhcmthcHBhJywgWzEwMDhdXSwgWyd2YXJub3RoaW5nJywgWzg3MDldXSwgWyd2YXJwaGknLCBbOTgxXV0sIFsndmFycGknLCBbOTgyXV0sIFsndmFycHJvcHRvJywgWzg3MzNdXSwgWyd2YXJyJywgWzg1OTddXSwgWyd2QXJyJywgWzg2NjFdXSwgWyd2YXJyaG8nLCBbMTAwOV1dLCBbJ3ZhcnNpZ21hJywgWzk2Ml1dLCBbJ3ZhcnN1YnNldG5lcScsIFs4ODQyLCA2NTAyNF1dLCBbJ3ZhcnN1YnNldG5lcXEnLCBbMTA5NTUsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxJywgWzg4NDMsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxcScsIFsxMDk1NiwgNjUwMjRdXSwgWyd2YXJ0aGV0YScsIFs5NzddXSwgWyd2YXJ0cmlhbmdsZWxlZnQnLCBbODg4Ml1dLCBbJ3ZhcnRyaWFuZ2xlcmlnaHQnLCBbODg4M11dLCBbJ3ZCYXInLCBbMTA5ODRdXSwgWydWYmFyJywgWzEwOTg3XV0sIFsndkJhcnYnLCBbMTA5ODVdXSwgWydWY3knLCBbMTA0Ml1dLCBbJ3ZjeScsIFsxMDc0XV0sIFsndmRhc2gnLCBbODg2Nl1dLCBbJ3ZEYXNoJywgWzg4NzJdXSwgWydWZGFzaCcsIFs4ODczXV0sIFsnVkRhc2gnLCBbODg3NV1dLCBbJ1ZkYXNobCcsIFsxMDk4Ml1dLCBbJ3ZlZWJhcicsIFs4ODkxXV0sIFsndmVlJywgWzg3NDRdXSwgWydWZWUnLCBbODg5N11dLCBbJ3ZlZWVxJywgWzg3OTRdXSwgWyd2ZWxsaXAnLCBbODk0Ml1dLCBbJ3ZlcmJhcicsIFsxMjRdXSwgWydWZXJiYXInLCBbODIxNF1dLCBbJ3ZlcnQnLCBbMTI0XV0sIFsnVmVydCcsIFs4MjE0XV0sIFsnVmVydGljYWxCYXInLCBbODczOV1dLCBbJ1ZlcnRpY2FsTGluZScsIFsxMjRdXSwgWydWZXJ0aWNhbFNlcGFyYXRvcicsIFsxMDA3Ml1dLCBbJ1ZlcnRpY2FsVGlsZGUnLCBbODc2OF1dLCBbJ1ZlcnlUaGluU3BhY2UnLCBbODIwMl1dLCBbJ1ZmcicsIFsxMjAwODldXSwgWyd2ZnInLCBbMTIwMTE1XV0sIFsndmx0cmknLCBbODg4Ml1dLCBbJ3Zuc3ViJywgWzg4MzQsIDg0MDJdXSwgWyd2bnN1cCcsIFs4ODM1LCA4NDAyXV0sIFsnVm9wZicsIFsxMjAxNDFdXSwgWyd2b3BmJywgWzEyMDE2N11dLCBbJ3Zwcm9wJywgWzg3MzNdXSwgWyd2cnRyaScsIFs4ODgzXV0sIFsnVnNjcicsIFsxMTk5ODVdXSwgWyd2c2NyJywgWzEyMDAxMV1dLCBbJ3ZzdWJuRScsIFsxMDk1NSwgNjUwMjRdXSwgWyd2c3VibmUnLCBbODg0MiwgNjUwMjRdXSwgWyd2c3VwbkUnLCBbMTA5NTYsIDY1MDI0XV0sIFsndnN1cG5lJywgWzg4NDMsIDY1MDI0XV0sIFsnVnZkYXNoJywgWzg4NzRdXSwgWyd2emlnemFnJywgWzEwNjUwXV0sIFsnV2NpcmMnLCBbMzcyXV0sIFsnd2NpcmMnLCBbMzczXV0sIFsnd2VkYmFyJywgWzEwODQ3XV0sIFsnd2VkZ2UnLCBbODc0M11dLCBbJ1dlZGdlJywgWzg4OTZdXSwgWyd3ZWRnZXEnLCBbODc5M11dLCBbJ3dlaWVycCcsIFs4NDcyXV0sIFsnV2ZyJywgWzEyMDA5MF1dLCBbJ3dmcicsIFsxMjAxMTZdXSwgWydXb3BmJywgWzEyMDE0Ml1dLCBbJ3dvcGYnLCBbMTIwMTY4XV0sIFsnd3AnLCBbODQ3Ml1dLCBbJ3dyJywgWzg3NjhdXSwgWyd3cmVhdGgnLCBbODc2OF1dLCBbJ1dzY3InLCBbMTE5OTg2XV0sIFsnd3NjcicsIFsxMjAwMTJdXSwgWyd4Y2FwJywgWzg4OThdXSwgWyd4Y2lyYycsIFs5NzExXV0sIFsneGN1cCcsIFs4ODk5XV0sIFsneGR0cmknLCBbOTY2MV1dLCBbJ1hmcicsIFsxMjAwOTFdXSwgWyd4ZnInLCBbMTIwMTE3XV0sIFsneGhhcnInLCBbMTAyMzFdXSwgWyd4aEFycicsIFsxMDIzNF1dLCBbJ1hpJywgWzkyNl1dLCBbJ3hpJywgWzk1OF1dLCBbJ3hsYXJyJywgWzEwMjI5XV0sIFsneGxBcnInLCBbMTAyMzJdXSwgWyd4bWFwJywgWzEwMjM2XV0sIFsneG5pcycsIFs4OTU1XV0sIFsneG9kb3QnLCBbMTA3NTJdXSwgWydYb3BmJywgWzEyMDE0M11dLCBbJ3hvcGYnLCBbMTIwMTY5XV0sIFsneG9wbHVzJywgWzEwNzUzXV0sIFsneG90aW1lJywgWzEwNzU0XV0sIFsneHJhcnInLCBbMTAyMzBdXSwgWyd4ckFycicsIFsxMDIzM11dLCBbJ1hzY3InLCBbMTE5OTg3XV0sIFsneHNjcicsIFsxMjAwMTNdXSwgWyd4c3FjdXAnLCBbMTA3NThdXSwgWyd4dXBsdXMnLCBbMTA3NTZdXSwgWyd4dXRyaScsIFs5NjUxXV0sIFsneHZlZScsIFs4ODk3XV0sIFsneHdlZGdlJywgWzg4OTZdXSwgWydZYWN1dGUnLCBbMjIxXV0sIFsneWFjdXRlJywgWzI1M11dLCBbJ1lBY3knLCBbMTA3MV1dLCBbJ3lhY3knLCBbMTEwM11dLCBbJ1ljaXJjJywgWzM3NF1dLCBbJ3ljaXJjJywgWzM3NV1dLCBbJ1ljeScsIFsxMDY3XV0sIFsneWN5JywgWzEwOTldXSwgWyd5ZW4nLCBbMTY1XV0sIFsnWWZyJywgWzEyMDA5Ml1dLCBbJ3lmcicsIFsxMjAxMThdXSwgWydZSWN5JywgWzEwMzFdXSwgWyd5aWN5JywgWzExMTFdXSwgWydZb3BmJywgWzEyMDE0NF1dLCBbJ3lvcGYnLCBbMTIwMTcwXV0sIFsnWXNjcicsIFsxMTk5ODhdXSwgWyd5c2NyJywgWzEyMDAxNF1dLCBbJ1lVY3knLCBbMTA3MF1dLCBbJ3l1Y3knLCBbMTEwMl1dLCBbJ3l1bWwnLCBbMjU1XV0sIFsnWXVtbCcsIFszNzZdXSwgWydaYWN1dGUnLCBbMzc3XV0sIFsnemFjdXRlJywgWzM3OF1dLCBbJ1pjYXJvbicsIFszODFdXSwgWyd6Y2Fyb24nLCBbMzgyXV0sIFsnWmN5JywgWzEwNDddXSwgWyd6Y3knLCBbMTA3OV1dLCBbJ1pkb3QnLCBbMzc5XV0sIFsnemRvdCcsIFszODBdXSwgWyd6ZWV0cmYnLCBbODQ4OF1dLCBbJ1plcm9XaWR0aFNwYWNlJywgWzgyMDNdXSwgWydaZXRhJywgWzkxOF1dLCBbJ3pldGEnLCBbOTUwXV0sIFsnemZyJywgWzEyMDExOV1dLCBbJ1pmcicsIFs4NDg4XV0sIFsnWkhjeScsIFsxMDQ2XV0sIFsnemhjeScsIFsxMDc4XV0sIFsnemlncmFycicsIFs4NjY5XV0sIFsnem9wZicsIFsxMjAxNzFdXSwgWydab3BmJywgWzg0ODRdXSwgWydac2NyJywgWzExOTk4OV1dLCBbJ3pzY3InLCBbMTIwMDE1XV0sIFsnendqJywgWzgyMDVdXSwgWyd6d25qJywgWzgyMDRdXV07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgY2hhckluZGV4ID0ge307XG5cbmNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHRtbDVFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXFx3XFxkXSspOz8vZywgZnVuY3Rpb24ocywgZW50aXR5KSB7XG4gICAgICAgIHZhciBjaHI7XG4gICAgICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlbnRpdHkuY2hhckF0KDEpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKCEoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociA9IGFscGhhSW5kZXhbZW50aXR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hyIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmRlY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W2NdO1xuICAgICAgICBpZiAoY2hhckluZm8pIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IGNoYXJJbmZvW3N0ci5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFscGhhID0gY2hhckluZm9bJyddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbHBoYUluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhckluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KSB7XG4gICAgdmFyIGkgPSBFTlRJVElFUy5sZW5ndGg7XG4gICAgdmFyIF9yZXN1bHRzID0gW107XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgZSA9IEVOVElUSUVTW2ldO1xuICAgICAgICB2YXIgYWxwaGEgPSBlWzBdO1xuICAgICAgICB2YXIgY2hhcnMgPSBlWzFdO1xuICAgICAgICB2YXIgY2hyID0gY2hhcnNbMF07XG4gICAgICAgIHZhciBhZGRDaGFyID0gKGNociA8IDMyIHx8IGNociA+IDEyNikgfHwgY2hyID09PSA2MiB8fCBjaHIgPT09IDYwIHx8IGNociA9PT0gMzggfHwgY2hyID09PSAzNCB8fCBjaHIgPT09IDM5O1xuICAgICAgICB2YXIgY2hhckluZm87XG4gICAgICAgIGlmIChhZGRDaGFyKSB7XG4gICAgICAgICAgICBjaGFySW5mbyA9IGNoYXJJbmRleFtjaHJdID0gY2hhckluZGV4W2Nocl0gfHwge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJzWzFdKSB7XG4gICAgICAgICAgICB2YXIgY2hyMiA9IGNoYXJzWzFdO1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocikgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChhZGRDaGFyICYmIChjaGFySW5mb1tjaHIyXSA9IGFscGhhKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbHBoYUluZGV4W2FscGhhXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bJyddID0gYWxwaGEpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNUVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw1LWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDE0IDE2IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHlwaGVuYXRlID0gcmVxdWlyZSgnLi9oeXBoZW5hdGUnKTtcblxudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBoeXBoZW5hdGUoc3RyaW5nKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZG9IYXNoO1xuLy8gbXVybXVyaGFzaDIgdmlhIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3JheWNtb3JnYW4vNTg4NDIzXG5cbmZ1bmN0aW9uIGRvSGFzaChzdHIsIHNlZWQpIHtcbiAgdmFyIG0gPSAweDViZDFlOTk1O1xuICB2YXIgciA9IDI0O1xuICB2YXIgaCA9IHNlZWQgXiBzdHIubGVuZ3RoO1xuICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgd2hpbGUgKGxlbmd0aCA+PSA0KSB7XG4gICAgdmFyIGsgPSBVSW50MzIoc3RyLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgayA9IFVtdWwzMihrLCBtKTtcbiAgICBrIF49IGsgPj4+IHI7XG4gICAgayA9IFVtdWwzMihrLCBtKTtcblxuICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgaCBePSBrO1xuXG4gICAgY3VycmVudEluZGV4ICs9IDQ7XG4gICAgbGVuZ3RoIC09IDQ7XG4gIH1cblxuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gVUludDE2KHN0ciwgY3VycmVudEluZGV4KTtcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoY3VycmVudEluZGV4ICsgMikgPDwgMTY7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBoIF49IGggPj4+IDEzO1xuICBoID0gVW11bDMyKGgsIG0pO1xuICBoIF49IGggPj4+IDE1O1xuXG4gIHJldHVybiBoID4+PiAwO1xufVxuXG5mdW5jdGlvbiBVSW50MzIoc3RyLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KHBvcysrKSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgOCkgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDE2KSArIChzdHIuY2hhckNvZGVBdChwb3MpIDw8IDI0KTtcbn1cblxuZnVuY3Rpb24gVUludDE2KHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpO1xufVxuXG5mdW5jdGlvbiBVbXVsMzIobiwgbSkge1xuICBuID0gbiB8IDA7XG4gIG0gPSBtIHwgMDtcbiAgdmFyIG5sbyA9IG4gJiAweGZmZmY7XG4gIHZhciBuaGkgPSBuID4+PiAxNjtcbiAgdmFyIHJlcyA9IG5sbyAqIG0gKyAoKG5oaSAqIG0gJiAweGZmZmYpIDw8IDE2KSB8IDA7XG4gIHJldHVybiByZXM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvaGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0geyBcIldlYmtpdFwiOiB7IFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZVwiOiB0cnVlLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtU3R5bGVcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IHRydWUsIFwiYW5pbWF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRGVsYXlcIjogdHJ1ZSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiB0cnVlLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSwgXCJhbmltYXRpb25OYW1lXCI6IHRydWUsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IHRydWUsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSwgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImZvbnRLZXJuaW5nXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiB0cnVlLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IHRydWUsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IHRydWUsIFwiY2xpcFBhdGhcIjogdHJ1ZSwgXCJtYXNrSW1hZ2VcIjogdHJ1ZSwgXCJtYXNrTW9kZVwiOiB0cnVlLCBcIm1hc2tSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrUG9zaXRpb25cIjogdHJ1ZSwgXCJtYXNrQ2xpcFwiOiB0cnVlLCBcIm1hc2tPcmlnaW5cIjogdHJ1ZSwgXCJtYXNrU2l6ZVwiOiB0cnVlLCBcIm1hc2tDb21wb3NpdGVcIjogdHJ1ZSwgXCJtYXNrXCI6IHRydWUsIFwibWFza0JvcmRlclNvdXJjZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJNb2RlXCI6IHRydWUsIFwibWFza0JvcmRlclNsaWNlXCI6IHRydWUsIFwibWFza0JvcmRlcldpZHRoXCI6IHRydWUsIFwibWFza0JvcmRlck91dHNldFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyXCI6IHRydWUsIFwibWFza1R5cGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcImZpbHRlclwiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUsIFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiB0cnVlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiB0cnVlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiB0cnVlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IHRydWUsIFwiYWxpZ25JdGVtc1wiOiB0cnVlLCBcImFsaWduU2VsZlwiOiB0cnVlLCBcImp1c3RpZnlDb250ZW50XCI6IHRydWUsIFwib3JkZXJcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvbkRlbGF5XCI6IHRydWUsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IHRydWUsIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUsIFwiYmFja2Ryb3BGaWx0ZXJcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjogdHJ1ZSwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IHRydWUsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwidGV4dFNpemVBZGp1c3RcIjogdHJ1ZSB9LCBcIk1velwiOiB7IFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJib3hTaXppbmdcIjogdHJ1ZSwgXCJ0ZXh0QWxpZ25MYXN0XCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJ0YWJTaXplXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUgfSwgXCJtc1wiOiB7IFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiBmYWxzZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogZmFsc2UsIFwiZmxleEZsb3dcIjogdHJ1ZSwgXCJmbGV4U2hyaW5rXCI6IGZhbHNlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IGZhbHNlLCBcImFsaWduSXRlbXNcIjogZmFsc2UsIFwiYWxpZ25TZWxmXCI6IGZhbHNlLCBcImp1c3RpZnlDb250ZW50XCI6IGZhbHNlLCBcIm9yZGVyXCI6IGZhbHNlLCBcInRyYW5zZm9ybVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblhcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcIndyYXBGbG93XCI6IHRydWUsIFwid3JhcFRocm91Z2hcIjogdHJ1ZSwgXCJ3cmFwTWFyZ2luXCI6IHRydWUsIFwic2Nyb2xsU25hcFR5cGVcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IHRydWUsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IHRydWUsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogdHJ1ZSwgXCJ0b3VjaEFjdGlvblwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmbG93SW50b1wiOiB0cnVlLCBcImZsb3dGcm9tXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJyZWdpb25GcmFnbWVudFwiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVSb3dzXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlQXJlYXNcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVcIjogdHJ1ZSwgXCJncmlkQXV0b0NvbHVtbnNcIjogdHJ1ZSwgXCJncmlkQXV0b1Jvd3NcIjogdHJ1ZSwgXCJncmlkQXV0b0Zsb3dcIjogdHJ1ZSwgXCJncmlkXCI6IHRydWUsIFwiZ3JpZFJvd1N0YXJ0XCI6IHRydWUsIFwiZ3JpZENvbHVtblN0YXJ0XCI6IHRydWUsIFwiZ3JpZFJvd0VuZFwiOiB0cnVlLCBcImdyaWRSb3dcIjogdHJ1ZSwgXCJncmlkQ29sdW1uXCI6IHRydWUsIFwiZ3JpZENvbHVtbkVuZFwiOiB0cnVlLCBcImdyaWRDb2x1bW5HYXBcIjogdHJ1ZSwgXCJncmlkUm93R2FwXCI6IHRydWUsIFwiZ3JpZEFyZWFcIjogdHJ1ZSwgXCJncmlkR2FwXCI6IHRydWUsIFwidGV4dFNpemVBZGp1c3RcIjogdHJ1ZSB9IH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhQcm9wcy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8gaGVscGVyIHRvIGNhcGl0YWxpemUgc3RyaW5nc1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG8pID09PSB0cnVlXG4gICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcbiAgXG4gIGlmIChpc09iamVjdE9iamVjdChvKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGVvZiBjdG9yICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICBcbiAgLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG4gIGlmIChwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcGxhaW4tb2JqZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3BhcnNlID0gcmVxdWlyZSgnLi4vdmVuZG9yL3Bvc3Rjc3Mtc2FmZS1wYXJzZXIvcGFyc2UnKTtcblxudmFyIF9wYXJzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZSk7XG5cbnZhciBfcG9zdGNzc05lc3RlZCA9IHJlcXVpcmUoJy4uL3ZlbmRvci9wb3N0Y3NzLW5lc3RlZCcpO1xuXG52YXIgX3Bvc3Rjc3NOZXN0ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zdGNzc05lc3RlZCk7XG5cbnZhciBfZmxhdHRlbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZsYXR0ZW4nKTtcblxudmFyIF9mbGF0dGVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsYXR0ZW4pO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKTtcblxudmFyIF9TdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfUnVsZVNldCA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfUnVsZVNldCB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbnZhciBDb21wb25lbnRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50U3R5bGUocnVsZXMsIHNlbGVjdG9yKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudFN0eWxlKTtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29tcG9uZW50U3R5bGUsIFt7XG4gICAga2V5OiAnZ2VuZXJhdGVBbmRJbmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUFuZEluamVjdCgpIHtcbiAgICAgIGlmICghX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5qZWN0ZWQpIF9TdHlsZVNoZWV0Mi5kZWZhdWx0LmluamVjdCgpO1xuICAgICAgdmFyIGZsYXRDU1MgPSAoMCwgX2ZsYXR0ZW4yLmRlZmF1bHQpKHRoaXMucnVsZXMpLmpvaW4oJycpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgICAgZmxhdENTUyA9IHRoaXMuc2VsZWN0b3IgKyAnIHsnICsgZmxhdENTUyArICdcXG59JztcbiAgICAgIH1cbiAgICAgIHZhciByb290ID0gKDAsIF9wYXJzZTIuZGVmYXVsdCkoZmxhdENTUyk7XG4gICAgICAoMCwgX3Bvc3Rjc3NOZXN0ZWQyLmRlZmF1bHQpKHJvb3QpO1xuICAgICAgX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5zZXJ0KHJvb3QudG9SZXN1bHQoKS5jc3MsIHsgZ2xvYmFsOiB0cnVlIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb21wb25lbnRTdHlsZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29tcG9uZW50U3R5bGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9HbG9iYWxTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuLyogV3JhcHMgZ2xhbW9yJ3Mgc3R5bGVzaGVldCBhbmQgZXhwb3J0cyBhIHNpbmdsZXRvbiBmb3Igc3R5bGVkIGNvbXBvbmVudHNcbnRvIHVzZS4gKi9cblxuXG52YXIgX3NoZWV0ID0gcmVxdWlyZSgnLi4vdmVuZG9yL2dsYW1vci9zaGVldCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfR2xhbW9ySW5zZXJ0ZWRSdWxlID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9HbGFtb3JJbnNlcnRlZFJ1bGUgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfR2xhbW9yUnVsZSA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfR2xhbW9yUnVsZSB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbnZhciBTdHlsZVNoZWV0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIC8qIERvbid0IHNwZWNpZnkgYSBtYXhMZW5ndGggZm9yIHRoZSBnbG9iYWwgc2hlZXQsIHNpbmNlIHRoZXNlIHJ1bGVzXG4gICAgICogYXJlIGRlZmluZWQgYXQgaW5pdGlhbGl6YXRpb24gYW5kIHNob3VsZCByZW1haW4gc3RhdGljIGFmdGVyIHRoYXQgKi9cbiAgICB0aGlzLmdsb2JhbFN0eWxlU2hlZXQgPSBuZXcgX3NoZWV0LlN0eWxlU2hlZXQoeyBzcGVlZHk6IGZhbHNlIH0pO1xuICAgIHRoaXMuY29tcG9uZW50U3R5bGVTaGVldCA9IG5ldyBfc2hlZXQuU3R5bGVTaGVldCh7IHNwZWVkeTogZmFsc2UsIG1heExlbmd0aDogNDAgfSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVTaGVldCwgW3tcbiAgICBrZXk6ICdpbmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgICB0aGlzLmdsb2JhbFN0eWxlU2hlZXQuaW5qZWN0KCk7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0eWxlU2hlZXQuaW5qZWN0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmx1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgIGlmICh0aGlzLmdsb2JhbFN0eWxlU2hlZXQuc2hlZXQpIHRoaXMuZ2xvYmFsU3R5bGVTaGVldC5mbHVzaCgpO1xuICAgICAgaWYgKHRoaXMuY29tcG9uZW50U3R5bGVTaGVldC5zaGVldCkgdGhpcy5jb21wb25lbnRTdHlsZVNoZWV0LmZsdXNoKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5zZXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7IGdsb2JhbDogZmFsc2UgfTtcblxuICAgICAgdmFyIHNoZWV0ID0gb3B0cy5nbG9iYWwgPyB0aGlzLmdsb2JhbFN0eWxlU2hlZXQgOiB0aGlzLmNvbXBvbmVudFN0eWxlU2hlZXQ7XG4gICAgICByZXR1cm4gc2hlZXQuaW5zZXJ0KHJ1bGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3J1bGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcnVsZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxTdHlsZVNoZWV0LnJ1bGVzKCkuY29uY2F0KHRoaXMuY29tcG9uZW50U3R5bGVTaGVldC5ydWxlcygpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbmplY3RlZCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxTdHlsZVNoZWV0LmluamVjdGVkICYmIHRoaXMuY29tcG9uZW50U3R5bGVTaGVldC5pbmplY3RlZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuLyogRXhwb3J0IHN0eWxlc2hlZXQgYXMgYSBzaW5nbGV0b24gY2xhc3MgKi9cblxuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgU3R5bGVTaGVldCgpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvU3R5bGVTaGVldC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCBcImJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0Jyb2FkY2FzdFwiLCB7XG4gIHZhbHVlOiByZXF1aXJlKFwicmVhY3RcIikuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwdWJsaXNoOiByZXF1aXJlKFwicmVhY3RcIikuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzdWJzY3JpYmU6IHJlcXVpcmUoXCJyZWFjdFwiKS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0pXG59KTtcbi8qKlxuICogQ3JlYXRlcyBhIGJyb2FkY2FzdCB0aGF0IGNhbiBiZSBsaXN0ZW5lZCB0bywgaS5lLiBzaW1wbGUgZXZlbnQgZW1pdHRlclxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvcmVhY3QtYnJvYWRjYXN0XG4gKi9cblxudmFyIGNyZWF0ZUJyb2FkY2FzdCA9IGZ1bmN0aW9uIGNyZWF0ZUJyb2FkY2FzdChpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICB2YXIgY3VycmVudFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIHJldHVybiB7XG4gICAgcHVibGlzaDogZnVuY3Rpb24gcHVibGlzaCh2YWx1ZSkge1xuICAgICAgY3VycmVudFZhbHVlID0gdmFsdWU7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFB1Ymxpc2ggdG8gdGhpcyBzdWJzY3JpYmVyIG9uY2UgaW1tZWRpYXRlbHkuXG4gICAgICBsaXN0ZW5lcihjdXJyZW50VmFsdWUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQnJvYWRjYXN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2NyZWF0ZS1icm9hZGNhc3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBzZWxlY3RvcnMocGFyZW50LCBub2RlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgcGFyZW50LnNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgbm9kZS5zZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgaWYgKGouaW5kZXhPZignJicpID09PSAtMSkge1xuICAgICAgICByZXN1bHQucHVzaChpICsgJyAnICsgaik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChqLnJlcGxhY2UoLyYvZywgaSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGlja0NvbW1lbnQoY29tbWVudCwgYWZ0ZXIpIHtcbiAgaWYgKGNvbW1lbnQgJiYgY29tbWVudC50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICByZXR1cm4gY29tbWVudC5tb3ZlQWZ0ZXIoYWZ0ZXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhZnRlcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhdHJ1bGVDaGlsZHMocnVsZSwgYXRydWxlKSB7XG4gIHZhciBjaGlsZHJlbiA9IFtdO1xuICBhdHJ1bGUuZWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09ICdkZWNsJykge1xuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09PSAncnVsZScpIHtcbiAgICAgIGNoaWxkLnNlbGVjdG9ycyA9IHNlbGVjdG9ycyhydWxlLCBjaGlsZCk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09PSAnYXRydWxlJykge1xuICAgICAgYXRydWxlQ2hpbGRzKHJ1bGUsIGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgdmFyIGNsb25lID0gcnVsZS5jbG9uZSh7IG5vZGVzOiBbXSB9KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5tb3ZlVG8oY2xvbmUpO1xuICAgIH1hdHJ1bGUucHJlcGVuZChjbG9uZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1J1bGUocnVsZSwgYnViYmxlKSB7XG4gIHZhciB1bndyYXBwZWQgPSBmYWxzZTtcbiAgdmFyIGFmdGVyID0gcnVsZTtcbiAgcnVsZS5lYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSAncnVsZScpIHtcbiAgICAgIHVud3JhcHBlZCA9IHRydWU7XG4gICAgICBjaGlsZC5zZWxlY3RvcnMgPSBzZWxlY3RvcnMocnVsZSwgY2hpbGQpO1xuICAgICAgYWZ0ZXIgPSBwaWNrQ29tbWVudChjaGlsZC5wcmV2KCksIGFmdGVyKTtcbiAgICAgIGFmdGVyID0gY2hpbGQubW92ZUFmdGVyKGFmdGVyKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09ICdhdHJ1bGUnKSB7XG4gICAgICBpZiAoYnViYmxlLmluZGV4T2YoY2hpbGQubmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHVud3JhcHBlZCA9IHRydWU7XG4gICAgICAgIGF0cnVsZUNoaWxkcyhydWxlLCBjaGlsZCk7XG4gICAgICAgIGFmdGVyID0gcGlja0NvbW1lbnQoY2hpbGQucHJldigpLCBhZnRlcik7XG4gICAgICAgIGFmdGVyID0gY2hpbGQubW92ZUFmdGVyKGFmdGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAodW53cmFwcGVkKSB7XG4gICAgcnVsZS5yYXdzLnNlbWljb2xvbiA9IHRydWU7XG4gICAgaWYgKHJ1bGUubm9kZXMubGVuZ3RoID09PSAwKSBydWxlLnJlbW92ZSgpO1xuICB9XG59XG5cbnZhciBidWJibGUgPSBbJ21lZGlhJywgJ3N1cHBvcnRzJywgJ2RvY3VtZW50J107XG5cbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gcHJvY2Vzcyhub2RlKSB7XG4gIG5vZGUuZWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ3J1bGUnKSB7XG4gICAgICBwcm9jZXNzUnVsZShjaGlsZCwgYnViYmxlKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09ICdhdHJ1bGUnKSB7XG4gICAgICBwcm9jZXNzKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcHJvY2Vzcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MtbmVzdGVkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzYWZlUGFyc2U7XG5cbnZhciBfaW5wdXQgPSByZXF1aXJlKCcuLi9wb3N0Y3NzL2lucHV0Jyk7XG5cbnZhciBfaW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5wdXQpO1xuXG52YXIgX3NhZmVQYXJzZXIgPSByZXF1aXJlKCcuL3NhZmUtcGFyc2VyJyk7XG5cbnZhciBfc2FmZVBhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zYWZlUGFyc2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2FmZVBhcnNlKGNzcywgb3B0cykge1xuICAgIHZhciBpbnB1dCA9IG5ldyBfaW5wdXQyLmRlZmF1bHQoY3NzLCBvcHRzKTtcblxuICAgIHZhciBwYXJzZXIgPSBuZXcgX3NhZmVQYXJzZXIyLmRlZmF1bHQoaW5wdXQpO1xuICAgIHBhcnNlci50b2tlbml6ZSgpO1xuICAgIHBhcnNlci5sb29wKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyLnJvb3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzLXNhZmUtcGFyc2VyL3BhcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG5cbnZhciBfc3VwcG9ydHNDb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdXBwb3J0c0NvbG9yKTtcblxudmFyIF90ZXJtaW5hbEhpZ2hsaWdodCA9IHJlcXVpcmUoJy4vdGVybWluYWwtaGlnaGxpZ2h0Jyk7XG5cbnZhciBfdGVybWluYWxIaWdobGlnaHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybWluYWxIaWdobGlnaHQpO1xuXG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKTtcblxudmFyIF93YXJuT25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuT25jZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogVGhlIENTUyBwYXJzZXIgdGhyb3dzIHRoaXMgZXJyb3IgZm9yIGJyb2tlbiBDU1MuXG4gKlxuICogQ3VzdG9tIHBhcnNlcnMgY2FuIHRocm93IHRoaXMgZXJyb3IgZm9yIGJyb2tlbiBjdXN0b20gc3ludGF4IHVzaW5nXG4gKiB0aGUge0BsaW5rIE5vZGUjZXJyb3J9IG1ldGhvZC5cbiAqXG4gKiBQb3N0Q1NTIHdpbGwgdXNlIHRoZSBpbnB1dCBzb3VyY2UgbWFwIHRvIGRldGVjdCB0aGUgb3JpZ2luYWwgZXJyb3IgbG9jYXRpb24uXG4gKiBJZiB5b3Ugd3JvdGUgYSBTYXNzIGZpbGUsIGNvbXBpbGVkIGl0IHRvIENTUyBhbmQgdGhlbiBwYXJzZWQgaXQgd2l0aCBQb3N0Q1NTLFxuICogUG9zdENTUyB3aWxsIHNob3cgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGluIHRoZSBTYXNzIGZpbGUuXG4gKlxuICogSWYgeW91IG5lZWQgdGhlIHBvc2l0aW9uIGluIHRoZSBQb3N0Q1NTIGlucHV0XG4gKiAoZS5nLiwgdG8gZGVidWcgdGhlIHByZXZpb3VzIGNvbXBpbGVyKSwgdXNlIGBlcnJvci5pbnB1dC5maWxlYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2F0Y2hpbmcgYW5kIGNoZWNraW5nIHN5bnRheCBlcnJvclxuICogdHJ5IHtcbiAqICAgcG9zdGNzcy5wYXJzZSgnYXsnKVxuICogfSBjYXRjaCAoZXJyb3IpIHtcbiAqICAgaWYgKCBlcnJvci5uYW1lID09PSAnQ3NzU3ludGF4RXJyb3InICkge1xuICogICAgIGVycm9yIC8vPT4gQ3NzU3ludGF4RXJyb3JcbiAqICAgfVxuICogfVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSYWlzaW5nIGVycm9yIGZyb20gcGx1Z2luXG4gKiB0aHJvdyBub2RlLmVycm9yKCdVbmtub3duIHZhcmlhYmxlJywgeyBwbHVnaW46ICdwb3N0Y3NzLXZhcnMnIH0pO1xuICovXG52YXIgQ3NzU3ludGF4RXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAgLSBlcnJvciBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsaW5lXSAgIC0gc291cmNlIGxpbmUgb2YgdGhlIGVycm9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb2x1bW5dIC0gc291cmNlIGNvbHVtbiBvZiB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3NvdXJjZV0gLSBzb3VyY2UgY29kZSBvZiB0aGUgYnJva2VuIGZpbGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZpbGVdICAgLSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBicm9rZW4gZmlsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcGx1Z2luXSAtIFBvc3RDU1MgcGx1Z2luIG5hbWUsIGlmIGVycm9yIGNhbWUgZnJvbSBwbHVnaW5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDc3NTeW50YXhFcnJvcihtZXNzYWdlLCBsaW5lLCBjb2x1bW4sIHNvdXJjZSwgZmlsZSwgcGx1Z2luKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDc3NTeW50YXhFcnJvcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBBbHdheXMgZXF1YWwgdG8gYCdDc3NTeW50YXhFcnJvcidgLiBZb3Ugc2hvdWxkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICBhbHdheXMgY2hlY2sgZXJyb3IgdHlwZVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgYnkgYGVycm9yLm5hbWUgPT09ICdDc3NTeW50YXhFcnJvcidgIGluc3RlYWQgb2ZcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIGBlcnJvciBpbnN0YW5jZW9mIENzc1N5bnRheEVycm9yYCwgYmVjYXVzZVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgbnBtIGNvdWxkIGhhdmUgc2V2ZXJhbCBQb3N0Q1NTIHZlcnNpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBpZiAoIGVycm9yLm5hbWUgPT09ICdDc3NTeW50YXhFcnJvcicgKSB7XG4gICAgICAgICAqICAgZXJyb3IgLy89PiBDc3NTeW50YXhFcnJvclxuICAgICAgICAgKiB9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ3NzU3ludGF4RXJyb3InO1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSAtIEVycm9yIG1lc3NhZ2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGVycm9yLm1lc3NhZ2UgLy89PiAnVW5jbG9zZWQgYmxvY2snXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYXNvbiA9IG1lc3NhZ2U7XG5cbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSAtIEFic29sdXRlIHBhdGggdG8gdGhlIGJyb2tlbiBmaWxlLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgKiBlcnJvci5maWxlICAgICAgIC8vPT4gJ2Euc2FzcydcbiAgICAgICAgICAgICAqIGVycm9yLmlucHV0LmZpbGUgLy89PiAnYS5jc3MnXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gU291cmNlIGNvZGUgb2YgdGhlIGJyb2tlbiBmaWxlLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgKiBlcnJvci5zb3VyY2UgICAgICAgLy89PiAnYSB7IGIge30gfSdcbiAgICAgICAgICAgICAqIGVycm9yLmlucHV0LmNvbHVtbiAvLz0+ICdhIGIgeyB9J1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGx1Z2luKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBQbHVnaW4gbmFtZSwgaWYgZXJyb3IgY2FtZSBmcm9tIHBsdWdpbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgICAgICogZXJyb3IucGx1Z2luIC8vPT4gJ3Bvc3Rjc3MtdmFycydcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsaW5lICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29sdW1uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IC0gU291cmNlIGxpbmUgb2YgdGhlIGVycm9yLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgKiBlcnJvci5saW5lICAgICAgIC8vPT4gMlxuICAgICAgICAgICAgICogZXJyb3IuaW5wdXQubGluZSAvLz0+IDRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSAtIFNvdXJjZSBjb2x1bW4gb2YgdGhlIGVycm9yLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgKiBlcnJvci5jb2x1bW4gICAgICAgLy89PiAxXG4gICAgICAgICAgICAgKiBlcnJvci5pbnB1dC5jb2x1bW4gLy89PiA0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCk7XG5cbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBDc3NTeW50YXhFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ3NzU3ludGF4RXJyb3IsIFt7XG4gICAgICAgIGtleTogJ3NldE1lc3NhZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TWVzc2FnZSgpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSAtIEZ1bGwgZXJyb3IgdGV4dCBpbiB0aGUgR05VIGVycm9yIGZvcm1hdFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHdpdGggcGx1Z2luLCBmaWxlLCBsaW5lIGFuZCBjb2x1bW4uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqIGVycm9yLm1lc3NhZ2UgLy89PiAnYS5jc3M6MToxOiBVbmNsb3NlZCBibG9jaydcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5wbHVnaW4gPyB0aGlzLnBsdWdpbiArICc6ICcgOiAnJztcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSArPSB0aGlzLmZpbGUgPyB0aGlzLmZpbGUgOiAnPGNzcyBpbnB1dD4nO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlICs9ICc6JyArIHRoaXMubGluZSArICc6JyArIHRoaXMuY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlICs9ICc6ICcgKyB0aGlzLnJlYXNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgZmV3IGxpbmVzIG9mIENTUyBzb3VyY2UgdGhhdCBjYXVzZWQgdGhlIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgQ1NTIGhhcyBhbiBpbnB1dCBzb3VyY2UgbWFwIHdpdGhvdXQgYHNvdXJjZUNvbnRlbnRgLFxuICAgICAgICAgKiB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBhbiBlbXB0eSBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbG9yXSB3aGV0aGVyIGFycm93IHdpbGwgYmUgY29sb3JlZCByZWQgYnkgdGVybWluYWxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIGNvZGVzLiBCeSBkZWZhdWx0LCBQb3N0Q1NTIHdpbGwgZGV0ZWN0XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciBzdXBwb3J0IGJ5IGBwcm9jZXNzLnN0ZG91dC5pc1RUWWBcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBgcHJvY2Vzcy5lbnYuTk9ERV9ESVNBQkxFX0NPTE9SU2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGVycm9yLnNob3dTb3VyY2VDb2RlKCkgLy89PiBcIiAgNCB8IH1cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgIDUgfCBhIHtcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAvLyAgICA+IDYgfCAgIGJhZFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICB8ICAgXlxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgNyB8IH1cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgIDggfCBiIHtcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGZldyBsaW5lcyBvZiBDU1Mgc291cmNlIHRoYXQgY2F1c2VkIHRoZSBlcnJvclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2hvd1NvdXJjZUNvZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1NvdXJjZUNvZGUoY29sb3IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zb3VyY2UpIHJldHVybiAnJztcblxuICAgICAgICAgICAgdmFyIGNzcyA9IHRoaXMuc291cmNlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIGNvbG9yID0gX3N1cHBvcnRzQ29sb3IyLmRlZmF1bHQ7XG4gICAgICAgICAgICBpZiAoY29sb3IpIGNzcyA9ICgwLCBfdGVybWluYWxIaWdobGlnaHQyLmRlZmF1bHQpKGNzcyk7XG5cbiAgICAgICAgICAgIHZhciBsaW5lcyA9IGNzcy5zcGxpdCgvXFxyP1xcbi8pO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gTWF0aC5tYXgodGhpcy5saW5lIC0gMywgMCk7XG4gICAgICAgICAgICB2YXIgZW5kID0gTWF0aC5taW4odGhpcy5saW5lICsgMiwgbGluZXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgdmFyIG1heFdpZHRoID0gU3RyaW5nKGVuZCkubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uIChsaW5lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBudW1iZXIgPSBzdGFydCArIDEgKyBpbmRleDtcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGVkID0gKCcgJyArIG51bWJlcikuc2xpY2UoLW1heFdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgZ3V0dGVyID0gJyAnICsgcGFkZGVkICsgJyB8ICc7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gX3RoaXMubGluZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2luZyA9IGd1dHRlci5yZXBsYWNlKC9cXGQvZywgJyAnKSArIGxpbmUuc2xpY2UoMCwgX3RoaXMuY29sdW1uIC0gMSkucmVwbGFjZSgvW15cXHRdL2csICcgJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPicgKyBndXR0ZXIgKyBsaW5lICsgJ1xcbiAnICsgc3BhY2luZyArICdeJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyAnICsgZ3V0dGVyICsgbGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGVycm9yIHBvc2l0aW9uLCBtZXNzYWdlIGFuZCBzb3VyY2UgY29kZSBvZiB0aGUgYnJva2VuIHBhcnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGVycm9yLnRvU3RyaW5nKCkgLy89PiBcIkNzc1N5bnRheEVycm9yOiBhcHAuY3NzOjE6MTogVW5jbG9zZWQgYmxvY2tcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAvLyAgICA+IDEgfCBhIHtcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAvLyAgICAgICAgfCBeXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBlcnJvciBwb3NpdGlvbiwgbWVzc2FnZSBhbmQgc291cmNlIGNvZGVcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSB0aGlzLnNob3dTb3VyY2VDb2RlKCk7XG4gICAgICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgICAgICAgIGNvZGUgPSAnXFxuXFxuJyArIGNvZGUgKyAnXFxuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAnOiAnICsgdGhpcy5tZXNzYWdlICsgY29kZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2VuZXJhdGVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnQ3NzU3ludGF4RXJyb3IjZ2VuZXJhdGVkIGlzIGRlcHJlYWN0ZWQuIFVzZSBpbnB1dCBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIENzc1N5bnRheEVycm9yI1xuICAgICAgICAgKiBAbWVtYmVyIHtJbnB1dH0gaW5wdXQgLSBJbnB1dCBvYmplY3Qgd2l0aCBQb3N0Q1NTIGludGVybmFsIGluZm9ybWF0aW9uXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IGlucHV0IGZpbGUuIElmIGlucHV0IGhhcyBzb3VyY2UgbWFwXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gcHJldmlvdXMgdG9vbCwgUG9zdENTUyB3aWxsIHVzZSBvcmlnaW5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgKGZvciBleGFtcGxlLCBTYXNzKSBzb3VyY2UuIFlvdSBjYW4gdXNlIHRoaXNcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0IHRvIGdldCBQb3N0Q1NTIGlucHV0IHNvdXJjZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZXJyb3IuaW5wdXQuZmlsZSAvLz0+ICdhLmNzcydcbiAgICAgICAgICogZXJyb3IuZmlsZSAgICAgICAvLz0+ICdhLnNhc3MnXG4gICAgICAgICAqL1xuXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENzc1N5bnRheEVycm9yO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDc3NTeW50YXhFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvY3NzLXN5bnRheC1lcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKTtcblxudmFyIF93YXJuT25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuT25jZSk7XG5cbnZhciBfbm9kZSA9IHJlcXVpcmUoJy4vbm9kZScpO1xuXG52YXIgX25vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQ1NTIGRlY2xhcmF0aW9uLlxuICpcbiAqIEBleHRlbmRzIE5vZGVcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EgeyBjb2xvcjogYmxhY2sgfScpO1xuICogY29uc3QgZGVjbCA9IHJvb3QuZmlyc3QuZmlyc3Q7XG4gKiBkZWNsLnR5cGUgICAgICAgLy89PiAnZGVjbCdcbiAqIGRlY2wudG9TdHJpbmcoKSAvLz0+ICcgY29sb3I6IGJsYWNrJ1xuICovXG52YXIgRGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoX05vZGUpIHtcbiAgICBfaW5oZXJpdHMoRGVjbGFyYXRpb24sIF9Ob2RlKTtcblxuICAgIGZ1bmN0aW9uIERlY2xhcmF0aW9uKGRlZmF1bHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWNsYXJhdGlvbik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERlY2xhcmF0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGVjbGFyYXRpb24pKS5jYWxsKHRoaXMsIGRlZmF1bHRzKSk7XG5cbiAgICAgICAgX3RoaXMudHlwZSA9ICdkZWNsJztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEZWNsYXJhdGlvbiwgW3tcbiAgICAgICAga2V5OiAnX3ZhbHVlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNfdmFsdWUgd2FzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MudmFsdWUnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhd3MudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ05vZGUjX3ZhbHVlIHdhcyBkZXByZWNhdGVkLiBVc2UgTm9kZSNyYXdzLnZhbHVlJyk7XG4gICAgICAgICAgICB0aGlzLnJhd3MudmFsdWUgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19pbXBvcnRhbnQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICgwLCBfd2Fybk9uY2UyLmRlZmF1bHQpKCdOb2RlI19pbXBvcnRhbnQgd2FzIGRlcHJlY2F0ZWQuIFVzZSBOb2RlI3Jhd3MuaW1wb3J0YW50Jyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXdzLmltcG9ydGFudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5PbmNlMi5kZWZhdWx0KSgnTm9kZSNfaW1wb3J0YW50IHdhcyBkZXByZWNhdGVkLiBVc2UgTm9kZSNyYXdzLmltcG9ydGFudCcpO1xuICAgICAgICAgICAgdGhpcy5yYXdzLmltcG9ydGFudCA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgRGVjbGFyYXRpb24jXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gcHJvcCAtIHRoZSBkZWNsYXJhdGlvbuKAmXMgcHJvcGVydHkgbmFtZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7IGNvbG9yOiBibGFjayB9Jyk7XG4gICAgICAgICAqIGNvbnN0IGRlY2wgPSByb290LmZpcnN0LmZpcnN0O1xuICAgICAgICAgKiBkZWNsLnByb3AgLy89PiAnY29sb3InXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgRGVjbGFyYXRpb24jXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gdmFsdWUgLSB0aGUgZGVjbGFyYXRpb27igJlzIHZhbHVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhIHsgY29sb3I6IGJsYWNrIH0nKTtcbiAgICAgICAgICogY29uc3QgZGVjbCA9IHJvb3QuZmlyc3QuZmlyc3Q7XG4gICAgICAgICAqIGRlY2wudmFsdWUgLy89PiAnYmxhY2snXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyb2YgRGVjbGFyYXRpb24jXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGltcG9ydGFudCAtIGB0cnVlYCBpZiB0aGUgZGVjbGFyYXRpb25cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzIGFuICFpbXBvcnRhbnQgYW5ub3RhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EgeyBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgY29sb3I6IHJlZCB9Jyk7XG4gICAgICAgICAqIHJvb3QuZmlyc3QuZmlyc3QuaW1wb3J0YW50IC8vPT4gdHJ1ZVxuICAgICAgICAgKiByb290LmZpcnN0Lmxhc3QuaW1wb3J0YW50ICAvLz0+IHVuZGVmaW5lZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlcm9mIERlY2xhcmF0aW9uI1xuICAgICAgICAgKiBAbWVtYmVyIHtvYmplY3R9IHJhd3MgLSBJbmZvcm1hdGlvbiB0byBnZW5lcmF0ZSBieXRlLXRvLWJ5dGUgZXF1YWxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBzdHJpbmcgYXMgaXQgd2FzIGluIHRoZSBvcmlnaW4gaW5wdXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEV2ZXJ5IHBhcnNlciBzYXZlcyBpdHMgb3duIHByb3BlcnRpZXMsXG4gICAgICAgICAqIGJ1dCB0aGUgZGVmYXVsdCBDU1MgcGFyc2VyIHVzZXM6XG4gICAgICAgICAqXG4gICAgICAgICAqICogYGJlZm9yZWA6IHRoZSBzcGFjZSBzeW1ib2xzIGJlZm9yZSB0aGUgbm9kZS4gSXQgYWxzbyBzdG9yZXMgYCpgXG4gICAgICAgICAqICAgYW5kIGBfYCBzeW1ib2xzIGJlZm9yZSB0aGUgZGVjbGFyYXRpb24gKElFIGhhY2spLlxuICAgICAgICAgKiAqIGBiZXR3ZWVuYDogdGhlIHN5bWJvbHMgYmV0d2VlbiB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICAgICAqICAgZm9yIGRlY2xhcmF0aW9ucywgc2VsZWN0b3IgYW5kIGB7YCBmb3IgcnVsZXMsIG9yIGxhc3QgcGFyYW1ldGVyXG4gICAgICAgICAqICAgYW5kIGB7YCBmb3IgYXQtcnVsZXMuXG4gICAgICAgICAqICogYGltcG9ydGFudGA6IHRoZSBjb250ZW50IG9mIHRoZSBpbXBvcnRhbnQgc3RhdGVtZW50LFxuICAgICAgICAgKiAgIGlmIGl0IGlzIG5vdCBqdXN0IGAhaW1wb3J0YW50YC5cbiAgICAgICAgICpcbiAgICAgICAgICogUG9zdENTUyBjbGVhbnMgZGVjbGFyYXRpb24gZnJvbSBjb21tZW50cyBhbmQgZXh0cmEgc3BhY2VzLFxuICAgICAgICAgKiBidXQgaXQgc3RvcmVzIG9yaWdpbiBjb250ZW50IGluIHJhd3MgcHJvcGVydGllcy5cbiAgICAgICAgICogQXMgc3VjaCwgaWYgeW91IGRvbuKAmXQgY2hhbmdlIGEgZGVjbGFyYXRpb27igJlzIHZhbHVlLFxuICAgICAgICAgKiBQb3N0Q1NTIHdpbGwgdXNlIHRoZSByYXcgdmFsdWUgd2l0aCBjb21tZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2Ege1xcbiAgY29sb3I6YmxhY2tcXG59JylcbiAgICAgICAgICogcm9vdC5maXJzdC5maXJzdC5yYXdzIC8vPT4geyBiZWZvcmU6ICdcXG4gICcsIGJldHdlZW46ICc6JyB9XG4gICAgICAgICAqL1xuXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERlY2xhcmF0aW9uO1xufShfbm9kZTIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERlY2xhcmF0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9kZWNsYXJhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfc3RyaW5naWZ5MiA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG5cbnZhciBfc3RyaW5naWZ5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeTIpO1xuXG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKTtcblxudmFyIF93YXJuT25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuT25jZSk7XG5cbnZhciBfcmVzdWx0ID0gcmVxdWlyZSgnLi9yZXN1bHQnKTtcblxudmFyIF9yZXN1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzdWx0KTtcblxudmFyIF9wYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcblxudmFyIF9wYXJzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQGNhbGxiYWNrIG9uRnVsZmlsbGVkXG4gKiBAcGFyYW0ge1Jlc3VsdH0gcmVzdWx0XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25SZWplY3RlZFxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAqL1xuXG4vKipcbiAqIEEgUHJvbWlzZSBwcm94eSBmb3IgdGhlIHJlc3VsdCBvZiBQb3N0Q1NTIHRyYW5zZm9ybWF0aW9ucy5cbiAqXG4gKiBBIGBMYXp5UmVzdWx0YCBpbnN0YW5jZSBpcyByZXR1cm5lZCBieSB7QGxpbmsgUHJvY2Vzc29yI3Byb2Nlc3N9LlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBsYXp5ID0gcG9zdGNzcyhbY3NzbmV4dF0pLnByb2Nlc3MoY3NzKTtcbiAqL1xuXG52YXIgTGF6eVJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMYXp5UmVzdWx0KHByb2Nlc3NvciwgY3NzLCBvcHRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXp5UmVzdWx0KTtcblxuICAgICAgICB0aGlzLnN0cmluZ2lmaWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHJvb3QgPSB2b2lkIDA7XG4gICAgICAgIGlmICgodHlwZW9mIGNzcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY3NzKSkgPT09ICdvYmplY3QnICYmIGNzcy50eXBlID09PSAncm9vdCcpIHtcbiAgICAgICAgICAgIHJvb3QgPSBjc3M7XG4gICAgICAgIH0gZWxzZSBpZiAoY3NzIGluc3RhbmNlb2YgTGF6eVJlc3VsdCB8fCBjc3MgaW5zdGFuY2VvZiBfcmVzdWx0Mi5kZWZhdWx0KSB7XG4gICAgICAgICAgICByb290ID0gY3NzLnJvb3Q7XG4gICAgICAgICAgICBpZiAoY3NzLm1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0cy5tYXAgPT09ICd1bmRlZmluZWQnKSBvcHRzLm1hcCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICghb3B0cy5tYXAuaW5saW5lKSBvcHRzLm1hcC5pbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBvcHRzLm1hcC5wcmV2ID0gY3NzLm1hcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJzZXIgPSBfcGFyc2UyLmRlZmF1bHQ7XG4gICAgICAgICAgICBpZiAob3B0cy5zeW50YXgpIHBhcnNlciA9IG9wdHMuc3ludGF4LnBhcnNlO1xuICAgICAgICAgICAgaWYgKG9wdHMucGFyc2VyKSBwYXJzZXIgPSBvcHRzLnBhcnNlcjtcbiAgICAgICAgICAgIGlmIChwYXJzZXIucGFyc2UpIHBhcnNlciA9IHBhcnNlci5wYXJzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByb290ID0gcGFyc2VyKGNzcywgb3B0cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzdWx0ID0gbmV3IF9yZXN1bHQyLmRlZmF1bHQocHJvY2Vzc29yLCByb290LCBvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEge0BsaW5rIFByb2Nlc3Nvcn0gaW5zdGFuY2UsIHdoaWNoIHdpbGwgYmUgdXNlZFxuICAgICAqIGZvciBDU1MgdHJhbnNmb3JtYXRpb25zLlxuICAgICAqIEB0eXBlIHtQcm9jZXNzb3J9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhMYXp5UmVzdWx0LCBbe1xuICAgICAgICBrZXk6ICd3YXJuaW5ncycsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvY2Vzc2VzIGlucHV0IENTUyB0aHJvdWdoIHN5bmNocm9ub3VzIHBsdWdpbnNcbiAgICAgICAgICogYW5kIGNhbGxzIHtAbGluayBSZXN1bHQjd2FybmluZ3MoKX0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge1dhcm5pbmdbXX0gd2FybmluZ3MgZnJvbSBwbHVnaW5zXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2FybmluZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeW5jKCkud2FybmluZ3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGlhcyBmb3IgdGhlIHtAbGluayBMYXp5UmVzdWx0I2Nzc30gcHJvcGVydHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGxhenkgKyAnJyA9PT0gbGF6eS5jc3M7XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gb3V0cHV0IENTU1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jc3M7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvY2Vzc2VzIGlucHV0IENTUyB0aHJvdWdoIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXMgcGx1Z2luc1xuICAgICAgICAgKiBhbmQgY2FsbHMgYG9uRnVsZmlsbGVkYCB3aXRoIGEgUmVzdWx0IGluc3RhbmNlLiBJZiBhIHBsdWdpbiB0aHJvd3NcbiAgICAgICAgICogYW4gZXJyb3IsIHRoZSBgb25SZWplY3RlZGAgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgaW1wbGVtZW50cyBzdGFuZGFyZCBQcm9taXNlIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvbkZ1bGZpbGxlZH0gb25GdWxmaWxsZWQgLSBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBhbGwgcGx1Z2lucyB3aWxsIGZpbmlzaCB3b3JrXG4gICAgICAgICAqIEBwYXJhbSB7b25SZWplY3RlZH0gIG9uUmVqZWN0ZWQgIC0gY2FsbGJhY2sgd2lsbCBiZSBleGVjaXRlZCBvbiBhbnkgZXJyb3JcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSBBUEkgdG8gbWFrZSBxdWV1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBwb3N0Y3NzKFtjc3NuZXh0XSkucHJvY2Vzcyhjc3MpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICogICBjb25zb2xlLmxvZyhyZXN1bHQuY3NzKTtcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0aGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvY2Vzc2VzIGlucHV0IENTUyB0aHJvdWdoIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXMgcGx1Z2luc1xuICAgICAgICAgKiBhbmQgY2FsbHMgb25SZWplY3RlZCBmb3IgZWFjaCBlcnJvciB0aHJvd24gaW4gYW55IHBsdWdpbi5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgaW1wbGVtZW50cyBzdGFuZGFyZCBQcm9taXNlIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvblJlamVjdGVkfSBvblJlamVjdGVkIC0gY2FsbGJhY2sgd2lsbCBiZSBleGVjaXRlZCBvbiBhbnkgZXJyb3JcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSBBUEkgdG8gbWFrZSBxdWV1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBwb3N0Y3NzKFtjc3NuZXh0XSkucHJvY2Vzcyhjc3MpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICogICBjb25zb2xlLmxvZyhyZXN1bHQuY3NzKTtcbiAgICAgICAgICogfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgKiAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NhdGNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hc3luYygpLmNhdGNoKG9uUmVqZWN0ZWQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVFcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvciwgcGx1Z2luKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Nzc1N5bnRheEVycm9yJyAmJiAhZXJyb3IucGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnBsdWdpbiA9IHBsdWdpbi5wb3N0Y3NzUGx1Z2luO1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5zZXRNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4ucG9zdGNzc1ZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucG9zdGNzc1BsdWdpbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdWdpblZlciA9IHBsdWdpbi5wb3N0Y3NzVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bnRpbWVWZXIgPSB0aGlzLnJlc3VsdC5wcm9jZXNzb3IudmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBwbHVnaW5WZXIuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBydW50aW1lVmVyLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFbMF0gIT09IGJbMF0gfHwgcGFyc2VJbnQoYVsxXSkgPiBwYXJzZUludChiWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF93YXJuT25jZTIuZGVmYXVsdCkoJ1lvdXIgY3VycmVudCBQb3N0Q1NTIHZlcnNpb24gJyArICdpcyAnICsgcnVudGltZVZlciArICcsIGJ1dCAnICsgcGx1Z2luTmFtZSArICcgJyArICd1c2VzICcgKyBwbHVnaW5WZXIgKyAnLiBQZXJoYXBzIHRoaXMgaXMgJyArICd0aGUgc291cmNlIG9mIHRoZSBlcnJvciBiZWxvdy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYXN5bmNUaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFzeW5jVGljayhyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbiA+PSB0aGlzLnByb2Nlc3Nvci5wbHVnaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBwbHVnaW4gPSB0aGlzLnByb2Nlc3Nvci5wbHVnaW5zW3RoaXMucGx1Z2luXTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucnVuKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4gKz0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFzeW5jVGljayhyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUVycm9yKGVycm9yLCBwbHVnaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXN5bmNUaWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYXN5bmMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXN5bmMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMi5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF90aGlzMi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzMi5zdHJpbmdpZnkoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5lcnJvcikgcmV0dXJuIHJlamVjdChfdGhpczIuZXJyb3IpO1xuICAgICAgICAgICAgICAgIF90aGlzMi5wbHVnaW4gPSAwO1xuICAgICAgICAgICAgICAgIF90aGlzMi5hc3luY1RpY2socmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5wcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc3RyaW5naWZ5KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc2luZztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3luYycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzeW5jKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2Nlc3NlZCkgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2UgcHJvY2Vzcyhjc3MpLnRoZW4oY2IpIHRvIHdvcmsgd2l0aCBhc3luYyBwbHVnaW5zJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yKSB0aHJvdyB0aGlzLmVycm9yO1xuXG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5wcm9jZXNzb3IucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IF90aGlzMy5ydW4ocGx1Z2luKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlIHByb2Nlc3MoY3NzKS50aGVuKGNiKSB0byB3b3JrIHdpdGggYXN5bmMgcGx1Z2lucycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3J1bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBydW4ocGx1Z2luKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW4odGhpcy5yZXN1bHQucm9vdCwgdGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBwbHVnaW4pO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdHJpbmdpZnknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5naWZ5KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaW5naWZpZWQpIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5naWZpZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnN5bmMoKTtcblxuICAgICAgICAgICAgdmFyIG9wdHMgPSB0aGlzLnJlc3VsdC5vcHRzO1xuICAgICAgICAgICAgdmFyIHN0ciA9IF9zdHJpbmdpZnkzLmRlZmF1bHQ7XG4gICAgICAgICAgICBpZiAob3B0cy5zeW50YXgpIHN0ciA9IG9wdHMuc3ludGF4LnN0cmluZ2lmeTtcbiAgICAgICAgICAgIGlmIChvcHRzLnN0cmluZ2lmaWVyKSBzdHIgPSBvcHRzLnN0cmluZ2lmaWVyO1xuICAgICAgICAgICAgaWYgKHN0ci5zdHJpbmdpZnkpIHN0ciA9IHN0ci5zdHJpbmdpZnk7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIHN0cih0aGlzLnJvb3QsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LmNzcyA9IHJlc3VsdDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcm9jZXNzb3InLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5wcm9jZXNzb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogT3B0aW9ucyBmcm9tIHRoZSB7QGxpbmsgUHJvY2Vzc29yI3Byb2Nlc3N9IGNhbGwuXG4gICAgICAgICAqIEB0eXBlIHtwcm9jZXNzT3B0aW9uc31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29wdHMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5vcHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2Nlc3NlcyBpbnB1dCBDU1MgdGhyb3VnaCBzeW5jaHJvbm91cyBwbHVnaW5zLCBjb252ZXJ0cyBgUm9vdGBcbiAgICAgICAgICogdG8gYSBDU1Mgc3RyaW5nIGFuZCByZXR1cm5zIHtAbGluayBSZXN1bHQjY3NzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSB3aWxsIG9ubHkgd29yayB3aXRoIHN5bmNocm9ub3VzIHBsdWdpbnMuXG4gICAgICAgICAqIElmIHRoZSBwcm9jZXNzb3IgY29udGFpbnMgYW55IGFzeW5jaHJvbm91cyBwbHVnaW5zXG4gICAgICAgICAqIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuIFRoaXMgaXMgd2h5IHRoaXMgbWV0aG9kIGlzIG9ubHlcbiAgICAgICAgICogZm9yIGRlYnVnIHB1cnBvc2UsIHlvdSBzaG91bGQgYWx3YXlzIHVzZSB7QGxpbmsgTGF6eVJlc3VsdCN0aGVufS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHNlZSBSZXN1bHQjY3NzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjc3MnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLmNzcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhbGlhcyBmb3IgdGhlIGBjc3NgIHByb3BlcnR5LiBVc2UgaXQgd2l0aCBzeW50YXhlc1xuICAgICAgICAgKiB0aGF0IGdlbmVyYXRlIG5vbi1DU1Mgb3V0cHV0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHByb3BlcnR5IHdpbGwgb25seSB3b3JrIHdpdGggc3luY2hyb25vdXMgcGx1Z2lucy5cbiAgICAgICAgICogSWYgdGhlIHByb2Nlc3NvciBjb250YWlucyBhbnkgYXN5bmNocm9ub3VzIHBsdWdpbnNcbiAgICAgICAgICogaXQgd2lsbCB0aHJvdyBhbiBlcnJvci4gVGhpcyBpcyB3aHkgdGhpcyBtZXRob2QgaXMgb25seVxuICAgICAgICAgKiBmb3IgZGVidWcgcHVycG9zZSwgeW91IHNob3VsZCBhbHdheXMgdXNlIHtAbGluayBMYXp5UmVzdWx0I3RoZW59LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAc2VlIFJlc3VsdCNjb250ZW50XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb250ZW50JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKS5jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2Nlc3NlcyBpbnB1dCBDU1MgdGhyb3VnaCBzeW5jaHJvbm91cyBwbHVnaW5zXG4gICAgICAgICAqIGFuZCByZXR1cm5zIHtAbGluayBSZXN1bHQjbWFwfS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSB3aWxsIG9ubHkgd29yayB3aXRoIHN5bmNocm9ub3VzIHBsdWdpbnMuXG4gICAgICAgICAqIElmIHRoZSBwcm9jZXNzb3IgY29udGFpbnMgYW55IGFzeW5jaHJvbm91cyBwbHVnaW5zXG4gICAgICAgICAqIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuIFRoaXMgaXMgd2h5IHRoaXMgbWV0aG9kIGlzIG9ubHlcbiAgICAgICAgICogZm9yIGRlYnVnIHB1cnBvc2UsIHlvdSBzaG91bGQgYWx3YXlzIHVzZSB7QGxpbmsgTGF6eVJlc3VsdCN0aGVufS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1NvdXJjZU1hcEdlbmVyYXRvcn1cbiAgICAgICAgICogQHNlZSBSZXN1bHQjbWFwXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtYXAnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLm1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9jZXNzZXMgaW5wdXQgQ1NTIHRocm91Z2ggc3luY2hyb25vdXMgcGx1Z2luc1xuICAgICAgICAgKiBhbmQgcmV0dXJucyB7QGxpbmsgUmVzdWx0I3Jvb3R9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHByb3BlcnR5IHdpbGwgb25seSB3b3JrIHdpdGggc3luY2hyb25vdXMgcGx1Z2lucy4gSWYgdGhlIHByb2Nlc3NvclxuICAgICAgICAgKiBjb250YWlucyBhbnkgYXN5bmNocm9ub3VzIHBsdWdpbnMgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyB3aHkgdGhpcyBtZXRob2QgaXMgb25seSBmb3IgZGVidWcgcHVycG9zZSxcbiAgICAgICAgICogeW91IHNob3VsZCBhbHdheXMgdXNlIHtAbGluayBMYXp5UmVzdWx0I3RoZW59LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Um9vdH1cbiAgICAgICAgICogQHNlZSBSZXN1bHQjcm9vdFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncm9vdCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3luYygpLnJvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvY2Vzc2VzIGlucHV0IENTUyB0aHJvdWdoIHN5bmNocm9ub3VzIHBsdWdpbnNcbiAgICAgICAgICogYW5kIHJldHVybnMge0BsaW5rIFJlc3VsdCNtZXNzYWdlc30uXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgcHJvcGVydHkgd2lsbCBvbmx5IHdvcmsgd2l0aCBzeW5jaHJvbm91cyBwbHVnaW5zLiBJZiB0aGUgcHJvY2Vzc29yXG4gICAgICAgICAqIGNvbnRhaW5zIGFueSBhc3luY2hyb25vdXMgcGx1Z2lucyBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIHdoeSB0aGlzIG1ldGhvZCBpcyBvbmx5IGZvciBkZWJ1ZyBwdXJwb3NlLFxuICAgICAgICAgKiB5b3Ugc2hvdWxkIGFsd2F5cyB1c2Uge0BsaW5rIExhenlSZXN1bHQjdGhlbn0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtNZXNzYWdlW119XG4gICAgICAgICAqIEBzZWUgUmVzdWx0I21lc3NhZ2VzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtZXNzYWdlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3luYygpLm1lc3NhZ2VzO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExhenlSZXN1bHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExhenlSZXN1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL2xhenktcmVzdWx0LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZTtcblxudmFyIF9wYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcicpO1xuXG52YXIgX3BhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZXIpO1xuXG52YXIgX2lucHV0ID0gcmVxdWlyZSgnLi9pbnB1dCcpO1xuXG52YXIgX2lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lucHV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGFyc2UoY3NzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5zYWZlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignT3B0aW9uIHNhZmUgd2FzIHJlbW92ZWQuICcgKyAnVXNlIHBhcnNlcjogcmVxdWlyZShcInBvc3Rjc3Mtc2FmZS1wYXJzZXJcIiknKTtcbiAgICB9XG5cbiAgICB2YXIgaW5wdXQgPSBuZXcgX2lucHV0Mi5kZWZhdWx0KGNzcywgb3B0cyk7XG5cbiAgICB2YXIgcGFyc2VyID0gbmV3IF9wYXJzZXIyLmRlZmF1bHQoaW5wdXQpO1xuICAgIHRyeSB7XG4gICAgICAgIHBhcnNlci50b2tlbml6ZSgpO1xuICAgICAgICBwYXJzZXIubG9vcCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSA9PT0gJ0Nzc1N5bnRheEVycm9yJyAmJiBvcHRzICYmIG9wdHMuZnJvbSkge1xuICAgICAgICAgICAgaWYgKC9cXC5zY3NzJC9pLnRlc3Qob3B0cy5mcm9tKSkge1xuICAgICAgICAgICAgICAgIGUubWVzc2FnZSArPSAnXFxuWW91IHRyaWVkIHRvIHBhcnNlIFNDU1Mgd2l0aCAnICsgJ3RoZSBzdGFuZGFyZCBDU1MgcGFyc2VyOyAnICsgJ3RyeSBhZ2FpbiB3aXRoIHRoZSBwb3N0Y3NzLXNjc3MgcGFyc2VyJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoL1xcLmxlc3MkL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlICs9ICdcXG5Zb3UgdHJpZWQgdG8gcGFyc2UgTGVzcyB3aXRoICcgKyAndGhlIHN0YW5kYXJkIENTUyBwYXJzZXI7ICcgKyAndHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3MtbGVzcyBwYXJzZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlci5yb290O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9wYXJzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RlY2xhcmF0aW9uID0gcmVxdWlyZSgnLi9kZWNsYXJhdGlvbicpO1xuXG52YXIgX2RlY2xhcmF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY2xhcmF0aW9uKTtcblxudmFyIF90b2tlbml6ZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUnKTtcblxudmFyIF90b2tlbml6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b2tlbml6ZSk7XG5cbnZhciBfY29tbWVudCA9IHJlcXVpcmUoJy4vY29tbWVudCcpO1xuXG52YXIgX2NvbW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tbWVudCk7XG5cbnZhciBfYXRSdWxlID0gcmVxdWlyZSgnLi9hdC1ydWxlJyk7XG5cbnZhciBfYXRSdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0UnVsZSk7XG5cbnZhciBfcm9vdCA9IHJlcXVpcmUoJy4vcm9vdCcpO1xuXG52YXIgX3Jvb3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm9vdCk7XG5cbnZhciBfcnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG52YXIgX3J1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnVsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQYXJzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGFyc2VyKGlucHV0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXJzZXIpO1xuXG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcblxuICAgICAgICB0aGlzLnBvcyA9IDA7XG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBfcm9vdDIuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnJvb3Q7XG4gICAgICAgIHRoaXMuc3BhY2VzID0gJyc7XG4gICAgICAgIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5yb290LnNvdXJjZSA9IHsgaW5wdXQ6IGlucHV0LCBzdGFydDogeyBsaW5lOiAxLCBjb2x1bW46IDEgfSB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQYXJzZXIsIFt7XG4gICAgICAgIGtleTogJ3Rva2VuaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRva2VuaXplKCkge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMgPSAoMCwgX3Rva2VuaXplMi5kZWZhdWx0KSh0aGlzLmlucHV0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9vcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdm9pZCAwO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLnBvc107XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICc7JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BhY2VzICs9IHRva2VuWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb21tZW50JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdC13b3JkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRydWxlKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eVJ1bGUodG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZEZpbGUoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21tZW50KHRva2VuKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfY29tbWVudDIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0KG5vZGUsIHRva2VuWzJdLCB0b2tlblszXSk7XG4gICAgICAgICAgICBub2RlLnNvdXJjZS5lbmQgPSB7IGxpbmU6IHRva2VuWzRdLCBjb2x1bW46IHRva2VuWzVdIH07XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdG9rZW5bMV0uc2xpY2UoMiwgLTIpO1xuICAgICAgICAgICAgaWYgKC9eXFxzKiQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBub2RlLnRleHQgPSAnJztcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MubGVmdCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgbm9kZS5yYXdzLnJpZ2h0ID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHRleHQubWF0Y2goL14oXFxzKikoW15dKlteXFxzXSkoXFxzKikkLyk7XG4gICAgICAgICAgICAgICAgbm9kZS50ZXh0ID0gbWF0Y2hbMl07XG4gICAgICAgICAgICAgICAgbm9kZS5yYXdzLmxlZnQgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MucmlnaHQgPSBtYXRjaFszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW1wdHlSdWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVtcHR5UnVsZSh0b2tlbikge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3J1bGUyLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdChub2RlLCB0b2tlblsyXSwgdG9rZW5bM10pO1xuICAgICAgICAgICAgbm9kZS5zZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gPSAnJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ290aGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG90aGVyKCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGVuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIGNvbG9uID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYnJhY2tldCA9IG51bGw7XG4gICAgICAgICAgICB2YXIgYnJhY2tldHMgPSBbXTtcblxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wb3MgPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMucG9zXTtcbiAgICAgICAgICAgICAgICB0eXBlID0gdG9rZW5bMF07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJygnIHx8IHR5cGUgPT09ICdbJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJyYWNrZXQpIGJyYWNrZXQgPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldHMucHVzaCh0eXBlID09PSAnKCcgPyAnKScgOiAnXScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYnJhY2tldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnOycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjbCh0aGlzLnRva2Vucy5zbGljZShzdGFydCwgdGhpcy5wb3MgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZSh0aGlzLnRva2Vucy5zbGljZShzdGFydCwgdGhpcy5wb3MgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBicmFja2V0c1ticmFja2V0cy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICBicmFja2V0cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA9PT0gMCkgYnJhY2tldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA9PT0gdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgLT0gMTtcbiAgICAgICAgICAgICAgICBlbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnJhY2tldHMubGVuZ3RoID4gMCkgdGhpcy51bmNsb3NlZEJyYWNrZXQoYnJhY2tldCk7XG5cbiAgICAgICAgICAgIGlmIChlbmQgJiYgY29sb24pIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5wb3MgPiBzdGFydCkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMucG9zXVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuICE9PSAnc3BhY2UnICYmIHRva2VuICE9PSAnY29tbWVudCcpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRlY2wodGhpcy50b2tlbnMuc2xpY2Uoc3RhcnQsIHRoaXMucG9zICsgMSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51bmtub3duV29yZChzdGFydCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3J1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcnVsZSh0b2tlbnMpIHtcbiAgICAgICAgICAgIHRva2Vucy5wb3AoKTtcblxuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3J1bGUyLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdChub2RlLCB0b2tlbnNbMF1bMl0sIHRva2Vuc1swXVszXSk7XG5cbiAgICAgICAgICAgIG5vZGUucmF3cy5iZXR3ZWVuID0gdGhpcy5zcGFjZXNGcm9tRW5kKHRva2Vucyk7XG4gICAgICAgICAgICB0aGlzLnJhdyhub2RlLCAnc2VsZWN0b3InLCB0b2tlbnMpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVjbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWNsKHRva2Vucykge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX2RlY2xhcmF0aW9uMi5kZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluaXQobm9kZSk7XG5cbiAgICAgICAgICAgIHZhciBsYXN0ID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChsYXN0WzBdID09PSAnOycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbWljb2xvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3RbNF0pIHtcbiAgICAgICAgICAgICAgICBub2RlLnNvdXJjZS5lbmQgPSB7IGxpbmU6IGxhc3RbNF0sIGNvbHVtbjogbGFzdFs1XSB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNvdXJjZS5lbmQgPSB7IGxpbmU6IGxhc3RbMl0sIGNvbHVtbjogbGFzdFszXSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGlsZSAodG9rZW5zWzBdWzBdICE9PSAnd29yZCcpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MuYmVmb3JlICs9IHRva2Vucy5zaGlmdCgpWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5zb3VyY2Uuc3RhcnQgPSB7IGxpbmU6IHRva2Vuc1swXVsyXSwgY29sdW1uOiB0b2tlbnNbMF1bM10gfTtcblxuICAgICAgICAgICAgbm9kZS5wcm9wID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdG9rZW5zWzBdWzBdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnOicgfHwgdHlwZSA9PT0gJ3NwYWNlJyB8fCB0eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUucHJvcCArPSB0b2tlbnMuc2hpZnQoKVsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gPSAnJztcblxuICAgICAgICAgICAgdmFyIHRva2VuID0gdm9pZCAwO1xuICAgICAgICAgICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuWzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gKz0gdG9rZW5bMV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmF3cy5iZXR3ZWVuICs9IHRva2VuWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUucHJvcFswXSA9PT0gJ18nIHx8IG5vZGUucHJvcFswXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yYXdzLmJlZm9yZSArPSBub2RlLnByb3BbMF07XG4gICAgICAgICAgICAgICAgbm9kZS5wcm9wID0gbm9kZS5wcm9wLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gKz0gdGhpcy5zcGFjZXNGcm9tU3RhcnQodG9rZW5zKTtcbiAgICAgICAgICAgIHRoaXMucHJlY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuWzFdID09PSAnIWltcG9ydGFudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbXBvcnRhbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gdGhpcy5zdHJpbmdGcm9tKHRva2VucywgaSk7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3BhY2VzRnJvbUVuZCh0b2tlbnMpICsgc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5nICE9PSAnICFpbXBvcnRhbnQnKSBub2RlLnJhd3MuaW1wb3J0YW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuWzFdID09PSAnaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FjaGUgPSB0b2tlbnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGk7IGogPiAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfdHlwZSA9IGNhY2hlW2pdWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci50cmltKCkuaW5kZXhPZignIScpID09PSAwICYmIF90eXBlICE9PSAnc3BhY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBjYWNoZS5wb3AoKVsxXSArIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLnRyaW0oKS5pbmRleE9mKCchJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaW1wb3J0YW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmF3cy5pbXBvcnRhbnQgPSBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMgPSBjYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0b2tlblswXSAhPT0gJ3NwYWNlJyAmJiB0b2tlblswXSAhPT0gJ2NvbW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yYXcobm9kZSwgJ3ZhbHVlJywgdG9rZW5zKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUudmFsdWUuaW5kZXhPZignOicpICE9PSAtMSkgdGhpcy5jaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhdHJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXRydWxlKHRva2VuKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfYXRSdWxlMi5kZWZhdWx0KCk7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSB0b2tlblsxXS5zbGljZSgxKTtcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bm5hbWVkQXRydWxlKG5vZGUsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdChub2RlLCB0b2tlblsyXSwgdG9rZW5bM10pO1xuXG4gICAgICAgICAgICB2YXIgbGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBvcyA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5wb3NdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuWzBdID09PSAnOycpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zb3VyY2UuZW5kID0geyBsaW5lOiB0b2tlblsyXSwgY29sdW1uOiB0b2tlblszXSB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbWljb2xvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW5bMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlblswXSA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPT09IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlLnJhd3MuYmV0d2VlbiA9IHRoaXMuc3BhY2VzRnJvbUVuZChwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MuYWZ0ZXJOYW1lID0gdGhpcy5zcGFjZXNGcm9tU3RhcnQocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhdyhub2RlLCAncGFyYW1zJywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdCkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc291cmNlLmVuZCA9IHsgbGluZTogdG9rZW5bNF0sIGNvbHVtbjogdG9rZW5bNV0gfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGFjZXMgPSBub2RlLnJhd3MuYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUucmF3cy5hZnRlck5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICBub2RlLnBhcmFtcyA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgIG5vZGUubm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5kKHRva2VuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Lm5vZGVzICYmIHRoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQucmF3cy5zZW1pY29sb24gPSB0aGlzLnNlbWljb2xvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5yYXdzLmFmdGVyID0gKHRoaXMuY3VycmVudC5yYXdzLmFmdGVyIHx8ICcnKSArIHRoaXMuc3BhY2VzO1xuICAgICAgICAgICAgdGhpcy5zcGFjZXMgPSAnJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQuc291cmNlLmVuZCA9IHsgbGluZTogdG9rZW5bMl0sIGNvbHVtbjogdG9rZW5bM10gfTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQucGFyZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuZXhwZWN0ZWRDbG9zZSh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuZEZpbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5kRmlsZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQucGFyZW50KSB0aGlzLnVuY2xvc2VkQmxvY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMgJiYgdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudC5yYXdzLnNlbWljb2xvbiA9IHRoaXMuc2VtaWNvbG9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgPSAodGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgfHwgJycpICsgdGhpcy5zcGFjZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWxwZXJzXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luaXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChub2RlLCBsaW5lLCBjb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5wdXNoKG5vZGUpO1xuXG4gICAgICAgICAgICBub2RlLnNvdXJjZSA9IHsgc3RhcnQ6IHsgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4gfSwgaW5wdXQ6IHRoaXMuaW5wdXQgfTtcbiAgICAgICAgICAgIG5vZGUucmF3cy5iZWZvcmUgPSB0aGlzLnNwYWNlcztcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzID0gJyc7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnY29tbWVudCcpIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JhdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXcobm9kZSwgcHJvcCwgdG9rZW5zKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdHlwZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSB0b2tlbnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gJyc7XG4gICAgICAgICAgICB2YXIgY2xlYW4gPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0b2tlblswXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbW1lbnQnIHx8IHR5cGUgPT09ICdzcGFjZScgJiYgaSA9PT0gbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRva2VuWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2xlYW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmF3ID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbiAoYWxsLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGwgKyBpWzFdO1xuICAgICAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3NbcHJvcF0gPSB7IHZhbHVlOiB2YWx1ZSwgcmF3OiByYXcgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3BhY2VzRnJvbUVuZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzcGFjZXNGcm9tRW5kKHRva2Vucykge1xuICAgICAgICAgICAgdmFyIGxhc3RUb2tlblR5cGUgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgc3BhY2VzID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxhc3RUb2tlblR5cGUgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdWzBdO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0VG9rZW5UeXBlICE9PSAnc3BhY2UnICYmIGxhc3RUb2tlblR5cGUgIT09ICdjb21tZW50JykgYnJlYWs7XG4gICAgICAgICAgICAgICAgc3BhY2VzID0gdG9rZW5zLnBvcCgpWzFdICsgc3BhY2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3BhY2VzRnJvbVN0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNlc0Zyb21TdGFydCh0b2tlbnMpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHNwYWNlcyA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gdG9rZW5zWzBdWzBdO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSAnc3BhY2UnICYmIG5leHQgIT09ICdjb21tZW50JykgYnJlYWs7XG4gICAgICAgICAgICAgICAgc3BhY2VzICs9IHRva2Vucy5zaGlmdCgpWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RyaW5nRnJvbScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdGcm9tKHRva2VucywgZnJvbSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGZyb207IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdG9rZW5zW2ldWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW5zLnNwbGljZShmcm9tLCB0b2tlbnMubGVuZ3RoIC0gZnJvbSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb2xvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb2xvbih0b2tlbnMpIHtcbiAgICAgICAgICAgIHZhciBicmFja2V0cyA9IDA7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdHlwZSA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBwcmV2ID0gdm9pZCAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgICAgICB0eXBlID0gdG9rZW5bMF07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXRzICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldHMgLT0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJyYWNrZXRzID09PSAwICYmIHR5cGUgPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG91YmxlQ29sb24odG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZXZbMF0gPT09ICd3b3JkJyAmJiBwcmV2WzFdID09PSAncHJvZ2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByZXYgPSB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVycm9yc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmNsb3NlZEJyYWNrZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5jbG9zZWRCcmFja2V0KGJyYWNrZXQpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoJ1VuY2xvc2VkIGJyYWNrZXQnLCBicmFja2V0WzJdLCBicmFja2V0WzNdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5rbm93bldvcmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5rbm93bldvcmQoc3RhcnQpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW3N0YXJ0XTtcbiAgICAgICAgICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoJ1Vua25vd24gd29yZCcsIHRva2VuWzJdLCB0b2tlblszXSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuZXhwZWN0ZWRDbG9zZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmV4cGVjdGVkQ2xvc2UodG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoJ1VuZXhwZWN0ZWQgfScsIHRva2VuWzJdLCB0b2tlblszXSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuY2xvc2VkQmxvY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5jbG9zZWRCbG9jaygpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmN1cnJlbnQuc291cmNlLnN0YXJ0O1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcignVW5jbG9zZWQgYmxvY2snLCBwb3MubGluZSwgcG9zLmNvbHVtbik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RvdWJsZUNvbG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvdWJsZUNvbG9uKHRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKCdEb3VibGUgY29sb24nLCB0b2tlblsyXSwgdG9rZW5bM10pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bm5hbWVkQXRydWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVubmFtZWRBdHJ1bGUobm9kZSwgdG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoJ0F0LXJ1bGUgd2l0aG91dCBuYW1lJywgdG9rZW5bMl0sIHRva2VuWzNdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlY2hlY2tNaXNzZWRTZW1pY29sb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKSB7XG4gICAgICAgICAgICAvLyBIb29rIGZvciBTYWZlIFBhcnNlclxuICAgICAgICAgICAgdG9rZW5zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGVja01pc3NlZFNlbWljb2xvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpIHtcbiAgICAgICAgICAgIHZhciBjb2xvbiA9IHRoaXMuY29sb24odG9rZW5zKTtcbiAgICAgICAgICAgIGlmIChjb2xvbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIGZvdW5kZWQgPSAwO1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdm9pZCAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGNvbG9uIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5bMF0gIT09ICdzcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRlZCA9PT0gMikgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcignTWlzc2VkIHNlbWljb2xvbicsIHRva2VuWzJdLCB0b2tlblszXSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGFyc2VyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQYXJzZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3BhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuXG52YXIgZGVmYXVsdFJhdyA9IHtcbiAgICBjb2xvbjogJzogJyxcbiAgICBpbmRlbnQ6ICcgICAgJyxcbiAgICBiZWZvcmVEZWNsOiAnXFxuJyxcbiAgICBiZWZvcmVSdWxlOiAnXFxuJyxcbiAgICBiZWZvcmVPcGVuOiAnICcsXG4gICAgYmVmb3JlQ2xvc2U6ICdcXG4nLFxuICAgIGJlZm9yZUNvbW1lbnQ6ICdcXG4nLFxuICAgIGFmdGVyOiAnXFxuJyxcbiAgICBlbXB0eUJvZHk6ICcnLFxuICAgIGNvbW1lbnRMZWZ0OiAnICcsXG4gICAgY29tbWVudFJpZ2h0OiAnICdcbn07XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG52YXIgU3RyaW5naWZpZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RyaW5naWZpZXIoYnVpbGRlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5naWZpZXIpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IGJ1aWxkZXI7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN0cmluZ2lmaWVyLCBbe1xuICAgICAgICBrZXk6ICdzdHJpbmdpZnknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5naWZ5KG5vZGUsIHNlbWljb2xvbikge1xuICAgICAgICAgICAgdGhpc1tub2RlLnR5cGVdKG5vZGUsIHNlbWljb2xvbik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcm9vdChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkobm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS5yYXdzLmFmdGVyKSB0aGlzLmJ1aWxkZXIobm9kZS5yYXdzLmFmdGVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21tZW50KG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yYXcobm9kZSwgJ2xlZnQnLCAnY29tbWVudExlZnQnKTtcbiAgICAgICAgICAgIHZhciByaWdodCA9IHRoaXMucmF3KG5vZGUsICdyaWdodCcsICdjb21tZW50UmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlcignLyonICsgbGVmdCArIG5vZGUudGV4dCArIHJpZ2h0ICsgJyovJywgbm9kZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlY2wnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVjbChub2RlLCBzZW1pY29sb24pIHtcbiAgICAgICAgICAgIHZhciBiZXR3ZWVuID0gdGhpcy5yYXcobm9kZSwgJ2JldHdlZW4nLCAnY29sb24nKTtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSBub2RlLnByb3AgKyBiZXR3ZWVuICsgdGhpcy5yYXdWYWx1ZShub2RlLCAndmFsdWUnKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUuaW1wb3J0YW50KSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IG5vZGUucmF3cy5pbXBvcnRhbnQgfHwgJyAhaW1wb3J0YW50JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbWljb2xvbikgc3RyaW5nICs9ICc7JztcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlcihzdHJpbmcsIG5vZGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdydWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bGUobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ibG9jayhub2RlLCB0aGlzLnJhd1ZhbHVlKG5vZGUsICdzZWxlY3RvcicpKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYXRydWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0cnVsZShub2RlLCBzZW1pY29sb24pIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gJ0AnICsgbm9kZS5uYW1lO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG5vZGUucGFyYW1zID8gdGhpcy5yYXdWYWx1ZShub2RlLCAncGFyYW1zJykgOiAnJztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlLnJhd3MuYWZ0ZXJOYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG5hbWUgKz0gbm9kZS5yYXdzLmFmdGVyTmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgbmFtZSArPSAnICc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jayhub2RlLCBuYW1lICsgcGFyYW1zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IChub2RlLnJhd3MuYmV0d2VlbiB8fCAnJykgKyAoc2VtaWNvbG9uID8gJzsnIDogJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlcihuYW1lICsgcGFyYW1zICsgZW5kLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYm9keScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBib2R5KG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gbm9kZS5ub2Rlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKGxhc3QgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZXNbbGFzdF0udHlwZSAhPT0gJ2NvbW1lbnQnKSBicmVhaztcbiAgICAgICAgICAgICAgICBsYXN0IC09IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZW1pY29sb24gPSB0aGlzLnJhdyhub2RlLCAnc2VtaWNvbG9uJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlLm5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSB0aGlzLnJhdyhjaGlsZCwgJ2JlZm9yZScpO1xuICAgICAgICAgICAgICAgIGlmIChiZWZvcmUpIHRoaXMuYnVpbGRlcihiZWZvcmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5naWZ5KGNoaWxkLCBsYXN0ICE9PSBpIHx8IHNlbWljb2xvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Jsb2NrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsb2NrKG5vZGUsIHN0YXJ0KSB7XG4gICAgICAgICAgICB2YXIgYmV0d2VlbiA9IHRoaXMucmF3KG5vZGUsICdiZXR3ZWVuJywgJ2JlZm9yZU9wZW4nKTtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlcihzdGFydCArIGJldHdlZW4gKyAneycsIG5vZGUsICdzdGFydCcpO1xuXG4gICAgICAgICAgICB2YXIgYWZ0ZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlcyAmJiBub2RlLm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keShub2RlKTtcbiAgICAgICAgICAgICAgICBhZnRlciA9IHRoaXMucmF3KG5vZGUsICdhZnRlcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZnRlciA9IHRoaXMucmF3KG5vZGUsICdhZnRlcicsICdlbXB0eUJvZHknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFmdGVyKSB0aGlzLmJ1aWxkZXIoYWZ0ZXIpO1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyKCd9Jywgbm9kZSwgJ2VuZCcpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3KG5vZGUsIG93biwgZGV0ZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoIWRldGVjdCkgZGV0ZWN0ID0gb3duO1xuXG4gICAgICAgICAgICAvLyBBbHJlYWR5IGhhZFxuICAgICAgICAgICAgaWYgKG93bikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbm9kZS5yYXdzW293bl07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50O1xuXG4gICAgICAgICAgICAvLyBIYWNrIGZvciBmaXJzdCBydWxlIGluIENTU1xuICAgICAgICAgICAgaWYgKGRldGVjdCA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudCB8fCBwYXJlbnQudHlwZSA9PT0gJ3Jvb3QnICYmIHBhcmVudC5maXJzdCA9PT0gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGbG9hdGluZyBjaGlsZCB3aXRob3V0IHBhcmVudFxuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybiBkZWZhdWx0UmF3W2RldGVjdF07XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBzdHlsZSBieSBvdGhlciBub2Rlc1xuICAgICAgICAgICAgdmFyIHJvb3QgPSBub2RlLnJvb3QoKTtcbiAgICAgICAgICAgIGlmICghcm9vdC5yYXdDYWNoZSkgcm9vdC5yYXdDYWNoZSA9IHt9O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290LnJhd0NhY2hlW2RldGVjdF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3QucmF3Q2FjaGVbZGV0ZWN0XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRldGVjdCA9PT0gJ2JlZm9yZScgfHwgZGV0ZWN0ID09PSAnYWZ0ZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlQWZ0ZXIobm9kZSwgZGV0ZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9ICdyYXcnICsgY2FwaXRhbGl6ZShkZXRlY3QpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzW21ldGhvZF0ocm9vdCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC53YWxrKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGkucmF3c1tvd25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgdmFsdWUgPSBkZWZhdWx0UmF3W2RldGVjdF07XG5cbiAgICAgICAgICAgIHJvb3QucmF3Q2FjaGVbZGV0ZWN0XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdTZW1pY29sb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3U2VtaWNvbG9uKHJvb3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2FsayhmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoICYmIGkubGFzdC50eXBlID09PSAnZGVjbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpLnJhd3Muc2VtaWNvbG9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdFbXB0eUJvZHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3RW1wdHlCb2R5KHJvb3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2FsayhmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmFmdGVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdJbmRlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3SW5kZW50KHJvb3QpIHtcbiAgICAgICAgICAgIGlmIChyb290LnJhd3MuaW5kZW50KSByZXR1cm4gcm9vdC5yYXdzLmluZGVudDtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2FsayhmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gaS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHAgJiYgcCAhPT0gcm9vdCAmJiBwLnBhcmVudCAmJiBwLnBhcmVudCA9PT0gcm9vdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBpLnJhd3MuYmVmb3JlLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxzXS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmF3QmVmb3JlQ29tbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdCZWZvcmVDb21tZW50KHJvb3QsIG5vZGUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2Fsa0NvbW1lbnRzKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZWZvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdcXG4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdiZWZvcmVEZWNsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd0JlZm9yZURlY2wnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmF3QmVmb3JlRGVjbChyb290LCBub2RlKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICByb290LndhbGtEZWNscyhmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmVmb3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignXFxuJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlLCBudWxsLCAnYmVmb3JlUnVsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdCZWZvcmVSdWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhd0JlZm9yZVJ1bGUocm9vdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgcm9vdC53YWxrKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkubm9kZXMgJiYgKGkucGFyZW50ICE9PSByb290IHx8IHJvb3QuZmlyc3QgIT09IGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdcXG4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jhd0JlZm9yZUNsb3NlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhd0JlZm9yZUNsb3NlKHJvb3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2FsayhmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5hZnRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmFmdGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ1xcbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmF3QmVmb3JlT3BlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdCZWZvcmVPcGVuKHJvb3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJvb3Qud2FsayhmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGlmIChpLnR5cGUgIT09ICdkZWNsJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdDb2xvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdDb2xvbihyb290KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICByb290LndhbGtEZWNscyhmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJldHdlZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmJldHdlZW4ucmVwbGFjZSgvW15cXHM6XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmVmb3JlQWZ0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlQWZ0ZXIobm9kZSwgZGV0ZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnZGVjbCcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdiZWZvcmVEZWNsJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlLCBudWxsLCAnYmVmb3JlQ29tbWVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXRlY3QgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlLCBudWxsLCAnYmVmb3JlUnVsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdiZWZvcmVDbG9zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYnVmID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB2YXIgZGVwdGggPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGJ1ZiAmJiBidWYudHlwZSAhPT0gJ3Jvb3QnKSB7XG4gICAgICAgICAgICAgICAgZGVwdGggKz0gMTtcbiAgICAgICAgICAgICAgICBidWYgPSBidWYucGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignXFxuJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGVudCA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdpbmRlbnQnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzdGVwID0gMDsgc3RlcCA8IGRlcHRoOyBzdGVwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IGluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyYXdWYWx1ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXdWYWx1ZShub2RlLCBwcm9wKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBub2RlW3Byb3BdO1xuICAgICAgICAgICAgdmFyIHJhdyA9IG5vZGUucmF3c1twcm9wXTtcbiAgICAgICAgICAgIGlmIChyYXcgJiYgcmF3LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByYXcucmF3O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RyaW5naWZpZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmluZ2lmaWVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9zdHJpbmdpZmllci5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5naWZ5O1xuXG52YXIgX3N0cmluZ2lmaWVyID0gcmVxdWlyZSgnLi9zdHJpbmdpZmllcicpO1xuXG52YXIgX3N0cmluZ2lmaWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmaWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KG5vZGUsIGJ1aWxkZXIpIHtcbiAgICB2YXIgc3RyID0gbmV3IF9zdHJpbmdpZmllcjIuZGVmYXVsdChidWlsZGVyKTtcbiAgICBzdHIuc3RyaW5naWZ5KG5vZGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIC9bXFx1MDAxYlxcdTAwOWJdW1soKSM7P10qKD86WzAtOV17MSw0fSg/OjtbMC05XXswLDR9KSopP1swLTlBLVBSWmNmLW5xcnk9PjxdL2c7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Fuc2ktcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLkFycmF5LmZyb207XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDE0IDE2IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDE0IDE2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDE0IDE2IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCAkJCAgICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuICAgPSAkJC5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9ICQkbGVuID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sICQkbGVuID4gMiA/ICQkWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oJGtleXMpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDE0IDE2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFhtbEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi94bWwtZW50aXRpZXMuanMnKSxcbiAgSHRtbDRFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDQtZW50aXRpZXMuanMnKSxcbiAgSHRtbDVFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKSxcbiAgQWxsSHRtbEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi9odG1sNS1lbnRpdGllcy5qcycpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJ2YXIgSFRNTF9BTFBIQSA9IFsnYXBvcycsICduYnNwJywgJ2lleGNsJywgJ2NlbnQnLCAncG91bmQnLCAnY3VycmVuJywgJ3llbicsICdicnZiYXInLCAnc2VjdCcsICd1bWwnLCAnY29weScsICdvcmRmJywgJ2xhcXVvJywgJ25vdCcsICdzaHknLCAncmVnJywgJ21hY3InLCAnZGVnJywgJ3BsdXNtbicsICdzdXAyJywgJ3N1cDMnLCAnYWN1dGUnLCAnbWljcm8nLCAncGFyYScsICdtaWRkb3QnLCAnY2VkaWwnLCAnc3VwMScsICdvcmRtJywgJ3JhcXVvJywgJ2ZyYWMxNCcsICdmcmFjMTInLCAnZnJhYzM0JywgJ2lxdWVzdCcsICdBZ3JhdmUnLCAnQWFjdXRlJywgJ0FjaXJjJywgJ0F0aWxkZScsICdBdW1sJywgJ0FyaW5nJywgJ0FlbGlnJywgJ0NjZWRpbCcsICdFZ3JhdmUnLCAnRWFjdXRlJywgJ0VjaXJjJywgJ0V1bWwnLCAnSWdyYXZlJywgJ0lhY3V0ZScsICdJY2lyYycsICdJdW1sJywgJ0VUSCcsICdOdGlsZGUnLCAnT2dyYXZlJywgJ09hY3V0ZScsICdPY2lyYycsICdPdGlsZGUnLCAnT3VtbCcsICd0aW1lcycsICdPc2xhc2gnLCAnVWdyYXZlJywgJ1VhY3V0ZScsICdVY2lyYycsICdVdW1sJywgJ1lhY3V0ZScsICdUSE9STicsICdzemxpZycsICdhZ3JhdmUnLCAnYWFjdXRlJywgJ2FjaXJjJywgJ2F0aWxkZScsICdhdW1sJywgJ2FyaW5nJywgJ2FlbGlnJywgJ2NjZWRpbCcsICdlZ3JhdmUnLCAnZWFjdXRlJywgJ2VjaXJjJywgJ2V1bWwnLCAnaWdyYXZlJywgJ2lhY3V0ZScsICdpY2lyYycsICdpdW1sJywgJ2V0aCcsICdudGlsZGUnLCAnb2dyYXZlJywgJ29hY3V0ZScsICdvY2lyYycsICdvdGlsZGUnLCAnb3VtbCcsICdkaXZpZGUnLCAnT3NsYXNoJywgJ3VncmF2ZScsICd1YWN1dGUnLCAndWNpcmMnLCAndXVtbCcsICd5YWN1dGUnLCAndGhvcm4nLCAneXVtbCcsICdxdW90JywgJ2FtcCcsICdsdCcsICdndCcsICdvZWxpZycsICdvZWxpZycsICdzY2Fyb24nLCAnc2Nhcm9uJywgJ3l1bWwnLCAnY2lyYycsICd0aWxkZScsICdlbnNwJywgJ2Vtc3AnLCAndGhpbnNwJywgJ3p3bmonLCAnendqJywgJ2xybScsICdybG0nLCAnbmRhc2gnLCAnbWRhc2gnLCAnbHNxdW8nLCAncnNxdW8nLCAnc2JxdW8nLCAnbGRxdW8nLCAncmRxdW8nLCAnYmRxdW8nLCAnZGFnZ2VyJywgJ2RhZ2dlcicsICdwZXJtaWwnLCAnbHNhcXVvJywgJ3JzYXF1bycsICdldXJvJywgJ2Zub2YnLCAnYWxwaGEnLCAnYmV0YScsICdnYW1tYScsICdkZWx0YScsICdlcHNpbG9uJywgJ3pldGEnLCAnZXRhJywgJ3RoZXRhJywgJ2lvdGEnLCAna2FwcGEnLCAnbGFtYmRhJywgJ211JywgJ251JywgJ3hpJywgJ29taWNyb24nLCAncGknLCAncmhvJywgJ3NpZ21hJywgJ3RhdScsICd1cHNpbG9uJywgJ3BoaScsICdjaGknLCAncHNpJywgJ29tZWdhJywgJ2FscGhhJywgJ2JldGEnLCAnZ2FtbWEnLCAnZGVsdGEnLCAnZXBzaWxvbicsICd6ZXRhJywgJ2V0YScsICd0aGV0YScsICdpb3RhJywgJ2thcHBhJywgJ2xhbWJkYScsICdtdScsICdudScsICd4aScsICdvbWljcm9uJywgJ3BpJywgJ3JobycsICdzaWdtYWYnLCAnc2lnbWEnLCAndGF1JywgJ3Vwc2lsb24nLCAncGhpJywgJ2NoaScsICdwc2knLCAnb21lZ2EnLCAndGhldGFzeW0nLCAndXBzaWgnLCAncGl2JywgJ2J1bGwnLCAnaGVsbGlwJywgJ3ByaW1lJywgJ3ByaW1lJywgJ29saW5lJywgJ2ZyYXNsJywgJ3dlaWVycCcsICdpbWFnZScsICdyZWFsJywgJ3RyYWRlJywgJ2FsZWZzeW0nLCAnbGFycicsICd1YXJyJywgJ3JhcnInLCAnZGFycicsICdoYXJyJywgJ2NyYXJyJywgJ2xhcnInLCAndWFycicsICdyYXJyJywgJ2RhcnInLCAnaGFycicsICdmb3JhbGwnLCAncGFydCcsICdleGlzdCcsICdlbXB0eScsICduYWJsYScsICdpc2luJywgJ25vdGluJywgJ25pJywgJ3Byb2QnLCAnc3VtJywgJ21pbnVzJywgJ2xvd2FzdCcsICdyYWRpYycsICdwcm9wJywgJ2luZmluJywgJ2FuZycsICdhbmQnLCAnb3InLCAnY2FwJywgJ2N1cCcsICdpbnQnLCAndGhlcmU0JywgJ3NpbScsICdjb25nJywgJ2FzeW1wJywgJ25lJywgJ2VxdWl2JywgJ2xlJywgJ2dlJywgJ3N1YicsICdzdXAnLCAnbnN1YicsICdzdWJlJywgJ3N1cGUnLCAnb3BsdXMnLCAnb3RpbWVzJywgJ3BlcnAnLCAnc2RvdCcsICdsY2VpbCcsICdyY2VpbCcsICdsZmxvb3InLCAncmZsb29yJywgJ2xhbmcnLCAncmFuZycsICdsb3onLCAnc3BhZGVzJywgJ2NsdWJzJywgJ2hlYXJ0cycsICdkaWFtcyddO1xudmFyIEhUTUxfQ09ERVMgPSBbMzksIDE2MCwgMTYxLCAxNjIsIDE2MywgMTY0LCAxNjUsIDE2NiwgMTY3LCAxNjgsIDE2OSwgMTcwLCAxNzEsIDE3MiwgMTczLCAxNzQsIDE3NSwgMTc2LCAxNzcsIDE3OCwgMTc5LCAxODAsIDE4MSwgMTgyLCAxODMsIDE4NCwgMTg1LCAxODYsIDE4NywgMTg4LCAxODksIDE5MCwgMTkxLCAxOTIsIDE5MywgMTk0LCAxOTUsIDE5NiwgMTk3LCAxOTgsIDE5OSwgMjAwLCAyMDEsIDIwMiwgMjAzLCAyMDQsIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTAsIDIxMSwgMjEyLCAyMTMsIDIxNCwgMjE1LCAyMTYsIDIxNywgMjE4LCAyMTksIDIyMCwgMjIxLCAyMjIsIDIyMywgMjI0LCAyMjUsIDIyNiwgMjI3LCAyMjgsIDIyOSwgMjMwLCAyMzEsIDIzMiwgMjMzLCAyMzQsIDIzNSwgMjM2LCAyMzcsIDIzOCwgMjM5LCAyNDAsIDI0MSwgMjQyLCAyNDMsIDI0NCwgMjQ1LCAyNDYsIDI0NywgMjQ4LCAyNDksIDI1MCwgMjUxLCAyNTIsIDI1MywgMjU0LCAyNTUsIDM0LCAzOCwgNjAsIDYyLCAzMzgsIDMzOSwgMzUyLCAzNTMsIDM3NiwgNzEwLCA3MzIsIDgxOTQsIDgxOTUsIDgyMDEsIDgyMDQsIDgyMDUsIDgyMDYsIDgyMDcsIDgyMTEsIDgyMTIsIDgyMTYsIDgyMTcsIDgyMTgsIDgyMjAsIDgyMjEsIDgyMjIsIDgyMjQsIDgyMjUsIDgyNDAsIDgyNDksIDgyNTAsIDgzNjQsIDQwMiwgOTEzLCA5MTQsIDkxNSwgOTE2LCA5MTcsIDkxOCwgOTE5LCA5MjAsIDkyMSwgOTIyLCA5MjMsIDkyNCwgOTI1LCA5MjYsIDkyNywgOTI4LCA5MjksIDkzMSwgOTMyLCA5MzMsIDkzNCwgOTM1LCA5MzYsIDkzNywgOTQ1LCA5NDYsIDk0NywgOTQ4LCA5NDksIDk1MCwgOTUxLCA5NTIsIDk1MywgOTU0LCA5NTUsIDk1NiwgOTU3LCA5NTgsIDk1OSwgOTYwLCA5NjEsIDk2MiwgOTYzLCA5NjQsIDk2NSwgOTY2LCA5NjcsIDk2OCwgOTY5LCA5NzcsIDk3OCwgOTgyLCA4MjI2LCA4MjMwLCA4MjQyLCA4MjQzLCA4MjU0LCA4MjYwLCA4NDcyLCA4NDY1LCA4NDc2LCA4NDgyLCA4NTAxLCA4NTkyLCA4NTkzLCA4NTk0LCA4NTk1LCA4NTk2LCA4NjI5LCA4NjU2LCA4NjU3LCA4NjU4LCA4NjU5LCA4NjYwLCA4NzA0LCA4NzA2LCA4NzA3LCA4NzA5LCA4NzExLCA4NzEyLCA4NzEzLCA4NzE1LCA4NzE5LCA4NzIxLCA4NzIyLCA4NzI3LCA4NzMwLCA4NzMzLCA4NzM0LCA4NzM2LCA4NzQzLCA4NzQ0LCA4NzQ1LCA4NzQ2LCA4NzQ3LCA4NzU2LCA4NzY0LCA4NzczLCA4Nzc2LCA4ODAwLCA4ODAxLCA4ODA0LCA4ODA1LCA4ODM0LCA4ODM1LCA4ODM2LCA4ODM4LCA4ODM5LCA4ODUzLCA4ODU1LCA4ODY5LCA4OTAxLCA4OTY4LCA4OTY5LCA4OTcwLCA4OTcxLCA5MDAxLCA5MDAyLCA5Njc0LCA5ODI0LCA5ODI3LCA5ODI5LCA5ODMwXTtcblxudmFyIGFscGhhSW5kZXggPSB7fTtcbnZhciBudW1JbmRleCA9IHt9O1xuXG52YXIgaSA9IDA7XG52YXIgbGVuZ3RoID0gSFRNTF9BTFBIQS5sZW5ndGg7XG53aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgIHZhciBhID0gSFRNTF9BTFBIQVtpXTtcbiAgICB2YXIgYyA9IEhUTUxfQ09ERVNbaV07XG4gICAgYWxwaGFJbmRleFthXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgbnVtSW5kZXhbY10gPSBhO1xuICAgIGkrKztcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHRtbDRFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXFx3XFxkXSspOz8vZywgZnVuY3Rpb24ocywgZW50aXR5KSB7XG4gICAgICAgIHZhciBjaHI7XG4gICAgICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlbnRpdHkuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigyKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKCEoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociA9IGFscGhhSW5kZXhbZW50aXR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hyIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZGVjb2RlKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgcmVzdWx0ICs9IGFscGhhID8gXCImXCIgKyBhbHBoYSArIFwiO1wiIDogc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgY2MgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gbnVtSW5kZXhbY2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2MgPCAzMiB8fCBjYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiJiNcIiArIGNjICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWw0RW50aXRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJ2YXIgQUxQSEFfSU5ERVggPSB7XG4gICAgJyZsdCc6ICc8JyxcbiAgICAnJmd0JzogJz4nLFxuICAgICcmcXVvdCc6ICdcIicsXG4gICAgJyZhcG9zJzogJ1xcJycsXG4gICAgJyZhbXAnOiAnJicsXG4gICAgJyZsdDsnOiAnPCcsXG4gICAgJyZndDsnOiAnPicsXG4gICAgJyZxdW90Oyc6ICdcIicsXG4gICAgJyZhcG9zOyc6ICdcXCcnLFxuICAgICcmYW1wOyc6ICcmJ1xufTtcblxudmFyIENIQVJfSU5ERVggPSB7XG4gICAgNjA6ICdsdCcsXG4gICAgNjI6ICdndCcsXG4gICAgMzQ6ICdxdW90JyxcbiAgICAzOTogJ2Fwb3MnLFxuICAgIDM4OiAnYW1wJ1xufTtcblxudmFyIENIQVJfU19JTkRFWCA9IHtcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAnXFwnJzogJyZhcG9zOycsXG4gICAgJyYnOiAnJmFtcDsnXG59O1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBYbWxFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC88fD58XCJ8J3wmL2csIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIENIQVJfU19JTkRFWFtzXTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiM/WzAtOWEtekEtWl0rOz8vZywgZnVuY3Rpb24ocykge1xuICAgICAgICBpZiAocy5jaGFyQXQoMSkgPT09ICcjJykge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBzLmNoYXJBdCgyKS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KHMuc3Vic3RyKDMpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KHMuc3Vic3RyKDIpKTtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFMUEhBX0lOREVYW3NdIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZGVjb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gQ0hBUl9JTkRFWFtjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ2h0ID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmdodCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhtbEVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL3htbC1lbnRpdGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0NvbnN1bWFibGVBcnJheTIpO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG52YXIgX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUgPSByZXF1aXJlKCd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlL2NsaWVudD9vdmVybGF5PWZhbHNlJnJlbG9hZD10cnVlJyk7XG5cbnZhciBfY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhhbmRsZXJzID0ge1xuICByZWxvYWQ6IGZ1bmN0aW9uIHJlbG9hZChyb3V0ZSkge1xuICAgIGlmIChyb3V0ZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoKDAsIF9rZXlzMi5kZWZhdWx0KShuZXh0LnJvdXRlci5jb21wb25lbnRzKSksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgciA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBDb21wb25lbnQgPSBuZXh0LnJvdXRlci5jb21wb25lbnRzW3JdLkNvbXBvbmVudDtcblxuICAgICAgICAgIGlmIChDb21wb25lbnQuX19yb3V0ZSA9PT0gJy9fZXJyb3ItZGVidWcnKSB7XG4gICAgICAgICAgICAvLyByZWxvYWQgYWxsICcvX2Vycm9yLWRlYnVnJ1xuICAgICAgICAgICAgLy8gd2hpY2ggYXJlIGV4cGVjdGVkIHRvIGJlIGVycm9ycyBvZiAnL19lcnJvcicgcm91dGVzXG4gICAgICAgICAgICBuZXh0LnJvdXRlci5yZWxvYWQocik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQucm91dGVyLnJlbG9hZChyb3V0ZSk7XG4gIH0sXG4gIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKHJvdXRlKSB7XG4gICAgdmFyIF9yZWYgPSBuZXh0LnJvdXRlci5jb21wb25lbnRzW3JvdXRlXSB8fCB7fSxcbiAgICAgICAgQ29tcG9uZW50ID0gX3JlZi5Db21wb25lbnQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ICYmIENvbXBvbmVudC5fX3JvdXRlID09PSAnL19lcnJvci1kZWJ1ZycpIHtcbiAgICAgIC8vIHJlbG9hZCB0byByZWNvdmVyIGZyb20gcnVudGltZSBlcnJvcnNcbiAgICAgIG5leHQucm91dGVyLnJlbG9hZChyb3V0ZSk7XG4gICAgfVxuICB9XG59OyAvKiBnbG9iYWwgbmV4dCAqL1xuXG5cbl9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlMi5kZWZhdWx0LnN1YnNjcmliZShmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBmbiA9IGhhbmRsZXJzW29iai5hY3Rpb25dO1xuICBpZiAoZm4pIHtcbiAgICB2YXIgZGF0YSA9IG9iai5kYXRhIHx8IFtdO1xuICAgIGZuLmFwcGx5KHVuZGVmaW5lZCwgKDAsIF90b0NvbnN1bWFibGVBcnJheTMuZGVmYXVsdCkoZGF0YSkpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBhY3Rpb24gJyArIG9iai5hY3Rpb24pO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmV4dC9kaXN0L2NsaWVudC93ZWJwYWNrLWhvdC1taWRkbGV3YXJlLWNsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLnJlcGxhY2UoYW5zaVJlZ2V4LCAnJykgOiBzdHI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmlwLWFuc2kvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG5cbnZhciBjbGllbnRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG52YXIgc3R5bGVzID0ge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjg1KScsXG4gIGNvbG9yOiAnI0U4RThFOCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjInLFxuICB3aGl0ZVNwYWNlOiAncHJlJyxcbiAgZm9udEZhbWlseTogJ01lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlJyxcbiAgZm9udFNpemU6ICcxM3B4JyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHpJbmRleDogOTk5OSxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gIGRpcjogJ2x0cidcbn07XG5mb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gIGNsaWVudE92ZXJsYXkuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xufVxuXG52YXIgYW5zaUhUTUwgPSByZXF1aXJlKCdhbnNpLWh0bWwnKTtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ3RyYW5zcGFyZW50JywgJ3RyYW5zcGFyZW50J10sXG4gIGJsYWNrOiAnMTgxODE4JyxcbiAgcmVkOiAnRTM2MDQ5JyxcbiAgZ3JlZW46ICdCM0NCNzQnLFxuICB5ZWxsb3c6ICdGRkQwODAnLFxuICBibHVlOiAnN0NBRkMyJyxcbiAgbWFnZW50YTogJzdGQUNDQScsXG4gIGN5YW46ICdDM0MyRUYnLFxuICBsaWdodGdyZXk6ICdFQkU3RTMnLFxuICBkYXJrZ3JleTogJzZENzg5MSdcbn07XG5hbnNpSFRNTC5zZXRDb2xvcnMoY29sb3JzKTtcblxudmFyIEVudGl0aWVzID0gcmVxdWlyZSgnaHRtbC1lbnRpdGllcycpLkFsbEh0bWxFbnRpdGllcztcbnZhciBlbnRpdGllcyA9IG5ldyBFbnRpdGllcygpO1xuXG5leHBvcnRzLnNob3dQcm9ibGVtcyA9XG5mdW5jdGlvbiBzaG93UHJvYmxlbXModHlwZSwgbGluZXMpIHtcbiAgY2xpZW50T3ZlcmxheS5pbm5lckhUTUwgPSAnJztcbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbihtc2cpIHtcbiAgICBtc2cgPSBhbnNpSFRNTChlbnRpdGllcy5lbmNvZGUobXNnKSk7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMjZweCc7XG4gICAgZGl2LmlubmVySFRNTCA9IHByb2JsZW1UeXBlKHR5cGUpICsgJyBpbiAnICsgbXNnO1xuICAgIGNsaWVudE92ZXJsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbGllbnRPdmVybGF5KTtcbiAgfVxufTtcblxuZXhwb3J0cy5jbGVhciA9XG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgaWYgKGRvY3VtZW50LmJvZHkgJiYgY2xpZW50T3ZlcmxheS5wYXJlbnROb2RlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbGllbnRPdmVybGF5KTtcbiAgfVxufTtcblxudmFyIHByb2JsZW1Db2xvcnMgPSB7XG4gIGVycm9yczogY29sb3JzLnJlZCxcbiAgd2FybmluZ3M6IGNvbG9ycy55ZWxsb3dcbn07XG5cbmZ1bmN0aW9uIHByb2JsZW1UeXBlICh0eXBlKSB7XG4gIHZhciBjb2xvciA9IHByb2JsZW1Db2xvcnNbdHlwZV0gfHwgY29sb3JzLnJlZDtcbiAgcmV0dXJuIChcbiAgICAnPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMnICsgY29sb3IgKyAnOyBjb2xvcjojZmZmOyBwYWRkaW5nOjJweCA0cHg7IGJvcmRlci1yYWRpdXM6IDJweFwiPicgK1xuICAgICAgdHlwZS5zbGljZSgwLCAtMSkudG9VcHBlckNhc2UoKSArXG4gICAgJzwvc3Bhbj4nXG4gICk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG4vKmdsb2JhbCBfX3Jlc291cmNlUXVlcnkgX193ZWJwYWNrX3B1YmxpY19wYXRoX18qL1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgcGF0aDogXCIvX193ZWJwYWNrX2htclwiLFxuICB0aW1lb3V0OiAyMCAqIDEwMDAsXG4gIG92ZXJsYXk6IHRydWUsXG4gIHJlbG9hZDogZmFsc2UsXG4gIGxvZzogdHJ1ZSxcbiAgd2FybjogdHJ1ZVxufTtcbmlmIChfX3Jlc291cmNlUXVlcnkpIHtcbiAgdmFyIHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcbiAgdmFyIG92ZXJyaWRlcyA9IHF1ZXJ5c3RyaW5nLnBhcnNlKF9fcmVzb3VyY2VRdWVyeS5zbGljZSgxKSk7XG4gIGlmIChvdmVycmlkZXMucGF0aCkgb3B0aW9ucy5wYXRoID0gb3ZlcnJpZGVzLnBhdGg7XG4gIGlmIChvdmVycmlkZXMudGltZW91dCkgb3B0aW9ucy50aW1lb3V0ID0gb3ZlcnJpZGVzLnRpbWVvdXQ7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheSkgb3B0aW9ucy5vdmVybGF5ID0gb3ZlcnJpZGVzLm92ZXJsYXkgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMucmVsb2FkKSBvcHRpb25zLnJlbG9hZCA9IG92ZXJyaWRlcy5yZWxvYWQgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMubm9JbmZvICYmIG92ZXJyaWRlcy5ub0luZm8gIT09ICdmYWxzZScpIHtcbiAgICBvcHRpb25zLmxvZyA9IGZhbHNlO1xuICB9XG4gIGlmIChvdmVycmlkZXMucXVpZXQgJiYgb3ZlcnJpZGVzLnF1aWV0ICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgICBvcHRpb25zLndhcm4gPSBmYWxzZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLmR5bmFtaWNQdWJsaWNQYXRoKSB7XG4gICAgb3B0aW9ucy5wYXRoID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBvcHRpb25zLnBhdGg7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5FdmVudFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgIFwid2VicGFjay1ob3QtbWlkZGxld2FyZSdzIGNsaWVudCByZXF1aXJlcyBFdmVudFNvdXJjZSB0byB3b3JrLiBcIiArXG4gICAgXCJZb3Ugc2hvdWxkIGluY2x1ZGUgYSBwb2x5ZmlsbCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IHRoaXMgYnJvd3NlcjogXCIgK1xuICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZlci1zZW50X2V2ZW50cyNUb29sc1wiXG4gICk7XG59IGVsc2Uge1xuICBjb25uZWN0KHdpbmRvdy5FdmVudFNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3QoRXZlbnRTb3VyY2UpIHtcbiAgdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO1xuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcblxuICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xuICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcbiAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0O1xuXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gY29ubmVjdGVkXCIpO1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBcIlxcdUQ4M0RcXHVEQzkzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3NNZXNzYWdlKEpTT04ucGFyc2UoZXZlbnQuZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgSE1SIG1lc3NhZ2U6IFwiICsgZXZlbnQuZGF0YSArIFwiXFxuXCIgKyBleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICBzb3VyY2UuY2xvc2UoKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjb25uZWN0KEV2ZW50U291cmNlKTsgfSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgfVxuXG59XG5cbnZhciByZXBvcnRlcjtcbi8vIHRoZSByZXBvcnRlciBuZWVkcyB0byBiZSBhIHNpbmdsZXRvbiBvbiB0aGUgcGFnZVxuLy8gaW4gY2FzZSB0aGUgY2xpZW50IGlzIGJlaW5nIHVzZWQgYnkgbXV0bGlwbGUgYnVuZGxlc1xuLy8gd2Ugb25seSB3YW50IHRvIHJlcG9ydCBvbmNlLlxuLy8gYWxsIHRoZSBlcnJvcnMgd2lsbCBnbyB0byBhbGwgY2xpZW50c1xudmFyIHNpbmdsZXRvbktleSA9ICdfX3dlYnBhY2tfaG90X21pZGRsZXdhcmVfcmVwb3J0ZXJfXyc7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvd1tzaW5nbGV0b25LZXldKSB7XG4gIHJlcG9ydGVyID0gd2luZG93W3NpbmdsZXRvbktleV0gPSBjcmVhdGVSZXBvcnRlcigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnRlcigpIHtcbiAgdmFyIHN0cmlwID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xuXG4gIHZhciBvdmVybGF5O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLm92ZXJsYXkpIHtcbiAgICBvdmVybGF5ID0gcmVxdWlyZSgnLi9jbGllbnQtb3ZlcmxheScpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9ibGVtczogZnVuY3Rpb24odHlwZSwgb2JqKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIGJ1bmRsZSBoYXMgXCIgKyB0eXBlICsgXCI6XCIpO1xuICAgICAgICBvYmpbdHlwZV0uZm9yRWFjaChmdW5jdGlvbihtc2cpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBcIiArIHN0cmlwKG1zZykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVybGF5ICYmIHR5cGUgIT09ICd3YXJuaW5ncycpIG92ZXJsYXkuc2hvd1Byb2JsZW1zKHR5cGUsIG9ialt0eXBlXSk7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsZWFyKCk7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbihjdXN0b21PdmVybGF5KSB7XG4gICAgICBvdmVybGF5ID0gY3VzdG9tT3ZlcmxheTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBwcm9jZXNzVXBkYXRlID0gcmVxdWlyZSgnLi9wcm9jZXNzLXVwZGF0ZScpO1xuXG52YXIgY3VzdG9tSGFuZGxlcjtcbnZhciBzdWJzY3JpYmVBbGxIYW5kbGVyO1xuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2Uob2JqKSB7XG4gIHN3aXRjaChvYmouYWN0aW9uKSB7XG4gICAgY2FzZSBcImJ1aWxkaW5nXCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gYnVuZGxlIHJlYnVpbGRpbmdcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnVpbHRcIjpcbiAgICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIltITVJdIGJ1bmRsZSBcIiArIChvYmoubmFtZSA/IG9iai5uYW1lICsgXCIgXCIgOiBcIlwiKSArXG4gICAgICAgICAgXCJyZWJ1aWx0IGluIFwiICsgb2JqLnRpbWUgKyBcIm1zXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgIGNhc2UgXCJzeW5jXCI6XG4gICAgICBpZiAob2JqLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIucHJvYmxlbXMoJ2Vycm9ycycsIG9iaik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVwb3J0ZXIpIHtcbiAgICAgICAgICBpZiAob2JqLndhcm5pbmdzLmxlbmd0aCA+IDApIHJlcG9ydGVyLnByb2JsZW1zKCd3YXJuaW5ncycsIG9iaik7XG4gICAgICAgICAgcmVwb3J0ZXIuc3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NVcGRhdGUob2JqLmhhc2gsIG9iai5tb2R1bGVzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoY3VzdG9tSGFuZGxlcikge1xuICAgICAgICBjdXN0b21IYW5kbGVyKG9iaik7XG4gICAgICB9XG4gIH1cblxuICBpZiAoc3Vic2NyaWJlQWxsSGFuZGxlcikge1xuICAgIHN1YnNjcmliZUFsbEhhbmRsZXIob2JqKTtcbiAgfVxufVxuXG5pZiAobW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN1YnNjcmliZUFsbDogZnVuY3Rpb24gc3Vic2NyaWJlQWxsKGhhbmRsZXIpIHtcbiAgICAgIHN1YnNjcmliZUFsbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgY3VzdG9tSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbiB1c2VDdXN0b21PdmVybGF5KGN1c3RvbU92ZXJsYXkpIHtcbiAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIudXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzP292ZXJsYXk9ZmFsc2UmcmVsb2FkPXRydWVcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCIvKipcbiAqIEJhc2VkIGhlYXZpbHkgb24gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL1xuICogIGMwYWZkZjljNmFiYzFkZDcwNzA3YzU5NGU0NzM4MDJhNTY2ZjdiNmUvaG90L29ubHktZGV2LXNlcnZlci5qc1xuICogT3JpZ2luYWwgY29weXJpZ2h0IFRvYmlhcyBLb3BwZXJzIEBzb2tyYSAoTUlUIGxpY2Vuc2UpXG4gKi9cblxuLyogZ2xvYmFsIHdpbmRvdyBfX3dlYnBhY2tfaGFzaF9fICovXG5cbmlmICghbW9kdWxlLmhvdCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJbSE1SXSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLlwiKTtcbn1cblxudmFyIGhtckRvY3NVcmwgPSBcImh0dHA6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnQtd2l0aC13ZWJwYWNrLmh0bWxcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG5cbnZhciBsYXN0SGFzaDtcbnZhciBmYWlsdXJlU3RhdHVzZXMgPSB7IGFib3J0OiAxLCBmYWlsOiAxIH07XG52YXIgYXBwbHlPcHRpb25zID0geyBpZ25vcmVVbmFjY2VwdGVkOiB0cnVlIH07XG5cbmZ1bmN0aW9uIHVwVG9EYXRlKGhhc2gpIHtcbiAgaWYgKGhhc2gpIGxhc3RIYXNoID0gaGFzaDtcbiAgcmV0dXJuIGxhc3RIYXNoID09IF9fd2VicGFja19oYXNoX187XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGFzaCwgbW9kdWxlTWFwLCBvcHRpb25zKSB7XG4gIHZhciByZWxvYWQgPSBvcHRpb25zLnJlbG9hZDtcbiAgaWYgKCF1cFRvRGF0ZShoYXNoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09IFwiaWRsZVwiKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG4gICAgY2hlY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKGVyciwgdXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBoYW5kbGVFcnJvcihlcnIpO1xuXG4gICAgICBpZighdXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZSAoRnVsbCByZWxvYWQgbmVlZGVkKVwiKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSBzZXJ2ZXIpXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcHBseUNhbGxiYWNrID0gZnVuY3Rpb24oYXBwbHlFcnIsIHJlbmV3ZWRNb2R1bGVzKSB7XG4gICAgICAgIGlmIChhcHBseUVycikgcmV0dXJuIGhhbmRsZUVycm9yKGFwcGx5RXJyKTtcblxuICAgICAgICBpZiAoIXVwVG9EYXRlKCkpIGNoZWNrKCk7XG5cbiAgICAgICAgbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGFwcGx5UmVzdWx0ID0gbW9kdWxlLmhvdC5hcHBseShhcHBseU9wdGlvbnMsIGFwcGx5Q2FsbGJhY2spO1xuICAgICAgLy8gd2VicGFjayAyIHByb21pc2VcbiAgICAgIGlmIChhcHBseVJlc3VsdCAmJiBhcHBseVJlc3VsdC50aGVuKSB7XG4gICAgICAgIC8vIEhvdE1vZHVsZVJlcGxhY2VtZW50LnJ1bnRpbWUuanMgcmVmZXJzIHRvIHRoZSByZXN1bHQgYXMgYG91dGRhdGVkTW9kdWxlc2BcbiAgICAgICAgYXBwbHlSZXN1bHQudGhlbihmdW5jdGlvbihvdXRkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICBhcHBseUNhbGxiYWNrKG51bGwsIG91dGRhdGVkTW9kdWxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBseVJlc3VsdC5jYXRjaChhcHBseUNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0ID0gbW9kdWxlLmhvdC5jaGVjayhmYWxzZSwgY2IpO1xuICAgIC8vIHdlYnBhY2sgMiBwcm9taXNlXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICByZXN1bHQudGhlbihmdW5jdGlvbih1cGRhdGVkTW9kdWxlcykge1xuICAgICAgICAgICAgY2IobnVsbCwgdXBkYXRlZE1vZHVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0LmNhdGNoKGNiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2dVcGRhdGVzKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuICAgIHZhciB1bmFjY2VwdGVkTW9kdWxlcyA9IHVwZGF0ZWRNb2R1bGVzLmZpbHRlcihmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgcmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcbiAgICB9KTtcblxuICAgIGlmKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiBcIiArXG4gICAgICAgICAgXCIoRnVsbCByZWxvYWQgbmVlZGVkKVxcblwiICtcbiAgICAgICAgICBcIlRoaXMgaXMgdXN1YWxseSBiZWNhdXNlIHRoZSBtb2R1bGVzIHdoaWNoIGhhdmUgY2hhbmdlZCBcIiArXG4gICAgICAgICAgXCIoYW5kIHRoZWlyIHBhcmVudHMpIGRvIG5vdCBrbm93IGhvdyB0byBob3QgcmVsb2FkIHRoZW1zZWx2ZXMuIFwiICtcbiAgICAgICAgICBcIlNlZSBcIiArIGhtckRvY3NVcmwgKyBcIiBmb3IgbW9yZSBkZXRhaWxzLlwiXG4gICAgICAgICk7XG4gICAgICAgIHVuYWNjZXB0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSAgLSBcIiArIG1vZHVsZU1hcFttb2R1bGVJZF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgIGlmKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBOb3RoaW5nIGhvdCB1cGRhdGVkLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gVXBkYXRlZCBtb2R1bGVzOlwiKTtcbiAgICAgICAgcmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVNYXBbbW9kdWxlSWRdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1cFRvRGF0ZSgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gQXBwIGlzIHVwIHRvIGRhdGUuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpIGluIGZhaWx1cmVTdGF0dXNlcykge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgY2hlY2sgZm9yIHVwZGF0ZSAoRnVsbCByZWxvYWQgbmVlZGVkKVwiKTtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gXCIgKyBlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBVcGRhdGUgY2hlY2sgZmFpbGVkOiBcIiArIGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGVyZm9ybVJlbG9hZCgpIHtcbiAgICBpZiAocmVsb2FkKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSBjb25zb2xlLndhcm4oXCJbSE1SXSBSZWxvYWRpbmcgcGFnZVwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvcHJvY2Vzcy11cGRhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2ZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoVCwgRCl7XG4gIHJldHVybiAkLnNldERlc2NzKFQsIEQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuZnJlZXplO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUoaXQpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF9oeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2NhbWVsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJ2JhY2tncm91bmQtY29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZENvbG9yXCJcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnLW1vei10cmFuc2l0aW9uJylcbiAqICAgPCBcIk1velRyYW5zaXRpb25cIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbXMtdHJhbnNpdGlvbicpXG4gKiAgIDwgXCJtc1RyYW5zaXRpb25cIlxuICpcbiAqIEFzIEFuZGkgU21pdGggc3VnZ2VzdHNcbiAqIChodHRwOi8vd3d3LmFuZGlzbWl0aC5jb20vYmxvZy8yMDEyLzAyL21vZGVybml6ci1wcmVmaXhlZC8pLCBhbiBgLW1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2UgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gY2FtZWxpemUoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsaXplU3R5bGVOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF91cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqXG4gKiBGb3IgQ1NTIHN0eWxlIG5hbWVzLCB1c2UgYGh5cGhlbmF0ZVN0eWxlTmFtZWAgaW5zdGVhZCB3aGljaCB3b3JrcyBwcm9wZXJseVxuICogd2l0aCBhbGwgdmVuZG9yIHByZWZpeGVzLCBpbmNsdWRpbmcgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF91cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2h5cGhlbmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG52YXIgY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcgaW4gY2FjaGVcbiAgICA/IGNhY2hlW3N0cmluZ11cbiAgICA6IGNhY2hlW3N0cmluZ10gPSBzdHJpbmdcbiAgICAgIC5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJCYnKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvam9pblByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qb2luUHJlZml4ZWRWYWx1ZSk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNhbGMocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUsIGZ1bmN0aW9uIChwcmVmaXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvY2FsY1xcKC9nLCBwcmVmaXggKyAnY2FsYygnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvY2FsYy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnNvcjtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfam9pblByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0ge1xuICAnem9vbS1pbic6IHRydWUsXG4gICd6b29tLW91dCc6IHRydWUsXG4gIGdyYWI6IHRydWUsXG4gIGdyYWJiaW5nOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9jdXJzb3IuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4O1xudmFyIHZhbHVlcyA9IHsgZmxleDogdHJ1ZSwgJ2lubGluZS1mbGV4JzogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLScgKyB2YWx1ZSArICdib3gnLCAnLXdlYmtpdC0nICsgdmFsdWUsIHZhbHVlXVxuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2ZsZXguanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94SUU7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgJ3NwYWNlLWFyb3VuZCc6ICdkaXN0cmlidXRlJyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgJ2ZsZXgtZW5kJzogJ2VuZCdcbn07XG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICBhbGlnblNlbGY6ICdtc0ZsZXhJdGVtQWxpZ24nLFxuICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICBvcmRlcjogJ21zRmxleE9yZGVyJyxcbiAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gIGZsZXhCYXNpczogJ21zUHJlZmVycmVkU2l6ZSdcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hJRShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hJRS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXhib3hPbGQ7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICd3cmFwLXJldmVyc2UnOiAnbXVsdGlwbGUnLFxuICB3cmFwOiAnbXVsdGlwbGUnXG59O1xuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgZmxleFdyYXA6ICdXZWJraXRCb3hMaW5lcydcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2ZsZXhEaXJlY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgV2Via2l0Qm94T3JpZW50OiB2YWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA+IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgIFdlYmtpdEJveERpcmVjdGlvbjogdmFsdWUuaW5kZXhPZigncmV2ZXJzZScpID4gLTEgPyAncmV2ZXJzZScgOiAnbm9ybWFsJ1xuICAgIH07XG4gIH1cbiAgaWYgKGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hPbGQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBncmFkaWVudDtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfam9pblByZWZpeGVkVmFsdWUpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLm1hdGNoKHZhbHVlcykgIT09IG51bGwpIHtcbiAgICByZXR1cm4gKDAsIF9qb2luUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkocHJvcGVydHksIHZhbHVlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvZ3JhZGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwb3NpdGlvbjtcbmZ1bmN0aW9uIHBvc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgcmV0dXJuIHsgcG9zaXRpb246IFsnLXdlYmtpdC1zdGlja3knLCAnc3RpY2t5J10gfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvcG9zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzaXppbmc7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xudmFyIHZhbHVlcyA9IHtcbiAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgJ21heC1jb250ZW50JzogdHJ1ZSxcbiAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgJ2NvbnRhaW4tZmxvYXRzJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc2l6aW5nKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0gJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9zaXppbmcuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG52YXIgX3ByZWZpeFByb3BzID0gcmVxdWlyZSgnLi4vcHJlZml4UHJvcHMnKTtcblxudmFyIF9wcmVmaXhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiB0cnVlLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlKTtcbiAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKC8tbW96LXwtbXMtLykgPT09IG51bGw7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignV2Via2l0JykgPiAtMSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHdlYmtpdE91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgJ1dlYmtpdCcgKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KSwgd2Via2l0T3V0cHV0KSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBwcm9wZXJ0eSwgb3V0cHV0VmFsdWUpLCBfcmVmMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZSh2YWx1ZSkge1xuICBpZiAoKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAvLyBpdGVyYXRlIGVhY2ggc2luZ2xlIHZhbHVlIGFuZCBjaGVjayBmb3IgdHJhbnNpdGlvbmVkIHByb3BlcnRpZXNcbiAgLy8gdGhhdCBuZWVkIHRvIGJlIHByZWZpeGVkIGFzIHdlbGxcbiAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgIG11bHRpcGxlVmFsdWVzW2luZGV4XSA9IE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczIuZGVmYXVsdCkucmVkdWNlKGZ1bmN0aW9uIChvdXQsIHByZWZpeCkge1xuICAgICAgdmFyIGRhc2hDYXNlUHJlZml4ID0gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG5cbiAgICAgIE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczIuZGVmYXVsdFtwcmVmaXhdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBkYXNoQ2FzZVByb3BlcnR5ID0gKDAsIF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpKHByb3ApO1xuXG4gICAgICAgIGlmICh2YWwuaW5kZXhPZihkYXNoQ2FzZVByb3BlcnR5KSA+IC0xICYmIGRhc2hDYXNlUHJvcGVydHkgIT09ICdvcmRlcicpIHtcbiAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgb3V0ID0gdmFsLnJlcGxhY2UoZGFzaENhc2VQcm9wZXJ0eSwgZGFzaENhc2VQcmVmaXggKyBkYXNoQ2FzZVByb3BlcnR5KSArICcsJyArIG91dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0sIHZhbCk7XG4gIH0pO1xuXG4gIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy90cmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4QWxsO1xuXG52YXIgX3ByZWZpeFByb3BzID0gcmVxdWlyZSgnLi9wcmVmaXhQcm9wcycpO1xuXG52YXIgX3ByZWZpeFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFByb3BzKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbnZhciBfc29ydFByZWZpeGVkU3R5bGUgPSByZXF1aXJlKCcuLi91dGlscy9zb3J0UHJlZml4ZWRTdHlsZScpO1xuXG52YXIgX3NvcnRQcmVmaXhlZFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvcnRQcmVmaXhlZFN0eWxlKTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9wb3NpdGlvbicpO1xuXG52YXIgX3Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9uKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NhbGMnKTtcblxudmFyIF9jYWxjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGMpO1xuXG52YXIgX2N1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jdXJzb3InKTtcblxudmFyIF9jdXJzb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Vyc29yKTtcblxudmFyIF9mbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9mbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXgpO1xuXG52YXIgX3NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9zaXppbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2l6aW5nKTtcblxudmFyIF9ncmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX2dyYWRpZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyYWRpZW50KTtcblxudmFyIF90cmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF90cmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb24pO1xuXG52YXIgX2ZsZXhib3hJRSA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94SUUnKTtcblxudmFyIF9mbGV4Ym94SUUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveElFKTtcblxudmFyIF9mbGV4Ym94T2xkID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXhib3hPbGQnKTtcblxudmFyIF9mbGV4Ym94T2xkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hPbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBzcGVjaWFsIGZsZXhib3ggc3BlY2lmaWNhdGlvbnNcblxuXG52YXIgcGx1Z2lucyA9IFtfcG9zaXRpb24yLmRlZmF1bHQsIF9jYWxjMi5kZWZhdWx0LCBfY3Vyc29yMi5kZWZhdWx0LCBfc2l6aW5nMi5kZWZhdWx0LCBfZ3JhZGllbnQyLmRlZmF1bHQsIF90cmFuc2l0aW9uMi5kZWZhdWx0LCBfZmxleGJveElFMi5kZWZhdWx0LCBfZmxleGJveE9sZDIuZGVmYXVsdCwgX2ZsZXgyLmRlZmF1bHRdO1xuXG4vKipcbiAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3QgdXNpbmcgYWxsIHZlbmRvciBwcmVmaXhlc1xuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gcHJlZml4QWxsKHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAvLyByZWN1cnNlIHRocm91Z2ggbmVzdGVkIHN0eWxlIG9iamVjdHNcbiAgICAgIHN0eWxlc1twcm9wZXJ0eV0gPSBwcmVmaXhBbGwodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qua2V5cyhfcHJlZml4UHJvcHMyLmRlZmF1bHQpLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IF9wcmVmaXhQcm9wczIuZGVmYXVsdFtwcmVmaXhdO1xuICAgICAgICAvLyBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgICAgICAgIHN0eWxlc1twcmVmaXggKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgW10uY29uY2F0KHN0eWxlc1twcm9wZXJ0eV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgLy8gcmVzb2x2ZSBldmVyeSBzcGVjaWFsIHBsdWdpbnNcbiAgICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBhc3NpZ25TdHlsZXMoc3R5bGVzLCBwbHVnaW4ocHJvcGVydHksIHZhbHVlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuICgwLCBfc29ydFByZWZpeGVkU3R5bGUyLmRlZmF1bHQpKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblN0eWxlcyhiYXNlKSB7XG4gIHZhciBleHRlbmQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgdmFyIGJhc2VWYWx1ZSA9IGJhc2VbcHJvcGVydHldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJhc2VWYWx1ZSkpIHtcbiAgICAgIFtdLmNvbmNhdChleHRlbmRbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVJbmRleCA9IGJhc2VWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlSW5kZXggPiAtMSkge1xuICAgICAgICAgIGJhc2VbcHJvcGVydHldLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBiYXNlW3Byb3BlcnR5XS5wdXNoKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlW3Byb3BlcnR5XSA9IGV4dGVuZFtwcm9wZXJ0eV07XG4gICAgfVxuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhBbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5tYXRjaCgvXihXZWJraXR8TW96fE98bXMpLykgIT09IG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2lzUHJlZml4ZWRQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNvcnRQcmVmaXhlZFN0eWxlO1xuXG52YXIgX2lzUHJlZml4ZWRQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vaXNQcmVmaXhlZFByb3BlcnR5Jyk7XG5cbnZhciBfaXNQcmVmaXhlZFByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNvcnRQcmVmaXhlZFN0eWxlKHN0eWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZSkuc29ydChmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAoKDAsIF9pc1ByZWZpeGVkUHJvcGVydHkyLmRlZmF1bHQpKGxlZnQpICYmICEoMCwgX2lzUHJlZml4ZWRQcm9wZXJ0eTIuZGVmYXVsdCkocmlnaHQpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmICghKDAsIF9pc1ByZWZpeGVkUHJvcGVydHkyLmRlZmF1bHQpKGxlZnQpICYmICgwLCBfaXNQcmVmaXhlZFByb3BlcnR5Mi5kZWZhdWx0KShyaWdodCkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChzb3J0ZWRTdHlsZSwgcHJvcCkge1xuICAgIHNvcnRlZFN0eWxlW3Byb3BdID0gc3R5bGVbcHJvcF07XG4gICAgcmV0dXJuIHNvcnRlZFN0eWxlO1xuICB9LCB7fSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9zb3J0UHJlZml4ZWRTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvc3RhdGljL3ByZWZpeEFsbCcpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzdHJpbmcgPSB0b1N0cmluZy5jYWxsKGZuKVxuICByZXR1cm4gc3RyaW5nID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8XG4gICAgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBzdHJpbmcgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAvLyBJRTggYW5kIGJlbG93XG4gICAgIChmbiA9PT0gd2luZG93LnNldFRpbWVvdXQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuYWxlcnQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuY29uZmlybSB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5wcm9tcHQpKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1mdW5jdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc2FycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiLyohXG4gKiBpc29iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXNvYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiBpc0FycmF5KHZhbCkgPT09IGZhbHNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc29iamVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NzcyA9IHJlcXVpcmUoJy4vY3NzJyk7XG5cbnZhciBfY3NzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzcyk7XG5cbnZhciBfR2xvYmFsU3R5bGUgPSByZXF1aXJlKCcuLi9tb2RlbHMvR2xvYmFsU3R5bGUnKTtcblxudmFyIF9HbG9iYWxTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbG9iYWxTdHlsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIGluamVjdEdsb2JhbCA9IGZ1bmN0aW9uIGluamVjdEdsb2JhbChzdHJpbmdzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgZ2xvYmFsU3R5bGUgPSBuZXcgX0dsb2JhbFN0eWxlMi5kZWZhdWx0KF9jc3MyLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSkpO1xuICBnbG9iYWxTdHlsZS5nZW5lcmF0ZUFuZEluamVjdCgpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaW5qZWN0R2xvYmFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMvaW5qZWN0R2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9oYXNoID0gcmVxdWlyZSgnZ2xhbW9yL2xpYi9oYXNoJyk7XG5cbnZhciBfaGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoKTtcblxudmFyIF9jc3MgPSByZXF1aXJlKCcuL2NzcycpO1xuXG52YXIgX2NzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MpO1xuXG52YXIgX0dsb2JhbFN0eWxlID0gcmVxdWlyZSgnLi4vbW9kZWxzL0dsb2JhbFN0eWxlJyk7XG5cbnZhciBfR2xvYmFsU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR2xvYmFsU3R5bGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfTmFtZUdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfTmFtZUdlbmVyYXRvciB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIHJlcGxhY2VXaGl0ZXNwYWNlID0gZnVuY3Rpb24gcmVwbGFjZVdoaXRlc3BhY2Uoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzfFxcXFxuL2csICcnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChuYW1lR2VuZXJhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5ncykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZXMgPSBfY3NzMi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgW3N0cmluZ3NdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpO1xuICAgIHZhciBoYXNoID0gKDAsIF9oYXNoMi5kZWZhdWx0KShyZXBsYWNlV2hpdGVzcGFjZShKU09OLnN0cmluZ2lmeShydWxlcykpKTtcbiAgICB2YXIgbmFtZSA9IG5hbWVHZW5lcmF0b3IoaGFzaCk7XG4gICAgdmFyIGtleWZyYW1lcyA9IG5ldyBfR2xvYmFsU3R5bGUyLmRlZmF1bHQocnVsZXMsICdAa2V5ZnJhbWVzICcgKyBuYW1lKTtcbiAgICBrZXlmcmFtZXMuZ2VuZXJhdGVBbmRJbmplY3QoKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL2tleWZyYW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3NzID0gcmVxdWlyZSgnLi9jc3MnKTtcblxudmFyIF9jc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzKTtcblxudmFyIF9kb21FbGVtZW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbUVsZW1lbnRzJyk7XG5cbnZhciBfZG9tRWxlbWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tRWxlbWVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGFyZ2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdHlsZWRDb21wb25lbnQpIHtcbiAgdmFyIHN0eWxlZCA9IGZ1bmN0aW9uIHN0eWxlZCh0YWcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZ3MpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVkQ29tcG9uZW50KHRhZywgX2NzczIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBTaG9ydGhhbmRzIGZvciBhbGwgdmFsaWQgSFRNTCBFbGVtZW50c1xuICBfZG9tRWxlbWVudHMyLmRlZmF1bHQuZm9yRWFjaChmdW5jdGlvbiAoZG9tRWxlbWVudCkge1xuICAgIHN0eWxlZFtkb21FbGVtZW50XSA9IHN0eWxlZChkb21FbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0eWxlZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL3N0eWxlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZSgnLi4vbW9kZWxzL1RoZW1lUHJvdmlkZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuLyogZ2xvYmFscyBSZWFjdENsYXNzICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXAyO1xuXG4gIHJldHVybiBfdGVtcDIgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhfY2xhc3MsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gX2NsYXNzKCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gX2NsYXNzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2NsYXNzKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7fSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKF9jbGFzcywgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuY29udGV4dFtfVGhlbWVQcm92aWRlci5DSEFOTkVMXSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW3dpdGhUaGVtZV0gUGxlYXNlIHVzZSBUaGVtZVByb3ZpZGVyIHRvIGJlIGFibGUgdG8gdXNlIHdpdGhUaGVtZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN1YnNjcmliZSA9IHRoaXMuY29udGV4dFtfVGhlbWVQcm92aWRlci5DSEFOTkVMXTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN1YnNjcmliZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB0aGVtZTogdGhlbWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciB0aGVtZSA9IHRoaXMuc3RhdGUudGhlbWU7XG5cblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7IHRoZW1lOiB0aGVtZSB9LCB0aGlzLnByb3BzKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIF9jbGFzcztcbiAgfShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgX1RoZW1lUHJvdmlkZXIuQ0hBTk5FTCwgX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jKSwgX3RlbXAyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9ob2Mvd2l0aFRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoJy4vVGhlbWVQcm92aWRlcicpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBBYnN0cmFjdFN0eWxlZENvbXBvbmVudCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBYnN0cmFjdFN0eWxlZENvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQWJzdHJhY3RTdHlsZWRDb21wb25lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFic3RyYWN0U3R5bGVkQ29tcG9uZW50KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQWJzdHJhY3RTdHlsZWRDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBYnN0cmFjdFN0eWxlZENvbXBvbmVudCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIEFic3RyYWN0U3R5bGVkQ29tcG9uZW50O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWJzdHJhY3RTdHlsZWRDb21wb25lbnQ7XG5cblxuQWJzdHJhY3RTdHlsZWRDb21wb25lbnQuY29udGV4dFR5cGVzID0gX2RlZmluZVByb3BlcnR5KHt9LCBfVGhlbWVQcm92aWRlci5DSEFOTkVMLCBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvQWJzdHJhY3RTdHlsZWRDb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2hhc2ggPSByZXF1aXJlKCdnbGFtb3IvbGliL2hhc2gnKTtcblxudmFyIF9oYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2gpO1xuXG52YXIgX2ZsYXR0ZW4gPSByZXF1aXJlKCcuLi91dGlscy9mbGF0dGVuJyk7XG5cbnZhciBfZmxhdHRlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGF0dGVuKTtcblxudmFyIF9wYXJzZSA9IHJlcXVpcmUoJy4uL3ZlbmRvci9wb3N0Y3NzLXNhZmUtcGFyc2VyL3BhcnNlJyk7XG5cbnZhciBfcGFyc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2UpO1xuXG52YXIgX3Bvc3Rjc3NOZXN0ZWQgPSByZXF1aXJlKCcuLi92ZW5kb3IvcG9zdGNzcy1uZXN0ZWQnKTtcblxudmFyIF9wb3N0Y3NzTmVzdGVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3Rjc3NOZXN0ZWQpO1xuXG52YXIgX2F1dG9wcmVmaXggPSByZXF1aXJlKCcuLi91dGlscy9hdXRvcHJlZml4Jyk7XG5cbnZhciBfYXV0b3ByZWZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvcHJlZml4KTtcblxudmFyIF9TdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9TdHlsZVNoZWV0Jyk7XG5cbnZhciBfU3R5bGVTaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdHlsZVNoZWV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0dsYW1vckluc2VydGVkUnVsZSA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfR2xhbW9ySW5zZXJ0ZWRSdWxlIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX05hbWVHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX05hbWVHZW5lcmF0b3IgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfUnVsZVNldCA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfUnVsZVNldCB8fCByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcy5hbnk7XG5cbi8qXG4gQ29tcG9uZW50U3R5bGUgaXMgYWxsIHRoZSBDU1Mtc3BlY2lmaWMgc3R1ZmYsIG5vdFxuIHRoZSBSZWFjdC1zcGVjaWZpYyBzdHVmZi5cbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG5hbWVHZW5lcmF0b3IpIHtcbiAgdmFyIGluc2VydGVkID0ge307XG5cbiAgdmFyIENvbXBvbmVudFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbXBvbmVudFN0eWxlKHJ1bGVzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50U3R5bGUpO1xuXG4gICAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgICBpZiAoIV9TdHlsZVNoZWV0Mi5kZWZhdWx0LmluamVjdGVkKSBfU3R5bGVTaGVldDIuZGVmYXVsdC5pbmplY3QoKTtcbiAgICAgIHRoaXMuaW5zZXJ0ZWRSdWxlID0gX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5zZXJ0KCcnKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZsYXR0ZW5zIGEgcnVsZSBzZXQgaW50byB2YWxpZCBDU1NcbiAgICAgKiBIYXNoZXMgaXQsIHdyYXBzIHRoZSB3aG9sZSBjaHVuayBpbiBhIC5faGFzaE5hbWUge31cbiAgICAgKiBQYXJzZXMgdGhhdCB3aXRoIFBvc3RDU1MgdGhlbiBydW5zIFBvc3RDU1MtTmVzdGVkIG9uIGl0XG4gICAgICogUmV0dXJucyB0aGUgaGFzaCB0byBiZSBpbmplY3RlZCBvbiByZW5kZXIoKVxuICAgICAqICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhDb21wb25lbnRTdHlsZSwgW3tcbiAgICAgIGtleTogJ2dlbmVyYXRlQW5kSW5qZWN0U3R5bGVzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhleGVjdXRpb25Db250ZXh0KSB7XG4gICAgICAgIHZhciBmbGF0Q1NTID0gKDAsIF9mbGF0dGVuMi5kZWZhdWx0KSh0aGlzLnJ1bGVzLCBleGVjdXRpb25Db250ZXh0KS5qb2luKCcnKS5yZXBsYWNlKC9eXFxzKlxcL1xcLy4qJC9nbSwgJycpOyAvLyByZXBsYWNlIEpTIGNvbW1lbnRzXG4gICAgICAgIHZhciBoYXNoID0gKDAsIF9oYXNoMi5kZWZhdWx0KShmbGF0Q1NTKTtcbiAgICAgICAgaWYgKCFpbnNlcnRlZFtoYXNoXSkge1xuICAgICAgICAgIHZhciBzZWxlY3RvciA9IG5hbWVHZW5lcmF0b3IoaGFzaCk7XG4gICAgICAgICAgaW5zZXJ0ZWRbaGFzaF0gPSBzZWxlY3RvcjtcbiAgICAgICAgICB2YXIgcm9vdCA9ICgwLCBfcGFyc2UyLmRlZmF1bHQpKCcuJyArIHNlbGVjdG9yICsgJyB7ICcgKyBmbGF0Q1NTICsgJyB9Jyk7XG4gICAgICAgICAgKDAsIF9wb3N0Y3NzTmVzdGVkMi5kZWZhdWx0KShyb290KTtcbiAgICAgICAgICAoMCwgX2F1dG9wcmVmaXgyLmRlZmF1bHQpKHJvb3QpO1xuICAgICAgICAgIHRoaXMuaW5zZXJ0ZWRSdWxlLmFwcGVuZFJ1bGUocm9vdC50b1Jlc3VsdCgpLmNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc2VydGVkW2hhc2hdO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb21wb25lbnRTdHlsZTtcbiAgfSgpO1xuXG4gIHJldHVybiBDb21wb25lbnRTdHlsZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL0NvbXBvbmVudFN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfdmFsaWRBdHRyID0gcmVxdWlyZSgnLi4vdXRpbHMvdmFsaWRBdHRyJyk7XG5cbnZhciBfdmFsaWRBdHRyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbGlkQXR0cik7XG5cbnZhciBfaXNUYWcgPSByZXF1aXJlKCcuLi91dGlscy9pc1RhZycpO1xuXG52YXIgX2lzVGFnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVGFnKTtcblxudmFyIF9BYnN0cmFjdFN0eWxlZENvbXBvbmVudCA9IHJlcXVpcmUoJy4vQWJzdHJhY3RTdHlsZWRDb21wb25lbnQnKTtcblxudmFyIF9BYnN0cmFjdFN0eWxlZENvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFN0eWxlZENvbXBvbmVudCk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoJy4vVGhlbWVQcm92aWRlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UaGVtZSA9IHJlcXVpcmUoJy4vVGhlbWVQcm92aWRlcicpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RoZW1lIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhcmdldCA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGFyZ2V0IHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1J1bGVTZXQgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1J1bGVTZXQgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoQ29tcG9uZW50U3R5bGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBjcmVhdGVTdHlsZWRDb21wb25lbnQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZWRDb21wb25lbnQodGFyZ2V0LCBydWxlcywgcGFyZW50KSB7XG4gICAgLyogSGFuZGxlIHN0eWxlZChPdGhlclN0eWxlZENvbXBvbmVudCkgZGlmZmVyZW50bHkgKi9cbiAgICB2YXIgaXNTdHlsZWRDb21wb25lbnQgPSBfQWJzdHJhY3RTdHlsZWRDb21wb25lbnQyLmRlZmF1bHQuaXNQcm90b3R5cGVPZih0YXJnZXQpO1xuICAgIGlmICghKDAsIF9pc1RhZzIuZGVmYXVsdCkodGFyZ2V0KSAmJiBpc1N0eWxlZENvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YXJnZXQudGFyZ2V0LCB0YXJnZXQucnVsZXMuY29uY2F0KHJ1bGVzKSwgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICB2YXIgY29tcG9uZW50U3R5bGUgPSBuZXcgQ29tcG9uZW50U3R5bGUocnVsZXMpO1xuICAgIHZhciBQYXJlbnRDb21wb25lbnQgPSBwYXJlbnQgfHwgX0Fic3RyYWN0U3R5bGVkQ29tcG9uZW50Mi5kZWZhdWx0O1xuXG4gICAgdmFyIFN0eWxlZENvbXBvbmVudCA9IGZ1bmN0aW9uIChfUGFyZW50Q29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoU3R5bGVkQ29tcG9uZW50LCBfUGFyZW50Q29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU3R5bGVkQ29tcG9uZW50KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVkQ29tcG9uZW50KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3R5bGVkQ29tcG9uZW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3R5bGVkQ29tcG9uZW50KSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgdGhlbWU6IG51bGwsXG4gICAgICAgICAgZ2VuZXJhdGVkQ2xhc3NOYW1lOiAnJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhTdHlsZWRDb21wb25lbnQsIFt7XG4gICAgICAgIGtleTogJ2dlbmVyYXRlQW5kSW5qZWN0U3R5bGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHRoZW1lLCBwcm9wcykge1xuICAgICAgICAgIHZhciBleGVjdXRpb25Db250ZXh0ID0gX2V4dGVuZHMoe30sIHByb3BzLCB7IHRoZW1lOiB0aGVtZSB9KTtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50U3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZXhlY3V0aW9uQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgdGhlbWUgaW4gdGhlIGNvbnRleHQsIHN1YnNjcmliZSB0byB0aGUgZXZlbnQgZW1pdHRlci4gVGhpc1xuICAgICAgICAgIC8vIGlzIG5lY2Vzc2FyeSBkdWUgdG8gcHVyZSBjb21wb25lbnRzIGJsb2NraW5nIGNvbnRleHQgdXBkYXRlcywgdGhpcyBjaXJjdW12ZW50c1xuICAgICAgICAgIC8vIHRoYXQgYnkgdXBkYXRpbmcgd2hlbiBhbiBldmVudCBpcyBlbWl0dGVkXG4gICAgICAgICAgaWYgKHRoaXMuY29udGV4dFtfVGhlbWVQcm92aWRlci5DSEFOTkVMXSkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmliZSA9IHRoaXMuY29udGV4dFtfVGhlbWVQcm92aWRlci5DSEFOTkVMXTtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKG5leHRUaGVtZSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uY2UgaW1tZWRpYXRlbHlcblxuICAgICAgICAgICAgICAvLyBQcm9wcyBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgVGhlbWVQcm92aWRlciwgd2hpY2ggc2hvdWxkIHRha2UgcHJlY2VkZW5jZSBvdmVyXG4gICAgICAgICAgICAgIC8vIGRlZmF1bHRQcm9wcywgYnV0IFJlYWN0IGF1dG9tYXRpY2FsbHkgcHV0cyBkZWZhdWx0UHJvcHMgb24gcHJvcHMuXG4gICAgICAgICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSBfdGhpczIuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzO1xuXG4gICAgICAgICAgICAgIHZhciBpc0RlZmF1bHRUaGVtZSA9IGRlZmF1bHRQcm9wcyAmJiBfdGhpczIucHJvcHMudGhlbWUgPT09IGRlZmF1bHRQcm9wcy50aGVtZTtcbiAgICAgICAgICAgICAgdmFyIHRoZW1lID0gX3RoaXMyLnByb3BzLnRoZW1lICYmICFpc0RlZmF1bHRUaGVtZSA/IF90aGlzMi5wcm9wcy50aGVtZSA6IG5leHRUaGVtZTtcbiAgICAgICAgICAgICAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IF90aGlzMi5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGVtZSwgX3RoaXMyLnByb3BzKTtcbiAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdGhlbWU6IHRoZW1lLCBnZW5lcmF0ZWRDbGFzc05hbWU6IGdlbmVyYXRlZENsYXNzTmFtZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX3RoZW1lID0gdGhpcy5wcm9wcy50aGVtZSB8fCB7fTtcbiAgICAgICAgICAgIHZhciBnZW5lcmF0ZWRDbGFzc05hbWUgPSB0aGlzLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKF90aGVtZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGhlbWU6IF90aGVtZSwgZ2VuZXJhdGVkQ2xhc3NOYW1lOiBnZW5lcmF0ZWRDbGFzc05hbWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKG9sZFN0YXRlKSB7XG4gICAgICAgICAgICAvLyBQcm9wcyBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgVGhlbWVQcm92aWRlciwgd2hpY2ggc2hvdWxkIHRha2UgcHJlY2VkZW5jZSBvdmVyXG4gICAgICAgICAgICAvLyBkZWZhdWx0UHJvcHMsIGJ1dCBSZWFjdCBhdXRvbWF0aWNhbGx5IHB1dHMgZGVmYXVsdFByb3BzIG9uIHByb3BzLlxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IF90aGlzMy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgICAgIHZhciBpc0RlZmF1bHRUaGVtZSA9IGRlZmF1bHRQcm9wcyAmJiBuZXh0UHJvcHMudGhlbWUgPT09IGRlZmF1bHRQcm9wcy50aGVtZTtcbiAgICAgICAgICAgIHZhciB0aGVtZSA9IG5leHRQcm9wcy50aGVtZSAmJiAhaXNEZWZhdWx0VGhlbWUgPyBuZXh0UHJvcHMudGhlbWUgOiBvbGRTdGF0ZS50aGVtZTtcbiAgICAgICAgICAgIHZhciBnZW5lcmF0ZWRDbGFzc05hbWUgPSBfdGhpczMuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModGhlbWUsIG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7IHRoZW1lOiB0aGVtZSwgZ2VuZXJhdGVkQ2xhc3NOYW1lOiBnZW5lcmF0ZWRDbGFzc05hbWUgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICBpbm5lclJlZiA9IF9wcm9wcy5pbm5lclJlZjtcbiAgICAgICAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5nZW5lcmF0ZWRDbGFzc05hbWU7XG5cblxuICAgICAgICAgIHZhciBwcm9wc0ZvckVsZW1lbnQgPSB7fTtcbiAgICAgICAgICAvKiBEb24ndCBwYXNzIHRocm91Z2ggbm9uIEhUTUwgdGFncyB0aHJvdWdoIHRvIEhUTUwgZWxlbWVudHMgKi9cbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gISgwLCBfaXNUYWcyLmRlZmF1bHQpKHRhcmdldCkgfHwgKDAsIF92YWxpZEF0dHIyLmRlZmF1bHQpKHByb3BOYW1lKTtcbiAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuICAgICAgICAgICAgcHJvcHNGb3JFbGVtZW50W3Byb3BOYW1lXSA9IF90aGlzNC5wcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJvcHNGb3JFbGVtZW50LmNsYXNzTmFtZSA9IFtjbGFzc05hbWUsIGdlbmVyYXRlZENsYXNzTmFtZV0uZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICB9KS5qb2luKCcgJyk7XG4gICAgICAgICAgaWYgKGlubmVyUmVmKSB7XG4gICAgICAgICAgICBwcm9wc0ZvckVsZW1lbnQucmVmID0gaW5uZXJSZWY7XG4gICAgICAgICAgICBpZiAoKDAsIF9pc1RhZzIuZGVmYXVsdCkodGFyZ2V0KSkgZGVsZXRlIHByb3BzRm9yRWxlbWVudC5pbm5lclJlZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KSh0YXJnZXQsIHByb3BzRm9yRWxlbWVudCwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBTdHlsZWRDb21wb25lbnQ7XG4gICAgfShQYXJlbnRDb21wb25lbnQpO1xuXG4gICAgU3R5bGVkQ29tcG9uZW50LmNvbnRleHRUeXBlcyA9IFBhcmVudENvbXBvbmVudC5jb250ZXh0VHlwZXM7XG5cblxuICAgIFN0eWxlZENvbXBvbmVudC50YXJnZXQgPSB0YXJnZXQ7XG4gICAgU3R5bGVkQ29tcG9uZW50LnJ1bGVzID0gcnVsZXM7XG5cbiAgICBTdHlsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSAoMCwgX2lzVGFnMi5kZWZhdWx0KSh0YXJnZXQpID8gJ3N0eWxlZC4nICsgdGFyZ2V0IDogJ1N0eWxlZCgnICsgKHRhcmdldC5kaXNwbGF5TmFtZSB8fCB0YXJnZXQubmFtZSB8fCAnQ29tcG9uZW50JykgKyAnKSc7XG5cbiAgICByZXR1cm4gU3R5bGVkQ29tcG9uZW50O1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVTdHlsZWRDb21wb25lbnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9TdHlsZWRDb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NhbWVsaXplU3R5bGVOYW1lID0gcmVxdWlyZSgnZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUnKTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZVN0eWxlTmFtZSk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lID0gcmVxdWlyZSgnZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbnZhciBfc3RhdGljID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYycpO1xuXG52YXIgX3N0YXRpYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0aWMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vdmVuZG9yL3Bvc3Rjc3MvY29udGFpbmVyJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfQ29udGFpbmVyIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgcm9vdC53YWxrRGVjbHMoZnVuY3Rpb24gKGRlY2wpIHtcbiAgICAvKiBObyBwb2ludCBldmVuIGNoZWNraW5nIGN1c3RvbSBwcm9wcyAqL1xuICAgIGlmICgvXi0tLy50ZXN0KGRlY2wucHJvcCkpIHJldHVybjtcblxuICAgIHZhciBvYmpTdHlsZSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgKDAsIF9jYW1lbGl6ZVN0eWxlTmFtZTIuZGVmYXVsdCkoZGVjbC5wcm9wKSwgZGVjbC52YWx1ZSk7XG4gICAgdmFyIHByZWZpeGVkID0gKDAsIF9zdGF0aWMyLmRlZmF1bHQpKG9ialN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhwcmVmaXhlZCkucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKG5ld1Byb3ApIHtcbiAgICAgIHZhciBuZXdWYWxzID0gcHJlZml4ZWRbbmV3UHJvcF07XG4gICAgICB2YXIgbmV3VmFsQXJyYXkgPSBBcnJheS5pc0FycmF5KG5ld1ZhbHMpID8gbmV3VmFscyA6IFtuZXdWYWxzXTtcbiAgICAgIG5ld1ZhbEFycmF5LmZvckVhY2goZnVuY3Rpb24gKG5ld1ZhbCkge1xuICAgICAgICBkZWNsLmNsb25lQmVmb3JlKHtcbiAgICAgICAgICBwcm9wOiAoMCwgX2h5cGhlbmF0ZVN0eWxlTmFtZTIuZGVmYXVsdCkobmV3UHJvcCksXG4gICAgICAgICAgdmFsdWU6IG5ld1ZhbFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlY2wucmVtb3ZlKCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9hdXRvcHJlZml4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuLy8gVGhhbmtzIHRvIFJlYWN0RE9NRmFjdG9yaWVzIGZvciB0aGlzIGhhbmR5IGxpc3QhXG5cbmV4cG9ydHMuZGVmYXVsdCA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGEnLCAnbWV0ZXInLCAnbmF2JywgJ25vc2NyaXB0JywgJ29iamVjdCcsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGFyYW0nLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzY3JpcHQnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYW4nLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3dicicsXG5cbi8vIFNWR1xuJ2NpcmNsZScsICdjbGlwUGF0aCcsICdkZWZzJywgJ2VsbGlwc2UnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2RvbUVsZW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJy5zcGxpdCgnJyk7XG5cbi8qIFNvbWUgaGlnaCBudW1iZXIsIHVzdWFsbHkgOS1kaWdpdCBiYXNlLTEwLiBNYXAgaXQgdG8gYmFzZS3wn5iOICovXG52YXIgZ2VuZXJhdGVBbHBoYWJldGljTmFtZSA9IGZ1bmN0aW9uIGdlbmVyYXRlQWxwaGFiZXRpY05hbWUoY29kZSkge1xuICB2YXIgbGFzdERpZ2l0ID0gY2hhcnNbY29kZSAlIGNoYXJzLmxlbmd0aF07XG4gIHJldHVybiBjb2RlID4gY2hhcnMubGVuZ3RoID8gJycgKyBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lKE1hdGguZmxvb3IoY29kZSAvIGNoYXJzLmxlbmd0aCkpICsgbGFzdERpZ2l0IDogbGFzdERpZ2l0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2VuZXJhdGVBbHBoYWJldGljTmFtZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZ2VuZXJhdGVBbHBoYWJldGljTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uIHx8IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzLmFueTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0cmluZ3MsIGludGVycG9sYXRpb25zKSB7XG4gIHJldHVybiBpbnRlcnBvbGF0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFycmF5LCBpbnRlcnAsIGkpIHtcbiAgICByZXR1cm4gYXJyYXkuY29uY2F0KGludGVycCwgc3RyaW5nc1tpICsgMV0pO1xuICB9LCBbc3RyaW5nc1swXV0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9pbnRlcmxlYXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVGFnO1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGFyZ2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgfHwgcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXMuYW55O1xuXG5mdW5jdGlvbiBpc1RhZyh0YXJnZXQpIC8qIDogJWNoZWNrcyAqL3tcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9pc1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbi8qIFRyeWluZyB0byBhdm9pZCB0aGUgdW5rbm93bi1wcm9wIGVycm9ycyBvbiBzdHlsZWQgY29tcG9uZW50c1xuIGJ5IGZpbHRlcmluZyBieSBSZWFjdCdzIGF0dHJpYnV0ZSB3aGl0ZWxpc3QuXG4gKi9cblxuLyogTG9naWMgY29waWVkIGZyb20gUmVhY3RET01Vbmtub3duUHJvcGVydHlIb29rICovXG52YXIgcmVhY3RQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHRydWUsXG4gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB0cnVlLFxuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgYXV0b0ZvY3VzOiB0cnVlLFxuICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gIHZhbHVlTGluazogdHJ1ZSxcbiAgZGVmYXVsdENoZWNrZWQ6IHRydWUsXG4gIGNoZWNrZWRMaW5rOiB0cnVlLFxuICBpbm5lckhUTUw6IHRydWUsXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogdHJ1ZSxcbiAgb25Gb2N1c0luOiB0cnVlLFxuICBvbkZvY3VzT3V0OiB0cnVlLFxuICBjbGFzc05hbWU6IHRydWUsXG5cbiAgLyogTGlzdCBjb3BpZWQgZnJvbSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2V2ZW50cy5odG1sICovXG4gIG9uQ29weTogdHJ1ZSxcbiAgb25DdXQ6IHRydWUsXG4gIG9uUGFzdGU6IHRydWUsXG4gIG9uQ29tcG9zaXRpb25FbmQ6IHRydWUsXG4gIG9uQ29tcG9zaXRpb25TdGFydDogdHJ1ZSxcbiAgb25Db21wb3NpdGlvblVwZGF0ZTogdHJ1ZSxcbiAgb25LZXlEb3duOiB0cnVlLFxuICBvbktleVByZXNzOiB0cnVlLFxuICBvbktleVVwOiB0cnVlLFxuICBvbkZvY3VzOiB0cnVlLFxuICBvbkJsdXI6IHRydWUsXG4gIG9uQ2hhbmdlOiB0cnVlLFxuICBvbklucHV0OiB0cnVlLFxuICBvblN1Ym1pdDogdHJ1ZSxcbiAgb25DbGljazogdHJ1ZSxcbiAgb25Db250ZXh0TWVudTogdHJ1ZSxcbiAgb25Eb3VibGVDbGljazogdHJ1ZSxcbiAgb25EcmFnOiB0cnVlLFxuICBvbkRyYWdFbmQ6IHRydWUsXG4gIG9uRHJhZ0VudGVyOiB0cnVlLFxuICBvbkRyYWdFeGl0OiB0cnVlLFxuICBvbkRyYWdMZWF2ZTogdHJ1ZSxcbiAgb25EcmFnT3ZlcjogdHJ1ZSxcbiAgb25EcmFnU3RhcnQ6IHRydWUsXG4gIG9uRHJvcDogdHJ1ZSxcbiAgb25Nb3VzZURvd246IHRydWUsXG4gIG9uTW91c2VFbnRlcjogdHJ1ZSxcbiAgb25Nb3VzZUxlYXZlOiB0cnVlLFxuICBvbk1vdXNlTW92ZTogdHJ1ZSxcbiAgb25Nb3VzZU91dDogdHJ1ZSxcbiAgb25Nb3VzZU92ZXI6IHRydWUsXG4gIG9uTW91c2VVcDogdHJ1ZSxcbiAgb25TZWxlY3Q6IHRydWUsXG4gIG9uVG91Y2hDYW5jZWw6IHRydWUsXG4gIG9uVG91Y2hFbmQ6IHRydWUsXG4gIG9uVG91Y2hNb3ZlOiB0cnVlLFxuICBvblRvdWNoU3RhcnQ6IHRydWUsXG4gIG9uU2Nyb2xsOiB0cnVlLFxuICBvbldoZWVsOiB0cnVlLFxuICBvbkFib3J0OiB0cnVlLFxuICBvbkNhblBsYXk6IHRydWUsXG4gIG9uQ2FuUGxheVRocm91Z2g6IHRydWUsXG4gIG9uRHVyYXRpb25DaGFuZ2U6IHRydWUsXG4gIG9uRW1wdGllZDogdHJ1ZSxcbiAgb25FbmNyeXB0ZWQ6IHRydWUsXG4gIG9uRW5kZWQ6IHRydWUsXG4gIG9uRXJyb3I6IHRydWUsXG4gIG9uTG9hZGVkRGF0YTogdHJ1ZSxcbiAgb25Mb2FkZWRNZXRhZGF0YTogdHJ1ZSxcbiAgb25Mb2FkU3RhcnQ6IHRydWUsXG4gIG9uUGF1c2U6IHRydWUsXG4gIG9uUGxheTogdHJ1ZSxcbiAgb25QbGF5aW5nOiB0cnVlLFxuICBvblByb2dyZXNzOiB0cnVlLFxuICBvblJhdGVDaGFuZ2U6IHRydWUsXG4gIG9uU2Vla2VkOiB0cnVlLFxuICBvblNlZWtpbmc6IHRydWUsXG4gIG9uU3RhbGxlZDogdHJ1ZSxcbiAgb25TdXNwZW5kOiB0cnVlLFxuICBvblRpbWVVcGRhdGU6IHRydWUsXG4gIG9uVm9sdW1lQ2hhbmdlOiB0cnVlLFxuICBvbldhaXRpbmc6IHRydWUsXG4gIG9uTG9hZDogdHJ1ZSxcbiAgb25BbmltYXRpb25TdGFydDogdHJ1ZSxcbiAgb25BbmltYXRpb25FbmQ6IHRydWUsXG4gIG9uQW5pbWF0aW9uSXRlcmF0aW9uOiB0cnVlLFxuICBvblRyYW5zaXRpb25FbmQ6IHRydWUsXG5cbiAgb25Db3B5Q2FwdHVyZTogdHJ1ZSxcbiAgb25DdXRDYXB0dXJlOiB0cnVlLFxuICBvblBhc3RlQ2FwdHVyZTogdHJ1ZSxcbiAgb25Db21wb3NpdGlvbkVuZENhcHR1cmU6IHRydWUsXG4gIG9uQ29tcG9zaXRpb25TdGFydENhcHR1cmU6IHRydWUsXG4gIG9uQ29tcG9zaXRpb25VcGRhdGVDYXB0dXJlOiB0cnVlLFxuICBvbktleURvd25DYXB0dXJlOiB0cnVlLFxuICBvbktleVByZXNzQ2FwdHVyZTogdHJ1ZSxcbiAgb25LZXlVcENhcHR1cmU6IHRydWUsXG4gIG9uRm9jdXNDYXB0dXJlOiB0cnVlLFxuICBvbkJsdXJDYXB0dXJlOiB0cnVlLFxuICBvbkNoYW5nZUNhcHR1cmU6IHRydWUsXG4gIG9uSW5wdXRDYXB0dXJlOiB0cnVlLFxuICBvblN1Ym1pdENhcHR1cmU6IHRydWUsXG4gIG9uQ2xpY2tDYXB0dXJlOiB0cnVlLFxuICBvbkNvbnRleHRNZW51Q2FwdHVyZTogdHJ1ZSxcbiAgb25Eb3VibGVDbGlja0NhcHR1cmU6IHRydWUsXG4gIG9uRHJhZ0NhcHR1cmU6IHRydWUsXG4gIG9uRHJhZ0VuZENhcHR1cmU6IHRydWUsXG4gIG9uRHJhZ0VudGVyQ2FwdHVyZTogdHJ1ZSxcbiAgb25EcmFnRXhpdENhcHR1cmU6IHRydWUsXG4gIG9uRHJhZ0xlYXZlQ2FwdHVyZTogdHJ1ZSxcbiAgb25EcmFnT3ZlckNhcHR1cmU6IHRydWUsXG4gIG9uRHJhZ1N0YXJ0Q2FwdHVyZTogdHJ1ZSxcbiAgb25Ecm9wQ2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZURvd25DYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlRW50ZXJDYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlTGVhdmVDYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlTW92ZUNhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VPdXRDYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlT3ZlckNhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VVcENhcHR1cmU6IHRydWUsXG4gIG9uU2VsZWN0Q2FwdHVyZTogdHJ1ZSxcbiAgb25Ub3VjaENhbmNlbENhcHR1cmU6IHRydWUsXG4gIG9uVG91Y2hFbmRDYXB0dXJlOiB0cnVlLFxuICBvblRvdWNoTW92ZUNhcHR1cmU6IHRydWUsXG4gIG9uVG91Y2hTdGFydENhcHR1cmU6IHRydWUsXG4gIG9uU2Nyb2xsQ2FwdHVyZTogdHJ1ZSxcbiAgb25XaGVlbENhcHR1cmU6IHRydWUsXG4gIG9uQWJvcnRDYXB0dXJlOiB0cnVlLFxuICBvbkNhblBsYXlDYXB0dXJlOiB0cnVlLFxuICBvbkNhblBsYXlUaHJvdWdoQ2FwdHVyZTogdHJ1ZSxcbiAgb25EdXJhdGlvbkNoYW5nZUNhcHR1cmU6IHRydWUsXG4gIG9uRW1wdGllZENhcHR1cmU6IHRydWUsXG4gIG9uRW5jcnlwdGVkQ2FwdHVyZTogdHJ1ZSxcbiAgb25FbmRlZENhcHR1cmU6IHRydWUsXG4gIG9uRXJyb3JDYXB0dXJlOiB0cnVlLFxuICBvbkxvYWRlZERhdGFDYXB0dXJlOiB0cnVlLFxuICBvbkxvYWRlZE1ldGFkYXRhQ2FwdHVyZTogdHJ1ZSxcbiAgb25Mb2FkU3RhcnRDYXB0dXJlOiB0cnVlLFxuICBvblBhdXNlQ2FwdHVyZTogdHJ1ZSxcbiAgb25QbGF5Q2FwdHVyZTogdHJ1ZSxcbiAgb25QbGF5aW5nQ2FwdHVyZTogdHJ1ZSxcbiAgb25Qcm9ncmVzc0NhcHR1cmU6IHRydWUsXG4gIG9uUmF0ZUNoYW5nZUNhcHR1cmU6IHRydWUsXG4gIG9uU2Vla2VkQ2FwdHVyZTogdHJ1ZSxcbiAgb25TZWVraW5nQ2FwdHVyZTogdHJ1ZSxcbiAgb25TdGFsbGVkQ2FwdHVyZTogdHJ1ZSxcbiAgb25TdXNwZW5kQ2FwdHVyZTogdHJ1ZSxcbiAgb25UaW1lVXBkYXRlQ2FwdHVyZTogdHJ1ZSxcbiAgb25Wb2x1bWVDaGFuZ2VDYXB0dXJlOiB0cnVlLFxuICBvbldhaXRpbmdDYXB0dXJlOiB0cnVlLFxuICBvbkxvYWRDYXB0dXJlOiB0cnVlLFxuICBvbkFuaW1hdGlvblN0YXJ0Q2FwdHVyZTogdHJ1ZSxcbiAgb25BbmltYXRpb25FbmRDYXB0dXJlOiB0cnVlLFxuICBvbkFuaW1hdGlvbkl0ZXJhdGlvbkNhcHR1cmU6IHRydWUsXG4gIG9uVHJhbnNpdGlvbkVuZENhcHR1cmU6IHRydWVcbn07XG5cbi8qIEZyb20gSFRNTERPTVByb3BlcnR5Q29uZmlnICovXG52YXIgaHRtbFByb3BzID0ge1xuICAvKipcbiAgICogU3RhbmRhcmQgUHJvcGVydGllc1xuICAgKi9cbiAgYWNjZXB0OiB0cnVlLFxuICBhY2NlcHRDaGFyc2V0OiB0cnVlLFxuICBhY2Nlc3NLZXk6IHRydWUsXG4gIGFjdGlvbjogdHJ1ZSxcbiAgYWxsb3dGdWxsU2NyZWVuOiB0cnVlLFxuICBhbGxvd1RyYW5zcGFyZW5jeTogdHJ1ZSxcbiAgYWx0OiB0cnVlLFxuICAvLyBzcGVjaWZpZXMgdGFyZ2V0IGNvbnRleHQgZm9yIGxpbmtzIHdpdGggYHByZWxvYWRgIHR5cGVcbiAgYXM6IHRydWUsXG4gIGFzeW5jOiB0cnVlLFxuICBhdXRvQ29tcGxldGU6IHRydWUsXG4gIC8vIGF1dG9Gb2N1cyBpcyBwb2x5ZmlsbGVkL25vcm1hbGl6ZWQgYnkgQXV0b0ZvY3VzVXRpbHNcbiAgLy8gYXV0b0ZvY3VzOiB0cnVlLFxuICBhdXRvUGxheTogdHJ1ZSxcbiAgY2FwdHVyZTogdHJ1ZSxcbiAgY2VsbFBhZGRpbmc6IHRydWUsXG4gIGNlbGxTcGFjaW5nOiB0cnVlLFxuICBjaGFyU2V0OiB0cnVlLFxuICBjaGFsbGVuZ2U6IHRydWUsXG4gIGNoZWNrZWQ6IHRydWUsXG4gIGNpdGU6IHRydWUsXG4gIGNsYXNzSUQ6IHRydWUsXG4gIGNsYXNzTmFtZTogdHJ1ZSxcbiAgY29sczogdHJ1ZSxcbiAgY29sU3BhbjogdHJ1ZSxcbiAgY29udGVudDogdHJ1ZSxcbiAgY29udGVudEVkaXRhYmxlOiB0cnVlLFxuICBjb250ZXh0TWVudTogdHJ1ZSxcbiAgY29udHJvbHM6IHRydWUsXG4gIGNvb3JkczogdHJ1ZSxcbiAgY3Jvc3NPcmlnaW46IHRydWUsXG4gIGRhdGE6IHRydWUsIC8vIEZvciBgPG9iamVjdCAvPmAgYWN0cyBhcyBgc3JjYC5cbiAgZGF0ZVRpbWU6IHRydWUsXG4gIGRlZmF1bHQ6IHRydWUsXG4gIGRlZmVyOiB0cnVlLFxuICBkaXI6IHRydWUsXG4gIGRpc2FibGVkOiB0cnVlLFxuICBkb3dubG9hZDogdHJ1ZSxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBlbmNUeXBlOiB0cnVlLFxuICBmb3JtOiB0cnVlLFxuICBmb3JtQWN0aW9uOiB0cnVlLFxuICBmb3JtRW5jVHlwZTogdHJ1ZSxcbiAgZm9ybU1ldGhvZDogdHJ1ZSxcbiAgZm9ybU5vVmFsaWRhdGU6IHRydWUsXG4gIGZvcm1UYXJnZXQ6IHRydWUsXG4gIGZyYW1lQm9yZGVyOiB0cnVlLFxuICBoZWFkZXJzOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGhpZGRlbjogdHJ1ZSxcbiAgaGlnaDogdHJ1ZSxcbiAgaHJlZjogdHJ1ZSxcbiAgaHJlZkxhbmc6IHRydWUsXG4gIGh0bWxGb3I6IHRydWUsXG4gIGh0dHBFcXVpdjogdHJ1ZSxcbiAgaWNvbjogdHJ1ZSxcbiAgaWQ6IHRydWUsXG4gIGlucHV0TW9kZTogdHJ1ZSxcbiAgaW50ZWdyaXR5OiB0cnVlLFxuICBpczogdHJ1ZSxcbiAga2V5UGFyYW1zOiB0cnVlLFxuICBrZXlUeXBlOiB0cnVlLFxuICBraW5kOiB0cnVlLFxuICBsYWJlbDogdHJ1ZSxcbiAgbGFuZzogdHJ1ZSxcbiAgbGlzdDogdHJ1ZSxcbiAgbG9vcDogdHJ1ZSxcbiAgbG93OiB0cnVlLFxuICBtYW5pZmVzdDogdHJ1ZSxcbiAgbWFyZ2luSGVpZ2h0OiB0cnVlLFxuICBtYXJnaW5XaWR0aDogdHJ1ZSxcbiAgbWF4OiB0cnVlLFxuICBtYXhMZW5ndGg6IHRydWUsXG4gIG1lZGlhOiB0cnVlLFxuICBtZWRpYUdyb3VwOiB0cnVlLFxuICBtZXRob2Q6IHRydWUsXG4gIG1pbjogdHJ1ZSxcbiAgbWluTGVuZ3RoOiB0cnVlLFxuICAvLyBDYXV0aW9uOyBgb3B0aW9uLnNlbGVjdGVkYCBpcyBub3QgdXBkYXRlZCBpZiBgc2VsZWN0Lm11bHRpcGxlYCBpc1xuICAvLyBkaXNhYmxlZCB3aXRoIGByZW1vdmVBdHRyaWJ1dGVgLlxuICBtdWx0aXBsZTogdHJ1ZSxcbiAgbXV0ZWQ6IHRydWUsXG4gIG5hbWU6IHRydWUsXG4gIG5vbmNlOiB0cnVlLFxuICBub1ZhbGlkYXRlOiB0cnVlLFxuICBvcGVuOiB0cnVlLFxuICBvcHRpbXVtOiB0cnVlLFxuICBwYXR0ZXJuOiB0cnVlLFxuICBwbGFjZWhvbGRlcjogdHJ1ZSxcbiAgcGxheXNJbmxpbmU6IHRydWUsXG4gIHBvc3RlcjogdHJ1ZSxcbiAgcHJlbG9hZDogdHJ1ZSxcbiAgcHJvZmlsZTogdHJ1ZSxcbiAgcmFkaW9Hcm91cDogdHJ1ZSxcbiAgcmVhZE9ubHk6IHRydWUsXG4gIHJlZmVycmVyUG9saWN5OiB0cnVlLFxuICByZWw6IHRydWUsXG4gIHJlcXVpcmVkOiB0cnVlLFxuICByZXZlcnNlZDogdHJ1ZSxcbiAgcm9sZTogdHJ1ZSxcbiAgcm93czogdHJ1ZSxcbiAgcm93U3BhbjogdHJ1ZSxcbiAgc2FuZGJveDogdHJ1ZSxcbiAgc2NvcGU6IHRydWUsXG4gIHNjb3BlZDogdHJ1ZSxcbiAgc2Nyb2xsaW5nOiB0cnVlLFxuICBzZWFtbGVzczogdHJ1ZSxcbiAgc2VsZWN0ZWQ6IHRydWUsXG4gIHNoYXBlOiB0cnVlLFxuICBzaXplOiB0cnVlLFxuICBzaXplczogdHJ1ZSxcbiAgc3BhbjogdHJ1ZSxcbiAgc3BlbGxDaGVjazogdHJ1ZSxcbiAgc3JjOiB0cnVlLFxuICBzcmNEb2M6IHRydWUsXG4gIHNyY0xhbmc6IHRydWUsXG4gIHNyY1NldDogdHJ1ZSxcbiAgc3RhcnQ6IHRydWUsXG4gIHN0ZXA6IHRydWUsXG4gIHN0eWxlOiB0cnVlLFxuICBzdW1tYXJ5OiB0cnVlLFxuICB0YWJJbmRleDogdHJ1ZSxcbiAgdGFyZ2V0OiB0cnVlLFxuICB0aXRsZTogdHJ1ZSxcbiAgLy8gU2V0dGluZyAudHlwZSB0aHJvd3Mgb24gbm9uLTxpbnB1dD4gdGFnc1xuICB0eXBlOiB0cnVlLFxuICB1c2VNYXA6IHRydWUsXG4gIHZhbHVlOiB0cnVlLFxuICB3aWR0aDogdHJ1ZSxcbiAgd21vZGU6IHRydWUsXG4gIHdyYXA6IHRydWUsXG5cbiAgLyoqXG4gICAqIFJERmEgUHJvcGVydGllc1xuICAgKi9cbiAgYWJvdXQ6IHRydWUsXG4gIGRhdGF0eXBlOiB0cnVlLFxuICBpbmxpc3Q6IHRydWUsXG4gIHByZWZpeDogdHJ1ZSxcbiAgLy8gcHJvcGVydHkgaXMgYWxzbyBzdXBwb3J0ZWQgZm9yIE9wZW5HcmFwaCBpbiBtZXRhIHRhZ3MuXG4gIHByb3BlcnR5OiB0cnVlLFxuICByZXNvdXJjZTogdHJ1ZSxcbiAgdHlwZW9mOiB0cnVlLFxuICB2b2NhYjogdHJ1ZSxcblxuICAvKipcbiAgICogTm9uLXN0YW5kYXJkIFByb3BlcnRpZXNcbiAgICovXG4gIC8vIGF1dG9DYXBpdGFsaXplIGFuZCBhdXRvQ29ycmVjdCBhcmUgc3VwcG9ydGVkIGluIE1vYmlsZSBTYWZhcmkgZm9yXG4gIC8vIGtleWJvYXJkIGhpbnRzLlxuICBhdXRvQ2FwaXRhbGl6ZTogdHJ1ZSxcbiAgYXV0b0NvcnJlY3Q6IHRydWUsXG4gIC8vIGF1dG9TYXZlIGFsbG93cyBXZWJLaXQvQmxpbmsgdG8gcGVyc2lzdCB2YWx1ZXMgb2YgaW5wdXQgZmllbGRzIG9uIHBhZ2UgcmVsb2Fkc1xuICBhdXRvU2F2ZTogdHJ1ZSxcbiAgLy8gY29sb3IgaXMgZm9yIFNhZmFyaSBtYXNrLWljb24gbGlua1xuICBjb2xvcjogdHJ1ZSxcbiAgLy8gaXRlbVByb3AsIGl0ZW1TY29wZSwgaXRlbVR5cGUgYXJlIGZvclxuICAvLyBNaWNyb2RhdGEgc3VwcG9ydC4gU2VlIGh0dHA6Ly9zY2hlbWEub3JnL2RvY3MvZ3MuaHRtbFxuICBpdGVtUHJvcDogdHJ1ZSxcbiAgaXRlbVNjb3BlOiB0cnVlLFxuICBpdGVtVHlwZTogdHJ1ZSxcbiAgLy8gaXRlbUlEIGFuZCBpdGVtUmVmIGFyZSBmb3IgTWljcm9kYXRhIHN1cHBvcnQgYXMgd2VsbCBidXRcbiAgLy8gb25seSBzcGVjaWZpZWQgaW4gdGhlIFdIQVRXRyBzcGVjIGRvY3VtZW50LiBTZWVcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvbWljcm9kYXRhLmh0bWwjbWljcm9kYXRhLWRvbS1hcGlcbiAgaXRlbUlEOiB0cnVlLFxuICBpdGVtUmVmOiB0cnVlLFxuICAvLyByZXN1bHRzIHNob3cgbG9va2luZyBnbGFzcyBpY29uIGFuZCByZWNlbnQgc2VhcmNoZXMgb24gaW5wdXRcbiAgLy8gc2VhcmNoIGZpZWxkcyBpbiBXZWJLaXQvQmxpbmtcbiAgcmVzdWx0czogdHJ1ZSxcbiAgLy8gSUUtb25seSBhdHRyaWJ1dGUgdGhhdCBzcGVjaWZpZXMgc2VjdXJpdHkgcmVzdHJpY3Rpb25zIG9uIGFuIGlmcmFtZVxuICAvLyBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgc2FuZGJveCBhdHRyaWJ1dGUgb24gSUU8MTBcbiAgc2VjdXJpdHk6IHRydWUsXG4gIC8vIElFLW9ubHkgYXR0cmlidXRlIHRoYXQgY29udHJvbHMgZm9jdXMgYmVoYXZpb3JcbiAgdW5zZWxlY3RhYmxlOiAwXG59O1xuXG52YXIgc3ZnUHJvcHMgPSB7XG4gIGFjY2VudEhlaWdodDogdHJ1ZSxcbiAgYWNjdW11bGF0ZTogdHJ1ZSxcbiAgYWRkaXRpdmU6IHRydWUsXG4gIGFsaWdubWVudEJhc2VsaW5lOiB0cnVlLFxuICBhbGxvd1Jlb3JkZXI6IHRydWUsXG4gIGFscGhhYmV0aWM6IHRydWUsXG4gIGFtcGxpdHVkZTogdHJ1ZSxcbiAgYXJhYmljRm9ybTogdHJ1ZSxcbiAgYXNjZW50OiB0cnVlLFxuICBhdHRyaWJ1dGVOYW1lOiB0cnVlLFxuICBhdHRyaWJ1dGVUeXBlOiB0cnVlLFxuICBhdXRvUmV2ZXJzZTogdHJ1ZSxcbiAgYXppbXV0aDogdHJ1ZSxcbiAgYmFzZUZyZXF1ZW5jeTogdHJ1ZSxcbiAgYmFzZVByb2ZpbGU6IHRydWUsXG4gIGJhc2VsaW5lU2hpZnQ6IHRydWUsXG4gIGJib3g6IHRydWUsXG4gIGJlZ2luOiB0cnVlLFxuICBiaWFzOiB0cnVlLFxuICBieTogdHJ1ZSxcbiAgY2FsY01vZGU6IHRydWUsXG4gIGNhcEhlaWdodDogdHJ1ZSxcbiAgY2xpcDogdHJ1ZSxcbiAgY2xpcFBhdGg6IHRydWUsXG4gIGNsaXBSdWxlOiB0cnVlLFxuICBjbGlwUGF0aFVuaXRzOiB0cnVlLFxuICBjb2xvckludGVycG9sYXRpb246IHRydWUsXG4gIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6IHRydWUsXG4gIGNvbG9yUHJvZmlsZTogdHJ1ZSxcbiAgY29sb3JSZW5kZXJpbmc6IHRydWUsXG4gIGNvbnRlbnRTY3JpcHRUeXBlOiB0cnVlLFxuICBjb250ZW50U3R5bGVUeXBlOiB0cnVlLFxuICBjdXJzb3I6IHRydWUsXG4gIGN4OiB0cnVlLFxuICBjeTogdHJ1ZSxcbiAgZDogdHJ1ZSxcbiAgZGVjZWxlcmF0ZTogdHJ1ZSxcbiAgZGVzY2VudDogdHJ1ZSxcbiAgZGlmZnVzZUNvbnN0YW50OiB0cnVlLFxuICBkaXJlY3Rpb246IHRydWUsXG4gIGRpc3BsYXk6IHRydWUsXG4gIGRpdmlzb3I6IHRydWUsXG4gIGRvbWluYW50QmFzZWxpbmU6IHRydWUsXG4gIGR1cjogdHJ1ZSxcbiAgZHg6IHRydWUsXG4gIGR5OiB0cnVlLFxuICBlZGdlTW9kZTogdHJ1ZSxcbiAgZWxldmF0aW9uOiB0cnVlLFxuICBlbmFibGVCYWNrZ3JvdW5kOiB0cnVlLFxuICBlbmQ6IHRydWUsXG4gIGV4cG9uZW50OiB0cnVlLFxuICBleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkOiB0cnVlLFxuICBmaWxsOiB0cnVlLFxuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgZmlsbFJ1bGU6IHRydWUsXG4gIGZpbHRlcjogdHJ1ZSxcbiAgZmlsdGVyUmVzOiB0cnVlLFxuICBmaWx0ZXJVbml0czogdHJ1ZSxcbiAgZmxvb2RDb2xvcjogdHJ1ZSxcbiAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICBmb2N1c2FibGU6IHRydWUsXG4gIGZvbnRGYW1pbHk6IHRydWUsXG4gIGZvbnRTaXplOiB0cnVlLFxuICBmb250U2l6ZUFkanVzdDogdHJ1ZSxcbiAgZm9udFN0cmV0Y2g6IHRydWUsXG4gIGZvbnRTdHlsZTogdHJ1ZSxcbiAgZm9udFZhcmlhbnQ6IHRydWUsXG4gIGZvbnRXZWlnaHQ6IHRydWUsXG4gIGZvcm1hdDogdHJ1ZSxcbiAgZnJvbTogdHJ1ZSxcbiAgZng6IHRydWUsXG4gIGZ5OiB0cnVlLFxuICBnMTogdHJ1ZSxcbiAgZzI6IHRydWUsXG4gIGdseXBoTmFtZTogdHJ1ZSxcbiAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6IHRydWUsXG4gIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbDogdHJ1ZSxcbiAgZ2x5cGhSZWY6IHRydWUsXG4gIGdyYWRpZW50VHJhbnNmb3JtOiB0cnVlLFxuICBncmFkaWVudFVuaXRzOiB0cnVlLFxuICBoYW5naW5nOiB0cnVlLFxuICBob3JpekFkdlg6IHRydWUsXG4gIGhvcml6T3JpZ2luWDogdHJ1ZSxcbiAgaWRlb2dyYXBoaWM6IHRydWUsXG4gIGltYWdlUmVuZGVyaW5nOiB0cnVlLFxuICBpbjogdHJ1ZSxcbiAgaW4yOiB0cnVlLFxuICBpbnRlcmNlcHQ6IHRydWUsXG4gIGs6IHRydWUsXG4gIGsxOiB0cnVlLFxuICBrMjogdHJ1ZSxcbiAgazM6IHRydWUsXG4gIGs0OiB0cnVlLFxuICBrZXJuZWxNYXRyaXg6IHRydWUsXG4gIGtlcm5lbFVuaXRMZW5ndGg6IHRydWUsXG4gIGtlcm5pbmc6IHRydWUsXG4gIGtleVBvaW50czogdHJ1ZSxcbiAga2V5U3BsaW5lczogdHJ1ZSxcbiAga2V5VGltZXM6IHRydWUsXG4gIGxlbmd0aEFkanVzdDogdHJ1ZSxcbiAgbGV0dGVyU3BhY2luZzogdHJ1ZSxcbiAgbGlnaHRpbmdDb2xvcjogdHJ1ZSxcbiAgbGltaXRpbmdDb25lQW5nbGU6IHRydWUsXG4gIGxvY2FsOiB0cnVlLFxuICBtYXJrZXJFbmQ6IHRydWUsXG4gIG1hcmtlck1pZDogdHJ1ZSxcbiAgbWFya2VyU3RhcnQ6IHRydWUsXG4gIG1hcmtlckhlaWdodDogdHJ1ZSxcbiAgbWFya2VyVW5pdHM6IHRydWUsXG4gIG1hcmtlcldpZHRoOiB0cnVlLFxuICBtYXNrOiB0cnVlLFxuICBtYXNrQ29udGVudFVuaXRzOiB0cnVlLFxuICBtYXNrVW5pdHM6IHRydWUsXG4gIG1hdGhlbWF0aWNhbDogdHJ1ZSxcbiAgbW9kZTogdHJ1ZSxcbiAgbnVtT2N0YXZlczogdHJ1ZSxcbiAgb2Zmc2V0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcGVyYXRvcjogdHJ1ZSxcbiAgb3JkZXI6IHRydWUsXG4gIG9yaWVudDogdHJ1ZSxcbiAgb3JpZW50YXRpb246IHRydWUsXG4gIG9yaWdpbjogdHJ1ZSxcbiAgb3ZlcmZsb3c6IHRydWUsXG4gIG92ZXJsaW5lUG9zaXRpb246IHRydWUsXG4gIG92ZXJsaW5lVGhpY2tuZXNzOiB0cnVlLFxuICBwYWludE9yZGVyOiB0cnVlLFxuICBwYW5vc2UxOiB0cnVlLFxuICBwYXRoTGVuZ3RoOiB0cnVlLFxuICBwYXR0ZXJuQ29udGVudFVuaXRzOiB0cnVlLFxuICBwYXR0ZXJuVHJhbnNmb3JtOiB0cnVlLFxuICBwYXR0ZXJuVW5pdHM6IHRydWUsXG4gIHBvaW50ZXJFdmVudHM6IHRydWUsXG4gIHBvaW50czogdHJ1ZSxcbiAgcG9pbnRzQXRYOiB0cnVlLFxuICBwb2ludHNBdFk6IHRydWUsXG4gIHBvaW50c0F0WjogdHJ1ZSxcbiAgcHJlc2VydmVBbHBoYTogdHJ1ZSxcbiAgcHJlc2VydmVBc3BlY3RSYXRpbzogdHJ1ZSxcbiAgcHJpbWl0aXZlVW5pdHM6IHRydWUsXG4gIHI6IHRydWUsXG4gIHJhZGl1czogdHJ1ZSxcbiAgcmVmWDogdHJ1ZSxcbiAgcmVmWTogdHJ1ZSxcbiAgcmVuZGVyaW5nSW50ZW50OiB0cnVlLFxuICByZXBlYXRDb3VudDogdHJ1ZSxcbiAgcmVwZWF0RHVyOiB0cnVlLFxuICByZXF1aXJlZEV4dGVuc2lvbnM6IHRydWUsXG4gIHJlcXVpcmVkRmVhdHVyZXM6IHRydWUsXG4gIHJlc3RhcnQ6IHRydWUsXG4gIHJlc3VsdDogdHJ1ZSxcbiAgcm90YXRlOiB0cnVlLFxuICByeDogdHJ1ZSxcbiAgcnk6IHRydWUsXG4gIHNjYWxlOiB0cnVlLFxuICBzZWVkOiB0cnVlLFxuICBzaGFwZVJlbmRlcmluZzogdHJ1ZSxcbiAgc2xvcGU6IHRydWUsXG4gIHNwYWNpbmc6IHRydWUsXG4gIHNwZWN1bGFyQ29uc3RhbnQ6IHRydWUsXG4gIHNwZWN1bGFyRXhwb25lbnQ6IHRydWUsXG4gIHNwZWVkOiB0cnVlLFxuICBzcHJlYWRNZXRob2Q6IHRydWUsXG4gIHN0YXJ0T2Zmc2V0OiB0cnVlLFxuICBzdGREZXZpYXRpb246IHRydWUsXG4gIHN0ZW1oOiB0cnVlLFxuICBzdGVtdjogdHJ1ZSxcbiAgc3RpdGNoVGlsZXM6IHRydWUsXG4gIHN0b3BDb2xvcjogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogdHJ1ZSxcbiAgc3RyaWtldGhyb3VnaFRoaWNrbmVzczogdHJ1ZSxcbiAgc3RyaW5nOiB0cnVlLFxuICBzdHJva2U6IHRydWUsXG4gIHN0cm9rZURhc2hhcnJheTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlTGluZWNhcDogdHJ1ZSxcbiAgc3Ryb2tlTGluZWpvaW46IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlLFxuICBzdXJmYWNlU2NhbGU6IHRydWUsXG4gIHN5c3RlbUxhbmd1YWdlOiB0cnVlLFxuICB0YWJsZVZhbHVlczogdHJ1ZSxcbiAgdGFyZ2V0WDogdHJ1ZSxcbiAgdGFyZ2V0WTogdHJ1ZSxcbiAgdGV4dEFuY2hvcjogdHJ1ZSxcbiAgdGV4dERlY29yYXRpb246IHRydWUsXG4gIHRleHRSZW5kZXJpbmc6IHRydWUsXG4gIHRleHRMZW5ndGg6IHRydWUsXG4gIHRvOiB0cnVlLFxuICB0cmFuc2Zvcm06IHRydWUsXG4gIHUxOiB0cnVlLFxuICB1MjogdHJ1ZSxcbiAgdW5kZXJsaW5lUG9zaXRpb246IHRydWUsXG4gIHVuZGVybGluZVRoaWNrbmVzczogdHJ1ZSxcbiAgdW5pY29kZTogdHJ1ZSxcbiAgdW5pY29kZUJpZGk6IHRydWUsXG4gIHVuaWNvZGVSYW5nZTogdHJ1ZSxcbiAgdW5pdHNQZXJFbTogdHJ1ZSxcbiAgdkFscGhhYmV0aWM6IHRydWUsXG4gIHZIYW5naW5nOiB0cnVlLFxuICB2SWRlb2dyYXBoaWM6IHRydWUsXG4gIHZNYXRoZW1hdGljYWw6IHRydWUsXG4gIHZhbHVlczogdHJ1ZSxcbiAgdmVjdG9yRWZmZWN0OiB0cnVlLFxuICB2ZXJzaW9uOiB0cnVlLFxuICB2ZXJ0QWR2WTogdHJ1ZSxcbiAgdmVydE9yaWdpblg6IHRydWUsXG4gIHZlcnRPcmlnaW5ZOiB0cnVlLFxuICB2aWV3Qm94OiB0cnVlLFxuICB2aWV3VGFyZ2V0OiB0cnVlLFxuICB2aXNpYmlsaXR5OiB0cnVlLFxuICB3aWR0aHM6IHRydWUsXG4gIHdvcmRTcGFjaW5nOiB0cnVlLFxuICB3cml0aW5nTW9kZTogdHJ1ZSxcbiAgeDogdHJ1ZSxcbiAgeEhlaWdodDogdHJ1ZSxcbiAgeDE6IHRydWUsXG4gIHgyOiB0cnVlLFxuICB4Q2hhbm5lbFNlbGVjdG9yOiB0cnVlLFxuICB4bGlua0FjdHVhdGU6IHRydWUsXG4gIHhsaW5rQXJjcm9sZTogdHJ1ZSxcbiAgeGxpbmtIcmVmOiB0cnVlLFxuICB4bGlua1JvbGU6IHRydWUsXG4gIHhsaW5rU2hvdzogdHJ1ZSxcbiAgeGxpbmtUaXRsZTogdHJ1ZSxcbiAgeGxpbmtUeXBlOiB0cnVlLFxuICB4bWxCYXNlOiB0cnVlLFxuICB4bWxuczogdHJ1ZSxcbiAgeG1sbnNYbGluazogdHJ1ZSxcbiAgeG1sTGFuZzogdHJ1ZSxcbiAgeG1sU3BhY2U6IHRydWUsXG4gIHk6IHRydWUsXG4gIHkxOiB0cnVlLFxuICB5MjogdHJ1ZSxcbiAgeUNoYW5uZWxTZWxlY3RvcjogdHJ1ZSxcbiAgejogdHJ1ZSxcbiAgem9vbUFuZFBhbjogdHJ1ZVxufTtcblxuLyogRnJvbSBET01Qcm9wZXJ0eSAqL1xudmFyIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgPSAnOkEtWl9hLXpcXFxcdTAwQzAtXFxcXHUwMEQ2XFxcXHUwMEQ4LVxcXFx1MDBGNlxcXFx1MDBGOC1cXFxcdTAyRkZcXFxcdTAzNzAtXFxcXHUwMzdEXFxcXHUwMzdGLVxcXFx1MUZGRlxcXFx1MjAwQy1cXFxcdTIwMERcXFxcdTIwNzAtXFxcXHUyMThGXFxcXHUyQzAwLVxcXFx1MkZFRlxcXFx1MzAwMS1cXFxcdUQ3RkZcXFxcdUY5MDAtXFxcXHVGRENGXFxcXHVGREYwLVxcXFx1RkZGRCc7XG52YXIgQVRUUklCVVRFX05BTUVfQ0hBUiA9IEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgKyAnXFxcXC0uMC05XFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDAnO1xudmFyIGlzQ3VzdG9tQXR0cmlidXRlID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0LmJpbmQobmV3IFJlZ0V4cCgnXihkYXRhfGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKSk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChodG1sUHJvcHMsIG5hbWUpIHx8IGhhc093blByb3BlcnR5LmNhbGwoc3ZnUHJvcHMsIG5hbWUpIHx8IGlzQ3VzdG9tQXR0cmlidXRlKG5hbWUudG9Mb3dlckNhc2UoKSkgfHwgaGFzT3duUHJvcGVydHkuY2FsbChyZWFjdFByb3BzLCBuYW1lKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvdmFsaWRBdHRyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuLSAncG9seWZpbGxzJyBvbiBzZXJ2ZXIgc2lkZVxuXG5cbi8vIHVzYWdlXG5cbmltcG9ydCBTdHlsZVNoZWV0IGZyb20gJ2dsYW1vci9saWIvc2hlZXQnXG5sZXQgc3R5bGVTaGVldCA9IG5ldyBTdHlsZVNoZWV0KClcblxuc3R5bGVTaGVldC5pbmplY3QoKVxuLSAnaW5qZWN0cycgdGhlIHN0eWxlc2hlZXQgaW50byB0aGUgcGFnZSAob3IgaW50byBtZW1vcnkgaWYgb24gc2VydmVyKVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuXG4qL1xuXG5mdW5jdGlvbiBsYXN0KGFycikge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaXNEZXYgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geCA9PT0gJ2RldmVsb3BtZW50JyB8fCAheDtcbn0ocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xudmFyIGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG5cbnZhciBvbGRJRSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgbHQgSUUgMTBdPjxpPjwvaT48IVtlbmRpZl0tLT4nO1xuICAgIHJldHVybiBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2knKS5sZW5ndGggPT09IDE7XG4gIH1cbn0oKTtcblxuZnVuY3Rpb24gbWFrZVN0eWxlVGFnKCkge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSkuYXBwZW5kQ2hpbGQodGFnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPSBleHBvcnRzLlN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJHNwZWVkeSA9IF9yZWYuc3BlZWR5LFxuICAgICAgICBzcGVlZHkgPSBfcmVmJHNwZWVkeSA9PT0gdW5kZWZpbmVkID8gIWlzRGV2ICYmICFpc1Rlc3QgOiBfcmVmJHNwZWVkeSxcbiAgICAgICAgX3JlZiRtYXhMZW5ndGggPSBfcmVmLm1heExlbmd0aCxcbiAgICAgICAgbWF4TGVuZ3RoID0gX3JlZiRtYXhMZW5ndGggPT09IHVuZGVmaW5lZCA/IGlzQnJvd3NlciAmJiBvbGRJRSA/IDQwMDAgOiA2NTAwMCA6IF9yZWYkbWF4TGVuZ3RoO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlU2hlZXQpO1xuXG4gICAgdGhpcy5pc1NwZWVkeSA9IHNwZWVkeTsgLy8gdGhlIGJpZyBkcmF3YmFjayBoZXJlIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICAgIHRoaXMuc2hlZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5tYXhMZW5ndGggPSBtYXhMZW5ndGg7XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlU2hlZXQsIFt7XG4gICAga2V5OiAnaW5qZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5qZWN0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuaW5qZWN0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGluamVjdGVkIHN0eWxlc2hlZXQhJyk7XG4gICAgICB9XG4gICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgIC8vIHRoaXMgc2VjdGlvbiBpcyBqdXN0IHdlaXJkIGFsY2hlbXkgSSBmb3VuZCBvbmxpbmUgb2ZmIG1hbnkgc291cmNlc1xuICAgICAgICB0aGlzLnRhZ3NbMF0gPSBtYWtlU3R5bGVUYWcoKTtcbiAgICAgICAgLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuICAgICAgICB0aGlzLnNoZWV0ID0gc2hlZXRGb3JUYWcodGhpcy50YWdzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNlcnZlciBzaWRlICdwb2x5ZmlsbCcuIGp1c3QgZW5vdWdoIGJlaGF2aW9yIHRvIGJlIHVzZWZ1bC5cbiAgICAgICAgdGhpcy5zaGVldCA9IHtcbiAgICAgICAgICBjc3NSdWxlczogW10sXG4gICAgICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgICAgICAgICAvLyBlbm91Z2ggJ3NwZWMgY29tcGxpYW5jZScgdG8gYmUgYWJsZSB0byBleHRyYWN0IHRoZSBydWxlcyBsYXRlclxuICAgICAgICAgICAgLy8gaW4gb3RoZXIgd29yZHMsIGp1c3QgdGhlIGNzc1RleHQgZmllbGRcbiAgICAgICAgICAgIHZhciBzZXJ2ZXJSdWxlID0geyBjc3NUZXh0OiBydWxlIH07XG4gICAgICAgICAgICBfdGhpcy5zaGVldC5jc3NSdWxlcy5wdXNoKHNlcnZlclJ1bGUpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc2VydmVyUnVsZTogc2VydmVyUnVsZSwgYXBwZW5kUnVsZTogZnVuY3Rpb24gYXBwZW5kUnVsZShuZXdDc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmVyUnVsZS5jc3NUZXh0ICs9IG5ld0NzcztcbiAgICAgICAgICAgICAgfSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5qZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NwZWVkeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwZWVkeShib29sKSB7XG4gICAgICBpZiAodGhpcy5jdHIgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgY2hhbmdlIHNwZWVkeSBtb2RlIGFmdGVyIGluc2VydGluZyBhbnkgcnVsZSB0byBzaGVldC4gRWl0aGVyIGNhbGwgc3BlZWR5KCcgKyBib29sICsgJykgZWFybGllciBpbiB5b3VyIGFwcCwgb3IgY2FsbCBmbHVzaCgpIGJlZm9yZSBzcGVlZHkoJyArIGJvb2wgKyAnKScpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc1NwZWVkeSA9ICEhYm9vbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaW5zZXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydChydWxlKSB7XG4gICAgICAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1Z1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2hlZXQuaW5zZXJ0UnVsZShydWxlLCB0aGlzLnNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7IC8vIHRvZG8gLSBjb3JyZWN0IGluZGV4IGhlcmVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGlzRGV2KSB7XG4gICAgICAgICAgLy8gbWlnaHQgbmVlZCBiZXRlciBkeCBmb3IgdGhpc1xuICAgICAgICAgIGNvbnNvbGUud2Fybignd2hvb3BzLCBpbGxlZ2FsIHJ1bGUgaW5zZXJ0ZWQnLCBydWxlKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luc2VydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgICB2YXIgaW5zZXJ0ZWRSdWxlID0gdm9pZCAwO1xuXG4gICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgaWYgKHRoaXMuaXNTcGVlZHkgJiYgdGhpcy5zaGVldC5pbnNlcnRSdWxlKSB7XG4gICAgICAgICAgdGhpcy5faW5zZXJ0KHJ1bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpO1xuICAgICAgICAgIGxhc3QodGhpcy50YWdzKS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgaW5zZXJ0ZWRSdWxlID0geyB0ZXh0Tm9kZTogdGV4dE5vZGUsIGFwcGVuZFJ1bGU6IGZ1bmN0aW9uIGFwcGVuZFJ1bGUobmV3Q3NzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0Tm9kZS5hcHBlbmREYXRhKG5ld0Nzcyk7XG4gICAgICAgICAgICB9IH07XG5cbiAgICAgICAgICBpZiAoIXRoaXMuaXNTcGVlZHkpIHtcbiAgICAgICAgICAgIC8vIHNpZ2hoaFxuICAgICAgICAgICAgdGhpcy5zaGVldCA9IHNoZWV0Rm9yVGFnKGxhc3QodGhpcy50YWdzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZXJ2ZXIgc2lkZSBpcyBwcmV0dHkgc2ltcGxlXG4gICAgICAgIGluc2VydGVkUnVsZSA9IHRoaXMuc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdHIrKztcbiAgICAgIGlmIChpc0Jyb3dzZXIgJiYgdGhpcy5jdHIgJSB0aGlzLm1heExlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRhZ3MucHVzaChtYWtlU3R5bGVUYWcoKSk7XG4gICAgICAgIHRoaXMuc2hlZXQgPSBzaGVldEZvclRhZyhsYXN0KHRoaXMudGFncykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluc2VydGVkUnVsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmbHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5zaGVldCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3RyID0gMDtcbiAgICAgICAgLy8gdG9kbyAtIGxvb2sgZm9yIHJlbW5hbnRzIGluIGRvY3VtZW50LnN0eWxlU2hlZXRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlclxuICAgICAgICB0aGlzLnNoZWV0LmNzc1J1bGVzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLmluamVjdGVkID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncnVsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydWxlcygpIHtcbiAgICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoZWV0LmNzc1J1bGVzO1xuICAgICAgfVxuICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gYXJyLnNwbGljZS5hcHBseShhcnIsIFthcnIubGVuZ3RoLCAwXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KEFycmF5LmZyb20oc2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcykpKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvZ2xhbW9yL3NoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3Rva2VuaXplMiA9IHJlcXVpcmUoJy4uL3Bvc3Rjc3MvdG9rZW5pemUnKTtcblxudmFyIF90b2tlbml6ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b2tlbml6ZTIpO1xuXG52YXIgX2NvbW1lbnQgPSByZXF1aXJlKCcuLi9wb3N0Y3NzL2NvbW1lbnQnKTtcblxudmFyIF9jb21tZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1lbnQpO1xuXG52YXIgX3BhcnNlciA9IHJlcXVpcmUoJy4uL3Bvc3Rjc3MvcGFyc2VyJyk7XG5cbnZhciBfcGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNhZmVQYXJzZXIgPSBmdW5jdGlvbiAoX1BhcnNlcikge1xuICAgIF9pbmhlcml0cyhTYWZlUGFyc2VyLCBfUGFyc2VyKTtcblxuICAgIGZ1bmN0aW9uIFNhZmVQYXJzZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTYWZlUGFyc2VyKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNhZmVQYXJzZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTYWZlUGFyc2VyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNhZmVQYXJzZXIsIFt7XG4gICAgICAgIGtleTogJ3Rva2VuaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRva2VuaXplKCkge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMgPSAoMCwgX3Rva2VuaXplMy5kZWZhdWx0KSh0aGlzLmlucHV0LCB7IGlnbm9yZUVycm9yczogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21tZW50KHRva2VuKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfY29tbWVudDIuZGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0KG5vZGUsIHRva2VuWzJdLCB0b2tlblszXSk7XG4gICAgICAgICAgICBub2RlLnNvdXJjZS5lbmQgPSB7IGxpbmU6IHRva2VuWzRdLCBjb2x1bW46IHRva2VuWzVdIH07XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdG9rZW5bMV0uc2xpY2UoMik7XG4gICAgICAgICAgICBpZiAodGV4dC5zbGljZSgtMikgPT09ICcqLycpIHRleHQgPSB0ZXh0LnNsaWNlKDAsIC0yKTtcblxuICAgICAgICAgICAgaWYgKC9eXFxzKiQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBub2RlLnRleHQgPSAnJztcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MubGVmdCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgbm9kZS5yYXdzLnJpZ2h0ID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHRleHQubWF0Y2goL14oXFxzKikoW15dKlteXFxzXSkoXFxzKikkLyk7XG4gICAgICAgICAgICAgICAgbm9kZS50ZXh0ID0gbWF0Y2hbMl07XG4gICAgICAgICAgICAgICAgbm9kZS5yYXdzLmxlZnQgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBub2RlLnJhd3MucmlnaHQgPSBtYXRjaFszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5jbG9zZWRCcmFja2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuY2xvc2VkQnJhY2tldCgpIHt9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmtub3duV29yZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmtub3duV29yZChzdGFydCkge1xuICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMudG9rZW5zLnNsaWNlKHN0YXJ0LCB0aGlzLnBvcyArIDEpO1xuICAgICAgICAgICAgdGhpcy5zcGFjZXMgKz0gYnVmZmVyLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpWzFdO1xuICAgICAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuZXhwZWN0ZWRDbG9zZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmV4cGVjdGVkQ2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciArPSAnfSc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RvdWJsZUNvbG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvdWJsZUNvbG9uKCkge31cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VubmFtZWRBdHJ1bGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5uYW1lZEF0cnVsZShub2RlKSB7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSAnJztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlY2hlY2tNaXNzZWRTZW1pY29sb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKSB7XG4gICAgICAgICAgICB2YXIgY29sb24gPSB0aGlzLmNvbG9uKHRva2Vucyk7XG4gICAgICAgICAgICBpZiAoY29sb24gPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBzcGxpdCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGZvciAoc3BsaXQgPSBjb2xvbiAtIDE7IHNwbGl0ID49IDA7IHNwbGl0LS0pIHtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5zW3NwbGl0XVswXSA9PT0gJ3dvcmQnKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoc3BsaXQgLT0gMTsgc3BsaXQgPj0gMDsgc3BsaXQtLSkge1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbnNbc3BsaXRdWzBdICE9PSAnc3BhY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvdGhlciA9IHRva2Vucy5zcGxpY2Uoc3BsaXQsIHRva2Vucy5sZW5ndGggLSBzcGxpdCk7XG4gICAgICAgICAgICB0aGlzLmRlY2wob3RoZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGVja01pc3NlZFNlbWljb2xvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja01pc3NlZFNlbWljb2xvbigpIHt9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmRGaWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuZEZpbGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Lm5vZGVzICYmIHRoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQucmF3cy5zZW1pY29sb24gPSB0aGlzLnNlbWljb2xvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5yYXdzLmFmdGVyID0gKHRoaXMuY3VycmVudC5yYXdzLmFmdGVyIHx8ICcnKSArIHRoaXMuc3BhY2VzO1xuXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jdXJyZW50LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTYWZlUGFyc2VyO1xufShfcGFyc2VyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2FmZVBhcnNlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3Mtc2FmZS1wYXJzZXIvc2FmZS1wYXJzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIENvbnRhaW5zIGhlbHBlcnMgZm9yIHNhZmVseSBzcGxpdHRpbmcgbGlzdHMgb2YgQ1NTIHZhbHVlcyxcbiAqIHByZXNlcnZpbmcgcGFyZW50aGVzZXMgYW5kIHF1b3Rlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgbGlzdCA9IHBvc3Rjc3MubGlzdDtcbiAqXG4gKiBAbmFtZXNwYWNlIGxpc3RcbiAqL1xudmFyIGxpc3QgPSB7XG4gICAgc3BsaXQ6IGZ1bmN0aW9uIHNwbGl0KHN0cmluZywgc2VwYXJhdG9ycywgbGFzdCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0ID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGZ1bmMgPSAwO1xuICAgICAgICB2YXIgcXVvdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gc3RyaW5nW2ldO1xuXG4gICAgICAgICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ1wiJyB8fCBsZXR0ZXIgPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgcXVvdGUgPSBsZXR0ZXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgZnVuYyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgIGlmIChmdW5jID4gMCkgZnVuYyAtPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmdW5jID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcGFyYXRvcnMuaW5kZXhPZihsZXR0ZXIpICE9PSAtMSkgc3BsaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3BsaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCAhPT0gJycpIGFycmF5LnB1c2goY3VycmVudC50cmltKCkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBzcGxpdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ICs9IGxldHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0IHx8IGN1cnJlbnQgIT09ICcnKSBhcnJheS5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNhZmVseSBzcGxpdHMgc3BhY2Utc2VwYXJhdGVkIHZhbHVlcyAoc3VjaCBhcyB0aG9zZSBmb3IgYGJhY2tncm91bmRgLFxuICAgICAqIGBib3JkZXItcmFkaXVzYCwgYW5kIG90aGVyIHNob3J0aGFuZCBwcm9wZXJ0aWVzKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBzcGFjZS1zZXBhcmF0ZWQgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gc3BsaXR0ZWQgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHBvc3Rjc3MubGlzdC5zcGFjZSgnMXB4IGNhbGMoMTAlICsgMXB4KScpIC8vPT4gWycxcHgnLCAnY2FsYygxMCUgKyAxcHgpJ11cbiAgICAgKi9cbiAgICBzcGFjZTogZnVuY3Rpb24gc3BhY2Uoc3RyaW5nKSB7XG4gICAgICAgIHZhciBzcGFjZXMgPSBbJyAnLCAnXFxuJywgJ1xcdCddO1xuICAgICAgICByZXR1cm4gbGlzdC5zcGxpdChzdHJpbmcsIHNwYWNlcyk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2FmZWx5IHNwbGl0cyBjb21tYS1zZXBhcmF0ZWQgdmFsdWVzIChzdWNoIGFzIHRob3NlIGZvciBgdHJhbnNpdGlvbi0qYFxuICAgICAqIGFuZCBgYmFja2dyb3VuZGAgcHJvcGVydGllcykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gY29tbWEtc2VwYXJhdGVkIHZhbHVlc1xuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nW119IHNwbGl0dGVkIHZhbHVlc1xuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBwb3N0Y3NzLmxpc3QuY29tbWEoJ2JsYWNrLCBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGJsYWNrKScpXG4gICAgICogLy89PiBbJ2JsYWNrJywgJ2xpbmVhci1ncmFkaWVudCh3aGl0ZSwgYmxhY2spJ11cbiAgICAgKi9cbiAgICBjb21tYTogZnVuY3Rpb24gY29tbWEoc3RyaW5nKSB7XG4gICAgICAgIHZhciBjb21tYSA9ICcsJztcbiAgICAgICAgcmV0dXJuIGxpc3Quc3BsaXQoc3RyaW5nLCBbY29tbWFdLCB0cnVlKTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBsaXN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlZC1jb21wb25lbnRzL2xpYi92ZW5kb3IvcG9zdGNzcy9saXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2xhenlSZXN1bHQgPSByZXF1aXJlKCcuL2xhenktcmVzdWx0Jyk7XG5cbnZhciBfbGF6eVJlc3VsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sYXp5UmVzdWx0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBAY2FsbGJhY2sgYnVpbGRlclxuICogQHBhcmFtIHtzdHJpbmd9IHBhcnQgICAgICAgICAgLSBwYXJ0IG9mIGdlbmVyYXRlZCBDU1MgY29ubmVjdGVkIHRvIHRoaXMgbm9kZVxuICogQHBhcmFtIHtOb2RlfSAgIG5vZGUgICAgICAgICAgLSBBU1Qgbm9kZVxuICogQHBhcmFtIHtcInN0YXJ0XCJ8XCJlbmRcIn0gW3R5cGVdIC0gbm9kZeKAmXMgcGFydCB0eXBlXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgcGFyc2VyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8dG9TdHJpbmd9IGNzcyAgIC0gc3RyaW5nIHdpdGggaW5wdXQgQ1NTIG9yIGFueSBvYmplY3RcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdG9TdHJpbmcoKSBtZXRob2QsIGxpa2UgYSBCdWZmZXJcbiAqIEBwYXJhbSB7cHJvY2Vzc09wdGlvbnN9IFtvcHRzXSAtIG9wdGlvbnMgd2l0aCBvbmx5IGBmcm9tYCBhbmQgYG1hcGAga2V5c1xuICpcbiAqIEByZXR1cm4ge1Jvb3R9IFBvc3RDU1MgQVNUXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgc3RyaW5naWZpZXJcbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgICAgICAgLSBzdGFydCBub2RlIGZvciBzdHJpbmdpZmluZy4gVXN1YWxseSB7QGxpbmsgUm9vdH0uXG4gKiBAcGFyYW0ge2J1aWxkZXJ9IGJ1aWxkZXIgLSBmdW5jdGlvbiB0byBjb25jYXRlbmF0ZSBDU1MgZnJvbSBub2Rl4oCZcyBwYXJ0c1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgZ2VuZXJhdGUgc3RyaW5nIGFuZCBzb3VyY2UgbWFwXG4gKlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IHN5bnRheFxuICogQHByb3BlcnR5IHtwYXJzZXJ9IHBhcnNlICAgICAgICAgIC0gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgQVNUIGJ5IHN0cmluZ1xuICogQHByb3BlcnR5IHtzdHJpbmdpZmllcn0gc3RyaW5naWZ5IC0gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgc3RyaW5nIGJ5IEFTVFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gdG9TdHJpbmdcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHRvU3RyaW5nXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgcGx1Z2luRnVuY3Rpb25cbiAqIEBwYXJhbSB7Um9vdH0gcm9vdCAgICAgLSBwYXJzZWQgaW5wdXQgQ1NTXG4gKiBAcGFyYW0ge1Jlc3VsdH0gcmVzdWx0IC0gcmVzdWx0IHRvIHNldCB3YXJuaW5ncyBvciBjaGVjayBvdGhlciBwbHVnaW5zXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQbHVnaW5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHBvc3Rjc3MgLSBQb3N0Q1NTIHBsdWdpbiBmdW5jdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gcHJvY2Vzc09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmcm9tICAgICAgICAgICAgIC0gdGhlIHBhdGggb2YgdGhlIENTUyBzb3VyY2UgZmlsZS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IHNob3VsZCBhbHdheXMgc2V0IGBmcm9tYCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVjYXVzZSBpdCBpcyB1c2VkIGluIHNvdXJjZSBtYXBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbiBhbmQgc3ludGF4IGVycm9yIG1lc3NhZ2VzLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRvICAgICAgICAgICAgICAgLSB0aGUgcGF0aCB3aGVyZSB5b3XigJlsbCBwdXQgdGhlIG91dHB1dFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDU1MgZmlsZS4gWW91IHNob3VsZCBhbHdheXMgc2V0IGB0b2BcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZ2VuZXJhdGUgY29ycmVjdCBzb3VyY2UgbWFwcy5cbiAqIEBwcm9wZXJ0eSB7cGFyc2VyfSBwYXJzZXIgICAgICAgICAgIC0gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgQVNUIGJ5IHN0cmluZ1xuICogQHByb3BlcnR5IHtzdHJpbmdpZmllcn0gc3RyaW5naWZpZXIgLSBjbGFzcyB0byBnZW5lcmF0ZSBzdHJpbmcgYnkgQVNUXG4gKiBAcHJvcGVydHkge3N5bnRheH0gc3ludGF4ICAgICAgICAgICAtIG9iamVjdCB3aXRoIGBwYXJzZWAgYW5kIGBzdHJpbmdpZnlgXG4gKiBAcHJvcGVydHkge29iamVjdH0gbWFwICAgICAgICAgICAgICAtIHNvdXJjZSBtYXAgb3B0aW9uc1xuICogQHByb3BlcnR5IHtib29sZWFufSBtYXAuaW5saW5lICAgICAgICAgICAgICAgICAgICAtIGRvZXMgc291cmNlIG1hcCBzaG91bGRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSBlbWJlZGRlZCBpbiB0aGUgb3V0cHV0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1NTIGFzIGEgYmFzZTY0LWVuY29kZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50XG4gKiBAcHJvcGVydHkge3N0cmluZ3xvYmplY3R8ZmFsc2V8ZnVuY3Rpb259IG1hcC5wcmV2IC0gc291cmNlIG1hcCBjb250ZW50XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBhIHByZXZpb3VzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZyBzdGVwXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvciBleGFtcGxlLCBTYXNzKS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3N0Q1NTIHdpbGwgdHJ5IHRvIGZpbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyBtYXBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aWNhbGx5LCBzbyB5b3VcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VsZCBkaXNhYmxlIGl0IGJ5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZhbHNlYCB2YWx1ZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbWFwLnNvdXJjZXNDb250ZW50ICAgICAgICAgICAgLSBkb2VzIFBvc3RDU1Mgc2hvdWxkIHNldFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBvcmlnaW4gY29udGVudCB0byBtYXBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfGZhbHNlfSBtYXAuYW5ub3RhdGlvbiAgICAgICAgICAgLSBkb2VzIFBvc3RDU1Mgc2hvdWxkIHNldFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb24gY29tbWVudCB0byBtYXBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtYXAuZnJvbSAgICAgICAgICAgICAgICAgICAgICAgLSBvdmVycmlkZSBgZnJvbWAgaW4gbWFw4oCZc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzb3VyY2VzYFxuICovXG5cbi8qKlxuICogQ29udGFpbnMgcGx1Z2lucyB0byBwcm9jZXNzIENTUy4gQ3JlYXRlIG9uZSBgUHJvY2Vzc29yYCBpbnN0YW5jZSxcbiAqIGluaXRpYWxpemUgaXRzIHBsdWdpbnMsIGFuZCB0aGVuIHVzZSB0aGF0IGluc3RhbmNlIG9uIG51bWVyb3VzIENTUyBmaWxlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcHJvY2Vzc29yID0gcG9zdGNzcyhbYXV0b3ByZWZpeGVyLCBwcmVjc3NdKTtcbiAqIHByb2Nlc3Nvci5wcm9jZXNzKGNzczEpLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdC5jc3MpKTtcbiAqIHByb2Nlc3Nvci5wcm9jZXNzKGNzczIpLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdC5jc3MpKTtcbiAqL1xudmFyIFByb2Nlc3NvciA9IGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheS48UGx1Z2lufHBsdWdpbkZ1bmN0aW9uPnxQcm9jZXNzb3J9IHBsdWdpbnMgLSBQb3N0Q1NTXG4gICAqICAgICAgICBwbHVnaW5zLiBTZWUge0BsaW5rIFByb2Nlc3NvciN1c2V9IGZvciBwbHVnaW4gZm9ybWF0LlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvY2Vzc29yKCkge1xuICAgIHZhciBwbHVnaW5zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzb3IpO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSAtIEN1cnJlbnQgUG9zdENTUyB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpZiAoIHJlc3VsdC5wcm9jZXNzb3IudmVyc2lvbi5zcGxpdCgnLicpWzBdICE9PSAnNScgKSB7XG4gICAgICogICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcGx1Z2luIHdvcmtzIG9ubHkgd2l0aCBQb3N0Q1NTIDUnKTtcbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy52ZXJzaW9uID0gJzUuMi4wJztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtwbHVnaW5GdW5jdGlvbltdfSAtIFBsdWdpbnMgYWRkZWQgdG8gdGhpcyBwcm9jZXNzb3IuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IHByb2Nlc3NvciA9IHBvc3Rjc3MoW2F1dG9wcmVmaXhlciwgcHJlY3NzXSk7XG4gICAgICogcHJvY2Vzc29yLnBsdWdpbnMubGVuZ3RoIC8vPT4gMlxuICAgICAqL1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMubm9ybWFsaXplKHBsdWdpbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwbHVnaW4gdG8gYmUgdXNlZCBhcyBhIENTUyBwcm9jZXNzb3IuXG4gICAqXG4gICAqIFBvc3RDU1MgcGx1Z2luIGNhbiBiZSBpbiA0IGZvcm1hdHM6XG4gICAqICogQSBwbHVnaW4gY3JlYXRlZCBieSB7QGxpbmsgcG9zdGNzcy5wbHVnaW59IG1ldGhvZC5cbiAgICogKiBBIGZ1bmN0aW9uLiBQb3N0Q1NTIHdpbGwgcGFzcyB0aGUgZnVuY3Rpb24gYSBAe2xpbmsgUm9vdH1cbiAgICogICBhcyB0aGUgZmlyc3QgYXJndW1lbnQgYW5kIGN1cnJlbnQge0BsaW5rIFJlc3VsdH0gaW5zdGFuY2VcbiAgICogICBhcyB0aGUgc2Vjb25kLlxuICAgKiAqIEFuIG9iamVjdCB3aXRoIGEgYHBvc3Rjc3NgIG1ldGhvZC4gUG9zdENTUyB3aWxsIHVzZSB0aGF0IG1ldGhvZFxuICAgKiAgIGFzIGRlc2NyaWJlZCBpbiAjMi5cbiAgICogKiBBbm90aGVyIHtAbGluayBQcm9jZXNzb3J9IGluc3RhbmNlLiBQb3N0Q1NTIHdpbGwgY29weSBwbHVnaW5zXG4gICAqICAgZnJvbSB0aGF0IGluc3RhbmNlIGludG8gdGhpcyBvbmUuXG4gICAqXG4gICAqIFBsdWdpbnMgY2FuIGFsc28gYmUgYWRkZWQgYnkgcGFzc2luZyB0aGVtIGFzIGFyZ3VtZW50cyB3aGVuIGNyZWF0aW5nXG4gICAqIGEgYHBvc3Rjc3NgIGluc3RhbmNlIChzZWUgW2Bwb3N0Y3NzKHBsdWdpbnMpYF0pLlxuICAgKlxuICAgKiBBc3luY2hyb25vdXMgcGx1Z2lucyBzaG91bGQgcmV0dXJuIGEgYFByb21pc2VgIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsdWdpbnxwbHVnaW5GdW5jdGlvbnxQcm9jZXNzb3J9IHBsdWdpbiAtIFBvc3RDU1MgcGx1Z2luXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Ige0BsaW5rIFByb2Nlc3Nvcn1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHBsdWdpbnNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgcHJvY2Vzc29yID0gcG9zdGNzcygpXG4gICAqICAgLnVzZShhdXRvcHJlZml4ZXIpXG4gICAqICAgLnVzZShwcmVjc3MpO1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9jZXNzZXN9IGN1cnJlbnQgcHJvY2Vzc29yIHRvIG1ha2UgbWV0aG9kcyBjaGFpblxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhQcm9jZXNzb3IsIFt7XG4gICAga2V5OiAndXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXNlKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5zID0gdGhpcy5wbHVnaW5zLmNvbmNhdCh0aGlzLm5vcm1hbGl6ZShbcGx1Z2luXSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHNvdXJjZSBDU1MgYW5kIHJldHVybnMgYSB7QGxpbmsgTGF6eVJlc3VsdH0gUHJvbWlzZSBwcm94eS5cbiAgICAgKiBCZWNhdXNlIHNvbWUgcGx1Z2lucyBjYW4gYmUgYXN5bmNocm9ub3VzIGl0IGRvZXNu4oCZdCBtYWtlXG4gICAgICogYW55IHRyYW5zZm9ybWF0aW9ucy4gVHJhbnNmb3JtYXRpb25zIHdpbGwgYmUgYXBwbGllZFxuICAgICAqIGluIHRoZSB7QGxpbmsgTGF6eVJlc3VsdH0gbWV0aG9kcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfHRvU3RyaW5nfFJlc3VsdH0gY3NzIC0gU3RyaW5nIHdpdGggaW5wdXQgQ1NTIG9yXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgb2JqZWN0IHdpdGggYSBgdG9TdHJpbmcoKWBcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCwgbGlrZSBhIEJ1ZmZlci5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsbHksIHNlbmQgYSB7QGxpbmsgUmVzdWx0fVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UgYW5kIHRoZSBwcm9jZXNzb3Igd2lsbFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZSB0aGUge0BsaW5rIFJvb3R9IGZyb20gaXQuXG4gICAgICogQHBhcmFtIHtwcm9jZXNzT3B0aW9uc30gW29wdHNdICAgICAgLSBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtMYXp5UmVzdWx0fSBQcm9taXNlIHByb3h5XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHByb2Nlc3Nvci5wcm9jZXNzKGNzcywgeyBmcm9tOiAnYS5jc3MnLCB0bzogJ2Eub3V0LmNzcycgfSlcbiAgICAgKiAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICogICAgICBjb25zb2xlLmxvZyhyZXN1bHQuY3NzKTtcbiAgICAgKiAgIH0pO1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwcm9jZXNzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvY2Vzcyhjc3MpIHtcbiAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgcmV0dXJuIG5ldyBfbGF6eVJlc3VsdDIuZGVmYXVsdCh0aGlzLCBjc3MsIG9wdHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ25vcm1hbGl6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5vcm1hbGl6ZShwbHVnaW5zKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZCA9IFtdO1xuICAgICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGlmIChpLnBvc3Rjc3MpIGkgPSBpLnBvc3Rjc3M7XG5cbiAgICAgICAgaWYgKCh0eXBlb2YgaSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaSkpID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KGkucGx1Z2lucykpIHtcbiAgICAgICAgICBub3JtYWxpemVkID0gbm9ybWFsaXplZC5jb25jYXQoaS5wbHVnaW5zKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG5vcm1hbGl6ZWQucHVzaChpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoaSArICcgaXMgbm90IGEgUG9zdENTUyBwbHVnaW4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJvY2Vzc29yO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQcm9jZXNzb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3Byb2Nlc3Nvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJy4vd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQHR5cGVkZWYgIHtvYmplY3R9IE1lc3NhZ2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlICAgLSBtZXNzYWdlIHR5cGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwbHVnaW4gLSBzb3VyY2UgUG9zdENTUyBwbHVnaW4gbmFtZVxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgdGhlIHJlc3VsdCBvZiB0aGUgUG9zdENTUyB0cmFuc2Zvcm1hdGlvbnMuXG4gKlxuICogQSBSZXN1bHQgaW5zdGFuY2UgaXMgcmV0dXJuZWQgYnkge0BsaW5rIExhenlSZXN1bHQjdGhlbn1cbiAqIG9yIHtAbGluayBSb290I3RvUmVzdWx0fSBtZXRob2RzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBwb3N0Y3NzKFtjc3NuZXh0XSkucHJvY2Vzcyhjc3MpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICogICAgY29uc29sZS5sb2cocmVzdWx0LmNzcyk7XG4gKiB9KTtcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHJlc3VsdDIgPSBwb3N0Y3NzLnBhcnNlKGNzcykudG9SZXN1bHQoKTtcbiAqL1xudmFyIFJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtQcm9jZXNzb3J9IHByb2Nlc3NvciAtIHByb2Nlc3NvciB1c2VkIGZvciB0aGlzIHRyYW5zZm9ybWF0aW9uLlxuICAgKiBAcGFyYW0ge1Jvb3R9ICAgICAgcm9vdCAgICAgIC0gUm9vdCBub2RlIGFmdGVyIGFsbCB0cmFuc2Zvcm1hdGlvbnMuXG4gICAqIEBwYXJhbSB7cHJvY2Vzc09wdGlvbnN9IG9wdHMgLSBvcHRpb25zIGZyb20gdGhlIHtAbGluayBQcm9jZXNzb3IjcHJvY2Vzc31cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIHtAbGluayBSb290I3RvUmVzdWx0fVxuICAgKi9cbiAgZnVuY3Rpb24gUmVzdWx0KHByb2Nlc3Nvciwgcm9vdCwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXN1bHQpO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvY2Vzc29yfSAtIFRoZSBQcm9jZXNzb3IgaW5zdGFuY2UgdXNlZFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhpcyB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZm9yICggbGV0IHBsdWdpbiBvZiByZXN1bHQucHJvY2Vzc29yLnBsdWdpbnMpIHtcbiAgICAgKiAgIGlmICggcGx1Z2luLnBvc3Rjc3NQbHVnaW4gPT09ICdwb3N0Y3NzLWJhZCcgKSB7XG4gICAgICogICAgIHRocm93ICdwb3N0Y3NzLWdvb2QgaXMgaW5jb21wYXRpYmxlIHdpdGggcG9zdGNzcy1iYWQnO1xuICAgICAqICAgfVxuICAgICAqIH0pO1xuICAgICAqL1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge01lc3NhZ2VbXX0gLSBDb250YWlucyBtZXNzYWdlcyBmcm9tIHBsdWdpbnNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgKGUuZy4sIHdhcm5pbmdzIG9yIGN1c3RvbSBtZXNzYWdlcykuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIEVhY2ggbWVzc2FnZSBzaG91bGQgaGF2ZSB0eXBlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIGFuZCBwbHVnaW4gcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcG9zdGNzcy5wbHVnaW4oJ3Bvc3Rjc3MtbWluLWJyb3dzZXInLCAoKSA9PiB7XG4gICAgICogICByZXR1cm4gKHJvb3QsIHJlc3VsdCkgPT4ge1xuICAgICAqICAgICB2YXIgYnJvd3NlcnMgPSBkZXRlY3RNaW5Ccm93c2Vyc0J5Q2FuSVVzZShyb290KTtcbiAgICAgKiAgICAgcmVzdWx0Lm1lc3NhZ2VzLnB1c2goe1xuICAgICAqICAgICAgIHR5cGU6ICAgICdtaW4tYnJvd3NlcicsXG4gICAgICogICAgICAgcGx1Z2luOiAgJ3Bvc3Rjc3MtbWluLWJyb3dzZXInLFxuICAgICAqICAgICAgIGJyb3dzZXJzOiBicm93c2Vyc1xuICAgICAqICAgICB9KTtcbiAgICAgKiAgIH07XG4gICAgICogfSk7XG4gICAgICovXG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Jvb3R9IC0gUm9vdCBub2RlIGFmdGVyIGFsbCB0cmFuc2Zvcm1hdGlvbnMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHJvb3QudG9SZXN1bHQoKS5yb290ID09IHJvb3Q7XG4gICAgICovXG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtwcm9jZXNzT3B0aW9uc30gLSBPcHRpb25zIGZyb20gdGhlIHtAbGluayBQcm9jZXNzb3IjcHJvY2Vzc31cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciB7QGxpbmsgUm9vdCN0b1Jlc3VsdH0gY2FsbFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgcHJvZHVjZWQgdGhpcyBSZXN1bHQgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHJvb3QudG9SZXN1bHQob3B0cykub3B0cyA9PSBvcHRzO1xuICAgICAqL1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSAtIEEgQ1NTIHN0cmluZyByZXByZXNlbnRpbmcgb2Yge0BsaW5rIFJlc3VsdCNyb290fS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcG9zdGNzcy5wYXJzZSgnYXt9JykudG9SZXN1bHQoKS5jc3MgLy89PiBcImF7fVwiXG4gICAgICovXG4gICAgdGhpcy5jc3MgPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U291cmNlTWFwR2VuZXJhdG9yfSAtIEFuIGluc3RhbmNlIG9mIGBTb3VyY2VNYXBHZW5lcmF0b3JgXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzIGZyb20gdGhlIGBzb3VyY2UtbWFwYCBsaWJyYXJ5LFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXByZXNlbnRpbmcgY2hhbmdlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byB0aGUge0BsaW5rIFJlc3VsdCNyb290fSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcmVzdWx0Lm1hcC50b0pTT04oKSAvLz0+IHsgdmVyc2lvbjogMywgZmlsZTogJ2EuY3NzJywg4oCmIH1cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogaWYgKCByZXN1bHQubWFwICkge1xuICAgICAqICAgZnMud3JpdGVGaWxlU3luYyhyZXN1bHQub3B0cy50byArICcubWFwJywgcmVzdWx0Lm1hcC50b1N0cmluZygpKTtcbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBmb3IgQHtsaW5rIFJlc3VsdCNjc3N9IGNvbnRlbnQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHJlc3VsdCArICcnID09PSByZXN1bHQuY3NzXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGluZyBvZiB7QGxpbmsgUmVzdWx0I3Jvb3R9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFJlc3VsdCwgW3tcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3NzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2Yge0BsaW5rIFdhcm5pbmd9IGFuZCBhZGRzIGl0XG4gICAgICogdG8ge0BsaW5rIFJlc3VsdCNtZXNzYWdlc30uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAgICAgICAgLSB3YXJuaW5nIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdICAgICAgLSB3YXJuaW5nIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge05vZGV9ICAgb3B0cy5ub2RlICAgLSBDU1Mgbm9kZSB0aGF0IGNhdXNlZCB0aGUgd2FybmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLndvcmQgICAtIHdvcmQgaW4gQ1NTIHNvdXJjZSB0aGF0IGNhdXNlZCB0aGUgd2FybmluZ1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRzLmluZGV4ICAtIGluZGV4IGluIENTUyBub2RlIHN0cmluZyB0aGF0IGNhdXNlZFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSB3YXJuaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMucGx1Z2luIC0gbmFtZSBvZiB0aGUgcGx1Z2luIHRoYXQgY3JlYXRlZFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgd2FybmluZy4ge0BsaW5rIFJlc3VsdCN3YXJufSBmaWxsc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgcHJvcGVydHkgYXV0b21hdGljYWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1dhcm5pbmd9IGNyZWF0ZWQgd2FybmluZ1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd3YXJuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2Fybih0ZXh0KSB7XG4gICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIGlmICghb3B0cy5wbHVnaW4pIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFBsdWdpbiAmJiB0aGlzLmxhc3RQbHVnaW4ucG9zdGNzc1BsdWdpbikge1xuICAgICAgICAgIG9wdHMucGx1Z2luID0gdGhpcy5sYXN0UGx1Z2luLnBvc3Rjc3NQbHVnaW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHdhcm5pbmcgPSBuZXcgX3dhcm5pbmcyLmRlZmF1bHQodGV4dCwgb3B0cyk7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2god2FybmluZyk7XG5cbiAgICAgIHJldHVybiB3YXJuaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2FybmluZ3MgZnJvbSBwbHVnaW5zLiBGaWx0ZXJzIHtAbGluayBXYXJuaW5nfSBpbnN0YW5jZXNcbiAgICAgKiBmcm9tIHtAbGluayBSZXN1bHQjbWVzc2FnZXN9LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZXN1bHQud2FybmluZ3MoKS5mb3JFYWNoKHdhcm4gPT4ge1xuICAgICAqICAgY29uc29sZS53YXJuKHdhcm4udG9TdHJpbmcoKSk7XG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtXYXJuaW5nW119IHdhcm5pbmdzIGZyb20gcGx1Z2luc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd3YXJuaW5ncycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm5pbmdzKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpLnR5cGUgPT09ICd3YXJuaW5nJztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzIGZvciB0aGUge0BsaW5rIFJlc3VsdCNjc3N9IHByb3BlcnR5LlxuICAgICAqIFVzZSBpdCB3aXRoIHN5bnRheGVzIHRoYXQgZ2VuZXJhdGUgbm9uLUNTUyBvdXRwdXQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogcmVzdWx0LmNzcyA9PT0gcmVzdWx0LmNvbnRlbnQ7XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NvbnRlbnQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3NzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZXN1bHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc3VsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3MvcmVzdWx0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Rva2VuaXplID0gcmVxdWlyZSgnLi90b2tlbml6ZScpO1xuXG52YXIgX3Rva2VuaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rva2VuaXplKTtcblxudmFyIF9pbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQnKTtcblxudmFyIF9pbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnB1dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBISUdITElHSFRfVEhFTUUgPSB7XG4gICAgJ2JyYWNrZXRzJzogWzM2LCAzOV0sIC8vIGN5YW5cbiAgICAnc3RyaW5nJzogWzMxLCAzOV0sIC8vIHJlZFxuICAgICdhdC13b3JkJzogWzMxLCAzOV0sIC8vIHJlZFxuICAgICdjb21tZW50JzogWzkwLCAzOV0sIC8vIGdyYXlcbiAgICAneyc6IFszMiwgMzldLCAvLyBncmVlblxuICAgICd9JzogWzMyLCAzOV0sIC8vIGdyZWVuXG4gICAgJzonOiBbMSwgMjJdLCAvLyBib2xkXG4gICAgJzsnOiBbMSwgMjJdLCAvLyBib2xkXG4gICAgJygnOiBbMSwgMjJdLCAvLyBib2xkXG4gICAgJyknOiBbMSwgMjJdIC8vIGJvbGRcbn07XG5cbmZ1bmN0aW9uIGNvZGUoY29sb3IpIHtcbiAgICByZXR1cm4gJ1xceDFCWycgKyBjb2xvciArICdtJztcbn1cblxuZnVuY3Rpb24gdGVybWluYWxIaWdobGlnaHQoY3NzKSB7XG4gICAgdmFyIHRva2VucyA9ICgwLCBfdG9rZW5pemUyLmRlZmF1bHQpKG5ldyBfaW5wdXQyLmRlZmF1bHQoY3NzKSwgeyBpZ25vcmVFcnJvcnM6IHRydWUgfSk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB2YXIgY29sb3IgPSBISUdITElHSFRfVEhFTUVbdG9rZW5bMF1dO1xuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRva2VuWzFdLnNwbGl0KC9cXHI/XFxuLykubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvZGUoY29sb3JbMF0pICsgaSArIGNvZGUoY29sb3JbMV0pO1xuICAgICAgICAgICAgfSkuam9pbignXFxuJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godG9rZW5bMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdGVybWluYWxIaWdobGlnaHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGVkLWNvbXBvbmVudHMvbGliL3ZlbmRvci9wb3N0Y3NzL3Rlcm1pbmFsLWhpZ2hsaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBsdWdpbuKAmXMgd2FybmluZy4gSXQgY2FuIGJlIGNyZWF0ZWQgdXNpbmcge0BsaW5rIE5vZGUjd2Fybn0uXG4gKlxuICogQGV4YW1wbGVcbiAqIGlmICggZGVjbC5pbXBvcnRhbnQgKSB7XG4gKiAgICAgZGVjbC53YXJuKHJlc3VsdCwgJ0F2b2lkICFpbXBvcnRhbnQnLCB7IHdvcmQ6ICchaW1wb3J0YW50JyB9KTtcbiAqIH1cbiAqL1xudmFyIFdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0ICAgICAgICAtIHdhcm5pbmcgbWVzc2FnZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdICAgICAgLSB3YXJuaW5nIG9wdGlvbnNcbiAgICogQHBhcmFtIHtOb2RlfSAgIG9wdHMubm9kZSAgIC0gQ1NTIG5vZGUgdGhhdCBjYXVzZWQgdGhlIHdhcm5pbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMud29yZCAgIC0gd29yZCBpbiBDU1Mgc291cmNlIHRoYXQgY2F1c2VkIHRoZSB3YXJuaW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRzLmluZGV4ICAtIGluZGV4IGluIENTUyBub2RlIHN0cmluZyB0aGF0IGNhdXNlZFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgd2FybmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5wbHVnaW4gLSBuYW1lIG9mIHRoZSBwbHVnaW4gdGhhdCBjcmVhdGVkXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgd2FybmluZy4ge0BsaW5rIFJlc3VsdCN3YXJufSBmaWxsc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHByb3BlcnR5IGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBmdW5jdGlvbiBXYXJuaW5nKHRleHQpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2FybmluZyk7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IC0gVHlwZSB0byBmaWx0ZXIgd2FybmluZ3MgZnJvbVxuICAgICAqICAgICAgICAgICAgICAgICAgICB7QGxpbmsgUmVzdWx0I21lc3NhZ2VzfS4gQWx3YXlzIGVxdWFsXG4gICAgICogICAgICAgICAgICAgICAgICAgIHRvIGBcIndhcm5pbmdcImAuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IG5vbldhcm5pbmcgPSByZXN1bHQubWVzc2FnZXMuZmlsdGVyKGkgPT4gaS50eXBlICE9PSAnd2FybmluZycpXG4gICAgICovXG4gICAgdGhpcy50eXBlID0gJ3dhcm5pbmcnO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gLSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB3YXJuaW5nLnRleHQgLy89PiAnVHJ5IHRvIGF2b2lkICFpbXBvcnRhbnQnXG4gICAgICovXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcblxuICAgIGlmIChvcHRzLm5vZGUgJiYgb3B0cy5ub2RlLnNvdXJjZSkge1xuICAgICAgdmFyIHBvcyA9IG9wdHMubm9kZS5wb3NpdGlvbkJ5KG9wdHMpO1xuICAgICAgLyoqXG4gICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IC0gTGluZSBpbiB0aGUgaW5wdXQgZmlsZVxuICAgICAgICogICAgICAgICAgICAgICAgICAgIHdpdGggdGhpcyB3YXJuaW5n4oCZcyBzb3VyY2VcbiAgICAgICAqXG4gICAgICAgKiBAZXhhbXBsZVxuICAgICAgICogd2FybmluZy5saW5lIC8vPT4gNVxuICAgICAgICovXG4gICAgICB0aGlzLmxpbmUgPSBwb3MubGluZTtcbiAgICAgIC8qKlxuICAgICAgICogQG1lbWJlciB7bnVtYmVyfSAtIENvbHVtbiBpbiB0aGUgaW5wdXQgZmlsZVxuICAgICAgICogICAgICAgICAgICAgICAgICAgIHdpdGggdGhpcyB3YXJuaW5n4oCZcyBzb3VyY2UuXG4gICAgICAgKlxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIHdhcm5pbmcuY29sdW1uIC8vPT4gNlxuICAgICAgICovXG4gICAgICB0aGlzLmNvbHVtbiA9IHBvcy5jb2x1bW47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgb3B0IGluIG9wdHMpIHtcbiAgICAgIHRoaXNbb3B0XSA9IG9wdHNbb3B0XTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHdhcm5pbmcgcG9zaXRpb24gYW5kIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHdhcm5pbmcudG9TdHJpbmcoKSAvLz0+ICdwb3N0Y3NzLWxpbnQ6YS5jc3M6MTA6MTQ6IEF2b2lkICFpbXBvcnRhbnQnXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gd2FybmluZyBwb3NpdGlvbiBhbmQgbWVzc2FnZVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXYXJuaW5nLCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZXJyb3IodGhpcy50ZXh0LCB7XG4gICAgICAgICAgcGx1Z2luOiB0aGlzLnBsdWdpbixcbiAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICB3b3JkOiB0aGlzLndvcmRcbiAgICAgICAgfSkubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luICsgJzogJyArIHRoaXMudGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlcm9mIFdhcm5pbmcjXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBwbHVnaW4gLSBUaGUgbmFtZSBvZiB0aGUgcGx1Z2luIHRoYXQgY3JlYXRlZFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQgd2lsbCBmaWxsIHRoaXMgcHJvcGVydHkgYXV0b21hdGljYWxseS5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgd2FybmluZy4gV2hlbiB5b3UgY2FsbCB7QGxpbmsgTm9kZSN3YXJufVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB3YXJuaW5nLnBsdWdpbiAvLz0+ICdwb3N0Y3NzLWltcG9ydGFudCdcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJvZiBXYXJuaW5nI1xuICAgICAqIEBtZW1iZXIge05vZGV9IG5vZGUgLSBDb250YWlucyB0aGUgQ1NTIG5vZGUgdGhhdCBjYXVzZWQgdGhlIHdhcm5pbmcuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHdhcm5pbmcubm9kZS50b1N0cmluZygpIC8vPT4gJ2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50J1xuICAgICAqL1xuXG4gIH1dKTtcblxuICByZXR1cm4gV2FybmluZztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gV2FybmluZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL3Bvc3Rjc3Mvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTYiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N1cHBvcnRzLWNvbG9yL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgVGVzdGltb25pYWxJdGVtID0gKHt0ZXN0aW1vbmlhbH0pID0+IChcbiAgPFRlc3RpbW9uaWFsSXRlbUNvbnRhaW5lcj5cbiAgICAgIDxRdW90ZT5cbiAgICAgICAgXG4gICAgICA8L1F1b3RlPlxuICAgICAgPFBhdGllbnROYW1lPlxuICAgICAgIFxuICAgICAgPC9QYXRpZW50TmFtZT5cbiAgICAgIDxMb2NhdGlvbj5cbiAgICAgICAgXG4gICAgICA8L0xvY2F0aW9uPlxuICAgICAgXG4gIDwvVGVzdGltb25pYWxJdGVtQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbEl0ZW1cblxuY29uc3QgVGVzdGltb25pYWxJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblxuYFxuXG5jb25zdCBRdW90ZSA9IHN0eWxlZC5kaXZgXG5cbmBcblxuY29uc3QgUGF0aWVudE5hbWUgPSBzdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IExvY2F0aW9uID0gc3R5bGVkLmRpdmBcblxuYFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Rlc3RpbW9uaWFsSXRlbS5qcyJdLCJzb3VyY2VSb290IjoiIn0=