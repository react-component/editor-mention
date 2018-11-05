webpackJsonp([5],{

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(456);


/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_editor_mention_assets_index_less__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_editor_mention_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_editor_mention_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_editor_mention__ = __webpack_require__(14);



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

var MentionEditor = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MentionEditor, _React$Component);

  function MentionEditor() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MentionEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      suggestions: originSuggestions,
      suggestionStyle: activeStyle
    }, _this.onSearchChange = function (value) {
      var searchValue = value.toLowerCase();
      var filtered = originSuggestions.filter(function (suggestion) {
        return suggestion.toLowerCase().indexOf(searchValue) !== -1;
      });
      _this.setState({
        suggestions: filtered,
        suggestionStyle: filtered.length ? activeStyle : disableStyle
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  MentionEditor.prototype.render = function render() {
    var _state = this.state,
        suggestions = _state.suggestions,
        suggestionStyle = _state.suggestionStyle;

    var multiLines = true;
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_editor_mention__["a" /* default */], {
      style: { width: 300 },
      multiLines: multiLines,
      onSearchChange: this.onSearchChange,
      suggestions: suggestions,
      suggestionStyle: suggestionStyle,
      prefixCls: 'rc-editor-mention',
      prefix: '@'
    });
  };

  return MentionEditor;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'p',
    null,
    ' you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai'
  ),
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'p',
    null,
    ' multilines mode '
  ),
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MentionEditor, null)
), document.getElementById('__react-content'));

/***/ })

},[455]);
//# sourceMappingURL=multilines.js.map