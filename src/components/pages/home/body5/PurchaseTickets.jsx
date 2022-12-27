import React from "react";
import Card from "./Card";

function Purchase(){
    return(
<div>
<p className='text-4xl font-normal pt-14 pb-6 pl-40'>PURCHASE TICKETS</p>
<p className='text-l font-normal pb-16 pl-40'>PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!</p>

<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

        <div className=''>
        <Card title="5 TICKETS" dollar="10$" 
        button="PURCHASE"/>
        </div>
        <div className=''>
        <Card title="25 TICKETS" dollar="40$"
        button="PURCHASE"/>
        </div>
        <div className=''>
        <Card title="50 TICKETS" dollar="70$"
        button="PURCHASE"/>
        </div>
</div>
        <div className="pb-24 grid grid-cols-1 place-items-center ">
        <Card title="ARE YOU A COUNSELOR?" text="interested in joining our mental health platform? you decide your schedule and how much you want to work, we'll take care of the client referrals and billing details!" 
        button="LEARN MORE"/>
        </div>
    
</div>
        
    )
}
        
export default Purchase
