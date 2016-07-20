// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention, { toString, getMentions, toEditorState } from 'rc-editor-mention';

const originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

const Wrapper = React.createClass({
  render() {
    return <MentionEditor />;
  }
});

const MentionEditor = React.createClass({
  getInitialState() {
    return {
      suggestions: originSuggestions,
    };
  },
  onSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filtered = originSuggestions.filter(suggestion =>
      suggestion.toLowerCase().indexOf(searchValue) !== -1
    );
    this.setState({
      suggestions: filtered,
    });
  },
  onChange(editorState) {
    console.log('>> mentionChange', toString(editorState), getMentions(editorState));
  },
  render() {
    const { suggestions } = this.state;
    return (<Mention style={{ width: 300 }}
      onSearchChange={this.onSearchChange}
      onChange={this.onChange}
      defaultValue={toEditorState(' @afc163 ')}
      placeholder=" @ 某人 "
      suggestions={suggestions} prefix="@"
    />);
  },
});

ReactDOM.render(<div>
  <p> you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai</p>
  <Wrapper />
  </div>, document.getElementById('__react-content'));
