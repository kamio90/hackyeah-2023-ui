import React from 'react';
import Header from '../components/Header/Header';
import NewsFeed from '../components/NewsFeed/NewsFeed';

function Main() {
    return <>
        <Header />
        <section>
            <div className="container">
                <NewsFeed />
            </div>
        </section>
    </>
}

export default Main;