import React from 'react'
import Header from '../components/Header/Header';
import DevelopmentPathFeed from '../components/DevelopmentPathFeed/DevelopmentPathFeed';


function DeveloperPath () {
    return <>
        {/* <Header /> */}
        <section>
            <div className="container">
                <DevelopmentPathFeed />
            </div>
        </section>
    </>
}

export default DeveloperPath;