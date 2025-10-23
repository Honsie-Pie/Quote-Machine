import React from 'react'

export default function BgThumb({ bg, toggleBackground }) {
  return (
    <picture className="bg-thumb" key={bg.thumb} onClick={()=>toggleBackground(bg)}>
        <source media="screen and (min-width:768px)" srcSet={`${bg.thumb}`} />
        <source media="screen and (min-width:200px)" srcSet={`${bg.thumbTall}`} />
        <img src={bg.thumbTall} />
    </picture>
  )
}
