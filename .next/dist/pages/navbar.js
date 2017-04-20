'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Menu = require('./Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

var _mediaQuery = require('../helpers/mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/navbar.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\tcolor: ', ';\n  padding: 0px;\n  font-size: 1.15em;\n'], ['\n  position: fixed;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\tcolor: ', ';\n  padding: 0px;\n  font-size: 1.15em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  margin: 40px;\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    padding-left: 3px;\n    color: ', ';\n    ', '\n  }\n  &:hover{ \n    cursor: pointer \n  }\n  ', '\n'], ['\n  color: ', ';\n  margin: 40px;\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    padding-left: 3px;\n    color: ', ';\n    ', '\n  }\n  &:hover{ \n    cursor: pointer \n  }\n  ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['display: none;'], ['display: none;']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin: 20px'], ['margin: 20px']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 40px;\n  color: ', ';\n  a{\n    text-decoration: none;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: ', ';\n    vertical-align: top;\n  }\n  ', '\n'], ['\n  margin: 40px;\n  color: ', ';\n  a{\n    text-decoration: none;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: ', ';\n    vertical-align: top;\n  }\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  padding-top: 30px;\n  ', '\n'], ['\n  text-align: center;\n  padding-top: 30px;\n  ', '\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n    padding-top: 20px;\n    margin: 10px auto 0;\n    width: 200px;\n  '], ['\n    padding-top: 20px;\n    margin: 10px auto 0;\n    width: 200px;\n  ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70px;\n  ', '\n'], ['\n  width: 70px;\n  ', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['width: 60px;'], ['width: 60px;']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n  ', '\n'], ['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n  ', '\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    // font-size: .9em;\n    line-height: 1.5;\n  '], ['\n    // font-size: .9em;\n    line-height: 1.5;\n  ']);

var NavIcon = function NavIcon(props) {
  return _react2.default.createElement('svg', { x: '0px', y: '0px',
    width: '26px', height: '26px', viewBox: '0 0 512 512', style: { fill: props.fill }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('rect', { x: '96', y: '241', width: '320', height: '32', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('rect', { x: '96', y: '145', width: '320', height: '32', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('rect', { x: '96', y: '337', width: '320', height: '32', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

var PhoneIcon = function PhoneIcon(props) {
  return _react2.default.createElement('svg', { x: '0px', y: '0px',
    width: '20px', height: '20px', viewBox: '0 0 512 512', style: { fill: props.fill }, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('path', { d: 'M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2 l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8 c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2 c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4 c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9 C442.3,370.8,431.5,351.6,415.9,335.5z', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
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
      window.removeEventListener('scroll', this.changeNavTextColor);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(NavbarContainer, {
        navTextColor: this.state.navTextColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(MenuButton, {
        onClick: this.toggleMenu,
        navTextColor: this.state.navTextColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(NavIcon, { fill: this.state.navTextColor, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Menu')), _react2.default.createElement(PhoneNumber, { navTextColor: this.state.navTextColor, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(PhoneIcon, {
        fill: this.state.navTextColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement('a', { href: 'tel:+1-914-843-1052', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, ' 914-843-1052'))), _react2.default.createElement(_Menu2.default, {
        menuDisplayed: this.state.menuDisplayed,
        toggleMenu: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(LogoIcon, { src: '../static/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement(LogoText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Jing Jiang Acupuncture & Herb Clinic')));
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
}, _mediaQuery2.default.tablet(_templateObject3), _mediaQuery2.default.mobile(_templateObject4));

var PhoneNumber = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.navTextColor;
}, function (props) {
  return props.navTextColor;
}, _mediaQuery2.default.tablet(_templateObject3));

var Logo = _styledComponents2.default.div(_templateObject6, _mediaQuery2.default.mobile(_templateObject7));

var LogoIcon = _styledComponents2.default.img(_templateObject8, _mediaQuery2.default.mobile(_templateObject9));

var LogoText = _styledComponents2.default.h3(_templateObject10, _mediaQuery2.default.mobile(_templateObject11));