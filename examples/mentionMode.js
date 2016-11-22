webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(351);


/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(180);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
	
	var MentionEditor = _react2.default.createClass({
	  displayName: 'MentionEditor',
	  getInitialState: function getInitialState() {
	    return {
	      suggestions: originSuggestions,
	      editorMode: 'immutable'
	    };
	  },
	  onSearchChange: function onSearchChange(value) {
	    var searchValue = value.toLowerCase();
	    var filtered = originSuggestions.filter(function (suggestion) {
	      return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	    });
	    this.setState({
	      suggestions: filtered
	    });
	  },
	  selectChange: function selectChange(ev) {
	    var value = ev.target.value;
	    this.setState({
	      editorMode: value
	    });
	  },
	  render: function render() {
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
	  }
	});
	
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

/***/ }

});
//# sourceMappingURL=mentionMode.js.map