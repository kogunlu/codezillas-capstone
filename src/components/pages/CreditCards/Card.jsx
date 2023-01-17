import React from 'react'

const Card = ({img, Name, CardNumber, Valid, Expiry, CVC, altText, logo }) => {
  return (
    <div>
       <div className="bg-white flex flex-col justify-center items-center ">
        <div className="space-y-16 mx-5 h-60 w-11/12 ">
            <div className="w-full min-w-full h-60 gap-20 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-90 ">
            
                <img className="relative object-cover  h-full rounded-xl gap-20 w-full" src={img} alt={altText}/>
                
                <div className="w-full px-8 absolute top-3  ">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light">
                                Name
                            </p>
                            <p className="font-medium tracking-widest">
                            {Name}
                            </p>
                        </div>
                        <img className="w-1/6 h-1/6  " src={logo} alt={altText}/>
                    </div>
                    <div className="pt-1">
                        <p className="font-light">
                            Card Number
                        </p>
                        <p className="font-medium tracking-more-wider">
                        {CardNumber}
                        </p>
                    </div>
                    <div className="mt-4 pr-6 ">
                        <div className="flex justify-between ">
                            <div className="">
                                <p className="font-light text-xs">
                                    {Valid}
                                </p>
                                <p className="font-medium tracking-wider text-sm ">
                                    11/15
                                </p>
                            </div>
                            <div className="">
                                <p className="font-light  text-xs">
                                    {Expiry}
                                </p>
                                <p className="font-medium tracking-wider text-sm">
                                    03/25
                                </p>
                            </div>
    
                            <div className="">
                                <p className="font-light text-xs">
                                    {CVC}
                                </p>
                                <p className="font-bold tracking-more-wider text-sm">
                                    ···
                                </p>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    </div>
    </div>
    </div>
    
  )
}

export default Card