import React, { useState, useEffect } from 'react';
import moment from 'moment';
import localization from 'moment/locale/pl';
import './ProjectsFeed.scss';

function NewsFeed() {
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/projects', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setProjectData(data);
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

    moment.updateLocale('pl', localization);

    return (
        <div>
            <h1>Projekty</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    {projectData.map((project, index) => (
                        <div className="projects" key={index}>
                            <div className="projects-header">
                                <div className="projects-header-name">
                                    <h2>{project.name}</h2>
                                </div>
                                <div className="projects-description">
                                    <p>{project.description}</p>
                                </div>
                            </div>
                            <div className="projects-content">
                                <p>Czas trwania: <span>{moment(project.startDate).format('MMMM Do YYYY')}</span> - <span>{moment(project.endDate).format('MMMM Do YYYY')}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsFeed;
