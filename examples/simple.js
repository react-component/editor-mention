webpackJsonp([1],{

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(14);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(20);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcEditorMention = __webpack_require__(19);

var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// use jsx to render html, do not modify simple.html

var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

var MentionEditor = function (_React$Component) {
  (0, _inherits3['default'])(MentionEditor, _React$Component);

  function MentionEditor() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, MentionEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = MentionEditor.__proto__ || Object.getPrototypeOf(MentionEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      suggestions: originSuggestions
    }, _this.onSearchChange = function (value) {
      var searchValue = value.toLowerCase();
      var filtered = originSuggestions.filter(function (suggestion) {
        return suggestion.toLowerCase().indexOf(searchValue) !== -1;
      });
      console.log('>> onSearchChange', searchValue, filtered);
      _this.setState({
        suggestions: filtered
      });
    }, _this.onSelect = function (value, suggestion) {
      console.log('>> onSelect', value, suggestion);
    }, _this.onChange = function (editorState) {
      console.log('>> mentionChange', (0, _rcEditorMention.toString)(editorState, { encode: true }), (0, _rcEditorMention.getMentions)(editorState));
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(MentionEditor, [{
    key: 'render',
    value: function render() {
      var suggestions = this.state.suggestions;

      return _react2['default'].createElement(_rcEditorMention2['default'], {
        style: { width: 300 },
        onSearchChange: this.onSearchChange,
        onChange: this.onChange,
        placeholder: ' @ \u67D0\u4EBA ',
        onFocus: function onFocus(e) {
          return console.log('focus', e);
        },
        onBlur: function onBlur(e) {
          return console.log('blur', e);
        },
        suggestions: suggestions,
        prefix: '',
        onSelect: this.onSelect
      });
    }
  }]);
  return MentionEditor;
}(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'p',
    null,
    ' you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai'
  ),
  _react2['default'].createElement(MentionEditor, null)
), document.getElementById('__react-content'));

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);


/***/ })

},[613]);
//# sourceMappingURL=simple.js.map