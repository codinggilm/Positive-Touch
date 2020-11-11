import React from 'react';
// import simpleParallax from 'simple-parallax-js';
import Navbar from '../components/Navbar/Navbar';
// import Footer2 from '../../components/Footer/Footer2/Footer2';
import Footer from '../components/Footer/Footer';
import '../scss/Contact.scss';
import logo from '../assets/img/logo-white-trans.png';
// import vic2 from '../../assets/victoria/vic2.jpg';
// import ellie1 from '../../assets/ellie/ellie1.png';
// import dog1 from '../../assets/img/dog7.png';
 
const Contact = () => {
    return (
        <div>   
            <Navbar />
            <main id="contact-main" className="tp">
            <img src={logo} alt=""/>
                <div id="form-container">
                    <div className="form-wrap">
                        <p>Send us a quick message below!</p>
                        <form>
                            <div className="form-group">
                                {/* <label htmlFor="Name">Name</label> */}
                                {/* <div className="input-field"> */}
                                    <input type="text" className="input-field" name="Name" placeholder="Name"/>
                                {/* </div> */}
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="Email">Email</label> */}
                                <input type="email" className="input-field" name="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="contact number">Contact Number</label> */}
                                <input type="text" className="input-field" name="contact number" placeholder="Contact number"/>
                            </div>
                            <div className="message-field">
                                {/* <label htmlFor="Message">Email</label> */}
                                <textarea name="" id="" placeholder="Enter Message"></textarea>
                            </div>
                            <button className="btn-contact" type="submit">Send</button>
                            <div className="form-meta">
                                <p>This site is protected by reCAPTCHA and the Google  <span><a href="https://policies.google.com/privacy">Privacy Policy</a></span> and <span><a href="https://policies.google.com/terms">Terms of Service</a></span> apply.</p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* <div className="contact-content">
                    <p>You can call Ellie today or send a quick email to ellie@positivetouch.online</p>
                    <p>Positive Touch</p>
                    <p>Polegate, East Sussex, England, United Kingdom</p>
                    <a href="">07925803570</a>

                </div> */}

            </main>
            
            <div className="contact-footer">
                <Footer/>
            </div>

            
        </div>
    )
};

export default Contact;