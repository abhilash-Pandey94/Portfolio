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
                    <Layout fixedHeader>
                        <HeaderPage />
                        <Content >
                              <MainPage />
                        </Content>
                    </Layout>
            </div>
        );
    }
}

export default Portfolio;
