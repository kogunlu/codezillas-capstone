import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/pages/About/About";
import ErrorPage from './components/pages/404/ErrorPage';
import Book from './components/pages/book/Book';
import Home from "./components/pages/home/Home"
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Team from './components/pages/About/Team';
import SubsThanks from "./components/pages/thanks/SubsThanks"
import Footer from "./components/shared/footer/Footer"



function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='book' element={<Book />} />
        <Route path='about' element= {<About/>} />
        <Route path='login' element = {<Login />} />
        <Route path='signup' element = {<Signup />} />
        <Route path='team' element= {<Team/>} /> 
        <Route path='thanks-subs' element={<SubsThanks />} />


        <Route path='*' element= {<ErrorPage />}  />
      </Routes>
    
      <Footer />
    </BrowserRouter>
  );
}

export default App;
