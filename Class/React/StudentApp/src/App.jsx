import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student';
function App() {
  const [count, setCount] = useState(0)
  const fname = "Swapnil"
  const age = 21

  return (
    <>
      <h1>{fname}</h1>
      <h2>Age: {age} </h2>
      <Student/>
    </>
  )
}

export default App
