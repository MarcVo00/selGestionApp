import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './OutilComponent.css';  // Import the CSS file

export default function OutilComponent() {
    const { nomOutil } = useParams();
    const [outil, setOutil] = useState(null);

    useEffect(() => {
        const fetchOutil = async () => {
            try {
                console.log('Fetching outil data for id:', nomOutil);
                const response = await axios.get(`https://selgestionbackend.onrender.com/api/outils/${nomOutil}`);
                setOutil(response.data);
            } catch (error) {
                console.error('Error fetching outil data:', error);
            }
        };

        fetchOutil();
    }, [nomOutil]);

    const handleUrlClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (!outil) {
        return <div>Loading...</div>;
    }

    return (
        <div className="outil-container" onClick={() => handleUrlClick(outil.url)}>  {/* Apply the CSS class */}
            <h2>
                {outil.nom}
                {outil.payant && (
                    <img
                        src={`${process.env.PUBLIC_URL}/money.png`}
                        alt="Paid Icon"
                        style={{ marginLeft: '10px', width: '20px', height: '20px' }}
                    />
                )}
            </h2>
            <p className="compact-text">{outil.descriptionLongue}</p>
        </div>
    );
}
