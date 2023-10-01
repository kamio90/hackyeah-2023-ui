/* eslint-disable */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './EventFeedWithLikes.scss'
import john from './john.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


function EventFeedWithLikes() {
    const [eventFeedData, setEventFeedData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/event', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setEventFeedData(data);
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
            <h1>Wydarzenia</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    {eventFeedData.map((event, index) => (
                        <div className="event-feed-with" key={index}>
                            <div className="event-image">
                                <img src="https://gozdzikv.ayz.pl/john.png" alt="" />
                            </div>
                            <div className="event-description">
                                <div className="event-title">
                                    <h3>{event.title} - <span>{moment(event.date).format('MMMM Do YYYY')}</span></h3>
                                </div>
                                <div className="event-desc">
                                    <p>{event.description}</p>
                                </div>
                                <div className="event-description-inner">
                                    <div className="event-description-city">
                                        <p><FontAwesomeIcon icon={faLocationPin} /> {event.location} </p>
                                    </div>
                                </div>                
                            </div>
                            <div className="likes">
                                <p>Polub <FontAwesomeIcon icon={faThumbsUp} /></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    </>
}

export default EventFeedWithLikes;