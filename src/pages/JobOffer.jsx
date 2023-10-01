import React from 'react'
import Header from '../components/Header/Header';
import JobFeed from '../components/JobFeed/JobFeed';


function JobOffer () {
    return <>
        <Header />
        <section>
            <div className="container">
                <JobFeed />
            </div>
        </section>
    </>
}

export default JobOffer;