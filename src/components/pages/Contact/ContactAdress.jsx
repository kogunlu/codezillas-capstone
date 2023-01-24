import React from "react";
import ContactAdressImg from "./images/ContactAdressImg.png";


function ContactAdress () {
   return ( 
   <div>
    <div className="relative mt-28 ml-15 m-10">
        <img className="w-auto h-auto"src={ContactAdressImg} alt="adress" /> 
      <span className="absolute top-3 left-3 w-4/6 pl-5 pt-3">
              <p className="font-medium text-sm md:text-lg text-start mb-1">
                Find Us At: 
              </p>
             <div className="text-gray-500">
              <p>Nergiz Plaza</p>
              <p>3rd Floor</p>
              <p>Bakhtiyari Street 40m</p>
              <p>Erbil, Iraq</p>
              <p>44001</p>
              </div>
            </span>
            </div>
            </div>
      
   )
}
export default ContactAdress ;