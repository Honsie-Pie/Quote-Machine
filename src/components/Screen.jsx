import React from 'react'

export default function Screen( { fading }) {
  return (
    <div className={fading ? "screen fadein" : "screen"}></div>
  )
}
