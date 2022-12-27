import React from 'react'

function Card(props) {
    const {title,dollar,text,button}=props;
  return (
    <div className='border border-solid border-gray-200 rounded-md shadow-xl '>
      
      <h2 className='text-3xl font-semibold pt-12  flex flex-col items-center justify-center'>{title}</h2>
      <div className='text-gray-400 text-xl pt-1 font-medium flex flex-col items-center justify-center'>{dollar}</div>
      <div className='text-base pt-2 font-normal'> {text} </div>
      <div className='flex flex-col items-center justify-center pb-14'>
            <input 
            type="button" 
            value={button} 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'/>    
        </div>

    </div>
  )
}

export default Card