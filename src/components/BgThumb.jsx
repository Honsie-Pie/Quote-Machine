import React from 'react'

export default function BgThumb({ b, toggleBackground }) {
  return (
    <div className="bg-thumb" key={b.thumb} onClick={()=>toggleBackground(b)}>
        <picture>
            <source media="screen and (min-width:768px)" srcSet={`${b.thumb}`} />
            <source media="screen and (min-width:200px)" srcSet={`${b.thumbTall}`} />
            <img src={b.thumbTall} />
        </picture>
    </div>
  )
}
