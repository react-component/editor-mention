import React from 'react';
import { ACTIVE_SUGGESTION, INACTIVE_SUGGESTION} from './actions';

export default class SuggestionPortal extends React.Component {
  componentWillMount() {
    const { offsetKey, mentionStore, decoratedText } = this.props;
    mentionStore.dispatch({ type: ACTIVE_SUGGESTION, offsetKey});
  }
  componentWillUnmount() {
    const { offsetKey, mentionStore, decoratedText} = this.props;
    mentionStore.dispatch({ type: INACTIVE_SUGGESTION , offsetKey});
  }
  render() {
    return <span ref="searchPortal">{this.props.children}</span>
  }
}