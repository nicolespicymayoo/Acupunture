'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _keys = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  ']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  btwnTabletAndMobile: 685,
  mobile: 450
};

var mediaQuery = (0, _keys2.default)(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

exports.default = mediaQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL01lZGlhUXVlcnkuanMiXSwibmFtZXMiOlsic2l6ZXMiLCJnaWFudCIsImRlc2t0b3AiLCJ0YWJsZXQiLCJidHduVGFibGV0QW5kTW9iaWxlIiwibW9iaWxlIiwibWVkaWFRdWVyeSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwibGFiZWwiLCJlbVNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUTtBQUNaQyxTQUFPLElBREs7QUFFWkMsV0FBUyxHQUZHO0FBR1pDLFVBQVEsR0FISTtBQUlaQyx1QkFBcUIsR0FKVDtBQUtaQyxVQUFRO0FBTEksQ0FBZDs7QUFRQSxJQUFNQyxhQUFhLG9CQUFZTixLQUFaLEVBQW1CTyxNQUFuQixDQUEwQixVQUFDQyxXQUFELEVBQWNDLEtBQWQsRUFBd0I7QUFDbkU7QUFDQTtBQUNBLE1BQU1DLFNBQVNWLE1BQU1TLEtBQU4sSUFBZSxFQUE5QjtBQUNBRCxjQUFZQyxLQUFaLElBQXFCO0FBQUEsdURBQ0VDLE1BREYsRUFFZixpREFGZTtBQUFBLEdBQXJCO0FBS0EsU0FBT0YsV0FBUDtBQUNELENBVmtCLEVBVWhCLEVBVmdCLENBQW5COztrQkFZZUYsVSIsImZpbGUiOiJNZWRpYVF1ZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3Qgc2l6ZXMgPSB7XG4gIGdpYW50OiAxMTcwLFxuICBkZXNrdG9wOiA5OTIsXG4gIHRhYmxldDogNzY4LFxuICBidHduVGFibGV0QW5kTW9iaWxlOiA2ODUsXG4gIG1vYmlsZTogNDUwXG59XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBPYmplY3Qua2V5cyhzaXplcykucmVkdWNlKChhY2N1bXVsYXRvciwgbGFiZWwpID0+IHtcbiAgLy8gdXNlIGVtIGluIGJyZWFrcG9pbnRzIHRvIHdvcmsgcHJvcGVybHkgY3Jvc3MtYnJvd3NlciBhbmQgc3VwcG9ydCB1c2Vyc1xuICAvLyBjaGFuZ2luZyB0aGVpciBicm93c2VycyBmb250LXNpemU6IGh0dHBzOi8vemVsbHdrLmNvbS9ibG9nL21lZGlhLXF1ZXJ5LXVuaXRzL1xuICBjb25zdCBlbVNpemUgPSBzaXplc1tsYWJlbF0gLyAxNlxuICBhY2N1bXVsYXRvcltsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzYFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgfVxuICBgXG4gIHJldHVybiBhY2N1bXVsYXRvclxufSwge30pXG5cbmV4cG9ydCBkZWZhdWx0IG1lZGlhUXVlcnkiXX0=