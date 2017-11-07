import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class SuggestionWrapper extends React.Component {
  componentDidMount() {
    this.props.renderReady();
  }
  componentDidUpdate() {
    this.props.renderReady();
  }
  render() {
    const instance = this.props.children;
    return ReactDOM.createPortal(instance, this.props.container);
  }
}

SuggestionWrapper.propTypes = {
  children: PropTypes.any,
  renderReady: PropTypes.func,
  container: PropTypes.any,
};
