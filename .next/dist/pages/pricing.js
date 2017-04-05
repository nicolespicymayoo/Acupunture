'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 80px;\n\tbackground-color: #fafafa;\n'], ['\n\tpadding: 80px;\n\tbackground-color: #fafafa;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\tjustify-content: center;\t\n'], ['\n\tdisplay: flex;\n\tjustify-content: center;\t\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\tflex-flow: row-wrap;\n\tflex-direction: column;\n\ttext-align: center;\n\tmargin: 35px 10px;\n\tpadding: 50px 10px;\n\tborder: 3px solid rgba(0,0,0,.1);\n\tborder-radius: 3px;\n'], ['\n\tdisplay: flex;\n\tflex-flow: row-wrap;\n\tflex-direction: column;\n\ttext-align: center;\n\tmargin: 35px 10px;\n\tpadding: 50px 10px;\n\tborder: 3px solid rgba(0,0,0,.1);\n\tborder-radius: 3px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 1.3em;\n\tfont-weight: normal;\n\tmargin: 0;\n'], ['\n\tfont-size: 1.3em;\n\tfont-weight: normal;\n\tmargin: 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0;\n\tcolor: #eba832;\n\tpadding-top: 10px;\n\tfont-size: .9em;\n\tletter-spacing: .34px;\n'], ['\n\tmargin: 0;\n\tcolor: #eba832;\n\tpadding-top: 10px;\n\tfont-size: .9em;\n\tletter-spacing: .34px;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 230px;\n\tpadding: 10px 25px 15px;\n\tline-height: 1.45;\n\tcolor: rgba(0,0,0,.6);\n\tfont-size: .98em;\n'], ['\n\twidth: 230px;\n\tpadding: 10px 25px 15px;\n\tline-height: 1.45;\n\tcolor: rgba(0,0,0,.6);\n\tfont-size: .98em;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\tvertical-align: baseline;\n\tmargin-top: auto; //pushes to bottom\n\tbottom: 0;\n\th3{\n\t\tfont-size: 1.35em;\n\t\tfont-weight: normal;\n\t\tmargin: 0;\n\n\t}\n\tp{\n\t\tmargin: 0;\n\t\tfont-size: .8em;\n\t\tcolor: rgba(0,0,0,.6);\n\t}\n'], ['\n\tvertical-align: baseline;\n\tmargin-top: auto; //pushes to bottom\n\tbottom: 0;\n\th3{\n\t\tfont-size: 1.35em;\n\t\tfont-weight: normal;\n\t\tmargin: 0;\n\n\t}\n\tp{\n\t\tmargin: 0;\n\t\tfont-size: .8em;\n\t\tcolor: rgba(0,0,0,.6);\n\t}\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pricing = function Pricing() {
	return _react2.default.createElement(
		PricingContainer,
		{ id: 'pricing' },
		_react2.default.createElement(
			_SectionTitle2.default,
			null,
			'Our Pricing'
		),
		_react2.default.createElement(
			PricingList,
			null,
			_react2.default.createElement(
				PricingItem,
				null,
				_react2.default.createElement(
					PricingTitle,
					null,
					'Initial Visit'
				),
				_react2.default.createElement(
					PricingSubtitle,
					null,
					'One and half hours'
				),
				_react2.default.createElement(
					PricingDescription,
					null,
					'Dr. Jing will see you for an initial diagnosis and treatment which includes a discussion of your symptoms, a pulse and tongue examination and diagnostic acupressure.'
				),
				_react2.default.createElement(
					Price,
					null,
					_react2.default.createElement(
						'h3',
						null,
						'$170'
					),
					_react2.default.createElement(
						'p',
						null,
						'per session'
					)
				)
			),
			_react2.default.createElement(
				PricingItem,
				null,
				_react2.default.createElement(
					PricingTitle,
					null,
					'Regular Sessions'
				),
				_react2.default.createElement(
					PricingSubtitle,
					null,
					'One hour'
				),
				_react2.default.createElement(
					PricingDescription,
					null,
					'A subsequent session will be scheduled after your initial treatment. This includes an evaluation of your response to the initial treatment, a second pulse and tongue examination, and a secondary acupuncture treatment.'
				),
				_react2.default.createElement(
					Price,
					null,
					_react2.default.createElement(
						'h3',
						null,
						'$98'
					),
					_react2.default.createElement(
						'p',
						null,
						'per session'
					)
				)
			),
			_react2.default.createElement(
				PricingItem,
				null,
				_react2.default.createElement(
					PricingTitle,
					null,
					'Maintenance'
				),
				_react2.default.createElement(
					PricingSubtitle,
					null,
					'10 Sessions Package'
				),
				_react2.default.createElement(
					PricingDescription,
					null,
					'Dr. Jing wil recommend a plan for follow-up maintenance. This can include having a once-a-month treatment to regulate your energy flow.'
				),
				_react2.default.createElement(
					Price,
					null,
					_react2.default.createElement(
						'h3',
						null,
						'$85'
					),
					_react2.default.createElement(
						'p',
						null,
						'per session'
					)
				)
			)
		)
	);
};

