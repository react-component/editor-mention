webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(332);


/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(160);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcMention = __webpack_require__(161);
	
	var _rcMention2 = _interopRequireDefault(_rcMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	var suggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'simaQ', 'YuhangGe', 'dqaria', 'RaoHai'];
	
	var MentionEditor = _react2.default.createClass({
	  displayName: 'MentionEditor',
	  getInitialState: function getInitialState() {
	    return {
	      suggestions: suggestions
	    };
	  },
	  onSearchChange: function onSearchChange(value) {
	    var searchValue = value.toLowerCase();
	    var filtered = suggestions.filter(function (suggestion) {
	      return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	    });
	    this.setState({
	      suggestions: filtered
	    });
	  },
	  render: function render() {
	    var suggestions = this.state.suggestions;
	
	    return _react2.default.createElement(_rcMention2.default, { style: { width: 300 }, onSearchChange: this.onSearchChange, suggestions: suggestions, prefix: '@' });
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
//# sourceMappingURL=simple.js.map