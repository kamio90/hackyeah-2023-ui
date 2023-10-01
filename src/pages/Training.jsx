import React from 'react'
import Header from '../components/Header/Header';
import TrainingsFeed from '../components/TrainingsFeed/TrainingsFeed';

function Training () {
    return <>
        {/* <Header /> */}
        <section>
            <div className="container">
                <TrainingsFeed />
            </div>
        </section>
    </>
}

export default Training;