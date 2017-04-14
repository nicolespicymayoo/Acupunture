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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  visibility: ', '\n  position: fixed;\n  top: 0;\n  height: 100vh;\n\tleft: -300px;\n\tz-index: 9999;\n  width: 300px;\n  left: ', '\n  padding-top: 20px;\n  background-color: #fff;\n\tcolor: black;\n  ', '\n'], ['\n  visibility: ', '\n  position: fixed;\n  top: 0;\n  height: 100vh;\n\tleft: -300px;\n\tz-index: 9999;\n  width: 300px;\n  left: ', '\n  padding-top: 20px;\n  background-color: #fff;\n\tcolor: black;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width: 100%;\n    height: 100vh;\n  '], ['\n    width: 100%;\n    height: 100vh;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 0;\n  list-style-type: none;\n  margin-top: 26px;\n  a{\n    display: block;\n    padding: 14px 0px;\n    padding-left: 45px;\n    text-decoration: none;\n    color: black;\n    font-size: .96em;\n    a:visited {\n      text-decoration: none;\n    }\n    &:hover{\n      background: #E1A030;\n    }\n  }\n  ', '\n \n'], ['\n  padding: 0;\n  list-style-type: none;\n  margin-top: 26px;\n  a{\n    display: block;\n    padding: 14px 0px;\n    padding-left: 45px;\n    text-decoration: none;\n    color: black;\n    font-size: .96em;\n    a:visited {\n      text-decoration: none;\n    }\n    &:hover{\n      background: #E1A030;\n    }\n  }\n  ', '\n \n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    text-align: center;\n    font-size: 1em;\n    a{\n      padding: 18px 0;\n      padding-left: 0;\n    }\n  '], ['\n    text-align: center;\n    font-size: 1em;\n    a{\n      padding: 18px 0;\n      padding-left: 0;\n    }\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  float: right;\n  right: 20px;\n  top: 22px;\n  font-size: 1.3em;\n  color: rgba(0,0,0,.16);\n  &:hover{\n    cursor: pointer;\n  }\n'], ['\n  position: absolute;\n  float: right;\n  right: 20px;\n  top: 22px;\n  font-size: 1.3em;\n  color: rgba(0,0,0,.16);\n  &:hover{\n    cursor: pointer;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  margin: 5px auto 0px;\n  img{\n    width: 50px;\n  }\n'], ['\n  text-align: center;\n  margin: 5px auto 0px;\n  img{\n    width: 50px;\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  a{\n    text-decoration: none;\n    letter-spacing: .5px;\n  }\n'], ['\n  a{\n    text-decoration: none;\n    letter-spacing: .5px;\n  }\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MediaQuery = require('./MediaQuery');

var _MediaQuery2 = _interopRequireDefault(_MediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhoneIcon = function PhoneIcon() {
  return _react2.default.createElement(
    'svg',
    { x: '0px', y: '0px',
      width: '20px', height: '20px', viewBox: '0 0 512 512', style: { fill: 'black', verticalAlign: 'top' } },
    _react2.default.createElement('path', { d: 'M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2 l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8 c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2 c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4 c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9 C442.3,370.8,431.5,351.6,415.9,335.5z' })
  );
};

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);
    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        MenuContainer,
        {
          menuDisplayed: this.props.menuDisplayed,
          toggleMenu: this.props.toggleMenu
        },
        _react2.default.createElement(
          Logo,
          null,
          _react2.default.createElement('img', { src: '../static/logo.png' })
        ),
        _react2.default.createElement(
          ExitButton,
          { onClick: this.props.toggleMenu },
          '\u2715'
        ),
        _react2.default.createElement(
          MenuItems,
          null,
          _react2.default.createElement(
            'a',
            { href: '#why', onClick: this.props.toggleMenu },
            'Why Chinese Medicine'
          ),
          _react2.default.createElement(
            'a',
            { href: '#treatments', onClick: this.props.toggleMenu },
            'What We Can Treat'
          ),
          _react2.default.createElement(
            'a',
            { href: '#techniques', onClick: this.props.toggleMenu },
            'Our Techniques'
          ),
          _react2.default.createElement(
            'a',
            { href: '#doctor', onClick: this.props.toggleMenu },
            'Meet the Doctor'
          ),
          _react2.default.createElement(
            'a',
            { href: '#testimonials', onClick: this.props.toggleMenu },
            'Testimonials'
          ),
          _react2.default.createElement(
            'a',
            { href: '#pricing', onClick: this.props.toggleMenu },
            'Our Pricing'
          ),
          _react2.default.createElement(
            'a',
            { href: '#contact', onClick: this.props.toggleMenu },
            'Contact Us'
          ),
          _react2.default.createElement(
            PhoneNumber,
            null,
            _react2.default.createElement(
              'a',
              { href: 'tel:+1-914-843-1052' },
              _react2.default.createElement(PhoneIcon, null),
              ' 914-843-1052'
            )
          )
        )
      );
    }
  }]);
  return Menu;
}(_react.Component);

