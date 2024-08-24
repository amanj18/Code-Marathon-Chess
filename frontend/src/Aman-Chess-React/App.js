// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewItem from './components/ViewItem';
import './App.css';
import AddMatchForm from './components/AddItem';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AddMatchForm />} />
                        <Route path="/services" element={<ViewItem />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
