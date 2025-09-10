import React from 'react'

export default function Backgrounds({ url, backgrounds, toggleBackground, setPhase, PHASES }) {
  return (
    <div className="box">
        <div className="bg-select">
            {backgrounds.map((b) => <div className="bg-thumb" key={b.thumb} onClick={()=>toggleBackground(b.url)}><img src={b.thumb} /></div>)}
        </div>
        <div className="controls">
            <button onClick={() => setPhase(PHASES.QUOTE)}>Set Background</button>
        </div>
    </div>
  )
}
