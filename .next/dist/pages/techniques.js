'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 80px;\n  border-bottom: 1px solid #fafafa;\n'], ['\n\tpadding: 80px;\n  border-bottom: 1px solid #fafafa;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n  margin: 90px 10px 100px;\n'], ['\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n  margin: 90px 10px 100px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  img{\n      width: 85%;\n      margin-bottom: 30px;\n  }\n\n  p{\n    letter-spacing: .38px;\n    font-size: 1.082em;\n  }\n'], ['\n  text-align: center;\n  img{\n      width: 85%;\n      margin-bottom: 30px;\n  }\n\n  p{\n    letter-spacing: .38px;\n    font-size: 1.082em;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 75% !important;  \n'], ['\n  width: 75% !important;  \n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _SectionTitle = require('../components/SectionTitle.js');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Techniques = function Techniques() {
  return _react2.default.createElement(
    TechniquesContainer,
    null,
    _react2.default.createElement(
      _SectionTitle2.default,
      null,
      'Our Techniques'
    ),
    _react2.default.createElement(
      TechniquesList,
      null,
      _react2.default.createElement(
        TechniqueItem,
        null,
        _react2.default.createElement(Img1, { src: '../static/icons/acupuncture.png' }),
        _react2.default.createElement(
          'p',
          null,
          'Acupuncture'
        )
      ),
      _react2.default.createElement(
        TechniqueItem,
        null,
        _react2.default.createElement('img', { src: '../static/icons/moxa.png' }),
        _react2.default.createElement(
          'p',
          null,
          'Moxa'
        )
      ),
      _react2.default.createElement(
        TechniqueItem,
        null,
        _react2.default.createElement('img', { src: '../static/icons/cupping.png' }),
        _react2.default.createElement(
          'p',
          null,
          'Cupping'
        )
      ),
      _react2.default.createElement(
        TechniqueItem,
        null,
        _react2.default.createElement('img', { src: '../static/icons/gua-sha.png' }),
        _react2.default.createElement(
          'p',
          null,
          'Gua Sha'
        )
      ),
      _react2.default.createElement(
        TechniqueItem,
        null,
        _react2.default.createElement('img', { src: '../static/icons/herbal.png' }),
        _react2.default.createElement(
          'p',
          null,
          'Herbs'
        )
      )
    )
  );
};

exports.default = Techniques;


var TechniquesContainer = _styledComponents2.default.div(_templateObject);

var TechniquesList = _styledComponents2.default.div(_templateObject2);

var TechniqueItem = _styledComponents2.default.div(_templateObject3);
// first image is larger than others
var Img1 = _styledComponents2.default.img(_templateObject4);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RlY2huaXF1ZXMuanMiXSwibmFtZXMiOlsiVGVjaG5pcXVlcyIsIlRlY2huaXF1ZXNDb250YWluZXIiLCJkaXYiLCJUZWNobmlxdWVzTGlzdCIsIlRlY2huaXF1ZUl0ZW0iLCJJbWcxIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCO0FBQUMsdUJBQUQ7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEQTtBQUVFO0FBQUMsb0JBQUQ7QUFBQTtBQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLHNDQUFDLElBQUQsSUFBTSxLQUFJLGlDQUFWLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FERjtBQUtFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLCtDQUFLLEtBQUksMEJBQVQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQUxGO0FBU0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsK0NBQUssS0FBSSw2QkFBVCxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BVEY7QUFhRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSwrQ0FBSyxLQUFJLDZCQUFULEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FiRjtBQWlCRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSwrQ0FBSyxLQUFJLDRCQUFULEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFqQkY7QUFGRixHQURpQjtBQUFBLENBQW5COztrQkE0QmVBLFU7OztBQUVmLElBQU1DLHNCQUFzQiwyQkFBT0MsR0FBN0IsaUJBQU47O0FBS0EsSUFBTUMsaUJBQWlCLDJCQUFPRCxHQUF4QixrQkFBTjs7QUFPQSxJQUFNRSxnQkFBZ0IsMkJBQU9GLEdBQXZCLGtCQUFOO0FBWUE7QUFDQSxJQUFNRyxPQUFPLDJCQUFPQyxHQUFkLGtCQUFOIiwiZmlsZSI6InRlY2huaXF1ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUuanMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBUZWNobmlxdWVzID0gKCkgPT4gKFxuICA8VGVjaG5pcXVlc0NvbnRhaW5lcj5cblx0XHQ8U2VjdGlvblRpdGxlPk91ciBUZWNobmlxdWVzPC9TZWN0aW9uVGl0bGU+XG4gICAgPFRlY2huaXF1ZXNMaXN0PlxuICAgICAgPFRlY2huaXF1ZUl0ZW0+XG4gICAgICAgIDxJbWcxIHNyYz1cIi4uL3N0YXRpYy9pY29ucy9hY3VwdW5jdHVyZS5wbmdcIi8+XG4gICAgICAgIDxwPkFjdXB1bmN0dXJlPC9wPlxuICAgICAgPC9UZWNobmlxdWVJdGVtPlxuICAgICAgPFRlY2huaXF1ZUl0ZW0+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ljb25zL21veGEucG5nXCIvPlxuICAgICAgICA8cD5Nb3hhPC9wPlxuICAgICAgPC9UZWNobmlxdWVJdGVtPlxuICAgICAgPFRlY2huaXF1ZUl0ZW0+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ljb25zL2N1cHBpbmcucG5nXCIvPlxuICAgICAgICA8cD5DdXBwaW5nPC9wPlxuICAgICAgPC9UZWNobmlxdWVJdGVtPlxuICAgICAgPFRlY2huaXF1ZUl0ZW0+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ljb25zL2d1YS1zaGEucG5nXCIvPlxuICAgICAgICA8cD5HdWEgU2hhPC9wPlxuICAgICAgPC9UZWNobmlxdWVJdGVtPlxuICAgICAgPFRlY2huaXF1ZUl0ZW0+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ljb25zL2hlcmJhbC5wbmdcIi8+XG4gICAgICAgIDxwPkhlcmJzPC9wPlxuICAgICAgPC9UZWNobmlxdWVJdGVtPlxuICAgIDwvVGVjaG5pcXVlc0xpc3Q+XG5cdDwvVGVjaG5pcXVlc0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgVGVjaG5pcXVlc1xuXG5jb25zdCBUZWNobmlxdWVzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZzogODBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYWZhZmE7XG5gXG5cbmNvbnN0IFRlY2huaXF1ZXNMaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgbWFyZ2luOiA5MHB4IDEwcHggMTAwcHg7XG5gXG5cbmNvbnN0IFRlY2huaXF1ZUl0ZW0gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGltZ3tcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgcHtcbiAgICBsZXR0ZXItc3BhY2luZzogLjM4cHg7XG4gICAgZm9udC1zaXplOiAxLjA4MmVtO1xuICB9XG5gXG4vLyBmaXJzdCBpbWFnZSBpcyBsYXJnZXIgdGhhbiBvdGhlcnNcbmNvbnN0IEltZzEgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7ICBcbmAiXX0=