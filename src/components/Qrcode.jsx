import QrScanner from 'react-qr-scanner';
import {useState} from "react";

function MyComponent() {
    const [isLoading, setLoading] = useState(false);

    const handleScan = (data) => {
        if (data) {
            let url = data.text.split('/');
            let urls = url[url.length - 1];
            if (result !== urls && !isLoading) {
                setLoading(true);

                getCruBySlug(qrcode)
                    .then((req) => {
                        setResult(req[0]);
                        setLoading(false);
                    })
                    .catch(() => {
                        setError(true);
                        setLoading(false);
                    });
            }
            window.location.href="localhost:173/vignoble/"+url;
        }
    };

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