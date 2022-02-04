import React from 'react';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Ведомость школы JS</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/admin-login" element={<div>admin-login</div>} />
        <Route path="/student" element={<div>student</div>} />
        <Route path="/admin" element={<div>admin</div>} />
      </Routes>
    </>
  );
}

export default App;
