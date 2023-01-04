/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
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
        day: 0,
        month:0,
        year:0,

      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
      }
    })



    function handleLoginClick(){
        navigate('/login')
    }

    // empty as of now
    function handleSignupClick(){
    
      
    }





  return (
    <form 
    className='w-full h-full py-10 flex flex-col justify-between gap-5 items-center px-5'
    onSubmit={formik.handleSubmit}
    >

       <div className='w-full flex justify-between'>
       
        <div className='w-5/12 flex flex-col'>

          <input type='text' 
          className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' 
          placeholder='First Name'
          id='firstName'
          {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? <div className='text-red-400 italic'>{formik.errors.firstName}</div> : null}
        </div>

        <div className='w-5/12 flex flex-col'>
          <input type='text' 
          className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' 
          placeholder='Last Name'
          id='lastName'
          {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? <div className='text-red-400 italic'>{formik.errors.lastName}</div> : null}
        </div>

       </div>

        <div className='w-full flex flex-col'>
          <input type='email' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' 
            placeholder='Your Email'
            id='email'
            {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email? <div className='text-red-400 italic'>{formik.errors.email}</div> : null}

        </div>

        <div className='w-full flex flex-col'>
          <input type='email' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' 
            placeholder='Confirm email'
            id='confirmEmail'
            {...formik.getFieldProps('confirmEmail')}
          />
          {formik.touched.confirmEmail && formik.errors.confirmEmail? <div className='text-red-400 italic'>{formik.errors.confirmEmail}</div> : null}
        </div>

         <div className='w-full flex justify-between'>

         <div className='w-5/12 flex flex-col'>

            <input type='password' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' 
            placeholder='Password'
            id='password'
            {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password? <div className='text-red-400 italic'>{formik.errors.password}</div> : null}
         </div>

          <div className='w-5/12 flex flex-col'>

            <input type='password' 
            className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' 
            placeholder='Confirm Password'
            id='confirmPassword'
            {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword? <div className='text-red-400 italic'>{formik.errors.confirmPassword}</div> : null}
          </div>
       </div>

       <div className='w-full flex justify-between'>
           <div className='w-5/12 flex justify-between'>
             <label htmlFor='birthdate' className='text-gray-400 w-7/12 text-center pt-5'>Birth Date</label>
                 <input 
                 id='day'
                 name='day'
                 type='number' 
                 className='border w-3/12 h-12 md:h-16 rounded-md pl-3 focus:outline-none focus:shadow-lg' 
                 placeholder='DD'
                 {...formik.getFieldProps('day')}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.day.toString()}
                 />
                 
           </div>

           <div className='w-5/12 flex justify-between'>
                 <input 
                 id='month'
                 name='month'
                 type='number' 
                 className='border w-3/12 h-12 md:h-16 rounded-md pl-2 focus:outline-none focus:shadow-lg' 
                 placeholder='MM'
                 {...formik.getFieldProps('month')}
                 />

                 <input 
                 id='year'
                 name='year'
                 type='number' 
                 className='border w-7/12 h-12 md:h-16 rounded-md pl-3 px-5 focus:outline-none focus:shadow-lg' 
                 placeholder='YYYY'
                 {...formik.getFieldProps('year')}
                 />    
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
            onMouseEnter={() => handleSignupClick()}
           />
       </div>
    </form>
  )
}

export default SignupForm