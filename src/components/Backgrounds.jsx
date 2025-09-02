import React from 'react'

export default function Backgrounds({ url, backgrounds, setCurBg }) {
  return (
    <div>
        <p>This screen will allow the user to change background image.</p>
        <p>Current background is: {url}</p>
        {backgrounds.map((b) => <div key={b.thumb} onClick={()=>setCurBg(b.url)}><img src={b.thumb} /></div>)}
    </div>
  )
}
