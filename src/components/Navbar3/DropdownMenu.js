import React, {Component} from 'react';
// import '../../scss/Navbar3/Navbar3.scss';
import '../../scss/Navbar.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Navbar from './components/Navbar';

const DropdownMenu = (props) => {

    // const DropdownItem = (props) => {
    //     return (
    //         <div>
    //             <li><a href="">{props.children}</a></li>
    //         </div>
    //     )
    // }

    return (
        <div className="dropdown" onMouseLeave={props.close}>
         {/* <div className={props.show}> */}
            <li><a href="https://positive-touch.netlify.app/puppyservices">For puppies</a></li>
            <li><a href="">For adults</a></li>
        </div>
    )
}

export default DropdownMenu;