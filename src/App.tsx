import { useState } from 'react'
import './App.css'
import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Habit completed={4} />
  )
}

export default App
