import React from 'react';

class Nav extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (<div {...this.props}>{this.props.children}</div>);
  }
}

export default Nav;
