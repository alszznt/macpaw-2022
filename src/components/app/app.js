import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HomePage, VotingPage, BreedsPage, GalleryPage, LikesPage, DislikesPage, FavouritesPage } from '../pages';

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
                element={<LikesPage />}
            />

            <Route
                path="/dislikes"
                element={<DislikesPage />}
            />

            <Route
                path="/favourites"
                element={<FavouritesPage />}
            />

        </Routes>
    )
}

export default App;