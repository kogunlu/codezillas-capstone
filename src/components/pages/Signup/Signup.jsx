/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from 'firebase/auth';
import Socials from '../Login/Socials';
import signupPicture from './Signup_picture/signup.jpg';
import SignupForm from './SignupForm';
import db from '../../../db/firebase.config';

function Signup() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const providerFB = new FacebookAuthProvider();
  const navigate = useNavigate();

  async function handleGoogleSignUp() {
    await signInWithRedirect(auth, provider);
  }

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        const docRef = doc(db, 'user-details', user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          swal({
            title: 'Welcome again!',
            text: 'You already have an account. You will be re-directed to the homepage.',
            icon: 'warning',
            buttons: false,
            timer: 3000,
          });

          setIsSignedUp(true);
        } else {
          setDoc(doc(db, 'user-details', user.email), {
            name: user.displayName,
            email: user.email,
            birthdate: ``,
            photoUrl: user.photoURL,
          });
          swal({
            title: 'Welcome!',
            text: 'Your account is created! You will be re-directed to the homepage!',
            icon: 'success',
            buttons: false,
            timer: 3000,
          });

          setIsSignedUp(true);
        }
      })
      .catch(async (error) => {
        if (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = await error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }
      });
  }, []);

  useEffect(() => {
    if (isSignedUp) {
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [isSignedUp]);

  function handleFBSignup() {
    signInWithRedirect(auth, providerFB);
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center lg:items-end gap-5 mt-10 mb-5">
      <div className="w-6/12 lg:mr-5 xl:mr-8 2xl:mr-12">
        <h2 className="text-center lg:text-start text-2xl font-semibold">
          SIGNUP NOW
        </h2>
      </div>

      <div className=" h-full w-full flex justify-center items-start md:items-center">
        <div className="h-4/6 md:h-full w-full lg:w-11/12 flex flex-col items-start justify-start md:justify-between">
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row h-min w-full justify-evenly items-center">
            <div className="w-full md:w-10/12 lg:w-5/12 h-min flex items-center justify-center md:items-start">
              <img src={signupPicture} alt="login_picture" />
            </div>

            <div className="h-auto md:h-4/6 w-full md:w-10/12 lg:w-6/12 flex flex-col justify-evenly md:justify-center md:gap-5 lg:justify-evenly lg:gap-0 items-center">
              <div className="w-full h-5/6 md:h-3/6 lg:h-full shadow-xl rounded-md flex justify-center items-center ">
                <SignupForm />
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

                <Socials
                  handleGoogleClick={() => handleGoogleSignUp()}
                  handleFBClick={() => handleFBSignup()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
