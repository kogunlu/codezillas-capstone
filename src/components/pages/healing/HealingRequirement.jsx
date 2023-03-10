import React from 'react';
import {Link } from 'react-router-dom';
import RequirementImg from "./healingImage/RequirementImg.jpg"
import Button from '../../shared/button/Button';

// Get started should link us to create-account page
function HealingRequirement() {
    return (
<div className="h-full w-full flex flex-col justify-between items-center ">
  <div className='lg:flex lg:flex-row'>
  <div className="w-full px-10 py-10 lg:w-4/6 lg:pl-20 xl:px-20 flex flex-col justify-evenly gap-2">

      <h1 className=" flex text-4xl allign-center lg:items-start font-medium 2xl:text-6xl my-8 ">WHY WORK WITH HEALING?</h1>                   
      <p className="text-gray-800 2xl:text-xl uppercase font-semibold">Reliable Income</p>
      <p className=" 2xl:text-xl text-lg text-gray-700 pb-8"> Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life&apos;s challenges. BetterHelp can be your main source of income &#40;&quot;full time&quot;&#41; or a supplement to your current work.</p>
      <p className="text-gray-800 2xl:text-xl uppercase font-semibold"> Focus on Counseling</p>
      <p className="2xl:text-xl text-lg text-gray-700 pb-8">No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>
      <p className="text-gray-800 2xl:text-xl uppercase font-semibold">Focus on Counseling</p>
      <p className=" 2xl:text-xl text-lg text-gray-700 pb-16"> No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>

      <p className="text-gray-800 text-4xl uppercase font-semibold">Requirements</p>
      <ul className="list-disc list-inside text-black">
      <li className='2xl:text-xl text-lg text-gray-700'>Licensed by a State Board to provide counseling</li>
      <li className='2xl:text-xl text-lg text-gray-700'>Experience in counseling for adults, couples, and/or teens</li>
      <li className='2xl:text-xl text-lg text-gray-700'>Excellent writing skills</li>
      <li className='2xl:text-xl text-lg text-gray-700'>Reliable Internet connection</li>
      <li className='2xl:text-xl text-lg text-gray-700'>Currently residing in the US</li>
      </ul>
  </div>

  <div className="w-full lg:w-2/6 px-5 py-10  xl:py-20 flex flex-col gap-5 lg:my-20">
      <div className="w-full flex justify-center items-start "> 
          <img src={RequirementImg} alt="RequirementImg" />
      </div>
  </div>
  </div>
  
  <div className="w-full px-5 py-10 lg:pb-20 lg:pl-20 xl:px-20 2xl:px-32 flex flex-col justify-evenly gap-5">
      <Link  to="/create-therapist">
      <Button type='button' name="GET STARTED" classList="py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg"/>
      </Link>
  </div>
  </div>
    );
  }
  
  export default HealingRequirement
