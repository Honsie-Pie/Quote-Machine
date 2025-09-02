import React from 'react'

export default function Backgrounds({ url, backgrounds, toggleBackground }) {
  return (
    <div className="box">
        <p>This screen will allow the user to change background image.</p>
        <p>Current background is: {url}</p>
        {backgrounds.map((b) => <div key={b.thumb} onClick={()=>toggleBackground(b.url)}><img src={b.thumb} /></div>)}
    </div>
  )
}
