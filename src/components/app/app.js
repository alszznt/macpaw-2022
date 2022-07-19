import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HomePage, VotingPage } from '../pages';

import './app.css';

const App = () => {
    return (
        <Routes>
            
            <Route
                path="/"
                element={<HomePage />}
            />

            <Route
                path="/voting"
                element={<VotingPage />}
            />

        </Routes>
    )
}

export default App;