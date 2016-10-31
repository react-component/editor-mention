import React from 'react';
import getOffset from './utils/getOffset';

export default class SuggestionPortal extends React.Component {
  static propTypes = {
    offsetKey: React.PropTypes.any,
    mentionStore: React.PropTypes.object,
    decoratedText: React.PropTypes.string,
    children: React.PropTypes.any,
    callbacks: React.PropTypes.any,
  }
  componentWillMount() {
    this.updatePortalPosition(this.props);
    this.props.callbacks.setEditorState(this.props.callbacks.getEditorState());
  }
  componentWillReceiveProps(nextProps) {
    this.updatePortalPosition(nextProps);
  }
  componentWillUnmount() {
    const { offsetKey, mentionStore } = this.props;
    mentionStore.inActiveSuggestion({ offsetKey });
  }
  updatePortalPosition(props) {
    const { offsetKey, mentionStore } = props;
    mentionStore.updateSuggestion({
      offsetKey,
      position: () => {
        const element = this.refs.searchPortal;
        const rect = getOffset(element);
        return {
          left: rect.left,
          top: rect.top,
          width: element.offsetWidth,
          height: element.offsetHeight,
        };
      },
    });
  }
  render() {
    return <span ref="searchPortal">{this.props.children}</span>;
  }
}
