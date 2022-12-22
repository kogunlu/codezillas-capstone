import React, {useState} from 'react'
import { useDispatch  } from 'react-redux';
import {setAnswer3} from "../../../../features/booking/bookingSlice"


function Card3({btnClick}) {

    // With this state, we will track the user's selection
    const [selected, setSelected] = useState("")

    const dispatch = useDispatch()

    // With this dispatch, we will save user's selection to our store. Later, we will use these answers to update our firebase db
    function handleClick(){
        if(selected === ""){
            // eslint-disable-next-line no-alert
            alert("Please select an answer for this question!")
        }else if(selected === "Yes"){
            dispatch(setAnswer3(true))
            btnClick()
        }else{
            dispatch(setAnswer3(false))
            btnClick()
        }
    }

  return (
    <div className='border border-solid border-gray-200 h-96 w-5/6 px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap wrap'>

        <div className='h-1/6'>
            <h2 className='text-2xl font-medium'>
                Have You Ever Been In Therspy Before?
            </h2>
        </div>

        <div className='w-full h-4/6 flex flex-col justify-start gap-2 pt-5'>


            <input 
            type="button" 
            value="Yes" 
            className='w-full border border-solid border-2 border-gray-200 rounded-lg text-xl font-semibold pl-2 py-2 text-left hover:bg-gray-100 focus:bg-cyan-400 focus:text-slate-100'
            onClick={e => setSelected(e.target.value)} 
            />

            <input 
            type="button" 
            value="No" 
            className='w-full border border-solid border-2 border-gray-200 rounded-lg text-xl font-semibold pl-2 py-2 text-left hover:bg-gray-100 focus:bg-cyan-400 focus:text-slate-100'
            onClick={e => setSelected(e.target.value)}  
            />

        </div>

        <div className='flex justify-start items-center w-5/6 h-1/6'>
            <input 
            type="button" 
            value="NEXT" 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  )
}

export default Card3