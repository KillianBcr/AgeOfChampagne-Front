import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProvider from './contexts/user/Provider';
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Qrcode from "./components/Qrcode";

function App() {
  return (
    <UserProvider>
      <Router>
        <>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/scan" element={<Qrcode />} />
            </Routes>
          </div>
        </>
      </Router>
    </UserProvider>
  );
}

export default App;
