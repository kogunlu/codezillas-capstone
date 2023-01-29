import React from 'react'
import { useNavigate } from 'react-router-dom'

const CareerPage = () => {
 
        const navigate = useNavigate()
      
        function handleClick(){
          navigate('/OpenPositions')
        }
      
        return (
          
          <div className='  bg-white flex flex-col justify-center items-center max-w-[ 1440px] min-w-[500px]'>
            <div className='w-8/12 h-full  flex flex-col items-start justify-start mt-20'>
              <div className="h-3/6  flex flex-col justify-evenly items-start  min-w-fit ">
                <div className='flex flex-col  '>
                <h4 className='  text-5xl font-medium uppercase item-start font-sans mb-5  '>CAREERS AT HEALING</h4>
                <h3 className='w-3/4  text-xl font-medium font-sans text-gray-500 mb-20' >Be a part of making people feel better.</h3>
                  </div>
                <div className="flex flex-col justify-evenly items-start">
                  <p className=' font-sans font-medium   md:text-lg mt-10'>Our SEO software cuts through mountains of data to surface critical insights. We build and maintain systems that process massive amounts of data (we`re talking 36 trillion records per day and multiple petabytes of storage.) We model transparent and empathetic marketing for the world. We educate our community, making every effort to help them improve their skill. And we do it all by fostering a culture that encourages accountability, empathy, and transparency.</p>
                </div>
      
              </div>
              <div className="flex flex-col justify-evenly item-start">
                  <p className=' font-sans font-medium mb-20  md:text-lg'>What role will you play?</p>
                </div>
                <div className="flex flex-col items-start justify-evenly gap-5 sm:-mt-10 ">
              <input 
                    type="button" 
                    value="SEE OUR OPEN LIST" 
                    className='  py-3 px-10 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-lg md:text-lg'
                    onClick={() => handleClick()}/>
              </div>
              
              </div>
              <div className='w-full max-w-screen flex flex-col min-w-screen '>
              <div className='  bg-amber-200 flex flex-col justify-center items-center max-w-screen min-w-[900px] mt-20  '>
      <div className='w-8/12 flex flex-col items-start justify-evenly '>
        <div className="h-3/6 flex flex-col justify-evenly items-start gap-5 min-w-fit ">
            <h4 className='w-3/4  text-4xl font-medium uppercase item-start font-sans mt-5 text-slate-600 '>OUR HIRING PHILOSOPHY</h4>
            <p className='w-3/4 font-medium font-sans mb-10 text-slate-600'>To build the very best SEO tools, we need a workforce that reflects the diversity of our communities and customers. We want Online Therapy to be a place where everyone feels welcome and engaged, bar none. It`s our mission and promise to interview a diverse and representative slate of candidates before making an offer for our open roles.</p>
</div>
</div></div>
</div>
              
            </div>
            
            
         
      
  )
}

export default CareerPage