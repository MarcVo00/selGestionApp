import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function MethodologieChoices() {
    const [methodologies, setMethodologies] = useState([]);

    useEffect(() => {
        const fetchMethodologies = async () => {
            try {
                console.log('Fetching data...');
                const response = await axios.get('http://localhost:5000/api/methodologies');
                console.log('Data fetched:', response.data);
                setMethodologies(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchMethodologies();
    }, []);

    return (
        <div>
            <h2>Methodologies</h2>
            <ul>
                {methodologies.map((methodology) => (
                    <li key={methodology._id}>
                        <strong>{methodology.nom}</strong> - {methodology.descriptionCourte}
                    </li>
                ))}
            </ul>
        </div>
    );
}
