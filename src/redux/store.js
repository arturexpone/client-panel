import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { createStore, combineReducers, compose } from 'redux'
import {firebaseReducer} from 'react-redux-firebase';
import {createFirestoreInstance, firestoreReducer} from "redux-firestore";

import {notifyReducer, settingsReducer} from './reducers';

const fbConfig = {
    apiKey: "AIzaSyAwNv7bCy_O8kBNu4BhucYgtuKjQqah_8w",
    authDomain: "client-panel-ea66a.firebaseapp.com",
    databaseURL: "https://client-panel-ea66a.firebaseio.com",
    projectId: "client-panel-ea66a",
    storageBucket: "client-panel-ea66a.appspot.com",
    messagingSenderId: "652622507703",
    appId: "1:652622507703:web:a5ebc142c1d4e43edca732",
    measurementId: "G-WGEMY1KGJ6"
};

const rrConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer,
    settings: settingsReducer
});

if (!localStorage.getItem('settings')) {
    const defaultSettings = {
        disableBalanceOnAdd: false,
        disableBalanceOnEdit: false,
        allowRegistration: true
    }

    localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

const initialState = {settings: JSON.parse(localStorage.getItem('settings'))};

export const store = createStore(rootReducer, initialState);

export const rrfProps = {
    firebase,
    config: rrConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

window.vvv = store.getState().firestore;