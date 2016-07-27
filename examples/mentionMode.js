webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(337);


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(174);
	
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
	    var _state = this.state;
	    var suggestions = _state.suggestions;
	    var editorMode = _state.editorMode;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        '完整标签模式时, 在 tag 后边按退格键,将会删除整个标签。而在自由模式时,按退格键,则会重新编辑标签。'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        '切换标签模式只对之后添加的 tag 有效。'
	      ),
	      _react2.default.createElement(
	        'select',
	        { onChange: this.selectChange, value: editorMode },
	        _react2.default.createElement(
	          'option',
	          { value: 'immutable' },
	          '完整标签模式'
	        ),
	        _react2.default.createElement(
	          'option',
	          { value: 'mutable' },
	          '自由模式'
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