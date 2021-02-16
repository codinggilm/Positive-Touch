// import React, { Component } from 'react';
import React from 'react';
// import Media from 'react-media';
import '../scss/MobileNav.scss';

 

const MobileNav = () => {
    return (
        <div className="mobileNav">
            <div className="menu-wrap">
                <input type="checkbox" className="toggler"/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/what">What We Do</a></li>
                                <li><a href="/puppyservices">Puppy Services</a></li>
                                <li><a href="/adultservices">Adult Services</a></li>
                                <li><a href="/meet">Meet Ellie</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default MobileNav;