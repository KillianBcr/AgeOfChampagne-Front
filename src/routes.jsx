import React from "react";
import { Route, Routes } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import LoginForm from "./components/Qrcode";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/scan" element={<Qrcode />} />
      </Routes>
    </div>
  );
}

export default App;
