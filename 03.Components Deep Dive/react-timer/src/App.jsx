
import { useState } from 'react'
import './App.css'
import FancyTimer from './components/FancyTimer'
import Timer from './components/Timer'
import styles from './components/FancyTimer.module.css'
function App() {
  const [showTime, setShowTimer] = useState(true);
  return (
    <>
     <Timer />

    { showTime &&
    <>
    <FancyTimer />
    <button className={styles["turn-off"]} onClick={()=> setShowTimer(false)}>TurnOff</button>
    </> }

    </>
  )
}

export default App
