webpackHotUpdate(11,{

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _taggedTemplateLiteral2 = __webpack_require__(20);
	
	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);
	
	var _getPrototypeOf = __webpack_require__(133);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(138);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(140);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(139);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: #fff;\n  padding: 20px;\n  font-size: 1.15em;\n'], ['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: #fff;\n  padding: 20px;\n  font-size: 1.15em;\n']),
	    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  &:hover{ cursor: pointer}\n'], ['\n  &:hover{ cursor: pointer}\n']),
	    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
	    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70px;\n'], ['\n  width: 70px;\n']),
	    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n'], ['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(21);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _MenuPopover = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./MenuPopover.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _MenuPopover2 = _interopRequireDefault(_MenuPopover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navbar = function (_Component) {
	  (0, _inherits3.default)(Navbar, _Component);
	
	  function Navbar() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Navbar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      popoverDisplayed: false
	    }, _this.togglePopover = function (e) {
	      _this.state.popoverDisplayed ? _this.setState({
	        popoverDisplayed: false
	      }) : _this.setState({
	        popoverDisplayed: true
	      });
	      console.log(_this.state.popoverDisplayed);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Navbar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          NavbarContainer,
	          null,
	          _react2.default.createElement(
	            MenuButton,
	            {
	              onClick: function onClick(e) {
	                return _this2.togglePopover();
	              }
	            },
	            _react2.default.createElement('i', { className: 'fa fa-bars' }),
	            _react2.default.createElement(
	              'span',
	              { id: 'menu-button-text' },
	              ' Menu'
	            )
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: 'tel:+1-914-843-1052' },
	            _react2.default.createElement(
	              'div',
	              { className: 'about' },
	              _react2.default.createElement('i', { className: 'fa fa-phone' }),
	              ' 914-843-1052'
	            )
	          )
	        ),
	        _react2.default.createElement(_MenuPopover2.default, { displayed: this.state.popoverDisplayed }),
	        _react2.default.createElement(
	          Logo,
	          null,
	          _react2.default.createElement(LogoIcon, { src: '../static/logo.png' }),
	          _react2.default.createElement(
	            LogoText,
	            null,
	            'Jing Jiang Acupuncture & Herb Clinic'
	          )
	        )
	      );
	    }
	  }]);
	  return Navbar;
	}(_react.Component);
	
	exports.default = Navbar;
	
	
	var NavbarContainer = _styledComponents2.default.div(_templateObject);
	var MenuButton = _styledComponents2.default.div(_templateObject2);
	
	var Logo = _styledComponents2.default.div(_templateObject3);
	
	var LogoIcon = _styledComponents2.default.img(_templateObject4);
	
	var LogoText = _styledComponents2.default.h3(_templateObject5);
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJzdGF0ZSIsInBvcG92ZXJEaXNwbGF5ZWQiLCJ0b2dnbGVQb3BvdmVyIiwiZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIk5hdmJhckNvbnRhaW5lciIsImRpdiIsIk1lbnVCdXR0b24iLCJMb2dvIiwiTG9nb0ljb24iLCJpbWciLCJMb2dvVGV4dCIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxLLEdBQVE7QUFDTkMsd0JBQWtCO0FBRFosSyxRQUlSQyxhLEdBQWdCLFVBQUNDLENBQUQsRUFBTztBQUNyQixZQUFLSCxLQUFMLENBQVdDLGdCQUFYLEdBQ0UsTUFBS0csUUFBTCxDQUFjO0FBQ1pILDBCQUFrQjtBQUROLE9BQWQsQ0FERixHQUtFLE1BQUtHLFFBQUwsQ0FBYztBQUNaSCwwQkFBa0I7QUFETixPQUFkLENBTEY7QUFRRUksY0FBUUMsR0FBUixDQUFZLE1BQUtOLEtBQUwsQ0FBV0MsZ0JBQXZCO0FBQ0gsSzs7Ozs7NkJBQ087QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFLHVCQUFTLGlCQUFDRSxDQUFEO0FBQUEsdUJBQU8sT0FBS0QsYUFBTCxFQUFQO0FBQUE7QUFEWDtBQUdFLGlEQUFHLFdBQVUsWUFBYixHQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFNLElBQUcsa0JBQVQ7QUFBQTtBQUFBO0FBSkYsV0FERjtBQU9FO0FBQUE7QUFBQSxjQUFHLE1BQUsscUJBQVI7QUFBOEI7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUF1QixtREFBRyxXQUFVLGFBQWIsR0FBdkI7QUFBQTtBQUFBO0FBQTlCO0FBUEYsU0FERjtBQVVJLCtEQUFhLFdBQVcsS0FBS0YsS0FBTCxDQUFXQyxnQkFBbkMsR0FWSjtBQVdFO0FBQUMsY0FBRDtBQUFBO0FBQ0Usd0NBQUMsUUFBRCxJQUFVLEtBQUksb0JBQWQsR0FERjtBQUVFO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQVhGLE9BREY7QUFrQkQ7Ozs7O2tCQW5Da0JGLE07OztBQXNDckIsSUFBTVEsa0JBQWtCLDJCQUFPQyxHQUF6QixpQkFBTjtBQVVBLElBQU1DLGFBQWEsMkJBQU9ELEdBQXBCLGtCQUFOOztBQUlBLElBQU1FLE9BQU8sMkJBQU9GLEdBQWQsa0JBQU47O0FBSUEsSUFBTUcsV0FBVywyQkFBT0MsR0FBbEIsa0JBQU47O0FBSUEsSUFBTUMsV0FBVywyQkFBT0MsRUFBbEIsa0JBQU4iLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTWVudVBvcG92ZXIgZnJvbSAnLi9NZW51UG9wb3Zlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICBwb3BvdmVyRGlzcGxheWVkOiBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlUG9wb3ZlciA9IChlKSA9PiB7XG4gICAgdGhpcy5zdGF0ZS5wb3BvdmVyRGlzcGxheWVkID8gXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wb3ZlckRpc3BsYXllZDogZmFsc2VcbiAgICAgIH0pXG4gICAgOiBcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3BvdmVyRGlzcGxheWVkOiB0cnVlXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5wb3BvdmVyRGlzcGxheWVkKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXJDb250YWluZXI+XG4gICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZVBvcG92ZXIoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJtZW51LWJ1dHRvbi10ZXh0XCI+IE1lbnU8L3NwYW4+XG4gICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzEtOTE0LTg0My0xMDUyXCI+PGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCI+PC9pPiA5MTQtODQzLTEwNTI8L2Rpdj48L2E+XG4gICAgICAgIDwvTmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgIDxNZW51UG9wb3ZlciBkaXNwbGF5ZWQ9e3RoaXMuc3RhdGUucG9wb3ZlckRpc3BsYXllZH0gLz5cbiAgICAgICAgPExvZ28+XG4gICAgICAgICAgPExvZ29JY29uIHNyYz1cIi4uL3N0YXRpYy9sb2dvLnBuZ1wiLz5cbiAgICAgICAgICA8TG9nb1RleHQ+SmluZyBKaWFuZyBBY3VwdW5jdHVyZSAmIEhlcmIgQ2xpbmljPC9Mb2dvVGV4dD5cbiAgICAgICAgPC9Mb2dvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IE5hdmJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuYFxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gICY6aG92ZXJ7IGN1cnNvcjogcG9pbnRlcn1cbmBcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgTG9nb0ljb24gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNzBweDtcbmBcblxuY29uc3QgTG9nb1RleHQgPSBzdHlsZWQuaDNgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogLjk3ZW07XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBtYXJnaW46IDNweCAwIDA7XG4gIGNvbG9yOiAjZmZmO1xuYCJdfQ==
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/navbar"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/navbar") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uYXZiYXIuanM/Y2I2NSoqIl0sIm5hbWVzIjpbIk5hdmJhciIsInN0YXRlIiwicG9wb3ZlckRpc3BsYXllZCIsInRvZ2dsZVBvcG92ZXIiLCJlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiTmF2YmFyQ29udGFpbmVyIiwiZGl2IiwiTWVudUJ1dHRvbiIsIkxvZ28iLCJMb2dvSWNvbiIsImltZyIsIkxvZ29UZXh0IiwiaDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7S0FFcUJBLE07Ozs7Ozs7Ozs7Ozs7OzZNQUNuQkMsSyxHQUFRO0FBQ05DLHlCQUFrQjtBQURaLE0sUUFJUkMsYSxHQUFnQixVQUFDQyxDQUFELEVBQU87QUFDckIsYUFBS0gsS0FBTCxDQUFXQyxnQkFBWCxHQUNFLE1BQUtHLFFBQUwsQ0FBYztBQUNaSCwyQkFBa0I7QUFETixRQUFkLENBREYsR0FLRSxNQUFLRyxRQUFMLENBQWM7QUFDWkgsMkJBQWtCO0FBRE4sUUFBZCxDQUxGO0FBUUVJLGVBQVFDLEdBQVIsQ0FBWSxNQUFLTixLQUFMLENBQVdDLGdCQUF2QjtBQUNILE07Ozs7OzhCQUNPO0FBQUE7O0FBQ04sY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLDBCQUFEO0FBQUE7QUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFDRSx3QkFBUyxpQkFBQ0UsQ0FBRDtBQUFBLHdCQUFPLE9BQUtELGFBQUwsRUFBUDtBQUFBO0FBRFg7QUFHRSxrREFBRyxXQUFVLFlBQWIsR0FIRjtBQUlFO0FBQUE7QUFBQSxpQkFBTSxJQUFHLGtCQUFUO0FBQUE7QUFBQTtBQUpGLFlBREY7QUFPRTtBQUFBO0FBQUEsZUFBRyxNQUFLLHFCQUFSO0FBQThCO0FBQUE7QUFBQSxpQkFBSyxXQUFVLE9BQWY7QUFBdUIsb0RBQUcsV0FBVSxhQUFiLEdBQXZCO0FBQUE7QUFBQTtBQUE5QjtBQVBGLFVBREY7QUFVSSxnRUFBYSxXQUFXLEtBQUtGLEtBQUwsQ0FBV0MsZ0JBQW5DLEdBVko7QUFXRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLHlDQUFDLFFBQUQsSUFBVSxLQUFJLG9CQUFkLEdBREY7QUFFRTtBQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFYRixRQURGO0FBa0JEOzs7OzttQkFuQ2tCRixNOzs7QUFzQ3JCLEtBQU1RLGtCQUFrQiwyQkFBT0MsR0FBekIsaUJBQU47QUFVQSxLQUFNQyxhQUFhLDJCQUFPRCxHQUFwQixrQkFBTjs7QUFJQSxLQUFNRSxPQUFPLDJCQUFPRixHQUFkLGtCQUFOOztBQUlBLEtBQU1HLFdBQVcsMkJBQU9DLEdBQWxCLGtCQUFOOztBQUlBLEtBQU1DLFdBQVcsMkJBQU9DLEVBQWxCLGtCQUFOIiwiZmlsZSI6IjExLmUwNjFmZjllYmQ5ZmFhMGI4NjJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTWVudVBvcG92ZXIgZnJvbSAnLi9NZW51UG9wb3Zlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICBwb3BvdmVyRGlzcGxheWVkOiBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlUG9wb3ZlciA9IChlKSA9PiB7XG4gICAgdGhpcy5zdGF0ZS5wb3BvdmVyRGlzcGxheWVkID8gXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wb3ZlckRpc3BsYXllZDogZmFsc2VcbiAgICAgIH0pXG4gICAgOiBcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3BvdmVyRGlzcGxheWVkOiB0cnVlXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5wb3BvdmVyRGlzcGxheWVkKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXJDb250YWluZXI+XG4gICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZVBvcG92ZXIoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJtZW51LWJ1dHRvbi10ZXh0XCI+IE1lbnU8L3NwYW4+XG4gICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzEtOTE0LTg0My0xMDUyXCI+PGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCI+PC9pPiA5MTQtODQzLTEwNTI8L2Rpdj48L2E+XG4gICAgICAgIDwvTmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgIDxNZW51UG9wb3ZlciBkaXNwbGF5ZWQ9e3RoaXMuc3RhdGUucG9wb3ZlckRpc3BsYXllZH0gLz5cbiAgICAgICAgPExvZ28+XG4gICAgICAgICAgPExvZ29JY29uIHNyYz1cIi4uL3N0YXRpYy9sb2dvLnBuZ1wiLz5cbiAgICAgICAgICA8TG9nb1RleHQ+SmluZyBKaWFuZyBBY3VwdW5jdHVyZSAmIEhlcmIgQ2xpbmljPC9Mb2dvVGV4dD5cbiAgICAgICAgPC9Mb2dvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IE5hdmJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuYFxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gICY6aG92ZXJ7IGN1cnNvcjogcG9pbnRlcn1cbmBcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgTG9nb0ljb24gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNzBweDtcbmBcblxuY29uc3QgTG9nb1RleHQgPSBzdHlsZWQuaDNgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogLjk3ZW07XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBtYXJnaW46IDNweCAwIDA7XG4gIGNvbG9yOiAjZmZmO1xuYFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25hdmJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=