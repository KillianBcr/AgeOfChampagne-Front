import './App.css'
import QrScanner from 'react-qr-scanner';


function App() {
    const handleScan = (data) => {
        console.log(data)
    }

    const handleError = (error) => {
        console.log(error);
    }

  return (
    <div className="App">
        <QrScanner
            id={"camera"}
            delay={100}
            onError={handleError}
            onScan={handleScan}
            facingMode="rear"
        />
    </div>
  )
}

export default App
