import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import Work from  "./components/Work";
//import About from"./components/About";
//import Contact from"./components/Contact";
//import Services from"./components/Services"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App></App>}></Route>
      
    </Routes>
  </BrowserRouter>
);

