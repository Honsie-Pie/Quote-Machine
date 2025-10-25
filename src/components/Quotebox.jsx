import React from 'react';
import SocialMenu from './SocialMenu';
import { PHASES } from '../App';
import { useQuote } from '../hooks/useQuote.js'

export default function Quotebox({ tags, setPhase }) {
  const [quote, fetchQuote] = useQuote(tags);
  
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
        <div className='settings'>
          <SocialMenu quote={quote}/>
          <button onClick={() => fetchQuote(tags)}>New Quote</button>
        </div>
      </div>
    </div>
  )
}
