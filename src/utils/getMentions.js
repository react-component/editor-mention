import getRegExp from './getRegExp';

export default function getMentions(editorState, prefix = '@') {
  const regex = getRegExp(prefix);
  const contentState = editorState.getCurrentContent();
  const entities = [];
  contentState.getBlockMap().forEach((block) => {
    const blockText = block.getText();
    let matchArr;
    while ((matchArr = regex.exec(blockText)) !== null) { // eslint-disable-line
      entities.push(matchArr[0].trim());
    }
  });
  return entities;
}
