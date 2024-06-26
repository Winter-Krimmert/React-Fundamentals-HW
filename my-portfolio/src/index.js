// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import './index.css';
import App from './App';

// Use createRoot().render instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
