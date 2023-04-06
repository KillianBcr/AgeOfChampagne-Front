import React from 'react';
import "../Styles/home.css";
import { loginUrl, logoutUrl, registerUrl } from "../services/api/users";

const Home = () => {
    return (
        <div><div class="background"></div>
            <img class="AOCpng" src="src/assets/AOC_White.svg" alt="Logo"></img>

            <div class="Icones">
                <a href="/scan" class="icone-texte">
                    <img class="icone" src="src/assets/Icones/qr-code.png" alt="QrCode"></img>
                    <p>Scanner une carte</p>
                </a>
                <a href="/collection" class="icone-texte">
                    <img class="icone" src="src/assets/Icones/jeux-de-cartes.png" alt="jeux de cartes"></img>
                    <p>Votre collection</p>
                </a>
                <a href="/map" class="icone-texte">
                    <img class="icone" src="src/assets/Icones/carte.png" alt="carte"></img>
                    <p>Carte des vignobles</p>
                </a>
            </div>

            <a class="button" href={loginUrl()}>
            Commencer
            </a>
        </div>
    );
};

export default Home;    