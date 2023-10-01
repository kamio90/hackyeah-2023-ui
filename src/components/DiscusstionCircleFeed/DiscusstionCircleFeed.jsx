import React, { useState, useEffect } from 'react';
import './DiscusstionCircleFeed.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'

function DiscusstionCircle() {
    const [discusstionCircleData, setDiscusstionCircleData] = useState([]);
    const [ueData, setUeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading_two, setLoadingTwo] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/discussion-circles', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setDiscusstionCircleData(data);
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

    useEffect(() => {
        async function fetchDataUe() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/ue', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setUeData(data);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingTwo(false);
            }
        }

        fetchDataUe();
    }, []);
    return <>
        <div>
            <h1>Grupy dyskusyjne</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                
                <div className="discussion-container">
                    {discusstionCircleData.map((discusstionCircle, index) => (
                        <div className="discussion-inner" key={index}>
                            <div className="discussion-inner-img">
                                <FontAwesomeIcon icon={faNoteSticky} />
                            </div>
                            <div className="discussion-inner-description">
                                <p><a href="">{discusstionCircle.title}</a></p>
                                <p>Użytkowników w wątku: {discusstionCircle.members.length}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <h1>UE</h1>
            {loading_two ? (
                <p>Ładowanie danych...</p>
            ) : (
                
                <div className="discussion-container">
                    {ueData.map((ue, index) => (
                        <div className="discussion-inner" key={index}>
                            <div className="discussion-inner-img">
                                <FontAwesomeIcon icon={faNoteSticky} />
                            </div>
                            <div className="discussion-inner-description">
                                <p><a href="">{ue.name}</a></p>
                                <p>Obowiązuje w {ue.country}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
}

export default DiscusstionCircle;