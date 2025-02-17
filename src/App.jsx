import { useState } from 'react'
import Welcome from './Welcome'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome></Welcome>
    </>
  )
}

export default App
