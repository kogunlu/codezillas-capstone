import React from 'react'
import CareerList from './CareerList'

const OpenPositions = () => {
  return (
    <div>
         <div className='  bg-white flex flex-col justify-center items-start max-w-[ 1440px] min-w-[700px] ml-10'>
            <div className=' h-full  flex flex-col items-start justify-start mt-20'>
              <div className="h-3/6  flex flex-col justify-evenly items-start  min-w-fit ">
                <div className='flex flex-col  '>
                <h4 className='   text-5xl font-medium uppercase item-start font-sans mb-5  '>CURRENT OPEN POSITIONS</h4>
                <h3 className='  text-2xl font-medium font-sans text-gray-500 mb-20' >Please send us an email with the application title as the subject with an attached CV in PDF format!</h3>
             
            

        <CareerList 
        header="Senior Software Developer | Backend | Remote in the USA"
        text="Moz is looking for a Senior Software Developer to join our Application Development team"
        subheader="Engineering"
        title="Application Development"
        
         />
          <CareerList 
        header="Senior Software Developer | Rapid Prototyping | Remote in"
        text="Moz is looking for a Senior Software Developer to join our Rapid Prototyping Team (RPT). This team is responsible for working closely with product managers to take ideas for new features and quickly validate their technical and business feasibility."
        subheader="Engineering"
        title="Rapid Prototyping"
         />
          <CareerList 
        header="Senior Product Analyst | Remote in Canada"
        text="Moz is looking for a Product Analyst to define our suite of product metrics"
        subheader="Engineering"
        title="Business Intelligence"
         />
          <CareerList 
        header="Business Intelligence Manager | Remote in Canada"
        text="Moz is hiring a Manager of Business Intelligence to lead our analytics and data warehousing efforts in a new phase of development."
        subheader="Engineering"
        title="Business Intelligence"
         />
          <CareerList 
        header="Engineering Manager | Remote in Canada"
        text="Moz is seeking an Engineering Manager within our Application Development team"
        subheader="Engineering"
        title="Business Intelligence"
         />
          <CareerList 
        header="Sr. Data Engineer | Remote in Canada"
        text="Moz is looking for a talented Senior Software Developer to join our Data Collection team."
        subheader="Engineering"
        title="Data Collection"
         />
          <CareerList 
        header="Sr. Data Engineer | Remote in Canada"
        text="Moz is looking for a talented Senior Software Developer to join our Data Collection team."
        subheader="Engineering"
        title="Data Collection"
         />
       
       
  
   </div>
   </div>
    </div>
    </div>
   </div>
  )
}

export default OpenPositions