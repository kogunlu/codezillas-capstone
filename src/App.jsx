import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import About from './components/pages/About/About';
import ErrorPage from './components/pages/404/ErrorPage';
import Book from './components/pages/book/Book';
import Home from './components/pages/home/Home';
import SubsThanks from './components/pages/thanks/SubsThanks';
// import Footer from './components/shared/footer/Footer';
import Blog from './components/pages/Blog/Blog';
import Navbar from './components/shared/navbar/Navbar';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import SignupThanks from './components/pages/Signup/SignupThanks';
import Team from './components/pages/About/Team';
import AddNewCard from './components/pages/payments/add-new-card/AddNewCard';

import Contact from './components/pages/Contact/Contact';
import ContactThanks from './components/pages/Contact/ContactThanks/ContactThanks';

import EditUser from './components/pages/Edit-profile/EditUser';
import EditTherapist from './components/pages/Edit-profile/EditTherapist';
import CreateAccountTherapist from './components/pages/CreateAccountTherapist/CreateAccountTherapist';
import HealingRequirement from './components/pages/healing/HealingRequirement';

import PurchaseThanks from './components/pages/selectCardImpovements/purchaseThanks/PurchaseThanks';
import SelectCardSlider from './components/pages/selectCardImpovements/SelectCardSlider';
import Career from './components/pages/Career/Career';
import OpenPositions from './components/pages/Career/OpenPositions';
import SavedCards from './components/pages/CreditCards/SavedCards';
import ThanksTherapist from './components/pages/CreateAccountTherapist/ThanksTherapist';

function App() {
  const user = useSelector((state) => state.user.user);
  const auth = getAuth();
  const [isLoggedIn, setisLoggedIn] = useState(0);

  function isLoggedInf() {
    if (auth !== null) {
      onAuthStateChanged(auth, (userLogged) => {
        if (userLogged !== null) {
          setisLoggedIn(1);
        }
      });
    } else {
      setisLoggedIn(0);
    }
  }
  // To add routes need only logged in users be able to view them just add new object in the following array.
  const pathes = [
    {
      path: 'add-new-card',
      component: <AddNewCard />,
    },
  ];
  let OnlyLoggedIn = [];
  const routes = [];
  pathes.map((item) =>
    routes.push(<Route path={item.path} element={item.component} />)
  );
  if (user.email) {
    OnlyLoggedIn = routes;
  } else if (isLoggedIn) {
    OnlyLoggedIn = routes;
  } else {
    // navigate user to please login to enter this page
  }
  useEffect(() => {
    isLoggedInf();
  }, [auth]);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} isLoggedInFun={setisLoggedIn} />
      <Routes>
        <Route path="select-card" element={<SelectCardSlider />} />
        <Route path="purchase-thanks" element={<PurchaseThanks />} />
        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="team" element={<Team />} />
        <Route path="thanks-subs" element={<SubsThanks />} />
        <Route path="thanks-signup" element={<SignupThanks />} />
        <Route path="create-therapist" element={<CreateAccountTherapist />} />
        <Route path="edit-user" element={<EditUser />} />
        <Route path="edit-therapist" element={<EditTherapist />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="career" element={<Career />} />
        <Route path="OpenPositions" element={<OpenPositions />} />

        <Route path="SavedCards" element={<SavedCards />} />

        <Route path="contact" element={<Contact />} />
        <Route path="thanks-contacts" element={<ContactThanks />} />

        <Route path="work-with-healing" element={<HealingRequirement />} />
        <Route path="/thanks-therapist" element={<ThanksTherapist />} />

        {OnlyLoggedIn.map((element) => element)}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
