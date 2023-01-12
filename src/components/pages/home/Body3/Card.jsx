import React from 'react';

function Card({ imgSource, altText, header, text }) {
  return (
    <div className=" flex items-stretch">
      <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-3xl shadow-lg dark:border-gray-700 p-6 mb-5  md:shrink-0 items-center ">
        <div className=" flex flex-col justify-center items-center ">
          <img
            className="object-scale-down h-20 w-25 md:object-scale-down "
            src={imgSource}
            alt={altText}
          />
        </div>
        <h3 className="text-4xl font-medium pt-8 p-2 flex flex-col justify-center items-center">
          {header}
        </h3>
        <p className="py-2 pt-4 p-2 text-center flex flex-col justify-center items-center">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card;
