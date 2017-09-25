// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention, { toEditorState } from 'rc-editor-mention';
import { EditorState } from 'draft-js';

const originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class MentionEditor extends React.Component {
  state = {
    placement: 'bottom',
    suggestions: originSuggestions,
    defaultValue: null,
    editorState: toEditorState(''),
  };
  togglePlacement = () => {
    this.setState({
      placement: this.state.placement == 'bottom' ? 'top' : 'bottom',
    });
  }
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = originSuggestions.filter(suggestion =>
      suggestion.toLowerCase().indexOf(searchValue) !== -1
    );
    this.setState({
      suggestions: filtered,
    });
  }
  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }
  render() {
    const { suggestions, editorState } = this.state;
    return (
      <div>
        <p> you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai</p>
        <br />
        <br />
        <br />
        <br />
        <br />  
        <p>
          <button onClick={this.togglePlacement.bind(this)}>Toggle placement</button>
        </p>
        <Mention
          style={{ width: 300, height: 200 }}
          ref="mention"
          onSearchChange={this.onSearchChange}
          defaultValue={this.state.defaultValue}
          value={editorState}
          onChange={this.onChange}
          suggestions={suggestions} prefix="@"
          placement={this.state.placement}
        />
      </div>
    );
  }
}

ReactDOM.render(<div>

  <MentionEditor />
</div>, document.getElementById('__react-content'));
