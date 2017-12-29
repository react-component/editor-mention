webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(523);


/***/ }),

/***/ 523:
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
	      editorMode: 'immutable'
	    }, _this.onSearchChange = function (value) {
	      var searchValue = value.toLowerCase();
	      var filtered = originSuggestions.filter(function (suggestion) {
	        return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	      });
	      _this.setState({
	        suggestions: filtered
	      });
	    }, _this.selectChange = function (ev) {
	      var value = ev.target.value;
	      _this.setState({
	        editorMode: value
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  MentionEditor.prototype.render = function render() {
	    var _state = this.state,
	        suggestions = _state.suggestions,
	        editorMode = _state.editorMode;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        '\u5B8C\u6574\u6807\u7B7E\u6A21\u5F0F\u65F6, \u5728 tag \u540E\u8FB9\u6309\u9000\u683C\u952E,\u5C06\u4F1A\u5220\u9664\u6574\u4E2A\u6807\u7B7E\u3002\u800C\u5728\u81EA\u7531\u6A21\u5F0F\u65F6,\u6309\u9000\u683C\u952E,\u5219\u4F1A\u91CD\u65B0\u7F16\u8F91\u6807\u7B7E\u3002'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        '\u5207\u6362\u6807\u7B7E\u6A21\u5F0F\u53EA\u5BF9\u4E4B\u540E\u6DFB\u52A0\u7684 tag \u6709\u6548\u3002'
	      ),
	      _react2.default.createElement(
	        'select',
	        { onChange: this.selectChange, value: editorMode },
	        _react2.default.createElement(
	          'option',
	          { value: 'immutable' },
	          '\u5B8C\u6574\u6807\u7B7E\u6A21\u5F0F'
	        ),
	        _react2.default.createElement(
	          'option',
	          { value: 'mutable' },
	          '\u81EA\u7531\u6A21\u5F0F'
	        )
	      ),
	      _react2.default.createElement(_rcEditorMention2.default, { style: { width: 300 },
	        onSearchChange: this.onSearchChange,
	        suggestions: suggestions,
	        mode: editorMode,
	        prefix: '@'
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
	    ' you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai'
	  ),
	  _react2.default.createElement(MentionEditor, null)
	), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=mentionMode.js.map