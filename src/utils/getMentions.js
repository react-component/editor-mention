
export default function getMentions(editorState, prefix = '@') {
  const escapedPrefix = prefix.replace(/(\$|\^)/g, '\\$1');
  const regex = new RegExp(`(\\s|^)${escapedPrefix}[^\\s]*`, 'g');
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
