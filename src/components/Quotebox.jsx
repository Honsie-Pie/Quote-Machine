import React from 'react';
import { useState, useEffect } from 'react';

const QUOTESURL = "https://api.quotable.io/random?tags=";

export default function Quotebox({ tags, PHASES, setPhase }) {
  const [quote, setQuote] = useState({});

  //Fetch quote
  async function fetchQuote(){
    const FILTERS = tags.filter((tag) => tag.active === true).map((tag) => tag.slug).join('|');
    console.log(`${QUOTESURL}${FILTERS}`)
    try {
      const response = await fetch(`${QUOTESURL}${FILTERS}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const result = await response.json();
      setQuote({
        id: result._id,
        content: result.content,
        author: result.author,
        length: result.length
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  //Copy quote to clipboard
  function handleCopy(){
    navigator.clipboard.writeText(`"${quote.content}."\n-${quote.author}`);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="box">
      <div className="quote">
        <i className="fa-solid fa-quote-left quotation-mark"></i>
        <p className={`quote-content ${quote.length < 100 ? "short" :
                                quote.length > 210 ? "long" : "medium"}`}>{quote.content}</p>
        <p className="quote-author">{quote.author}</p>
      </div>
      <div className='controls'>
        <div className="settings">
          <button onClick={() => setPhase(PHASES.FILTERS)}><i className="fa-solid fa-filter"></i></button>
          <button onClick={() => setPhase(PHASES.BACKGROUNDS)}><i className="fa-solid fa-image"></i></button>
        </div>
        <div>
          <button><i className="fa-solid fa-share"></i></button>
          <button onClick={() => handleCopy()}><i className="fa-solid fa-copy"></i></button>
          <button onClick={() => fetchQuote()}>New Quote</button>
        </div>
      </div>
    </div>
  )
}
