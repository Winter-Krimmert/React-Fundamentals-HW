// src/App.js
import React from 'react';
import './App.css'; // Import CSS file for styling
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';

function App() {
    return (
        <div className="app">
            <h1>Image Gallery</h1>
            <div className="image-gallery">
                <ImageOne />
                <ImageTwo />
                <ImageThree />
            </div>
        </div>
    );
}

export default App;
