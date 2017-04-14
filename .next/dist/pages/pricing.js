'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 80px 0;\n\tbackground-color: #fafafa;\n'], ['\n\tpadding: 80px 0;\n\tbackground-color: #fafafa;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: auto;\n\ttext-align: center;\t\n'], ['\n\tmargin: auto;\n\ttext-align: center;\t\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: inline-block;\n\theight: 295px;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 35px 10px;\n\tpadding: 50px 10px;\n\tborder: 3px solid rgba(0,0,0,.1);\n\tborder-radius: 3px;\n\t', '\n'], ['\n\tdisplay: inline-block;\n\theight: 295px;\n\tvertical-align: top;\n\ttext-align: center;\n\tmargin: 35px 10px;\n\tpadding: 50px 10px;\n\tborder: 3px solid rgba(0,0,0,.1);\n\tborder-radius: 3px;\n\t', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin: 10px'], ['margin: 10px']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 1.3em;\n\tfont-weight: normal;\n\tmargin: 0;\n'], ['\n\tfont-size: 1.3em;\n\tfont-weight: normal;\n\tmargin: 0;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0;\n\tcolor: #eba832;\n\tpadding-top: 8px;\n\tfont-size: .9em;\n\tletter-spacing: .34px;\n'], ['\n\tmargin: 0;\n\tcolor: #eba832;\n\tpadding-top: 8px;\n\tfont-size: .9em;\n\tletter-spacing: .34px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 230px;\n\theight: 62%;\n\tmargin: 15px 20px;\n\tline-height: 1.45;\n\tcolor: rgba(0,0,0,.6);\n\tfont-size: .98em;\n'], ['\n\twidth: 230px;\n\theight: 62%;\n\tmargin: 15px 20px;\n\tline-height: 1.45;\n\tcolor: rgba(0,0,0,.6);\n\tfont-size: .98em;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n\tvertical-align: baseline;\n\tmargin-top: auto; //pushes to bottom\n\tbottom: 0;\n\tvertical-align: bottom;\n\th3{\n\t\tfont-size: 1.35em;\n\t\tfont-weight: normal;\n\t\tmargin: 0;\n\n\t}\n\tp{\n\t\tmargin: 0;\n\t\tfont-size: .8em;\n\t\tcolor: rgba(0,0,0,.6);\n\t}\n'], ['\n\tvertical-align: baseline;\n\tmargin-top: auto; //pushes to bottom\n\tbottom: 0;\n\tvertical-align: bottom;\n\th3{\n\t\tfont-size: 1.35em;\n\t\tfont-weight: normal;\n\t\tmargin: 0;\n\n\t}\n\tp{\n\t\tmargin: 0;\n\t\tfont-size: .8em;\n\t\tcolor: rgba(0,0,0,.6);\n\t}\n']);

