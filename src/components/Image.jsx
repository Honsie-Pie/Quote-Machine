import React from 'react';

export default function Image({ image, type, toggleFn }) {
  return (
    <picture className={type==='thumb' ? 'bg-thumb' : ''} onClick={()=>toggleFn(image)}>
      <source media="screen and (min-width:768px)" srcSet={type === 'thumb' ? `${image.thumb}` : `${image.url}`} />
      <source media="screen and (min-width:200px)" srcSet={type === 'thumb' ? `${image.thumbTall}` : `${image.urlTall}`} />
      <img className="bgImg"
      src={type === "thumb" ?`${image.urlTall}` : `${image.thumbTall}`}
      />
    </picture>
  )
}
