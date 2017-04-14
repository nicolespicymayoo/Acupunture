'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  ', '\n'], ['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['height: 500px;'], ['height: 500px;']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n  ', '\n  ', '\n'], ['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n  ', '\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: 80px;  \n  '], ['\n      margin-top: 80px;  \n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: 50px;\n  '], ['\n      margin-top: 50px;\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n    ', '\n\n'], ['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n    ', '\n\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['font-size: 2em;'], ['font-size: 2em;']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n    ', '\n'], ['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n    ', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['font-size: 1.15em;'], ['font-size: 1.15em;']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n    ', '\n'], ['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n    ', '\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n      font-size: .89em;  \n      letter-spacing: .42px;\n    '], ['\n      font-size: .89em;  \n      letter-spacing: .42px;\n    ']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

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


var HeaderContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.tablet(_templateObject2));

var HeaderText = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.tablet(_templateObject4), _mediaQuery2.default.mobile(_templateObject5));
var HeaderTitle = _styledComponents2.default.h1(_templateObject6, _mediaQuery2.default.tablet(_templateObject7));

var HeaderSubtitle = _styledComponents2.default.h3(_templateObject8, _mediaQuery2.default.tablet(_templateObject9));

var Button = _styledComponents2.default.button(_templateObject10, _mediaQuery2.default.tablet(_templateObject11));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJIZWFkZXJDb250YWluZXIiLCJkaXYiLCJ0YWJsZXQiLCJIZWFkZXJUZXh0IiwibW9iaWxlIiwiSGVhZGVyVGl0bGUiLCJoMSIsIkhlYWRlclN1YnRpdGxlIiwiaDMiLCJCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQUMsbUJBQUQ7QUFBQTtBQUNFLHlEQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBO0FBQ0U7QUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxzQkFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BRkY7QUFNRTtBQUFBO0FBQUEsVUFBRyxNQUFLLFVBQVI7QUFDRTtBQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFORjtBQUZGLEdBRGE7QUFBQSxDQUFmOztrQkFnQmVBLE07OztBQUdmLElBQU1DLGtCQUFrQiwyQkFBT0MsR0FBekIsa0JBTUYscUJBQVdDLE1BTlQsbUJBQU47O0FBU0EsSUFBTUMsYUFBYSwyQkFBT0YsR0FBcEIsbUJBWUYscUJBQVdDLE1BWlQsb0JBZUYscUJBQVdFLE1BZlQsbUJBQU47QUFtQkUsSUFBTUMsY0FBYywyQkFBT0MsRUFBckIsbUJBS0YscUJBQVdKLE1BTFQsbUJBQU47O0FBU0QsSUFBTUssaUJBQWlCLDJCQUFPQyxFQUF4QixtQkFNRCxxQkFBV04sTUFOVixtQkFBTjs7QUFTQSxJQUFNTyxTQUFTLDJCQUFPQyxNQUFoQixvQkFrQkQscUJBQVdSLE1BbEJWLG9CQUFOIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IG1lZGlhUXVlcnkgZnJvbSAnLi9tZWRpYVF1ZXJ5J1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxIZWFkZXJDb250YWluZXI+XG4gICAgPE5hdmJhciAvPlxuICAgIDxIZWFkZXJUZXh0PlxuICAgICAgPEhlYWRlclRpdGxlPllvdXIgSGVhbHRoLCBZb3VyIFRydXN0LCBZb3VyIENob2ljZS48L0hlYWRlclRpdGxlPlxuICAgICAgPEhlYWRlclN1YnRpdGxlPlxuICAgICAgICA8cD5UaGUgbW9zdCBhdXRoZW50aWMgdHJhZGl0aW9uYWwgQ2hpbmVzZSBtZWRpY2FsIHRyZWF0bWVudDwvcD5cbiAgICAgICAgPHA+aW4gU3RhbWZvcmQsIENUIGFuZCBIYXJyaXNvbiwgTlkuPC9wPlxuICAgICAgPC9IZWFkZXJTdWJ0aXRsZT5cbiAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPlxuICAgICAgICA8QnV0dG9uPk1ha2UgYW4gQXBwb2ludG1lbnQ8L0J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICA8L0hlYWRlclRleHQ+XG4gIDwvSGVhZGVyQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDUzMHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2VudGVyLCByZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC4zMikpLCB1cmwoJy4uL3N0YXRpYy9zdGFtZm9yZDIuanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICAke21lZGlhUXVlcnkudGFibGV0YGhlaWdodDogNTAwcHg7YH1cbmBcblxuY29uc3QgSGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDkwcHg7XG5cdG1heC13aWR0aDogODUlO1xuXHRjb2xvcjogI2ZmZjtcbiAgaDE6IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC0uMDJlbTtcblx0fVxuICAke21lZGlhUXVlcnkudGFibGV0YFxuICAgICAgbWFyZ2luLXRvcDogODBweDsgIFxuICBgfVxuICAke21lZGlhUXVlcnkubW9iaWxlYFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgYH1cbmBcbiAgY29uc3QgSGVhZGVyVGl0bGUgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgICBmb250LXNpemU6IDIuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsMCwwLC4wNSk7XG4gICAgJHttZWRpYVF1ZXJ5LnRhYmxldGBmb250LXNpemU6IDJlbTtgfVxuXG5gXG5cbiBjb25zdCBIZWFkZXJTdWJ0aXRsZSA9IHN0eWxlZC5oM2BcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAke21lZGlhUXVlcnkudGFibGV0YGZvbnQtc2l6ZTogMS4xNWVtO2B9XG5gXG5cbiBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgcGFkZGluZzogMTRweCAyNnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDE2OCw1MCwuOTUpO1xuICAgIGNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRmb250LXNpemU6IC45NWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuXHRcdCY6aG92ZXJ7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwxNjgsNTAsMSk7XG5cdFx0fVxuXHRcdCY6Zm9jdXN7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOjA7XG5cdFx0fVxuICAgICR7bWVkaWFRdWVyeS50YWJsZXRgXG4gICAgICBmb250LXNpemU6IC44OWVtOyAgXG4gICAgICBsZXR0ZXItc3BhY2luZzogLjQycHg7XG4gICAgYH1cbmAiXX0=