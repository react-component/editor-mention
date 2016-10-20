// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention, { toString, toEditorState } from 'rc-editor-mention';
const Nav = Mention.Nav;

const defaultValue = `123 13<br />
123 <br />
123 <br />
123 <br />
`;

const MentionEditor = React.createClass({
  getInitialState() {
    return {
      contributors: [],
      suggestions: [],
    };
  },
  componentDidMount() {
    fetch('./contributors.json')
      .then(resp => resp.json())
      .then(contributors => this.setState({ contributors }));
  },
  onSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filtered = this.state.contributors.filter(contributor =>
      contributor.login.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion =>
      <Nav style={{ height: 34 }} value={suggestion.login} key={suggestion.login} >
        <img src={suggestion.avatar_url} className="avatar"/>
        <span className="meta">{suggestion.login}</span>
        <span style={{ float: 'right', color: 'green' }}>{suggestion.contributions}</span>
      </Nav>);
    this.setState({
      suggestions,
    });
  },
  onChange(editorState) {
    console.log(toString(editorState, { encode: true }));
  },
  render() {
    const { suggestions } = this.state;
    return (<div style={{position: 'relative', left: 150}}>
      <Mention
        style={{ width: 300, height: 200 }}
        onSearchChange={this.onSearchChange}
        onChange={this.onChange}
        prefix="$"
        defaultValue={toEditorState(defaultValue)}
        suggestions={suggestions}
        multiLines
      />
    </div>);
  },
});

ReactDOM.render(<div>
  <p> you can mention one of ant-design <a href="https://github.com/ant-design/ant-design/graphs/contributors" target="blank">contributors</a></p>
  <MentionEditor />
</div>, document.getElementById('__react-content'));
