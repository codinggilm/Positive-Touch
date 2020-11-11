import React, {Component} from 'react';
// import '../../scss/Navbar3/Navbar3.scss';
// import logo from '../../assets/img/trans-logo.png';
// import Navbar from './components/Navbar';

class Navitem extends Component {
    constructor() {
        super() 

        this.state = { open: false }
    }
    
    setOpen = () => {
        this.setState({open: !this.state.open})
        console.log(this.state.open)
    }
    
    render() {
        return (
            <div>
                <li className="nav-item"><a href="#" onClick={this.setOpen}>{this.props.title}</a></li>
                { this.state.open ? 
                    this.props.children : null
                }
            </div>
        )
    }
}

export default Navitem;