import React from 'react'
import chat from './images/chat.png'
import phone from './images/phone.png'
import video from './images/video.png'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center'>
    <div className='w-8/12 h-5/6 border flex flex-col items-start justify-evenly '>
      <div className='   text-5xl font-medium uppercase flex flex-col md:flex  md:max-w-5xl items-start justify-evenly '><h3>we can communicate through</h3></div>
      <div className=' container  mx-auto flex flex-wrap items-center justify-center my-16 '>   
   <div className=' lg:w-1/4 w-full lg:pr-3 items-stretch flex-1 h-80  md:flex  mx-auto md:max-w-lg'>
    <div className=' w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700 p-6  md:shrink-0 '>
        <div className=' flex flex-col justify-center items-center '>
    <img className="object-scale-down h-20 w-25 md:object-scale-down " src={phone} alt="phone" />
    </div>
        <h3 className="text-4xl font-medium pt-8 p-2 flex flex-col justify-center items-center">Voice Call</h3>
        <p className='py-2 pt-4 p-2 text-center flex flex-col justify-center items-center'>Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!</p>

        </div>
    </div>
    <div className=' lg:w-1/4 w-full lg:pr-3 items-stretch flex-1 h-80  md:flex  mx-auto md:max-w-lg'>
    <div className= 'w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700 p-6   md:shrink-0 '>
    <div className=' flex flex-col justify-center items-center '>
    <img className="object-scale-down h-20 w-25 md:object-scale-down " src={chat} alt="chat" />
    </div>
        <h3 className="text-4xl font-medium pt-8 p-2 flex flex-col justify-center items-center">Chat</h3>
        <p className='py-2 pt-4 p-2 text-center flex flex-col justify-center items-center'>Need to talk to someone?Come have a chat with your therapist!</p>

        </div>
    </div>
    <div className=' lg:w-1/4 w-full lg:pr-3 items-stretch flex-1 h-80  md:flex  mx-auto md:max-w-lg '>
    <div className=' w-full max-w-sm bg-white border border-gray-200  rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700 p-6  md:shrink-0 '>
    <div className=' flex flex-col justify-center items-center '>
    <img className="object-scale-down h-20 w-25 md:object-scale-down " src={video} alt="video" />
    </div>
        <h3 className="text-4xl font-medium pt-8 p-2 flex flex-col justify-center items-center">Video Call</h3>
        <p className='py-2 pt-4 p-2 text-center flex flex-col justify-center items-center'>For better experience therapists recommend video calls, but always remember that its a choice!</p>

        </div>
    </div>
</div>  
</div>
</div> 
   
  )
}

export default Cards