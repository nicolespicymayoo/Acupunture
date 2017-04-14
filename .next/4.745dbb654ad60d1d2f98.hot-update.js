webpackHotUpdate(4,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _taggedTemplateLiteral2 = __webpack_require__(8);
	
	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);
	
	var _getPrototypeOf = __webpack_require__(130);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(131);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(132);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(134);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding-top: 70px;\t\n\theight: 600px;\n\t', '\n'], ['\n\tpadding-top: 70px;\t\n\theight: 600px;\n\t', '\n']),
	    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['padding-top: 40px; font-size: 1.1em'], ['padding-top: 40px; font-size: 1.1em']),
	    _templateObject3 = (0, _taggedTemplateLiteral3.default)([';\n\tmargin: 35px auto 0;\n\tpadding: 0 20px;\n\ttext-align: center;\n\tmax-width: 450px;\n\tfont-size: 1.24em;\n\tline-height: 1.7;\n\tfont-family: \'Source Serif Pro\';\n\t', '\n\t\n'], [';\n\tmargin: 35px auto 0;\n\tpadding: 0 20px;\n\ttext-align: center;\n\tmax-width: 450px;\n\tfont-size: 1.24em;\n\tline-height: 1.7;\n\tfont-family: \'Source Serif Pro\';\n\t', '\n\t\n']),
	    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\t\tfont-size: 1.12em; \n\t\tmargin: 20px 0;\n\t\tpadding: 0 14px;\n\t\tline-height: 1.6;\n\t'], ['\n\t\tfont-size: 1.12em; \n\t\tmargin: 20px 0;\n\t\tpadding: 0 14px;\n\t\tline-height: 1.6;\n\t']),
	    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']),
	    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-style: italic;\n\tfont-size: .94em;\n\tmargin-top: 30px;\n'], ['\n\tfont-style: italic;\n\tfont-size: .94em;\n\tmargin-top: 30px;\n']),
	    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\tfont-size: .9em;\n\tmargin-bottom: 40px;\n'], ['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\tfont-size: .9em;\n\tmargin-bottom: 40px;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(11);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _SectionTitle = __webpack_require__(126);
	
	var _SectionTitle2 = _interopRequireDefault(_SectionTitle);
	
	var _mediaQuery = __webpack_require__(26);
	
	var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
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
	
	
	var TestimonialsContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.mobile(_templateObject2));
	
	var Testimonial = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.mobile(_templateObject4));
	
	var Quote = _styledComponents2.default.div(_templateObject5);
	
	var PatientName = _styledComponents2.default.div(_templateObject6);
	
	var Location = _styledComponents2.default.div(_templateObject7);
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3RpbW9uaWFscy5qcyJdLCJuYW1lcyI6WyJ0ZXN0aW1vbmlhbHMiLCJxdW90ZSIsIm5hbWUiLCJsb2NhdGlvbiIsIlRlc3RpbW9uaWFscyIsInN0YXRlIiwidGVzdGltb25pYWxJbmRleCIsImxvb3BUZXN0aW1vbmlhbHMiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwiVGVzdGltb25pYWxzQ29udGFpbmVyIiwiZGl2IiwibW9iaWxlIiwiVGVzdGltb25pYWwiLCJRdW90ZSIsIlBhdGllbnROYW1lIiwiTG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsQ0FDcEI7QUFDQ0MsUUFBTyw2VEFEUjtBQUVDQyxPQUFNLFdBRlA7QUFHQ0MsV0FBVTtBQUhYLENBRG9CLEVBTXBCO0FBQ0NGLFFBQU8sK2NBRFI7QUFFQ0MsT0FBTSxtQkFGUDtBQUdDQyxXQUFVO0FBSFgsQ0FOb0IsRUFXcEI7QUFDQ0YsUUFBTyxzUEFEUjtBQUVDQyxPQUFNLE9BRlA7QUFHQ0MsV0FBVTtBQUhYLENBWG9CLENBQXJCOztJQWtCcUJDLFk7Ozs7Ozs7Ozs7Ozs7O3NOQUVwQkMsSyxHQUFNO0FBQ0xDLHFCQUFrQjtBQURiLEcsUUFRTkMsZ0IsR0FBbUIsWUFBTTtBQUN4QkMsZUFBYSxZQUFNO0FBQ2xCLFFBQUcsTUFBS0gsS0FBTCxDQUFXQyxnQkFBWCxJQUErQk4sYUFBYVMsTUFBYixHQUFxQixDQUF2RCxFQUF5RDtBQUN4RCxXQUFLQyxRQUFMLENBQWM7QUFDYkosd0JBQWtCO0FBREwsTUFBZDtBQUdBLEtBSkQsTUFJSztBQUNKLFdBQUtJLFFBQUwsQ0FBYztBQUNiSix3QkFBa0IsTUFBS0QsS0FBTCxDQUFXQyxnQkFBWCxHQUE2QjtBQURsQyxNQUFkO0FBR0E7QUFDRCxJQVZELEVBVUcsS0FWSDtBQVdBLEc7Ozs7O3NDQWhCa0I7QUFDakIsUUFBS0MsZ0JBQUw7QUFDRDs7OzJCQWdCTztBQUNQLFVBQ0M7QUFBQyx5QkFBRDtBQUFBLE1BQXVCLElBQUcsY0FBMUI7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREg7QUFLQztBQUFDLGdCQUFEO0FBQUE7QUFDQztBQUFDLFdBQUQ7QUFBQTtBQUFBO0FBRUVQLG1CQUFhLEtBQUtLLEtBQUwsQ0FBV0MsZ0JBQXhCLEVBQTBDTCxLQUY1QztBQUFBO0FBQUEsTUFERDtBQU1DO0FBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQ0lELG1CQUFhLEtBQUtLLEtBQUwsQ0FBV0MsZ0JBQXhCLEVBQTBDSjtBQUQ5QyxNQU5EO0FBU0M7QUFBQyxjQUFEO0FBQUE7QUFDRUYsbUJBQWEsS0FBS0ssS0FBTCxDQUFXQyxnQkFBeEIsRUFBMENIO0FBRDVDO0FBVEQ7QUFMRCxJQUREO0FBcUJBOzs7OztrQkE5Q21CQyxZOzs7QUFrRHJCLElBQU1PLHdCQUF3QiwyQkFBT0MsR0FBL0Isa0JBR0gscUJBQVdDLE1BSFIsbUJBQU47O0FBTUEsSUFBTUMsY0FBYywyQkFBT0YsR0FBckIsbUJBUUgscUJBQVdDLE1BUlIsbUJBQU47O0FBaUJBLElBQU1FLFFBQVEsMkJBQU9ILEdBQWYsa0JBQU47O0FBR0EsSUFBTUksY0FBYywyQkFBT0osR0FBckIsa0JBQU47O0FBTUEsSUFBTUssV0FBVywyQkFBT0wsR0FBbEIsa0JBQU4iLCJmaWxlIjoidGVzdGltb25pYWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBtZWRpYVF1ZXJ5IGZyb20gJy4vbWVkaWFRdWVyeSdcblxuY29uc3QgdGVzdGltb25pYWxzID0gW1xuXHR7XG5cdFx0cXVvdGU6IFwiU2Vzc2lvbnMgd2l0aCBEci4gSmlhbmcgYXJlIHF1aWV0LCByZXN0ZnVsIGFuZCBwcml2YXRlLiBTaGUgZ2l2ZXMgZWFjaCBwYXRpZW50IG9uZS1vbi1vbmUgYXR0ZW50aW9uIGFuZCBuZXZlciBsZWF2ZXMgeW91IGFsb25lISBJIGhhdmUgcmVjZWl2ZWQgYWN1cHVuY3R1cmUgZnJvbSA0IG90aGVyIGRvY3RvcnMgb3ZlciB0aGUgeWVhcnMgYW5kIERyLiBKaWFuZyBpcyBieSBmYXIgdGhlIG1vc3QgcHJvZmVzc2lvbmFsIGFuZCBrbm93bGVkZ2VhYmxlIGRvY3RvciBJIGhhdmUgbWV0LiBJIHJlY29tbWVuZCBoZXIgd2l0aG91dCBhbnkgcmVzZXJ2YXRpb24uXCIsXG5cdFx0bmFtZTogXCJLaW0gUmVnYW5cIixcblx0XHRsb2NhdGlvbjogXCJSeWUsIE5ZXCJcblx0fSxcblx0e1xuXHRcdHF1b3RlOiBcIkkgY2FtZSB0byBEci4gSmluZyB3aXRoIHRlcnJpYmxlIGxvd2VyIGJhY2sgcGFpbi4gSSBoYWQgYSB0cmVtZW5kb3VzIG11c2NsZSBjcmFtcCBhbGwgYWNyb3NzIG15IGxvd2VyIGJhY2sgYW5kIGF0IHRpbWVzIGNvdWxkIG5vdCB3YWxrIHdpdGhvdXQgYSBjYW5lLiBBZnRlciBvbmUgdHJlYXRtZW50LCBJIGNvdWxkIG1vdmUgZnJlZWx5IGFnYWluLiBXaXRoIHJlcGVhdGVkIHRyZWF0bWVudHMsIG15IGFiaWxpdHkgdG8gcmVzaXN0IHJlLWluanVyaW5nIG15IGJhY2sgc2xvd2x5IGluY3JlYXNlZCwgYW5kIGFueSBmdXR1cmUgaW5jaWRlbnRzIHdlcmUgbXVjaCBtb3JlIG1pbGQuIEkgaGF2ZSByZWNvbW1lbmRlZCBEci4gSmluZyB0byBmcmllbmRzIGFuZCBjby13b3JrZXJzLiBTaGUgaXMgdmVyeSBwbGVhc2FudCwgdmVyeSBrbm93bGVkZ2VhYmxlIGFuZCB2ZXJ5IGRlZGljYXRlZCB0byBoZXIgcGF0aWVudHMuXCIsXG5cdFx0bmFtZTogXCJLZW5uZXRoIENpdGFyZWxsYVwiLFxuXHRcdGxvY2F0aW9uOiBcIldoaXRlIFBsYWlucywgTllcIlxuXHR9LFxuXHR7XG5cdFx0cXVvdGU6IFwiRHIuIEppYW5nJ3MgdHJlYXRtZW50IGlzIHJlYWxseSBzcGVjaWFsLiBTaGUgZG9lcyBub3QganVzdCB0cnkgdG8gcmVsaWV2ZSB0aGUgbXVzY2xlIHBhaW4sIHdoaWNoIG1vc3Qgb3RoZXIgZG9jcyBkby4gU2hlIGFkb3B0cyBoZXIgMjArIHllYXJzIG9mIHdvcmtpbmcgZXhwZXJpZW5jZSBpbiBzdWNoIGFyZWEsIGRldmVsb3BzIGhlciBvd24gdHJlYXRtZW50IG1ldGhvZC4gSXQgaXMgcmVhbGx5IGdyZWF0IGFuZCBoZWxwZnVsLlwiLFxuXHRcdG5hbWU6IFwiVGlnZXJcIixcblx0XHRsb2NhdGlvbjogXCJTdGFtZm9yZCwgQ1RcIlxuXHR9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RpbW9uaWFscyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0c3RhdGU9e1xuXHRcdHRlc3RpbW9uaWFsSW5kZXg6IDBcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0IHRoaXMubG9vcFRlc3RpbW9uaWFscygpXG5cdH1cblxuXHRsb29wVGVzdGltb25pYWxzID0gKCkgPT4ge1xuXHRcdHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXggPj0gdGVzdGltb25pYWxzLmxlbmd0aCAtMSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRlc3RpbW9uaWFsSW5kZXg6IDBcblx0XHRcdFx0fSlcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0ZXN0aW1vbmlhbEluZGV4OiB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXggKzFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LCAxNTAwMClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxUZXN0aW1vbmlhbHNDb250YWluZXIgaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cbiAgICBcdFx0PFNlY3Rpb25UaXRsZT5cbiAgICAgIFx0XHRXaGF0IE91ciBQYXRpZW50cyBTYXkuLi5cbiAgICBcdFx0PC9TZWN0aW9uVGl0bGU+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8VGVzdGltb25pYWw+XG5cdFx0XHRcdFx0PFF1b3RlPlxuXHRcdFx0XHRcdFx0XCJcblx0XHRcdFx0XHRcdHt0ZXN0aW1vbmlhbHNbdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4XS5xdW90ZX1cblx0XHRcdFx0XHRcdFwiXG5cdFx0XHRcdFx0PC9RdW90ZT5cblx0XHRcdFx0XHQ8UGF0aWVudE5hbWU+XG5cdFx0XHRcdFx0XHQtIHt0ZXN0aW1vbmlhbHNbdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4XS5uYW1lfVxuXHRcdFx0XHRcdDwvUGF0aWVudE5hbWU+XG5cdFx0XHRcdFx0PExvY2F0aW9uPlxuXHRcdFx0XHRcdFx0e3Rlc3RpbW9uaWFsc1t0aGlzLnN0YXRlLnRlc3RpbW9uaWFsSW5kZXhdLmxvY2F0aW9ufVxuXHRcdFx0XHRcdDwvTG9jYXRpb24+XG5cdFx0XHRcdDwvVGVzdGltb25pYWw+XG4gXHRcdFx0PC9UZXN0aW1vbmlhbHNDb250YWluZXI+XG5cdFx0KVxuXHR9XG59XG4gIFxuXG5jb25zdCBUZXN0aW1vbmlhbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRwYWRkaW5nLXRvcDogNzBweDtcdFxuXHRoZWlnaHQ6IDYwMHB4O1xuXHQke21lZGlhUXVlcnkubW9iaWxlYHBhZGRpbmctdG9wOiA0MHB4OyBmb250LXNpemU6IDEuMWVtYH1cbmBcblxuY29uc3QgVGVzdGltb25pYWwgPSBzdHlsZWQuZGl2YDtcblx0bWFyZ2luOiAzNXB4IGF1dG8gMDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1heC13aWR0aDogNDUwcHg7XG5cdGZvbnQtc2l6ZTogMS4yNGVtO1xuXHRsaW5lLWhlaWdodDogMS43O1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nO1xuXHQke21lZGlhUXVlcnkubW9iaWxlYFxuXHRcdGZvbnQtc2l6ZTogMS4xMmVtOyBcblx0XHRtYXJnaW46IDIwcHggMDtcblx0XHRwYWRkaW5nOiAwIDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNjtcblx0YH1cblx0XG5gXG5cbmNvbnN0IFF1b3RlID0gc3R5bGVkLmRpdmBcbmBcblxuY29uc3QgUGF0aWVudE5hbWUgPSBzdHlsZWQuZGl2YFxuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtc2l6ZTogLjk0ZW07XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5gXG5cbmNvbnN0IExvY2F0aW9uID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLXRvcDogNXB4O1xuXHRjb2xvcjogI0UxQTAzMDtcblx0Zm9udC1zaXplOiAuOWVtO1xuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuYCJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW1vbmlhbHMuanM/ZjI2OSJdLCJuYW1lcyI6WyJ0ZXN0aW1vbmlhbHMiLCJxdW90ZSIsIm5hbWUiLCJsb2NhdGlvbiIsIlRlc3RpbW9uaWFscyIsInN0YXRlIiwidGVzdGltb25pYWxJbmRleCIsImxvb3BUZXN0aW1vbmlhbHMiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwiVGVzdGltb25pYWxzQ29udGFpbmVyIiwiZGl2IiwibW9iaWxlIiwiVGVzdGltb25pYWwiLCJRdW90ZSIsIlBhdGllbnROYW1lIiwiTG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsZUFBZSxDQUNwQjtBQUNDQyxTQUFPLDZUQURSO0FBRUNDLFFBQU0sV0FGUDtBQUdDQyxZQUFVO0FBSFgsRUFEb0IsRUFNcEI7QUFDQ0YsU0FBTywrY0FEUjtBQUVDQyxRQUFNLG1CQUZQO0FBR0NDLFlBQVU7QUFIWCxFQU5vQixFQVdwQjtBQUNDRixTQUFPLHNQQURSO0FBRUNDLFFBQU0sT0FGUDtBQUdDQyxZQUFVO0FBSFgsRUFYb0IsQ0FBckI7O0tBa0JxQkMsWTs7Ozs7Ozs7Ozs7Ozs7dU5BRXBCQyxLLEdBQU07QUFDTEMsc0JBQWtCO0FBRGIsSSxRQVFOQyxnQixHQUFtQixZQUFNO0FBQ3hCQyxnQkFBYSxZQUFNO0FBQ2xCLFNBQUcsTUFBS0gsS0FBTCxDQUFXQyxnQkFBWCxJQUErQk4sYUFBYVMsTUFBYixHQUFxQixDQUF2RCxFQUF5RDtBQUN4RCxZQUFLQyxRQUFMLENBQWM7QUFDYkoseUJBQWtCO0FBREwsT0FBZDtBQUdBLE1BSkQsTUFJSztBQUNKLFlBQUtJLFFBQUwsQ0FBYztBQUNiSix5QkFBa0IsTUFBS0QsS0FBTCxDQUFXQyxnQkFBWCxHQUE2QjtBQURsQyxPQUFkO0FBR0E7QUFDRCxLQVZELEVBVUcsS0FWSDtBQVdBLEk7Ozs7O3VDQWhCa0I7QUFDakIsU0FBS0MsZ0JBQUw7QUFDRDs7OzRCQWdCTztBQUNQLFdBQ0M7QUFBQywwQkFBRDtBQUFBLE9BQXVCLElBQUcsY0FBMUI7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREg7QUFLQztBQUFDLGlCQUFEO0FBQUE7QUFDQztBQUFDLFlBQUQ7QUFBQTtBQUFBO0FBRUVQLG9CQUFhLEtBQUtLLEtBQUwsQ0FBV0MsZ0JBQXhCLEVBQTBDTCxLQUY1QztBQUFBO0FBQUEsT0FERDtBQU1DO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQ0lELG9CQUFhLEtBQUtLLEtBQUwsQ0FBV0MsZ0JBQXhCLEVBQTBDSjtBQUQ5QyxPQU5EO0FBU0M7QUFBQyxlQUFEO0FBQUE7QUFDRUYsb0JBQWEsS0FBS0ssS0FBTCxDQUFXQyxnQkFBeEIsRUFBMENIO0FBRDVDO0FBVEQ7QUFMRCxLQUREO0FBcUJBOzs7OzttQkE5Q21CQyxZOzs7QUFrRHJCLEtBQU1PLHdCQUF3QiwyQkFBT0MsR0FBL0Isa0JBR0gscUJBQVdDLE1BSFIsbUJBQU47O0FBTUEsS0FBTUMsY0FBYywyQkFBT0YsR0FBckIsbUJBUUgscUJBQVdDLE1BUlIsbUJBQU47O0FBaUJBLEtBQU1FLFFBQVEsMkJBQU9ILEdBQWYsa0JBQU47O0FBR0EsS0FBTUksY0FBYywyQkFBT0osR0FBckIsa0JBQU47O0FBTUEsS0FBTUssV0FBVywyQkFBT0wsR0FBbEIsa0JBQU4iLCJmaWxlIjoiNC43NDVkYmI2NTRhZDYwZDFkMmY5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgbWVkaWFRdWVyeSBmcm9tICcuL21lZGlhUXVlcnknXG5cbmNvbnN0IHRlc3RpbW9uaWFscyA9IFtcblx0e1xuXHRcdHF1b3RlOiBcIlNlc3Npb25zIHdpdGggRHIuIEppYW5nIGFyZSBxdWlldCwgcmVzdGZ1bCBhbmQgcHJpdmF0ZS4gU2hlIGdpdmVzIGVhY2ggcGF0aWVudCBvbmUtb24tb25lIGF0dGVudGlvbiBhbmQgbmV2ZXIgbGVhdmVzIHlvdSBhbG9uZSEgSSBoYXZlIHJlY2VpdmVkIGFjdXB1bmN0dXJlIGZyb20gNCBvdGhlciBkb2N0b3JzIG92ZXIgdGhlIHllYXJzIGFuZCBEci4gSmlhbmcgaXMgYnkgZmFyIHRoZSBtb3N0IHByb2Zlc3Npb25hbCBhbmQga25vd2xlZGdlYWJsZSBkb2N0b3IgSSBoYXZlIG1ldC4gSSByZWNvbW1lbmQgaGVyIHdpdGhvdXQgYW55IHJlc2VydmF0aW9uLlwiLFxuXHRcdG5hbWU6IFwiS2ltIFJlZ2FuXCIsXG5cdFx0bG9jYXRpb246IFwiUnllLCBOWVwiXG5cdH0sXG5cdHtcblx0XHRxdW90ZTogXCJJIGNhbWUgdG8gRHIuIEppbmcgd2l0aCB0ZXJyaWJsZSBsb3dlciBiYWNrIHBhaW4uIEkgaGFkIGEgdHJlbWVuZG91cyBtdXNjbGUgY3JhbXAgYWxsIGFjcm9zcyBteSBsb3dlciBiYWNrIGFuZCBhdCB0aW1lcyBjb3VsZCBub3Qgd2FsayB3aXRob3V0IGEgY2FuZS4gQWZ0ZXIgb25lIHRyZWF0bWVudCwgSSBjb3VsZCBtb3ZlIGZyZWVseSBhZ2Fpbi4gV2l0aCByZXBlYXRlZCB0cmVhdG1lbnRzLCBteSBhYmlsaXR5IHRvIHJlc2lzdCByZS1pbmp1cmluZyBteSBiYWNrIHNsb3dseSBpbmNyZWFzZWQsIGFuZCBhbnkgZnV0dXJlIGluY2lkZW50cyB3ZXJlIG11Y2ggbW9yZSBtaWxkLiBJIGhhdmUgcmVjb21tZW5kZWQgRHIuIEppbmcgdG8gZnJpZW5kcyBhbmQgY28td29ya2Vycy4gU2hlIGlzIHZlcnkgcGxlYXNhbnQsIHZlcnkga25vd2xlZGdlYWJsZSBhbmQgdmVyeSBkZWRpY2F0ZWQgdG8gaGVyIHBhdGllbnRzLlwiLFxuXHRcdG5hbWU6IFwiS2VubmV0aCBDaXRhcmVsbGFcIixcblx0XHRsb2NhdGlvbjogXCJXaGl0ZSBQbGFpbnMsIE5ZXCJcblx0fSxcblx0e1xuXHRcdHF1b3RlOiBcIkRyLiBKaWFuZydzIHRyZWF0bWVudCBpcyByZWFsbHkgc3BlY2lhbC4gU2hlIGRvZXMgbm90IGp1c3QgdHJ5IHRvIHJlbGlldmUgdGhlIG11c2NsZSBwYWluLCB3aGljaCBtb3N0IG90aGVyIGRvY3MgZG8uIFNoZSBhZG9wdHMgaGVyIDIwKyB5ZWFycyBvZiB3b3JraW5nIGV4cGVyaWVuY2UgaW4gc3VjaCBhcmVhLCBkZXZlbG9wcyBoZXIgb3duIHRyZWF0bWVudCBtZXRob2QuIEl0IGlzIHJlYWxseSBncmVhdCBhbmQgaGVscGZ1bC5cIixcblx0XHRuYW1lOiBcIlRpZ2VyXCIsXG5cdFx0bG9jYXRpb246IFwiU3RhbWZvcmQsIENUXCJcblx0fVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW1vbmlhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHN0YXRlPXtcblx0XHR0ZXN0aW1vbmlhbEluZGV4OiAwXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdCB0aGlzLmxvb3BUZXN0aW1vbmlhbHMoKVxuXHR9XG5cblx0bG9vcFRlc3RpbW9uaWFscyA9ICgpID0+IHtcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4ID49IHRlc3RpbW9uaWFscy5sZW5ndGggLTEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0ZXN0aW1vbmlhbEluZGV4OiAwXG5cdFx0XHRcdH0pXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dGVzdGltb25pYWxJbmRleDogdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4ICsxXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSwgMTUwMDApXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8VGVzdGltb25pYWxzQ29udGFpbmVyIGlkPVwidGVzdGltb25pYWxzXCI+XG4gICAgXHRcdDxTZWN0aW9uVGl0bGU+XG4gICAgICBcdFx0V2hhdCBPdXIgUGF0aWVudHMgU2F5Li4uXG4gICAgXHRcdDwvU2VjdGlvblRpdGxlPlxuXHRcdFx0XHRcblx0XHRcdFx0PFRlc3RpbW9uaWFsPlxuXHRcdFx0XHRcdDxRdW90ZT5cblx0XHRcdFx0XHRcdFwiXG5cdFx0XHRcdFx0XHR7dGVzdGltb25pYWxzW3RoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleF0ucXVvdGV9XG5cdFx0XHRcdFx0XHRcIlxuXHRcdFx0XHRcdDwvUXVvdGU+XG5cdFx0XHRcdFx0PFBhdGllbnROYW1lPlxuXHRcdFx0XHRcdFx0LSB7dGVzdGltb25pYWxzW3RoaXMuc3RhdGUudGVzdGltb25pYWxJbmRleF0ubmFtZX1cblx0XHRcdFx0XHQ8L1BhdGllbnROYW1lPlxuXHRcdFx0XHRcdDxMb2NhdGlvbj5cblx0XHRcdFx0XHRcdHt0ZXN0aW1vbmlhbHNbdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEluZGV4XS5sb2NhdGlvbn1cblx0XHRcdFx0XHQ8L0xvY2F0aW9uPlxuXHRcdFx0XHQ8L1Rlc3RpbW9uaWFsPlxuIFx0XHRcdDwvVGVzdGltb25pYWxzQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuICBcblxuY29uc3QgVGVzdGltb25pYWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZy10b3A6IDcwcHg7XHRcblx0aGVpZ2h0OiA2MDBweDtcblx0JHttZWRpYVF1ZXJ5Lm1vYmlsZWBwYWRkaW5nLXRvcDogNDBweDsgZm9udC1zaXplOiAxLjFlbWB9XG5gXG5cbmNvbnN0IFRlc3RpbW9uaWFsID0gc3R5bGVkLmRpdmA7XG5cdG1hcmdpbjogMzVweCBhdXRvIDA7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDQ1MHB4O1xuXHRmb250LXNpemU6IDEuMjRlbTtcblx0bGluZS1oZWlnaHQ6IDEuNztcblx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJztcblx0JHttZWRpYVF1ZXJ5Lm1vYmlsZWBcblx0XHRmb250LXNpemU6IDEuMTJlbTsgXG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0cGFkZGluZzogMCAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjY7XG5cdGB9XG5cdFxuYFxuXG5jb25zdCBRdW90ZSA9IHN0eWxlZC5kaXZgXG5gXG5cbmNvbnN0IFBhdGllbnROYW1lID0gc3R5bGVkLmRpdmBcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXNpemU6IC45NGVtO1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xuYFxuXG5jb25zdCBMb2NhdGlvbiA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi10b3A6IDVweDtcblx0Y29sb3I6ICNFMUEwMzA7XG5cdGZvbnQtc2l6ZTogLjllbTtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcbmBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy90ZXN0aW1vbmlhbHMuanMiXSwic291cmNlUm9vdCI6IiJ9