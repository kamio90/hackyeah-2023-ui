import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './EventFeed.scss'
import john from './john.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function eventsFeed() {
    const [eventFeedData, setEventFeedData] = useState([]);
    const [loading, setLoading] = useState(true);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

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
        <div>
            <h1>Wydarzenia</h1>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <Slider {...settings}
                    // centerMode
                    // centerSlidePercentage={32}
                    // infiniteLoop
                    // slidesToShow={3}
                >
                    {eventFeedData.map((event, index) => (
                        <div className="event" key={index}>
                            <div className="event-image">
                                <img src={john} alt="" />
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
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    </>
}

export default eventsFeed;