Menu.propTypes = {
  menuDisplayed: _react.PropTypes.bool.isRequired,
  toggleMenu: _react.PropTypes.func.isRequired
};
exports.default = Menu;


var MenuContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.menuDisplayed ? 'visible' : 'hidden';
}, function (props) {
  return props.menuDisplayed ? '0px' : '-300px';
}, _MediaQuery2.default.mobile(_templateObject2));

var MenuItems = _styledComponents2.default.ul(_templateObject3, _MediaQuery2.default.mobile(_templateObject4));

var ExitButton = _styledComponents2.default.div(_templateObject5);

var Logo = _styledComponents2.default.div(_templateObject6);

var PhoneNumber = _styledComponents2.default.div(_templateObject7);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL01lbnUuanMiXSwibmFtZXMiOlsiUGhvbmVJY29uIiwiZmlsbCIsInZlcnRpY2FsQWxpZ24iLCJNZW51IiwicHJvcHMiLCJtZW51RGlzcGxheWVkIiwidG9nZ2xlTWVudSIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIk1lbnVDb250YWluZXIiLCJkaXYiLCJtb2JpbGUiLCJNZW51SXRlbXMiLCJ1bCIsIkV4aXRCdXR0b24iLCJMb2dvIiwiUGhvbmVOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxHQUFFLEtBQVAsRUFBYSxHQUFFLEtBQWY7QUFDQSxhQUFNLE1BRE4sRUFDYSxRQUFPLE1BRHBCLEVBQzJCLFNBQVEsYUFEbkMsRUFDaUQsT0FBTyxFQUFDQyxNQUFNLE9BQVAsRUFBZ0JDLGVBQWUsS0FBL0IsRUFEeEQ7QUFFRSw0Q0FBTSxHQUFFLDZtQkFBUjtBQUZGLEdBRGdCO0FBQUEsQ0FBbEI7O0lBYXFCQyxJOzs7Ozs7Ozs7OzZCQU1YO0FBQ04sYUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSx5QkFBZSxLQUFLQyxLQUFMLENBQVdDLGFBRDVCO0FBRUUsc0JBQVksS0FBS0QsS0FBTCxDQUFXRTtBQUZ6QjtBQUlFO0FBQUMsY0FBRDtBQUFBO0FBQ0UsaURBQUssS0FBSSxvQkFBVDtBQURGLFNBSkY7QUFPRTtBQUFDLG9CQUFEO0FBQUEsWUFBWSxTQUFTLEtBQUtGLEtBQUwsQ0FBV0UsVUFBaEM7QUFBQTtBQUFBLFNBUEY7QUFVRTtBQUFDLG1CQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxNQUFLLE1BQVIsRUFBZSxTQUFTLEtBQUtGLEtBQUwsQ0FBV0UsVUFBbkM7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBRyxNQUFLLGFBQVIsRUFBc0IsU0FBUyxLQUFLRixLQUFMLENBQVdFLFVBQTFDO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxhQUFSLEVBQXNCLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxVQUExQztBQUFBO0FBQUEsV0FIRjtBQUlFO0FBQUE7QUFBQSxjQUFHLE1BQUssU0FBUixFQUFrQixTQUFTLEtBQUtGLEtBQUwsQ0FBV0UsVUFBdEM7QUFBQTtBQUFBLFdBSkY7QUFLRTtBQUFBO0FBQUEsY0FBRyxNQUFLLGVBQVIsRUFBd0IsU0FBUyxLQUFLRixLQUFMLENBQVdFLFVBQTVDO0FBQUE7QUFBQSxXQUxGO0FBTUU7QUFBQTtBQUFBLGNBQUcsTUFBSyxVQUFSLEVBQW1CLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxVQUF2QztBQUFBO0FBQUEsV0FORjtBQU9FO0FBQUE7QUFBQSxjQUFHLE1BQUssVUFBUixFQUFtQixTQUFTLEtBQUtGLEtBQUwsQ0FBV0UsVUFBdkM7QUFBQTtBQUFBLFdBUEY7QUFRRTtBQUFDLHVCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxxQkFBUjtBQUE4Qiw0Q0FBQyxTQUFELE9BQTlCO0FBQUE7QUFBQTtBQURGO0FBUkY7QUFWRixPQURGO0FBeUJEOzs7OztBQWhDa0JILEksQ0FDWkksUyxHQUFZO0FBQ2pCRixpQkFBZSxpQkFBVUcsSUFBVixDQUFlQyxVQURiO0FBRWpCSCxjQUFZLGlCQUFVSSxJQUFWLENBQWVEO0FBRlYsQztrQkFEQU4sSTs7O0FBbUNyQixJQUFNUSxnQkFBZ0IsMkJBQU9DLEdBQXZCLGtCQUNVO0FBQUEsU0FBU1IsTUFBTUMsYUFBTix1QkFBVDtBQUFBLENBRFYsRUFRSTtBQUFBLFNBQVNELE1BQU1DLGFBQU4sbUJBQVQ7QUFBQSxDQVJKLEVBWUYscUJBQVdRLE1BWlQsbUJBQU47O0FBa0JBLElBQU1DLFlBQVksMkJBQU9DLEVBQW5CLG1CQWtCRixxQkFBV0YsTUFsQlQsbUJBQU47O0FBNkJBLElBQU1HLGFBQWEsMkJBQU9KLEdBQXBCLGtCQUFOOztBQVlBLElBQU1LLE9BQU8sMkJBQU9MLEdBQWQsa0JBQU47O0FBUUEsSUFBTU0sY0FBYywyQkFBT04sR0FBckIsa0JBQU4iLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IG1lZGlhUXVlcnkgZnJvbSAnLi9NZWRpYVF1ZXJ5J1xuXG5jb25zdCBQaG9uZUljb24gPSAoKSA9PiAoXG4gIDxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIlxuXHQgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPXt7ZmlsbDogJ2JsYWNrJywgdmVydGljYWxBbGlnbjogJ3RvcCd9fT5cbiAgICA8cGF0aCBkPVwiTTQxNS45LDMzNS41Yy0xNC42LTE1LTU2LjEtNDMuMS04My4zLTQzLjFjLTYuMywwLTExLjgsMS40LTE2LjMsNC4zYy0xMy4zLDguNS0yMy45LDE1LjEtMjksMTUuMWMtMi44LDAtNS44LTIuNS0xMi40LTguMlxuICAgICAgbC0xLjEtMWMtMTguMy0xNS45LTIyLjItMjAtMjkuMy0yNy40bC0xLjgtMS45Yy0xLjMtMS4zLTIuNC0yLjUtMy41LTMuNmMtNi4yLTYuNC0xMC43LTExLTI2LjYtMjlsLTAuNy0wLjhcbiAgICAgIGMtNy42LTguNi0xMi42LTE0LjItMTIuOS0xOC4zYy0wLjMtNCwzLjItMTAuNSwxMi4xLTIyLjZjMTAuOC0xNC42LDExLjItMzIuNiwxLjMtNTMuNWMtNy45LTE2LjUtMjAuOC0zMi4zLTMyLjItNDYuMmwtMS0xLjJcbiAgICAgIGMtOS44LTEyLTIxLjItMTgtMzMuOS0xOGMtMTQuMSwwLTI1LjgsNy42LTMyLDExLjZjLTAuNSwwLjMtMSwwLjctMS41LDFjLTEzLjksOC44LTI0LDIwLjktMjcuOCwzMy4yYy01LjcsMTguNS05LjUsNDIuNSwxNy44LDkyLjRcbiAgICAgIGMyMy42LDQzLjIsNDUsNzIuMiw3OSwxMDcuMWMzMiwzMi44LDQ2LjIsNDMuNCw3OCw2Ni40YzM1LjQsMjUuNiw2OS40LDQwLjMsOTMuMiw0MC4zYzIyLjEsMCwzOS41LDAsNjQuMy0yOS45XG4gICAgICBDNDQyLjMsMzcwLjgsNDMxLjUsMzUxLjYsNDE1LjksMzM1LjV6XCIvPlxuICA8L3N2Zz5cbilcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtZW51RGlzcGxheWVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHRvZ2dsZU1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPE1lbnVDb250YWluZXIgXG4gICAgICAgIG1lbnVEaXNwbGF5ZWQ9e3RoaXMucHJvcHMubWVudURpc3BsYXllZH1cbiAgICAgICAgdG9nZ2xlTWVudT17dGhpcy5wcm9wcy50b2dnbGVNZW51fVxuICAgICAgPlxuICAgICAgICA8TG9nbz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9sb2dvLnBuZ1wiLz5cbiAgICAgICAgPC9Mb2dvPlxuICAgICAgICA8RXhpdEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU1lbnV9PlxuICAgICAgICAgIOKclVxuICAgICAgICA8L0V4aXRCdXR0b24+XG4gICAgICAgIDxNZW51SXRlbXM+XG4gICAgICAgICAgPGEgaHJlZj1cIiN3aHlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU1lbnV9PldoeSBDaGluZXNlIE1lZGljaW5lPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdHJlYXRtZW50c1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlTWVudX0+V2hhdCBXZSBDYW4gVHJlYXQ8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0ZWNobmlxdWVzXCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVNZW51fT5PdXIgVGVjaG5pcXVlczwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI2RvY3RvclwiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlTWVudX0+TWVldCB0aGUgRG9jdG9yPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGVzdGltb25pYWxzXCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVNZW51fT5UZXN0aW1vbmlhbHM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNwcmljaW5nXCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVNZW51fT5PdXIgUHJpY2luZzwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU1lbnV9PkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgPFBob25lTnVtYmVyPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMS05MTQtODQzLTEwNTJcIj48UGhvbmVJY29uIC8+IDkxNC04NDMtMTA1MjwvYT5cbiAgICAgICAgICA8L1Bob25lTnVtYmVyPlxuICAgICAgICA8L01lbnVJdGVtcz5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHZpc2liaWxpdHk6ICR7cHJvcHMgPT4gcHJvcHMubWVudURpc3BsYXllZCA/IGB2aXNpYmxlYCA6IGBoaWRkZW5gfVxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcblx0bGVmdDogLTMwMHB4O1xuXHR6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogMzAwcHg7XG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubWVudURpc3BsYXllZCA/IGAwcHhgIDogYC0zMDBweGB9XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRjb2xvcjogYmxhY2s7XG4gICR7bWVkaWFRdWVyeS5tb2JpbGVgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgYH1cbmBcblxuY29uc3QgTWVudUl0ZW1zID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIGF7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAuOTZlbTtcbiAgICBhOnZpc2l0ZWQge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogI0UxQTAzMDtcbiAgICB9XG4gIH1cbiAgJHttZWRpYVF1ZXJ5Lm1vYmlsZWBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYXtcbiAgICAgIHBhZGRpbmc6IDE4cHggMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gIGB9XG4gXG5gXG5cbmNvbnN0IEV4aXRCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMjJweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjE2KTtcbiAgJjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmBcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggYXV0byAwcHg7XG4gIGltZ3tcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuYFxuXG5jb25zdCBQaG9uZU51bWJlciA9IHN0eWxlZC5kaXZgXG4gIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICB9XG5gIl19