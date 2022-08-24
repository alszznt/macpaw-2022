import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { 
    HomePage, 
    VotingPage, 
    BreedsPage, 
    GalleryPage, 
    LikesPage, 
    DislikesPage, 
    FavouritesPage ,
    CatsPage,
    SearchPage,
    UploadPage,
    MenuPage
} from '../pages';

import './app.css';

const App = ({ theme }) => {
  const isDark = theme ? 'dark' : ''
    return (
      <div className = {`${isDark} app`}>
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />

            <Route
                path="/menu"
                element={<MenuPage />}
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
                path="/breeds/:id"
                element={<CatsPage />}
            />

            <Route
                path="/gallery"
                element={<GalleryPage />}
            />

            <Route
                path="/gallery/upload"
                element={
                    <>  <UploadPage />
                        <GalleryPage />
                    </>
                }
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

            <Route
                path="/search"
                element={<SearchPage />}
            />

        </Routes>
      </div> 
    )
}

export default App;