import React, {useState} from "react";
import CardContact from "./CardContact";
import contact from "./images/Contact.png";
import ContactInput from "./ContactInput";
import ContactAdress from "./ContactAdress";


function Contact () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [details, setDetails] = useState("")
   return ( 
   <div className="">
    <div className="py-10 pl-10">
        <h1 className="text-5xl ">SEND US YOUR REQUEST!</h1>
        <p className="text-gray-500 mt-2">Do you have a question, concern, idea, feedback, or problem? If you need assistance,
             please fill out the <br/> form below and we’d be happy to help!</p>
    </div>
    <div className="flex ">
  
    <div>
        <CardContact />
    </div>
    
    <div><img
        className=" items-start lg:justify-center rounded mx-auto py-7 "
        src={contact} 
        alt="contact"
      /> </div> 
   </div>
      <div className="flex ">
        <ContactInput 
        handleNameChange={(e) => setName(e.target.value)} nameValue={name}
        handleEmailChange={(e) => setEmail(e.target.value)} emailValue={email}
        handleDetailsChange={(e) => setDetails(e.target.value)} detailsValue={details}
        />
        <ContactAdress />
      </div>
   </div>
   )
}
export default Contact 