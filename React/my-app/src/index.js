import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloReact from './HelloReact';
import { HelloReact2 } from './HelloReact2';
import WarningMessage from './WarningMessage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HelloReact />
    <HelloReact2 />
    <WarningMessage message={"Hello Props!"} />
    <WarningMessage message={"Hello again!"} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
