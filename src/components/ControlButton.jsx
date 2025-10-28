import React from 'react'

export default function ControlButton({ type, func, message}) {
  return (
    type === "icon"
    ? <button onClick={() => func()}><i className={`fa-solid ${message}`}></i></button>
    : <button onClick={() => func()}>{message}</button>
  )
}
