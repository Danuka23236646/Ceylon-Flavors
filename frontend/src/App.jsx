import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu/Menu';
import AddMenu from './pages/AddMenu/addmenu';
import MenuTable from './pages/AddMenuTable/addmenutable';
import UpdateMenu from './pages/UpdateMenu/updatemenu';
import "react-datepicker/dist/react-datepicker.css";





function App() {
  return (
    <Router>
      <div id="wrapper">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/addmenu" element={<AddMenu />} />
          <Route path="/menutable" element={<MenuTable />} />
          <Route path="/updatemenu/:id" element={<UpdateMenu />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
