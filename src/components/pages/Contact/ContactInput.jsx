import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore"; 
import db from "../../../db/firebase.config"

function ContactInput(name, email, details){
    
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [details, setDetails] = useState("")
  const navigate = useNavigate()

  async function sendData(obj){
    
    await setDoc(doc(db, "subscription-list", uuidv4()), {
      input: obj
    });

  }

 

  function onChange(){
    sendData(name, email, details).then(setName, setEmail, setDetails("")).then(navigate('/thanks-contacts'))
  }
 
    return {
        name, email, details 
       render: (
       <form className=' w-full md:w-1/4 lg:w-4/6 px-2 md:px-8 sm:text-small  '>
        <span className='mb-3 '>
            <label htmlFor='name' className='font-medium'>Full Name:
            <input type="name" placeholder='Enter your full name here...' value={nameValue} onChange={handleNameChange} className=' box-border w-full border rounded-md
      bg-transparent border-slate-300 p-3 mt-2 mb-2 shadow-md focus:outline-none'/> 
            </label>
        </span>
        <span className='mb-3 '>
            <label htmlFor='email' className='font-medium'>Email:
            <input type="email" placeholder='Enter your email address here...' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border rounded-md
             border-slate-300 p-3 mt-2 mb-2 shadow-md focus:outline-none'/>
            </label>
        </span>
        <span className=''>
            <label htmlFor='details' className='font-medium'>Details:
            <textarea type="details" rows={6} placeholder='Enter your details here...' value={details} onChange={(e) => setDetails(e.target.value)} className='w-full border rounded-md
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
    )}
}

export default ContactInput