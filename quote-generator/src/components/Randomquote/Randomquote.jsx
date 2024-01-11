
import React, { useState } from 'react'
import './style.css'
// import reload_icon from '../assets/reload.png'

const Randomquote = () => {

  let quotes = [];

  async function loadquotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }


    const [quote,setQuote] = useState({
        text: "Please reload to generate new quote",
        author: "Author",
    });

    
  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)];
    setQuote(select);
  }

  loadquotes()


  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
        <div className='line'></div>
            <div classNamw='bottom'>
               <div className='author'>Author name: - {quote.author.split(',')[0]}</div>
                      <div className='icons'>
                        <button onClick={()=>{random()}}>Generate Quote</button>
                    </div>
                </div>
    </div>
  )
}

export default Randomquote