import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {FaExclamation} from "react-icons/fa"

function ErrorPage() {
    const navigate = useNavigate()


    useEffect(() => {
        const timer = setTimeout(() => navigate("/"), 3000)
  
        return () => clearTimeout(timer)
    },[])

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      
        <FaExclamation className='text-6xl mb-2' />
        <h3 className='font-bold text-4xl'>404 not found.</h3>
        <p className='font-semibold text-lg italic'>You will be re-directed to the home page soon.</p>
    </div>
  )
}

export default ErrorPage