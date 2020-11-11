import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import Footer2 from '../../components/Footer/Footer2/Footer2';
import Footer from '../../components/Footer/Footer';
import dog from '../../assets/img/dog25.jpg';
import dog2 from '../../assets/img/dog30.jpg';

import '../../scss/About.scss';
 
const About = () => {
    return (
        <div id="about-main">
           <Navbar />
           <section id="about-us">
           <div className="about-section tp">
               <aside>
                <img src={dog2} alt=""/>
               </aside>
               <div className="about-container">
                {/* <img src={dog} alt=""/> */}
                   <div className="about-text">
                        <h1>About us</h1>
                        <p>There's much to see here. So, take your time, look around, and learn all there is to know about us.</p>
                        <br/>
                        <p>We hope you enjoy our site and take a moment to drop us a line.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at illum quibusdam impedit perspiciatis officiis doloribus dolorum atque distinctio. Corporis, numquam ipsum id, voluptatum pariatur a nobis quisquam voluptas voluptates incidunt optio.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quo debitis, ex deleniti, laboriosam maiores unde distinctio aut numquam, nostrum veritatis nesciunt adipisci. Reiciendis voluptate optio veritatis nisi maxime itaque.</p>
                        <br/>
                        <p>Quia placeat quidem necessitatibus vero reprehenderit sunt est aspernatur enim nesciunt! Id asperiores quaerat doloribus pariatur, optio nihil, fugiat facilis odit velit beatae cum temporibus quae porro quos harum.</p>
                   </div>
                    <div className="about-btn">
                        <a href="/home" className="btn-primary">See our services</a>
                    </div>
               </div>
           </div>
           </section>
           <div className="about-footer">
            <Footer />
           </div>
        </div>
    )
};

export default About;