import React from 'react';

export default class MentionContent extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    console.log('>> MentionContent', this.props);
    return <span style={{ backgroundColor: '#e6f3ff' }}>{this.props.children}</span>;
  }
}
