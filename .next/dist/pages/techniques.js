'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionTitle = require('../components/SectionTitle.js');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = require('../helpers/mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/techniques.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 60px;\n  ', '\n'], ['\n\tpadding: 60px;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['padding: 50px 10px'], ['padding: 50px 10px']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 1100px;\n  margin: 80px auto 0;\n  text-align: center;\n  ', '\n'], ['\n  max-width: 1100px;\n  margin: 80px auto 0;\n  text-align: center;\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin: 50px auto 0;'], ['margin: 50px auto 0;']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  text-align: center;\n  vertical-align: bottom;\n  margin: 35px;\n  img{\n    width: 80%;\n    margin-bottom: 30px;\n  }\n\n  p{\n    letter-spacing: .38px;\n    font-size: 1.095em;\n  }\n  ', '\n'], ['\n  display: inline-block;\n  text-align: center;\n  vertical-align: bottom;\n  margin: 35px;\n  img{\n    width: 80%;\n    margin-bottom: 30px;\n  }\n\n  p{\n    letter-spacing: .38px;\n    font-size: 1.095em;\n  }\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)([' \n    img{width: 76%;}\n  '], [' \n    img{width: 76%;}\n  ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  width: 68% !important; \n  ', ' \n'], ['\n  width: 68% !important; \n  ', ' \n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)([' \n    width: 65%;\n  '], [' \n    width: 65%;\n  ']);

var Techniques = function Techniques() {
  return _react2.default.createElement(TechniquesContainer, { id: 'techniques', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_SectionTitle2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Our Techniques'), _react2.default.createElement(TechniquesList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(TechniqueItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(Img1, { src: '../static/icons/acupuncture.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Acupuncture')), _react2.default.createElement(TechniqueItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('img', { src: '../static/icons/moxa.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Moxa')), _react2.default.createElement(TechniqueItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('img', { src: '../static/icons/cupping.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Cupping')), _react2.default.createElement(TechniqueItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('img', { src: '../static/icons/gua-sha.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Gua Sha')), _react2.default.createElement(TechniqueItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('img', { src: '../static/icons/herbal.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Herbs'))));
};

exports.default = Techniques;


var TechniquesContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.mobile(_templateObject2));

var TechniquesList = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));

var TechniqueItem = _styledComponents2.default.div(_templateObject5, _mediaQuery2.default.mobile(_templateObject6));
// first image is larger than others
var Img1 = _styledComponents2.default.img(_templateObject7, _mediaQuery2.default.mobile(_templateObject8));