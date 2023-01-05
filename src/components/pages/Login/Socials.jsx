import React from 'react'
import {FaFacebook} from "react-icons/fa"
import {GrGoogle} from "react-icons/gr"

function Socials() {
  return (
    <div className='w-full flex items-center justify-center gap-16'>
            <button type='button' className='w-1/12 flex justify-end'>
                <FaFacebook className='text-cyan-400 text-2xl xl:text-3xl hover:text-cyan-200' />
            </button>

            <button type='button' className='w-1/12 flex justify-start'>
                <GrGoogle className='text-cyan-400 text-2xl xl:text-3xl hover:text-cyan-200' />
            </button>
</div>
  )
}

export default Socials