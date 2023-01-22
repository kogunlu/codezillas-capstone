/* eslint-disable no-lone-blocks */
{/* import React, {useState, useEffect} from 'react';
import { onSnapshot, query, collection,doc,deleteDoc, addDoc, updateDoc } from 'firebase/firestore';
import Card from './Card';
import db from '../../../db/firebase.config';


const style={
    bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED to-[#1CB5E0]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading:`text-3xl font-bold text-center -text-gray-800 p-2`,
    form:`flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button:`border p-4 ml-2 bg-purple-500 text-slate-100`,
    count:`text-center p-2`
    } 

const CardsFunction = () => {
    const [cardInfo,setCardInfo]=useState([]);
    const[input,setInput]=useState('')
    // create todo
    const createTodo= async (e) =>{
      e.preventDefault(e);
      if(input===''){
        alert('Please enter a valid cardnumber')
        return;
      }
      await addDoc(collection(db, 'payment-methods'),{
        text: input,
        completed: false,
      })
      setInput('');
    };
    // read info from firebase
    useEffect(()=>{
      const q =query(collection(db, 'payment-methods'));
      const unsubscribe =onSnapshot(q, (QuerySnapshot)=>
      {
        const CardArr=[]
        // eslint-disable-next-line no-shadow
        QuerySnapshot.forEach((doc)=>{
          CardArr.push({...doc.data(), id: doc.id})
        });
        setCardInfo(CardArr)
      })
      return()=>unsubscribe()
    })
    //  update todo in firebase
    const toggleComplete=async(payment-methods)=>{
      await updateDoc(doc(db, 'cards', card.id),{
      

      });
    }
    // delete card
    const deleteCard=async(id)=>{
      await deleteDoc(doc(db, 'cards',id))
    }
    return (
      <div className={style.bg}>
       <div className={style.container}>
        <h3 className={style.heading}> saved cards</h3>
        <form onSubmit={createCard}className={style.form}>
          <input  onChange={(e)=>setInput(e.target.value)}className={style.input} type="text" placeholder='Add Card'/>
          <div className=' justify-end mt-10  '>
                                <input 
                    type="button" 
                    value=" Delete Card -"
                    className=' justify-end items-end  py-2 px-3  hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-xs md:text-sm'
                    
                  />
                  
              </div>
        </form>
        <ul>
          {cards.map((card,index)=>(
  // eslint-disable-next-line react/no-array-index-key
  <Card key={index} card={card} toggleComplete={toggleComplete} deleteCard={deleteCard}/>
  ))}
        </ul>
        {cards.length < 1 ? null : (
            <p className={style.count}>{`You have ${cards.length} cards`}</p>
        )}
       </div>
      </div>
    );
  }
  


export default CardsFunction */}