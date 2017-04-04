'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 80px 40px 90px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;}\n'], ['\n\tpadding: 80px 40px 90px;\n\tbackground-color: #fafafa;\n\th2{\n\t\ttext-align: center;}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: flex-start;\n'], ['\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: flex-start;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\ttext-align: center;\n\tmargin: 40px;\n  li{\n    list-style: none;\n    line-height: 1.8;\n    font-size: 1.07em;\n    padding-top: 4px;\n  }\n'], ['\n\ttext-align: center;\n\tmargin: 40px;\n  li{\n    list-style: none;\n    line-height: 1.8;\n    font-size: 1.07em;\n    padding-top: 4px;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 1.082em;\n  letter-spacing: .5px;\n  color: #E1A030;\n  padding-bottom: 3px;\n'], ['\n  font-size: 1.082em;\n  letter-spacing: .5px;\n  color: #E1A030;\n  padding-bottom: 3px;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle.js');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Treatments = function Treatments() {
	return _react2.default.createElement(
		TreatmentsContainer,
		null,
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

var TreatmentItem = _styledComponents2.default.div(_templateObject3);

var TreatmentTitle = _styledComponents2.default.h3(_templateObject4);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RyZWF0bWVudHMuanMiXSwibmFtZXMiOlsiVHJlYXRtZW50cyIsIlRyZWF0bWVudHNDb250YWluZXIiLCJkaXYiLCJUcmVhdG1lbnRzTGlzdCIsIlRyZWF0bWVudEl0ZW0iLCJUcmVhdG1lbnRUaXRsZSIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFFBQ2pCO0FBQUMscUJBQUQ7QUFBQTtBQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FEQztBQUVEO0FBQUMsaUJBQUQ7QUFBQTtBQUNDO0FBQUMsaUJBQUQ7QUFBQTtBQUNDO0FBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRDtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMSjtBQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORCxJQUREO0FBU0M7QUFBQyxpQkFBRDtBQUFBO0FBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpKO0FBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxELElBVEQ7QUFnQkM7QUFBQyxpQkFBRDtBQUFBO0FBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpELElBaEJEO0FBc0JDO0FBQUMsaUJBQUQ7QUFBQTtBQUNDO0FBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRDtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQXRCRDtBQUZDLEVBRGlCO0FBQUEsQ0FBbkI7O2tCQW1DZUEsVTs7O0FBRWYsSUFBTUMsc0JBQXNCLDJCQUFPQyxHQUE3QixpQkFBTjtBQU1BLElBQU1DLGlCQUFpQiwyQkFBT0QsR0FBeEIsa0JBQU47O0FBT0EsSUFBTUUsZ0JBQWdCLDJCQUFPRixHQUF2QixrQkFBTjs7QUFXQSxJQUFNRyxpQkFBaUIsMkJBQU9DLEVBQXhCLGtCQUFOIiwiZmlsZSI6InRyZWF0bWVudHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlLmpzJ1xuXG5jb25zdCBUcmVhdG1lbnRzID0gKCkgPT4gKFxuICA8VHJlYXRtZW50c0NvbnRhaW5lcj5cblx0PFNlY3Rpb25UaXRsZT5XaGF0IFdlIENhbiBIZWxwIFlvdSBXaXRoPC9TZWN0aW9uVGl0bGU+XG5cdDxUcmVhdG1lbnRzTGlzdD5cblx0XHQ8VHJlYXRtZW50SXRlbT5cblx0XHRcdDxUcmVhdG1lbnRUaXRsZT5QYWluIFJlbGllZjwvVHJlYXRtZW50VGl0bGU+XG5cdFx0XHQ8bGk+QXJ0aHJpdGlzPC9saT5cblx0XHRcdDxsaT5CYWNrIFBhaW48L2xpPlxuICAgICAgPGxpPlNjaWF0aWNhPC9saT5cbiAgICAgIDxsaT5TaG91bGRlciBQYWluPC9saT5cblx0XHRcdDxsaT5IZWFkYWNoZXMvTWlncmFpbmVzPC9saT5cblx0XHQ8L1RyZWF0bWVudEl0ZW0+XG5cdFx0PFRyZWF0bWVudEl0ZW0+XG5cdFx0XHQ8VHJlYXRtZW50VGl0bGU+V29tZW4ncyBIZWFsdGg8L1RyZWF0bWVudFRpdGxlPlxuXHRcdFx0PGxpPkluZmVydGlsaXR5PC9saT5cblx0XHRcdDxsaT5NZW5vcGF1c2U8L2xpPlxuICAgICAgPGxpPkRlcHJlc3Npb248L2xpPlxuXHRcdFx0PGxpPk92YXJpYW4gQ3lzdHM8L2xpPlxuXHRcdDwvVHJlYXRtZW50SXRlbT5cblx0XHQ8VHJlYXRtZW50SXRlbT5cblx0XHRcdDxUcmVhdG1lbnRUaXRsZT5JbW11bml0eSBEaXNvcmRlcnM8L1RyZWF0bWVudFRpdGxlPlxuXHRcdFx0PGxpPkFsbGVyZ2llczwvbGk+XG5cdFx0XHQ8bGk+QXN0aG1hPC9saT5cblx0XHRcdDxsaT5Ta2luIERpc29yZGVyczwvbGk+XG5cdFx0PC9UcmVhdG1lbnRJdGVtPlxuXHRcdDxUcmVhdG1lbnRJdGVtPlxuXHRcdFx0PFRyZWF0bWVudFRpdGxlPk90aGVyczwvVHJlYXRtZW50VGl0bGU+XG5cdFx0XHQ8bGk+RmFjaWFsIExpZnQ8L2xpPlxuXHRcdFx0PGxpPlNtb2tpbmcgQ2Vzc2F0aW9uPC9saT5cbiAgICAgIDxsaT5DYW5jZXIgU2lkZSBFZmZlY3QgUmVsaWVmPC9saT5cblx0XHQ8L1RyZWF0bWVudEl0ZW0+XG5cdCAgPC9UcmVhdG1lbnRzTGlzdD5cblx0PC9UcmVhdG1lbnRzQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUcmVhdG1lbnRzXG5cbmNvbnN0IFRyZWF0bWVudHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRwYWRkaW5nOiA4MHB4IDQwcHggOTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcblx0aDJ7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO31cbmBcbmNvbnN0IFRyZWF0bWVudHNMaXN0ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuYFxuXG5jb25zdCBUcmVhdG1lbnRJdGVtID0gc3R5bGVkLmRpdmBcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDQwcHg7XG4gIGxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICBmb250LXNpemU6IDEuMDdlbTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG5gXG5cbmNvbnN0IFRyZWF0bWVudFRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LXNpemU6IDEuMDgyZW07XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBjb2xvcjogI0UxQTAzMDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbmAiXX0=