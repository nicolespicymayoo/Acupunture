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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding-top: 70px;\t\n'], ['\n\tpadding-top: 70px;\t\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 35px auto 0;\n\ttext-align: center;\n\twidth: 40%;\n\tfont-size: 1.24em;\n\tline-height: 1.7;\n\tfont-family: \'Source Serif Pro\';\n\theight: 430px;\n'], ['\n\tmargin: 35px auto 0;\n\ttext-align: center;\n\twidth: 40%;\n\tfont-size: 1.24em;\n\tline-height: 1.7;\n\tfont-family: \'Source Serif Pro\';\n\theight: 430px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-style: italic;\n\tfont-size: .94em;\n\tmargin-top: 30px;\n'], ['\n\tfont-style: italic;\n\tfont-size: .94em;\n\tmargin-top: 30px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\tfont-size: .9em;\n\tmargin-bottom: 40px;\n'], ['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\tfont-size: .9em;\n\tmargin-bottom: 40px;\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _testimonialItem = require('./testimonialItem');

var _testimonialItem2 = _interopRequireDefault(_testimonialItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testimonials = [{
	quote: "Sessions with Dr. Jiang are quiet, restful and private. She gives each patient one-on-one attention and never leaves you alone! I have received acupuncture from 4 other doctors over the years and Dr. Jiang is by far the most professional and knowledgeable doctor I have met. I recommend her without any reservation.",
	name: "Kim Regan",
	location: "Rye, NY"
}, {
	quote: "I came to Dr. Jing with terrible lower back pain. I had a tremendous muscle cramp all across my lower back and at times could not walk without a cane. After one treatment, I could move freely again. With repeated treatments, my ability to resist re-injuring my back slowly increased, and any future incidents were much more mild. I have recommended Dr. Jing to friends and co-workers. She is very pleasant, very knowledgeable and very dedicated to her patients.",
	name: "Kenneth Citarella",
	location: "White Plains, NY"
}, {
	quote: "Dr. Jiang's treatment is really special. She does not just try to relieve the muscle pain, which most other docs do. She adopts her 20+ years of working experience in such area, develops her own treatment method. It is really great and helpful.",
	name: "Tiger",
	location: "Stamford, CT"
}];

var Testimonials = function (_Component) {
	(0, _inherits3.default)(Testimonials, _Component);

	function Testimonials() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Testimonials);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Testimonials.__proto__ || (0, _getPrototypeOf2.default)(Testimonials)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			testimonialIndex: 0
		}, _this.loopTestimonials = function () {
			setInterval(function () {
				if (_this.state.testimonialIndex >= testimonials.length - 1) {
					_this.setState({
						testimonialIndex: 0
					});
				} else {
					_this.setState({
						testimonialIndex: _this.state.testimonialIndex + 1
					});
				}
			}, 15000);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Testimonials, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loopTestimonials();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				TestimonialsContainer,
				{ id: 'testimonials' },
				_react2.default.createElement(
					_SectionTitle2.default,
					null,
					'What Our Patients Say...'
				),
				_react2.default.createElement(
					Testimonial,
					null,
					_react2.default.createElement(
						Quote,
						null,
						'"',
						testimonials[this.state.testimonialIndex].quote,
						'"'
					),
					_react2.default.createElement(
						PatientName,
						null,
						'- ',
						testimonials[this.state.testimonialIndex].name
					),
					_react2.default.createElement(
						Location,
						null,
						testimonials[this.state.testimonialIndex].location
					)
				)
			);
		}
	}]);
	return Testimonials;
}(_react.Component);

exports.default = Testimonials;


var TestimonialsContainer = _styledComponents2.default.div(_templateObject);

var Testimonial = _styledComponents2.default.div(_templateObject2);

var Quote = _styledComponents2.default.div(_templateObject3);

var PatientName = _styledComponents2.default.div(_templateObject4);

