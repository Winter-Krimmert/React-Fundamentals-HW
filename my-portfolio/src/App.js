// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;
