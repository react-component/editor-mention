import React from 'react';

class Nav extends React.Component {
    render() {
        const { handleRef, ...props } = this.props;
        return <div {...props} ref={handleRef} />
    }
}

export default Nav;
