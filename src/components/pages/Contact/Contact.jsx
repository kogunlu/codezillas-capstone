import React from "react";
import CardContact from "./CardContact";
import contact from "./images/Contact.png";
import ContactInput from "./ContactInput";
import ContactAdressImg from "./ContactAdress";

function Contact () {
   return ( 
   <div>
    <div>
        <h1 className="text-5xl">SEND US YOUR REQUEST!</h1>
        <p className="text-gray-500">Do you have a question, concern, idea, feedback, or problem? If you need assistance,
             please fill out the <br/> form below and we`d be happy to help!</p>
    </div>
    <div className="">
    <div>
        <CardContact />
    </div>
    <div><img
        className=" items-start lg:justify-center rounded mx-auto py-7  "
        src={contact}
        alt="meditation"
      /> </div>
      </div>
      <div>
        <ContactInput />
        <ContactAdressImg />
      </div>
   </div>
   )
}
export default Contact 