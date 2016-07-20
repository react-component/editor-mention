import React from 'react';
import Suggestions from './Suggestions';
import SuggestionPortal from './SuggestionPortal';
import MentionContent from './MentionContent';
import mentionStore from './mentionStore';
import exportContent from './exportContent';
import { Entity } from 'draft-js';

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

function mentionContentStrategy(contentBlock, callback) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey && Entity.get(entityKey).getType() === 'mention';
  }, callback);
}

function noop() {}

class MentionContentComponent extends React.Component {
  static propTypes = {
    entityKey: React.PropTypes.element,
    tag: React.PropTypes.element,
  }
  render() {
    const { entityKey, tag } = this.props;
    const data = Entity.get(entityKey).getData();
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
  
  const suggestionRegex = new RegExp(`(\\s|^)${config.prefix}[^\\s]*`, 'g');

  const tag = config.tag || MentionContent;
  const decorators = [{
    strategy: (contentBlock, callback) => {
      findWithRegex(suggestionRegex, contentBlock, callback);
    },
    component: (props) => <SuggestionPortal {...props} {...componentProps} />
  }];
  if (config.mode !== 'immutable') {
    decorators.unshift({
      strategy: mentionContentStrategy,
      component: (props) => <MentionContentComponent tag={tag} {...props} />,
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
