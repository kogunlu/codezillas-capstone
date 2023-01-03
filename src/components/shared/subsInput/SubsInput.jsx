import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {FaTelegramPlane} from "react-icons/fa"
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore"; 
import db from "../../../db/firebase.config"

function SubsInput(){
    
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  async function sendData(obj){
    
    await setDoc(doc(db, "subscription-list", uuidv4()), {
      email: obj
    });

  }

  function handleClick(){
    sendData(email).then(setEmail("")).then(navigate('thanks-subs'))
  }

    return(
        <div className='flex justify-start items-center'>
              <input 
              type='email'
              className='border border-gray-400 rounded-l-md h-10 pl-2 focus:outline-none' 
              placeholder='Enter your e-mail'
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <button type='button' className='h-10  bg-cyan-400 pl-1 pr-2 rounded-r-md border-y border-r border-gray-400 hover:bg-cyan-300 text-xl' onClick={() => handleClick()}>
                <FaTelegramPlane />
              </button>
          </div>
    )
}

export default SubsInput