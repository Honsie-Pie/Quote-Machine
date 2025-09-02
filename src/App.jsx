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

const BACKGROUNDPROPS = " no-repeat fixed center";
const BGURL = '/src/imgs/bgs/';
const THUMBURL = 'imgs/thumbs/'

const BGLIST = [
  {
    url: `url('${BGURL}city.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}cityT.jpg`
  },
  {
    url: `url('${BGURL}education.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}educationT.jpg`
  },
  {
    url: `url('${BGURL}film.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}filmT.jpg`
  },
  {
    url: `url('${BGURL}literature.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}literatureT.jpg`
  },
  {
    url: `url('${BGURL}love.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}loveT.jpg`
  },
  {
    url: `url('${BGURL}motivation.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}motivationT.jpg`
  },
  {
    url: `url('${BGURL}science.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}scienceT.jpg`
  },
  {
    url: `url('${BGURL}religion.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}religionT.jpg`
  },
  {
    url: `url('${BGURL}sport.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}sportT.jpg`
  },
  {
    url: `url('${BGURL}work.jpg')${BACKGROUNDPROPS}`,
    thumb: `${THUMBURL}workT.jpg`
  }
  ];

function App() {
  const [phase, setPhase] = useState(PHASES.QUOTE);
  const [curBg, setCurBg] = useState(BGLIST[Math.floor(Math.random() * BGLIST.length)].url);

  console.log(curBg)

  return (
    <div className="app" style={{background: `${curBg}`}}>
      {phase === PHASES.QUOTE ?
      <Quotebox />
      : phase === PHASES.LOADING 
      ? <p>loading</p>
      : phase === PHASES.BACKGROUNDS
      ? <Backgrounds url={curBg}/>
      : phase === PHASES.FILTERS
      ? <Filters /> : <p>Error</p>}
      <button onClick={() => setPhase(PHASES.FILTERS)}>Filters</button>
      <button onClick={() => setPhase(PHASES.BACKGROUNDS)}>Backgrounds</button>
      <button onClick={() => setPhase(PHASES.QUOTE)}>Quotes</button>
    </div>
  )
}

export default App
