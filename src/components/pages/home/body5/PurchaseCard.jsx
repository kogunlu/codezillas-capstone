import React from 'react'
 
function PurchaseCard(props) {
    const {title,dollar,text,button}=props;
  return (
    
    <div className='border border-solid border-gray-200 rounded-lg shadow-xl'>
      <div className='flex flex-col m-6'>
        <h1 className='text-3xl font-semibold pt-12  flex flex-col items-center justify-center 2xl:text-6xl'>{title}</h1>
        <h2 className='text-gray-400 text-xl pt-3 font-medium flex flex-col items-center justify-center 2xl:text-3xl 2xl:py-8'>{dollar}</h2>
        <h2 className='text-base pt-2 font-normal 2xl:text-2xl pb-6'>{text}</h2>

        <div className='flex flex-col items-center justify-center pb-10 2xl:text-3xl 2xl:pb-12'>
        <input
            type="button"
            value={button}
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'/>   
        </div>
        </div>
        </div>    
    
    )
}
 
export default PurchaseCard