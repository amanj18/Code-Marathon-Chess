// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewItem from './components/ViewItem';
import './App.css';
import AddMatchForm from './components/AddItem';
import WinPercentage from './components/WinPercent';
import AverageWins from './components/AverageoFWins';

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
                        <Route path="/WinPercent" element={<WinPercentage />} />
                        <Route path="/AverageWins" element={<AverageWins />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
