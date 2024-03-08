import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import GlobalStyle from './resetStyle';

ReactDOM.render(
    <>
        <Users /> <GlobalStyle />
    </>,
    document.getElementById('root'));
