import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Header, Navigation, Drawer } from 'react-mdl';

class HeaderPage extends Component {
    render() {
        return (
            <div >
                <Header className="headers" title={
                    <span>
                        <span style={{ color: '/ddd' }}>
                            <Link to="/" style={{ "textDecoration": "none", "color": "white" }}><b><i>Abhilash Pandey</i></b></Link> / </span>
                        <strong>Portfolio</strong>
                    </span>}>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/project">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
            </div>
        );
    }
}

export default HeaderPage;
