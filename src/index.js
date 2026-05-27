import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage';

import PGDetails from './pages/PG/PGDetails';
import AddListing from './pages/AddListing.js';
import './index.js'
import Login from './pages/LoginPage/Login.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
    <Route path='/' element={<HomePage />} />
      {/* <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} /> */}
      <Route path="/pg/:id" element={<PGDetails />} />
      <Route path="/addListing" element={<AddListing />} />
    </Routes>
  
  </BrowserRouter>
);


reportWebVitals();
