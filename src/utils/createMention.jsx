import React from 'react';
import Suggestions from '../component/Suggestions.react';
import SuggestionPortal from '../component/SuggestionPortal.react';
import MentionContent from '../component/MentionContent.react';
import mentionStore from '../model/mentionStore';
import exportContent from './exportContent';

function findWithRegex(regex, contentBlock, callback) {
  // Get the text from the contentBlock
  const text = contentBlock.getText();
  let matchArr;
  let start; // eslint-disable-line
  // Go through all matches in the text and return the indizes to the callback
  while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function mentionContentStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey && contentState.getEntity(entityKey).getType() === 'mention';
  }, callback);
}

function noop() {}

class MentionContentComponent extends React.Component {
  static propTypes = {
    entityKey: React.PropTypes.element,
    callbacks: React.PropTypes.func,
    tag: React.PropTypes.element,
  }
  render() {
    const { entityKey, tag, callbacks } = this.props;
    const contentState = callbacks.getEditorState().getCurrentContent();
    const data = contentState.getEntity(entityKey).getData();
    return React.createElement(tag, { ...this.props, data });
  }
}

export default function createMention(config = {}) {
  const callbacks = {
    onChange: noop,
    onUpArrow: noop,
    onDownArrow: noop,
    getEditorState: noop,
    setEditorState: noop,
    handleReturn: noop,
    onBlur: noop,
  };
  const componentProps = {
    callbacks,
    mentionStore,
  };
  // merge ['@', '#'] to  '@|#', and replace $ -> \\$
  const prefixArray = Array.isArray(config.prefix) ? config.prefix : [config.prefix];
  let prefix = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');

  if (prefixArray.length > 1) {
    prefix = `[${prefix}]`;
  }
  const suggestionRegex = new RegExp(`(\\s|^)(${prefix})[^\\s]*`, 'g');

  const tag = config.tag || MentionContent;
  const decorators = [{
    strategy: (contentBlock, callback) => {
      findWithRegex(suggestionRegex, contentBlock, callback);
    },
    component: (props) => <SuggestionPortal
      {...props}
      {...componentProps}
      suggestionRegex={suggestionRegex}
    />,
  }];
  if (config.mode !== 'immutable') {
    decorators.unshift({
      strategy: mentionContentStrategy,
      component: (props) => <MentionContentComponent tag={tag} {...props} callbacks={callbacks} />,
    });
  }

  return {
    name: 'mention',
    Suggestions: (props) => <Suggestions {...props} {...componentProps}
      store={mentionStore}
    />,
    decorators,
    onChange: (editorState) => {
      return callbacks.onChange ? callbacks.onChange(editorState) : editorState;
    },
    callbacks,
    export: exportContent,
  };
}
