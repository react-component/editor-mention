import React from 'react';
import { EditorState, Modifier } from 'draft-js';
import MentionContent from '../component/MentionContent.react';
import Suggestions from '../component/Suggestions.react';
import mentionStore from '../model/mentionStore';
import exportContent from '../utils/exportContent';
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

function mentionContentStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey && contentState.getEntity(entityKey).getType() === 'mention';
  }, callback);
}

function mentionTriggerStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey && contentState.getEntity(entityKey).getType() === 'trigger';
  }, callback);
}

export default function createImmutableMention(config = {}) {
  const callbacks = {
    onChange: noop,
    onUpArrow: noop,
    onDownArrow: noop,
    getEditorState: noop,
    setEditorState: noop,
    handleReturn: noop,
    onBlur: noop,
  };

  function onChange(editorState) {
    const selectionState = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    const anchorKey = selectionState.getAnchorKey();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);

    console.log('>> entity', currentContentBlock.getEntityAt(anchorKey));
    if (selectionState.isCollapsed()) {
      currentContent.createEntity('trigger', 'MUTABLE');

      const end = selectionState.getEndOffset();
      const start = end - 1;
      const selectedText = currentContentBlock.getText().slice(start, end);
      if (selectedText === '@') {
        const updatedContent = Modifier.replaceText(
          currentContent,
          selectionState.merge({
            anchorOffset: start,
            focusOffset: end,
          }),
          '@',
          null,
          currentContent.getLastCreatedEntityKey()
        );
        return EditorState.push(editorState, updatedContent, 'insert-mention');
      }
    }

    return editorState;
  }

  const componentProps = {
    callbacks,
    mentionStore,
  };
  return {
    name: 'mention',
    Suggestions: (props) => <Suggestions {...props} {...componentProps}
      store={mentionStore}
    />,
    decorators:[{
      strategy: mentionTriggerStrategy,
      component: (props) => <span {...props} style={{color: 'red'}}/>
    },{
      strategy: mentionContentStrategy,
      component: (props) => <MentionContentComponent tag={tag} {...props} callbacks={callbacks} />,
    }],
    onChange: (editorState) => {
      const updatedEditorState = onChange(editorState);
      return callbacks.onChange ? callbacks.onChange(updatedEditorState) : updatedEditorState;
    },
    callbacks,
    export: exportContent,
  };
}