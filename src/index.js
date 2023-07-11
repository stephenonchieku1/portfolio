import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Work from  "./components/Work/Work";
import About from"./components/About/About";
import Contact from"./components/Contact/Contact";
import Services from"./components/Services/Services";

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
      <Route path = "/Services" element = {<App></App>}></Route>
      <Route path = "/Work" element = {<Work></Work>}></Route>
      <Route path = "/About" element = {<About></About>}></Route>
      <Route path = "/Contact" element = {<Contact></Contact>}></Route>
      
    </Routes>
  </BrowserRouter>
);

