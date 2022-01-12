import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>
            <section className="text">
                <h2>The Perfect way to master Mathematicsis to practice Mathematics</h2>
                <p>Start learning mathematics using free tool calculator.</p>
                <a href="/Calculator">
                    <button className="btn" type="button">Click To Start!</button>
                </a>
            </section>
        </div>
    )
}

export default Home
