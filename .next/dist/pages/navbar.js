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

var _Menu = require('./Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

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
      menuDisplayed: false
    }, _this.toggleMenu = function () {
      _this.setState(function (state) {
        return {
          menuDisplayed: !state.menuDisplayed
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          NavbarContainer,
          null,
          _react2.default.createElement(
            MenuButton,
            {
              onClick: this.toggleMenu
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
        _react2.default.createElement(_Menu2.default, {
          menuDisplayed: this.state.menuDisplayed,
          toggleMenu: this.toggleMenu
        }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJzdGF0ZSIsIm1lbnVEaXNwbGF5ZWQiLCJ0b2dnbGVNZW51Iiwic2V0U3RhdGUiLCJOYXZiYXJDb250YWluZXIiLCJkaXYiLCJNZW51QnV0dG9uIiwiTG9nbyIsIkxvZ29JY29uIiwiaW1nIiwiTG9nb1RleHQiLCJoMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7OzRNQUNuQkMsSyxHQUFRO0FBQ05DLHFCQUFlO0FBRFQsSyxRQUlSQyxVLEdBQWEsWUFBTTtBQUNqQixZQUFLQyxRQUFMLENBQWM7QUFBQSxlQUFVO0FBQ3RCRix5QkFBZSxDQUFDRCxNQUFNQztBQURBLFNBQVY7QUFBQSxPQUFkO0FBR0QsSzs7Ozs7NkJBQ087QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFLHVCQUFTLEtBQUtDO0FBRGhCO0FBR0UsaURBQUcsV0FBVSxZQUFiLEdBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQU0sSUFBRyxrQkFBVDtBQUFBO0FBQUE7QUFKRixXQURGO0FBT0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxxQkFBUjtBQUE4QjtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQXVCLG1EQUFHLFdBQVUsYUFBYixHQUF2QjtBQUFBO0FBQUE7QUFBOUI7QUFQRixTQURGO0FBVUk7QUFDRSx5QkFBZSxLQUFLRixLQUFMLENBQVdDLGFBRDVCO0FBRUUsc0JBQVksS0FBS0M7QUFGbkIsVUFWSjtBQWNFO0FBQUMsY0FBRDtBQUFBO0FBQ0Usd0NBQUMsUUFBRCxJQUFVLEtBQUksb0JBQWQsR0FERjtBQUVFO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQWRGLE9BREY7QUFxQkQ7Ozs7O2tCQWhDa0JILE07OztBQW1DckIsSUFBTUssa0JBQWtCLDJCQUFPQyxHQUF6QixpQkFBTjtBQVVBLElBQU1DLGFBQWEsMkJBQU9ELEdBQXBCLGtCQUFOOztBQUlBLElBQU1FLE9BQU8sMkJBQU9GLEdBQWQsa0JBQU47O0FBSUEsSUFBTUcsV0FBVywyQkFBT0MsR0FBbEIsa0JBQU47O0FBSUEsSUFBTUMsV0FBVywyQkFBT0MsRUFBbEIsa0JBQU4iLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGUgPSB7XG4gICAgbWVudURpc3BsYXllZDogZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgbWVudURpc3BsYXllZDogIXN0YXRlLm1lbnVEaXNwbGF5ZWRcbiAgICB9KSlcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgIDxNZW51QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwibWVudS1idXR0b24tdGV4dFwiPiBNZW51PC9zcGFuPlxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPVwidGVsOisxLTkxNC04NDMtMTA1MlwiPjxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiPjwvaT4gOTE0LTg0My0xMDUyPC9kaXY+PC9hPlxuICAgICAgICA8L05hdmJhckNvbnRhaW5lcj5cbiAgICAgICAgICA8TWVudSBcbiAgICAgICAgICAgIG1lbnVEaXNwbGF5ZWQ9e3RoaXMuc3RhdGUubWVudURpc3BsYXllZH0gXG4gICAgICAgICAgICB0b2dnbGVNZW51PXt0aGlzLnRvZ2dsZU1lbnV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPExvZ28+XG4gICAgICAgICAgPExvZ29JY29uIHNyYz1cIi4uL3N0YXRpYy9sb2dvLnBuZ1wiLz5cbiAgICAgICAgICA8TG9nb1RleHQ+SmluZyBKaWFuZyBBY3VwdW5jdHVyZSAmIEhlcmIgQ2xpbmljPC9Mb2dvVGV4dD5cbiAgICAgICAgPC9Mb2dvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IE5hdmJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuYFxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gICY6aG92ZXJ7IGN1cnNvcjogcG9pbnRlcn1cbmBcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgTG9nb0ljb24gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNzBweDtcbmBcblxuY29uc3QgTG9nb1RleHQgPSBzdHlsZWQuaDNgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogLjk3ZW07XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBtYXJnaW46IDNweCAwIDA7XG4gIGNvbG9yOiAjZmZmO1xuYCJdfQ==