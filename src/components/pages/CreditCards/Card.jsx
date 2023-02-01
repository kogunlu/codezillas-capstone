/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { confirm } from 'react-confirm-box';

const Confirmation = async () => {
  const result = await confirm('Are you sure?');
  if (result) {
    console.log('You click yes!');
    return;
  }
  console.log('You click No!');
};

const Card = ({ img, Name, CardNumber, Valid, Expiry, CVC, altText, logo }) => {
  return (
    <div>
      <div className="bg-white flex flex-col justify-center items-center   ">
        <div className="space-y-16 mx-5 h-60 w-11/12  ">
          <div className="w-full min-w-full  h-60 gap-20 bg-red-100 rounded-xl relative text-white shadow-2sxl transition-transform transform hover:scale-90 ">
            <img
              className=" relative object-cover  h-full rounded-xl gap-20 w-full "
              src={img}
              alt={altText}
            />

            <div className="w-full px-8 absolute top-3  ">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name</p>
                  <p className="font-medium tracking-widest">{Name}</p>
                </div>
                <img className="w-1/6 h-1/6  " src={logo} alt={altText} />
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">{CardNumber}</p>
              </div>
              <div className="mt-4 pr-6 ">
                <div className="flex justify-between ">
                  <div className="">
                    <p className="font-light text-xs">Valid</p>
                    <p className="font-medium tracking-wider text-sm ">
                      {Valid}
                    </p>
                  </div>
                  <div className="">
                    <p className="font-light  text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">
                      {Expiry}
                    </p>
                  </div>

                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      {CVC}
                    </p>
                  </div>
                  <div className=" flex flex-col justify-center items-end mt-10 mb-5  ">
                    <button
                      type="button "
                      className=" justify-end items-end  py-2 px-3  hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-xs md:text-sm"
                      onClick={Confirmation}
                    >
                      {' '}
                      Delete Card -{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
