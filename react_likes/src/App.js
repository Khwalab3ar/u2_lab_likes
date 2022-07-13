import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Likes from './components/Likes'

function App() {
  let [totalLikes, setTotalLikes] = useState(0)
  const handleClick = () => {
    setTotalLikes(totalLikes++)
    console.log(totalLikes)
  }
  return (
    <div>
      <header>
        <Likes handleClick={handleClick} />
      </header>
    </div>
  )
}

export default App
