webpackHotUpdate(1,{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW1vbmlhbHMuanM/ZjI2OSJdLCJuYW1lcyI6WyJ0ZXN0aW1vbmlhbHMiLCJxdW90ZSIsIm5hbWUiLCJsb2NhdGlvbiIsIlRlc3RpbW9uaWFscyIsInN0YXRlIiwidGVzdGltb25pYWxJbmRleCIsImxvb3BUZXN0aW1vbmlhbHMiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwiVGVzdGltb25pYWxzQ29udGFpbmVyIiwiZGl2IiwiVGVzdGltb25pYWwiLCJRdW90ZSIsIlBhdGllbnROYW1lIiwiTG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGVBQWUsQ0FDcEI7QUFDQ0MsU0FBTyw2VEFEUjtBQUVDQyxRQUFNLFdBRlA7QUFHQ0MsWUFBVTtBQUhYLEVBRG9CLEVBTXBCO0FBQ0NGLFNBQU8sK2NBRFI7QUFFQ0MsUUFBTSxtQkFGUDtBQUdDQyxZQUFVO0FBSFgsRUFOb0IsRUFXcEI7QUFDQ0YsU0FBTyxzUEFEUjtBQUVDQyxRQUFNLE9BRlA7QUFHQ0MsWUFBVTtBQUhYLEVBWG9CLENBQXJCOztLQWtCcUJDLFk7Ozs7Ozs7Ozs7Ozs7O3VOQUVwQkMsSyxHQUFNO0FBQ0xDLHNCQUFrQjtBQURiLEksUUFRTkMsZ0IsR0FBbUIsWUFBTTtBQUN4QkMsZ0JBQWEsWUFBTTtBQUNsQixTQUFHLE1BQUtILEtBQUwsQ0FBV0MsZ0JBQVgsSUFBK0JOLGFBQWFTLE1BQWIsR0FBcUIsQ0FBdkQsRUFBeUQ7QUFDeEQsWUFBS0MsUUFBTCxDQUFjO0FBQ2JKLHlCQUFrQjtBQURMLE9BQWQ7QUFHQSxNQUpELE1BSUs7QUFDSixZQUFLSSxRQUFMLENBQWM7QUFDYkoseUJBQWtCLE1BQUtELEtBQUwsQ0FBV0MsZ0JBQVgsR0FBNkI7QUFEbEMsT0FBZDtBQUdBO0FBQ0QsS0FWRCxFQVVHLEtBVkg7QUFXQSxJOzs7Ozt1Q0FoQmtCO0FBQ2pCLFNBQUtDLGdCQUFMO0FBQ0Q7Ozs0QkFnQk87QUFDUCxXQUNDO0FBQUMsMEJBQUQ7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESDtBQUtDO0FBQUMsaUJBQUQ7QUFBQTtBQUNDO0FBQUMsWUFBRDtBQUFBO0FBQUE7QUFFRVAsb0JBQWEsS0FBS0ssS0FBTCxDQUFXQyxnQkFBeEIsRUFBMENMLEtBRjVDO0FBQUE7QUFBQSxPQUREO0FBTUM7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFDSUQsb0JBQWEsS0FBS0ssS0FBTCxDQUFXQyxnQkFBeEIsRUFBMENKO0FBRDlDLE9BTkQ7QUFTQztBQUFDLGVBQUQ7QUFBQTtBQUNFRixvQkFBYSxLQUFLSyxLQUFMLENBQVdDLGdCQUF4QixFQUEwQ0g7QUFENUM7QUFURDtBQUxELEtBREQ7QUFxQkE7Ozs7O21CQTlDbUJDLFk7OztBQWtEckIsS0FBTU8sd0JBQXdCLDJCQUFPQyxHQUEvQixpQkFBTjs7QUFJQSxLQUFNQyxjQUFjLDJCQUFPRCxHQUFyQixrQkFBTjs7QUFVQSxLQUFNRSxRQUFRLDJCQUFPRixHQUFmLGtCQUFOOztBQUlBLEtBQU1HLGNBQWMsMkJBQU9ILEdBQXJCLGtCQUFOOztBQUtBLEtBQU1JLFdBQVcsMkJBQU9KLEdBQWxCLGtCQUFOIiwiZmlsZSI6IjEuZjU4OTI4NzZlZjczZTgxNjIxYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFRlc3RpbW9uaWFsSXRlbSBmcm9tICcuL3Rlc3RpbW9uaWFsSXRlbSdcblxuY29uc3QgdGVzdGltb25pYWxzID0gW1xuXHR7XG5cdFx0cXVvdGU6IFwiU2Vzc2lvbnMgd2l0aCBEci4gSmlhbmcgYXJlIHF1aWV0LCByZXN0ZnVsIGFuZCBwcml2YXRlLiBTaGUgZ2l2ZXMgZWFjaCBwYXRpZW50IG9uZS1vbi1vbmUgYXR0ZW50aW9uIGFuZCBuZXZlciBsZWF2ZXMgeW91IGFsb25lISBJIGhhdmUgcmVjZWl2ZWQgYWN1cHVuY3R1cmUgZnJvbSA0IG90aGVyIGRvY3RvcnMgb3ZlciB0aGUgeWVhcnMgYW5kIERyLiBKaWFuZyBpcyBieSBmYXIgdGhlIG1vc3QgcHJvZmVzc2lvbmFsIGFuZCBrbm93bGVkZ2VhYmxlIGRvY3RvciBJIGhhdmUgbWV0LiBJIHJlY29tbWVuZCBoZXIgd2l0aG91dCBhbnkgcmVzZXJ2YXRpb24uXCIsXG5cdFx0bmFtZTogXCJLaW0gUmVnYW5cIixcblx0XHRsb2NhdGlvbjogXCJSeWUsIE5ZXCJcblx0fSxcblx0e1xuXHRcdHF1b3RlOiBcIkkgY2FtZSB0byBEci4gSmluZyB3aXRoIHRlcnJpYmxlIGxvd2VyIGJhY2sgcGFpbi4gSSBoYWQgYSB0cmVtZW5kb3VzIG11c2NsZSBjcmFtcCBhbGwgYWNyb3NzIG15IGxvd2VyIGJhY2sgYW5kIGF0IHRpbWVzIGNvdWxkIG5vdCB3YWxrIHdpdGhvdXQgYSBjYW5lLiBBZnRlciBvbmUgdHJlYXRtZW50LCBJIGNvdWxkIG1vdmUgZnJlZWx5IGFnYWluLiBXaXRoIHJlcGVhdGVkIHRyZWF0bWVudHMsIG15IGFiaWxpdHkgdG8gcmVzaXN0IHJlLWluanVyaW5nIG15IGJhY2sgc2xvd2x5IGluY3JlYXNlZCwgYW5kIGFueSBmdXR1cmUgaW5jaWRlbnRzIHdlcmUgbXVjaCBtb3JlIG1pbGQuIEkgaGF2ZSByZWNvbW1lbmRlZCBEci4gSmluZyB0byBmcmllbmRzIGFuZCBjby13b3JrZXJzLiBTaGUgaXMgdmVyeSBwbGVhc2FudCwgdmVyeSBrbm93bGVkZ2VhYmxlIGFuZCB2ZXJ5IGRlZGljYXRlZCB0byBoZXIgcGF0aWVudHMuXCIsXG5cdFx0bmFtZTogXCJLZW5uZXRoIENpdGFyZWxsYVwiLFxuXHRcdGxvY2F0aW9uOiBcIldoaXRlIFBsYWlucywgTllcIlxuXHR9LFxuXHR7XG5cdFx0cXVvdGU6IFwiRHIuIEppYW5nJ3MgdHJlYXRtZW50IGlzIHJlYWxseSBzcGVjaWFsLiBTaGUgZG9lcyBub3QganVzdCB0cnkgdG8gcmVsaWV2ZSB0aGUgbXVzY2xlIHBhaW4sIHdoaWNoIG1vc3Qgb3RoZXIgZG9jcyBkby4gU2hlIGFkb3B0cyBoZXIgMjArIHllYXJzIG9mIHdvcmtpbmcgZXhwZXJpZW5jZSBpbiBzdWNoIGFyZWEsIGRldmVsb3BzIGhlciBvd24gdHJlYXRtZW50IG1ldGhvZC4gSXQgaXMgcmVhbGx5IGdyZWF0IGFuZCBoZWxwZnVsLlwiLFxuXHRcdG5hbWU6IFwiVGlnZXJcIixcblx0XHRsb2NhdGlvbjogXCJTdGFtZm9yZCwgQ1RcIlxuXHR9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RpbW9uaWFscyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0c3RhdGU9e1xuXHRcdHRlc3RpbW9uaWFsSW5kZXg6IDBcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0IHRoaXMubG9vcFRlc3RpbW9uaWFscygpXG5cdH1cblxuXHRsb29wVGVzdGltb25pYWxzID0gKCkgPT4ge1xuXHRcdHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXggPj0gdGVzdGltb25pYWxzLmxlbmd0aCAtMSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRlc3RpbW9uaWFsSW5kZXg6IDBcblx0XHRcdFx0fSlcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0ZXN0aW1vbmlhbEluZGV4OiB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXggKzFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LCAxNTAwMClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxUZXN0aW1vbmlhbHNDb250YWluZXI+XG4gICAgXHRcdDxTZWN0aW9uVGl0bGU+XG4gICAgICBcdFx0V2hhdCBPdXIgUGF0aWVudHMgU2F5Li4uXG4gICAgXHRcdDwvU2VjdGlvblRpdGxlPlxuXHRcdFx0XHRcblx0XHRcdFx0PFRlc3RpbW9uaWFsPlxuXHRcdFx0XHRcdDxRdW90ZT5cblx0XHRcdFx0XHRcdFwiXG5cdFx0XHRcdFx0XHR7dGVzdGltb25pYWxzW3RoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleF0ucXVvdGV9XG5cdFx0XHRcdFx0XHRcIlxuXHRcdFx0XHRcdDwvUXVvdGU+XG5cdFx0XHRcdFx0PFBhdGllbnROYW1lPlxuXHRcdFx0XHRcdFx0LSB7dGVzdGltb25pYWxzW3RoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleF0ubmFtZX1cblx0XHRcdFx0XHQ8L1BhdGllbnROYW1lPlxuXHRcdFx0XHRcdDxMb2NhdGlvbj5cblx0XHRcdFx0XHRcdHt0ZXN0aW1vbmlhbHNbdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4XS5sb2NhdGlvbn1cblx0XHRcdFx0XHQ8L0xvY2F0aW9uPlxuXHRcdFx0XHQ8L1Rlc3RpbW9uaWFsPlxuIFx0XHRcdDwvVGVzdGltb25pYWxzQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuICBcblxuY29uc3QgVGVzdGltb25pYWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZy10b3A6IDgwcHg7XHRcbmBcblxuY29uc3QgVGVzdGltb25pYWwgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW46IDIwcHggYXV0byAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA0MCU7XG5cdGZvbnQtc2l6ZTogMS4yOWVtO1xuXHRsaW5lLWhlaWdodDogMS40Mztcblx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJztcblx0aGVpZ2h0OiA0MzBweDtcbmBcblxuY29uc3QgUXVvdGUgPSBzdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IFBhdGllbnROYW1lID0gc3R5bGVkLmRpdmBcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xuYFxuXG5jb25zdCBMb2NhdGlvbiA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi10b3A6IDVweDtcblx0Y29sb3I6ICNFMUEwMzA7XG5cdGZvbnQtc2l6ZTogLjllbTtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcbmBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy90ZXN0aW1vbmlhbHMuanMiXSwic291cmNlUm9vdCI6IiJ9