import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import '../../scss/Navbar.scss';

 
class Navbar extends Component {
     
    state = { 
        open: false,
        showDropdown: false 
    
    }
    

    toggleDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }

    openDropdown = () => {
        this.setState({showDropdown: true})
    }

    closeDropdown = () => {
        this.setState({showDropdown: false})
    }


    render() {

        // const showMenu = this.state.showDropdown ? "display-block" : "display-none";

        return (
            <div> 
                <nav id="main-nav">
                    <div className="container-nav">
                        <ul>
                            <li><a href="/" className="current" >Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/what">What we do</a></li>
                            <ul className="nav-item">
                                <a href="/">Services</a>
                                <DropdownMenu />
                            </ul>
                            <li><a href="/meet">Meet Ellie</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar;