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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\tcolor: ', ';\n  padding: 0px;\n  font-size: 1.15em;\n'], ['\n  position: fixed;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\tcolor: ', ';\n  padding: 0px;\n  font-size: 1.15em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  margin: 40px;\n  ', '\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    padding-left: 3px;\n    color: ', ';\n    ', '\n  }\n  &:hover{ \n    cursor: pointer \n  }\n'], ['\n  color: ', ';\n  margin: 40px;\n  ', '\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    padding-left: 3px;\n    color: ', ';\n    ', '\n  }\n  &:hover{ \n    cursor: pointer \n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['margin: 20px'], ['margin: 20px']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['display: none;'], ['display: none;']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 40px;\n  color: ', ';\n  a{\n    text-decoration: none;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: ', ';\n    vertical-align: top;\n  }\n  ', '\n'], ['\n  margin: 40px;\n  color: ', ';\n  a{\n    text-decoration: none;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: ', ';\n    vertical-align: top;\n  }\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  padding-top: 30px;\n  ', '\n'], ['\n  text-align: center;\n  padding-top: 30px;\n  ', '\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n    margin: 10px auto 0;\n    width: 200px;\n  '], ['\n    margin: 10px auto 0;\n    width: 200px;\n  ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70px;\n  ', '\n'], ['\n  width: 70px;\n  ', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['width: 60px;'], ['width: 60px;']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n  ', '\n'], ['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n  ', '\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: .9em;\n    line-height: 1.5;\n  '], ['\n    font-size: .9em;\n    line-height: 1.5;\n  ']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Menu = require('./Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavIcon = function NavIcon(props) {
  return _react2.default.createElement(
    'svg',
    { x: '0px', y: '0px',
      width: '26px', height: '26px', viewBox: '0 0 512 512', style: { fill: props.fill } },
    _react2.default.createElement('rect', { x: '96', y: '241', width: '320', height: '32' }),
    _react2.default.createElement('rect', { x: '96', y: '145', width: '320', height: '32' }),
    _react2.default.createElement('rect', { x: '96', y: '337', width: '320', height: '32' })
  );
};

var PhoneIcon = function PhoneIcon(props) {
  return _react2.default.createElement(
    'svg',
    { x: '0px', y: '0px',
      width: '20px', height: '20px', viewBox: '0 0 512 512', style: { fill: props.fill } },
    _react2.default.createElement('path', { d: 'M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2 l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8 c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2 c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4 c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9 C442.3,370.8,431.5,351.6,415.9,335.5z' })
  );
};

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
      menuDisplayed: false,
      navTextColor: 'white'
    }, _this.toggleMenu = function () {
      _this.setState(function (state) {
        return {
          menuDisplayed: !state.menuDisplayed
        };
      });
    }, _this.changeNavTextColor = function () {
      var position = document.body.scrollTop;
      if (position < 490) {
        _this.setState(function (state) {
          return {
            navTextColor: 'white'
          };
        });
      } else {
        _this.setState(function (state) {
          return {
            navTextColor: 'black'
          };
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.changeNavTextColor);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      windowremoveEventListener('scroll', this.changeNavTextColor);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          NavbarContainer,
          {
            navTextColor: this.state.navTextColor
          },
          _react2.default.createElement(
            MenuButton,
            {
              onClick: this.toggleMenu,
              navTextColor: this.state.navTextColor
            },
            _react2.default.createElement(NavIcon, { fill: this.state.navTextColor }),
            _react2.default.createElement(
              'p',
              null,
              'Menu'
            )
          ),
          _react2.default.createElement(
            PhoneNumber,
            { navTextColor: this.state.navTextColor },
            _react2.default.createElement(PhoneIcon, {
              fill: this.state.navTextColor
            }),
            _react2.default.createElement(
              'a',
              { href: 'tel:+1-914-843-1052' },
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


var NavbarContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.navTextColor;
});
var MenuButton = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.navTextColor;
}, _mediaQuery2.default.mobile(_templateObject3), function (props) {
  return props.navTextColor;
}, _mediaQuery2.default.tablet(_templateObject4));

var PhoneNumber = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.navTextColor;
}, function (props) {
  return props.navTextColor;
}, _mediaQuery2.default.tablet(_templateObject4));

var Logo = _styledComponents2.default.div(_templateObject6, _mediaQuery2.default.mobile(_templateObject7));

var LogoIcon = _styledComponents2.default.img(_templateObject8, _mediaQuery2.default.mobile(_templateObject9));

