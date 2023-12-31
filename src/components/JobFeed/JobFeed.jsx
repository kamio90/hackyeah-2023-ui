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
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/job-offer', { method: 'GET' });
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
        <section>
            <h1>Oferty pracy</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    {jobData.map((job, index) => (
                    <div className="job" key={index}>
                        <div className="job-image">
                            <img src={job.companyLogo} alt="" />
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
                                    <p><FontAwesomeIcon icon={faLocationPin} /> {job.localization}</p>
                                </div>
                                <div className="job-description-contact">
                                    <p><FontAwesomeIcon icon={faFile} /> {job.contract}</p>
                                </div>
                                <div className="job-description-level">
                                    <p><FontAwesomeIcon icon={faFile} /> {job.skill}</p>
                                </div>
                            </div>                
                        </div>
                        <div className="job-additional-info">
                            <h3>Znamy widełki</h3>
                            <div className="badges">
                                {job.stack.map((jobI, index) => (
                                    <p key={index}>{jobI}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            )}
        </section>
        
        
    </>
}

export default NewsFeed;