import React from 'react';
import Carousel from "react-elastic-carousel";
import {Link } from 'react-router-dom';
import Button from "../../shared/button/Button";


import Card from "./Card";
import logo from './cardImages/logo.png'
import logo2 from './cardImages/logo2.png'
import cardbg from './cardImages/card_bg.svg'
import cardbg1 from './cardImages/card_bg_1.svg'
import cardbg2 from './cardImages/card_bg_2.svg'
import cardbg3 from './cardImages/card_bg_3.svg'
import cardbg4 from './cardImages/card_bg_4.svg'




import "./CardSlider.css";




const breakPoints = [
  { width: 1, CardsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
   
 
];


function CardSlider() {
 
  return (
    <div>
   <div className="">
    <div className="h-full w-full flex flex-col justify-between items-center ">
        <div className="w-full px-5 py-10 lg:pb-20 lg:px-32 xl:px-64 flex flex-col justify-evenly gap-5">
            <div className="h-full w-full flex flex-col md:items-center lg:items-start">
                <h1 className="text-4xl font-normal 2xl:text-6xl my-4">SELECT CARD</h1>
                <p className="text-lg text-gray-400 2xl:text-xl">Please select the card you want to buy the tickets with</p>
            </div>
        </div>
        </div>


     
      <div className=" justify-center items-center flex flex-col min-w-[500px] ">
       
      <div className='justify-center flex flex-col w-full items-center h-11/12 '>
     
        <Carousel breakPoints={breakPoints} className='justify-center items-center h-11/12 w-full '>
       
        <Card
       
        img={cardbg}
        altText="card_bg"
        Name="Karthik P"
        CardNumber='XXXX  XXXX  XXXX  7632'
        Valid=" 11/15"
        Expiry=" 03/25"
        CVC=" ···"
        logo={logo}
        />
         <Card
        img={cardbg3}
        altText="card_bg"
        Name="Karthik P"
        CardNumber="XXXX  XXXX  XXXX  7632"
        Valid=" 11/15"
        Expiry=" 03/25"
        CVC=" ···"
        logo={logo}
        />
           <Card
        img={cardbg4}
        altText="card_bg"
        Name="Karthik P"
        CardNumber="XXXX  XXXX  XXXX  7632"
        Valid=" 11/15"
        Expiry=" 03/25"
        CVC=" ···"
        logo={logo}
        />
          <Card
        img={cardbg1}
        altText="card_bg"
        Name="Karthik P"
        CardNumber="XXXX  XXXX  XXXX  7632"
        Valid=" 11/15"
        Expiry=" 03/25"
        CVC=" ···"
        logo={logo2}
   
        />
       
          <Card
        img={cardbg3}
        altText="card_bg"
        Name="Karthik P"
        CardNumber="XXXX  XXXX  XXXX  7632"
        Valid=" 11/15"
        Expiry=" 03/25"
        CVC=" ···"
        logo={logo}
        />
         <Card
        img={cardbg2}
        altText="card_bg"
        Name="Karthik P"
        CardNumber="XXXX  XXXX  XXXX  7632"
        Valid=" 11/15"
        Expiry=" 03/25"
        CVC=" ···"
        logo={logo}
        />
 
        </Carousel>
        </div>
      </div>
      </div>
<div>
<p className="w-full px-5 py-10 lg:pb-20 lg:px-32 xl:px-64 flex flex-col justify-evenly gap-5 text-xl font-medium my-2 ">Click Confirm To Use The Selected Card To Purchase 5 Tickets For 10$</p>
   




<div className="w-full px-5 py-10 lg:pb-20 lg:pl-20 xl:px-20 flex  justify-evenly ">
  <Link  to="/purchase-thanks">
  <Button type='button' name="CONFIRM PURCHASE" classes="py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg"/>
  </Link>
</div>
</div>
</div>


     
  );
}




export default CardSlider
