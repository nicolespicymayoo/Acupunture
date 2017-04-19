'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, .5) 40%, rgba(0, 0, 0, .3) 60%), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  ', '\n'], ['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, .5) 40%, rgba(0, 0, 0, .3) 60%), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['height: 500px;'], ['height: 500px;']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 75px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n    \n\t}\n  ', '\n  ', '\n'], ['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 75px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n    \n\t}\n  ', '\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: 80px;  \n  '], ['\n      margin-top: 80px;  \n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: 50px;\n  '], ['\n      margin-top: 50px;\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n    ', '\n'], ['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n    ', '\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['font-size: 2em;'], ['font-size: 2em;']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n    ', '\n'], ['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n    ', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['font-size: 1.15em;'], ['font-size: 1.15em;']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n    ', '\n'], ['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n    ', '\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n      letter-spacing: .42px;\n    '], ['\n      letter-spacing: .42px;\n    ']);

var Header = function Header() {
  return _react2.default.createElement(HeaderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(HeaderText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(HeaderTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Your Health, Your Trust, Your Choice.'), _react2.default.createElement(HeaderSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'The most authentic traditional Chinese medical treatment'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'in Stamford, CT and Harrison, NY.')), _react2.default.createElement('a', { href: '#contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Make an Appointment'))));
};

exports.default = Header;


var HeaderContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.tablet(_templateObject2));

var HeaderText = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.tablet(_templateObject4), _mediaQuery2.default.mobile(_templateObject5));
var HeaderTitle = _styledComponents2.default.h1(_templateObject6, _mediaQuery2.default.tablet(_templateObject7));

var HeaderSubtitle = _styledComponents2.default.h3(_templateObject8, _mediaQuery2.default.tablet(_templateObject9));

var Button = _styledComponents2.default.button(_templateObject10, _mediaQuery2.default.tablet(_templateObject11));