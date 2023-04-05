import React from 'react';
import QrScanner from 'react-qr-scanner';
import Navbar from "./components/Navbar";


function App() {
    const handleScan = (data) => {
        console.log(data)
    }

    const handleError = (error) => {
        console.log(error);
    }

  return (
    <>
      <React.Fragment>
          <Navbar />
      </React.Fragment>

      <div className="App">
              <QrScanner
                  id={"camera"}
                  delay={100}
                  onError={handleError}
                  onScan={handleScan}
                  facingMode="rear" />
        </div>
    </>
  )
}

export default App
