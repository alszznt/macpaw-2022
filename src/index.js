import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { CatServiceProvider } from './components/cat-service-context';
import CatService from './services/cat-service';

import store from './store';

import { App } from './containers';

const catService = new CatService();

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store = { store }>
        <CatServiceProvider value={ catService }>
            <Router>
                <App />
            </Router>
        </CatServiceProvider>
    </Provider>
);
