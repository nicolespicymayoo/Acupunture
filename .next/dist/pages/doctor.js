'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  // height: 450px;\n  padding: 30px 0;  \n  border-bottom: 1px dotted rgba(0,0,0,.3);\n  border-top: 1px dotted rgba(0,0,0,.1);\n  ', '\n'], ['\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  // height: 450px;\n  padding: 30px 0;  \n  border-bottom: 1px dotted rgba(0,0,0,.3);\n  border-top: 1px dotted rgba(0,0,0,.1);\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['background: none;'], ['background: none;']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  max-width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 25px;\n  p{\n    line-height: 1.8;\n\t  font-size: 1.06em;\n    text-align: center;\n  }\n  ', '\n  ', '\n'], ['\n  float: left;\n  max-width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 25px;\n  p{\n    line-height: 1.8;\n\t  font-size: 1.06em;\n    text-align: center;\n  }\n  ', '\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    float: none;\n    margin: 25px auto; \n    text-align: center;\n  '], ['\n    float: none;\n    margin: 25px auto; \n    text-align: center;\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    padding: 0 25px;\n    margin: 20px 0;\n  '], ['\n    padding: 0 25px;\n    margin: 20px 0;\n  ']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Doctor = function Doctor() {
  return _react2.default.createElement(
    DoctorContainer,
    { id: 'doctor' },
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


var DoctorContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.tablet(_templateObject2));

var DoctorText = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.tablet(_templateObject4), _mediaQuery2.default.mobile(_templateObject5));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RvY3Rvci5qcyJdLCJuYW1lcyI6WyJEb2N0b3IiLCJEb2N0b3JDb250YWluZXIiLCJkaXYiLCJ0YWJsZXQiLCJEb2N0b3JUZXh0IiwibW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ2I7QUFBQyxtQkFBRDtBQUFBLE1BQWlCLElBQUcsUUFBcEI7QUFDRTtBQUFDLGdCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFtUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW5SO0FBQUE7QUFBQTtBQUZGO0FBREYsR0FEYTtBQUFBLENBQWY7O2tCQVNlQSxNOzs7QUFHZixJQUFNQyxrQkFBa0IsMkJBQU9DLEdBQXpCLGtCQU9GLHFCQUFXQyxNQVBULG1CQUFOOztBQVVBLElBQU1DLGFBQWEsMkJBQU9GLEdBQXBCLG1CQVdGLHFCQUFXQyxNQVhULG9CQWdCRixxQkFBV0UsTUFoQlQsbUJBQU4iLCJmaWxlIjoiZG9jdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBtZWRpYVF1ZXJ5IGZyb20gJy4vbWVkaWFRdWVyeSdcblxuY29uc3QgRG9jdG9yID0gKCkgPT4gKFxuICA8RG9jdG9yQ29udGFpbmVyIGlkPVwiZG9jdG9yXCI+XG4gICAgPERvY3RvclRleHQ+XG4gICAgICA8U2VjdGlvblRpdGxlPk1lZXQgdGhlIERvY3RvcjwvU2VjdGlvblRpdGxlPlxuICAgICAgPHA+IERyLiBKaW5nIGhvbGRzIGEgYmFjaGVsb3JzIGRlZ3JlZSBpbiBDaGluZXNlIFRyYWRpdGlvbmFsIE1lZGljaW5lIGFuZCBXZXN0ZXJuIE1lZGljaW5lIGZyb20gdGhlIFVuaXZlcnNpdHkgb2YgQ2hlbmdkdSwgb25lIG9mIHRoZSB0b3AgZml2ZSBUcmFkaXRpb25hbCBDaGluZXNlIE1lZGljaW5lKFRDTSkgVW5pdmVyc2l0aWVzIGluIENoaW5hLiBEci4gSmluZyB3YXMgYSBtZWRpY2FsIGRvY3RvciBhdCB0aGUg4oCcUGVvcGxlIEhvc3BpdGFsIG9mIENoZW5nZHVcIiBmb3Igb3ZlciA8Yj4zMiB5ZWFyczwvYj4uIEppbmcgaXMgYSBOYXRpb25hbCBCb2FyZCBDZXJ0aWZpZWQgYWN1cHVuY3R1cmlzdCBhbmQgaXMgbGljZW5zZWQgaW4gTlkgYW5kIENULiAgU2hlIGhhcyBwcmFjdGljZWQgYWN1cHVuY3R1cmUgaW4gVW5pdGVkIFN0YXRlcyBmb3IgMTAgeWVhcnMsIGFuZCBoYXMgYmVlbiBjb25zaWRlcmVkIGEgcmVjb2duaXplZCBhY3VwdW5jdHVyaXN0IGluIENUIGFuZCBOWS48L3A+XG4gICA8L0RvY3RvclRleHQ+XG4gIDwvRG9jdG9yQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JcblxuXG5jb25zdCBEb2N0b3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9qaW5namlhbmcuanBnJykgbm8tcmVwZWF0IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBoZWlnaHQ6IDQ1MHB4O1xuICBwYWRkaW5nOiAzMHB4IDA7ICBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2JhKDAsMCwwLC4zKTtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKDAsMCwwLC4xKTtcbiAgJHttZWRpYVF1ZXJ5LnRhYmxldGBiYWNrZ3JvdW5kOiBub25lO2B9XG5gXG5cbmNvbnN0IERvY3RvclRleHQgPSBzdHlsZWQuZGl2YFxuICBmbG9hdDogbGVmdDtcbiAgbWF4LXdpZHRoOiAzODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHB7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcblx0ICBmb250LXNpemU6IDEuMDZlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgJHttZWRpYVF1ZXJ5LnRhYmxldGBcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IDI1cHggYXV0bzsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBgfVxuICAke21lZGlhUXVlcnkubW9iaWxlYFxuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgYH1cbmAiXX0=