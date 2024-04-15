import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/AppContext';
import BorwserRouter from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BorwserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BorwserRouter>
);
