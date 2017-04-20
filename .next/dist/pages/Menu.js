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

var _mediaQuery = require('../helpers/mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/Menu.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  visibility: ', '\n  position: fixed;\n  top: 0;\n  height: 100vh;\n\tleft: -300px;\n\tz-index: 9999;\n  width: 300px;\n  left: ', '\n  padding-top: 20px;\n  background-color: #fff;\n\tcolor: black;\n  ', '\n'], ['\n  visibility: ', '\n  position: fixed;\n  top: 0;\n  height: 100vh;\n\tleft: -300px;\n\tz-index: 9999;\n  width: 300px;\n  left: ', '\n  padding-top: 20px;\n  background-color: #fff;\n\tcolor: black;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width: 100%;\n    height: 100vh;\n  '], ['\n    width: 100%;\n    height: 100vh;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 0;\n  list-style-type: none;\n  margin-top: 26px;\n  a{\n    display: block;\n    padding: 14px 0px;\n    padding-left: 45px;\n    text-decoration: none;\n    color: black;\n    font-size: .96em;\n    a:visited {\n      text-decoration: none;\n    }\n    &:hover{\n      background: #E1A030;\n    }\n  }\n  ', '\n \n'], ['\n  padding: 0;\n  list-style-type: none;\n  margin-top: 26px;\n  a{\n    display: block;\n    padding: 14px 0px;\n    padding-left: 45px;\n    text-decoration: none;\n    color: black;\n    font-size: .96em;\n    a:visited {\n      text-decoration: none;\n    }\n    &:hover{\n      background: #E1A030;\n    }\n  }\n  ', '\n \n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    text-align: center;\n    a{\n      padding: 18px 0;\n      padding-left: 0;\n    }\n  '], ['\n    text-align: center;\n    a{\n      padding: 18px 0;\n      padding-left: 0;\n    }\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  float: right;\n  right: 20px;\n  top: 22px;\n  font-size: 1.3em;\n  color: rgba(0,0,0,.16);\n  &:hover{\n    cursor: pointer;\n  }\n'], ['\n  position: absolute;\n  float: right;\n  right: 20px;\n  top: 22px;\n  font-size: 1.3em;\n  color: rgba(0,0,0,.16);\n  &:hover{\n    cursor: pointer;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  margin: 5px auto 0px;\n  img{\n    width: 50px;\n  }\n'], ['\n  text-align: center;\n  margin: 5px auto 0px;\n  img{\n    width: 50px;\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  a{\n    text-decoration: none;\n    letter-spacing: .5px;\n  }\n'], ['\n  a{\n    text-decoration: none;\n    letter-spacing: .5px;\n  }\n']);

var PhoneIcon = function PhoneIcon() {
  return _react2.default.createElement('svg', { x: '0px', y: '0px',
    width: '20px', height: '20px', viewBox: '0 0 512 512', style: { fill: 'black', verticalAlign: 'top' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('path', { d: 'M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2 l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8 c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2 c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4 c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9 C442.3,370.8,431.5,351.6,415.9,335.5z', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);

    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(MenuContainer, {
        menuDisplayed: this.props.menuDisplayed,
        toggleMenu: this.props.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('img', { src: '../static/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement(ExitButton, { onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, '\u2715'), _react2.default.createElement(MenuItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('a', { href: '#why', onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Why Chinese Medicine'), _react2.default.createElement('a', { href: '#treatments', onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'What We Can Treat'), _react2.default.createElement('a', { href: '#techniques', onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Our Techniques'), _react2.default.createElement('a', { href: '#doctor', onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Meet the Doctor'), _react2.default.createElement('a', { href: '#testimonials', onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Testimonials'), _react2.default.createElement('a', { href: '#pricing', onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Our Pricing'), _react2.default.createElement('a', { href: '#contact', onClick: this.props.toggleMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Contact Us'), _react2.default.createElement(PhoneNumber, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('a', { href: 'tel:+1-914-843-1052', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(PhoneIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), ' 914-843-1052'))));
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  menuDisplayed: _react.PropTypes.bool.isRequired,
  toggleMenu: _react.PropTypes.func.isRequired
};
exports.default = Menu;


var MenuContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.menuDisplayed ? 'visible' : 'hidden';
}, function (props) {
  return props.menuDisplayed ? '0px' : '-300px';
}, _mediaQuery2.default.mobile(_templateObject2));

var MenuItems = _styledComponents2.default.ul(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));

var ExitButton = _styledComponents2.default.div(_templateObject5);

var Logo = _styledComponents2.default.div(_templateObject6);

var PhoneNumber = _styledComponents2.default.div(_templateObject7);