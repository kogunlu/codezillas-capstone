import React, {useState, useEffect} from 'react'
import Card1 from './book-cards/Card1'
import Card2 from './book-cards/Card2'
import Card3 from './book-cards/Card3'
import Card4 from './book-cards/Card4'

function Book() {

  const [cardNumber, setCardNumber] = useState(1)
  const [shownCard, setShownCard] = useState(<Card1 />)


  function handleClick(){
    setCardNumber(cardNumber+1)
  }

  

  useEffect(() => {

    if(cardNumber === 1){
      setShownCard(<Card1 btnClick={() => handleClick()} />)
    }else if (cardNumber === 2){
      setShownCard(<Card2 btnClick={() => handleClick()} />)
    }else if(cardNumber === 3){
      setShownCard(<Card3 btnClick={() => handleClick()} />)
    }else if(cardNumber === 4){
      setShownCard(<Card4 btnClick={() => handleClick()} />)
    }else{
      <p>nope!</p>
    }
    

  }, [cardNumber])

  return (
    <div className='w-5/6 flex justify-center my-10'>
        <div className='w-5/6 flex flex-col items-center gap-10'>
            <div className='self-start w-5/6'>
                <h3 className='text-3xl font-semibold'>LET’S MATCH YOU WITH THE RIGHT THERAPIST</h3>
                <p className='text-gray-400 text-xl pt-2 font-medium'>Please fill out this short questionnarie to provide some general and anonymous background about you and the issues you’d like to deal with in online therapy. It would help us match you with the most suitable therapist for you. </p>
            </div>

          {shownCard}
          
        </div>
    </div>
  )
}

export default Book