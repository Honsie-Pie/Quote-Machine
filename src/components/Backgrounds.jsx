import React from 'react';
import BgThumb from './BgThumb';

export default function Backgrounds({ backgrounds, toggleBackground, setPhase, PHASES }) {
  return (
    <div className="box">
        <div className="bg-select">
            {backgrounds.map((bg) =>
              <BgThumb bg={bg} toggleBackground={toggleBackground}/>
            )}
        </div>
        <div className="controls">
            <button onClick={() => setPhase(PHASES.QUOTE)}>Set Background</button>
        </div>
    </div>
  )
}
