import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import '../Styles/qrcode.css';

function MyComponent() {
    const [error, setError] = useState(false);

    const getCruBySlug = (slug) => {
        const query = `?name=${encodeURIComponent(slug)}`;
        const url = `http://localhost:8000/api/cruses${query}`;
        return fetch(url, { credentials: "include", method: "GET" }).then((response) => response.json());
    };
    const result = getCruBySlug();

    const handleScan = (data) => {
        if (data) {
            let url = data.text.split('/');
            let urls = url[url.length - 1];
            if (result !== urls) {
                getCruBySlug(urls)
                    .then((req) => {
                        setResult(req[0]);
                        window.location.href = "http://localhost:5173/vignoble/%22" + req[0].id;
                    })
                    .catch(() => {
                        /*setError(true);*/
                    });
            }
        }
    };

    const handleError = (error) => {
        console.log(error);
        setError(true);
    };

    return (
        <div className="App">
            {error ? (
                <div className="error-message">
                    L'accès à la caméra est impossible. Veuillez vérifier les permissions de la caméra.
                </div>
            ) : (
                <QrScanner
                    id={"camera"}
                    delay={100}
                    onError={handleError}
                    onScan={handleScan}
                    facingMode="rear"
                />
            )}
        </div>
    );
}

export default MyComponent;
