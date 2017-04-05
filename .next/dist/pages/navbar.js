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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: #fff;\n  padding: 30px;\n  font-size: 1.15em;\n'], ['\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n\tcolor: #fff;\n  padding: 30px;\n  font-size: 1.15em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-weight: 100;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: #fff;\n    padding-left: 3px;\n  }\n  &:hover{ \n    cursor: pointer \n  }\n'], ['\n  p{\n    display: inline-block;\n    vertical-align: top;\n    font-weight: 100;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: #fff;\n    padding-left: 3px;\n  }\n  &:hover{ \n    cursor: pointer \n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  margin-right: 60px;\n  a{\n    text-decoration: none;\n    font-weight: 100;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: #fff;\n    vertical-align: top;\n  }\n'], ['\n  margin-right: 60px;\n  a{\n    text-decoration: none;\n    font-weight: 100;\n    font-size: .9em;\n    letter-spacing: .5px;\n    margin: 3px 0 0;\n    color: #fff;\n    vertical-align: top;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70px;\n'], ['\n  width: 70px;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n'], ['\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: .97em;\n  letter-spacing: .5px;\n  margin: 3px 0 0;\n  color: #fff;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Menu = require('./Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavIcon = function NavIcon() {
  return _react2.default.createElement(
    'svg',
    { x: '0px', y: '0px',
      width: '26px', height: '26px', viewBox: '0 0 512 512', style: { fill: '#fff', verticalAlign: 'top' } },
    _react2.default.createElement('rect', { x: '96', y: '241', width: '320', height: '32' }),
    _react2.default.createElement('rect', { x: '96', y: '145', width: '320', height: '32' }),
    _react2.default.createElement('rect', { x: '96', y: '337', width: '320', height: '32' })
  );
};

