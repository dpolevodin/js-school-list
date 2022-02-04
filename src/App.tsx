import React from 'react';
import { Routes, Route } from "react-router-dom";
import {AdminLoginPage} from "./pages/AdminLoginPage/AdminLoginPage"
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Ведомость школы JS</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/student" element={<div>student</div>} />
        <Route path="/admin" element={<div>admin</div>} />
      </Routes>
    </div>
  );
}

export default App;
