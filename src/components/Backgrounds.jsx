import React from 'react'

export default function Backgrounds({ url, backgrounds, toggleBackground, setPhase, PHASES }) {
  return (
    <div className="box">
        <div className="bg-select">
            {backgrounds.map((b) =>
              <div className="bg-thumb" key={b.thumb} onClick={()=>toggleBackground(b)}>
                <picture>
                  <source media="screen and (min-width:768px)" srcSet={`${b.thumb}`} />
                  <source media="screen and (min-width:200px)" srcSet={`${b.thumbTall}`} />
                  <img src={b.thumbTall} />
                </picture>
              </div>
            )}
        </div>
        <div className="controls">
            <button onClick={() => setPhase(PHASES.QUOTE)}>Set Background</button>
        </div>
    </div>
  )
}
