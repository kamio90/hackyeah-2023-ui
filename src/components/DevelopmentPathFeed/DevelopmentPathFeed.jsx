import React, { useState, useEffect } from 'react';
import './DevelopmentPathFeed.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faFile } from '@fortawesome/free-solid-svg-icons'

function DeveloperPathFeed() {
    const [developmentPathData, setDevelopmentPathData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/development-path', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setDevelopmentPathData(data);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    return <>
        <div>
            <h1>Ścieżki rozwoju</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                
                <div className="tile-container">
                    {developmentPathData.map((developmentPath, index) => (
                        <div className="tile" key={index}>
                            <p><a href="">{developmentPath.title}</a></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
}

export default DeveloperPathFeed;