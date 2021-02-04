import React from 'react';
import Media from 'react-media';
import Navbar from '../components/Navbar/Navbar';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer/Footer';
import '../scss/AdultServices.scss';
import dog from '../assets/img/dog43.jpg'
 
const AdultServices = () => {
    return (
        <div>
            <Media query="(max-width: 599px)" render={() =>
                (
                    <MobileNav />
                )}
            />
            <Media query="(min-width: 599px)" render={() =>
                (
                    <Navbar />
                )}
            />
            <main className="services-main tp">
                <section>
                    <div className="adult-banner">
                        <div className="adult-container">
                            <div className="adult-content-text">
                                <h1 className="title-reveal">Adult Training</h1>
                                <p>Improving your dog's life and your own</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="adult-intro">
                    <h2>Adult Consultation</h2>
                    <h1>Consulation to help you and your dog</h1>
                    <p>If your dog has any undesirable behaviours that you need help with, we will assist you.</p>
                </section>

                <section className="adult-showcase">
                        <div className="adult-showcase-grid">
                            <img src={dog} alt=""/>
                            <div className="adult-showcase-content">
                                <h1>Adult Consulation</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolorum quia placeat dolore esse iste, in ut nulla at inventore consequuntur quas mollitia dignissimos vero commodi quae omnis maxime molestias! Ratione numquam illum totam beatae, repudiandae non repellat culpa officia vero incidunt eaque fugiat similique, praesentium, ab eius aliquam. Neque.</p>
                                <a href="/" className="btn-primary">See more</a>
                            </div>
                        </div>
                </section>

                <section className="adult-services">
                    <h1 className="adult-services-title">The service is a one off fee of 200£ and includes:</h1>
                    <div className="action-grid">
                        <div className="column">
                            <ul>
                                <li><i class="fas fa-check-square"></i>Aggression</li>
                                <li><i class="fas fa-check-square"></i>Pulling on the lead</li>
                                <li><i class="fas fa-check-square"></i>Constant barking</li>
                            </ul>
                        </div>
                        <div className="column column2">
                            <ul>
                                <li><i class="fas fa-check-square"></i>Jumping</li>
                                <li><i class="fas fa-check-square"></i>Persistent</li>
                                <li><i class="fas fa-check-square"></i>Running away</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="contact-banner">
                        <div className="contact-container">
                            <div className="contact-content-text">
                                <h1 className="title-reveal">Positive Touch</h1>
                                <p><i class="fas fa-phone"></i>07925 803 570</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


            <div>
                <Footer />
            </div>
        </div>
    )
};

export default AdultServices;