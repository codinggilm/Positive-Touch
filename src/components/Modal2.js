import React from 'react';
import '../scss/Modal.scss';
// import Navbar from '../components/Navbar/Navbar';
 
const Modal2 = () => {
    return ( 
        <div>  
        {/* <Navbar /> */} 
            <main id="modal-main" className="slide-out-bottom">
                <div id="form-container">
                    <div className="modal-wrap">
                        <div className="modal-header">
                            <p className="modal-lead">Positive Touch</p>
                        </div>
                        <div className="msg-box slide-in-fwd-center">
                            <div className="msg-content">
                                <p>Hi! Let us know how we can help and we’ll respond shortly.</p>
                            </div>
                            <svg><path d="M 0.342304 14.5 C 7.35025 6.3293 3.35025 0.829295 0 0 C 0 0 5.4 2.1 32.3502 0.329295 C 32.3503 3.8293 -3.13481 20.7261 0.342304 14.5 Z"/></svg>
                            
                        </div>
                        <form>
                            <div className="form-group">
                                    <input type="text" className="input-field" name="Name" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="input-field" name="email" placeholder="Email"/>
                            </div>
                           
                            <div className="message-field">
                                <textarea name="" id="" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="btn-modal" type="submit">Send</button>
                            <div className="form-meta">
                                <p>This site is protected by reCAPTCHA and the Google  <span><a href="https://policies.google.com/privacy">Privacy Policy</a></span> and <span><a href="https://policies.google.com/terms">Terms of Service</a></span> apply.</p>
                            </div>
                        </form>
                    </div>
                </div>


            </main>
        </div>
    )
};

export default Modal2;