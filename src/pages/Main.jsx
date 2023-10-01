import React from 'react';
import Header from '../components/Header/Header';
import NewsFeed from '../components/NewsFeed/NewsFeed';
import EventFeedWithLikes from '../components/EventFeedWithLikes/EventFeedWithLikes';

function Main() {
    return <>
        {/* <Header /> */}
        <section>
            <div className="container">
                <NewsFeed />
                <EventFeedWithLikes />
            </div>
        </section>
    </>
}

export default Main;