webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(398);


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(71);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	__webpack_require__(79);
	
	var _react = __webpack_require__(80);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(116);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(399);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _rcEditorMention = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-editor-mention\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Nav = _rcEditorMention2.default.Nav; // use jsx to render html, do not modify simple.html
	
	var Tag = function Tag(props) {
	  var data = props.data;
	
	  return _react2.default.createElement(
	    'span',
	    { contentEditable: false },
	    _react2.default.createElement('img', { src: data.avatar_url, className: 'tag-avatar' }),
	    props.children
	  );
	};
	
	Tag.propTypes = {
	  data: _propTypes2.default.object,
	  children: _propTypes2.default.any
	};
	
	var MentionEditor = function (_React$Component) {
	  (0, _inherits3.default)(MentionEditor, _React$Component);
	
	  function MentionEditor() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, MentionEditor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      contributors: [],
	      suggestions: []
	    }, _this.onSearchChange = function (value) {
	      var searchValue = value.toLowerCase();
	      var filtered = _this.state.contributors.filter(function (contributor) {
	        return contributor.login.toLowerCase().indexOf(searchValue) !== -1;
	      });
	      var suggestions = filtered.map(function (suggestion) {
	        return _react2.default.createElement(
	          Nav,
	          { style: { height: 34 }, value: suggestion.login, data: suggestion },
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
	      _this.setState({
	        suggestions: suggestions
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_rcEditorMention2.default, { style: { width: 300 },
	        onSearchChange: this.onSearchChange,
	        notFoundContent: '',
	        mode: 'mutable',
	        suggestions: suggestions,
	        tag: Tag
	      })
	    );
	  };
	
	  return MentionEditor;
	}(_react2.default.Component);
	
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

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(109)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(400)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)))

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(88);
	var invariant = __webpack_require__(91);
	var ReactPropTypesSecret = __webpack_require__(110);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ })

});
//# sourceMappingURL=customizeSuggesionAndTag.js.map