import React, {Component} from 'react';
import '../scss/Navbar2.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Navbar from './components/Navbar';

class Navbar2 extends Component {
    constructor() {
        super()

        this.state = {
            open : false
        }
    }

    setOpen = () => {
        // this.setState({open: !this.state.open})
        this.setState({open: !this.state.open})
        console.log(this.state.open)
    }

    render() {

        const showDropdown = this.state.open ? "display-block" : "display-none";

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
                        <li><a  onClick={this.setOpen}>Services</a></li>
                        <li className={showDropdown}><a>HELLOOOO</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Navbar2;