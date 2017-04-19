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

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 70px 40px 80px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;\n\t}\n'], ['\n\tpadding: 70px 40px 80px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0 auto;\n\ttext-align: center;\n'], ['\n\tmargin: 0 auto;\n\ttext-align: center;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: inline-block;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 30px 40px;\n  li{\n    list-style: none;\n    line-height: 1.63;\n    font-size: 1.03em;\n    padding-top: 8px;\n  }\n\t', '\n'], ['\n\tdisplay: inline-block;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 30px 40px;\n  li{\n    list-style: none;\n    line-height: 1.63;\n    font-size: 1.03em;\n    padding-top: 8px;\n  }\n\t', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\t\tli{\n\t\t\tline-height: 1.5;\n\t\t\tfont-size: 1.075em;\n\t\t}\n\t'], ['\n\t\tli{\n\t\t\tline-height: 1.5;\n\t\t\tfont-size: 1.075em;\n\t\t}\n\t']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\ttext-transform: uppercase;\n\tfont-size: .9em;\n  letter-spacing: .6px;\n  color: #E1A030;\n  padding-bottom: 15px;\n\tvertical-align: bottom;\n'], ['\n\ttext-transform: uppercase;\n\tfont-size: .9em;\n  letter-spacing: .6px;\n  color: #E1A030;\n  padding-bottom: 15px;\n\tvertical-align: bottom;\n']);

var Treatments = function Treatments() {
	return _react2.default.createElement(TreatmentsContainer, { id: 'treatments' }, _react2.default.createElement(_SectionTitle2.default, null, 'What We Can Help You With'), _react2.default.createElement(TreatmentsList, null, _react2.default.createElement(TreatmentItem, null, _react2.default.createElement(TreatmentTitle, null, 'Pain Relief'), _react2.default.createElement('li', null, 'Arthritis'), _react2.default.createElement('li', null, 'Back Pain'), _react2.default.createElement('li', null, 'Sciatica'), _react2.default.createElement('li', null, 'Shoulder Pain'), _react2.default.createElement('li', null, 'Headaches/Migraines')), _react2.default.createElement(TreatmentItem, null, _react2.default.createElement(TreatmentTitle, null, 'Women\'s Health'), _react2.default.createElement('li', null, 'Infertility'), _react2.default.createElement('li', null, 'Menopause'), _react2.default.createElement('li', null, 'Depression'), _react2.default.createElement('li', null, 'Ovarian Cysts')), _react2.default.createElement(TreatmentItem, null, _react2.default.createElement(TreatmentTitle, null, 'Immunity Disorders'), _react2.default.createElement('li', null, 'Allergies'), _react2.default.createElement('li', null, 'Asthma'), _react2.default.createElement('li', null, 'Skin Disorders')), _react2.default.createElement(TreatmentItem, null, _react2.default.createElement(TreatmentTitle, null, 'Others'), _react2.default.createElement('li', null, 'Facial Lift'), _react2.default.createElement('li', null, 'Smoking Cessation'), _react2.default.createElement('li', null, 'Cancer Side Effect Relief'))));
};

exports.default = Treatments;


var TreatmentsContainer = _styledComponents2.default.div(_templateObject);
var TreatmentsList = _styledComponents2.default.div(_templateObject2);

var TreatmentItem = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));

var TreatmentTitle = _styledComponents2.default.h3(_templateObject5);