import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './MethodeComponent.css';

export default function MethodeComponent() {
    const {nomMethode} = useParams();
    const [methode, setMethode] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMethode = async () => {
            try {
                console.log('Fetching methode data for id:', nomMethode);
                const response = await axios.get(`https://selgestionbackend.onrender.com/api/methodes/${nomMethode}`);
                setMethode(response.data);
            } catch (error) {
                console.error('Error fetching methode data:', error);
            }
        };

        fetchMethode();
    }, [nomMethode]);

    const handleClick = (outil) => {
        navigate(`/outil/${outil}`);
    }
    if (!methode) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>
                {<img src={`${process.env.PUBLIC_URL}/${methode.img_url}`} alt="Method Icon" style={{marginRight: '30px', width: '50px', height: '50px', marginLeft: '10px'}} />}
                {methode.nom}
            </h2>
            <p>{methode.description}</p>
            <h3>Avantages</h3>
            <ul>
                {methode.avantages.map((avantage, index) => (
                    <li key={index}>{avantage}</li>
                ))}
            </ul>
            <h3>Inconvenients</h3>
            <ul>
                {methode.desavantages.map((desavantage, index) => (
                    <li key={index}>{desavantage}</li>
                ))}
            </ul>
            <h3>Outils</h3>
            <div className="outil-suggestions">
                {methode.outils_nom.map((outil, index) => (
                    <div
                        key={index}
                        className="outil-container-suggestions"
                        onClick={() => handleClick(outil)}
                    >
                        <strong>{outil}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}