var Location = _styledComponents2.default.div(_templateObject5);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3RpbW9uaWFscy5qcyJdLCJuYW1lcyI6WyJ0ZXN0aW1vbmlhbHMiLCJxdW90ZSIsIm5hbWUiLCJsb2NhdGlvbiIsIlRlc3RpbW9uaWFscyIsInN0YXRlIiwidGVzdGltb25pYWxJbmRleCIsImxvb3BUZXN0aW1vbmlhbHMiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwiVGVzdGltb25pYWxzQ29udGFpbmVyIiwiZGl2IiwiVGVzdGltb25pYWwiLCJRdW90ZSIsIlBhdGllbnROYW1lIiwiTG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLENBQ3BCO0FBQ0NDLFFBQU8sNlRBRFI7QUFFQ0MsT0FBTSxXQUZQO0FBR0NDLFdBQVU7QUFIWCxDQURvQixFQU1wQjtBQUNDRixRQUFPLCtjQURSO0FBRUNDLE9BQU0sbUJBRlA7QUFHQ0MsV0FBVTtBQUhYLENBTm9CLEVBV3BCO0FBQ0NGLFFBQU8sc1BBRFI7QUFFQ0MsT0FBTSxPQUZQO0FBR0NDLFdBQVU7QUFIWCxDQVhvQixDQUFyQjs7SUFrQnFCQyxZOzs7Ozs7Ozs7Ozs7OztzTkFFcEJDLEssR0FBTTtBQUNMQyxxQkFBa0I7QUFEYixHLFFBUU5DLGdCLEdBQW1CLFlBQU07QUFDeEJDLGVBQWEsWUFBTTtBQUNsQixRQUFHLE1BQUtILEtBQUwsQ0FBV0MsZ0JBQVgsSUFBK0JOLGFBQWFTLE1BQWIsR0FBcUIsQ0FBdkQsRUFBeUQ7QUFDeEQsV0FBS0MsUUFBTCxDQUFjO0FBQ2JKLHdCQUFrQjtBQURMLE1BQWQ7QUFHQSxLQUpELE1BSUs7QUFDSixXQUFLSSxRQUFMLENBQWM7QUFDYkosd0JBQWtCLE1BQUtELEtBQUwsQ0FBV0MsZ0JBQVgsR0FBNkI7QUFEbEMsTUFBZDtBQUdBO0FBQ0QsSUFWRCxFQVVHLEtBVkg7QUFXQSxHOzs7OztzQ0FoQmtCO0FBQ2pCLFFBQUtDLGdCQUFMO0FBQ0Q7OzsyQkFnQk87QUFDUCxVQUNDO0FBQUMseUJBQUQ7QUFBQSxNQUF1QixJQUFHLGNBQTFCO0FBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURIO0FBS0M7QUFBQyxnQkFBRDtBQUFBO0FBQ0M7QUFBQyxXQUFEO0FBQUE7QUFBQTtBQUVFUCxtQkFBYSxLQUFLSyxLQUFMLENBQVdDLGdCQUF4QixFQUEwQ0wsS0FGNUM7QUFBQTtBQUFBLE1BREQ7QUFNQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUNJRCxtQkFBYSxLQUFLSyxLQUFMLENBQVdDLGdCQUF4QixFQUEwQ0o7QUFEOUMsTUFORDtBQVNDO0FBQUMsY0FBRDtBQUFBO0FBQ0VGLG1CQUFhLEtBQUtLLEtBQUwsQ0FBV0MsZ0JBQXhCLEVBQTBDSDtBQUQ1QztBQVREO0FBTEQsSUFERDtBQXFCQTs7Ozs7a0JBOUNtQkMsWTs7O0FBa0RyQixJQUFNTyx3QkFBd0IsMkJBQU9DLEdBQS9CLGlCQUFOOztBQUlBLElBQU1DLGNBQWMsMkJBQU9ELEdBQXJCLGtCQUFOOztBQVVBLElBQU1FLFFBQVEsMkJBQU9GLEdBQWYsa0JBQU47O0FBSUEsSUFBTUcsY0FBYywyQkFBT0gsR0FBckIsa0JBQU47O0FBTUEsSUFBTUksV0FBVywyQkFBT0osR0FBbEIsa0JBQU4iLCJmaWxlIjoidGVzdGltb25pYWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBUZXN0aW1vbmlhbEl0ZW0gZnJvbSAnLi90ZXN0aW1vbmlhbEl0ZW0nXG5cbmNvbnN0IHRlc3RpbW9uaWFscyA9IFtcblx0e1xuXHRcdHF1b3RlOiBcIlNlc3Npb25zIHdpdGggRHIuIEppYW5nIGFyZSBxdWlldCwgcmVzdGZ1bCBhbmQgcHJpdmF0ZS4gU2hlIGdpdmVzIGVhY2ggcGF0aWVudCBvbmUtb24tb25lIGF0dGVudGlvbiBhbmQgbmV2ZXIgbGVhdmVzIHlvdSBhbG9uZSEgSSBoYXZlIHJlY2VpdmVkIGFjdXB1bmN0dXJlIGZyb20gNCBvdGhlciBkb2N0b3JzIG92ZXIgdGhlIHllYXJzIGFuZCBEci4gSmlhbmcgaXMgYnkgZmFyIHRoZSBtb3N0IHByb2Zlc3Npb25hbCBhbmQga25vd2xlZGdlYWJsZSBkb2N0b3IgSSBoYXZlIG1ldC4gSSByZWNvbW1lbmQgaGVyIHdpdGhvdXQgYW55IHJlc2VydmF0aW9uLlwiLFxuXHRcdG5hbWU6IFwiS2ltIFJlZ2FuXCIsXG5cdFx0bG9jYXRpb246IFwiUnllLCBOWVwiXG5cdH0sXG5cdHtcblx0XHRxdW90ZTogXCJJIGNhbWUgdG8gRHIuIEppbmcgd2l0aCB0ZXJyaWJsZSBsb3dlciBiYWNrIHBhaW4uIEkgaGFkIGEgdHJlbWVuZG91cyBtdXNjbGUgY3JhbXAgYWxsIGFjcm9zcyBteSBsb3dlciBiYWNrIGFuZCBhdCB0aW1lcyBjb3VsZCBub3Qgd2FsayB3aXRob3V0IGEgY2FuZS4gQWZ0ZXIgb25lIHRyZWF0bWVudCwgSSBjb3VsZCBtb3ZlIGZyZWVseSBhZ2Fpbi4gV2l0aCByZXBlYXRlZCB0cmVhdG1lbnRzLCBteSBhYmlsaXR5IHRvIHJlc2lzdCByZS1pbmp1cmluZyBteSBiYWNrIHNsb3dseSBpbmNyZWFzZWQsIGFuZCBhbnkgZnV0dXJlIGluY2lkZW50cyB3ZXJlIG11Y2ggbW9yZSBtaWxkLiBJIGhhdmUgcmVjb21tZW5kZWQgRHIuIEppbmcgdG8gZnJpZW5kcyBhbmQgY28td29ya2Vycy4gU2hlIGlzIHZlcnkgcGxlYXNhbnQsIHZlcnkga25vd2xlZGdlYWJsZSBhbmQgdmVyeSBkZWRpY2F0ZWQgdG8gaGVyIHBhdGllbnRzLlwiLFxuXHRcdG5hbWU6IFwiS2VubmV0aCBDaXRhcmVsbGFcIixcblx0XHRsb2NhdGlvbjogXCJXaGl0ZSBQbGFpbnMsIE5ZXCJcblx0fSxcblx0e1xuXHRcdHF1b3RlOiBcIkRyLiBKaWFuZydzIHRyZWF0bWVudCBpcyByZWFsbHkgc3BlY2lhbC4gU2hlIGRvZXMgbm90IGp1c3QgdHJ5IHRvIHJlbGlldmUgdGhlIG11c2NsZSBwYWluLCB3aGljaCBtb3N0IG90aGVyIGRvY3MgZG8uIFNoZSBhZG9wdHMgaGVyIDIwKyB5ZWFycyBvZiB3b3JraW5nIGV4cGVyaWVuY2UgaW4gc3VjaCBhcmVhLCBkZXZlbG9wcyBoZXIgb3duIHRyZWF0bWVudCBtZXRob2QuIEl0IGlzIHJlYWxseSBncmVhdCBhbmQgaGVscGZ1bC5cIixcblx0XHRuYW1lOiBcIlRpZ2VyXCIsXG5cdFx0bG9jYXRpb246IFwiU3RhbWZvcmQsIENUXCJcblx0fVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW1vbmlhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHN0YXRlPXtcblx0XHR0ZXN0aW1vbmlhbEluZGV4OiAwXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdCB0aGlzLmxvb3BUZXN0aW1vbmlhbHMoKVxuXHR9XG5cblx0bG9vcFRlc3RpbW9uaWFscyA9ICgpID0+IHtcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4ID49IHRlc3RpbW9uaWFscy5sZW5ndGggLTEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0ZXN0aW1vbmlhbEluZGV4OiAwXG5cdFx0XHRcdH0pXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dGVzdGltb25pYWxJbmRleDogdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4ICsxXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSwgMTUwMDApXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8VGVzdGltb25pYWxzQ29udGFpbmVyIGlkPVwidGVzdGltb25pYWxzXCI+XG4gICAgXHRcdDxTZWN0aW9uVGl0bGU+XG4gICAgICBcdFx0V2hhdCBPdXIgUGF0aWVudHMgU2F5Li4uXG4gICAgXHRcdDwvU2VjdGlvblRpdGxlPlxuXHRcdFx0XHRcblx0XHRcdFx0PFRlc3RpbW9uaWFsPlxuXHRcdFx0XHRcdDxRdW90ZT5cblx0XHRcdFx0XHRcdFwiXG5cdFx0XHRcdFx0XHR7dGVzdGltb25pYWxzW3RoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleF0ucXVvdGV9XG5cdFx0XHRcdFx0XHRcIlxuXHRcdFx0XHRcdDwvUXVvdGU+XG5cdFx0XHRcdFx0PFBhdGllbnROYW1lPlxuXHRcdFx0XHRcdFx0LSB7dGVzdGltb25pYWxzW3RoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleF0ubmFtZX1cblx0XHRcdFx0XHQ8L1BhdGllbnROYW1lPlxuXHRcdFx0XHRcdDxMb2NhdGlvbj5cblx0XHRcdFx0XHRcdHt0ZXN0aW1vbmlhbHNbdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4XS5sb2NhdGlvbn1cblx0XHRcdFx0XHQ8L0xvY2F0aW9uPlxuXHRcdFx0XHQ8L1Rlc3RpbW9uaWFsPlxuIFx0XHRcdDwvVGVzdGltb25pYWxzQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuICBcblxuY29uc3QgVGVzdGltb25pYWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZy10b3A6IDcwcHg7XHRcbmBcblxuY29uc3QgVGVzdGltb25pYWwgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW46IDM1cHggYXV0byAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA0MCU7XG5cdGZvbnQtc2l6ZTogMS4yNGVtO1xuXHRsaW5lLWhlaWdodDogMS43O1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nO1xuXHRoZWlnaHQ6IDQzMHB4O1xuYFxuXG5jb25zdCBRdW90ZSA9IHN0eWxlZC5kaXZgXG5cbmBcblxuY29uc3QgUGF0aWVudE5hbWUgPSBzdHlsZWQuZGl2YFxuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtc2l6ZTogLjk0ZW07XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5gXG5cbmNvbnN0IExvY2F0aW9uID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLXRvcDogNXB4O1xuXHRjb2xvcjogI0UxQTAzMDtcblx0Zm9udC1zaXplOiAuOWVtO1xuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuYCJdfQ==