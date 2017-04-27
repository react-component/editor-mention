// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention, { toString, getMentions } from 'rc-editor-mention';

const originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class MentionEditor extends React.Component {
  state = {
    suggestions: originSuggestions,
  };
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = originSuggestions.filter(suggestion =>
      suggestion.toLowerCase().indexOf(searchValue) !== -1
    );
    console.log('>> onSearchChange', searchValue, filtered);
    this.setState({
      suggestions: filtered,
    });
  }
  onSelect = (value, suggestion) => {
    console.log('>> onSelect', value, suggestion);
  }
  onChange = (editorState) => {
    console.log('>> mentionChange',
      toString(editorState, { encode: true }),
      getMentions(editorState)
    );
  }
  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        style={{ width: 300 }}
        onSearchChange={this.onSearchChange}
        onChange={this.onChange}
        placeholder=" @ 某人 "
        onFocus={(e) => console.log('focus', e)}
        onBlur={(e) => console.log('blur', e)}
        suggestions={suggestions}
        prefix="@"
        onSelect={this.onSelect}
        mode="immutable"
      />
    );
  }
}

ReactDOM.render(<div>
  <p> you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai</p>
  <MentionEditor />
</div>, document.getElementById('__react-content'));
