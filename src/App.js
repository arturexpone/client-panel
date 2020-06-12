import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import {store} from "./redux/store";

import {Navbar} from './components/layout/Navbar';
import {Dashboard} from './components/layout/Dashboard';
import './App.css';

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <div className="container">
                  <Switch>
                      <Route exact path='/' component={Dashboard} />
                  </Switch>
              </div>
            </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
