import React, {useState} from 'react'
import { useDispatch  } from 'react-redux';
import swal from 'sweetalert';
import {setAnswer6} from "../../../../features/booking/bookingSlice"


function Card6({btnClick}) {

    const [text, setText] = useState("")
    

    function handleChange(e) {
        setText(e.target.value)
    }

    const dispatch = useDispatch()

    function handleClick(){
        
        if(text === ""){
            swal("Error!", "This part can not be empty!!");
        }else{
            dispatch(setAnswer6(text))
            btnClick()
        }
    }

  return (
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 lg:w-4/6 px-2 md:px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap wrap'>

        <div className='w-full h-5/6 flex flex-col justify-center gap-2'>

            <div className='flex w-full justify-center h-5/6'>

                <textarea 
                className='border focus:outline-none text-start w-full h-full rounded-sm pl-2 py-2'
                onChange={(e) => handleChange(e)}
                value={text}
                style={{resize: "none"}}
                />
                 
            </div>

        </div>

        <div className='flex justify-start items-center w-5/6 h-1/6 pt-2'>
            <input 
            type="button" 
            value="NEXT" 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  )
}

export default Card6