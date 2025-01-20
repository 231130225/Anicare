import React from 'react';
import Home from "./pages/Home";
import Store from './pages/Store';
import { Route, Routes } from 'react-router-dom';
import "./App.css"
import Dokter from './pages/Dokter';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CheckOut from './pages/CheckOut';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/dokter' element={<Dokter />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/payments' element={<CheckOut />}/>
    </Routes>
  )

};

export default App