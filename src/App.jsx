import { useState, useEffect } from 'react'
import './App.css'
import Backgrounds from './components/Backgrounds';
import Filters from './components/Filters';
import Quotebox from './components/Quotebox';

const PHASES = {
  LOADING: "loading",
  QUOTE: "quote",
  BACKGROUNDS: "backgrounds",
  FILTERS: "filters"
};

const BGURL = '/src/imgs/bgs/';
const THUMBURL = '/src/imgs/thumbs/'

const BGLIST = [
  {
    url: `url('${BGURL}city.jpg')`,
    thumb: `${THUMBURL}cityT.jpg`
  },
  {
    url: `url('${BGURL}education.jpg')`,
    thumb: `${THUMBURL}educationT.jpg`
  },
  {
    url: `url('${BGURL}film.jpg')`,
    thumb: `${THUMBURL}filmT.jpg`
  },
  {
    url: `url('${BGURL}literature.jpg')`,
    thumb: `${THUMBURL}literatureT.jpg`
  },
  {
    url: `url('${BGURL}love.jpg')`,
    thumb: `${THUMBURL}loveT.jpg`
  },
  {
    url: `url('${BGURL}motivation.jpg')`,
    thumb: `${THUMBURL}motivationT.jpg`
  },
  {
    url: `url('${BGURL}science.jpg')`,
    thumb: `${THUMBURL}scienceT.jpg`
  },
  {
    url: `url('${BGURL}religion.jpg')`,
    thumb: `${THUMBURL}religionT.jpg`
  },
  {
    url: `url('${BGURL}sport.jpg')`,
    thumb: `${THUMBURL}sportT.jpg`
  },
  {
    url: `url('${BGURL}work.jpg')`,
    thumb: `${THUMBURL}workT.jpg`
  }
  ];

function App() {
  //App state
  const [phase, setPhase] = useState(PHASES.QUOTE);
  const [curBg, setCurBg] = useState(BGLIST[Math.floor(Math.random() * BGLIST.length)].url);
  const [fading, setFading] = useState(false);


  //Fade animation
  function toggleFading(){
    setFading((prevValue) => !prevValue);
    const myTimeout = setTimeout(redo, 500);
    function redo(){
    setFading((prevValue) => !prevValue);
    }
  }

  function toggleBackground(bg){
    toggleFading();
    const myTimeout = setTimeout(changeBg, 300);
    function changeBg(){
      setCurBg(bg);
    }
  }

  return (
    <div className="app" style={{backgroundImage: `${curBg}`}}>
      <div className={fading ? "screen fadein" : "screen"}></div>
      {phase === PHASES.QUOTE ?
      <Quotebox />
      : phase === PHASES.LOADING 
      ? <p>loading</p>
      : phase === PHASES.BACKGROUNDS
      ? <Backgrounds url={curBg} backgrounds={BGLIST} toggleBackground={toggleBackground}/>
      : phase === PHASES.FILTERS
      ? <Filters /> : <p>Error</p>}
      <div className="main-controls">
        <button onClick={() => setPhase(PHASES.FILTERS)}>Filters</button>
        <button onClick={() => setPhase(PHASES.BACKGROUNDS)}>Backgrounds</button>
        <button onClick={() => setPhase(PHASES.QUOTE)}>Quotes</button>
      </div>
      
    </div>
  )
}

export default App
