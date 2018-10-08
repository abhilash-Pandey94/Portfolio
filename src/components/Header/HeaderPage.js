import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Header, Navigation} from 'react-mdl';

const HeaderPage =(props)=> {
        return (
            <div >
                <Header className="headers" title={
                    <span>
                        <span style={{ color: '/ddd' }}>
                            <Link to="/" style={{ "textDecoration": "none", "color": "white" }}>
                            <b><i>Abhilash Pandey</i></b></Link> / </span>
                        <strong>Portfolio</strong>
                    </span>}>
                    <Navigation>
                        <Link to="/resume"><button id="btn"> Resume</button></Link>
                        <Link to="/about"><button id="btn"> About Me</button></Link>
                        <Link to="/project"> <button id="btn">Projects</button></Link>
                        <Link to="/contact"><button id="btn">Contact</button></Link>
                    </Navigation>
                </Header>
            </div>
        );
}

export default HeaderPage;
