import React, { useState, useEffect } from 'react'
import './style.css'

const Randomquote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Please click on the below button to generate new quote",
    author: "Author",
  });

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error.message);
      }
    };

    loadQuotes();
  }, []);

  const generateRandomQuote = () => {
    const selected = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selected);
  };

  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div className='line'></div>
      <div className='bottom'>
        <div className='author'>Author Name : - {quote.author.split(',')[0]}</div>
        <div className='icons'>
          <button onClick={generateRandomQuote}>Generate Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Randomquote;
