import React from "react";
import { Route, Routes } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import LoginForm from "./components/Qrcode";
import CarteDetails from "./components/CarteDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/scan" element={<Qrcode />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/carte/:id" component={CarteDetails} />
      </Routes>
    </div>
  );
}

export default App;
