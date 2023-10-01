import React, { useState, useEffect } from 'react';
import './JobFeed.scss'
import john from './john.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faFile, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

function NewsFeed () {
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/job-offer', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setJobData(data);
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
            <h1>Oferty pracy</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    {jobData.map((job, index) => (
                    <div className="job" key={index}>
                        <div className="job-image">
                            <img src={john} alt="" />
                        </div>
                        <div className="job-description">
                            <div className="job-title">
                                <h3>{job.title}</h3>
                            </div>
                            <div className="job-firm">
                                <p>Przykładowa firma</p>
                            </div>
                            <div className="job-description-inner">
                                <div className="job-description-city">
                                    <p><FontAwesomeIcon icon={faLocationPin} /> Kraków</p>
                                </div>
                                <div className="job-description-contact">
                                    <p><FontAwesomeIcon icon={faFile} /> Kontrakt B2B</p>
                                </div>
                                <div className="job-description-level">
                                    <p><FontAwesomeIcon icon={faFile} /> Mid/Regular</p>
                                </div>
                            </div>                
                        </div>
                        <div className="job-additional-info">
                            <h3>Znamy widełki</h3>
                            <div className="badges">
                                <p>HTML</p>
                                <p>CSS3</p>
                                <p>JS</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            )}
        </div>
        
        
    </>
}

export default NewsFeed;