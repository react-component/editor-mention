webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(481);


/***/ },

/***/ 481:
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
	
	var activeStyle = {
	  transform: 'scaleY(1)',
	  transition: 'all 0.25s cubic-bezier(.3,1.2,.2,1)'
	};
	
	var disableStyle = {
	  transform: 'scaleY(0)',
	  transition: 'all 0.25s cubic-bezier(.3,1,.2,1)'
	};
	
	var MentionEditor = _react2.default.createClass({
	  displayName: 'MentionEditor',
	  getInitialState: function getInitialState() {
	    return {
	      suggestions: originSuggestions,
	      suggestionStyle: activeStyle
	    };
	  },
	  onSearchChange: function onSearchChange(value) {
	    var searchValue = value.toLowerCase();
	    var filtered = originSuggestions.filter(function (suggestion) {
	      return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	    });
	    this.setState({
	      suggestions: filtered,
	      suggestionStyle: filtered.length ? activeStyle : disableStyle
	    });
	  },
	  render: function render() {
	    var _state = this.state,
	        suggestions = _state.suggestions,
	        suggestionStyle = _state.suggestionStyle;
	
	    var multiLines = true;
	    return _react2.default.createElement(_rcEditorMention2.default, {
	      style: { width: 300 },
	      multiLines: multiLines,
	      onSearchChange: this.onSearchChange,
	      suggestions: suggestions,
	      suggestionStyle: suggestionStyle,
	      prefixCls: 'rc-editor-mention',
	      prefix: '@'
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
	  _react2.default.createElement(
	    'p',
	    null,
	    ' multilines mode '
	  ),
	  _react2.default.createElement(MentionEditor, null)
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=multilines.js.map