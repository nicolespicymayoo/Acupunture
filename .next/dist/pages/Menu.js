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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  visibility: ', '\n  position: fixed;\n  top: 0;\n  height: 100vh;\n\tleft: -300px;\n\tz-index: 9999;\n  width: 300px;\n  left: ', '\n  padding-top: 20px;\n  background-color: #fff;\n\tcolor: black;\n'], ['\n  visibility: ', '\n  position: fixed;\n  top: 0;\n  height: 100vh;\n\tleft: -300px;\n\tz-index: 9999;\n  width: 300px;\n  left: ', '\n  padding-top: 20px;\n  background-color: #fff;\n\tcolor: black;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 0;\n  list-style-type: none;\n  margin-top: 26px;\n  a{\n    display: block;\n    padding: 14px 0px;\n    padding-left: 45px;\n    text-decoration: none;\n    color: black;\n    font-size: .96em;\n    a:visited {\n      text-decoration: none;\n    }\n    &:hover{\n      background: #E1A030;\n    }\n  }\n \n'], ['\n  padding: 0;\n  list-style-type: none;\n  margin-top: 26px;\n  a{\n    display: block;\n    padding: 14px 0px;\n    padding-left: 45px;\n    text-decoration: none;\n    color: black;\n    font-size: .96em;\n    a:visited {\n      text-decoration: none;\n    }\n    &:hover{\n      background: #E1A030;\n    }\n  }\n \n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  float: right;\n  right: 20px;\n  top: 22px;\n  font-size: 1.3em;\n  color: rgba(0,0,0,.16);\n  &:hover{\n    cursor: pointer;\n  }\n'], ['\n  position: absolute;\n  float: right;\n  right: 20px;\n  top: 22px;\n  font-size: 1.3em;\n  color: rgba(0,0,0,.16);\n  &:hover{\n    cursor: pointer;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  margin: 5px auto 0px;\n  img{\n    width: 50px;\n  }\n'], ['\n  text-align: center;\n  margin: 5px auto 0px;\n  img{\n    width: 50px;\n  }\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            { href: '#why' },
            'Why Chinese Medicine'
          ),
          _react2.default.createElement(
            'a',
            { href: '#treatments' },
            'What We Can Treat'
          ),
          _react2.default.createElement(
            'a',
            { href: '#techniques' },
            'Our Techniques'
          ),
          _react2.default.createElement(
            'a',
            { href: '#doctor' },
            'Meet the Doctor'
          ),
          _react2.default.createElement(
            'a',
            { href: '#testimonials' },
            'Testimonials'
          ),
          _react2.default.createElement(
            'a',
            { href: '#pricing' },
            'Our Pricing'
          ),
          _react2.default.createElement(
            'a',
            { href: '#contact' },
            'Contact Us'
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
});

var MenuItems = _styledComponents2.default.ul(_templateObject2);

var ExitButton = _styledComponents2.default.div(_templateObject3);

