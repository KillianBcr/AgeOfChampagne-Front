import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import QrScanner from 'react-qr-scanner';
import Navbar from "./components/Navbar";
import UserProvider from './contexts/user/Provider';

function App() {
  const handleScan = (data) => {
      console.log(data)
  }

  const handleError = (error) => {
      console.log(error);
  }

  return (
    <Router>
      <>
        <Navbar />
        <div className="App">
          <QrScanner
            id={"camera"}
            delay={100}
            onError={handleError}
            onScan={handleScan}
            facingMode="rear" />
        </div>
      </>
    </Router>
  );
}

export default App;
