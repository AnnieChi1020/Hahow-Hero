import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { GlobalStyle, ResetStyle } from './styles/globalStyle';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <ResetStyle />
            <GlobalStyle />
            <AppRouter />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                transition={Flip}
            />
        </div>
    );
}

export default App;
