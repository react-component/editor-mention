import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (<div {...this.props}>{this.props.children}</div>);
  }
}

export default Nav;
