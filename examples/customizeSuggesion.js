webpackJsonp([11],{

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_editor_mention_assets_index_less__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_editor_mention_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_editor_mention_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_editor_mention__ = __webpack_require__(18);



// use jsx to render html, do not modify simple.html





var Nav = __WEBPACK_IMPORTED_MODULE_6_rc_editor_mention__["a" /* default */].Nav;

var defaultValue = '123 13<br />\n123 <br />\n123 <br />\n123 <br />\n';

var MentionEditor = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MentionEditor, _React$Component);

  function MentionEditor() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MentionEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      contributors: [],
      suggestions: []
    }, _this.onSearchChange = function (value) {
      var searchValue = value.toLowerCase();
      var filtered = _this.state.contributors.filter(function (contributor) {
        return contributor.login.toLowerCase().indexOf(searchValue) !== -1;
      });
      var suggestions = filtered.map(function (suggestion) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          Nav,
          { style: { height: 34 }, value: suggestion.login, key: suggestion.login },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', { src: suggestion.avatar_url, className: 'avatar' }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            { className: 'meta' },
            suggestion.login
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
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
      console.log(Object(__WEBPACK_IMPORTED_MODULE_6_rc_editor_mention__["d" /* toString */])(editorState, { encode: true }));
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  MentionEditor.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('./contributors.json').then(function (resp) {
      return resp.json();
    }).then(function (contributors) {
      return _this2.setState({ contributors: contributors });
    });
  };

  MentionEditor.prototype.render = function render() {
    var suggestions = this.state.suggestions;

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { style: { position: 'relative', left: 150 } },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_editor_mention__["a" /* default */], {
        style: { width: 300, height: 200 },
        onSearchChange: this.onSearchChange,
        onChange: this.onChange,
        defaultValue: Object(__WEBPACK_IMPORTED_MODULE_6_rc_editor_mention__["c" /* toEditorState */])(defaultValue),
        suggestions: suggestions,
        multiLines: true
      })
    );
  };

  return MentionEditor;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'p',
    null,
    ' you can mention one of ant-design ',
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'a',
      { href: 'https://github.com/ant-design/ant-design/graphs/contributors', target: 'blank' },
      'contributors'
    )
  ),
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MentionEditor, null)
), document.getElementById('__react-content'));

/***/ })

},[384]);
//# sourceMappingURL=customizeSuggesion.js.map