// use jsx to render html, do not modify simple.html

import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention from 'rc-editor-mention';
const Nav = Mention.Nav;

const MentionEditor = React.createClass({
  getInitialState() {
    return {
      contributors: [],
      suggestions: []
    };
  },
  componentDidMount() {
    fetch('./contributors.json')
      .then( resp => resp.json())
      .then( contributors => this.setState({ contributors }));
  },
  onSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filtered = this.state.contributors.filter(contributor =>
      contributor.login.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map( suggestion => <Nav style={{height: 34}} value={suggestion.login}>
        <img src={suggestion.avatar_url} className="avatar"/>
        <span className="meta">{suggestion.login}</span>
        <span style={{float: 'right', color: 'green'}}>{suggestion.contributions}</span>
      </Nav>);
    this.setState({
      suggestions,
    });
  },
  render() {
    const { suggestions } = this.state;
    return <div>
      <Mention style={{width: 300}} onSearchChange={this.onSearchChange} suggestions={suggestions} />
    </div>
  }
});

ReactDOM.render(<div>
  <p> you can mention one of ant-design <a href="https://github.com/ant-design/ant-design/graphs/contributors" target="blank">contributors</a></p>
  <MentionEditor />
</div>, document.getElementById('__react-content'));
