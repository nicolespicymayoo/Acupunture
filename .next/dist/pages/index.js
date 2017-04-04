'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Lato\';\n  letter-spacing: .2px;\n'], ['\n  font-family: \'Lato\';\n  letter-spacing: .2px;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _head = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _why = require('./why');

var _why2 = _interopRequireDefault(_why);

var _treatments = require('./treatments');

var _treatments2 = _interopRequireDefault(_treatments);

var _techniques = require('./techniques');

var _techniques2 = _interopRequireDefault(_techniques);

var _doctor = require('./doctor');

var _doctor2 = _interopRequireDefault(_doctor);

var _pricing = require('./pricing');

var _pricing2 = _interopRequireDefault(_pricing);

var _testimonials = require('./testimonials');

var _testimonials2 = _interopRequireDefault(_testimonials);

var _contact = require('./contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      _react2.default.createElement(
        'script',
        null,
        'ga(\'create\', \'UA-62228480-1\', \'auto\'); ga(\'send\', \'pageview\');'
      ),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet' }),
      _react2.default.createElement('link', { href: 'http://fonts.googleapis.com/css?family=Source+Serif+Pro:300,400,600', rel: 'stylesheet' }),
      _react2.default.createElement('link', { href: 'http://fonts.googleapis.com/css?family=Lato:300,400,500,700', rel: 'stylesheet' }),
      _react2.default.createElement('script', { type: 'text/javascript', src: '//cdn.jsdelivr.net/jquery.slick/1.5.0/slick.min.js' }),
      _react2.default.createElement(
        'title',
        null,
        'Jing Jiang Acupuncture & Herb Clinic | Over 20 Years Of Experience in Acupuncture and Chinese Medicine'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Jing Jiang Acupuncture & Herbs Clinic is located in Stamford, CT and New York, NY. We provide acupuncture and chinese medicine services to our clients in Fairfield County, CT and New York, NY. We provide infertility support, traditional acupuncture, Chinese herbs, acupuncture for pain and migraines.' }),
      _react2.default.createElement('meta', { name: 'keywords', content: 'Acupuncture, Stamford, Westport, Greenwich, Norwalk, Fairfield County, CT, Connecticut, White Plains, Harrison, Westchester County, NY, New York, Manhattan, facial lift, menopause, infertility treatment, pain, migraines, Chinese herbs' })
    ),
    _react2.default.createElement(
      Main,
      null,
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(_why2.default, null),
      _react2.default.createElement(_treatments2.default, null),
      _react2.default.createElement(_techniques2.default, null),
      _react2.default.createElement(_doctor2.default, null),
      _react2.default.createElement(_pricing2.default, null),
      _react2.default.createElement(_testimonials2.default, null),
      _react2.default.createElement(_contact2.default, null)
    )
  );
};

