import React from 'react';
import BgThumb from './BgThumb';
import { PHASES } from '../App';
import Image from './Image';

export default function Backgrounds({ backgrounds, toggleBackground, setPhase }) {
  return (
    <div className="box">
        <div className="bg-select">
            {backgrounds.map((bg) =>
              <Image image={bg} toggleFn={toggleBackground} type="thumb"/>
            )}
        </div>
        <div className="controls">
            <button onClick={() => setPhase(PHASES.QUOTE)}>Set Background</button>
        </div>
    </div>
  )
}