var PhoneIcon = function PhoneIcon() {
  return _react2.default.createElement(
    'svg',
    { x: '0px', y: '0px',
      width: '20px', height: '20px', viewBox: '0 0 512 512', style: { fill: '#fff' } },
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
            _react2.default.createElement(NavIcon, null),
            _react2.default.createElement(
              'p',
              null,
              'Menu'
            )
          ),
          _react2.default.createElement(
            PhoneNumber,
            null,
            _react2.default.createElement(PhoneIcon, null),
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


var NavbarContainer = _styledComponents2.default.div(_templateObject);
var MenuButton = _styledComponents2.default.div(_templateObject2);

var PhoneNumber = _styledComponents2.default.div(_templateObject3);

var Logo = _styledComponents2.default.div(_templateObject4);

var LogoIcon = _styledComponents2.default.img(_templateObject5);

var LogoText = _styledComponents2.default.h3(_templateObject6);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZJY29uIiwiZmlsbCIsInZlcnRpY2FsQWxpZ24iLCJQaG9uZUljb24iLCJOYXZiYXIiLCJzdGF0ZSIsIm1lbnVEaXNwbGF5ZWQiLCJ0b2dnbGVNZW51Iiwic2V0U3RhdGUiLCJOYXZiYXJDb250YWluZXIiLCJkaXYiLCJNZW51QnV0dG9uIiwiUGhvbmVOdW1iZXIiLCJMb2dvIiwiTG9nb0ljb24iLCJpbWciLCJMb2dvVGV4dCIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQUE7QUFBQSxNQUFLLEdBQUUsS0FBUCxFQUFhLEdBQUUsS0FBZjtBQUNBLGFBQU0sTUFETixFQUNhLFFBQU8sTUFEcEIsRUFDMkIsU0FBUSxhQURuQyxFQUNpRCxPQUFPLEVBQUNDLE1BQU0sTUFBUCxFQUFlQyxlQUFlLEtBQTlCLEVBRHhEO0FBRUQsNENBQU0sR0FBRSxJQUFSLEVBQWEsR0FBRSxLQUFmLEVBQXFCLE9BQU0sS0FBM0IsRUFBaUMsUUFBTyxJQUF4QyxHQUZDO0FBR0QsNENBQU0sR0FBRSxJQUFSLEVBQWEsR0FBRSxLQUFmLEVBQXFCLE9BQU0sS0FBM0IsRUFBaUMsUUFBTyxJQUF4QyxHQUhDO0FBSUQsNENBQU0sR0FBRSxJQUFSLEVBQWEsR0FBRSxLQUFmLEVBQXFCLE9BQU0sS0FBM0IsRUFBaUMsUUFBTyxJQUF4QztBQUpDLEdBRGM7QUFBQSxDQUFoQjs7QUFTQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxHQUFFLEtBQVAsRUFBYSxHQUFFLEtBQWY7QUFDQSxhQUFNLE1BRE4sRUFDYSxRQUFPLE1BRHBCLEVBQzJCLFNBQVEsYUFEbkMsRUFDaUQsT0FBTyxFQUFDRixNQUFNLE1BQVAsRUFEeEQ7QUFFRSw0Q0FBTSxHQUFFLDZtQkFBUjtBQUZGLEdBRGdCO0FBQUEsQ0FBbEI7O0lBWXFCRyxNOzs7Ozs7Ozs7Ozs7Ozs0TUFDbkJDLEssR0FBUTtBQUNOQyxxQkFBZTtBQURULEssUUFJUkMsVSxHQUFhLFlBQU07QUFDakIsWUFBS0MsUUFBTCxDQUFjO0FBQUEsZUFBVTtBQUN0QkYseUJBQWUsQ0FBQ0QsTUFBTUM7QUFEQSxTQUFWO0FBQUEsT0FBZDtBQUdELEs7Ozs7OzZCQUNPO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRTtBQUFDLHNCQUFEO0FBQUE7QUFDRSx1QkFBUyxLQUFLQztBQURoQjtBQUdFLDBDQUFDLE9BQUQsT0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixXQURGO0FBT0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0UsMENBQUMsU0FBRCxPQURGO0FBQ2U7QUFBQTtBQUFBLGdCQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBRGY7QUFQRixTQURGO0FBWUk7QUFDRSx5QkFBZSxLQUFLRixLQUFMLENBQVdDLGFBRDVCO0FBRUUsc0JBQVksS0FBS0M7QUFGbkIsVUFaSjtBQWdCRTtBQUFDLGNBQUQ7QUFBQTtBQUNFLHdDQUFDLFFBQUQsSUFBVSxLQUFJLG9CQUFkLEdBREY7QUFFRTtBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFoQkYsT0FERjtBQXVCRDs7Ozs7a0JBbENrQkgsTTs7O0FBcUNyQixJQUFNSyxrQkFBa0IsMkJBQU9DLEdBQXpCLGlCQUFOO0FBVUEsSUFBTUMsYUFBYSwyQkFBT0QsR0FBcEIsa0JBQU47O0FBZ0JBLElBQU1FLGNBQWMsMkJBQU9GLEdBQXJCLGtCQUFOOztBQWFBLElBQU1HLE9BQU8sMkJBQU9ILEdBQWQsa0JBQU47O0FBSUEsSUFBTUksV0FBVywyQkFBT0MsR0FBbEIsa0JBQU47O0FBSUEsSUFBTUMsV0FBVywyQkFBT0MsRUFBbEIsa0JBQU4iLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUuanMnXG5cblxuY29uc3QgTmF2SWNvbiA9ICgpID0+IChcbiAgPHN2ZyB4PVwiMHB4XCIgeT1cIjBweFwiXG5cdCB3aWR0aD1cIjI2cHhcIiBoZWlnaHQ9XCIyNnB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgc3R5bGU9e3tmaWxsOiAnI2ZmZicsIHZlcnRpY2FsQWxpZ246ICd0b3AnfX0+XG5cdDxyZWN0IHg9XCI5NlwiIHk9XCIyNDFcIiB3aWR0aD1cIjMyMFwiIGhlaWdodD1cIjMyXCIvPlxuXHQ8cmVjdCB4PVwiOTZcIiB5PVwiMTQ1XCIgd2lkdGg9XCIzMjBcIiBoZWlnaHQ9XCIzMlwiLz5cblx0PHJlY3QgeD1cIjk2XCIgeT1cIjMzN1wiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMzJcIi8+XG48L3N2Zz5cbilcblxuY29uc3QgUGhvbmVJY29uID0gKCkgPT4gKFxuICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCJcblx0IHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT17e2ZpbGw6ICcjZmZmJ319PlxuICAgIDxwYXRoIGQ9XCJNNDE1LjksMzM1LjVjLTE0LjYtMTUtNTYuMS00My4xLTgzLjMtNDMuMWMtNi4zLDAtMTEuOCwxLjQtMTYuMyw0LjNjLTEzLjMsOC41LTIzLjksMTUuMS0yOSwxNS4xYy0yLjgsMC01LjgtMi41LTEyLjQtOC4yXG4gICAgICBsLTEuMS0xYy0xOC4zLTE1LjktMjIuMi0yMC0yOS4zLTI3LjRsLTEuOC0xLjljLTEuMy0xLjMtMi40LTIuNS0zLjUtMy42Yy02LjItNi40LTEwLjctMTEtMjYuNi0yOWwtMC43LTAuOFxuICAgICAgYy03LjYtOC42LTEyLjYtMTQuMi0xMi45LTE4LjNjLTAuMy00LDMuMi0xMC41LDEyLjEtMjIuNmMxMC44LTE0LjYsMTEuMi0zMi42LDEuMy01My41Yy03LjktMTYuNS0yMC44LTMyLjMtMzIuMi00Ni4ybC0xLTEuMlxuICAgICAgYy05LjgtMTItMjEuMi0xOC0zMy45LTE4Yy0xNC4xLDAtMjUuOCw3LjYtMzIsMTEuNmMtMC41LDAuMy0xLDAuNy0xLjUsMWMtMTMuOSw4LjgtMjQsMjAuOS0yNy44LDMzLjJjLTUuNywxOC41LTkuNSw0Mi41LDE3LjgsOTIuNFxuICAgICAgYzIzLjYsNDMuMiw0NSw3Mi4yLDc5LDEwNy4xYzMyLDMyLjgsNDYuMiw0My40LDc4LDY2LjRjMzUuNCwyNS42LDY5LjQsNDAuMyw5My4yLDQwLjNjMjIuMSwwLDM5LjUsMCw2NC4zLTI5LjlcbiAgICAgIEM0NDIuMywzNzAuOCw0MzEuNSwzNTEuNiw0MTUuOSwzMzUuNXpcIi8+XG4gIDwvc3ZnPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gIHN0YXRlID0ge1xuICAgIG1lbnVEaXNwbGF5ZWQ6IGZhbHNlXG4gIH1cblxuICB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIG1lbnVEaXNwbGF5ZWQ6ICFzdGF0ZS5tZW51RGlzcGxheWVkXG4gICAgfSkpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhckNvbnRhaW5lcj5cbiAgICAgICAgICA8TWVudUJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNZW51fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXZJY29uIC8+XG4gICAgICAgICAgICA8cD5NZW51PC9wPlxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICA8UGhvbmVOdW1iZXI+XG4gICAgICAgICAgICA8UGhvbmVJY29uIC8+PGEgaHJlZj1cInRlbDorMS05MTQtODQzLTEwNTJcIj4gOTE0LTg0My0xMDUyPC9hPlxuICAgICAgICAgIDwvUGhvbmVOdW1iZXI+XG4gICAgICAgIDwvTmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgIDxNZW51IFxuICAgICAgICAgICAgbWVudURpc3BsYXllZD17dGhpcy5zdGF0ZS5tZW51RGlzcGxheWVkfSBcbiAgICAgICAgICAgIHRvZ2dsZU1lbnU9e3RoaXMudG9nZ2xlTWVudX1cbiAgICAgICAgICAvPlxuICAgICAgICA8TG9nbz5cbiAgICAgICAgICA8TG9nb0ljb24gc3JjPVwiLi4vc3RhdGljL2xvZ28ucG5nXCIvPlxuICAgICAgICAgIDxMb2dvVGV4dD5KaW5nIEppYW5nIEFjdXB1bmN0dXJlICYgSGVyYiBDbGluaWM8L0xvZ29UZXh0PlxuICAgICAgICA8L0xvZ28+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgTmF2YmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG5gXG5jb25zdCBNZW51QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICBtYXJnaW46IDNweCAwIDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIH1cbiAgJjpob3ZlcnsgXG4gICAgY3Vyc29yOiBwb2ludGVyIFxuICB9XG5gXG5cbmNvbnN0IFBob25lTnVtYmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICBtYXJnaW46IDNweCAwIDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuYFxuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBMb2dvSWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA3MHB4O1xuYFxuXG5jb25zdCBMb2dvVGV4dCA9IHN0eWxlZC5oM2BcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAuOTdlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gIG1hcmdpbjogM3B4IDAgMDtcbiAgY29sb3I6ICNmZmY7XG5gIl19