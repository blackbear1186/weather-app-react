import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LocationProvider } from './components/LocationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Wrap App and all components in useContext Provider so that 
  // they have access to useContext variables
  <LocationProvider>
    <App />
  </LocationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
