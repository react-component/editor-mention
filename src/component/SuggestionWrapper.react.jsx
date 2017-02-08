import React from 'react';
import ReactDOM from 'react-dom';

export default class SuggestionWrapper extends React.Component {
  componentDidMount() {
    this.renderComponent();
  }
  componentDidUpdate() {
    this.renderComponent();
  }
  renderComponent() {
    const instance = this.props.children;
    const ready = this.props.renderReady;
    ReactDOM.unstable_renderSubtreeIntoContainer(this,
      instance, this.props.container,
      function callback() {
        if (ready) {
          ready.call(this);
        }
      });
  }
  render() {
    return null;
  }
}

SuggestionWrapper.propTypes = {
  children: React.PropTypes.any,
  renderReady: React.PropTypes.func,
  container: React.PropTypes.any,
};
