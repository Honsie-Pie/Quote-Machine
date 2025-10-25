import { useState, useEffect } from 'react'
import './App.css'
import Backgrounds from './components/Backgrounds';
import Filters from './components/Filters';
import Quotebox from './components/Quotebox';
import Screen from './components/Screen';
import Image from './components/Image';

export const PHASES = {
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
    url: `${BGURL}city.jpg`,
    urlTall: `${BGURL}cityTall.jpg`,
    thumb: `${THUMBURL}cityT.jpg`,
    thumbTall: `${THUMBURL}cityTTall.jpg`
  },
  {
    url: `${BGURL}education.jpg`,
    urlTall: `${BGURL}educationTall.jpg`,
    thumb: `${THUMBURL}educationT.jpg`,
    thumbTall: `${THUMBURL}educationTTall.jpg`,
  },
  {
    url: `${BGURL}film.jpg`,
    urlTall: `${BGURL}filmTall.jpg`,
    thumb: `${THUMBURL}filmT.jpg`,
    thumbTall: `${THUMBURL}filmTTall.jpg`,
  },
  {
    url: `${BGURL}literature.jpg`,
    urlTall: `${BGURL}literatureTall.jpg`,
    thumb: `${THUMBURL}literatureT.jpg`,
    thumbTall: `${THUMBURL}literatureTTall.jpg`,
  },
  {
    url: `${BGURL}love.jpg`,
    urlTall: `${BGURL}loveTall.jpg`,
    thumb: `${THUMBURL}loveT.jpg`,
    thumbTall: `${THUMBURL}loveTTall.jpg`
  },
  {
    url: `${BGURL}motivation.jpg`,
    urlTall: `${BGURL}motivationTall.jpg`,
    thumb: `${THUMBURL}motivationT.jpg`,
    thumbTall: `${THUMBURL}motivationTTall.jpg`,
  },
  {
    url: `${BGURL}science.jpg`,
    urlTall: `${BGURL}scienceTall.jpg`,
    thumb: `${THUMBURL}scienceT.jpg`,
    thumbTall: `${THUMBURL}scienceTTall.jpg`
  },
  {
    url: `${BGURL}religion.jpg`,
    urlTall: `${BGURL}religionTall.jpg`,
    thumb: `${THUMBURL}religionT.jpg`,
    thumbTall: `${THUMBURL}religionTTall.jpg`,
  },
  {
    url: `${BGURL}sport.jpg`,
    urlTall: `${BGURL}sportTall.jpg`,
    thumb: `${THUMBURL}sportT.jpg`,
    thumbTall: `${THUMBURL}sportTTall.jpg`
  },
  {
    url: `${BGURL}work.jpg`,
    urlTall: `${BGURL}workTall.jpg`,
    thumb: `${THUMBURL}workT.jpg`,
    thumbTall: `${THUMBURL}workTTall.jpg`
  }
  ];

function App() {
  //App state
  const [phase, setPhase] = useState(PHASES.QUOTE);
  const [curBg, setCurBg] = useState(BGLIST[Math.floor(Math.random() * BGLIST.length)]);
  const [fading, setFading] = useState(false);
  const [tags, setTags] = useState([]);


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

  /*
  Changing BG image
  */
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
    <div className="app">
      <Image image={curBg} toggleFn={toggleBackground} type={"bg"}/>
      <Screen fading={fading}/>
      {phase === PHASES.QUOTE ?
      <Quotebox tags={tags} setPhase={setPhase}/>
      : phase === PHASES.LOADING 
      ? <p>loading</p>
      : phase === PHASES.BACKGROUNDS
      ? <Backgrounds url={curBg} backgrounds={BGLIST} toggleBackground={toggleBackground} setPhase={setPhase}/>
      : phase === PHASES.FILTERS
      ? <Filters tags={tags} toggleFilter={toggleFilter} clearFilters={clearFilters} setPhase={setPhase}/>: <p>Error</p>}
    </div>
  )
}

export default App
