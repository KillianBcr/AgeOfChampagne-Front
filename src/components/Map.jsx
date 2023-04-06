import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "../Styles/map.css";

const MapPage = () => {
    useEffect(() => {
        // Créez la carte
        const map = L.map('map', {
            center: [49.2539, 4.0331], // Coordonnées de Reims
            zoom: 13,
        });

        // Ajoutez la couche OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(map);

        // Supprimez la carte lorsqu'elle est démontée
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div>
            <h1>Carte des vignobles</h1>
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
};

export default MapPage;