var Logo = _styledComponents2.default.div(_templateObject4);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL01lbnUuanMiXSwibmFtZXMiOlsiTWVudSIsInByb3BzIiwibWVudURpc3BsYXllZCIsInRvZ2dsZU1lbnUiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJNZW51Q29udGFpbmVyIiwiZGl2IiwiTWVudUl0ZW1zIiwidWwiLCJFeGl0QnV0dG9uIiwiTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7NkJBTVg7QUFDTixhQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLHlCQUFlLEtBQUtDLEtBQUwsQ0FBV0MsYUFENUI7QUFFRSxzQkFBWSxLQUFLRCxLQUFMLENBQVdFO0FBRnpCO0FBSUU7QUFBQyxjQUFEO0FBQUE7QUFDRSxpREFBSyxLQUFJLG9CQUFUO0FBREYsU0FKRjtBQU9FO0FBQUMsb0JBQUQ7QUFBQSxZQUFZLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxVQUFoQztBQUFBO0FBQUEsU0FQRjtBQVVFO0FBQUMsbUJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFHLE1BQUssTUFBUjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFHLE1BQUssYUFBUjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFHLE1BQUssYUFBUjtBQUFBO0FBQUEsV0FIRjtBQUlFO0FBQUE7QUFBQSxjQUFHLE1BQUssU0FBUjtBQUFBO0FBQUEsV0FKRjtBQUtFO0FBQUE7QUFBQSxjQUFHLE1BQUssZUFBUjtBQUFBO0FBQUEsV0FMRjtBQU1FO0FBQUE7QUFBQSxjQUFHLE1BQUssVUFBUjtBQUFBO0FBQUEsV0FORjtBQU9FO0FBQUE7QUFBQSxjQUFHLE1BQUssVUFBUjtBQUFBO0FBQUE7QUFQRjtBQVZGLE9BREY7QUFzQkQ7Ozs7O0FBN0JrQkgsSSxDQUNaSSxTLEdBQVk7QUFDakJGLGlCQUFlLGlCQUFVRyxJQUFWLENBQWVDLFVBRGI7QUFFakJILGNBQVksaUJBQVVJLElBQVYsQ0FBZUQ7QUFGVixDO2tCQURBTixJOzs7QUFnQ3JCLElBQU1RLGdCQUFnQiwyQkFBT0MsR0FBdkIsa0JBQ1U7QUFBQSxTQUFTUixNQUFNQyxhQUFOLHVCQUFUO0FBQUEsQ0FEVixFQVFJO0FBQUEsU0FBU0QsTUFBTUMsYUFBTixtQkFBVDtBQUFBLENBUkosQ0FBTjs7QUFjQSxJQUFNUSxZQUFZLDJCQUFPQyxFQUFuQixrQkFBTjs7QUFxQkEsSUFBTUMsYUFBYSwyQkFBT0gsR0FBcEIsa0JBQU47O0FBWUEsSUFBTUksT0FBTywyQkFBT0osR0FBZCxrQkFBTiIsImZpbGUiOiJNZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1lbnVEaXNwbGF5ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdG9nZ2xlTWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8TWVudUNvbnRhaW5lciBcbiAgICAgICAgbWVudURpc3BsYXllZD17dGhpcy5wcm9wcy5tZW51RGlzcGxheWVkfVxuICAgICAgICB0b2dnbGVNZW51PXt0aGlzLnByb3BzLnRvZ2dsZU1lbnV9XG4gICAgICA+XG4gICAgICAgIDxMb2dvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2xvZ28ucG5nXCIvPlxuICAgICAgICA8L0xvZ28+XG4gICAgICAgIDxFeGl0QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlTWVudX0+XG4gICAgICAgICAg4pyVXG4gICAgICAgIDwvRXhpdEJ1dHRvbj5cbiAgICAgICAgPE1lbnVJdGVtcz5cbiAgICAgICAgICA8YSBocmVmPVwiI3doeVwiPldoeSBDaGluZXNlIE1lZGljaW5lPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdHJlYXRtZW50c1wiPldoYXQgV2UgQ2FuIFRyZWF0PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGVjaG5pcXVlc1wiPk91ciBUZWNobmlxdWVzPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZG9jdG9yXCI+TWVldCB0aGUgRG9jdG9yPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGVzdGltb25pYWxzXCI+VGVzdGltb25pYWxzPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjcHJpY2luZ1wiPk91ciBQcmljaW5nPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgIDwvTWVudUl0ZW1zPlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgdmlzaWJpbGl0eTogJHtwcm9wcyA9PiBwcm9wcy5tZW51RGlzcGxheWVkID8gYHZpc2libGVgIDogYGhpZGRlbmB9XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuXHRsZWZ0OiAtMzAwcHg7XG5cdHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiAzMDBweDtcbiAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5tZW51RGlzcGxheWVkID8gYDBweGAgOiBgLTMwMHB4YH1cbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGNvbG9yOiBibGFjaztcbmBcblxuY29uc3QgTWVudUl0ZW1zID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIGF7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAuOTZlbTtcbiAgICBhOnZpc2l0ZWQge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogI0UxQTAzMDtcbiAgICB9XG4gIH1cbiBcbmBcblxuY29uc3QgRXhpdEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMjBweDtcbiAgdG9wOiAyMnB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogcmdiYSgwLDAsMCwuMTYpO1xuICAmOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYFxuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweCBhdXRvIDBweDtcbiAgaW1ne1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5gIl19