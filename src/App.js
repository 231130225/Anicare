import React from 'react';
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )

};

export default App