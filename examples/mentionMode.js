// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention from 'rc-editor-mention';

const originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class MentionEditor extends React.Component {
  state = {
    suggestions: originSuggestions,
    editorMode: 'immutable',
  };
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = originSuggestions.filter(suggestion =>
      suggestion.toLowerCase().indexOf(searchValue) !== -1
    );
    this.setState({
      suggestions: filtered,
    });
  }
  selectChange = (ev) => {
    const value = ev.target.value;
    this.setState({
      editorMode: value,
    });
  }
  render() {
    const { suggestions, editorMode } = this.state;
    return (
      <div>
        <h4>完整标签模式时, 在 tag 后边按退格键,将会删除整个标签。而在自由模式时,按退格键,则会重新编辑标签。</h4>
        <p>切换标签模式只对之后添加的 tag 有效。</p>
        <select onChange={this.selectChange} value={editorMode}>
          <option value="immutable">完整标签模式</option>
          <option value="mutable">自由模式</option>
        </select>
        <Mention style={{ width: 300 }}
          onSearchChange={this.onSearchChange}
          suggestions={suggestions}
          mode={editorMode}
          prefix="@"
        />
      </div>
    );
  }
}

ReactDOM.render(<div>
  <p> you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai</p>
  <MentionEditor />
</div>, document.getElementById('__react-content'));
