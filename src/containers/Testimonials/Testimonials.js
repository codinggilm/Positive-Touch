import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import Footer2 from '../../components/Footer/Footer2/Footer2';
import Footer from '../../components/Footer/Footer';
import '../../scss/Testimonials2.scss';
import Review from '../../components/Review'

const Testimonials = () => {
    return (
        <div>
            <div id="testimonials-main">
                <Navbar />
                {/* <h1>What our clients say</h1> */}
                <div id="testimonials" className="tp">
                    {/* <div className="container testimonials-container">
                        <div className="review-section">
                            <div className="review-grid">
                                <Review />
                                <Review />
                                <Review />
                            </div>
                        </div>
                        <div className="review-section">
                            <div className="review-grid">
                                <Review />
                                <Review />
                                <Review />
                            </div>
                        </div>
                    </div> */}
                        <section className="review-slide review-1">
                        <h1 className="review-lead">What our clients say</h1>
                        <div className="review-grid">
                            <Review />
                            <Review />
                            <Review />
                        </div>
                        </section>
                    <section className="review-slide review-grid review-2">
                        <Review />
                        <Review />
                        <Review />
                    </section>

                </div>
                {/* <div className="testimonials-footer"> */}
                {/* </div> */}
            <Footer />
            </div>
        </div>
    )
};

export default Testimonials;