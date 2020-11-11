import React, { Component } from 'react';
import Modal from '../Modal';   
import Modal2 from '../Modal2';   
import './Footer.scss';
import darkLogo from '../../assets/img/logo-dark-trans.png';


 
class Footer extends Component {

    state = {
        visible: false
        // removed: false
    }

    showModal = () => {
        this.setState({visible:!this.state.visible}) 
    }

    // removeModal = () => { Modal.show = "removed" }

    // fadeModal = () => { 
    //     return (
    //         <Modal show="slide-out-bottom"/>
    //     )
    // }
        
    // modalTimer = () => {
    //     this.fadeModal();
    //     // setTimeout(()=> this.removeModal(), 4000)
    // }
    // noModal = () => {
    //     return (
    //         <Modal show="slide-out-bottom"/>,
    //         setTimeout(()=> this.removeModal(), 4000)

    //     )
    // }


    render() { 
        return (
            <div id="footer">
                <div className="container footer-flex">
                    <div className="footer-container">
                        <div className="footer-main">
                            <div className="footer-links">
                                <img src={darkLogo} alt=""/>
                                <div className="social">
                                    <a href="https://www.facebook.com/PositiveTouchUK"><i className="fab fa-facebook fa-2x"></i></a>
                                    <a href="https://twitter.com/positive__touch"><i className="fab fa-twitter fa-2x"></i></a>
                                    <a href="https://twitter.com/positive__touch"><i className="fab fa-whatsapp fa-2x"></i></a>
                                </div>
                            </div>
                            <div className="copy">
                                <p>Copyright &copy; Positive Touch  2020 - All Rights Reserved. || Copyright &copy; ND Photography 2018 - All Rights Reserved.</p>
                        
                            </div>
                        </div>
                        <div className="meta">
                            <hr/>
                            <p>Website made by <a href="https://www.github.co.uk">Guillaume Croizon</a></p>
                        </div>
                    </div> 
                    {/* <Modal /> */}
                    <div className="chat">
                        <div className="icon-wrapper" 
                            onClick={this.showModal}>
                            { !this.state.visible ? <i className="fas fa-comment fa-2x"></i>: <i className="far fa-times-circle fa-2x"></i> }
                        </div>
                    {/* { this.state.visible ? <Modal /> : null } */}
                    { this.state.visible ? 
                        <Modal show="slide-top" 
                                msg="slide-in-fwd-center"/> : null
                        
                    }
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;