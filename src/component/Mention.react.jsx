import React from 'react';
import classnames from 'classnames';
import { EditorCore, toEditorState } from 'rc-editor-core';
import { EditorState } from 'draft-js';

import createMention from '../utils/createMention';
import exportContent from '../utils/exportContent';

class Mention extends React.Component {
  static propTypes = {
    value: React.PropTypes.object,
    suggestions: React.PropTypes.array,
    prefix: React.PropTypes.oneOfType(
      [React.PropTypes.string, React.PropTypes.arrayOf(React.PropTypes.string)]
    ),
    prefixCls: React.PropTypes.string,
    tag: React.PropTypes.element,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    onSearchChange: React.PropTypes.func,
    onChange: React.PropTypes.func,
    mode: React.PropTypes.string,
    multiLines: React.PropTypes.bool,
    suggestionStyle: React.PropTypes.object,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.object,
    notFoundContent: React.PropTypes.any,
    position: React.PropTypes.string,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    getSuggestionContainer: React.PropTypes.func,
    noRedup: React.PropTypes.bool,
    mentionStyle: React.PropTypes.object,
    readOnly: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      suggestions: props.suggestions,
      value: props.value,
    };

    this.mention = createMention({
      prefix: this.getPrefix(props),
      tag: props.tag,
      mode: props.mode,
      mentionStyle: props.mentionStyle,
    });
    this.Suggestions = this.mention.Suggestions;
    this.plugins = [this.mention];

    if (typeof props.defaultValue === 'string') {
      console.warn('The property `defaultValue` now allow `EditorState` only, see http://react-component.github.io/editor-mention/examples/defaultValue.html ');
    }
    if (props.value !== undefined) {
      this.controlledMode = true;
    }
  }
  componentWillReceiveProps(nextProps) {
    const { suggestions } = nextProps;
    let value = nextProps.value;
    if (this._selection) {
      value = EditorState.acceptSelection(
        value,
        this._selection,
      );
    }
    this.setState({
      suggestions,
      value,
    });
  }
  onEditorChange = (editorState) => {
    this._selection = editorState.getSelection();
    const decorator = editorState.getDecorator();
    if (this.props.onChange) {
      this.props.onChange(
        EditorState.createWithContent(
          editorState.getCurrentContent(),
          decorator
        ), exportContent(editorState));
    }
  }
  onFocus = (e) => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }
  onBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
  getPrefix(props = this.props) {
    return Array.isArray(props.prefix) ? props.prefix : [props.prefix];
  }

  static controlledMode = false;

  reset = () => {
    /*eslint-disable*/
    this._editor.Reset();
    /*eslint-enable*/
  }
  render() {
    const {
      prefixCls, style, tag, multiLines,
      suggestionStyle, placeholder, defaultValue, className, notFoundContent,
      getSuggestionContainer, readOnly,
    } = this.props;
    const { suggestions } = this.state;
    const { Suggestions } = this;
    const editorClass = classnames(className, {
      [`${prefixCls}-wrapper`]: true,
      multilines: multiLines,
    });
    const editorCoreProps = this.controlledMode ? { value: this.state.value } : {};
    const defaultValueState =
      typeof defaultValue === 'string' ? toEditorState(defaultValue) : defaultValue;
    return (<div className={editorClass} style={style} ref={wrapper => this._wrapper = wrapper}>
      <EditorCore
        ref={editor => this._editor = editor}
        prefixCls={prefixCls}
        style={style}
        multiLines={multiLines}
        plugins={this.plugins}
        defaultValue={defaultValueState}
        placeholder={placeholder}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onEditorChange}
        readOnly={readOnly}
        {...editorCoreProps}
      >
        <Suggestions
          mode={tag ? 'immutable' : 'mutable'}
          prefix={this.getPrefix()}
          prefixCls={prefixCls}
          style={suggestionStyle}
          notFoundContent={notFoundContent}
          suggestions={suggestions}
          getSuggestionContainer={getSuggestionContainer ?
            () => getSuggestionContainer(this._wrapper) :
            null
          }
          onSearchChange={this.props.onSearchChange}
          onSelect={this.props.onSelect}
          noRedup={this.props.noRedup}
        />
      </EditorCore>
    </div>);
  }
}

Mention.defaultProps = {
  prefixCls: 'rc-editor-mention',
  prefix: '@',
  mode: 'immutable',
  suggestions: [],
  multiLines: false,
  className: '',
  suggestionStyle: {},
  notFoundContent: '无法找到',
  position: 'absolute',
  mentionStyle: {},
  readOnly: false,
};

export default Mention;
