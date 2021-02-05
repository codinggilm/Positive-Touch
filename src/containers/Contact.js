import React from 'react';
import Media from 'react-media';
import MobileNav from '../components/MobileNav';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../scss/Contact.scss';
import logo from '../assets/img/logo-white-trans.png';

 
const Contact = () => {
    return (
        <div id="contact-page">   
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
            <main id="contact-main" className="tp">
                <img src={logo} alt=""/>
                <div id="form-container">
                    <div className="form-wrap">
                        <p>Send us a quick message below!</p>
                        <form>
                            <div className="form-group">
                                <input type="text" className="input-field" name="Name" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="input-field" name="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-field" name="contact number" placeholder="Contact number"/>
                            </div>
                            <div className="message-field">
                                <textarea name="" id="" placeholder="Enter Message"></textarea>
                            </div>
                            <button className="btn-contact" type="submit">Send</button>
                            <div className="form-meta">
                                <p>This site is protected by reCAPTCHA and the Google  <span><a href="https://policies.google.com/privacy">Privacy Policy</a></span> and <span><a href="https://policies.google.com/terms">Terms of Service</a></span> apply.</p>
                            </div>
                        </form>
                    </div>
                </div> 
            </main>
            
            <div className="sticky-footer">
                <Footer/>
            </div>

            
        </div>
    )
};

export default Contact;