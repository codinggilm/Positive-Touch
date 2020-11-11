import React from 'react';
import '../scss/Review.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Navbar from './components/Navbar';

const Review = () => {
    return (
        <div> 
            <main className="review-main">
                <div>
                    <div className="container review-container">
                        <div className="review-wrapper">
                            <p className="review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum, quae reiciendis dolorum animi recusandae iusto autem nobis numquam aspernatur porro explicabo odio in ratione neque vitae dicta, eligendi unde fugiat, rerum doloribus? Culpa illum provident doloribus dolorem quis iusto nemo ipsum suscipit voluptates! Non neque dolor pariatur sapiente consectetur?</p>
                            <p className="review-author">Jon Doe, Sudosopa - London</p>
                        </div>
                        {/* <svg><path d="M 0.342304 14.5 C 7.35025 6.3293 3.35025 0.829295 0 0 C 0 0 5.4 2.1 32.3502 0.329295 C 32.3503 3.8293 -3.13481 20.7261 0.342304 14.5 Z"/></svg> */}
                        {/* <svg><path d="M 6 40 L 70 10 L 1 10 Z"/></svg> */}
                        {/* <svg><path d="M 8 48 L 48 16 L 32 16 Z"/></svg> */}
                        <svg><path d="m 31 20 l 39 0 l -49 31 z"/></svg>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Review;