'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  padding-top: 30px;\n'], ['\n  height: 530px;\n\toverflow: hidden;\n\tbackground: radial-gradient(center, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.32)), url(\'../static/stamford2.jpg\');\n  background-position: center bottom;\n  background-size: cover; \n  padding-top: 30px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n'], ['\n  z-index: 9999;\n  text-align: center;\n  width: 800px;\n  margin: auto;\n  margin-top: 90px;\n\tmax-width: 85%;\n\tcolor: #fff;\n  h1: {\n\t\ttext-align: center;\n\t\tletter-spacing: -.02em;\n\t}\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n'], ['\n    font-family: \'Montserrat\';\n    font-size: 2.7em;\n    font-weight: 400;\n    text-shadow: 2px 2px 10px rgba(0,0,0,.05);\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: .7;\n'], ['\n    font-size: 1.25em;\n    font-weight: 300;\n    line-height: .7;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n\t\t}\n'], ['\n    margin-top: 40px;\n    padding: 14px 26px;\n\t\tbackground-color: rgba(235,168,50,.95);\n    color: #fff;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tfont-size: .95em;\n\t\t&:hover{\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(235,168,50,1);\n\t\t}\n\t\t&:focus{\n\t\t\tborder: none;\n\t\t}\n']);

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
        Button,
        null,
        'Make an Appointment'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJIZWFkZXJDb250YWluZXIiLCJkaXYiLCJIZWFkZXJUZXh0IiwiSGVhZGVyVGl0bGUiLCJoMSIsIkhlYWRlclN1YnRpdGxlIiwiaDMiLCJCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUFDLG1CQUFEO0FBQUE7QUFDRSx5REFERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQUZGO0FBTUU7QUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFGRixHQURhO0FBQUEsQ0FBZjs7a0JBY2VBLE07OztBQUdmLElBQU1DLGtCQUFrQiwyQkFBT0MsR0FBekIsaUJBQU47O0FBU0EsSUFBTUMsYUFBYSwyQkFBT0QsR0FBcEIsa0JBQU47O0FBY0UsSUFBTUUsY0FBYywyQkFBT0MsRUFBckIsa0JBQU47O0FBT0QsSUFBTUMsaUJBQWlCLDJCQUFPQyxFQUF4QixrQkFBTjs7QUFNQSxJQUFNQyxTQUFTLDJCQUFPQyxNQUFoQixrQkFBTiIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8SGVhZGVyQ29udGFpbmVyPlxuICAgIDxOYXZiYXIgLz5cbiAgICA8SGVhZGVyVGV4dD5cbiAgICAgIDxIZWFkZXJUaXRsZT5Zb3VyIEhlYWx0aCwgWW91ciBUcnVzdCwgWW91ciBDaG9pY2UuPC9IZWFkZXJUaXRsZT5cbiAgICAgIDxIZWFkZXJTdWJ0aXRsZT5cbiAgICAgICAgPHA+VGhlIG1vc3QgYXV0aGVudGljIHRyYWRpdGlvbmFsIENoaW5lc2UgbWVkaWNhbCB0cmVhdG1lbnQ8L3A+XG4gICAgICAgIDxwPmluIFN0YW1mb3JkLCBDVCBhbmQgSGFycmlzb24sIE5ZLjwvcD5cbiAgICAgIDwvSGVhZGVyU3VidGl0bGU+XG4gICAgICA8QnV0dG9uPk1ha2UgYW4gQXBwb2ludG1lbnQ8L0J1dHRvbj5cbiAgICA8L0hlYWRlclRleHQ+XG4gIDwvSGVhZGVyQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDUzMHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2VudGVyLCByZ2JhKDAsIDAsIDAsIDAuNTQpLCByZ2JhKDAsIDAsIDAsIDAuMzIpKSwgdXJsKCcuLi9zdGF0aWMvc3RhbWZvcmQyLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgcGFkZGluZy10b3A6IDMwcHg7XG5gXG5cbmNvbnN0IEhlYWRlclRleHQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuXHRtYXgtd2lkdGg6IDg1JTtcblx0Y29sb3I6ICNmZmY7XG4gIGgxOiB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGxldHRlci1zcGFjaW5nOiAtLjAyZW07XG5cdH1cbmBcblxuICBjb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZC5oMWBcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIGZvbnQtc2l6ZTogMi43ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwwLDAsLjA1KTtcbmBcblxuIGNvbnN0IEhlYWRlclN1YnRpdGxlID0gc3R5bGVkLmgzYFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IC43O1xuYFxuXG4gY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHBhZGRpbmc6IDE0cHggMjZweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwxNjgsNTAsLjk1KTtcbiAgICBjb2xvcjogI2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Zm9udC1zaXplOiAuOTVlbTtcblx0XHQmOmhvdmVye1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMTY4LDUwLDEpO1xuXHRcdH1cblx0XHQmOmZvY3Vze1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdH1cbmAiXX0=