/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import {
  getAuth,
  updateEmail,
  updatePassword,
  deleteUser,
} from 'firebase/auth';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { BsPlusLg } from 'react-icons/bs';
import { GrLock } from 'react-icons/gr';
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

function UserForm() {
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

  const [selectedOptionEdu, setSelectedOptionEdu] = useState('none');
  const [selectedOptionGen, setSelectedOptionGen] = useState('none');

  const [isLostFocusOnDropdownEdu, setIsLostFocusOnDropdownEdu] =
    useState(false);
  const [isLostFocusOnDropdownGen, setIsLostFocusOnDropdownGen] =
    useState(false);

  const validate = (values) => {
    const errors = {};

    if (values.fullName.length > 40) {
      errors.fullName = 'Can not be more than 40 character';
    }

    if (values.family < 0 || values.family > 20) {
      errors.family = 'Please select a valid number';
    } else if (!values.family) {
      errors.family = '*Required';
    }

    if (!values.gender) {
      errors.gender = '*Required';
    }

    if (!values.birthdate) {
      errors.birthdate = '*Required';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (values.id) {
      if (values.id < 10_000_000_000 || values.id > 99_999_999_999) {
        errors.id = 'Please type a valid ID number';
      }
    }

    if (values.password) {
      if (values.password.length < 6 || values.password.length > 20) {
        errors.password = 'Between 6-20 characters.';
      }

      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords don`t match';
      }
    }

    if (!values.phone) {
      errors.phone = '*Required';
    }

    return errors;
  };

  useEffect(() => {
    if (activeUser) {
      setSelectedOptionEdu(activeUser.education);
      setSelectedOptionGen(activeUser.gender);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: `${activeUser.displayName}`,
      education: `${activeUser.education}`,
      hobbies: `${activeUser.hobbies}`,
      family: `${activeUser.family}`,
      gender: `${activeUser.gender}`,
      birthdate: `${activeUser.birthdate}`,
      email: `${activeUser.email}`,
      phone: `${activeUser.phone}`,
      id: `${activeUser.id}`,
      password: `${activeUser.password}`,
      confirmPassword: `${activeUser.confirmPassword}`,
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
        education: values.education,
        id: values.id,
        family: values.family,
        gender: values.gender,
        hobbies: values.hobbies,
        phone: values.phone,
      });

      updateEmail(auth.currentUser, values.email);
      updatePassword(auth.currentUser, values.confirmPassword);

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
  function handleChangeSelect(e, trgt) {
    if (trgt === 'edu') {
      setSelectedOptionEdu(e.target.value);

      formik.setFieldValue('education', e.target.value);
    } else if (trgt === 'gen') {
      setSelectedOptionGen(e.target.value);
      formik.setFieldValue('gender', e.target.value);
    }
  }

  function isErrorNeeded(str) {
    if (str === 'edu') {
      if (isLostFocusOnDropdownEdu === true && selectedOptionEdu === 'none') {
        return true;
      }
      return false;
    }

    if (str === 'gen') {
      if (isLostFocusOnDropdownGen === true && selectedOptionGen === 'none') {
        return true;
      }
      return false;
    }

    return false;
  }

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
  }

  function handleCancelBtn() {
    console.log('canceled');
  }

  function handleShowBtn() {
    navigate('/select-card');
  }

  function handleBuyBtn() {
    navigate('/select-card');
  }

  // Class names for dropdown list
  const notSelectedClassList =
    'border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base italic text-gray-400';

  const selectedClassList =
    'border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base ';

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
        {/* Education section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Education Level</p>
          </span>
          <div className="w-8/12">
            <select
              className={
                selectedOptionEdu === 'none'
                  ? notSelectedClassList
                  : selectedClassList
              }
              value={selectedOptionEdu}
              onChange={(e) => handleChangeSelect(e, 'edu')}
              onBlur={() => setIsLostFocusOnDropdownEdu(true)}
            >
              <option disabled value="none">
                Please select your education level
              </option>
              <option value="primary">Primary School (5 years)</option>
              <option value="secondary">Secondary School (8 years)</option>
              <option value="highschool">Highschool (12 years)</option>
              <option value="university">University Degree (16 years)</option>
              <option value="master">
                Masters Degree or above (20+ years)
              </option>
            </select>
            <div className="text-red-400 italic text-sm lg:text-base">
              {isErrorNeeded('edu') === true
                ? '*Please select an option'
                : null}
            </div>
          </div>
        </div>
        {/* Hobbies section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Hobbies</p>
          </span>

          <div className="w-8/12 flex flex-col">
            <input
              type="text"
              className="border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="hobbies"
              name="hobbies"
              {...formik.getFieldProps('hobbies')}
            />
            {formik.touched.hobbies && formik.errors.hobbies ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.hobbies}
              </div>
            ) : null}
          </div>
        </div>
        {/* Family section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Family Size</p>
          </span>

          <div className="w-8/12 flex flex-col">
            <div className="w-full flex justify-start gap-5">
              <input
                type="number"
                className="border shadow-md w-2/12 h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-center"
                id="family"
                name="family"
                value={formik.values.family}
                onChange={(e) => formik.setFieldValue('family', e.target.value)}
              />
              <span className="w-5/12 flex items-center">
                <p>Member(s)</p>
              </span>
            </div>
            {formik.touched.family && formik.errors.family ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.family}
              </div>
            ) : null}
          </div>
        </div>
        {/* Gender section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Gender</p>
          </span>
          <div className="w-8/12">
            <select
              className={
                selectedOptionGen === 'none'
                  ? notSelectedClassList
                  : selectedClassList
              }
              value={selectedOptionGen}
              onChange={(e) => handleChangeSelect(e, 'gen')}
              onBlur={() => setIsLostFocusOnDropdownGen(true)}
            >
              <option disabled value="none">
                Please select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transsexual">Transsexual</option>
              <option value="noSpecify">I don`t want to specify</option>
            </select>
            <div className="text-red-400 italic text-sm lg:text-base">
              {isErrorNeeded('gen') === true
                ? '*Please select an option'
                : null}
            </div>
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
        {/* ID section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Upload ID</p>
          </span>

          <div className="w-8/12 flex flex-col relative">
            <input
              type="number"
              className="border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="id"
              name="id"
              value={formik.values.id}
              onChange={(e) => formik.setFieldValue('id', e.target.value)}
            />
            <BsPlusLg className="absolute right-5 top-6" />
            {formik.touched.id && formik.errors.id ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.id}
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-full my-5">
          <p className="text-4xl font-bold text-left">Security</p>
        </div>

        {/* Password Section */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Password</p>
          </span>

          <div className="w-8/12 h-20 flex flex-col relative">
            <input
              type="password"
              className="border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={(e) => formik.setFieldValue('password', e.target.value)}
            />
            <GrLock className="absolute right-5 top-6" />
            {formik.errors.password ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>

        {/* Confirm Password Section  */}
        <div className="w-full h-20 flex justify-between">
          <span className="w-4/12 h-12 md:h-16 flex justify-start items-center">
            <p className="text-xl font-semibold">Confirm Password</p>
          </span>

          <div className="w-8/12 h-20 flex flex-col relative">
            <input
              type="password"
              className="border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={(e) =>
                formik.setFieldValue('confirmPassword', e.target.value)
              }
            />
            <GrLock className="absolute right-5 top-6" />
            {formik.errors.confirmPassword ? (
              <div className="text-red-400 italic text-sm lg:text-base">
                {formik.errors.confirmPassword}
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

        <div className="w-full my-5">
          <p className="text-4xl font-bold text-left">
            Payment Methods & Tickets
          </p>
        </div>

        {/* Ticket and Payment section */}
        <div className="w-full flex flex-colitems-center md:flex-row md:justify-start gap-2">
          <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-between gap-3">
            <p className="w-10/12 md:w-5/12 text-center md:text-start">
              3 Cards Added
            </p>
            <Button
              name="SHOW CARDS"
              classList="py-2 px-2 w-10/12 md:w-8/12 hover:bg-cyan-200 bg-cyan-400 font-semibold rounded text-sm md:text-md shadow-lg cursor-pointer"
              function={() => handleShowBtn()}
            />
          </div>

          <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-between gap-3">
            <p className="w-10/12 md:w-8/12 text-center md:text-start">
              10 Tickets Remaining
            </p>
            <Button
              name="BUY TICKETS"
              classList="py-2 px-2 w-10/12 md:w-8/12 hover:bg-cyan-200 bg-cyan-400 font-semibold rounded text-sm md:text-md shadow-lg cursor-pointer"
              function={() => handleBuyBtn()}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
