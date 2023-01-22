/* eslint-disable spaced-comment */
/* eslint-disable no-lone-blocks */
{/*import React, {useState, useEffect} from 'react';
import {query, collection, onSnapshot} from 'firebase/firestore'
import Card from './Card';
import db from '../../../db/firebase.config'

const style={
   form:`flex justify-between`,
   input:`border p-2 w-full text-xl` 
}
const Form = () => {
  // eslint-disable-next-line no-unused-vars
  const [cardnumber, setcardnumber]=useState([])
  

  // Create Cardnumber
  // Read Cardnumber from firebase
  useEffect(()=>{
    const q = query(collection(db,'payment-methods'))
    const unsubscribe= onSnapshot(q, (querySnapshot)=>{
      const cardArr=[]
      querySnapshot.forEach((doc)=>{
        cardArr.push({...doc.data(), id: doc.id})
      })
      setcardnumber(cardArr)
    })
    return()=> unsubscribe()
  },[])
  // update Cardnumber in firebase
  // delete Cardnumber 
  return (
    <div>
        <form className={style.form}>
<input className={style.input} type="number" placeholder='Card Number' />
<input className={style.input} type="number" placeholder='MM/YY' />
<input className={style.input} type="number" placeholder='CVV Code' />
<input className={style.input} type="text" placeholder='Name on Card' />
        </form>
        <ul> 
          {cardnumber.map((CardNumb, index)=>(
           // eslint-disable-next-line react/no-array-index-key
           <Card key={index} CardNumb={CardNumb}/>
        ))}</ul>
    </div>
  )
}

export default Form */}