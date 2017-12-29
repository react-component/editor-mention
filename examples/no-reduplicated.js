webpackJsonp([10],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(526);


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(71);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	__webpack_require__(79);
	
	var _react = __webpack_require__(80);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(116);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-editor-mention\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
	
	var MentionEditor = function (_React$Component) {
	  (0, _inherits3.default)(MentionEditor, _React$Component);
	
	  function MentionEditor() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, MentionEditor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      suggestions: originSuggestions,
	      mentions: []
	    }, _this.onSearchChange = function (value) {
	      var searchValue = value.toLowerCase();
	      var mentions = _this.state.mentions;
	
	      console.log('>> onSearchChange', value);
	      var filtered = originSuggestions.filter(function (suggestion) {
	        return suggestion.toLowerCase().indexOf(searchValue) !== -1 && mentions.indexOf('@' + suggestion) === -1;
	      });
	      _this.setState({
	        suggestions: filtered
	      });
	    }, _this.onSelect = function (value, suggestion) {
	      console.log('>> onSelect', value, suggestion);
	    }, _this.onChange = function (contentState) {
	      console.log('>> editorOnChange', contentState);
	      var mentions = (0, _rcEditorMention.getMentions)(contentState);
	
	      _this.setState({
	        mentions: mentions
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  MentionEditor.prototype.render = function render() {
	    var suggestions = this.state.suggestions;
	
	    return _react2.default.createElement(_rcEditorMention2.default, {
	      style: { width: 300 },
	      onSearchChange: this.onSearchChange,
	      onChange: this.onChange,
	      placeholder: ' @ \u67D0\u4EBA ',
	      suggestions: suggestions,
	      prefix: '@',
	      onSelect: this.onSelect,
	      noRedup: true
	    });
	  };
	
	  return MentionEditor;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(
	    'p',
	    null,
	    ' you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai'
	  ),
	  _react2.default.createElement(MentionEditor, null)
	), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=no-reduplicated.js.map