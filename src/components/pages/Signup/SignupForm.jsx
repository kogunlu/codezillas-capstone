/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";


function SignupForm() {
    const navigate = useNavigate()


    const validate = values => {
      const errors= {};

      if(!values.firstName){
        errors.firstName = '*Required'
      }else if(values.firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less'
      }

      if(!values.lastName){
        errors.lastName = '*Required'
      }else if(values.lastName.length > 20){
        errors.lastName = 'Must be 20 characters or less'
      }

      if(!values.email){
        errors.email = '*Required'
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address'
      }

      if(!values.confirmEmail){
        errors.confirmEmail = '*Required'
      }else if(values.email !== values.confirmEmail){
        errors.confirmEmail = 'Email addresses do not match.'
      }

      if(!values.password){
        errors.password = '*Required'
      }else if(values.password.length < 6){
        errors.password = 'Must be minimum of 6 characters.'
      }

      if(!values.confirmPassword){
        errors.confirmPassword = '*Required'
      }else if(values.password !== values.confirmPassword){
        errors.confirmPassword = 'Passwords do not match.'
      }

      if(!values.confirmPassword){
        errors.confirmPassword = '*Required'
      }else if(values.password !== values.confirmPassword){
        errors.confirmPassword = 'Passwords do not match.'
      }

      if(!values.day){
        errors.day = '*Required'
      }else if(values.day < 1 || values.day > 31){
        errors.day = 'Please submit a valid day.'
      }else if((values.month === 2 && (values.day < 1 || values.day > 29)) || (values.month === 4 || values.month === 6 || values.month === 9 || values.month === 11) && (values.day < 1 || values.day > 30)){
        errors.day = 'Please submit a valid day.'
      }

      if(!values.month){
        errors.month = '*Required'
      }else if(values.month < 1 || values.month > 12){
        errors.month = 'Please submit a valid month.'
      }

      if(!values.year){
        errors.year = '*Required'
      }else if(values.year < 1900 || values.year > 2023){
        errors.year = 'You can`t be that old!'
      }


      return errors
    }

    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
        day: "",
        month:"",
        year:"",
      },
      validate,
      onSubmit: values => {

      const email = formik.values.email
      const password = formik.values.password

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const {user} = userCredential.user;
        alert("Your account is created.")

      }).then(updateProfile(auth.currentUser, { displayName: formik.values.firstName }))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode)
        console.log(errorMessage)
      });
    }
  })

    function handleLoginClick(){
        navigate('/login')
    }


  return (
    <form 
    className='w-full h-full py-10 flex flex-col justify-between gap-5 items-center px-2 md:px-5'
    onSubmit={formik.handleSubmit}
    >

       <div className='w-full flex justify-between'>
       
        <div className='w-5/12 flex flex-col'>

          <input type='text' 
          className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base' 
          placeholder='First Name'
          id='firstName'
          {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? <div className='text-red-400 italic text-sm lg:text-base'>{formik.errors.firstName}</div> : null}
        </div>

        <div className='w-5/12 flex flex-col'>
          <input type='text' 
          className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base' 
          placeholder='Last Name'
          id='lastName'
          {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? <div className='text-red-400 italic text-sm lg:text-base'>{formik.errors.lastName}</div> : null}
        </div>

       </div>

        <div className='w-full flex flex-col'>
          <input type='email' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base' 
            placeholder='Your Email'
            id='email'
            {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email? <div className='text-red-400 italic text-sm lg:text-base'>{formik.errors.email}</div> : null}

        </div>

        <div className='w-full flex flex-col'>
          <input type='email' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base' 
            placeholder='Confirm email'
            id='confirmEmail'
            {...formik.getFieldProps('confirmEmail')}
          />
          {formik.touched.confirmEmail && formik.errors.confirmEmail? <div className='text-red-400 italic text-sm lg:text-base'>{formik.errors.confirmEmail}</div> : null}
        </div>

         <div className='w-full flex justify-between'>

         <div className='w-5/12 flex flex-col'>

            <input type='password' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base' 
            placeholder='Password'
            id='password'
            {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password? <div className='text-red-400 italic text-sm lg:text-base'>{formik.errors.password}</div> : null}
         </div>

          <div className='w-5/12 flex flex-col'>

            <input type='password' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base' 
            placeholder='Confirm Password'
            id='confirmPassword'
            {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword? <div className='text-red-400 italic text-sm lg:text-base'>{formik.errors.confirmPassword}</div> : null}
          </div>
       </div>

       <div className='w-full flex justify-between'>
           <div className='w-5/12 flex justify-between'>
             <p htmlFor='birthdate' className='text-gray-400 w-5/12 lg:w-7/12 text-center lg:pt-5'>Birth Date</p>
                 <input 
                 id='day'
                 name='day'
                 type='number' 
                 className='border w-3/12 h-12 md:h-16 rounded-md text-center lg:text-start lg:pl-3 focus:outline-none focus:shadow-lg' 
                 placeholder='DD'
                 {...formik.getFieldProps('day')}
                 />
           </div>

           <div className='w-5/12 flex justify-between'>
                 <input 
                 id='month'
                 name='month'
                 type='number' 
                 className='border w-3/12 h-12 md:h-16 rounded-md text-center lg:text-start lg:pl-2 focus:outline-none focus:shadow-lg' 
                 placeholder='MM'
                 {...formik.getFieldProps('month')}
                 />

                 <input 
                 id='year'
                 name='year'
                 type='number' 
                 className='border w-7/12 h-12 md:h-16 rounded-md text-center lg:text-start lg:pl-3 lg:px-5 focus:outline-none focus:shadow-lg' 
                 placeholder='YYYY'
                 {...formik.getFieldProps('year')}
                 />    
           </div>
       </div>

       <div className='w-full flex justify-between'>

        <div className='w-5/12 flex justify-end'>
          {formik.touched.day && formik.errors.day? <div className='text-red-400 text-sm lg:text-base italic'>{formik.errors.day}</div> : null}
        </div>

        <div className='w-5/12 flex justify-between'>
          <div className='w-full flex justify-start '>

            {formik.touched.month && formik.errors.month? <div className='text-red-400 text-sm lg:text-base italic	'>{formik.errors.month}</div> : null}
          </div>

          <div className='w-full flex justify-end' >

            {formik.touched.year && formik.errors.year? <div className='text-red-400 text-sm lg:text-base italic 	'>{formik.errors.year}</div> : null}
          </div>
        </div>
       </div>

       <div className='w-full flex justify-between items-center'>
           <input 
           type="button" 
           value="Login" 
           className='py-1 md:py-3 px-5 h-10 md:h-14 hover:bg-cyan-200 focus:outline-none hover:scale-105 border border-cyan-400 bg-cyan-400 text-lg font-semibold rounded-md w-5/12 shadow-lg'
           onClick={() => handleLoginClick()}
           />
           
           <input 
           type="submit" 
           value="Signup" 
           className=' py-1 md:py-3 px-5 h-10 md:h-14 focus:outline-none hover:scale-105 hover:bg-cyan-400 hover:text-white text-cyan-400 border border-cyan-400 bg-white text-lg font-semibold rounded-md w-5/12 '
           />
       </div>
    </form>
  )
}

export default SignupForm