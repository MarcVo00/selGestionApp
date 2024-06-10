import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormComponent() {
    const [projectDetails, setProjectDetails] = useState({
        domain: '',
        complexite: '',
        budget: '',
        tailleEquipe: '',
        implicationClient: '',
        culture: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the form data to the suggestions page
        navigate('/suggestions', { state: projectDetails });
    };

    const dropdownOptions = {
        domain: [
            { value: 'informatique', label: 'Informatique' },
            { value: 'marketing', label: 'Marketing' },
            { value: 'construction', label: 'Construction' },
            { value: 'education', label: 'Éducation' },
            { value: 'other', label: 'Autre' }
        ],
        complexite: [
            { value: 'complexe', label: 'Complexe' },
            { value: 'simple', label: 'Simple' }
        ],
        budget: [
            { value: 'serré', label: 'Serré' },
            { value: 'large', label: 'Large' }
        ],
        tailleEquipe: [
            { value: 'petit', label: 'Petit' },
            { value: 'grand', label: 'Grand' }
        ],
        implicationClient: [
            { value: 'forte', label: 'Forte' },
            { value: 'faible', label: 'Faible' }
        ],
        culture: [
            { value: 'flexible', label: 'Flexible' },
            { value: 'stricte', label: 'Stricte' }
        ]
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <h4>Domaine:</h4>
                <select name="domain" value={projectDetails.domain} onChange={handleChange}>
                    <option value="">Sélectionnez un domaine</option>
                    {dropdownOptions.domain.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                <h4>Complexité:</h4>
                <select name="complexite" value={projectDetails.complexite} onChange={handleChange}>
                    <option value="">Sélectionnez la complexité</option>
                    {dropdownOptions.complexite.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                <h4>Budget:</h4>
                <select name="budget" value={projectDetails.budget} onChange={handleChange}>
                    <option value="">Sélectionnez le budget</option>
                    {dropdownOptions.budget.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                <h4>Taille de l'équipe:</h4>
                <select name="tailleEquipe" value={projectDetails.tailleEquipe} onChange={handleChange}>
                    <option value="">Sélectionnez la taille de l'équipe</option>
                    {dropdownOptions.tailleEquipe.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                <h4>Implication du client:</h4>
                <select name="implicationClient" value={projectDetails.implicationClient} onChange={handleChange}>
                    <option value="">Sélectionnez l'implication du client</option>
                    {dropdownOptions.implicationClient.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                <h4>Culture d'entreprise:</h4>
                <select name="culture" value={projectDetails.culture} onChange={handleChange}>
                    <option value="">Sélectionnez la culture</option>
                    {dropdownOptions.culture.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">Soumettre</button>
        </form>
    );
}
