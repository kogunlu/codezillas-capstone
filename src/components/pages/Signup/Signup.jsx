/* eslint-disable no-unused-vars */
import React from 'react'
import Socials from "../Login/Socials"
import signupPicture from "./Signup_picture/signup.jpg"
import SignupForm from './SignupForm'


function Signup() {


  return (
    <div className='h-full w-full flex flex-col justify-center items-center lg:items-end gap-5 mt-10 mb-5'>
          <div className='w-6/12 lg:mr-5 xl:mr-8 2xl:mr-12'>
              <h2 className='text-center lg:text-start text-2xl font-semibold'>SIGNUP NOW</h2>
         </div>

        <div className=' h-full w-full flex justify-center items-start md:items-center'>

            <div className='h-4/6 md:h-full w-full lg:w-11/12 flex flex-col items-start justify-start md:justify-between'>
            

                <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row h-min w-full justify-evenly items-center'>

                  <div className='w-full md:w-10/12 lg:w-5/12 h-min flex items-center justify-center md:items-start'>
                          <img src={signupPicture} alt='login_picture' />
                    </div>

                    <div className='h-auto md:h-4/6 w-full md:w-10/12 lg:w-6/12 flex flex-col justify-evenly md:justify-center md:gap-5 lg:justify-evenly lg:gap-0 items-center'>

                        <div className='w-full h-5/6 md:h-3/6 lg:h-full shadow-xl rounded-md flex justify-center items-center '>

                            <SignupForm />
                        </div>

                        <div className='w-10/12 flex flex-col items-center justify-center'>

                                <div className='w-full flex items-center justify-evenly'>

                                    <div className='w-5/12'>
                                        <hr className='border-1 border-cyan-400' />
                                    </div>

                                    <p className='w-2/12 mt-2 text-center text-base xl:text-xl text-slate-600'>Or</p>

                                    <div className='w-5/12'>
                                        <hr className='border-1 border-cyan-400' />
                                    </div>

                                </div>
                                
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup