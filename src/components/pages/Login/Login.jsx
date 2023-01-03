import React from 'react'
import {FaFacebook} from "react-icons/fa"
import {GrGoogle} from "react-icons/gr"
import loginPicture from "./Login_picture/login.jpg"

function Login() {


  return (
    <div className='h-full w-full flex flex-col justify-start items-center gap-5 mt-10'>
        <div className='w-10/12'>
            <h2 className='text-start text-2xl font-semibold'>LOGIN</h2>
         </div>

        <div className='h-96 w-full flex justify-center items-center'>

            <div className='h-full w-10/12 flex flex-col items-start justify-between'>
            

                <div className='flex h-full w-full justify-between items-center'>

                    <div className='h-full w-5/12 flex flex-col justify-evenly items-center'>

                        <div className='w-full h-5/6 shadow-xl rounded-md flex justify-center items-center '>

                            <div className='w-full h-5/6 flex flex-col justify-around items-center px-5'>

                                <input type='email' className='border w-full h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' placeholder='Your Email'/>
                                <input type='password' className='border w-full h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg' placeholder='Your Password' />

                                <div className='w-full flex justify-between items-center'>
                                    <input 
                                    type="button" 
                                    value="Login" 
                                    className='py-3 px-5 hover:bg-cyan-200 focus:outline-none hover:scale-105 border border-cyan-400 bg-cyan-400 text-lg font-semibold rounded-md w-5/12 shadow-lg'
                                    />

                                    <input 
                                    type="button" 
                                    value="Signup" 
                                    className='py-3 px-5 focus:outline-none hover:scale-105 hover:bg-cyan-400 hover:text-white text-cyan-400 border border-cyan-400 bg-white text-lg font-semibold rounded-md w-5/12 '
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

                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-5/12 flex justify-end'>
                                        <FaFacebook className='text-cyan-400 text-2xl hover:text-cyan-200' />
                                    </div>

                                    <div className='w-5/12 flex justify-start'>
                                        <GrGoogle className='text-cyan-400 text-2xl hover:text-cyan-200' />
                                    </div>
                                </div>

                        </div>

                    </div>

                    <div className='w-6/12 h-5/6 flex items-start'>
                        <img src={loginPicture} alt='login_picture' />
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Login