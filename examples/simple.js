webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(343);


/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(174);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
	
	var Wrapper = _react2.default.createClass({
	  displayName: 'Wrapper',
	  render: function render() {
	    return _react2.default.createElement(MentionEditor, null);
	  }
	});
	
	var MentionEditor = _react2.default.createClass({
	  displayName: 'MentionEditor',
	  getInitialState: function getInitialState() {
	    return {
	      suggestions: originSuggestions
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
	  onChange: function onChange(editorState) {
	    console.log('>> mentionChange', (0, _rcEditorMention.toString)(editorState, { encode: true }), (0, _rcEditorMention.getMentions)(editorState));
	  },
	  render: function render() {
	    var suggestions = this.state.suggestions;
	
	    return _react2.default.createElement(_rcEditorMention2.default, { style: { width: 300 },
	      onSearchChange: this.onSearchChange,
	      onChange: this.onChange,
	      defaultValue: (0, _rcEditorMention.toEditorState)(' @afc163 '),
	      placeholder: ' @ 某人 ',
	      suggestions: suggestions, prefix: '@'
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
	  _react2.default.createElement(Wrapper, null)
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map