import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route}from 'react-router-dom'

import Reservations from './pages/Reservations/Reservations';
import Header from './component/HeaderComponent/Header';




function App() {
 

  return (
    

      
      <BrowserRouter>
        <Routes>
          <Route path='/component/HeaderComponent/Header' element={<Header />}></Route>
          <Route path='/pages/Reservations/Reservations' element={<Reservations />}></Route>




        </Routes>
      </BrowserRouter>
      
    
  )

}

export default App;
