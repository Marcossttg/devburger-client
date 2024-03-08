import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import GlobalStyle from './styles/resetStyle';

ReactDOM.render(
    <>
        <Users /> <GlobalStyle />
    </>,
    document.getElementById('root'));
