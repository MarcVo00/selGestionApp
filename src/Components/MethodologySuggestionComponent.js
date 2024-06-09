import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MethodologySuggestionComponent.css';

export default function MethodologieChoices() {
    const location = useLocation();
    const projectDetails = location.state || {};
    const navigate = useNavigate();

    const [methodologies, setMethodologies] = React.useState([]);

    React.useEffect(() => {
        const fetchMethodologies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/methodologies');
                const data = response.data;

                // Filter methodologies based on form data
                const filteredMethodologies = data.filter(methodology => {
                    const matchesTailleEquipe = !projectDetails.tailleEquipe || methodology.tailleEquipe === projectDetails.tailleEquipe;
                    const matchesComplexite = !projectDetails.complexite || methodology.complexite === projectDetails.complexite;
                    const matchesBudget = !projectDetails.budget || methodology.budget === projectDetails.budget;
                    const matchesImplicationClient = !projectDetails.implicationClient || methodology.implicationClient === projectDetails.implicationClient;
                    const matchesCulture = !projectDetails.culture || methodology.culture === projectDetails.culture;
                    const matchesDomain = !projectDetails.domain ||
                        (projectDetails.domain === 'other' ||
                        (projectDetails.domain === 'informatique' && methodology.informatique) ||
                        (projectDetails.domain === 'marketing' && methodology.marketing) ||
                        (projectDetails.domain === 'construction' && methodology.construction) ||
                        (projectDetails.domain === 'education' && methodology.education));

                    return matchesTailleEquipe && matchesComplexite && matchesBudget && matchesImplicationClient && matchesCulture && matchesDomain;
                });

                setMethodologies(filteredMethodologies);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMethodologies();
    }, [projectDetails]);

    const handleClick = (methodology) => {
        navigate(`/suggestions/${methodology.nom}`);
    };
    

    return (
        <div className="methodology-suggestions">
            <h2>Methodologies</h2>
            <div className="methodology-grid">
                {methodologies.map((methodology) => (
                    <div
                        key={methodology._id}
                        className="methodology-container"
                        onClick={() => handleClick(methodology)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="methodology-icon">
                            <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Icon" />
                        </div>
                        <strong>{methodology.nom}</strong>
                        <p>{methodology.descriptionCourte}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

