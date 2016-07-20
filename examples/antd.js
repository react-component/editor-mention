webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(174);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	var _classnames2 = __webpack_require__(314);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Mention = function (_React$Component) {
	  _inherits(Mention, _React$Component);
	
	  function Mention(props) {
	    _classCallCheck(this, Mention);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      suggestions: props.suggestions,
	      focus: false
	    };
	    return _this;
	  }
	
	  Mention.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    this.setState({
	      suggestions: nextProps.suggestions
	    });
	  };
	
	  Mention.prototype.onSearchChange = function onSearchChange(value) {
	    if (this.props.onSearchChange) {
	      return this.props.onSearchChange(value);
	    }
	    return this.defaultSearchChange(value);
	  };
	
	  Mention.prototype.onChange = function onChange(editorState) {
	    if (this.props.onChange) {
	      this.props.onChange(editorState);
	    }
	  };
	
	  Mention.prototype.defaultSearchChange = function defaultSearchChange(value) {
	    var searchValue = value.toLowerCase();
	    var filteredSuggestions = this.props.suggestions.filter(function (suggestion) {
	      return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	    });
	    this.setState({
	      suggestions: filteredSuggestions
	    });
	  };
	
	  Mention.prototype.render = function render() {
	    var _classnames,
	        _this2 = this;
	
	    var _props = this.props;
	    var className = _props.className;
	    var prefixCls = _props.prefixCls;
	    var style = _props.style;
	    var multiLines = _props.multiLines;
	    var defaultValue = _props.defaultValue;
	    var notFoundContent = this.props.notFoundContent;
	    var _state = this.state;
	    var suggestions = _state.suggestions;
	    var focus = _state.focus;
	
	    var cls = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, 'active', focus), _classnames));
	
	    if (this.props.loading) {
	      notFoundContent = _react2.default.createElement('i', { className: 'anticon anticon-loading' });
	    }
	
	    return _react2.default.createElement(_rcEditorMention2.default, _extends({}, this.props, {
	      className: cls,
	      prefixCls: prefixCls,
	      style: style,
	      defaultValue: defaultValue,
	      multiLines: multiLines,
	      onSearchChange: this.onSearchChange.bind(this),
	      onChange: this.onChange.bind(this),
	      onFocus: function onFocus() {
	        return _this2.setState({ focus: true });
	      },
	      onBlur: function onBlur() {
	        return _this2.setState({ focus: false });
	      },
	      suggestions: suggestions,
	      notFoundContent: notFoundContent
	    }));
	  };
	
	  return Mention;
	}(_react2.default.Component);
	
	Mention.defaultProps = {
	  prefixCls: 'ant-mention',
	  suggestions: [],
	  notFoundContent: '无匹配结果，轻敲空格完成输入',
	  loading: false,
	  multiLines: false
	};
	exports.default = Mention;
	
	
	function onChange(editorState) {
	  console.log((0, _rcEditorMention.toString)(editorState));
	}
	
	_reactDom2.default.render(_react2.default.createElement(Mention, {
	  onChange: onChange,
	  defaultValue: (0, _rcEditorMention.toEditorState)('@afc163'),
	  suggestions: ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']
	}), document.getElementById('__react-content'));
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=antd.js.map