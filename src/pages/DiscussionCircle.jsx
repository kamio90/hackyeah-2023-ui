import React from 'react'
import Header from '../components/Header/Header';
import DiscusstionCircleFeed from '../components/DiscusstionCircleFeed/DiscusstionCircleFeed';

function DiscussionCircle () {
    return <>
        <Header />
        <section>
            <div className="container">
                <DiscusstionCircleFeed />
            </div>
        </section>
    </>
}

export default DiscussionCircle;