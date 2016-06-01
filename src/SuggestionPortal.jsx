import React from 'react';
import { ACTIVE_SUGGESTION, INACTIVE_SUGGESTION, UPDATE_SUGGESTION } from './actions';

export default class SuggestionPortal extends React.Component {
  static propTypes = {
    offsetKey: React.PropTypes.any,
    mentionStore: React.PropTypes.object,
    decoratedText: React.PropTypes.string,
    children: React.PropTypes.any,
  }
  componentWillMount() {
    const { offsetKey, mentionStore } = this.props;
    mentionStore.dispatch({ type: ACTIVE_SUGGESTION, offsetKey });
  }
  componentDidMount() {
    this.updatePortalPosition();
  }
  componentDidUpdate() {
    this.updatePortalPosition();
  }
  componentWillUnmount() {
    const { offsetKey, mentionStore } = this.props;
    mentionStore.dispatch({ type: INACTIVE_SUGGESTION, offsetKey });
  }
  updatePortalPosition() {
    const { offsetKey, mentionStore } = this.props;
    const element = this.refs.searchPortal;

    mentionStore.dispatch({
      type: UPDATE_SUGGESTION,
      offsetKey,
      position: element.getBoundingClientRect(),
    });
  }
  render() {
    return <span ref="searchPortal">{this.props.children}</span>;
  }
}
