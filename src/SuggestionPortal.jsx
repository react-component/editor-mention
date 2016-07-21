import React from 'react';
import { EditorState } from 'draft-js';
export default class SuggestionPortal extends React.Component {
  static propTypes = {
    offsetKey: React.PropTypes.any,
    mentionStore: React.PropTypes.object,
    decoratedText: React.PropTypes.string,
    children: React.PropTypes.any,
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
    const { offsetKey, mentionStore, position } = props;
    
    mentionStore.updateSuggestion({
      offsetKey,
      position: () => {
        const element = this.refs.searchPortal;
        return {
          left: element.offsetLeft,
          top: element.offsetTop,
          width: element.offsetWidth,
          height: element.offsetHeight,
        }
      },
    });
  }
  render() {
    return <span ref="searchPortal">{this.props.children}</span>;
  }
}
