import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>
);
