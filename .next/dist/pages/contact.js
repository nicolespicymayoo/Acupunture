'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n\tcolor: #E1A030;\n\tfont-size: 1em;\n\tletter-spacing: .3px;\n\n'], ['\n\tcolor: #E1A030;\n\tfont-size: 1em;\n\tletter-spacing: .3px;\n\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n\tline-height: 1.52;\n'], ['\n\tline-height: 1.52;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

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

var SectionTitlePadding = (0, _styledComponents2.default)(_SectionTitle2.default)(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));

var SectionSubtitle = _styledComponents2.default.h2(_templateObject5);

var ContactItem = _styledComponents2.default.div(_templateObject6, _mediaQuery2.default.btwnTabletAndMobile(_templateObject7));

var ContactItemCT = (0, _styledComponents2.default)(ContactItem)(_templateObject8, _mediaQuery2.default.mobile(_templateObject9));

var ContactItemNY = (0, _styledComponents2.default)(ContactItem)(_templateObject10, _mediaQuery2.default.mobile(_templateObject11));

var ContactDay = _styledComponents2.default.p(_templateObject12);

var ContactAdress = _styledComponents2.default.p(_templateObject13);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsIkNvbnRhY3RDb250YWluZXIiLCJkaXYiLCJDb250YWN0VGl0bGUiLCJTZWN0aW9uVGl0bGVQYWRkaW5nIiwibW9iaWxlIiwiU2VjdGlvblN1YnRpdGxlIiwiaDIiLCJDb250YWN0SXRlbSIsImJ0d25UYWJsZXRBbmRNb2JpbGUiLCJDb250YWN0SXRlbUNUIiwiQ29udGFjdEl0ZW1OWSIsIkNvbnRhY3REYXkiLCJwIiwiQ29udGFjdEFkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFFBQ2Q7QUFBQyxrQkFBRDtBQUFBLElBQWtCLElBQUcsU0FBckI7QUFDQTtBQUFDLGVBQUQ7QUFBQTtBQUNDO0FBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUEsSUFERDtBQUlDO0FBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQ21CO0FBQUE7QUFBQSxPQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBRG5CO0FBSkQsR0FEQTtBQVVBO0FBQUMsZ0JBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQUVDO0FBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQSxJQUZEO0FBS0M7QUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFDOEIsNkNBRDlCO0FBQUE7QUFBQTtBQUxELEdBVkE7QUFvQkE7QUFBQyxnQkFBRDtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUREO0FBRUM7QUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBLElBRkQ7QUFHQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUM4Qiw2Q0FEOUI7QUFBQTtBQUFBO0FBSEQ7QUFwQkEsRUFEYztBQUFBLENBQWhCOztrQkFnQ2VBLE87OztBQUVmLElBQU1DLG1CQUFtQiwyQkFBT0MsR0FBMUIsaUJBQU47O0FBS0EsSUFBTUMsZUFBZSwyQkFBT0QsR0FBdEIsa0JBQU47O0FBUUEsSUFBTUUsc0JBQXNCLHVEQUF0QixtQkFJSCxxQkFBV0MsTUFKUixtQkFBTjs7QUFTQSxJQUFNQyxrQkFBa0IsMkJBQU9DLEVBQXpCLGtCQUFOOztBQVlBLElBQU1DLGNBQWMsMkJBQU9OLEdBQXJCLG1CQWFILHFCQUFXTyxtQkFiUixtQkFBTjs7QUFvQkEsSUFBTUMsZ0JBQWdCLGdDQUFPRixXQUFQLENBQWhCLG1CQUVGLHFCQUFXSCxNQUZULG1CQUFOOztBQU9BLElBQU1NLGdCQUFnQixnQ0FBT0gsV0FBUCxDQUFoQixvQkFFSCxxQkFBV0gsTUFGUixvQkFBTjs7QUFPQSxJQUFNTyxhQUFhLDJCQUFPQyxDQUFwQixtQkFBTjs7QUFPQSxJQUFNQyxnQkFBZ0IsMkJBQU9ELENBQXZCLG1CQUFOIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IG1lZGlhUXVlcnkgZnJvbSAnLi9tZWRpYVF1ZXJ5J1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4gKFxuICA8Q29udGFjdENvbnRhaW5lciBpZD1cImNvbnRhY3RcIj5cblx0XHQ8Q29udGFjdFRpdGxlPlxuXHRcdFx0PFNlY3Rpb25UaXRsZVBhZGRpbmc+XG4gICAgICAgIE1ha2UgYW4gQXBwb2ludG1lbnRcbiAgICAgIDwvU2VjdGlvblRpdGxlUGFkZGluZz5cblx0XHRcdDxTZWN0aW9uU3VidGl0bGU+XG4gICAgICAgIENhbGwgb3IgVGV4dDogPGEgaHJlZj1cInRlbDorMS05MTQtODQzLTEwNTJcIj45MTQtODQzLTEwNTI8L2E+XG4gICAgICA8L1NlY3Rpb25TdWJ0aXRsZT5cblx0XHQ8L0NvbnRhY3RUaXRsZT5cblxuXHRcdDxDb250YWN0SXRlbUNUPlxuXHRcdFx0PGgyPlN0YW1mb3JkIENsaW5pYzwvaDI+XG5cdFx0XHQ8Q29udGFjdERheT5cbiAgICAgICAgTW9uZGF5LCBXZWRuZXNkYXksIFRodXJzZGF5XG4gICAgICA8L0NvbnRhY3REYXk+XG5cdFx0XHQ8Q29udGFjdEFkcmVzcz5cblx0XHRcdFx0MTI1MCBTdW1tZXIgU3RyZWV0LCBTdWl0ZSAzMDQ8YnI+PC9icj5cbiAgICAgICAgU3RhbWZvcmQsIENUIDA2OTA1XG5cdFx0XHQ8L0NvbnRhY3RBZHJlc3M+XG5cdFx0PC9Db250YWN0SXRlbUNUPlxuXHRcdDxDb250YWN0SXRlbU5ZPlxuXHRcdFx0PGgyPk5ldyBZb3JrIENsaW5pYzwvaDI+XG5cdFx0XHQ8Q29udGFjdERheT5UdWVzZGF5IGFuZCBGcmlkYXk8L0NvbnRhY3REYXk+XG5cdFx0XHQ8Q29udGFjdEFkcmVzcz5cblx0XHRcdFx0NjAwIE1hbWFyb25lY2sgQXZlLCBTdWl0ZSA0Mjc8YnI+PC9icj5cbiAgICAgICAgSGFycmlzb24sIE5ZIDEwNTI4XG5cdFx0XHQ8L0NvbnRhY3RBZHJlc3M+XG5cdFx0PC9Db250YWN0SXRlbU5ZPlxuXHQ8L0NvbnRhY3RDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcblxuY29uc3QgQ29udGFjdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdHBhZGRpbmc6MDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBDb250YWN0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG5gXG5cbmNvbnN0IFNlY3Rpb25UaXRsZVBhZGRpbmcgPSBzdHlsZWQoU2VjdGlvblRpdGxlKWBcblx0bWFyZ2luLXRvcDogNDBweDtcblx0bWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxLjdlbTtcblx0JHttZWRpYVF1ZXJ5Lm1vYmlsZWBcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRgfVxuYFxuXG5jb25zdCBTZWN0aW9uU3VidGl0bGUgPSBzdHlsZWQuaDJgXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcblx0YXtcblx0XHRjb2xvcjogI0UxQTAzMFxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBDb250YWN0SXRlbSA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiA1MCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAyMDBweCAwIDEwMHB4O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRoMntcblx0bWFyZ2luOiAwO1xuXHR9XG5cdHB7XG5cdFx0Zm9udC1zaXplOiAxLjE1ZW07XG5cdFx0bWFyZ2luOiA2cHggMCAxNnB4O1xuXHR9XG5cdCR7bWVkaWFRdWVyeS5idHduVGFibGV0QW5kTW9iaWxlYFxuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHBhZGRpbmc6IDE4MHB4IDAgNDBweDtcblx0YH1cbmBcblxuY29uc3QgQ29udGFjdEl0ZW1DVCA9IHN0eWxlZChDb250YWN0SXRlbSlgXG5cdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjZW50ZXIsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSksIHVybCgnLi4vc3RhdGljL3N0YW1mb3JkMy5qcGcnKSBuby1yZXBlYXQgbGVmdDtcblx0XHQke21lZGlhUXVlcnkubW9iaWxlYFxuXHRcdFx0cGFkZGluZzogMjAwcHggMCAzMHB4O1xuXHRcdGB9XG5gXG5cbmNvbnN0IENvbnRhY3RJdGVtTlkgPSBzdHlsZWQoQ29udGFjdEl0ZW0pYFxuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2VudGVyLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpLCB1cmwoJy4uL3N0YXRpYy9uZXd5b3JrLmpwZycpIG5vLXJlcGVhdCBsZWZ0O1xuXHQke21lZGlhUXVlcnkubW9iaWxlYFxuXHRcdHBhZGRpbmc6IDUwcHggMDtcblx0YH1cbmBcblxuY29uc3QgQ29udGFjdERheSA9IHN0eWxlZC5wYFxuXHRjb2xvcjogI0UxQTAzMDtcblx0Zm9udC1zaXplOiAxZW07XG5cdGxldHRlci1zcGFjaW5nOiAuM3B4O1xuXG5gXG5cbmNvbnN0IENvbnRhY3RBZHJlc3MgPSBzdHlsZWQucGBcblx0bGluZS1oZWlnaHQ6IDEuNTI7XG5gIl19