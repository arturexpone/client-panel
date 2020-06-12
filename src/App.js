import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Navbar} from './components/layout/Navbar';
import {Dashboard} from './components/layout/Dashboard';

import './App.css';

function App() {
  return (
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
  );
}

export default App;
