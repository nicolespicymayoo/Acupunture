'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: #fff;\n  padding: 20px;\n  font-size: 1.15em;\n'], ['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: #fff;\n  padding: 20px;\n  font-size: 1.15em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  &:hover{ cursor: pointer}\n'], ['\n  &:hover{ cursor: pointer}\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70px;\n'], ['\n  width: 70px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n'], ['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MenuPopover = require('./MenuPopover.js');

var _MenuPopover2 = _interopRequireDefault(_MenuPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function (_Component) {
  (0, _inherits3.default)(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popoverDisplayed: false
    }, _this.togglePopover = function (e) {
      _this.state.popoverDisplayed ? _this.setState({
        popoverDisplayed: false
      }) : _this.setState({
        popoverDisplayed: true
      });
      console.log(_this.state.popoverDisplayed);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Navbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          NavbarContainer,
          null,
          _react2.default.createElement(
            MenuButton,
            {
              onClick: function onClick(e) {
                return _this2.togglePopover();
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-bars' }),
            _react2.default.createElement(
              'span',
              { id: 'menu-button-text' },
              ' Menu'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'tel:+1-914-843-1052' },
            _react2.default.createElement(
              'div',
              { className: 'about' },
              _react2.default.createElement('i', { className: 'fa fa-phone' }),
              ' 914-843-1052'
            )
          )
        ),
        this.state.popoverDisplayed ? _react2.default.createElement(_MenuPopover2.default, { displayed: this.state.popoverDisplayed }) : null,
        _react2.default.createElement(
          Logo,
          null,
          _react2.default.createElement(LogoIcon, { src: '../static/logo.png' }),
          _react2.default.createElement(
            LogoText,
            null,
            'Jing Jiang Acupuncture & Herb Clinic'
          )
        )
      );
    }
  }]);
  return Navbar;
}(_react.Component);

exports.default = Navbar;


var NavbarContainer = _styledComponents2.default.div(_templateObject);
var MenuButton = _styledComponents2.default.div(_templateObject2);

var Logo = _styledComponents2.default.div(_templateObject3);

var LogoIcon = _styledComponents2.default.img(_templateObject4);

var LogoText = _styledComponents2.default.h3(_templateObject5);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJzdGF0ZSIsInBvcG92ZXJEaXNwbGF5ZWQiLCJ0b2dnbGVQb3BvdmVyIiwiZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIk5hdmJhckNvbnRhaW5lciIsImRpdiIsIk1lbnVCdXR0b24iLCJMb2dvIiwiTG9nb0ljb24iLCJpbWciLCJMb2dvVGV4dCIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxLLEdBQVE7QUFDTkMsd0JBQWtCO0FBRFosSyxRQUlSQyxhLEdBQWdCLFVBQUNDLENBQUQsRUFBTztBQUNyQixZQUFLSCxLQUFMLENBQVdDLGdCQUFYLEdBQ0UsTUFBS0csUUFBTCxDQUFjO0FBQ1pILDBCQUFrQjtBQUROLE9BQWQsQ0FERixHQUtFLE1BQUtHLFFBQUwsQ0FBYztBQUNaSCwwQkFBa0I7QUFETixPQUFkLENBTEY7QUFRRUksY0FBUUMsR0FBUixDQUFZLE1BQUtOLEtBQUwsQ0FBV0MsZ0JBQXZCO0FBQ0gsSzs7Ozs7NkJBQ087QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFLHVCQUFTLGlCQUFDRSxDQUFEO0FBQUEsdUJBQU8sT0FBS0QsYUFBTCxFQUFQO0FBQUE7QUFEWDtBQUdFLGlEQUFHLFdBQVUsWUFBYixHQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFNLElBQUcsa0JBQVQ7QUFBQTtBQUFBO0FBSkYsV0FERjtBQU9FO0FBQUE7QUFBQSxjQUFHLE1BQUsscUJBQVI7QUFBOEI7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUF1QixtREFBRyxXQUFVLGFBQWIsR0FBdkI7QUFBQTtBQUFBO0FBQTlCO0FBUEYsU0FERjtBQVdJLGFBQUtGLEtBQUwsQ0FBV0MsZ0JBQVgsR0FDRSx1REFBYSxXQUFXLEtBQUtELEtBQUwsQ0FBV0MsZ0JBQW5DLEdBREYsR0FHRSxJQWROO0FBZ0JFO0FBQUMsY0FBRDtBQUFBO0FBQ0Usd0NBQUMsUUFBRCxJQUFVLEtBQUksb0JBQWQsR0FERjtBQUVFO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQWhCRixPQURGO0FBdUJEOzs7OztrQkF4Q2tCRixNOzs7QUEyQ3JCLElBQU1RLGtCQUFrQiwyQkFBT0MsR0FBekIsaUJBQU47QUFVQSxJQUFNQyxhQUFhLDJCQUFPRCxHQUFwQixrQkFBTjs7QUFJQSxJQUFNRSxPQUFPLDJCQUFPRixHQUFkLGtCQUFOOztBQUlBLElBQU1HLFdBQVcsMkJBQU9DLEdBQWxCLGtCQUFOOztBQUlBLElBQU1DLFdBQVcsMkJBQU9DLEVBQWxCLGtCQUFOIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IE1lbnVQb3BvdmVyIGZyb20gJy4vTWVudVBvcG92ZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGUgPSB7XG4gICAgcG9wb3ZlckRpc3BsYXllZDogZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZVBvcG92ZXIgPSAoZSkgPT4ge1xuICAgIHRoaXMuc3RhdGUucG9wb3ZlckRpc3BsYXllZCA/IFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBvcG92ZXJEaXNwbGF5ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIDogXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wb3ZlckRpc3BsYXllZDogdHJ1ZVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucG9wb3ZlckRpc3BsYXllZClcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgIDxNZW51QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVQb3BvdmVyKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwibWVudS1idXR0b24tdGV4dFwiPiBNZW51PC9zcGFuPlxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPVwidGVsOisxLTkxNC04NDMtMTA1MlwiPjxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiPjwvaT4gOTE0LTg0My0xMDUyPC9kaXY+PC9hPlxuICAgICAgICA8L05hdmJhckNvbnRhaW5lcj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUucG9wb3ZlckRpc3BsYXllZCA/XG4gICAgICAgICAgICA8TWVudVBvcG92ZXIgZGlzcGxheWVkPXt0aGlzLnN0YXRlLnBvcG92ZXJEaXNwbGF5ZWR9IC8+XG4gICAgICAgICAgOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxMb2dvPlxuICAgICAgICAgIDxMb2dvSWNvbiBzcmM9XCIuLi9zdGF0aWMvbG9nby5wbmdcIi8+XG4gICAgICAgICAgPExvZ29UZXh0PkppbmcgSmlhbmcgQWN1cHVuY3R1cmUgJiBIZXJiIENsaW5pYzwvTG9nb1RleHQ+XG4gICAgICAgIDwvTG9nbz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBOYXZiYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEuMTVlbTtcbmBcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuZGl2YFxuICAmOmhvdmVyeyBjdXJzb3I6IHBvaW50ZXJ9XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IExvZ29JY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDcwcHg7XG5gXG5cbmNvbnN0IExvZ29UZXh0ID0gc3R5bGVkLmgzYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IC45N2VtO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgbWFyZ2luOiAzcHggMCAwO1xuICBjb2xvcjogI2ZmZjtcbmAiXX0=