import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client'

import App from './App'; // Your main app component

// Create the root and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);