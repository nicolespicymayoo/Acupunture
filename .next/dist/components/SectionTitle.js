'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = require('../helpers/mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\ttext-align: center;\n  font-size: 1.7em;\n  font-weight: 400;\n  marging-top: 20px;\n  margin-bottom: 30px;\n  ', '\n'], ['\n\ttext-align: center;\n  font-size: 1.7em;\n  font-weight: 400;\n  marging-top: 20px;\n  margin-bottom: 30px;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['font-size: 1.6em;'], ['font-size: 1.6em;']);

var SectionTitle = _styledComponents2.default.h2(_templateObject, _mediaQuery2.default.tablet(_templateObject2));

exports.default = SectionTitle;