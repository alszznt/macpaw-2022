import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HomePage, VotingPage, BreedsPage, GalleryPage } from '../pages';

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

            <Route
                path="/breeds"
                element={<BreedsPage />}
            />

            <Route
                path="/gallery"
                element={<GalleryPage />}
            />

            <Route
                path="/likes"
                element={<VotingPage />}
            />

            <Route
                path="/dislikes"
                element={<VotingPage />}
            />

            <Route
                path="/favourites"
                element={<VotingPage />}
            />

        </Routes>
    )
}

export default App;