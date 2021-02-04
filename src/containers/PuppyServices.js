import React from 'react';
import Media from 'react-media';
import Navbar from '../components/Navbar/Navbar';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer/Footer';
import '../scss/PuppyServices.scss';
import puppy from '../assets/img/puppy1.jpg'
 
const PuppyServices = () => {
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
                    <div className="puppy-banner">
                        <div className="puppy-container">
                            <div className="puppy-content-text">
                                <h1 className="title-reveal">Puppy Training</h1>
                                <p>Helping you to help your puppy</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="puppy-intro">
                    <h2>Puppy Consultation</h2>
                    <h1>Consulation to help you and your puppy</h1>
                    <p>If you have a puppy and want the best approach from the start, this is prerfect for your needs.</p>
                </section>

                <section className="puppy-showcase">
                        <div className="puppy-showcase-grid">
                            <img src={puppy} alt=""/>
                            <div className="puppy-showcase-content">
                                <h1>Puppy Consulation</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolorum quia placeat dolore esse iste, in ut nulla at inventore consequuntur quas mollitia dignissimos vero commodi quae omnis maxime molestias! Ratione numquam illum totam beatae, repudiandae non repellat culpa officia vero incidunt eaque fugiat similique, praesentium, ab eius aliquam. Neque.</p>
                                <a href="/" className="btn-primary">See more</a>
                            </div>
                        </div>
                </section>

                <section className="puppy-services">
                    <h1 className="puppy-services-title">The service is a one off fee of 200£ and includes:</h1>
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

                <section className="puppy-notes">
                    <h2>Please note</h2>
                    <p>The puppy consultations are for puppies up to 6 months with minor behaviours e.g. separation anxiety, toileting, puppy biting, pulling on the lead etc. If you are experiencing more severe behaviour, a standard consultation will better suit your requirements.</p>
                    <hr className= "breakline"/>
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

export default PuppyServices;