import React from 'react';


export default function BackgroundImage({ curBg }) {
  return (
    <picture>
      <source media="screen and (min-width:768px)" srcSet={`${curBg.url}`} />
      <source media="screen and (min-width:200px)" srcSet={`${curBg.urlTall}`} />
      <img className="bgImg"
      src={`${curBg.urlTall}`}
      />
    </picture>
  )
}
