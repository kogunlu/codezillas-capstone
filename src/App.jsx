import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import ErrorPage from './components/pages/404/ErrorPage';
import Book from './components/pages/book/Book';
import Home from './components/pages/home/Home';
import SubsThanks from './components/pages/thanks/SubsThanks';
import Footer from './components/shared/footer/Footer';
import Blog from './components/pages/Blog/Blog';


import Navbar from './components/shared/navbar/Navbar';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import SignupThanks from './components/pages/Signup/SignupThanks';
import Team from './components/pages/About/Team';
import EditUser from './components/pages/Edit-profile/EditUser';
import EditTherapist from './components/pages/Edit-profile/EditTherapist';

import SubsThanks from "./components/pages/thanks/SubsThanks"
import Footer from "./components/shared/footer/Footer"

import HealingRequirement from './components/pages/healing/HealingRequirement';


import SelectCard from './components/pages/selectCard/SelectCard';
import PurchaseThanks from './components/pages/selectCard/purchaseThanks/PurchaseThanks';

import HealingRequirement from './components/pages/healing/HealingRequirement';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="select-card" element={<SelectCard />} />
        <Route path="purchase-thanks" element={<PurchaseThanks />} />
        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="team" element={<Team />} />
        <Route path="thanks-subs" element={<SubsThanks />} />
        <Route path="thanks-signup" element={<SignupThanks />} />

        <Route path="edit-user" element={<EditUser />} />
        <Route path="edit-therapist" element={<EditTherapist />} />
        <Route path="blog" element={<Blog />} />
        <Route path="work-with-healing" element={<HealingRequirement />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
