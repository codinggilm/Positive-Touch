import React, { Component } from 'react';
import Media from 'react-media';
import Navbar from '../../components/Navbar/Navbar';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer/Footer';
import dog from '../../assets/img/dog28.jpg';
import dog1 from '../../assets/img/dog22.jpg';
// import dog2 from '../../assets/img/dogs1.jpg';
import dog3 from '../../assets/img/dog13.jpg';
import dog4 from '../../assets/img/dogs1.jpg';
import dog5 from '../../assets/img/dog9.jpg';
import dog6 from '../../assets/img/dog17.jpg';
// import dog7 from '../../assets/img/dog29.jpg';
import ellie from '../../assets/ellie/ellie4-2.png';
import logo from '../../assets/img/logo-white-trans.png';
import '../../scss/Home.scss';
import sr from '../../ScrollReveal';

 
 
class Home extends Component {


    componentDidMount = () => {
        const config1 = {
        //   origin: 'right',
          duration: 1500,
          delay: 250,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal('.line1', config1)

        const config2 = {
        //   origin: 'right',
          duration: 1500,
          delay: 650,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal('.line2', config2)
 
        const config3 = {
        //   origin: 'right',
          duration: 1500,
          delay: 1050,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal('.line3', config3)
      
        const config4 = {
        //   origin: 'right',
          duration: 1500,
          delay: 1450,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal('.line4', config4)
        
        const config5 = {
        //   origin: 'right',
          duration: 1500,
          delay: 1850,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal('.box-reveal', config5)

        const config6 = {
            //   origin: 'center',
              duration: 1000,
              delay: 500,
              distance: '0px',
              scale: 1,
              easing: 'ease',
            }
        
            sr.reveal('.title-reveal', config6)
    }


    render() {

        return (
            <div id="home-wrapper">

                <Media query="(max-width: 599px)" render={() =>
                    (
                        <MobileNav />
                    )}
                />
                <Media query="(min-width: 599px)" render={() =>
                    (
                        <Navbar />
                    )}
                />
    
                <div id="home-main" className="tp">
                    <header id="showcase">
                        <div className="container showcase-container">
                        <img src={logo} alt=""/>
                        </div> 
                    </header>
    
                
    
                    <section id="home-content2">
                        <div className="home-banner">
                            <div className="home-content-text">
                                <h1 className="title-reveal">Welcome to Positive Touch</h1>

                            </div>
                        </div>
    
                        <section id="hello">
                            <div className="hello-intro">
                                <h1 className="hello-title">Positive Touch</h1>
                                <Media query="(max-width: 599px)" render={() =>
                                    (
                                        <div>
                                            <p>Promoting positive force-free training using the latest canine behavioural science techniques.</p>
                                            <p>We work with you to deliver incredible results for you and your dog</p>
                                        </div>
                                        
                                    )}
                                />
                                <Media query="(min-width: 599px)" render={() =>
                                    ( 
                                        <div>
                                            <p>--- Promoting positive force-free training using the latest canine behavioural science techniques. ---</p>
                                            <p>--- We work with you to deliver incredible results for you and your dog ---</p>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="containerr">
                                <div className="hello-grid">
                                    <div className="hello-card bg-card1">
                                        <div className="hello-text">
                                            <i className="fas fa-dog fa-2x"></i>
                                            <p className="title">Understand your dog(s)</p>
                                            <p>Learn how to understand your dog and why it is so important to get it right, it all starts here!</p>
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={dog3} alt=""/>
                                        </div>
                                    </div>
                                    <div className="hello-card bg-card2">
                                        <div className="hello-text">
                                            <i className="fas fa-paw fa-2x"></i>
                                            <p className="title">Grow your bond</p>
                                            <p>We will enable you to grow your bond deeper and thicker, for the benefit of both you and your animal.</p>
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={dog4} alt=""/>
                                        </div>
                                    </div>
                                    <div className="hello-card bg-card1">
                                        <div className="hello-text">
                                            <i className="fas fa-bone fa-2x"></i>
                                            <p className="title">Enjoy long lasting results</p>
                                            <p>Your success is our success, we provide you with a roadmap to achieving long and sustainable results.</p>
                                        </div>
                                        <div className="img-wrapper img-3">
                                            <img src={dog5} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
    
                    </section>
                    
                    <section className="hello2">
                        <div className="container">
                            <h1 className="hello2-title">We have experience in addressing many kinds of behaviour including:</h1>
                            <div className="action-grid">
                                <Media query="(max-width: 599px)" render={() =>
                                    (
                                        <div>
                                            <div className="column">
                                                <ul>
                                                    <li><i className="fas fa-check-square"></i>Aggression</li>
                                                    <li><i className="fas fa-check-square"></i>Pulling on the lead</li>
                                                    <li><i className="fas fa-check-square"></i>Constant barking</li>
                                                    <li><i className="fas fa-check-square"></i>Fussy eaters</li>
                                                    <li><i className="fas fa-check-square"></i>Toileting in the house</li>
                                                    <li><i className="fas fa-check-square"></i>Jumping up at visitors</li>
                                                    <li><i className="fas fa-check-square"></i>Persistent following</li>
                                                    <li><i className="fas fa-check-square"></i>Running away</li>
                                                </ul>
                                            </div>
                                            <div className="column">
                                                <ul>
                                                    <li><i className="fas fa-check-square"></i>Nervousness</li>
                                                    <li><i className="fas fa-check-square"></i>Destructive behaviour</li>
                                                    <li><i className="fas fa-check-square"></i>Possessiveness</li>
                                                    <li><i className="fas fa-check-square"></i>Hyperactivity</li>
                                                    <li><i className="fas fa-check-square"></i>Separation anxiety</li>
                                                    <li><i className="fas fa-check-square"></i>Ignoring requests</li>
                                                    <li><i className="fas fa-check-square"></i>Restlessness</li>
                                                    <li><i className="fas fa-check-square"></i>Poor recall</li>

                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                />
                                <Media query="(min-width: 599px)" render={() =>
                                    (
                                        <div>
                                            <div className="column">
                                                <ul>
                                                    <li><i className="fas fa-check-square"></i>Aggression</li>
                                                    <li><i className="fas fa-check-square"></i>Pulling on the lead</li>
                                                    <li><i className="fas fa-check-square"></i>Constant barking</li>
                                                    <li><i className="fas fa-check-square"></i>Fussy eaters</li>
                                                    <li><i className="fas fa-check-square"></i>Toileting in the house</li>
                                                </ul>
                                            </div>
                                            <div className="column">
                                                <ul>
                                                    <li><i className="fas fa-check-square"></i>Jumping up at visitors</li>
                                                    <li><i className="fas fa-check-square"></i>Persistent following</li>
                                                    <li><i className="fas fa-check-square"></i>Running away/poor recall</li>
                                                    <li><i className="fas fa-check-square"></i>Ignoring requests</li>
                                                    <li><i className="fas fa-check-square"></i>Restlessness</li>
                                                </ul>
                                            </div>
                                            <div className="column">
                                                <ul>
                                                    <li><i className="fas fa-check-square"></i>Nervousness</li>
                                                    <li><i className="fas fa-check-square"></i>Destructive behaviour</li>
                                                    <li><i className="fas fa-check-square"></i>Possessiveness</li>
                                                    <li><i className="fas fa-check-square"></i>Hyperactivity</li>
                                                    <li><i className="fas fa-check-square"></i>Separation anxiety</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <p className="outro">And much more...</p>
                        </div>
                    </section>

                    <section className="home3">
                        <div className="grid-border">
        
                            <div className="home3-grid">
                                <div className="home3-content bd-right">
                                    <img src={dog1} alt=""/>
                                    <div className="home-content-text">
                                        <h1>Who we are</h1>
                                        <p>We provide excellence for our customers since 2018, learn more about our history and achievements.</p>
                                        <a href="/about" className="btn-primary">See More</a>
                                    </div>
                                </div>
                                <div className="home3-content">
                                    <img src={dog6} alt=""/>
                                    <div className="home-content-text">
                                        <h1>Our purpose</h1>
                                        <p>Discover our mission and our philosophy, and why we can help you to improve your life and your pet's.</p>
                                        <a href="/what" className="btn-primary">See More</a>
                                    </div>
        
                                </div>
                            </div>
                            <hr/>
                            <div className="home3-grid">
                                <div className="home3-content bd-right">
                                    <img src={ellie} alt=""/>
                                    <div className="home-content-text">
                                        <h1>Meet our trainer</h1>
                                        <p>Learn more about Ellie, our star trainer. The passionate driving force behind Positive Touch.</p>
                                        <a href="/meet" className="btn-primary">See More</a>
                                    </div>
        
                                </div>
                                <div className="home3-content ">
                                    <img src={dog} alt=""/>
                                    <div className="home-content-text">
                                        <h1>See our services</h1>
                                        <p>Different dogs, different needs. Different owners, different approaches. Click to find out what we offer. </p>
                                        <a href="/adultservices" className="btn-primary">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    
                    <section className="home2">
                            <div className="home2-content-card">
                                <div className="card-text-wrapper box1">
                                    <h1 className="line1">Be more than a dog owner</h1>
                                    <h1 className="line2">Be the dog master</h1>
                                    <h1 className="line3">Benefit from a bespoke training</h1>
                                    <h1 className="line4">Start a new journey with your dog</h1>
                                    <div className="contact-box box-reveal">
                                        <a href="/" className="btn-primary home2-btn">Click to book a free consultation</a>
                                    </div>
                                </div>
                            </div>
                    </section>
    
                </div>
    
                <Footer />
    
            </div>
        );
    }
};


export default Home;