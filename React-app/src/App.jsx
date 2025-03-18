import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu/Menu';
import AddMenu from './pages/addmenu/AddMenu';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <>
    <div id="wrapper">
      <Menu></Menu>
      <AddMenu></AddMenu>
    </div>
    </>
    </Router>
  )
}

export default App
