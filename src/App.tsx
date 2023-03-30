import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { GlobalStyle, ResetStyle } from './styles/globalStyle';

function App() {
    return (
        <div className="App">
            <ResetStyle />
            <GlobalStyle />
            <AppRouter />
        </div>
    );
}

export default App;
