import React, { useState, useEffect } from 'react';
import './trainingsFeed.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin} from '@fortawesome/free-solid-svg-icons';

function TrainingsFeed() {
    const [trainingData, setTrainingData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/trening', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setTrainingData(data);
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
            <h1>Szkolenia</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    {trainingData.map((training, index) => (
                        <div className="training" key={index}>
                            <div className="training-image">
                                <img src={training.companyLogo} alt="" />
                            </div>
                            <div className="training-description">
                                <div className="training-title">
                                    <h3>{training.title}</h3>
                                </div>
                                <div className="training-firm">
                                    <p>{training.description}</p>
                                </div>
                                <div className="training-description-inner">
                                    <div className="training-description-city">
                                        <p><FontAwesomeIcon icon={faLocationPin} /> Kraków, 16-17 listopada 2023 </p>
                                    </div>
                                </div>                
                            </div>
                            <div className="training-additional-info">
                                <div className="training-additional-info-desc">
                                    <p>{training.treningDesc}</p>
                                </div>
                                <div className="training-additional-info-buttons">
                                    <h3>{training.price}</h3>
                                    <a href={training.link}>Zapisz się</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
}

export default TrainingsFeed;