import React from 'react'

const CareerList = () => {
  return (
    <div>
        <div className='  bg-white flex flex-col justify-center items-start max-w-[ 1440px] min-w-[500px] mx-20'>
            <div className=' h-full  flex flex-col items-start justify-start mt-20'>
              <div className="h-3/6  flex flex-col justify-evenly items-start  min-w-fit ">
                <div className='flex flex-col  '>
                <h4 className='   text-5xl font-medium uppercase item-start font-sans mb-5  '>CURRENT OPEN POSITIONS</h4>
                <h3 className='  text-2xl font-medium font-sans text-gray-500 mb-20' >Please send us an email with the application title as the subject with an attached CV in PDF format!</h3>
                  </div>
                  <div className="flex flex-col justify-evenly items-start mb-20 mx-10">
                    <ul className='w-5/6'>
                        <li className='mb-5 flex flex-col'>
                            <div className='flex flex-row space-x-10'>
                        <h4  className='text-teal-400 text-2xl w-3/4'>Senior Software Developer | Backend | Remote in the USA</h4>
                        <h3 className='text-teal-400 text-2xl justify-end items-end'>Engineering</h3>
                        <div className='flex flex-col space-x-10 justify-evenly'>
                        <p className='justify-start'>Application Development</p>
                            </div>
                        
                        </div>
                        
                            <p className=' w-3/4 justify-end items-end'>Moz is looking for a Senior Software Developer to join our Application Development team.</p>
                           
                        </li>
                        <li className='border-t border-black mb-5'> 
                         <h4 className='text-teal-400 text-2xl'>Senior Software Developer | Rapid Prototyping | Remote in</h4>
                        <p>Moz is looking for a Senior Software Developer to join our Rapid Prototyping Team (RPT). This team is responsible for working closely with product managers to take ideas for new features and quickly validate their technical and business feasibility.</p>
                            </li>
                        <li className='border-t border-black mb-5'>
                        <h4 className='text-teal-400 text-2xl'>Senior Product Analyst | Remote in Canada</h4>
                            <p>Moz is looking for a Product Analyst to define our suite of product metrics.</p>
                        </li>
                        <li className='border-t border-black mb-5'>
                        <h4 className='text-teal-400 text-2xl'>Business Intelligence Manager | Remote in Canada</h4>
                            <p>Moz is hiring a Manager of Business Intelligence to lead our analytics and data warehousing efforts in a new phase of development.</p>
                        </li>
                        <li className='border-t border-black mb-5'>
                        <h4 className='text-teal-400 text-2xl'>Engineering Manager | Remote in Canada</h4>
                            <p>Moz is seeking an Engineering Manager within our Application Development team.</p>
                        </li>
                        <li className='border-t border-black mb-5'>
                        <h4 className='text-teal-400 text-2xl'>Sr. Data Engineer | Remote in Canada</h4>
                            <p>Moz is looking for a talented Senior Software Developer to join our Data Collection team.</p>
                        </li>
                        <li className='border-t border-black mb-5'>
                        <h4 className='text-teal-400 text-2xl w-3/4'>Sr. Data Engineer | Remote in Canada</h4>
                            <p>Moz is looking for a talented Senior Software Developer to join our Data Collection team.</p>
                        </li>
                    </ul>
                  </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CareerList