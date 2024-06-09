import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormComponent() {
    const [projectDetails, setProjectDetails] = useState({
        domain: '',
        complexite: '',
        delai: '',
        budget: '',
        tailleEquipe: ''
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
        delai: [
            { value: 'court', label: 'Court' },
            { value: 'long', label: 'Long' }
        ],
        budget: [
            { value: 'serré', label: 'Serré' },
            { value: 'large', label: 'Large' }
        ],
        tailleEquipe: [
            { value: 'petit', label: 'Petit' },
            { value: 'grand', label: 'Grand' }
        ]
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Domaine:
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
                Complexité:
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
                Délai:
                <select name="delai" value={projectDetails.delai} onChange={handleChange}>
                    <option value="">Sélectionnez le délai</option>
                    {dropdownOptions.delai.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Budget:
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
                Taille de l'équipe:
                <select name="tailleEquipe" value={projectDetails.tailleEquipe} onChange={handleChange}>
                    <option value="">Sélectionnez la taille de l'équipe</option>
                    {dropdownOptions.tailleEquipe.map(option => (
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
