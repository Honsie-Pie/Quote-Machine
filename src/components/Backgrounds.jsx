import React from 'react';
import BgThumb from './BgThumb';

export default function Backgrounds({ backgrounds, toggleBackground, setPhase, PHASES }) {
  return (
    <div className="box">
        <div className="bg-select">
            {backgrounds.map((b) =>
              <BgThumb b={b} toggleBackground={toggleBackground}/>
            )}
        </div>
        <div className="controls">
            <button onClick={() => setPhase(PHASES.QUOTE)}>Set Background</button>
        </div>
    </div>
  )
}