var _react = require('/Users/nicolemayo/Desktop/acupuncture-react/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

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

var PricingItem = _styledComponents2.default.div(_templateObject3, _mediaQuery2.default.btwnTabletAndMobile(_templateObject4));
var PricingTitle = _styledComponents2.default.h3(_templateObject5);
var PricingSubtitle = _styledComponents2.default.p(_templateObject6);

var PricingDescription = _styledComponents2.default.p(_templateObject7);

var Price = _styledComponents2.default.div(_templateObject8);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ByaWNpbmcuanMiXSwibmFtZXMiOlsiUHJpY2luZyIsIlByaWNpbmdDb250YWluZXIiLCJkaXYiLCJQcmljaW5nTGlzdCIsIlByaWNpbmdJdGVtIiwiYnR3blRhYmxldEFuZE1vYmlsZSIsIlByaWNpbmdUaXRsZSIsImgzIiwiUHJpY2luZ1N1YnRpdGxlIiwicCIsIlByaWNpbmdEZXNjcmlwdGlvbiIsIlByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFFBQ2Q7QUFBQyxrQkFBRDtBQUFBLElBQWtCLElBQUcsU0FBckI7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBREE7QUFFQztBQUFDLGNBQUQ7QUFBQTtBQUNDO0FBQUMsZUFBRDtBQUFBO0FBQ0M7QUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUM7QUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUZEO0FBS0M7QUFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQSxLQUxEO0FBUUM7QUFBQyxVQUFEO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFSRCxJQUREO0FBZUM7QUFBQyxlQUFEO0FBQUE7QUFDQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFTQztBQUFDLFVBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQVRELElBZkQ7QUE4QkM7QUFBQyxlQUFEO0FBQUE7QUFDQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFNQztBQUFDLFVBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQU5EO0FBOUJEO0FBRkQsRUFEYztBQUFBLENBQWhCOztrQkFpRGVBLE87OztBQUdmLElBQU1DLG1CQUFtQiwyQkFBT0MsR0FBMUIsaUJBQU47QUFJQSxJQUFNQyxjQUFjLDJCQUFPRCxHQUFyQixrQkFBTjs7QUFLQSxJQUFNRSxjQUFjLDJCQUFPRixHQUFyQixtQkFTSCxxQkFBV0csbUJBVFIsbUJBQU47QUFXQSxJQUFNQyxlQUFlLDJCQUFPQyxFQUF0QixrQkFBTjtBQUtBLElBQU1DLGtCQUFrQiwyQkFBT0MsQ0FBekIsa0JBQU47O0FBUUEsSUFBTUMscUJBQXFCLDJCQUFPRCxDQUE1QixrQkFBTjs7QUFTQSxJQUFNRSxRQUFRLDJCQUFPVCxHQUFmLGtCQUFOIiwiZmlsZSI6InByaWNpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sZW1heW8vRGVza3RvcC9hY3VwdW5jdHVyZS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IG1lZGlhUXVlcnkgZnJvbSAnLi9tZWRpYVF1ZXJ5J1xuXG5jb25zdCBQcmljaW5nID0gKCkgPT4gKFxuICA8UHJpY2luZ0NvbnRhaW5lciBpZD1cInByaWNpbmdcIj5cblx0XHQ8U2VjdGlvblRpdGxlPk91ciBQcmljaW5nPC9TZWN0aW9uVGl0bGU+XG5cdFx0XHQ8UHJpY2luZ0xpc3Q+XG5cdFx0XHRcdDxQcmljaW5nSXRlbT5cblx0XHRcdFx0XHQ8UHJpY2luZ1RpdGxlPkluaXRpYWwgVmlzaXQ8L1ByaWNpbmdUaXRsZT5cblx0XHRcdFx0XHQ8UHJpY2luZ1N1YnRpdGxlPlxuXHRcdFx0XHRcdFx0T25lIGFuZCBoYWxmIGhvdXJzXG5cdFx0XHRcdFx0PC9QcmljaW5nU3VidGl0bGU+XG5cdFx0XHRcdFx0PFByaWNpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRcdERyLiBKaW5nIHdpbGwgc2VlIHlvdSBmb3IgYW4gaW5pdGlhbCBkaWFnbm9zaXMgYW5kIHRyZWF0bWVudCB3aGljaCBpbmNsdWRlcyBhIGRpc2N1c3Npb24gb2YgeW91ciBzeW1wdG9tcywgYSBwdWxzZSBhbmQgdG9uZ3VlIGV4YW1pbmF0aW9uIGFuZCBkaWFnbm9zdGljIGFjdXByZXNzdXJlLlxuXHRcdFx0XHRcdDwvUHJpY2luZ0Rlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDxQcmljZT5cblx0XHRcdFx0XHRcdDxoMz4kMTcwPC9oMz5cblx0XHRcdFx0XHRcdDxwPnBlciBzZXNzaW9uPC9wPlxuXHRcdFx0XHRcdDwvUHJpY2U+XG5cdFx0XHRcdDwvUHJpY2luZ0l0ZW0+XG5cblx0XHRcdFx0PFByaWNpbmdJdGVtPlxuXHRcdFx0XHRcdDxQcmljaW5nVGl0bGU+UmVndWxhciBTZXNzaW9uczwvUHJpY2luZ1RpdGxlPlxuXHRcdFx0XHRcdDxQcmljaW5nU3VidGl0bGU+T25lIGhvdXI8L1ByaWNpbmdTdWJ0aXRsZT5cblx0XHRcdFx0XHQ8UHJpY2luZ0Rlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0QSBzdWJzZXF1ZW50IHNlc3Npb24gd2lsbCBiZSBzY2hlZHVsZWQgYWZ0ZXIgeW91ciBpbml0aWFsIHRyZWF0bWVudC4gVGhpcyBpbmNsdWRlc1xuXHRcdFx0XHRcdFx0YW4gZXZhbHVhdGlvbiBvZiB5b3VyIHJlc3BvbnNlIHRvIHRoZSBpbml0aWFsIHRyZWF0bWVudCwgXG5cdFx0XHRcdFx0XHRhIHNlY29uZCBwdWxzZSBhbmQgdG9uZ3VlIGV4YW1pbmF0aW9uLFxuXHRcdFx0XHRcdFx0YW5kIGEgc2Vjb25kYXJ5IGFjdXB1bmN0dXJlIHRyZWF0bWVudC5cblx0XHRcdFx0XHQ8L1ByaWNpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8UHJpY2U+XG5cdFx0XHRcdFx0XHQ8aDM+JDk4PC9oMz5cblx0XHRcdFx0XHRcdDxwPnBlciBzZXNzaW9uPC9wPlxuXHRcdFx0XHRcdDwvUHJpY2U+XG5cdFx0XHRcdDwvUHJpY2luZ0l0ZW0+XG5cblx0XHRcdFx0PFByaWNpbmdJdGVtPlxuXHRcdFx0XHRcdDxQcmljaW5nVGl0bGU+TWFpbnRlbmFuY2U8L1ByaWNpbmdUaXRsZT5cblx0XHRcdFx0XHQ8UHJpY2luZ1N1YnRpdGxlPjEwIFNlc3Npb25zIFBhY2thZ2U8L1ByaWNpbmdTdWJ0aXRsZT5cblx0XHRcdFx0XHQ8UHJpY2luZ0Rlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0RHIuIEppbmcgd2lsIHJlY29tbWVuZCBhIHBsYW4gZm9yIGZvbGxvdy11cCBtYWludGVuYW5jZS4gVGhpcyBjYW4gaW5jbHVkZSBoYXZpbmcgYSBvbmNlLWEtbW9udGggdHJlYXRtZW50IHRvIHJlZ3VsYXRlIHlvdXIgZW5lcmd5IGZsb3cuXG5cdFx0XHRcdFx0PC9QcmljaW5nRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0PFByaWNlPlxuXHRcdFx0XHRcdFx0PGgzPiQ4NTwvaDM+XG5cdFx0XHRcdFx0XHQ8cD5wZXIgc2Vzc2lvbjwvcD5cblx0XHRcdFx0XHQ8L1ByaWNlPlxuXHRcdFx0XHQ8L1ByaWNpbmdJdGVtPlxuXG5cdFx0XHQ8L1ByaWNpbmdMaXN0PlxuXHQ8L1ByaWNpbmdDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdcblxuXG5jb25zdCBQcmljaW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZzogODBweCAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuYFxuY29uc3QgUHJpY2luZ0xpc3QgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW46IGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcdFxuYFxuXG5jb25zdCBQcmljaW5nSXRlbSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0aGVpZ2h0OiAyOTVweDtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDM1cHggMTBweDtcblx0cGFkZGluZzogNTBweCAxMHB4O1xuXHRib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHQke21lZGlhUXVlcnkuYnR3blRhYmxldEFuZE1vYmlsZWBtYXJnaW46IDEwcHhgfVxuYFxuY29uc3QgUHJpY2luZ1RpdGxlID0gc3R5bGVkLmgzYFxuXHRmb250LXNpemU6IDEuM2VtO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRtYXJnaW46IDA7XG5gXG5jb25zdCBQcmljaW5nU3VidGl0bGUgPSBzdHlsZWQucGBcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogI2ViYTgzMjtcblx0cGFkZGluZy10b3A6IDhweDtcblx0Zm9udC1zaXplOiAuOWVtO1xuXHRsZXR0ZXItc3BhY2luZzogLjM0cHg7XG5gXG5cbmNvbnN0IFByaWNpbmdEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHR3aWR0aDogMjMwcHg7XG5cdGhlaWdodDogNjIlO1xuXHRtYXJnaW46IDE1cHggMjBweDtcblx0bGluZS1oZWlnaHQ6IDEuNDU7XG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblx0Zm9udC1zaXplOiAuOThlbTtcbmBcblxuY29uc3QgUHJpY2UgPSBzdHlsZWQuZGl2YFxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdG1hcmdpbi10b3A6IGF1dG87IC8vcHVzaGVzIHRvIGJvdHRvbVxuXHRib3R0b206IDA7XG5cdHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cdGgze1xuXHRcdGZvbnQtc2l6ZTogMS4zNWVtO1xuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0bWFyZ2luOiAwO1xuXG5cdH1cblx0cHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAuOGVtO1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblx0fVxuYCJdfQ==