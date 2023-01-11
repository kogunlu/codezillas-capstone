import React, {useState, useEffect}  from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import { sliderArray } from "./SliderArray";

function Slider(){

    const [index, setIndex] = useState(0)
 
    useEffect(() => {
      setIndex(0)
    },[])
   
    const imgs = []
   
    sliderArray.map(item => {
      return (
        imgs.push(item.picture)
      )
    })
   
    const next = () => {
      if(index === imgs.length -1 ){
        setIndex(0)
      }else{
        setIndex(index+1)
      }
    }
   
    const prev = () => {
      if(index === 0){
        setIndex(imgs.length -1)
      }else{
        setIndex(index-1)
      }
    }
  
    return(
<div className="bg-cyan-50 flex justify-center mt-20 mb-20 pb-40">
    <div className="w-5/6 flex flex-col items-center">
    <p className="w-5/6 text-center text-4xl md:text-start 2xl:text-6xl font-bold mt-10 mb-16 ">RECENT BLOGS</p>
 





 <div className="flex flex-wrap justify-center w-full gap-8 mt-10">
        <div className='relative w-1/4'>    
        <img src={imgs[index]} alt="RecentBlogsImages"/>
   
        <h1 className='absolute text-white text-base top-3 left-5'>MENTAL HEALTH </h1>
        <h1 className='absolute text-white text-base top-8 left-5'>AND TECHNOLOGY</h1>
        </div>
         
        <div className='relative w-1/4'>    
        <img  src={imgs[index]} alt="RecentBlogsPicture"/>    
        <h1 className='absolute text-white text-2xl top-32 left-10 bg-gray-800 opacity-50'>HEAL FROM </h1>
        <h1 className='absolute text-white text-2xl top-40 left-10 bg-gray-800 opacity-50'>TRAUMA</h1>        
        </div>
 
        <div className='relative w-1/4'>    
        <img src={imgs[index]} alt="RecentBlogsPicture"/>
   
        <h1 className='absolute text-white text-base top-3 left-5'>MENTAL HEALTH </h1>
        <h1 className='absolute text-white text-base top-8 left-5'>AND TECHNOLOGY</h1>
        </div>
        </div>
    </div>


       
        
          <button onClick={prev} type='button'>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 border-solid border-2 border-black rounded ">
            < BsChevronCompactLeft size={20}/>
            </div>
          </button>
          <button onClick={next} type='button'>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 border-solid border-2 border-black rounded ">
            <BsChevronCompactRight size={20}/>
            </div>
          </button>
 
        

    

</div>
    


    )
}
export default Slider