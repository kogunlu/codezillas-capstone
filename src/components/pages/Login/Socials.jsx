/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from 'firebase/auth';
import { FaFacebook } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import db from '../../../db/firebase.config';
import { setAnswer1, setAnswer2 } from '../../../features/user/userSlice';

function Socials() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const dispatch = useDispatch();

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
            title: `Welcome back ${user.displayName}!`,
            text: 'You will be re-directed to the homepage!',
            icon: 'success',
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
            title: `Welcome ${user.displayName}!`,
            text: 'Your account is created! You will be re-directed to the homepage!',
            icon: 'success',
            buttons: false,
            timer: 3000,
          });

          setIsSignedUp(true);
        }

        dispatch(setAnswer1(user.email));
        dispatch(setAnswer2(user.displayName));
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
    <div className="w-full flex items-center justify-center gap-16">
      <button
        type="button"
        className="w-1/12 flex justify-end"
        onClick={() => handleFBSignup()}
      >
        <FaFacebook className="text-cyan-400 text-2xl xl:text-3xl hover:text-cyan-200" />
      </button>

      <button
        type="button"
        className="w-1/12 flex justify-start"
        onClick={() => handleGoogleSignUp()}
      >
        <GrGoogle className="text-cyan-400 text-2xl xl:text-3xl hover:text-cyan-200" />
      </button>
    </div>
  );
}

export default Socials;
