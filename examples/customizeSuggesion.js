webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(160);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(161);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	var Nav = _rcEditorMention2.default.Nav;
	
	var MentionEditor = _react2.default.createClass({
	  displayName: 'MentionEditor',
	  getInitialState: function getInitialState() {
	    return {
	      contributors: [],
	      suggestions: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    fetch('./contributors.json').then(function (resp) {
	      return resp.json();
	    }).then(function (contributors) {
	      return _this.setState({ contributors: contributors });
	    });
	  },
	  onSearchChange: function onSearchChange(value) {
	    var searchValue = value.toLowerCase();
	    var filtered = this.state.contributors.filter(function (contributor) {
	      return contributor.login.toLowerCase().indexOf(searchValue) !== -1;
	    });
	    var suggestions = filtered.map(function (suggestion) {
	      return _react2.default.createElement(
	        Nav,
	        { style: { height: 34 }, value: suggestion.login },
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
	    this.setState({
	      suggestions: suggestions
	    });
	  },
	  render: function render() {
	    var suggestions = this.state.suggestions;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_rcEditorMention2.default, {
	        style: { width: 300 },
	        onSearchChange: this.onSearchChange,
	        suggestions: suggestions
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
	    ' you can mention one of ant-design ',
	    _react2.default.createElement(
	      'a',
	      { href: 'https://github.com/ant-design/ant-design/graphs/contributors', target: 'blank' },
	      'contributors'
	    )
	  ),
	  _react2.default.createElement(MentionEditor, null)
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=customizeSuggesion.js.map