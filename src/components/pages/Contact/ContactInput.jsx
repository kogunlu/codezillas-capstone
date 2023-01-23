
import {useNavigate} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore"; 
import db from "../../../db/firebase.config"

function ContactInput({nameValue, handleNameChange, emailValue, handleEmailChange, detailsValue, handleDetailsChange}){
    
  
  
  
  const navigate = useNavigate()

  async function sendData(nameValue1, emailValue1, detailsValue1){
    
    await setDoc(doc(db, "contactUs-list", uuidv4()), {
      name: nameValue1,
      email: emailValue1,
      details: detailsValue1
    });

  }

 

  function onChange(){
    sendData(nameValue, emailValue, detailsValue).then(handleNameChange, handleEmailChange, handleDetailsChange, ("")).then(navigate('/thanks-contacts'))
  }

    return (
       <form className=' w-full md:w-1/4 lg:w-4/6 px-2 md:px-8 sm:text-small  '>
        <span className='mb-3 '>
            <label htmlFor='name' className='font-medium'>Full Name:
            <input type="name" placeholder='Enter your full name here...' value={nameValue} onChange={handleNameChange} className=' box-border w-full border rounded-md
      bg-transparent border-slate-300 p-3 mt-2 mb-2 shadow-md focus:outline-none'/> 
            </label>
        </span>
        <span className='mb-3 '>
            <label htmlFor='email' className='font-medium'>Email:
            <input type="email" placeholder='Enter your email address here...' value={emailValue} onChange={handleEmailChange} className='w-full border rounded-md
             border-slate-300 p-3 mt-2 mb-2 shadow-md focus:outline-none'/>
            </label>
        </span>
        <span className=''>
            <label htmlFor='details' className='font-medium'>Details:
            <textarea type="details" rows={6} placeholder='Enter your details here...' value={detailsValue} onChange={handleDetailsChange} className='w-full border rounded-md
             border-slate-300 p-3 mt-2 shadow-md focus:outline-none'  style={{resize: "none"}}/>
            </label>
        </span>
        <div className='flex items-center w-2/3 h-1/7 mb-12 mt-5 focus:outline-none'>
            <input 
            type="button" 
            value="SUBMIT" 
            className='py-2 px-5 w-6/12 md:w-5/12 lg:w-3/12 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => onChange()} />
          
        </div> 
       </form>
    )
}

export default ContactInput