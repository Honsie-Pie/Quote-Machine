import React from 'react';
import { useState, useEffect } from 'react';

const QUOTESURL = "https://api.quotable.io/random";

export default function Quotebox({ tags }) {
  const [quote, setQuote] = useState({});

  //Fetch quote
  async function fetchQuote(){
    try {
      const response = await fetch(QUOTESURL);
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

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="box">
        <p className="quote-content">{quote.content}</p>
        <p className="quote-author">{quote.author}</p>
    </div>
  )
}
