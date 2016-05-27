import React from 'react';

class Nav extends React.Component {
  render() {
    return (<div {...this.props}>{this.props.children}</div>);
  }
}

export default Nav;
