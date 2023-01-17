/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import db from '../../../../db/firebase.config';

function UserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state.user.user);

  const [selectedOptionEdu, setSelectedOptionEdu] = useState('none');
  const [selectedOptionGen, setSelectedOptionGen] = useState('none');

  const [isLostFocusOnDropdownEdu, setIsLostFocusOnDropdownEdu] =
    useState(false);
  const [isLostFocusOnDropdownGen, setIsLostFocusOnDropdownGen] =
    useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = '*Required';
    } else if (values.fullName.length > 40) {
      errors.fullName = 'Can not be more than 40 character';
    }

    if (values.hobbies.length < 1) {
      errors.hobbies = '*Required';
    }

    if (values.family < 0 || values.family > 20) {
      errors.family = 'Please select a valid number';
    } else if (!values.family) {
      errors.family = '*Required';
    }

    if (!values.gender) {
      errors.gender = '*Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: `${activeUser.displayName}`,
      education: `${selectedOptionEdu}`,
      hobbies: [],
      family: '',
      gender: '',
      birthdate: `${activeUser.birthdate}`,
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  console.log(formik.values.birthdate);
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

  const notSelectedClassList =
    'border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base italic text-gray-400';

  const selectedClassList =
    'border shadow-md w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base ';

  return (
    <div>
      <p className="text-4xl font-bold px-5">PROFILE INFO</p>
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

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default UserForm;
