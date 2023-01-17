import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardSlider from './CardSlider'


const SavedCards = () => {
    const navigate = useNavigate()
      
        function handleClick(){
          navigate('/OpenPositions')
        }
      
  return (
    <div className='  bg-white flex flex-col justify-center items-center max-w-[ 1440px] min-w-[500px]'>
        <div className='w-9/12 h-full  flex flex-col items-start justify-start mt-20'>       
  <div className='flex flex-col justify-center w-full '>
    <h1 className='text-5xl font-medium uppercase items-center  font-sans mt-10 ml-10'>Your saved cards</h1>
    <h3 className='w-3/4  text-xl font-medium font-sans items-center ml-10 text-gray-500 mb-40 ' >We only support cards as a payment method at the moment!</h3>
        <CardSlider />
        </div>
        <div className='mt-40 mb-20'>
        <div className="flex flex-col items-start justify-evenly sm:-mt-10 ">
              <input 
                    type="button" 
                    value="ADD NEW CARD +" 
                    className='  py-3 px-10 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-lg md:text-lg'
                    onClick={() => handleClick()}/>
              </div>
              </div>
        </div>
        
               
        </div>
        
  )
}

export default SavedCards