import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Reservation from './pages/reservation/Reservation';
import Header from './component/header';
import HomePage from './pages/home/home';
import Footer from './component/footer';

import ReservationBackground from './pages/reservation/ReservationBackground';
import ReservationList from './pages/reservation/reservationList';







function App() {
    return (
        <Router>
            <div id="wrapper">
                <Header />
                
                
                <Routes>
                    <Route path="/pages/home/home" element={<HomePage />} />
                    <Route path="/pages/reservation/Reservation" element={<Reservation />} />
                    <Route path="/pages/reservation/ReservationBackground" element={<ReservationBackground />} />
                    <Route path="/pages/reservation/reservationList" element={<ReservationList />} />

                </Routes>
                
               
                <Footer />
            </div>
        </Router>
    );
}

export default App;
