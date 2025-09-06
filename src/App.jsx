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
const TAGSURL = 'https://api.quotable.io/tags'

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
  const [tags, setTags] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);


  //Fetching tags
  async function fetchTags(){
    try {
      const response = await fetch(TAGSURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const result = await response.json();
      const tasg = result.filter((tag) => tag.slug !== 'athletics').map((tag) => {
        return {
          id: tag._id,
          name: tag.name,
          slug: tag.slug,
          active: false
        }
      });
      setTags([...tasg]);
    } catch (error) {
      console.error(error.message);
    }
  }

  //Applying filter
  function toggleFilter(id){
    const updatedFilters = [...tags];
    updatedFilters.map((tag) => tag.id === id ? tag.active = !tag.active : tag);
    setTags(updatedFilters);
  }

  //Removing all filters
  function clearFilters(){
    const updatedFilters = [...tags];
    const updatedUpdatedFilters = updatedFilters.map((tag) => {
      return {
        active: false,
        id: tag.id,
        name: tag.name,
        slug: tag.slug,
      };
    })
    setTags(updatedUpdatedFilters);
  }


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

  //Effect(s)
  useEffect(() => {
    fetchTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app" style={{backgroundImage: `${curBg}`}}>
      <div className={fading ? "screen fadein" : "screen"}></div>
      {phase === PHASES.QUOTE ?
      <Quotebox tags={tags}/>
      : phase === PHASES.LOADING 
      ? <p>loading</p>
      : phase === PHASES.BACKGROUNDS
      ? <Backgrounds url={curBg} backgrounds={BGLIST} toggleBackground={toggleBackground} setPhase={setPhase}/>
      : phase === PHASES.FILTERS
      ? <Filters tags={tags} toggleFilter={toggleFilter} clearFilters={clearFilters} setPhase={setPhase}/>: <p>Error</p>}
      <div className="main-controls">
        <button onClick={() => setPhase(PHASES.FILTERS)}>Filters</button>
        <button onClick={() => setPhase(PHASES.BACKGROUNDS)}>Backgrounds</button>
        <button onClick={() => setPhase(PHASES.QUOTE)}>Quotes</button>
      </div>
      
    </div>
  )
}

export default App
