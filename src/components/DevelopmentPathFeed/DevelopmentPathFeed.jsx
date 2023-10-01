import React, { useState, useEffect } from 'react';
import './DevelopmentPathFeed.scss'

function DeveloperPathFeed() {
    const [developmentPathData, setDevelopmentPathData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/development-path', { method: 'GET' });
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
        <section>
            <header>
                <h1>Ścieżki rozwoju</h1>
                <p>Tutaj prezentowane są możliwe ścieżki kariery. Przygotowane przez firmy kursy, które mogą przygotować Cię, do podjęcia nowej pracy.</p>
            </header>
            
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
        </section>
    </>
}

export default DeveloperPathFeed;