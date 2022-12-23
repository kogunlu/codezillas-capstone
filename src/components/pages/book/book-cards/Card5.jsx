import React, {useState} from 'react'
import { useDispatch  } from 'react-redux';
import {setAnswer5} from "../../../../features/booking/bookingSlice"


function Card5({btnClick}) {

    const [selected, setSelected] = useState([])
    const [checkList, setCheckList] = useState({
        depression: false,
        stress: false,
        relationship: false,
        family: false,
        trauma: false,
        eating: false
    })

    function handleCheck(e) {

        const { value } = e.target;

        const newCheckList = { ...checkList };

        newCheckList[value] = !newCheckList[value]

        setCheckList(newCheckList);
    }

    const dispatch = useDispatch()

    function handleClick(){
        if(checkList.depression){
            setSelected(selected.push("depression"))
        }
        if(checkList.stress){
            setSelected(selected.push("stress"))
        }
        if(checkList.relationship){
            setSelected(selected.push("relationship"))
        }
        if(checkList.family){
            setSelected(selected.push("family"))
        }
        if(checkList.trauma){
            setSelected(selected.push("trauma"))
        }
        if(checkList.eating){
            setSelected(selected.push("eating"))
        }

        dispatch(setAnswer5(selected))
        btnClick()
    }

  return (
    <div className='border border-solid border-gray-200 h-auto md:h-96 w-full md:w-5/6 px-2 md:px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap wrap'>

        <div className='h-auto'>
            <h2 className='text-2xl font-medium'>
                Are There Any Issues You Would Like To Focus On?* 
            </h2>
            <p className='text-sm font-medium italic'>(* If there is no spesific issue, you can skip this question.)</p>
        </div>

        <div className='w-full h-auto py-5 md:py-0 flex flex-col justify-center '>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="depression" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.depression}
                />
                <p className='text-lg font-normal'>
                    Depression
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="stress" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.stress}
                />
                <p className='text-lg font-normal'>
                    Stress And Anxiety
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="relationship" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.relationship}
                />
                <p className='text-lg font-normal'>
                    Relationship issues
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="family" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.family}
                />
                <p className='text-lg font-normal'>
                    Family Conflicts
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="trauma" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.trauma}
                />
                <p className='text-lg font-normal'>
                    Trauma And Abuse
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="eating" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.eating}
                />
                <p className='text-lg font-normal'>
                    Eating Disorders
                </p>
                
            </div>

        </div>

        <div className='flex justify-start items-center w-5/6 h-auto pt-2'>
            <input 
            type="button" 
            value="NEXT" 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  )
}

export default Card5