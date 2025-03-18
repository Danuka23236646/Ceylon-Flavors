import { useState } from 'react'
import './App.css'
import Menu from './pages/menu/Menu';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="wrapper">
      <Menu></Menu>
    </div>
    </>
  )
}

export default App
