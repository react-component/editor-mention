// export this package's api
import Mention from './Mention';
import toString from './exportContent';
import Nav from './Nav';
Mention.Nav = Nav;
Mention.toString = toString;
export {
  Nav,
  toString,
};
export default Mention;
