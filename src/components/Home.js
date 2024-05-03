import React from "react";
import './Home.css';

const Home = props => {
    return (
        <div className="home-container">
            {/* Introduction */}
            <div className="introduction">
                <h2>Welcome to Portland.</h2>
                <p>
                Visitors to the Greater Portland region will find more than enough  
                </p><p>
                to explore without even leaving the peninsula.
                </p><p>
                Though smaller than some of its east coast rivals, this little city has
                </p><p>
                a world-class dining scene, a truly magnificent art museum,
                </p><p>
                and plenty of places to enjoy the scenic rocky coast. 
                </p><p>
                The city maintains much of its 19th century architecture and flavor
                </p><p>
                and the character of the trading and fishing settlement it once
                </p><p>
                was when it was established in 1632. 
                </p>
            </div>

            {/* lighthouse */}
            <div className="lighthouse-container">
                <img src="/images/lighthouse.jpeg" alt="lighthouse" />
            </div>
        </div>
    )
}

export default Home;