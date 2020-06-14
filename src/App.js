import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import { Provider } from 'react-redux';

import {store} from './redux/store';
import {rrfProps} from "./redux/store";
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';

import './App.css';
import {Loader} from './components/layout/Loader';



export const App = () => {
  return (
      <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
              <BrowserRouter>
                <div className='App'>
                  <Navbar />
                  <div className='container'>
                    <Suspense fallback={Loader}>
                      <Switch>
                          <Route exact path='/' component={Dashboard} />
                          <Route exact path='/client/add' component={AddClient} />
                          <Route exact path='/client/:id' component={ClientDetails} />
                          <Route exact path='/client/edit/:id' component={EditClient} />
                          <Route exact path='/login' component={Login} />
                      </Switch>
                    </Suspense>
                  </div>
                </div>
              </BrowserRouter>
          </ReactReduxFirebaseProvider>
      </Provider>
  );
}

