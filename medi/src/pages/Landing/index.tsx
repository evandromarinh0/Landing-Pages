import React from 'react';

import logo from '../../assets/logo.svg';
import mediImg from '../../assets/medi.svg';

import './styles.css';

function Landing() {
    return (
        <div className="wrapper">
            <header className="nav-container">
                <div className="nav-content">
                    <div className="left-content">
                        <div className="logo-container">
                            <img src={logo} alt="Medi"/>
                        </div>
                        <div className="li-container">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                    </div>

                    <div className="right-buttons">
                        <button id="btn-1" type="button">Sign In</button>
                        <button id="btn-2" type="button">Sign Up</button>
                    </div>
                </div>
            </header>

            <main className="meditation">
                <div className="main-container">
                    <h1>Stay Productive {'&'} <br/>Work Remotely</h1>
                    <p>The key to work-from-home success is to create an<br/>enviroment that allows you to focus on the tasks at hand.<br/>Whether you are working from home for the first time.</p>
                    <button id="btn-3" type="button">Learn More</button>
                </div>

                <div className="main-image">
                    <img src={mediImg} alt="Meditation"/>
                </div>
            </main>
        </div>
    )
}

export default Landing;