webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(504);


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(186);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify simple.html
	
	var Nav = _rcEditorMention2.default.Nav;
	
	var defaultValue = '123 13<br />\n123 <br />\n123 <br />\n123 <br />\n';
	
	var MentionEditor = function (_React$Component) {
	  _inherits(MentionEditor, _React$Component);
	
	  function MentionEditor() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MentionEditor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      contributors: [],
	      suggestions: []
	    }, _this.onSearchChange = function (value) {
	      var searchValue = value.toLowerCase();
	      var filtered = _this.state.contributors.filter(function (contributor) {
	        return contributor.login.toLowerCase().indexOf(searchValue) !== -1;
	      });
	      var suggestions = filtered.map(function (suggestion) {
	        return _react2.default.createElement(
	          Nav,
	          { style: { height: 34 }, value: suggestion.login, key: suggestion.login },
	          _react2.default.createElement('img', { src: suggestion.avatar_url, className: 'avatar' }),
	          _react2.default.createElement(
	            'span',
	            { className: 'meta' },
	            suggestion.login
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: { float: 'right', color: 'green' } },
	            suggestion.contributions
	          )
	        );
	      });
	      _this.setState({
	        suggestions: suggestions
	      });
	    }, _this.onChange = function (editorState) {
	      console.log((0, _rcEditorMention.toString)(editorState, { encode: true }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  MentionEditor.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    fetch('./contributors.json').then(function (resp) {
	      return resp.json();
	    }).then(function (contributors) {
	      return _this2.setState({ contributors: contributors });
	    });
	  };
	
	  MentionEditor.prototype.render = function render() {
	    var suggestions = this.state.suggestions;
	
	    return _react2.default.createElement(
	      'div',
	      { style: { position: 'relative', left: 150 } },
	      _react2.default.createElement(_rcEditorMention2.default, {
	        style: { width: 300, height: 200 },
	        onSearchChange: this.onSearchChange,
	        onChange: this.onChange,
	        defaultValue: (0, _rcEditorMention.toEditorState)(defaultValue),
	        suggestions: suggestions,
	        multiLines: true
	      })
	    );
	  };
	
	  return MentionEditor;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(
	    'p',
	    null,
	    ' you can mention one of ant-design ',
	    _react2.default.createElement(
	      'a',
	      { href: 'https://github.com/ant-design/ant-design/graphs/contributors', target: 'blank' },
	      'contributors'
	    )
	  ),
	  _react2.default.createElement(MentionEditor, null)
	), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=customizeSuggesion.js.map