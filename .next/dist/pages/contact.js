'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding:0;\n  position: relative;\n'], ['\n\tpadding:0;\n  position: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 30px;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n'], ['\n  position: absolute;\n  top: 30px;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-bottom: 0;\n  font-size: 1.7em;\n'], ['\n\tmargin-bottom: 0;\n  font-size: 1.7em;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 1.2rem;\n\tfont-weight: 400;\n\ttext-align: center;\n  margin: 0;\n  margin-top: 10px;\n\ta{\n\t\tcolor: #E1A030\n\t\ttext-decoration: none;\n  }\n'], ['\n\tfont-size: 1.2rem;\n\tfont-weight: 400;\n\ttext-align: center;\n  margin: 0;\n  margin-top: 10px;\n\ta{\n\t\tcolor: #E1A030\n\t\ttext-decoration: none;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 50%;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tpadding: 180px 0 100px;\n\th2{\n\tmargin: 0;\n\t}\n\tp{\n\t\tfont-size: 1.15em;\n\t\tmargin: 6px 0 16px;\n\t}\n\tbackground-size: cover;\n'], ['\n\twidth: 50%;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tpadding: 180px 0 100px;\n\th2{\n\tmargin: 0;\n\t}\n\tp{\n\t\tfont-size: 1.15em;\n\t\tmargin: 6px 0 16px;\n\t}\n\tbackground-size: cover;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: radial-gradient(left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url(\'../static/newyork.jpg\') no-repeat left;\n'], ['\n\tbackground: radial-gradient(left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url(\'../static/newyork.jpg\') no-repeat left;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\tcolor: #E1A030;\n\tfont-size: 1em;\n\tletter-spacing: .3px;\n\n'], ['\n\tcolor: #E1A030;\n\tfont-size: 1em;\n\tletter-spacing: .3px;\n\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n\tline-height: 1.52;\n'], ['\n\tline-height: 1.52;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
	return _react2.default.createElement(
		ContactContainer,
		{ id: 'contact' },
		_react2.default.createElement(
			ContactTitle,
			null,
			_react2.default.createElement(
				SectionTitlePadding,
				null,
				'Make an Appointment'
			),
			_react2.default.createElement(
				SectionSubtitle,
				null,
				'Call or Text: ',
				_react2.default.createElement(
					'a',
					{ href: 'tel:+1-914-843-1052' },
					'914-843-1052'
				)
			)
		),
		_react2.default.createElement(
			ContactItemCT,
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Stamford Clinic'
			),
			_react2.default.createElement(
				ContactDay,
				null,
				'Monday, Wednesday, Thursday'
			),
			_react2.default.createElement(
				ContactAdress,
				null,
				'1250 Summer Street, Suite 304',
				_react2.default.createElement('br', null),
				'Stamford, CT 06905'
			)
		),
		_react2.default.createElement(
			ContactItemNY,
			null,
			_react2.default.createElement(
				'h2',
				null,
				'New York Clinic'
			),
			_react2.default.createElement(
				ContactDay,
				null,
				'Tuesday and Friday'
			),
			_react2.default.createElement(
				ContactAdress,
				null,
				'600 Mamaroneck Ave, Suite 427',
				_react2.default.createElement('br', null),
				'Harrison, NY 10528'
			)
		)
	);
};

exports.default = Contact;


var ContactContainer = _styledComponents2.default.div(_templateObject);

var ContactTitle = _styledComponents2.default.div(_templateObject2);

var SectionTitlePadding = (0, _styledComponents2.default)(_SectionTitle2.default)(_templateObject3);

var SectionSubtitle = _styledComponents2.default.h2(_templateObject4);

var ContactItem = _styledComponents2.default.div(_templateObject5);

var ContactItemCT = (0, _styledComponents2.default)(ContactItem)(_templateObject6);

var ContactItemNY = (0, _styledComponents2.default)(ContactItem)(_templateObject6);

var ContactDay = _styledComponents2.default.p(_templateObject7);

