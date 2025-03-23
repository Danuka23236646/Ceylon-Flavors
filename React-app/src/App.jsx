import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu/Menu';
import AddMenu from './pages/addmenu/AddMenu';


function App() {
    return (
        <Router>
            <div id="wrapper">
                
                    <Menu></Menu>
                    <AddMenu></AddMenu>
                
            </div>
        </Router>
    );
}

export default App;
