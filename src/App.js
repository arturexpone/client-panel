import React from 'react';
import './App.css';
import {Navbar} from "./components/layout/Navbar";
import {BrowserRouter, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
              <h1>Hello</h1>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
