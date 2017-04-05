'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 80px;\n'], ['\n\tpadding: 80px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n  margin: 90px 70px 100px;\n'], ['\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n  margin: 90px 70px 100px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  img{\n      width: 80%;\n      margin-bottom: 30px;\n  }\n\n  p{\n    letter-spacing: .38px;\n    font-size: 1.082em;\n  }\n'], ['\n  text-align: center;\n  img{\n      width: 80%;\n      margin-bottom: 30px;\n  }\n\n  p{\n    letter-spacing: .38px;\n    font-size: 1.082em;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70% !important;  \n'], ['\n  width: 70% !important;  \n']);

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
    { id: 'techniques' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RlY2huaXF1ZXMuanMiXSwibmFtZXMiOlsiVGVjaG5pcXVlcyIsIlRlY2huaXF1ZXNDb250YWluZXIiLCJkaXYiLCJUZWNobmlxdWVzTGlzdCIsIlRlY2huaXF1ZUl0ZW0iLCJJbWcxIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCO0FBQUMsdUJBQUQ7QUFBQSxNQUFxQixJQUFHLFlBQXhCO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURBO0FBRUU7QUFBQyxvQkFBRDtBQUFBO0FBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0Usc0NBQUMsSUFBRCxJQUFNLEtBQUksaUNBQVYsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQURGO0FBS0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsK0NBQUssS0FBSSwwQkFBVCxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BTEY7QUFTRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSwrQ0FBSyxLQUFJLDZCQUFULEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FURjtBQWFFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLCtDQUFLLEtBQUksNkJBQVQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQWJGO0FBaUJFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLCtDQUFLLEtBQUksNEJBQVQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQWpCRjtBQUZGLEdBRGlCO0FBQUEsQ0FBbkI7O2tCQTRCZUEsVTs7O0FBRWYsSUFBTUMsc0JBQXNCLDJCQUFPQyxHQUE3QixpQkFBTjs7QUFJQSxJQUFNQyxpQkFBaUIsMkJBQU9ELEdBQXhCLGtCQUFOOztBQU9BLElBQU1FLGdCQUFnQiwyQkFBT0YsR0FBdkIsa0JBQU47QUFZQTtBQUNBLElBQU1HLE9BQU8sMkJBQU9DLEdBQWQsa0JBQU4iLCJmaWxlIjoidGVjaG5pcXVlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZS5qcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFRlY2huaXF1ZXMgPSAoKSA9PiAoXG4gIDxUZWNobmlxdWVzQ29udGFpbmVyIGlkPVwidGVjaG5pcXVlc1wiPlxuXHRcdDxTZWN0aW9uVGl0bGU+T3VyIFRlY2huaXF1ZXM8L1NlY3Rpb25UaXRsZT5cbiAgICA8VGVjaG5pcXVlc0xpc3Q+XG4gICAgICA8VGVjaG5pcXVlSXRlbT5cbiAgICAgICAgPEltZzEgc3JjPVwiLi4vc3RhdGljL2ljb25zL2FjdXB1bmN0dXJlLnBuZ1wiLz5cbiAgICAgICAgPHA+QWN1cHVuY3R1cmU8L3A+XG4gICAgICA8L1RlY2huaXF1ZUl0ZW0+XG4gICAgICA8VGVjaG5pcXVlSXRlbT5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNvbnMvbW94YS5wbmdcIi8+XG4gICAgICAgIDxwPk1veGE8L3A+XG4gICAgICA8L1RlY2huaXF1ZUl0ZW0+XG4gICAgICA8VGVjaG5pcXVlSXRlbT5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNvbnMvY3VwcGluZy5wbmdcIi8+XG4gICAgICAgIDxwPkN1cHBpbmc8L3A+XG4gICAgICA8L1RlY2huaXF1ZUl0ZW0+XG4gICAgICA8VGVjaG5pcXVlSXRlbT5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNvbnMvZ3VhLXNoYS5wbmdcIi8+XG4gICAgICAgIDxwPkd1YSBTaGE8L3A+XG4gICAgICA8L1RlY2huaXF1ZUl0ZW0+XG4gICAgICA8VGVjaG5pcXVlSXRlbT5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNvbnMvaGVyYmFsLnBuZ1wiLz5cbiAgICAgICAgPHA+SGVyYnM8L3A+XG4gICAgICA8L1RlY2huaXF1ZUl0ZW0+XG4gICAgPC9UZWNobmlxdWVzTGlzdD5cblx0PC9UZWNobmlxdWVzQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUZWNobmlxdWVzXG5cbmNvbnN0IFRlY2huaXF1ZXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRwYWRkaW5nOiA4MHB4O1xuYFxuXG5jb25zdCBUZWNobmlxdWVzTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIG1hcmdpbjogOTBweCA3MHB4IDEwMHB4O1xuYFxuXG5jb25zdCBUZWNobmlxdWVJdGVtID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWd7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIHB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zOHB4O1xuICAgIGZvbnQtc2l6ZTogMS4wODJlbTtcbiAgfVxuYFxuLy8gZmlyc3QgaW1hZ2UgaXMgbGFyZ2VyIHRoYW4gb3RoZXJzXG5jb25zdCBJbWcxID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDcwJSAhaW1wb3J0YW50OyAgXG5gIl19