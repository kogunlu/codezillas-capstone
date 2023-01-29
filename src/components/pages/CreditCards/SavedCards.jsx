import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardSlider from './CardSlider'




const SavedCards = () => {
    const navigate = useNavigate()
      
        function handleClick(){
          navigate('http://localhost:3000/add-new-card')
        }
 
 

  return (
    <div className='  bg-white flex flex-col justify-center items-start w-fullmin-w-[700px] mx-20'>
        <div className='w-full h-full  flex flex-col items-start justify-start mt-20'>       
  <div className='flex flex-col justify-center w-full items-start'>
    <h1 className=' w-full text-5xl font-medium uppercase items-center  font-sans mt-10 ml-10'>Your saved cards</h1>
    <h3 className='w-full  text-xl font-medium font-sans items-center ml-10 text-gray-500 mb-40 ' >We only support cards as a payment method at the moment!</h3>
    <div className='w-full justify-center items-center'>
       
        <CardSlider />
        </div>
        </div>
        <div className='mt-40 mb-20'>
        <div className="flex flex-col items-start justify-evenly sm:-mt-10 ">
              <input 
                    type="button" 
                    value="ADD NEW CARD +" 
                    className='  py-3 px-10 hover:bg-cyan-200 bg-cyan-400 font-medium rounded-lg text-lg md:text-lg'
                    onClick={() => handleClick()}/>
              </div>
              </div>
              

               
    </div>
        </div>
        
               
     
        
  )
}

export default SavedCards