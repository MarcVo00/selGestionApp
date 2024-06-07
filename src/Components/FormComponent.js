import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormComponent({ onSubmit }) {
    const [projectType, setProjectType] = useState('');
    const [projectSize, setProjectSize] = useState('');
    const [projectScope, setProjectScope] = useState('');
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate('/suggestions');

    };

    return (
        <form>
            <label>
                Type de projet:
                <input type="text" value={projectType} onChange={e => setProjectType(e.target.value)} />
            </label>
            <label>
                Taille du projet:
                <input type="number" value={projectSize} onChange={e => setProjectSize(e.target.value)} />
            </label>
            <label>
                Périmètre du projet:
                <input type="text" value={projectScope} onChange={e => setProjectScope(e.target.value)} />
            </label>
            <button onClick={handleClick} type="submit">Soumettre</button>
        </form>
    );
}

