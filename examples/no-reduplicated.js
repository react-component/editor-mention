webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(353);


/***/ },

/***/ 353:
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
	      mentions: []
	    };
	  },
	  onSearchChange: function onSearchChange(value) {
	    var searchValue = value.toLowerCase();
	    var mentions = this.state.mentions;
	
	    console.log('>> onSearchChange', value);
	    var filtered = originSuggestions.filter(function (suggestion) {
	      return suggestion.toLowerCase().indexOf(searchValue) !== -1 && mentions.indexOf('@' + suggestion) === -1;
	    });
	    this.setState({
	      suggestions: filtered
	    });
	  },
	  onSelect: function onSelect(value, suggestion) {
	    console.log('>> onSelect', value, suggestion);
	  },
	  onChange: function onChange(editorState) {
	    var mentions = (0, _rcEditorMention.getMentions)(editorState);
	    console.log('>> editorOnChange', mentions);
	    this.setState({
	      mentions: mentions
	    });
	  },
	  render: function render() {
	    var suggestions = this.state.suggestions;
	
	    return _react2.default.createElement(_rcEditorMention2.default, { style: { width: 300 },
	      onSearchChange: this.onSearchChange,
	      onChange: this.onChange,
	      placeholder: ' @ \u67D0\u4EBA ',
	      suggestions: suggestions,
	      prefix: '@',
	      onSelect: this.onSelect,
	      noRedup: true
	    });
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
//# sourceMappingURL=no-reduplicated.js.map