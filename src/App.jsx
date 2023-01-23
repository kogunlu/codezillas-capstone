import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import ErrorPage from './components/pages/404/ErrorPage';
import Book from './components/pages/book/Book';
import Home from "./components/pages/home/Home";
import SubsThanks from "./components/pages/thanks/SubsThanks";
import Footer from "./components/shared/footer/Footer";
import Blog from "./components/pages/Blog/Blog";



import Navbar from './components/shared/navbar/Navbar';

import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import SignupThanks from './components/pages/Signup/SignupThanks';
import Team from './components/pages/About/Team';
import Contact from './components/pages/Contact/Contact';
import ContactThanks from './components/pages/Contact/ContactThanks/ContactThanks';


function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="team" element={<Team />} />
        <Route path="thanks-subs" element={<SubsThanks />} />
        <Route path="thanks-signup" element={<SignupThanks />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path= "thanks-contacts" element={<ContactThanks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
} 

export default App;
