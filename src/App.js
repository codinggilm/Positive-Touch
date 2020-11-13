import React from 'react';
import { Route } from 'react-router-dom';
import './scss/App.scss';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Review from './components/Review';
import Gallery from './components/Gallery';
import FullGallery from './components/FullGallery';
import PuppyServices from './containers/PuppyServices';
import Navbar3 from './components/Navbar3/Navbar3';

import What from './containers/What/What';
import Testimonials from './containers/Testimonials/Testimonials';
// import Ellie from './containers/Ellie/Ellie';
import Contact from './containers/Contact';
// import Modal from './components/Modal';
// import Ellie2 from './containers/Ellie2/Ellie2';
import Ellie3 from './containers/Ellie3';
import Compo from './containers/Compo';
// import Contact from './containers/Contact/Contact';
 
const App = () => {
    return (
        <div>
            {/* <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/what" component={What} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/meet" component={Ellie3} />
            <Route path="/contact" component={Contact} />
            <Route path="/puppyservices" component={PuppyServices} />
            <Route path="/compo" component={Compo} /> */}

            {/* **** NETLIFY LINKS **** */}
            <Route path="https://positive-touch.netlify.app" exact component={Home} />
            <Route path="https://positive-touch.netlify.app/about" component={About} />
            <Route path="https://positive-touch.netlify.app/what" component={What} />
            <Route path="https://positive-touch.netlify.app/testimonials" component={Testimonials} />
            <Route path="https://positive-touch.netlify.app/meet" component={Ellie3} />
            <Route path="https://positive-touch.netlify.app/contact" component={Contact} />
            <Route path="https://positive-touch.netlify.app/puppyservices" component={PuppyServices} />
            <Route path="https://positive-touch.netlify.app/compo" component={Compo} />

        </div>
    )
};

export default App;