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

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/contact.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding:0;\n  position: relative;\n'], ['\n\tpadding:0;\n  position: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 30px;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n'], ['\n  position: absolute;\n  top: 30px;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-top: 40px;\n\tmargin-bottom: 0;\n  font-size: 1.7em;\n\t', '\n'], ['\n\tmargin-top: 40px;\n\tmargin-bottom: 0;\n  font-size: 1.7em;\n\t', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\t\tmargin-top: 30px;\n\t'], ['\n\t\tmargin-top: 30px;\n\t']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 1.2rem;\n\tfont-weight: 400;\n\ttext-align: center;\n  margin: 0;\n  margin-top: 10px;\n\ta{\n\t\tcolor: #E1A030\n\t\ttext-decoration: none;\n  }\n'], ['\n\tfont-size: 1.2rem;\n\tfont-weight: 400;\n\ttext-align: center;\n  margin: 0;\n  margin-top: 10px;\n\ta{\n\t\tcolor: #E1A030\n\t\ttext-decoration: none;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 50%;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tpadding: 200px 0 100px;\n\tbackground-size: cover;\n\th2{\n\tmargin: 0;\n\t}\n\tp{\n\t\tfont-size: 1.15em;\n\t\tmargin: 6px 0 16px;\n\t}\n\t', '\n'], ['\n\twidth: 50%;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tpadding: 200px 0 100px;\n\tbackground-size: cover;\n\th2{\n\tmargin: 0;\n\t}\n\tp{\n\t\tfont-size: 1.15em;\n\t\tmargin: 6px 0 16px;\n\t}\n\t', '\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\tpadding: 180px 0 40px;\n\t'], ['\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\tpadding: 180px 0 40px;\n\t']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: radial-gradient(center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url(\'../static/stamford3.jpg\') no-repeat left;\n\t\t', '\n'], ['\n\tbackground: radial-gradient(center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url(\'../static/stamford3.jpg\') no-repeat left;\n\t\t', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n\t\t\tpadding: 200px 0 30px;\n\t\t'], ['\n\t\t\tpadding: 200px 0 30px;\n\t\t']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: radial-gradient(center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url(\'../static/newyork.jpg\') no-repeat left;\n\t', '\n'], ['\n\tbackground: radial-gradient(center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url(\'../static/newyork.jpg\') no-repeat left;\n\t', '\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n\t\tpadding: 50px 0;\n\t'], ['\n\t\tpadding: 50px 0;\n\t']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n\tcolor: #E1A030;\n\tfont-size: 1em;\n\tletter-spacing: .3px;\n'], ['\n\tcolor: #E1A030;\n\tfont-size: 1em;\n\tletter-spacing: .3px;\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n\tline-height: 1.52;\n'], ['\n\tline-height: 1.52;\n']);

var Contact = function Contact() {
	return _react2.default.createElement(ContactContainer, { id: 'contact', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(ContactTitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(SectionTitlePadding, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, 'Make an Appointment'), _react2.default.createElement(SectionSubtitle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'Call or Text: ', _react2.default.createElement('a', { href: 'tel:+1-914-843-1052', __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, '914-843-1052'))), _react2.default.createElement(ContactItemCT, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement('h2', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, 'Stamford Clinic'), _react2.default.createElement(ContactDay, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, 'Monday, Wednesday, Thursday'), _react2.default.createElement(ContactAdress, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, '1250 Summer Street, Suite 304', _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), 'Stamford, CT 06905')), _react2.default.createElement(ContactItemNY, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, _react2.default.createElement('h2', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, 'New York Clinic'), _react2.default.createElement(ContactDay, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, 'Tuesday and Friday'), _react2.default.createElement(ContactAdress, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, '600 Mamaroneck Ave, Suite 427', _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}), 'Harrison, NY 10528')));
};

exports.default = Contact;


var ContactContainer = _styledComponents2.default.div(_templateObject);

var ContactTitle = _styledComponents2.default.div(_templateObject2);

var SectionTitlePadding = (0, _styledComponents2.default)(_SectionTitle2.default)(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));

var SectionSubtitle = _styledComponents2.default.h2(_templateObject5);

var ContactItem = _styledComponents2.default.div(_templateObject6, _mediaQuery2.default.btwnTabletAndMobile(_templateObject7));

var ContactItemCT = (0, _styledComponents2.default)(ContactItem)(_templateObject8, _mediaQuery2.default.mobile(_templateObject9));

var ContactItemNY = (0, _styledComponents2.default)(ContactItem)(_templateObject10, _mediaQuery2.default.mobile(_templateObject11));

var ContactDay = _styledComponents2.default.p(_templateObject12);

var ContactAdress = _styledComponents2.default.p(_templateObject13);