import { useState, useEffect } from 'react';

const QUOTESURL = "https://api.quotable.io/random?tags=";

export function useQuote(tags){
const [quote, setQuote] = useState({});

  //Fetch quote
  async function fetchQuote(tags){
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

  useEffect(() => {
    fetchQuote(tags);
  }, []);

  return [quote, fetchQuote];
}