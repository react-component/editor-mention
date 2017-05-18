import React from 'react';
import PropTypes from 'prop-types';

export default class MentionContent extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return <span style={{ backgroundColor: '#e6f3ff' }}>{this.props.children}</span>;
  }
}
