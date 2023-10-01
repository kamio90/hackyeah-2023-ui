import React from 'react'
import Header from '../components/Header/Header';
import ProjectsFeed from '../components/ProjectsFeed/ProjectsFeed';

function DiscussionCircle () {
    return <>
        <Header />
        <section>
            <div className="container">
                <ProjectsFeed />
            </div>
        </section>
    </>
}

export default DiscussionCircle;