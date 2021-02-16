import React from 'react';
import { Route } from 'react-router-dom';
import './scss/App.scss';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import PuppyServices from './containers/PuppyServices';
import AdultServices from './containers/AdultServices';
import What from './containers/What/What';
import Testimonials from './containers/Testimonials/Testimonials';
import Contact from './containers/Contact';
import Ellie3 from './containers/Ellie3';
 
const App = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/what" component={What} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/meet" component={Ellie3} />
            <Route path="/contact" component={Contact} />
            <Route path="/puppyservices" component={PuppyServices} />
            <Route path="/adultservices" component={AdultServices} />
        </div>
    )
};

export default App;