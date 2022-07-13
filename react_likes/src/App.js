import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Likes from './components/Likes'
import TotalLikes from './components/TotalLikes'

function App() {
  let [totalLikes, setTotalLikes] = useState(0)
  const handleClick = (event) => {
    if (event.currentTarget.value === 'add') {
      setTotalLikes(totalLikes + 1)
    } else if (totalLikes < 1) {
      return ''
    } else {
      setTotalLikes(totalLikes - 1)
    }
  }
  return (
    <div>
      <header>
        <main>
          <div className="total">
            <TotalLikes total={totalLikes} />
          </div>
          <div className="btn">
            <Likes values="add" sign="+" handleClick={handleClick} />
            <Likes sign="-" values="subtract" handleClick={handleClick} />
          </div>
        </main>
      </header>
    </div>
  )
}

export default App
