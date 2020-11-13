import React, { Component } from 'react';
import DropdownMenu from '../Navbar3/DropdownMenu';
import '../../scss/Navbar.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Dropdown from './components/Dropdown';
 
class Navbar extends Component {
    
    state = { 
        open: false,
        showDropdown: false 
    
    }
    
    
    // setOpen = () => {
    //     this.setState({open: true, showDropdown: true}) 
    //     console.log(this.state.open)
    // }

    toggleDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }

    openDropdown = () => {
        this.setState({showDropdown: true})
    }

    closeDropdown = () => {
        this.setState({showDropdown: false})
    }

    // setClose = () => {
    //   this.setState({open: false, showDropdown: false}) 
        
    // }

    render() {

        const showMenu = this.state.showDropdown ? "display-block" : "display-none";

        return (
            <div> 
                <nav id="main-nav">
                    <div className="container-nav">
                        <ul>
                            <li><a href="/" className="current" >Home</a></li>
                            <li><a href="https://positive-touch.netlify.app/about">About Us</a></li>
                            <li><a href="https://positive-touch.netlify.app/what">What we do</a></li>
                            {/* <img src={logo} alt=""/> */}
                            <li><a href="https://positive-touch.netlify.app/testimonials">Testimonials</a></li>
                            <li><a href="https://positive-touch.netlify.app/meet">Meet Ellie</a></li>
                            {/* <li><a href="#gallery">Gallery</a></li> */}
                            <li><a href="https://positive-touch.netlify.app/contact">Contact</a></li>
                            {/* <li><a href="/compo">Compo</a></li> */}
                            <ul className="nav-item" 
                            // onMouseEnter={this.openDropdown}
                            // onMouseLeave={this.closeDropdown}
                            // onMouseOver={this.toggleDropdown}
                            >
                            <a 
                            // onMouseLeave={this.closeDropdown}
                            >Services</a>
                            <DropdownMenu />
                            </ul>
                            {/* { this.state.open && this.state.showDropdown ? 
                                <DropdownMenu close={this.closeDropdown}/> 
                                : null 
                            } */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar;