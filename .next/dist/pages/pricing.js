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
		null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ByaWNpbmcuanMiXSwibmFtZXMiOlsiUHJpY2luZyIsIlByaWNpbmdDb250YWluZXIiLCJkaXYiLCJQcmljaW5nTGlzdCIsIlByaWNpbmdJdGVtIiwiUHJpY2luZ1RpdGxlIiwiaDMiLCJQcmljaW5nU3VidGl0bGUiLCJwIiwiUHJpY2luZ0Rlc2NyaXB0aW9uIiwiUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsUUFDZDtBQUFDLGtCQUFEO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBREE7QUFFQztBQUFDLGNBQUQ7QUFBQTtBQUNDO0FBQUMsZUFBRDtBQUFBO0FBQ0M7QUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUM7QUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQSxLQUZEO0FBS0M7QUFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQSxLQUxEO0FBUUM7QUFBQyxVQUFEO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFSRCxJQUREO0FBZUM7QUFBQyxlQUFEO0FBQUE7QUFDQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFTQztBQUFDLFVBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQVRELElBZkQ7QUE4QkM7QUFBQyxlQUFEO0FBQUE7QUFDQztBQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFNQztBQUFDLFVBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQU5EO0FBOUJEO0FBRkQsRUFEYztBQUFBLENBQWhCOztrQkFpRGVBLE87OztBQUdmLElBQU1DLG1CQUFtQiwyQkFBT0MsR0FBMUIsaUJBQU47QUFJQSxJQUFNQyxjQUFjLDJCQUFPRCxHQUFyQixrQkFBTjs7QUFLQSxJQUFNRSxjQUFjLDJCQUFPRixHQUFyQixrQkFBTjtBQVVBLElBQU1HLGVBQWUsMkJBQU9DLEVBQXRCLGtCQUFOO0FBS0EsSUFBTUMsa0JBQWtCLDJCQUFPQyxDQUF6QixrQkFBTjs7QUFRQSxJQUFNQyxxQkFBcUIsMkJBQU9ELENBQTVCLGtCQUFOOztBQVFBLElBQU1FLFFBQVEsMkJBQU9SLEdBQWYsa0JBQU4iLCJmaWxlIjoicHJpY2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xlbWF5by9EZXNrdG9wL2FjdXB1bmN0dXJlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUnXG5cbmNvbnN0IFByaWNpbmcgPSAoKSA9PiAoXG4gIDxQcmljaW5nQ29udGFpbmVyPlxuXHRcdDxTZWN0aW9uVGl0bGU+T3VyIFByaWNpbmc8L1NlY3Rpb25UaXRsZT5cblx0XHRcdDxQcmljaW5nTGlzdD5cblx0XHRcdFx0PFByaWNpbmdJdGVtPlxuXHRcdFx0XHRcdDxQcmljaW5nVGl0bGU+SW5pdGlhbCBWaXNpdDwvUHJpY2luZ1RpdGxlPlxuXHRcdFx0XHRcdDxQcmljaW5nU3VidGl0bGU+XG5cdFx0XHRcdFx0XHRPbmUgYW5kIGhhbGYgaG91cnNcblx0XHRcdFx0XHQ8L1ByaWNpbmdTdWJ0aXRsZT5cblx0XHRcdFx0XHQ8UHJpY2luZ0Rlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0RHIuIEppbmcgd2lsbCBzZWUgeW91IGZvciBhbiBpbml0aWFsIGRpYWdub3NpcyBhbmQgdHJlYXRtZW50IHdoaWNoIGluY2x1ZGVzIGEgZGlzY3Vzc2lvbiBvZiB5b3VyIHN5bXB0b21zLCBhIHB1bHNlIGFuZCB0b25ndWUgZXhhbWluYXRpb24gYW5kIGRpYWdub3N0aWMgYWN1cHJlc3N1cmUuXG5cdFx0XHRcdFx0PC9QcmljaW5nRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0PFByaWNlPlxuXHRcdFx0XHRcdFx0PGgzPiQxNzA8L2gzPlxuXHRcdFx0XHRcdFx0PHA+cGVyIHNlc3Npb248L3A+XG5cdFx0XHRcdFx0PC9QcmljZT5cblx0XHRcdFx0PC9QcmljaW5nSXRlbT5cblxuXHRcdFx0XHQ8UHJpY2luZ0l0ZW0+XG5cdFx0XHRcdFx0PFByaWNpbmdUaXRsZT5SZWd1bGFyIFNlc3Npb25zPC9QcmljaW5nVGl0bGU+XG5cdFx0XHRcdFx0PFByaWNpbmdTdWJ0aXRsZT5PbmUgaG91cjwvUHJpY2luZ1N1YnRpdGxlPlxuXHRcdFx0XHRcdDxQcmljaW5nRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRBIHN1YnNlcXVlbnQgc2Vzc2lvbiB3aWxsIGJlIHNjaGVkdWxlZCBhZnRlciB5b3VyIGluaXRpYWwgdHJlYXRtZW50LiBUaGlzIGluY2x1ZGVzXG5cdFx0XHRcdFx0XHRhbiBldmFsdWF0aW9uIG9mIHlvdXIgcmVzcG9uc2UgdG8gdGhlIGluaXRpYWwgdHJlYXRtZW50LCBcblx0XHRcdFx0XHRcdGEgc2Vjb25kIHB1bHNlIGFuZCB0b25ndWUgZXhhbWluYXRpb24sXG5cdFx0XHRcdFx0XHRhbmQgYSBzZWNvbmRhcnkgYWN1cHVuY3R1cmUgdHJlYXRtZW50LlxuXHRcdFx0XHRcdDwvUHJpY2luZ0Rlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDxQcmljZT5cblx0XHRcdFx0XHRcdDxoMz4kOTg8L2gzPlxuXHRcdFx0XHRcdFx0PHA+cGVyIHNlc3Npb248L3A+XG5cdFx0XHRcdFx0PC9QcmljZT5cblx0XHRcdFx0PC9QcmljaW5nSXRlbT5cblxuXHRcdFx0XHQ8UHJpY2luZ0l0ZW0+XG5cdFx0XHRcdFx0PFByaWNpbmdUaXRsZT5NYWludGVuYW5jZTwvUHJpY2luZ1RpdGxlPlxuXHRcdFx0XHRcdDxQcmljaW5nU3VidGl0bGU+MTAgU2Vzc2lvbnMgUGFja2FnZTwvUHJpY2luZ1N1YnRpdGxlPlxuXHRcdFx0XHRcdDxQcmljaW5nRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHREci4gSmluZyB3aWwgcmVjb21tZW5kIGEgcGxhbiBmb3IgZm9sbG93LXVwIG1haW50ZW5hbmNlLiBUaGlzIGNhbiBpbmNsdWRlIGhhdmluZyBhIG9uY2UtYS1tb250aCB0cmVhdG1lbnQgdG8gcmVndWxhdGUgeW91ciBlbmVyZ3kgZmxvdy5cblx0XHRcdFx0XHQ8L1ByaWNpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8UHJpY2U+XG5cdFx0XHRcdFx0XHQ8aDM+JDg1PC9oMz5cblx0XHRcdFx0XHRcdDxwPnBlciBzZXNzaW9uPC9wPlxuXHRcdFx0XHRcdDwvUHJpY2U+XG5cdFx0XHRcdDwvUHJpY2luZ0l0ZW0+XG5cblx0XHRcdDwvUHJpY2luZ0xpc3Q+XG5cdDwvUHJpY2luZ0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZ1xuXG5cbmNvbnN0IFByaWNpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRwYWRkaW5nOiA4MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuYFxuY29uc3QgUHJpY2luZ0xpc3QgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcdFxuYFxuXG5jb25zdCBQcmljaW5nSXRlbSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93LXdyYXA7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAzNXB4IDEwcHg7XG5cdHBhZGRpbmc6IDUwcHggMTBweDtcblx0Ym9yZGVyOiAzcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbmBcbmNvbnN0IFByaWNpbmdUaXRsZSA9IHN0eWxlZC5oM2Bcblx0Zm9udC1zaXplOiAxLjNlbTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bWFyZ2luOiAwO1xuYFxuY29uc3QgUHJpY2luZ1N1YnRpdGxlID0gc3R5bGVkLnBgXG5cdG1hcmdpbjogMDtcblx0Y29sb3I6ICNlYmE4MzI7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRmb250LXNpemU6IC45ZW07XG5cdGxldHRlci1zcGFjaW5nOiAuMzRweDtcbmBcblxuY29uc3QgUHJpY2luZ0Rlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdHdpZHRoOiAyMzBweDtcblx0cGFkZGluZzogMTBweCAyNXB4IDE1cHg7XG5cdGxpbmUtaGVpZ2h0OiAxLjQ1O1xuXHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XG5cdGZvbnQtc2l6ZTogLjk4ZW07XG5gXG5cbmNvbnN0IFByaWNlID0gc3R5bGVkLmRpdmBcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHRtYXJnaW4tdG9wOiBhdXRvOyAvL3B1c2hlcyB0byBib3R0b21cblx0Ym90dG9tOiAwO1xuXHRoM3tcblx0XHRmb250LXNpemU6IDEuMzVlbTtcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdG1hcmdpbjogMDtcblxuXHR9XG5cdHB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGZvbnQtc2l6ZTogLjhlbTtcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XG5cdH1cbmAiXX0=