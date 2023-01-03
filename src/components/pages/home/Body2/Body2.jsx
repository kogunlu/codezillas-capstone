import React from 'react'
import { useNavigate } from 'react-router-dom'
import People from './image/people.png'

const Body2 = () => {

  const navigate = useNavigate()

  function handleClick(){
    navigate('/book')
  }

  return (
    <div className='w-full h-screen bg-amber-100 flex justify-center items-center'>
      <div className='w-8/12 h-5/6 border flex flex-col items-start justify-evenly '>
        <div className="h-3/6 flex flex-col justify-evenly items-start gap-10">
          <h4 className='text-5xl font-medium uppercase '>Professional, licensed, and vetted therapists that you can trust</h4>

          <div>
              
              <img src={People} alt="People" />
          </div>

          <div className="flex">
            <p>Tap into the world`s largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate whenever and however you want.</p>
          </div>

        </div>

        <div className="h-2/6 flex justify-center items-start">
        <input 
              type="button" 
              value="BOOK AN APPOINTMENT" 
              className=' py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg'
              onClick={() => handleClick()}/>
        </div>
      </div>
      
    </div>
  )
}

export default Body2