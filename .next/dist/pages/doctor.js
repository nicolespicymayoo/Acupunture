'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  height: 450px;\n  padding: 30px 0;  \n'], ['\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  height: 450px;\n  padding: 30px 0;  \n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  p{\n    line-height: 1.7;\n\t  font-size: 1.06em;\n  }\n'], ['\n  float: left;\n  width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  p{\n    line-height: 1.7;\n\t  font-size: 1.06em;\n  }\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Doctor = function Doctor() {
  return _react2.default.createElement(
    DoctorContainer,
    null,
    _react2.default.createElement(
      DoctorText,
      null,
      _react2.default.createElement(
        _SectionTitle2.default,
        null,
        'Meet the Doctor'
      ),
      _react2.default.createElement(
        'p',
        null,
        ' Dr. Jing holds a bachelors degree in Chinese Traditional Medicine and Western Medicine from the University of Chengdu, one of the top five Traditional Chinese Medicine(TCM) Universities in China. Dr. Jing was a medical doctor at the \u201CPeople Hospital of Chengdu" for over ',
        _react2.default.createElement(
          'b',
          null,
          '32 years'
        ),
        '. Jing is a National Board Certified acupuncturist and is licensed in NY and CT.  She has practiced acupuncture in United States for 10 years, and has been considered a recognized acupuncturist in CT and NY.'
      )
    )
  );
};

exports.default = Doctor;


var DoctorContainer = _styledComponents2.default.div(_templateObject);

var DoctorText = _styledComponents2.default.div(_templateObject2);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RvY3Rvci5qcyJdLCJuYW1lcyI6WyJEb2N0b3IiLCJEb2N0b3JDb250YWluZXIiLCJkaXYiLCJEb2N0b3JUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQUMsbUJBQUQ7QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQW1SO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBblI7QUFBQTtBQUFBO0FBRkY7QUFERixHQURhO0FBQUEsQ0FBZjs7a0JBU2VBLE07OztBQUdmLElBQU1DLGtCQUFrQiwyQkFBT0MsR0FBekIsaUJBQU47O0FBT0EsSUFBTUMsYUFBYSwyQkFBT0QsR0FBcEIsa0JBQU4iLCJmaWxlIjoiZG9jdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZSdcblxuY29uc3QgRG9jdG9yID0gKCkgPT4gKFxuICA8RG9jdG9yQ29udGFpbmVyPlxuICAgIDxEb2N0b3JUZXh0PlxuICAgICAgPFNlY3Rpb25UaXRsZT5NZWV0IHRoZSBEb2N0b3I8L1NlY3Rpb25UaXRsZT5cbiAgICAgIDxwPiBEci4gSmluZyBob2xkcyBhIGJhY2hlbG9ycyBkZWdyZWUgaW4gQ2hpbmVzZSBUcmFkaXRpb25hbCBNZWRpY2luZSBhbmQgV2VzdGVybiBNZWRpY2luZSBmcm9tIHRoZSBVbml2ZXJzaXR5IG9mIENoZW5nZHUsIG9uZSBvZiB0aGUgdG9wIGZpdmUgVHJhZGl0aW9uYWwgQ2hpbmVzZSBNZWRpY2luZShUQ00pIFVuaXZlcnNpdGllcyBpbiBDaGluYS4gRHIuIEppbmcgd2FzIGEgbWVkaWNhbCBkb2N0b3IgYXQgdGhlIOKAnFBlb3BsZSBIb3NwaXRhbCBvZiBDaGVuZ2R1XCIgZm9yIG92ZXIgPGI+MzIgeWVhcnM8L2I+LiBKaW5nIGlzIGEgTmF0aW9uYWwgQm9hcmQgQ2VydGlmaWVkIGFjdXB1bmN0dXJpc3QgYW5kIGlzIGxpY2Vuc2VkIGluIE5ZIGFuZCBDVC4gIFNoZSBoYXMgcHJhY3RpY2VkIGFjdXB1bmN0dXJlIGluIFVuaXRlZCBTdGF0ZXMgZm9yIDEwIHllYXJzLCBhbmQgaGFzIGJlZW4gY29uc2lkZXJlZCBhIHJlY29nbml6ZWQgYWN1cHVuY3R1cmlzdCBpbiBDVCBhbmQgTlkuPC9wPlxuICAgPC9Eb2N0b3JUZXh0PlxuICA8L0RvY3RvckNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yXG5cblxuY29uc3QgRG9jdG9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvamluZ2ppYW5nLmpwZycpIG5vLXJlcGVhdCB0b3AgbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgcGFkZGluZzogMzBweCAwOyAgXG5gXG5cbmNvbnN0IERvY3RvclRleHQgPSBzdHlsZWQuZGl2YFxuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgcHtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuXHQgIGZvbnQtc2l6ZTogMS4wNmVtO1xuICB9XG5gIl19