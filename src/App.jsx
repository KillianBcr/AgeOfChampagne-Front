import QrScanner from 'react-qr-scanner';


function MyComponent() {

    const getCruBySlug = (slug) => {
        const query = `?name=${encodeURIComponent(name)}`;
        const url = `http://localhost:8000/api/crus${query}`;
        return fetch(url,  {credentials: "include"}).then((response) => response.json());
    };
    const  result = getCruBySlug();

    const handleScan = (data) => {
        if (data) {
            let url = data.text.split('/');
            let urls = url[url.length - 1];
            if (result !== urls) {
                getCruBySlug(urls)
                    .then((req) => {
                        setResult(req[0]);
                    })
                    .catch(() => {
                        setError(true);
                    });
            }
            window.location.href="http://localhost:8000/vignoble/"+url;
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


export default MyComponent