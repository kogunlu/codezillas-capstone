import React from "react";
import PurchaseCard from "./PurchaseCard";

function PurchaseTickets(){
    return(
<div>
        <p className='text-4xl font-normal pt-14 pb-6 text-center lg:text-start lg:px-40 2xl:text-8xl 2xl:px-80'>PURCHASE TICKETS</p>
        <p className='text-l font-normal pb-16 text-center lg:text-start lg:px-40 2xl:text-4xl 2xl:px-80'>PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!</p>

    <div className="flex flex-col gap-4 2xl:gap-20">
    <div className="flex flex-wrap justify-center w-full gap-4 2xl:justify-start 2xl:px-80 2xl:gap-40">  
        <PurchaseCard className="w-40" title="5 TICKETS" dollar="10$"
        button="PURCHASE"/>
          
        <PurchaseCard title="25 TICKETS" dollar="40$"
        button="PURCHASE"/>
         
        <PurchaseCard title="50 TICKETS" dollar="70$"
        button="PURCHASE"/>
    </div>

    <div className="flex justify-center">
        <PurchaseCard title="ARE YOU A COUNSELOR?" text="interested in joining our mental health platform? you decide your schedule and how much you want to work, we'll take care of the client referrals and billing details!"
        button="LEARN MORE"/>
    </div>
    </div>

</div>
    )
}
       
export default PurchaseTickets
