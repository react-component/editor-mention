// export this package's api
import Mention from './Mention';
import toString from './exportContent';
import getMentions from './getMentions';
import Nav from './Nav';
import { toEditorState } from 'rc-editor-core';
Mention.Nav = Nav;
Mention.toString = toString;
Mention.toEditorState = toEditorState;
Mention.getMentions = getMentions;
export {
  Nav,
  toString,
  toEditorState,
  getMentions,
};
export default Mention;
