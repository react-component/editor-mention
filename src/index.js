// export this package's api
import { toEditorState } from 'rc-editor-core';

import Mention from './component/Mention.react';
import toString from './utils/exportContent';
import getMentions from './utils/getMentions';
import Nav from './component/Nav.react';

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
