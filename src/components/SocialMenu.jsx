import React from 'react';
import { useState } from 'react';

export default function SocialMenu({ quote }) {
  const [hide, setHide] = useState(true);

    //Copy quote to clipboard
    function handleCopy(){
      navigator.clipboard.writeText(`"${quote.content}."\n-${quote.author}`);
      setHide(true);
    }

  return (
    <div className="social-menu">
            <button onClick={() => setHide(h => !h)}><i className="fa-solid fa-share"></i> Share</button>
            {hide ?
            <ul></ul>
            :
            <ul className="social-list">
            <li><button onClick={() => setHide(true)}><a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank"><i className="fa-brands fa-facebook"></i> Share</a></button></li>
            <li><button onClick={() => setHide(true)}><a href={`https://twitter.com/intent/tweet?text="${quote.content}." -${quote.author}`} target='_blank'><i className="fa-brands fa-x-twitter"></i> Tweet</a></button></li>
            <li><button onClick={() => handleCopy()}><i className="fa-solid fa-copy"></i> Copy</button></li>
            </ul>
            }
    </div>
  )
}
