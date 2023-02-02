import React from 'react';
import {Link } from 'react-router-dom';

function PurchaseCard(props) {
  const { title, dollar, text, button, classList,url } = props;
  return (
    <div
      className={
        !classList
          ? 'border border-solid w-60 xl:w-80 2xl:w-96 border-gray-200 rounded-lg shadow-xl'
          : classList
      }
    >
      <div className="flex flex-col align-center m-6">
        <h1 className="text-3xl font-semibold pt-12  flex flex-col items-center justify-center 2xl:text-5xl">
          {title}
        </h1>
        <h2 className="text-gray-400 text-xl pt-3 font-medium flex flex-col items-center justify-center 2xl:text-3xl 2xl:py-8">
          {dollar}
        </h2>
        <h2 className="text-base pt-2 font-normal 2xl:text-2xl pb-6">{text}</h2>

        <div className="flex flex-col items-center justify-center pb-10 2xl:text-3xl 2xl:pb-12">
        <Link  to={url}>
          <input
            type="button"
            value={button}
            className="py-2 px-7 hover:bg-cyan-200 bg-cyan-400 font-medium rounded"
          />
          </Link>
          </div>
        
        </div>
      </div>
    
  );
}

export default PurchaseCard;
