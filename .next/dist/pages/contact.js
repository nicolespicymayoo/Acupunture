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
		null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsIkNvbnRhY3RDb250YWluZXIiLCJkaXYiLCJDb250YWN0VGl0bGUiLCJTZWN0aW9uVGl0bGVQYWRkaW5nIiwiU2VjdGlvblN1YnRpdGxlIiwiaDIiLCJDb250YWN0SXRlbSIsIkNvbnRhY3RJdGVtQ1QiLCJDb250YWN0SXRlbU5ZIiwiQ29udGFjdERheSIsInAiLCJDb250YWN0QWRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxRQUNkO0FBQUMsa0JBQUQ7QUFBQTtBQUNBO0FBQUMsZUFBRDtBQUFBO0FBQ0M7QUFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQSxJQUREO0FBSUM7QUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFDbUI7QUFBQTtBQUFBLE9BQUcsTUFBSyxxQkFBUjtBQUFBO0FBQUE7QUFEbkI7QUFKRCxHQURBO0FBVUE7QUFBQyxnQkFBRDtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUREO0FBRUM7QUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBLElBRkQ7QUFLQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUM4Qiw2Q0FEOUI7QUFBQTtBQUFBO0FBTEQsR0FWQTtBQW9CQTtBQUFDLGdCQUFEO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQ7QUFFQztBQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUEsSUFGRDtBQUdDO0FBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQzhCLDZDQUQ5QjtBQUFBO0FBQUE7QUFIRDtBQXBCQSxFQURjO0FBQUEsQ0FBaEI7O2tCQWdDZUEsTzs7O0FBRWYsSUFBTUMsbUJBQW1CLDJCQUFPQyxHQUExQixpQkFBTjs7QUFLQSxJQUFNQyxlQUFlLDJCQUFPRCxHQUF0QixrQkFBTjs7QUFRQSxJQUFNRSxzQkFBc0IsdURBQXRCLGtCQUFOOztBQUtBLElBQU1DLGtCQUFrQiwyQkFBT0MsRUFBekIsa0JBQU47O0FBWUEsSUFBTUMsY0FBYywyQkFBT0wsR0FBckIsa0JBQU47O0FBZUEsSUFBTU0sZ0JBQWdCLGdDQUFPRCxXQUFQLENBQWhCLGtCQUFOOztBQUlBLElBQU1FLGdCQUFnQixnQ0FBT0YsV0FBUCxDQUFoQixrQkFBTjs7QUFJQSxJQUFNRyxhQUFhLDJCQUFPQyxDQUFwQixrQkFBTjs7QUFPQSxJQUFNQyxnQkFBZ0IsMkJBQU9ELENBQXZCLGtCQUFOIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlJ1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4gKFxuICA8Q29udGFjdENvbnRhaW5lcj5cblx0XHQ8Q29udGFjdFRpdGxlPlxuXHRcdFx0PFNlY3Rpb25UaXRsZVBhZGRpbmc+XG4gICAgICAgIE1ha2UgYW4gQXBwb2ludG1lbnRcbiAgICAgIDwvU2VjdGlvblRpdGxlUGFkZGluZz5cblx0XHRcdDxTZWN0aW9uU3VidGl0bGU+XG4gICAgICAgIENhbGwgb3IgVGV4dDogPGEgaHJlZj1cInRlbDorMS05MTQtODQzLTEwNTJcIj45MTQtODQzLTEwNTI8L2E+XG4gICAgICA8L1NlY3Rpb25TdWJ0aXRsZT5cblx0XHQ8L0NvbnRhY3RUaXRsZT5cblxuXHRcdDxDb250YWN0SXRlbUNUPlxuXHRcdFx0PGgyPlN0YW1mb3JkIENsaW5pYzwvaDI+XG5cdFx0XHQ8Q29udGFjdERheT5cbiAgICAgICAgTW9uZGF5LCBXZWRuZXNkYXksIFRodXJzZGF5XG4gICAgICA8L0NvbnRhY3REYXk+XG5cdFx0XHQ8Q29udGFjdEFkcmVzcz5cblx0XHRcdFx0MTI1MCBTdW1tZXIgU3RyZWV0LCBTdWl0ZSAzMDQ8YnI+PC9icj5cbiAgICAgICAgU3RhbWZvcmQsIENUIDA2OTA1XG5cdFx0XHQ8L0NvbnRhY3RBZHJlc3M+XG5cdFx0PC9Db250YWN0SXRlbUNUPlxuXHRcdDxDb250YWN0SXRlbU5ZPlxuXHRcdFx0PGgyPk5ldyBZb3JrIENsaW5pYzwvaDI+XG5cdFx0XHQ8Q29udGFjdERheT5UdWVzZGF5IGFuZCBGcmlkYXk8L0NvbnRhY3REYXk+XG5cdFx0XHQ8Q29udGFjdEFkcmVzcz5cblx0XHRcdFx0NjAwIE1hbWFyb25lY2sgQXZlLCBTdWl0ZSA0Mjc8YnI+PC9icj5cbiAgICAgICAgSGFycmlzb24sIE5ZIDEwNTI4XG5cdFx0XHQ8L0NvbnRhY3RBZHJlc3M+XG5cdFx0PC9Db250YWN0SXRlbU5ZPlxuXHQ8L0NvbnRhY3RDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcblxuY29uc3QgQ29udGFjdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdHBhZGRpbmc6MDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBDb250YWN0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG5gXG5cbmNvbnN0IFNlY3Rpb25UaXRsZVBhZGRpbmcgPSBzdHlsZWQoU2VjdGlvblRpdGxlKWBcblx0bWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxLjdlbTtcbmBcblxuY29uc3QgU2VjdGlvblN1YnRpdGxlID0gc3R5bGVkLmgyYFxuXHRmb250LXNpemU6IDEuMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cdGF7XG5cdFx0Y29sb3I6ICNFMUEwMzBcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmBcblxuY29uc3QgQ29udGFjdEl0ZW0gPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogNTAlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogMTgwcHggMCAxMDBweDtcblx0aDJ7XG5cdG1hcmdpbjogMDtcblx0fVxuXHRwe1xuXHRcdGZvbnQtc2l6ZTogMS4xNWVtO1xuXHRcdG1hcmdpbjogNnB4IDAgMTZweDtcblx0fVxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuYFxuXG5jb25zdCBDb250YWN0SXRlbUNUID0gc3R5bGVkKENvbnRhY3RJdGVtKWBcblx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSksIHVybCgnLi4vc3RhdGljL25ld3lvcmsuanBnJykgbm8tcmVwZWF0IGxlZnQ7XG5gXG5cbmNvbnN0IENvbnRhY3RJdGVtTlkgPSBzdHlsZWQoQ29udGFjdEl0ZW0pYFxuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpKSwgdXJsKCcuLi9zdGF0aWMvbmV3eW9yay5qcGcnKSBuby1yZXBlYXQgbGVmdDtcbmBcblxuY29uc3QgQ29udGFjdERheSA9IHN0eWxlZC5wYFxuXHRjb2xvcjogI0UxQTAzMDtcblx0Zm9udC1zaXplOiAxZW07XG5cdGxldHRlci1zcGFjaW5nOiAuM3B4O1xuXG5gXG5cbmNvbnN0IENvbnRhY3RBZHJlc3MgPSBzdHlsZWQucGBcblx0bGluZS1oZWlnaHQ6IDEuNTI7XG5gIl19