import React from 'react';
import Media from 'react-media';
import Navbar from '../../components/Navbar/Navbar';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer/Footer';
import dog1 from '../../assets/VSA/educate.jpg';
import dog2 from '../../assets/VSA/engage.jpg';
import dog3 from '../../assets/VSA/empower.jpg';
import dogLogo from '../../assets/VSA/dog_science_white.png';
import training from '../../assets/VSA/pillars.png';
import '../../scss/What.scss';
 
const What = () => { 
    return (
        <div id="what-main">
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
            <main className="tp">  
                <section className="what-intro">
                    <div className="text-wrapper">
                        <h1>Positive Touch training</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit distinctio itaque veritatis placeat reprehenderit doloribus vel, fuga harum. Aliquid accusantium repellat ullam sit sed delectus veritatis natus error in!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta quia incidunt ducimus ullam quos quibusdam inventore similique facilis et.</p>
                    </div>
                    <div className="what-grid">
                        <div className="what-card">
                            <img src={dog1} alt=""/>
                            <h1 className="card-title">Educate</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam, aperiam quisquam inventore ut quo quam neque eveniet distinctio voluptatum?</p>
                        </div>
                        <div className="what-card">
                            <img src={dog2} alt=""/>
                            <h1 className="card-title">Engage</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam, aperiam quisquam inventore ut quo quam neque eveniet distinctio voluptatum?</p>
                        </div>
                        <div className="what-card">
                            <img src={dog3} alt=""/>
                            <h1 className="card-title">Empower</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam, aperiam quisquam inventore ut quo quam neque eveniet distinctio voluptatum?</p>
                        </div>
                    </div>
                </section>

                <section className="what-showcase">
                   <div className="showcase-container">
                       <h1 className="showcase-lead">Why Positive Training?</h1>
                        <div className="showcase-wrapper">
                           <img src={dogLogo} alt=""/>
                            <div className="showcase-content">
                               <h1>'Positive Training' is not a scientific term.</h1>
                               <p>It’s what we call a combination of philosophies, methods, and understandings which collectively define a progressive, science-based approach to dog training.</p>
                               <br/>
                               <p>There’s a great deal of ambiguity and misunderstanding regarding positive training, which results in confusion among pet owners, training professionals and the general public.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="what-training">
                    <div className="training-container">
                        <div className="training-text-wrapper">
                            <h1 className="training-lead">The 4 pillars of Positive Training:</h1>
                            <p>1. Use Positive Reinforcement</p>
                            <p>2. Avoid use of intimidation, physical punishment and fear</p>
                            <p>3. Understand misconceptions about dominance theory</p>
                            <p>4. Learn about the canine experience from the dog’s POV</p>
                        </div>
                        <img src={training} alt=""/>
                        <p className="training-contact">To find out more about our services, book a free consultation or simply discuss your situation with us, please get in touch.</p>
                   </div>
                </section>
            </main>
            <div className="what-footer">
                <Footer />
            </div>
        </div>
    )
};

export default What;