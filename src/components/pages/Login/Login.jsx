import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaFacebook} from "react-icons/fa"
import {GrGoogle} from "react-icons/gr"
import loginPicture from "./Login_picture/login.jpg"

function Login() {

    const navigate = useNavigate()

    function handleSignUpClick(){
        navigate('/signup')
    }

  return (
    <div className='h-full w-full flex flex-col justify-start items-center gap-5 mt-10'>
        <div className='w-10/12'>
            <h2 className=' text-center lg:text-start text-2xl font-semibold'>LOGIN</h2>
         </div>

        <div className=' h-screen lg:h-96 w-full flex justify-center items-start md:items-center'>

            <div className='h-5/6 md:h-full w-10/12 flex flex-col items-start justify-start md:justify-between'>
            

                <div className='flex flex-col lg:flex-row h-full w-full justify-between items-center'>

                    <div className='h-full md:h-4/6 lg:h-full w-full md:w-10/12 lg:w-5/12 flex flex-col justify-evenly md:justify-center md:gap-5 lg:justify-evenly lg:gap-0 items-center'>

                        <div className='w-full h-5/6 md:h-3/6 lg:h-5/6 shadow-xl rounded-md flex justify-center items-center '>

                            <div className='w-full h-5/6 flex flex-col justify-around items-center px-5'>

                                <input type='email' className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' placeholder='Your Email'/>
                                <input type='password' className='border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' placeholder='Your Password' />

                                <div className='w-full flex justify-between items-center'>
                                    <input 
                                    type="button" 
                                    value="Login" 
                                    className='py-1 md:py-3 px-5 h-10 md:h-14 hover:bg-cyan-200 focus:outline-none hover:scale-105 border border-cyan-400 bg-cyan-400 text-lg font-semibold rounded-md w-5/12 shadow-lg'
                                    />

                                    <input 
                                    type="button" 
                                    value="Signup" 
                                    className=' py-1 md:py-3 px-5 h-10 md:h-14 focus:outline-none hover:scale-105 hover:bg-cyan-400 hover:text-white text-cyan-400 border border-cyan-400 bg-white text-lg font-semibold rounded-md w-5/12 '
                                    onClick={() => handleSignUpClick()}
                                    />
                                </div>
                        </div>
                    </div>

                        <div className='w-10/12 flex flex-col items-center justify-center'>

                                <div className='w-full flex items-center justify-evenly'>

                                    <div className='w-5/12'>
                                        <hr className='border-1 border-cyan-400' />
                                    </div>

                                    <p className='w-2/12 text-center text-slate-600'>Or</p>

                                    <div className='w-5/12'>
                                        <hr className='border-1 border-cyan-400' />
                                    </div>

                                </div>

                                <div className='w-full flex items-center justify-center gap-16'>
                                    <button type='button' className='w-1/12 flex justify-end'>
                                        <FaFacebook className='text-cyan-400 text-2xl hover:text-cyan-200' />
                                    </button>

                                    <button type='button' className='w-1/12 flex justify-start'>
                                        <GrGoogle className='text-cyan-400 text-2xl hover:text-cyan-200' />
                                    </button>
                                </div>

                        </div>

                    </div>

                    <div className='w-full md:w-10/12 lg:w-6/12 h-5/6 flex items-center md:items-start'>
                        <img src={loginPicture} alt='login_picture' />
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Login