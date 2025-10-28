import React from 'react';
import SocialMenu from './SocialMenu';
import { PHASES } from '../App';
import { useQuote } from '../hooks/useQuote.js'
import ControlButton from './ControlButton.jsx';

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
          <ControlButton type="icon" func={() => setPhase(PHASES.FILTERS)} message="fa-filter"/>
          <ControlButton type="icon" func={() => setPhase(PHASES.BACKGROUNDS)} message="fa-image"/>
        </div>
        <div className='settings'>
          <SocialMenu quote={quote}/>
          <ControlButton type="message" func={() => fetchQuote(tags)} message="New Quote" />
        </div>
      </div>
    </div>
  )
}
