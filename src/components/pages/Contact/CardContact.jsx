import React, {useState} from 'react'
import { useDispatch  } from 'react-redux';
import swal from 'sweetalert';



function CardContact({btnClick}) {

    const [preference, setPreference] = useState("")


    const dispatch = useDispatch()
    
        function handleChange(e){
            setPreference(e.target.value)
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
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 lg:w-4/6 px-2 md:px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap'>

        <div className='h-auto'>
            <h2 className='text-xl font-medium'>
                Type of contact
            </h2>
        </div>

        <div className='w-full h-auto py-5 md:py-0 flex flex-col justify-center items-start gap-1 '>
            <div>
                <input 
                type="radio" 
                value="service"
                onChange={handleChange}
                checked= {preference === 'service'}
                /> I have a question about the service.
            </div>
                
            <div>
                <input 
                type="radio" 
                value="support"
                onChange={handleChange} 
                checked= {preference === 'support'}
                /> I`m a registered client and I need support.
            </div>

            <div>
                <input
                type="radio" 
                value="joining" 
                onChange={handleChange}
                checked= {preference === 'joining'}
                /> I`m a counselor interested in joining.
            </div>

            <div>
                <input
                type="radio" 
                value="counselorSupport" 
                onChange={handleChange}
                checked= {preference === 'counselorSupport'}
                /> I`m a registered counselor and I need support.
            </div>    
                
            <div>
                <input
                type="radio" 
                value="business"
                onChange={handleChange}
                checked= {preference === 'business'}
                /> I have a business-related inquiry.
            </div>

            <div>
                <input
                type="radio" 
                value="healingOnline"
                onChange={handleChange}
                checked= {preference === 'healingOnline'}
                /> I`m interested in Healing Online for my organization.
            </div>

            <div>
                <input
                type="radio" 
                value="billing"
                onChange={handleChange}
                checked= {preference === 'billing'}
                /> I have a billing related question.
            </div>
        </div>

        <div className='flex justify-start items-center w-5/6 h-auto'>
            <input 
            type="button" 
            value="NEXT" 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  )
}

export default CardContact