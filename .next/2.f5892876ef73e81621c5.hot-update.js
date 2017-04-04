webpackHotUpdate(2,{

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _taggedTemplateLiteral2 = __webpack_require__(20);
	
	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);
	
	var _getPrototypeOf = __webpack_require__(133);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(138);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(140);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(139);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding-top: 80px;\t\n'], ['\n\tpadding-top: 80px;\t\n']),
	    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 20px auto 0;\n\ttext-align: center;\n\twidth: 40%;\n\tfont-size: 1.29em;\n\tline-height: 1.43;\n\tfont-family: \'Source Serif Pro\';\n\theight: 430px;\n'], ['\n\tmargin: 20px auto 0;\n\ttext-align: center;\n\twidth: 40%;\n\tfont-size: 1.29em;\n\tline-height: 1.43;\n\tfont-family: \'Source Serif Pro\';\n\theight: 430px;\n']),
	    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']),
	    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-style: italic;\n\tmargin-top: 30px;\n'], ['\n\tfont-style: italic;\n\tmargin-top: 30px;\n']),
	    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\tfont-size: .9em;\n\tmargin-bottom: 40px;\n'], ['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\tfont-size: .9em;\n\tmargin-bottom: 40px;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(21);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _SectionTitle = __webpack_require__(100);
	
	var _SectionTitle2 = _interopRequireDefault(_SectionTitle);
	
	var _testimonialItem = __webpack_require__(168);
	
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
					null,
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3RpbW9uaWFscy5qcyJdLCJuYW1lcyI6WyJ0ZXN0aW1vbmlhbHMiLCJxdW90ZSIsIm5hbWUiLCJsb2NhdGlvbiIsIlRlc3RpbW9uaWFscyIsInN0YXRlIiwidGVzdGltb25pYWxJbmRleCIsImxvb3BUZXN0aW1vbmlhbHMiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwiVGVzdGltb25pYWxzQ29udGFpbmVyIiwiZGl2IiwiVGVzdGltb25pYWwiLCJRdW90ZSIsIlBhdGllbnROYW1lIiwiTG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLENBQ3BCO0FBQ0NDLFFBQU8sNlRBRFI7QUFFQ0MsT0FBTSxXQUZQO0FBR0NDLFdBQVU7QUFIWCxDQURvQixFQU1wQjtBQUNDRixRQUFPLCtjQURSO0FBRUNDLE9BQU0sbUJBRlA7QUFHQ0MsV0FBVTtBQUhYLENBTm9CLEVBV3BCO0FBQ0NGLFFBQU8sc1BBRFI7QUFFQ0MsT0FBTSxPQUZQO0FBR0NDLFdBQVU7QUFIWCxDQVhvQixDQUFyQjs7SUFrQnFCQyxZOzs7Ozs7Ozs7Ozs7OztzTkFFcEJDLEssR0FBTTtBQUNMQyxxQkFBa0I7QUFEYixHLFFBUU5DLGdCLEdBQW1CLFlBQU07QUFDeEJDLGVBQWEsWUFBTTtBQUNsQixRQUFHLE1BQUtILEtBQUwsQ0FBV0MsZ0JBQVgsSUFBK0JOLGFBQWFTLE1BQWIsR0FBcUIsQ0FBdkQsRUFBeUQ7QUFDeEQsV0FBS0MsUUFBTCxDQUFjO0FBQ2JKLHdCQUFrQjtBQURMLE1BQWQ7QUFHQSxLQUpELE1BSUs7QUFDSixXQUFLSSxRQUFMLENBQWM7QUFDYkosd0JBQWtCLE1BQUtELEtBQUwsQ0FBV0MsZ0JBQVgsR0FBNkI7QUFEbEMsTUFBZDtBQUdBO0FBQ0QsSUFWRCxFQVVHLEtBVkg7QUFXQSxHOzs7OztzQ0FoQmtCO0FBQ2pCLFFBQUtDLGdCQUFMO0FBQ0Q7OzsyQkFnQk87QUFDUCxVQUNDO0FBQUMseUJBQUQ7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESDtBQUtDO0FBQUMsZ0JBQUQ7QUFBQTtBQUNDO0FBQUMsV0FBRDtBQUFBO0FBQUE7QUFFRVAsbUJBQWEsS0FBS0ssS0FBTCxDQUFXQyxnQkFBeEIsRUFBMENMLEtBRjVDO0FBQUE7QUFBQSxNQUREO0FBTUM7QUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFDSUQsbUJBQWEsS0FBS0ssS0FBTCxDQUFXQyxnQkFBeEIsRUFBMENKO0FBRDlDLE1BTkQ7QUFTQztBQUFDLGNBQUQ7QUFBQTtBQUNFRixtQkFBYSxLQUFLSyxLQUFMLENBQVdDLGdCQUF4QixFQUEwQ0g7QUFENUM7QUFURDtBQUxELElBREQ7QUFxQkE7Ozs7O2tCQTlDbUJDLFk7OztBQWtEckIsSUFBTU8sd0JBQXdCLDJCQUFPQyxHQUEvQixpQkFBTjs7QUFJQSxJQUFNQyxjQUFjLDJCQUFPRCxHQUFyQixrQkFBTjs7QUFVQSxJQUFNRSxRQUFRLDJCQUFPRixHQUFmLGtCQUFOOztBQUlBLElBQU1HLGNBQWMsMkJBQU9ILEdBQXJCLGtCQUFOOztBQUtBLElBQU1JLFdBQVcsMkJBQU9KLEdBQWxCLGtCQUFOIiwiZmlsZSI6InRlc3RpbW9uaWFscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgVGVzdGltb25pYWxJdGVtIGZyb20gJy4vdGVzdGltb25pYWxJdGVtJ1xuXG5jb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG5cdHtcblx0XHRxdW90ZTogXCJTZXNzaW9ucyB3aXRoIERyLiBKaWFuZyBhcmUgcXVpZXQsIHJlc3RmdWwgYW5kIHByaXZhdGUuIFNoZSBnaXZlcyBlYWNoIHBhdGllbnQgb25lLW9uLW9uZSBhdHRlbnRpb24gYW5kIG5ldmVyIGxlYXZlcyB5b3UgYWxvbmUhIEkgaGF2ZSByZWNlaXZlZCBhY3VwdW5jdHVyZSBmcm9tIDQgb3RoZXIgZG9jdG9ycyBvdmVyIHRoZSB5ZWFycyBhbmQgRHIuIEppYW5nIGlzIGJ5IGZhciB0aGUgbW9zdCBwcm9mZXNzaW9uYWwgYW5kIGtub3dsZWRnZWFibGUgZG9jdG9yIEkgaGF2ZSBtZXQuIEkgcmVjb21tZW5kIGhlciB3aXRob3V0IGFueSByZXNlcnZhdGlvbi5cIixcblx0XHRuYW1lOiBcIktpbSBSZWdhblwiLFxuXHRcdGxvY2F0aW9uOiBcIlJ5ZSwgTllcIlxuXHR9LFxuXHR7XG5cdFx0cXVvdGU6IFwiSSBjYW1lIHRvIERyLiBKaW5nIHdpdGggdGVycmlibGUgbG93ZXIgYmFjayBwYWluLiBJIGhhZCBhIHRyZW1lbmRvdXMgbXVzY2xlIGNyYW1wIGFsbCBhY3Jvc3MgbXkgbG93ZXIgYmFjayBhbmQgYXQgdGltZXMgY291bGQgbm90IHdhbGsgd2l0aG91dCBhIGNhbmUuIEFmdGVyIG9uZSB0cmVhdG1lbnQsIEkgY291bGQgbW92ZSBmcmVlbHkgYWdhaW4uIFdpdGggcmVwZWF0ZWQgdHJlYXRtZW50cywgbXkgYWJpbGl0eSB0byByZXNpc3QgcmUtaW5qdXJpbmcgbXkgYmFjayBzbG93bHkgaW5jcmVhc2VkLCBhbmQgYW55IGZ1dHVyZSBpbmNpZGVudHMgd2VyZSBtdWNoIG1vcmUgbWlsZC4gSSBoYXZlIHJlY29tbWVuZGVkIERyLiBKaW5nIHRvIGZyaWVuZHMgYW5kIGNvLXdvcmtlcnMuIFNoZSBpcyB2ZXJ5IHBsZWFzYW50LCB2ZXJ5IGtub3dsZWRnZWFibGUgYW5kIHZlcnkgZGVkaWNhdGVkIHRvIGhlciBwYXRpZW50cy5cIixcblx0XHRuYW1lOiBcIktlbm5ldGggQ2l0YXJlbGxhXCIsXG5cdFx0bG9jYXRpb246IFwiV2hpdGUgUGxhaW5zLCBOWVwiXG5cdH0sXG5cdHtcblx0XHRxdW90ZTogXCJEci4gSmlhbmcncyB0cmVhdG1lbnQgaXMgcmVhbGx5IHNwZWNpYWwuIFNoZSBkb2VzIG5vdCBqdXN0IHRyeSB0byByZWxpZXZlIHRoZSBtdXNjbGUgcGFpbiwgd2hpY2ggbW9zdCBvdGhlciBkb2NzIGRvLiBTaGUgYWRvcHRzIGhlciAyMCsgeWVhcnMgb2Ygd29ya2luZyBleHBlcmllbmNlIGluIHN1Y2ggYXJlYSwgZGV2ZWxvcHMgaGVyIG93biB0cmVhdG1lbnQgbWV0aG9kLiBJdCBpcyByZWFsbHkgZ3JlYXQgYW5kIGhlbHBmdWwuXCIsXG5cdFx0bmFtZTogXCJUaWdlclwiLFxuXHRcdGxvY2F0aW9uOiBcIlN0YW1mb3JkLCBDVFwiXG5cdH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGltb25pYWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzdGF0ZT17XG5cdFx0dGVzdGltb25pYWxJbmRleDogMFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHQgdGhpcy5sb29wVGVzdGltb25pYWxzKClcblx0fVxuXG5cdGxvb3BUZXN0aW1vbmlhbHMgPSAoKSA9PiB7XG5cdFx0c2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRcdGlmKHRoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleCA+PSB0ZXN0aW1vbmlhbHMubGVuZ3RoIC0xKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dGVzdGltb25pYWxJbmRleDogMFxuXHRcdFx0XHR9KVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRlc3RpbW9uaWFsSW5kZXg6IHRoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleCArMVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sIDE1MDAwKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PFRlc3RpbW9uaWFsc0NvbnRhaW5lcj5cbiAgICBcdFx0PFNlY3Rpb25UaXRsZT5cbiAgICAgIFx0XHRXaGF0IE91ciBQYXRpZW50cyBTYXkuLi5cbiAgICBcdFx0PC9TZWN0aW9uVGl0bGU+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8VGVzdGltb25pYWw+XG5cdFx0XHRcdFx0PFF1b3RlPlxuXHRcdFx0XHRcdFx0XCJcblx0XHRcdFx0XHRcdHt0ZXN0aW1vbmlhbHNbdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4XS5xdW90ZX1cblx0XHRcdFx0XHRcdFwiXG5cdFx0XHRcdFx0PC9RdW90ZT5cblx0XHRcdFx0XHQ8UGF0aWVudE5hbWU+XG5cdFx0XHRcdFx0XHQtIHt0ZXN0aW1vbmlhbHNbdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4XS5uYW1lfVxuXHRcdFx0XHRcdDwvUGF0aWVudE5hbWU+XG5cdFx0XHRcdFx0PExvY2F0aW9uPlxuXHRcdFx0XHRcdFx0e3Rlc3RpbW9uaWFsc1t0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXhdLmxvY2F0aW9ufVxuXHRcdFx0XHRcdDwvTG9jYXRpb24+XG5cdFx0XHRcdDwvVGVzdGltb25pYWw+XG4gXHRcdFx0PC9UZXN0aW1vbmlhbHNDb250YWluZXI+XG5cdFx0KVxuXHR9XG59XG4gIFxuXG5jb25zdCBUZXN0aW1vbmlhbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRwYWRkaW5nLXRvcDogODBweDtcdFxuYFxuXG5jb25zdCBUZXN0aW1vbmlhbCA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbjogMjBweCBhdXRvIDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDQwJTtcblx0Zm9udC1zaXplOiAxLjI5ZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjQzO1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nO1xuXHRoZWlnaHQ6IDQzMHB4O1xuYFxuXG5jb25zdCBRdW90ZSA9IHN0eWxlZC5kaXZgXG5cbmBcblxuY29uc3QgUGF0aWVudE5hbWUgPSBzdHlsZWQuZGl2YFxuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5gXG5cbmNvbnN0IExvY2F0aW9uID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLXRvcDogNXB4O1xuXHRjb2xvcjogI0UxQTAzMDtcblx0Zm9udC1zaXplOiAuOWVtO1xuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuYCJdfQ==
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/testimonials"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/testimonials") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW1vbmlhbHMuanM/ZjI2OSoiXSwibmFtZXMiOlsidGVzdGltb25pYWxzIiwicXVvdGUiLCJuYW1lIiwibG9jYXRpb24iLCJUZXN0aW1vbmlhbHMiLCJzdGF0ZSIsInRlc3RpbW9uaWFsSW5kZXgiLCJsb29wVGVzdGltb25pYWxzIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsIlRlc3RpbW9uaWFsc0NvbnRhaW5lciIsImRpdiIsIlRlc3RpbW9uaWFsIiwiUXVvdGUiLCJQYXRpZW50TmFtZSIsIkxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxlQUFlLENBQ3BCO0FBQ0NDLFNBQU8sNlRBRFI7QUFFQ0MsUUFBTSxXQUZQO0FBR0NDLFlBQVU7QUFIWCxFQURvQixFQU1wQjtBQUNDRixTQUFPLCtjQURSO0FBRUNDLFFBQU0sbUJBRlA7QUFHQ0MsWUFBVTtBQUhYLEVBTm9CLEVBV3BCO0FBQ0NGLFNBQU8sc1BBRFI7QUFFQ0MsUUFBTSxPQUZQO0FBR0NDLFlBQVU7QUFIWCxFQVhvQixDQUFyQjs7S0FrQnFCQyxZOzs7Ozs7Ozs7Ozs7Ozt1TkFFcEJDLEssR0FBTTtBQUNMQyxzQkFBa0I7QUFEYixJLFFBUU5DLGdCLEdBQW1CLFlBQU07QUFDeEJDLGdCQUFhLFlBQU07QUFDbEIsU0FBRyxNQUFLSCxLQUFMLENBQVdDLGdCQUFYLElBQStCTixhQUFhUyxNQUFiLEdBQXFCLENBQXZELEVBQXlEO0FBQ3hELFlBQUtDLFFBQUwsQ0FBYztBQUNiSix5QkFBa0I7QUFETCxPQUFkO0FBR0EsTUFKRCxNQUlLO0FBQ0osWUFBS0ksUUFBTCxDQUFjO0FBQ2JKLHlCQUFrQixNQUFLRCxLQUFMLENBQVdDLGdCQUFYLEdBQTZCO0FBRGxDLE9BQWQ7QUFHQTtBQUNELEtBVkQsRUFVRyxLQVZIO0FBV0EsSTs7Ozs7dUNBaEJrQjtBQUNqQixTQUFLQyxnQkFBTDtBQUNEOzs7NEJBZ0JPO0FBQ1AsV0FDQztBQUFDLDBCQUFEO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREg7QUFLQztBQUFDLGlCQUFEO0FBQUE7QUFDQztBQUFDLFlBQUQ7QUFBQTtBQUFBO0FBRUVQLG9CQUFhLEtBQUtLLEtBQUwsQ0FBV0MsZ0JBQXhCLEVBQTBDTCxLQUY1QztBQUFBO0FBQUEsT0FERDtBQU1DO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQ0lELG9CQUFhLEtBQUtLLEtBQUwsQ0FBV0MsZ0JBQXhCLEVBQTBDSjtBQUQ5QyxPQU5EO0FBU0M7QUFBQyxlQUFEO0FBQUE7QUFDRUYsb0JBQWEsS0FBS0ssS0FBTCxDQUFXQyxnQkFBeEIsRUFBMENIO0FBRDVDO0FBVEQ7QUFMRCxLQUREO0FBcUJBOzs7OzttQkE5Q21CQyxZOzs7QUFrRHJCLEtBQU1PLHdCQUF3QiwyQkFBT0MsR0FBL0IsaUJBQU47O0FBSUEsS0FBTUMsY0FBYywyQkFBT0QsR0FBckIsa0JBQU47O0FBVUEsS0FBTUUsUUFBUSwyQkFBT0YsR0FBZixrQkFBTjs7QUFJQSxLQUFNRyxjQUFjLDJCQUFPSCxHQUFyQixrQkFBTjs7QUFLQSxLQUFNSSxXQUFXLDJCQUFPSixHQUFsQixrQkFBTiIsImZpbGUiOiIyLmY1ODkyODc2ZWY3M2U4MTYyMWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBUZXN0aW1vbmlhbEl0ZW0gZnJvbSAnLi90ZXN0aW1vbmlhbEl0ZW0nXG5cbmNvbnN0IHRlc3RpbW9uaWFscyA9IFtcblx0e1xuXHRcdHF1b3RlOiBcIlNlc3Npb25zIHdpdGggRHIuIEppYW5nIGFyZSBxdWlldCwgcmVzdGZ1bCBhbmQgcHJpdmF0ZS4gU2hlIGdpdmVzIGVhY2ggcGF0aWVudCBvbmUtb24tb25lIGF0dGVudGlvbiBhbmQgbmV2ZXIgbGVhdmVzIHlvdSBhbG9uZSEgSSBoYXZlIHJlY2VpdmVkIGFjdXB1bmN0dXJlIGZyb20gNCBvdGhlciBkb2N0b3JzIG92ZXIgdGhlIHllYXJzIGFuZCBEci4gSmlhbmcgaXMgYnkgZmFyIHRoZSBtb3N0IHByb2Zlc3Npb25hbCBhbmQga25vd2xlZGdlYWJsZSBkb2N0b3IgSSBoYXZlIG1ldC4gSSByZWNvbW1lbmQgaGVyIHdpdGhvdXQgYW55IHJlc2VydmF0aW9uLlwiLFxuXHRcdG5hbWU6IFwiS2ltIFJlZ2FuXCIsXG5cdFx0bG9jYXRpb246IFwiUnllLCBOWVwiXG5cdH0sXG5cdHtcblx0XHRxdW90ZTogXCJJIGNhbWUgdG8gRHIuIEppbmcgd2l0aCB0ZXJyaWJsZSBsb3dlciBiYWNrIHBhaW4uIEkgaGFkIGEgdHJlbWVuZG91cyBtdXNjbGUgY3JhbXAgYWxsIGFjcm9zcyBteSBsb3dlciBiYWNrIGFuZCBhdCB0aW1lcyBjb3VsZCBub3Qgd2FsayB3aXRob3V0IGEgY2FuZS4gQWZ0ZXIgb25lIHRyZWF0bWVudCwgSSBjb3VsZCBtb3ZlIGZyZWVseSBhZ2Fpbi4gV2l0aCByZXBlYXRlZCB0cmVhdG1lbnRzLCBteSBhYmlsaXR5IHRvIHJlc2lzdCByZS1pbmp1cmluZyBteSBiYWNrIHNsb3dseSBpbmNyZWFzZWQsIGFuZCBhbnkgZnV0dXJlIGluY2lkZW50cyB3ZXJlIG11Y2ggbW9yZSBtaWxkLiBJIGhhdmUgcmVjb21tZW5kZWQgRHIuIEppbmcgdG8gZnJpZW5kcyBhbmQgY28td29ya2Vycy4gU2hlIGlzIHZlcnkgcGxlYXNhbnQsIHZlcnkga25vd2xlZGdlYWJsZSBhbmQgdmVyeSBkZWRpY2F0ZWQgdG8gaGVyIHBhdGllbnRzLlwiLFxuXHRcdG5hbWU6IFwiS2VubmV0aCBDaXRhcmVsbGFcIixcblx0XHRsb2NhdGlvbjogXCJXaGl0ZSBQbGFpbnMsIE5ZXCJcblx0fSxcblx0e1xuXHRcdHF1b3RlOiBcIkRyLiBKaWFuZydzIHRyZWF0bWVudCBpcyByZWFsbHkgc3BlY2lhbC4gU2hlIGRvZXMgbm90IGp1c3QgdHJ5IHRvIHJlbGlldmUgdGhlIG11c2NsZSBwYWluLCB3aGljaCBtb3N0IG90aGVyIGRvY3MgZG8uIFNoZSBhZG9wdHMgaGVyIDIwKyB5ZWFycyBvZiB3b3JraW5nIGV4cGVyaWVuY2UgaW4gc3VjaCBhcmVhLCBkZXZlbG9wcyBoZXIgb3duIHRyZWF0bWVudCBtZXRob2QuIEl0IGlzIHJlYWxseSBncmVhdCBhbmQgaGVscGZ1bC5cIixcblx0XHRuYW1lOiBcIlRpZ2VyXCIsXG5cdFx0bG9jYXRpb246IFwiU3RhbWZvcmQsIENUXCJcblx0fVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW1vbmlhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHN0YXRlPXtcblx0XHR0ZXN0aW1vbmlhbEluZGV4OiAwXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdCB0aGlzLmxvb3BUZXN0aW1vbmlhbHMoKVxuXHR9XG5cblx0bG9vcFRlc3RpbW9uaWFscyA9ICgpID0+IHtcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4ID49IHRlc3RpbW9uaWFscy5sZW5ndGggLTEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0ZXN0aW1vbmlhbEluZGV4OiAwXG5cdFx0XHRcdH0pXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dGVzdGltb25pYWxJbmRleDogdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4ICsxXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSwgMTUwMDApXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8VGVzdGltb25pYWxzQ29udGFpbmVyPlxuICAgIFx0XHQ8U2VjdGlvblRpdGxlPlxuICAgICAgXHRcdFdoYXQgT3VyIFBhdGllbnRzIFNheS4uLlxuICAgIFx0XHQ8L1NlY3Rpb25UaXRsZT5cblx0XHRcdFx0XG5cdFx0XHRcdDxUZXN0aW1vbmlhbD5cblx0XHRcdFx0XHQ8UXVvdGU+XG5cdFx0XHRcdFx0XHRcIlxuXHRcdFx0XHRcdFx0e3Rlc3RpbW9uaWFsc1t0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXhdLnF1b3RlfVxuXHRcdFx0XHRcdFx0XCJcblx0XHRcdFx0XHQ8L1F1b3RlPlxuXHRcdFx0XHRcdDxQYXRpZW50TmFtZT5cblx0XHRcdFx0XHRcdC0ge3Rlc3RpbW9uaWFsc1t0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXhdLm5hbWV9XG5cdFx0XHRcdFx0PC9QYXRpZW50TmFtZT5cblx0XHRcdFx0XHQ8TG9jYXRpb24+XG5cdFx0XHRcdFx0XHR7dGVzdGltb25pYWxzW3RoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleF0ubG9jYXRpb259XG5cdFx0XHRcdFx0PC9Mb2NhdGlvbj5cblx0XHRcdFx0PC9UZXN0aW1vbmlhbD5cbiBcdFx0XHQ8L1Rlc3RpbW9uaWFsc0NvbnRhaW5lcj5cblx0XHQpXG5cdH1cbn1cbiAgXG5cbmNvbnN0IFRlc3RpbW9uaWFsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdHBhZGRpbmctdG9wOiA4MHB4O1x0XG5gXG5cbmNvbnN0IFRlc3RpbW9uaWFsID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luOiAyMHB4IGF1dG8gMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogNDAlO1xuXHRmb250LXNpemU6IDEuMjllbTtcblx0bGluZS1oZWlnaHQ6IDEuNDM7XG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybyc7XG5cdGhlaWdodDogNDMwcHg7XG5gXG5cbmNvbnN0IFF1b3RlID0gc3R5bGVkLmRpdmBcblxuYFxuXG5jb25zdCBQYXRpZW50TmFtZSA9IHN0eWxlZC5kaXZgXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0bWFyZ2luLXRvcDogMzBweDtcbmBcblxuY29uc3QgTG9jYXRpb24gPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdGNvbG9yOiAjRTFBMDMwO1xuXHRmb250LXNpemU6IC45ZW07XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG5gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdGVzdGltb25pYWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==