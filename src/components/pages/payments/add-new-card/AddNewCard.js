/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useFormik } from 'formik';
import swal from 'sweetalert';
import Card from 'react-credit-cards';
import Button from '../../../shared/button/Button';
import Select from '../select/Select';
import 'react-credit-cards/es/styles-compiled.css';
import db from '../../../../db/firebase.config';
import Footer from '../../../shared/footer/Footer';

function AddNewCard() {
  // Credit Card Numbers States
  const [CardNumber, setCardNumber] = useState();
  const [CardNumberFieldValidation, setCardNumberFieldValidation] =
    useState(true);
  const [MasterCard, setMasterCard] = useState(
    'border-white-cyan text-white-cyan'
  );
  const [VisaCard, setVisaCard] = useState('border-white-cyan text-white-cyan');

  // Credit Card Format
  const getMaskedValue = (value) =>
    Array.from(
      value
        .replaceAll(/\D/g, '')
        .matchAll(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/g)
    )[0]
      .slice(1, 5)
      .join(' ')
      .trim();

  // Credit Cards Handlers
  function handleCardNumber(e) {
    e.preventDefault();

    const number = e.target.value
      ? e.target.value
      : setCardNumberFieldValidation('invalid:border-red-500');
    const visa = /^4[0-9]/;
    const mastercard = /^5[1-5]/;
    const maestro = /^5[6-90]/;
    const invalid = /^[36]/;
    const validInput = /^[0-9]/;

    function handleMasterOrVisa(cardType) {
      if (cardType === 1) {
        setMasterCard('border-rose-600 text-rose-600 animate-pulse');
      } else if (cardType === 2) {
        setVisaCard('border-rose-600 text-rose-600 animate-pulse');
      } else {
        setMasterCard('border-white-cyan text-white-cyan');
        setVisaCard('border-white-cyan text-white-cyan');
        setCardNumber('');
      }
    }

    if (validInput.test(number)) {
      if (invalid.test(number)) {
        setCardNumberFieldValidation('peer invalid:border-red-500');
      } else {
        // eslint-disable-next-line no-lonely-if
        if (number.length > 1) {
          if (mastercard.test(number)) {
            handleMasterOrVisa(1);
            setCardNumber(getMaskedValue(number));
            setCardNumberFieldValidation('');
          } else if (visa.test(number)) {
            handleMasterOrVisa(2);
            setCardNumber(getMaskedValue(number));
            setCardNumberFieldValidation('');
          } else if (maestro.test(number)) {
            setCardNumberFieldValidation('peer invalid:border-red-500');
          } else {
            if (number.length <= 2) {
              setMasterCard('border-white-cyan text-white-cyan');
              setVisaCard('border-white-cyan text-white-cyan');
              setCardNumber(getMaskedValue(number));
            }
            setCardNumberFieldValidation('peer invalid:border-red-500');
          }
        } else {
          setMasterCard('border-white-cyan text-white-cyan');
          setVisaCard('border-white-cyan text-white-cyan');
          setCardNumber(getMaskedValue(number));
        }
      }
    } else {
      setCardNumberFieldValidation('peer invalid:border-red-500');
      setCardNumber('');
    }
  }

  // CVV States
  const [CVV, setCVV] = useState();

  // CVV Handlers
  function handleCVV(e) {
    e.preventDefault();
    const validInput = /^[0-9]/;
    if (validInput.test(e.target.value)) {
      setCVV(e.target.value);
    }

    if (e.target.value.length === 0) {
      setCVV(e.target.value);
    }
  }

  // Name States
  const [CardHolderName, setCardHolderName] = useState();

  // Name Handlers
  function handleCardHolderName(e) {
    e.preventDefault();
    const validInput = /[A-Za-z\s]$/;
    if (validInput.test(e.target.value)) {
      setCardHolderName(e.target.value);
    }

    if (e.target.value.length === 0) {
      setCardHolderName(e.target.value);
    }
  }

  // Expiry Date States
  const [ExpiryDate, setExpiryDate] = useState();

  // Expiry Date Handlers
  function handleExpiryDate(e) {
    e.preventDefault();
    const getMaskedDate = (value) =>
      value
        .replace(/[^0-9]/g, '')
        .replace(/^([2-9])$/g, '0$1')
        .replace(/^(1{1})([3-9]{1})$/g, '0$1/$2')
        .replace(/^0{1,}/g, '0')
        .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2');
    setExpiryDate(getMaskedDate(e.target.value));
  }

  // Zip Code States
  const [ZipCode, setZipCode] = useState();

  // Zip Code Handlers
  function handleZipCode(e) {
    e.preventDefault();
    setZipCode(e.target.value);
  }

  // Adress States
  const [Adress, setAdress] = useState();

  // Adress Handlers
  function handleAdress(e) {
    e.preventDefault();
    setAdress(e.target.value);
  }

  // Input Focus States
  const [InputFocus, setInputFocus] = useState('number');

  // Input Focus States
  function handleInputFocus(e) {
    if (e.target.name === 'cvc') {
      setInputFocus('cvc');
    } else {
      setInputFocus('number');
    }
  }

  // Select Countries options
  const [Countries, setCountries] = useState([
    { country_name: 'Loading....', country_phone_code: '' },
  ]);
  const [SelectedCountry, setSelectedCountry] = useState('');

  const [Cities, setCities] = useState([{ state_name: 'Loading....' }]);
  const [SelectedCity, setSelectedCity] = useState('');

  // Countries/Cities Access token Api
  const [AccessToken, setAccessToken] = useState('');

  // Get Cities based on the selected Country
  function fetchCities(city, AccessTokenA) {
    // console.log(AccessTokenA)
    setCities([{ state_name: 'Loading....' }]);
    fetch(`https://www.universal-tutorial.com/api/states/${city}`, {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        Authorization: `Bearer ${AccessTokenA || AccessToken}`,
      }),
    })
      .then((resul) => resul.json())
      .then((result) => setCities(result));
  }

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expDate: '',
      CVV: '',
      country: '',
      city: '',
      zipCode: '',
      address: '',
    },
    onSubmit: async () => {
      const docRef = doc(db, 'user-details', getAuth().currentUser.email);
      const docSnap = await getDoc(docRef);
      const [
        cardNumber,
        expDate,
        country,
        city,
        cvvCode,
        nameOnCard,
        zipCode,
        fullAdress,
      ] = [
        CardNumber,
        ExpiryDate,
        SelectedCountry,
        SelectedCity,
        CVV,
        CardHolderName,
        ZipCode,
        Adress,
      ];

      if (!docSnap.exists()) {
        swal({
          title: 'Opps!',
          text: 'User Not Logged in',
          icon: 'error',
        });
      } else {
        setDoc(doc(db, 'user-details', getAuth().currentUser.email), {
          ...docSnap.data(),
          cards: [
            ...docSnap.data().cards,
            {
              cardNumber,
              expDate,
              country,
              city,
              cvvCode,
              nameOnCard,
              zipCode,
              fullAdress,
            },
          ],
        });
      }
    },
  });

  useEffect(() => {
    fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'api-token': atob(
          'aDUyWXhaSHJGRkVYeVRzdUhfdlFWRm1jOEFvOEppY0lTbE9MVTUwcjk5RHRYQVZUY3NlUFZkVlJVTXUzTjkzQ0dETQ=='
        ),
        'user-email': 'nour.majed1234@gmail.com',
      }),
    })
      .then((resul) => resul.json())
      .then((result) => {
        fetchCities(undefined, result.auth_token);
        setAccessToken(result.auth_token);
        return result;
      })
      .then((jsonResult) =>
        fetch('https://www.universal-tutorial.com/api/countries/', {
          method: 'get',
          headers: new Headers({
            Accept: 'application/json',
            Authorization: `Bearer ${jsonResult.auth_token}`,
          }),
        })
          .then((resul) => resul.json())
          .then((result) => setCountries(result))
      );
  }, []);

  return (
    <>
      <form
        className="w-fit mx-10 my-8 lg:mx-16 lg:my-10  xl:mx-24 xl:my-16 grid gap-y-6 md:gap-y-12"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid md:grid-cols-3">
          <span className="uppercase text-2xl lg:text-5xl col-span-3 mb-3">
            add card details
          </span>
          <span className="capitalize text-la lg:text-2xl col-span-3 row-start-auto w-fit text-[#00000080]">
            Please make sure all of the info you enter are the same as your card
            registration info.
          </span>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-6 lg:gap-x-9 gap-y-5  ">
          <div className="grid gap-6 ">
            <div className="h-20 grid content-center">
              <span className="text-zinc-400 ">Supported Card Type</span>
              <div className="grid grid-cols-2 ">
                <span className={`${MasterCard} border-[1px] text-center`}>
                  MasterCard
                </span>
                <span className={`${VisaCard} border-[1px] text-center`}>
                  Visa
                </span>
              </div>
            </div>
            <label className="text-zinc-400" htmlFor="cnumber">
              Card Number
              <input
                type="text"
                id="cnumber"
                name="number"
                className={`border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black  ${CardNumberFieldValidation}`}
                placeholder="4287  8874 9511 3263"
                maxLength="19"
                required
                value={CardNumber}
                onChange={(e) => handleCardNumber(e)}
                onFocus={(e) => handleInputFocus(e)}
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide one of Supported cards
              </p>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-zinc-400" htmlFor="expiry">
                Expiry Date
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  maxLength="5"
                  required
                  className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black"
                  placeholder="MM / YY"
                  value={ExpiryDate}
                  onChange={(e) => handleExpiryDate(e)}
                  onFocus={(e) => handleInputFocus(e)}
                />
              </label>

              <label className="text-zinc-400" htmlFor="cvv">
                CVV Code
                <input
                  id="cvv"
                  name="cvc"
                  maxLength="3"
                  required
                  className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black"
                  placeholder="***"
                  value={CVV}
                  onChange={(e) => handleCVV(e)}
                  onFocus={(e) => handleInputFocus(e)}
                />
              </label>
            </div>

            <label className="text-zinc-400" htmlFor="name">
              Name on Card
              <input
                type="text"
                id="name"
                name="name"
                pattern="[a-z A-Z-]+"
                required
                className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black"
                placeholder="Irene Ramos"
                value={CardHolderName}
                onChange={(e) => handleCardHolderName(e)}
                onFocus={(e) => handleInputFocus(e)}
              />
            </label>
          </div>
          <div className="grid gap-6 ">
            <label className="text-zinc-400" htmlFor="country">
              Country
              <Select
                id="country"
                AllClassess="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black bg-white"
                options={Countries}
                selected={setSelectedCountry}
                defaultVal='Please Select Country'
                // eslint-disable-next-line react/jsx-no-bind
                func={fetchCities}
              />
            </label>

            <label className="text-zinc-400" htmlFor="zip">
              Zip Code
              <input
                type="text"
                id="zip"
                className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black"
                placeholder="17121-1300"
                minLength={1}
                required
                value={ZipCode}
                onChange={(e) => handleZipCode(e)}
              />
            </label>

            <label className="text-zinc-400" htmlFor="city">
              City
              <Select
                id="city"
                AllClassess="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black bg-white"
                required
                options={Cities}
                defaultVal='Please Select City'
                selected={setSelectedCity}
              />
            </label>

            <label className="text-zinc-400" htmlFor="address">
              Adress
              <input
                type="text"
                id="address"
                className="border w-full h-12 md:h-16 rounded-md pl-2 px-5 focus:outline-none focus:shadow-lg text-sm lg:text-base text-black"
                required
                minLength={3}
                placeholder="509 Adele Mills Suite 833"
                value={Adress}
                onChange={(e) => handleAdress(e)}
              />
            </label>
          </div>
          <div className="grid place-content-center cursor-pointer">
            <Card
              cvc={CVV || ''}
              expiry={ExpiryDate || ''}
              name={CardHolderName || ''}
              number={CardNumber || ''}
              focused={InputFocus}
            />
          </div>
        </div>
        <div className="grid grid-cols-5">
          <Button
            type="submit"
            name="ADD CARD"
            classes="col-span-3 sm:col-span-2 md:col-span-1  py-2 md:py-3 px-5 md:h-14 hover:bg-cyan-200 focus:outline-none hover:scale-105 border border-cyan-400 bg-cyan-400 text-base sm:text-lg font-semibold rounded-md shadow-lg"
            // eslint-disable-next-line react/jsx-no-bind
            function={() => ''}
          />
        </div>
      </form>

      <Footer />
    </>
  );
}

export default AddNewCard;
