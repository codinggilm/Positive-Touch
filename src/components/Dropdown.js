import React, {Component} from 'react';
import '../scss/Dropdown.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Navbar from './components/Navbar';

class Dropdown extends Component {

    state = {
        showMenu : true
    }

    render() {
        return (
            <div> 
                <div className="dropdown-container">
                    <ul className="dropdown-list">
                        <li><a href="#">Services</a></li>
                        {
                            this.state.showMenu ? 
                                <ul>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Services</a></li>
                                </ul>
                            : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
};

export default Dropdown;