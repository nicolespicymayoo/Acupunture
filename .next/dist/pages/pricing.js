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

var _mediaQuery = require('../helpers/mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/pricing.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 80px 0;\n\tbackground-color: #fafafa;\n'], ['\n\tpadding: 80px 0;\n\tbackground-color: #fafafa;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: auto;\n\ttext-align: center;\t\n'], ['\n\tmargin: auto;\n\ttext-align: center;\t\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: inline-block;\n\theight: 295px;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 35px 10px;\n\tpadding: 50px 10px;\n\tbackground-color: #fff;\n\tborder: 3px solid rgba(0,0,0,.1);\n\tborder-radius: 3px;\n\t', '\n'], ['\n\tdisplay: inline-block;\n\theight: 295px;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 35px 10px;\n\tpadding: 50px 10px;\n\tbackground-color: #fff;\n\tborder: 3px solid rgba(0,0,0,.1);\n\tborder-radius: 3px;\n\t', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin: 10px'], ['margin: 10px']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 1.3em;\n\tfont-weight: normal;\n\tmargin: 0;\n'], ['\n\tfont-size: 1.3em;\n\tfont-weight: normal;\n\tmargin: 0;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0;\n\tcolor: #eba832;\n\tpadding-top: 8px;\n\tfont-size: .9em;\n\tletter-spacing: .34px;\n'], ['\n\tmargin: 0;\n\tcolor: #eba832;\n\tpadding-top: 8px;\n\tfont-size: .9em;\n\tletter-spacing: .34px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 230px;\n\theight: 62%;\n\tmargin: 15px 20px;\n\tline-height: 1.45;\n\tcolor: rgba(0,0,0,.6);\n\tfont-size: .98em;\n'], ['\n\twidth: 230px;\n\theight: 62%;\n\tmargin: 15px 20px;\n\tline-height: 1.45;\n\tcolor: rgba(0,0,0,.6);\n\tfont-size: .98em;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n\tvertical-align: baseline;\n\tmargin-top: auto; //pushes to bottom\n\tbottom: 0;\n\tvertical-align: bottom;\n\th3{\n\t\tfont-size: 1.35em;\n\t\tfont-weight: normal;\n\t\tmargin: 0;\n\n\t}\n\tp{\n\t\tmargin: 0;\n\t\tfont-size: .8em;\n\t\tcolor: rgba(0,0,0,.6);\n\t}\n'], ['\n\tvertical-align: baseline;\n\tmargin-top: auto; //pushes to bottom\n\tbottom: 0;\n\tvertical-align: bottom;\n\th3{\n\t\tfont-size: 1.35em;\n\t\tfont-weight: normal;\n\t\tmargin: 0;\n\n\t}\n\tp{\n\t\tmargin: 0;\n\t\tfont-size: .8em;\n\t\tcolor: rgba(0,0,0,.6);\n\t}\n']);

var Pricing = function Pricing() {
	return _react2.default.createElement(PricingContainer, { id: 'pricing', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_SectionTitle2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, 'Our Pricing'), _react2.default.createElement(PricingList, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(PricingItem, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement(PricingTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Initial Visit'), _react2.default.createElement(PricingSubtitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'One and half hours'), _react2.default.createElement(PricingDescription, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Dr. Jing will see you for an initial diagnosis and treatment which includes a discussion of your symptoms, a pulse and tongue examination and diagnostic acupressure.'), _react2.default.createElement(Price, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement('h3', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, '$170'), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, 'per session'))), _react2.default.createElement(PricingItem, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement(PricingTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, 'Regular Sessions'), _react2.default.createElement(PricingSubtitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, 'One hour'), _react2.default.createElement(PricingDescription, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, 'A subsequent session will be scheduled after your initial treatment. This includes an evaluation of your response to the initial treatment, a second pulse and tongue examination, and a secondary acupuncture treatment.'), _react2.default.createElement(Price, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement('h3', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, '$98'), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, 'per session'))), _react2.default.createElement(PricingItem, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement(PricingTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, 'Maintenance'), _react2.default.createElement(PricingSubtitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, '10 Sessions Package'), _react2.default.createElement(PricingDescription, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, 'Dr. Jing wil recommend a plan for follow-up maintenance. This can include having a once-a-month treatment to regulate your energy flow.'), _react2.default.createElement(Price, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 45
		}
	}, _react2.default.createElement('h3', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	}, '$85'), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}, 'per session')))));
};

exports.default = Pricing;


var PricingContainer = _styledComponents2.default.div(_templateObject);
var PricingList = _styledComponents2.default.div(_templateObject2);

var PricingItem = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.btwnTabletAndMobile(_templateObject4));
var PricingTitle = _styledComponents2.default.h3(_templateObject5);
var PricingSubtitle = _styledComponents2.default.p(_templateObject6);

var PricingDescription = _styledComponents2.default.p(_templateObject7);

var Price = _styledComponents2.default.div(_templateObject8);