
import React from 'react'
import PurchaseTickets from './body5/PurchaseTickets';
import Slidernew from './body4/Slider';
import Body2 from './Body2/Body2'
import Body3 from './Body3/Body3'
import Body1 from './body1/Body1';
import Footer from '../../shared/footer/Footer';

function Home() {
  return (
    <div>
      <Body1 />
      <Body2 />
      <Body3 />
     <Slidernew/>
     <PurchaseTickets/>
      <Footer />
     

      </div> 
  );
}

export default Home 
