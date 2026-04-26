import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter} from 'react'
import {Navbar} from 'react'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <routes>
          <route path="/" element="{<Home />}" />
          <route path="/about" element="{<About />}" />
          <route path="/contact" element="{<Contact />}" />
        </routes>
      </BrowserRouter>
    </>
  )
}

export default App
