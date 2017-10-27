import React, { Component } from 'react';

class Nav extends Component {
    render() {
        const { handleRef, ...props } = this.props;
        return <div {...props} ref={handleRef} />
    }
}

export default Nav;
