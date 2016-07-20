var regex = new RegExp(`(\\s|^)@[^\\s]*`, 'g');

export default function getMentions(editorState) {
  const contentState = editorState.getCurrentContent();
  const entities = [];
  contentState.getBlockMap().forEach(block => {
    const blockText = block.getText();
    let matchArr;
    while ((matchArr = regex.exec(blockText)) !== null) { // eslint-disable-line
      entities.push(matchArr[0].trim());
    }
  });
  return entities;
}
