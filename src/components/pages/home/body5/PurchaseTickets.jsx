import React from 'react';
import {Link } from 'react-router-dom';
import PurchaseCard from './PurchaseCard';
import Button from '../../../shared/button/Button';
/* Purchase button should take us to the Select Card and Learn More button shoul navigate to the Why Work With Healing? */
function PurchaseTickets(props) {
  const {auth} = props
  let url;
  if (auth) {
    url = 'select-card'
  }else {
    url = 'login'
  }

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col justify-between sm:items-center lg:items-start lg:px-24 xl:px-32 2xl:px-48">
          <p className="text-4xl mt-12 mb-6 text-center lg:text-start 2xl:text-6xl font-bold ">
            PURCHASE TICKETS
          </p>
          <p className="text-l font-normal mb-16 text-center lg:text-start 2xl:text-3xl ">
            PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!
          </p>
        </div>

        <div className="flex flex-col gap-4 2xl:gap-20 items-center ">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-14 xl:gap-32 2xl:gap-20">
            <PurchaseCard title="5 TICKETS" dollar="10$" button="PURCHASE" url={url} />

            <PurchaseCard title="25 TICKETS" dollar="40$" button="PURCHASE" url={url} />

            <PurchaseCard title="50 TICKETS" dollar="70$" button="PURCHASE" url={url} />
          </div>

        <div className="flex flex-col text-center mb-10 border border-solid w-5/6 border-gray-200 rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold pt-12  flex flex-col items-center justify-center 2xl:text-5xl">
        ARE YOU A COUNSELOR?
        </h1>
        <h2 className="text-base pt-2 font-normal 2xl:text-2xl pb-6"> 
        interested in joining our mental health platform? you decide your schedule and how much you want to work, we&apos;ll take care of the client referrals and billing details!
        </h2>

        <div className="flex flex-col items-center justify-center pb-10 2xl:text-3xl 2xl:pb-12">
        <Link  to="/work-with-healing">
        <Button
              type="button"
              name="LEARN MORE"
              classList="py-2 px-7 hover:bg-cyan-200 bg-cyan-400 font-medium rounded"
            />
          </Link>
          </div>
        
        </div>


        </div>
      </div>
    </div>
  );
}


export default PurchaseTickets;
