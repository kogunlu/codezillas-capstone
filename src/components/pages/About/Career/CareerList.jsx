import React from 'react'

const CareerList = ({header, text, subheader, title}) => {
  return (
   
       <div>
                  <div className="flex flex-col justify-evenly w-screen items-start mb-10 min-w-[700px] ">
                  
                    <ul className=' flex flex-col w-11/12 '>
                    
                        <li className=' flex flex-col justify-evenly min-w-fit '>
                        <div className='border-b border-black '>
                            <div className='justify-evenly items-start flex flex-row '>
                           <div className='flex flex-col justify-start items-start w-full ' >
                             <h4  className='text-teal-400 text-2xl hover:underline'>{header}</h4>
                              <p className=' w-3/4  min-w-fit '>{text}</p>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                           <div className='flex flex-col justify-start items-start mx-20'>
                              <h3 className='text-teal-400 text-2xl'>{subheader}</h3>
                              <h2 className='flex justify-items-start place-items-end'>{title}</h2>
                           </div> 
                           </div>
                       </div> 
                       </div>
                       </li>
                       
                       </ul>
                           
                     
    </div>
    </div>
   
    
  )
}

export default CareerList