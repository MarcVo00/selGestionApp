import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ResultComponent.css'; // Make sure to import the CSS file

export default function ResultComponent() {
    const { nomMethodology } = useParams();
    const [methodology, setMethodology] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMethodology = async () => {
            try {
                console.log('Fetching methodology data for id:', nomMethodology);
                const response = await axios.get(`http://localhost:5000/api/methodologies/${nomMethodology}`);
                setMethodology(response.data);
            } catch (error) {
                console.error('Error fetching methodology data:', error);
            }
        };

        fetchMethodology();
    }, [nomMethodology]);

    const handleClick = (methodelogieName, methode) => {
        navigate(`/methode/${methode}`); // Adjust the route as needed
    };

    if (!methodology) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="result-title">{methodology.nom}</h2>
            <p>{methodology.descriptionLongue}</p>
            <h3>Methodes</h3>
            <div className="result-suggestions">
                {methodology.methodes.map((methode, index) => (
                    <div
                        key={index}
                        className="result-container"
                        onClick={() => handleClick(methodology.nom,methode)}
                    >
                        <div className="result-icon">
                            <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Icon" />
                        </div>
                        <strong>{methode}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}
