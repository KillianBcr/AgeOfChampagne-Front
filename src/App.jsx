import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProvider from './contexts/user/Provider';
import Navbar from "./components/Navbar";
import Qrcode from "./components/Qrcode";
import Collection from "./components/Collection";

function App() {
  return (
    <UserProvider>
      <Router>
        <>
          <Navbar />
          <div className="App">           
          <Routes>
              <Route path="/scan" element={<Qrcode />} />
              <Route path="/collection" element={<Collection />} />
            </Routes>
          </div>
        </>
      </Router>
    </UserProvider>
  );
}

export default App;
