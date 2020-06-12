import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyAwNv7bCy_O8kBNu4BhucYgtuKjQqah_8w",
    authDomain: "client-panel-ea66a.firebaseapp.com",
    databaseURL: "https://client-panel-ea66a.firebaseio.com",
    projectId: "client-panel-ea66a",
    storageBucket: "client-panel-ea66a.appspot.com",
    messagingSenderId: "652622507703",
    appId: "1:652622507703:web:a5ebc142c1d4e43edca732",
    measurementId: "G-WGEMY1KGJ6"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
firebase.functions(); // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
export const store = createStore(rootReducer, initialState);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};

window.vvv = store.getState();


















// import {combineReducers, compose, createStore} from 'redux';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
// import {reduxFirestore, firestoreReducer} from 'redux-firestore';

// const firebaseConfig ={
//     apiKey: "AIzaSyAwNv7bCy_O8kBNu4BhucYgtuKjQqah_8w",
//     authDomain: "client-panel-ea66a.firebaseapp.com",
//     databaseURL: "https://client-panel-ea66a.firebaseio.com",
//     projectId: "client-panel-ea66a",
//     storageBucket: "client-panel-ea66a.appspot.com",
//     messagingSenderId: "652622507703",
//     appId: "1:652622507703:web:a5ebc142c1d4e43edca732",
//     measurementId: "G-WGEMY1KGJ6"
// };
//
// const rrrConfig = {
//     userProfile: 'users',
//     useFirestoreForProfile: true,
// };
//
// firebase.initializeApp(firebaseConfig);
//
// // const firestore = firebase.firestore();
//
// const createStoreWithFirebase = (reactReduxFirebase(firebase, rrrConfig), reduxFirestore(firebase))(createStore);
//
// const rootReducer = combineReducers({
//     firebase: firebaseReducer,
//     firestore: firestoreReducer,
// });
//
// const initialState = {
//
// };
//
// export const store = createStoreWithFirebase(rootReducer, initialState, reactReduxFirebase(firebase));