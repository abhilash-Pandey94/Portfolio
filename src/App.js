import React, { Component } from 'react';
import './App.css';
//import HeaderPage & MainPage Route Component
import HeaderPage from './components/Header/HeaderPage';
import MainPage from './components/routes';

import { Layout, Content } from 'react-mdl';

class Portfolio extends Component {
    render() {
        return (
            <div className="app" >
                <div style={{ height: '300px' }}>
                    <Layout fixedHeader>
                        <HeaderPage />
                        <Content className="homepage">
                            <div />
                            <MainPage />
                        </Content>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default Portfolio;
