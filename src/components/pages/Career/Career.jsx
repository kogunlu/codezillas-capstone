import React from 'react';
import Footer from '../../shared/footer/Footer';
import CareerPage from './CareerPage';
import OpenPositions from './OpenPositions';

const Career = () => {
  return (
  <><div>
      <CareerPage />
    </div>
    <div className=' max-w-screen min-w-[900px] h-96 scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full overflow-x-hidden'>
        <OpenPositions />
      </div></>
      <Footer />
    </>
  );
};

export default Career;
