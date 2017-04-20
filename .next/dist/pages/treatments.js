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

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/treatments.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 70px 40px 80px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;\n\t}\n'], ['\n\tpadding: 70px 40px 80px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0 auto;\n\ttext-align: center;\n'], ['\n\tmargin: 0 auto;\n\ttext-align: center;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: inline-block;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 30px 40px;\n  li{\n    list-style: none;\n    line-height: 1.63;\n    font-size: 1.03em;\n    padding-top: 8px;\n  }\n\t', '\n'], ['\n\tdisplay: inline-block;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 30px 40px;\n  li{\n    list-style: none;\n    line-height: 1.63;\n    font-size: 1.03em;\n    padding-top: 8px;\n  }\n\t', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\t\tli{\n\t\t\tline-height: 1.5;\n\t\t\tfont-size: 1.075em;\n\t\t}\n\t'], ['\n\t\tli{\n\t\t\tline-height: 1.5;\n\t\t\tfont-size: 1.075em;\n\t\t}\n\t']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\ttext-transform: uppercase;\n\tfont-size: .9em;\n  letter-spacing: .6px;\n  color: #E1A030;\n  padding-bottom: 15px;\n\tvertical-align: bottom;\n'], ['\n\ttext-transform: uppercase;\n\tfont-size: .9em;\n  letter-spacing: .6px;\n  color: #E1A030;\n  padding-bottom: 15px;\n\tvertical-align: bottom;\n']);

var Treatments = function Treatments() {
	return _react2.default.createElement(TreatmentsContainer, { id: 'treatments', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_SectionTitle2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, 'What We Can Help You With'), _react2.default.createElement(TreatmentsList, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(TreatmentItem, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement(TreatmentTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Pain Relief'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'Arthritis'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, 'Back Pain'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, 'Sciatica'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Shoulder Pain'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, 'Headaches/Migraines')), _react2.default.createElement(TreatmentItem, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement(TreatmentTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, 'Women\'s Health'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, 'Infertility'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, 'Menopause'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, 'Depression'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, 'Ovarian Cysts')), _react2.default.createElement(TreatmentItem, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement(TreatmentTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, 'Immunity Disorders'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, 'Allergies'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, 'Asthma'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, 'Skin Disorders')), _react2.default.createElement(TreatmentItem, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(TreatmentTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, 'Others'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, 'Facial Lift'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, 'Smoking Cessation'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, 'Cancer Side Effect Relief'))));
};

exports.default = Treatments;


var TreatmentsContainer = _styledComponents2.default.div(_templateObject);
var TreatmentsList = _styledComponents2.default.div(_templateObject2);

var TreatmentItem = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));

var TreatmentTitle = _styledComponents2.default.h3(_templateObject5);