var LogoText = _styledComponents2.default.h3(_templateObject10, _mediaQuery2.default.mobile(_templateObject11));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZJY29uIiwicHJvcHMiLCJmaWxsIiwiUGhvbmVJY29uIiwiTmF2YmFyIiwic3RhdGUiLCJtZW51RGlzcGxheWVkIiwibmF2VGV4dENvbG9yIiwidG9nZ2xlTWVudSIsInNldFN0YXRlIiwiY2hhbmdlTmF2VGV4dENvbG9yIiwicG9zaXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93cmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk5hdmJhckNvbnRhaW5lciIsImRpdiIsIk1lbnVCdXR0b24iLCJtb2JpbGUiLCJ0YWJsZXQiLCJQaG9uZU51bWJlciIsIkxvZ28iLCJMb2dvSWNvbiIsImltZyIsIkxvZ29UZXh0IiwiaDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBLE1BQUssR0FBRSxLQUFQLEVBQWEsR0FBRSxLQUFmO0FBQ0EsYUFBTSxNQUROLEVBQ2EsUUFBTyxNQURwQixFQUMyQixTQUFRLGFBRG5DLEVBQ2lELE9BQU8sRUFBQ0MsTUFBTUQsTUFBTUMsSUFBYixFQUR4RDtBQUVELDRDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEMsR0FGQztBQUdELDRDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEMsR0FIQztBQUlELDRDQUFNLEdBQUUsSUFBUixFQUFhLEdBQUUsS0FBZixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFFBQU8sSUFBeEM7QUFKQyxHQURjO0FBQUEsQ0FBaEI7O0FBU0Es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Tjs7QUFTQSxJQUFNSSxXQUFXLDJCQUFPQyxHQUFsQixtQkFFRixxQkFBV0wsTUFGVCxtQkFBTjs7QUFLQSxJQUFNTSxXQUFXLDJCQUFPQyxFQUFsQixvQkFPRixxQkFBV1AsTUFQVCxvQkFBTiIsImZpbGUiOiJuYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudS5qcydcbmltcG9ydCBtZWRpYVF1ZXJ5IGZyb20gJy4vbWVkaWFRdWVyeSdcblxuXG5jb25zdCBOYXZJY29uID0gKHByb3BzKSA9PiAoXG4gIDxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIlxuXHQgd2lkdGg9XCIyNnB4XCIgaGVpZ2h0PVwiMjZweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPXt7ZmlsbDogcHJvcHMuZmlsbH19PlxuXHQ8cmVjdCB4PVwiOTZcIiB5PVwiMjQxXCIgd2lkdGg9XCIzMjBcIiBoZWlnaHQ9XCIzMlwiLz5cblx0PHJlY3QgeD1cIjk2XCIgeT1cIjE0NVwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMzJcIi8+XG5cdDxyZWN0IHg9XCI5NlwiIHk9XCIzMzdcIiB3aWR0aD1cIjMyMFwiIGhlaWdodD1cIjMyXCIvPlxuPC9zdmc+XG4pXG5cbmNvbnN0IFBob25lSWNvbiA9IChwcm9wcykgPT4gKFxuICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCJcblx0IHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT17e2ZpbGw6IHByb3BzLmZpbGx9fT5cbiAgICA8cGF0aCBkPVwiTTQxNS45LDMzNS41Yy0xNC42LTE1LTU2LjEtNDMuMS04My4zLTQzLjFjLTYuMywwLTExLjgsMS40LTE2LjMsNC4zYy0xMy4zLDguNS0yMy45LDE1LjEtMjksMTUuMWMtMi44LDAtNS44LTIuNS0xMi40LTguMlxuICAgICAgbC0xLjEtMWMtMTguMy0xNS45LTIyLjItMjAtMjkuMy0yNy40bC0xLjgtMS45Yy0xLjMtMS4zLTIuNC0yLjUtMy41LTMuNmMtNi4yLTYuNC0xMC43LTExLTI2LjYtMjlsLTAuNy0wLjhcbiAgICAgIGMtNy42LTguNi0xMi42LTE0LjItMTIuOS0xOC4zYy0wLjMtNCwzLjItMTAuNSwxMi4xLTIyLjZjMTAuOC0xNC42LDExLjItMzIuNiwxLjMtNTMuNWMtNy45LTE2LjUtMjAuOC0zMi4zLTMyLjItNDYuMmwtMS0xLjJcbiAgICAgIGMtOS44LTEyLTIxLjItMTgtMzMuOS0xOGMtMTQuMSwwLTI1LjgsNy42LTMyLDExLjZjLTAuNSwwLjMtMSwwLjctMS41LDFjLTEzLjksOC44LTI0LDIwLjktMjcuOCwzMy4yYy01LjcsMTguNS05LjUsNDIuNSwxNy44LDkyLjRcbiAgICAgIGMyMy42LDQzLjIsNDUsNzIuMiw3OSwxMDcuMWMzMiwzMi44LDQ2LjIsNDMuNCw3OCw2Ni40YzM1LjQsMjUuNiw2OS40LDQwLjMsOTMuMiw0MC4zYzIyLjEsMCwzOS41LDAsNjQuMy0yOS45XG4gICAgICBDNDQyLjMsMzcwLjgsNDMxLjUsMzUxLjYsNDE1LjksMzM1LjV6XCIvPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hhbmdlTmF2VGV4dENvbG9yKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvd3JlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hhbmdlTmF2VGV4dENvbG9yKVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbWVudURpc3BsYXllZDogZmFsc2UsXG4gICAgbmF2VGV4dENvbG9yOiAnd2hpdGUnXG4gIH1cblxuICB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIG1lbnVEaXNwbGF5ZWQ6ICFzdGF0ZS5tZW51RGlzcGxheWVkXG4gICAgfSkpXG4gIH1cblxuICBjaGFuZ2VOYXZUZXh0Q29sb3IgPSAoKSA9PiB7XG4gICBsZXQgcG9zaXRpb24gPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgaWYocG9zaXRpb24gPCA0OTApe1xuICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcbiAgICAgICAgbmF2VGV4dENvbG9yOiAnd2hpdGUnXG4gICAgIH0pKVxuICAgfWVsc2V7XG4gICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xuICAgICAgICBuYXZUZXh0Q29sb3I6ICdibGFjaycsXG4gICAgIH0pKVxuICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhckNvbnRhaW5lciBcbiAgICAgICAgICBuYXZUZXh0Q29sb3I9e3RoaXMuc3RhdGUubmF2VGV4dENvbG9yfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVCdXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9XG4gICAgICAgICAgICBuYXZUZXh0Q29sb3I9e3RoaXMuc3RhdGUubmF2VGV4dENvbG9yfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXZJY29uIGZpbGw9e3RoaXMuc3RhdGUubmF2VGV4dENvbG9yfS8+XG4gICAgICAgICAgICA8cD5NZW51PC9wPlxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICA8UGhvbmVOdW1iZXIgbmF2VGV4dENvbG9yPXt0aGlzLnN0YXRlLm5hdlRleHRDb2xvcn0+XG4gICAgICAgICAgICA8UGhvbmVJY29uIFxuICAgICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLm5hdlRleHRDb2xvcn1cbiAgICAgICAgICAgIC8+PGEgaHJlZj1cInRlbDorMS05MTQtODQzLTEwNTJcIj4gOTE0LTg0My0xMDUyPC9hPlxuICAgICAgICAgIDwvUGhvbmVOdW1iZXI+XG4gICAgICAgIDwvTmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgIDxNZW51IFxuICAgICAgICAgICAgbWVudURpc3BsYXllZD17dGhpcy5zdGF0ZS5tZW51RGlzcGxheWVkfSBcbiAgICAgICAgICAgIHRvZ2dsZU1lbnU9e3RoaXMudG9nZ2xlTWVudX1cbiAgICAgICAgICAvPlxuICAgICAgICA8TG9nbz5cbiAgICAgICAgICA8TG9nb0ljb24gc3JjPVwiLi4vc3RhdGljL2xvZ28ucG5nXCIvPlxuICAgICAgICAgIDxMb2dvVGV4dD5KaW5nIEppYW5nIEFjdXB1bmN0dXJlICYgSGVyYiBDbGluaWM8L0xvZ29UZXh0PlxuICAgICAgICA8L0xvZ28+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5jb25zdCBOYXZiYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLm5hdlRleHRDb2xvcn07XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG5gXG5jb25zdCBNZW51QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubmF2VGV4dENvbG9yfTtcbiAgbWFyZ2luOiA0MHB4O1xuICAke21lZGlhUXVlcnkubW9iaWxlYG1hcmdpbjogMjBweGB9XG4gIHB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIG1hcmdpbjogM3B4IDAgMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5uYXZUZXh0Q29sb3J9O1xuICAgICR7bWVkaWFRdWVyeS50YWJsZXRgZGlzcGxheTogbm9uZTtgfVxuICB9XG4gICY6aG92ZXJ7IFxuICAgIGN1cnNvcjogcG9pbnRlciBcbiAgfVxuYFxuXG5jb25zdCBQaG9uZU51bWJlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNDBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubmF2VGV4dENvbG9yfTtcbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIG1hcmdpbjogM3B4IDAgMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5uYXZUZXh0Q29sb3J9O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgJHttZWRpYVF1ZXJ5LnRhYmxldGBkaXNwbGF5OiBub25lO2B9XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICAke21lZGlhUXVlcnkubW9iaWxlYFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XG4gICAgd2lkdGg6IDIwMHB4O1xuICBgfVxuYFxuXG5jb25zdCBMb2dvSWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA3MHB4O1xuICAke21lZGlhUXVlcnkubW9iaWxlYHdpZHRoOiA2MHB4O2B9XG5gXG5cbmNvbnN0IExvZ29UZXh0ID0gc3R5bGVkLmgzYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IC45N2VtO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgbWFyZ2luOiAzcHggMCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgJHttZWRpYVF1ZXJ5Lm1vYmlsZWBcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYH1cbmAiXX0=