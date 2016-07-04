import React from 'react';
import { EditorCore } from 'rc-editor-core';
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
    defaultValue: React.PropTypes.string,
    notFoundContent: React.PropTypes.any,
    position: React.PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      suggestions: props.suggestions,
    };
    this.mention = createMention({
      prefix: props.prefix,
      tag: props.tag,
      mode: props.mode,
    });
    this.Suggestions = this.mention.Suggestions;
    this.plugins = [this.mention];
  }
  componentWillReceiveProps(nextProps) {
    const { suggestions } = nextProps;
    this.setState({
      suggestions,
    });
  }
  onEditorChange = (editorState) => {
    if (this.props.onChange) {
      this.props.onChange(editorState, exportContent(editorState));
    }
  }
  render() {
    const { prefixCls, style, prefix, tag, mode, multiLines, suggestionStyle, placeholder, defaultValue, className, notFoundContent} = this.props;
    const { suggestions } = this.state;
    const { Suggestions } = this;
    const editorClass = classnames(className, {
      [`${prefixCls}-wrapper`]: true,
      multilines: multiLines,
    });
    return (<div className={editorClass} style={style} >
      <EditorCore
        prefixCls={prefixCls}
        multiLines={multiLines}
        plugins={this.plugins}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={this.onEditorChange}
      />
      <Suggestions
        mode={tag ? 'immutable': 'mutable'}
        prefix={prefix}
        prefixCls={prefixCls}
        style={suggestionStyle}
        notFoundContent={notFoundContent}
        suggestions={suggestions}
        onSearchChange={this.props.onSearchChange}
      />
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
