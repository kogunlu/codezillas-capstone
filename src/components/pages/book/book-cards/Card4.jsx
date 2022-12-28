import React, {useState} from 'react'
import { useDispatch  } from 'react-redux';
import {setAnswer4} from "../../../../features/booking/bookingSlice"


function Card4({btnClick}) {

    const [selected, setSelected] = useState([])
    const [checkList, setCheckList] = useState({
        male: false,
        female: false,
        young: false,
        old: false,
        nonReligious: false
    })

    function handleCheck(e) {

        const { value } = e.target;

        const newCheckList = { ...checkList };

        newCheckList[value] = !newCheckList[value]

        setCheckList(newCheckList);
    }

    const dispatch = useDispatch()

    function handleClick(){
        if(checkList.male){
            setSelected(selected.push("male"))
        }
        if(checkList.female){
            setSelected(selected.push("female"))
        }
        if(checkList.young){
            setSelected(selected.push("young"))
        }
        if(checkList.old){
            setSelected(selected.push("old"))
        }
        if(checkList.nonReligious){
            setSelected(selected.push("non-religious"))
        }

        dispatch(setAnswer4(selected))
        btnClick()
    }

  return (
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 lg:w-4/6 px-2 md:px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap'>

        <div className='h-auto'>
            <h2 className='text-2xl font-medium'>
                Are There Any Specific Qualities That You Would Like In A Counselor?* 
            </h2>
            <p className='text-sm font-medium italic'>(* If you don’t have any preference, you can skip this question)</p>
        </div>

        <div className='w-full h-auto py-5 md:py-0 flex flex-col justify-center '>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="male" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.male}
                />
                <p className='text-md md:text-lg font-normal'>
                    I Prefer A Male Counselor
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="female" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.female}
                />
                <p className='text-md md:text-lg font-normal'>
                    I Prefer A Female Counselor
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="young" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.young}
                />
                <p className='text-md md:text-lg font-normal'>
                    I Prefer A Young Counselor (45-)
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="old" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.old}
                />
                <p className='text-md md:text-lg font-normal'>
                    I Prefer An Old Counselor (45+)
                </p>
                
            </div>

            <div className='flex justify-start gap-2'>

                <input 
                type="checkbox" 
                value="nonReligious" 
                className='rounded-lg pl-2 py-2'
                onChange={(e) => handleCheck(e)}
                checked = {checkList.nonReligious}
                />
                <p className='text-md md:text-lg font-normal'>
                    I Prefer A Non-Religious Counselor
                </p>
                
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

export default Card4