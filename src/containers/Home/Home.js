import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import Navbar from '../../components/Navbar3/Navbar4';
import Footer from '../../components/Footer/Footer';
import dog from '../../assets/img/dog28.jpg';
import dog1 from '../../assets/img/dog22.jpg';
import dog2 from '../../assets/img/dogs1.jpg';
import dog3 from '../../assets/img/dog13.jpg';
import dog4 from '../../assets/img/dogs1.jpg';
import dog5 from '../../assets/img/dog9.jpg';
import dog6 from '../../assets/img/dog17.jpg';
import dog7 from '../../assets/img/dog29.jpg';
import ellie from '../../assets/ellie/ellie4-2.png';
import logo from '../../assets/img/logo-white-trans.png';
import '../../scss/Home.scss';
import sr from '../../ScrollReveal';
// import logo from './assets/img/logo-dark-trans1.png';
// import logo from './assets/img/logo-pink.png';
 
 
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
              origin: 'top',
              duration: 1000,
              delay: 100,
              distance: '100px',
              scale: 1,
              easing: 'ease',
            }
        
            sr.reveal('.title-reveal', config6)
    }


    render() {

        return (
            <div id="home-wrapper">
                
                <Navbar /> 
    
                <div id="home-main" className="tp">
                    <header id="showcase">
                        <div className="container showcase-container">
                        <img src={logo} alt=""/>
                            {/* <h1>Welcome to Positive Touch</h1>
                            <p>There's much to see here. So, take your time, look around, and learn all there is to know about us.</p>
                            <br/>
                            <p>We hope you enjoy our site and take a moment to leave us a review.</p> */}
                        </div> 
                    </header>
    
                    {/* <section id="home-content">
                        <div className="card-container">
                            <div className="card">
                                <div className="content-1">
                                    <h1>Positively Understanding your dog</h1>
                                    <p>Promoting positive force-free training using the latest canine behavioural science techniques.</p>
                                    <div className="btn-wrapper">
                                    <a href="#contact" className="btn-primary">
                                        Contact us
                                    </a>
                                    </div>
                                </div>
                                <img src={dog} alt=""/>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="home-banner">
                        <div className="container">
                        <h1>Welcome to Positive Touch</h1>
                            <p>We promote positive force-free training using the latest canine behavioural science techniques.</p>
                        </div>
                    </section> */}
    
                    <section id="home-content2">
                        <div className="home-banner">
                            <div className="home-content-text">
                                <h1 className="title-reveal">Welcome to Positive Touch</h1>
                                {/* <p>Promoting positive force-free training using the latest canine behavioural science techniques.</p> */}
                                {/* <div className="btn-wrapper">
                                <a href="/contact" className="btn-primary">Contact us</a>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="home-banner2">
                            <div className="home-container">
                                    <div className="home-content">
                                        <h1>Welcome to Positive Touch</h1>
                                        <p>We promote positive force-free training using the latest canine behavioural science techniques.</p>
                                        <div className="btn-wrapper">
                                        <a href="#contact" className="btn-primary">Contact us</a>
                                        </div>
                                    </div>
                            </div>
                        </div> */}
    
                        {/* BANNER TEST */}
    
                        {/* <div className="banner">
                            <div className="container">
                                <div className="banner-container">
                                    <div className="banner-content">
                                        <h1>Welcome to Positive Touch</h1>
                                        <p>We promote positive force-free training using the latest canine behavioural science techniques.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
    
                        <section id="hello">
                            <div className="hello-intro">
                                <h1 className="hello-title">Positive Touch</h1>
                                <p>--- Promoting positive force-free training using the latest canine behavioural science techniques. ---</p>
                                <p>--- We work with you to deliver incredible results for you and your dog ---</p>
                                {/* <p> Promoting positive force-free training using the latest canine behavioural science techniques. </p>
                                <p> We work with you to deliver incredible results for you and your dog </p> */}
                                {/* <h1 className="hello-title2">--- We work with you to deliver incredible results for you and your dog ---</h1> */}
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at ut autem eaque, nulla magnam quasi quod illum id quia.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem minus beatae veniam vero omnis ipsa deleniti enim, facilis incidunt rerum!</p> */}
                            </div>
                            <div className="containerr">
                                <div className="hello-grid">
                                    <div className="hello-card bg-card1">
                                        <div className="hello-text">
                                            <i className="fas fa-dog fa-2x"></i>
                                            <p className="title">Understand your dog(s)</p>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatum? Veritatis repellat sint at ad!</p>
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={dog3} alt=""/>
                                        </div>
                                    </div>
                                    <div className="hello-card bg-card2">
                                        <div className="hello-text">
                                            <i className="fas fa-paw fa-2x"></i>
                                            <p className="title">Grow your bond</p>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatum? Veritatis repellat sint at ad!</p>
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={dog4} alt=""/>
                                        </div>
                                    </div>
                                    <div className="hello-card bg-card1">
                                        <div className="hello-text">
                                            <i className="fas fa-bone fa-2x"></i>
                                            <p className="title">Enjoy long lasting results</p>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatum? Veritatis repellat sint at ad!</p>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae a omnis aperiam porro nisi veniam nobis blanditiis possimus eveniet?</p>
                                        <a href="/about" className="btn-primary">See More</a>
                                    </div>
                                </div>
                                <div className="home3-content">
                                    <img src={dog6} alt=""/>
                                    <div className="home-content-text">
                                        <h1>Our purpose</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae a omnis aperiam porro nisi veniam nobis blanditiis possimus eveniet?</p>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae a omnis aperiam porro nisi veniam nobis blanditiis possimus eveniet?</p>
                                        <a href="/meet" className="btn-primary">See More</a>
                                    </div>
        
                                </div>
                                <div className="home3-content ">
                                    <img src={dog} alt=""/>
                                    <div className="home-content-text">
                                        <h1>News</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae a omnis aperiam porro nisi veniam nobis blanditiis possimus eveniet?</p>
                                        <a href="#" className="btn-primary">See More</a>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                       
                    </section>
    
                        <section className="home2">
                                <div className="home2-content-card">
                                    <div className="card-text-wrapper box1">
                                        <h1 className="line1">Be more than a dog owner</h1>
                                        <h1 className="line2">Be a dog master</h1>
                                        <h1 className="line3">Benefit from a bespoke training</h1>
                                        <h1 className="line4">Start a new journey with your dog</h1>
                                        <div className="contact-box box-reveal">
                                            <a href="" className="btn-primary home2-btn">Click to book a free consultation</a>
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