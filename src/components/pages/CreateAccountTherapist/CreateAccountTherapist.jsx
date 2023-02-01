/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import db from '../../../db/firebase.config';
import Footer from '../../shared/footer/Footer';

function CreateAccountTherapist() {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.userName) {
      errors.userName = '*Required';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }

    if (!values.email) {
      errors.email = '*Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.city) {
      errors.city = '*Required';
    }

    if (!values.licenseNum) {
      errors.licenseNum = '*Required';
    }

    if (!values.password) {
      errors.password = '*Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be minimum of 6 characters.';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = '*Required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = '*Required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      city: '',
      licenseNum: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: async (values) => {
      const docRef = doc(db, 'user-details', formik.values.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        swal({
          title: 'Opps!',
          text: 'You already have an account, please try to log in!',
          icon: 'error',
        });
      } else {
        const auth = getAuth();

        const email = formik.values.email;
        const password = formik.values.password;

        createUserWithEmailAndPassword(auth, email, password)
          .then(
            setDoc(doc(db, 'user-details', formik.values.email), {
              name: formik.values.userName,
              email: formik.values.email,
              licenseNumber: formik.values.licenseNum,
              city: formik.values.city,
              isTherapist: true,
            })
          )
          .then((userCredential) => {
            const { user } = userCredential.user;

            navigate('/thanks-therapist');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            swal('Error!', 'Something went wrong, try again.', 'error');
          });
      }
    },
  });

  return (
    <>
      <div className="flex justify-center">
        <form
          className="w-10/12 h-full py-10 flex flex-col justify-between gap-5 items-start"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="text-4xl font-semibold">Create An Account</h2>
          {/* username section */}
          <div className="w-full h-24 flex justify-start">
            <div className="w-3/12 flex flex-col">
              <label id="userName" className="text-gray-500 font-semibold">
                User Name
              </label>
              <input
                type="text"
                className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
                id="userName"
                {...formik.getFieldProps('userName')}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="text-red-400 italic text-sm lg:text-base">
                  {formik.errors.userName}
                </div>
              ) : null}
            </div>
          </div>
          {/* email section */}
          <div className="w-3/12 h-24 flex flex-col">
            <label id="userName" className="text-gray-500 font-semibold">
              Email
            </label>
            <input
              type="email"
              className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* city section */}
          <div className="w-3/12 h-24 flex flex-col">
            <label id="userName" className="text-gray-500 font-semibold">
              City
            </label>
            <input
              type="text"
              className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="city"
              {...formik.getFieldProps('city')}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.city}
              </div>
            ) : null}
          </div>

          {/* license number section */}
          <div className="w-3/12 h-24 flex flex-col">
            <label id="userName" className="text-gray-500 font-semibold">
              License Number
            </label>
            <input
              type="text"
              className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="licenseNum"
              {...formik.getFieldProps('licenseNum')}
            />
            {formik.touched.licenseNum && formik.errors.licenseNum ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.licenseNum}
              </div>
            ) : null}
          </div>

          {/* password section */}
          <div className="w-3/12 h-24 flex flex-col justify-start">
            <label id="userName" className="text-gray-500 font-semibold">
              Password
            </label>
            <input
              type="password"
              className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div className="w-3/12 h-24 flex flex-col">
            <label id="userName" className="text-gray-500 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="confirmPassword"
              {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          {/* button section */}
          <div className="w-full flex justify-between items-center">
            <input
              type="submit"
              value="Create"
              className="py-1 md:py-3 px-5 h-10 md:h-14 hover:bg-cyan-200 focus:outline-none hover:scale-105 border border-cyan-400 bg-cyan-400 text-lg font-semibold rounded-md w-1/12 shadow-lg"
            />
          </div>
        </form>
      </div>

      <Footer isShortContent />
    </>
  );
}

export default CreateAccountTherapist;
