import React, { useState, useEffect } from 'react';
import './NewsFeed.scss';

function NewsFeed() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/user', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setUserData(data);
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

    return (
        <div>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    {userData.map((user, index) => (
                        <div className="news" key={index}>
                            <div className="news-header">
                                <div className="news-header-image">
                                    <img src={user.avatar} alt="" />
                                </div>
                                <div className="news-header-user">
                                    <p>{user.name}</p>
                                </div>
                            </div>
                            <div className="news-content">
                                <p>{user.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsFeed;
