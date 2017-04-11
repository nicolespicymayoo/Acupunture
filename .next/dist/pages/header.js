'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  padding-top: 30px;\n  ', '\n  ', '\n'], ['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  padding-top: 30px;\n  ', '\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['height: 500px;'], ['height: 500px;']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['padding-top: 10px;'], ['padding-top: 10px;']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n  ', '\n  ', '\n'], ['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n  ', '\n  ', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: 80px;  \n  '], ['\n      margin-top: 80px;  \n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: 50px;\n  '], ['\n      margin-top: 50px;\n  ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n    ', '\n\n'], ['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n    ', '\n\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['font-size: 2em;'], ['font-size: 2em;']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n    ', '\n'], ['\n    padding-top: 20px;\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: 1.7;\n    text-shadow: 0 1px 5px rgba(0,0,0,.3);\n    ', '\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['font-size: 1.15em;'], ['font-size: 1.15em;']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n    ', '\n'], ['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n    letter-spacing: .4px;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n      outline:0;\n\t\t}\n    ', '\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n      font-size: .89em;  \n      letter-spacing: .42px;\n    '], ['\n      font-size: .89em;  \n      letter-spacing: .42px;\n    ']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MediaSizes = require('./MediaSizes');

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


var HeaderContainer = _styledComponents2.default.div(_templateObject, _MediaSizes.media.tablet(_templateObject2), _MediaSizes.media.mobile(_templateObject3));

var HeaderText = _styledComponents2.default.div(_templateObject4, _MediaSizes.media.tablet(_templateObject5), _MediaSizes.media.mobile(_templateObject6));
var HeaderTitle = _styledComponents2.default.h1(_templateObject7, _MediaSizes.media.tablet(_templateObject8));

var HeaderSubtitle = _styledComponents2.default.h3(_templateObject9, _MediaSizes.media.tablet(_templateObject10));

var Button = _styledComponents2.default.button(_templateObject11, _MediaSizes.media.tablet(_templateObject12));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJIZWFkZXJDb250YWluZXIiLCJkaXYiLCJ0YWJsZXQiLCJtb2JpbGUiLCJIZWFkZXJUZXh0IiwiSGVhZGVyVGl0bGUiLCJoMSIsIkhlYWRlclN1YnRpdGxlIiwiaDMiLCJCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ2I7QUFBQyxtQkFBRDtBQUFBO0FBQ0UseURBREY7QUFFRTtBQUFDLGdCQUFEO0FBQUE7QUFDRTtBQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLHNCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FGRjtBQU1FO0FBQUE7QUFBQSxVQUFHLE1BQUssVUFBUjtBQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFERjtBQU5GO0FBRkYsR0FEYTtBQUFBLENBQWY7O2tCQWdCZUEsTTs7O0FBR2YsSUFBTUMsa0JBQWtCLDJCQUFPQyxHQUF6QixrQkFPRixrQkFBTUMsTUFQSixvQkFRRixrQkFBTUMsTUFSSixtQkFBTjs7QUFXQSxJQUFNQyxhQUFhLDJCQUFPSCxHQUFwQixtQkFZRixrQkFBTUMsTUFaSixvQkFlRixrQkFBTUMsTUFmSixtQkFBTjtBQW1CRSxJQUFNRSxjQUFjLDJCQUFPQyxFQUFyQixtQkFLRixrQkFBTUosTUFMSixtQkFBTjs7QUFTRCxJQUFNSyxpQkFBaUIsMkJBQU9DLEVBQXhCLG1CQU1ELGtCQUFNTixNQU5MLG9CQUFOOztBQVNBLElBQU1PLFNBQVMsMkJBQU9DLE1BQWhCLG9CQWtCRCxrQkFBTVIsTUFsQkwsb0JBQU4iLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBtZWRpYSwgc2l6ZXMgfSBmcm9tICcuL01lZGlhU2l6ZXMnIFxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxIZWFkZXJDb250YWluZXI+XG4gICAgPE5hdmJhciAvPlxuICAgIDxIZWFkZXJUZXh0PlxuICAgICAgPEhlYWRlclRpdGxlPllvdXIgSGVhbHRoLCBZb3VyIFRydXN0LCBZb3VyIENob2ljZS48L0hlYWRlclRpdGxlPlxuICAgICAgPEhlYWRlclN1YnRpdGxlPlxuICAgICAgICA8cD5UaGUgbW9zdCBhdXRoZW50aWMgdHJhZGl0aW9uYWwgQ2hpbmVzZSBtZWRpY2FsIHRyZWF0bWVudDwvcD5cbiAgICAgICAgPHA+aW4gU3RhbWZvcmQsIENUIGFuZCBIYXJyaXNvbiwgTlkuPC9wPlxuICAgICAgPC9IZWFkZXJTdWJ0aXRsZT5cbiAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPlxuICAgICAgICA8QnV0dG9uPk1ha2UgYW4gQXBwb2ludG1lbnQ8L0J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICA8L0hlYWRlclRleHQ+XG4gIDwvSGVhZGVyQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDUzMHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2VudGVyLCByZ2JhKDAsIDAsIDAsIDAuNTYpLCByZ2JhKDAsIDAsIDAsIDAuMzIpKSwgdXJsKCcuLi9zdGF0aWMvc3RhbWZvcmQyLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gICR7bWVkaWEudGFibGV0YGhlaWdodDogNTAwcHg7YH1cbiAgJHttZWRpYS5tb2JpbGVgcGFkZGluZy10b3A6IDEwcHg7YH1cbmBcblxuY29uc3QgSGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDkwcHg7XG5cdG1heC13aWR0aDogODUlO1xuXHRjb2xvcjogI2ZmZjtcbiAgaDE6IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC0uMDJlbTtcblx0fVxuICAke21lZGlhLnRhYmxldGBcbiAgICAgIG1hcmdpbi10b3A6IDgwcHg7ICBcbiAgYH1cbiAgJHttZWRpYS5tb2JpbGVgXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICBgfVxuYFxuICBjb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZC5oMWBcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIGZvbnQtc2l6ZTogMi43ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICAke21lZGlhLnRhYmxldGBmb250LXNpemU6IDJlbTtgfVxuXG5gXG5cbiBjb25zdCBIZWFkZXJTdWJ0aXRsZSA9IHN0eWxlZC5oM2BcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAke21lZGlhLnRhYmxldGBmb250LXNpemU6IDEuMTVlbTtgfVxuYFxuXG4gY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHBhZGRpbmc6IDE0cHggMjZweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwxNjgsNTAsLjk1KTtcbiAgICBjb2xvcjogI2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Zm9udC1zaXplOiAuOTVlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcblx0XHQmOmhvdmVye1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMTY4LDUwLDEpO1xuXHRcdH1cblx0XHQmOmZvY3Vze1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuICAgICAgb3V0bGluZTowO1xuXHRcdH1cbiAgICAke21lZGlhLnRhYmxldGBcbiAgICAgIGZvbnQtc2l6ZTogLjg5ZW07ICBcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuNDJweDtcbiAgICBgfVxuYCJdfQ==