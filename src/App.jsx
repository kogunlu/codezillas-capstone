import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/pages/About/About";
import ErrorPage from './components/pages/404/ErrorPage';
import Book from './components/pages/book/Book';
import Home from "./components/pages/home/Home"
import Team from './components/pages/About/Team';



function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='book' element={<Book />} />
        <Route path='*' element= {<ErrorPage />}  />
        <Route path='about' element= {<About/>} />
        <Route path='team' element= {<Team/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