exports.default = Pricing;


var PricingContainer = _styledComponents2.default.div(_templateObject);
var PricingList = _styledComponents2.default.div(_templateObject2);

var PricingItem = _styledComponents2.default.div(_templateObject3);
var PricingTitle = _styledComponents2.default.h3(_templateObject4);
var PricingSubtitle = _styledComponents2.default.p(_templateObject5);

var PricingDescription = _styledComponents2.default.p(_templateObject6);

var Price = _styledComponents2.default.div(_templateObject7);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ByaWNpbmcuanMiXSwibmFtZXMiOlsiUHJpY2luZyIsIlByaWNpbmdDb250YWluZXIiLCJkaXYiLCJQcmljaW5nTGlzdCIsIlByaWNpbmdJdGVtIiwiUHJpY2luZ1RpdGxlIiwiaDMiLCJQcmljaW5nU3VidGl0bGUiLCJwIiwiUHJpY2luZ0Rlc2NyaXB0aW9uIiwiUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsUUFDZDtBQUFDLGtCQUFEO0FBQUEsSUFBa0IsSUFBRyxTQUFyQjtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FEQTtBQUVDO0FBQUMsY0FBRDtBQUFBO0FBQ0M7QUFBQyxlQUFEO0FBQUE7QUFDQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFLQztBQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBLEtBTEQ7QUFRQztBQUFDLFVBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQVJELElBREQ7QUFlQztBQUFDLGVBQUQ7QUFBQTtBQUNDO0FBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUEsS0FIRDtBQVNDO0FBQUMsVUFBRDtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBVEQsSUFmRDtBQThCQztBQUFDLGVBQUQ7QUFBQTtBQUNDO0FBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUEsS0FIRDtBQU1DO0FBQUMsVUFBRDtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBTkQ7QUE5QkQ7QUFGRCxFQURjO0FBQUEsQ0FBaEI7O2tCQWlEZUEsTzs7O0FBR2YsSUFBTUMsbUJBQW1CLDJCQUFPQyxHQUExQixpQkFBTjtBQUlBLElBQU1DLGNBQWMsMkJBQU9ELEdBQXJCLGtCQUFOOztBQUtBLElBQU1FLGNBQWMsMkJBQU9GLEdBQXJCLGtCQUFOO0FBVUEsSUFBTUcsZUFBZSwyQkFBT0MsRUFBdEIsa0JBQU47QUFLQSxJQUFNQyxrQkFBa0IsMkJBQU9DLENBQXpCLGtCQUFOOztBQVFBLElBQU1DLHFCQUFxQiwyQkFBT0QsQ0FBNUIsa0JBQU47O0FBUUEsSUFBTUUsUUFBUSwyQkFBT1IsR0FBZixrQkFBTiIsImZpbGUiOiJwcmljaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGVtYXlvL0Rlc2t0b3AvYWN1cHVuY3R1cmUtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZSdcblxuY29uc3QgUHJpY2luZyA9ICgpID0+IChcbiAgPFByaWNpbmdDb250YWluZXIgaWQ9XCJwcmljaW5nXCI+XG5cdFx0PFNlY3Rpb25UaXRsZT5PdXIgUHJpY2luZzwvU2VjdGlvblRpdGxlPlxuXHRcdFx0PFByaWNpbmdMaXN0PlxuXHRcdFx0XHQ8UHJpY2luZ0l0ZW0+XG5cdFx0XHRcdFx0PFByaWNpbmdUaXRsZT5Jbml0aWFsIFZpc2l0PC9QcmljaW5nVGl0bGU+XG5cdFx0XHRcdFx0PFByaWNpbmdTdWJ0aXRsZT5cblx0XHRcdFx0XHRcdE9uZSBhbmQgaGFsZiBob3Vyc1xuXHRcdFx0XHRcdDwvUHJpY2luZ1N1YnRpdGxlPlxuXHRcdFx0XHRcdDxQcmljaW5nRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHREci4gSmluZyB3aWxsIHNlZSB5b3UgZm9yIGFuIGluaXRpYWwgZGlhZ25vc2lzIGFuZCB0cmVhdG1lbnQgd2hpY2ggaW5jbHVkZXMgYSBkaXNjdXNzaW9uIG9mIHlvdXIgc3ltcHRvbXMsIGEgcHVsc2UgYW5kIHRvbmd1ZSBleGFtaW5hdGlvbiBhbmQgZGlhZ25vc3RpYyBhY3VwcmVzc3VyZS5cblx0XHRcdFx0XHQ8L1ByaWNpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8UHJpY2U+XG5cdFx0XHRcdFx0XHQ8aDM+JDE3MDwvaDM+XG5cdFx0XHRcdFx0XHQ8cD5wZXIgc2Vzc2lvbjwvcD5cblx0XHRcdFx0XHQ8L1ByaWNlPlxuXHRcdFx0XHQ8L1ByaWNpbmdJdGVtPlxuXG5cdFx0XHRcdDxQcmljaW5nSXRlbT5cblx0XHRcdFx0XHQ8UHJpY2luZ1RpdGxlPlJlZ3VsYXIgU2Vzc2lvbnM8L1ByaWNpbmdUaXRsZT5cblx0XHRcdFx0XHQ8UHJpY2luZ1N1YnRpdGxlPk9uZSBob3VyPC9QcmljaW5nU3VidGl0bGU+XG5cdFx0XHRcdFx0PFByaWNpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRcdEEgc3Vic2VxdWVudCBzZXNzaW9uIHdpbGwgYmUgc2NoZWR1bGVkIGFmdGVyIHlvdXIgaW5pdGlhbCB0cmVhdG1lbnQuIFRoaXMgaW5jbHVkZXNcblx0XHRcdFx0XHRcdGFuIGV2YWx1YXRpb24gb2YgeW91ciByZXNwb25zZSB0byB0aGUgaW5pdGlhbCB0cmVhdG1lbnQsIFxuXHRcdFx0XHRcdFx0YSBzZWNvbmQgcHVsc2UgYW5kIHRvbmd1ZSBleGFtaW5hdGlvbixcblx0XHRcdFx0XHRcdGFuZCBhIHNlY29uZGFyeSBhY3VwdW5jdHVyZSB0cmVhdG1lbnQuXG5cdFx0XHRcdFx0PC9QcmljaW5nRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0PFByaWNlPlxuXHRcdFx0XHRcdFx0PGgzPiQ5ODwvaDM+XG5cdFx0XHRcdFx0XHQ8cD5wZXIgc2Vzc2lvbjwvcD5cblx0XHRcdFx0XHQ8L1ByaWNlPlxuXHRcdFx0XHQ8L1ByaWNpbmdJdGVtPlxuXG5cdFx0XHRcdDxQcmljaW5nSXRlbT5cblx0XHRcdFx0XHQ8UHJpY2luZ1RpdGxlPk1haW50ZW5hbmNlPC9QcmljaW5nVGl0bGU+XG5cdFx0XHRcdFx0PFByaWNpbmdTdWJ0aXRsZT4xMCBTZXNzaW9ucyBQYWNrYWdlPC9QcmljaW5nU3VidGl0bGU+XG5cdFx0XHRcdFx0PFByaWNpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRcdERyLiBKaW5nIHdpbCByZWNvbW1lbmQgYSBwbGFuIGZvciBmb2xsb3ctdXAgbWFpbnRlbmFuY2UuIFRoaXMgY2FuIGluY2x1ZGUgaGF2aW5nIGEgb25jZS1hLW1vbnRoIHRyZWF0bWVudCB0byByZWd1bGF0ZSB5b3VyIGVuZXJneSBmbG93LlxuXHRcdFx0XHRcdDwvUHJpY2luZ0Rlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDxQcmljZT5cblx0XHRcdFx0XHRcdDxoMz4kODU8L2gzPlxuXHRcdFx0XHRcdFx0PHA+cGVyIHNlc3Npb248L3A+XG5cdFx0XHRcdFx0PC9QcmljZT5cblx0XHRcdFx0PC9QcmljaW5nSXRlbT5cblxuXHRcdFx0PC9QcmljaW5nTGlzdD5cblx0PC9QcmljaW5nQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nXG5cblxuY29uc3QgUHJpY2luZ0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdHBhZGRpbmc6IDgwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG5gXG5jb25zdCBQcmljaW5nTGlzdCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1x0XG5gXG5cbmNvbnN0IFByaWNpbmdJdGVtID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1mbG93OiByb3ctd3JhcDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDM1cHggMTBweDtcblx0cGFkZGluZzogNTBweCAxMHB4O1xuXHRib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuYFxuY29uc3QgUHJpY2luZ1RpdGxlID0gc3R5bGVkLmgzYFxuXHRmb250LXNpemU6IDEuM2VtO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRtYXJnaW46IDA7XG5gXG5jb25zdCBQcmljaW5nU3VidGl0bGUgPSBzdHlsZWQucGBcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogI2ViYTgzMjtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdGZvbnQtc2l6ZTogLjllbTtcblx0bGV0dGVyLXNwYWNpbmc6IC4zNHB4O1xuYFxuXG5jb25zdCBQcmljaW5nRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0d2lkdGg6IDIzMHB4O1xuXHRwYWRkaW5nOiAxMHB4IDI1cHggMTVweDtcblx0bGluZS1oZWlnaHQ6IDEuNDU7XG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblx0Zm9udC1zaXplOiAuOThlbTtcbmBcblxuY29uc3QgUHJpY2UgPSBzdHlsZWQuZGl2YFxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdG1hcmdpbi10b3A6IGF1dG87IC8vcHVzaGVzIHRvIGJvdHRvbVxuXHRib3R0b206IDA7XG5cdGgze1xuXHRcdGZvbnQtc2l6ZTogMS4zNWVtO1xuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0bWFyZ2luOiAwO1xuXG5cdH1cblx0cHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAuOGVtO1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblx0fVxuYCJdfQ==