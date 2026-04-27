import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const showMessage = () => {
    alert("Button Clicked!");
  };
  return (
    <>
      <h1>student info</h1>
      <button onClick={showMessage}>
        Click Me
      </button>
      <PropsEx name="Swapnil" age="21" course="AIML" />
    </>
  )
}

export default App
