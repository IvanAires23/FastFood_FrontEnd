import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResetCss from './Global/ResetCss';
import GlobalCss from './Global/GlobalCss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ResetCss />
        <GlobalCss />
        <App />
    </React.StrictMode>
);
reportWebVitals();
