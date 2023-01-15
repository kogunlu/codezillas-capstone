import React from "react";
import ContactAdressImg from "./images/ContactAdressImg.png";


function ContactAdress () {
   return ( 
   <div>
    <div className="relative"><img
        className=" items-start lg:justify-center rounded mx-auto py-7  "
        src={ContactAdressImg}
        alt="meditation"
      /> 
      <span className="absolute top-3 left-3 w-4/6">
              <p className="font-medium text-sm md:text-lg text-start">
                Find Us At: Nergiz Plaza 3rd Floor
              </p>
            </span>
            </div>
            </div>
      
   )
}
export default ContactAdress ;



