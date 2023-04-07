import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProvider from './contexts/user/Provider';
import Navbar from "./components/Navbar";
import Qrcode from "./components/Qrcode";
import CarteDetails from "./components/CarteDetails";
import Collection from "./components/Collection";
import Map from "./components/Map.jsx"
import Home from './components/Home';


function App() {
  return (
    <UserProvider>
      <Router>
        <>
          <Navbar />
          <div className="App">           
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scan" element={<Qrcode />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/map" element={<Map />} />
              <Route path="/carte/:id" component={CarteDetails} />
            </Routes>
          </div>
        </>
      </Router>
    </UserProvider>
  );
}

export default App;
