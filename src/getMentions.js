import { Entity } from 'draft-js';
export default function getMentions(editorState) {
  const contentState = editorState.getCurrentContent();
  const entities = [];
  
  contentState.getBlockMap().forEach((block, blockKey) => {
    const blockText = block.getText();
    block.findEntityRanges(
      character => character.getEntity() !== null,
      (start, end) => {
        // Stringify to maintain order of otherwise numeric keys.
        const entityKey = block.getEntityAt(start);
        const entity = Entity.get(entityKey);
        if (entity.getType() === 'mention') {
          entities.push(blockText.substring(start, end));
        }
      }
    );
  });
  return entities;
}
