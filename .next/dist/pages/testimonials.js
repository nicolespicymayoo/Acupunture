'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _mediaQuery = require('../helpers/mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nicolemayo/Desktop/acupuncture-react/pages/testimonials.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 70px 0 30px;\t\n\t', '\n'], ['\n\tpadding: 70px 0 30px;\t\n\t', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\t\tdisplay: table;\n\t\tpadding-top: 40px; \n\t\tfont-size: 1.1em\n\t'], ['\n\t\tdisplay: table;\n\t\tpadding-top: 40px; \n\t\tfont-size: 1.1em\n\t']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)([';\n\tmargin: 35px auto 0;\n\tpadding: 0 20px;\n\tmax-width: 450px;\n\ttext-align: center;\n'], [';\n\tmargin: 35px auto 0;\n\tpadding: 0 20px;\n\tmax-width: 450px;\n\ttext-align: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 1.144em;\n\tline-height: 1.7;\n\tfont-family: \'Lora\';\n\t\t', '\n'], ['\n\tfont-size: 1.144em;\n\tline-height: 1.7;\n\tfont-family: \'Lora\';\n\t\t', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\t\tfont-size: 1.1em; \n\t\tmargin: 20px 0;\n\t\tpadding: 0 15px;\n\t\tline-height: 1.6;\n\t'], ['\n\t\tfont-size: 1.1em; \n\t\tmargin: 20px 0;\n\t\tpadding: 0 15px;\n\t\tline-height: 1.6;\n\t']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 1.1rem;\n\tmargin-top: 30px;\n'], ['\n\tfont-size: 1.1rem;\n\tmargin-top: 30px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\t// font-size: .9em;\n\tmargin-bottom: 40px;\n'], ['\n\tmargin-top: 5px;\n\tcolor: #E1A030;\n\t// font-size: .9em;\n\tmargin-bottom: 40px;\n']);

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
			return _react2.default.createElement(TestimonialsContainer, { id: 'testimonials', __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_SectionTitle2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'What Our Patients Say...'), _react2.default.createElement(Testimonial, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(Quote, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, '"', testimonials[this.state.testimonialIndex].quote, '"'), _react2.default.createElement(PatientName, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, '- ', testimonials[this.state.testimonialIndex].name), _react2.default.createElement(Location, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, testimonials[this.state.testimonialIndex].location)));
		}
	}]);

	return Testimonials;
}(_react.Component);

exports.default = Testimonials;


var TestimonialsContainer = _styledComponents2.default.div(_templateObject, _mediaQuery2.default.mobile(_templateObject2));

var Testimonial = _styledComponents2.default.div(_templateObject3);

var Quote = _styledComponents2.default.div(_templateObject4, _mediaQuery2.default.mobile(_templateObject5));

var PatientName = _styledComponents2.default.div(_templateObject6);

var Location = _styledComponents2.default.div(_templateObject7);