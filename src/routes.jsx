import React from "react";
import { Route, Routes } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import LoginForm from "./components/Qrcode";
import CarteDetails from "./components/CarteDetails";
import Collection from "./components/Collection";
import Home from './components/Home';
import Map from "./components/Map";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/scan" element={<Qrcode />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/map" element={<Map />} />
        <Route path="/carte/:id" component={CarteDetails} />
      </Routes>
    </div>
  );
}

export default App;
