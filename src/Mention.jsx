import React from 'react';
import { EditorCore, toEditorState } from 'rc-editor-core';
import createMention from './createMention';
import exportContent from './exportContent';
import classnames from 'classnames';

/*eslint-disable*/
console.error = (function() {
  var error = console.error;
  return function(exception) {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
      error.apply(console, arguments)
    }
  }
})();
/*eslint-enable*/

class Mention extends React.Component {
  static propTypes = {
    value: React.PropTypes.object,
    suggestions: React.PropTypes.array,
    prefix: React.PropTypes.string,
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
  }
  static controlledMode = false;
  constructor(props) {
    super(props);
    this.state = {
      suggestions: props.suggestions,
      value: props.value,
    };
    this.mention = createMention({
      prefix: props.prefix,
      tag: props.tag,
      mode: props.mode,
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
    const { suggestions, value } = nextProps;
    this.setState({
      suggestions,
      value,
    });
  }
  onEditorChange = (editorState) => {
    if (this.props.onChange) {
      this.props.onChange(editorState, exportContent(editorState));
    }
  }
  onFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }
  onBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }
  reset = () => {
    this.refs.editor.Reset();
  }
  render() {
    const { prefixCls, style, prefix, tag, mode, multiLines, suggestionStyle, placeholder, defaultValue, className, notFoundContent} = this.props;
    const { suggestions } = this.state;
    const { Suggestions } = this;
    const editorClass = classnames(className, {
      [`${prefixCls}-wrapper`]: true,
      multilines: multiLines,
    });
    const editorCoreProps = this.controlledMode ? { value : this.state.value }: {};
    const defaultValueState = typeof defaultValue === 'string' ? toEditorState(defaultValue) : defaultValue;
    return (<div className={editorClass} style={style} ref="wrapper">
      <EditorCore
        ref="editor"
        prefixCls={prefixCls}
        style={style}
        multiLines={multiLines}
        plugins={this.plugins}
        defaultValue={defaultValueState}
        placeholder={placeholder}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onEditorChange}
        {...editorCoreProps}
      >
        <Suggestions
          mode={tag ? 'immutable': 'mutable'}
          prefix={prefix}
          prefixCls={prefixCls}
          style={suggestionStyle}
          notFoundContent={notFoundContent}
          suggestions={suggestions}
          onSearchChange={this.props.onSearchChange}
          onSelect={this.props.onSelect}
        />
      </EditorCore>
    </div>);
  }
}

Mention.defaultProps = {
  prefixCls: 'rc-editor-mention',
  prefix: '@',
  mode: 'immutable',
  multiLines: false,
  className: '',
  suggestionStyle: {},
  notFoundContent: '无法找到',
  position: 'absolute',
};

export default Mention;
