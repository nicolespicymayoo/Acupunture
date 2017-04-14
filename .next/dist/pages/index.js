'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Lato\';\n  letter-spacing: .2px;\n  margin: auto;\n  width: 100%;\n'], ['\n  font-family: \'Lato\';\n  letter-spacing: .2px;\n  margin: auto;\n  width: 100%;\n']);

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
      _react2.default.createElement(
        'style',
        null,
        '\n        html, body {\n          font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n          Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;\n          font-size: 16px;\n          color: #373b4c;\n          margin: 0;\n          height: 100%;\n        }\n        p, h1, h2, h3 {\n          margin: 0;\n          padding: 0;\n        }\n      '
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsOENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEscUNBQTlCLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkY7QUFXRSw4Q0FBTSxNQUFLLG9EQUFYLEVBQWdFLEtBQUksWUFBcEUsR0FYRjtBQVlFLDhDQUFNLE1BQUsscUVBQVgsRUFBaUYsS0FBSSxZQUFyRixHQVpGO0FBYUUsOENBQU0sTUFBSyw2REFBWCxFQUF5RSxLQUFJLFlBQTdFLEdBYkY7QUFjRSxnREFBUSxNQUFLLGlCQUFiLEVBQStCLEtBQUksb0RBQW5DLEdBZEY7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZkY7QUFnQkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWhCSDtBQStCRSw4Q0FBTSxNQUFLLGFBQVgsRUFBeUIsU0FBUSw4U0FBakMsR0EvQkY7QUFnQ0UsOENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsNE9BQTlCO0FBaENGLEtBREY7QUFtQ0U7QUFBQyxVQUFEO0FBQUE7QUFDRSwyREFERjtBQUVFLHdEQUZGO0FBR0UsK0RBSEY7QUFJRSwrREFKRjtBQUtFLDJEQUxGO0FBTUUsNERBTkY7QUFPRSxpRUFQRjtBQVFFO0FBUkY7QUFuQ0YsR0FEZTtBQUFBLEM7O0FBaURmLElBQU1BLE9BQU8sMkJBQU9DLEdBQWQsaUJBQU4iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IFdoeSBmcm9tICcuL3doeSdcbmltcG9ydCBUcmVhdG1lbnRzIGZyb20gJy4vdHJlYXRtZW50cydcbmltcG9ydCBUZWNobmlxdWVzIGZyb20gJy4vdGVjaG5pcXVlcydcbmltcG9ydCBEb2N0b3IgZnJvbSAnLi9kb2N0b3InXG5pbXBvcnQgUHJpY2luZyBmcm9tICcuL3ByaWNpbmcnXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4vdGVzdGltb25pYWxzJ1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250YWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG48ZGl2PlxuICA8SGVhZD5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgPHNjcmlwdD5cbiAgICAgIHsvKntmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbiAgICAgIChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuICAgICAgbT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxuICAgICAgfX0od2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpOyovfVxuXG4gICAgICBnYSgnY3JlYXRlJywgJ1VBLTYyMjI4NDgwLTEnLCAnYXV0bycpO1xuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcbiAgICA8L3NjcmlwdD5cbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXRcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDxsaW5rIGhyZWY9J2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTZXJpZitQcm86MzAwLDQwMCw2MDAnIHJlbD0nc3R5bGVzaGVldCcgLz5cbiAgICA8bGluayBocmVmPSdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNTAwLDcwMCcgcmVsPSdzdHlsZXNoZWV0JyAvPlxuICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi8vY2RuLmpzZGVsaXZyLm5ldC9qcXVlcnkuc2xpY2svMS41LjAvc2xpY2subWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHRpdGxlPkppbmcgSmlhbmcgQWN1cHVuY3R1cmUgJiBIZXJiIENsaW5pYyB8IE92ZXIgMjAgWWVhcnMgT2YgRXhwZXJpZW5jZSBpbiBBY3VwdW5jdHVyZSBhbmQgQ2hpbmVzZSBNZWRpY2luZTwvdGl0bGU+XG4gICAgIDxzdHlsZT57YFxuICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogTGF0bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIE9wZW4gU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjMzczYjRjO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgcCwgaDEsIGgyLCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSmluZyBKaWFuZyBBY3VwdW5jdHVyZSAmIEhlcmJzIENsaW5pYyBpcyBsb2NhdGVkIGluIFN0YW1mb3JkLCBDVCBhbmQgTmV3IFlvcmssIE5ZLiBXZSBwcm92aWRlIGFjdXB1bmN0dXJlIGFuZCBjaGluZXNlIG1lZGljaW5lIHNlcnZpY2VzIHRvIG91ciBjbGllbnRzIGluIEZhaXJmaWVsZCBDb3VudHksIENUIGFuZCBOZXcgWW9yaywgTlkuIFdlIHByb3ZpZGUgaW5mZXJ0aWxpdHkgc3VwcG9ydCwgdHJhZGl0aW9uYWwgYWN1cHVuY3R1cmUsIENoaW5lc2UgaGVyYnMsIGFjdXB1bmN0dXJlIGZvciBwYWluIGFuZCBtaWdyYWluZXMuXCIvPlxuICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJBY3VwdW5jdHVyZSwgU3RhbWZvcmQsIFdlc3Rwb3J0LCBHcmVlbndpY2gsIE5vcndhbGssIEZhaXJmaWVsZCBDb3VudHksIENULCBDb25uZWN0aWN1dCwgV2hpdGUgUGxhaW5zLCBIYXJyaXNvbiwgV2VzdGNoZXN0ZXIgQ291bnR5LCBOWSwgTmV3IFlvcmssIE1hbmhhdHRhbiwgZmFjaWFsIGxpZnQsIG1lbm9wYXVzZSwgaW5mZXJ0aWxpdHkgdHJlYXRtZW50LCBwYWluLCBtaWdyYWluZXMsIENoaW5lc2UgaGVyYnNcIi8+XG4gIDwvSGVhZD5cbiAgPE1haW4+XG4gICAgPEhlYWRlciAvPlxuICAgIDxXaHkgLz5cbiAgICA8VHJlYXRtZW50cyAvPlxuICAgIDxUZWNobmlxdWVzIC8+XG4gICAgPERvY3RvciAvPlxuICAgIDxQcmljaW5nIC8+XG4gICAgPFRlc3RpbW9uaWFscyAvPlxuICAgIDxDb250YWN0IC8+XG4gIDwvTWFpbj5cbjwvZGl2PlxuKVxuXG5jb25zdCBNYWluID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG5gIl19