import React, {Component} from 'react';
import '../../scss/Navbar3/Navbar3.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Navbar from './components/Navbar';

const Navbar3 = (props) => { 
    return (
        // <div>
        //     <nav className="navbar">
        //         <ul className="navbar-nav">
        //             {props.children}
        //         </ul>
        //     </nav>
        // </div>
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    {props.children}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar3;