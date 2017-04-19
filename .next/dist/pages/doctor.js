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

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/doctor.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 455px;\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  padding: 50px 0;  \n  border-bottom: 1px dotted rgba(0,0,0,.3);\n  border-top: 1px dotted rgba(0,0,0,.1);\n  ', '\n  \n'], ['\n  height: 455px;\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  padding: 50px 0;  \n  border-bottom: 1px dotted rgba(0,0,0,.3);\n  border-top: 1px dotted rgba(0,0,0,.1);\n  ', '\n  \n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    background: none;\n    display: table;\n    margin: auto;\n    padding: 40px 10px;\n  '], ['\n    background: none;\n    display: table;\n    margin: auto;\n    padding: 40px 10px;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  max-width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 25px;\n  p{\n    line-height: 1.8;\n\t  font-size: 1.06em;\n    text-align: center;\n  }\n  img{\n    margin: 0px auto 20px;\n    width: 140px;\n    border-radius: 50%;\n    border: 3px solid white;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); \n    position: absolute;\n    top: -9999px;\n    left: -9999px;   \n  }\n  ', '\n  ', '\n'], ['\n  float: left;\n  max-width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 25px;\n  p{\n    line-height: 1.8;\n\t  font-size: 1.06em;\n    text-align: center;\n  }\n  img{\n    margin: 0px auto 20px;\n    width: 140px;\n    border-radius: 50%;\n    border: 3px solid white;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); \n    position: absolute;\n    top: -9999px;\n    left: -9999px;   \n  }\n  ', '\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    float: none;\n    margin: 25px auto; \n    text-align: center;\n    img{position: initial;}\n    p{line-height: 1.7;}\n  '], ['\n    float: none;\n    margin: 25px auto; \n    text-align: center;\n    img{position: initial;}\n    p{line-height: 1.7;}\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    padding: 20px 25px;\n    margin: 0 auto ;\n  '], ['\n    padding: 20px 25px;\n    margin: 0 auto ;\n  ']);

var Doctor = function Doctor() {
  return _react2.default.createElement(DoctorContainer, { id: 'doctor', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(DoctorText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_SectionTitle2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Meet the Doctor'), _react2.default.createElement('img', { src: '../static/jingjiang_small2.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, ' Dr. Jing holds a bachelors degree in Chinese Traditional Medicine and Western Medicine from the University of Chengdu, one of the top five Traditional Chinese Medicine(TCM) Universities in China. Dr. Jing was a medical doctor at the \u201CPeople Hospital of Chengdu" for over ', _react2.default.createElement('b', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, '32 years'), '. Jing is a National Board Certified acupuncturist and is licensed in NY and CT.  She has practiced acupuncture in United States for 10 years, and has been considered a recognized acupuncturist in CT and NY.')));
};

exports.default = Doctor;


var DoctorContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.tablet(_templateObject2));

var DoctorText = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.tablet(_templateObject4), _mediaQuery2.default.mobile(_templateObject5));