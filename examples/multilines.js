// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention from 'rc-editor-mention';

const originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

const activeStyle = {
  transform: 'scaleY(1)',
  transition: 'all 0.25s cubic-bezier(.3,1.2,.2,1)',
};

const disableStyle = {
  transform: 'scaleY(0)',
  transition: 'all 0.25s cubic-bezier(.3,1,.2,1)',
};

const MentionEditor = React.createClass({
  getInitialState() {
    return {
      suggestions: originSuggestions,
      suggestionStyle: activeStyle,
    };
  },
  onSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filtered = originSuggestions.filter(suggestion =>
      suggestion.toLowerCase().indexOf(searchValue) !== -1
    );
    this.setState({
      suggestions: filtered,
      suggestionStyle: filtered.length ? activeStyle : disableStyle,
    });
  },

  render() {
    const { suggestions, suggestionStyle } = this.state;
    return (<Mention
      style={{ width: 300 }}
      multiLines={true}
      onSearchChange={this.onSearchChange}
      suggestions={suggestions}
      suggestionStyle={suggestionStyle}
      prefixCls="rc-editor-mention"
      prefix="@"
    />);
  },
});

ReactDOM.render(<div>
  <p> you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai</p>
  <p> multilines mode </p>
  <MentionEditor />
  </div>, document.getElementById('__react-content'));
