import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/pages/404/ErrorPage';
import Book from './components/pages/book/Book';
import Home from "./components/pages/home/Home"
import Navbar from "./components/shared/navbar/Navbar"



function App() {


  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='book' element={<Book />} />
        <Route path='*' element= {<ErrorPage />}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
