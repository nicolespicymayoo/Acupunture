'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.sizes = undefined;

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _keys = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  ']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = exports.sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  mobile: 450
};

var media = exports.media = (0, _keys2.default)(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL01lZGlhU2l6ZXMuanMiXSwibmFtZXMiOlsic2l6ZXMiLCJnaWFudCIsImRlc2t0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJtZWRpYSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwibGFiZWwiLCJlbVNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVPLElBQU1BLHdCQUFRO0FBQ25CQyxTQUFPLElBRFk7QUFFbkJDLFdBQVMsR0FGVTtBQUduQkMsVUFBUSxHQUhXO0FBSW5CQyxVQUFRO0FBSlcsQ0FBZDs7QUFPQSxJQUFNQyx3QkFBUSxvQkFBWUwsS0FBWixFQUFtQk0sTUFBbkIsQ0FBMEIsVUFBQ0MsV0FBRCxFQUFjQyxLQUFkLEVBQXdCO0FBQ3JFO0FBQ0E7QUFDQSxNQUFNQyxTQUFTVCxNQUFNUSxLQUFOLElBQWUsRUFBOUI7QUFDQUQsY0FBWUMsS0FBWixJQUFxQjtBQUFBLHVEQUNFQyxNQURGLEVBRWYsaURBRmU7QUFBQSxHQUFyQjtBQUtBLFNBQU9GLFdBQVA7QUFDRCxDQVZvQixFQVVsQixFQVZrQixDQUFkIiwiZmlsZSI6Ik1lZGlhU2l6ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3Qgc2l6ZXMgPSB7XG4gIGdpYW50OiAxMTcwLFxuICBkZXNrdG9wOiA5OTIsXG4gIHRhYmxldDogNzY4LFxuICBtb2JpbGU6IDQ1MFxufVxuXG5leHBvcnQgY29uc3QgbWVkaWEgPSBPYmplY3Qua2V5cyhzaXplcykucmVkdWNlKChhY2N1bXVsYXRvciwgbGFiZWwpID0+IHtcbiAgLy8gdXNlIGVtIGluIGJyZWFrcG9pbnRzIHRvIHdvcmsgcHJvcGVybHkgY3Jvc3MtYnJvd3NlciBhbmQgc3VwcG9ydCB1c2Vyc1xuICAvLyBjaGFuZ2luZyB0aGVpciBicm93c2VycyBmb250LXNpemU6IGh0dHBzOi8vemVsbHdrLmNvbS9ibG9nL21lZGlhLXF1ZXJ5LXVuaXRzL1xuICBjb25zdCBlbVNpemUgPSBzaXplc1tsYWJlbF0gLyAxNlxuICBhY2N1bXVsYXRvcltsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzYFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgfVxuICBgXG4gIHJldHVybiBhY2N1bXVsYXRvclxufSwge30pIl19