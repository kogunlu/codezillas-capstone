import React from 'react'
import { useDispatch  } from 'react-redux';
import swal from 'sweetalert';



function CardContact() {

    

    const dispatch = useDispatch()
    
        const handleContactType = (e) => {
            setContactType(e.target.value)
            dispatch()
        }

   function handleClick(){
        if(preference === ""){
            swal("Error!", "Please select an answer for this question!!");
        }else{
            dispatch((preference))
            btnClick()
        }
    } 

  return (
    <div className=' h-96 w-full md:w-5/6 lg:w-4/6 px-2 md:px-10 py-5 flex  justify-between items-start   flex-wrap'>

        <div className='h-auto mb-6'>
            <h2 className='text-xl font-medium'>
                Type of contact
            </h2>
        </div>

        <div className='w-full h-auto py-5 md:py-0 flex flex-col justify-center items-start gap-1 '>
            <div className='mb-2'>
                <input 
                type="radio" 
                value={contactType}
                onChange={handleChange}
                checked= {preference === 'service'}
                /> I have a question about the service.
            </div>
                
            <div className='mb-2'>
                <input 
                type="radio" 
                value={contactType}
                onChange={handleChange} 
                checked= {preference === 'support'}
                /> I’m a registered client and I need support.
            </div>

            <div className='mb-2'>
                <input
                type="radio" 
                value={contactType}
                onChange={handleChange}
                checked= {preference === 'joining'}
                /> I’m a counselor interested in joining.
            </div>

            <div className='mb-2'>
                <input
               
                type="radio" 
                value={contactType} 
                onChange={handleChange}
                checked= {preference === 'counselorSupport'}
                /> I’m a registered counselor and I need support.
            </div>    
                
            <div className='mb-2'>
                <input
           
                type="radio" 
                value={contactType}
                onChange={handleChange}
                checked= {preference === 'business'}
                /> I have a business-related inquiry.
            </div>

            <div className='mb-2'>
                <input
                type="radio" 
                value={contactType}
                onChange={handleChange}
                checked= {preference === 'healingOnline'}
                /> I’m interested in Healing Online for my organization.
            </div>

            <div>
                <input
                type="radio" 
                value={contactType}
                onChange={handleChange}
                checked= {preference === 'billing'}
                /> I have a billing related question.
            </div>
        </div>

      
    </div>
  )
}

export default CardContact