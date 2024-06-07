import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    const handleClick = () => {
        console.log('The link was clicked.');
        navigate('/form');
    }

    return (
        <div>
            <h2>Accueil</h2>
            <p>Bienvenue sur notre site de sélection de méthodologie de gestion de projet.</p>
            <h3>Objectif</h3>
            <p>L'objectif de ce site est de vous aider à choisir la meilleure méthodologie de gestion de projet pour votre projet.</p>
            <h3>Comment ça marche ?</h3>
            <p>Vous commencez par remplir un formulaire avec des informtions de votre projet</p>
            <p>Ensuite, le site vous propose des méthodologies de gestion de projet adaptées à votre projet</p>
            <p>Enfin, vous pouvez consulter les résultats de votre recherche</p>
            <h4>Pour commencer Appuyer sur le bouton</h4>
            <nav>
            <button onClick={handleClick} type="submit">Commencer</button>
            </nav>
        </div>
    );
}