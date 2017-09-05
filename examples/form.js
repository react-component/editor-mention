webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(506);


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcForm = __webpack_require__(507);
	
	var _rcForm2 = _interopRequireDefault(_rcForm);
	
	var _rcEditorMention = __webpack_require__(186);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']; // use jsx to render html, do not modify simple.html
	
	var MentionEditor = (0, _rcForm.createForm)()(_react2.default.createClass({
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
	    console.log('>> onSearchChange', searchValue, filtered);
	    this.setState({
	      suggestions: filtered
	    });
	  },
	  onSelect: function onSelect(value, suggestion) {
	    console.log('>> onSelect', value, suggestion);
	  },
	  render: function render() {
	    var suggestions = this.state.suggestions;
	    var getFieldDecorator = this.props.form.getFieldDecorator;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      getFieldDecorator('mention', { initialValue: (0, _rcEditorMention.toEditorState)('@afc163') })(_react2.default.createElement(_rcEditorMention2.default, { style: { width: 300 },
	        onSearchChange: this.onSearchChange,
	        placeholder: ' @ \u67D0\u4EBA ',
	        onFocus: function onFocus(e) {
	          return console.log('focus', e);
	        },
	        onBlur: function onBlur(e) {
	          return console.log('blur', e);
	        },
	        suggestions: suggestions,
	        prefix: '@',
	        onSelect: this.onSelect
	      }))
	    );
	  }
	}));
	
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

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(508);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.createForm = _createForm2['default']; // export this package's api

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mixin = undefined;
	
	var _createBaseForm = __webpack_require__(509);
	
	var _createBaseForm2 = _interopRequireDefault(_createBaseForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var mixin = exports.mixin = {
	  getForm: function getForm() {
	    return {
	      getFieldsValue: this.fieldsStore.getFieldsValue,
	      getFieldValue: this.fieldsStore.getFieldValue,
	      getFieldInstance: this.getFieldInstance,
	      setFieldsValue: this.setFieldsValue,
	      setFields: this.setFields,
	      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
	      getFieldDecorator: this.getFieldDecorator,
	      getFieldProps: this.getFieldProps,
	      getFieldsError: this.fieldsStore.getFieldsError,
	      getFieldError: this.fieldsStore.getFieldError,
	      isFieldValidating: this.fieldsStore.isFieldValidating,
	      isFieldsValidating: this.fieldsStore.isFieldsValidating,
	      isFieldsTouched: this.fieldsStore.isFieldsTouched,
	      isFieldTouched: this.fieldsStore.isFieldTouched,
	      isSubmitting: this.isSubmitting,
	      submit: this.submit,
	      validateFields: this.validateFields,
	      resetFields: this.resetFields
	    };
	  }
	};
	
	function createForm(options) {
	  return (0, _createBaseForm2['default'])(options, [mixin]);
	}
	
	exports['default'] = createForm;

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectWithoutProperties2 = __webpack_require__(510);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _defineProperty2 = __webpack_require__(432);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(394);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _toConsumableArray2 = __webpack_require__(511);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createReactClass = __webpack_require__(521);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _asyncValidator = __webpack_require__(522);
	
	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
	
	var _warning = __webpack_require__(547);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _get = __webpack_require__(548);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _has = __webpack_require__(582);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _set = __webpack_require__(585);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _createFieldsStore = __webpack_require__(590);
	
	var _createFieldsStore2 = _interopRequireDefault(_createFieldsStore);
	
	var _utils = __webpack_require__(591);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var DEFAULT_TRIGGER = 'onChange';
	
	function createBaseForm() {
	  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var mapPropsToFields = option.mapPropsToFields,
	      onFieldsChange = option.onFieldsChange,
	      onValuesChange = option.onValuesChange,
	      fieldNameProp = option.fieldNameProp,
	      fieldMetaProp = option.fieldMetaProp,
	      validateMessages = option.validateMessages,
	      _option$mapProps = option.mapProps,
	      mapProps = _option$mapProps === undefined ? _utils.mirror : _option$mapProps,
	      _option$formPropName = option.formPropName,
	      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
	      withRef = option.withRef;
	
	
	  function decorate(WrappedComponent) {
	    var Form = (0, _createReactClass2['default'])({
	      displayName: 'Form',
	
	      mixins: mixins,
	
	      getInitialState: function getInitialState() {
	        var _this = this;
	
	        var fields = mapPropsToFields && mapPropsToFields(this.props);
	        this.fieldsStore = (0, _createFieldsStore2['default'])(fields || {});
	
	        this.instances = {};
	        this.cachedBind = {};
	        // HACK: https://github.com/ant-design/ant-design/issues/6406
	        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
	          return _this[key] = function () {
	            var _fieldsStore;
	
	            (0, _warning2['default'])(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
	            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
	          };
	        });
	
	        return {
	          submitting: false
	        };
	      },
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (mapPropsToFields) {
	          this.fieldsStore.replaceFields(mapPropsToFields(nextProps));
	        }
	      },
	      onCollectCommon: function onCollectCommon(name_, action, args) {
	        var name = name_;
	        var fieldMeta = this.fieldsStore.getFieldMeta(name);
	        if (fieldMeta[action]) {
	          fieldMeta[action].apply(fieldMeta, (0, _toConsumableArray3['default'])(args));
	        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
	          var _fieldMeta$originalPr;
	
	          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, (0, _toConsumableArray3['default'])(args));
	        }
	        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, (0, _toConsumableArray3['default'])(args)) : _utils.getValueFromEvent.apply(undefined, (0, _toConsumableArray3['default'])(args));
	        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
	          onValuesChange(this.props, (0, _set2['default'])({}, name, value));
	        }
	        var nameKeyObj = (0, _utils.getNameIfNested)(name);
	        if (this.fieldsStore.getFieldMeta(nameKeyObj.name).exclusive) {
	          name = nameKeyObj.name;
	        }
	        var field = this.fieldsStore.getField(name);
	        return { name: name, field: (0, _extends3['default'])({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
	      },
	      onCollect: function onCollect(name_, action) {
	        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          args[_key - 2] = arguments[_key];
	        }
	
	        var _onCollectCommon = this.onCollectCommon(name_, action, args),
	            name = _onCollectCommon.name,
	            field = _onCollectCommon.field,
	            fieldMeta = _onCollectCommon.fieldMeta;
	
	        var validate = fieldMeta.validate;
	
	        var fieldContent = (0, _extends3['default'])({}, field, {
	          dirty: (0, _utils.hasRules)(validate)
	        });
	        this.setFields((0, _defineProperty3['default'])({}, name, fieldContent));
	      },
	      onCollectValidate: function onCollectValidate(name_, action) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
	            field = _onCollectCommon2.field,
	            fieldMeta = _onCollectCommon2.fieldMeta;
	
	        var fieldContent = (0, _extends3['default'])({}, field, {
	          dirty: true
	        });
	        this.validateFieldsInternal([fieldContent], {
	          action: action,
	          options: {
	            firstFields: !!fieldMeta.validateFirst
	          }
	        });
	      },
	      getCacheBind: function getCacheBind(name, action, fn) {
	        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
	        if (!cache[action]) {
	          cache[action] = fn.bind(this, name, action);
	        }
	        return cache[action];
	      },
	      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
	        var _this2 = this;
	
	        var props = this.getFieldProps(name, fieldOption);
	        return function (fieldElem) {
	          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
	          var originalProps = fieldElem.props;
	          if (process.env.NODE_ENV !== 'production') {
	            var valuePropName = fieldMeta.valuePropName;
	            (0, _warning2['default'])(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
	            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
	            (0, _warning2['default'])(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
	          }
	          fieldMeta.originalProps = originalProps;
	          fieldMeta.ref = fieldElem.ref;
	          return _react2['default'].cloneElement(fieldElem, (0, _extends3['default'])({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
	        };
	      },
	      getFieldProps: function getFieldProps(name) {
	        var _this3 = this;
	
	        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        if (!name) {
	          throw new Error('Must call `getFieldProps` with valid name string!');
	        }
	
	        var nameIfNested = (0, _utils.getNameIfNested)(name);
	        var leadingName = nameIfNested.name;
	        var fieldOption = (0, _extends3['default'])({
	          valuePropName: 'value',
	          validate: [],
	          trigger: DEFAULT_TRIGGER,
	          leadingName: leadingName,
	          name: name
	        }, usersFieldOption);
	
	        var rules = fieldOption.rules,
	            trigger = fieldOption.trigger,
	            _fieldOption$validate = fieldOption.validateTrigger,
	            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
	            exclusive = fieldOption.exclusive,
	            validate = fieldOption.validate;
	
	
	        var fieldMeta = this.fieldsStore.getFieldMeta(name);
	        if ('initialValue' in fieldOption) {
	          fieldMeta.initialValue = fieldOption.initialValue;
	        }
	
	        var leadingFieldMeta = this.fieldsStore.getFieldMeta(leadingName);
	        if (nameIfNested.isNested) {
	          leadingFieldMeta.virtual = !exclusive;
	          // exclusive allow getFieldProps('x', {initialValue})
	          // non-exclusive does not allow getFieldProps('x', {initialValue})
	          leadingFieldMeta.hidden = !exclusive;
	          leadingFieldMeta.exclusive = exclusive;
	        }
	
	        var inputProps = (0, _extends3['default'])({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
	          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
	        });
	        if (fieldNameProp) {
	          inputProps[fieldNameProp] = name;
	        }
	
	        var validateRules = (0, _utils.normalizeValidateRules)(validate, rules, validateTrigger);
	        var validateTriggers = validateRules.filter(function (item) {
	          return !!item.rules && item.rules.length;
	        }).map(function (item) {
	          return item.trigger;
	        }).reduce(function (pre, curr) {
	          return pre.concat(curr);
	        }, []);
	        validateTriggers.forEach(function (action) {
	          if (inputProps[action]) return;
	          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
	        });
	
	        // make sure that the value will be collect
	        if (trigger && validateTriggers.indexOf(trigger) === -1) {
	          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
	        }
	
	        var meta = (0, _extends3['default'])({}, fieldMeta, fieldOption, {
	          validate: validateRules
	        });
	        this.fieldsStore.setFieldMeta(name, meta);
	        if (fieldMetaProp) {
	          inputProps[fieldMetaProp] = meta;
	        }
	
	        return inputProps;
	      },
	      getFieldInstance: function getFieldInstance(name) {
	        return this.instances[name];
	      },
	      getRules: function getRules(fieldMeta, action) {
	        var actionRules = fieldMeta.validate.filter(function (item) {
	          return !action || item.trigger.indexOf(action) >= 0;
	        }).map(function (item) {
	          return item.rules;
	        });
	        return (0, _utils.flattenArray)(actionRules);
	      },
	      setFields: function setFields(fields) {
	        var _this4 = this;
	
	        this.fieldsStore.setFields(fields);
	        if (onFieldsChange) {
	          var changedFields = {};
	          Object.keys(fields).forEach(function (f) {
	            changedFields[f] = _this4.fieldsStore.getField(f);
	          });
	          onFieldsChange(this.props, changedFields);
	        }
	        this.forceUpdate();
	      },
	      resetFields: function resetFields(ns) {
	        var newFields = this.fieldsStore.resetFields(ns);
	        if (Object.keys(newFields).length > 0) {
	          this.setFields(newFields);
	        }
	      },
	      setFieldsValue: function setFieldsValue(fieldsValue) {
	        if (onValuesChange) {
	          onValuesChange(this.props, fieldsValue);
	        }
	        var newFields = {};
	        var _fieldsStore2 = this.fieldsStore,
	            fieldsMeta = _fieldsStore2.fieldsMeta,
	            fields = _fieldsStore2.fields;
	
	        var virtualPaths = (0, _utils.getVirtualPaths)(fieldsMeta);
	        Object.keys(fieldsValue).forEach(function (name) {
	          var value = fieldsValue[name];
	          if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	            (0, _utils.clearVirtualField)(name, fields, fieldsMeta);
	            for (var i = 0, len = virtualPaths[name].length; i < len; i++) {
	              var path = virtualPaths[name][i];
	              if ((0, _has2['default'])(fieldsValue, path)) {
	                newFields[path] = {
	                  name: path,
	                  value: (0, _get2['default'])(fieldsValue, path)
	                };
	              }
	            }
	          } else if (fieldsMeta[name]) {
	            newFields[name] = {
	              name: name,
	              value: value
	            };
	          } else {
	            (0, _warning2['default'])(false, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
	          }
	        });
	        this.setFields(newFields);
	      },
	      saveRef: function saveRef(name, _, component) {
	        if (!component) {
	          // after destroy, delete data
	          this.fieldsStore.clearField(name);
	          delete this.instances[name];
	          delete this.cachedBind[name];
	          return;
	        }
	        var fieldMeta = this.fieldsStore.getFieldMeta(name);
	        if (fieldMeta) {
	          var ref = fieldMeta.ref;
	          if (ref) {
	            if (typeof ref === 'string') {
	              throw new Error('can not set ref string for ' + name);
	            }
	            ref(component);
	          }
	        }
	        this.instances[name] = component;
	      },
	      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
	        var _this5 = this;
	
	        var fieldNames = _ref.fieldNames,
	            action = _ref.action,
	            _ref$options = _ref.options,
	            options = _ref$options === undefined ? {} : _ref$options;
	
	        var allRules = {};
	        var allValues = {};
	        var allFields = {};
	        var alreadyErrors = {};
	        fields.forEach(function (field) {
	          var name = field.name;
	          if (options.force !== true && field.dirty === false) {
	            if (field.errors) {
	              (0, _set2['default'])(alreadyErrors, name, { errors: field.errors });
	            }
	            return;
	          }
	          var fieldMeta = _this5.fieldsStore.getFieldMeta(name);
	          var newField = (0, _extends3['default'])({}, field);
	          newField.errors = undefined;
	          newField.validating = true;
	          newField.dirty = true;
	          allRules[name] = _this5.getRules(fieldMeta, action);
	          allValues[name] = newField.value;
	          allFields[name] = newField;
	        });
	        this.setFields(allFields);
	        // in case normalize
	        Object.keys(allValues).forEach(function (f) {
	          allValues[f] = _this5.fieldsStore.getFieldValue(f);
	        });
	        if (callback && (0, _utils.isEmptyObject)(allFields)) {
	          callback((0, _utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          return;
	        }
	        var validator = new _asyncValidator2['default'](allRules);
	        if (validateMessages) {
	          validator.messages(validateMessages);
	        }
	        validator.validate(allValues, options, function (errors) {
	          var errorsGroup = (0, _extends3['default'])({}, alreadyErrors);
	          if (errors && errors.length) {
	            errors.forEach(function (e) {
	              var fieldName = e.field;
	              if (!(0, _has2['default'])(errorsGroup, fieldName)) {
	                (0, _set2['default'])(errorsGroup, fieldName, { errors: [] });
	              }
	              var fieldErrors = (0, _get2['default'])(errorsGroup, fieldName.concat('.errors'));
	              fieldErrors.push(e);
	            });
	          }
	          var expired = [];
	          var nowAllFields = {};
	          Object.keys(allRules).forEach(function (name) {
	            var fieldErrors = (0, _get2['default'])(errorsGroup, name);
	            var nowField = _this5.fieldsStore.getField(name);
	            // avoid concurrency problems
	            if (nowField.value !== allValues[name]) {
	              expired.push({
	                name: name
	              });
	            } else {
	              nowField.errors = fieldErrors && fieldErrors.errors;
	              nowField.value = allValues[name];
	              nowField.validating = false;
	              nowField.dirty = false;
	              nowAllFields[name] = nowField;
	            }
	          });
	          _this5.setFields(nowAllFields);
	          if (callback) {
	            if (expired.length) {
	              expired.forEach(function (_ref2) {
	                var name = _ref2.name;
	
	                var fieldErrors = [{
	                  message: name + ' need to revalidate',
	                  field: name
	                }];
	                (0, _set2['default'])(errorsGroup, name, {
	                  expired: true,
	                  errors: fieldErrors
	                });
	              });
	            }
	
	            callback((0, _utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this5.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	        });
	      },
	      validateFields: function validateFields(ns, opt, cb) {
	        var _this6 = this;
	
	        var _getParams = (0, _utils.getParams)(ns, opt, cb),
	            names = _getParams.names,
	            callback = _getParams.callback,
	            options = _getParams.options;
	
	        var fieldNames = names || this.fieldsStore.getValidFieldsName();
	        var fields = fieldNames.filter(function (name) {
	          var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
	          return (0, _utils.hasRules)(fieldMeta.validate);
	        }).map(function (name) {
	          var field = _this6.fieldsStore.getField(name);
	          field.value = _this6.fieldsStore.getFieldValue(name);
	          return field;
	        });
	        if (!fields.length) {
	          if (callback) {
	            callback(null, this.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	          return;
	        }
	        if (!('firstFields' in options)) {
	          options.firstFields = fieldNames.filter(function (name) {
	            var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
	            return !!fieldMeta.validateFirst;
	          });
	        }
	        this.validateFieldsInternal(fields, {
	          fieldNames: fieldNames,
	          options: options
	        }, callback);
	      },
	      isSubmitting: function isSubmitting() {
	        return this.state.submitting;
	      },
	      submit: function submit(callback) {
	        var _this7 = this;
	
	        var fn = function fn() {
	          _this7.setState({
	            submitting: false
	          });
	        };
	        this.setState({
	          submitting: true
	        });
	        callback(fn);
	      },
	      render: function render() {
	        var _props = this.props,
	            wrappedComponentRef = _props.wrappedComponentRef,
	            restProps = (0, _objectWithoutProperties3['default'])(_props, ['wrappedComponentRef']);
	
	        var formProps = (0, _defineProperty3['default'])({}, formPropName, this.getForm());
	        function innerestWrappedComponentRef() {
	          if (wrappedComponentRef && !innerestWrappedComponentRef.called) {
	            wrappedComponentRef.apply(undefined, arguments);
	            innerestWrappedComponentRef.called = true;
	          }
	        }
	        if (withRef) {
	          (0, _warning2['default'])(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
	          formProps.ref = 'wrappedComponent';
	        } else if (wrappedComponentRef) {
	          formProps.ref = innerestWrappedComponentRef;
	        }
	        var props = mapProps.call(this, (0, _extends3['default'])({}, formProps, restProps, {
	          wrappedComponentRef: innerestWrappedComponentRef
	        }));
	        return _react2['default'].createElement(WrappedComponent, props);
	      }
	    });
	
	    return (0, _utils.argumentContainer)(Form, WrappedComponent);
	  }
	
	  return decorate;
	}
	
	exports['default'] = createBaseForm;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(512);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(513), __esModule: true };

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(442);
	__webpack_require__(514);
	module.exports = __webpack_require__(400).Array.from;


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(401);
	var $export = __webpack_require__(398);
	var toObject = __webpack_require__(431);
	var call = __webpack_require__(515);
	var isArrayIter = __webpack_require__(516);
	var toLength = __webpack_require__(422);
	var createProperty = __webpack_require__(517);
	var getIterFn = __webpack_require__(518);
	
	$export($export.S + $export.F * !__webpack_require__(520)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(405);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(447);
	var ITERATOR = __webpack_require__(453)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(404);
	var createDesc = __webpack_require__(412);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(519);
	var ITERATOR = __webpack_require__(453)('iterator');
	var Iterators = __webpack_require__(447);
	module.exports = __webpack_require__(400).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(419);
	var TAG = __webpack_require__(453)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(453)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(3);
	var factory = __webpack_require__(37);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(394);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(439);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(523);
	
	var _validator = __webpack_require__(524);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _messages2 = __webpack_require__(546);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}
	
	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : (0, _typeof3['default'])(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;
	
	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];
	
	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};
	
	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }
	
	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }
	
	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = (0, _extends3['default'])({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = (0, _extends3['default'])({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof3['default'])(rule.fields) === 'object' || (0, _typeof3['default'])(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return (0, _extends3['default'])({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }
	
	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }
	
	        errors = errors.map((0, _util.complementError)(rule));
	
	        if (options.first && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else if (options.error) {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            } else {
	              errors = [];
	            }
	            return doIt(errors);
	          }
	
	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = (0, _extends3['default'])({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }
	
	      var res = rule.validator(rule, data.value, cb, data.source, options);
	      if (res && res.then) {
	        res.then(function () {
	          return cb();
	        }, function (e) {
	          return cb(e);
	        });
	      }
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2['default'].required;
	    }
	    return _validator2['default'][this.getType(rule)] || false;
	  }
	};
	
	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2['default'][type] = validator;
	};
	
	Schema.messages = _messages2.messages;
	
	exports['default'] = Schema;
	module.exports = exports['default'];

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warning = undefined;
	
	var _extends2 = __webpack_require__(394);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(439);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var formatRegExp = /%[sdj%]/g;
	
	var warning = exports.warning = function warning() {};
	
	// don't print warning message when in production env or node runtime
	if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
	  exports.warning = warning = function warning(type, errors) {
	    if (typeof console !== 'undefined' && console.warn) {
	      if (errors.every(function (e) {
	        return typeof e === 'string';
	      })) {
	        console.warn(type, errors);
	      }
	    }
	  };
	}
	
	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}
	
	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}
	
	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}
	
	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}
	
	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;
	
	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }
	
	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}
	
	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;
	
	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }
	
	  next([]);
	}
	
	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}
	
	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}
	
	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}
	
	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && (0, _typeof3['default'])(target[s]) === 'object') {
	          target[s] = (0, _extends3['default'])({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _string = __webpack_require__(525);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _method = __webpack_require__(533);
	
	var _method2 = _interopRequireDefault(_method);
	
	var _number = __webpack_require__(534);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _boolean = __webpack_require__(535);
	
	var _boolean2 = _interopRequireDefault(_boolean);
	
	var _regexp = __webpack_require__(536);
	
	var _regexp2 = _interopRequireDefault(_regexp);
	
	var _integer = __webpack_require__(537);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	var _float = __webpack_require__(538);
	
	var _float2 = _interopRequireDefault(_float);
	
	var _array = __webpack_require__(539);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _object = __webpack_require__(540);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _enum = __webpack_require__(541);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(542);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	var _date = __webpack_require__(543);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _required = __webpack_require__(544);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _type = __webpack_require__(545);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  string: _string2['default'],
	  method: _method2['default'],
	  number: _number2['default'],
	  boolean: _boolean2['default'],
	  regexp: _regexp2['default'],
	  integer: _integer2['default'],
	  float: _float2['default'],
	  array: _array2['default'],
	  object: _object2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default'],
	  date: _date2['default'],
	  url: _type2['default'],
	  hex: _type2['default'],
	  email: _type2['default'],
	  required: _required2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	      _rule2['default'].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2['default'].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = string;
	module.exports = exports['default'];

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _required = __webpack_require__(527);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _whitespace = __webpack_require__(528);
	
	var _whitespace2 = _interopRequireDefault(_whitespace);
	
	var _type = __webpack_require__(529);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _range = __webpack_require__(530);
	
	var _range2 = _interopRequireDefault(_range);
	
	var _enum = __webpack_require__(531);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(532);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  required: _required2['default'],
	  whitespace: _whitespace2['default'],
	  type: _type2['default'],
	  range: _range2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(523);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(523);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}
	
	exports['default'] = whitespace;
	module.exports = exports['default'];

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(439);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(523);
	
	var util = _interopRequireWildcard(_util);
	
	var _required = __webpack_require__(527);
	
	var _required2 = _interopRequireDefault(_required);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint max-len:0 */
	
	var pattern = {
	  // http://emailregex.com/
	  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};
	
	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  float: function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email);
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};
	
	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2['default'])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(523);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}
	
	exports['default'] = range;
	module.exports = exports['default'];

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(523);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var ENUM = 'enum';
	
	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(523);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern) {
	    if (rule.pattern instanceof RegExp) {
	      if (!rule.pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    } else if (typeof rule.pattern === 'string') {
	      var _pattern = new RegExp(rule.pattern);
	      if (!_pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    }
	  }
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = method;
	module.exports = exports['default'];

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = number;
	module.exports = exports['default'];

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(523);
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = boolean;
	module.exports = exports['default'];

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = regexp;
	module.exports = exports['default'];

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = integer;
	module.exports = exports['default'];

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = floatFn;
	module.exports = exports['default'];

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = array;
	module.exports = exports['default'];

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = object;
	module.exports = exports['default'];

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ENUM = 'enum';
	
	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2['default'][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2['default'].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = date;
	module.exports = exports['default'];

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(439);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value);
	  _rule2['default'].required(rule, value, source, errors, options, type);
	  callback(errors);
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(526);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(523);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    'default': 'Validation error on field %s',
	    required: '%s is required',
	    'enum': '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      boolean: '%s is not a %s',
	      integer: '%s is not an %s',
	      float: '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}
	
	var messages = exports.messages = newMessages();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(549);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(550),
	    toKey = __webpack_require__(581);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(362),
	    isKey = __webpack_require__(551),
	    stringToPath = __webpack_require__(553),
	    toString = __webpack_require__(579);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(362),
	    isSymbol = __webpack_require__(552);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(347),
	    isObjectLike = __webpack_require__(363);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(554);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(555);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(556);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(557),
	    mapCacheDelete = __webpack_require__(573),
	    mapCacheGet = __webpack_require__(576),
	    mapCacheHas = __webpack_require__(577),
	    mapCacheSet = __webpack_require__(578);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(558),
	    ListCache = __webpack_require__(565),
	    Map = __webpack_require__(355);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(559),
	    hashDelete = __webpack_require__(561),
	    hashGet = __webpack_require__(562),
	    hashHas = __webpack_require__(563),
	    hashSet = __webpack_require__(564);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(560);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(344);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),

/***/ 561:
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(560);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(560);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(560);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(566),
	    listCacheDelete = __webpack_require__(567),
	    listCacheGet = __webpack_require__(570),
	    listCacheHas = __webpack_require__(571),
	    listCacheSet = __webpack_require__(572);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),

