import React from 'react';
import EditorCore from 'rc-editor-core'
import createMention from './createMention';
import exportContent from './exportContent';

console.error = (function() {
  var error = console.error

  return function(exception) {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
      error.apply(console, arguments)
    }
  }
})();

class Mention extends React.Component {
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
      suggestions
    });
  }
  onEditorChange = (editorState) => {
    console.log('>> exportContent', exportContent(editorState));
  }
  render() {
    const { prefixCls, style, prefix} = this.props;
    const { suggestions } = this.state;
    const { Suggestions } = this;
    return (<div className={`${prefixCls}-wrapper`} style={style} >
      <EditorCore plugins={this.plugins} onChange={this.onEditorChange} />
      <Suggestions prefix={prefix} prefixCls={prefixCls} suggestions={suggestions} onSearchChange={this.props.onSearchChange}/>
    </div>);
  }
}

Mention.defaultProps = {
  prefixCls: 'rc-mention',
  prefix: '@'
};

export default Mention;
