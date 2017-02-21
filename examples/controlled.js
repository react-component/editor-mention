// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention, { toEditorState } from 'rc-editor-mention';
import { EditorState } from 'draft-js';

const originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

const MentionEditor = React.createClass({
  getInitialState() {
    return {
      suggestions: originSuggestions,
      defaultValue: toEditorState('hello @afc163'),
      editorState: EditorState.createEmpty(),
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
    this.setState({
      editorState,
    });
  },
  reset() {
    this.setState({
      editorState: this.state.defaultValue,
    });
  },
  render() {
    const { suggestions, editorState } = this.state;
    return (<div>
      <button onClick={this.reset}> reset </button>
      <Mention
        style={{ width: 300, height: 200 }}
        ref="mention"
        onSearchChange={this.onSearchChange}
        defaultValue={this.state.defaultValue}
        value={editorState}
        onChange={this.onChange}
        suggestions={suggestions} prefix="@"
      /></div>);
  },
});

ReactDOM.render(<div>
  <p> you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai</p>
  <MentionEditor />
</div>, document.getElementById('__react-content'));
