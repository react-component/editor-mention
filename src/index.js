// export this package's api
import Mention from './Mention';
import toString from './exportContent';
import Nav from './Nav';
import { toEditorState } from 'rc-editor-core';
Mention.Nav = Nav;
Mention.toString = toString;
Mention.toEditorState = toEditorState;
export {
  Nav,
  toString,
  toEditorState,
};
export default Mention;
