import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Portfolio />
    </BrowserRouter>    
        , document.getElementById('root'));

