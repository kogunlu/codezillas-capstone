import React, {useState, useEffect} from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill  } from "react-icons/bs";
import { sliderArray } from "./RecentBlogs";

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




  return (
    <div className=' bg-cyan-50 from-white to-gray-50 '>

        <p className='text-3xl font-semibold pt-14 pb-16 pl-40'>RECENT BLOGS</p>


<div className='grid grid-cols-3'>
        
        <div className='relative'>    
        <img className=' pl-36'  src={imgs[index]} alt="RecentBlogsPicture"/>
    
        <h1 className='absolute text-white text-base top-3 left-40'>MENTAL HEALTH </h1>
        <h1 className='absolute text-white text-base top-8 left-40'>AND TECHNOLOGY</h1>
        </div>
          
        <div className='relative'>     
        <img  src={imgs[index]} alt="RecentBlogsPicture"/>    
        <h1 className='absolute text-white text-2xl top-32 left-10 bg-gray-800 opacity-50'>HEAL FROM </h1>
        <h1 className='absolute text-white text-2xl top-40 left-10 bg-gray-800 opacity-50'>TRAUMA</h1>        
        </div>

        <div className='relative'>    
        <img src={imgs[index]} alt="RecentBlogsPicture"/>
    
        <h1 className='absolute text-white text-base top-3 left-40'>MENTAL HEALTH </h1>
        <h1 className='absolute text-white text-base top-8 left-40'>AND TECHNOLOGY</h1>
        </div>

</div>

<div className='actions'>
          <button className=' bg-none text-white md:text-2xl lg:text-3xl rounded hover:text-slate-300 focus:outline-none' 
          onClick={prev} type='button'
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button className=' bg-none text-white md:text-2xl lg:text-3xl rounded hover:text-slate-300 focus:outline-none' 
          onClick={next} type='button'
          >
            <BsFillArrowRightCircleFill />
          </button>

        </div>
      </div>


    
  )

}

export default Slider