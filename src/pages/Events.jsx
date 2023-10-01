import React from 'react'
import Header from '../components/Header/Header';
import EventFeed from '../components/EventFeed/EventFeed';

function Events () {
    return <>
        {/* <Header /> */}
        <section>
            <div className="container">
                <EventFeed />
            </div>
        </section>
    </>
}

export default Events;