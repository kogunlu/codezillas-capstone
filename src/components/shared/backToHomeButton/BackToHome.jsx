import React from 'react'
import {useNavigate} from "react-router-dom"


function BackToHome() {

    const navigate = useNavigate()

    function handleClick(){
        navigate("/")
      }
      
  return (
    <input 
            type="button" 
            value="BACK TO HOME" 
            className='py-2 px-5 w-10/12 md:w-8/12 lg:w-5/12 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg'
            onClick={() => handleClick()} />
  )
}

export default BackToHome