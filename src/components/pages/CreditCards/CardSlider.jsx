
import React from 'react';
import Carousel from "react-elastic-carousel";

import Card from "./Card";
import logo from './images/logo.png'
import logo2 from './images/logo2.png'
import cardbg from './images/card_bg.svg'
import cardbg1 from './images/card_bg_1.svg'
import cardbg2 from './images/card_bg_2.svg'
import cardbg3 from './images/card_bg_3.svg'
import cardbg4 from './images/card_bg_4.svg'


import "./CardSlider.css";


const breakPoints = [
  { width: 1, CardsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
   
  
];

function CardSlider() {
  
  return (
   <div className="">
      
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
     
  );
}


export default CardSlider