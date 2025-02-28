import { useState } from 'react'
import './App.css'
import {Header} from '/src/components/Header.jsx'
import {Footer} from '/src/components/Footer.jsx'
import {Main} from '/src/components/Main.jsx'
import {DistressedEarthLinesContainer} from '/src/components/DistressedEarthLinesContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <DistressedEarthLinesContainer />
      <Main className="main"/>
      <Footer/>
    </>
  )
}

export default App