/***/ 566:
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(568);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(569);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),

/***/ 569:
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(568);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(568);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(568);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(574);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(575);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),

/***/ 575:
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(574);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(574);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(574);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(580);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(338),
	    arrayMap = __webpack_require__(373),
	    isArray = __webpack_require__(362),
	    isSymbol = __webpack_require__(552);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(552);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(583),
	    hasPath = __webpack_require__(584);
	
	/**
	 * Checks if `path` is a direct property of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = { 'a': { 'b': 2 } };
	 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.has(object, 'a');
	 * // => true
	 *
	 * _.has(object, 'a.b');
	 * // => true
	 *
	 * _.has(object, ['a', 'b']);
	 * // => true
	 *
	 * _.has(other, 'a');
	 * // => false
	 */
	function has(object, path) {
	  return object != null && hasPath(object, path, baseHas);
	}
	
	module.exports = has;


/***/ }),

/***/ 583:
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  return object != null && hasOwnProperty.call(object, key);
	}
	
	module.exports = baseHas;


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(550),
	    isArguments = __webpack_require__(377),
	    isArray = __webpack_require__(362),
	    isIndex = __webpack_require__(382),
	    isLength = __webpack_require__(360),
	    toKey = __webpack_require__(581);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(586);
	
	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}
	
	module.exports = set;


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(587),
	    castPath = __webpack_require__(550),
	    isIndex = __webpack_require__(382),
	    isObject = __webpack_require__(350),
	    toKey = __webpack_require__(581);
	
	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;
	
	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;
	
	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}
	
	module.exports = baseSet;


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(588),
	    eq = __webpack_require__(569);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(589);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(344);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(432);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(394);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(436);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(437);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports['default'] = createFieldsStore;
	
	var _get = __webpack_require__(548);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _has = __webpack_require__(582);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _set = __webpack_require__(585);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _utils = __webpack_require__(591);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var atom = {};
	
	var FieldsStore = function () {
	  function FieldsStore(fields) {
	    (0, _classCallCheck3['default'])(this, FieldsStore);
	
	    _initialiseProps.call(this);
	
	    this.fields = fields;
	    this.fieldsMeta = {};
	  }
	
	  (0, _createClass3['default'])(FieldsStore, [{
	    key: 'replaceFields',
	    value: function replaceFields(fields) {
	      this.fields = fields;
	    }
	  }, {
	    key: 'setFields',
	    value: function setFields(fields) {
	      var _this = this;
	
	      var fieldsMeta = this.fieldsMeta;
	      var nowFields = (0, _extends3['default'])({}, this.fields, fields);
	      var nowValues = {};
	      Object.keys(fieldsMeta).forEach(function (f) {
	        var _getNameIfNested = (0, _utils.getNameIfNested)(f),
	            name = _getNameIfNested.name,
	            isNested = _getNameIfNested.isNested;
	
	        if (isNested && fieldsMeta[name].exclusive) {
	          return;
	        }
	        nowValues[f] = _this.getValueFromFields(f, nowFields);
	      });
	      Object.keys(nowValues).forEach(function (f) {
	        var value = nowValues[f];
	        var fieldMeta = fieldsMeta[f];
	        if (fieldMeta && fieldMeta.normalize) {
	          var nowValue = fieldMeta.normalize(value, _this.getValueFromFields(f, _this.fields), nowValues);
	          if (nowValue !== value) {
	            nowFields[f] = (0, _extends3['default'])({}, nowFields[f], {
	              value: nowValue
	            });
	          }
	        }
	      });
	      this.fields = nowFields;
	    }
	  }, {
	    key: 'resetFields',
	    value: function resetFields(ns) {
	      var newFields = {};
	      var fields = this.fields;
	
	      var names = ns || Object.keys(fields);
	      names.forEach(function (name) {
	        var field = fields[name];
	        if (field && 'value' in field) {
	          newFields[name] = {};
	        }
	      });
	      return newFields;
	    }
	  }, {
	    key: 'getValueFromFieldsInternal',
	    value: function getValueFromFieldsInternal(name, fields) {
	      var field = fields[name];
	      if (field && 'value' in field) {
	        return field.value;
	      }
	      var fieldMeta = this.fieldsMeta[name];
	      return fieldMeta && fieldMeta.initialValue;
	    }
	  }, {
	    key: 'getValueFromFields',
	    value: function getValueFromFields(name, fields) {
	      var _this2 = this;
	
	      var fieldsMeta = this.fieldsMeta;
	
	      if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	        var ret = {};
	        Object.keys(fieldsMeta).forEach(function (fieldKey) {
	          var nameIfNested = (0, _utils.getNameIfNested)(fieldKey);
	          if (nameIfNested.name === name && nameIfNested.isNested) {
	            (0, _set2['default'])(ret, fieldKey, _this2.getValueFromFieldsInternal(fieldKey, fields));
	          }
	        });
	        return ret[name];
	      }
	      return this.getValueFromFieldsInternal(name, fields);
	    }
	  }, {
	    key: 'getValidFieldsName',
	    value: function getValidFieldsName() {
	      var fieldsMeta = this.fieldsMeta;
	      return fieldsMeta ? Object.keys(fieldsMeta).filter(function (name) {
	        return !fieldsMeta[name].hidden;
	      }) : [];
	    }
	  }, {
	    key: 'getFieldValuePropValue',
	    value: function getFieldValuePropValue(fieldMeta) {
	      var exclusive = fieldMeta.exclusive,
	          leadingName = fieldMeta.leadingName,
	          name = fieldMeta.name,
	          getValueProps = fieldMeta.getValueProps,
	          valuePropName = fieldMeta.valuePropName;
	      var fieldsMeta = this.fieldsMeta;
	
	      var field = exclusive ? this.getField(leadingName) : this.getField(name);
	      var fieldValue = atom;
	      if (field && 'value' in field) {
	        fieldValue = field.value;
	      }
	      if (fieldValue === atom) {
	        fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
	      }
	      if (getValueProps) {
	        return getValueProps(fieldValue);
	      }
	      return (0, _defineProperty3['default'])({}, valuePropName, fieldValue);
	    }
	  }, {
	    key: 'getField',
	    value: function getField(name) {
	      return (0, _extends3['default'])({}, this.fields[name], {
	        name: name
	      });
	    }
	  }, {
	    key: 'getFieldMember',
	    value: function getFieldMember(name, member) {
	      return this.getField(name)[member];
	    }
	  }, {
	    key: 'getFieldMeta',
	    value: function getFieldMeta(name) {
	      if (!this.fieldsMeta[name]) {
	        this.fieldsMeta[name] = {};
	      }
	      return this.fieldsMeta[name];
	    }
	  }, {
	    key: 'setFieldMeta',
	    value: function setFieldMeta(name, meta) {
	      this.fieldsMeta[name] = meta;
	    }
	  }, {
	    key: 'clearField',
	    value: function clearField(name) {
	      delete this.fields[name];
	      delete this.fieldsMeta[name];
	    }
	  }]);
	  return FieldsStore;
	}();
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.getFieldsValue = function (names) {
	    var fields = names || (0, _utils.flatFieldNames)(_this3.getValidFieldsName());
	    var allValues = {};
	    fields.forEach(function (f) {
	      (0, _set2['default'])(allValues, f, _this3.getFieldValue(f));
	    });
	    return allValues;
	  };
	
	  this.getFieldValue = function (name) {
	    var fields = _this3.fields;
	
	    return _this3.getValueFromFields(name, fields);
	  };
	
	  this.getFieldsError = function (names) {
	    var fields = names || (0, _utils.flatFieldNames)(_this3.getValidFieldsName());
	    var allErrors = {};
	    fields.forEach(function (f) {
	      (0, _set2['default'])(allErrors, f, _this3.getFieldError(f));
	    });
	    return allErrors;
	  };
	
	  this.getFieldError = function (name) {
	    return (0, _utils.getErrorStrs)(_this3.getFieldMember(name, 'errors'));
	  };
	
	  this.setFieldsInitialValue = function (initialValues) {
	    var fieldsMeta = _this3.fieldsMeta;
	    var virtualPaths = (0, _utils.getVirtualPaths)(fieldsMeta);
	    Object.keys(initialValues).forEach(function (name) {
	      if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	        for (var i = 0, len = virtualPaths[name].length; i < len; i++) {
	          var path = virtualPaths[name][i];
	          if ((0, _has2['default'])(initialValues, path)) {
	            fieldsMeta[path] = (0, _extends3['default'])({}, fieldsMeta[path], {
	              initialValue: (0, _get2['default'])(initialValues, path)
	            });
	          }
	        }
	      } else if (fieldsMeta[name]) {
	        fieldsMeta[name] = (0, _extends3['default'])({}, fieldsMeta[name], {
	          initialValue: initialValues[name]
	        });
	      }
	    });
	  };
	
	  this.isFieldValidating = function (name) {
	    return _this3.getFieldMember(name, 'validating');
	  };
	
	  this.isFieldsValidating = function (ns) {
	    var names = ns || _this3.getValidFieldsName();
	    return names.some(function (n) {
	      return _this3.isFieldValidating(n);
	    });
	  };
	
	  this.isFieldTouched = function (name) {
	    return _this3.getFieldMember(name, 'touched');
	  };
	
	  this.isFieldsTouched = function (ns) {
	    var names = ns || _this3.getValidFieldsName();
	    return names.some(function (n) {
	      return _this3.isFieldTouched(n);
	    });
	  };
	};
	
	function createFieldsStore(fields) {
	  return new FieldsStore(fields);
	}
	module.exports = exports['default'];

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(394);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.argumentContainer = argumentContainer;
	exports.getValueFromEvent = getValueFromEvent;
	exports.getErrorStrs = getErrorStrs;
	exports.isEmptyObject = isEmptyObject;
	exports.flattenArray = flattenArray;
	exports.mirror = mirror;
	exports.hasRules = hasRules;
	exports.startsWith = startsWith;
	exports.getParams = getParams;
	exports.getNameIfNested = getNameIfNested;
	exports.flatFieldNames = flatFieldNames;
	exports.clearVirtualField = clearVirtualField;
	exports.getVirtualPaths = getVirtualPaths;
	exports.normalizeValidateRules = normalizeValidateRules;
	
	var _hoistNonReactStatics = __webpack_require__(592);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
	}
	
	function argumentContainer(Container, WrappedComponent) {
	  /* eslint no-param-reassign:0 */
	  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
	  Container.WrappedComponent = WrappedComponent;
	  return (0, _hoistNonReactStatics2['default'])(Container, WrappedComponent);
	}
	
	function getValueFromEvent(e) {
	  // support custom element
	  if (!e || !e.target) {
	    return e;
	  }
	  var target = e.target;
	
	  return target.type === 'checkbox' ? target.checked : target.value;
	}
	
	function getErrorStrs(errors) {
	  if (errors) {
	    return errors.map(function (e) {
	      if (e && e.message) {
	        return e.message;
	      }
	      return e;
	    });
	  }
	  return errors;
	}
	
	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}
	
	function flattenArray(arr) {
	  return Array.prototype.concat.apply([], arr);
	}
	
	function mirror(obj) {
	  return obj;
	}
	
	function hasRules(validate) {
	  if (validate) {
	    return validate.some(function (item) {
	      return !!item.rules && item.rules.length;
	    });
	  }
	  return false;
	}
	
	function startsWith(str, prefix) {
	  return str.lastIndexOf(prefix, 0) === 0;
	}
	
	function getParams(ns, opt, cb) {
	  var names = ns;
	  var callback = cb;
	  var options = opt;
	  if (cb === undefined) {
	    if (typeof names === 'function') {
	      callback = names;
	      options = {};
	      names = undefined;
	    } else if (Array.isArray(ns)) {
	      if (typeof options === 'function') {
	        callback = options;
	        options = {};
	      } else {
	        options = options || {};
	      }
	    } else {
	      callback = options;
	      options = names || {};
	      names = undefined;
	    }
	  }
	  return {
	    names: names,
	    callback: callback,
	    options: options
	  };
	}
	
	var NAME_KEY_SEP = '.';
	var NAME_INDEX_OPEN_SEP = '[';
	
	function getNameIfNested(str) {
	  var keyIndex = str.indexOf(NAME_KEY_SEP);
	  var arrayIndex = str.indexOf(NAME_INDEX_OPEN_SEP);
	
	  var index = void 0;
	
	  if (keyIndex === -1 && arrayIndex === -1) {
	    return {
	      name: str
	    };
	  } else if (keyIndex === -1) {
	    index = arrayIndex;
	  } else if (arrayIndex === -1) {
	    index = keyIndex;
	  } else {
	    index = Math.min(keyIndex, arrayIndex);
	  }
	
	  return {
	    name: str.slice(0, index),
	    isNested: true
	  };
	}
	
	function flatFieldNames(names) {
	  var ret = {};
	  names.forEach(function (n) {
	    ret[getNameIfNested(n).name] = 1;
	  });
	  return Object.keys(ret);
	}
	
	function clearVirtualField(name, fields, fieldsMeta) {
	  if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	    /* eslint no-loop-func:0 */
	    Object.keys(fields).forEach(function (ok) {
	      if (getNameIfNested(ok).name === name) {
	        delete fields[ok];
	      }
	    });
	  }
	}
	
	function getVirtualPaths(fieldsMeta) {
	  var virtualPaths = {};
	  Object.keys(fieldsMeta).forEach(function (name) {
	    var leadingName = fieldsMeta[name].leadingName;
	    if (leadingName && fieldsMeta[leadingName].virtual) {
	      if (leadingName in virtualPaths) {
	        virtualPaths[leadingName].push(name);
	      } else {
	        virtualPaths[leadingName] = [name];
	      }
	    }
	  });
	  return virtualPaths;
	}
	
	function normalizeValidateRules(validate, rules, validateTrigger) {
	  var validateRules = validate.map(function (item) {
	    var newItem = (0, _extends3['default'])({}, item, {
	      trigger: item.trigger || []
	    });
	    if (typeof newItem.trigger === 'string') {
	      newItem.trigger = [newItem.trigger];
	    }
	    return newItem;
	  });
	  if (rules) {
	    validateRules.push({
	      trigger: validateTrigger ? [].concat(validateTrigger) : [],
	      rules: rules
	    });
	  }
	  return validateRules;
	}

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ })

});
//# sourceMappingURL=form.js.map