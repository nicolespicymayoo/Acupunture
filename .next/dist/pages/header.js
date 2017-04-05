'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  padding-top: 30px;\n'], ['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  padding-top: 30px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n'], ['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n'], ['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n'], ['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n'], ['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    HeaderContainer,
    null,
    _react2.default.createElement(_navbar2.default, null),
    _react2.default.createElement(
      HeaderText,
      null,
      _react2.default.createElement(
        HeaderTitle,
        null,
        'Your Health, Your Trust, Your Choice.'
      ),
      _react2.default.createElement(
        HeaderSubtitle,
        null,
        _react2.default.createElement(
          'p',
          null,
          'The most authentic traditional Chinese medical treatment'
        ),
        _react2.default.createElement(
          'p',
          null,
          'in Stamford, CT and Harrison, NY.'
        )
      ),
      _react2.default.createElement(
        'a',
        { href: '#contact' },
        _react2.default.createElement(
          Button,
          null,
          'Make an Appointment'
        )
      )
    )
  );
};

exports.default = Header;


var HeaderContainer = _styledComponents2.default.div(_templateObject);

var HeaderText = _styledComponents2.default.div(_templateObject2);
var HeaderTitle = _styledComponents2.default.h1(_templateObject3);

var HeaderSubtitle = _styledComponents2.default.h3(_templateObject4);

var Button = _styledComponents2.default.button(_templateObject5);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJIZWFkZXJDb250YWluZXIiLCJkaXYiLCJIZWFkZXJUZXh0IiwiSGVhZGVyVGl0bGUiLCJoMSIsIkhlYWRlclN1YnRpdGxlIiwiaDMiLCJCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUFDLG1CQUFEO0FBQUE7QUFDRSx5REFERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQUZGO0FBTUU7QUFBQTtBQUFBLFVBQUcsTUFBSyxVQUFSO0FBQ0U7QUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQURGO0FBTkY7QUFGRixHQURhO0FBQUEsQ0FBZjs7a0JBZ0JlQSxNOzs7QUFHZixJQUFNQyxrQkFBa0IsMkJBQU9DLEdBQXpCLGlCQUFOOztBQVNBLElBQU1DLGFBQWEsMkJBQU9ELEdBQXBCLGtCQUFOO0FBYUUsSUFBTUUsY0FBYywyQkFBT0MsRUFBckIsa0JBQU47O0FBT0QsSUFBTUMsaUJBQWlCLDJCQUFPQyxFQUF4QixrQkFBTjs7QUFRQSxJQUFNQyxTQUFTLDJCQUFPQyxNQUFoQixrQkFBTiIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8SGVhZGVyQ29udGFpbmVyPlxuICAgIDxOYXZiYXIgLz5cbiAgICA8SGVhZGVyVGV4dD5cbiAgICAgIDxIZWFkZXJUaXRsZT5Zb3VyIEhlYWx0aCwgWW91ciBUcnVzdCwgWW91ciBDaG9pY2UuPC9IZWFkZXJUaXRsZT5cbiAgICAgIDxIZWFkZXJTdWJ0aXRsZT5cbiAgICAgICAgPHA+VGhlIG1vc3QgYXV0aGVudGljIHRyYWRpdGlvbmFsIENoaW5lc2UgbWVkaWNhbCB0cmVhdG1lbnQ8L3A+XG4gICAgICAgIDxwPmluIFN0YW1mb3JkLCBDVCBhbmQgSGFycmlzb24sIE5ZLjwvcD5cbiAgICAgIDwvSGVhZGVyU3VidGl0bGU+XG4gICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIj5cbiAgICAgICAgPEJ1dHRvbj5NYWtlIGFuIEFwcG9pbnRtZW50PC9CdXR0b24+XG4gICAgICA8L2E+XG4gICAgPC9IZWFkZXJUZXh0PlxuICA8L0hlYWRlckNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA1MzBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgcmdiYSgwLCAwLCAwLCAwLjU2KSwgcmdiYSgwLCAwLCAwLCAwLjMyKSksIHVybCgnLi4vc3RhdGljL3N0YW1mb3JkMi5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuYFxuXG5jb25zdCBIZWFkZXJUZXh0ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogOTk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogOTBweDtcblx0bWF4LXdpZHRoOiA4NSU7XG5cdGNvbG9yOiAjZmZmO1xuICBoMToge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRsZXR0ZXItc3BhY2luZzogLS4wMmVtO1xuXHR9XG5gXG4gIGNvbnN0IEhlYWRlclRpdGxlID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgZm9udC1zaXplOiAyLjdlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLDAsMCwuMDUpO1xuYFxuXG4gY29uc3QgSGVhZGVyU3VidGl0bGUgPSBzdHlsZWQuaDNgXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwuMyk7XG5gXG5cbiBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgcGFkZGluZzogMTRweCAyNnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDE2OCw1MCwuOTUpO1xuICAgIGNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRmb250LXNpemU6IC45NWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuXHRcdCY6aG92ZXJ7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwxNjgsNTAsMSk7XG5cdFx0fVxuXHRcdCY6Zm9jdXN7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOjA7XG5cdFx0fVxuYCJdfQ==