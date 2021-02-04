import React, { Component } from 'react';
import Modal from '../Modal';   
import '../../scss/Footer.scss';
import darkLogo from '../../assets/img/logo-dark-trans.png';


 
class Footer extends Component {
  
    state = {
        visible: false,
        tablet: false
    }

    showModal = () => {
        this.setState({visible:!this.state.visible}) 
    }


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
                            <div className="leftcopy">
                                <p>Copyright &copy; Positive Touch  2020 - All Rights Reserved. </p>
                            </div>
                                <p id="rightcopy">Copyright &copy; ND Photography 2018 - All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="meta">
                            <hr/>
                            <p>Website made by <a href="https://www.github.co.uk">Guillaume Croizon</a></p>
                        </div>
                    </div> 
                    <div className="chat">
                        <div className="icon-wrapper" 
                            onClick={this.showModal}>
                            { !this.state.visible ? <i className="fas fa-comment fa-2x"></i>: <i className="far fa-times-circle fa-2x"></i> }
                        </div>
                    { 
                        this.state.visible ? 
                        <Modal 
                            show="slide-top" 
                            msg="slide-in-fwd-center"
                        /> 
                        : 
                        null
                    }
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;