import React from 'react';
import './Footer2.scss';
import darkLogo from '../../../assets/img/logo-dark-trans.png';


const Footer2 = () => {
    return (
        <div id="sticky-footer">
            <div className="container sticky-footer-container">
                <div className="main-sticky-footer">
                    <img src={darkLogo} alt=""/>
                    <div className="copy">
                        <p>Copyright &copy; Positive Touch  2020 - All Rights Reserved.</p>
                        {/* <br/> */}
                        <p>Copyright &copy; ND Photography 2018 - All Rights Reserved.</p>
                    </div>
                </div>
                <div className="meta">
                    <hr/>
                    <p>Website made by <a href="https://www.github.co.uk">Guillaume Croizon</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer2;