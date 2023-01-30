/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import db from '../../../db/firebase.config';
import contact from './images/Contact.png';
import ContactAddress from './ContactAddress';
import Footer from '../../shared/footer/Footer';

function Contact() {
  const [contactType, setContactType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContactChange = (e) => {
    setContactType(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  async function sendData(
    contactTypeValue1,
    nameValue1,
    emailValue1,
    detailsValue1
  ) {
    await setDoc(doc(db, 'contactUs-list', emailValue1), {
      contactType: contactTypeValue1,
      name: nameValue1,
      email: emailValue1,
      details: detailsValue1,
    })
      .then(
        handleContactChange,
        handleNameChange,
        handleEmailChange,
        handleDetailsChange,
        ''
      )
      .then(navigate('/thanks-contacts'));
  }

  return (
    <>
      <div className="">
        <div className="pl-2 py-10 md:pl-10 ">
          <h1 className="text-sm md:text-5xl xs:text-left ">
            SEND US YOUR REQUEST!
          </h1>
          <p className="text-gray-500  mt-2 text-xs md:text-3xl ">
            Do you have a question, concern, idea, feedback, or problem? If you
            need assistance, please fill out the form below and we’d be happy to
            help!
          </p>
        </div>
        <div className="2xl:w-8/12 flex justify-between ">
          <div>
            <div className=" h-auto md:h-auto md:text-xl lg:w-4/6 px-2 md:px-10 py-3 md:py-3 flex  justify-between items-start   flex-wrap">
              <div className="h-auto mb-6">
                <h2 className="xs:text-xs md:text-xl font-medium">
                  Type of contact
                </h2>
              </div>

              <div className=" py-0 md:py-0 flex flex-col justify-center items-start gap-1 text-xs md:text-xl ">
                <div className="mb-2">
                  <input
                    name="contactType"
                    type="radio"
                    value="I have a question about the service."
                    onChange={handleContactChange}
                  />{' '}
                  I have a question about the service.
                </div>

                <div className="mb-2">
                  <input
                    name="contactType"
                    type="radio"
                    value="I’m a registered client and I need support."
                    onChange={handleContactChange}
                  />{' '}
                  I’m a registered client and I need support.
                </div>

                <div className="mb-2">
                  <input
                    name="contactType"
                    type="radio"
                    value=" I’m a counselor interested in joining."
                    onChange={handleContactChange}
                  />{' '}
                  I’m a counselor interested in joining.
                </div>

                <div className="mb-2">
                  <input
                    name="contactType"
                    type="radio"
                    value="I’m a registered counselor and I need support."
                    onChange={handleContactChange}
                  />{' '}
                  I’m a registered counselor and I need support.
                </div>

                <div className="mb-2">
                  <input
                    name="contactType"
                    type="radio"
                    value="I have a business-related inquiry."
                    onChange={handleContactChange}
                  />{' '}
                  I have a business-related inquiry.
                </div>

                <div className="mb-2">
                  <input
                    name="contactType"
                    type="radio"
                    value="I’m interested in Healing Online for my organization."
                    onChange={handleContactChange}
                  />{' '}
                  I’m interested in Healing Online for my organization.
                </div>

                <div>
                  <input
                    name="contactType"
                    type="radio"
                    value="I have a billing related question."
                    onChange={handleContactChange}
                  />{' '}
                  I have a billing related question.
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              className=" items-start lg:justify-center rounded mx-auto py-7  w-96 md:h-auto md:w-auto "
              src={contact}
              alt="contact"
            />{' '}
          </div>
        </div>
        <div className="flex ">
          <form className=" w-full md:w-2/4 lg:w-4/6 px-2 md:px-8 text-xs md:text-lg  ">
            <span className="mb-3 ">
              <label htmlFor="name" className="font-medium text-xs md:text-lg">
                Full Name:
                <input
                  type="name"
                  placeholder="Enter your full name here..."
                  value={name}
                  onChange={handleNameChange}
                  className=" box-border w-full border rounded-md
        bg-transparent border-slate-300 p-3 mt-2 mb-2 shadow-md focus:outline-none"
                />
              </label>
            </span>
            <span className="mb-3 ">
              <label htmlFor="email" className="font-medium">
                Email:
                <input
                  type="email"
                  placeholder="Enter your email address here..."
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full border rounded-md
               border-slate-300 p-3 mt-2 mb-2 shadow-md focus:outline-none"
                />
              </label>
            </span>
            <span className="">
              <label htmlFor="details" className="font-medium">
                Details:
                <textarea
                  type="details"
                  rows={6}
                  placeholder="Enter your details here..."
                  value={details}
                  onChange={handleDetailsChange}
                  className="w-full border rounded-md
               border-slate-300 p-3 mt-2 shadow-md focus:outline-none"
                  style={{ resize: 'none' }}
                />
              </label>
            </span>
            <div className="flex items-center w-2/3 h-1/7 mb-12 mt-5 focus:outline-none">
              <input
                type="button"
                value="SUBMIT"
                className="py-2 px-5 w-6/12 md:w-5/12 lg:w-3/12 hover:bg-cyan-200 bg-cyan-400 font-medium rounded "
                onClick={() => {
                  sendData(contactType, name, email, details);
                }}
              />
            </div>
          </form>

          <ContactAddress />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Contact;
