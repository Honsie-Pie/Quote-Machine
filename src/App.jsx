import { useState } from 'react'
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

function App() {
  const [phase, setPhase] = useState(PHASES.QUOTE);

  return (
    <div>
      {phase === PHASES.QUOTE ?
      <Quotebox />
      : phase === PHASES.LOADING 
      ? <p>loading</p>
      : phase === PHASES.BACKGROUNDS
      ? <Backgrounds />
      : phase === PHASES.FILTERS
      ? <Filters /> : <p>Error</p>}
      <button onClick={() => setPhase(PHASES.FILTER)}>Filters</button>
      <button onClick={() => setPhase(PHASES.BACKGROUND)}>Backgrounds</button>
      <button onClick={() => setPhase(PHASES.QUOTE)}>Quotes</button>
    </div>
  )
}

export default App
