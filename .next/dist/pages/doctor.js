'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  height: 450px;\n  padding: 30px 0;  \n  border-bottom: 1px dotted rgba(0,0,0,.3);\n  border-top: 1px dotted rgba(0,0,0,.1);\n'], ['\n  background: url(\'../static/jingjiang.jpg\') no-repeat top left;\n  background-size: cover;\n  height: 450px;\n  padding: 30px 0;  \n  border-bottom: 1px dotted rgba(0,0,0,.3);\n  border-top: 1px dotted rgba(0,0,0,.1);\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 25px;\n  p{\n    line-height: 1.8;\n\t  font-size: 1.06em;\n  }\n'], ['\n  float: left;\n  width: 380px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 25px;\n  p{\n    line-height: 1.8;\n\t  font-size: 1.06em;\n  }\n']);

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


var DoctorContainer = _styledComponents2.default.div(_templateObject);

var DoctorText = _styledComponents2.default.div(_templateObject2);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RvY3Rvci5qcyJdLCJuYW1lcyI6WyJEb2N0b3IiLCJEb2N0b3JDb250YWluZXIiLCJkaXYiLCJEb2N0b3JUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQUMsbUJBQUQ7QUFBQSxNQUFpQixJQUFHLFFBQXBCO0FBQ0U7QUFBQyxnQkFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBbVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFuUjtBQUFBO0FBQUE7QUFGRjtBQURGLEdBRGE7QUFBQSxDQUFmOztrQkFTZUEsTTs7O0FBR2YsSUFBTUMsa0JBQWtCLDJCQUFPQyxHQUF6QixpQkFBTjs7QUFTQSxJQUFNQyxhQUFhLDJCQUFPRCxHQUFwQixrQkFBTiIsImZpbGUiOiJkb2N0b3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlJ1xuXG5jb25zdCBEb2N0b3IgPSAoKSA9PiAoXG4gIDxEb2N0b3JDb250YWluZXIgaWQ9XCJkb2N0b3JcIj5cbiAgICA8RG9jdG9yVGV4dD5cbiAgICAgIDxTZWN0aW9uVGl0bGU+TWVldCB0aGUgRG9jdG9yPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8cD4gRHIuIEppbmcgaG9sZHMgYSBiYWNoZWxvcnMgZGVncmVlIGluIENoaW5lc2UgVHJhZGl0aW9uYWwgTWVkaWNpbmUgYW5kIFdlc3Rlcm4gTWVkaWNpbmUgZnJvbSB0aGUgVW5pdmVyc2l0eSBvZiBDaGVuZ2R1LCBvbmUgb2YgdGhlIHRvcCBmaXZlIFRyYWRpdGlvbmFsIENoaW5lc2UgTWVkaWNpbmUoVENNKSBVbml2ZXJzaXRpZXMgaW4gQ2hpbmEuIERyLiBKaW5nIHdhcyBhIG1lZGljYWwgZG9jdG9yIGF0IHRoZSDigJxQZW9wbGUgSG9zcGl0YWwgb2YgQ2hlbmdkdVwiIGZvciBvdmVyIDxiPjMyIHllYXJzPC9iPi4gSmluZyBpcyBhIE5hdGlvbmFsIEJvYXJkIENlcnRpZmllZCBhY3VwdW5jdHVyaXN0IGFuZCBpcyBsaWNlbnNlZCBpbiBOWSBhbmQgQ1QuICBTaGUgaGFzIHByYWN0aWNlZCBhY3VwdW5jdHVyZSBpbiBVbml0ZWQgU3RhdGVzIGZvciAxMCB5ZWFycywgYW5kIGhhcyBiZWVuIGNvbnNpZGVyZWQgYSByZWNvZ25pemVkIGFjdXB1bmN0dXJpc3QgaW4gQ1QgYW5kIE5ZLjwvcD5cbiAgIDwvRG9jdG9yVGV4dD5cbiAgPC9Eb2N0b3JDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IERvY3RvclxuXG5cbmNvbnN0IERvY3RvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2ppbmdqaWFuZy5qcGcnKSBuby1yZXBlYXQgdG9wIGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNDUwcHg7XG4gIHBhZGRpbmc6IDMwcHggMDsgIFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYmEoMCwwLDAsLjMpO1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYmEoMCwwLDAsLjEpO1xuYFxuXG5jb25zdCBEb2N0b3JUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHB7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcblx0ICBmb250LXNpemU6IDEuMDZlbTtcbiAgfVxuYCJdfQ==