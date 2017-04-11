webpackHotUpdate(2,{

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _taggedTemplateLiteral2 = __webpack_require__(20);
	
	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);
	
	var _getPrototypeOf = __webpack_require__(129);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(130);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(131);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(132);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: ', ';\n  padding: 30px;\n  font-size: 1.15em;\n'], ['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: ', ';\n  padding: 30px;\n  font-size: 1.15em;\n']),
	    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    padding-left: 3px;\n    color: ', ';\n    ', '\n  }\n  &:hover{ \n    cursor: pointer \n  }\n'], ['\n  color: ', ';\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    padding-left: 3px;\n    color: ', ';\n    ', '\n  }\n  &:hover{ \n    cursor: pointer \n  }\n']),
	    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['display: none;'], ['display: none;']),
	    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-right: 60px;\n  color: ', ';\n  a{\n    text-decoration: none;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: ', ';\n    vertical-align: top;\n  }\n  ', '\n'], ['\n  margin-right: 60px;\n  color: ', ';\n  a{\n    text-decoration: none;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: ', ';\n    vertical-align: top;\n  }\n  ', '\n']),
	    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
	    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70px;\n'], ['\n  width: 70px;\n']),
	    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n'], ['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(21);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _Menu = __webpack_require__(166);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MediaSizes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./MediaSizes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _MediaSizes2 = _interopRequireDefault(_MediaSizes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavIcon = function NavIcon(props) {
	  return _react2.default.createElement(
	    'svg',
	    { x: '0px', y: '0px',
	      width: '26px', height: '26px', viewBox: '0 0 512 512', style: { fill: props.fill } },
	    _react2.default.createElement('rect', { x: '96', y: '241', width: '320', height: '32' }),
	    _react2.default.createElement('rect', { x: '96', y: '145', width: '320', height: '32' }),
	    _react2.default.createElement('rect', { x: '96', y: '337', width: '320', height: '32' })
	  );
	};
	
	var PhoneIcon = function PhoneIcon(props) {
	  return _react2.default.createElement(
	    'svg',
	    { x: '0px', y: '0px',
	      width: '20px', height: '20px', viewBox: '0 0 512 512', style: { fill: props.fill } },
	    _react2.default.createElement('path', { d: 'M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2 l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8 c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2 c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4 c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9 C442.3,370.8,431.5,351.6,415.9,335.5z' })
	  );
	};
	
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
	      menuDisplayed: false,
	      navTextColor: 'white'
	    }, _this.toggleMenu = function () {
	      _this.setState(function (state) {
	        return {
	          menuDisplayed: !state.menuDisplayed
	        };
	      });
	    }, _this.changeNavTextColor = function () {
	      var position = document.body.scrollTop;
	      //  console.log(position.scrollTop);
	      if (position < 490) {
	        _this.setState(function (state) {
	          return {
	            navTextColor: 'white'
	          };
	        });
	      } else {
	        _this.setState(function (state) {
	          return {
	            navTextColor: 'black'
	          };
	        });
	      }
	      console.log(_this.state.navTextColor);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Navbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('scroll', this.changeNavTextColor);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      windowremoveEventListener('scroll', this.changeNavTextColor);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          NavbarContainer,
	          {
	            navTextColor: this.state.navTextColor
	          },
	          _react2.default.createElement(
	            MenuButton,
	            {
	              onClick: this.toggleMenu,
	              navTextColor: this.state.navTextColor
	            },
	            _react2.default.createElement(NavIcon, { fill: this.state.navTextColor }),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Menu'
	            )
	          ),
	          _react2.default.createElement(
	            PhoneNumber,
	            { navTextColor: this.state.navTextColor },
	            _react2.default.createElement(PhoneIcon, {
	              fill: this.state.navTextColor
	            }),
	            _react2.default.createElement(
	              'a',
	              { href: 'tel:+1-914-843-1052' },
	              ' 914-843-1052'
	            )
	          )
	        ),
	        _react2.default.createElement(_Menu2.default, {
	          menuDisplayed: this.state.menuDisplayed,
	          toggleMenu: this.toggleMenu
	        }),
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
	
	
	var NavbarContainer = _styledComponents2.default.div(_templateObject, function (props) {
	  return props.navTextColor;
	});
	var MenuButton = _styledComponents2.default.div(_templateObject2, function (props) {
	  return props.navTextColor;
	}, function (props) {
	  return props.navTextColor;
	}, _MediaSizes2.default.tablet(_templateObject3));
	
	var PhoneNumber = _styledComponents2.default.div(_templateObject4, function (props) {
	  return props.navTextColor;
	}, function (props) {
	  return props.navTextColor;
	}, _MediaSizes2.default.tablet(_templateObject3));
	
	var Logo = _styledComponents2.default.div(_templateObject5);
	
	var LogoIcon = _styledComponents2.default.img(_templateObject6);
	
	var LogoText = _styledComponents2.default.h3(_templateObject7);
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZJY29uIiwicHJvcHMiLCJmaWxsIiwiUGhvbmVJY29uIiwiTmF2YmFyIiwic3RhdGUiLCJtZW51RGlzcGxheWVkIiwibmF2VGV4dENvbG9yIiwidG9nZ2xlTWVudSIsInNldFN0YXRlIiwiY2hhbmdlTmF2VGV4dENvbG9yIiwicG9zaXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd3JlbW92ZUV2ZW50TGlzdGVuZXIiLCJOYXZiYXJDb250YWluZXIiLCJkaXYiLCJNZW51QnV0dG9uIiwidGFibGV0IiwiUGhvbmVOdW1iZXIiLCJMb2dvIiwiTG9nb0ljb24iLCJpbWciLCJMb2dvVGV4dCIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBLE1BQUssR0FBRSxLQUFQLEVBQWEsR0FBRSxLQUFmO0FBQ0EsYUFBTSxNQUROLEVBQ2EsUUFBTyxNQURwQixFQUMyQixTQUFRLGFBRG5DLEVBQ2lELE9BQU8sRUFBQ0MsTUFBTUQsTUFBTUMsSUFBYixFQUR4RDtBQUVELDRDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEMsR0FGQztBQUdELDRDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEMsR0FIQztBQUlELDRDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEM7QUFKQyxHQURjO0FBQUEsQ0FBaEI7O0FB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QU8sMkJBQU9KLEdBQWQsa0JBQU47O0FBSUEsSUFBTUssV0FBVywyQkFBT0MsR0FBbEIsa0JBQU47O0FBSUEsSUFBTUMsV0FBVywyQkFBT0MsRUFBbEIsa0JBQU4iLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUuanMnXG5pbXBvcnQgbWVkaWEgZnJvbSAnLi9NZWRpYVNpemVzJ1xuXG5cbmNvbnN0IE5hdkljb24gPSAocHJvcHMpID0+IChcbiAgPHN2ZyB4PVwiMHB4XCIgeT1cIjBweFwiXG5cdCB3aWR0aD1cIjI2cHhcIiBoZWlnaHQ9XCIyNnB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgc3R5bGU9e3tmaWxsOiBwcm9wcy5maWxsfX0+XG5cdDxyZWN0IHg9XCI5NlwiIHk9XCIyNDFcIiB3aWR0aD1cIjMyMFwiIGhlaWdodD1cIjMyXCIvPlxuXHQ8cmVjdCB4PVwiOTZcIiB5PVwiMTQ1XCIgd2lkdGg9XCIzMjBcIiBoZWlnaHQ9XCIzMlwiLz5cblx0PHJlY3QgeD1cIjk2XCIgeT1cIjMzN1wiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMzJcIi8+XG48L3N2Zz5cbilcblxuY29uc3QgUGhvbmVJY29uID0gKHByb3BzKSA9PiAoXG4gIDxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIlxuXHQgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPXt7ZmlsbDogcHJvcHMuZmlsbH19PlxuICAgIDxwYXRoIGQ9XCJNNDE1LjksMzM1LjVjLTE0LjYtMTUtNTYuMS00My4xLTgzLjMtNDMuMWMtNi4zLDAtMTEuOCwxLjQtMTYuMyw0LjNjLTEzLjMsOC41LTIzLjksMTUuMS0yOSwxNS4xYy0yLjgsMC01LjgtMi41LTEyLjQtOC4yXG4gICAgICBsLTEuMS0xYy0xOC4zLTE1LjktMjIuMi0yMC0yOS4zLTI3LjRsLTEuOC0xLjljLTEuMy0xLjMtMi40LTIuNS0zLjUtMy42Yy02LjItNi40LTEwLjctMTEtMjYuNi0yOWwtMC43LTAuOFxuICAgICAgYy03LjYtOC42LTEyLjYtMTQuMi0xMi45LTE4LjNjLTAuMy00LDMuMi0xMC41LDEyLjEtMjIuNmMxMC44LTE0LjYsMTEuMi0zMi42LDEuMy01My41Yy03LjktMTYuNS0yMC44LTMyLjMtMzIuMi00Ni4ybC0xLTEuMlxuICAgICAgYy05LjgtMTItMjEuMi0xOC0zMy45LTE4Yy0xNC4xLDAtMjUuOCw3LjYtMzIsMTEuNmMtMC41LDAuMy0xLDAuNy0xLjUsMWMtMTMuOSw4LjgtMjQsMjAuOS0yNy44LDMzLjJjLTUuNywxOC41LTkuNSw0Mi41LDE3LjgsOTIuNFxuICAgICAgYzIzLjYsNDMuMiw0NSw3Mi4yLDc5LDEwNy4xYzMyLDMyLjgsNDYuMiw0My40LDc4LDY2LjRjMzUuNCwyNS42LDY5LjQsNDAuMyw5My4yLDQwLjNjMjIuMSwwLDM5LjUsMCw2NC4zLTI5LjlcbiAgICAgIEM0NDIuMywzNzAuOCw0MzEuNSwzNTEuNiw0MTUuOSwzMzUuNXpcIi8+XG4gIDwvc3ZnPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGFuZ2VOYXZUZXh0Q29sb3IpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93cmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGFuZ2VOYXZUZXh0Q29sb3IpXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBtZW51RGlzcGxheWVkOiBmYWxzZSxcbiAgICBuYXZUZXh0Q29sb3I6ICd3aGl0ZSdcbiAgfVxuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgbWVudURpc3BsYXllZDogIXN0YXRlLm1lbnVEaXNwbGF5ZWRcbiAgICB9KSlcbiAgfVxuXG4gIGNoYW5nZU5hdlRleHRDb2xvciA9ICgpID0+IHtcbiAgIGxldCBwb3NpdGlvbiA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gIC8vICBjb25zb2xlLmxvZyhwb3NpdGlvbi5zY3JvbGxUb3ApO1xuICAgaWYocG9zaXRpb24gPCA0OTApe1xuICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcbiAgICAgICAgbmF2VGV4dENvbG9yOiAnd2hpdGUnXG4gICAgIH0pKVxuICAgfWVsc2V7XG4gICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xuICAgICAgICBuYXZUZXh0Q29sb3I6ICdibGFjaycsXG4gICAgIH0pKVxuICAgfVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5uYXZUZXh0Q29sb3IpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyQ29udGFpbmVyIFxuICAgICAgICAgIG5hdlRleHRDb2xvcj17dGhpcy5zdGF0ZS5uYXZUZXh0Q29sb3J9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUJ1dHRvbiBcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX1cbiAgICAgICAgICAgIG5hdlRleHRDb2xvcj17dGhpcy5zdGF0ZS5uYXZUZXh0Q29sb3J9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hdkljb24gZmlsbD17dGhpcy5zdGF0ZS5uYXZUZXh0Q29sb3J9Lz5cbiAgICAgICAgICAgIDxwPk1lbnU8L3A+XG4gICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgIDxQaG9uZU51bWJlciBuYXZUZXh0Q29sb3I9e3RoaXMuc3RhdGUubmF2VGV4dENvbG9yfT5cbiAgICAgICAgICAgIDxQaG9uZUljb24gXG4gICAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUubmF2VGV4dENvbG9yfVxuICAgICAgICAgICAgLz48YSBocmVmPVwidGVsOisxLTkxNC04NDMtMTA1MlwiPiA5MTQtODQzLTEwNTI8L2E+XG4gICAgICAgICAgPC9QaG9uZU51bWJlcj5cbiAgICAgICAgPC9OYXZiYXJDb250YWluZXI+XG4gICAgICAgICAgPE1lbnUgXG4gICAgICAgICAgICBtZW51RGlzcGxheWVkPXt0aGlzLnN0YXRlLm1lbnVEaXNwbGF5ZWR9IFxuICAgICAgICAgICAgdG9nZ2xlTWVudT17dGhpcy50b2dnbGVNZW51fVxuICAgICAgICAgIC8+XG4gICAgICAgIDxMb2dvPlxuICAgICAgICAgIDxMb2dvSWNvbiBzcmM9XCIuLi9zdGF0aWMvbG9nby5wbmdcIi8+XG4gICAgICAgICAgPExvZ29UZXh0PkppbmcgSmlhbmcgQWN1cHVuY3R1cmUgJiBIZXJiIENsaW5pYzwvTG9nb1RleHQ+XG4gICAgICAgIDwvTG9nbz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbmNvbnN0IE5hdmJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubmF2VGV4dENvbG9yfTtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG5gXG5jb25zdCBNZW51QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubmF2VGV4dENvbG9yfTtcbiAgcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgbWFyZ2luOiAzcHggMCAwO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLm5hdlRleHRDb2xvcn07XG4gICAgJHttZWRpYS50YWJsZXRgZGlzcGxheTogbm9uZTtgfVxuICB9XG4gICY6aG92ZXJ7IFxuICAgIGN1cnNvcjogcG9pbnRlciBcbiAgfVxuYFxuXG5jb25zdCBQaG9uZU51bWJlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubmF2VGV4dENvbG9yfTtcbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIG1hcmdpbjogM3B4IDAgMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5uYXZUZXh0Q29sb3J9O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgJHttZWRpYS50YWJsZXRgZGlzcGxheTogbm9uZTtgfVxuYFxuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBMb2dvSWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA3MHB4O1xuYFxuXG5jb25zdCBMb2dvVGV4dCA9IHN0eWxlZC5oM2BcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAuOTdlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gIG1hcmdpbjogM3B4IDAgMDtcbiAgY29sb3I6ICNmZmY7XG5gIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uYXZiYXIuanM/Y2I2NSoiXSwibmFtZXMiOlsiTmF2SWNvbiIsInByb3BzIiwiZmlsbCIsIlBob25lSWNvbiIsIk5hdmJhciIsInN0YXRlIiwibWVudURpc3BsYXllZCIsIm5hdlRleHRDb2xvciIsInRvZ2dsZU1lbnUiLCJzZXRTdGF0ZSIsImNoYW5nZU5hdlRleHRDb2xvciIsInBvc2l0aW9uIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3dyZW1vdmVFdmVudExpc3RlbmVyIiwiTmF2YmFyQ29udGFpbmVyIiwiZGl2IiwiTWVudUJ1dHRvbiIsInRhYmxldCIsIlBob25lTnVtYmVyIiwiTG9nbyIsIkxvZ29JY29uIiwiaW1nIiwiTG9nb1RleHQiLCJoMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFVBQ2Q7QUFBQTtBQUFBLE9BQUssR0FBRSxLQUFQLEVBQWEsR0FBRSxLQUFmO0FBQ0EsY0FBTSxNQUROLEVBQ2EsUUFBTyxNQURwQixFQUMyQixTQUFRLGFBRG5DLEVBQ2lELE9BQU8sRUFBQ0MsTUFBTUQsTUFBTUMsSUFBYixFQUR4RDtBQUVELDZDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEMsR0FGQztBQUdELDZDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEMsR0FIQztBQUlELDZDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEM7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TUFYSixtQkFBTjs7QUFjQSxLQUFNRSxPQUFPLDJCQUFPSixHQUFkLGtCQUFOOztBQUlBLEtBQU1LLFdBQVcsMkJBQU9DLEdBQWxCLGtCQUFOOztBQUlBLEtBQU1DLFdBQVcsMkJBQU9DLEVBQWxCLGtCQUFOIiwiZmlsZSI6IjIuYjAzNzhiYzc1YTdhZDQzZjMxMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudS5qcydcbmltcG9ydCBtZWRpYSBmcm9tICcuL01lZGlhU2l6ZXMnXG5cblxuY29uc3QgTmF2SWNvbiA9IChwcm9wcykgPT4gKFxuICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCJcblx0IHdpZHRoPVwiMjZweFwiIGhlaWdodD1cIjI2cHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT17e2ZpbGw6IHByb3BzLmZpbGx9fT5cblx0PHJlY3QgeD1cIjk2XCIgeT1cIjI0MVwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMzJcIi8+XG5cdDxyZWN0IHg9XCI5NlwiIHk9XCIxNDVcIiB3aWR0aD1cIjMyMFwiIGhlaWdodD1cIjMyXCIvPlxuXHQ8cmVjdCB4PVwiOTZcIiB5PVwiMzM3XCIgd2lkdGg9XCIzMjBcIiBoZWlnaHQ9XCIzMlwiLz5cbjwvc3ZnPlxuKVxuXG5jb25zdCBQaG9uZUljb24gPSAocHJvcHMpID0+IChcbiAgPHN2ZyB4PVwiMHB4XCIgeT1cIjBweFwiXG5cdCB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgc3R5bGU9e3tmaWxsOiBwcm9wcy5maWxsfX0+XG4gICAgPHBhdGggZD1cIk00MTUuOSwzMzUuNWMtMTQuNi0xNS01Ni4xLTQzLjEtODMuMy00My4xYy02LjMsMC0xMS44LDEuNC0xNi4zLDQuM2MtMTMuMyw4LjUtMjMuOSwxNS4xLTI5LDE1LjFjLTIuOCwwLTUuOC0yLjUtMTIuNC04LjJcbiAgICAgIGwtMS4xLTFjLTE4LjMtMTUuOS0yMi4yLTIwLTI5LjMtMjcuNGwtMS44LTEuOWMtMS4zLTEuMy0yLjQtMi41LTMuNS0zLjZjLTYuMi02LjQtMTAuNy0xMS0yNi42LTI5bC0wLjctMC44XG4gICAgICBjLTcuNi04LjYtMTIuNi0xNC4yLTEyLjktMTguM2MtMC4zLTQsMy4yLTEwLjUsMTIuMS0yMi42YzEwLjgtMTQuNiwxMS4yLTMyLjYsMS4zLTUzLjVjLTcuOS0xNi41LTIwLjgtMzIuMy0zMi4yLTQ2LjJsLTEtMS4yXG4gICAgICBjLTkuOC0xMi0yMS4yLTE4LTMzLjktMThjLTE0LjEsMC0yNS44LDcuNi0zMiwxMS42Yy0wLjUsMC4zLTEsMC43LTEuNSwxYy0xMy45LDguOC0yNCwyMC45LTI3LjgsMzMuMmMtNS43LDE4LjUtOS41LDQyLjUsMTcuOCw5Mi40XG4gICAgICBjMjMuNiw0My4yLDQ1LDcyLjIsNzksMTA3LjFjMzIsMzIuOCw0Ni4yLDQzLjQsNzgsNjYuNGMzNS40LDI1LjYsNjkuNCw0MC4zLDkzLjIsNDAuM2MyMi4xLDAsMzkuNSwwLDY0LjMtMjkuOVxuICAgICAgQzQ0Mi4zLDM3MC44LDQzMS41LDM1MS42LDQxNS45LDMzNS41elwiLz5cbiAgPC9zdmc+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoYW5nZU5hdlRleHRDb2xvcilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3dyZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoYW5nZU5hdlRleHRDb2xvcilcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIG1lbnVEaXNwbGF5ZWQ6IGZhbHNlLFxuICAgIG5hdlRleHRDb2xvcjogJ3doaXRlJ1xuICB9XG5cbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBtZW51RGlzcGxheWVkOiAhc3RhdGUubWVudURpc3BsYXllZFxuICAgIH0pKVxuICB9XG5cbiAgY2hhbmdlTmF2VGV4dENvbG9yID0gKCkgPT4ge1xuICAgbGV0IHBvc2l0aW9uID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgLy8gIGNvbnNvbGUubG9nKHBvc2l0aW9uLnNjcm9sbFRvcCk7XG4gICBpZihwb3NpdGlvbiA8IDQ5MCl7XG4gICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xuICAgICAgICBuYXZUZXh0Q29sb3I6ICd3aGl0ZSdcbiAgICAgfSkpXG4gICB9ZWxzZXtcbiAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XG4gICAgICAgIG5hdlRleHRDb2xvcjogJ2JsYWNrJyxcbiAgICAgfSkpXG4gICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hdlRleHRDb2xvcilcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXJDb250YWluZXIgXG4gICAgICAgICAgbmF2VGV4dENvbG9yPXt0aGlzLnN0YXRlLm5hdlRleHRDb2xvcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51QnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNZW51fVxuICAgICAgICAgICAgbmF2VGV4dENvbG9yPXt0aGlzLnN0YXRlLm5hdlRleHRDb2xvcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TmF2SWNvbiBmaWxsPXt0aGlzLnN0YXRlLm5hdlRleHRDb2xvcn0vPlxuICAgICAgICAgICAgPHA+TWVudTwvcD5cbiAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgPFBob25lTnVtYmVyIG5hdlRleHRDb2xvcj17dGhpcy5zdGF0ZS5uYXZUZXh0Q29sb3J9PlxuICAgICAgICAgICAgPFBob25lSWNvbiBcbiAgICAgICAgICAgICAgZmlsbD17dGhpcy5zdGF0ZS5uYXZUZXh0Q29sb3J9XG4gICAgICAgICAgICAvPjxhIGhyZWY9XCJ0ZWw6KzEtOTE0LTg0My0xMDUyXCI+IDkxNC04NDMtMTA1MjwvYT5cbiAgICAgICAgICA8L1Bob25lTnVtYmVyPlxuICAgICAgICA8L05hdmJhckNvbnRhaW5lcj5cbiAgICAgICAgICA8TWVudSBcbiAgICAgICAgICAgIG1lbnVEaXNwbGF5ZWQ9e3RoaXMuc3RhdGUubWVudURpc3BsYXllZH0gXG4gICAgICAgICAgICB0b2dnbGVNZW51PXt0aGlzLnRvZ2dsZU1lbnV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPExvZ28+XG4gICAgICAgICAgPExvZ29JY29uIHNyYz1cIi4uL3N0YXRpYy9sb2dvLnBuZ1wiLz5cbiAgICAgICAgICA8TG9nb1RleHQ+SmluZyBKaWFuZyBBY3VwdW5jdHVyZSAmIEhlcmIgQ2xpbmljPC9Mb2dvVGV4dD5cbiAgICAgICAgPC9Mb2dvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuY29uc3QgTmF2YmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5uYXZUZXh0Q29sb3J9O1xuICBwYWRkaW5nOiAzMHB4O1xuICBmb250LXNpemU6IDEuMTVlbTtcbmBcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5uYXZUZXh0Q29sb3J9O1xuICBwe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICBtYXJnaW46IDNweCAwIDA7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubmF2VGV4dENvbG9yfTtcbiAgICAke21lZGlhLnRhYmxldGBkaXNwbGF5OiBub25lO2B9XG4gIH1cbiAgJjpob3ZlcnsgXG4gICAgY3Vyc29yOiBwb2ludGVyIFxuICB9XG5gXG5cbmNvbnN0IFBob25lTnVtYmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5uYXZUZXh0Q29sb3J9O1xuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgbWFyZ2luOiAzcHggMCAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLm5hdlRleHRDb2xvcn07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICAke21lZGlhLnRhYmxldGBkaXNwbGF5OiBub25lO2B9XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IExvZ29JY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDcwcHg7XG5gXG5cbmNvbnN0IExvZ29UZXh0ID0gc3R5bGVkLmgzYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IC45N2VtO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgbWFyZ2luOiAzcHggMCAwO1xuICBjb2xvcjogI2ZmZjtcbmBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9uYXZiYXIuanMiXSwic291cmNlUm9vdCI6IiJ9