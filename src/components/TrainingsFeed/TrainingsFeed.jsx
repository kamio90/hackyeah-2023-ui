import React, { useState, useEffect } from 'react';
import './trainingsFeed.scss'
import john from './john.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faFile } from '@fortawesome/free-solid-svg-icons'

function TrainingsFeed() {
    const [trainingData, setTrainingData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/trening', { method: 'GET' });
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
                                <img src={john} alt="" />
                            </div>
                            <div className="training-description">
                                <div className="training-title">
                                    <h3>{training.description}</h3>
                                </div>
                                <div className="training-firm">
                                    <p>{training.title}</p>
                                </div>
                                <div className="training-description-inner">
                                    <div className="training-description-city">
                                        <p><FontAwesomeIcon icon={faLocationPin} /> Kraków, 16-17 listopada 2023 </p>
                                    </div>
                                </div>                
                            </div>
                            <div className="training-additional-info">
                                <div className="training-additional-info-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto adipisci reiciendis incidunt quod rem explicabo, magnam nostrum dolores nihil corrupti dolorum quaerat facere hic provident maxime, labore aliquid! Laborum.</p>
                                </div>
                                <div className="training-additional-info-buttons">
                                    <h3>1350zł</h3>
                                    <a href="">Zapisz się</a>
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