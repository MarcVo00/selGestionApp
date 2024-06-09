import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ResultComponent() {
    const { idMethodology } = useParams();
    const [methodology, setMethodology] = useState(null);

    useEffect(() => {
        const fetchMethodology = async () => {
            try {
                console.log('Fetching methodology data for id:', idMethodology);
                const response = await axios.get(`http://localhost:5000/api/methodologies/${idMethodology}`);
                setMethodology(response.data);
            } catch (error) {
                console.error('Error fetching methodology data:', error);
            }
        };

        fetchMethodology();
    }, [idMethodology]);

    if (!methodology) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{methodology.nom}</h2>
            <p>{methodology.descriptionLongue}</p>
            {/* Add more details as needed */}
        </div>
    );
}
