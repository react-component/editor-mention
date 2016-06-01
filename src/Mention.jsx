import React from 'react';
import EditorCore from 'rc-editor-core';
import createMention from './createMention';
import exportContent from './exportContent';
import classnames from 'classnames';

/* eslint:ignore */
console.error = (function() {
  var error = console.error;
  return function(exception) {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
      error.apply(console, arguments)
    }
  }
})();
class Mention extends React.Component {
  static propTypes = {
    suggestions: React.PropTypes.array,
    prefix: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    tag: React.PropTypes.element,
    style: React.PropTypes.object,
    onSearchChange: React.PropTypes.func,
    mode: React.PropTypes.string,
    multiLines: React.PropTypes.bool,
    suggestionStyle: React.PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.state = {
      suggestions: props.suggestions,
    };
    this.mention = createMention({
      prefix: props.prefix,
      tag: props.tag,
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
    console.log('>> exportContent', exportContent(editorState));
  }
  render() {
    const { prefixCls, style, prefix, mode, multiLines, suggestionStyle } = this.props;
    const { suggestions } = this.state;
    const { Suggestions } = this;
    const editorClass = classnames({
      [`${prefixCls}-wrapper`]: true,
      multilines: multiLines,
    });
    return (<div className={editorClass} style={style} >
      <EditorCore
        prefixCls={prefixCls}
        multiLines={multiLines}
        plugins={this.plugins}
        onChange={this.onEditorChange}
      />
      <Suggestions
        mode={mode}
        prefix={prefix}
        prefixCls={prefixCls}
        style={suggestionStyle}
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
  suggestionStyle: {},
};

export default Mention;
