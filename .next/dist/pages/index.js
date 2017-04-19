'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _why = require('./why');

var _why2 = _interopRequireDefault(_why);

var _treatments = require('./treatments');

var _treatments2 = _interopRequireDefault(_treatments);

var _techniques = require('./techniques');

var _techniques2 = _interopRequireDefault(_techniques);

var _doctor = require('./doctor');

var _doctor2 = _interopRequireDefault(_doctor);

var _pricing = require('./pricing');

var _pricing2 = _interopRequireDefault(_pricing);

var _testimonials = require('./testimonials');

var _testimonials2 = _interopRequireDefault(_testimonials);

var _contact = require('./contact');

var _contact2 = _interopRequireDefault(_contact);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Lato\';\n  font-size: 1em;\n  letter-spacing: .2px;\n  margin: auto;\n  width: 100%;\n  ', '\n\n'], ['\n  font-family: \'Lato\';\n  font-size: 1em;\n  letter-spacing: .2px;\n  margin: auto;\n  width: 100%;\n  ', '\n\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['font-size: 15px;'], ['font-size: 15px;']);

exports.default = function () {
  return _react2.default.createElement(Home, null, _react2.default.createElement(_header2.default, null), _react2.default.createElement(_why2.default, null), _react2.default.createElement(_treatments2.default, null), _react2.default.createElement(_techniques2.default, null), _react2.default.createElement(_doctor2.default, null), _react2.default.createElement(_pricing2.default, null), _react2.default.createElement(_testimonials2.default, null), _react2.default.createElement(_contact2.default, null));
};

var Home = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.mobile(_templateObject2));