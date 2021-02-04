import React, { Component } from 'react';
import Media from 'react-media';
import '../scss/MobileNav.scss';

 

const MobileNav = () => {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler"/><div></div>
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

            {/* <header id="showcase">
                <div className="container showcase-container">
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, error.</p>
                </div>
            </header> */}
        </div>
    )
}




export default MobileNav;