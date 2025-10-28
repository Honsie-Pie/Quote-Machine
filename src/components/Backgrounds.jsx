import React from 'react';
import { PHASES } from '../App';
import Image from './Image';
import ControlButton from './ControlButton';

export default function Backgrounds({ backgrounds, toggleBackground, setPhase }) {
  return (
    <div className="box">
        <div className="bg-select">
            {backgrounds.map((bg) =>
              <Image image={bg} toggleFn={toggleBackground} key={bg.url} type={"thumb"}/>
            )}
        </div>
        <div className="controls">
            <ControlButton type="message" func={() => setPhase(PHASES.QUOTE)} message="Set Background" />
        </div>
    </div>
  )
}
