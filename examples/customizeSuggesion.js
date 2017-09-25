webpackJsonp([11],{

/***/ 242:
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

var Nav = _rcEditorMention2['default'].Nav;

var defaultValue = '123 13<br />\n123 <br />\n123 <br />\n123 <br />\n';

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
      contributors: [],
      suggestions: []
    }, _this.onSearchChange = function (value) {
      var searchValue = value.toLowerCase();
      var filtered = _this.state.contributors.filter(function (contributor) {
        return contributor.login.toLowerCase().indexOf(searchValue) !== -1;
      });
      var suggestions = filtered.map(function (suggestion) {
        return _react2['default'].createElement(
          Nav,
          { style: { height: 34 }, value: suggestion.login, key: suggestion.login },
          _react2['default'].createElement('img', { src: suggestion.avatar_url, className: 'avatar' }),
          _react2['default'].createElement(
            'span',
            { className: 'meta' },
            suggestion.login
          ),
          _react2['default'].createElement(
            'span',
            { style: { float: 'right', color: 'green' } },
            suggestion.contributions
          )
        );
      });
      _this.setState({
        suggestions: suggestions
      });
    }, _this.onChange = function (editorState) {
      console.log((0, _rcEditorMention.toString)(editorState, { encode: true }));
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(MentionEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('./contributors.json').then(function (resp) {
        return resp.json();
      }).then(function (contributors) {
        return _this2.setState({ contributors: contributors });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var suggestions = this.state.suggestions;

      return _react2['default'].createElement(
        'div',
        { style: { position: 'relative', left: 150 } },
        _react2['default'].createElement(_rcEditorMention2['default'], {
          style: { width: 300, height: 200 },
          onSearchChange: this.onSearchChange,
          onChange: this.onChange,
          defaultValue: (0, _rcEditorMention.toEditorState)(defaultValue),
          suggestions: suggestions,
          multiLines: true
        })
      );
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
    ' you can mention one of ant-design ',
    _react2['default'].createElement(
      'a',
      { href: 'https://github.com/ant-design/ant-design/graphs/contributors', target: 'blank' },
      'contributors'
    )
  ),
  _react2['default'].createElement(MentionEditor, null)
), document.getElementById('__react-content'));

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);


/***/ })

},[601]);
//# sourceMappingURL=customizeSuggesion.js.map