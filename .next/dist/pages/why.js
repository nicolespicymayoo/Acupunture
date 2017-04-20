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

var _SectionTitle = require('../components/SectionTitle.js');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _mediaQuery = require('../helpers/mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/why.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: radial-gradient(left, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8)), url(\'../static/medicine4.jpg\') no-repeat right;\n\tbackground-size: cover;\n\theight: 450px;\n\ttext-align: center;\n\tpadding: 50px 30px;\n\t', '\n\t\t', '\n'], ['\n\tbackground: radial-gradient(left, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8)), url(\'../static/medicine4.jpg\') no-repeat right;\n\tbackground-size: cover;\n\theight: 450px;\n\ttext-align: center;\n\tpadding: 50px 30px;\n\t', '\n\t\t', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\t\tmargin: auto;\n\t\tbackground: radial-gradient(left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.95)), url(\'../static/medicine4.jpg\') no-repeat right;\n\t'], ['\n\t\tmargin: auto;\n\t\tbackground: radial-gradient(left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.95)), url(\'../static/medicine4.jpg\') no-repeat right;\n\t']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\t\theight: 400px;\n\t'], ['\n\t\theight: 400px;\n\t']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tclear: both;\n\tfloat: right;\n\tdisplay: inline-block;\n\tmargin-top: 30px;\n\tmargin-right: 2%;\n\tmax-width: 340px;\n\tp{\n\t\tfloat: right;\n\t\tline-height: 1.7;\n\t\tfont-size: 1.1em;\n    margin: 0;\n\t}\n\t&:after{\n\t\tclear: both;\n\t}\n\t', '\n'], ['\n\tclear: both;\n\tfloat: right;\n\tdisplay: inline-block;\n\tmargin-top: 30px;\n\tmargin-right: 2%;\n\tmax-width: 340px;\n\tp{\n\t\tfloat: right;\n\t\tline-height: 1.7;\n\t\tfont-size: 1.1em;\n    margin: 0;\n\t}\n\t&:after{\n\t\tclear: both;\n\t}\n\t', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\t\tdisplay: table;\n\t\twidth: 100%;\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t'], ['\n\t\tdisplay: table;\n\t\twidth: 100%;\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t']);

var Why = function Why() {
	return _react2.default.createElement(WhyContainer, { id: 'why', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(WhyText, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_SectionTitle2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, 'Why Chinese Medicine?'), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'Traditional Chinese medicine is a time-honored practice that has formed over thousands of years through experience and culminating knowledge about healing the human body. All the techniques and philosophies of traditional Chinese medicine are far from mere tradition. They are a system of diagnosis and treatment that has helped countless people throughout the many centuries of its practice. ')));
};

exports.default = Why;


var WhyContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.tablet(_templateObject2), _mediaQuery2.default.mobile(_templateObject3));

var WhyText = _styledComponents2.default.div(_templateObject4, _mediaQuery2.default.tablet(_templateObject5));