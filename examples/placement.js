webpackJsonp([2],{

/***/ 252:
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

var _draftJs = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']; // use jsx to render html, do not modify simple.html

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
      placement: 'bottom',
      suggestions: originSuggestions,
      defaultValue: null,
      editorState: (0, _rcEditorMention.toEditorState)('')
    }, _this.togglePlacement = function () {
      _this.setState({
        placement: _this.state.placement == 'bottom' ? 'top' : 'bottom'
      });
    }, _this.onSearchChange = function (value) {
      var searchValue = value.toLowerCase();
      var filtered = originSuggestions.filter(function (suggestion) {
        return suggestion.toLowerCase().indexOf(searchValue) !== -1;
      });
      _this.setState({
        suggestions: filtered
      });
    }, _this.onChange = function (editorState) {
      _this.setState({
        editorState: editorState
      });
    }, _this.reset = function () {
      _this.setState({
        editorState: _this.state.defaultValue
      });
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(MentionEditor, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          suggestions = _state.suggestions,
          editorState = _state.editorState;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'p',
          null,
          ' you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai'
        ),
        _react2['default'].createElement(
          'p',
          null,
          _react2['default'].createElement(
            'button',
            { onClick: this.togglePlacement.bind(this) },
            'Toggle placement'
          )
        ),
        _react2['default'].createElement(
          'button',
          { onClick: this.reset },
          ' reset '
        ),
        _react2['default'].createElement(_rcEditorMention2['default'], {
          style: { width: 300, height: 200 },
          ref: 'mention',
          onSearchChange: this.onSearchChange,
          defaultValue: this.state.defaultValue,
          value: editorState,
          onChange: this.onChange,
          suggestions: suggestions, prefix: '@',
          placement: this.state.placement
        })
      );
    }
  }]);
  return MentionEditor;
}(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(MentionEditor, null)
), document.getElementById('__react-content'));

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(252);


/***/ })

},[611]);
//# sourceMappingURL=placement.js.map