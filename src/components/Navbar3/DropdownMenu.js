import React, {Component} from 'react';
import '../../scss/Navbar.scss';


const DropdownMenu = (props) => {
    return (
        <div className="dropdown" onMouseLeave={props.close}>
            <li><a href="/puppyservices">For puppies</a></li>
            <li><a href="/adultservices">For adults</a></li>
        </div>
    )
}

export default DropdownMenu;