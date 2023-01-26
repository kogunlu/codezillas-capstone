/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginPicture from './Login_picture/login.jpg';
import Socials from './Socials';
import db from '../../../db/firebase.config';
import {
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setAnswer4,
  setAnswer5,
  setAnswer6,
  setAnswer7,
  setAnswer8,
  setAnswer9,
  setAnswer10,
} from '../../../features/user/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  function handleSignUpClick() {
    navigate('/signup');
  }

  async function readLoggedInUserData(userEmailAdress) {
    const docRef = doc(db, 'user-details', `${userEmailAdress}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  }

  async function writeData(userEmail) {
    const relatedData = await readLoggedInUserData(userEmail);

    if (relatedData) {
      dispatch(setAnswer1(relatedData.email));
      dispatch(setAnswer2(relatedData.name));
      dispatch(setAnswer3(relatedData.password));
      dispatch(setAnswer4(relatedData.birthdate));
      dispatch(setAnswer5(relatedData.education));
      dispatch(setAnswer6(relatedData.family));
      dispatch(setAnswer7(relatedData.gender));
      dispatch(setAnswer8(relatedData.phone));
      dispatch(setAnswer9(relatedData.id));
      dispatch(setAnswer10(relatedData.hobbies));
    }

    return relatedData;
  }

  function handleLoginClick() {
    if (!(email && password)) {
      swal('Error!', 'Please fill the related parts to login!', 'error');
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/');

          onAuthStateChanged(auth, (userLoggedIn) => {
            if (user) {
              writeData(user.email);

              if (userLoggedIn.displayName) {
                swal(
                  'Welcome',
                  `It is great to see you here ${userLoggedIn.displayName}!`
                );
              } else {
                swal('Welcome', `It is great to see you here!`);
              }

              navigate('/');
            } else {
              swal(
                'Ops..',
                "Please make sure that you're typing your email/password correctly"
              );
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          swal('Error!', 'Please login with correct credentials.');
        });

      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-start items-center gap-5 mt-10 mb-5">
      <div className="w-10/12">
        <h2 className=" text-center lg:text-start text-2xl font-semibold">
          LOGIN
        </h2>
      </div>

      <div className=" h-screen lg:h-96 w-full flex justify-center items-start md:items-center">
        <div className="h-5/6 md:h-full w-full md:w-10/12 flex flex-col items-start justify-start md:justify-between">
          <div className="flex flex-col lg:flex-row h-full w-full justify-between items-center">
            <div className="h-full md:h-4/6 lg:h-full w-full md:w-10/12 lg:w-6/12 xl:w-5/12 flex flex-col justify-evenly md:justify-center md:gap-5 lg:justify-evenly lg:gap-0 items-center">
              <div className="w-full h-5/6 shadow-xl rounded-md flex justify-center items-center ">
                <div className="w-full h-5/6 flex flex-col justify-around items-center px-5">
                  <input
                    type="email"
                    className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="w-full flex justify-between items-center">
                    <input
                      type="button"
                      value="Login"
                      className="py-1 md:py-3 px-5 h-10 md:h-14 hover:bg-cyan-200 focus:outline-none hover:scale-105 border border-cyan-400 bg-cyan-400 text-lg font-semibold rounded-md w-5/12 shadow-lg"
                      onClick={() => handleLoginClick()}
                    />

                    <input
                      type="button"
                      value="Signup"
                      className=" py-1 md:py-3 px-5 h-10 md:h-14 focus:outline-none hover:scale-105 hover:bg-cyan-400 hover:text-white text-cyan-400 border border-cyan-400 bg-white text-lg font-semibold rounded-md w-5/12 "
                      onClick={() => handleSignUpClick()}
                    />
                  </div>
                </div>
              </div>

              <div className="w-10/12 flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-evenly">
                  <div className="w-5/12">
                    <hr className="border-1 border-cyan-400" />
                  </div>

                  <p className="w-2/12 mt-2 text-center text-base xl:text-xl text-slate-600">
                    Or
                  </p>

                  <div className="w-5/12">
                    <hr className="border-1 border-cyan-400" />
                  </div>
                </div>

                <Socials />
              </div>
            </div>

            <div className="w-full md:w-10/12 lg:w-5/12 xl:w-6/12 h-full flex justify-center items-center ">
              <img src={loginPicture} alt="login_picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
