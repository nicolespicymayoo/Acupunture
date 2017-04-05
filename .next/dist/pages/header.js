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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJIZWFkZXJDb250YWluZXIiLCJkaXYiLCJIZWFkZXJUZXh0IiwiSGVhZGVyVGl0bGUiLCJoMSIsIkhlYWRlclN1YnRpdGxlIiwiaDMiLCJCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUFDLG1CQUFEO0FBQUE7QUFDRSx5REFERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQUZGO0FBTUU7QUFBQTtBQUFBLFVBQUcsTUFBSyxVQUFSO0FBQ0U7QUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQURGO0FBTkY7QUFGRixHQURhO0FBQUEsQ0FBZjs7a0JBZ0JlQSxNOzs7QUFHZixJQUFNQyxrQkFBa0IsMkJBQU9DLEdBQXpCLGlCQUFOOztBQVNBLElBQU1DLGFBQWEsMkJBQU9ELEdBQXBCLGtCQUFOOztBQWNFLElBQU1FLGNBQWMsMkJBQU9DLEVBQXJCLGtCQUFOOztBQU9ELElBQU1DLGlCQUFpQiwyQkFBT0MsRUFBeEIsa0JBQU47O0FBTUEsSUFBTUMsU0FBUywyQkFBT0MsTUFBaEIsa0JBQU4iLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPEhlYWRlckNvbnRhaW5lcj5cbiAgICA8TmF2YmFyIC8+XG4gICAgPEhlYWRlclRleHQ+XG4gICAgICA8SGVhZGVyVGl0bGU+WW91ciBIZWFsdGgsIFlvdXIgVHJ1c3QsIFlvdXIgQ2hvaWNlLjwvSGVhZGVyVGl0bGU+XG4gICAgICA8SGVhZGVyU3VidGl0bGU+XG4gICAgICAgIDxwPlRoZSBtb3N0IGF1dGhlbnRpYyB0cmFkaXRpb25hbCBDaGluZXNlIG1lZGljYWwgdHJlYXRtZW50PC9wPlxuICAgICAgICA8cD5pbiBTdGFtZm9yZCwgQ1QgYW5kIEhhcnJpc29uLCBOWS48L3A+XG4gICAgICA8L0hlYWRlclN1YnRpdGxlPlxuICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+XG4gICAgICAgIDxCdXR0b24+TWFrZSBhbiBBcHBvaW50bWVudDwvQnV0dG9uPlxuICAgICAgPC9hPlxuICAgIDwvSGVhZGVyVGV4dD5cbiAgPC9IZWFkZXJDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbmNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNTMwcHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjZW50ZXIsIHJnYmEoMCwgMCwgMCwgMC41NCksIHJnYmEoMCwgMCwgMCwgMC4zMikpLCB1cmwoJy4uL3N0YXRpYy9zdGFtZm9yZDIuanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICBwYWRkaW5nLXRvcDogMzBweDtcbmBcblxuY29uc3QgSGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDkwcHg7XG5cdG1heC13aWR0aDogODUlO1xuXHRjb2xvcjogI2ZmZjtcbiAgaDE6IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC0uMDJlbTtcblx0fVxuYFxuXG4gIGNvbnN0IEhlYWRlclRpdGxlID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgZm9udC1zaXplOiAyLjdlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLDAsMCwuMDUpO1xuYFxuXG4gY29uc3QgSGVhZGVyU3VidGl0bGUgPSBzdHlsZWQuaDNgXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogLjc7XG5gXG5cbiBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgcGFkZGluZzogMTRweCAyNnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDE2OCw1MCwuOTUpO1xuICAgIGNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRmb250LXNpemU6IC45NWVtO1xuXHRcdCY6aG92ZXJ7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwxNjgsNTAsMSk7XG5cdFx0fVxuXHRcdCY6Zm9jdXN7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0fVxuYCJdfQ==