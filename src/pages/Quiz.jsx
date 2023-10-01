import React from 'react'
import Header from '../components/Header/Header';
import QuizFeed from '../components/QuizFeed/QuizFeed';

function DiscussionCircle () {
    return <>
        <Header />
        <section>
            <div className="container">
                <QuizFeed />
            </div>
        </section>
    </>
}

export default DiscussionCircle;