var ContactAdress = _styledComponents2.default.p(_templateObject8);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsIkNvbnRhY3RDb250YWluZXIiLCJkaXYiLCJDb250YWN0VGl0bGUiLCJTZWN0aW9uVGl0bGVQYWRkaW5nIiwiU2VjdGlvblN1YnRpdGxlIiwiaDIiLCJDb250YWN0SXRlbSIsIkNvbnRhY3RJdGVtQ1QiLCJDb250YWN0SXRlbU5ZIiwiQ29udGFjdERheSIsInAiLCJDb250YWN0QWRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxRQUNkO0FBQUMsa0JBQUQ7QUFBQSxJQUFrQixJQUFHLFNBQXJCO0FBQ0E7QUFBQyxlQUFEO0FBQUE7QUFDQztBQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBLElBREQ7QUFJQztBQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUNtQjtBQUFBO0FBQUEsT0FBRyxNQUFLLHFCQUFSO0FBQUE7QUFBQTtBQURuQjtBQUpELEdBREE7QUFVQTtBQUFDLGdCQUFEO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQ7QUFFQztBQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUEsSUFGRDtBQUtDO0FBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQzhCLDZDQUQ5QjtBQUFBO0FBQUE7QUFMRCxHQVZBO0FBb0JBO0FBQUMsZ0JBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQUVDO0FBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQSxJQUZEO0FBR0M7QUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFDOEIsNkNBRDlCO0FBQUE7QUFBQTtBQUhEO0FBcEJBLEVBRGM7QUFBQSxDQUFoQjs7a0JBZ0NlQSxPOzs7QUFFZixJQUFNQyxtQkFBbUIsMkJBQU9DLEdBQTFCLGlCQUFOOztBQUtBLElBQU1DLGVBQWUsMkJBQU9ELEdBQXRCLGtCQUFOOztBQVFBLElBQU1FLHNCQUFzQix1REFBdEIsa0JBQU47O0FBS0EsSUFBTUMsa0JBQWtCLDJCQUFPQyxFQUF6QixrQkFBTjs7QUFZQSxJQUFNQyxjQUFjLDJCQUFPTCxHQUFyQixrQkFBTjs7QUFlQSxJQUFNTSxnQkFBZ0IsZ0NBQU9ELFdBQVAsQ0FBaEIsa0JBQU47O0FBSUEsSUFBTUUsZ0JBQWdCLGdDQUFPRixXQUFQLENBQWhCLGtCQUFOOztBQUlBLElBQU1HLGFBQWEsMkJBQU9DLENBQXBCLGtCQUFOOztBQU9BLElBQU1DLGdCQUFnQiwyQkFBT0QsQ0FBdkIsa0JBQU4iLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUnXG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiAoXG4gIDxDb250YWN0Q29udGFpbmVyIGlkPVwiY29udGFjdFwiPlxuXHRcdDxDb250YWN0VGl0bGU+XG5cdFx0XHQ8U2VjdGlvblRpdGxlUGFkZGluZz5cbiAgICAgICAgTWFrZSBhbiBBcHBvaW50bWVudFxuICAgICAgPC9TZWN0aW9uVGl0bGVQYWRkaW5nPlxuXHRcdFx0PFNlY3Rpb25TdWJ0aXRsZT5cbiAgICAgICAgQ2FsbCBvciBUZXh0OiA8YSBocmVmPVwidGVsOisxLTkxNC04NDMtMTA1MlwiPjkxNC04NDMtMTA1MjwvYT5cbiAgICAgIDwvU2VjdGlvblN1YnRpdGxlPlxuXHRcdDwvQ29udGFjdFRpdGxlPlxuXG5cdFx0PENvbnRhY3RJdGVtQ1Q+XG5cdFx0XHQ8aDI+U3RhbWZvcmQgQ2xpbmljPC9oMj5cblx0XHRcdDxDb250YWN0RGF5PlxuICAgICAgICBNb25kYXksIFdlZG5lc2RheSwgVGh1cnNkYXlcbiAgICAgIDwvQ29udGFjdERheT5cblx0XHRcdDxDb250YWN0QWRyZXNzPlxuXHRcdFx0XHQxMjUwIFN1bW1lciBTdHJlZXQsIFN1aXRlIDMwNDxicj48L2JyPlxuICAgICAgICBTdGFtZm9yZCwgQ1QgMDY5MDVcblx0XHRcdDwvQ29udGFjdEFkcmVzcz5cblx0XHQ8L0NvbnRhY3RJdGVtQ1Q+XG5cdFx0PENvbnRhY3RJdGVtTlk+XG5cdFx0XHQ8aDI+TmV3IFlvcmsgQ2xpbmljPC9oMj5cblx0XHRcdDxDb250YWN0RGF5PlR1ZXNkYXkgYW5kIEZyaWRheTwvQ29udGFjdERheT5cblx0XHRcdDxDb250YWN0QWRyZXNzPlxuXHRcdFx0XHQ2MDAgTWFtYXJvbmVjayBBdmUsIFN1aXRlIDQyNzxicj48L2JyPlxuICAgICAgICBIYXJyaXNvbiwgTlkgMTA1Mjhcblx0XHRcdDwvQ29udGFjdEFkcmVzcz5cblx0XHQ8L0NvbnRhY3RJdGVtTlk+XG5cdDwvQ29udGFjdENvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFxuXG5jb25zdCBDb250YWN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZzowO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmNvbnN0IENvbnRhY3RUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbmBcblxuY29uc3QgU2VjdGlvblRpdGxlUGFkZGluZyA9IHN0eWxlZChTZWN0aW9uVGl0bGUpYFxuXHRtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEuN2VtO1xuYFxuXG5jb25zdCBTZWN0aW9uU3VidGl0bGUgPSBzdHlsZWQuaDJgXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcblx0YXtcblx0XHRjb2xvcjogI0UxQTAzMFxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBDb250YWN0SXRlbSA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiA1MCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAxODBweCAwIDEwMHB4O1xuXHRoMntcblx0bWFyZ2luOiAwO1xuXHR9XG5cdHB7XG5cdFx0Zm9udC1zaXplOiAxLjE1ZW07XG5cdFx0bWFyZ2luOiA2cHggMCAxNnB4O1xuXHR9XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5gXG5cbmNvbnN0IENvbnRhY3RJdGVtQ1QgPSBzdHlsZWQoQ29udGFjdEl0ZW0pYFxuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpKSwgdXJsKCcuLi9zdGF0aWMvbmV3eW9yay5qcGcnKSBuby1yZXBlYXQgbGVmdDtcbmBcblxuY29uc3QgQ29udGFjdEl0ZW1OWSA9IHN0eWxlZChDb250YWN0SXRlbSlgXG5cdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpLCB1cmwoJy4uL3N0YXRpYy9uZXd5b3JrLmpwZycpIG5vLXJlcGVhdCBsZWZ0O1xuYFxuXG5jb25zdCBDb250YWN0RGF5ID0gc3R5bGVkLnBgXG5cdGNvbG9yOiAjRTFBMDMwO1xuXHRmb250LXNpemU6IDFlbTtcblx0bGV0dGVyLXNwYWNpbmc6IC4zcHg7XG5cbmBcblxuY29uc3QgQ29udGFjdEFkcmVzcyA9IHN0eWxlZC5wYFxuXHRsaW5lLWhlaWdodDogMS41MjtcbmAiXX0=