var Main = _styledComponents2.default.div(_templateObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsOENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEscUNBQTlCLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkY7QUFXRSw4Q0FBTSxNQUFLLG9EQUFYLEVBQWdFLEtBQUksWUFBcEUsR0FYRjtBQVlFLDhDQUFNLE1BQUsscUVBQVgsRUFBaUYsS0FBSSxZQUFyRixHQVpGO0FBYUUsOENBQU0sTUFBSyw2REFBWCxFQUF5RSxLQUFJLFlBQTdFLEdBYkY7QUFjRSxnREFBUSxNQUFLLGlCQUFiLEVBQStCLEtBQUksb0RBQW5DLEdBZEY7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZkY7QUFpQkUsOENBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVEsOFNBQWpDLEdBakJGO0FBa0JFLDhDQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLDRPQUE5QjtBQWxCRixLQURGO0FBcUJFO0FBQUMsVUFBRDtBQUFBO0FBQ0UsMkRBREY7QUFFRSx3REFGRjtBQUdFLCtEQUhGO0FBSUUsK0RBSkY7QUFLRSwyREFMRjtBQU1FLDREQU5GO0FBT0UsaUVBUEY7QUFRRTtBQVJGO0FBckJGLEdBRGU7QUFBQSxDOztBQW1DZixJQUFNQSxPQUFPLDJCQUFPQyxHQUFkLGlCQUFOIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBXaHkgZnJvbSAnLi93aHknXG5pbXBvcnQgVHJlYXRtZW50cyBmcm9tICcuL3RyZWF0bWVudHMnXG5pbXBvcnQgVGVjaG5pcXVlcyBmcm9tICcuL3RlY2huaXF1ZXMnXG5pbXBvcnQgRG9jdG9yIGZyb20gJy4vZG9jdG9yJ1xuaW1wb3J0IFByaWNpbmcgZnJvbSAnLi9wcmljaW5nJ1xuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuL3Rlc3RpbW9uaWFscydcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuPGRpdj5cbiAgPEhlYWQ+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgIDxzY3JpcHQ+XG4gICAgICB7Lyp7ZnVuY3Rpb24oaSxzLG8sZyxyLGEsbSl7aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J109cjtpW3JdPWlbcl18fGZ1bmN0aW9uKCl7XG4gICAgICAoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcbiAgICAgIG09cy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTthLmFzeW5jPTE7YS5zcmM9ZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsbSlcbiAgICAgIH19KHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTsqL31cblxuICAgICAgZ2EoJ2NyZWF0ZScsICdVQS02MjIyODQ4MC0xJywgJ2F1dG8nKTtcbiAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgPC9zY3JpcHQ+XG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0XCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8bGluayBocmVmPSdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2VyaWYrUHJvOjMwMCw0MDAsNjAwJyByZWw9J3N0eWxlc2hlZXQnIC8+XG4gICAgPGxpbmsgaHJlZj0naHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDUwMCw3MDAnIHJlbD0nc3R5bGVzaGVldCcgLz5cbiAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvanF1ZXJ5LnNsaWNrLzEuNS4wL3NsaWNrLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDx0aXRsZT5KaW5nIEppYW5nIEFjdXB1bmN0dXJlICYgSGVyYiBDbGluaWMgfCBPdmVyIDIwIFllYXJzIE9mIEV4cGVyaWVuY2UgaW4gQWN1cHVuY3R1cmUgYW5kIENoaW5lc2UgTWVkaWNpbmU8L3RpdGxlPlxuXG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkppbmcgSmlhbmcgQWN1cHVuY3R1cmUgJiBIZXJicyBDbGluaWMgaXMgbG9jYXRlZCBpbiBTdGFtZm9yZCwgQ1QgYW5kIE5ldyBZb3JrLCBOWS4gV2UgcHJvdmlkZSBhY3VwdW5jdHVyZSBhbmQgY2hpbmVzZSBtZWRpY2luZSBzZXJ2aWNlcyB0byBvdXIgY2xpZW50cyBpbiBGYWlyZmllbGQgQ291bnR5LCBDVCBhbmQgTmV3IFlvcmssIE5ZLiBXZSBwcm92aWRlIGluZmVydGlsaXR5IHN1cHBvcnQsIHRyYWRpdGlvbmFsIGFjdXB1bmN0dXJlLCBDaGluZXNlIGhlcmJzLCBhY3VwdW5jdHVyZSBmb3IgcGFpbiBhbmQgbWlncmFpbmVzLlwiLz5cbiAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiQWN1cHVuY3R1cmUsIFN0YW1mb3JkLCBXZXN0cG9ydCwgR3JlZW53aWNoLCBOb3J3YWxrLCBGYWlyZmllbGQgQ291bnR5LCBDVCwgQ29ubmVjdGljdXQsIFdoaXRlIFBsYWlucywgSGFycmlzb24sIFdlc3RjaGVzdGVyIENvdW50eSwgTlksIE5ldyBZb3JrLCBNYW5oYXR0YW4sIGZhY2lhbCBsaWZ0LCBtZW5vcGF1c2UsIGluZmVydGlsaXR5IHRyZWF0bWVudCwgcGFpbiwgbWlncmFpbmVzLCBDaGluZXNlIGhlcmJzXCIvPlxuICA8L0hlYWQ+XG4gIDxNYWluPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8V2h5IC8+XG4gICAgPFRyZWF0bWVudHMgLz5cbiAgICA8VGVjaG5pcXVlcyAvPlxuICAgIDxEb2N0b3IgLz5cbiAgICA8UHJpY2luZyAvPlxuICAgIDxUZXN0aW1vbmlhbHMgLz5cbiAgICA8Q29udGFjdCAvPlxuICA8L01haW4+XG48L2Rpdj5cbilcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4O1xuYCJdfQ==