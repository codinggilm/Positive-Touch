import React from 'react';
// import simpleParallax from 'simple-parallax-js';
import Navbar from '../../components/Navbar/Navbar';
// import Footer2 from '../../components/Footer/Footer2/Footer2';
import Footer from '../../components/Footer/Footer';
import '../../scss/Ellie.scss';
// import dog1 from '../../assets/img/dog7.png';

const Ellie = () => {
    return ( 
        <div>

            <div id="ellie-main">
            <Navbar />
            <div className="services-lead">
                        <h1>Our Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore architecto commodi vitae porro est nam!</p>
                    </div>
                    
                    <div className="puppy-training">
                        <div className="puppy-text">
                            <h1>Training Your Puppy</h1>
                            <h2>Puppy Training Classes</h2>
                            <p>When it comes to teaching dogs on how to behave around people and other pets, CK9 Training can help. Highly experienced in training pets, our company offers puppy training classes in Surrey to teach pets how to behave and obey commands properly. We will be there to provide advice, regardless of the age or breed of your dog.</p>
                            <br/>
                            <p>Teaching the Basics.</p>
                            <p>Our puppy training in Surrey will guide you through the basics of pet care and training, from socialisation to bite inhibition. Our team can teach you how to understand animal behaviour to help improve your relationship with your pet. We can also provide instruction to basic obedience, including behavioural counselling designed to meet the needs of your pet.</p>
                            <br/>
                            <p>Providing a Friendly Environment for Pets</p>
                            <p>CK9 Training adheres to a friendly yet professional approach when it comes to teaching you and your dogs. We don’t just simply teach pets how to behave properly—we make an effort to provide a fun environment for your little pup. The whole family are welcome to attend our classes, to experience our puppy training in Epsom.</p>
                        </div>
                        <div className="puppu-training-grid">

                        </div>
                    </div>

            </div>
                <Footer />
        </div>
    )
};

export default Ellie;