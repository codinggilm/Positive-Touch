import React, {Component} from 'react';
import DropdownMenu from './DropdownMenu';
import '../../scss/Navbar3/Navbar3.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Navbar from './components/Navbar';

class Navbar4 extends Component {
    
    state = { open: false }
    
    
    setOpen = () => {
        this.setState({open: !this.state.open})
        console.log(this.state.open)
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li><a href="/" className="current" >Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/what">What we do</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>
                        <li><a href="/meet">Meet Ellie</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <ul><a  onMouseOver={this.setOpen}>Services</a>
                            { this.state.open ? 
                                <DropdownMenu closeDropdown={this.setOpen} /> 
                                : null 
                            }
                        </ul>
                    </ul>
                </nav>
            </div>
        )

    }
}

export default Navbar4;