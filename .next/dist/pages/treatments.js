'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 70px 40px 80px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;\n\t}\n'], ['\n\tpadding: 70px 40px 80px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0 auto;\n\ttext-align: center;\n'], ['\n\tmargin: 0 auto;\n\ttext-align: center;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: inline-block;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 30px 40px;\n  li{\n    list-style: none;\n    line-height: 1.8;\n    font-size: 1.03em;\n    padding-top: 8px;\n\t\t', '\n  }\n'], ['\n\tdisplay: inline-block;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 30px 40px;\n  li{\n    list-style: none;\n    line-height: 1.8;\n    font-size: 1.03em;\n    padding-top: 8px;\n\t\t', '\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['line-height: 1.55;'], ['line-height: 1.55;']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 1.09em;\n  letter-spacing: .5px;\n  color: #E1A030;\n  padding-bottom: 15px;\n\tvertical-align: bottom;\n'], ['\n  font-size: 1.09em;\n  letter-spacing: .5px;\n  color: #E1A030;\n  padding-bottom: 15px;\n\tvertical-align: bottom;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle.js');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Treatments = function Treatments() {
	return _react2.default.createElement(
		TreatmentsContainer,
		{ id: 'treatments' },
		_react2.default.createElement(
			_SectionTitle2.default,
			null,
			'What We Can Help You With'
		),
		_react2.default.createElement(
			TreatmentsList,
			null,
			_react2.default.createElement(
				TreatmentItem,
				null,
				_react2.default.createElement(
					TreatmentTitle,
					null,
					'Pain Relief'
				),
				_react2.default.createElement(
					'li',
					null,
					'Arthritis'
				),
				_react2.default.createElement(
					'li',
					null,
					'Back Pain'
				),
				_react2.default.createElement(
					'li',
					null,
					'Sciatica'
				),
				_react2.default.createElement(
					'li',
					null,
					'Shoulder Pain'
				),
				_react2.default.createElement(
					'li',
					null,
					'Headaches/Migraines'
				)
			),
			_react2.default.createElement(
				TreatmentItem,
				null,
				_react2.default.createElement(
					TreatmentTitle,
					null,
					'Women\'s Health'
				),
				_react2.default.createElement(
					'li',
					null,
					'Infertility'
				),
				_react2.default.createElement(
					'li',
					null,
					'Menopause'
				),
				_react2.default.createElement(
					'li',
					null,
					'Depression'
				),
				_react2.default.createElement(
					'li',
					null,
					'Ovarian Cysts'
				)
			),
			_react2.default.createElement(
				TreatmentItem,
				null,
				_react2.default.createElement(
					TreatmentTitle,
					null,
					'Immunity Disorders'
				),
				_react2.default.createElement(
					'li',
					null,
					'Allergies'
				),
				_react2.default.createElement(
					'li',
					null,
					'Asthma'
				),
				_react2.default.createElement(
					'li',
					null,
					'Skin Disorders'
				)
			),
			_react2.default.createElement(
				TreatmentItem,
				null,
				_react2.default.createElement(
					TreatmentTitle,
					null,
					'Others'
				),
				_react2.default.createElement(
					'li',
					null,
					'Facial Lift'
				),
				_react2.default.createElement(
					'li',
					null,
					'Smoking Cessation'
				),
				_react2.default.createElement(
					'li',
					null,
					'Cancer Side Effect Relief'
				)
			)
		)
	);
};

exports.default = Treatments;


var TreatmentsContainer = _styledComponents2.default.div(_templateObject);
var TreatmentsList = _styledComponents2.default.div(_templateObject2);

var TreatmentItem = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));

var TreatmentTitle = _styledComponents2.default.h3(_templateObject5);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RyZWF0bWVudHMuanMiXSwibmFtZXMiOlsiVHJlYXRtZW50cyIsIlRyZWF0bWVudHNDb250YWluZXIiLCJkaXYiLCJUcmVhdG1lbnRzTGlzdCIsIlRyZWF0bWVudEl0ZW0iLCJtb2JpbGUiLCJUcmVhdG1lbnRUaXRsZSIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFFBQ2pCO0FBQUMscUJBQUQ7QUFBQSxJQUFxQixJQUFHLFlBQXhCO0FBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURDO0FBRUQ7QUFBQyxpQkFBRDtBQUFBO0FBQ0M7QUFBQyxpQkFBRDtBQUFBO0FBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxKO0FBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5ELElBREQ7QUFTQztBQUFDLGlCQUFEO0FBQUE7QUFDQztBQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSko7QUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQsSUFURDtBQWdCQztBQUFDLGlCQUFEO0FBQUE7QUFDQztBQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQsSUFoQkQ7QUFzQkM7QUFBQyxpQkFBRDtBQUFBO0FBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBdEJEO0FBRkMsRUFEaUI7QUFBQSxDQUFuQjs7a0JBbUNlQSxVOzs7QUFFZixJQUFNQyxzQkFBc0IsMkJBQU9DLEdBQTdCLGlCQUFOO0FBT0EsSUFBTUMsaUJBQWlCLDJCQUFPRCxHQUF4QixrQkFBTjs7QUFLQSxJQUFNRSxnQkFBZ0IsMkJBQU9GLEdBQXZCLG1CQVVGLHFCQUFXRyxNQVZULG1CQUFOOztBQWNBLElBQU1DLGlCQUFpQiwyQkFBT0MsRUFBeEIsa0JBQU4iLCJmaWxlIjoidHJlYXRtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUuanMnXG5pbXBvcnQgbWVkaWFRdWVyeSBmcm9tICcuL21lZGlhUXVlcnknXG5cbmNvbnN0IFRyZWF0bWVudHMgPSAoKSA9PiAoXG4gIDxUcmVhdG1lbnRzQ29udGFpbmVyIGlkPVwidHJlYXRtZW50c1wiPlxuXHQ8U2VjdGlvblRpdGxlPldoYXQgV2UgQ2FuIEhlbHAgWW91IFdpdGg8L1NlY3Rpb25UaXRsZT5cblx0PFRyZWF0bWVudHNMaXN0PlxuXHRcdDxUcmVhdG1lbnRJdGVtPlxuXHRcdFx0PFRyZWF0bWVudFRpdGxlPlBhaW4gUmVsaWVmPC9UcmVhdG1lbnRUaXRsZT5cblx0XHRcdDxsaT5BcnRocml0aXM8L2xpPlxuXHRcdFx0PGxpPkJhY2sgUGFpbjwvbGk+XG4gICAgICA8bGk+U2NpYXRpY2E8L2xpPlxuICAgICAgPGxpPlNob3VsZGVyIFBhaW48L2xpPlxuXHRcdFx0PGxpPkhlYWRhY2hlcy9NaWdyYWluZXM8L2xpPlxuXHRcdDwvVHJlYXRtZW50SXRlbT5cblx0XHQ8VHJlYXRtZW50SXRlbT5cblx0XHRcdDxUcmVhdG1lbnRUaXRsZT5Xb21lbidzIEhlYWx0aDwvVHJlYXRtZW50VGl0bGU+XG5cdFx0XHQ8bGk+SW5mZXJ0aWxpdHk8L2xpPlxuXHRcdFx0PGxpPk1lbm9wYXVzZTwvbGk+XG4gICAgICA8bGk+RGVwcmVzc2lvbjwvbGk+XG5cdFx0XHQ8bGk+T3ZhcmlhbiBDeXN0czwvbGk+XG5cdFx0PC9UcmVhdG1lbnRJdGVtPlxuXHRcdDxUcmVhdG1lbnRJdGVtPlxuXHRcdFx0PFRyZWF0bWVudFRpdGxlPkltbXVuaXR5IERpc29yZGVyczwvVHJlYXRtZW50VGl0bGU+XG5cdFx0XHQ8bGk+QWxsZXJnaWVzPC9saT5cblx0XHRcdDxsaT5Bc3RobWE8L2xpPlxuXHRcdFx0PGxpPlNraW4gRGlzb3JkZXJzPC9saT5cblx0XHQ8L1RyZWF0bWVudEl0ZW0+XG5cdFx0PFRyZWF0bWVudEl0ZW0+XG5cdFx0XHQ8VHJlYXRtZW50VGl0bGU+T3RoZXJzPC9UcmVhdG1lbnRUaXRsZT5cblx0XHRcdDxsaT5GYWNpYWwgTGlmdDwvbGk+XG5cdFx0XHQ8bGk+U21va2luZyBDZXNzYXRpb248L2xpPlxuICAgICAgPGxpPkNhbmNlciBTaWRlIEVmZmVjdCBSZWxpZWY8L2xpPlxuXHRcdDwvVHJlYXRtZW50SXRlbT5cblx0ICA8L1RyZWF0bWVudHNMaXN0PlxuXHQ8L1RyZWF0bWVudHNDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRyZWF0bWVudHNcblxuY29uc3QgVHJlYXRtZW50c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdHBhZGRpbmc6IDcwcHggNDBweCA4MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuXHRoMntcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbmBcbmNvbnN0IFRyZWF0bWVudHNMaXN0ID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luOiAwIGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgVHJlYXRtZW50SXRlbSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDMwcHggNDBweDtcbiAgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGZvbnQtc2l6ZTogMS4wM2VtO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cdFx0JHttZWRpYVF1ZXJ5Lm1vYmlsZWBsaW5lLWhlaWdodDogMS41NTtgfVxuICB9XG5gXG5cbmNvbnN0IFRyZWF0bWVudFRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LXNpemU6IDEuMDllbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gIGNvbG9yOiAjRTFBMDMwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcbmAiXX0=