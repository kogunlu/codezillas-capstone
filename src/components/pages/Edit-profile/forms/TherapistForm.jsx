/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { getAuth, updateEmail, deleteUser } from 'firebase/auth';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../shared/button/Button';
import db from '../../../../db/firebase.config';
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
  setAnswer11,
} from '../../../../features/user/userSlice';

function TherapistForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDocSaved, setIsDocSaved] = useState(false);

  const auth = getAuth();
  const activeUser = useSelector((state) => state.user.user);

  useEffect(() => {
    if (isDocSaved) {
      const timer = setTimeout(() => navigate('/'), 2000);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [isDocSaved]);

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = '*Required';
    }

    if (values.fullName.length > 40) {
      errors.fullName = 'Can not be more than 40 character';
    }

    if (!values.bio) {
      errors.bio = '*Required';
    }

    if (!values.birthdate) {
      errors.birthdate = '*Required';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.phone) {
      errors.phone = '*Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: `${activeUser.displayName}`,
      birthdate: `${activeUser.birthdate}`,
      email: `${activeUser.email}`,
      phone: `${activeUser.phone}`,
      bio: `${activeUser.bio}`,
    },
    validate,
    onSubmit: async (values) => {
      console.log(activeUser);
      console.log(values);

      await deleteDoc(doc(db, 'user-details', activeUser.email));
      await setDoc(doc(db, 'user-details', values.email), {
        name: values.fullName,
        email: values.email,
        birthdate: values.birthdate,
        bio: values.bio,
        phone: values.phone,
        isTherapist: values.isTherapist,
      });

      updateEmail(auth.currentUser, values.email);

      swal({
        title: `Your changes are saved!`,
        text: 'You will be re-directed to the homepage!',
        icon: 'success',
        buttons: false,
        timer: 3000,
      });

      setIsDocSaved(true);
    },
  });

  // Functions start

  async function handleDeleteBtn() {
    const user = auth.currentUser;

    await deleteDoc(doc(db, 'user-details', user.email));

    await deleteUser(user)
      .then(() => {
        swal({
          title: `Your account is deleted!`,
          text: 'You are directed to the home page!',
          icon: 'success',
          buttons: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        swal({
          title: `Something went wrong!`,
          text: 'You will be re-directed to the homepage! Please try again.',
          icon: 'error',
          buttons: false,
          timer: 3000,
        });

        console.log(error);
      });

    navigate('/');
    dispatch(setAnswer1(''));
    dispatch(setAnswer2(''));
    dispatch(setAnswer3(''));
    dispatch(setAnswer4(''));
    dispatch(setAnswer5(''));
    dispatch(setAnswer6(0));
    dispatch(setAnswer7(''));
    dispatch(setAnswer8(''));
    dispatch(setAnswer9(''));
    dispatch(setAnswer10(''));
    dispatch(setAnswer11(false));
  }

  function handleCancelBtn() {
    console.log('canceled');
  }

  // Class names for input[date]
  const classNoSelection =
    'border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-white focus:text-black';
  const classWithSelection =
    'border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base';

  return (
    <div>
      <p className="text-4xl font-bold px-5 text-center lg:text-start">
        PROFILE INFO
      </p>
      <form
        className="w-full h-full py-10 flex flex-col justify-between gap-5 items-center px-2 md:px-5"
        onSubmit={formik.handleSubmit}
      >
        {/* FullName section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Full Name</p>
          </span>

          <div className="w-8/12 flex flex-col">
            <input
              type="text"
              className="border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="fullName"
              name="fullName"
              {...formik.getFieldProps('fullName')}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>
        </div>

        {/* BIO section */}
        <div className="w-full h-56 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Bio</p>
          </span>

          <div className="w-8/12 flex flex-col relative">
            <textarea
              type="text"
              className="border shadow-md w-full h-44 md:h-48 rounded-md pl-2 pt-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-start"
              id="bio"
              name="bio"
              {...formik.getFieldProps('bio')}
            />

            {formik.touched.bio && formik.errors.bio ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.bio}
              </div>
            ) : null}
          </div>
        </div>
        {/* Birthdate section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Birth Date</p>
          </span>

          <div className="w-8/12 flex flex-col">
            <input
              type="date"
              className={
                formik.values.birthdate ? classWithSelection : classNoSelection
              }
              id="birthdate"
              name="birthdate"
              min="1900-01-01"
              max="2022-12-31"
              {...formik.getFieldProps('birthdate')}
            />
            {formik.touched.birthdate && formik.errors.birthdate ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.birthdate}
              </div>
            ) : null}
          </div>
        </div>
        {/* Email section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Email</p>
          </span>

          <div className="w-8/12 flex flex-col">
            <input
              type="email"
              className="border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="email"
              name="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        {/* Phone section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Phone</p>
          </span>

          <div className="w-8/12 flex flex-col">
            <input
              type="tel"
              className="border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="phone"
              name="phone"
              pattern="[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
              maxLength="16"
              placeholder="90 555 999 99 99"
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col flex-wrap items-center gap-5 md:flex-row md:justify-between">
          <input
            type="submit"
            className="py-2 px-2 w-10/12 md:w-3/12 lg:w-5/12 xl:w-3/12 hover:bg-cyan-200 bg-cyan-400 font-semibold rounded text-sm md:text-md shadow-lg cursor-pointer"
            value="SAVE CHANGES"
          />
          <Button
            name="DELETE ACCOUNT"
            classList="py-2 px-2 w-10/12 md:w-3/12 lg:w-5/12 xl:w-3/12 hover:bg-red-600 bg-cyan-400 font-semibold rounded text-sm md:text-md shadow-lg cursor-pointer"
            function={() => handleDeleteBtn()}
          />
          <Button
            name="CANCEL"
            classList="py-2 px-2 w-10/12 md:w-3/12 lg:w-5/12 xl:w-3/12 hover:bg-cyan-200 bg-cyan-400 font-semibold rounded text-sm md:text-md shadow-lg cursor-pointer"
            function={() => handleCancelBtn()}
          />
        </div>
      </form>
    </div>
  );
}

export default TherapistForm;
