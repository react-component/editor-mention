import { Modifier, EditorState, Entity } from 'draft-js';
import getSearchWord from './getSearchWord';
export default function (editorState, mention, data, mode) {
  const entityMode = mode === 'immutable' ? 'IMMUTABLE' : 'MUTABLE';
  const entityKey = Entity.create('mention', entityMode, data || mention);
  const selection = editorState.getSelection();
  const searchWord = getSearchWord(editorState, selection);
  const { begin, end } = searchWord;
  const replacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    selection.merge({
      anchorOffset: begin,
      focusOffset: end,
    }),
    mention,
    null,
    entityKey
  );

  const InsertSpaceContent = Modifier.insertText(
    replacedContent,
    replacedContent.getSelectionAfter(),
    ' ',
  );

  const newEditorState = EditorState.push(editorState, InsertSpaceContent, 'insert-mention');
  return EditorState.forceSelection(newEditorState, InsertSpaceContent.getSelectionAfter());
}
